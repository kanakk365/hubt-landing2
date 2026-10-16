---
name: HubTech
description: AI and software studio site. Strict black and white; near-black ground, charcoal panels, white hairlines, Mona Sans display, and moving white line textures as the only atmosphere.
colors:
  bg: "oklch(0.085 0 0)"
  bg-deep: "oklch(0.06 0 0)"
  scene-well: "oklch(0.135 0 0)"
  surface: "oklch(0.13 0 0)"
  surface-2: "oklch(0.165 0 0)"
  surface-3: "oklch(0.21 0 0)"
  line: "oklch(1 0 0 / 0.1)"
  line-strong: "oklch(1 0 0 / 0.17)"
  fg: "oklch(0.975 0 0)"
  fg-muted: "oklch(0.74 0 0)"
  fg-subtle: "oklch(0.58 0 0)"
  signal-grey: "oklch(0.6 0 0)"
  violet: "oklch(0.95 0 0)"
  violet-strong: "oklch(0.82 0 0)"
  cyan: "oklch(0.86 0 0)"
  blue: "oklch(0.8 0 0)"
  amber: "oklch(0.9 0 0)"
  rose: "oklch(0.78 0 0)"
  lilac: "oklch(0.88 0 0)"
  lime: "oklch(0.97 0 0)"
  green: "oklch(0.88 0 0)"
typography:
  display:
    fontFamily: "Mona Sans, Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 1rem + 5.9vw, 6rem)"
    fontWeight: 380
    lineHeight: 0.98
    letterSpacing: "-0.04em"
    fontVariation: "\"wdth\" 112"
  title:
    fontFamily: "Mona Sans, Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1rem + 3.9vw, 4.4rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.04em"
    fontVariation: "\"wdth\" 106"
  headline:
    fontFamily: "Mona Sans, Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.15rem + 2.3vw, 3.3rem)"
    fontWeight: 460
    lineHeight: 1.04
    letterSpacing: "-0.036em"
    fontVariation: "\"wdth\" 104"
  card-title:
    fontFamily: "Mona Sans, Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  lead:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "\"ss01\", \"cv11\""
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.625
    fontFeature: "\"ss01\", \"cv11\""
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
  mono-data:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.4
    fontFeature: "\"tnum\""
rounded:
  control: "10px"
  field: "12px"
  frame: "14px"
  section: "16px"
  pill: "9999px"
spacing:
  gutter-mobile: "24px"
  gutter-desktop: "32px"
  container: "1200px"
  nav-height: "64px"
  section-y-mobile: "80px"
  section-y-desktop: "128px"
components:
  button-primary:
    backgroundColor: "{colors.fg}"
    textColor: "{colors.bg}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "#ffffff"
    textColor: "{colors.bg}"
  button-primary-sm:
    backgroundColor: "{colors.fg}"
    textColor: "{colors.bg}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "36px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "48px"
  button-ghost-hover:
    backgroundColor: "oklch(1 0 0 / 0.04)"
  input-field:
    backgroundColor: "oklch(0.06 0 0 / 0.7)"
    textColor: "{colors.fg}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "0 16px"
    height: "48px"
  nav-bar:
    backgroundColor: "transparent"
    height: "64px"
  nav-bar-scrolled:
    backgroundColor: "oklch(0.085 0 0 / 0.8)"
  nav-link:
    textColor: "{colors.fg-subtle}"
    typography: "{typography.label}"
  nav-link-active:
    textColor: "{colors.fg}"
  tag:
    textColor: "{colors.fg-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
  panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.fg}"
    rounded: "{rounded.section}"
  product-frame:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.frame}"
    padding: "6px"
  product-frame-screen:
    backgroundColor: "{colors.bg-deep}"
    rounded: "{rounded.field}"
  scene:
    backgroundColor: "{colors.scene-well}"
    textColor: "{colors.fg}"
---

# Design System: HubTech

## Overview

**Creative North Star: "The Contour Room"**

HubTech reads as a black room drawn in white line. There is no colour anywhere on the site: the ground is a near-neutral black, panels are charcoal with 1px white hairlines, type is paper white stepping down through two greys, and every product screenshot is rendered greyscale. Atmosphere comes from line, not light: on Home a WebGL contour terrain of white lines rises from below the copy and leans toward the pointer; inner page heroes and the closing CTA carry a faint white halftone wave field. Both are confined so they never sit behind reading text.

