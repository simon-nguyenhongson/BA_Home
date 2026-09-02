import * as React from "react";

/**
 * The tick / dash glyph drawn inside a checkbox box.
 *
 * Source: Figma layer "Checkbox icon" (node 26:6342).
 */
export interface CheckboxIconProps {
  className?: string;
  style?: React.CSSProperties;
  checked?: boolean;
  indeterminate?: boolean;
  type?: "check circle" | "checkbox" | "radio";
  state?: "default" | "disbaled" | "focused" | "hover";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

export declare function CheckboxIcon(props: CheckboxIconProps): JSX.Element;
