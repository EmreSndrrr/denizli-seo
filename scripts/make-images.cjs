// Draws the site's share images and blog covers from the design system (colours, Archivo) and renders them
// with Playwright. Original artwork only: no photos, no stock.
//   NODE_PATH=$(npm root -g) node scripts/make-images.cjs
// Outputs: public/og/*.jpg (1200x630, with title), public/blog/<slug>.jpg (cover, no title)
// and public/blog/<slug>-640.webp (card thumbnail).
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..');
const C = {
  ink: '#0b0e13', card: '#17171c', card2: '#1f1f26', line: 'rgba(255,255,255,.16)', soft: '#b9bcc6', paper: '#f3f2ec',
  pink: '#d82068', pinkT: '#ff5b97', orange: '#f05a1e', orangeT: '#ff8a4c', purple: '#8a1fe0', purpleT: '#b57bff',
};
// Fonts are embedded as data URIs: a page set with setContent cannot read file:// URLs.
const RANGE = {
  latin: 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215',
  'latin-ext': 'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+1E00-1E9F,U+2020,U+20A0-20AB,U+20AD-20C4,U+2113',
};
const fontCss = ['latin', 'latin-ext']
  .map((n) => {
    const b64 = fs.readFileSync(path.join(root, `public/fonts/archivo-${n}.woff2`)).toString('base64');
    return `@font-face{font-family:'Archivo';font-weight:100 900;font-stretch:62% 125%;src:url(data:font/woff2;base64,${b64}) format('woff2');unicode-range:${RANGE[n]};}`;
  })
  .join('');

// ---------- drawing helpers (600 x 600 canvas) ----------
const pin = (x, y, s, fill, dot = C.ink) =>
  `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0C-18-26-27-38-27-53a27 27 0 1 1 54 0c0 15-9 27-27 53z" fill="${fill}"/><circle cx="0" cy="-53" r="10" fill="${dot}"/></g>`;
