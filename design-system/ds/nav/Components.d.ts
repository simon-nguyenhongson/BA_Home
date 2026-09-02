// Components.d.ts — the complete catalog of the 71 component(s) in
// ./bundle/p1.js … p5.js (load them in order as classic scripts; every component
// is assigned to window). READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Alert) and usable directly in JSX.
import * as React from 'react';

// figma layer: "alert" (node 295:36052)
export interface AlertProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Anchor/Link" (node 181:33718)
export interface AnchorLinkProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "link text". */
  text1?: string;
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

// figma layer: "Carousel/Slick" (node 6292:14967)
export interface CarouselSlickProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "inactive" | "hover" | "active";
}

// figma layer: "Catetree" (node 805:38040)
export interface CatetreeProps {
  className?: string;
  style?: React.CSSProperties;
  single?: boolean;
  /** Text content; defaults to "Danh mục sản phẩm". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "check" (node 24:6041)
export interface Check2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "check" (node 295:36048)
export interface Check3Props {
  className?: string;
  style?: React.CSSProperties;
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

// figma layer: "Collapse" (node 146:25871)
export interface CollapseProps {
  className?: string;
  style?: React.CSSProperties;
  checkBox?: boolean;
  button?: boolean;
  icon?: boolean;
  /** Text content; defaults to "Test 1". */
  text1?: string;
  /** Text content; defaults to "◇\nSwap". */
  text2?: string;
  /** Text content; defaults to "Test 2". */
  text3?: string;
  /** Text content; defaults to "This is panel header 1". */
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

// figma layer: "cross" (node 295:36050)
export interface CrossProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Cursor" (node 28:7379)
export interface CursorProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "arrow" | "drag" | "hand";
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

// figma layer: "Drawer" (node 766:38752)
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

// figma layer: "Dropdown nav header menu " (node 35:45489)
export interface DropdownNavHeaderMenuProps {
  className?: string;
  style?: React.CSSProperties;
  open?: boolean;
  type?: "featured card" | "simple" | "simple 2-col";
  breakpoint?: "desktop" | "mobile";
}

// figma layer: "Edit" (node 108:18741)
export interface Edit2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Header navigation" (node 38:36705)
export interface HeaderNavigationProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "4 menu" | "5 menu" | "6 menu" | "7 menu" | "8 menu" | "no menu";
  breakpoint?: "desktop";
  /** Text content; defaults to "SOOBINZHONGSON". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
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

// figma layer: "Icon/Checkbox--checked" (node 275:59519)
export interface IconCheckboxCheckedProps {
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

// figma layer: "Icon/Chevron--up" (node 275:58610)
export interface IconChevronUpProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Close" (node 275:58609)
export interface IconCloseProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Close--outline" (node 275:58608)
export interface IconCloseOutlineProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Cube" (node 275:58387)
export interface IconCubeProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Dot-mark" (node 275:59262)
export interface IconDotMarkProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Draggable" (node 275:58607)
export interface IconDraggableProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Expand-all" (node 275:58688)
export interface IconExpandAllProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Information" (node 275:58816)
export interface IconInformationProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Locked" (node 275:59206)
export interface IconLockedProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Menu" (node 275:59776)
export interface IconMenuProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Notification" (node 275:59210)
export interface IconNotificationProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Search" (node 275:59039)
export interface IconSearchProps {
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

// figma layer: "Icon/Tag--group" (node 275:59102)
export interface IconTagGroupProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Icon/Warning--alt" (node 275:58797)
export interface IconWarningAltProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "illustration" (node 377:31429)
export interface IllustrationProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "box" | "cloud" | "documents";
  color?: "gray" | "primary";
  size?: "sm" | "md" | "lg" | "xl" | "xxl" | "tiny";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "LayoutBlocks/base" (node 116:30833)
export interface LayoutBlocksBaseProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "◇\nSwap". */
  text1?: string;
}

// figma layer: "menu" (node 295:28345)
export interface MenuProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "minus" (node 26:5610)
export interface MinusProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Modal" (node 76:63427)
export interface ModalProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "confirm" | "modal content";
  size?: "default" | "1140" | "960" | "640" | "480";
  destructive?: boolean;
}

// figma layer: "Modal button" (node 76:19687)
export interface ModalButtonProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "left sub button";
  destructive?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

