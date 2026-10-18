---
name: Ginger Beef House · Storefront
description: Bold, photo-led one-page restaurant site. A white page with black and red feature blocks, a numbered menu you can order from, and the phone as checkout.
colors:
  red: "#D42A24"
  red-deep: "#B21F1A"
  red-tint: "#FBE9E8"
  ink: "#111111"
  ink-2: "#2B2B2B"
  mute: "#5E5E5E"
  paper: "#FFFFFF"
  soft: "#F4F3F1"
  line: "#E6E4E0"
  night: "#0E0E0E"
  night-card: "#1B1B1B"
  on-dark: "#F5F5F4"
  on-dark-mute: "#B9B9B6"
  open-green: "#1E9E55"
  tag-bg: "#FFF3D6"
  tag-ink: "#7A5200"
typography:
  display:
    fontFamily: "Anton, Arial Narrow, sans-serif"
    fontSize: "clamp(46px, 7vw, 92px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.005em"
  price-display:
    fontFamily: "Anton, Arial Narrow, sans-serif"
    fontSize: "clamp(72px, 9vw, 120px)"
    fontWeight: 400
    lineHeight: 0.9
    fontFeature: "tnum"
  headline:
    fontFamily: "Anton, Arial Narrow, sans-serif"
    fontSize: "clamp(30px, 3.6vw, 44px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.005em"
  title:
    fontFamily: "Anton, Arial Narrow, sans-serif"
    fontSize: "30px"
    fontWeight: 400
    lineHeight: 1
  band:
    fontFamily: "Anton, Arial Narrow, sans-serif"
    fontSize: "clamp(20px, 2.2vw, 26px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.01em"
  body:
    fontFamily: "Archivo, system-ui, -apple-system, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  body-strong:
    fontFamily: "Archivo, system-ui, -apple-system, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.35
  label:
    fontFamily: "Archivo, system-ui, -apple-system, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.3
  button:
    fontFamily: "Archivo, system-ui, -apple-system, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1
  fine:
    fontFamily: "Archivo, system-ui, -apple-system, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  chip: "6px"
  btn: "8px"
  img: "14px"
  nav: "14px"
  card: "16px"
  panel: "20px"
  pill: "999px"
spacing:
  gutter: "16px"
  wrap: "1200px"
  section: "88px"
  section-feat: "72px"
  split-pad: "72px"
  card: "24px"
  panel: "40px"
components:
  button:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.btn}"
    padding: "10px 16px"
    height: "44px"
  button-red:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
    rounded: "{rounded.btn}"
  button-red-hover:
    backgroundColor: "{colors.red-deep}"
  button-white:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.btn}"
  button-white-hover:
    backgroundColor: "{colors.soft}"
  button-lg:
    padding: "14px 20px"
    height: "52px"
  add-control:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.btn}"
    padding: "0 10px"
    height: "40px"
    width: "40px"
  add-control-in:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
  nav-bar:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.nav}"
    padding: "7px 7px 7px 14px"
  nav-brand:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.red}"
    rounded: "{rounded.pill}"
    size: "68px"
  nav-count:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    height: "20px"
  nav-band:
    backgroundColor: "{colors.paper}"
    height: "100px"
  marquee-band:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
    typography: "{typography.band}"
    padding: "15px 0"
  status-pill:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "7px 12px"
  category-link:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    padding: "9px 13px"
  category-link-on:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  finder-input:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.btn}"
    width: "72px"
    height: "40px"
  choice-chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
    height: "42px"
  choice-chip-checked:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  peanut-tag:
    backgroundColor: "{colors.tag-bg}"
    textColor: "{colors.tag-ink}"
    rounded: "{rounded.pill}"
    padding: "2px 8px"
  combo-panel:
    backgroundColor: "{colors.soft}"
    rounded: "{rounded.panel}"
    padding: "40px"
  dinner-card:
    backgroundColor: "{colors.night-card}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.card}"
    padding: "24px"
  order-pill:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "10px 18px"
    height: "52px"
  order-drawer:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    width: "440px"
---

# Design System: Ginger Beef House · Storefront

## Overview

**Creative North Star: "The Storefront Window"**

