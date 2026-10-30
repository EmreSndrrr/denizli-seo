// The 3D stage behind the home page: a chrome magnifier whose glass shows the search result it
// magnifies, rank tags that orbit it, and a link graph (the backlink web) with light pulses running
// along its links and dust that steps away from the pointer.
import * as THREE from 'three';
import { clamp, smooth } from './util';
import type { StageState } from './choreo';

export interface Stage {
  render(st: StageState, t: number, paper: number, ptr: { x: number; y: number }, calm: boolean): void;
  resize(): void;
  setQuery(q: string, title: string): void;
}

const YELLOW = 0xeedc45, BLUE = 0x7e97ff, DEEP = 0x2c46c8;

/* ---------- small helpers ---------- */
function dotTexture(inner: string, outer: string) {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d')!;
  const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, inner);
  gr.addColorStop(0.35, outer);
  gr.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = gr;
  g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function buildEnv(r: THREE.WebGLRenderer) {
  const env = new THREE.Scene();
  env.background = new THREE.Color(0x07090d);
  const panel = (w: number, h: number, hex: number, k: number, p: [number, number, number]) => {
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(hex).multiplyScalar(k), side: THREE.DoubleSide, toneMapped: false }));
    mesh.position.set(p[0], p[1], p[2]);
    mesh.lookAt(0, 0, 0);
    env.add(mesh);
  };
  panel(12, 2.4, 0xfbfaf6, 3.2, [0, 6.5, 2]);
  panel(2.6, 10, BLUE, 2.4, [-6.5, 0, 1.5]);
  panel(2.2, 8, YELLOW, 1.7, [6.5, 1, -1]);
  panel(9, 1.1, 0xfbfaf6, 2.2, [0, -1.8, 6.5]);
  panel(14, 3, DEEP, 0.7, [0, -6.5, -1]);
  const pm = new THREE.PMREMGenerator(r);
  const tex = pm.fromScene(env, 0.02).texture;
  pm.dispose();
  return tex;
}

/* ---------- shaders: dust, link nodes, pulses ---------- */
const POINT_VERT = /* glsl */ `
uniform float uTime; uniform float uSize; uniform float uScale;
uniform vec2 uPtr; uniform vec2 uHalf; uniform float uCamZ; uniform float uPush;
attribute float aSeed;
varying float vTw;
void main() {
  vec3 p = position;
  float s = aSeed;
  p.x += sin(uTime * 0.15 + s * 6.2831) * 0.12;
  p.y += cos(uTime * 0.12 + s * 12.566) * 0.10;
  // the pointer, as a point on the plane at this depth; dust steps away from it
  vec2 ptr = uPtr * uHalf * ((uCamZ - p.z) / max(1.0, uCamZ));
  vec2 d = p.xy - ptr;
  float push = smoothstep(2.4, 0.0, length(d)) * uPush;
  p.xy += normalize(d + vec2(1e-4)) * push * 0.6;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  vTw = 0.7 + 0.3 * sin(uTime * (0.6 + s * 1.4) + s * 40.0);
  gl_PointSize = uSize * uScale * (0.55 + 0.9 * fract(s * 7.31)) * (0.8 + 0.6 * push) / max(0.5, -mv.z);
}`;
const POINT_FRAG = /* glsl */ `
uniform vec3 uColor; uniform float uOpacity;
varying float vTw;
void main() {
  float d = length(gl_PointCoord - 0.5);
  if (d > 0.5) discard;
  float a = smoothstep(0.5, 0.0, d);
  gl_FragColor = vec4(uColor, a * a * 1.6 * uOpacity * vTw);
}`;
const PULSE_VERT = /* glsl */ `
uniform float uTime; uniform float uSize; uniform float uScale;
attribute vec3 aA; attribute vec3 aB; attribute float aPhase; attribute float aSpeed;
varying float vF;
void main() {
  float t = fract(uTime * aSpeed + aPhase);
  vec3 p = mix(aA, aB, t);
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  vF = sin(3.14159 * t);
  gl_PointSize = uSize * uScale * (0.4 + vF) / max(0.5, -mv.z);
}`;
const PULSE_FRAG = /* glsl */ `
uniform vec3 uColor; uniform float uOpacity;
varying float vF;
void main() {
  float d = length(gl_PointCoord - 0.5);
  if (d > 0.5) discard;
  float a = smoothstep(0.5, 0.0, d);
  gl_FragColor = vec4(uColor, a * a * vF * 2.2 * uOpacity);
}`;

