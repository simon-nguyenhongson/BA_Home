import * as React from "react";

/**
 * Dark tooltip, 8 arrow directions.
 *
 * Source: Figma layer "Tooltip" (node 28:31405).
 */
export interface TooltipProps {
  className?: string;
  style?: React.CSSProperties;
  theme?: "dark";
  arrow?: "bottom center" | "bottom left" | "bottom right" | "left" | "right" | "top center" | "top left" | "top right";
  /** Text content; defaults to "This is a tooltip". */
  text1?: string;
}

export declare function Tooltip(props: TooltipProps): JSX.Element;
