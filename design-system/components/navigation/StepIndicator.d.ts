import * as React from "react";

/**
 * The step dot itself — current, incomplete, success, loading, warning, danger, disabled.
 *
 * Source: Figma layer ".📦Step / Indicator" (node 295:36297).
 */
export interface StepIndicatorProps {
  className?: string;
  style?: React.CSSProperties;
  status?: "default / current" | "incomplete" | "disabled" | "loading" | "success" | "warning" | "danger";
  size?: "md" | "sm" | "xs";
  /** Text content; defaults to "1". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

export declare function StepIndicator(props: StepIndicatorProps): JSX.Element;
