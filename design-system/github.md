repo: simon-nguyenhongson/DesignSystem
branch: main

## Last sync

date: 2026-08-06T00:00:00Z

### Updated in this project

- Split every >1 MB bundle into ~400 KB parts so a design-system importer can copy the real
  Figma-materialized implementations instead of falling back to hand-written approximations.
- `components/*/_impl.js` is now a barrel over `_impl/p1..pN.js`; wrapper imports unchanged.
- `ds/*/Components.bundle.js` replaced by ordered classic scripts `ds/*/bundle/p*.js`.
- The five topic pages load those parts from `<helmet>` and mount by global name — all render.

## Screen map

| Screen | Built from |
| --- | --- |
| Design System.dc.html | tokens/*, guidelines/* |
| Buttons.dc.html, Badges.dc.html | ds/bundle/p1..p5.js |
| Forms.dc.html | ds/forms/bundle/p1..p5.js |
| Navigation.dc.html | ds/nav/bundle/p1..p5.js |
| Table.dc.html | ds/data/bundle/p1..p7.js |
| SideNav.dc.html | shared nav for all pages |
| components/*/*.card.html | components/*/_impl.js (barrel) |

## Sync history

- 2026-08-06 — first export prepared; repo was empty, contents pushed manually from archive.