The type is wider and lighter than the category default. Mona Sans, stretched 104 to 112% and set at 380 to 460 weight, carries every display line; Geist runs the reading text; Geist Mono speaks only for counters and the data inside interface scenes. Headings split into two tones, a paper-white claim followed by a mid-grey continuation.

The proof is the products themselves, redrawn in code as interface scenes with demo data, inside squared window frames. Density is calm: one idea per section, wide vertical rhythm, left-aligned or two-column compositions inside a 1200px container. Motion is one grammar: content rises out of a short blur on the expo-out curve, once; hovers move by a pixel or two. The History page is the one place motion is scroll-linked: chapters wipe in, dim when off-centre and an axis fills as you read. Every animated layer respects reduced motion.

**Key Characteristics:**
- Zero-chroma palette: near-black ground, charcoal panels, white hairlines at 10% and 17%, three greys of ink.
- Moving white line textures (contour terrain on Home, halftone waves on inner heroes and the CTA) as the only atmosphere, desktop-confined away from copy.
- Mona Sans display, light to medium and slightly wide; two-tone paper and mid-grey headings.
- Squared 10px buttons: a white slab with an inline up-right arrow, or a hairline outline.
- Products shown as coded scenes with demo data; real screenshots in greyscale.
- A plain full-width bar for navigation, wordmark only.

## Colors

A strict black-and-white system. Every colour value in the site has zero chroma; the legacy hue-named tokens survive only as names for a ladder of light greys.

### Primary
- **Paper White** (`fg`): the only "accent". Headings, primary text, the primary button fill, the active nav underline, the History axis fill and lit nodes, the contour and halftone line colour (`#ffffff` at reduced opacity).

### Secondary
- **Signal Grey** (`signal-grey`, the `text-signal` utility): the second line of two-tone hero headings ("one hub.", "engineered end to end.", "came together."). Section headings use Subtle Ink for the same job.

### Tertiary
- **Legacy Light Greys** (`violet`, `violet-strong`, `cyan`, `blue`, `amber`, `rose`, `lilac`, `lime`, `green`): named after the old hues, now neutral greys between 0.78 and 0.97 lightness. They still drive focus outlines and the caret (`violet`), input focus borders, scene highlights, the form error border and message (`rose`), the scenes' Live pill, and the per-product accent classes, which now resolve to grey dots and text plus a 6% white glow. Treat them as tints of white, never as a reason to reintroduce hue.

### Neutral
- **Black** (`bg`): the page ground.
- **Deep Black** (`bg-deep`): footer ground, screenshot wells, input fills.
- **Scene Well** (`scene-well`): the ground of every coded interface scene.
- **Charcoal** (`surface`), **Charcoal Raised** (`surface-2`), **Charcoal High** (`surface-3`): the panel fill and its rarely used lifts.
- **Hairline** (`line`) and **Strong Hairline** (`line-strong`): every border and divider; strong for buttons, inputs and numbered markers.
- **Muted Ink** (`fg-muted`): body copy and ledes.
- **Subtle Ink** (`fg-subtle`): inactive nav links, the second tone of section headings, captions, metadata, mono counters.

### Named Rules
**The Zero Chroma Rule.** Every colour on the site is a grey. Any new oklch value is written with chroma 0; any raster product image is shown through the greyscale filter. Hierarchy comes from lightness and opacity, never hue.

**The Accent Is a Name Rule.** The hue-named tokens and per-product accent classes are kept for wiring, not for colour. Do not give them chroma back to identify a product; products are identified by name and category text.

## Typography

**Display Font:** Mona Sans, variable width axis (with Geist, ui-sans-serif, system-ui)
**Body Font:** Geist, with stylistic sets ss01 and cv11 on
**Label/Mono Font:** Geist Mono (with ui-monospace, SFMono-Regular)

**Character:** A wide, light grotesque for statements against a compact, neutral sans for reading. The display weight drops as the size grows (380 at hero size, 460 at section size) so large lines stay airy rather than heavy. Mono is a data voice, not a style.

