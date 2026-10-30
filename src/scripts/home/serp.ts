// The results page: "your site" climbs from seventh to first as the page scrolls, and the search
// box, the sample chips and the sector cards all drive its query. Sample data, labelled as such.
import { $, $$, clamp, smooth } from './util';
import { M } from './choreo';
import { HERO_CHIPS } from '../../data/home';

let lastRank = '', lastKey = '', rowStep = 88;
let paused = false;
const listeners: Array<(q: string, title: string) => void> = [];
export const onQuery = (cb: (q: string, title: string) => void) => { listeners.push(cb); };
export const setRowStep = (v: number) => { rowStep = v; lastKey = ''; };

const serpEl = $('.serp')!;
const you = $('[data-you]');
const others = $$('.res:not([data-you])');
const youRank = $('.you-rank');
const rankNum = $('.rank-num');
const meters = $$('.meter i');
const meterVals = $$('.meter-val');

export function updateSerp(y: number) {
  if (!you) return;
  const sp = M.serp, span = Math.max(1, sp.h - M.H);
  const p = smooth(0.06, 0.84, (y - sp.t) / span);
  const steps = 6 * p, k = Math.floor(steps), frac = steps - k;
  const climb = Math.min(6, k + smooth(0.25, 0.75, frac));
  const r = 7 - climb;
  const hl = (smooth(0, 0.3, (y - sp.t + M.H * 0.6) / span) * 100).toFixed(1);
  const key = p.toFixed(4) + '|' + rowStep + '|' + hl;
  if (key === lastKey) return;
  lastKey = key;
  serpEl.style.setProperty('--hl', hl + '%');
  you.style.transform = `translate3d(0, ${((r - 1) * rowStep).toFixed(1)}px, 0) scale(${(1 + 0.02 * Math.sin(Math.PI * (climb % 1))).toFixed(3)})`;
  others.forEach((el, j) => {
    const off = clamp(j + 2 - r, 0, 1);
    el.style.transform = `translate3d(0, ${((j + off) * rowStep).toFixed(1)}px, 0)`;
  });
  const label = '#' + Math.round(r);
  if (label !== lastRank) {
    if (youRank) youRank.textContent = label;
    if (rankNum) rankNum.textContent = label;
    lastRank = label;
  }
  const vals = [0.35 + 0.6 * p, 0.28 + 0.66 * p, 0.2 + 0.7 * p];
  meters.forEach((el, i) => {
    el.style.setProperty('--w', (vals[i] * 100).toFixed(1) + '%');
    if (meterVals[i]) meterVals[i].textContent = Math.round(vals[i] * 100) + '%';
  });
}

/* ---------- the query, shared by the hero box, the chips and the sector cards ---------- */
const searchInput = $<HTMLInputElement>('#hero-search-input');
const searchBtn = $('#hero-search-btn');
const queryText = $('#serp-query-text');
const youTitle = $('#you-title');
const chips = $$('.chip-btn');
const FALLBACK = HERO_CHIPS[0];

export function applyQuery(q: string, title: string | null, scrollTo?: (y: number) => void) {
  const clean = (q || '').trim() || FALLBACK.q;
  if (searchInput && document.activeElement !== searchInput) searchInput.value = clean;
  if (queryText) queryText.textContent = clean;
  const t = title || `Siteniz | ${clean.charAt(0).toLocaleUpperCase('tr-TR') + clean.slice(1)}`;
  if (youTitle) youTitle.textContent = t;
  chips.forEach((b) => b.classList.toggle('active', b.dataset.q === clean));
  others.forEach((el) => {
    const rival = el.dataset.rival || '';
    const title = el.querySelector('.res-title');
    if (!title) return;
    title.textContent = rival === 'En iyi 10 liste' ? `${clean.charAt(0).toLocaleUpperCase('tr-TR') + clean.slice(1)}: en iyi 10` : rival.startsWith('Yakınınızdakiler') ? rival : `${clean} | ${rival}`;
  });
  listeners.forEach((cb) => cb(clean, t));
  if (scrollTo) scrollTo(M.serp.t + Math.max(0, (M.serp.h - M.H) * 0.72));
}

export function initSearch(scrollTo: (y: number) => void, measureNow: () => void, reduce: boolean) {
  const go = (q: string, t: string | null) => { paused = true; measureNow(); applyQuery(q, t, scrollTo); };
  if (searchInput) {
    searchInput.addEventListener('focus', () => { paused = true; });
    searchInput.addEventListener('input', () => { paused = true; applyQuery(searchInput.value, null); });
    searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); go(searchInput.value, null); } });
  }
  searchBtn?.addEventListener('click', () => go(searchInput ? searchInput.value : FALLBACK.q, null));
  chips.forEach((b) => b.addEventListener('click', () => { if (searchInput) searchInput.value = b.dataset.q || ''; go(b.dataset.q || '', b.dataset.title || null); }));
  $$('[data-sim-q]').forEach((b) => b.addEventListener('click', () => { if (searchInput) searchInput.value = b.dataset.simQ || ''; go(b.dataset.simQ || '', b.dataset.simT || null); }));

  // the box types searches by itself until the visitor takes over
  if (reduce || !searchInput) return;
  let qi = 0;
  const typeNext = () => {
    if (paused) return;
    qi = (qi + 1) % HERO_CHIPS.length;
    const item = HERO_CHIPS[qi];
    let txt = searchInput.value;
    const del = setInterval(() => {
      if (paused) { clearInterval(del); return; }
      txt = txt.slice(0, -1);
      searchInput.value = txt;
      if (txt) return;
      clearInterval(del);
      let i = 0;
      const add = setInterval(() => {
        if (paused) { clearInterval(add); return; }
        i++;
        searchInput.value = item.q.slice(0, i);
        if (i >= item.q.length) {
          clearInterval(add);
          applyQuery(item.q, item.title);
          setTimeout(typeNext, 2800);
        }
      }, 52);
    }, 26);
  };
  setTimeout(typeNext, 4200);
}
