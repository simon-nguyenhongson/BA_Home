// Components.d.ts — the complete catalog of the 62 component(s) in
// ./bundle/p1.js … p5.js (load them in order as classic scripts; every component
// is assigned to window). READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Anchor) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Anchor" (node 181:34318)
export interface AnchorProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "link" | "link-selected" | "link-with-subs";
  /** Text content; defaults to "link text". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "arrowDown" (node 286:26212)
export interface ArrowDown2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Ava" (node 28:5628)
export interface AvaProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "xs" | "sm" | "md" | "lg";
  text?: boolean;
  /** Text content; defaults to "EX". */
  text1?: string;
}

// figma layer: "Avatar" (node 3:3086)
export interface AvatarProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  placeholder?: boolean;
  text?: boolean;
  statusIcon?: "false" | "online indicator" | "company" | "verified";
  state?: "default" | "hover" | "focused";
  /** Text content; defaults to "OR". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "_Avatar company icon" (node 3:3036)
export interface AvatarCompanyIconProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
}

// figma layer: "Avatar label group" (node 30:11646)
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

// figma layer: "_Avatar online indicator" (node 3:3043)
export interface AvatarOnlineIndicatorProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  online?: boolean;
}

// figma layer: "Badge" (node 3:3501)
export interface BadgeProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
  icon?: "false" | "dot" | "country" | "x close" | "avatar" | "icon trailing" | "icon leading" | "only";
  color?: "gray" | "primary" | "error" | "warning" | "success" | "blue light" | "blue" | "indigo" | "purple" | "pink" | "rosé" | "orange" | "blue gray";
  outline?: boolean;
  flagSwap?: React.ReactNode;
  iconTrailingSwap?: React.ReactNode;
  iconLeadingSwap?: React.ReactNode;
  /** Text content; defaults to "Label". */
  text1?: string;
}

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

// figma layer: "Badge/Dot" (node 14960:15336)
export interface BadgeDotProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "pink" | "red" | "yellow" | "orange" | "cyan" | "green" | "blue" | "purple" | "geek blue" | "magenta" | "volcano" | "gold" | "lime" | "gray" | "processing" | "processing-animating";
}