### Hierarchy
- **Display** (380, 112% width, fluid to 96px, 0.98, -0.04em): the home hero headline only, "Six platforms, / one hub.", two lines, the second in Signal Grey.
- **Title** (400, 106% width, fluid to about 70px, 1, -0.04em): inner-page hero headlines, max 15ch left-aligned or 18ch centred.
- **Headline** (460, 104% width, fluid to about 53px, 1.04, -0.036em): section and CTA headings, max 14 to 24ch, often two-tone.
- **Card Title** (Mona Sans 500, 1.125 to 2.5rem, -0.025 to -0.035em): product names, chapter names, capability names, mobile nav links (28px).
- **Lead** (400, 1.0625rem rising to 1.125 to 1.25rem at md, 1.625): ledes in Muted Ink, max 44 to 60ch.
- **Body** (400, 0.875 to 0.9375rem, 1.625): card copy, footer copy, links, buttons.
- **Label** (500, 0.8125 to 0.875rem): nav links, form labels, footer column heads, tag text, captions. Sentence case, no extra tracking.
- **Mono Data** (400, 0.6875rem with tabular numerals; 9.5 to 10.5px inside scenes): ordinal counters, trace rows, and the data and micro-labels inside interface scenes.

### Named Rules
**The Two-Tone Rule.** A heading may run as one sentence in two tones: the claim in Paper White, its continuation in Signal Grey (heroes) or Subtle Ink (sections), same size and weight. The split is semantic (claim, then qualifier), never mid-word.

**The Wide-and-Light Rule.** Display lines are set in Mona Sans between 104% and 112% width and between 380 and 500 weight. Only the wordmark (600, 110% width) is heavier.

**The Mono-for-Data Rule.** Geist Mono appears on counters, traces and the data inside scenes. Never on headings, buttons or prose.

**The Sentence-Case Rule.** No uppercase, no letter-spaced labels above headings. Hierarchy comes from size, width and tone; balance wrap on h1 to h3, pretty wrap on paragraphs.

## Layout

A single centred container, 1200px max, with 24px gutters on mobile and 32px from 768px; the navbar uses the same container. Sections breathe on a wide vertical rhythm, roughly 80px on mobile rising to 112 to 128px at md. Inner heroes open with 144px (176px at md) of top space under the 64px navbar.

The home hero fills the first viewport (up to 1040px) and is centred on one axis: the two-line headline, the lede (58ch), the two buttons and a one-line services list separated by 3px dots (dots hidden on phones so a wrapped line never starts with one). The contour terrain occupies the lower part of the hero (from 44% down on sm and up, from 60% on phones), masked to fade at both ends, with a soft black radial pool behind the copy so lines never run under text. A six-column product index closes the hero along the bottom edge: hairline-divided cells with name, category and a down-right arrow, three columns at sm, hidden on phones.

**Balance rules.** Left and right must carry equal weight. Full-width section headings use the split layout (SectionHeading's default): title in the left column, lede and any link in the right, bottom-aligned at lg. Two-column compositions either end on the same line (the CTA's book button sits on the form's submit row; In production's steps spread down the height of the frames) or centre on each other (History chapters, AI capability rows). Groups of cards sit in equal columns.

