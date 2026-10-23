// The 3D map of Denizli: real district borders (OpenStreetMap via geoBoundaries) laid on the real relief
// (AWS Terrain Tiles), with one column per district whose height is the sample rank. Loaded on demand.
import * as THREE from 'three';
import MAP from '../data/denizli-map.json';
import { rankText } from './rank';

type Pt = [number, number];
const [X0, Z0, X1, Z1] = MAP.bounds as [number, number, number, number];
const WX = X1 - X0, WZ = Z1 - Z0, CX = (X0 + X1) / 2, CZ = (Z0 + Z1) / 2;
const EXAG = 3.2;                                   // vertical exaggeration, so the mountains read
const RELIEF = ((MAP.height.max - MAP.height.min) / 1000) * EXAG;
const BASE = 2.5;                                   // thickness of the block under the lowest point, km

const DEBUG = location.hash.startsWith('#map-');
const css = (name: string, fallback: string) => getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;

function pip(x: number, z: number, ring: Pt[]) {
  let c = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xa, za] = ring[i], [xb, zb] = ring[j];
    if (za > z !== zb > z && x < ((xb - xa) * (z - za)) / (zb - za) + xa) c = !c;
  }
  return c;
}

export interface MapOptions {
  canvas: HTMLCanvasElement;
  labels: HTMLElement;
  reduced: boolean;
  phone: boolean;
  onPick?: (district: string) => void;
}

