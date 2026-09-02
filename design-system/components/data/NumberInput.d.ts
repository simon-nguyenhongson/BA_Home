import * as React from "react";

/**
 * Numeric input with step handles, sized for use inside a table cell.
 *
 * Source: Figma layer "Number input" (node 683:33408).
 */
export interface NumberInputProps {
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  type?: "default" | "no label" | "label tooltip";
  state?: "default" | "hover" | "filled" | "focused" | "disabled" | "filled no x" | "focused no x";
  destructive?: boolean;
  /** Text content; defaults to "Label". */
  text1?: string;
  /** Text content; defaults to "*". */
  text2?: string;
  /** Text content; defaults to "123.456". */
  text3?: string;
  /** Text content; defaults to "This is an error message.". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

export declare function NumberInput(props: NumberInputProps): JSX.Element;
