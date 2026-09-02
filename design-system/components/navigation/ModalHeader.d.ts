import * as React from "react";

/**
 * The modal's title bar with title, optional supporting text and the close ✕.
 *
 * Source: Figma layer "Modal header" (node 76:19622).
 */
export interface ModalHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  xClose?: boolean;
  type?: "sub text" | "only title";
  paddingBorder?: boolean;
  /** Text content; defaults to "Blog post published". */
  text1?: string;
  /** Text content; defaults to "This blog post has been published. Team members will be able to edit this post and republish changes.". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

export declare function ModalHeader(props: ModalHeaderProps): JSX.Element;