export async function createMap(o: MapOptions) {
  // ---- heights ----
  const img = new Image();
  // resolved from this module's own address, so the map works from any page depth
  img.src = import.meta.env.DEV ? MAP.height.image : new URL('..' + MAP.height.image, import.meta.url).href;
  await img.decode();
  const hc = document.createElement('canvas');
  hc.width = img.naturalWidth; hc.height = img.naturalHeight;
  const hx = hc.getContext('2d', { willReadFrequently: true })!;
  hx.drawImage(img, 0, 0);
  const H = hx.getImageData(0, 0, hc.width, hc.height).data;
  const HW = hc.width, HH = hc.height;
  const sample = (x: number, z: number) => {
    const u = Math.min(HW - 1.001, Math.max(0, ((x - X0) / WX) * HW - 0.5));
    const v = Math.min(HH - 1.001, Math.max(0, ((z - Z0) / WZ) * HH - 0.5));
    const i = Math.floor(u), j = Math.floor(v), fu = u - i, fv = v - j;
    const at = (a: number, b: number) => H[(b * HW + a) * 4] / 255;
    const n = at(i, j) * (1 - fu) * (1 - fv) + at(i + 1, j) * fu * (1 - fv) + at(i, j + 1) * (1 - fu) * fv + at(i + 1, j + 1) * fu * fv;
    return n * RELIEF;
  };

  // ---- renderer, scene, camera ----
  const renderer = new THREE.WebGLRenderer({ canvas: o.canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, o.phone ? 1.5 : 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 1, 2000);
  scene.add(new THREE.HemisphereLight(0xdfe6f3, 0x0a0d14, 1.1));
  const sun = new THREE.DirectionalLight(0xffffff, 2.4);
  sun.position.set(-120, 160, -70);
  scene.add(sun);

  // ---- the land: a relief sheet cut to the province by its texture ----
  const seg = o.phone ? [120, 156] : [210, 273];
  const geo = new THREE.PlaneGeometry(WX, WZ, seg[0], seg[1]);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < pos.count; i++) pos.setY(i, sample(pos.getX(i) + CX, pos.getZ(i) + CZ));
  geo.computeVertexNormals();

  const TW = o.phone ? 1024 : 2048, TH = Math.round((TW * WZ) / WX);
  const tc = document.createElement('canvas');
  tc.width = TW; tc.height = TH;
  const tx = tc.getContext('2d')!;
  const tex = new THREE.CanvasTexture(tc);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const toT = (p: number[]) => [((p[0] - X0) / WX) * TW, ((p[1] - Z0) / WZ) * TH] as const;
  const colours = {
    land: css('--map-land', '#1f2738'),
    home: css('--map-home', '#33415c'),
    border: css('--map-border', '#4a5874'),
    wall: css('--map-wall', '#121722'),
    top: css('--accent', '#5a9bfc'),
    mid: css('--map-mid', '#7d8aa3'),
    low: css('--map-low', '#3a4559'),
  };
  let home = 'Merkezefendi';
  const paint = () => {
    tx.clearRect(0, 0, TW, TH);
    tx.lineJoin = 'round';
    for (const d of MAP.districts) {
      tx.beginPath();
      d.ring.forEach((p, i) => { const [a, b] = toT(p); i ? tx.lineTo(a, b) : tx.moveTo(a, b); });
      tx.closePath();
      tx.fillStyle = d.name === home ? colours.home : colours.land;
      tx.fill();
    }
    tx.strokeStyle = colours.border;
    tx.lineWidth = TW / 900;
    for (const d of MAP.districts) {
      tx.beginPath();
      d.ring.forEach((p, i) => { const [a, b] = toT(p); i ? tx.lineTo(a, b) : tx.moveTo(a, b); });
      tx.closePath();
      tx.stroke();
    }
    tex.needsUpdate = true;
  };
  paint();
  const land = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ map: tex, alphaTest: 0.5, roughness: 0.92, metalness: 0 }));
  land.position.set(0, 0, 0);
  scene.add(land);

  // the cut edge of the block, following the province outline
  const ring = MAP.outline as Pt[];
  const edge: Pt[] = [];
  for (let i = 0; i < ring.length; i++) {
    const a = ring[i], b = ring[(i + 1) % ring.length];
    const n = Math.max(1, Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / 0.5));
    for (let k = 0; k < n; k++) edge.push([a[0] + ((b[0] - a[0]) * k) / n, a[1] + ((b[1] - a[1]) * k) / n]);
  }
  const wp: number[] = [], wi: number[] = [];
  edge.forEach(([x, z], k) => {
    wp.push(x - CX, sample(x, z), z - CZ, x - CX, -BASE, z - CZ);
    const a = k * 2, b = ((k + 1) % edge.length) * 2;
    wi.push(a, a + 1, b, b, a + 1, b + 1);
  });
  const wg = new THREE.BufferGeometry();
  wg.setAttribute('position', new THREE.Float32BufferAttribute(wp, 3));
  wg.setIndex(wi);
  wg.computeVertexNormals();
  scene.add(new THREE.Mesh(wg, new THREE.MeshStandardMaterial({ color: colours.wall, roughness: 1, side: THREE.DoubleSide })));

  // ---- columns ----
  const box = new THREE.BoxGeometry(4.2, 1, 4.2);
  box.translate(0, 0.5, 0);
  const cTop = new THREE.Color(colours.top), cMid = new THREE.Color(colours.mid), cLow = new THREE.Color(colours.low);
  const colourOf = (r: number) => (r <= 3 ? cTop : r <= 10 ? cMid : cLow);
  const heightOf = (r: number) => 1.5 + ((20 - Math.min(r, 20)) / 19) * 32;
  const cols = MAP.districts.map((d) => {
    const [x, z] = d.label;
    const mat = new THREE.MeshStandardMaterial({ color: cLow.clone(), roughness: 0.6 });
    const m = new THREE.Mesh(box, mat);
    const y = sample(x, z);
    m.position.set(x - CX, y, z - CZ);
    m.scale.y = 0.01;
    scene.add(m);
    const el = document.createElement('span');
    el.className = 'mapl';
    el.innerHTML = `<b></b><span>${d.name}</span>`;
    o.labels.appendChild(el);
    return { name: d.name, m, mat, el, rank: 20, h: 0.01, target: heightOf(20), colour: cLow.clone(), x: x - CX, y, z: z - CZ, sx: 0, sy: 0, on: true, w: 26 };
  });
  const byName = Object.fromEntries(cols.map((c) => [c.name, c]));
  let order = [...cols];

  // ---- camera rig ----
  const REST = new THREE.Vector3(0, 0, o.phone ? -26 : -14);
  const focus = REST.clone(), focusTo = REST.clone();
  let dist = 400, distTo = 400, zoom = 1, zoomTo = 1;
  let azim = -0.32, polar = 0.98, drag = 0, dragTo = 0, progress = 0;
  if (location.hash === '#map-top') { azim = 0; polar = 0.001; }
  const fit = () => {
    const a = camera.aspect, v = THREE.MathUtils.degToRad(camera.fov);
    const hf = 2 * Math.atan(Math.tan(v / 2) * a);
    const r = o.phone ? 92 : 76;
    distTo = r / Math.sin(Math.min(v, hf) / 2);
  };
  const resize = () => {
    const p = o.canvas.parentElement!;
    const w = p.clientWidth, h = p.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    fit();
  };
  const ro = new ResizeObserver(resize);
  ro.observe(o.canvas.parentElement!);
  resize();
  dist = o.reduced ? distTo : distTo * 1.45; // the first view arrives from farther away

  // ---- input: drag to turn (mouse), click or tap to pick a district ----
  let down: { x: number; y: number; d: number } | null = null;
  o.canvas.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY, d: dragTo }; if (e.pointerType === 'mouse') o.canvas.setPointerCapture(e.pointerId); });
  o.canvas.addEventListener('pointermove', (e) => { if (down && e.pointerType === 'mouse') dragTo = Math.max(-0.9, Math.min(0.9, down.d + (e.clientX - down.x) / 300)); });
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  o.canvas.addEventListener('pointerup', (e) => {
    const moved = down ? Math.hypot(e.clientX - down.x, e.clientY - down.y) : 99;
    down = null;
    if (moved > 6 || !o.onPick) return;
    const r = o.canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObject(land)[0];
    if (!hit) return;
    const x = hit.point.x + CX, z = hit.point.z + CZ;
    const d = MAP.districts.find((q) => pip(x, z, q.ring as Pt[]));
    if (d) o.onPick(d.name);
  });

  // ---- loop ----
  let visible = true, raf = 0, last = performance.now(), t = 0;
  const v3 = new THREE.Vector3();
  const frame = (now: number) => {
    raf = 0;
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    t += dt;
    const k = o.reduced ? 1 : 1 - Math.exp(-dt * 5);
    focus.lerp(focusTo, k);
    dist += (distTo - dist) * k;
    zoom += (zoomTo - zoom) * k;
    drag += (dragTo - drag) * k;
    const idle = o.reduced ? 0 : Math.sin(t * 0.18) * 0.06;
    const az = azim + progress * 0.55 + drag + idle;
    const po = polar - progress * 0.12;
    const R = dist * zoom * (1 + progress * 0.1);
    const fz = focus.z - progress * 14; // tall columns at the end of the story need headroom
    camera.position.set(focus.x + R * Math.sin(po) * Math.sin(az), focus.y + R * Math.cos(po), fz + R * Math.sin(po) * Math.cos(az));
    camera.lookAt(focus.x, focus.y, fz);
    camera.updateMatrixWorld();
    const w = o.canvas.clientWidth, h = o.canvas.clientHeight;
    let moving = Math.abs(distTo - dist) > 0.05 || focus.distanceTo(focusTo) > 0.05 || Math.abs(zoomTo - zoom) > 0.001 || Math.abs(dragTo - drag) > 0.001 || !o.reduced;
    for (const c of cols) {
      c.h += (c.target - c.h) * (o.reduced ? 1 : 1 - Math.exp(-dt * 4));
      c.m.scale.y = Math.max(0.01, c.h);
      c.mat.color.lerp(c.colour, o.reduced ? 1 : 1 - Math.exp(-dt * 6));
      if (Math.abs(c.target - c.h) > 0.01) moving = true;
      v3.set(c.x, c.y + c.h + 1.2, c.z).project(camera);
      c.sx = (v3.x * 0.5 + 0.5) * w; c.sy = (-v3.y * 0.5 + 0.5) * h; c.on = v3.z < 1;
    }
    // labels: the home district first, then the best ranks; a label that would overlap one already placed waits
    const placed: number[][] = [];
    for (const c of order) {
      const r = [c.sx - c.w / 2 - 3, c.sy - 30, c.sx + c.w / 2 + 3, c.sy];
      const free = c.on && !placed.some((p) => r[0] < p[2] && r[2] > p[0] && r[1] < p[3] && r[3] > p[1]);
      if (free) placed.push(r);
      c.el.style.transform = `translate3d(${c.sx.toFixed(1)}px, ${c.sy.toFixed(1)}px, 0) translate(-50%, -100%)`;
      c.el.style.visibility = free ? 'visible' : 'hidden';
    }
    renderer.render(scene, camera);
    if (DEBUG) (window as any).__mapFrames = ((window as any).__mapFrames || 0) + 1;
    if (visible && moving) raf = requestAnimationFrame(frame);
  };
  const kick = () => { if (!raf && visible) { last = performance.now(); raf = requestAnimationFrame(frame); } };
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; kick(); });
  io.observe(o.canvas);
  kick();

  return {
    setRanks(r: Record<string, number>, district: string) {
      if (district !== home) { home = district; paint(); }
      for (const c of cols) {
        const n = r[c.name] ?? 20;
        c.rank = n;
        c.target = heightOf(n);
        c.colour = colourOf(n).clone();
        c.el.querySelector('b')!.textContent = rankText(n);
        c.el.dataset.tier = n <= 3 ? 'top' : n <= 10 ? 'mid' : 'low';
        c.el.classList.toggle('is-home', c.name === district);
      }
      for (const c of cols) c.w = c.el.offsetWidth || 26;
      order = [...cols].sort((a, b) => (b.name === home ? 1 : 0) - (a.name === home ? 1 : 0) || a.rank - b.rank);
      kick();
    },
    focusOn(district: string | null, closeness = 0.62) {
      const c = district ? byName[district] : null;
      if (c) { focusTo.set(c.x * 0.6, 0, c.z * 0.6 + REST.z * 0.4); zoomTo = closeness; } else { focusTo.copy(REST); zoomTo = 1; }
      kick();
    },
    setProgress(p: number) { progress = Math.max(0, Math.min(1, p)); kick(); },
    // a place instead of a ranking: one column on one district, its label carrying a word
    placeMode(district: string, badge: string) {
      if (district !== home) { home = district; paint(); }
      for (const c of cols) {
        const on = c.name === district;
        c.target = on ? 18 : 0.01;
        c.colour = (on ? cTop : cLow).clone();
        c.rank = on ? 0 : 99;
        c.el.querySelector('b')!.textContent = on ? badge : '';
        c.el.classList.toggle('is-home', on);
        c.el.hidden = !on;
        c.m.visible = on;
      }
      for (const c of cols) c.w = c.el.offsetWidth || 26;
      order = [...cols].sort((a, b) => a.rank - b.rank);
      kick();
    },
    dispose() { cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); renderer.dispose(); },
  };
}

export type DenizliMap = Awaited<ReturnType<typeof createMap>>;
