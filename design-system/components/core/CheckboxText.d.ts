import * as React from "react";

/**
 * Checkbox with its label — unchecked / checked / indeterminate × 4 interaction states.
 *
 * Source: Figma layer "Checkbox text" (node 26:7109).
 */
export interface CheckboxTextProps {
  className?: string;
  style?: React.CSSProperties;
  checked?: boolean;
  indeterminate?: boolean;
  type?: "checkbox" | "radio";
  text?: boolean;
  state?: "default" | "disabled" | "focused" | "hover";
  subtext?: boolean;
  /** Text content; defaults to "Remember me". */
  text1?: string;
  /** Text content; defaults to "Save my login details for next time.". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

export declare function CheckboxText(props: CheckboxTextProps): JSX.Element;
