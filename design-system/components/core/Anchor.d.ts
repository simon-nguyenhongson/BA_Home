import * as React from "react";

/**
 * In-page anchor link — link, selected, and has-children states.
 *
 * Source: Figma layer "Anchor" (node 181:34318).
 */
export interface AnchorProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "link" | "link-selected" | "link-with-subs";
  /** Text content; defaults to "link text". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

export declare function Anchor(props: AnchorProps): JSX.Element;
