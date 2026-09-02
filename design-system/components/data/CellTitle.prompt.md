Table header cell — 9 content types plus independent filter, error, edit-column and compressed flags.

Tables are assembled from cells, not rows: overlap adjacent cells by −1px so borders collapse into one grid.

```jsx
<CellTitle />
```

Props
- `type` — `blank` | `number` | `number w tooltip` | `checkbox` | `text` | `text w tooltip` | `load` | `action` | `hz expand`
- `compressed` — boolean
- `error` — boolean
- `filter` — boolean
- `editColumn` — boolean
- `checkbox` — boolean
