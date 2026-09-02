import * as React from "react";

/**
 * The field shell shared by the in-table inputs.
 *
 * Source: Figma layer "Input field" (node 25:10081).
 */
export interface InputFieldProps {
  className?: string;
  style?: React.CSSProperties;
  label?: boolean;
  rightIcon3?: React.ReactNode;
  textHint?: boolean;
  xIcon?: boolean;
  size?: "sm" | "md";
  type?: "default" | "tags";
  destructive?: boolean;
  state?: "placeholder" | "hover" | "filled" | "focused" | "disabled";
  rightIcon2?: boolean;
  tag?: boolean;
  leadIcon?: React.ReactNode;
  leadIcon1?: boolean;
  /** Text content; defaults to "Title". */
  text1?: string;
  /** Text content; defaults to "Text demo". */
  text2?: string;
  /** Text content; defaults to "This is a hint text to help user". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

export declare function InputField(props: InputFieldProps): JSX.Element;
