import * as React from "react";

/**
 * Status and category label — 13 semantic colours × solid or outline × 8 icon layouts.
 *
 * Source: Figma layer "Badge" (node 3:3501).
 */
export interface BadgeProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
  icon?: "false" | "dot" | "country" | "x close" | "avatar" | "icon trailing" | "icon leading" | "only";
  color?: "gray" | "primary" | "error" | "warning" | "success" | "blue light" | "blue" | "indigo" | "purple" | "pink" | "rosé" | "orange" | "blue gray";
  outline?: boolean;
  flagSwap?: React.ReactNode;
  iconTrailingSwap?: React.ReactNode;
  iconLeadingSwap?: React.ReactNode;
  /** Text content; defaults to "Label". */
  text1?: string;
}

export declare function Badge(props: BadgeProps): JSX.Element;
