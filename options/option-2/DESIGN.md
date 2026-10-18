---
name: Ginger Beef House · Bright Counter
description: A bright, rounded ordering site for a Chinese-Canadian takeout and nightly smorgasbord in Campbell River. Get from a promo to a dish in the bag fast, then call.
colors:
  counter-red: "#C8202A"
  counter-red-deep: "#A3161F"
  blush: "#FDF0EE"
  blush-deep: "#F9DEDA"
  ink: "#1D1D1F"
  ink-soft: "#3A3A3D"
  mute: "#66666B"
  paper: "#FFFFFF"
  soft: "#F6F5F3"
  line: "#ECEBE9"
  open-green: "#4ADE80"
  peanut-cream: "#FFF1CC"
  peanut-brown: "#7A5200"
typography:
  display-price:
    fontFamily: "Figtree, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(64px, 7vw, 96px)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.03em"
  promo-headline:
    fontFamily: "Figtree, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(30px, 3vw, 44px)"
    fontWeight: 900
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Figtree, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(28px, 3.2vw, 38px)"
    fontWeight: 900
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Figtree, system-ui, -apple-system, sans-serif"
    fontSize: "24px"
    fontWeight: 900
    letterSpacing: "-0.01em"
  dish-name:
    fontFamily: "Figtree, system-ui, -apple-system, sans-serif"
    fontSize: "18px"
    fontWeight: 800
    lineHeight: 1.25
  body:
    fontFamily: "Figtree, system-ui, -apple-system, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Figtree, system-ui, -apple-system, sans-serif"
    fontSize: "15px"
    fontWeight: 800
    lineHeight: 1
  menu-number:
    fontFamily: "Figtree, system-ui, -apple-system, sans-serif"
    fontSize: "13px"
    fontWeight: 800
    letterSpacing: "0.06em"
    fontFeature: "tnum"
rounded:
  xl: "28px"
  lg: "22px"
  md: "16px"
  tag: "14px"
  pill: "999px"
spacing:
  gutter: "16px"
  grid: "20px"
  section: "80px"
  wrap: "1240px"
components:
  pill-red:
    backgroundColor: "{colors.counter-red}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
    height: "48px"
  pill-red-hover:
    backgroundColor: "{colors.counter-red-deep}"
  pill-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
    height: "48px"
  pill-plain:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
    height: "48px"
  round-button:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "44px"
  add-button:
    backgroundColor: "{colors.counter-red}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "44px"
  add-button-in-bag:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "44px"
  chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  bag-button:
    backgroundColor: "{colors.blush}"
    textColor: "{colors.counter-red}"
    rounded: "{rounded.pill}"
    size: "48px"
  search-field:
    backgroundColor: "{colors.soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 18px"
    height: "48px"
  photo-card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.lg}"
    padding: "16px 18px 18px"
  mini-card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "12px"
  number-tile:
    backgroundColor: "{colors.blush}"
    textColor: "{colors.counter-red}"
    rounded: "{rounded.tag}"
    size: "52px"
  promo-panel:
    backgroundColor: "{colors.blush}"
    rounded: "{rounded.xl}"
  smorgasbord-band:
    backgroundColor: "{colors.counter-red}"
    textColor: "{colors.paper}"
    rounded: "{rounded.xl}"
  bag-sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    width: "440px"
---

# Design System: Ginger Beef House · Bright Counter

## Overview

**Creative North Star: "The Bright Counter"**

A clean, well-lit order counter: white ground, one confident red, and everything rounded enough to tap without thinking. The visitor's path is short and always visible: a promo or a deal tile, a dish, the bag, the phone. Every surface either sells a dish or moves it into the bag; nothing is atmosphere for its own sake.

Density is moderate and phone-first. Big blush and red panels carry the persuasion (new dishes, the $25 smorgasbord, family dinners), while the menu itself is a calm grid of white cards on hairline borders. Figtree at 800 to 900 does all the talking; there is no second typeface. State is carried by a single swap, red to ink: a red add button becomes an ink "n in bag" button, an outlined chip becomes an ink chip.

**Key Characteristics:**
- White ground, one red, ink for selected state, blush for warm panels.
- One family, Figtree, heavy at the top (900 headings, 800 labels and prices).
- Pills for every action, circles for icon actions, 16 to 28px corners on every container.
- Menu numbers in red on every dish, in cards, mini cards and bag lines.
- Flat at rest; a soft lift on card hover and a red glow only under the mobile bag bar.

## Colors

A committed single-accent palette: Counter Red is the brand and the call to action, ink is the selected state, blush warms panels.

### Primary
- **Counter Red** (counter-red): the wordmark, every primary pill, the add button at rest, menu numbers, the bag badge, the "New" badge, active carousel dot, the smorgasbord band ground, visit-card icons and links, focus rings and text selection.
- **Counter Red Deep** (counter-red-deep): hover state for red pills and add buttons only.

