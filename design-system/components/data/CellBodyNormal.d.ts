import * as React from "react";

/**
 * Table body cell — 50 content types from plain text to embedded select, date picker, toggle and progress.
 *
 * Source: Figma layer "Cell Body Normal" (node 51:19159).
 */
export interface CellBodyNormalProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "checked";
  type?: "Action button" | "Blank" | "Checkbox" | "Combo select" | "Confirm button" | "Description" | "Date picker" | "Decimal" | "Drag" | "Text" | "Number" | "Link" | "Process" | "Tooltip" | "Status" | "Pic placeholder" | "Picture" | "Toggle" | "Input Invalid (Ant D)" | "Load" | "Only icon" | "Text label" | "Number input" | "Money" | "Tree" | "Field input" | "AG typing" | "Blank Invalid (AG)" | "Text check" | "Drag check" | "Blank (AG)" | "Text (AG)" | "AG Selecting" | "Filled Select (AG)" | "Filled Date (AG)" | "Checkbox (AG)" | "Number (AG)" | "Text invalid (AG)" | "Number Invalid (AG)" | "Black select (AG)" | "Blank Date (AG)" | "changeview" | "Toggle (AG)" | "AG Selecting (Muilty)" | "Filled Select muilty (AG)" | "Black select muilty (AG)" | "Filled Select Muilt (AG)" | "Black select Muilty (AG)" | "Process Bar" | "Process color" | "Time picker";
  compressed?: boolean;
  icon2?: boolean;
  more?: boolean;
  drag?: boolean;
  /** Text content; defaults to "Text". */
  text1?: string;
}

export declare function CellBodyNormal(props: CellBodyNormalProps): JSX.Element;