const hex = (cx, cy, r, fill, stroke = C.line) => {
  const pts = [0, 1, 2, 3, 4, 5].map((i) => { const a = (Math.PI / 3) * i + Math.PI / 6; return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`; }).join(' ');
  return `<polygon points="${pts}" fill="${fill}" stroke="${stroke}" stroke-width="2" stroke-linejoin="round"/>`;
};
const bar = (x, y, w, fill = C.line, h = 10) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${fill}"/>`;
const star4 = (x, y, r, fill) => `<path d="M${x} ${y - r}Q${x + r * 0.18} ${y - r * 0.18} ${x + r} ${y}Q${x + r * 0.18} ${y + r * 0.18} ${x} ${y + r}Q${x - r * 0.18} ${y + r * 0.18} ${x - r} ${y}Q${x - r * 0.18} ${y - r * 0.18} ${x} ${y - r}z" fill="${fill}"/>`;
const link = (x, y, rot, stroke) => `<rect x="${-70}" y="${-34}" width="140" height="68" rx="34" fill="none" stroke="${stroke}" stroke-width="16" transform="translate(${x} ${y}) rotate(${rot})"/>`;

const MOTIFS = {
  pins: () => {
    const blob = 'M110 210C120 120 230 70 330 90C430 105 520 150 515 250C510 340 540 400 470 460C400 520 300 505 220 495C140 485 90 420 100 340C103 290 105 250 110 210Z';
    return `<path d="${blob}" fill="${C.card2}" stroke="${C.line}" stroke-width="3"/>
      <path d="M150 250L260 200L350 260L450 210M200 380L300 330L400 400L470 340M300 120L290 330" stroke="${C.line}" stroke-width="2" fill="none"/>
      ${pin(190, 330, 0.55, C.orange)}${pin(430, 290, 0.6, C.purple)}${pin(330, 420, 0.5, C.line)}
      <circle cx="300" cy="260" r="64" fill="none" stroke="${C.pink}" stroke-opacity=".35" stroke-width="3"/><circle cx="300" cy="260" r="100" fill="none" stroke="${C.pink}" stroke-opacity=".18" stroke-width="3"/>
      ${pin(300, 290, 1.05, C.pink, C.paper)}`;
  },
  districts: () => {
    const r = 56, w = Math.sqrt(3) * r, cells = [];
    const rings = [[0, 0]];
    for (const [q, ra] of [[1, 6], [2, 12]]) for (let i = 0; i < ra; i++) rings.push([q, i]);
    const axial = [[0, 0]];
    const dirs = [[1, 0], [0, 1], [-1, 1], [-1, 0], [0, -1], [1, -1]];
    for (const k of [1, 2]) { let q = k * dirs[4][0], rr = k * dirs[4][1]; for (let d = 0; d < 6; d++) for (let s = 0; s < k; s++) { axial.push([q, rr]); q += dirs[d][0]; rr += dirs[d][1]; } }
    const hot = { '0,0': C.pink, '1,0': C.orange, '-1,2': C.purple };
    return axial.map(([q, rr]) => {
      const x = 300 + w * (q + rr / 2), y = 300 + r * 1.5 * rr;
      const f = hot[`${q},${rr}`];
      return hex(x, y, r - 5, f ? f : C.card2, f ? 'none' : C.line);
    }).join('') + cells.join('');
  },
  hotel: () => {
    const wins = []; for (let i = 0; i < 3; i++) for (let j = 0; j < 4; j++) wins.push(`<rect x="${200 + i * 70}" y="${150 + j * 62}" width="38" height="38" rx="6" fill="${(i + j) % 3 === 0 ? C.orange : C.card}" ${(i + j) % 3 === 0 ? '' : `stroke="${C.line}" stroke-width="2"`}/>`);
    return `<rect x="170" y="110" width="260" height="380" rx="18" fill="${C.card2}" stroke="${C.line}" stroke-width="3"/>
      ${wins.join('')}<rect x="268" y="400" width="64" height="90" rx="10" fill="${C.card}" stroke="${C.line}" stroke-width="2"/>
      <rect x="140" y="490" width="320" height="14" rx="7" fill="${C.line}"/>
      <path d="M170 110L300 54L430 110" fill="none" stroke="${C.orange}" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"/>
      ${pin(450, 190, 0.9, C.pink, C.paper)}`;
  },
  gauge: () => `
    <path d="M100 380A200 200 0 0 1 500 380" fill="none" stroke="${C.line}" stroke-width="34" stroke-linecap="round"/>
    <path d="M100 380A200 200 0 0 1 220 200" fill="none" stroke="${C.orange}" stroke-width="34" stroke-linecap="round"/>
    <path d="M232 194A200 200 0 0 1 368 194" fill="none" stroke="${C.purple}" stroke-width="34" stroke-linecap="round"/>
    <path d="M380 200A200 200 0 0 1 500 380" fill="none" stroke="${C.pink}" stroke-width="34" stroke-linecap="round"/>
    <path d="M300 380L392 262" stroke="${C.paper}" stroke-width="12" stroke-linecap="round"/><circle cx="300" cy="380" r="26" fill="${C.paper}"/>
    ${bar(130, 450, 340, C.line, 16)}${bar(130, 450, 230, C.pink, 16)}${bar(130, 490, 340, C.line, 16)}${bar(130, 490, 160, C.orange, 16)}${bar(130, 530, 340, C.line, 16)}${bar(130, 530, 280, C.purple, 16)}`,
  console: () => `
    <rect x="90" y="80" width="420" height="440" rx="22" fill="${C.card2}" stroke="${C.line}" stroke-width="3"/>
    <path d="M130 250L190 210L250 230L320 160L380 185L470 120" fill="none" stroke="${C.pink}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M130 250L190 210L250 230L320 160L380 185L470 120V280H130Z" fill="${C.pink}" fill-opacity=".14"/>
    ${[0, 1, 2].map((i) => `<g transform="translate(130 ${320 + i * 62})"><circle cx="18" cy="18" r="18" fill="${i === 2 ? C.orange : C.pink}"/><path d="${i === 2 ? 'M18 9V20M18 25V27' : 'M9 18L16 25L28 11'}" stroke="${C.paper}" stroke-width="4.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>${bar(54, 7, 220 - i * 30, C.line, 12)}${bar(54, 25, 150 - i * 20, C.line, 10)}</g>`).join('')}`,
  redirect: () => `
    <g opacity=".7"><rect x="60" y="130" width="200" height="150" rx="16" fill="${C.card2}" stroke="${C.line}" stroke-width="3"/>${bar(80, 160, 120)}${bar(80, 190, 150)}${bar(80, 220, 90)}<path d="M80 250L240 160" stroke="${C.orange}" stroke-width="6" stroke-linecap="round"/></g>
    <rect x="340" y="320" width="200" height="150" rx="16" fill="${C.card2}" stroke="${C.pink}" stroke-width="4"/>${bar(360, 350, 120, C.pinkT)}${bar(360, 380, 150)}${bar(360, 410, 90)}
    <path d="M160 300C160 400 260 420 330 400" fill="none" stroke="${C.pink}" stroke-width="8" stroke-linecap="round" stroke-dasharray="2 16"/>
    <path d="M300 372L340 402L296 426" fill="none" stroke="${C.pink}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="430" y="262" font-family="Archivo" font-weight="800" font-stretch="112%" font-size="86" fill="${C.paper}" text-anchor="middle">301</text>`,
  linkgraph: () => {
    const sats = [[110, 150], [490, 130], [530, 330], [440, 500], [140, 460], [70, 310]];
    return `${sats.map(([x, y], i) => `<line x1="300" y1="300" x2="${x}" y2="${y}" stroke="${i % 3 === 0 ? C.pink : C.line}" stroke-width="${i % 3 === 0 ? 5 : 3}"/>`).join('')}
      ${sats.map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="${i % 2 ? 34 : 42}" fill="${C.card2}" stroke="${[C.orange, C.purple, C.pink][i % 3]}" stroke-width="5"/><circle cx="${x}" cy="${y}" r="9" fill="${[C.orangeT, C.purpleT, C.pinkT][i % 3]}"/>`).join('')}
      <circle cx="300" cy="300" r="92" fill="${C.card}" stroke="${C.pink}" stroke-width="7"/><circle cx="288" cy="288" r="32" fill="none" stroke="${C.paper}" stroke-width="10"/><path d="M312 312L342 342" stroke="${C.paper}" stroke-width="12" stroke-linecap="round"/>`;
  },
  broken: () => `
    ${link(210, 250, -28, C.pinkT)}${link(400, 340, -28, C.purpleT)}
    <path d="M290 300L320 270M255 330L235 350M345 250L370 235" stroke="${C.orange}" stroke-width="8" stroke-linecap="round"/>
    <g transform="translate(300 470)"><path d="M0 -70L76 60H-76Z" fill="${C.orange}" stroke="${C.orange}" stroke-width="14" stroke-linejoin="round"/><rect x="-7" y="-28" width="14" height="52" rx="7" fill="${C.ink}"/><circle cx="0" cy="40" r="8" fill="${C.ink}"/></g>`,
  doc: () => `
    <rect x="170" y="90" width="320" height="420" rx="20" fill="${C.card}" stroke="${C.line}" stroke-width="3" transform="rotate(7 330 300)"/>
    <rect x="120" y="70" width="340" height="450" rx="20" fill="${C.card2}" stroke="${C.line}" stroke-width="3"/>
    ${bar(160, 120, 220, C.pink, 22)}${bar(160, 170, 260)}${bar(160, 196, 240)}${bar(160, 222, 190)}
    <rect x="160" y="262" width="260" height="96" rx="12" fill="none" stroke="${C.orange}" stroke-width="4" stroke-dasharray="10 8"/>${bar(184, 288, 180, C.orangeT, 12)}${bar(184, 316, 130, C.line, 12)}
    ${bar(160, 392, 260)}${bar(160, 418, 220)}${bar(160, 444, 250)}${bar(160, 470, 140)}`,
  ai: () => `
    <rect x="100" y="90" width="400" height="250" rx="26" fill="${C.card2}" stroke="${C.line}" stroke-width="3"/>
    ${star4(160, 150, 34, C.pinkT)}${star4(206, 118, 14, C.purpleT)}
    ${bar(150, 210, 320, C.line, 14)}${bar(150, 242, 290, C.line, 14)}${bar(150, 274, 200, C.line, 14)}
    ${[[110, C.pink], [250, C.orange], [390, C.purple]].map(([x, c]) => `<path d="M${x + 50} 340V400" stroke="${c}" stroke-width="4" stroke-dasharray="2 10" stroke-linecap="round"/><rect x="${x - 10}" y="410" width="130" height="64" rx="32" fill="${C.card}" stroke="${c}" stroke-width="4"/><circle cx="${x + 28}" cy="442" r="11" fill="${c}"/>${bar(x + 50, 434, 52, C.line, 10)}`).join('')}`,
  profile: () => `
    <rect x="110" y="70" width="380" height="470" rx="24" fill="${C.card2}" stroke="${C.line}" stroke-width="3"/>
    <rect x="110" y="70" width="380" height="150" rx="24" fill="${C.pink}" fill-opacity=".28"/>
    <circle cx="190" cy="230" r="48" fill="${C.card}" stroke="${C.pink}" stroke-width="6"/>${pin(190, 252, 0.5, C.pinkT, C.card)}
    ${bar(260, 200, 170, C.paper, 18)}${bar(260, 236, 120, C.line, 12)}
    ${[0, 1, 2].map((i) => `<circle cx="${170 + i * 130}" cy="340" r="30" fill="none" stroke="${[C.pinkT, C.orangeT, C.purpleT][i]}" stroke-width="5"/>`).join('')}
    ${[0, 1, 2, 3].map((i) => `${bar(150, 410 + i * 28, 300 - i * 40, C.line, 10)}`).join('')}`,
  chart: () => `
    <path d="M90 90V500H520" fill="none" stroke="${C.line}" stroke-width="4" stroke-linecap="round"/>
    ${[160, 240, 320, 400].map((y) => `<path d="M90 ${y}H520" stroke="${C.line}" stroke-opacity=".5" stroke-width="2"/>`).join('')}
    <path d="M110 440L190 400L260 420L340 320L420 280L500 150V500H110Z" fill="${C.pink}" fill-opacity=".16"/>
    <path d="M110 440L190 400L260 420L340 320L420 280L500 150" fill="none" stroke="${C.pink}" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>
    ${[[110, 440], [190, 400], [260, 420], [340, 320], [420, 280], [500, 150]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="12" fill="${C.card}" stroke="${C.pinkT}" stroke-width="6"/>`).join('')}`,
  lens: () => `
    <rect x="70" y="130" width="330" height="360" rx="20" fill="${C.card2}" stroke="${C.line}" stroke-width="3"/>
    ${[0, 1, 2, 3].map((i) => `${bar(100, 170 + i * 80, 200 - i * 20, i === 1 ? C.pink : C.line, 16)}${bar(100, 196 + i * 80, 260 - i * 30, C.line, 10)}`).join('')}
    <circle cx="360" cy="250" r="140" fill="${C.ink}" fill-opacity=".55" stroke="${C.paper}" stroke-width="22"/><circle cx="360" cy="250" r="118" fill="none" stroke="${C.pink}" stroke-width="4"/>
    <path d="M462 354L545 450" stroke="${C.paper}" stroke-width="36" stroke-linecap="round"/>
    ${bar(290, 220, 130, C.pinkT, 18)}${bar(290, 256, 100, C.paper, 12)}`,
  layout: () => `
    <rect x="50" y="110" width="400" height="300" rx="18" fill="${C.card2}" stroke="${C.line}" stroke-width="3"/>
    <path d="M50 160H450" stroke="${C.line}" stroke-width="3"/><circle cx="82" cy="135" r="7" fill="${C.pink}"/><circle cx="106" cy="135" r="7" fill="${C.orange}"/><circle cx="130" cy="135" r="7" fill="${C.purple}"/>
    ${bar(80, 196, 190, C.pink, 24)}${bar(80, 240, 260)}${bar(80, 266, 220)}<rect x="80" y="310" width="120" height="44" rx="22" fill="${C.pink}"/>
    <rect x="330" y="190" width="90" height="170" rx="12" fill="${C.card}" stroke="${C.line}" stroke-width="2"/>
    <rect x="390" y="190" width="150" height="320" rx="28" fill="${C.card}" stroke="${C.paper}" stroke-width="6" transform="translate(0 40)"/>
    ${bar(412, 270, 100, C.pink, 16)}${bar(412, 306, 106)}${bar(412, 330, 80)}<rect x="412" y="380" width="106" height="130" rx="10" fill="${C.card2}" stroke="${C.line}" stroke-width="2"/>${bar(424, 462, 80, C.orange, 12)}`,
};

const TONE = { pins: 'pink', districts: 'pink', hotel: 'orange', gauge: 'orange', console: 'pink', redirect: 'pink', linkgraph: 'purple', broken: 'orange', doc: 'purple', ai: 'pink', profile: 'pink', chart: 'orange', lens: 'pink', layout: 'orange' };
const GLOW = { pink: 'rgba(216,32,104,.34)', orange: 'rgba(240,90,30,.30)', purple: 'rgba(138,31,224,.34)' };

const brandMark = (s = 40) => `<svg width="${s}" height="${s}" viewBox="0 0 32 32"><circle cx="13" cy="13" r="9" fill="none" stroke="${C.paper}" stroke-width="3.4"/><path d="M20 20L28.5 28.5" stroke="${C.paper}" stroke-width="4" stroke-linecap="round"/></svg>`;

function html({ motif, title, tag, cover }) {
  const tone = TONE[motif];
  const art = `<svg viewBox="0 0 600 600" width="${cover ? 600 : 620}" height="${cover ? 600 : 620}">${MOTIFS[motif]()}</svg>`;
  const size = !title ? 0 : title.length > 46 ? 56 : title.length > 30 ? 64 : 72;
  return `<!doctype html><meta charset="utf-8"><style>${fontCss}
    *{box-sizing:border-box;margin:0}
    html,body{width:1200px;height:630px;background:${C.ink};font-family:'Archivo',sans-serif;color:${C.paper};overflow:hidden}
    .bg{position:absolute;inset:0;background:radial-gradient(ellipse 620px 520px at ${cover ? '50%' : '80%'} 52%,${GLOW[tone]},transparent 70%),radial-gradient(ellipse 500px 300px at 8% 100%,rgba(255,255,255,.05),transparent 70%)}
    .ring{position:absolute;border-radius:50%;border:2px solid rgba(255,255,255,.08);${cover ? 'left:50%;top:50%;' : 'left:80%;top:52%;'}transform:translate(-50%,-50%)}
    .art{position:absolute;${cover ? 'left:300px;top:15px;' : 'left:580px;top:5px;'}}
    .brand{position:absolute;left:64px;top:52px;display:flex;align-items:center;gap:14px;font-weight:800;font-stretch:112%;font-size:30px;letter-spacing:-.02em}
    .tag{position:absolute;left:64px;${cover ? 'bottom:52px' : 'top:150px'};padding:10px 22px;border-radius:999px;border:2px solid ${C[tone + 'T']};color:${C[tone + 'T']};font-weight:700;font-size:24px}
    h1{position:absolute;left:64px;top:230px;width:500px;font-size:${size}px;font-weight:800;font-stretch:108%;line-height:1.06;letter-spacing:-.03em;text-wrap:balance}
    .url{position:absolute;left:64px;bottom:50px;font-size:24px;font-weight:600;color:${C.soft}}
    .bar{position:absolute;left:0;bottom:0;width:100%;height:10px;background:linear-gradient(90deg,${C.pink},${C.orange},${C.purple})}
  </style><div class="bg"></div><div class="ring" style="width:520px;height:520px"></div><div class="ring" style="width:700px;height:700px"></div>
  <div class="art">${art}</div>
  <div class="brand">${brandMark()}Denizli SEO</div>
  ${tag ? `<div class="tag">${tag}</div>` : ''}
  ${title ? `<h1>${title}</h1><div class="url">denizliseo.com</div>` : ''}
  <div class="bar"></div>`;
}

// ---------- what to draw ----------
const SERVICE_TAG = { 'yerel-seo': 'Yerel SEO', 'teknik-seo': 'Teknik SEO', 'icerik-seo': 'İçerik SEO', 'backlink-hizmeti': 'Backlink', 'web-tasarim': 'Web tasarım' };
const PAGES = [
  { out: 'og/denizli-seo', motif: 'lens', tag: 'Denizli SEO', title: 'Google’da ve Haritalar’da üst sıra' },
  { out: 'og/hizmetler', motif: 'districts', tag: 'Hizmetler', title: 'Beş hizmet, tek ekip' },
  { out: 'og/yerel-seo', motif: 'pins', tag: 'Yerel SEO', title: 'Yerel SEO ve Google Haritalar' },
  { out: 'og/teknik-seo', motif: 'gauge', tag: 'Teknik SEO', title: 'Teknik SEO ve site hızı' },
  { out: 'og/icerik-seo', motif: 'doc', tag: 'İçerik SEO', title: 'İçerik ve blog SEO' },
  { out: 'og/backlink-hizmeti', motif: 'linkgraph', tag: 'Backlink', title: 'Backlink ve otorite çalışması' },
  { out: 'og/web-tasarim', motif: 'layout', tag: 'Web tasarım', title: 'SEO uyumlu web tasarım' },
  { out: 'og/hakkimizda', motif: 'profile', tag: 'Hakkımızda', title: 'Venti’nin SEO ekibi' },
  { out: 'og/iletisim', motif: 'pins', tag: 'İletişim', title: 'Sitenize birlikte bakalım' },
  { out: 'og/blog', motif: 'doc', tag: 'Blog', title: 'Arama üzerine notlar' },
  { out: 'og/editoryal-ilkeler', motif: 'console', tag: 'Editoryal ilkeler', title: 'Yazılarımız nasıl hazırlanır?' },
];
const POST_MOTIF = {
  'http-durum-kodlari-200-301-404-500-ne-anlama-gelir': 'redirect',
  '404-sayfasi-nasil-tasarlanir': 'broken',
  'site-hizi-olcumu-laboratuvar-ve-gercek-kullanici-verisi': 'gauge',
  'teknik-seo-denetimi-neler-kontrol-edilir': 'console',
  'sayfa-hizi-icin-gorsel-optimizasyonu-boyut-ve-bicim': 'gauge',
  'google-sayfanizi-nasil-bulur-tarama-ve-dizine-ekleme': 'lens',
  'backlink-raporu-search-consolda-nasil-okunur': 'linkgraph',
  'google-isletme-profili-nasil-acilir': 'pins',
  'google-isletme-profili-nasil-doldurulur': 'profile',
  'seo-ne-kadar-surede-sonuc-verir': 'chart',
  'denizli-yerel-seo-rehberi': 'pins',
  'denizli-ilce-bazli-arama': 'districts',
  'pamukkale-otel-pansiyon-seo': 'hotel',
  'telefonda-hizli-acilan-site': 'gauge',
  'search-console-ilk-kontrol': 'console',
  'site-tasima-301-yonlendirme': 'redirect',
  'denizli-yerel-backlink-kaynaklari': 'linkgraph',
  'backlink-satin-almak-riskleri': 'broken',
  'hizmet-sayfasi-nasil-yazilir': 'doc',
  'yapay-zeka-aramalarinda-gorunmek': 'ai',
  'seo-nedir': 'lens',
  'seo-fiyatlari': 'chart',
  'seo-ajansi-mi-uzmani-mi': 'profile',
  'ucretsiz-seo-analizi-nasil-yapilir': 'console',
  'backlink-nedir': 'linkgraph',
  'backlink-sorgulama': 'console',
  'ucretsiz-backlink-siteleri': 'broken',
  'black-hat-seo': 'broken',
  'google-ust-siralara-cikmak': 'chart',
  'anahtar-kelime-analizi': 'doc',
  'site-ici-site-disi-seo': 'gauge',
  'seo-uyumlu-web-sitesi': 'layout',
  'e-ticaret-seo': 'layout',
  'wordpress-seo': 'console',
  'gorsel-seo': 'gauge',
  'kurumsal-seo': 'districts',
  'google-haritalarda-ust-siralara-cikmak': 'pins',
  'haritada-gorunmuyorum': 'pins',
  'isletme-profili-dogrulanmiyor': 'profile',
  'isletme-profili-askiya-alindi': 'broken',
  'tekstil-ve-ev-tekstili-ureticileri-icin-seo': 'layout',
  'mermer-ve-traverten-firmalari-icin-seo': 'layout',
  'sanayi-firmalari-icin-b2b-seo-alici-nasil-arar': 'layout',
  'zeytinyagi-ve-tarim-urunleri-icin-online-satis-seo-su': 'layout',
  'egitim-kurumlari-ve-kurslar-icin-seo': 'layout',
  'hali-yikama-ve-temizlik-firmalari-icin-seo': 'layout',
  'esnaf-icin-seo-kontrol-listesi-bugun-yapilacak-10-is': 'pins',
  'seo-neden-sonuc-vermez-12-olasi-neden': 'broken',
  'seo-da-sik-yapilan-15-hata': 'broken',
  'seo-sozlesmesinde-bulunmasi-gereken-8-madde': 'doc',
  'seo-terimleri-sozlugu-a-dan-z-ye': 'doc',
  'yeni-acilan-isletme-icin-30-gunluk-seo-plani': 'doc',
  'seo-mu-google-ads-mi-hangisi-size-uygun': 'chart',
  'seo-raporu-nasil-okunur-aylik-rapor-sablonu': 'chart',
  'seo-yatiriminin-geri-donusu-nasil-hesaplanir': 'chart',
  'iletisim-formu-ve-whatsapp-butonu-nasil-kurulur': 'layout',
  'mobil-oncelikli-tasarim-nedir-isletmeler-icin-rehber': 'layout',
  'kurumsal-web-sitesi-kac-sayfa-olmali': 'layout',
  'web-sitesi-yaptirirken-dikkat-edilecek-15-madde': 'layout',
  'web-sitesi-yenileme-seo-kaybetmeden-nasil-yapilir': 'layout',
  'tek-sayfalik-site-mi-cok-sayfali-site-mi': 'layout',
  'menu-ve-site-yapisi-nasil-planlanir': 'layout',
  'hazir-tema-mi-ozel-tasarim-mi-seo-acisindan': 'layout',
  'alan-adi-secimi-seo-icin-nelere-bakilir': 'layout',
  'web-sitesi-guvenligi-ssl-yedek-ve-guncelleme': 'layout',
  'misafir-yazi-guest-post-riskli-mi': 'linkgraph',
  'dijital-pr-ile-dogal-backlink-kazanmak': 'linkgraph',
  'kirik-baglanti-yontemiyle-backlink-kazanmak': 'linkgraph',
  'yerel-haber-sitelerinden-baglanti-nasil-alinir': 'linkgraph',
  'sponsorluk-baglantilari-sponsored-nasil-isaretlenir': 'linkgraph',
  'kaybolan-backlinkler-nasil-geri-kazanilir': 'linkgraph',
  'baglanti-metni-anchor-dagilimi-nasil-olmali': 'linkgraph',
  'rakip-backlink-analizi-nasil-yapilir': 'linkgraph',
  'backlink-satin-almadan-otorite-nasil-artar': 'linkgraph',
  'dizin-ve-katalog-kayitlari-hangileri-ise-yarar': 'linkgraph',
  'is-ortakligi-sayfalarindan-baglanti-almak': 'linkgraph',
  'backlink-calismasinda-ajanstan-hangi-rapor-istenmeli': 'linkgraph',
  'yazar-kutusu-ve-kaynak-gosterme-guven-icin-rehber': 'doc',
  'konu-kumesi-topic-cluster-nedir-basit-anlatim': 'doc',
  'rakip-icerik-analizi-nasil-yapilir': 'doc',
  'arama-sonuclarinda-tiklama-orani-nasil-artirilir': 'doc',
  'sifirdan-bir-isletme-sitesi-icin-hangi-sayfalar-yazilmali': 'doc',
  'iletisim-sayfasi-seo-su-adres-telefon-ve-harita': 'doc',
  'acilis-sayfasi-landing-page-nasil-hazirlanir': 'doc',
  'musteri-yorumlari-siteye-nasil-eklenir': 'doc',
  'vaka-calismasi-nasil-yazilir-durust-bir-sablon': 'doc',
  'ic-baglanti-stratejisi-kucuk-siteler-icin-rehber': 'doc',
  'urun-aciklamasi-nasil-yazilir-kopya-metinden-kacinma': 'doc',
  'kategori-sayfasi-metni-nasil-yazilir': 'doc',
  'hakkimizda-sayfasi-nasil-yazilir-guven-icin-rehber': 'doc',
  'blog-yazisi-nasil-yazilir-seo-uyumlu-8-adim': 'doc',
  'baslik-etiketi-ve-meta-aciklama-nasil-yazilir': 'doc',
  'h1-h2-h3-baslik-yapisi-nasil-kurulur': 'doc',
  'icerik-plani-nasil-yapilir-aylik-takvim-ornegi': 'doc',
  'kopya-icerik-nedir-nasil-onlenir': 'doc',
  'eski-blog-yazilari-ne-zaman-ve-nasil-guncellenir': 'doc',
  'sik-sorulan-sorular-bolumu-nasil-yazilir': 'doc',
  'one-cikan-snippet-e-nasil-girilir': 'doc',
  'yapay-zeka-ile-icerik-yazmak-google-ne-diyor': 'doc',
  'google-a-dizine-ekleme-nasil-istenir-url-denetleme': 'gauge',
  'soft-404-nedir-nasil-duzeltilir': 'gauge',
  'javascript-siteleri-ve-seo-google-sayfayi-goruyor-mu': 'gauge',
  'yapilandirilmis-veri-nedir-isletmeler-icin-rehber': 'gauge',
  'alan-adi-degistirirken-seo-kaybi-nasil-onlenir': 'gauge',
  'www-ve-wwwsuz-adres-tek-adrese-yonlendirme': 'gauge',
  'search-consolede-en-sik-gorulen-10-uyari': 'gauge',
  'trafik-dususu-nasil-teshis-edilir': 'gauge',
  'google-guncellemesinden-sonra-trafik-dustuyse-ne-yapilir': 'gauge',
  '404-hatasi-duzeltmeli-mi-yonlendirmeli-mi': 'gauge',
  '301-ve-302-yonlendirme-farki-nedir': 'gauge',
  'core-web-vitals-nedir-lcp-inp-cls': 'gauge',
  'lcp-nasil-duzeltilir-buyuk-gorseller-sunucu-suresi': 'gauge',
  'https-e-gecis-seo-kontrol-listesi': 'gauge',
  'mobil-uyumluluk-nasil-test-edilir': 'gauge',
  'taranan-dizine-eklenmeyen-sayfalar-nedenleri': 'gauge',
  'kesfedildi-dizine-eklenmedi-ne-anlama-gelir': 'gauge',
  'robots-txt-nedir-nasil-hazirlanir': 'console',
  'site-haritasi-sitemap-xml-nasil-olusturulur': 'console',
  'noindex-nedir-ne-zaman-kullanilir': 'console',
  'canonical-etiketi-nedir-kopya-sayfa-sorunu': 'console',
  'restoran-ve-kafeler-icin-google-haritalar-seo': 'pins',
  'kuyumcular-icin-yerel-seo-denizli-ornegi': 'pins',
  'emlakcilar-icin-seo-ilce-ve-mahalle-aramalari': 'pins',
  'doktorlar-ve-dis-hekimleri-icin-seo': 'pins',
  'google-isletme-profili-fotograflari-neler-eklenmeli': 'pins',
  'google-isletme-profili-gonderileri-nasil-paylasilir': 'pins',
  'isletme-profili-performans-raporu-nasil-okunur': 'pins',
  'yerel-seo-sonuclari-nasil-olculur': 'pins',
  'ad-adres-telefon-tutarliligi': 'pins',
  'yerel-rehber-kayitlari-ise-yarar-mi': 'pins',
  'birden-fazla-subeli-isletmeler-icin-yerel-seo': 'pins',
  'ilce-sayfasi-nasil-yazilir': 'pins',
  'google-yorumlari-nasil-artirilir': 'pins',
  'olumsuz-google-yorumuna-nasil-cevap-verilir': 'pins',
  'hizmet-bolgesi-nasil-belirlenir': 'pins',
  'yakinimda-aramalarinda-gorunmek': 'pins',
  'seo-calismasi-neleri-kapsar': 'gauge',
  'seo-paketleri-neler-dahil-olmali': 'doc',
  'aylik-seo-calismasi-nasil-isler': 'chart',
  'seo-danismanligi-nedir-ne-zaman-gerekir': 'lens',
  'backlink-paketleri-ve-fiyatlari-nelere-dikkat': 'linkgraph',
  'hacklink-nedir-neden-tehlikelidir': 'broken',
  'backlink-kalitesi-nasil-degerlendirilir': 'linkgraph',
  'backlink-hizmeti-nasil-calisir-surec-ve-rapor': 'linkgraph',
  'e-ticaret-web-sitesi-tasarimi-nelere-dikkat': 'layout',
  'wordpress-mi-ozel-yazilim-mi': 'layout',
  'web-sitesi-hazirlanma-sureci-adim-adim': 'layout',
  'web-tasarim-fiyatlari-neye-gore-degisir': 'layout',
  'google-isletme-profili-kategorisi-nasil-secilir': 'profile',
  'google-haritalarda-rakip-isletmeleri-nasil-incelersiniz': 'pins',
  'google-isletme-profili-hizmetler-bolumu-nasil-doldurulur': 'profile',
  'kuaforler-ve-guzellik-salonlari-icin-yerel-seo': 'pins',
  'oto-servis-ve-lastikciler-icin-yerel-seo': 'pins',
  'avukat-ve-hukuk-burolari-icin-seo': 'profile',
  'insaat-ve-gayrimenkul-firmalari-icin-seo': 'districts',
  'google-siralama-faktorleri-yanlis-bilinenler': 'gauge',
  'seo-analiz-araclari-ucretsiz-ve-ucretli': 'console',
  'google-analytics-4-temel-raporlar-isletmeler-icin': 'chart',
  'uluslararasi-seo-ve-hreflang-ihracatcilar-icin': 'layout',
  'hosting-secimi-nelere-bakilir': 'layout',
  'youtube-ve-video-seo-kucuk-isletmeler': 'lens',
  'icerik-pazarlamasi-nedir-isletmeler-icin': 'doc',
  'blog-yazisi-fikri-nasil-bulunur': 'doc',
  'mevsimsel-icerik-takvimi-denizli-isletmeleri': 'doc',
  'turkce-seo-icerigi-okunabilirlik': 'doc',
  'semantik-seo-nedir-konu-butunlugu': 'linkgraph',
};

function posts() {
  const dir = path.join(root, 'src/content/blog');
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md')).map((f) => {
    const head = fs.readFileSync(path.join(dir, f), 'utf8').split('---')[1];
    const get = (k) => (head.match(new RegExp(`^${k}:\\s*(.+)$`, 'm'))?.[1] ?? '').replace(/^["']|["']$/g, '');
    const slug = f.replace(/\.md$/, '');
    if (!POST_MOTIF[slug]) throw new Error(`no motif for ${slug}`);
    return { slug, title: get('title'), tag: SERVICE_TAG[get('service')] ?? 'Blog', motif: POST_MOTIF[slug] };
  });
}

(async () => {
  const only = process.argv[2];
  const jobs = [
    ...PAGES.map((p) => ({ ...p, file: `public/${p.out}.jpg`, cover: false })),
    ...posts().flatMap((p) => [
      { ...p, file: `public/og/blog-${p.slug}.jpg`, cover: false },
      { ...p, title: '', file: `public/blog/${p.slug}.jpg`, cover: true, thumb: `public/blog/${p.slug}-640.webp` },
    ]),
  ].filter((j) => !only || j.file.includes(only));
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  for (const j of jobs) {
    await page.setContent(html(j), { waitUntil: 'load' });
    await page.evaluate(() => Promise.all([document.fonts.load("800 86px Archivo"), document.fonts.load("600 24px Archivo")]).then(() => document.fonts.ready));
    const png = await page.screenshot({ type: 'png' });
    fs.mkdirSync(path.dirname(path.join(root, j.file)), { recursive: true });
    await sharp(png).jpeg({ quality: 84, mozjpeg: true }).toFile(path.join(root, j.file));
    if (j.thumb) await sharp(png).resize(640, 336).webp({ quality: 80 }).toFile(path.join(root, j.thumb));
    console.log(j.file);
  }
  await browser.close();
})();