// figma layer: "Modal header" (node 76:19622)
export interface ModalHeaderProps {
  className?: string;
  style?: React.CSSProperties;
  xClose?: boolean;
  type?: "sub text" | "only title";
  paddingBorder?: boolean;
  /** Text content; defaults to "Blog post published". */
  text1?: string;
  /** Text content; defaults to "This blog post has been published. Team members will be able to edit this post and republish changes.". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Nav button" (node 38:39277)
export interface NavButtonProps {
  className?: string;
  style?: React.CSSProperties;
  current?: boolean;
  size?: "md";
  theme?: "default";
  state?: "default" | "focused" | "hover";
  showBadge?: boolean;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "Nav dropdown sub menu" (node 35:42833)
export interface NavDropdownSubMenuProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "simple" | "simple 2-col" | "with recent 2" | "2-col" | "3-col" | "4-col";
  breakpoint?: "desktop" | "mobile";
  /** Text content; defaults to "Recent". */
  text1?: string;
  /** Text content; defaults to "Recent". */
  text2?: string;
  /** Text content; defaults to "Company". */
  text3?: string;
  /** Text content; defaults to "Recent". */
  text4?: string;
}

// figma layer: "Nav item menu 2" (node 35:40930)
export interface NavItemMenu2Props {
  className?: string;
  style?: React.CSSProperties;
  icon?: "no icon" | "icon lead";
  state?: "default" | "focused" | "hover";
  breakpoint?: "desktop" | "mobile";
  linkText?: boolean;
  badge?: boolean;
  subText?: boolean;
  /** Text content; defaults to "Products". */
  text1?: string;
  /** Text content; defaults to "Find the best solution for you.". */
  text2?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "_Nav menu button" (node 38:37105)
export interface NavMenuButtonProps {
  className?: string;
  style?: React.CSSProperties;
  opened?: boolean;
  state?: "default" | "focused" | "hover";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "No data" (node 30:7398)
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

// figma layer: "Pop-over" (node 553:32550)
export interface PopOverProps {
  className?: string;
  style?: React.CSSProperties;
  arrow?: "-> left" | "← right" | "↑ bottom" | "↓ top";
  title?: boolean;
  footer?: boolean;
  /** Text content; defaults to "Adjust the title, content and footer padding via Auto Layout. The available sizes are 0, 8, 16, and 24. Change the contents by swapping this Paragraph component with your own component.". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}

// figma layer: ".📦 Popover / Arrow" (node 286:26085)
export interface PopoverArrowProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Scroll bar" (node 24:4318)
export interface ScrollBarProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "horizontal" | "vertical";
  length?: "25%" | "50%" | "75%";
}

// figma layer: "Search field" (node 683:34229)
export interface SearchFieldProps {
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

// figma layer: "Skeleton Title" (node 679:35992)
export interface SkeletonTitleProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "l" | "m" | "s" | "xs" | "xxs" | "xxxs" | "tiny";
}

// figma layer: "Spinner / Static" (node 286:26151)
export interface SpinnerStaticProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "2xl" | "xl" | "lg" | "medium*" | "sm";
}

// figma layer: "Step base" (node 295:36267)
export interface StepBaseProps {
  className?: string;
  style?: React.CSSProperties;
  status?: "danger" | "default / current" | "disabled" | "incomplete" | "success" | "warning";
  size?: "md" | "sm" | "xs";
  /** Text content; defaults to "1". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: ".📦Step / Indicator" (node 295:36297)
export interface StepIndicatorProps {
  className?: string;
  style?: React.CSSProperties;
  status?: "default / current" | "incomplete" | "disabled" | "loading" | "success" | "warning" | "danger";
  size?: "md" | "sm" | "xs";
  /** Text content; defaults to "1". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Step items" (node 295:37414)
export interface StepItemsProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "md" | "xs";
  position?: "first" | "last" | "middle";
  status?: "danger" | "default / current" | "disabled" | "incomplete" | "success" | "warning";
  /** Text content; defaults to "Step name". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Steps" (node 295:38115)
export interface StepsProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md";
  steps?: "3" | "4" | "5";
}

// figma layer: "Tab button base" (node 63:21372)
export interface TabButtonBaseProps {
  className?: string;
  style?: React.CSSProperties;
  current?: boolean;
  type?: "button white" | "underline";
  fullWidth?: "false";
  badge?: boolean;
  state?: "default" | "focus" | "hover";
  /** Text content; defaults to "My details". */
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

// figma layer: "Title" (node 286:26094)
export interface TitleProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "lg" | "medium*" | "sm" | "xs" | "xx-small" | "xxx-small";
  text?: string;
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

// figma layer: "Tree view item" (node 730:51232)
export interface TreeViewItemProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "disable" | "load" | "selected" | "current";
  type?: "default" | "checkbox" | "load" | "drag" | "user";
  level?: "closed" | "open" | "sub end";
  badge?: boolean;
  /** Text content; defaults to "Nav item (closed)". */
  text1?: string;
  /** Text content; defaults to "Name". */
  text2?: string;
  /** Text content; defaults to "Title". */
  text3?: string;
  /** Text content; defaults to "Email". */
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

declare const Alert: React.FC<AlertProps>;
declare const AnchorLink: React.FC<AnchorLinkProps>;
declare const Ava: React.FC<AvaProps>;
declare const Badge2: React.FC<Badge2Props>;
declare const Button: React.FC<ButtonProps>;
declare const CarouselSlick: React.FC<CarouselSlickProps>;
declare const Catetree: React.FC<CatetreeProps>;
declare const Check2: React.FC<Check2Props>;
declare const Check3: React.FC<Check3Props>;
declare const Checkbox: React.FC<CheckboxProps>;
declare const CheckboxBase: React.FC<CheckboxBaseProps>;
declare const CheckboxIcon: React.FC<CheckboxIconProps>;
declare const Collapse: React.FC<CollapseProps>;
declare const Cross: React.FC<CrossProps>;
declare const Cursor: React.FC<CursorProps>;
declare const Divider2: React.FC<Divider2Props>;
declare const Drawer: React.FC<DrawerProps>;
declare const DropdownNavHeaderMenu: React.FC<DropdownNavHeaderMenuProps>;
declare const Edit2: React.FC<Edit2Props>;
declare const HeaderNavigation: React.FC<HeaderNavigationProps>;
declare const HelpIcon: React.FC<HelpIconProps>;
declare const IconAddAlt: React.FC<IconAddAltProps>;
declare const IconArrowUp: React.FC<IconArrowUpProps>;
declare const IconCheckboxChecked: React.FC<IconCheckboxCheckedProps>;
declare const IconCheckmark: React.FC<IconCheckmarkProps>;
declare const IconChevronDown: React.FC<IconChevronDownProps>;
declare const IconChevronRight: React.FC<IconChevronRightProps>;
declare const IconChevronUp: React.FC<IconChevronUpProps>;
declare const IconClose: React.FC<IconCloseProps>;
declare const IconCloseOutline: React.FC<IconCloseOutlineProps>;
declare const IconCube: React.FC<IconCubeProps>;
declare const IconDotMark: React.FC<IconDotMarkProps>;
declare const IconDraggable: React.FC<IconDraggableProps>;
declare const IconExpandAll: React.FC<IconExpandAllProps>;
declare const IconInformation: React.FC<IconInformationProps>;
declare const IconLocked: React.FC<IconLockedProps>;
declare const IconMenu: React.FC<IconMenuProps>;
declare const IconNotification: React.FC<IconNotificationProps>;
declare const IconSearch: React.FC<IconSearchProps>;
declare const IconSubtract: React.FC<IconSubtractProps>;
declare const IconTag: React.FC<IconTagProps>;
declare const IconTagGroup: React.FC<IconTagGroupProps>;
declare const IconWarningAlt: React.FC<IconWarningAltProps>;
declare const Illustration: React.FC<IllustrationProps>;
declare const LayoutBlocksBase: React.FC<LayoutBlocksBaseProps>;
declare const Menu: React.FC<MenuProps>;
declare const Minus: React.FC<MinusProps>;
declare const Modal: React.FC<ModalProps>;
declare const ModalButton: React.FC<ModalButtonProps>;
declare const ModalHeader: React.FC<ModalHeaderProps>;
declare const NavButton: React.FC<NavButtonProps>;
declare const NavDropdownSubMenu: React.FC<NavDropdownSubMenuProps>;
declare const NavItemMenu2: React.FC<NavItemMenu2Props>;
declare const NavMenuButton: React.FC<NavMenuButtonProps>;
declare const NoData: React.FC<NoDataProps>;
declare const PopOver: React.FC<PopOverProps>;
declare const PopoverArrow: React.FC<PopoverArrowProps>;
declare const ScrollBar: React.FC<ScrollBarProps>;
declare const SearchField: React.FC<SearchFieldProps>;
declare const SkeletonTitle: React.FC<SkeletonTitleProps>;
declare const SpinnerStatic: React.FC<SpinnerStaticProps>;
declare const StepBase: React.FC<StepBaseProps>;
declare const StepIndicator: React.FC<StepIndicatorProps>;
declare const StepItems: React.FC<StepItemsProps>;
declare const Steps: React.FC<StepsProps>;
declare const TabButtonBase: React.FC<TabButtonBaseProps>;
declare const TextParagraph2: React.FC<TextParagraph2Props>;
declare const TextText2: React.FC<TextText2Props>;
declare const Title: React.FC<TitleProps>;
declare const Tooltip: React.FC<TooltipProps>;
declare const TreeViewItem: React.FC<TreeViewItemProps>;
declare global {
  interface Window {
    Alert: React.FC<AlertProps>;
    AnchorLink: React.FC<AnchorLinkProps>;
    Ava: React.FC<AvaProps>;
    Badge2: React.FC<Badge2Props>;
    Button: React.FC<ButtonProps>;
    CarouselSlick: React.FC<CarouselSlickProps>;
    Catetree: React.FC<CatetreeProps>;
    Check2: React.FC<Check2Props>;
    Check3: React.FC<Check3Props>;
    Checkbox: React.FC<CheckboxProps>;
    CheckboxBase: React.FC<CheckboxBaseProps>;
    CheckboxIcon: React.FC<CheckboxIconProps>;
    Collapse: React.FC<CollapseProps>;
    Cross: React.FC<CrossProps>;
    Cursor: React.FC<CursorProps>;
    Divider2: React.FC<Divider2Props>;
    Drawer: React.FC<DrawerProps>;
    DropdownNavHeaderMenu: React.FC<DropdownNavHeaderMenuProps>;
    Edit2: React.FC<Edit2Props>;
    HeaderNavigation: React.FC<HeaderNavigationProps>;
    HelpIcon: React.FC<HelpIconProps>;
    IconAddAlt: React.FC<IconAddAltProps>;
    IconArrowUp: React.FC<IconArrowUpProps>;
    IconCheckboxChecked: React.FC<IconCheckboxCheckedProps>;
    IconCheckmark: React.FC<IconCheckmarkProps>;
    IconChevronDown: React.FC<IconChevronDownProps>;
    IconChevronRight: React.FC<IconChevronRightProps>;
    IconChevronUp: React.FC<IconChevronUpProps>;
    IconClose: React.FC<IconCloseProps>;
    IconCloseOutline: React.FC<IconCloseOutlineProps>;
    IconCube: React.FC<IconCubeProps>;
    IconDotMark: React.FC<IconDotMarkProps>;
    IconDraggable: React.FC<IconDraggableProps>;
    IconExpandAll: React.FC<IconExpandAllProps>;
    IconInformation: React.FC<IconInformationProps>;
    IconLocked: React.FC<IconLockedProps>;
    IconMenu: React.FC<IconMenuProps>;
    IconNotification: React.FC<IconNotificationProps>;
    IconSearch: React.FC<IconSearchProps>;
    IconSubtract: React.FC<IconSubtractProps>;
    IconTag: React.FC<IconTagProps>;
    IconTagGroup: React.FC<IconTagGroupProps>;
    IconWarningAlt: React.FC<IconWarningAltProps>;
    Illustration: React.FC<IllustrationProps>;
    LayoutBlocksBase: React.FC<LayoutBlocksBaseProps>;
    Menu: React.FC<MenuProps>;
    Minus: React.FC<MinusProps>;
    Modal: React.FC<ModalProps>;
    ModalButton: React.FC<ModalButtonProps>;
    ModalHeader: React.FC<ModalHeaderProps>;
    NavButton: React.FC<NavButtonProps>;
    NavDropdownSubMenu: React.FC<NavDropdownSubMenuProps>;
    NavItemMenu2: React.FC<NavItemMenu2Props>;
    NavMenuButton: React.FC<NavMenuButtonProps>;
    NoData: React.FC<NoDataProps>;
    PopOver: React.FC<PopOverProps>;
    PopoverArrow: React.FC<PopoverArrowProps>;
    ScrollBar: React.FC<ScrollBarProps>;
    SearchField: React.FC<SearchFieldProps>;
    SkeletonTitle: React.FC<SkeletonTitleProps>;
    SpinnerStatic: React.FC<SpinnerStaticProps>;
    StepBase: React.FC<StepBaseProps>;
    StepIndicator: React.FC<StepIndicatorProps>;
    StepItems: React.FC<StepItemsProps>;
    Steps: React.FC<StepsProps>;
    TabButtonBase: React.FC<TabButtonBaseProps>;
    TextParagraph2: React.FC<TextParagraph2Props>;
    TextText2: React.FC<TextText2Props>;
    Title: React.FC<TitleProps>;
    Tooltip: React.FC<TooltipProps>;
    TreeViewItem: React.FC<TreeViewItemProps>;
  }
}
