import * as React from "react";

/**
 * Delta indicator for a metric — direction plus percentage.
 *
 * Source: Figma layer "Metric/change" (node 5147:19662).
 */
export interface MetricChangeProps {
  className?: string;
  style?: React.CSSProperties;
  trend?: "up" | "down" | "trend3";
  number?: boolean;
  /** Text content; defaults to "2%". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

export declare function MetricChange(props: MetricChangeProps): JSX.Element;