The site works like a busy restaurant's front window. A big photo, a big price and a phone number come first, and the menu is laid out behind it ready to order from. It follows the familiar restaurant-site arrangement on purpose and earns its place through craft: a full-bleed photo hero, a floating white nav, a red marquee band, alternating 50/50 photo and text splits, then a dense, numbered menu that behaves like an app.

The page is white. Black and red arrive as whole blocks (dark splits, the red smorgasbord split, the dark family-dinners section, the red band) rather than as accents scattered over white. The two type voices stay separate. Anton is tall, condensed and uppercase, and it shouts the offers. Archivo is plain and sturdy, and it carries every name, price and instruction. Photos are generous, with soft corners. Controls are small, square-ish (8px corners) and quiet until something is in the order. Then the add control turns red, a count appears in the nav, and an order pill rises bottom-right.

**Key Characteristics:**
- White page; black and red only as full feature blocks or as order state.
- Anton uppercase for headlines and prices, Archivo for everything you read.
- Photos at 14px corners, buttons and inputs at 8px, chips and pills fully round.
- The menu number (1–110) is shown in red on every dish.
- Prices are before GST and use tabular figures everywhere.

## Colors

A high-contrast trio of white, near-black and one hot red, plus a warm-grey support set. There is no gradient anywhere except the hero's photo scrim.

### Primary
- **Storefront Red** (red): the brand block colour. It fills the marquee band, the smorgasbord split, the hero price block, primary call buttons and the "Call to order" nav button. It also marks order state: the add control once added, the nav count, and the count badge inside the order pill. Menu numbers, family-dinner bullets, visit icons and links use it as text.
- **Deep Red** (red-deep): hover only, on red buttons.
- **Red Tint** (red-tint): the faint wash used for the "jumped to this dish" row flash, the pickup-discount note in the drawer, and the numbered placeholder tile for dishes without a photo.

### Neutral
- **Ink** (ink): body text, the active category chip, checked choice chips, the order pill, finder messages.
- **Ink 2** (ink-2): secondary text on light surfaces such as category links, option selects, combo copy and drawer totals.
- **Mute** (mute): supporting copy, prices in the favourites rail, category number ranges, fine print.
- **Paper** (paper): the page, the nav, the white band, the drawer, the default buttons.
- **Soft** (soft): quiet panels (combo, visit notes), hover fill on nav links and category links, image placeholders.
- **Line** (line): every hairline divider and default control border.
- **Night** (night): the dark split, the family-dinners section and the footer.
- **Night Card** (night-card): family-dinner cards sitting on Night.
- **On Dark / On Dark Mute** (on-dark, on-dark-mute): primary and secondary text on Night surfaces. Dividers on dark use white at 16% or 35%.

### Functional
- **Open Green** (open-green): only the dot in the live open/closed status pill, with a 3px halo at 20% opacity. When closed, the dot is #9A9A9A.
- **Peanut Tag** (tag-bg on tag-ink): the only use of yellow, reserved for the allergen tag.

### Named Rules
**The Blocks Not Sprinkles Rule.** Red and black appear as whole surfaces (a band, a split half, a section) or as order state. Don't tint headings, borders or random badges red to "add brand".

**The Red Means Act Rule.** On white, a red control is either the call to action (call, order from the menu, add combo) or something already in your order. A neutral control never turns red on hover.

## Typography

**Display Font:** Anton (fallback Arial Narrow, sans-serif), loaded at 400 only.
**Body Font:** Archivo (fallback system-ui), loaded at 400, 500, 600 and 700.

**Character:** A poster-weight condensed display face over a plain workhorse grotesk. Anton says the offer; Archivo gives the facts.

### Hierarchy
- **Display** (hero h1): uppercase, max 15ch, `text-wrap: balance`. The price phrase sits on a red block (padding .04em .14em 0) on its own line.
- **Price Display**: the $25 on the smorgasbord split, with a 16px/600 Archivo "per person" line beneath.
- **Headline** (section h2): uppercase on every section. In the drawer header it is fixed at 30px.
- **Title**: Anton uppercase at 30px (menu category), 34px (combo), 26px (dinner card) and 24px (visit notes). The new-dish ids (N1–N3) use Anton at 22px.
- **Band**: marquee text, uppercase.
- **Body** (16px/1.55): paragraphs, capped at 44–60ch. Section intros use Mute.
- **Body Strong** (500): dish names in menu rows and the rail. Dish names in the new-dishes list and drawer lines are 600, at 17px and 16px.
- **Label** (14px/600): fieldset legends, the finder label, category ranges.
- **Button** (15px/600; 16px on large buttons).
- **Fine** (13px): stand-in and demo disclaimers, drawer line sub-notes.

