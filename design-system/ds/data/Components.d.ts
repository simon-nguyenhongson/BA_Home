// Components.d.ts — the complete catalog of the 54 component(s) in
// ./bundle/p1.js … p7.js (load them in order as classic scripts; every component
// is assigned to window). READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Badge2) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Badge" (node 18:19149)
export interface Badge2Props {
  className?: string;
  style?: React.CSSProperties;
  size?: "md" | "sm";
  icon?: "dot" | "false" | "icon leading" | "x close";
  color?: "blue" | "blue gray" | "blue light" | "error" | "gray" | "indigo" | "orange" | "pink" | "primary" | "purple" | "rosé" | "success" | "warning";
  outline?: boolean;
  /** Text content; defaults to "Label". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Button" (node 18:7934)
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "h24px" | "h32px" | "h40px";
  hierarchy?: "primary" | "secondary gray" | "secondary color" | "ghost gray" | "ghost color" | "link color" | "link gray";
  icon?: "default" | "only";
  destructive?: boolean;
  state?: "default" | "disabled" | "focused" | "hover";
  leadIcon?: boolean;
  changeRight?: React.ReactNode;
  changeLeft?: React.ReactNode;
  rightIcon?: boolean;
  /** Text content; defaults to "Button". */
  text1?: string;
}

// figma layer: "Cell Body Normal" (node 51:19159)
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

// figma layer: "Cell Title" (node 51:18770)
export interface CellTitleProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "blank" | "number" | "number w tooltip" | "checkbox" | "text" | "text w tooltip" | "load" | "action" | "hz expand";
  compressed?: boolean;
  error?: boolean;
  filter?: boolean;
  editColumn?: boolean;
  checkbox?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

