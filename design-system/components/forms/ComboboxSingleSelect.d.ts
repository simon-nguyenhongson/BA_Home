import * as React from "react";

/**
 * Single-select dropdown with four label layouts and seven states, each with a destructive twin.
 *
 * Source: Figma layer "Combobox Single Select" (node 657:32526).
 * @startingPoint section="Forms" subtitle="Labelled select with all states" viewport="700x200"
 */
export interface ComboboxSingleSelectProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "no label" | "label tooltip" | "icon no label";
  destructive?: boolean;
  state?: "default" | "hover" | "filled" | "focused" | "disabled" | "filled no x" | "focused no x";
  required?: boolean;
  leadIcon?: React.ReactNode;
  /** Text content; defaults to "Label". */
  text1?: string;
  /** Text content; defaults to "*". */
  text2?: string;
  /** Text content; defaults to "Select option". */
  text3?: string;
  /** Text content; defaults to "This is an error message.". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

export declare function ComboboxSingleSelect(props: ComboboxSingleSelectProps): JSX.Element;
