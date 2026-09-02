import * as React from "react";

/**
 * Loading placeholder bar for a heading.
 *
 * Source: Figma layer "Skeleton Title" (node 679:35992).
 */
export interface SkeletonTitleProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "l" | "m" | "s" | "xs" | "xxs" | "xxxs" | "tiny";
}

export declare function SkeletonTitle(props: SkeletonTitleProps): JSX.Element;
