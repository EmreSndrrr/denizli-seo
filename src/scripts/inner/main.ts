// Behaviour for the inner pages: the bar, the phone menu, questions, the form, the project carousel,
// the blog filter, the office map and a quiet fade-in. Everything is readable without any of it.
import { $, $$ } from '../home/util';
import { initDrawer, initFaq, initForm } from '../home/ui';
import { initProjects } from '../home/projects';

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const nav = $('.nav');
const onScroll = () => nav?.classList.toggle('scrolled', scrollY > 24);
addEventListener('scroll', onScroll, { passive: true });
onScroll();

initDrawer(() => {});
initFaq();
initForm();
initProjects();

// blog filter: tabs show the posts of one service
(() => {
  const tabs = $$<HTMLButtonElement>('[data-filter]');
  const cards = $$<HTMLElement>('[data-service]');
  if (!tabs.length) return;
  tabs.forEach((t) => t.addEventListener('click', () => {
    const key = t.dataset.filter || '';
    tabs.forEach((o) => { const on = o === t; o.classList.toggle('active', on); o.setAttribute('aria-pressed', String(on)); });
    cards.forEach((c) => { c.hidden = key !== '' && c.dataset.service !== key; });
    const empty = $('[data-empty]');
    if (empty) empty.hidden = cards.some((c) => !c.hidden);
  }));
})();

// the office on the relief map
(() => {
  const card = $<HTMLElement>('[data-dmap][data-place]');
  const canvas = $<HTMLCanvasElement>('[data-map-canvas]');
  const labels = $('[data-map-labels]');
  if (!card || !canvas || !labels) return;
  const place = JSON.parse(card.dataset.place || '{}') as { district: string; badge: string };
  let started = false;
  const boot = () => {
    if (started) return;
    started = true;
    import('../map3d')
      .then(({ createMap }) => createMap({ canvas, labels, reduced, phone: matchMedia('(max-width: 767px)').matches }))
      .then((m) => { card.classList.add('is-3d'); m.placeMode(place.district, place.badge); m.focusOn(place.district, 0.75); })
      .catch(() => { /* the poster stays */ });
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { io.disconnect(); boot(); } }, { rootMargin: '600px 0px' });
    io.observe(card);
  } else boot();
})();

// blocks fade in once as they reach the lower part of the screen
if (!reduced && 'IntersectionObserver' in window) {
  const items = $$<HTMLElement>('.reveal');
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target as HTMLElement;
    el.style.opacity = '1';
    el.style.transform = 'none';
    io.unobserve(el);
  }), { rootMargin: '0px 0px -8% 0px' });
  items.forEach((el) => {
    if (el.getBoundingClientRect().top < innerHeight) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 600ms cubic-bezier(0.2, 0.7, 0.2, 1), transform 600ms cubic-bezier(0.2, 0.7, 0.2, 1)';
    io.observe(el);
  });
}
