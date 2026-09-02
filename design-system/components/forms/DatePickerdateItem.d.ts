import * as React from "react";

/**
 * Compact date item used by the picker's shortcut rail.
 *
 * Source: Figma layer "Date/Pickerdate item" (node 106:19643).
 */
export interface DatePickerdateItemProps {
  className?: string;
  style?: React.CSSProperties;
  selected?: boolean;
  state?: "default" | "focused" | "hover";
  /** Text content; defaults to "List item". */
  text1?: string;
}

export declare function DatePickerdateItem(props: DatePickerdateItemProps): JSX.Element;
