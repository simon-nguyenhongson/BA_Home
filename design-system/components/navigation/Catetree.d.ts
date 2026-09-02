import * as React from "react";

/**
 * Category tree with single or multi selection.
 *
 * Source: Figma layer "Catetree" (node 805:38040).
 */
export interface CatetreeProps {
  className?: string;
  style?: React.CSSProperties;
  single?: boolean;
  /** Text content; defaults to "Danh mục sản phẩm". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

export declare function Catetree(props: CatetreeProps): JSX.Element;
