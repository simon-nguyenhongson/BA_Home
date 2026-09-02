import * as React from "react";

/**
 * Read-only text that becomes an input on edit.
 *
 * Source: Figma layer "Input text to label" (node 1744:38988).
 */
export interface InputTextToLabelProps {
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  type?: "default" | "no label" | "label tooltip";
  destructive?: boolean;
  state?: "default" | "hover" | "filled" | "focused" | "disabled";
  /** Text content; defaults to "Label". */
  text1?: string;
  /** Text content; defaults to "*". */
  text2?: string;
  /** Text content; defaults to "Text input". */
  text3?: string;
  /** Text content; defaults to "This is an error message.". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

export declare function InputTextToLabel(props: InputTextToLabelProps): JSX.Element;