### Named Rules
**The Two Voices Rule.** Anton is always uppercase and only for headlines, titles, prices-as-display, the band and the brand mark. It never sets a dish name, a description, a price in a list or a control label.

**The Tabular Rule.** Every price, quantity, total and the finder input uses `font-variant-numeric: tabular-nums`.

## Layout

- **Container:** `min(1200px, 100% − 32px)`, centred. The nav, hero copy and every wrapped section share it.
- **Section rhythm:** major sections pad 88px top and bottom (menu 88/32; favourites 72/64). Section heads sit 24px above content, either with the title left and a ghost link right, or stacked with an intro paragraph.
- **Hero:** full-bleed, `min(780px, 94svh)`, copy anchored bottom-left with 64px bottom padding. A credit sits bottom-right.
- **Favourites rail:** horizontal grid of square photos, columns `minmax(220px, 1fr)`, 22px gap, x-scroll with mandatory snap.
- **Split blocks:** two equal columns, min-height 620px. One half is a cover photo; the other is a text column padded `72px clamp(24px, 7vw, 104px)`, vertically centred, 18px gap. The order alternates: photo left on the dark split, photo right on the red split.
- **Menu:** each category is a two-column row grid (48px column gap) under a sticky category bar.
- **Combo:** a 1fr / 1.4fr two-column panel. **Family dinners:** auto-fill grid, `minmax(260px, 1fr)`, 18px gap. **Visit:** 1.2fr / 1fr, 48px gap.
- **Scroll offsets:** `scroll-padding-top` 180px (120px at 860px and below), category `scroll-margin-top` 170px, row 200px, so anchors clear the nav band and the sticky bar.

### Breakpoints
- **≤1020px:** the nav text links hide, leaving brand, bag and the call button. Nav bar padding becomes an even 7px.
- **≤860px:** splits stack to one column (photo min 320px; the red split puts its photo first) with text padding 56px 20px. Menu rows, combo (padding 28px 20px) and visit go to one column. The category bar wraps: finder on top, chips scroll on a full-width second line.
- **≤560px:** the nav band shrinks to 86px and the category bar sticks at 86px. The brand disc shrinks to 58px (11px type). The call button becomes icon-only, 44px square. Hero CTAs go full-width, and the hero bottom padding drops to 44px. Menu rows become three columns (52px thumb spanning two lines, name with price beneath, add control on the right). The order pill stretches edge to edge (16px insets), centred. Favourites padding becomes 56/48.

## Elevation & Depth

Surfaces are mostly flat and separated by colour blocks and hairlines. Shadows are soft, black and ambient, and only on things that float above the page: the nav, the add control on photos, the order pill and the drawer.

### Shadow Vocabulary
- **Nav float** (`0 6px 24px rgba(0,0,0,.12)` bar; `0 4px 18px rgba(0,0,0,.16)` brand disc): over the hero. Both soften to `0 2px 10px rgba(0,0,0,.08)` once scrolled.
- **Band edge** (`0 1px 0 #E6E4E0`): the hairline under the white nav band.
- **Photo control** (`0 2px 8px rgba(0,0,0,.18)`): add control sitting on a favourites photo.
- **Order pill** (`0 10px 30px rgba(0,0,0,.28)`).
- **Drawer** (`-10px 0 40px rgba(0,0,0,.2)`) over a `rgba(0,0,0,.45)` backdrop.

### Named Rules
**The Only Floaters Cast Shadows Rule.** Cards, panels and splits never get a shadow. On dark surfaces, depth comes from a lighter fill (Night Card on Night).

## Shapes