function pointMaterial(color: number, size: number, opacity: number) {
  return new THREE.ShaderMaterial({
    vertexShader: POINT_VERT,
    fragmentShader: POINT_FRAG,
    transparent: true,
    depthWrite: false,
    uniforms: {
      uTime: { value: 0 }, uSize: { value: size }, uScale: { value: 400 }, uPtr: { value: new THREE.Vector2() }, uHalf: { value: new THREE.Vector2(4.8, 2.7) },
      uCamZ: { value: 8.5 }, uPush: { value: 0 }, uColor: { value: new THREE.Color(color) }, uOpacity: { value: opacity },
    },
  });
}

/* ---------- the lens face: what the glass magnifies ---------- */
function drawFace(canvas: HTMLCanvasElement, q: string, title: string) {
  const g = canvas.getContext('2d')!;
  const W = canvas.width;
  g.clearRect(0, 0, W, W);
  g.fillStyle = 'rgba(11,14,19,0.62)';
  g.beginPath(); g.arc(W / 2, W / 2, W / 2, 0, Math.PI * 2); g.fill();
  g.textAlign = 'center';
  g.fillStyle = '#eedc45';
  g.font = '800 200px Archivo, Arial, sans-serif';
  g.fillText('#1', W / 2, W * 0.5);
  g.fillStyle = '#f3f2ec';
  g.font = '700 34px Archivo, Arial, sans-serif';
  const clip = (s: string, n: number) => (s.length > n ? s.slice(0, n - 1) + '…' : s);
  g.fillText(clip(q, 26), W / 2, W * 0.62);
  g.fillStyle = '#c3cad6';
  g.font = '500 26px Archivo, Arial, sans-serif';
  g.fillText(clip(title, 30), W / 2, W * 0.7);
  g.fillStyle = '#9aa3b0';
  g.font = '650 24px Archivo, Arial, sans-serif';
  g.fillText('Örnek gösterim', W / 2, W * 0.8);
}

