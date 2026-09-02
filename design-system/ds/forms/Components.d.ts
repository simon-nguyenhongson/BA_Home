// Components.d.ts — the complete catalog of the 48 component(s) in
// ./bundle/p1.js … p5.js (load them in order as classic scripts; every component
// is assigned to window). READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Button3) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Button" (node 44:21273)
export interface Button3Props {
  className?: string;
  style?: React.CSSProperties;
  type?: "primary" | "secondary" | "dashed" | "link" | "text";
  shape?: "standard" | "circle" | "square";
  size?: "lg" | "md" | "sm";
  state?: "normal" | "hover or press" | "disabled" | "active" | "animating";
  danger?: boolean;
  ghost?: boolean;
  icon?: boolean;
  title?: string;
  oneCharTitle?: string;
  /** Text content; defaults to "Button Title". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Color picker" (node 14447:15938)
export interface ColorPickerProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "filled" | "focused" | "disabled";
  /** Text content; defaults to "Select option". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
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

// figma layer: "Components/Radio-Button/Solid" (node 14960:15613)
export interface ComponentsRadioButtonSolidProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
  position?: "left" | "center" | "right";
  checked?: boolean;
  disabled?: boolean;
  animation?: "none" | "hovered";
  /** Text content; defaults to "Hangzhou". */
  text1?: string;
}

// figma layer: "Currency" (node 9357:22916)
export interface CurrencyProps {
  className?: string;
  style?: React.CSSProperties;
  required?: boolean;
  type?: "default" | "no label";
  state?: "default" | "hover" | "filled" | "focused" | "disabled";
  addon?: "no" | "right" | "left + right";
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
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

// figma layer: "Date/Calendar dropdown" (node 49:24303)
export interface DateCalendarDropdownProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "date" | "datetime" | "date range" | "month" | "quarter" | "year" | "month range";
  /** Text content; defaults to "Tháng 9/2023". */
  text1?: string;
  /** Text content; defaults to "T2". */
  text2?: string;
  /** Text content; defaults to "T3". */
  text3?: string;
  /** Text content; defaults to "T4". */
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

// figma layer: "Date/Day item" (node 49:24122)
export interface DateDayItemProps {
  className?: string;
  style?: React.CSSProperties;
  inView?: boolean;
  today?: boolean;
  selected?: boolean;
  rangeStart?: boolean;
  inRange?: boolean;
  rangeEnd?: boolean;
  hovered?: boolean;
  disabled?: boolean;
  /** Text content; defaults to "22". */
  text1?: string;
}

// figma layer: "Date/item" (node 3141:8789)
export interface DateItemProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "hovered" | "normal" | "selected" | "disable";
  /** Text content; defaults to "00". */
  text1?: string;
}

// figma layer: "Date/MonthYear item" (node 49:24140)
export interface DateMonthYearItemProps {
  className?: string;
  style?: React.CSSProperties;
  selected?: boolean;
  hovered?: boolean;
  single?: boolean;
  type?: "single" | "start" | "in range" | "end" | "disable" | "current";
  /** Text content; defaults to "Jan". */
  text1?: string;
}

// figma layer: "Date/Pickerdate item" (node 106:19643)
export interface DatePickerdateItemProps {
  className?: string;
  style?: React.CSSProperties;
  selected?: boolean;
  state?: "default" | "focused" | "hover";
  /** Text content; defaults to "List item". */
  text1?: string;
}

// figma layer: "Date/Time select" (node 3141:8100)
export interface DateTimeSelectProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon4?: React.ReactNode;
}

