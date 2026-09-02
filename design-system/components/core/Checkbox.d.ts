import * as React from "react";

/**
 * The bare 16px checkbox box, no label.
 *
 * Source: Figma layer "Checkbox" (node 30:11981).
 */
export interface CheckboxProps {
  className?: string;
  style?: React.CSSProperties;
  checked?: boolean;
  indeterminate?: boolean;
  size?: "sm" | "md";
  type?: "checkbox" | "radio";
  text?: boolean;
  state?: "default" | "hover" | "focused" | "disabled";
  supportingText?: boolean;
  /** Text content; defaults to "Remember me". */
  text1?: string;
  /** Text content; defaults to "Save my login details for next time.". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

export declare function Checkbox(props: CheckboxProps): JSX.Element;
