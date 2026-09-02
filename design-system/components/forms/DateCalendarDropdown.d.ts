import * as React from "react";

/**
 * The open calendar panel — date, datetime, date range, month, quarter, year, month range.
 *
 * Source: Figma layer "Date/Calendar dropdown" (node 49:24303).
 */
export interface DateCalendarDropdownProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "date" | "datetime" | "date range" | "month" | "quarter" | "year" | "month range";
  /** Text content; defaults to "Tháng 9/2023". */
  text1?: string;
  /** Text content; defaults to "T2". */
  text2?: string;
  /** Text content; defaults to "T3". */
  text3?: string;
  /** Text content; defaults to "T4". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

export declare function DateCalendarDropdown(props: DateCalendarDropdownProps): JSX.Element;
