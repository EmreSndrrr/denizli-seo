---
name: Denizli SEO
description: A dark graphite page with one fixed 3D stage (chrome magnifier, link graph, Denizli relief map) behind transparent chapters; signal yellow is the only action color.
colors:
  ink: "#0b0e13"
  ink-raised: "#151a23"
  paper: "#f3f2ec"
  paper-bright: "#fbfaf6"
  signal: "#eedc45"
  link: "#7e97ff"
  link-deep: "#2c46c8"
  soft: "#c3cad6"
  mist: "#9aa3b0"
  stone: "#59606c"
  ok: "#3fae6b"
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
  h2:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 1.4rem + 3.4vw, 4.25rem)"
    fontWeight: 760
    lineHeight: 1.04
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 108"
  h3:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.375rem, 1.2rem + 0.7vw, 1.75rem)"
    fontWeight: 740
    lineHeight: 1.12
    letterSpacing: "-0.02em"
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
  accent-word:
    fontFamily: "Instrument Serif, Times New Roman, Georgia, serif"
    fontSize: "1.08em"
    fontWeight: 400
rounded:
  field: "12px"
  row: "14px"
  step: "18px"
  card: "20px"
  panel: "22px"
  form: "24px"
  pill: "999px"
spacing:
  gutter: "max(16px, 4vw)"
  grid-gap: "18px"
  chapter-top: "12vh"
  chapter-bottom: "14vh"
components:
  button-solid:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    height: "56px"
    padding: "0 1.75em"
  button-solid-hover:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "rgba(21, 26, 35, 0.55)"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    height: "56px"
  button-ghost-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  button-small:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "44px"
    padding: "0 1.3em"
  card-glass:
    backgroundColor: "rgba(21, 26, 35, 0.72)"
    textColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "clamp(22px, 2.4vw, 30px)"
  panel-paper:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
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
    textColor: "{colors.signal}"
  result-you:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.row}"
---

# Design System: Denizli SEO

