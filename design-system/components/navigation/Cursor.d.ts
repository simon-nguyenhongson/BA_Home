import * as React from "react";

/**
 * Cursor specimen — arrow, hand, drag.
 *
 * Source: Figma layer "Cursor" (node 28:7379).
 */
export interface CursorProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "arrow" | "drag" | "hand";
}

export declare function Cursor(props: CursorProps): JSX.Element;