// figma layer: "Badge/Perfromace" (node 4936:20615)
export interface BadgePerfromaceProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "1st" | "2nd" | "3rd" | "variant4" | "variant5";
  /** Text content; defaults to "Star". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Badge/Ranking" (node 4936:18555)
export interface BadgeRankingProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "other" | "1st" | "2nd" | "3rd";
  /** Text content; defaults to "1". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Badge/Status" (node 14960:15465)
export interface BadgeStatusProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "success" | "error" | "default" | "warning" | "processing";
  /** Text content; defaults to "Success". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: ".📦Breadcrumb" (node 296:30444)
export interface BreadcrumbProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "collapsed" | "go back";
  active?: boolean;
  /** Text content; defaults to "Breadcrumb". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Breadcrumb item" (node 295:27911)
export interface BreadcrumbItemProps {
  className?: string;
  style?: React.CSSProperties;
  position?: "first" | "last" | "middle";
  linked?: boolean;
  collapsed?: boolean;
  /** Text content; defaults to "Breadcrumb". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Breadcrumbs" (node 295:28342)
export interface BreadcrumbsProps {
  className?: string;
  style?: React.CSSProperties;
  breadcrumb?: "2" | "3" | "4" | "5";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Breadcrumbs normal" (node 296:30899)
export interface BreadcrumbsNormalProps {
  className?: string;
  style?: React.CSSProperties;
  count?: "1" | "2" | "3" | "4" | "many";
  goBack?: boolean;
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

// figma layer: "Button" (node 766:36193)
export interface Button6Props {
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  style2?: "default*" | "filled" | "empty";
  color?: "primary*" | "text" | "success" | "warning" | "danger" | "accent" | "inverted";
  size?: "medium*" | "sm" | "extra small";
  disabled?: boolean;
  loading?: boolean;
  iconOnly?: boolean;
  text?: string;
  iconLeft?: boolean;
  loadingText?: string;
  minWidth?: boolean;
  iconRight?: boolean;
  iconLeft2?: React.ReactNode;
  iconRight2?: React.ReactNode;
  leftSpinner?: boolean;
  rightSpinner?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Button close X" (node 49:27950)
export interface ButtonCloseXProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
  color?: "gray" | "primary";
  theme?: "light" | "dark";
  state?: "default" | "hover" | "focused";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Button group" (node 295:35586)
export interface ButtonGroupProps {
  className?: string;
  style?: React.CSSProperties;
  icon?: "false" | "leading" | "only";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

// figma layer: "Button group items" (node 295:35204)
export interface ButtonGroupItemsProps {
  className?: string;
  style?: React.CSSProperties;
  current?: boolean;
  icon?: "false" | "leading" | "only";
  state?: "default" | "disabled" | "focused" | "hover";
  badge?: boolean;
  /** Text content; defaults to "Text". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Callout" (node 766:36723)
export interface CalloutProps {
  className?: string;
  style?: React.CSSProperties;
  color?: "success" | "danger" | "warning" | "primary";
  size?: "md" | "sm";
  icon?: boolean;
  icon2?: React.ReactNode;
  hasContent?: boolean;
  button?: boolean;
  description?: boolean;
}

// figma layer: "check" (node 24:6041)
export interface CheckProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Check group" (node 28:29962)
export interface CheckGroupProps {
  className?: string;
  style?: React.CSSProperties;
  selected?: boolean;
  type?: "avatar" | "checkbox" | "radio button";
  state?: "default" | "disabled" | "focused" | "hover";
  subText?: boolean;
  /** Text content; defaults to "Text demo". */
  text1?: string;
  /** Text content; defaults to "Sub text demo". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Checkbox" (node 30:11981)
export interface CheckboxProps {
  className?: string;
  style?: React.CSSProperties;
  checked?: boolean;
  indeterminate?: boolean;
  size?: "sm" | "md";
  type?: "checkbox" | "radio";
  text?: boolean;
  state?: "default" | "hover" | "focused" | "disabled";
  supportingText?: boolean;
  /** Text content; defaults to "Remember me". */
  text1?: string;
  /** Text content; defaults to "Save my login details for next time.". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "_Checkbox base" (node 30:11892)
export interface CheckboxBaseProps {
  className?: string;
  style?: React.CSSProperties;
  checked?: boolean;
  indeterminate?: boolean;
  size?: "sm" | "md";
  type?: "checkbox" | "radio" | "check circle";
  state?: "default" | "hover" | "focused" | "disbaled";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "_Checkbox base/False/False/sm/Radio/Default" (node 26:5887)
export interface CheckboxBaseFalseFalseSmProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "_Checkbox base/False/False/sm/Radio/Disbaled" (node 26:5890)
export interface CheckboxBaseFalseFalseSm2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "_Checkbox base/False/False/sm/Radio/Focused" (node 26:5893)
export interface CheckboxBaseFalseFalseSm3Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "_Checkbox base/False/False/sm/Radio/Hover" (node 26:5896)
export interface CheckboxBaseFalseFalseSm4Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "_Checkbox base/True/False/sm/Radio/Default" (node 26:5902)
export interface CheckboxBaseTrueFalseSmProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "_Checkbox base/True/False/sm/Radio/Disbaled" (node 26:5910)
export interface CheckboxBaseTrueFalseSm2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "_Checkbox base/True/False/sm/Radio/Focused" (node 26:5918)
export interface CheckboxBaseTrueFalseSm3Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "_Checkbox base/True/False/sm/Radio/Hover" (node 26:5926)
export interface CheckboxBaseTrueFalseSm4Props {
  className?: string;
  style?: React.CSSProperties;
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

// figma layer: "Checkbox text" (node 26:7109)
export interface CheckboxTextProps {
  className?: string;
  style?: React.CSSProperties;
  checked?: boolean;
  indeterminate?: boolean;
  type?: "checkbox" | "radio";
  text?: boolean;
  state?: "default" | "disabled" | "focused" | "hover";
  subtext?: boolean;
  /** Text content; defaults to "Remember me". */
  text1?: string;
  /** Text content; defaults to "Save my login details for next time.". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Divider" (node 24:4230)
export interface DividerProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: boolean;
  /** Text content; defaults to "Text line". */
  text1?: string;
}

