import * as React from "react";

/**
 * The multi-column mega-menu that drops out of the header.
 *
 * Source: Figma layer "Dropdown nav header menu " (node 35:45489).
 */
export interface DropdownNavHeaderMenuProps {
  className?: string;
  style?: React.CSSProperties;
  open?: boolean;
  type?: "featured card" | "simple" | "simple 2-col";
  breakpoint?: "desktop" | "mobile";
}

export declare function DropdownNavHeaderMenu(props: DropdownNavHeaderMenuProps): JSX.Element;
