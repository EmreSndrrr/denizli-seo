// The sample ranking model behind the map. It is an illustration, labelled as such on the page:
// the business sits in one district, people searching farther away see it lower, and each service
// moves it up by a plausible amount. Not a forecast and not a promise.
import LABEL_POINTS from '../data/denizli-labels.json';

export interface MapState {
  trade: string;
  district: string;
  profile: boolean;   // Google İşletme Profili in order (yerel SEO)
  speed: boolean;     // fast, error-free pages (teknik SEO)
  content: number;    // question pages written, 0–3 (içerik SEO)
  pages: boolean;     // one page per district served (web tasarım)
}

export const LABELS = LABEL_POINTS as unknown as Record<string, [number, number]>;

const hash = (s: string) => {
  let h = 2166136261;
  for (const ch of s) h = Math.imul(h ^ ch.codePointAt(0)!, 16777619);
  return h >>> 0;
};

export function ranks(s: MapState): Record<string, number> {
  const home = LABELS[s.district] ?? LABELS.Merkezefendi;
  const trade = s.trade.trim().toLocaleLowerCase('tr') || 'kuyumcu';
  const out: Record<string, number> = {};
  for (const [name, p] of Object.entries(LABELS)) {
    const d = Math.hypot(p[0] - home[0], p[1] - home[1]);
    const noise = (hash(trade + name) % 5) - 2;
    let r = 8 + d / 8 + noise;
    if (s.profile) r -= 1 + 7 * Math.max(0, 1 - d / 60);
    if (s.speed) r -= 2;
    r -= Math.max(0, Math.min(3, s.content));
    if (s.pages) r -= Math.min(8, d / 10);
    out[name] = Math.max(1, Math.min(20, Math.round(r)));
  }
  return out;
}

export function summary(r: Record<string, number>) {
  const v = Object.values(r);
  return { top3: v.filter((x) => x <= 3).length, total: v.length, avg: v.reduce((a, b) => a + b, 0) / v.length };
}

export const fmt = (n: number) => n.toLocaleString('tr-TR', { maximumFractionDigits: 1, minimumFractionDigits: 1 });
export const rankText = (n: number) => (n >= 20 ? '20+' : String(n));
