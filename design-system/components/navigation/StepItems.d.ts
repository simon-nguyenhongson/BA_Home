import * as React from "react";

/**
 * One step row inside a vertical stepper.
 *
 * Source: Figma layer "Step items" (node 295:37414).
 */
export interface StepItemsProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "md" | "xs";
  position?: "first" | "last" | "middle";
  status?: "danger" | "default / current" | "disabled" | "incomplete" | "success" | "warning";
  /** Text content; defaults to "Step name". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

export declare function StepItems(props: StepItemsProps): JSX.Element;
