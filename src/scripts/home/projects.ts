// The project carousel: category tabs filter the cards, the card nearest the middle is raised, and the
// arrows move one card at a time. Without this file it is a plain row the visitor swipes.
import { $, $$ } from './util';

export function initProjects() {
  const view = $<HTMLElement>('[data-pview]');
  const track = $('[data-ptrack]');
  if (!view || !track) return;
  const cards = $$<HTMLElement>('.pcard', track);
  const tabs = $$<HTMLButtonElement>('.ptab');

  const visible = () => cards.filter((c) => !c.hidden);
  const centre = () => {
    const vr = view.getBoundingClientRect();
    const mid = vr.left + vr.width / 2;
    let best: HTMLElement | null = null, bestD = 1e9;
    for (const c of visible()) {
      const r = c.getBoundingClientRect();
      const d = (r.left + r.width / 2 - mid) / r.width;
      c.style.setProperty('--s', (1.07 - 0.22 * Math.min(1, Math.abs(d))).toFixed(3));
      c.style.setProperty('--o', (1 - 0.5 * Math.min(1, Math.abs(d))).toFixed(3));
      if (Math.abs(d) < bestD) { bestD = Math.abs(d); best = c; }
    }
    cards.forEach((c) => c.classList.toggle('is-center', c === best));
  };
  let ticking = false;
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { ticking = false; centre(); }); } };
  view.addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll, { passive: true });

  const toMiddle = () => {
    const list = visible();
    const mid = list[Math.floor(list.length / 2)];
    if (mid) view.scrollLeft = mid.offsetLeft - (view.clientWidth - mid.offsetWidth) / 2;
    centre();
  };
  const step = (dir: number) => {
    const list = visible();
    if (!list.length) return;
    const w = list[0].getBoundingClientRect().width + 24;
    view.scrollBy({ left: dir * w, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };
  $('[data-pprev]')?.addEventListener('click', () => step(-1));
  $('[data-pnext]')?.addEventListener('click', () => step(1));

  tabs.forEach((t) => t.addEventListener('click', () => {
    const key = t.dataset.cat || 'hepsi';
    tabs.forEach((o) => { const on = o === t; o.classList.toggle('active', on); o.setAttribute('aria-pressed', String(on)); });
    cards.forEach((c) => { c.hidden = key !== 'hepsi' && !(c.dataset.cats || '').split(' ').includes(key); });
    toMiddle();
  }));

  toMiddle();
  addEventListener('load', toMiddle, { once: true });
}
