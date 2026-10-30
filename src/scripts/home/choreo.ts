// Where the 3D stage is at each scroll position: sections are measured, then a list of camera and
// magnifier keyframes is laid along the page and sampled with easing.
import { $, clamp, smooth, isMobile } from './util';

export const FIELDS = ['cx', 'cy', 'cz', 'lx', 'ly', 'lz', 'vx', 'vy', 'vz', 'rx', 'ry', 's', 'sway', 'pOp', 'pTint', 'glow', 'glass'] as const;
export type Field = (typeof FIELDS)[number];
export type StageState = Record<Field, number>;
type Key = StageState & { y: number };
interface Box { t: number; h: number }

const SECTIONS = {
  hero: '.hero', lens: '.lens', serp: '.serp', services: '.services', process: '.process', reel: '.reel', work: '.work', cta: '.cta',
} as const;
type SectionName = keyof typeof SECTIONS;
const els = {} as Record<SectionName, HTMLElement | null>;
for (const k of Object.keys(SECTIONS) as SectionName[]) els[k] = $(SECTIONS[k]);

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
  const sv = M.services, pr = M.process, rl = M.reel, sp = M.serp;
  const RL = Math.max(1, rl.h - H);
  const keys: Key[] = [];
  let last: Key | null = null;
  const k = (y: number, o: Partial<StageState>) => {
    const yy = last ? Math.max(y, last.y) : y;
    const v = Object.assign({}, last, o, { y: yy }) as Key;
    keys.push(v);
    last = v;
  };

  // Hero: on phones the lens stays high so it never covers the buttons or the search box
  k(0, { cx: 0, cy: 0, cz: 8.5, lx: 0, ly: 0, lz: 0, vx: m ? 0 : 2.1, vy: m ? 1.85 : 0.12, vz: m ? -1.6 : 0, rx: 0.28, ry: -0.7, s: m ? 0.56 : 1, sway: 1, pOp: 0.9, pTint: 0, glow: 1, glass: 1 });
  k(M.lens.t * 0.6, { vx: m ? 0 : 1.1, vy: m ? 1.25 : 0.05, s: m ? 0.65 : 1.02 });
  k(M.lens.t, { cy: 0, cz: 8, vx: 0, vy: 0, vz: 0, rx: 0.06, ry: 0, s: m ? 0.86 : 1.05, sway: 0.45 });
  k(M.lens.t + L * 0.5, { cz: 3.4, lz: -5, rx: 0, sway: 0.1, glow: 1.25 });
  k(M.lens.t + L * 0.76, { cz: 1.8, lz: -9, sway: 0, glass: 0, glow: 0 });
  k(M.lens.t + L * 0.9, { cz: -1.8, lz: -12 });
  // a cut, hidden by the paper flash: from inside the lens to the results page
  k(M.lens.t + L * 0.9, { cx: 0, cy: 0, cz: 9, lx: 0, ly: 0, lz: 0, vx: m ? 0 : 2.6, vy: m ? 2.2 : 1.4, vz: -2, rx: 0.3, ry: -0.8, s: 0, sway: 1, pOp: 0.45, pTint: 1, glow: 0, glass: 1 });
  k(sp.t + sp.h - H, {});
  k(sv.t - H * 0.2, { vx: m ? 0 : 2.5, vy: m ? 2.4 : 1.15, vz: -1.5, s: 0, pOp: 0.85, pTint: 0, glow: 0, ry: -0.5 });
  // the lens returns once the services heading is on screen, not over the results page
  k(sv.t + H * 0.3, { s: m ? 0 : 0.58, glow: 0.75 });
  k(sv.t + sv.h - H, { vy: m ? 2.4 : 0.6, ry: 0.5 });
  // Process: the lens waits low and left so it never crosses the heading
  k(pr.t, { vx: m ? 0 : -2.3, vy: m ? 2.4 : -1.75, vz: -2.6, s: m ? 0 : 0.44, glow: 0.4, ry: -0.35 });
  k(pr.t + Math.max(1, pr.h - H), { vy: m ? 2.4 : -1.4, ry: 0.35 });
  // Reel: the lens leaves so it does not clutter the flying cards
  k(rl.t, { vx: 0, vy: 0, vz: -4.5, s: 0, glow: 0 });
  k(rl.t + RL * 0.15, { s: 0, glow: 0 });
  // it comes back beside the footer wordmark on wide screens
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

// how far the results page has arrived (0 hidden, 1 in place), timed with the lens lines fading out
export function serpArrival(y: number) {
  const L = Math.max(1, M.lens.h - M.H);
  return smooth(M.lens.t + L * 0.88, M.lens.t + L * 1.0, y);
}

// 0 on graphite, 1 on the paper of the results page
export function paperAmount(y: number) {
  const H = M.H, L = Math.max(1, M.lens.h - H), sp = M.serp;
  const end = sp.t + sp.h;
  return smooth(M.lens.t + L * 0.78, M.lens.t + L * 0.9, y) * (1 - smooth(end - H * 0.95, end - H * 0.55, y));
}

export { clamp };
