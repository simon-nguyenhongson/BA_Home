import * as React from "react";

/**
 * An 8px colour dot for compact status, 16 colours including an animating processing state.
 *
 * Source: Figma layer "Badge/Dot" (node 14960:15336).
 */
export interface BadgeDotProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "pink" | "red" | "yellow" | "orange" | "cyan" | "green" | "blue" | "purple" | "geek blue" | "magenta" | "volcano" | "gold" | "lime" | "gray" | "processing" | "processing-animating";
}

export declare function BadgeDot(props: BadgeDotProps): JSX.Element;
