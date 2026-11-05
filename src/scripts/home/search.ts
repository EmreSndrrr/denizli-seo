// The hero search box: the query it holds (typed, picked from the chips, or typed by itself) is what the
// magnifier's glass shows. Sample data, labelled as such on the page.
import { $, $$ } from './util';
import { M } from './choreo';
import { HERO_CHIPS } from '../../data/home';

let paused = false;
const listeners: Array<(q: string, title: string) => void> = [];
export const onQuery = (cb: (q: string, title: string) => void) => { listeners.push(cb); };

const searchInput = $<HTMLInputElement>('#hero-search-input');
const searchBtn = $('#hero-search-btn');
const chips = $$('.chip-btn');
const FALLBACK = HERO_CHIPS[0];

// a query set by the visitor takes the page to the lens chapter, where the glass shows it
export function applyQuery(q: string, title: string | null, scrollTo?: (y: number) => void) {
  const clean = (q || '').trim() || FALLBACK.q;
  if (searchInput && document.activeElement !== searchInput) searchInput.value = clean;
  const t = title || `Siteniz | ${clean.charAt(0).toLocaleUpperCase('tr-TR') + clean.slice(1)}`;
  chips.forEach((b) => b.classList.toggle('active', b.dataset.q === clean));
  listeners.forEach((cb) => cb(clean, t));
  if (scrollTo) scrollTo(M.lens.t + Math.max(0, (M.lens.h - M.H) * 0.45));
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
