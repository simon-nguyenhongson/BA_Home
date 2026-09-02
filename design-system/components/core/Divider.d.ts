import * as React from "react";

/**
 * A 1px horizontal rule in the default border colour.
 *
 * Source: Figma layer "Divider" (node 24:4230).
 */
export interface DividerProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: boolean;
  /** Text content; defaults to "Text line". */
  text1?: string;
}

export declare function Divider(props: DividerProps): JSX.Element;