// figma layer: "Checkbox icon" (node 26:6342)
export interface CheckboxIconProps {
  className?: string;
  style?: React.CSSProperties;
  checked?: boolean;
  indeterminate?: boolean;
  type?: "check circle" | "checkbox" | "radio";
  state?: "default" | "disbaled" | "focused" | "hover";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Color" (node 14018:19833)
export interface ColorProps {
  className?: string;
  style?: React.CSSProperties;
  prop?: "1" | "2" | "3" | "4" | "8";
}

// figma layer: "Combobox Single Select" (node 657:32526)
export interface ComboboxSingleSelectProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "no label" | "label tooltip" | "icon no label";
  destructive?: boolean;
  state?: "default" | "hover" | "filled" | "focused" | "disabled" | "filled no x" | "focused no x";
  required?: boolean;
  leadIcon?: React.ReactNode;
  /** Text content; defaults to "Label". */
  text1?: string;
  /** Text content; defaults to "*". */
  text2?: string;
  /** Text content; defaults to "Select option". */
  text3?: string;
  /** Text content; defaults to "This is an error message.". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

// figma layer: "Cursor" (node 28:7379)
export interface CursorProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "arrow" | "drag" | "hand";
}

// figma layer: "Date/Date picker" (node 47:24514)
export interface DateDatePickerProps {
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  ranged?: boolean;
  label?: boolean;
  state?: "placeholder" | "hover" | "filled" | "focused" | "disable";
  destructive?: boolean;
  /** Text content; defaults to "25/05/2023". */
  text1?: string;
  /** Text content; defaults to "30/05/2023". */
  text2?: string;
  /** Text content; defaults to "Chọn ngày/tháng/năm". */
  text3?: string;
  /** Text content; defaults to "Đến ngày". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

// figma layer: "Date/Date picker/Filled/false/False/True" (node 1049:40252)
export interface DateDatePickerFilledFalseProps {
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  /** Text content; defaults to "25/05/2023". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Date/Date picker/Filled/true/False/True" (node 1049:40215)
export interface DateDatePickerFilledTrueProps {
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  /** Text content; defaults to "25/05/2023". */
  text1?: string;
  /** Text content; defaults to "30/05/2023". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

// figma layer: "Date/Date picker/Focused/false/False/True" (node 1049:40257)
export interface DateDatePickerFocusedFalseProps {
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  /** Text content; defaults to "25/05/2023". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Date/Date picker/Focused/true/False/True" (node 1049:40223)
export interface DateDatePickerFocusedTrueProps {
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  /** Text content; defaults to "25/05/2023". */
  text1?: string;
  /** Text content; defaults to "30/05/2023". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

// figma layer: "Date/Date picker/Hover/false/False/True" (node 1049:40270)
export interface DateDatePickerHoverFalseProps {
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  /** Text content; defaults to "Chọn ngày". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Date/Date picker/Hover/true/False/True" (node 1049:40245)
export interface DateDatePickerHoverTrueProps {
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  /** Text content; defaults to "Từ ngày". */
  text1?: string;
  /** Text content; defaults to "Đến ngày". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Date/Date picker/Placeholder/false/False/True" (node 1049:40266)
export interface DateDatePickerPlaceholderFalseProps {
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  /** Text content; defaults to "Chọn ngày". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Date/Date picker/Placeholder/true/False/True" (node 1049:40238)
export interface DateDatePickerPlaceholderTrueProps {
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  /** Text content; defaults to "Từ ngày". */
  text1?: string;
  /** Text content; defaults to "Đến ngày". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Description" (node 150:25099)
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

// figma layer: "Help icon" (node 28:31592)
export interface HelpIconProps {
  className?: string;
  style?: React.CSSProperties;
  cursor?: boolean;
  open?: boolean;
  supportingText?: "false";
  tooltip?: "bottom" | "left" | "right" | "top arrow" | "top left" | "top right" | "bottom left" | "bottom right";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Help icon/False/False/Top no arrow" (node 28:31591)
export interface HelpIconFalseFalseTopProps {
  className?: string;
  style?: React.CSSProperties;
  cursor?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Icon/Add--alt" (node 275:58629)
export interface IconAddAltProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Arrow--down" (node 275:58623)
export interface IconArrowDownProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Arrow--left" (node 275:58622)
export interface IconArrowLeftProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Arrow--right" (node 275:58621)
export interface IconArrowRightProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Arrow--up" (node 275:58618)
export interface IconArrowUpProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Calendar" (node 275:59274)
export interface IconCalendarProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Checkmark" (node 275:59347)
export interface IconCheckmarkProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Chevron--down" (node 275:58613)
export interface IconChevronDownProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Chevron--right" (node 275:58611)
export interface IconChevronRightProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Close" (node 275:58609)
export interface IconCloseProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Close--filled" (node 275:59730)
export interface IconCloseFilledProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Close--outline" (node 275:58608)
export interface IconCloseOutlineProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Draggable" (node 275:58607)
export interface IconDraggableProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Filter" (node 275:58682)
export interface IconFilterProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Image" (node 275:59443)
export interface IconImageProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Information" (node 275:58816)
export interface IconInformationProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Menu" (node 275:59776)
export interface IconMenuProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Overflow-menu--horizontal" (node 275:58602)
export interface IconOverflowMenuHorizontalProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Save" (node 275:58580)
export interface IconSaveProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Subtract" (node 275:58599)
export interface IconSubtractProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Time" (node 275:59166)
export interface IconTimeProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Input-Addon/Label" (node 9357:22076)
export interface InputAddonLabelProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "http://". */
  text1?: string;
}