Scope: this file documents the home page (v6) only, from `src/styles/home.css`, `src/layouts/Home.astro`, `src/components/home/*`, `src/scripts/home/*`. Inner pages (services, blog, about, contact) still use the older light v5 system in `src/styles/global.css` (white and grey bands, navy, blue #1d5fe0, 10px buttons) and are not documented here.

## Overview

**Creative North Star: "The Search Lens"**

The page is a dark graphite room with a single fixed three.js stage behind it: a chrome magnifier whose glass shows the live search result, orbiting rank tags, a link graph with light pulses, dust that follows the pointer. Chapters are transparent and scroll over the stage; the backdrop turns to search-results paper (#f3f2ec) for the results chapter and back to graphite. The metaphor is literal: the visitor looks at search results through a lens, and watches the client's site climb from #7 to #1.

Density is generous: chapters take 12-16vh of vertical padding, type is large, and cards are glass so the stage stays visible. Yellow is the one voice of action; blue marks links, the web graph, and the visitor's own district.

**Key Characteristics:**
- Dark ink ground, one paper-colored chapter (the results page), then back to dark.
- Signal yellow for every action and accent; blue only for links, web, home district.
- Two type families only: Archivo (variable weight and width) and Instrument Serif italic for one accented word per heading.
- Pill buttons and pill chips; glass cards with a 1px light line and backdrop blur.
- Fine grain overlay (opacity 0.045) over everything.
- The stage degrades: reduced motion gives a still layout with a static frame; no WebGL leaves the page unchanged.

## Colors

Graphite and paper neutrals with a single yellow accent and a cool blue secondary.

### Primary
- **Signal Yellow** (#eedc45): the one action and accent color. Solid buttons, focus ring (3px), selected chips/toggles/tabs, accent word in headings, step line, top-3 map markers, caret and selection.

### Secondary
- **Link Blue** (#7e97ff): the web and the visitor's own district (3px outline on the home marker), map home tint.
- **Deep Link Blue** (#2c46c8): result titles and the search icon on paper surfaces, where light blue would fail contrast.

### Neutral
- **Ink** (#0b0e13): page ground, text on yellow, the "you" result row on paper.
- **Ink Raised** (#151a23): glass card base (as rgba 21,26,35 at .72), select options, alt panel.
- **Paper** (#f3f2ec): primary text on dark; the results-chapter backdrop; ghost-button hover fill.
- **Paper Bright** (#fbfaf6): cards and panels on paper, solid-button hover, search-pill in the readout.
- **Soft** (#c3cad6): secondary text on dark. **Mist** (#9aa3b0): placeholders, captions. **Stone** (#59606c): secondary text on paper.
- **Lines**: dark `rgba(243,242,236,.16)`, light `rgba(11,14,19,.14)`.
- **Map relief**: land #cfd6e4, border #8d98ad, wall #4d5870, mid #7e8aa3, low #2a3447 (read by the 3D map from CSS variables). Marker tiers: low #22324f, mid #55637d, top signal.
- **OK** (#3fae6b): positive status; the trust-list check uses green #6ee79e and the invalid field border uses #ff8f8f. Both are one-off status colors.

### Named Rules
**The One Action Rule.** Yellow means "act or selected" and nothing else. Blue never fills a button.
**The Paper Chapter Rule.** Only the results chapter sits on paper; on paper, the accent word is ink with a yellow highlighter underline (yellow text on paper is unreadable).
**The Labelled Sample Rule.** Any ranking, number, or result that is illustrative is labelled "Örnek gösterim" where it appears.

## Typography

**Display and Body Font:** Archivo (variable, weight 100-900, width 62-125; fallback Helvetica Neue, Arial, sans-serif)
**Accent Font:** Instrument Serif italic (fallback Times New Roman, Georgia), one word per heading
**Monospace:** none

**Character:** wide, heavy, tightly tracked Archivo headings with a single italic serif word as the human note. Body stays plain width 100.

### Hierarchy
- **Hero** (780, `--t-hero` clamp(2.6rem, 1.2rem+5.4vw, 6rem), 0.98, -0.035em, width 108%): h1 only, split into lines.
- **H2** (760, `--t-h2` clamp(2.25rem, 1.4rem+3.4vw, 4.25rem), 1.04, -0.03em, width 108%, max 18ch). Several chapters override the size down (serp, process, reel, faq use smaller clamps down to 2rem).
- **H3** (740, `--t-h3` clamp(1.375rem, 1.2rem+0.7vw, 1.75rem), 1.12, width 106%): service titles. Step and panel headings use 760 at 108-110%.
- **Lead** (400, `--t-lead` clamp(1.125rem, 1.05rem+0.4vw, 1.3125rem), 1.5, max 44ch, color soft).
- **Body** (400, `--t-body` 1.0625rem, 1.6).
- **Label** (650, `--t-small` 0.875rem; 0.8125rem / 13px is the floor for tags, notes, map labels).
- **Button** (700, 1.0625rem, width 106%, -0.01em).
- **Numbers**: `font-variant-numeric: tabular-nums` on every figure (rank, rating, readout, step number); the big rank uses 800 at width 118%.
- **Wordmark**: footer wordmark is 900 at width 116%, sized 15.4cqi from its container.

### Named Rules
**The Two Families Rule.** Archivo plus Instrument Serif italic; no third family, no monospace.
**The One Italic Rule.** One `<em>` accent word per heading, 1.08-1.1em, yellow (ink on paper).
**The 13px Floor Rule.** Nothing renders under 13px.
**The Two Lines Rule.** Headings run at most two lines (`text-wrap: balance`, max-width in ch).
**The No Eyebrow Rule.** No small kicker or label above a heading.

## Layout

One centered `.wrap`: max 1380px, side padding `max(16px, 4vw)`. Chapters stack as transparent bands with 12-16vh vertical padding; grids use 18px gaps (cards) or 5-6vw gaps (two-column chapters). Two-column chapters collapse to one at 860-1100px (serp 860, faq/cta 880, dmap 960, process 1100). Services grid is 3 columns, 2 below 1020px, 1 below 640px. Work grid is 3 columns with the first item spanning 2x2, 2 columns below 1020px, 1 below 640px.

Chapters in order: hero (search box, sector chips, marquee), lens (pinned, 235vh), serp (pinned, 300vh, #7 to #1), services (6 glass cards), process (4 steps, sticky heading card), reel (pinned 380vh; sector panels fly toward the camera in 1100px perspective), Denizli relief map (form, 4 toggles, readout above the map), work (6 real project screenshots plus rating), faq (sticky heading), cta (form to WhatsApp), footer.

The bar is fixed, transparent over a top scrim, and gains blur and a line once scrolled; over the paper chapter it flips to a paper bar (`on-light`). Below 960px the link pill collapses into a 44px toggle and a drawer; below 560px the bar button hides.

Breakpoints in use: 559, 640, 767, 860, 880, 959, 960, 1020, 1100px.

## Elevation & Depth

Depth comes from layering over the 3D stage: glass surfaces with backdrop blur (8-16px), a 1px light line, and soft deep shadows. Hover raises cards by a border-color shift to `rgba(238,220,69,.45)` and a lift, not a bigger shadow.

### Shadow Vocabulary
- **Button lift** (`0 12px 28px -14px rgba(0,0,0,.7)`, hover `0 16px 32px -14px rgba(0,0,0,.75)`): solid button.
- **Float** (`0 24px 60px -28px rgba(5,7,10,.5)`): search pill, serp bar, map card (`0 30px 80px -36px`).
- **Panel** (`0 40px 80px -36px rgba(0,0,0,.65)`): reel panels.
- **Focus glow** (`0 0 0 4px rgba(238,220,69,.2)`): focused search and fields.
- **Text shadow** on hero and lens type to keep it legible over the 3D stage.

### Named Rules
**The Glass Over Stage Rule.** Cards are translucent so the stage shows through; never opaque slabs, except the paper chapter's rows and the reel panels.
**The Soft Shadow Rule.** Shadows are large, offset-down, negative-spread, black; no hard offset shadows.

## Shapes

Pills for everything interactive (buttons, chips, tabs, toggles, search, tags, 999px). Containers are rounded rectangles: fields 12px, result rows 14px, cards and steps 16-20px, reel panels 22px, form and map card 24px. Borders are 1px lines on containers and 1.5px on interactive controls. Icons are line SVGs (`Icon.astro`), 44px yellow-tinted tile for service icons.

## Components

### Buttons
- **Shape:** pill, 56px tall (3.5rem), padding 0 1.75em, 1.0625rem/700 at width 106%, trailing arrow that nudges 4px on hover.
- **Solid:** yellow fill, ink text. Hover: paper-bright fill, lift 2px. Active: 1px down, scale .985.
- **Ghost:** 1.5px border `rgba(243,242,236,.55)`, translucent ink fill, blur. Hover fills paper with ink text.
- **Small:** 44px, 0.9375rem, used in the bar. In the bar over paper the solid button turns ink with paper text.
- **Focus:** 3px yellow outline, 3px offset, on every focusable element.

### Chips and toggles
- Sector chip: 36px pill, 1.5px line, soft text; hover/active turns the border and text yellow with a faint yellow fill. Reel tab active is solid yellow. Map toggles are 44px pills with a round check box; checked state is a yellow border, faint yellow fill and filled yellow dot (`aria-checked`).

### Cards / Containers
- **Glass card (services, work, faq):** `rgba(21,26,35,.72)`, blur 12px, 1px line, 20px radius (faq 16px), padding clamp(22px, 2.4vw, 30px). Service cards carry a pointer-following sheen.
- **Paper panel (reel):** paper-bright with ink text; every `alt` panel is ink-raised. The first list row is solid yellow.
- **Results rows (serp):** paper-bright rows, blue-deep titles; the visitor's row is ink with yellow title and a yellow rank badge.

### Inputs / Fields
- 56px (map select/input 52px), 12px radius, 1.5px line, `rgba(243,242,236,.07)` fill, 1.0625rem text. Focus: yellow border plus 4px yellow glow. Invalid: `aria-invalid` border #ff8f8f. The hero search is a 60px pill with a yellow submit.

### Navigation
- Pill link group (blurred), links 0.9375rem/600; hover/active tint plus yellow text; logo mark plus wordmark (800, width 116%). Mobile drawer is a blurred 20px-radius sheet.

### Signature: stage and map
- The fixed canvas (`#stage`, z-index 1) is driven by `choreo.ts` camera keyframes on scroll. The Denizli relief map is real 3D (19 districts, OSM borders and elevation); column height = sample rank, markers tiered top (yellow), mid, low; the visitor's district is blue-outlined. A poster image shows until WebGL starts. Readout sits above the map, legend and credit below.

## Do's and Don'ts

### Do:
- **Do** label the primary action "Ücretsiz SEO analizi iste" (arrow button, opens WhatsApp with a written message) everywhere, and use the brand name "Denizli SEO".
- **Do** label every illustrative figure or result "Örnek gösterim".
- **Do** keep the © OpenStreetMap credit on the map and in the footer.
- **Do** use only real content: the six real project screenshots and the Google rating 5,0 from 28 reviews.
- **Do** keep headings to two lines and use one Instrument Serif italic accent word.
- **Do** keep a visible 3px yellow focus ring, strong hover and active states, and 44px minimum targets.
- **Do** degrade the stage: reduced motion gives a still layout with a static frame (`.rm`); no WebGL leaves the page unchanged (poster and finished layout).

### Don't:
- **Don't** invent testimonials, client logos, statistics, case studies, awards, or ranking guarantees; the draft's fake case studies were removed on purpose.
- **Don't** add a third font, monospace, or eyebrow text above headings.
- **Don't** set text below 13px.
- **Don't** use blue as a button color or yellow text on the paper chapter.
- **Don't** put opaque slabs over the stage where a glass card fits.

## Not canonized
Preloader count "#100", the 01-04 process step numerals, the grain overlay and the heading text-shadows are shipped but not recorded as rules for new surfaces.
