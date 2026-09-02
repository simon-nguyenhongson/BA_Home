import * as React from "react";

/**
 * A back / jump link with a leading chevron.
 *
 * Source: Figma layer "Anchor/Link" (node 181:33718).
 */
export interface AnchorLinkProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "link text". */
  text1?: string;
}

export declare function AnchorLink(props: AnchorLinkProps): JSX.Element;
