// Where the 3D stage is at each scroll position. Sections are measured, then a list of camera and
// magnifier keyframes is laid along the page and sampled with easing. After the lens chapter the
// magnifier leaves the keyframes: it travels the page in screen space (lensAnchor) and settles into
// the ring of the "Biz kimiz" section.
import { $, clamp, smooth, isMobile } from './util';

export const FIELDS = ['cx', 'cy', 'cz', 'lx', 'ly', 'lz', 'vx', 'vy', 'vz', 'rx', 'ry', 's', 'sway', 'pOp', 'glow', 'glass', 'veil'] as const;
export type Field = (typeof FIELDS)[number];
export type StageState = Record<Field, number>;
type Key = StageState & { y: number };
interface Box { t: number; h: number }

const SECTIONS = {
  hero: '.hero', lens: '.lens', services: '.svcmap', process: '.process', work: '.projects', about: '.about', cta: '.cta',
} as const;
type SectionName = keyof typeof SECTIONS;
const els = {} as Record<SectionName, HTMLElement | null>;
for (const k of Object.keys(SECTIONS) as SectionName[]) els[k] = $(SECTIONS[k]);
const ring = $('.about-lens');

export const M = { H: innerHeight, end: 1 } as { H: number; end: number } & Record<SectionName, Box>;
let KEYS: Key[] = [];

export function measure() {
  const H = innerHeight, sy = scrollY;
  M.H = H;
  for (const k of Object.keys(els) as SectionName[]) {
    const el = els[k];
    if (!el) { M[k] = { t: 0, h: 1 }; continue; }
    const r = el.getBoundingClientRect();
    M[k] = { t: r.top + sy, h: el.offsetHeight };
  }
  M.end = Math.max(1, document.documentElement.scrollHeight - H);
}

export function buildKeys() {
  measure();
  const m = isMobile(), H = M.H;
  const L = Math.max(1, M.lens.h - H);
  const keys: Key[] = [];
  let last: Key | null = null;
  const k = (y: number, o: Partial<StageState>) => {
    const yy = last ? Math.max(y, last.y) : y;
    const v = Object.assign({}, last, o, { y: yy }) as Key;
    keys.push(v);
    last = v;
  };

  // Hero: on phones the lens stays high so it never covers the buttons or the search box
  k(0, { cx: 0, cy: 0, cz: 8.5, lx: 0, ly: 0, lz: 0, vx: m ? 0 : 2.1, vy: m ? 1.85 : 0.12, vz: m ? -1.6 : 0, rx: 0.28, ry: -0.7, s: m ? 0.56 : 1, sway: 1, pOp: 0.9, glow: 1, glass: 1, veil: 1 });
  k(M.lens.t * 0.6, { vx: m ? 0 : 1.1, vy: m ? 1.25 : 0.05, s: m ? 0.65 : 1.02 });
  k(M.lens.t, { cy: 0, cz: 8, vx: 0, vy: 0, vz: 0, rx: 0.06, ry: 0, s: m ? 0.86 : 1.05, sway: 0.45 });
  k(M.lens.t + L * 0.5, { cz: 3.4, lz: -5, rx: 0, sway: 0.1, glow: 1.25 });
  k(M.lens.t + L * 0.76, { cz: 1.8, lz: -9, sway: 0, glass: 0, glow: 0 });
  // the dive ends in the dark: the scene fades out while the camera passes through the lens
  k(M.lens.t + L * 0.89, { cz: -1.8, lz: -12, veil: 0 });
  // a cut, hidden by that fade: back outside, the lens gone (it returns through lensAnchor)
  k(M.lens.t + L * 0.89, { cx: 0, cy: 0, cz: 9, lx: 0, ly: 0, lz: 0, vx: 0, vy: 0, vz: 0, rx: 0.3, ry: -0.7, s: 0, sway: 1, pOp: 0.55, glow: 0.5, glass: 1, veil: 0 });
  k(M.lens.t + L + H * 0.5, { veil: 1 });
  // the lens comes back beside the footer wordmark on wide screens
  k(M.end - H * 0.42, { s: 0, vx: 2.85, vy: -1.05, vz: -1.5, ry: -0.9, glow: 0, sway: 1 });
  k(M.end, { s: m ? 0 : 0.62, glow: 0.85, ry: 0.2 });
  KEYS = keys;
}

function mix(a: Key, b: Key, t: number): StageState {
  const o = {} as StageState;
  for (const f of FIELDS) o[f] = a[f] + (b[f] - a[f]) * t;
  return o;
}

export function sample(y: number): StageState | null {
  const K = KEYS;
  if (!K.length) return null;
  if (y <= K[0].y) return K[0];
  for (let i = K.length - 1; i >= 0; i--) {
    if (y >= K[i].y) {
      const a = K[i], b = K[i + 1];
      if (!b) return a;
      const span = b.y - a.y;
      if (span <= 0) return b;
      let t = (y - a.y) / span;
      t = t * t * (3 - 2 * t);
      return mix(a, b, t);
    }
  }
  return K[0];
}

export const firstKey = () => KEYS[0];

/* ---------- the travelling magnifier ---------- */

// Screen-space target of the magnifier: x and y in normalised device coordinates, r the radius of its ring
// in CSS pixels, w how much it is on stage (0 hidden, 1 fully), settle how far it has come to rest in the
// "Biz kimiz" ring, rz a roll that turns it while it travels.
export interface Anchor { x: number; y: number; r: number; w: number; settle: number; rz: number }
export const NO_ANCHOR: Anchor = { x: 0, y: 0, r: 0, w: 0, settle: 0, rz: 0 };

export function lensAnchor(y: number): Anchor {
  const m = isMobile(), H = M.H, a = M.about;
  const t0 = M.lens.t + Math.max(1, M.lens.h - H);               // the lens chapter is over
  const u = Math.max(0, (y - t0) / H);                            // screens travelled since
  const appear = smooth(t0 - H * 0.05, t0 + H * 0.45, y);
  const settle = smooth(a.t - H * 1.3, a.t - H * 0.1, y);
  const leave = smooth(a.t + a.h - H * 0.6, a.t + a.h - H * 0.1, y);
  // on the way it swings from one edge of the page to the other and back; on phones it stays out of the text
  const gx = (m ? 0.82 : 0.9) * Math.cos(u * 1.6);
  const gy = -0.1 + 0.2 * Math.sin(u * 2.1 + 1);
  const gr = m ? 30 : 50;
  let x = gx, yy = gy, r = gr;
  if (ring) {
    const b = ring.getBoundingClientRect();
    const ax = ((b.left + b.width / 2) / innerWidth) * 2 - 1;
    const ay = -(((b.top + b.height / 2) / innerHeight) * 2 - 1);
    x = gx + (ax - gx) * settle;
    yy = gy + (ay - gy) * settle;
    r = gr + (b.width / 2 - gr) * settle;
  }
  const show = m ? smooth(0.25, 0.85, settle) : 1;
  return { x, y: yy, r, w: appear * (1 - leave) * show, settle, rz: Math.sin(u * 1.3) * 0.5 * (1 - settle) };
}

export { clamp };
