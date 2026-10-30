// Small interface parts: the phone menu, the questions, the card tilt, and the form that opens WhatsApp.
import { $, $$ } from './util';
import { waLink } from '../../data/site';

export function initDrawer(close: () => void) {
  const btn = $('#mobile-menu-btn');
  const drawer = $('#mobile-drawer');
  if (!btn || !drawer) return { close: () => {} };
  const set = (open: boolean) => {
    drawer.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
  };
  btn.addEventListener('click', () => set(!drawer.classList.contains('open')));
  addEventListener('keydown', (e) => { if (e.key === 'Escape') { set(false); } });
  drawer.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => { set(false); close(); }));
  return { close: () => set(false) };
}

export function initFaq() {
  $$('[data-faq]').forEach((faq) => {
    const qs = $$<HTMLButtonElement>('[data-faq-q]', faq);
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
}

// the service cards tilt toward the pointer and catch a sheen
export function initTilt() {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  $$('.svc').forEach((card) => {
    const inner = $('.svc-in', card)!;
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      inner.style.setProperty('--mx', (x * 100).toFixed(1) + '%');
      inner.style.setProperty('--my', (y * 100).toFixed(1) + '%');
      inner.style.transform = `perspective(900px) rotateX(${((0.5 - y) * 6).toFixed(2)}deg) rotateY(${((x - 0.5) * 8).toFixed(2)}deg)`;
    });
    card.addEventListener('pointerleave', () => { inner.style.transform = ''; });
  });
}

// one short form: the request is written out and sent as a WhatsApp message
export function initForm() {
  const form = $<HTMLFormElement>('#audit-form');
  const status = $('#form-status');
  if (!form || !status) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const site = $<HTMLInputElement>('#f-site')!;
    const goal = $<HTMLInputElement>('#f-goal')!;
    status.hidden = false;
    if (!goal.value.trim()) {
      goal.setAttribute('aria-invalid', 'true');
      status.textContent = 'Lütfen işinizi ve ilçenizi yazın, örn. “Merkezefendi’de kuyumcu”.';
      goal.focus();
      return;
    }
    goal.removeAttribute('aria-invalid');
    const s = site.value.trim();
    const text = `Merhaba, ücretsiz SEO analizi istiyorum. ${goal.value.trim().replace(/[.!]+$/, '')}.${s ? ` Sitemiz: ${s}.` : ''} Aramamızda nerede çıktığımızı öğrenmek istiyoruz.`;
    const url = waLink(text);
    status.textContent = 'WhatsApp açılıyor. Mesajınız yazılı gelecek; göndermeden önce görebilirsiniz.';
    const w = window.open(url, '_blank', 'noopener');
    if (!w) location.href = url;
  });
}
