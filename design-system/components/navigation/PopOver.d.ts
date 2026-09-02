import * as React from "react";

/**
 * Light popover with arrow, optional title and footer.
 *
 * Source: Figma layer "Pop-over" (node 553:32550).
 */
export interface PopOverProps {
  className?: string;
  style?: React.CSSProperties;
  arrow?: "-> left" | "← right" | "↑ bottom" | "↓ top";
  title?: boolean;
  footer?: boolean;
  /** Text content; defaults to "Adjust the title, content and footer padding via Auto Layout. The available sizes are 0, 8, 16, and 24. Change the contents by swapping this Paragraph component with your own component.". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

export declare function PopOver(props: PopOverProps): JSX.Element;
