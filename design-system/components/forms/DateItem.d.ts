import * as React from "react";

/**
 * Generic selectable item in the calendar body.
 *
 * Source: Figma layer "Date/item" (node 3141:8789).
 */
export interface DateItemProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "hovered" | "normal" | "selected" | "disable";
  /** Text content; defaults to "00". */
  text1?: string;
}

export declare function DateItem(props: DateItemProps): JSX.Element;