Three radius families: soft photos, firm controls and round tokens. Photos and the nav bar use 14px; buttons, the add control, the finder input, row thumbnails and dinner selects use 8px; small option selects and the finder message use 6px; dinner cards use 16px; the combo and visit panels use 20px. The status pill, category chips, choice chips, tags, the count badge, the order pill and the brand disc are fully round. Splits and full-bleed photos are square-edged, because they run to the viewport. Lists are separated by 1px hairlines (Line on white, white at 16–35% on dark), never by boxes.

## Components

### Buttons
- **Shape:** 8px corners, min-height 44px, padding 10px 16px, 8px icon gap, 18px stroke icons.
- **Default:** white with a Line border; hover darkens the border to #C9C6C0. Active presses 1px down.
- **Red:** red fill and border, white text; hover Deep Red. Used for calls and adding a combo.
- **White:** for use on photos and red blocks; hover Soft.
- **Ghost:** transparent default, used for "Full menu" links in section heads.
- **Large:** min-height 52px, 14px 20px, 16px text. **Block:** full width (drawer call button).
- **Disabled:** 45% opacity, not-allowed cursor.
- **Icon button:** 44px square, 8px, Line border (drawer close). **Link button:** Mute, underlined at 3px offset (Clear order).
- **Focus (global):** 3px red outline, 3px offset.

### Add / Quantity Control (signature)
- **Rest:** 40px square minimum, 8px, white, Line border, plus icon. Hover sets the border to Ink.
- **In order:** the fill turns red, the icon is swapped for the quantity number (bold 15px, tabular), white text.
- **Feedback:** on every add it scales to 1.15 for 250ms ("bump"). The nav count and the order pill bump at the same moment.
- **Variants:** on favourites photos it sits 12px from the bottom-right corner, with a white border and the photo-control shadow. On the dark split it is transparent with a white border at 35%, which goes full white on hover. On dinner cards it is a labelled white "+ Add" button that drops its label once something is added.
- **Drawer stepper:** 36px square minus and plus buttons, 8px, with the quantity between them. A text-only "Remove" sits right-aligned in Mute.

### Floating Nav and White Band
- **Layout:** fixed 16px from the top, aligned to the container, with pointer events only on its children. The brand is on the left: a 68px white disc with red uppercase Anton at 13px, on two lines. The bar is on the right: a white rounded bar (14px) holding text links (15px/500, Soft hover fill), the bag button and the red "Call to order" button.
- **Bag:** a 44px bordered square. The red count badge (20px, round, 11px/700) scales in from 0 when the order has items.
- **White band:** a separate full-width white strip, 100px tall with a hairline bottom edge, sitting just below the nav in z-order. It slides down from `translateY(-100%)` (0.35s, ease) once the hero has scrolled past (an IntersectionObserver on the hero with a −110px top margin toggles `.scrolled`). At the same moment the nav shadows soften. Over the hero, the nav floats with no band behind it.

### Hero Status Pill
White at 95%, round, 14px/600 Ink. A 9px dot is green with a halo when open, grey when closed. The label is filled live from the shared hours logic and reads "Checking hours…" until then.

### Marquee Band
A full-bleed red strip, 15px vertical padding, white uppercase Anton. The track holds the phrase set twice and translates −50% over 36s, linear and infinite. Items are separated by 44px and a small white dot at 70% opacity. It is `aria-hidden`; the same facts appear elsewhere on the page.

### Split Blocks
50/50 photo and text halves (see Layout). **Dark split** (new dishes): Night text half, On Dark text, lede in On Dark Mute. Its list rows are a grid of id (Anton 22px, mute, white when selected), name and description, price, and add control, divided by white hairlines at 16% with 18px vertical padding. Hovering, focusing or clicking a row wipes that dish's photo in: the other photos clip to `inset(0 0 0 100%)` over 0.7s, and the active photo sits on top. **Red split** (smorgasbord): red text half with the price display, an hours list on white hairlines at 35%, and a white button.

### Menu Rows
A grid of 64×48 thumb (8px corners), name block, price (600, tabular) and add control, with 14px gap, 12px vertical padding and a Line hairline below. The name is prefixed by the red bold menu number. Dishes with no photo get a Red Tint tile showing the number in red Anton at 20px in place of the thumb, and no inline number. The meta line holds the peanut tag (12px/600, round, yellow) and a sauce select (13px, 6px corners, Line border). Jumping to a dish flashes the row Red Tint for 1.6s.

