import * as React from "react";

/**
 * The ⓘ help affordance that opens a tooltip.
 *
 * Source: Figma layer "Help icon" (node 28:31592).
 */
export interface HelpIconProps {
  className?: string;
  style?: React.CSSProperties;
  cursor?: boolean;
  open?: boolean;
  supportingText?: "false";
  tooltip?: "bottom" | "left" | "right" | "top arrow" | "top left" | "top right" | "bottom left" | "bottom right";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

export declare function HelpIcon(props: HelpIconProps): JSX.Element;
