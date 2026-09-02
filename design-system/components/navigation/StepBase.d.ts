import * as React from "react";

/**
 * A step's dot plus its label and description block.
 *
 * Source: Figma layer "Step base" (node 295:36267).
 */
export interface StepBaseProps {
  className?: string;
  style?: React.CSSProperties;
  status?: "danger" | "default / current" | "disabled" | "incomplete" | "success" | "warning";
  size?: "md" | "sm" | "xs";
  /** Text content; defaults to "1". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

export declare function StepBase(props: StepBaseProps): JSX.Element;