function tagTexture(label: string, hot: boolean) {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 128;
  const g = c.getContext('2d')!;
  g.fillStyle = hot ? '#eedc45' : 'rgba(243,242,236,0.92)';
  const r = 52, x = 28, y = 24, w = 200, h = 80;
  g.beginPath();
  g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r);
  g.fill();
  g.fillStyle = '#0b0e13';
  g.font = '800 54px Archivo, Arial, sans-serif';
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(label, 128, 66);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function createStage(canvas: HTMLCanvasElement, mobile: () => boolean): Stage {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.05, 140);
  scene.environment = buildEnv(renderer);

  /* the magnifier */
  const chrome = new THREE.MeshPhysicalMaterial({ color: 0xffffff, metalness: 1, roughness: 0.12, clearcoat: 1, clearcoatRoughness: 0.05, envMapIntensity: 1.35 });
  const lens = new THREE.Group();
  lens.add(new THREE.Mesh(new THREE.TorusGeometry(1, 0.17, 64, 160), chrome));
  const a = -Math.PI / 4;
  const dir = new THREE.Vector3(Math.cos(a), Math.sin(a), 0);
  const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.21, 0.26, 48), chrome);
  collar.position.copy(dir).multiplyScalar(1.25); collar.rotation.z = a + Math.PI / 2;
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.17, 1.35, 48), chrome);
  handle.position.copy(dir).multiplyScalar(2.02); handle.rotation.z = a + Math.PI / 2;
  const cap = new THREE.Mesh(new THREE.SphereGeometry(0.17, 32, 16), chrome);
  cap.position.copy(dir).multiplyScalar(2.7);
  lens.add(collar, handle, cap);
  // knurled grip: thin rings along the handle
  const gripMat = new THREE.MeshPhysicalMaterial({ color: 0x1a2030, metalness: 0.9, roughness: 0.35, envMapIntensity: 0.8 });
  for (let i = 0; i < 9; i++) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.162, 0.024, 12, 40), gripMat);
    ring.position.copy(dir).multiplyScalar(1.5 + i * 0.12);
    ring.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);
    lens.add(ring);
  }
  // glass, a glowing inner rim, and the face it magnifies
  const disc = new THREE.Mesh(new THREE.CircleGeometry(0.86, 96), new THREE.MeshPhysicalMaterial({ color: 0xbfd0ff, metalness: 0, roughness: 0.03, clearcoat: 1, transparent: true, opacity: 0.16, envMapIntensity: 1.6, side: THREE.DoubleSide, depthWrite: false }));
  lens.add(disc);
  const rim = new THREE.Mesh(new THREE.RingGeometry(0.8, 0.86, 96), new THREE.MeshBasicMaterial({ color: BLUE, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
  rim.position.z = 0.01;
  lens.add(rim);
  const faceCanvas = document.createElement('canvas');
  faceCanvas.width = faceCanvas.height = 512;
  const faceTex = new THREE.CanvasTexture(faceCanvas);
  faceTex.colorSpace = THREE.SRGBColorSpace;
  faceTex.anisotropy = 4;
  const face = new THREE.Mesh(new THREE.CircleGeometry(0.84, 96), new THREE.MeshBasicMaterial({ map: faceTex, transparent: true, depthWrite: false, toneMapped: false }));
  face.position.z = -0.14;
  face.scale.setScalar(1.04);
  lens.add(face);
  let faceQ = 'denizli diş kliniği', faceT = 'Kliniğiniz | İmplant, Ortodonti ve Estetik Diş';
  const redrawFace = () => { drawFace(faceCanvas, faceQ, faceT); faceTex.needsUpdate = true; };
  redrawFace();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(redrawFace);
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: dotTexture('rgba(126,151,255,0.55)', 'rgba(126,151,255,0.14)'), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
  glow.scale.set(6.5, 6.5, 1); glow.position.z = -1;
  lens.add(glow);
  // rank tags that orbit the lens
  const tags = ['#1', '#2', '#3'].map((label, i) => {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tagTexture(label, i === 0), transparent: true, depthWrite: false }));
    s.scale.set(0.9, 0.45, 1);
    lens.add(s);
    return { s, ph: (i / 3) * Math.PI * 2, rx: 2.15 + i * 0.28, ry: 1.55 + i * 0.22, sp: 0.32 - i * 0.05 };
  });
  scene.add(lens);

  /* dust, link nodes and the web */
  const N = mobile() ? 900 : 2200;
  const pos = new Float32Array(N * 3), seed = new Float32Array(N);
  for (let n = 0; n < N;) {
    const x = (Math.random() - 0.5) * 26, y = (Math.random() - 0.5) * 16, z = -24 + Math.random() * 29;
    if (z > -3 && x * x + y * y < 2.2) continue;
    pos[n * 3] = x; pos[n * 3 + 1] = y; pos[n * 3 + 2] = z; seed[n] = Math.random(); n++;
  }
  const dg = new THREE.BufferGeometry();
  dg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  dg.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
  const dustMat = pointMaterial(0xd2d9ea, 0.055, 0.9);
  const dust = new THREE.Points(dg, dustMat);
  scene.add(dust);

  const G = mobile() ? 65 : 140;
  const nodes: THREE.Vector3[] = [];
  for (let i = 0; i < G; i++) {
    const x = (Math.random() - 0.5) * 22, y = (Math.random() - 0.5) * 13, z = -20 + Math.random() * 22;
    if (z > -3 && x * x + y * y < 3) { i--; continue; }
    nodes.push(new THREE.Vector3(x, y, z));
  }
  const edges: [THREE.Vector3, THREE.Vector3][] = [];
  const seg: number[] = [];
  nodes.forEach((p, i) => {
    nodes.map((q, j) => ({ j, d: i === j ? 1e9 : p.distanceToSquared(q) })).sort((u, v) => u.d - v.d).slice(0, 2).forEach(({ j }) => {
      if (j > i) { seg.push(p.x, p.y, p.z, nodes[j].x, nodes[j].y, nodes[j].z); edges.push([p, nodes[j]]); }
    });
  });
  const wg = new THREE.BufferGeometry();
  wg.setAttribute('position', new THREE.Float32BufferAttribute(seg, 3));
  const webMat = new THREE.LineBasicMaterial({ color: BLUE, transparent: true, opacity: 0.16, depthWrite: false });
  dust.add(new THREE.LineSegments(wg, webMat));
  const ng = new THREE.BufferGeometry().setFromPoints(nodes);
  ng.setAttribute('aSeed', new THREE.BufferAttribute(Float32Array.from(nodes, () => Math.random()), 1));
  const nodeMat = pointMaterial(YELLOW, 0.13, 0.85);
  dust.add(new THREE.Points(ng, nodeMat));
  // light that travels along the links
  const P = edges.length;
  const pa = new Float32Array(P * 3), pb = new Float32Array(P * 3), pph = new Float32Array(P), psp = new Float32Array(P);
  edges.forEach(([p, q], i) => {
    pa.set([p.x, p.y, p.z], i * 3); pb.set([q.x, q.y, q.z], i * 3);
    pph[i] = Math.random(); psp[i] = 0.08 + Math.random() * 0.1;
  });
  const pg = new THREE.BufferGeometry();
  pg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(P * 3), 3));
  pg.setAttribute('aA', new THREE.BufferAttribute(pa, 3));
  pg.setAttribute('aB', new THREE.BufferAttribute(pb, 3));
  pg.setAttribute('aPhase', new THREE.BufferAttribute(pph, 1));
  pg.setAttribute('aSpeed', new THREE.BufferAttribute(psp, 1));
  const pulseMat = new THREE.ShaderMaterial({
    vertexShader: PULSE_VERT, fragmentShader: PULSE_FRAG, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uSize: { value: 0.16 }, uScale: { value: 400 }, uColor: { value: new THREE.Color(YELLOW) }, uOpacity: { value: 0.9 } },
  });
  const pulses = new THREE.Points(pg, pulseMat);
  pulses.frustumCulled = false;
  dust.add(pulses);

  const colLight = new THREE.Color(0xd2d9ea), colDark = new THREE.Color(0x3a4150);
  const pointMats = [dustMat, nodeMat];
  const smoothPtr = { x: 0, y: 0 };
  const tmp = new THREE.Vector3();
  let pushAmt = 0;

  function resize() {
    const w = canvas.clientWidth || innerWidth, h = canvas.clientHeight || innerHeight;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile() ? 1.25 : 1.6));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const scale = renderer.domElement.height / 2;
    for (const m of pointMats) m.uniforms.uScale.value = scale;
    pulseMat.uniforms.uScale.value = scale;
    const halfH = 8.5 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    for (const m of pointMats) m.uniforms.uHalf.value.set(halfH * camera.aspect, halfH);
  }

  function render(st: StageState, t: number, paper: number, ptr: { x: number; y: number }, calm: boolean) {
    const sw = calm ? 0 : st.sway;
    smoothPtr.x += (ptr.x - smoothPtr.x) * 0.08;
    smoothPtr.y += (ptr.y - smoothPtr.y) * 0.08;
    camera.position.set(st.cx + smoothPtr.x * 0.18 * sw, st.cy - smoothPtr.y * 0.12 * sw, st.cz);
    camera.lookAt(st.lx, st.ly, st.lz);
    lens.position.set(st.vx, st.vy + Math.sin(t * 0.8) * 0.05 * sw, st.vz);
    lens.rotation.set(
      st.rx + Math.sin(t * 0.33) * 0.08 * sw - smoothPtr.y * 0.14 * sw,
      st.ry + Math.sin(t * 0.42) * 0.5 * sw + smoothPtr.x * 0.32 * sw,
      Math.sin(t * 0.27) * 0.05 * sw,
    );
    lens.scale.setScalar(Math.max(0.0001, st.s));
    lens.visible = st.s > 0.01;
    const glass = clamp(st.glass, 0, 1);
    disc.visible = rim.visible = face.visible = glass > 0.02;
    (disc.material as THREE.MeshPhysicalMaterial).opacity = 0.16 * glass;
    (rim.material as THREE.MeshBasicMaterial).opacity = 0.5 * glass * (0.8 + 0.2 * Math.sin(t * 1.6));
    (face.material as THREE.MeshBasicMaterial).opacity = glass;
    glow.material.opacity = clamp(st.glow, 0, 1.4) * (1 - paper) * 0.85;
    // the tags keep off the page text: they fade where they would cross the left column, and once the
    // camera flies into the lens
    const away = smooth(5.5, 7.5, st.cz);
    tags.forEach((g, i) => {
      const ang = g.ph + t * g.sp;
      g.s.position.set(Math.cos(ang) * g.rx, Math.sin(ang) * g.ry, Math.sin(ang * 1.3 + i) * 0.7 + 0.3);
      g.s.getWorldPosition(tmp).project(camera);
      const side = mobile() ? 1 : smooth(0.0, 0.3, tmp.x);
      g.s.material.opacity = glass * clamp(st.s * 1.6 - 0.3, 0, 1) * away * side;
    });
    // dust, nodes and pulses
    pushAmt += ((calm ? 0 : 1) - pushAmt) * 0.05;
    for (const m of pointMats) {
      m.uniforms.uTime.value = t;
      m.uniforms.uPtr.value.set(smoothPtr.x, -smoothPtr.y);
      m.uniforms.uCamZ.value = Math.max(1, st.cz);
      m.uniforms.uPush.value = pushAmt;
    }
    dustMat.uniforms.uOpacity.value = st.pOp;
    dustMat.uniforms.uColor.value.copy(colLight).lerp(colDark, clamp(st.pTint, 0, 1));
    nodeMat.uniforms.uOpacity.value = 0.85 * (1 - paper * 0.2);
    nodeMat.uniforms.uColor.value.set(paper > 0.5 ? DEEP : YELLOW);
    pulseMat.uniforms.uTime.value = t;
    pulseMat.uniforms.uOpacity.value = 0.9 * (1 - paper);
    webMat.opacity = 0.16 * (1 - paper * 0.4);
    webMat.color.set(paper > 0.5 ? DEEP : BLUE);
    dust.rotation.y = t * 0.012;
    dust.rotation.x = Math.sin(t * 0.05) * 0.03;
    renderer.render(scene, camera);
  }

  function setQuery(q: string, title: string) {
    faceQ = q; faceT = title;
    redrawFace();
  }

  resize();
  return { render, resize, setQuery };
}
