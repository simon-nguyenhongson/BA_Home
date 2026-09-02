import * as React from "react";

/**
 * The product header — logo, 4 to 8 menu items, search, notifications, account.
 *
 * Source: Figma layer "Header navigation" (node 38:36705).
 * @startingPoint section="Shell" subtitle="Product header with menu" viewport="700x120"
 */
export interface HeaderNavigationProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "4 menu" | "5 menu" | "6 menu" | "7 menu" | "8 menu" | "no menu";
  breakpoint?: "desktop";
  /** Text content; defaults to "SOOBINZHONGSON". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

export declare function HeaderNavigation(props: HeaderNavigationProps): JSX.Element;
