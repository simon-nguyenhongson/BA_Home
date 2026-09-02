import * as React from "react";

/**
 * A header-level navigation button with active and hover treatments.
 *
 * Source: Figma layer "Nav button" (node 38:39277).
 */
export interface NavButtonProps {
  className?: string;
  style?: React.CSSProperties;
  current?: boolean;
  size?: "md";
  theme?: "default";
  state?: "default" | "focused" | "hover";
  showBadge?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

export declare function NavButton(props: NavButtonProps): JSX.Element;
