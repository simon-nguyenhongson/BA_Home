import * as React from "react";

/**
 * The custom scrollbar treatment applied to overflowing panels.
 *
 * Source: Figma layer "Scroll bar" (node 24:4318).
 */
export interface ScrollBarProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "horizontal" | "vertical";
  length?: "25%" | "50%" | "75%";
}

export declare function ScrollBar(props: ScrollBarProps): JSX.Element;
