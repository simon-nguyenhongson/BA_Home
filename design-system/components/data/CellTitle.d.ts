import * as React from "react";

/**
 * Table header cell — 9 content types plus independent filter, error, edit-column and compressed flags.
 *
 * Source: Figma layer "Cell Title" (node 51:18770).
 * @startingPoint section="Tables" subtitle="Header cell, 9 types" viewport="700x140"
 */
export interface CellTitleProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "blank" | "number" | "number w tooltip" | "checkbox" | "text" | "text w tooltip" | "load" | "action" | "hz expand";
  compressed?: boolean;
  error?: boolean;
  filter?: boolean;
  editColumn?: boolean;
  checkbox?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

export declare function CellTitle(props: CellTitleProps): JSX.Element;
