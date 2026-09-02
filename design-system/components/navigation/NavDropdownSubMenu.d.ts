import * as React from "react";

/**
 * A nested submenu panel opened from a nav row.
 *
 * Source: Figma layer "Nav dropdown sub menu" (node 35:42833).
 */
export interface NavDropdownSubMenuProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "simple" | "simple 2-col" | "with recent 2" | "2-col" | "3-col" | "4-col";
  breakpoint?: "desktop" | "mobile";
  /** Text content; defaults to "Recent". */
  text1?: string;
  /** Text content; defaults to "Recent". */
  text2?: string;
  /** Text content; defaults to "Company". */
  text3?: string;
  /** Text content; defaults to "Recent". */
  text4?: string;
}

export declare function NavDropdownSubMenu(props: NavDropdownSubMenuProps): JSX.Element;
