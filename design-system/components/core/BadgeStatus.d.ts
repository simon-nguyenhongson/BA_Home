import * as React from "react";

/**
 * Record status with a leading dot — success, processing, warning, error, default.
 *
 * Source: Figma layer "Badge/Status" (node 14960:15465).
 */
export interface BadgeStatusProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "success" | "error" | "default" | "warning" | "processing";
  /** Text content; defaults to "Success". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

export declare function BadgeStatus(props: BadgeStatusProps): JSX.Element;
