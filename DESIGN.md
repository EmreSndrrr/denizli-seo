---
name: Denizli SEO
description: A black page with dark grey cards, hot pink, orange and purple accents and one family of type; a fixed 3D magnifier stage runs behind the page; the magnifier travels the whole page and comes to rest in the "Biz kimiz" ring.
colors:
  ink: "#0b0e13"
  ink-raised: "#151a23"
  card: "#17171c"
  card-2: "#1f1f26"
  paper: "#f3f2ec"
  paper-bright: "#fbfaf6"
  pink: "#d82068"
  pink-text: "#ff5b97"
  orange: "#f05a1e"
  orange-text: "#ff8a4c"
  purple: "#8a1fe0"
  purple-text: "#b57bff"
  link-deep: "#6a17c6"
  soft: "#c3cad6"
  mist: "#9aa3b0"
  stone: "#4b525d"
  ok: "#3fae6b"
  map-top: "#ff4d8d"
  map-land: "#cfd6e4"
  map-border: "#8d98ad"
  map-wall: "#4d5870"
  map-mid: "#7e8aa3"
  map-low: "#2a3447"
typography:
  hero:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.6rem, 1.2rem + 5.4vw, 6rem)"
    fontWeight: 780
    lineHeight: 0.98
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 108"
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 1.2rem + 4vw, 5rem)"
    fontWeight: 760
    lineHeight: 1.04
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 108"
  section-title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 1rem + 2.2vw, 2.625rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 106"
  h3:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.375rem, 1.2rem + 0.7vw, 1.75rem)"
    fontWeight: 740
    lineHeight: 1.15
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 106"
  lead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.4vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 650
    lineHeight: 1.3
  button:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 106"
rounded:
  tab: "8px"
  node: "8px"
  field: "12px"
  brand: "12px"
  card: "14px"
  form: "18px"
  map-card: "20px"
  pill: "999px"
spacing:
  gutter: "max(16px, 4vw)"
  grid-gap: "20px"
  section-y: "8vh"
  section-y-lead: "12vh"
components:
  button-primary:
    backgroundColor: "{colors.pink}"
    textColor: "#ffffff"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    height: "56px"
    padding: "0 1.75em"
  button-primary-hover:
    backgroundColor: "#bd1558"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.pink-text}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    height: "56px"
  button-orange:
    backgroundColor: "{colors.orange}"
    textColor: "#14070a"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    height: "56px"
  button-white:
    backgroundColor: "#ffffff"
    textColor: "{colors.pink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    height: "56px"
  button-ghost:
    backgroundColor: "rgba(21, 26, 35, 0.55)"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    height: "56px"
  button-small:
    backgroundColor: "{colors.pink}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    height: "44px"
    padding: "0 1.3em"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "2.4rem 1.6rem 2rem"
  input-field:
    backgroundColor: "rgba(243, 242, 236, 0.07)"
    textColor: "{colors.paper}"
    rounded: "{rounded.field}"
    height: "56px"
  chip:
    backgroundColor: "rgba(21, 26, 35, 0.6)"
    textColor: "{colors.soft}"
    rounded: "{rounded.pill}"
    height: "36px"
  chip-active:
    textColor: "{colors.pink-text}"
  tab-active:
    backgroundColor: "rgba(216, 32, 104, 0.1)"
    textColor: "{colors.pink-text}"
    rounded: "{rounded.tab}"
    height: "44px"
  result-you:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.card}"
---

# Design System: Denizli SEO

Scope: the whole site. `src/styles/home.css` (tokens, base, bar, hero, lens chapter, footer), `src/styles/home-sections.css` (every section after the lens chapter) and `src/styles/inner.css` (the inner pages: banner card, service arc list, numbered step cards, blog cards, article text, contact cards). Inner pages use `src/layouts/Page.astro`: the same bar and footer, no 3D stage.

## Overview

**Creative North Star: "The Search Lens"**

The owner supplied a dark agency reference (Trebuto) and asked the page to follow it everywhere except the magnifier animation (hero, lens chapter, the journey to the "Biz kimiz" ring) and the footer, which stay as designed. The result is a black page of dark grey cards with 1px light lines, hot pink as the action color, orange and purple as supporting accents, and one typeface. A single fixed three.js stage (chrome magnifier, link graph, recoloured to pink, purple and orange) runs behind the page; a second, lens-only canvas above the content (`#lens-front`, never intercepts a click) lets the magnifier travel over the later sections, which are ordinary opaque-card sections on the black ground. The page never changes colour: there is no paper or white section.

