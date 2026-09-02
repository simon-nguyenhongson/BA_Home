import * as React from "react";

/**
 * Section title block with supporting text.
 *
 * Source: Figma layer "Title" (node 286:26094).
 */
export interface TitleProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "lg" | "medium*" | "sm" | "xs" | "xx-small" | "xxx-small";
  text?: string;
}

export declare function Title(props: TitleProps): JSX.Element;