### Secondary
- **Blush** (blush): the promo carousel panel, the bag button ground, number tiles on mini cards and family dinner size tiles, the pickup-discount visit card and the discount note in the bag.
- **Blush Deep** (blush-deep): borders of the round carousel arrows and the empty-bag icon. Inactive carousel dots use a slightly deeper rose (#B9706A).

### Neutral
- **Ink** (ink): body text, the utility bar and footer ground, selected chips and option pills, the add button in its "in bag" state, the ink pill.
- **Ink Soft** (ink-soft): secondary copy (promo and combo descriptions, dinner item lists, mini-card prices, bag totals rows).
- **Mute** (mute): tertiary copy (panel subtitles, notes, fine print, link buttons, search icon).
- **Paper** (paper): page ground, cards, the bag sheet, the sticky header at 96% opacity.
- **Soft** (soft): quiet fills: the combo section panel, search field at rest, nav-link hover, card photo placeholder, bag stepper, empty-search message.
- **Line** (line): 1px card and section borders, 2px pill, chip and round-button borders.

### Status and tag
- **Open Green** (open-green): the live-status dot in the utility bar when open; it is grey (#9A9A9A) when closed.
- **Peanut Cream / Peanut Brown** (peanut-cream, peanut-brown): the small "Peanut" tag beside a dish name. Its only use.

### Named Rules
**The One Red Rule.** Red is the action and the brand. If something is red and you cannot tap it, it is a menu number, a badge, or the smorgasbord band; nothing else gets red.

**The Red-to-Ink Rule.** Selected or "already in the bag" is always ink, never a second accent. Chips, option pills, combo picks and the add button all switch to ink fill with white text.

## Typography

**Font:** Figtree (Google Fonts, weights 400 to 900), fallback `system-ui, -apple-system, sans-serif`. One family for everything.

**Character:** Friendly geometric sans pushed heavy. Headings at 900 with tight negative tracking feel loud and warm; body at 400 stays plain.

### Hierarchy
- **Display price** (900, clamp 64 to 96px, line-height 1, -0.03em): the smorgasbord "$25" only, with a 20px/700 "per person" suffix. Hero tile prices use a fixed 48px.
- **Promo headline** (900, clamp 30 to 44px, 1.04, -0.025em, balanced wrap): carousel slide titles; fixed 32px at 860px and below.
- **Headline** (900, clamp 28 to 38px, 1.08, -0.02em): every section heading.
- **Title** (900, 22 to 28px, -0.01em): menu panel titles (24px), family dinner names (22px), hero tile names (28px).
- **Dish name** (800, 18px, 1.25): photo-card dish names; 15px at 600px and below. Mini cards use 700/16px.
- **Body** (400, 16px, 1.5): default. Lead copy in promo and combo runs 17px, capped at 34ch.
- **Label** (800, 15px, line-height 1): pills, add buttons, legends. Chips and nav are 700/15px; option pills 700/12px.
- **Prices** (800, 18px, tabular figures): card prices; 22px on dinner cards; 26px/900 on promo slides; bag totals 900/20px.
- **Menu number** (800, 13px, +0.06em, red): "NO. 43" above a photo-card dish name. Mini cards set the number at 900/18px inside a blush tile.

### Named Rules
**The Tabular Price Rule.** Every price, quantity and bag amount uses tabular figures so columns of prices align.

**The No Second Face Rule.** Hierarchy comes from Figtree's weight and size only. Do not add a display or script face.

## Layout

- **Container:** `min(1240px, 100% - 32px)`, centred. Sections are spaced 72 to 80px apart; the footer reserves 110px of bottom padding so the mobile bag bar never covers content.
- **Hero:** two columns at 1.65fr / 1fr with 20px gap. Promo carousel on the left (min-height 470px), two stacked photo tiles on the right.
- **Menu grid:** photo cards in 4 columns (20px gap); compact mini cards beneath in 3 columns (14px gap).
- **Combo:** 1fr / 1.5fr inside a soft panel with 40px padding. **Smorgasbord:** 1fr / 1fr, photo left, text right. **Family dinners:** auto-fill columns, minimum 270px, 18px gap. **Visit:** 4 columns, 16px gap.
- **Sticky stack:** the header sticks at top 0 (min-height 74px); the menu tab bar sticks beneath it at top 74px. Anchor scrolling is offset by 96px.

### Breakpoints
- **1080px and below:** header nav links hide (wordmark, call pill and bag remain, spaced apart). Menu grid 3 columns, mini grid 2, visit 2.
- **860px and below:** hero stacks; promo slides go single column with the photo first (4:3); photo tiles sit side by side (min-height 190px). Combo and smorgasbord stack. Tab bar becomes a single horizontally scrolling row (it wraps above 860px). The mobile bag bar appears and the bag sheet becomes a bottom sheet.
- **600px and below:** utility address hides; the call pill collapses to a 48px icon circle; wordmark 21px. Menu grid 2 columns (12px gap), mini grid and visit 1 column, tiles 1 column (min-height 170px). Card footers stack and the add button goes full width.

## Elevation & Depth

Flat by default. Depth comes from tonal panels (blush, soft, red) and hairline borders, not shadows. Three shadows exist, each tied to one job.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 10px 30px rgba(0,0,0,.08)` plus `translateY(-2px)`): photo cards on hover only.
- **Bag bar glow** (`box-shadow: 0 10px 30px rgba(200,32,42,.35)`): the floating mobile bag bar only.
- **Sheet footer edge** (`box-shadow: 0 -8px 20px rgba(0,0,0,.06)`): the sticky bag footer in bottom-sheet mode.

The sticky header uses translucent white (`rgba(255,255,255,.96)`) with `backdrop-filter: saturate(1.4) blur(8px)` and a 1px line border. The bag sheet backdrop is `rgba(20,20,22,.45)`.

### Named Rules
**The Flat-At-Rest Rule.** Nothing casts a shadow until it is hovered or floats over content.

## Shapes

Rounded everything, in four steps: 28px for big panels (promo, tiles, combo, smorgasbord band, bag sheet), 22px for cards and inner panels (photo cards, dinner and visit cards, combo builder, promo photo), 16px for mini cards and size tiles, 14px for number tiles, week days and the discount note. Every button, chip, field, badge and tag is a full pill (999px); icon actions are perfect circles. Borders are 1px line on containers and 2px line on interactive pills, chips and circles (1.5px on small option pills).

## Components

### Pills and round buttons
- **Pill:** 48px min-height, 12px 22px padding, 2px border, 800/15px. Variants: red (primary; hover deep red), ink (secondary call, used on the red smorgasbord band), plain white with line border. Full-width variant in the bag. Press scales to 0.97. Disabled at 40% opacity.
- **Round button:** 44px circle, white, 2px line border that turns ink on hover. Used for carousel arrows (blush-deep border) and the sheet close.
- **Link button:** muted 600/14px underlined text (Empty bag, Remove).

### Add button and "n in bag"
- Red pill, 44px tall, plus icon (16px) and "Add" label; promo slides label it "Add to bag".
- Once the dish is in the bag it turns ink and the label is replaced by "n in bag" (for example "2 in bag"); tapping adds another. On mini cards it is icon-only at rest and shows just the count when in bag.
- On tap it bumps to scale 1.1 for 300ms. The accessible label updates to "Add another {dish}, n in bag".

### Utility bar and sticky header
- **Utility bar:** ink ground, white 14px text, 38px min-height. Left: live status with an 8px dot (green when open, grey when closed) and 600-weight text. Right: address in light grey, hidden at 600px.
- **Header:** sticky translucent white, 74px. Red wordmark (900/24px, -0.02em), pill nav links (700/15px, soft hover), red call pill with phone icon and number, then the bag button.
- **Bag button and badge:** 48px blush circle with red bag icon. The count badge is a red pill (22px tall, 800/12px, 2px white ring) at the top-right corner; it scales in from 0 when the bag has items. The whole button bumps (scale 1.14 at 40%, 450ms) on every add.

### Promo carousel
- Blush 28px panel. Each slide: text column (headline, 17px description, 26px price, add pill) beside a 22px-cornered photo with a red uppercase "New" pill badge top-left and a small translucent "Demo dish · stand-in photo" pill bottom-right.
- **Behaviour:** slides are stacked in one grid cell and crossfade over 600ms; the incoming photo settles from scale 0.96 to 1 over 900ms. Hidden slides are inert.
- **Autoplay:** advances every 7 seconds. Pauses on mouse hover and on keyboard focus inside the carousel, resumes on leave or blur. Never autoplays under reduced motion. Using arrows or dots restarts the timer.
- **Controls:** bottom-left cluster of prev/next round buttons with dots between. Dots are 24px hit targets; inactive dot is a 10px rose circle, the active dot stretches to a 30px red pill (animated width).

### Photo tiles
28px tiles with a full-bleed photo, a bottom scrim (`linear-gradient(180deg, transparent 25%, rgba(0,0,0,.82))`) and white text with a soft text shadow: optional 48px price, 900/28px name, 15px detail line. Photo zooms to 1.05 on hover over 700ms. The whole tile is a link to its section.

### Menu tabs and search
- **Search:** soft pill field, 48px, up to 340px wide, search icon, 600/16px input. On focus the field turns white with a 2px ink border. Matches by dish name or exact menu number; results replace the panel with a "Results for" title and count.
- **Tabs (chips):** 44px pills, 2px line border, 700/15px; hover darkens the border; selected is ink fill. The bar sticks under the header on translucent white. Two extra chips jump to the combo and family dinner sections instead of switching tabs.
- **Panel title:** 900/24px name with a muted range ("No. 24–36") beside it on the baseline.

### Photo cards versus mini cards
- **Photo card:** for dishes with a photo. White, 1px line border, 22px corners, 4:3 photo on soft placeholder, then red menu number, dish name, optional peanut tag and option pills, and a footer with price left and add button right. Hover lifts.
- **Mini card:** for dishes without a photo. A compact row: 52px blush number tile with the number in red 900/18px, name and price (700/15px, ink soft) with options, and an icon-only add button. 16px corners, 12px padding. Mini cards always follow photo cards in a separate grid.

### Option pills
Small radio pills (700/12px, 5px 10px, 1.5px line border, ink soft text) under the dish name. Checked is ink fill with white text; first option is preselected. Keyboard focus shows the red ring on the pill.

### Combo builder
A soft 28px panel: intro copy on the left, a white 22px builder card on the right. Two numbered fieldsets with 800/15px legends: a base choice and up to two picks, both as segmented pills (42px, 2px line border, 700/14px, checked ink). After two picks the rest disable at 40%. Footer: hairline top border, live "n items · $price" text and a red "Add combo" pill, disabled until one pick.

### Family dinner cards
1px line, 22px corners, 24px padding. A 56px blush size tile in red 900/20px ("2", "8–10"), a 900/22px name, the item list in ink soft 15px at 1.65 line-height, optional chop suey option pills, and a footer above a hairline with a 22px price and the add button.

### Smorgasbord band
Full red 28px band, photo half and text half (photo on top when stacked). White heading, the display-size "$25 per person", hours line, then a week strip: seven equal cells (14px corners, 6px gap, max 420px) in translucent white (14%) with the day and "$25". Tuesday is a dashed outline cell reading "Closed"; today is solid white with red text. An ink call pill sits beneath. Focus rings inside the band are white.

### Visit cards
Four cards: 1px line, 22px corners, 22px padding, a 26px red line icon, 800/17px heading, 15px ink soft detail and red 700 links. The pickup-discount card is blush with no visible border.

### Bag sheet
- A native modal dialog. **Desktop:** right drawer, full height, up to 440px wide, 28px corners on the left side only, slides in from the right over 450ms. Head (title plus round close), scrolling body, fixed footer.
- **860px and below:** bottom sheet, full width, up to 88% of the viewport height, 28px top corners, slides up over 450ms. The head sticks to the top and the footer sticks to the bottom with the sheet footer edge shadow; fine print and Empty bag hide to save room. A floating red bag bar (56px pill, 16px from the edges, count chip in white plus "View bag · total") opens it whenever the bag has items.
- **Lines:** name (800) with red menu number and muted option beneath, tabular amount right, then a soft stepper pill with 34px white circular minus/plus buttons and a Remove link. A newly added line fades down in over 500ms.
- **Footer:** subtotal, GST and total rows (total 900/20px), a blush discount note (14px corners) that tells the visitor how close they are to the pickup discount, the full-width red call pill, Empty bag link and fine print. Clicking the backdrop closes it.
- **Empty:** centred blush-deep bag icon (44px), "Your bag is empty" and a hint.

### Motion
One easing for everything: `cubic-bezier(.16,1,.3,1)` (a fast-out settle). Colour changes run 150 to 200ms; transforms 300 to 450ms; carousel crossfade 600ms and photo settle 900ms; tile zoom 700ms. Signature moments: add-button bump, bag-button bump, badge scale-in, line enter.

**Reduced motion** (`prefers-reduced-motion: reduce`): smooth scrolling off (including tab and jump scrolling), no carousel autoplay, slides swap without fade or scale, no sheet slide, no add or bag bumps, no line enter, no card lift or tile zoom transitions.

## Do's and Don'ts

### Do:
- **Do** keep red for actions, menu numbers, the badge, and the smorgasbord band, and use ink for every selected or in-bag state.
- **Do** show the menu number on every dish: photo card, mini card and bag line.
- **Do** keep tap targets at 44px or more (48px for pills, the bag and search).
- **Do** label stand-in photos and invented promo dishes on the surface itself ("Demo dish · stand-in photo").
- **Do** use tabular figures for every price and quantity.
- **Do** route every animation through the single easing and drop it under reduced motion.

### Don't:
- **Don't** add a second accent colour or a second typeface.
- **Don't** use square corners or small radii on containers; panels are 28px, cards 22px, compact items 14 to 16px.
- **Don't** add shadows to resting surfaces beyond the three listed in Elevation & Depth.
- **Don't** autoplay the carousel while it is hovered, focused, or under reduced motion.
- **Don't** hide the peanut tag or option pills inside a secondary view; they stay on the card.