// figma layer: "Divider" (node 9357:22039)
export interface Divider5Props {
  className?: string;
  style?: React.CSSProperties;
  type?: "horizontal" | "vertical";
  dashed?: boolean;
  title?: boolean;
  orientation?: "left" | "center" | "right" | ".n/a";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Down" (node 9357:22074)
export interface DownProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Edit" (node 44:21900)
export interface EditProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Edit" (node 9357:22007)
export interface Edit3Props {
  className?: string;
  style?: React.CSSProperties;
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

// figma layer: "Icon/Calendar" (node 275:59274)
export interface IconCalendarProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Chevron--down" (node 275:58613)
export interface IconChevronDownProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Close--outline" (node 275:58608)
export interface IconCloseOutlineProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Information" (node 275:58816)
export interface IconInformationProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Search" (node 275:59039)
export interface IconSearchProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon-Wrapper" (node 44:21191)
export interface IconWrapperProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "10px" | "12px" | "14px" | "16px" | "18px" | "20px" | "22px" | "24px" | "32px" | "48px" | "64px" | "104px" | "128px";
  union?: boolean;
  icon?: React.ReactNode;
}

// figma layer: "Input" (node 3413:5203)
export interface InputProps {
  className?: string;
  style?: React.CSSProperties;
  iconLeft?: boolean;
  state?: "default" | "hover" | "pressed" | "editable" | "non editable" | "disabled";
  iconLeft2?: React.ReactNode;
  text?: string;
  iconRight?: boolean;
  iconRight2?: React.ReactNode;
  /** Text content; defaults to "Input Text". */
  text1?: string;
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

// figma layer: "input-addon-right" (node 9357:23494)
export interface InputAddonRightProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: ".Input-Number-Handler" (node 9357:22474)
export interface InputNumberHandlerProps {
  className?: string;
  style?: React.CSSProperties;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Progress bar" (node 38:39560)
export interface ProgressBarProps {
  className?: string;
  style?: React.CSSProperties;
  progress?: "0%" | "10%" | "20%" | "30%" | "40%" | "50%" | "60%" | "70%" | "80%" | "90%" | "100%";
  label?: "false" | "right" | "bottom" | "top floating" | "bottom floating";
  /** Text content; defaults to "0%". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Scroll bar" (node 24:4318)
export interface ScrollBarProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "horizontal" | "vertical";
  length?: "25%" | "50%" | "75%";
}

// figma layer: "Setting" (node 44:21189)
export interface SettingProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "small-down" (node 3413:5198)
export interface SmallDownProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Text/Text" (node 44:21904)
export interface TextTextProps {
  className?: string;
  style?: React.CSSProperties;
  hierarchy?: "primary" | "secondary" | "link";
  bullet?: boolean;
  editable?: boolean;
  copyable?: boolean;
  text?: string;
  /** Text content; defaults to "￮". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Text/Text" (node 9357:22011)
export interface TextText3Props {
  className?: string;
  style?: React.CSSProperties;
  hierarchy?: "primary" | "secondary" | "link";
  bullet?: boolean;
  editable?: boolean;
  copyable?: boolean;
  text?: string;
  /** Text content; defaults to "￮". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
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

// figma layer: "Tooltip" (node 33:7045)
export interface Tooltip2Props {
  className?: string;
  style?: React.CSSProperties;
  supportingText?: boolean;
  theme?: "dark" | "light";
  arrow?: "none" | "bottom left" | "bottom right" | "left" | "right" | "bottom center" | "top center";
  /** Text content; defaults to "This is a tooltip". */
  text1?: string;
  /** Text content; defaults to "Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text.". */
  text2?: string;
}

// figma layer: "Up" (node 9357:22072)
export interface UpProps {
  className?: string;
  style?: React.CSSProperties;
}

declare const Button3: React.FC<Button3Props>;
declare const ColorPicker: React.FC<ColorPickerProps>;
declare const ComboboxSingleSelect: React.FC<ComboboxSingleSelectProps>;
declare const ComponentsRadioButtonSolid: React.FC<ComponentsRadioButtonSolidProps>;
declare const Currency: React.FC<CurrencyProps>;
declare const DateCalendarDropdown: React.FC<DateCalendarDropdownProps>;
declare const DateDatePicker: React.FC<DateDatePickerProps>;
declare const DateDatePickerFilledFalse: React.FC<DateDatePickerFilledFalseProps>;
declare const DateDatePickerFilledTrue: React.FC<DateDatePickerFilledTrueProps>;
declare const DateDatePickerFocusedFalse: React.FC<DateDatePickerFocusedFalseProps>;
declare const DateDatePickerFocusedTrue: React.FC<DateDatePickerFocusedTrueProps>;
declare const DateDatePickerHoverFalse: React.FC<DateDatePickerHoverFalseProps>;
declare const DateDatePickerHoverTrue: React.FC<DateDatePickerHoverTrueProps>;
declare const DateDatePickerPlaceholderFalse: React.FC<DateDatePickerPlaceholderFalseProps>;
declare const DateDatePickerPlaceholderTrue: React.FC<DateDatePickerPlaceholderTrueProps>;
declare const DateDayItem: React.FC<DateDayItemProps>;
declare const DateItem: React.FC<DateItemProps>;
declare const DateMonthYearItem: React.FC<DateMonthYearItemProps>;
declare const DatePickerdateItem: React.FC<DatePickerdateItemProps>;
declare const DateTimeSelect: React.FC<DateTimeSelectProps>;
declare const Divider5: React.FC<Divider5Props>;
declare const Down: React.FC<DownProps>;
declare const Edit: React.FC<EditProps>;
declare const Edit3: React.FC<Edit3Props>;
declare const HelpIconFalseFalseTop: React.FC<HelpIconFalseFalseTopProps>;
declare const IconAddAlt: React.FC<IconAddAltProps>;
declare const IconArrowLeft: React.FC<IconArrowLeftProps>;
declare const IconArrowRight: React.FC<IconArrowRightProps>;
declare const IconCalendar: React.FC<IconCalendarProps>;
declare const IconChevronDown: React.FC<IconChevronDownProps>;
declare const IconCloseOutline: React.FC<IconCloseOutlineProps>;
declare const IconInformation: React.FC<IconInformationProps>;
declare const IconSearch: React.FC<IconSearchProps>;
declare const IconWrapper: React.FC<IconWrapperProps>;
declare const Input: React.FC<InputProps>;
declare const InputAddonLabel: React.FC<InputAddonLabelProps>;
declare const InputAddonLeft: React.FC<InputAddonLeftProps>;
declare const InputAddonRight: React.FC<InputAddonRightProps>;
declare const InputNumberHandler: React.FC<InputNumberHandlerProps>;
declare const ProgressBar: React.FC<ProgressBarProps>;
declare const ScrollBar: React.FC<ScrollBarProps>;
declare const Setting: React.FC<SettingProps>;
declare const SmallDown: React.FC<SmallDownProps>;
declare const TextText: React.FC<TextTextProps>;
declare const TextText3: React.FC<TextText3Props>;
declare const Toggle: React.FC<ToggleProps>;
declare const Tooltip2: React.FC<Tooltip2Props>;
declare const Up: React.FC<UpProps>;
declare global {
  interface Window {
    Button3: React.FC<Button3Props>;
    ColorPicker: React.FC<ColorPickerProps>;
    ComboboxSingleSelect: React.FC<ComboboxSingleSelectProps>;
    ComponentsRadioButtonSolid: React.FC<ComponentsRadioButtonSolidProps>;
    Currency: React.FC<CurrencyProps>;
    DateCalendarDropdown: React.FC<DateCalendarDropdownProps>;
    DateDatePicker: React.FC<DateDatePickerProps>;
    DateDatePickerFilledFalse: React.FC<DateDatePickerFilledFalseProps>;
    DateDatePickerFilledTrue: React.FC<DateDatePickerFilledTrueProps>;
    DateDatePickerFocusedFalse: React.FC<DateDatePickerFocusedFalseProps>;
    DateDatePickerFocusedTrue: React.FC<DateDatePickerFocusedTrueProps>;
    DateDatePickerHoverFalse: React.FC<DateDatePickerHoverFalseProps>;
    DateDatePickerHoverTrue: React.FC<DateDatePickerHoverTrueProps>;
    DateDatePickerPlaceholderFalse: React.FC<DateDatePickerPlaceholderFalseProps>;
    DateDatePickerPlaceholderTrue: React.FC<DateDatePickerPlaceholderTrueProps>;
    DateDayItem: React.FC<DateDayItemProps>;
    DateItem: React.FC<DateItemProps>;
    DateMonthYearItem: React.FC<DateMonthYearItemProps>;
    DatePickerdateItem: React.FC<DatePickerdateItemProps>;
    DateTimeSelect: React.FC<DateTimeSelectProps>;
    Divider5: React.FC<Divider5Props>;
    Down: React.FC<DownProps>;
    Edit: React.FC<EditProps>;
    Edit3: React.FC<Edit3Props>;
    HelpIconFalseFalseTop: React.FC<HelpIconFalseFalseTopProps>;
    IconAddAlt: React.FC<IconAddAltProps>;
    IconArrowLeft: React.FC<IconArrowLeftProps>;
    IconArrowRight: React.FC<IconArrowRightProps>;
    IconCalendar: React.FC<IconCalendarProps>;
    IconChevronDown: React.FC<IconChevronDownProps>;
    IconCloseOutline: React.FC<IconCloseOutlineProps>;
    IconInformation: React.FC<IconInformationProps>;
    IconSearch: React.FC<IconSearchProps>;
    IconWrapper: React.FC<IconWrapperProps>;
    Input: React.FC<InputProps>;
    InputAddonLabel: React.FC<InputAddonLabelProps>;
    InputAddonLeft: React.FC<InputAddonLeftProps>;
    InputAddonRight: React.FC<InputAddonRightProps>;
    InputNumberHandler: React.FC<InputNumberHandlerProps>;
    ProgressBar: React.FC<ProgressBarProps>;
    ScrollBar: React.FC<ScrollBarProps>;
    Setting: React.FC<SettingProps>;
    SmallDown: React.FC<SmallDownProps>;
    TextText: React.FC<TextTextProps>;
    TextText3: React.FC<TextText3Props>;
    Toggle: React.FC<ToggleProps>;
    Tooltip2: React.FC<Tooltip2Props>;
    Up: React.FC<UpProps>;
  }
}
