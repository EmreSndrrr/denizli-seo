// Home page behaviour. The page is complete without any of this; with it, the 3D stage, the pinned
// chapters and the scroll-driven motion switch on. three.js loads after the first paint.
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { $, $$, clamp } from './util';
import { M, measure, buildKeys, sample, firstKey, paperAmount, serpArrival, FIELDS, type StageState } from './choreo';
import { updateSerp, initSearch, onQuery, setRowStep } from './serp';
import { layoutReel, updateReel, initReel, hasPanels } from './reel';
import { initDrawer, initFaq, initTilt, initForm } from './ui';
import { initDenizli } from './denizli';
import type { Stage } from './stage';

const root = document.documentElement;
const reduce = root.classList.contains('rm');
const fx = !reduce;
if (fx) { root.classList.add('fx'); gsap.registerPlugin(ScrollTrigger); }

/* ---------- smooth scroll ---------- */
let lenis: Lenis | null = null;
if (fx) {
  lenis = new Lenis({ duration: 1.15, smoothWheel: true, autoRaf: false });
  (window as unknown as { __lenis?: Lenis }).__lenis = lenis; // used by the test scripts
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis!.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}
function scrollToTarget(target: HTMLElement | number) {
  drawer.close();
  if (lenis) lenis.scrollTo(target, { duration: 1.5 });
  else if (typeof target === 'number') scrollTo({ top: target, behavior: reduce ? 'auto' : 'smooth' });
  else target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
}
const scrollToY = (y: number) => scrollToTarget(y);
const drawer = initDrawer(() => {});
$$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
  const id = a.getAttribute('href') || '';
  const el = id.length > 1 ? $(id) : null;
  if (!el) return;
  e.preventDefault();
  scrollToTarget(id === '#top' ? 0 : el);
}));

/* ---------- parts that need no 3D ---------- */
initFaq();
initTilt();
initForm();
initReel(scrollToY);
initDenizli(reduce);
initSearch(scrollToY, measure, reduce);

/* ---------- the 3D stage ---------- */
const canvas = $<HTMLCanvasElement>('#stage')!;
let stage: Stage | null = null;
const cur = {} as StageState;
let hasCur = false;
const ptr = { x: 0, y: 0 };
addEventListener('pointermove', (e) => { ptr.x = (e.clientX / innerWidth) * 2 - 1; ptr.y = (e.clientY / innerHeight) * 2 - 1; }, { passive: true });
const paperLayer = $('.backdrop i')!;
const serpEl = $('.serp')!;
let lastArrival = -1;
const nav = $('.nav')!;
const navLinks = $$<HTMLAnchorElement>('.nav-links a[data-section]');
const SECTION_BOX = { siralama: 'serp', hizmetler: 'services', surec: 'process', isler: 'work' } as const;

function startStage() {
  import('./stage').then(({ createStage }) => {
    try {
      stage = createStage(canvas, () => innerWidth < 768);
    } catch (err) {
      console.warn('3D sahne başlatılamadı', err);
      canvas.remove();
      return;
    }
    root.classList.add('stage-on');
    onQuery((q, t) => stage?.setQuery(q, t));
    stage.resize();
    const first = sample(scrollY) || firstKey();
    if (first) { Object.assign(cur, first); hasCur = true; }
    if (!fx && first) stage.render(Object.assign({}, firstKey()), 0, 0, ptr, true);
  }).catch((err) => { console.warn('three.js yüklenemedi', err); canvas.remove(); });
}

/* ---------- layout: measure, keyframes ---------- */
function resize() {
  layoutReel();
  const you = $('[data-you]');
  if (fx && you) setRowStep(you.offsetHeight + 8);
  buildKeys();
  stage?.resize();
}

/* ---------- frame loop ---------- */
let prev = performance.now();
const mqTrack = $('.marquee-track');
const mqAnim = mqTrack && mqTrack.getAnimations ? mqTrack.getAnimations()[0] : null;
let mqBoost = 0;
if (lenis) lenis.on('scroll', (e: { velocity?: number }) => { mqBoost = Math.min(5, Math.abs(e.velocity || 0) * 0.12); });

function updateNav(y: number) {
  nav.classList.toggle('scrolled', y > 24);
  const mid = y + M.H * 0.35;
  navLinks.forEach((a) => {
    const box = M[SECTION_BOX[a.dataset.section as keyof typeof SECTION_BOX]];
    if (box) a.classList.toggle('active', mid >= box.t && mid < box.t + box.h);
  });
}

function tick(now: number) {
  requestAnimationFrame(tick);
  if (document.hidden) { prev = now; return; }
  const dt = Math.min(0.05, (now - prev) / 1000);
  prev = now;
  const t = now / 1000, y = scrollY;
  const paper = paperAmount(y);
  paperLayer.style.opacity = paper.toFixed(3);
  const arrival = +serpArrival(y).toFixed(3);
  if (arrival !== lastArrival) { serpEl.style.setProperty('--serp-in', String(arrival)); lastArrival = arrival; }
  nav.classList.toggle('on-light', paper > 0.5);
  updateNav(y);
  if (hasPanels()) updateReel(y);
  updateSerp(y);
  if (mqAnim) { mqBoost *= 0.92; mqAnim.playbackRate = 1 + mqBoost; }
  if (!stage) return;
  const tgt = sample(y);
  if (!tgt) return;
  if (!hasCur) { Object.assign(cur, tgt); hasCur = true; }
  const jump = Math.abs(tgt.cz - cur.cz) > 3;
  const f = jump ? 1 : 1 - Math.pow(0.00002, dt);
  for (const k of FIELDS) cur[k] += (tgt[k] - cur[k]) * f;
  stage.render(cur, t, paper, ptr, false);
}

