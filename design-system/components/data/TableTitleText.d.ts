import * as React from "react";

/**
 * The header cell's label typography with sort and tooltip affordances.
 *
 * Source: Figma layer "Table title text" (node 51:18544).
 */
export interface TableTitleTextProps {
  className?: string;
  style?: React.CSSProperties;
  text?: "only" | "with tool tip" | "sort up" | "sort down";
  state?: "default" | "disabled" | "hover";
  help?: boolean;
  filter?: boolean;
  /** Text content; defaults to "Company". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

export declare function TableTitleText(props: TableTitleTextProps): JSX.Element;
