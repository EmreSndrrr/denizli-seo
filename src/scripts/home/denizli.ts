// The map chapter: one view that starts on Türkiye (81 provinces), zooms into Denizli as the page scrolls, and
// hands over to the 3D relief of the province with its 19 district names. Without motion (or before the script
// runs) the two maps simply sit side by side. The relief loads when the section nears the screen.
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { $ } from './util';
import type { DenizliMap } from '../map3d';

const smooth = (a: number, b: number, x: number) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

const STEPS = [
  { upTo: 0.28, title: 'Türkiye', note: '81 il' },
  { upTo: 0.66, title: 'Denizli', note: 'Ege Bölgesi' },
  { upTo: 1.01, title: 'Denizli', note: '19 ilçe' },
];

export function initDenizli(reduced: boolean, fx: boolean) {
  const root = $('#denizli');
  const view = $('[data-dmap]', root ?? document);
  const flat = $('[data-tr]', root ?? document);
  const relief = $('[data-3d]', root ?? document);
  const canvas = $<HTMLCanvasElement>('[data-map-canvas]', root ?? document);
  const labels = $('[data-map-labels]', root ?? document);
  const svg = flat && flat.querySelector('svg');
  const dz = $<SVGGraphicsElement & SVGPathElement>('#tr-denizli', root ?? document);
  const cap = $('[data-cap]', root ?? document);
  if (!root || !view || !flat || !relief || !canvas || !labels || !svg || !dz || !cap) return;

  let map: DenizliMap | null = null;
  let last = -1;

  /* ---------- the relief ---------- */
  let started = false;
  const boot = () => {
    if (started) return;
    started = true;
    import('../map3d')
      .then(({ createMap }) => createMap({ canvas, labels, reduced, phone: matchMedia('(max-width: 767px)').matches }))
      .then((m) => { map = m; m.namesMode(); view.classList.add('is-3d'); if (fx) apply(last < 0 ? 0 : last); })
      .catch(() => { /* the poster stays */ });
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { io.disconnect(); boot(); } }, { rootMargin: '900px 0px' });
    io.observe(root);
  } else boot();
  if (!fx) return;

  /* ---------- the zoom: the viewBox of the flat map narrows onto Denizli ---------- */
  const [, , W, H] = svg.getAttribute('viewBox')!.split(' ').map(Number);
  const bb = dz.getBBox();
  const cx = bb.x + bb.width / 2, cy = bb.y + bb.height / 2;
  let asp = 1.6;
  const measure = () => { const r = view.getBoundingClientRect(); if (r.width && r.height) asp = r.width / r.height; };

  function apply(p: number) {
    last = p;
    const e = smooth(0.04, 0.6, p);                              // the zoom
    const pan = smooth(0.02, 0.4, p);                            // the centre gets there first, so Denizli never slides off the edge
    // widths shrink exponentially (an even zoom)
    const w0 = Math.max(W, H * asp);
    const wT = Math.max(bb.height / 0.55 * asp, bb.width / 0.6);
    const w = w0 * Math.pow(wT / w0, e), h = w / asp;
    const x0 = W / 2 + (cx - W / 2) * pan, y0 = H / 2 + (cy - H / 2) * pan;
    svg!.setAttribute('viewBox', `${(x0 - w / 2).toFixed(2)} ${(y0 - h / 2).toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)}`);
    // the pulsing ring around Denizli fades once the zoom has made the province big enough to see
    flat!.style.setProperty('--ring', (1 - smooth(0.1, 0.34, p)).toFixed(3));
    flat!.style.setProperty('--others', String(1 - 0.9 * smooth(0.12, 0.5, p)));
    const flatOn = 1 - smooth(0.55, 0.69, p);
    flat!.style.opacity = flatOn.toFixed(3);
    flat!.style.visibility = flatOn > 0.002 ? 'visible' : 'hidden';
    const reliefOn = smooth(0.53, 0.67, p);
    relief!.style.opacity = reliefOn.toFixed(3);
    relief!.style.pointerEvents = p > 0.85 ? 'auto' : 'none';
    map?.setView(smooth(0.58, 0.97, p));
    labels!.style.opacity = smooth(0.8, 0.96, p).toFixed(3);
    const step = STEPS.find((s) => p < s.upTo)!;
    if (cap!.dataset.step !== step.note) {
      cap!.dataset.step = step.note;
      cap!.innerHTML = `<b>${step.title}</b><span>${step.note}</span>`;
    }
  }

  measure();
  apply(0);
  ScrollTrigger.create({ trigger: root, start: 'top top', end: 'bottom bottom', onUpdate: (self) => apply(self.progress), onRefresh: (self) => { measure(); apply(self.progress); } });
  addEventListener('resize', () => { measure(); apply(Math.max(0, last)); });
}
