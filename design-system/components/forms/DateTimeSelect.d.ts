import * as React from "react";

/**
 * The time column beside the calendar in datetime mode.
 *
 * Source: Figma layer "Date/Time select" (node 3141:8100).
 */
export interface DateTimeSelectProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

export declare function DateTimeSelect(props: DateTimeSelectProps): JSX.Element;
