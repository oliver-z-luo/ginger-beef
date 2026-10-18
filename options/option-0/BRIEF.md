---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: []
---

# Surface brief: Home (single-page site with menu and cart)

## Scope and mode

Persuade. This is the one-page demo site: hero, smorgasbord, new dishes, full menu, cart, and visit info. The menu and cart regions behave as Operate inside it.

## Audience, job, and action

- **Audience:** Campbell River locals deciding dinner tonight on a phone, plus the owner evaluating the pitch.
- **Action:** Add dishes to the order (a working cart, with the subtotal before GST and no checkout), or call (250) 850-0729.
- **Proof:** The real numbered menu and prices from the scan, and real hours and address.
- **Synthetic, and must be labelled as such:** The promo dishes, which the brief tells us to make up, and stock photos.

## Constraints

- Next.js App Router on Vercel, frontend only.
- The cart lives only in the browser.
- The buffet is $25 per person, 4:00 to 8:30pm, closed Tuesdays.

## Direction contract

**THESIS:** The site is a guest check pad. The menu is what you write from, and your order is the check filling in beside it. It refuses the category default of a dark full-bleed food hero with an "Order Now" button above a grid of rounded cards.

**OWN-WORLD:** Guest-check green paper owns every surface. Printed rule green carries the ruling, line numbers, and caps headers. Ballpoint blue is for written entries and callouts. Grease-pencil red marks only what's in your order. Corners are square, food photos are matted and clipped, the tear-off strip is perforated, and state is shown with ink marks (circled, struck, ticked).

**STORY:** A visitor understands, in one glance, that the smorgasbord is on tonight for $25 and that the menu is the familiar numbered one. They believe this is the same honest local place, only easier. They add dishes by number or photo, watch the check total up, then call it in.

**FIRST VIEWPORT:** On the left, about 60% of the width: the printed header band GINGER BEEF HOUSE with its address and phone, then a large stamped SMORGASBORD $25/PERSON with "tonight 4–8:30" ticked, then three numbered favourites (43 Ginger Fried Beef, 49 Breaded Almond Chicken, 24 Chicken Chow Mein) on ruled lines with matted photos and an Add mark on each row. On the right, about 40%: a tall blank guest check with column heads (NO. / ITEM / QTY / PRICE), a jump-by-number field, and the totals foot. The primary action is Add on each row, which writes the dish onto the check. On a phone, the header and stamp come first, then the favourites, and the check becomes a strip pinned at the bottom.

**FORM:** Candidate 4 of 7 (The Guest Check). Seed key 19078217. Raises:
- From Teletext: number addressing.
- From the Cutting Bench: mark-based state.
- From Exposure Record: red reserved for a single meaning.
- From Mook: handwritten callouts on photos.

**SIGNATURE INTERACTION:** Adding a dish writes a line onto the check in ballpoint blue, a red circle is drawn around its number in the menu, and the subtotal re-totals. Removing it strikes the line through, then clears it.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Exact typefaces.
- The promo dish names and copy (invented, plausible for this kitchen).
- Which stock photos to use and how to verify them.
