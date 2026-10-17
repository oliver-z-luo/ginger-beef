# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router), pure frontend, no backend. Hosted on Vercel. Set by the WEB-5 brief.

## Users

- **Primary: locals ordering takeout.** These are Campbell River residents, often families, deciding what to get for dinner tonight. They usually browse on a phone, between 4 and 8:30pm. They know the dishes by number and name and want to scan prices fast, build an order, and call it in.
- **Secondary: dine-in smorgasbord guests.** They want to know whether the buffet is on tonight, when, and how much.
- **Decision-maker: the restaurant owner.** This is a pitch demo (WEB-5) to revamp gingerbeefhouse.com, so it has to read as obviously better than the current DI-develop template site.

## Product Purpose

This is a revamped website for Ginger Beef House, a family-run Chinese-Canadian restaurant in Campbell River, BC. The owner wants four things:

1. A full menu with prices and photos.
2. An add-to-cart function.
3. A promo section for new dishes.
4. A section for the buffet dinner at $25 per person.

Success means two things. The owner sees their restaurant presented with more appetite and warmth than the current site, and a hungry visitor can go from landing to a built order in under a minute on a phone.

## Positioning

Ginger Beef House is a Western Canadian Chinese takeout institution. It serves ginger fried beef, almond chicken, sweet & sour, chop suey, and egg foo young, alongside a nightly smorgasbord. That pairing is unusual locally. It is not a pan-Asian or modern fusion concept. The value is generous family dinners, honest prices, and familiar favourites, done by a local family on Island Highway.

## Operating Context

- **Hours:** Wednesday to Monday, 4:00 to 8:30pm. Closed Tuesdays. The smorgasbord runs 6 days a week, 4:00 to 8:30pm.
- **Fulfilment:** Takeout and delivery, ordered by phone. The printed menu says "Call us for your order."
- **Pickup discount:** 5% off pick-up orders over $45 before tax, on cash and debit only. Group and family dinners are excluded.
- **Prices:** Exclude GST. Prices may change without notice.
- **Allergies:** Customers are asked to tell the staff about food allergies.
- **Menu numbers:** Items carry menu numbers from 1 to 110, and regulars order by number.

## Capabilities and Constraints

- **Menu:** Use the prices on the scanned printed menu (`docs/source/menu-scan.pdf`), not the higher online-ordering prices on the current site. The categories are:
  - Appetizers
  - Soup
  - Fried Rice
  - Chow Mein
  - Rice Dishes
  - Beef
  - Chicken
  - Pork & Ribs
  - Chop Suey
  - Egg Foo Young
  - Seafood
  - Chef's Suggestions
  - Side Orders & Sauces / Drinks
  - Combo for One
  - Family Dinners for 2, 3, 4, 5, 6, 8–10, and 10–12
- **Item options:** Some items carry options, such as gravy or sweet & sour sauce, "with peanut," or chicken or beef chop suey in family dinners. Combo for One is chow mein or fried rice plus 1 item ($15.95) or 2 items ($19.95), chosen from a fixed list.
- **Cart:** Cart only. Visitors add items, change quantity, remove items, and see a subtotal labelled pre-GST. There is no checkout, payment, or confirmation step. The phone number remains the real way to order.
- **Promo dishes:** Invented for the demo, as the brief instructs. They must be plausible for this kitchen and clearly placeholders the owner can replace.
- **Buffet:** $25 per person dinner smorgasbord. Days and hours follow the printed menu.
- **No backend:** Cart state lives on the client only.
- **Undecided:** Whether delivery has a fee or area limits, buffet pricing for kids or seniors, and any online ordering integration after the demo.

## Brand Commitments

- **Name:** Ginger Beef House.
- **Logo:** An existing bonsai-tree mark in a pink oval with a pink wordmark, as on the printed menu. The demo may reference the name and the bonsai motif but has no clean vector of the logo.
- **Voice:** Plain, friendly, local. The printed menu says "Call us for your order" and "Please let us know if you have food allergies."

## Evidence on Hand

- **Full printed menu:** `docs/source/menu-scan.pdf`. Two pages with every item, number, price, family dinner, combo, address, phone, and hours.
- **Contact details:** 1891 Island Hwy, Campbell River, BC V9W 2E9. Phone (250) 850-0729.
- **Reviews:** The current site shows 5 customer reviews. Their text was not captured, so do not quote or invent reviews.
- **Photos:** None usable. The demo uses stock photos (Unsplash or Pexels) of comparable Chinese-Canadian dishes, which will be replaced with real photos later. Never caption a stock photo as this restaurant's food in a way that implies it's real.
- **Not on hand:** Owner names, founding year, story or history, awards, and press. Do not fabricate them.

## Product Principles

1. **The menu is the product.** Every number, name, and price is accurate to the printed menu, and fast to scan on a phone.
2. **Dinner tonight, not a brand story.** Show what's open, what it costs, and how to order before any atmosphere.
3. **Generous and familiar.** Present family dinners and the smorgasbord as the value they are, and celebrate the classics rather than apologising for them.
4. **Honest demo.** Mark invented promos and stock imagery as placeholders, and never invent reviews, history, or claims.

## Accessibility & Inclusion

- Phone-first. Large tap targets for adding to the cart and for the call button.
- Text must stay legible for older regulars.
- Allergy and peanut notes (Kung Bo items) stay visible next to the dish, not hidden.
