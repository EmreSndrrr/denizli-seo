// Small, dependency-free behaviour for the whole site. Every effect has a finished state without it.

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// 0. Long articles: blocks below the first screen arrive as they are reached.
if (!reduced) {
  document.querySelectorAll<HTMLElement>('.prose > h2, .prose > h3, .prose > ul, .prose > ol').forEach((el) => {
    if (el.getBoundingClientRect().top > window.innerHeight) el.dataset.reveal = '';
  });
}

// 1. Reveal once as an element enters the viewport.
(() => {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!targets.length) return;
  if (!('IntersectionObserver' in window)) { targets.forEach((el) => el.classList.add('is-in')); return; }
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-in');
      io.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
  targets.forEach((el) => io.observe(el));
  // Safety net: anything on screen a moment after load is shown, even if the observer never fired.
  window.addEventListener('load', () => setTimeout(() => {
    targets.forEach((el) => { const r = el.getBoundingClientRect(); if (r.top < innerHeight && r.bottom > 0) el.classList.add('is-in'); });
  }, 1800));
})();

// 2. Phone menu.
(() => {
  const menu = document.getElementById('menu');
  const open = document.querySelector<HTMLButtonElement>('[data-menu-open]');
  const close = document.querySelector<HTMLButtonElement>('[data-menu-close]');
  if (!menu || !open || !close) return;
  const set = (on: boolean) => {
    if (on) menu.setAttribute('data-open', ''); else menu.removeAttribute('data-open');
    open.setAttribute('aria-expanded', String(on));
    document.body.style.overflow = on ? 'hidden' : '';
    (on ? close : open).focus();
  };
  open.addEventListener('click', () => set(true));
  close.addEventListener('click', () => set(false));
  menu.addEventListener('keydown', (e) => { if (e.key === 'Escape') set(false); });
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => set(false)));
})();

// 3. The live thing: the search field inside the headline.
//    It shows a few trades in turn until the visitor touches it; what they type goes into the
//    WhatsApp messages on the page, so "Teklif" starts from their own search.
(() => {
  const input = document.querySelector<HTMLInputElement>('[data-query]');
  if (!input) return;
  const echoes = document.querySelectorAll<HTMLElement>('[data-query-echo]');
  const links = document.querySelectorAll<HTMLAnchorElement>('[data-wa-query]');
  const phone = input.dataset.phone || '';
  const trades = (input.dataset.trades || '').split(',').filter(Boolean);
  let touched = false;
  let i = 0;

  const message = (q: string) => `Merhaba, Denizli’de “${q}” aramasında işletmemizin nerede çıktığını öğrenmek istiyorum.`;
  const apply = (q: string, updateLinks: boolean) => {
    const clean = q.trim().slice(0, 40) || 'kuyumcu';
    echoes.forEach((el) => { el.textContent = clean; });
    if (updateLinks) links.forEach((a) => { a.href = `https://wa.me/${phone}?text=${encodeURIComponent(message(clean))}`; });
  };

  const stop = () => { touched = true; window.clearInterval(timer); };
  input.addEventListener('focus', () => { stop(); input.select(); });
  input.addEventListener('input', () => apply(input.value, true));
  input.form?.addEventListener('submit', (e) => { e.preventDefault(); apply(input.value, true); links[0]?.focus(); });

  let timer = 0;
  if (!reduced && trades.length > 1) {
    timer = window.setInterval(() => {
      if (touched || document.hidden) return;
      const box = input.closest<HTMLElement>('.q');
      if (!box) return;
      i = (i + 1) % trades.length;
      box.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 160, easing: 'ease-out' }).finished.then(() => {
        if (touched) return;
        input.value = trades[i];
        apply(trades[i], false);
        box.animate([{ opacity: 0, transform: 'translateY(0.06em)' }, { opacity: 1, transform: 'none' }], { duration: 260, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' });
      });
    }, 2600);
  }
})();

// 4. One frame, three distances: three invisible markers set the stage as they pass the middle.
(() => {
  const zoom = document.querySelector<HTMLElement>('[data-zoom]');
  if (!zoom || !('IntersectionObserver' in window)) return;
  const count = zoom.querySelector<HTMLElement>('[data-zoom-count]');
  const marks = zoom.querySelectorAll<HTMLElement>('[data-zoom-mark]');
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const stage = (e.target as HTMLElement).dataset.zoomMark || '1';
      zoom.dataset.stage = stage;
      if (count) count.textContent = `${stage} / 3`;
    }
  }, { rootMargin: '-49% 0px -49% 0px', threshold: 0 });
  marks.forEach((m) => io.observe(m));
})();

// 5. The one clip: plays muted while on screen, pauses off screen; under reduced motion it stays on its poster.
(() => {
  const videos = document.querySelectorAll<HTMLVideoElement>('video[data-autoplay]');
  if (!videos.length) return;
  if (reduced || !('IntersectionObserver' in window)) { videos.forEach((v) => { v.controls = true; }); return; }
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      const v = e.target as HTMLVideoElement;
      if (e.isIntersecting) { v.play().catch(() => { v.controls = true; }); } else { v.pause(); }
    }
  }, { rootMargin: '120px 0px', threshold: 0.15 });
  videos.forEach((v) => io.observe(v));
})();
