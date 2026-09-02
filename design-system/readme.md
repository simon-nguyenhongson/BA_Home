# SooBinZHongSon Design System

A dense, data-heavy enterprise UI system: internal tooling where people spend a full working day
inside tables, approval flows and record forms. Everything here is extracted from the source Figma
library, not reconstructed from memory or from a public component library it resembles.

## Sources

| What | Where |
| --- | --- |
| Primary source | `Design System.fig` — 48 pages, 296 component sets, ~73,400 nodes. Mounted as a read-only file during the import; **not** committed here. |
| Related file seen | `HADA Design System (KDB.v3)` — `https://www.figma.com/design/DxScdu6uJK8Q7NNxEWP1Zj/HADA-Design-System--KDB.v3-` |
| Second link given | `https://www.figma.com/design/2NQ9LUmbJHl1q2s4UHXnF5/Design-System?node-id=16935-264` |
| Codebase | None provided. |

Neither Figma URL is readable without an account, so nothing in this project was derived from the
links — only from the mounted `.fig`. If you have access, both links are recorded so the extraction
can be re-run and extended.

## Product context

The `.fig` names one product surface explicitly — a **TravelDesk** page carrying 90 frames — plus 47
foundation and component pages. The component inventory says more about the product than the screens
do: 50 distinct table-cell content types, 7 calendar panel types, a 7-status step indicator, a
`Pagination no count` footer built for datasets too large to count. This is procurement /
back-office software, Vietnamese-first, desktop-only.

**No UI kit ships in this project.** The TravelDesk frames were not extracted before the `.fig` was
unmounted, and inventing product screens would misrepresent the source — see CAVEATS.

---

## CONTENT FUNDAMENTALS

**Language.** Vietnamese for anything a user reads; English for anything a designer or developer
reads. Labels, buttons, table headers, empty states, helper text: Vietnamese. Variant names, prop
names, page titles inside the library: English. Do not translate variant names into Vietnamese, and
do not leave user-facing copy in English.

**Casing.** Sentence case everywhere — "Tạo phiếu đối soát", not "Tạo Phiếu Đối Soát". The only
upper-case text in the system is the wordmark (`SOOBINZHONGSON`) and small eyebrow labels above
sections, which use 11px semibold with `0.06em` tracking.

**Voice.** Second person implied, never stated. The UI addresses the user through the verb alone:
"Chọn chi nhánh", "Thêm bản ghi đầu tiên để bắt đầu". No "bạn", no "chúng tôi", no exclamation marks.

**Buttons are verbs.** "Xoá", "Publish now", "Tạo phiếu đối soát" — never "OK", never "Submit".
The exit action is always the plainest possible word: "Cancel".

**Placeholders describe the action, not the field.** A select reads "Chọn chi nhánh", not
"Chi nhánh". The label already carries the noun.

**Empty states are two lines.** A statement of what is missing, then one instruction:
"Chưa có dữ liệu" / "Thêm bản ghi đầu tiên để bắt đầu." Never an apology, never a joke.

**Numbers.** Vietnamese formatting: `123.456` for thousands, `0,1` for decimals. Money is
right-aligned with the currency in an addon, never inside the input text.

**No emoji.** Not in labels, not in empty states, not in documentation. The `.fig` uses a handful
of emoji in *layer names* (`.📦Breadcrumb`, `.📦Step / Indicator`) as an internal marker for
packaged/private components — that is a Figma housekeeping convention, not a UI pattern. Never
render those glyphs.

**Tone in one line.** Quiet and literal. The interface never celebrates, apologises or explains
itself; it labels things accurately and gets out of the way.

---

## VISUAL FOUNDATIONS

### Colour

One blue does all the interactive work: **Blue 600 `#155EEF`** (577 uses). One grey family carries
structure, and **Gray 200 `#EAECF0`** is the single most-used colour after white — 4,513 uses — which
tells you what this system actually is: a grid of bordered boxes. **Error 500 `#F04438`** is the only
alarm colour.

Backgrounds are flat. White for content, `#F9FAFB` for header rows and inset panels, `#FCFCFD` for
alternating rows. There are no gradient backgrounds, no textures, no patterns, no images behind
content. The single gradient in the system is the brand band —
`#027FFE → #02CCCC → #02E2BD` at 15.24% / 72.81% / 89.43% — used as a 4px rule in the sidebar and a
12px rule above page content, and inside the logo mark. Never as a fill behind text, never on a
button.

**A real conflict, preserved.** Badge `primary` fills with Purple 50 and sets violet text; the active
Tab underline is Violet 700 `#6941C6`. Neither matches Blue 600. This is how the source file is —
it is flagged here and in `guidelines/color-violet.html` rather than silently "fixed", because
correcting it would make the code disagree with Figma.

### Type

**Inter only.** Four weights (400 / 500 / 600 / 700). IBM Plex Sans 700 appears exactly once, as
the wordmark. Ten steps from 12px to 60px, but the distribution is lopsided: 14/20 accounts for
2,420 text nodes and 12/18 covers nearly every table label. Display steps (24px and up) take
`-0.02em` tracking; text steps take none.

