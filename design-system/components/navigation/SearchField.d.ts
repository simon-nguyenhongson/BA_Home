import * as React from "react";

/**
 * The header's search input with its icon and clear affordance.
 *
 * Source: Figma layer "Search field" (node 683:34229).
 */
export interface SearchFieldProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "filled" | "focused" | "disabled";
  /** Text content; defaults to "Select option". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

export declare function SearchField(props: SearchFieldProps): JSX.Element;
