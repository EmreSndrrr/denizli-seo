// Scroll motion: weighted wheel scrolling (Lenis) and the work strip that slides sideways while the
// page scrolls down. Without this file the strip is a row the visitor swipes, and nothing is hidden.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);
const html = document.documentElement;

if (!matchMedia('(pointer: coarse)').matches) {
  const lenis = new Lenis({ lerp: 0.12, smoothWheel: true, anchors: true, autoRaf: false });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  html.classList.add('is-smooth');
}

// The strip: slides turn in 3D by their distance from the middle.
document.querySelectorAll<HTMLElement>('.work.scene').forEach((work) => {
  const view = work.querySelector<HTMLElement>('[data-strip-view]')!;
  const track = work.querySelector<HTMLElement>('[data-strip-track]')!;
  const slides = [...work.querySelectorAll<HTMLElement>('[data-slide]')];
  const turn = () => {
    const vr = view.getBoundingClientRect();
    const mid = vr.left + vr.width / 2;
    for (const s of slides) {
      const r = s.getBoundingClientRect();
      const raw = (r.left + r.width / 2 - mid) / vr.width;
      if (Math.abs(raw) > 1.6) continue;
      const d = Math.sign(raw) * Math.max(0, Math.abs(raw) - 0.12); // the slide in the middle sits flat
      s.style.transform = `rotateY(${(-d * 16).toFixed(2)}deg) translateZ(${(-Math.abs(d) * 70).toFixed(1)}px)`;
    }
  };
  const mm = gsap.matchMedia();
  mm.add('(min-width: 768px)', () => {
    work.classList.add('is-live');
    work.style.setProperty('--hold', '2');
    const tween = gsap.to(track, {
      x: () => -(track.offsetWidth - view.clientWidth + parseFloat(getComputedStyle(view).paddingLeft) * 2),
      ease: 'none',
      scrollTrigger: { trigger: work, start: 'top top', end: 'bottom bottom', scrub: true, invalidateOnRefresh: true, onUpdate: turn, onRefresh: turn },
    });
    turn();
    return () => { tween.scrollTrigger?.kill(); tween.kill(); gsap.set(track, { clearProps: 'transform' }); work.classList.remove('is-live'); work.style.removeProperty('--hold'); };
  });
  mm.add('(max-width: 767.98px)', () => {
    view.addEventListener('scroll', turn, { passive: true });
    turn();
    return () => view.removeEventListener('scroll', turn);
  });
});

// Heights change once fonts and pictures are in.
const refresh = () => ScrollTrigger.refresh();
if (document.fonts) document.fonts.ready.then(refresh);
addEventListener('load', refresh);
