import * as React from "react";

/**
 * Single-line text field — default / hover / pressed / editable / non-editable / disabled.
 *
 * Source: Figma layer "Input" (node 3413:5203).
 */
export interface InputProps {
  className?: string;
  style?: React.CSSProperties;
  iconLeft?: boolean;
  state?: "default" | "hover" | "pressed" | "editable" | "non editable" | "disabled";
  iconLeft2?: React.ReactNode;
  text?: string;
  iconRight?: boolean;
  iconRight2?: React.ReactNode;
  /** Text content; defaults to "Input Text". */
  text1?: string;
}

export declare function Input(props: InputProps): JSX.Element;
