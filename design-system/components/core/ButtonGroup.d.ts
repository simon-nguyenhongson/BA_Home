import * as React from "react";

/**
 * A segmented control for mutually-exclusive choices, rendered as one joined block.
 *
 * Source: Figma layer "Button group" (node 295:35586).
 */
export interface ButtonGroupProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: "false" | "leading" | "only";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

export declare function ButtonGroup(props: ButtonGroupProps): JSX.Element;
