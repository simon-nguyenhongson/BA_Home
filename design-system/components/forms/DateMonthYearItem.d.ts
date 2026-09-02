import * as React from "react";

/**
 * Month or year cell in the month / year panels.
 *
 * Source: Figma layer "Date/MonthYear item" (node 49:24140).
 */
export interface DateMonthYearItemProps {
  className?: string;
  style?: React.CSSProperties;
  selected?: boolean;
  hovered?: boolean;
  single?: boolean;
  type?: "single" | "start" | "in range" | "end" | "disable" | "current";
  /** Text content; defaults to "Jan". */
  text1?: string;
}

export declare function DateMonthYearItem(props: DateMonthYearItemProps): JSX.Element;
