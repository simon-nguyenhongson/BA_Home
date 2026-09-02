import * as React from "react";

/**
 * Side panel — overlay or push mode, with an optional action footer.
 *
 * Source: Figma layer "Drawer" (node 766:38752).
 * @startingPoint section="Overlays" subtitle="Detail side panel" viewport="700x400"
 */
export interface DrawerProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "overlay" | "push";
  tabs?: boolean;
  actionBtn?: boolean;
  /** Text content; defaults to "Title". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

export declare function Drawer(props: DrawerProps): JSX.Element;
