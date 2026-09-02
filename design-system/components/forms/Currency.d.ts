import * as React from "react";

/**
 * Right-aligned money field with an optional unit addon and step handles.
 *
 * Source: Figma layer "Currency" (node 9357:22916).
 */
export interface CurrencyProps {
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  type?: "default" | "no label";
  state?: "default" | "hover" | "filled" | "focused" | "disabled";
  addon?: "no" | "right" | "left + right";
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
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

export declare function Currency(props: CurrencyProps): JSX.Element;
