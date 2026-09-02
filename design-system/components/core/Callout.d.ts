import * as React from "react";

/**
 * Inline notice in four semantic tones (primary, success, warning, danger) and two sizes.
 *
 * Source: Figma layer "Callout" (node 766:36723).
 */
export interface CalloutProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "success" | "danger" | "warning" | "primary";
  size?: "md" | "sm";
  icon?: boolean;
  icon2?: React.ReactNode;
  hasContent?: boolean;
  button?: boolean;
  description?: boolean;
}

export declare function Callout(props: CalloutProps): JSX.Element;
