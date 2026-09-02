import * as React from "react";

/**
 * Location trail with an optional go-back affordance and automatic collapse past 4 levels.
 *
 * Source: Figma layer "Breadcrumbs normal" (node 296:30899).
 */
export interface BreadcrumbsNormalProps {
  className?: string;
  style?: React.CSSProperties;
  count?: "1" | "2" | "3" | "4" | "many";
  goBack?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

export declare function BreadcrumbsNormal(props: BreadcrumbsNormalProps): JSX.Element;