/* ---------- scroll choreography ---------- */
function setupScroll() {
  const tl = gsap.timeline({ scrollTrigger: { trigger: '.lens', start: 'top top', end: 'bottom bottom', scrub: 0.5 } });
  tl.fromTo('.lens .l1', { autoAlpha: 0, yPercent: 40 }, { autoAlpha: 1, yPercent: 0, duration: 0.12, ease: 'power2.out' }, 0.03)
    .to('.lens .l1', { autoAlpha: 0, yPercent: -40, duration: 0.09, ease: 'power2.in' }, 0.34)
    .fromTo('.lens .l2', { autoAlpha: 0, yPercent: 40 }, { autoAlpha: 1, yPercent: 0, duration: 0.12, ease: 'power2.out' }, 0.44)
    .to('.lens .l2', { autoAlpha: 0, scale: 1.22, duration: 0.12, ease: 'power2.in' }, 0.74)
    .to({}, { duration: 0.01 }, 0.99);

  $$('.reveal').forEach((el) => gsap.fromTo(el, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 95%', end: 'top 72%', scrub: 0.4 } }));
  $$('.svc').forEach((el, i) => gsap.fromTo(el, { y: 65, autoAlpha: 0 }, { y: 0, autoAlpha: 1, ease: 'none', scrollTrigger: { trigger: el, start: 'top ' + (98 - (i % 3) * 2) + '%', end: 'top 74%', scrub: 0.4 } }));
  gsap.fromTo('.proc-line i', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.proc-steps', start: 'top 66%', end: 'bottom 66%', scrub: 0.4 } });
  $$('.step').forEach((s) => ScrollTrigger.create({ trigger: s, start: 'top 72%', onEnter: () => s.classList.add('on'), onLeaveBack: () => s.classList.remove('on') }));
  ScrollTrigger.addEventListener('refresh', buildKeys);
}

/* ---------- entrance: #100 down to #1, the ring flies into the logo ---------- */
function intro() {
  gsap.from('.hero-title .ln > span', { yPercent: 110, duration: 1.15, ease: 'expo.out', stagger: 0.09 });
  gsap.from(['.search-wrap', '.hero-sub', '.hero-cta', '.hero-proof', '.marquee'], { autoAlpha: 0, y: 22, duration: 0.9, ease: 'power3.out', stagger: 0.07, delay: 0.25 });
}
function runPreloader() {
  const pl = $('.preloader');
  if (!pl) { intro(); return; }
  if (root.classList.contains('seen')) { pl.remove(); intro(); return; }
  try { sessionStorage.setItem('dseo-intro', '1'); } catch { /* private mode */ }
  pl.style.animation = 'none';
  lenis?.stop();
  const num = $('.pl-num', pl)!, arc = $<SVGCircleElement>('.pl-arc', pl)!, wrap = $('.pl-ringwrap', pl)!;
  const C = 2 * Math.PI * 46;
  arc.style.strokeDasharray = String(C);
  arc.style.strokeDashoffset = String(C);
  const o = { v: 0 };
  let dx = 0, dy = 0, sc = 0.25;
  const tl = gsap.timeline({ onComplete() { pl.remove(); lenis?.start(); } });
  tl.to(o, { v: 1, duration: 0.85, ease: 'power2.inOut', onUpdate() {
      num.textContent = '#' + Math.max(1, Math.round(100 - 99 * o.v));
      arc.style.strokeDashoffset = (C * (1 - o.v)).toFixed(2);
    } })
    .add(() => {
      const r = wrap.getBoundingClientRect(), l = $('.logo-mark')!.getBoundingClientRect();
      dx = l.left + l.width * 0.41 - (r.left + r.width / 2);
      dy = l.top + l.height * 0.41 - (r.top + r.height / 2);
      sc = (l.width * 0.62) / r.width;
    }, '+=0.05')
    .to(num, { autoAlpha: 0, duration: 0.2 })
    .to(wrap, { x: () => dx, y: () => dy, scale: () => sc, duration: 0.7, ease: 'expo.inOut' }, '<')
    .to(pl, { backgroundColor: 'rgba(11,14,19,0)', duration: 0.65, ease: 'power2.inOut' }, '<0.15')
    .to('.pl-cap', { autoAlpha: 0, duration: 0.3 }, '<')
    .add(intro, '<0.2')
    .to(wrap, { autoAlpha: 0, duration: 0.25 }, '>-0.1');
}

/* ---------- boot ---------- */
resize();
if (fx) { setupScroll(); runPreloader(); requestAnimationFrame(tick); }
const boot = () => setTimeout(startStage, 100);
if (document.readyState === 'complete') boot(); else addEventListener('load', boot, { once: true });

let rT = 0;
addEventListener('resize', () => {
  clearTimeout(rT);
  rT = window.setTimeout(() => {
    resize();
    if (fx) ScrollTrigger.refresh();
    else if (stage) stage.render(Object.assign({}, firstKey()), 0, 0, ptr, true);
  }, 150);
});
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (fx) ScrollTrigger.refresh(); buildKeys(); });
export { clamp };