// figma layer: "input-addon-left" (node 9419:16646)
export interface InputAddonLeftProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Input field" (node 25:10081)
export interface InputFieldProps {
  className?: string;
  style?: React.CSSProperties;
  label?: boolean;
  rightIcon3?: React.ReactNode;
  textHint?: boolean;
  xIcon?: boolean;
  size?: "sm" | "md";
  type?: "default" | "tags";
  destructive?: boolean;
  state?: "placeholder" | "hover" | "filled" | "focused" | "disabled";
  rightIcon2?: boolean;
  tag?: boolean;
  leadIcon?: React.ReactNode;
  leadIcon1?: boolean;
  /** Text content; defaults to "Title". */
  text1?: string;
  /** Text content; defaults to "Text demo". */
  text2?: string;
  /** Text content; defaults to "This is a hint text to help user". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

// figma layer: "Input text to label" (node 1744:38988)
export interface InputTextToLabelProps {
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  type?: "default" | "no label" | "label tooltip";
  destructive?: boolean;
  state?: "default" | "hover" | "filled" | "focused" | "disabled";
  /** Text content; defaults to "Label". */
  text1?: string;
  /** Text content; defaults to "*". */
  text2?: string;
  /** Text content; defaults to "Text input". */
  text3?: string;
  /** Text content; defaults to "This is an error message.". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

// figma layer: "Metric/change" (node 5147:19662)
export interface MetricChangeProps {
  className?: string;
  style?: React.CSSProperties;
  trend?: "up" | "down" | "trend3";
  number?: boolean;
  /** Text content; defaults to "2%". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Number input" (node 683:33408)
export interface NumberInputProps {
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  type?: "default" | "no label" | "label tooltip";
  state?: "default" | "hover" | "filled" | "focused" | "disabled" | "filled no x" | "focused no x";
  destructive?: boolean;
  /** Text content; defaults to "Label". */
  text1?: string;
  /** Text content; defaults to "*". */
  text2?: string;
  /** Text content; defaults to "123.456". */
  text3?: string;
  /** Text content; defaults to "This is an error message.". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Pagination no count" (node 731:35877)
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

// figma layer: "Processbar" (node 28:33230)
export interface ProcessbarProps {
  className?: string;
  style?: React.CSSProperties;
  progress?: "0%" | "10%" | "100%" | "20%" | "30%" | "40%" | "50%" | "60%" | "70%" | "80%" | "90%";
  label?: "bottom" | "false" | "right";
  muiti?: "no" | "\byes";
  subNumber?: boolean;
  /** Text content; defaults to "0%". */
  text1?: string;
  /** Text content; defaults to "25%". */
  text2?: string;
  /** Text content; defaults to "25%". */
  text3?: string;
  /** Text content; defaults to "25%". */
  text4?: string;
}

// figma layer: "Skeleton Title" (node 679:35992)
export interface SkeletonTitleProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "l" | "m" | "s" | "xs" | "xxs" | "xxxs" | "tiny";
}

// figma layer: "Table title text" (node 51:18544)
export interface TableTitleTextProps {
  className?: string;
  style?: React.CSSProperties;
  text?: "only" | "with tool tip" | "sort up" | "sort down";
  state?: "default" | "disabled" | "hover";
  help?: boolean;
  filter?: boolean;
  /** Text content; defaults to "Company". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

// figma layer: "Text field" (node 657:31295)
export interface TextFieldProps {
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  type?: "default" | "no label" | "label tooltip";
  destructive?: boolean;
  state?: "default" | "hover" | "filled" | "focused" | "disabled";
  addon?: "default" | "left";
  /** Text content; defaults to "Label". */
  text1?: string;
  /** Text content; defaults to "*". */
  text2?: string;
  /** Text content; defaults to "Text input". */
  text3?: string;
  /** Text content; defaults to "This is an error message.". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

// figma layer: "Toggle" (node 25:11134)
export interface ToggleProps {
  className?: string;
  style?: React.CSSProperties;
  pressed?: boolean;
  size?: "md" | "sm";
  text?: boolean;
  state?: "default" | "disabled" | "hover" | "focused";
  tooltip?: boolean;
  subText?: boolean;
  /** Text content; defaults to "Remember me". */
  text1?: string;
  /** Text content; defaults to "Save my login details for next time.". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Tooltip" (node 28:31405)
export interface TooltipProps {
  className?: string;
  style?: React.CSSProperties;
  theme?: "dark";
  arrow?: "bottom center" | "bottom left" | "bottom right" | "left" | "right" | "top center" | "top left" | "top right";
  /** Text content; defaults to "This is a tooltip". */
  text1?: string;
}

