// Browser-loadable twin of Icon.jsx, for the card HTML in this directory.
// Identical behaviour; exists only because a .jsx file cannot be loaded
// directly as an ES module from a plain HTML page.
import React from "react";
import icons from "./icon-data.js";

export function Icon({ name, size = 16, ...rest }) {
  const d = icons[name];
  if (!d) return null;
  return React.createElement("svg", {
    width: size,
    height: size,
    viewBox: d.viewBox,
    fill: "none",
    "aria-hidden": true,
    style: { display: "block", ...(rest.style || {}) },
    dangerouslySetInnerHTML: { __html: d.body },
    ...rest,
  });
}
