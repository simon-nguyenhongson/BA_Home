import * as React from "react";

/**
 * Performance-tier chip, five levels from top performer downward. (Layer name is misspelled in the source; the export keeps it so lookups match Figma.)
 *
 * Source: Figma layer "Badge/Perfromace" (node 4936:20615).
 */
export interface BadgePerfromaceProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "1st" | "2nd" | "3rd" | "variant4" | "variant5";
  /** Text content; defaults to "Star". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

export declare function BadgePerfromace(props: BadgePerfromaceProps): JSX.Element;