Inner heroes are left-aligned with an aside (the AI page's trace panel) or centred without one. Elsewhere compositions are a two-column split at lg (heading against a panel, scene or diagram) or a full-width panel subdivided by hairlines (the six-step engagement strip, the three AI pillars). Product tiles sit in a 12-column grid with 16 to 20px gaps. The History page runs a vertical axis down the centre on desktop and a left rail on mobile, chapters alternating sides.

Below md everything collapses to one column, the nav becomes a full-height sheet, and the wave textures are removed below lg.

## Elevation & Depth

Depth is tonal and hairline-led. Panels are lifted by a top-to-bottom white wash (3.5% to 1.2%) over Charcoal, a 1px inset highlight on the top edge, and one long soft drop that disappears into the ground. Hero-scale panels add a lit top edge: a fading white hairline (65% at its brightest) across the middle 76% of the top border. Behind product frames and showcase tiles sits a large blurred radial wash of white at 6%. A static film grain at 3.5% opacity keeps the dark gradients from banding; a pointer-tracking 420px grey spotlight at 9% lights interactive panels on hover. A 22px white dot grid at 9%, masked to a soft ellipse, sits under hero copy and behind the History capability glyphs.

The moving textures are the strongest atmospheric layer and are always subordinate to type:
- **Contour terrain** (Home hero, React Bits Topography): 26 white contour lines at 1px, slow (0.18), with fog and depth of field, lifting under the pointer. Never above the headline.
- **Halftone waves** (React Bits PatternWaves via WaveTexture): white on a transparent canvas, non-interactive, edge-faded. On left-aligned inner heroes it fills the right 62% and fades downward; on centred heroes it is masked out of the middle so the title sits on clean black; in the CTA it is confined to the lower left under the button. Desktop (lg) only.

### Shadow Vocabulary
- **Panel** (`box-shadow: inset 0 1px 0 oklch(1 0 0 / 0.06), 0 24px 48px -24px oklch(0 0 0 / 0.7)`): every raised panel.
- **Field Focus** (`box-shadow: 0 0 0 4px oklch(0.74 0 0 / 0.16)`): inputs on focus.
- **Node Gap** (`box-shadow: 0 0 0 6px var(--color-bg)`): History axis nodes, so the axis line breaks around them.

### Named Rules
**The Line Not Light Rule.** Atmosphere is drawn in white line (contours, halftone, hairlines, dot grid), never in coloured glows or blobs. If an element needs to stand out, give it more white or a stronger hairline.

**The Clear Copy Rule.** Textures never sit behind reading text: they are masked away from headlines, removed below lg where copy fills the width, and confined to empty regions of panels.

## Shapes

Squared-soft rectangles plus the pill. Controls and containers sit on a short ladder that grows with size: buttons, the mobile menu button and icon tiles at 10px; fields, screenshot wells and trace rows at 12px; product frames, the CTA panel, History chapter panels and architecture nodes at 14px; section panels and showcase tiles at 16px. A nested surface always uses a smaller radius than its parent; scene interiors use 5 to 9px for their own miniature controls. Pills are reserved for small markers: tags, the "Demo data" badge, numbered step markers, History axis nodes and status dots.

Borders are always 1px hairlines. Small dots (6px product dots, 3px service separators, 7px node cores) replace bullets and icons wherever a marker is enough.

## Components

### Buttons
Squared slabs; the white one is the only solid light on the page.
- **Shape:** gently squared (10px), no inset chip, no glow.
- **Primary:** Paper White fill, Black text, 500 weight, -0.01em, with an inline 16px up-right arrow after the label. Sizes 36px (13px text), 44px and 48px (15px text).
- **Hover / Focus:** fill to pure white; the arrow nudges 2px right and 1px up over 300ms on the expo-out curve; press scales to 0.98. Focus is a 2px light-grey outline at 3px offset.
- **Ghost:** transparent with a Strong Hairline border and the same inline arrow; hover raises the border to 40% white and adds a 4% white fill. Used in the footer and the form's secondary action.
- **Secondary link button:** the ghost outline without an arrow, for in-site paths beside the primary ("See the work").
- **Text link:** Paper White 500 with a trailing arrow that nudges 2px on hover; on History, an underline at 20% white that goes solid on hover.

### Chips
- **Tag:** pill, Hairline border (optionally a 2.5% white fill), Muted Ink 13px text, 4px 12px.
- **Demo data badge:** an outline pill in Subtle Ink at 11px; lowercase mono at 9.5px inside scenes.

### Cards / Containers
- **Corner Style:** per the Shapes ladder.
- **Background:** the Panel treatment over Charcoal; inner wells on Deep Black or the Scene Well.
- **Shadow Strategy:** Panel shadow plus lit top edge on hero-scale panels; frames and tiles add a 6% white wash.
- **Border:** Hairline; hover raises to 16% white.
- **Internal Padding:** 20 to 28px in tiles, 32 to 56px in CTA and section panels; subdivisions use hairline dividers rather than gaps.

### Inputs / Fields
- **Style:** 48px tall, 12px radius, Deep Black at 70%, Strong Hairline border (20% white on hover), 15px text, Subtle Ink placeholder, light caret. Labels above in Label style, "Optional" in Subtle Ink at the right.
- **Focus:** border to a 70% light grey plus the 4px Field Focus halo.
- **Error:** border to a 70% grey and a 13px message beneath, linked by aria-describedby.

### Navigation
A plain fixed bar across the full width, 64px tall, inside the 1200px container. Wordmark and links on the left (28px apart), a small primary Book a call on the right. Links are 14px 500 in Subtle Ink, Paper White on hover and when active; the active link carries a 1px Paper White underline at the bar's bottom edge that slides between links over 450ms. The bar is transparent at the top of the page; once scrolled 12px it gains a Hairline bottom border, an 80% Black fill and a heavy backdrop blur. Mobile: a 40px squared hairline menu button opens a full-height sheet of Mona Sans 28px links divided by hairlines, with a full-width primary button below.

### Footer
Deep Black ground under a Hairline. A four-column grid (brand with a ghost Book a call, Studio, Products, Work with us) with Subtle Ink column heads, then a ghost wordmark: "HubTech" in Mona Sans 600 at 110% width, up to 248px, in 7.5% white, fading out downward and cropped by the bottom bar.

### Wordmark
"HubTech" set in Mona Sans 600, 19px, 110% width, -0.035em, in Paper White. There is no logo mark; the wordmark stands alone until the official mark is supplied.

### Interface Scene (signature)
Each product redrawn in code inside the Scene Well: a container-query root so the scene adapts to its frame, miniature product UI in Geist with Mono micro-labels, grey highlights and a grey Live pill. A lowercase mono "demo data" tag sits bottom right, and the scene announces itself as an interface recreation with demo data.

### Product Frame (signature)
Squared window chrome: a 14px Panel with 6px padding and lit top edge, a 36px header row with a 6px grey dot, the product name, optional Subtle Ink meta after a middle dot, and the "Demo data" badge; then a 12px Deep Black well holding a scene or screenshot, with any image forced to greyscale.

### History Axis (signature)
A vertical hairline axis with a 2px white fill (white to 30% white) that scales down the page with scroll. Each chapter has a 17px node that settles in and lights from 20% to 90% white as it reaches the viewport centre. Chapter copy and its capability panel wipe and rise in (GSAP ScrollTrigger), and both dim with distance from the centre (opacity 0.4 to 1 to 0.4). Reduced motion shows the axis full and every chapter at rest.

### Illustrations (signature)
Thirteen drawn figures share one kit (`src/components/illustrations/kit.tsx`): pillar diagrams (360 by 240, full-bleed 3:2 stage at the top of each AI card), History capability emblems (480 by 360, filling the 4:3 card window) and AI capability plates (480 by 384, filling the 5:4 panel). Each figure draws its own faint dot field with corner registration marks, uses 1px hairlines at ink steps of 5, 10, 17, 36, 58 and 86% white, puts one bright focal element on a soft white glow, and labels in small Geist Mono (scaled 1.15x on the wider figures). Motion is SVG-native: signals travel along paths as a faint tail with a bright head, rings breathe, dashed orbits turn slowly. Animation pauses while a figure is offscreen and holds a composed still frame under reduced motion. Figures are role="img" with a sentence-long aria-label and never contain claims: any numbers are illustrative demo values already used in the product scenes.

## Do's and Don'ts

### Do:
- **Do** keep every colour at zero chroma and show every screenshot through the greyscale filter.
- **Do** set display lines in Mona Sans at 104 to 112% width and 380 to 500 weight.
- **Do** split headings into a Paper White claim and a grey continuation when the sentence has two halves.
- **Do** build buttons as 10px squared slabs with an inline up-right arrow; pair the white primary with a hairline outline.
- **Do** use the contour terrain only in the home hero and the halftone waves only on inner heroes and the CTA, masked away from copy and hidden below lg.
- **Do** build every raised surface from the Panel treatment, and light hero-scale panels with the white top edge.
- **Do** show products as coded scenes in the Scene Well, tagged "demo data".
- **Do** enter content with a 16 to 22px rise out of a 6 to 10px blur on cubic-bezier(0.22, 1, 0.36, 1), 700ms to 1s, staggered 70 to 90ms, once; keep scroll-linked motion to the History page.
- **Do** keep nested radii smaller than their parents, following the 10 / 12 / 14 / 16px ladder.
- **Do** route every booking action through cal.com; the inquiry form hands off to the same booking.

### Don't:
- **Don't** reintroduce hue: no violet, cyan or per-product colour, no gradient text phrases, no coloured glows under buttons.
- **Don't** add uppercase or letter-spaced labels above headings.
- **Don't** set display lines heavy (600+) or condensed; the wordmark is the one heavy exception.
- **Don't** draw a logo mark or substitute a glyph for one; the site uses the wordmark only.
- **Don't** let a moving texture sit behind a headline, lede or form.
- **Don't** use pill-shaped buttons or inset arrow chips; pills are for small markers only.
- **Don't** present demo values as client results, and don't add client names, testimonials, company stats or awards that the studio has not supplied.
- **Don't** show an email address anywhere on the site.
- **Don't** stack drop shadows or use hard offset shadows; depth is the hairline, the lit edge and the wash.
