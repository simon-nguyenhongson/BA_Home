import * as React from "react";

/**
 * Avatar plus name and a secondary line (email, role), 4 sizes.
 *
 * Source: Figma layer "Avatar label group" (node 30:11646).
 */
export interface AvatarLabelGroupProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg" | "xl";
  statusIcon?: "online indicator" | "false" | "company" | "verified";
  state?: "default" | "hover" | "focus";
  /** Text content; defaults to "Olivia Rhye". */
  text1?: string;
  /** Text content; defaults to "olivia@untitledui.com". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

export declare function AvatarLabelGroup(props: AvatarLabelGroupProps): JSX.Element;
