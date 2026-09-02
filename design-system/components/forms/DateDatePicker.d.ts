import * as React from "react";

/**
 * Date field trigger — single date or range, with placeholder / filled / focused / hover / disabled and a destructive twin.
 *
 * Source: Figma layer "Date/Date picker" (node 47:24514).
 */
export interface DateDatePickerProps {
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  ranged?: boolean;
  label?: boolean;
  state?: "placeholder" | "hover" | "filled" | "focused" | "disable";
  destructive?: boolean;
  /** Text content; defaults to "25/05/2023". */
  text1?: string;
  /** Text content; defaults to "30/05/2023". */
  text2?: string;
  /** Text content; defaults to "Chọn ngày/tháng/năm". */
  text3?: string;
  /** Text content; defaults to "Đến ngày". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

export declare function DateDatePicker(props: DateDatePickerProps): JSX.Element;
