import * as React from "react";

/**
 * A row inside a nav menu — icon, label, optional badge and chevron.
 *
 * Source: Figma layer "Nav item menu 2" (node 35:40930).
 */
export interface NavItemMenu2Props {
  className?: string;
  style?: React.CSSProperties;
  icon?: "no icon" | "icon lead";
  state?: "default" | "focused" | "hover";
  breakpoint?: "desktop" | "mobile";
  linkText?: boolean;
  badge?: boolean;
  subText?: boolean;
  /** Text content; defaults to "Products". */
  text1?: string;
  /** Text content; defaults to "Find the best solution for you.". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

export declare function NavItemMenu2(props: NavItemMenu2Props): JSX.Element;
