// Scroll motion: weighted wheel scrolling (Lenis). Without this file the page scrolls natively.
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

// Heights change once fonts and pictures are in.
const refresh = () => ScrollTrigger.refresh();
if (document.fonts) document.fonts.ready.then(refresh);
addEventListener('load', refresh);
