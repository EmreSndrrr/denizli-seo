// Behaviour for the whole site. Every part has a finished state without it; the 3D map and the
// scroll motion are loaded on demand.
import { ranks, summary, fmt, type MapState } from './rank';
import type { DenizliMap } from './map3d';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const PHONE = '905445965622';
const waUrl = (text: string) => `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
const openOut = (url: string) => { const w = window.open(url, '_blank', 'noopener'); if (!w) location.href = url; };

// Long articles: blocks below the first screen arrive as they are reached.
if (!reduced) {
  document.querySelectorAll<HTMLElement>('.prose > h2, .prose > h3, .prose > ul, .prose > ol').forEach((el) => {
    if (el.getBoundingClientRect().top > window.innerHeight) el.dataset.reveal = '';
  });
}

// Reveal once as an element reaches the lower part of the screen, or once it has been scrolled past
// (a jump down the page must not leave anything hidden above).
(() => {
  let pending = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
  let ticking = false;
  const sweep = () => {
    ticking = false;
    const line = innerHeight * 0.92;
    pending = pending.filter((el) => {
      if (el.getBoundingClientRect().top < line) { el.classList.add('is-in'); return false; }
      return true;
    });
    if (!pending.length) removeEventListener('scroll', onScroll);
  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(sweep); } };
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll, { passive: true });
  sweep();
})();

// Phone menu.
(() => {
  const menu = document.getElementById('menu');
  const open = document.querySelector<HTMLButtonElement>('[data-menu-open]');
  const close = document.querySelector<HTMLButtonElement>('[data-menu-close]');
  if (!menu || !open || !close) return;
  const set = (on: boolean) => {
    menu.classList.toggle('is-open', on);
    open.setAttribute('aria-expanded', String(on));
    document.body.style.overflow = on ? 'hidden' : '';
    (on ? close : open).focus();
  };
  open.addEventListener('click', () => set(true));
  close.addEventListener('click', () => set(false));
  menu.addEventListener('keydown', (e) => { if (e.key === 'Escape') set(false); });
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => set(false)));
})();

// A result page with several searches types them one after another.
document.querySelectorAll<HTMLElement>('[data-serp]').forEach((el) => {
  const q = el.querySelector<HTMLElement>('[data-serp-q]');
  const list = (el.dataset.serp || '').split('|').filter(Boolean);
  if (!q || list.length < 2 || reduced) return;
  let i = 0;
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  (async () => {
    await sleep(2600);
    for (;;) {
      if (document.hidden) { await sleep(800); continue; }
      for (let n = list[i].length; n >= 0; n--) { q.textContent = list[i].slice(0, n); await sleep(28); }
      i = (i + 1) % list.length;
      for (let n = 1; n <= list[i].length; n++) { q.textContent = list[i].slice(0, n); await sleep(70 + Math.random() * 50); }
      await sleep(2600);
    }
  })();
});

// The 3D map loads once the page has painted, so the first screen is never held up by it.
// Without WebGL the poster stays and the readout still answers.
function bootMap(stage: HTMLElement, onPick?: (d: string) => void, shift?: () => { x: number; y: number }): Promise<DenizliMap | null> {
  const canvas = stage.querySelector<HTMLCanvasElement>('[data-map-canvas]');
  const labels = stage.querySelector<HTMLElement>('[data-map-labels]');
  if (!canvas || !labels) return Promise.resolve(null);
  return new Promise((resolve) => {
    const load = () => import('./map3d')
      .then(({ createMap }) => createMap({ canvas, labels, reduced, phone: matchMedia('(max-width: 767px)').matches, onPick, shift }))
      .then((m) => { stage.classList.add('is-3d'); resolve(m); })
      .catch(() => resolve(null));
    if (document.readyState === 'complete') setTimeout(load, 150);
    else addEventListener('load', () => setTimeout(load, 150), { once: true });
  });
}

const lower = (s: string) => s.toLocaleLowerCase('tr-TR');
const BASE: MapState = { trade: 'kuyumcu', district: 'Merkezefendi', profile: false, speed: false, content: 0, pages: false };

// Writes a state into every readout on the page and into the map.
function show(state: MapState, map: DenizliMap | null) {
  const r = ranks(state);
  const s = summary(r);
  const trade = lower(state.trade.trim()) || 'kuyumcu';
  const query = `denizli ${trade}`;
  document.querySelectorAll('[data-out-query]').forEach((el) => { el.textContent = query; });
  document.querySelectorAll('[data-trade]').forEach((el) => { el.textContent = trade; });
  document.querySelectorAll('[data-out-top3]').forEach((el) => { el.textContent = String(s.top3); });
  document.querySelectorAll('[data-out-avg]').forEach((el) => { el.textContent = fmt(s.avg); });
  document.querySelectorAll('.readout__q').forEach((el) => el.setAttribute('aria-label', `Google araması: ${query}`));
  const text = `Merhaba, ${state.district}’de ${trade} işletmemiz var. “${query}” aramasında nerede çıktığımızı öğrenmek istiyoruz.`;
  document.querySelectorAll<HTMLAnchorElement>('[data-wa-story]').forEach((a) => { a.href = waUrl(text); });
  map?.setRanks(r, state.district);
}

// The story: the map fills a held stage and one panel beside it changes as the page scrolls:
// the title first, then each step. Reaching a service switches it on, unless the visitor set it by hand.
(() => {
  const story = document.querySelector<HTMLElement>('.story');
  const form = story?.querySelector<HTMLFormElement>('[data-story]');
  const stage = story?.querySelector<HTMLElement>('[data-stage]');
  if (!story || !form || !stage) return;
  // reduced motion keeps the finished composition: the map in its box, every step listed under it
  const live = !reduced;
  if (live) story.classList.add('is-live');
  const state: MapState = { ...BASE };
  const touched = new Set<number>();
  let map: DenizliMap | null = null;
  const apply = () => show(state, map);

  const tradeInput = form.querySelector<HTMLInputElement>('[name="trade"]')!;
  const districtSelect = form.querySelector<HTMLSelectElement>('[name="district"]')!;
  const switches = [...form.querySelectorAll<HTMLButtonElement>('.switch')];
  const speed = [...form.querySelectorAll<HTMLInputElement>('[name="speed"]')];
  const chips = [...form.querySelectorAll<HTMLInputElement>('[name="content"]')];
  const blocks = [...form.querySelectorAll<HTMLElement>('[data-step]')];
  const tabs = [...form.querySelectorAll<HTMLButtonElement>('.tab')];
  const BEATS = blocks.length + 1; // the title, then one beat per step

  const setStep = (step: number, on: boolean) => {
    if (step === 1) { state.profile = on; switches[0]?.setAttribute('aria-checked', String(on)); }
    if (step === 2) { state.speed = on; speed[on ? 1 : 0].checked = true; }
    if (step === 3) { chips.forEach((c) => { c.checked = on; }); state.content = on ? chips.length : 0; }
    if (step === 4) { state.pages = on; switches[1]?.setAttribute('aria-checked', String(on)); }
  };

  tradeInput.addEventListener('input', () => { state.trade = tradeInput.value; apply(); });
  districtSelect.addEventListener('change', () => { state.district = districtSelect.value; map?.focusOn(state.district, 0.7); apply(); });
  switches.forEach((b, k) => b.addEventListener('click', () => {
    const step = k === 0 ? 1 : 4;
    touched.add(step);
    setStep(step, b.getAttribute('aria-checked') !== 'true');
    apply();
  }));
  speed.forEach((r) => r.addEventListener('change', () => { touched.add(2); state.speed = speed[1].checked; apply(); }));
  chips.forEach((c) => c.addEventListener('change', () => { touched.add(3); state.content = chips.filter((x) => x.checked).length; apply(); }));

  // where the page is in the story decides the beat
  let beat = -1;
  const span = () => Math.max(1, story.offsetHeight - innerHeight);
  const setBeat = (n: number) => {
    if (!live || n === beat) return;
    beat = n;
    story.dataset.beat = String(n);
    const k = n - 1; // the active step, -1 on the title
    blocks.forEach((b, i) => b.classList.toggle('is-active', i === k));
    tabs.forEach((t, i) => t.setAttribute('aria-selected', String(i === Math.min(k, tabs.length - 1) && k >= 0)));
    for (let s = 1; s <= 4; s++) if (!touched.has(s)) setStep(s, s <= k);
    if (k === 0) map?.focusOn(state.district, 0.7); else map?.focusOn(null);
    apply();
  };
  let ticking = false;
  const onScroll = () => {
    ticking = false;
    const p = Math.min(1, Math.max(0, -story.getBoundingClientRect().top / span()));
    setBeat(Math.min(BEATS - 1, Math.floor(p * BEATS * 0.999)));
    map?.setProgress(p);
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  addEventListener('resize', onScroll, { passive: true });

  // a tab, or the title's "how it works", jumps to the middle of that beat
  story.querySelectorAll<HTMLElement>('[data-story-go]').forEach((el) => el.addEventListener('click', (e) => {
    if (!live) return;
    e.preventDefault();
    const n = Number(el.dataset.storyGo);
    const top = story.getBoundingClientRect().top + scrollY + ((n + 0.5) / BEATS) * span();
    scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' });
  }));

  onScroll();
  const shift = () => (!live ? { x: 0, y: 0 } : innerWidth >= 1024 ? { x: 0.22, y: 0.02 } : { x: 0, y: innerWidth < 768 ? 0.24 : 0.2 });
  bootMap(stage, (d) => { state.district = d; districtSelect.value = d; map?.focusOn(d, 0.7); apply(); }, shift).then((m) => {
    if (!m) return;
    map = m; apply(); onScroll();
    if (beat === 1) m.focusOn(state.district, 0.7);
  });
})();

// The map on other pages: a ranking view with one switch (this service on or off), or a place.
document.querySelectorAll<HTMLElement>('[data-stage]').forEach((stage) => {
  if (stage.closest('.story')) return;
  let map: DenizliMap | null = null;
  if (stage.dataset.mode === 'place') {
    const place = JSON.parse(stage.dataset.place || '{}') as { district: string; badge: string };
    bootMap(stage).then((m) => { if (m) { m.placeMode(place.district, place.badge); m.focusOn(place.district, 0.75); } });
    return;
  }
  const preset = JSON.parse(stage.dataset.preset || '{}') as Partial<MapState>;
  const state: MapState = { ...BASE, ...preset };
  const toggle = document.querySelector<HTMLButtonElement>('[data-stage-toggle]');
  toggle?.addEventListener('click', () => {
    const on = toggle.getAttribute('aria-checked') !== 'true';
    toggle.setAttribute('aria-checked', String(on));
    Object.assign(state, on ? preset : Object.fromEntries(Object.entries(preset).map(([k, v]) => [k, typeof v === 'number' ? 0 : false])));
    show(state, map);
  });
  show(state, map);
  bootMap(stage).then((m) => { map = m; show(state, map); });
});

// Questions: each answer opens under its question; one open at a time.
document.querySelectorAll<HTMLElement>('[data-faq]').forEach((faq) => {
  const qs = [...faq.querySelectorAll<HTMLButtonElement>('[data-faq-q]')];
  qs.forEach((b, i) => {
    b.addEventListener('click', () => {
      const open = b.getAttribute('aria-expanded') !== 'true';
      qs.forEach((o) => o.setAttribute('aria-expanded', String(o === b && open)));
    });
    b.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
      e.preventDefault();
      qs[(i + (e.key === 'ArrowDown' ? 1 : qs.length - 1)) % qs.length].focus();
    });
  });
});

// One field: what you do and where, sent as a WhatsApp message.
document.querySelectorAll<HTMLFormElement>('[data-contact]').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const v = String(new FormData(form).get('text') || '').trim();
    openOut(waUrl(`Merhaba, ${v ? v.replace(/[.!]+$/, '') + '. ' : ''}Aramamızda nerede çıktığımızı öğrenmek istiyoruz.`));
  });
});

// Weighted scrolling and the sideways strip, only where motion is welcome.
if (!reduced && document.querySelector('.scene, [data-stage]')) import('./motion');
