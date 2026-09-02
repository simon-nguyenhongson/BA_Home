import * as React from "react";

/**
 * A single crumb — label plus separator.
 *
 * Source: Figma layer "Breadcrumb item" (node 295:27911).
 */
export interface BreadcrumbItemProps {
  className?: string;
  style?: React.CSSProperties;
  position?: "first" | "last" | "middle";
  linked?: boolean;
  collapsed?: boolean;
  /** Text content; defaults to "Breadcrumb". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

export declare function BreadcrumbItem(props: BreadcrumbItemProps): JSX.Element;
