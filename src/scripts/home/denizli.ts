// The Denizli relief map: loads when it nears the screen, reads the form, and writes the sample ranks.
import { $, $$ } from './util';
import { ranks, summary, fmt, type MapState } from '../rank';
import type { DenizliMap } from '../map3d';

export function initDenizli(reduced: boolean) {
  const root = $('#denizli');
  const card = $('[data-dmap]', root ?? document);
  const canvas = $<HTMLCanvasElement>('[data-map-canvas]', root ?? document);
  const labels = $('[data-map-labels]', root ?? document);
  if (!root || !card || !canvas || !labels) return;
  const state: MapState = { trade: 'kuyumcu', district: 'Merkezefendi', profile: false, speed: false, content: 0, pages: false };
  let map: DenizliMap | null = null;
  const trade = $<HTMLInputElement>('[name="trade"]', root)!;
  const district = $<HTMLSelectElement>('[name="district"]', root)!;
  const toggles = $$<HTMLButtonElement>('.toggle', root);

  const show = () => {
    const r = ranks(state), s = summary(r);
    const t = state.trade.trim().toLocaleLowerCase('tr-TR') || 'kuyumcu';
    $('[data-out-query]', root)!.textContent = `denizli ${t}`;
    $('[data-out-top3]', root)!.textContent = String(s.top3);
    $('[data-out-avg]', root)!.textContent = fmt(s.avg);
    map?.setRanks(r, state.district);
  };

  trade.addEventListener('input', () => { state.trade = trade.value; show(); });
  district.addEventListener('change', () => { state.district = district.value; map?.focusOn(state.district, 0.7); show(); });
  toggles.forEach((b) => b.addEventListener('click', () => {
    const on = b.getAttribute('aria-checked') !== 'true';
    b.setAttribute('aria-checked', String(on));
    const key = b.dataset.key;
    if (key === 'profile') state.profile = on;
    if (key === 'speed') state.speed = on;
    if (key === 'pages') state.pages = on;
    if (key === 'content') state.content = on ? 3 : 0;
    show();
  }));
  show();

  let started = false;
  const boot = () => {
    if (started) return;
    started = true;
    import('../map3d')
      .then(({ createMap }) => createMap({ canvas, labels, reduced, phone: matchMedia('(max-width: 767px)').matches, onPick: (d) => { state.district = d; district.value = d; map?.focusOn(d, 0.7); show(); } }))
      .then((m) => { map = m; card.classList.add('is-3d'); show(); })
      .catch(() => { /* the poster stays and the numbers still answer */ });
  };
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { io.disconnect(); boot(); } }, { rootMargin: '700px 0px' });
    io.observe(root);
  } else boot();
}
