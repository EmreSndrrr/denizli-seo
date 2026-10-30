export const $ = <T extends Element = HTMLElement>(s: string, c: ParentNode = document) => c.querySelector<T>(s);
export const $$ = <T extends Element = HTMLElement>(s: string, c: ParentNode = document) => Array.from(c.querySelectorAll<T>(s));
export const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
export const smooth = (a: number, b: number, v: number) => {
  const t = clamp((v - a) / Math.max(1e-6, b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
export const isMobile = () => innerWidth < 768;