declare const Badge2: React.FC<Badge2Props>;
declare const Button: React.FC<ButtonProps>;
declare const CellBodyNormal: React.FC<CellBodyNormalProps>;
declare const CellTitle: React.FC<CellTitleProps>;
declare const CheckboxIcon: React.FC<CheckboxIconProps>;
declare const Color: React.FC<ColorProps>;
declare const ComboboxSingleSelect: React.FC<ComboboxSingleSelectProps>;
declare const Cursor: React.FC<CursorProps>;
declare const DateDatePicker: React.FC<DateDatePickerProps>;
declare const DateDatePickerFilledFalse: React.FC<DateDatePickerFilledFalseProps>;
declare const DateDatePickerFilledTrue: React.FC<DateDatePickerFilledTrueProps>;
declare const DateDatePickerFocusedFalse: React.FC<DateDatePickerFocusedFalseProps>;
declare const DateDatePickerFocusedTrue: React.FC<DateDatePickerFocusedTrueProps>;
declare const DateDatePickerHoverFalse: React.FC<DateDatePickerHoverFalseProps>;
declare const DateDatePickerHoverTrue: React.FC<DateDatePickerHoverTrueProps>;
declare const DateDatePickerPlaceholderFalse: React.FC<DateDatePickerPlaceholderFalseProps>;
declare const DateDatePickerPlaceholderTrue: React.FC<DateDatePickerPlaceholderTrueProps>;
declare const Description: React.FC<DescriptionProps>;
declare const HelpIcon: React.FC<HelpIconProps>;
declare const HelpIconFalseFalseTop: React.FC<HelpIconFalseFalseTopProps>;
declare const IconAddAlt: React.FC<IconAddAltProps>;
declare const IconArrowDown: React.FC<IconArrowDownProps>;
declare const IconArrowLeft: React.FC<IconArrowLeftProps>;
declare const IconArrowRight: React.FC<IconArrowRightProps>;
declare const IconArrowUp: React.FC<IconArrowUpProps>;
declare const IconCalendar: React.FC<IconCalendarProps>;
declare const IconCheckmark: React.FC<IconCheckmarkProps>;
declare const IconChevronDown: React.FC<IconChevronDownProps>;
declare const IconChevronRight: React.FC<IconChevronRightProps>;
declare const IconClose: React.FC<IconCloseProps>;
declare const IconCloseFilled: React.FC<IconCloseFilledProps>;
declare const IconCloseOutline: React.FC<IconCloseOutlineProps>;
declare const IconDraggable: React.FC<IconDraggableProps>;
declare const IconFilter: React.FC<IconFilterProps>;
declare const IconImage: React.FC<IconImageProps>;
declare const IconInformation: React.FC<IconInformationProps>;
declare const IconMenu: React.FC<IconMenuProps>;
declare const IconOverflowMenuHorizontal: React.FC<IconOverflowMenuHorizontalProps>;
declare const IconSave: React.FC<IconSaveProps>;
declare const IconSubtract: React.FC<IconSubtractProps>;
declare const IconTime: React.FC<IconTimeProps>;
declare const InputAddonLabel: React.FC<InputAddonLabelProps>;
declare const InputAddonLeft: React.FC<InputAddonLeftProps>;
declare const InputField: React.FC<InputFieldProps>;
declare const InputTextToLabel: React.FC<InputTextToLabelProps>;
declare const MetricChange: React.FC<MetricChangeProps>;
declare const NumberInput: React.FC<NumberInputProps>;
declare const PaginationNoCount: React.FC<PaginationNoCountProps>;
declare const Processbar: React.FC<ProcessbarProps>;
declare const SkeletonTitle: React.FC<SkeletonTitleProps>;
declare const TableTitleText: React.FC<TableTitleTextProps>;
declare const TextField: React.FC<TextFieldProps>;
declare const Toggle: React.FC<ToggleProps>;
declare const Tooltip: React.FC<TooltipProps>;
declare global {
  interface Window {
    Badge2: React.FC<Badge2Props>;
    Button: React.FC<ButtonProps>;
    CellBodyNormal: React.FC<CellBodyNormalProps>;
    CellTitle: React.FC<CellTitleProps>;
    CheckboxIcon: React.FC<CheckboxIconProps>;
    Color: React.FC<ColorProps>;
    ComboboxSingleSelect: React.FC<ComboboxSingleSelectProps>;
    Cursor: React.FC<CursorProps>;
    DateDatePicker: React.FC<DateDatePickerProps>;
    DateDatePickerFilledFalse: React.FC<DateDatePickerFilledFalseProps>;
    DateDatePickerFilledTrue: React.FC<DateDatePickerFilledTrueProps>;
    DateDatePickerFocusedFalse: React.FC<DateDatePickerFocusedFalseProps>;
    DateDatePickerFocusedTrue: React.FC<DateDatePickerFocusedTrueProps>;
    DateDatePickerHoverFalse: React.FC<DateDatePickerHoverFalseProps>;
    DateDatePickerHoverTrue: React.FC<DateDatePickerHoverTrueProps>;
    DateDatePickerPlaceholderFalse: React.FC<DateDatePickerPlaceholderFalseProps>;
    DateDatePickerPlaceholderTrue: React.FC<DateDatePickerPlaceholderTrueProps>;
    Description: React.FC<DescriptionProps>;
    HelpIcon: React.FC<HelpIconProps>;
    HelpIconFalseFalseTop: React.FC<HelpIconFalseFalseTopProps>;
    IconAddAlt: React.FC<IconAddAltProps>;
    IconArrowDown: React.FC<IconArrowDownProps>;
    IconArrowLeft: React.FC<IconArrowLeftProps>;
    IconArrowRight: React.FC<IconArrowRightProps>;
    IconArrowUp: React.FC<IconArrowUpProps>;
    IconCalendar: React.FC<IconCalendarProps>;
    IconCheckmark: React.FC<IconCheckmarkProps>;
    IconChevronDown: React.FC<IconChevronDownProps>;
    IconChevronRight: React.FC<IconChevronRightProps>;
    IconClose: React.FC<IconCloseProps>;
    IconCloseFilled: React.FC<IconCloseFilledProps>;
    IconCloseOutline: React.FC<IconCloseOutlineProps>;
    IconDraggable: React.FC<IconDraggableProps>;
    IconFilter: React.FC<IconFilterProps>;
    IconImage: React.FC<IconImageProps>;
    IconInformation: React.FC<IconInformationProps>;
    IconMenu: React.FC<IconMenuProps>;
    IconOverflowMenuHorizontal: React.FC<IconOverflowMenuHorizontalProps>;
    IconSave: React.FC<IconSaveProps>;
    IconSubtract: React.FC<IconSubtractProps>;
    IconTime: React.FC<IconTimeProps>;
    InputAddonLabel: React.FC<InputAddonLabelProps>;
    InputAddonLeft: React.FC<InputAddonLeftProps>;
    InputField: React.FC<InputFieldProps>;
    InputTextToLabel: React.FC<InputTextToLabelProps>;
    MetricChange: React.FC<MetricChangeProps>;
    NumberInput: React.FC<NumberInputProps>;
    PaginationNoCount: React.FC<PaginationNoCountProps>;
    Processbar: React.FC<ProcessbarProps>;
    SkeletonTitle: React.FC<SkeletonTitleProps>;
    TableTitleText: React.FC<TableTitleTextProps>;
    TextField: React.FC<TextFieldProps>;
    Toggle: React.FC<ToggleProps>;
    Tooltip: React.FC<TooltipProps>;
  }
}
