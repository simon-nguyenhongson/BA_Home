import * as React from "react";

/**
 * One segment inside a Button group, with current / hover / disabled and an optional badge.
 *
 * Source: Figma layer "Button group items" (node 295:35204).
 */
export interface ButtonGroupItemsProps {
  className?: string;
  style?: React.CSSProperties;
  current?: boolean;
  icon?: "false" | "leading" | "only";
  state?: "default" | "disabled" | "focused" | "hover";
  badge?: boolean;
  /** Text content; defaults to "Text". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

export declare function ButtonGroupItems(props: ButtonGroupItemsProps): JSX.Element;
