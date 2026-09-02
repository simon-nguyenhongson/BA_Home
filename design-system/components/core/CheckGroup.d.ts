import * as React from "react";

/**
 * A full-width selectable row with title, description and a checkbox, radio or avatar control.
 *
 * Source: Figma layer "Check group" (node 28:29962).
 * @startingPoint section="Controls" subtitle="Explained choice row" viewport="700x180"
 */
export interface CheckGroupProps {
  className?: string;
  style?: React.CSSProperties;
  selected?: boolean;
  type?: "avatar" | "checkbox" | "radio button";
  state?: "default" | "disabled" | "focused" | "hover";
  subText?: boolean;
  /** Text content; defaults to "Text demo". */
  text1?: string;
  /** Text content; defaults to "Sub text demo". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

export declare function CheckGroup(props: CheckGroupProps): JSX.Element;
