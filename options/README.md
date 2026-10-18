# Website options

Three design directions for the Ginger Beef House website (Linear WEB-5). All three are live on GitHub Pages and share the same menu data, cart logic and photos.

| Option | Name | Demo | Folder |
|---|---|---|---|
| 0 | The Guest Check | [/option-0/](https://oliver-z-luo.github.io/ginger-beef/option-0/) | `.demo/option-0/` |
| 1 | Storefront | [/option-1/](https://oliver-z-luo.github.io/ginger-beef/option-1/) | `.demo/option-1/` |
| 2 | Bright Counter | [/option-2/](https://oliver-z-luo.github.io/ginger-beef/option-2/) | `.demo/option-2/` |

The page at https://oliver-z-luo.github.io/ginger-beef/ links to all three.

## What each option folder holds

- `PRODUCT.md`: product truth (users, menu, hours, prices, constraints), plus this option's visual register. Product truth is the same in every option.
- `DESIGN.md`: this option's design system (colours, type, components, rules).
- `BRIEF.md`: this option's homepage direction (thesis, first viewport, signature interaction).

## Shared code

- `.demo/shared/menu.js`: every menu item, number and price from the printed menu (`docs/source/menu-scan.pdf`), plus the family dinners, combo and placeholder new dishes.
- `.demo/shared/core.js`: item lookup, open/closed status in Campbell River time, and the cart store (localStorage, GST, the pickup-discount rule). It contains no design.
- `.demo/img/`: stand-in photos, with credits in `.demo/img/CREDITS.md`.

## Adopting an option

1. Copy `options/option-N/PRODUCT.md` and `options/option-N/DESIGN.md` to the repo root, replacing what's there.
2. Turn `options/option-N/BRIEF.md` into the surface brief for the Next.js page (`.impeccable/surfaces/`), or keep it as the build reference.
3. Port `.demo/option-N/` to Next.js App Router, reusing `shared/menu.js` and `shared/core.js` as modules.
4. Delete the other options.
