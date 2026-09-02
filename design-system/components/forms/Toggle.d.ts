import * as React from "react";

/**
 * Switch for settings that take effect immediately — 2 sizes, optional label and description.
 *
 * Source: Figma layer "Toggle" (node 25:11134).
 */
export interface ToggleProps {
  className?: string;
  style?: React.CSSProperties;
  pressed?: boolean;
  size?: "md" | "sm";
  text?: boolean;
  state?: "default" | "disabled" | "hover" | "focused";
  tooltip?: boolean;
  subText?: boolean;
  /** Text content; defaults to "Remember me". */
  text1?: string;
  /** Text content; defaults to "Save my login details for next time.". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

export declare function Toggle(props: ToggleProps): JSX.Element;
