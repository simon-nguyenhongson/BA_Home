import * as React from "react";

/**
 * User or company avatar — 6 sizes from 24px to 64px, with online / verified / company indicators.
 *
 * Source: Figma layer "Avatar" (node 3:3086).
 */
export interface AvatarProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  placeholder?: boolean;
  text?: boolean;
  statusIcon?: "false" | "online indicator" | "company" | "verified";
  state?: "default" | "hover" | "focused";
  /** Text content; defaults to "OR". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

export declare function Avatar(props: AvatarProps): JSX.Element;
