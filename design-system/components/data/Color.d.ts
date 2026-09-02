import * as React from "react";

/**
 * Colour swatch cell for palette and category columns.
 *
 * Source: Figma layer "Color" (node 14018:19833).
 */
export interface ColorProps {
  className?: string;
  style?: React.CSSProperties;
  prop?: "1" | "2" | "3" | "4" | "8";
}

export declare function Color(props: ColorProps): JSX.Element;
