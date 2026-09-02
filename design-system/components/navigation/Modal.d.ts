import * as React from "react";

/**
 * Centred dialog — 5 widths (480 / 640 / 960 / 1140 / default), confirm or content type, destructive twin.
 *
 * Source: Figma layer "Modal" (node 76:63427).
 * @startingPoint section="Overlays" subtitle="Confirm dialog, 480" viewport="700x260"
 */
export interface ModalProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "confirm" | "modal content";
  size?: "default" | "1140" | "960" | "640" | "480";
  destructive?: boolean;
}

export declare function Modal(props: ModalProps): JSX.Element;
