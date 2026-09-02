import * as React from "react";

/**
 * Rank chip with distinct treatments for 1st / 2nd / 3rd and a neutral style for everything else.
 *
 * Source: Figma layer "Badge/Ranking" (node 4936:18555).
 */
export interface BadgeRankingProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "other" | "1st" | "2nd" | "3rd";
  /** Text content; defaults to "1". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

export declare function BadgeRanking(props: BadgeRankingProps): JSX.Element;
