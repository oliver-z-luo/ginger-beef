---
name: Ginger Beef House
description: Chinese-Canadian takeout and nightly smorgasbord on Island Highway, Campbell River. The website is the order pad.
---

<!-- SEED: established with the user before implementation; re-run /impeccable document once there's code to capture the actual tokens and components. -->

# Design System: Ginger Beef House

## Overview

**Creative North Star: "The Guest Check"**

Every takeout counter in Western Canada runs on the same object: a green-ruled guest check pad. It has a printed header, numbered lines, a ballpoint, a carbon copy, and a total at the bottom. This system makes the website that object. The menu is what you write from, and your order is the check filling in as you go. A dish is a line item with its menu number, name, and price, which is exactly how regulars already order on the phone ("a 43, two 24s"). The world is not a texture laid over a template. Its ruling is the grid, its line numbers are the navigation, and its ink colours are the state system.

The check stands for honesty and generosity. Prices sit in a right-hand column like a server wrote them. Family dinners and the $25 smorgasbord read as the good deal they are. Food photography brings the appetite: real-looking dishes clipped to the check or laid beside it, never decoration. Density is high but orderly, like a menu board. There is plenty to scan, and every line is the same height on the same rule.

The ground is light because the scene is: someone deciding dinner on their phone between 4 and 8:30pm, in a kitchen or a parked car, under indoor light. The paper is the guest-check green tint, not cream and not white.

**Key Characteristics:**
- The ruled line is the grid. Every list, price, and cart row sits on the same baseline pitch.
- Menu numbers are first-class. They're always visible, and you can jump to a dish by its number.
- Three inks, three jobs: printed green for structure, ballpoint blue for content, and grease-pencil red only for what's in your order.
- State is a mark, not a colour fill. Circled means added, struck through means removed, and a tick means on or available tonight.
- Food photos are clipped to or set on the paper with honest edges and no rounded-card chrome.

## Colors

This is a committed palette. The check-paper green owns most of every screen, and the three inks each carry one job. These values were established in the direction workshop; final tuning for contrast happens at implementation.

### Primary
- **Guest Check Green** (#D5E6CC): The paper. It is the page ground and the ground of the check itself. It covers the majority of every viewport, so the green is the brand.
- **Printed Rule Green** (#2F5D3A): The pad's printed ink. It covers rules, column headers, section labels, line numbers, and the pre-printed parts of the check (TABLE / GUESTS / SERVER-style fields, adapted). It is also used for structural text.

### Secondary
- **Ballpoint Blue** (#1F3B8C): The server's pen. It covers what was "written in": dish names on the check, quantities, handwritten callouts on photos, and the running subtotal.

### Tertiary
- **Grease Pencil Red** (#C8302C): Exclusively "this is in your order." It is used for the circle around an added dish's number, the cart count, and the subtotal underline.

### Neutral
- **Top Sheet White** (#FBFBF6): The torn-off top copy and the photo mat. Use it for raised sheets such as the cart check on mobile, dialogs, and photo borders.
- Body text, borders, and dividers derive from Printed Rule Green at reduced strength. No grey family is introduced.

### Named Rules
**The One Meaning Red Rule.** Grease Pencil Red means "in your order" and nothing else. It is never used for a heading, a promo badge, a sale price, or decoration. If a screen has nothing in the cart, it has no red on it.

**The Three Inks Rule.** Every mark on the page is printed (green), written (blue), or ordered (red). If you can't say which ink a new element is, it doesn't belong.

## Typography

**Printed face:** A condensed grotesk for the pad's pre-printed voice, used for headers, column labels, and section names, in caps. [Exact family to be resolved during implementation.]
**Written face:** A legible handwriting or marker face for short ballpoint annotations only: callouts on photos, the "tonight" stamp note, and quantities written onto the check. [Exact family to be resolved during implementation.]
**Line face:** A highly legible sans with tabular figures for dish names, descriptions, and every price and menu number. [Exact family to be resolved during implementation.]

**Character:** Printed form and handwritten fill-in. The pairing reads like a pad that has been printed by a supplier and then filled in by a person.

### Hierarchy
- **Display:** Printed face in caps, very large. Used for section headers like SMORGASBORD and FAMILY DINNERS, set like the pad's printed title band.
- **Title:** Line face, semibold, used for dish names.
- **Body:** Line face, regular. Used for descriptions, hours, and notes, capped near 65ch.
- **Figures:** Line face with tabular numerals for prices and menu numbers. They always align in their columns, prices right-aligned.
- **Label:** Printed face in small caps with tracking, for column heads (NO. / ITEM / QTY / PRICE) and field labels.
- **Annotation:** Written face. Annotations are never longer than a short phrase and never carry information that isn't also available as set text.

### Named Rules
**The Readable Handwriting Rule.** Handwriting is seasoning. A dish name, price, hour, or instruction is always set in the line face. Handwriting may echo it but never replaces it, because older regulars must be able to read everything.

**The Tabular Rule.** Every number that can be compared, whether a price, menu number, quantity, or total, uses tabular figures and aligns to its column.

## Layout

The spatial model is a ruled pad. A single baseline pitch (the rule height) governs list rows, cart lines, and vertical rhythm. Sections are laid out like the regions of a check: a printed header band, ruled body lines, and a totals block at the foot.

On desktop, the order check is a persistent sheet docked to one side of the menu. The menu scrolls, and the check stays in view and fills in. On phones, the check collapses to a torn-off strip pinned to the bottom edge showing the item count and subtotal, and it pulls up into a full sheet.

Menu categories follow the printed menu's order and numbering. A jump-by-number control is always reachable, and the category index is a list of line ranges (1–7 Appetizers, 8–11 Soup, …), not a row of pills.

Tap targets are generous (at least 44px), and adding to the order is reachable with a thumb on every dish row.

## Elevation & Depth

Depth is paper on paper. It comes from stacking (a top sheet over the pad, a photo clipped over a ruled line) using a faint, tight paper shadow and an offset edge, never floating cards or blur. Surfaces are flat at rest. The cart check is the only persistent raised sheet.

### Named Rules
**The Paper Stack Rule.** Anything raised is a sheet of paper or a photo print with a real edge. No glass, no gradients, no soft ambient glows.

## Shapes

Corners are square, because paper is cut square. Photos have a thin Top Sheet White mat or a clip and square corners. Perforation (a dotted tear line) separates the check's stub from its body and marks the tear-off strip on mobile. Hand-drawn marks (circles, strike-throughs, ticks, underlines) are the only curves in the system. They are drawn as ink strokes, not geometric outlines.

## Do's and Don'ts

### Do:
- **Do** show the menu number on every dish, everywhere it appears: menu row, promo, photo callout, and check line.
- **Do** keep every price true to the printed menu (`docs/source/menu-scan.pdf`) and label subtotals as before GST.
- **Do** express state with ink marks: circle for added, strike for removed, tick for available tonight.
- **Do** let the guest-check green own the page. Ground and major surfaces are paper, not a white page with a green accent.
- **Do** keep peanut and sauce-choice notes visible on the dish line.

### Don't:
- **Don't** use Grease Pencil Red for anything other than "in your order."
- **Don't** use the restaurant-template look: dark ground with red and gold, lanterns, dragons, brush-stroke "oriental" fonts, or the Rising Sun-style ray motifs.
- **Don't** use rounded cards, pill buttons, glassmorphism, or gradient overlays on photos.
- **Don't** set any essential information only in the handwriting face.
- **Don't** imply stock photography is the restaurant's actual food, and don't invent reviews, history, or awards.
