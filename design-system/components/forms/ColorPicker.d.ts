import * as React from "react";

/**
 * Colour field showing a swatch plus its value — 5 states.
 *
 * Source: Figma layer "Color picker" (node 14447:15938).
 */
export interface ColorPickerProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "filled" | "focused" | "disabled";
  /** Text content; defaults to "Select option". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

export declare function ColorPicker(props: ColorPickerProps): JSX.Element;
