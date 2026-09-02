import * as React from "react";

/**
 * Empty state — no data or no access, desktop and mobile.
 *
 * Source: Figma layer "No data" (node 30:7398).
 * @startingPoint section="Feedback" subtitle="Empty and no-access states" viewport="700x240"
 */
export interface NoDataProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "illustration 02" | "no access" | "no data";
  breakpoint?: "desktop" | "mobile";
  /** Text content; defaults to "Không có dữ liệu". */
  text1?: string;
  /** Text content; defaults to "Bạn không được phân quyền truy cập trang này!". */
  text2?: string;
}

export declare function NoData(props: NoDataProps): JSX.Element;
