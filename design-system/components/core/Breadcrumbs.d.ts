import * as React from "react";

/**
 * Location trail, 2 to 4 levels deep.
 *
 * Source: Figma layer "Breadcrumbs" (node 295:28342).
 */
export interface BreadcrumbsProps {
  className?: string;
  style?: React.CSSProperties;
  breadcrumb?: "2" | "3" | "4" | "5";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

export declare function Breadcrumbs(props: BreadcrumbsProps): JSX.Element;
