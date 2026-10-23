---
name: Denizli SEO
description: Light, professional agency site for Denizli local SEO, built around a working 3D map of the province.
colors:
  bg: "#ffffff"
  band: "#f3f6fb"
  surface: "#ffffff"
  surface-2: "#eef2f8"
  surface-3: "#e1e7f0"
  line: "#dde3ec"
  line-2: "#c7d0dd"
  ink: "#0d1b2e"
  ink-2: "#35445a"
  muted: "#56647a"
  navy: "#0b1d36"
  navy-2: "#12294a"
  navy-line: "rgba(255, 255, 255, 0.14)"
  on-navy: "#ffffff"
  on-navy-2: "#b8c5d9"
  accent: "#1d5fe0"
  accent-hi: "#164db8"
  accent-soft: "#e7effd"
  accent-ink: "#ffffff"
  link: "#1a55c9"
  home: "#e8892b"
  home-soft: "#fdf0e1"
  star: "#f5b942"
  map-top: "#4d8bff"
  map-land: "#dfe5ee"
  map-home: "#f7c47a"
  map-border: "#95a3b9"
  map-wall: "#5f6e88"
  map-mid: "#8794aa"
  map-low: "#2b3c5c"
typography:
  display:
    fontFamily: "'Stack Sans Headline', 'Stack Sans Text', system-ui, sans-serif"
    fontSize: "min(4.25rem, 11.6cqi)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Stack Sans Headline', 'Stack Sans Text', system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.55rem + 1.6vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  title:
    fontFamily: "'Stack Sans Headline', 'Stack Sans Text', system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1.12rem + 0.3vw, 1.375rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "'Stack Sans Text', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.125rem, 1.07rem + 0.25vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "'Stack Sans Text', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Stack Sans Text', system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.5
rounded:
  sm: "10px"
  chip: "12px"
  md: "16px"
  lg: "24px"
  pill: "999px"
spacing:
  margin: "clamp(16px, 4vw, 40px)"
  gutter: "clamp(16px, 2vw, 24px)"
  section: "clamp(4.5rem, 3rem + 5vw, 7.5rem)"
  bar: "76px"
  max: "1240px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.5rem"
    height: "3.25rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-hi}"
  button-outline:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.5rem"
    height: "3.25rem"
  button-sm:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.sm}"
    padding: "0.5rem 1.1rem"
    height: "2.75rem"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "1.5rem"
  chip-icon:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent}"
    rounded: "{rounded.chip}"
    size: "2.75rem"
  chip-icon-dark:
    backgroundColor: "{colors.navy-2}"
    rounded: "{rounded.chip}"
    size: "2.75rem"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0.6rem 0.9rem"
    height: "3rem"
  map-card:
    backgroundColor: "{colors.navy}"
    rounded: "{rounded.lg}"
  band-navy:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.on-navy}"
---

# Design System: Denizli SEO

## Overview

**Creative North Star: "The Category Standard, Plus the Map"**

A light, orderly agency site at the craft level of the references the owner pinned (DeltaV, WebFX, SPINX, Thryv): white and cool-grey bands, white cards with a hairline border and a low shadow, bold tight headings, one blue for every action. Nothing about the frame is experimental; it is meant to read as a competent, established agency at a glance.

The one thing it has that the category does not is the working 3D map of Denizli, always presented inside a navy rounded card. Navy is the system's second ground: it carries the map, the "why us" band, the closing contact band and the footer, so the page reads light at the top and settles into navy at the end.

Density is medium: generous section padding, 12-column grids with an uneven split between heading and content, cards that vary in width rather than a uniform grid.