Sections run in this order: hero (search box, chips, marquee), lens, "Ne yapıyoruz ?" service map (five groups, then a button to the services page), "Farkımız ne ?" five cards, "Nasıl çalışıyoruz ?" timeline, projects carousel, free-chat band, "Biz kimiz ?" (an empty ring where the magnifier lands; a still brand magnifier when WebGL is off or motion is reduced), Google rating orbit, brands grid, the blog (the three newest posts as cards with their covers, a button to all posts), FAQ, closing form, footer.

**Key Characteristics:**
- Black ground (#0b0e13), grey cards (#17171c, #1f1f26) with a 1px `rgba(243,242,236,.16)` line.
- Pink fills for action; each accent has a fill value and a lighter text value for use on dark.
- One family: Archivo, variable weight and width. No serif, no italic, no monospace.
- Section titles upper case, centered, with a short pink bar beneath.
- Pill buttons; cards 8-20px radius; coloured top or side bars as the card signature.
- Hero carries a pink/purple radial glow at the upper right.
- The stage degrades: reduced motion gives a still layout (`.rm`); no WebGL leaves the page unchanged.

## Colors

Black and grey neutrals, one pink voice for action, orange and purple as supporting tones.

### Primary
- **Hot Pink** (#d82068): fills for the primary button, active nav link, selected toggles, FAQ open sign, rank badge, section-title bar, timeline progress, pins, top-tier map markers. Hover fill #bd1558.
- **Pink Text** (#ff5b97): pink as text, outline, focus ring (3px) and caret on dark; the accent word in a title; step titles; outline button.

### Secondary
- **Orange** (#f05a1e) with **Orange Text** (#ff8a4c): the "Tümünü gör" and "Yorumları gör" buttons (dark text on the fill), star ratings, process duration tags, project card borders, the rating core ring.
- **Purple** (#8a1fe0) with **Purple Text** (#b57bff): third service-map and why-card tone, the "SEO" mark in the ring, the visitor's own district on the map (3px outline).

### Neutral
- **Ink** (#0b0e13): page ground, "you" result row. **Ink Raised** (#151a23): nav pill, glass chips.
- **Card** (#17171c) and **Card 2** (#1f1f26): every card, node plate, FAQ row, form; Card 2 is hover and image-placeholder.
- **Paper** (#f3f2ec): primary text on dark. **Paper Bright** (#fbfaf6): sample result rows on inner pages.
- **Soft** (#c3cad6): secondary text. **Mist** (#9aa3b0): placeholders, captions. **Stone** (#4b525d): secondary text on paper.
- **Map relief** (read by the 3D map from CSS variables): top #ff4d8d, land #cfd6e4, border #8d98ad, wall #4d5870, mid #7e8aa3, low #2a3447.
- **Status**: #3fae6b ok; invalid field border #ff8f8f.

### Named Rules
**The Pink Action Rule.** Pink fills mean "act or selected". Orange is a second button color only for the "see more" actions; purple never fills a button.
**The Text Value Rule.** On dark, accent colors appear as text only in their `-text` value, never the fill value.
**The Always Dark Rule.** No section sits on paper or white and the backdrop never changes colour while scrolling. Paper is text and small pills only.
**The Labelled Sample Rule.** Illustrative rankings, numbers and results are labelled "Örnek gösterim".

## Typography

**Family:** Archivo (variable, weight 100-900, width 62-125; fallback Helvetica Neue, Arial, sans-serif). Nothing else.

**Character:** wide, heavy Archivo for titles and buttons, plain width 100 for body. The accent word in a title is the same face, never italic, in pink.

### Hierarchy
- **Hero** (780, `--t-hero` clamp(2.6rem, 1.2rem+5.4vw, 6rem), 0.98, -0.035em, width 108%): h1 only, sentence case, split into lines.
- **Display** (760, `--t-display` clamp(2.25rem, 1.2rem+4vw, 5rem), 1.04, width 108%): lens lines, sentence case.
- **Section title** (700, `--t-h2` clamp(1.5rem, 1rem+2.2vw, 2.625rem), 1.15, 0.01em, width 106%, upper case with Turkish casing, max 28ch): centered above a 3.5rem x 3px pink bar. On phones (<=560px) it steps down to 1.25rem with 0 tracking so it stays on two lines. The results chapter, closing form and chat band headings stay sentence case (760, tighter tracking).
- **H3** (740, clamp(1.375rem, 1.2rem+0.7vw, 1.75rem), 1.15, width 106%): why-card and step titles, in the card's tone color.
- **Lead** (400, clamp(1.125rem, 1.05rem+0.4vw, 1.3125rem), 1.5, max 44ch, soft).
- **Body** (400, 1.0625rem, 1.6). **Label** (650, 0.875rem). 0.8125rem (13px) is the floor.
- **Button** (700, 1.0625rem, width 106%, -0.01em).
- **Numbers**: tabular figures on every figure; rating numbers 800 at width 112%.
- **Wordmark**: bar 800 at width 116%; footer 900 at 116%, 15.4cqi.

### Named Rules
**The One Family Rule.** Archivo only; no serif, italic, monospace or third face.
**The Upper-Case Title Rule.** Section titles are upper case with one pink word; hero, lens and closing headings are sentence case.
**The 13px Floor Rule.** Nothing renders under 13px.
**The Two Lines Rule.** Headings run at most two lines (`text-wrap: balance`, ch max-width, smaller step on phones).

## Layout

One centered `.wrap`: max 1380px, side padding `max(16px, 4vw)`. Section padding is mostly 8vh, with 12vh at the head of the service map and "Biz kimiz ?". Grids use 16-20px gaps; two-column sections use 5-6vw gaps.

- Service map: ring (11-14rem), curved lines (hidden below 1000px), four nodes in four columns; two columns below 1000px, one below 600px.
- Why cards: flex-wrap, centered, three per row; two below 1000px, one below 620px.
- Process: sticky heading card beside the steps (single column at 1100px).
- Projects: horizontal scroll-snap carousel, middle card scaled up, category tabs above.
- Brands: auto-fill grid of 190px minimum. The yerel-seo page keeps its auto-fit district pin list (116px).
- The lens chapter (235vh) is a pinned scroll chapter; after it the magnifier swings from edge to edge over the sections and settles into the "Biz kimiz" ring, then lets go as that section scrolls away.

The bar is fixed with a top scrim, gains blur and a line when scrolled. Below 960px the link pill becomes a 44px toggle and drawer; below 560px the bar button hides.

Breakpoints in use: 560, 600, 620, 640, 767, 860, 880, 900, 959, 960, 1000, 1100px.

## Elevation & Depth

Depth is mostly tonal: grey cards on black, 1px lines, and colored top or side bars. Blur and soft shadows appear only on the bar, hero search, chips and map card.

### Shadow Vocabulary
- **Button lift** (`0 12px 28px -14px rgba(0,0,0,.7)`, hover `0 16px 32px -14px rgba(0,0,0,.75)`): primary button.
- **Float** (`0 24px 60px -28px rgba(5,7,10,.5)`): hero search, "you" result row; map card uses `0 30px 80px -36px`.
- **Focus glow** (`0 0 0 4px rgba(216,32,104,.25)`): focused search and fields.
- **Side bars**: `inset 5px 0 0` (title plate) and `inset -5px 0 0` (list) in the node tone; these are flat color bars, not shadows.
- **Hero glow**: radial pink (.34) at upper right plus purple (.2) lower right.

### Named Rules
**The Tonal Card Rule.** Cards are solid grey on black and separated by a 1px line, not by shadow.
**The Soft Shadow Rule.** Shadows are large, offset-down, negative-spread, black; no hard offset shadows.

## Shapes

Pills for buttons, chips, search, toggles, tags, nav links. Rectangles are modest: tabs and node plates 8px, brand tiles and FAQ rows and fields 12px, cards and steps 14px, form 18px, map card 20px. Circles for the service ring (2px pink border plus an orange outer ring), node icons, orbit and FAQ signs. Cards signature: a 5.5rem x 6px tone bar hanging from the top edge (why cards). The "Biz kimiz ?" photo is clipped by a magnifier-shaped mask (ring plus handle). District pins are a rotated drop shape in pink. Icons are line SVGs.

## Components

### Buttons
- **Shape:** pill, 56px tall, padding 0 1.75em, 1.0625rem/700 at width 106%, trailing arrow nudges 4px on hover; hover lifts 2px, active presses 1px.
- **Primary:** solid pink, white text ("Ücretsiz SEO analizi iste", opens WhatsApp with a written message). Hover #bd1558.
- **Outline:** 1.5px pink border, pink-text label; hover fills pink (bar button).
- **Orange:** orange fill, dark text (#14070a): "Tümünü gör", "Yorumları gör".
- **White:** white fill, pink text: the chat band on a pink-tinted strip.
- **Ghost:** 1.5px paper border, translucent fill and blur; hover fills paper.
- **Small:** 44px, 0.9375rem, used in the bar.
- **Focus:** 3px pink-text outline, 3px offset on every focusable element.

### Chips, tabs, toggles
- **Sector chip:** 36px pill, 1.5px line; hover/active turns pink-text with a pink tint.
- **Project tab:** 44px, 8px radius; active has pink border, pink text, pink tint.
- **Map toggle:** 44px pill with a round check; checked is pink border, pink tint, filled pink dot (`aria-checked`).

### Cards / Containers
- **Why card:** #17171c, 1px line, 14px radius, centered, top bar in pink, orange or purple, title in the tone's text color.
- **Service node:** round icon with a tone dot, title plate (upper case, 800, side bar), list card with row dividers.
- **Step:** card with pink dot on a vertical line that fills pink as it scrolls; orange duration tag.
- **Project card:** card with a screenshot (top-aligned), orange 35% border, orange when centered; side cards scale down and fade.
- **FAQ row:** 12px card, plus/minus sign circle fills pink when open.
- **Sample result rows (inner pages, `SerpMock`):** paper-bright rows with deep-purple titles on a dark card; the visitor's row is ink with pink-text title and a pink rank badge.
- **Rating orbit:** dashed rotating ring, five orange stars, core with 5,0 and "28 yorum".

### Inputs / Fields
- 56px (map fields 52px), 12px radius, 1.5px line, `rgba(243,242,236,.07)` fill. Focus: pink-text border plus 4px pink glow. Invalid: `aria-invalid` border #ff8f8f. Hero search is a 60px pill with a pink submit.

### Navigation
- Pill link group (blurred), 0.9375rem/600; active link is a pink pill with white text; logo mark plus wordmark. Mobile drawer is a blurred 20px-radius sheet.

### Signature: stage and map
- The fixed canvas (`#stage`) is driven by `choreo.ts` camera keyframes; magnifier, link graph and tags use pink (#ff3d85), orange (#ff6a1f) and purple (#9b4dff) in `stage.ts`. The 3D relief of Denizli (19 districts, OSM borders and elevation) appears only on the contact page, with one column on the office's district; a poster shows until WebGL starts.

## Do's and Don'ts

### Do:
- **Do** use the brand name "Denizli SEO" and the primary label "Ücretsiz SEO analizi iste" everywhere.
- **Do** label every illustrative figure, ranking or result "Örnek gösterim".
- **Do** keep the © OpenStreetMap credit on the map and in the footer.
- **Do** use only real content: project screenshots and names, and the Google rating 5,0 from 28 reviews.
- **Do** keep headings to two lines, with the smaller title step on phones.
- **Do** keep the visible 3px pink focus ring and 44px minimum targets.
- **Do** degrade the stage: reduced motion gives a still layout; no WebGL leaves the page unchanged.

### Don't:
- **Don't** invent testimonials, client or partner logos, statistics ("+400 müşteri" style), case studies, awards or ranking guarantees; the reference's versions were deliberately not copied.
- **Don't** add a second typeface, italic, monospace or an eyebrow above a heading.
- **Don't** set text below 13px.
- **Don't** fill a button with purple, or use a fill-value accent as small text on dark.
- **Don't** use hard offset shadows.

## Not canonized
Pre-existing drift carried by the build, not rules for new surfaces: the preloader count "#100", the grain overlay (opacity .045), heading text-shadows over the stage, the 01-04 step numerals, `--t-h2-sm` duplicating `--t-h2`, and the small upper-case, letter-spaced "SEO" label in the service ring (an eyebrow-style device).
