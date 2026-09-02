import * as React from "react";

/**
 * Determinate progress bar with five label positions.
 *
 * Source: Figma layer "Progress bar" (node 38:39560).
 */
export interface ProgressBarProps {
  className?: string;
  style?: React.CSSProperties;
  progress?: "0%" | "10%" | "20%" | "30%" | "40%" | "50%" | "60%" | "70%" | "80%" | "90%" | "100%";
  label?: "false" | "right" | "bottom" | "top floating" | "bottom floating";
  /** Text content; defaults to "0%". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

export declare function ProgressBar(props: ProgressBarProps): JSX.Element;
