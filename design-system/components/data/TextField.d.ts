import * as React from "react";

/**
 * Text input sized for in-cell editing.
 *
 * Source: Figma layer "Text field" (node 657:31295).
 */
export interface TextFieldProps {
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  type?: "default" | "no label" | "label tooltip";
  destructive?: boolean;
  state?: "default" | "hover" | "filled" | "focused" | "disabled";
  addon?: "default" | "left";
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
}

export declare function TextField(props: TextFieldProps): JSX.Element;
