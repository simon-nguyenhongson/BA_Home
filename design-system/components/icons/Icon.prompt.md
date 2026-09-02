The system's only icon component — 233 stroke glyphs on a 16px grid, filled with `currentColor`.

Because glyphs inherit `color`, never hard-code an icon colour: set the colour on the
control and the icon follows. 16px is the size every button, field and cell expects;
20px and 24px appear in empty states and page headers.

```jsx
<Icon name="IconSearch" />
<Icon name="IconTrashCan" size={20} style={{ color: "var(--ds-danger)" }} />
```

Props
- `name` — one of `IconName` (233 values; import `iconNames` for the full list)
- `size` — px, default 16
- any other SVG prop passes through

Note: the .fig's icon library holds roughly 2,078 glyphs; 233 were extracted. Ask for
more by name and they can be pulled from the source file.
