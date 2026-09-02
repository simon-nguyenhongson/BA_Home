import * as React from "react";

/**
 * Brand illustration slot — box, cloud, documents, in primary or gray, 3 sizes.
 *
 * Source: Figma layer "illustration" (node 377:31429).
 */
export interface IllustrationProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "box" | "cloud" | "documents";
  color?: "gray" | "primary";
  size?: "sm" | "md" | "lg" | "xl" | "xxl" | "tiny";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

export declare function Illustration(props: IllustrationProps): JSX.Element;
