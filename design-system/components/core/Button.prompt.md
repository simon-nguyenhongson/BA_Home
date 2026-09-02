The one button family — 3 heights × 7 hierarchies × icon layout × destructive × 4 states (240 variants).

Primary action sits furthest right; hierarchy decreases leftward. Never stack two primaries in one bar.

```jsx
<Button />
```

Props
- `size` — `h24px` | `h32px` | `h40px`
- `hierarchy` — `primary` | `secondary gray` | `secondary color` | `ghost gray` | `ghost color` | `link color` | `link gray`
- `icon` — `default` | `only`
- `destructive` — boolean
- `state` — `default` | `disabled` | `focused` | `hover`
- `leadIcon` — boolean
- `rightIcon` — boolean