// figma layer: "Divider" (node 146:24522)
export interface Divider2Props {
  className?: string;
  style?: React.CSSProperties;
  type?: "horizontal" | "vertical";
  dashed?: boolean;
  title?: boolean;
  orientation?: "left" | "center" | "right" | ".n/a";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Edit" (node 108:18741)
export interface Edit2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "iInCircle" (node 766:36716)
export interface IInCircleProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Add--alt" (node 275:58629)
export interface IconAddAltProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Arrow--up" (node 275:58618)
export interface IconArrowUpProps {
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

// figma layer: "Icon/Chevron--left" (node 275:58612)
export interface IconChevronLeftProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Close" (node 275:58609)
export interface IconCloseProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Recommend" (node 275:58653)
export interface IconRecommendProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Star--filled" (node 275:59196)
export interface IconStarFilledProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Subtract" (node 275:58599)
export interface IconSubtractProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Tag" (node 275:58644)
export interface IconTagProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Tag--import" (node 275:59100)
export interface IconTagImportProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "minus" (node 26:5610)
export interface MinusProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "plusInCircle" (node 286:26179)
export interface PlusInCircle2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "popout" (node 296:30415)
export interface PopoutProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Spinner / Animated" (node 766:36071)
export interface SpinnerAnimatedProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "2xl" | "xl" | "lg" | "medium*" | "sm";
  keyframe?: "1" | "2" | "3" | "4";
}

// figma layer: "Text - Link" (node 296:30419)
export interface TextLinkProps {
  className?: string;
  style?: React.CSSProperties;
  textScale?: "md" | "sm" | "xs";
  external?: boolean;
  blockform?: boolean;
  /** Text content; defaults to "Medium link". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Text - Paragraph" (node 766:36054)
export interface TextParagraph2Props {
  className?: string;
  style?: React.CSSProperties;
  size?: "md" | "sm" | "xs";
  text?: string;
}

// figma layer: "Text/Text" (node 108:18745)
export interface TextText2Props {
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

// figma layer: "user-01" (node 3:3059)
export interface User01Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Verified tick" (node 3:3061)
export interface VerifiedTickProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
}

// figma layer: "x-close" (node 3:3028)
export interface XCloseProps {
  className?: string;
  style?: React.CSSProperties;
}

declare const Anchor: React.FC<AnchorProps>;
declare const ArrowDown2: React.FC<ArrowDown2Props>;
declare const Ava: React.FC<AvaProps>;
declare const Avatar: React.FC<AvatarProps>;
declare const AvatarCompanyIcon: React.FC<AvatarCompanyIconProps>;
declare const AvatarLabelGroup: React.FC<AvatarLabelGroupProps>;
declare const AvatarOnlineIndicator: React.FC<AvatarOnlineIndicatorProps>;
declare const Badge: React.FC<BadgeProps>;
declare const Badge2: React.FC<Badge2Props>;
declare const BadgeDot: React.FC<BadgeDotProps>;
declare const BadgePerfromace: React.FC<BadgePerfromaceProps>;
declare const BadgeRanking: React.FC<BadgeRankingProps>;
declare const BadgeStatus: React.FC<BadgeStatusProps>;
declare const Breadcrumb: React.FC<BreadcrumbProps>;
declare const BreadcrumbItem: React.FC<BreadcrumbItemProps>;
declare const Breadcrumbs: React.FC<BreadcrumbsProps>;
declare const BreadcrumbsNormal: React.FC<BreadcrumbsNormalProps>;
declare const Button: React.FC<ButtonProps>;
declare const Button6: React.FC<Button6Props>;
declare const ButtonCloseX: React.FC<ButtonCloseXProps>;
declare const ButtonGroup: React.FC<ButtonGroupProps>;
declare const ButtonGroupItems: React.FC<ButtonGroupItemsProps>;
declare const Callout: React.FC<CalloutProps>;
declare const Check: React.FC<CheckProps>;
declare const CheckGroup: React.FC<CheckGroupProps>;
declare const Checkbox: React.FC<CheckboxProps>;
declare const CheckboxBase: React.FC<CheckboxBaseProps>;
declare const CheckboxBaseFalseFalseSm: React.FC<CheckboxBaseFalseFalseSmProps>;
declare const CheckboxBaseFalseFalseSm2: React.FC<CheckboxBaseFalseFalseSm2Props>;
declare const CheckboxBaseFalseFalseSm3: React.FC<CheckboxBaseFalseFalseSm3Props>;
declare const CheckboxBaseFalseFalseSm4: React.FC<CheckboxBaseFalseFalseSm4Props>;
declare const CheckboxBaseTrueFalseSm: React.FC<CheckboxBaseTrueFalseSmProps>;
declare const CheckboxBaseTrueFalseSm2: React.FC<CheckboxBaseTrueFalseSm2Props>;
declare const CheckboxBaseTrueFalseSm3: React.FC<CheckboxBaseTrueFalseSm3Props>;
declare const CheckboxBaseTrueFalseSm4: React.FC<CheckboxBaseTrueFalseSm4Props>;
declare const CheckboxIcon: React.FC<CheckboxIconProps>;
declare const CheckboxText: React.FC<CheckboxTextProps>;
declare const Divider: React.FC<DividerProps>;
declare const Divider2: React.FC<Divider2Props>;
declare const Edit2: React.FC<Edit2Props>;
declare const IInCircle: React.FC<IInCircleProps>;
declare const IconAddAlt: React.FC<IconAddAltProps>;
declare const IconArrowUp: React.FC<IconArrowUpProps>;
declare const IconCheckmark: React.FC<IconCheckmarkProps>;
declare const IconChevronDown: React.FC<IconChevronDownProps>;
declare const IconChevronLeft: React.FC<IconChevronLeftProps>;
declare const IconClose: React.FC<IconCloseProps>;
declare const IconRecommend: React.FC<IconRecommendProps>;
declare const IconStarFilled: React.FC<IconStarFilledProps>;
declare const IconSubtract: React.FC<IconSubtractProps>;
declare const IconTag: React.FC<IconTagProps>;
declare const IconTagImport: React.FC<IconTagImportProps>;
declare const Minus: React.FC<MinusProps>;
declare const PlusInCircle2: React.FC<PlusInCircle2Props>;
declare const Popout: React.FC<PopoutProps>;
declare const SpinnerAnimated: React.FC<SpinnerAnimatedProps>;
declare const TextLink: React.FC<TextLinkProps>;
declare const TextParagraph2: React.FC<TextParagraph2Props>;
declare const TextText2: React.FC<TextText2Props>;
declare const User01: React.FC<User01Props>;
declare const VerifiedTick: React.FC<VerifiedTickProps>;
declare const XClose: React.FC<XCloseProps>;
declare global {
  interface Window {
    Anchor: React.FC<AnchorProps>;
    ArrowDown2: React.FC<ArrowDown2Props>;
    Ava: React.FC<AvaProps>;
    Avatar: React.FC<AvatarProps>;
    AvatarCompanyIcon: React.FC<AvatarCompanyIconProps>;
    AvatarLabelGroup: React.FC<AvatarLabelGroupProps>;
    AvatarOnlineIndicator: React.FC<AvatarOnlineIndicatorProps>;
    Badge: React.FC<BadgeProps>;
    Badge2: React.FC<Badge2Props>;
    BadgeDot: React.FC<BadgeDotProps>;
    BadgePerfromace: React.FC<BadgePerfromaceProps>;
    BadgeRanking: React.FC<BadgeRankingProps>;
    BadgeStatus: React.FC<BadgeStatusProps>;
    Breadcrumb: React.FC<BreadcrumbProps>;
    BreadcrumbItem: React.FC<BreadcrumbItemProps>;
    Breadcrumbs: React.FC<BreadcrumbsProps>;
    BreadcrumbsNormal: React.FC<BreadcrumbsNormalProps>;
    Button: React.FC<ButtonProps>;
    Button6: React.FC<Button6Props>;
    ButtonCloseX: React.FC<ButtonCloseXProps>;
    ButtonGroup: React.FC<ButtonGroupProps>;
    ButtonGroupItems: React.FC<ButtonGroupItemsProps>;
    Callout: React.FC<CalloutProps>;
    Check: React.FC<CheckProps>;
    CheckGroup: React.FC<CheckGroupProps>;
    Checkbox: React.FC<CheckboxProps>;
    CheckboxBase: React.FC<CheckboxBaseProps>;
    CheckboxBaseFalseFalseSm: React.FC<CheckboxBaseFalseFalseSmProps>;
    CheckboxBaseFalseFalseSm2: React.FC<CheckboxBaseFalseFalseSm2Props>;
    CheckboxBaseFalseFalseSm3: React.FC<CheckboxBaseFalseFalseSm3Props>;
    CheckboxBaseFalseFalseSm4: React.FC<CheckboxBaseFalseFalseSm4Props>;
    CheckboxBaseTrueFalseSm: React.FC<CheckboxBaseTrueFalseSmProps>;
    CheckboxBaseTrueFalseSm2: React.FC<CheckboxBaseTrueFalseSm2Props>;
    CheckboxBaseTrueFalseSm3: React.FC<CheckboxBaseTrueFalseSm3Props>;
    CheckboxBaseTrueFalseSm4: React.FC<CheckboxBaseTrueFalseSm4Props>;
    CheckboxIcon: React.FC<CheckboxIconProps>;
    CheckboxText: React.FC<CheckboxTextProps>;
    Divider: React.FC<DividerProps>;
    Divider2: React.FC<Divider2Props>;
    Edit2: React.FC<Edit2Props>;
    IInCircle: React.FC<IInCircleProps>;
    IconAddAlt: React.FC<IconAddAltProps>;
    IconArrowUp: React.FC<IconArrowUpProps>;
    IconCheckmark: React.FC<IconCheckmarkProps>;
    IconChevronDown: React.FC<IconChevronDownProps>;
    IconChevronLeft: React.FC<IconChevronLeftProps>;
    IconClose: React.FC<IconCloseProps>;
    IconRecommend: React.FC<IconRecommendProps>;
    IconStarFilled: React.FC<IconStarFilledProps>;
    IconSubtract: React.FC<IconSubtractProps>;
    IconTag: React.FC<IconTagProps>;
    IconTagImport: React.FC<IconTagImportProps>;
    Minus: React.FC<MinusProps>;
    PlusInCircle2: React.FC<PlusInCircle2Props>;
    Popout: React.FC<PopoutProps>;
    SpinnerAnimated: React.FC<SpinnerAnimatedProps>;
    TextLink: React.FC<TextLinkProps>;
    TextParagraph2: React.FC<TextParagraph2Props>;
    TextText2: React.FC<TextText2Props>;
    User01: React.FC<User01Props>;
    VerifiedTick: React.FC<VerifiedTickProps>;
    XClose: React.FC<XCloseProps>;
  }
}
