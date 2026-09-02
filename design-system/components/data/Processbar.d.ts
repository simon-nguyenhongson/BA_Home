import * as React from "react";

/**
 * In-cell progress bar with its value label.
 *
 * Source: Figma layer "Processbar" (node 28:33230).
 */
export interface ProcessbarProps {
  className?: string;
  style?: React.CSSProperties;
  progress?: "0%" | "10%" | "100%" | "20%" | "30%" | "40%" | "50%" | "60%" | "70%" | "80%" | "90%";
  label?: "bottom" | "false" | "right";
  muiti?: "no" | "\byes";
  subNumber?: boolean;
  /** Text content; defaults to "0%". */
  text1?: string;
  /** Text content; defaults to "25%". */
  text2?: string;
  /** Text content; defaults to "25%". */
  text3?: string;
  /** Text content; defaults to "25%". */
  text4?: string;
}

export declare function Processbar(props: ProcessbarProps): JSX.Element;
