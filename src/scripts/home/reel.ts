// The sector cards fly toward the screen one after another; tabs and arrows jump to a card.
import { $, $$, clamp } from './util';
import { M, measure } from './choreo';
import { isMobile } from './util';

const panels = $$('.panel');
const tabs = $$('.reel-tab');
const count = $('.reel-count');
let PX: number[] = [], PY: number[] = [], current = 0, lastLabel = '';

export function layoutReel() {
  const w = innerWidth, h = innerHeight, m = isMobile();
  PX = panels.map((_, i) => (i % 2 ? 1 : -1) * w * (m ? 0.02 : 0.11));
  PY = panels.map((_, i) => ((i % 3) - 1) * h * (m ? 0.02 : 0.04));
}

const gap = () => (isMobile() ? 850 : 980);

export function updateReel(y: number) {
  const r = M.reel, RL = Math.max(1, r.h - M.H);
  const p = clamp((y - r.t) / RL, 0, 1);
  const g = gap();
  const travel = (panels.length - 1) * g + 980;
  let best = 0, bestD = 1e9;
  panels.forEach((el, i) => {
    const z = -980 - i * g + p * travel;
    const o = clamp((z + 3200) / 1200, 0, 1) * (1 - clamp((z - 160) / 280, 0, 1));
    const f = clamp(1 - Math.abs(z + 80) / 900, 0.25, 1);
    el.style.transform = `translate3d(${(PX[i] * (1 - f * 0.65)).toFixed(1)}px, ${(PY[i] * (1 - f * 0.65)).toFixed(1)}px, ${z.toFixed(1)}px)`;
    el.style.opacity = o.toFixed(3);
    el.style.visibility = o < 0.01 ? 'hidden' : 'visible';
    const d = Math.abs(z + 80);
    if (d < bestD) { bestD = d; best = i; }
  });
  current = best;
  const label = `${best + 1} / ${panels.length}`;
  if (label !== lastLabel) {
    if (count) count.textContent = label;
    tabs.forEach((t, i) => t.classList.toggle('active', i === best));
    lastLabel = label;
  }
}

export function initReel(scrollToY: (y: number) => void) {
  const jump = (idx: number) => {
    const i = clamp(idx, 0, panels.length - 1);
    measure();
    const r = M.reel, RL = Math.max(1, r.h - M.H);
    const g = gap();
    const travel = (panels.length - 1) * g + 980;
    scrollToY(r.t + clamp((900 + i * g) / travel, 0, 1) * RL);
  };
  tabs.forEach((t) => t.addEventListener('click', () => jump(parseInt(t.dataset.reelIdx || '0', 10))));
  $('#reel-prev')?.addEventListener('click', () => jump(current - 1));
  $('#reel-next')?.addEventListener('click', () => jump(current + 1));
}

// without the flying layout the cards simply stack
export const hasPanels = () => panels.length > 0;