### Category Bar and Finder
- **Bar:** sticky at 100px (86px at 560px and below), white, Line hairlines top and bottom, 64px min-height. Category links are round chips (14px/500, Ink 2, Soft hover). The active one is filled Ink with white text and is scroll-spied and auto-centred in the scroller. Scrollbar hidden.
- **Finder:** "Go to No." label (14px/600) and a 72×40 centred numeric input (8px, Line border, 16px/600 tabular; focus switches the border to Ink). Errors show as a small Ink tooltip below-right (6px corners, 13px white) that fades in and auto-hides after 2.2s.

### Combo
A Soft panel with 20px corners and 40px padding. On the left, an Anton title and the price copy. On the right, fieldsets with 14px/600 legends. Choices are round chips 42px tall (white, #D9D6D0 border), filled Ink when checked. Focus shows a red outline on the visible chip; disabled chips drop to 40% opacity. The foot row, above a #DEDBD5 hairline, holds the live summary and a red "Add combo" button, disabled until a pick is made.

### Family Dinner Cards
Night Card on the Night section, 16px corners, 24px padding, 14px internal gap. The head row has an Anton 26px title and a 20px/700 Archivo price. The item list is 14px/1.7 On Dark Mute with 5px red dot bullets. The foot row has a custom select (40px, 8px, white at 28% border, inline chevron) and the labelled add button.

### Order Pill
Fixed bottom-right (20px), Ink, round, 52px tall, 15px/600 white. It shows a bag icon, "View order", a red round count badge and the running total. Hidden while the order is empty. It scales to 1.06 for 350ms on each add. At 560px and below it spans the width.

### Order Drawer
A native `<dialog>` docked right, full height (100dvh), `min(440px, 100vw)`, white, over a 45% black backdrop. Clicking the backdrop closes it. It slides in from the right over 0.45s. The head has an Anton 30px "Your order" and an icon close button. Lines show name (600, red number prefix, Mute sub-note), amount right and the stepper row beneath; new lines fade and drop 6px into place. The foot has Subtotal, GST (5%) and Total (20px/700), a Red Tint discount note (10px corners, hidden when empty), the full-width red call button, Clear order, and a fine disclaimer.

### Motion
- **Easing:** one curve everywhere, `cubic-bezier(.16, 1, .3, 1)` (fast out, long settle).
- **Durations:** 0.2s colour and border; 0.25s add bump; 0.3s count badge; 0.35s nav band and pill; 0.45s drawer; 0.5s line enter; 0.6s favourite photo zoom to 1.04 on hover; 0.7s new-dish clip wipe; 1.6s row flash; 36s marquee.
- **Reduced motion:** `prefers-reduced-motion: reduce` turns off smooth anchor scrolling, stops the marquee, makes the finder jump instant, and disables the add and pill bumps, the photo wipe, the drawer slide, the line-enter and row-flash animations, the favourite photo zoom and the nav band slide.

## Do's and Don'ts

### Do:
- **Do** keep the page white and bring black and red in as whole blocks (band, split half, section) or as order state.
- **Do** show the red menu number on every dish, everywhere a dish appears, and keep prices tabular and labelled before GST.
- **Do** use the add control's three-part feedback together: red fill with quantity, nav count, pill bump.
- **Do** use the single ease curve and keep state transitions at 0.2–0.45s.
- **Do** label stand-in photos and placeholder dishes in visible fine print.
- **Do** keep tap targets at 40px or more (44px for nav and primary buttons).
- **Do** keep every non-essential animation behind `prefers-reduced-motion` when porting, as the demo does.

### Don't:
- **Don't** set dish names, descriptions, list prices or controls in Anton, or set Anton in lowercase.
- **Don't** add shadows to cards, panels or splits. Shadows belong only to floating elements.
- **Don't** use red for decoration on white, or turn a neutral control red on hover.
- **Don't** introduce gradients beyond the hero photo scrim (dark at top 25%, clear by 30%, 72% at the foot).
- **Don't** put a solid band behind the nav while the hero is in view; it only appears after the hero scrolls past.
