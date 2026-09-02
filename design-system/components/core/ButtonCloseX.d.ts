import * as React from "react";

/**
 * The ✕ dismiss control for modals, drawers and callouts — 3 sizes, gray or primary, light or dark theme.
 *
 * Source: Figma layer "Button close X" (node 49:27950).
 */
export interface ButtonCloseXProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
  color?: "gray" | "primary";
  theme?: "light" | "dark";
  state?: "default" | "hover" | "focused";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

export declare function ButtonCloseX(props: ButtonCloseXProps): JSX.Element;
