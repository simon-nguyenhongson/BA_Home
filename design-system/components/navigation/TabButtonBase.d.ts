import * as React from "react";

/**
 * Tab button — underline or button-white, current / hover / focus / disabled, optional badge (240 variants).
 *
 * Source: Figma layer "Tab button base" (node 63:21372).
 */
export interface TabButtonBaseProps {
  className?: string;
  style?: React.CSSProperties;
  current?: boolean;
  type?: "button white" | "underline";
  fullWidth?: "false";
  badge?: boolean;
  state?: "default" | "focus" | "hover";
  /** Text content; defaults to "My details". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

export declare function TabButtonBase(props: TabButtonBaseProps): JSX.Element;
