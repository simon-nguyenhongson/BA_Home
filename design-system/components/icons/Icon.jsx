import React from "react";
import icons from "./icon-data.js";

/** Icon — one wrapper over the 233-glyph set. See Icon.prompt.md. */
export function Icon({ name, size = 16, ...rest }) {
  const d = icons[name];
  if (!d) return null;
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: d.viewBox,
    fill: "none",
    "aria-hidden": rest["aria-label"] ? undefined : true,
    style: { display: "block", ...(rest.style || {}) },
    // body strings are emitter-controlled <path> markup — geometry and
    // numeric fills only; no .fig-authored text reaches them.
    dangerouslySetInnerHTML: { __html: d.body },
    ...rest,
  });
}

export const iconNames = Object.keys(icons);
