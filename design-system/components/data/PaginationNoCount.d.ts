import * as React from "react";

/**
 * Table footer pagination — page size, current page, jump-to-page. States: default, load, only one.
 *
 * Source: Figma layer "Pagination no count" (node 731:35877).
 */
export interface PaginationNoCountProps {
  className?: string;
  style?: React.CSSProperties;
  hada?: boolean;
  state?: "default" | "load" | "only one";
  /** Text content; defaults to "# mục". */
  text1?: string;
  /** Text content; defaults to "Trang 1 / 100". */
  text2?: string;
  /** Text content; defaults to "Đến trang". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

export declare function PaginationNoCount(props: PaginationNoCountProps): JSX.Element;
