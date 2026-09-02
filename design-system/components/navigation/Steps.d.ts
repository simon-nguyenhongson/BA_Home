import * as React from "react";

/**
 * Multi-step progress bar, 3 to 5 steps, 2 sizes.
 *
 * Source: Figma layer "Steps" (node 295:38115).
 */
export interface StepsProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md";
  steps?: "3" | "4" | "5";
}

export declare function Steps(props: StepsProps): JSX.Element;
