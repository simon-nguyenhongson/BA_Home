import * as React from "react";

/**
 * Radio with label, 3 sizes, checked / unchecked / disabled.
 *
 * Source: Figma layer "Components/Radio-Button/Solid" (node 14960:15613).
 */
export interface ComponentsRadioButtonSolidProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
  position?: "left" | "center" | "right";
  checked?: boolean;
  disabled?: boolean;
  animation?: "none" | "hovered";
  /** Text content; defaults to "Hangzhou". */
  text1?: string;
}

export declare function ComponentsRadioButtonSolid(props: ComponentsRadioButtonSolidProps): JSX.Element;
