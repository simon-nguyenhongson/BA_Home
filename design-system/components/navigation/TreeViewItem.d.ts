import * as React from "react";

/**
 * One row in a tree — indent guide, expander, label.
 *
 * Source: Figma layer "Tree view item" (node 730:51232).
 */
export interface TreeViewItemProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "disable" | "load" | "selected" | "current";
  type?: "default" | "checkbox" | "load" | "drag" | "user";
  level?: "closed" | "open" | "sub end";
  badge?: boolean;
  /** Text content; defaults to "Nav item (closed)". */
  text1?: string;
  /** Text content; defaults to "Name". */
  text2?: string;
  /** Text content; defaults to "Title". */
  text3?: string;
  /** Text content; defaults to "Email". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

export declare function TreeViewItem(props: TreeViewItemProps): JSX.Element;