**Key Characteristics:**
- White (#fff) and cool grey (band) sections alternate; navy closes the page.
- One blue action colour; amber exists only for the visitor's own district.
- Stack Sans Headline 700 headings, never more than two lines.
- 10px buttons, 16px cards, 24px map card and contact band.
- Low two-layer navy-tinted shadows; cards lift 3px on hover.
- Drawn 24px stroke icons (1.8 stroke) in 44px chips.

## Colors

A cool, blue-tinted neutral system with a single saturated blue and one warm signal.

### Primary
- **Action Blue** (accent): every filled button, the selected/active state of tabs, switches, chips and FAQ signs, the top-three tier on the map, chart lines and progress bars, focus outlines. Hover deepens to **Pressed Blue** (accent-hi). **Pale Blue** (accent-soft) backs icon chips, selected filter chips, the input focus ring and text selection.
- **Link Blue** (link): text links and "more" links; slightly darker than Action Blue so it holds on white body text.

### Secondary
- **Deep Navy** (navy): the map card, the "why us" band, the contact band, the footer, and the checked state of segmented controls. **Navy Raised** (navy-2) is the chip and rating panel on navy; **Navy Hairline** (navy-line) divides on navy. Text on navy is white (on-navy) with **Mist** (on-navy-2) for secondary copy.

### Tertiary
- **Home Amber** (home): only the visitor's own district: the outline on its map label and its pill in the district list (with home-soft fill). **Rating Gold** (star): only the stars of the real Google rating and its trust line.

### Neutral
- **White** (bg / surface): page ground and every card.
- **Cool Band** (band): alternate section ground; also inner panels inside cards (plans, reports, vitals, question rows).
- **Frost** (surface-2) / **Frost Deep** (surface-3): tab tracks, hovered nav links, district pills, bar tracks, chart grid lines.
- **Hairline** (line) for card borders and dividers; **Hairline Strong** (line-2) for control borders, outline buttons and hovered cards.
- **Ink** (ink) headings and primary text; **Ink Soft** (ink-2) paragraphs; **Slate** (muted) captions, legends, placeholders.
- **Map palette** (map-*): reserved for the three.js map: land, borders, walls and the blue/amber column tops.

### Named Rules
**The One Action Rule.** Blue means "you can act here" or "top three". It is never used as decoration or a section ground.

**The Home Is Amber Rule.** Amber marks the visitor's district and nothing else. Do not use it for warnings, highlights or buttons.

## Typography

**Display Font:** Stack Sans Headline (with Stack Sans Text, system-ui)
**Body Font:** Stack Sans Text (with system-ui, -apple-system, Segoe UI)

Both self-hosted from `public/fonts/` (latin + latin-ext subsets, Turkish characters covered).

**Character:** A bold, tightly tracked grotesque for headings over a plain, readable text cut; confident and corporate, not editorial.

### Hierarchy
- **Display** (700, min(4.25rem, 11.6cqi), 1.06, -0.03em): home h1 only, sized from its column with container query units so it always sets on exactly two lines (each line a block span). Inner-page h1 uses clamp(2.5rem, 1.7rem + 2.6vw, 4rem); blog posts clamp(2rem, 1.5rem + 1.8vw, 3rem).
- **Headline** (700, clamp(2rem → 3rem), 1.06, -0.03em): section h2.
- **Title** (600, clamp(1.1875rem → 1.375rem), 1.2, -0.015em): card and step h3, service names, step lines.
- **Lead** (400, clamp(1.125rem → 1.3125rem), 1.45–1.5, ink-2): the sentence under an h1, max 40–46ch.
- **Body** (400, 1.0625rem, 1.6): running text; card copy steps down to 1rem; long-form prose is 1.125rem / 1.7 in a 40rem column.
- **Label** (600, 0.875rem): form labels, tabs, small captions (0.8125rem for legends and notes).

Numbers in readouts, plans and labels use tabular figures. FAQ questions and footer column heads are set in Stack Sans Text 600 at letter-spacing 0, not the display face.

### Named Rules
**The Two-Line Rule.** No heading runs past two lines. Long headings are split into two block spans; the home h1 is sized by its container to guarantee it.

**The Two Faces Rule.** Only Stack Sans Headline and Stack Sans Text appear in the site's own interface. Arial/Helvetica is allowed solely inside the drawn Google result mock (`.serp`, `data-ui`), where it imitates Google.

**The No-Kicker Rule.** No eyebrow or kicker label above a heading; a heading stands alone, with breadcrumbs as the only line above an inner-page h1.

## Layout

- **Container:** one width, min(100% − 2 × margin, 1240px); margin clamp(16px, 4vw, 40px); gutter clamp(16px, 2vw, 24px).
- **Sections:** full-width bands with padding clamp(4.5rem → 7.5rem). Bands alternate cool grey and white; two white bands in a row drop the second one's top padding.
- **Grid:** 12 columns. Section heads put the h2 in columns 1–6 and the intro in 8–12, aligned to the bottom. Split sections use 1–5 / 6–12 or 1–5 / 7–12 with the left side sticky below the header (top: bar + 2rem).
- **Uneven card rows:** services alternate 7 + 5 column cards; work shows one large 2 × 2 tile with smaller tiles around it.
- **Home first viewport:** sticky 76px white header; hero text left, navy map card right (columns 1fr / 1.15fr). On script, the section becomes a sticky stage (100svh − bar) and the left column swaps between the hero and one white panel whose tabbed steps change as you scroll, while the map holds still.
- **Breakpoints:** 80em (phone number hides), 64em (nav collapses to a Menü button, all splits stack, map moves under the text), 48em (single column, header button hides).

## Elevation & Depth

Soft and low. Shadows are two-layer and tinted with ink (rgba(13, 27, 46, …)), never black and never hard-offset. Cards rest on `shadow-sm`, rise to `shadow` on hover with a 3px lift; the map card, readout and floating fragments use `shadow-lg`. On navy, depth comes from navy-2 panels and the navy hairline instead of shadows.

### Shadow Vocabulary
- **Rest** (`0 1px 2px rgba(13,27,46,.05), 0 4px 12px -6px rgba(13,27,46,.08)`): cards, buttons, active tab.
- **Lift** (`0 2px 4px rgba(13,27,46,.04), 0 16px 32px -16px rgba(13,27,46,.2)`): hovered cards and buttons, the live story panel.
- **Float** (`0 4px 8px rgba(13,27,46,.06), 0 24px 48px -20px rgba(13,27,46,.32)`): the map card and its readout, page-hero visuals.

### Named Rules
**The Quiet Lift Rule.** Elevation answers hover: rest → lift, translateY(−1px) for buttons, (−3px) for cards. Nothing floats higher than the map.

## Shapes

Gently rounded, rectangular forms. Buttons, inputs, segmented options and nav pills 10px (8px for header links); icon chips and inner panels 12px; question rows and the readout 14px; cards 16px; the map card, page-hero shots and the contact band 24px. Full pills (999px) only for small things: map rank badges, district tags, switch tracks, progress bars. Borders are always 1px hairlines; the chat bubble in "how we work" uses a 16/16/16/4px speech shape.

## Components

### Buttons
Filled, rectangular and assured.
- **Shape:** 10px corners, min height 3.25rem (2.75rem small).
- **Primary:** Action Blue fill, white 600 text at 1rem, rest shadow; a trailing arrow icon nudges 3px right on hover.
- **Hover / Active:** Pressed Blue, lift shadow, −1px; active returns to rest. Focus: 2px blue outline, 3px offset (light blue #9dc0ff on navy).
- **Outline:** white fill, ink text, Hairline Strong border turning ink on hover.
- **Label:** the primary action reads "Ücretsiz SEO analizi iste" everywhere and opens WhatsApp with the message written out.
- **Text link:** Link Blue 600 with an arrow that moves 3px; underline on hover.

### Chips
- **Icon chip:** 44px square, 12px radius, Pale Blue fill, Action Blue icon; on navy, Navy Raised fill with hairline and light-blue icon.
- **Filter chips / segmented options:** 2.75rem high, 10px, Hairline Strong border. Selected filter chip: Pale Blue fill, blue border, plus mark turns to a check. Selected segment: navy fill, white text.
- **District tags:** pill, Frost fill, 0.8125rem; the visitor's district in amber-soft with an amber outline.

### Cards / Containers
- **Corner Style:** 16px.
- **Background:** white on either band; inner panels in Cool Band with a hairline and 12px corners.
- **Shadow Strategy:** Rest, Lift on hover (see Elevation).
- **Border:** 1px Hairline, Hairline Strong on hover.
- **Internal Padding:** 1.5rem; service cards clamp(1.5rem → 2rem); link cards 1.75rem.

### Inputs / Fields
- **Style:** white, 1px Hairline Strong border, 10px, 3rem high; custom select chevron.
- **Focus:** border turns Action Blue with a 3px Pale Blue ring.
- **Switch:** bordered 10px row with a pill knob; on state is Pale Blue row, blue track.
- **Contact field:** a white 14px capsule on the navy band holding a borderless input and the primary button; stacks on phones.

### Navigation
Sticky white header with hairline bottom, wordmark (blue 9px pin tile + 700 display name), five links (0.9375rem 500, ink-2; hover/current on Frost), phone, small primary button. Below 64em a bordered "Menü" button opens a full-screen white sheet with large display-face links and both buttons. Footer: navy, four columns, Mist links turning white.

### The Map Card (signature)
The 3D map always sits in a navy 24px card with Float shadow. District labels are numbered pills (low #22324f, mid #55637d, top Action Blue); the visitor's district gets an amber outline and a white name tag. A white readout card floats top right (query bar, two tabular numbers, tier legend). A navy note bottom left carries "Örnek gösterim." on ranking views and the OpenStreetMap and AWS Terrain Tiles attribution always.

### Tabs
A Frost track (12px, 0.25rem inset) holding 9px tabs; selected tab is white with Rest shadow.

### Motion
One easing, `cubic-bezier(0.22, 1, 0.36, 1)`. Controls 150–200ms; cards 250ms; reveals 600ms fading up 16px with 70ms stagger; story steps 450ms; bars and chart lines draw in once on view. Cross-page view transitions. Under reduced motion, reveals, story transitions and step animations are off and the story renders as a static grid of cards.

## Do's and Don'ts

### Do:
- **Do** use the one primary label "Ücretsiz SEO analizi iste" for the main action, linking to WhatsApp with a written message.
- **Do** alternate white and Cool Band sections and close the page on navy (contact band, footer).
- **Do** put any map view in the navy 24px card with the OpenStreetMap attribution on it, and keep the attribution in the footer.
- **Do** label sample map data "Örnek gösterim".
- **Do** use the authored stroke icons from `Icon.astro` (24px grid, 1.8 stroke) inside 44px chips.
- **Do** vary card widths (7/5 splits, one large tile) rather than repeating equal cards.

### Don't:
- **Don't** put an eyebrow or kicker label above a heading, or let a heading run past two lines.
- **Don't** use amber for anything except the visitor's district, or blue as a decorative fill.
- **Don't** use Arial or any system display face outside the drawn Google result mock.
- **Don't** add hard-offset or black shadows, gradients, or pill-shaped buttons.
- **Don't** add testimonials, client logos, badges, invented statistics or ranking guarantees; the only rating shown is the real 5.0 from 28 Google reviews with its date.