Labels are 14px Medium. Body copy is 14px or 16px Regular. Section eyebrows are 11px Semibold,
uppercase, `0.06em`. Token values and variant names are set in the system mono stack — no mono
webfont is loaded.

### Spacing and shape

8px base step, but 6px and 10px are real and used — control padding is `10px 12px` at the default
height, not `8px 12px`. Do not snap to a 4/8 grid when the source says otherwise.

Radii: 6px on nav rows, **8px on every control, field and table cell**, 12px on cards and panels,
16px on badges (which reads as a pill at 20–28px tall), fully round only on avatars and dots.
Page gutter is 80px; sidebar is 264px. Icon-to-label gap inside a control is always 8px.

Three control heights: 28 / **32** / 40px. Table rows are 40px, or tighter under `compressed`.

### Elevation

Five levels, all built from one tone — `#101828` at 3%, 5%, 6%, 8%, 10%. Never a pure-black shadow,
never a coloured shadow, never an inner shadow used decoratively. `shadow-xs` on fields and buttons,
`sm` on cards, `md` on menus, `lg` on popovers and calendar panels, `xl` on modals and drawers.
Borders do most of the separating work; shadow only signals that something floats.

### States

- **Hover** — surfaces move one step darker (white → `#F9FAFB`, Blue 600 → Blue 700). Nothing scales,
  nothing lifts, no shadow appears on hover.
- **Pressed / focused** — the same darker fill plus a **4px halo** (`--ds-focus-ring`), and the
  border switches to Blue 300. The element's own 1px border is never removed. Never a browser outline.
- **Disabled** — fill drops to Gray 50 or Blue 200, text and icons to Gray 400. Opacity is not used
  to fake a disabled state.
- **Loading** — Primary buttons fill Blue 200 and show a spinning 16px ring with the label "Chờ...".
  Skeletons are Gray 100 bars matched to the height of the real content.

Transparency and blur: essentially absent. Modal scrims are the only translucent surface; there is
no frosted glass, no `backdrop-filter`.

Animation is functional and short. Rotation for the loading spinner, a 150ms transform on a
disclosure caret, instant state swaps everywhere else. No bounce, no spring, no entrance animation
on page content.

### Cards and layout

A card is: white fill, 1px `#EAECF0` border, 12px radius, `shadow-sm`, and a `#F9FAFB` header strip
with a 14px Semibold title and a mono caption on the right. That header strip is the system's
signature — it appears on every documentation panel and every data card.

Tables are assembled from **cells, not rows**. Adjacent cells overlap by −1px so their borders
collapse into a single grid. This matters: laying out a table with row-level borders will not
match the design.

Layout is fixed-width desktop with a sticky sidebar and sticky table headers. There is no mobile
breakpoint in the component set beyond two responsive variants (`HeaderNavigation`, `NoData`).

---

## ICONOGRAPHY

**One set, one component.** 233 glyphs extracted from the source's icon library (which holds roughly
2,078), drawn on a 16px grid, single stroke weight, no fills, geometric and slightly squared —
closest public relative is IBM Carbon, but these are the file's own glyphs and were copied out
verbatim, not substituted.

Every glyph is filled with `currentColor`, so an icon takes the colour of the text around it. This
was an active fix during extraction: the emitter had baked `rgb(22,22,22)` into 498 paths, which
made icons ignore their button's colour. Never hard-code an icon colour — colour the control.

- 16px is the size every button, field and table cell expects.
- 20px in empty states and icon sheets; 24px+ only in page headers.
- Filled variants exist for a handful of glyphs (`IconCheckmarkFilled`, `IconStarFilled`,
  `IconErrorFilled`) and mean "active/selected", not "emphasis".
- Icon-only buttons **must** show a tooltip on hover — except `✕`.

No icon font. No emoji. No Unicode characters standing in for icons. If a glyph is missing, ask for
it by name so it can be pulled from the source file — do not draw a replacement.

Illustrations: three motifs only (`box`, `cloud`, `documents`) in primary or gray, three sizes, via
`Illustration`. Do not author new illustrations.

---

## Index

