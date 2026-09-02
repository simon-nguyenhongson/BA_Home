import * as React from "react";

/**
 * Expandable section with optional checkbox and trailing button.
 *
 * Source: Figma layer "Collapse" (node 146:25871).
 */
export interface CollapseProps {
  className?: string;
  style?: React.CSSProperties;
  checkBox?: boolean;
  button?: boolean;
  icon?: boolean;
  /** Text content; defaults to "Test 1". */
  text1?: string;
  /** Text content; defaults to "◇\nSwap". */
  text2?: string;
  /** Text content; defaults to "Test 2". */
  text3?: string;
  /** Text content; defaults to "This is panel header 1". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

export declare function Collapse(props: CollapseProps): JSX.Element;
