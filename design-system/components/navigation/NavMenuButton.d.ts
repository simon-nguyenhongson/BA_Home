import * as React from "react";

/**
 * The hamburger / close toggle for the collapsed nav.
 *
 * Source: Figma layer "_Nav menu button" (node 38:37105).
 */
export interface NavMenuButtonProps {
  className?: string;
  style?: React.CSSProperties;
  opened?: boolean;
  state?: "default" | "focused" | "hover";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

export declare function NavMenuButton(props: NavMenuButtonProps): JSX.Element;
