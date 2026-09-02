import * as React from "react";

/**
 * The modal's action row, right-aligned.
 *
 * Source: Figma layer "Modal button" (node 76:19687).
 */
export interface ModalButtonProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "left sub button";
  destructive?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

export declare function ModalButton(props: ModalButtonProps): JSX.Element;
