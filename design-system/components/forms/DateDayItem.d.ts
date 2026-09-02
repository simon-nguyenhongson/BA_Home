import * as React from "react";

/**
 * One day cell inside the calendar grid.
 *
 * Source: Figma layer "Date/Day item" (node 49:24122).
 */
export interface DateDayItemProps {
  className?: string;
  style?: React.CSSProperties;
  inView?: boolean;
  today?: boolean;
  selected?: boolean;
  rangeStart?: boolean;
  inRange?: boolean;
  rangeEnd?: boolean;
  hovered?: boolean;
  disabled?: boolean;
  /** Text content; defaults to "22". */
  text1?: string;
}

export declare function DateDayItem(props: DateDayItemProps): JSX.Element;
