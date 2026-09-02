import * as React from "react";

/**
 * Label / value description list, 2–4 columns × 2–5 rows.
 *
 * Source: Figma layer "Description" (node 150:25099).
 * @startingPoint section="Tables" subtitle="Label / value detail list" viewport="700x200"
 */
export interface DescriptionProps {
  className?: string;
  style?: React.CSSProperties;
  collum?: "2" | "3" | "4";
  line?: "2" | "3" | "4" | "5";
  /** Text content; defaults to "Mã PR". */
  text1?: string;
  /** Text content; defaults to "PR0000006098". */
  text2?: string;
  /** Text content; defaults to "Phiếu PO". */
  text3?: string;
  /** Text content; defaults to "PO0000006098". */
  text4?: string;
}

export declare function Description(props: DescriptionProps): JSX.Element;