| Path | What |
| --- | --- |
| `styles.css` | Global CSS entry point — import lines only. Link this one file. |
| `tokens/` | `palette.css` (measured colours + usage counts), `semantic.css` (`--ds-*` aliases), `typography.css`, `elevation.css`, `layout.css`, `fonts.css`, `figma-variables.css` (all 276 raw Figma Variables incl. dark/alpine/SDS modes), `base.css` |
| `components/core/` | 21 primitives — Button, ButtonGroup, ButtonGroupItems, ButtonCloseX, Badge, BadgeDot, BadgeStatus, BadgeRanking, BadgePerfromace, Avatar, AvatarLabelGroup, Checkbox, CheckboxText, CheckboxIcon, CheckGroup, Divider, Anchor, Breadcrumbs, BreadcrumbsNormal, BreadcrumbItem, Callout |
| `components/forms/` | 18 primitives — Input, ComboboxSingleSelect, Currency, ColorPicker, ComponentsRadioButtonSolid, Toggle, ProgressBar, ScrollBar, DateDatePicker, DateCalendarDropdown, DateDayItem, DateItem, DateMonthYearItem, DatePickerdateItem, DateTimeSelect, InputAddonLabel, InputAddonLeft, InputAddonRight |
| `components/navigation/` | 33 primitives — TabButtonBase, Steps, StepIndicator, StepBase, StepItems, HeaderNavigation, DropdownNavHeaderMenu, NavItemMenu2, NavDropdownSubMenu, NavButton, NavMenuButton, Menu, Modal, ModalHeader, ModalButton, Drawer, PopOver, Tooltip, HelpIcon, Alert, Collapse, Catetree, TreeViewItem, NoData, Illustration, SearchField, CarouselSlick, SkeletonTitle, SpinnerStatic, Cursor, Title, LayoutBlocksBase, AnchorLink |
| `components/data/` | 12 primitives — CellTitle, CellBodyNormal, PaginationNoCount, Description, MetricChange, NumberInput, TextField, InputField, InputTextToLabel, TableTitleText, Processbar, Color |
| `components/icons/` | `Icon` + `icon-data.js` (233 glyphs) |
| `guidelines/` | 20 specimen cards across Colors, Type, Spacing, Brand |
| `assets/` | The 6 bitmaps the source ships (3 avatars, 1 thumbnail, 1 placeholder fill, 1 texture) |
| `*.dc.html` | Human-readable documentation pages — Foundations, Button, Badge/Avatar/Checkbox, Form & Input, Navigation & Overlay, Table & Data, plus the shared `SideNav` |
| `ds/` | The raw `fig_materialize` output the documentation pages load. Kept so those pages keep working; `components/` is the published API. |

Every component directory has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`, plus one
`@dsCard`-tagged card HTML.

### Intentional additions

- **`Icon`** (`components/icons/`) — the source has 233 separate icon components with no wrapper. One
  wrapper over a name→path data map keeps a few-hundred-glyph set out of a few hundred files.
- **`_impl.js`** per group — a barrel over `_impl/p1.js … pN.js`, the pre-transpiled implementations
  extracted from the `.fig`. Split so no file passes ~400 KB (importers reject larger files); the
  parts re-import each other through the barrel, so nothing about the public API changed. Internal —
  import the named component files instead.
- **`ds/**/bundle/p*.js`** — the same implementations as plain browser scripts, in ordered parts.
  Load every part of a group in order, then read components off `window`.

Nothing else was added. There is no Toast, no Select-multiple, no Card primitive, no Accordion in
this system, because the source does not define them — do not add them by analogy.

---

## CAVEATS — read before using

1. **62 of 296 component families are built.** The `.fig` defines 296 component sets; 84 public
   components covering 62 families were extracted before the file was unmounted. Unbuilt families
   include the whole `Comment-chat`, `Carousel`, `Transfer`, `Timeline`, `Video player`,
   `Import/Export`, `Handsontable` cell set, `Color picker` panel internals and the `TravelDesk`
   product frames. **Re-attach `Design System.fig` and the rest can be extracted the same way.**
2. **No UI kit.** No product screens were recreated, for the reason above. The `.dc.html` pages are
   documentation, not product recreations.
3. **Fonts are CDN, not licensed binaries.** The `.fig` carried no font files. Inter and IBM Plex
   Sans are loaded from Google Fonts in `tokens/fonts.css`. Both are genuinely published there, so
   this is the correct family — but if you have licensed binaries, drop them in `assets/fonts/` and
   replace that `@import` with local `@font-face` rules.
4. **Table header labels are fixed text.** `CellTitle` renders the literal string "Title" with no
   prop to change it — that is how the component is built in Figma. Column names need either a fix
   in the source file or a wrapper here.
5. **Zero text styles.** The `.fig` defines no Figma TEXT or EFFECT styles at all
   (`fig-typography.css` came back empty). The type scale in `tokens/typography.css` was measured
   from actual text nodes on the Typography page, not read from named styles.
6. **`figma-variables.css` is not all yours.** Of 276 variables, many belong to dragged-in libraries
   (AG Grid themes, an `SDS Light/Dark` set, a `Brand B` set). They are preserved verbatim for
   fidelity. Build against `--ds-*` and `--color-*`; treat the rest as archaeology.
7. **Sample data is masked.** Record identifiers baked into the extracted components were replaced
   in place (`PR•••••6098`, `CN ••• •••`). If you re-extract from the `.fig`, mask again.
8. **`BadgePerfromace`** keeps the source's misspelling so lookups match Figma.

## Sharing

Set the file type to **Design System** in the Share menu so others in the org can use this as a
design system rather than a plain project.
