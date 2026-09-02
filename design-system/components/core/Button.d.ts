import * as React from "react";

/**
 * The one button family — 3 heights × 7 hierarchies × icon layout × destructive × 4 states (240 variants).
 *
 * Source: Figma layer "Button" (node 18:7934).
 * @startingPoint section="Controls" subtitle="Primary action with full hierarchy set" viewport="700x180"
 */
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "h24px" | "h32px" | "h40px";
  hierarchy?: "primary" | "secondary gray" | "secondary color" | "ghost gray" | "ghost color" | "link color" | "link gray";
  icon?: "default" | "only";
  destructive?: boolean;
  state?: "default" | "disabled" | "focused" | "hover";
  leadIcon?: boolean;
  changeRight?: React.ReactNode;
  changeLeft?: React.ReactNode;
  rightIcon?: boolean;
  /** Text content; defaults to "Button". */
  text1?: string;
}

export declare function Button(props: ButtonProps): JSX.Element;
