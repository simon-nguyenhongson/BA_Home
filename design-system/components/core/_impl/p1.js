import React from "react";
import {
  Badge
} from "../_impl.js";

// Implementations materialized from the Figma source. Internal module —
// consumers import the named component files in this directory instead.

// Components bundle — 62 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 275:58629 Icon/Add--alt
function IconAddAlt(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "transparent",
      position: "relative",
      color: "inherit",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 14,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 275:58613 Icon/Chevron--down
function IconChevronDown(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "transparent",
      position: "relative",
      color: "inherit",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 5.700,
    viewBox: "0 0 10 5.700",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 5.3,
      width: 10,
      height: 5.7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 18:7934 Button (240 variants)
const __venc_Button = v => String(v).replace(/[%|=]/g, encodeURIComponent);

const __vkey_Button = p => "size=" + __venc_Button(p.size) + '|' + "hierarchy=" + __venc_Button(p.hierarchy) + '|' + "icon=" + __venc_Button(p.icon) + '|' + "destructive=" + __venc_Button(p.destructive) + '|' + "state=" + __venc_Button(p.state);

function Button(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "h24px",
    hierarchy: _p.hierarchy ?? "primary",
    icon: _p.icon ?? "default",
    destructive: _p.destructive ?? false,
    state: _p.state ?? "default",
    leadIcon: _p.leadIcon ?? true,
    rightIcon: _p.rightIcon ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(217,45,32)",
      boxShadow: "inset 0 0 0 1px rgb(217,45,32), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(217,45,32)",
      boxShadow: "inset 0 0 0 1px rgb(217,45,32), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 12px 10px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(217,45,32)",
      boxShadow: "inset 0 0 0 1px rgb(217,45,32), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 8px 10px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(239,244,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(105,65,198)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(239,244,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(105,65,198)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(239,244,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(105,65,198)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(254,243,242)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(180,35,24)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(254,243,242)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(180,35,24)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(254,243,242)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(180,35,24)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(105,65,198)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(0,78,235)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(0,78,235)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(0,78,235)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(180,35,24)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(180,35,24)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 9px 0px 9px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(180,35,24)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(180,35,24)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(217,45,32)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(180,35,24)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(180,35,24)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(180,35,24)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(254,205,202)",
      boxShadow: "inset 0 0 0 1px rgb(254,205,202), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(254,205,202)",
      boxShadow: "inset 0 0 0 1px rgb(254,205,202), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 12px 10px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(254,205,202)",
      boxShadow: "inset 0 0 0 1px rgb(254,205,202), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 8px 10px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(245,248,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(214,187,251)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(245,248,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(214,187,251)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(245,248,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(214,187,251)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,251,250)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(253,162,155)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,251,250)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(253,162,155)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(255,251,250)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(253,162,155)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(208,213,221)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body36 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(208,213,221)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body37 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(208,213,221)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body38 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(208,213,221)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body39 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(208,213,221)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body40 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(253,162,155)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body41 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(253,162,155)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body42 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 9px 0px 9px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(253,162,155)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body43 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(253,162,155)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body44 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(253,162,155)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body45 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(254,205,202), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(253,162,155)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body46 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(254,205,202), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(253,162,155)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body47 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(254,205,202), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(253,162,155)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body48 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(217,45,32)",
      boxShadow: "inset 0 0 0 1px rgb(217,45,32), 0px 1px 2px 0px rgba(16,24,40,0.05), 0px 0px 0px 4px rgb(254,228,226)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body49 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(217,45,32)",
      boxShadow: "inset 0 0 0 1px rgb(217,45,32), 0px 1px 2px 0px rgba(16,24,40,0.05), 0px 0px 0px 4px rgb(254,228,226)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 12px 10px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body50 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(217,45,32)",
      boxShadow: "inset 0 0 0 1px rgb(217,45,32), 0px 1px 2px 0px rgba(16,24,40,0.05), 0px 0px 0px 4px rgb(254,228,226)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 8px 10px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body51 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(254,243,242)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(180,35,24)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body52 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05), 0px 0px 0px 4px rgb(254,228,226)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(180,35,24)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body53 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05), 0px 0px 0px 4px rgb(254,228,226)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(180,35,24)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body54 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05), 0px 0px 0px 4px rgb(254,228,226)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(180,35,24)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body55 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(180,35,24)",
      boxShadow: "inset 0 0 0 1px rgb(180,35,24), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body56 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(180,35,24)",
      boxShadow: "inset 0 0 0 1px rgb(180,35,24), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 12px 10px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body57 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(180,35,24)",
      boxShadow: "inset 0 0 0 1px rgb(180,35,24), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 8px 10px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body58 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(209,224,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(83,56,158)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body59 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(209,224,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(83,56,158)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body60 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(209,224,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(83,56,158)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body61 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(254,228,226)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(145,32,24)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body62 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(254,228,226)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(145,32,24)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body63 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(254,228,226)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(145,32,24)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body64 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(239,244,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(83,56,158)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body65 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(239,244,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(0,64,193)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body66 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(239,244,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(0,64,193)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body67 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(0,78,235)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body68 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(0,64,193)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body69 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(29,41,57)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body70 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(249,250,251)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body71 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(249,250,251)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body72 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(249,250,251)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body73 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(254,243,242)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(145,32,24)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body74 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(254,243,242)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(145,32,24)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body75 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(254,243,242)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 9px 0px 9px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(145,32,24)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body76 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(145,32,24)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body77 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(180,35,24)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body78 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(254,243,242)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(145,32,24)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body79 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(254,243,242)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(145,32,24)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body80 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(254,243,242)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(145,32,24)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body81 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(21,94,239)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body82 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(21,94,239)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body83 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(21,94,239)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body84 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(217,45,32)",
      boxShadow: "inset 0 0 0 1px rgb(217,45,32), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body85 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(217,45,32)",
      boxShadow: "inset 0 0 0 1px rgb(217,45,32), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body86 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(217,45,32)",
      boxShadow: "inset 0 0 0 1px rgb(217,45,32), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body87 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(239,244,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body88 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(239,244,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body89 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(239,244,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body90 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(254,243,242)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body91 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(254,243,242)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body92 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(254,243,242)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body93 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body94 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body95 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body96 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body97 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body98 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body99 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body100 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body101 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body102 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(178,204,255)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body103 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(178,204,255)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body104 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(178,204,255)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body105 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(254,205,202)",
      boxShadow: "inset 0 0 0 1px rgb(254,205,202), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body106 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(254,205,202)",
      boxShadow: "inset 0 0 0 1px rgb(254,205,202), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body107 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(254,205,202)",
      boxShadow: "inset 0 0 0 1px rgb(254,205,202), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body108 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(245,248,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body109 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(245,248,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body110 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(245,248,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body111 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,251,250)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body112 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,251,250)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body113 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(255,251,250)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body114 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body115 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body116 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body117 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(254,205,202), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body118 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(254,205,202), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body119 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(254,205,202), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body120 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(21,94,239)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.05), 0px 0px 0px 4px rgb(209,224,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body121 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(21,94,239)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.05), 0px 0px 0px 4px rgb(209,224,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body122 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(21,94,239)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.05), 0px 0px 0px 4px rgb(209,224,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body123 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(217,45,32)",
      boxShadow: "inset 0 0 0 1px rgb(217,45,32), 0px 1px 2px 0px rgba(16,24,40,0.05), 0px 0px 0px 4px rgb(254,228,226)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body124 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(217,45,32)",
      boxShadow: "inset 0 0 0 1px rgb(217,45,32), 0px 1px 2px 0px rgba(16,24,40,0.05), 0px 0px 0px 4px rgb(254,228,226)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body125 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(217,45,32)",
      boxShadow: "inset 0 0 0 1px rgb(217,45,32), 0px 1px 2px 0px rgba(16,24,40,0.05), 0px 0px 0px 4px rgb(254,228,226)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body126 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05), 0px 0px 0px 4px rgb(242,244,247)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body127 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05), 0px 0px 0px 4px rgb(242,244,247)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body128 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05), 0px 0px 0px 4px rgb(242,244,247)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body129 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05), 0px 0px 0px 4px rgb(254,228,226)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body130 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05), 0px 0px 0px 4px rgb(254,228,226)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body131 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05), 0px 0px 0px 4px rgb(254,228,226)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body132 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(0,64,193)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body133 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(0,64,193)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 8px 8px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body134 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(0,64,193)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body135 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(180,35,24)",
      boxShadow: "inset 0 0 0 1px rgb(180,35,24), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body136 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(180,35,24)",
      boxShadow: "inset 0 0 0 1px rgb(180,35,24), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body137 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(180,35,24)",
      boxShadow: "inset 0 0 0 1px rgb(180,35,24), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body138 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(209,224,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body139 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(209,224,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body140 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(209,224,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body141 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(254,228,226)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body142 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(254,228,226)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body143 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(254,228,226)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body144 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(249,250,251)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body145 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(249,250,251)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body146 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(249,250,251)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body147 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body148 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body149 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body150 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(254,243,242)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "12px 12px 12px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body151 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(254,243,242)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body152 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(254,243,242)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 4px 4px 4px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)));
  const __body153 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body154 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body155 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body156 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(208,213,221)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body157 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(208,213,221)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body158 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(208,213,221)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body159 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05), 0px 0px 0px 4px rgb(242,244,247)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body160 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05), 0px 0px 0px 4px rgb(242,244,247)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body161 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05), 0px 0px 0px 4px rgb(242,244,247)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body162 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(29,41,57)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body163 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(29,41,57)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body164 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(29,41,57)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body165 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(21,94,239)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body166 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(21,94,239)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body167 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(21,94,239)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body168 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(178,204,255)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body169 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(178,204,255)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body170 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(178,204,255)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body171 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(21,94,239)",
      boxShadow: "inset 0 0 0 1px rgb(21,94,239), 0px 1px 2px 0px rgba(16,24,40,0.05), 0px 0px 0px 4px rgb(209,224,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body172 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(21,94,239)",
      boxShadow: "inset 0 0 0 1px rgb(21,94,239), 0px 1px 2px 0px rgba(16,24,40,0.05), 0px 0px 0px 4px rgb(209,224,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body173 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(21,94,239)",
      boxShadow: "inset 0 0 0 1px rgb(21,94,239), 0px 1px 2px 0px rgba(16,24,40,0.08), 0px 0px 0px 4px rgb(209,224,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body174 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(0,64,193)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "10px 16px 10px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body175 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(0,64,193)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __body176 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(0,64,193)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.leadIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeRight ?? /*#__PURE__*/React.createElement(IconAddAlt, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Button"), props.rightIcon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.changeLeft ?? /*#__PURE__*/React.createElement(IconChevronDown, null)));
  const __impls = {
    // figma: Size=H40px, Hierarchy=Primary, Icon=Default, Destructive=True, State=Default
    "size=h40px|hierarchy=primary|icon=default|destructive=true|state=default": __body0,
    // figma: Size=H32px, Hierarchy=Primary, Icon=Default, Destructive=True, State=Default
    "size=h32px|hierarchy=primary|icon=default|destructive=true|state=default": __body1,
    // figma: Size=H24px, Hierarchy=Primary, Icon=Default, Destructive=True, State=Default
    "size=h24px|hierarchy=primary|icon=default|destructive=true|state=default": __body2,
    // figma: Size=H40px, Hierarchy=Secondary color, Icon=Default, Destructive=False, State=Default
    "size=h40px|hierarchy=secondary color|icon=default|destructive=false|state=default": __body3,
    // figma: Size=H32px, Hierarchy=Secondary color, Icon=Default, Destructive=False, State=Default
    "size=h32px|hierarchy=secondary color|icon=default|destructive=false|state=default": __body4,
    // figma: Size=H24px, Hierarchy=Secondary color, Icon=Default, Destructive=False, State=Default
    "size=h24px|hierarchy=secondary color|icon=default|destructive=false|state=default": __body5,
    // figma: Size=H40px, Hierarchy=Secondary color, Icon=Default, Destructive=True, State=Default
    "size=h40px|hierarchy=secondary color|icon=default|destructive=true|state=default": __body6,
    // figma: Size=H32px, Hierarchy=Secondary color, Icon=Default, Destructive=True, State=Default
    "size=h32px|hierarchy=secondary color|icon=default|destructive=true|state=default": __body7,
    // figma: Size=H24px, Hierarchy=Secondary color, Icon=Default, Destructive=True, State=Default
    "size=h24px|hierarchy=secondary color|icon=default|destructive=true|state=default": __body8,
    // figma: Size=H40px, Hierarchy=Ghost color, Icon=Default, Destructive=False, State=Default
    "size=h40px|hierarchy=ghost color|icon=default|destructive=false|state=default": __body9,
    // figma: Size=H32px, Hierarchy=Ghost color, Icon=Default, Destructive=False, State=Default
    "size=h32px|hierarchy=ghost color|icon=default|destructive=false|state=default": __body10,
    // figma: Size=H24px, Hierarchy=Ghost color, Icon=Default, Destructive=False, State=Default
    "size=h24px|hierarchy=ghost color|icon=default|destructive=false|state=default": __body11,
    // figma: Size=H24px, Hierarchy=Link color, Icon=Default, Destructive=False, State=Default
    "size=h24px|hierarchy=link color|icon=default|destructive=false|state=default": __body12,
    // figma: Size=H32px, Hierarchy=Link color, Icon=Default, Destructive=False, State=Default
    "size=h32px|hierarchy=link color|icon=default|destructive=false|state=default": __body13,
    // figma: Size=H24px, Hierarchy=Link gray, Icon=Default, Destructive=False, State=Default
    "size=h24px|hierarchy=link gray|icon=default|destructive=false|state=default": __body12,
    // figma: Size=H32px, Hierarchy=Link gray, Icon=Default, Destructive=False, State=Default
    "size=h32px|hierarchy=link gray|icon=default|destructive=false|state=default": __body14,
    // figma: Size=H40px, Hierarchy=Ghost gray, Icon=Default, Destructive=False, State=Default
    "size=h40px|hierarchy=ghost gray|icon=default|destructive=false|state=default": __body15,
    // figma: Size=H32px, Hierarchy=Ghost gray, Icon=Default, Destructive=False, State=Default
    "size=h32px|hierarchy=ghost gray|icon=default|destructive=false|state=default": __body16,
    // figma: Size=H24px, Hierarchy=Ghost gray, Icon=Default, Destructive=False, State=Default
    "size=h24px|hierarchy=ghost gray|icon=default|destructive=false|state=default": __body17,
    // figma: Size=H40px, Hierarchy=Ghost color, Icon=Default, Destructive=True, State=Default
    "size=h40px|hierarchy=ghost color|icon=default|destructive=true|state=default": __body18,
    // figma: Size=H32px, Hierarchy=Ghost color, Icon=Default, Destructive=True, State=Default
    "size=h32px|hierarchy=ghost color|icon=default|destructive=true|state=default": __body19,
    // figma: Size=H24px, Hierarchy=Ghost color, Icon=Default, Destructive=True, State=Default
    "size=h24px|hierarchy=ghost color|icon=default|destructive=true|state=default": __body20,
    // figma: Size=H24px, Hierarchy=Link color, Icon=Default, Destructive=True, State=Default
    "size=h24px|hierarchy=link color|icon=default|destructive=true|state=default": __body21,
    // figma: Size=H32px, Hierarchy=Link color, Icon=Default, Destructive=True, State=Default
    "size=h32px|hierarchy=link color|icon=default|destructive=true|state=default": __body22,
    // figma: Size=H40px, Hierarchy=Secondary gray, Icon=Default, Destructive=True, State=Default
    "size=h40px|hierarchy=secondary gray|icon=default|destructive=true|state=default": __body23,
    // figma: Size=H32px, Hierarchy=Secondary gray, Icon=Default, Destructive=True, State=Default
    "size=h32px|hierarchy=secondary gray|icon=default|destructive=true|state=default": __body24,
    // figma: Size=H24px, Hierarchy=Secondary gray, Icon=Default, Destructive=True, State=Default
    "size=h24px|hierarchy=secondary gray|icon=default|destructive=true|state=default": __body25,
    // figma: Size=H40px, Hierarchy=Primary, Icon=Default, Destructive=True, State=Disabled
    "size=h40px|hierarchy=primary|icon=default|destructive=true|state=disabled": __body26,
    // figma: Size=H32px, Hierarchy=Primary, Icon=Default, Destructive=True, State=Disabled
    "size=h32px|hierarchy=primary|icon=default|destructive=true|state=disabled": __body27,
    // figma: Size=H24px, Hierarchy=Primary, Icon=Default, Destructive=True, State=Disabled
    "size=h24px|hierarchy=primary|icon=default|destructive=true|state=disabled": __body28,
    // figma: Size=H40px, Hierarchy=Secondary color, Icon=Default, Destructive=False, State=Disabled
    "size=h40px|hierarchy=secondary color|icon=default|destructive=false|state=disabled": __body29,
    // figma: Size=H32px, Hierarchy=Secondary color, Icon=Default, Destructive=False, State=Disabled
    "size=h32px|hierarchy=secondary color|icon=default|destructive=false|state=disabled": __body30,
    // figma: Size=H24px, Hierarchy=Secondary color, Icon=Default, Destructive=False, State=Disabled
    "size=h24px|hierarchy=secondary color|icon=default|destructive=false|state=disabled": __body31,
    // figma: Size=H40px, Hierarchy=Secondary color, Icon=Default, Destructive=True, State=Disabled
    "size=h40px|hierarchy=secondary color|icon=default|destructive=true|state=disabled": __body32,
    // figma: Size=H32px, Hierarchy=Secondary color, Icon=Default, Destructive=True, State=Disabled
    "size=h32px|hierarchy=secondary color|icon=default|destructive=true|state=disabled": __body33,
    // figma: Size=H24px, Hierarchy=Secondary color, Icon=Default, Destructive=True, State=Disabled
    "size=h24px|hierarchy=secondary color|icon=default|destructive=true|state=disabled": __body34,
    // figma: Size=H40px, Hierarchy=Ghost color, Icon=Default, Destructive=False, State=Disabled
    "size=h40px|hierarchy=ghost color|icon=default|destructive=false|state=disabled": __body35,
    // figma: Size=H32px, Hierarchy=Ghost color, Icon=Default, Destructive=False, State=Disabled
    "size=h32px|hierarchy=ghost color|icon=default|destructive=false|state=disabled": __body36,
    // figma: Size=H24px, Hierarchy=Ghost color, Icon=Default, Destructive=False, State=Disabled
    "size=h24px|hierarchy=ghost color|icon=default|destructive=false|state=disabled": __body37,
    // figma: Size=H24px, Hierarchy=Link color, Icon=Default, Destructive=False, State=Disabled
    "size=h24px|hierarchy=link color|icon=default|destructive=false|state=disabled": __body12,
    // figma: Size=H32px, Hierarchy=Link color, Icon=Default, Destructive=False, State=Disabled
    "size=h32px|hierarchy=link color|icon=default|destructive=false|state=disabled": __body38,
    // figma: Size=H24px, Hierarchy=Link gray, Icon=Default, Destructive=False, State=Disabled
    "size=h24px|hierarchy=link gray|icon=default|destructive=false|state=disabled": __body39,
    // figma: Size=H32px, Hierarchy=Link gray, Icon=Default, Destructive=False, State=Disabled
    "size=h32px|hierarchy=link gray|icon=default|destructive=false|state=disabled": __body38,
    // figma: Size=H40px, Hierarchy=Ghost gray, Icon=Default, Destructive=False, State=Disabled
    "size=h40px|hierarchy=ghost gray|icon=default|destructive=false|state=disabled": __body35,
    // figma: Size=H32px, Hierarchy=Ghost gray, Icon=Default, Destructive=False, State=Disabled
    "size=h32px|hierarchy=ghost gray|icon=default|destructive=false|state=disabled": __body36,
    // figma: Size=H24px, Hierarchy=Ghost gray, Icon=Default, Destructive=False, State=Disabled
    "size=h24px|hierarchy=ghost gray|icon=default|destructive=false|state=disabled": __body37,
    // figma: Size=H40px, Hierarchy=Ghost color, Icon=Default, Destructive=True, State=Disabled
    "size=h40px|hierarchy=ghost color|icon=default|destructive=true|state=disabled": __body40,
    // figma: Size=H32px, Hierarchy=Ghost color, Icon=Default, Destructive=True, State=Disabled
    "size=h32px|hierarchy=ghost color|icon=default|destructive=true|state=disabled": __body41,
    // figma: Size=H24px, Hierarchy=Ghost color, Icon=Default, Destructive=True, State=Disabled
    "size=h24px|hierarchy=ghost color|icon=default|destructive=true|state=disabled": __body42,
    // figma: Size=H24px, Hierarchy=Link color, Icon=Default, Destructive=True, State=Disabled
    "size=h24px|hierarchy=link color|icon=default|destructive=true|state=disabled": __body43,
    // figma: Size=H32px, Hierarchy=Link color, Icon=Default, Destructive=True, State=Disabled
    "size=h32px|hierarchy=link color|icon=default|destructive=true|state=disabled": __body44,
    // figma: Size=H40px, Hierarchy=Secondary gray, Icon=Default, Destructive=True, State=Disabled
    "size=h40px|hierarchy=secondary gray|icon=default|destructive=true|state=disabled": __body45,
    // figma: Size=H32px, Hierarchy=Secondary gray, Icon=Default, Destructive=True, State=Disabled
    "size=h32px|hierarchy=secondary gray|icon=default|destructive=true|state=disabled": __body46,
    // figma: Size=H24px, Hierarchy=Secondary gray, Icon=Default, Destructive=True, State=Disabled
    "size=h24px|hierarchy=secondary gray|icon=default|destructive=true|state=disabled": __body47,
    // figma: Size=H40px, Hierarchy=Primary, Icon=Default, Destructive=True, State=Focused
    "size=h40px|hierarchy=primary|icon=default|destructive=true|state=focused": __body48,
    // figma: Size=H32px, Hierarchy=Primary, Icon=Default, Destructive=True, State=Focused
    "size=h32px|hierarchy=primary|icon=default|destructive=true|state=focused": __body49,
    // figma: Size=H24px, Hierarchy=Primary, Icon=Default, Destructive=True, State=Focused
    "size=h24px|hierarchy=primary|icon=default|destructive=true|state=focused": __body50,
    // figma: Size=H40px, Hierarchy=Secondary color, Icon=Default, Destructive=False, State=Focused
    "size=h40px|hierarchy=secondary color|icon=default|destructive=false|state=focused": __body3,
    // figma: Size=H32px, Hierarchy=Secondary color, Icon=Default, Destructive=False, State=Focused
    "size=h32px|hierarchy=secondary color|icon=default|destructive=false|state=focused": __body4,
    // figma: Size=H24px, Hierarchy=Secondary color, Icon=Default, Destructive=False, State=Focused
    "size=h24px|hierarchy=secondary color|icon=default|destructive=false|state=focused": __body5,
    // figma: Size=H40px, Hierarchy=Secondary color, Icon=Default, Destructive=True, State=Focused
    "size=h40px|hierarchy=secondary color|icon=default|destructive=true|state=focused": __body51,
    // figma: Size=H32px, Hierarchy=Secondary color, Icon=Default, Destructive=True, State=Focused
    "size=h32px|hierarchy=secondary color|icon=default|destructive=true|state=focused": __body7,
    // figma: Size=H24px, Hierarchy=Secondary color, Icon=Default, Destructive=True, State=Focused
    "size=h24px|hierarchy=secondary color|icon=default|destructive=true|state=focused": __body8,
    // figma: Size=H40px, Hierarchy=Ghost color, Icon=Default, Destructive=False, State=Focused
    "size=h40px|hierarchy=ghost color|icon=default|destructive=false|state=focused": __body9,
    // figma: Size=H32px, Hierarchy=Ghost color, Icon=Default, Destructive=False, State=Focused
    "size=h32px|hierarchy=ghost color|icon=default|destructive=false|state=focused": __body10,
    // figma: Size=H24px, Hierarchy=Ghost color, Icon=Default, Destructive=False, State=Focused
    "size=h24px|hierarchy=ghost color|icon=default|destructive=false|state=focused": __body11,
    // figma: Size=H24px, Hierarchy=Link color, Icon=Default, Destructive=False, State=Focused
    "size=h24px|hierarchy=link color|icon=default|destructive=false|state=focused": __body12,
    // figma: Size=H32px, Hierarchy=Link color, Icon=Default, Destructive=False, State=Focused
    "size=h32px|hierarchy=link color|icon=default|destructive=false|state=focused": __body13,
    // figma: Size=H24px, Hierarchy=Link gray, Icon=Default, Destructive=False, State=Focused
    "size=h24px|hierarchy=link gray|icon=default|destructive=false|state=focused": __body12,
    // figma: Size=H32px, Hierarchy=Link gray, Icon=Default, Destructive=False, State=Focused
    "size=h32px|hierarchy=link gray|icon=default|destructive=false|state=focused": __body14,
    // figma: Size=H40px, Hierarchy=Ghost gray, Icon=Default, Destructive=False, State=Focused
    "size=h40px|hierarchy=ghost gray|icon=default|destructive=false|state=focused": __body15,
    // figma: Size=H32px, Hierarchy=Ghost gray, Icon=Default, Destructive=False, State=Focused
    "size=h32px|hierarchy=ghost gray|icon=default|destructive=false|state=focused": __body16,
    // figma: Size=H24px, Hierarchy=Ghost gray, Icon=Default, Destructive=False, State=Focused
    "size=h24px|hierarchy=ghost gray|icon=default|destructive=false|state=focused": __body17,
    // figma: Size=H40px, Hierarchy=Ghost color, Icon=Default, Destructive=True, State=Focused
    "size=h40px|hierarchy=ghost color|icon=default|destructive=true|state=focused": __body18,
    // figma: Size=H32px, Hierarchy=Ghost color, Icon=Default, Destructive=True, State=Focused
    "size=h32px|hierarchy=ghost color|icon=default|destructive=true|state=focused": __body19,
    // figma: Size=H24px, Hierarchy=Ghost color, Icon=Default, Destructive=True, State=Focused
    "size=h24px|hierarchy=ghost color|icon=default|destructive=true|state=focused": __body20,
    // figma: Size=H24px, Hierarchy=Link color, Icon=Default, Destructive=True, State=Focused
    "size=h24px|hierarchy=link color|icon=default|destructive=true|state=focused": __body21,
    // figma: Size=H32px, Hierarchy=Link color, Icon=Default, Destructive=True, State=Focused
    "size=h32px|hierarchy=link color|icon=default|destructive=true|state=focused": __body22,
    // figma: Size=H40px, Hierarchy=Secondary gray, Icon=Default, Destructive=True, State=Focused
    "size=h40px|hierarchy=secondary gray|icon=default|destructive=true|state=focused": __body52,
    // figma: Size=H32px, Hierarchy=Secondary gray, Icon=Default, Destructive=True, State=Focused
    "size=h32px|hierarchy=secondary gray|icon=default|destructive=true|state=focused": __body53,
    // figma: Size=H24px, Hierarchy=Secondary gray, Icon=Default, Destructive=True, State=Focused
    "size=h24px|hierarchy=secondary gray|icon=default|destructive=true|state=focused": __body54,
    // figma: Size=H40px, Hierarchy=Primary, Icon=Default, Destructive=True, State=Hover
    "size=h40px|hierarchy=primary|icon=default|destructive=true|state=hover": __body55,
    // figma: Size=H32px, Hierarchy=Primary, Icon=Default, Destructive=True, State=Hover
    "size=h32px|hierarchy=primary|icon=default|destructive=true|state=hover": __body56,
    // figma: Size=H24px, Hierarchy=Primary, Icon=Default, Destructive=True, State=Hover
    "size=h24px|hierarchy=primary|icon=default|destructive=true|state=hover": __body57,
    // figma: Size=H40px, Hierarchy=Secondary color, Icon=Default, Destructive=False, State=Hover
    "size=h40px|hierarchy=secondary color|icon=default|destructive=false|state=hover": __body58,
    // figma: Size=H32px, Hierarchy=Secondary color, Icon=Default, Destructive=False, State=Hover
    "size=h32px|hierarchy=secondary color|icon=default|destructive=false|state=hover": __body59,
    // figma: Size=H24px, Hierarchy=Secondary color, Icon=Default, Destructive=False, State=Hover
    "size=h24px|hierarchy=secondary color|icon=default|destructive=false|state=hover": __body60,
    // figma: Size=H40px, Hierarchy=Secondary color, Icon=Default, Destructive=True, State=Hover
    "size=h40px|hierarchy=secondary color|icon=default|destructive=true|state=hover": __body61,
    // figma: Size=H32px, Hierarchy=Secondary color, Icon=Default, Destructive=True, State=Hover
    "size=h32px|hierarchy=secondary color|icon=default|destructive=true|state=hover": __body62,
    // figma: Size=H24px, Hierarchy=Secondary color, Icon=Default, Destructive=True, State=Hover
    "size=h24px|hierarchy=secondary color|icon=default|destructive=true|state=hover": __body63,
    // figma: Size=H40px, Hierarchy=Ghost color, Icon=Default, Destructive=False, State=Hover
    "size=h40px|hierarchy=ghost color|icon=default|destructive=false|state=hover": __body64,
    // figma: Size=H32px, Hierarchy=Ghost color, Icon=Default, Destructive=False, State=Hover
    "size=h32px|hierarchy=ghost color|icon=default|destructive=false|state=hover": __body65,
    // figma: Size=H24px, Hierarchy=Ghost color, Icon=Default, Destructive=False, State=Hover
    "size=h24px|hierarchy=ghost color|icon=default|destructive=false|state=hover": __body66,
    // figma: Size=H24px, Hierarchy=Link color, Icon=Default, Destructive=False, State=Hover
    "size=h24px|hierarchy=link color|icon=default|destructive=false|state=hover": __body12,
    // figma: Size=H32px, Hierarchy=Link color, Icon=Default, Destructive=False, State=Hover
    "size=h32px|hierarchy=link color|icon=default|destructive=false|state=hover": __body67,
    // figma: Size=H24px, Hierarchy=Link gray, Icon=Default, Destructive=False, State=Hover
    "size=h24px|hierarchy=link gray|icon=default|destructive=false|state=hover": __body68,
    // figma: Size=H32px, Hierarchy=Link gray, Icon=Default, Destructive=False, State=Hover
    "size=h32px|hierarchy=link gray|icon=default|destructive=false|state=hover": __body69,
    // figma: Size=H40px, Hierarchy=Ghost gray, Icon=Default, Destructive=False, State=Hover
    "size=h40px|hierarchy=ghost gray|icon=default|destructive=false|state=hover": __body70,
    // figma: Size=H32px, Hierarchy=Ghost gray, Icon=Default, Destructive=False, State=Hover
    "size=h32px|hierarchy=ghost gray|icon=default|destructive=false|state=hover": __body71,
    // figma: Size=H24px, Hierarchy=Ghost gray, Icon=Default, Destructive=False, State=Hover
    "size=h24px|hierarchy=ghost gray|icon=default|destructive=false|state=hover": __body72,
    // figma: Size=H40px, Hierarchy=Ghost color, Icon=Default, Destructive=True, State=Hover
    "size=h40px|hierarchy=ghost color|icon=default|destructive=true|state=hover": __body73,
    // figma: Size=H32px, Hierarchy=Ghost color, Icon=Default, Destructive=True, State=Hover
    "size=h32px|hierarchy=ghost color|icon=default|destructive=true|state=hover": __body74,
    // figma: Size=H24px, Hierarchy=Ghost color, Icon=Default, Destructive=True, State=Hover
    "size=h24px|hierarchy=ghost color|icon=default|destructive=true|state=hover": __body75,
    // figma: Size=H24px, Hierarchy=Link color, Icon=Default, Destructive=True, State=Hover
    "size=h24px|hierarchy=link color|icon=default|destructive=true|state=hover": __body76,
    // figma: Size=H32px, Hierarchy=Link color, Icon=Default, Destructive=True, State=Hover
    "size=h32px|hierarchy=link color|icon=default|destructive=true|state=hover": __body77,
    // figma: Size=H40px, Hierarchy=Secondary gray, Icon=Default, Destructive=True, State=Hover
    "size=h40px|hierarchy=secondary gray|icon=default|destructive=true|state=hover": __body78,
    // figma: Size=H32px, Hierarchy=Secondary gray, Icon=Default, Destructive=True, State=Hover
    "size=h32px|hierarchy=secondary gray|icon=default|destructive=true|state=hover": __body79,
    // figma: Size=H24px, Hierarchy=Secondary gray, Icon=Default, Destructive=True, State=Hover
    "size=h24px|hierarchy=secondary gray|icon=default|destructive=true|state=hover": __body80,
    // figma: Size=H40px, Hierarchy=Primary, Icon=Only, Destructive=False, State=Default
    "size=h40px|hierarchy=primary|icon=only|destructive=false|state=default": __body81,
    // figma: Size=H32px, Hierarchy=Primary, Icon=Only, Destructive=False, State=Default
    "size=h32px|hierarchy=primary|icon=only|destructive=false|state=default": __body82,
    // figma: Size=H24px, Hierarchy=Primary, Icon=Only, Destructive=False, State=Default
    "size=h24px|hierarchy=primary|icon=only|destructive=false|state=default": __body83,
    // figma: Size=H40px, Hierarchy=Primary, Icon=Only, Destructive=True, State=Default
    "size=h40px|hierarchy=primary|icon=only|destructive=true|state=default": __body84,
    // figma: Size=H32px, Hierarchy=Primary, Icon=Only, Destructive=True, State=Default
    "size=h32px|hierarchy=primary|icon=only|destructive=true|state=default": __body85,
    // figma: Size=H24px, Hierarchy=Primary, Icon=Only, Destructive=True, State=Default
    "size=h24px|hierarchy=primary|icon=only|destructive=true|state=default": __body86,
    // figma: Size=H40px, Hierarchy=Secondary color, Icon=Only, Destructive=False, State=Default
    "size=h40px|hierarchy=secondary color|icon=only|destructive=false|state=default": __body87,
    // figma: Size=H32px, Hierarchy=Secondary color, Icon=Only, Destructive=False, State=Default
    "size=h32px|hierarchy=secondary color|icon=only|destructive=false|state=default": __body88,
    // figma: Size=H24px, Hierarchy=Secondary color, Icon=Only, Destructive=False, State=Default
    "size=h24px|hierarchy=secondary color|icon=only|destructive=false|state=default": __body89,
    // figma: Size=H40px, Hierarchy=Secondary color, Icon=Only, Destructive=True, State=Default
    "size=h40px|hierarchy=secondary color|icon=only|destructive=true|state=default": __body90,
    // figma: Size=H32px, Hierarchy=Secondary color, Icon=Only, Destructive=True, State=Default
    "size=h32px|hierarchy=secondary color|icon=only|destructive=true|state=default": __body91,
    // figma: Size=H24px, Hierarchy=Secondary color, Icon=Only, Destructive=True, State=Default
    "size=h24px|hierarchy=secondary color|icon=only|destructive=true|state=default": __body92,
    // figma: Size=H40px, Hierarchy=Ghost color, Icon=Only, Destructive=False, State=Default
    "size=h40px|hierarchy=ghost color|icon=only|destructive=false|state=default": __body93,
    // figma: Size=H32px, Hierarchy=Ghost color, Icon=Only, Destructive=False, State=Default
    "size=h32px|hierarchy=ghost color|icon=only|destructive=false|state=default": __body94,
    // figma: Size=H24px, Hierarchy=Ghost color, Icon=Only, Destructive=False, State=Default
    "size=h24px|hierarchy=ghost color|icon=only|destructive=false|state=default": __body95,
    // figma: Size=H40px, Hierarchy=Ghost gray, Icon=Only, Destructive=False, State=Default
    "size=h40px|hierarchy=ghost gray|icon=only|destructive=false|state=default": __body93,
    // figma: Size=H32px, Hierarchy=Ghost gray, Icon=Only, Destructive=False, State=Default
    "size=h32px|hierarchy=ghost gray|icon=only|destructive=false|state=default": __body94,
    // figma: Size=H24px, Hierarchy=Ghost gray, Icon=Only, Destructive=False, State=Default
    "size=h24px|hierarchy=ghost gray|icon=only|destructive=false|state=default": __body95,
    // figma: Size=H40px, Hierarchy=Ghost color, Icon=Only, Destructive=True, State=Default
    "size=h40px|hierarchy=ghost color|icon=only|destructive=true|state=default": __body93,
    // figma: Size=H32px, Hierarchy=Ghost color, Icon=Only, Destructive=True, State=Default
    "size=h32px|hierarchy=ghost color|icon=only|destructive=true|state=default": __body94,
    // figma: Size=H24px, Hierarchy=Ghost color, Icon=Only, Destructive=True, State=Default
    "size=h24px|hierarchy=ghost color|icon=only|destructive=true|state=default": __body95,
    // figma: Size=H40px, Hierarchy=Secondary gray, Icon=Only, Destructive=False, State=Default
    "size=h40px|hierarchy=secondary gray|icon=only|destructive=false|state=default": __body96,
    // figma: Size=H32px, Hierarchy=Secondary gray, Icon=Only, Destructive=False, State=Default
    "size=h32px|hierarchy=secondary gray|icon=only|destructive=false|state=default": __body97,
    // figma: Size=H24px, Hierarchy=Secondary gray, Icon=Only, Destructive=False, State=Default
    "size=h24px|hierarchy=secondary gray|icon=only|destructive=false|state=default": __body98,
    // figma: Size=H40px, Hierarchy=Secondary gray, Icon=Only, Destructive=True, State=Default
    "size=h40px|hierarchy=secondary gray|icon=only|destructive=true|state=default": __body99,
    // figma: Size=H32px, Hierarchy=Secondary gray, Icon=Only, Destructive=True, State=Default
    "size=h32px|hierarchy=secondary gray|icon=only|destructive=true|state=default": __body100,
    // figma: Size=H24px, Hierarchy=Secondary gray, Icon=Only, Destructive=True, State=Default
    "size=h24px|hierarchy=secondary gray|icon=only|destructive=true|state=default": __body101,
    // figma: Size=H40px, Hierarchy=Primary, Icon=Only, Destructive=False, State=Disabled
    "size=h40px|hierarchy=primary|icon=only|destructive=false|state=disabled": __body102,
    // figma: Size=H32px, Hierarchy=Primary, Icon=Only, Destructive=False, State=Disabled
    "size=h32px|hierarchy=primary|icon=only|destructive=false|state=disabled": __body103,
    // figma: Size=H24px, Hierarchy=Primary, Icon=Only, Destructive=False, State=Disabled
    "size=h24px|hierarchy=primary|icon=only|destructive=false|state=disabled": __body104,
    // figma: Size=H40px, Hierarchy=Primary, Icon=Only, Destructive=True, State=Disabled
    "size=h40px|hierarchy=primary|icon=only|destructive=true|state=disabled": __body105,
    // figma: Size=H32px, Hierarchy=Primary, Icon=Only, Destructive=True, State=Disabled
    "size=h32px|hierarchy=primary|icon=only|destructive=true|state=disabled": __body106,
    // figma: Size=H24px, Hierarchy=Primary, Icon=Only, Destructive=True, State=Disabled
    "size=h24px|hierarchy=primary|icon=only|destructive=true|state=disabled": __body107,
    // figma: Size=H40px, Hierarchy=Secondary color, Icon=Only, Destructive=False, State=Disabled
    "size=h40px|hierarchy=secondary color|icon=only|destructive=false|state=disabled": __body108,
    // figma: Size=H32px, Hierarchy=Secondary color, Icon=Only, Destructive=False, State=Disabled
    "size=h32px|hierarchy=secondary color|icon=only|destructive=false|state=disabled": __body109,
    // figma: Size=H24px, Hierarchy=Secondary color, Icon=Only, Destructive=False, State=Disabled
    "size=h24px|hierarchy=secondary color|icon=only|destructive=false|state=disabled": __body110,
    // figma: Size=H40px, Hierarchy=Secondary color, Icon=Only, Destructive=True, State=Disabled
    "size=h40px|hierarchy=secondary color|icon=only|destructive=true|state=disabled": __body111,
    // figma: Size=H32px, Hierarchy=Secondary color, Icon=Only, Destructive=True, State=Disabled
    "size=h32px|hierarchy=secondary color|icon=only|destructive=true|state=disabled": __body112,
    // figma: Size=H24px, Hierarchy=Secondary color, Icon=Only, Destructive=True, State=Disabled
    "size=h24px|hierarchy=secondary color|icon=only|destructive=true|state=disabled": __body113,
    // figma: Size=H40px, Hierarchy=Ghost color, Icon=Only, Destructive=False, State=Disabled
    "size=h40px|hierarchy=ghost color|icon=only|destructive=false|state=disabled": __body93,
    // figma: Size=H32px, Hierarchy=Ghost color, Icon=Only, Destructive=False, State=Disabled
    "size=h32px|hierarchy=ghost color|icon=only|destructive=false|state=disabled": __body94,
    // figma: Size=H24px, Hierarchy=Ghost color, Icon=Only, Destructive=False, State=Disabled
    "size=h24px|hierarchy=ghost color|icon=only|destructive=false|state=disabled": __body95,
    // figma: Size=H40px, Hierarchy=Ghost gray, Icon=Only, Destructive=False, State=Disabled
    "size=h40px|hierarchy=ghost gray|icon=only|destructive=false|state=disabled": __body93,
    // figma: Size=H32px, Hierarchy=Ghost gray, Icon=Only, Destructive=False, State=Disabled
    "size=h32px|hierarchy=ghost gray|icon=only|destructive=false|state=disabled": __body94,
    // figma: Size=H24px, Hierarchy=Ghost gray, Icon=Only, Destructive=False, State=Disabled
    "size=h24px|hierarchy=ghost gray|icon=only|destructive=false|state=disabled": __body95,
    // figma: Size=H40px, Hierarchy=Ghost color, Icon=Only, Destructive=True, State=Disabled
    "size=h40px|hierarchy=ghost color|icon=only|destructive=true|state=disabled": __body93,
    // figma: Size=H32px, Hierarchy=Ghost color, Icon=Only, Destructive=True, State=Disabled
    "size=h32px|hierarchy=ghost color|icon=only|destructive=true|state=disabled": __body94,
    // figma: Size=H24px, Hierarchy=Ghost color, Icon=Only, Destructive=True, State=Disabled
    "size=h24px|hierarchy=ghost color|icon=only|destructive=true|state=disabled": __body95,
    // figma: Size=H40px, Hierarchy=Secondary gray, Icon=Only, Destructive=False, State=Disabled
    "size=h40px|hierarchy=secondary gray|icon=only|destructive=false|state=disabled": __body114,
    // figma: Size=H32px, Hierarchy=Secondary gray, Icon=Only, Destructive=False, State=Disabled
    "size=h32px|hierarchy=secondary gray|icon=only|destructive=false|state=disabled": __body115,
    // figma: Size=H24px, Hierarchy=Secondary gray, Icon=Only, Destructive=False, State=Disabled
    "size=h24px|hierarchy=secondary gray|icon=only|destructive=false|state=disabled": __body116,
    // figma: Size=H40px, Hierarchy=Secondary gray, Icon=Only, Destructive=True, State=Disabled
    "size=h40px|hierarchy=secondary gray|icon=only|destructive=true|state=disabled": __body117,
    // figma: Size=H32px, Hierarchy=Secondary gray, Icon=Only, Destructive=True, State=Disabled
    "size=h32px|hierarchy=secondary gray|icon=only|destructive=true|state=disabled": __body118,
    // figma: Size=H24px, Hierarchy=Secondary gray, Icon=Only, Destructive=True, State=Disabled
    "size=h24px|hierarchy=secondary gray|icon=only|destructive=true|state=disabled": __body119,
    // figma: Size=H40px, Hierarchy=Primary, Icon=Only, Destructive=False, State=Focused
    "size=h40px|hierarchy=primary|icon=only|destructive=false|state=focused": __body120,
    // figma: Size=H32px, Hierarchy=Primary, Icon=Only, Destructive=False, State=Focused
    "size=h32px|hierarchy=primary|icon=only|destructive=false|state=focused": __body121,
    // figma: Size=H24px, Hierarchy=Primary, Icon=Only, Destructive=False, State=Focused
    "size=h24px|hierarchy=primary|icon=only|destructive=false|state=focused": __body122,
    // figma: Size=H40px, Hierarchy=Primary, Icon=Only, Destructive=True, State=Focused
    "size=h40px|hierarchy=primary|icon=only|destructive=true|state=focused": __body123,
    // figma: Size=H32px, Hierarchy=Primary, Icon=Only, Destructive=True, State=Focused
    "size=h32px|hierarchy=primary|icon=only|destructive=true|state=focused": __body124,
    // figma: Size=H24px, Hierarchy=Primary, Icon=Only, Destructive=True, State=Focused
    "size=h24px|hierarchy=primary|icon=only|destructive=true|state=focused": __body125,
    // figma: Size=H40px, Hierarchy=Secondary color, Icon=Only, Destructive=False, State=Focused
    "size=h40px|hierarchy=secondary color|icon=only|destructive=false|state=focused": __body87,
    // figma: Size=H32px, Hierarchy=Secondary color, Icon=Only, Destructive=False, State=Focused
    "size=h32px|hierarchy=secondary color|icon=only|destructive=false|state=focused": __body88,
    // figma: Size=H24px, Hierarchy=Secondary color, Icon=Only, Destructive=False, State=Focused
    "size=h24px|hierarchy=secondary color|icon=only|destructive=false|state=focused": __body89,
    // figma: Size=H40px, Hierarchy=Secondary color, Icon=Only, Destructive=True, State=Focused
    "size=h40px|hierarchy=secondary color|icon=only|destructive=true|state=focused": __body90,
    // figma: Size=H32px, Hierarchy=Secondary color, Icon=Only, Destructive=True, State=Focused
    "size=h32px|hierarchy=secondary color|icon=only|destructive=true|state=focused": __body91,
    // figma: Size=H24px, Hierarchy=Secondary color, Icon=Only, Destructive=True, State=Focused
    "size=h24px|hierarchy=secondary color|icon=only|destructive=true|state=focused": __body92,
    // figma: Size=H40px, Hierarchy=Ghost color, Icon=Only, Destructive=False, State=Focused
    "size=h40px|hierarchy=ghost color|icon=only|destructive=false|state=focused": __body93,
    // figma: Size=H32px, Hierarchy=Ghost color, Icon=Only, Destructive=False, State=Focused
    "size=h32px|hierarchy=ghost color|icon=only|destructive=false|state=focused": __body94,
    // figma: Size=H24px, Hierarchy=Ghost color, Icon=Only, Destructive=False, State=Focused
    "size=h24px|hierarchy=ghost color|icon=only|destructive=false|state=focused": __body95,
    // figma: Size=H40px, Hierarchy=Ghost gray, Icon=Only, Destructive=False, State=Focused
    "size=h40px|hierarchy=ghost gray|icon=only|destructive=false|state=focused": __body93,
    // figma: Size=H32px, Hierarchy=Ghost gray, Icon=Only, Destructive=False, State=Focused
    "size=h32px|hierarchy=ghost gray|icon=only|destructive=false|state=focused": __body94,
    // figma: Size=H24px, Hierarchy=Ghost gray, Icon=Only, Destructive=False, State=Focused
    "size=h24px|hierarchy=ghost gray|icon=only|destructive=false|state=focused": __body95,
    // figma: Size=H40px, Hierarchy=Ghost color, Icon=Only, Destructive=True, State=Focused
    "size=h40px|hierarchy=ghost color|icon=only|destructive=true|state=focused": __body93,
    // figma: Size=H32px, Hierarchy=Ghost color, Icon=Only, Destructive=True, State=Focused
    "size=h32px|hierarchy=ghost color|icon=only|destructive=true|state=focused": __body94,
    // figma: Size=H24px, Hierarchy=Ghost color, Icon=Only, Destructive=True, State=Focused
    "size=h24px|hierarchy=ghost color|icon=only|destructive=true|state=focused": __body95,
    // figma: Size=H40px, Hierarchy=Secondary gray, Icon=Only, Destructive=False, State=Focused
    "size=h40px|hierarchy=secondary gray|icon=only|destructive=false|state=focused": __body126,
    // figma: Size=H32px, Hierarchy=Secondary gray, Icon=Only, Destructive=False, State=Focused
    "size=h32px|hierarchy=secondary gray|icon=only|destructive=false|state=focused": __body127,
    // figma: Size=H24px, Hierarchy=Secondary gray, Icon=Only, Destructive=False, State=Focused
    "size=h24px|hierarchy=secondary gray|icon=only|destructive=false|state=focused": __body128,
    // figma: Size=H40px, Hierarchy=Secondary gray, Icon=Only, Destructive=True, State=Focused
    "size=h40px|hierarchy=secondary gray|icon=only|destructive=true|state=focused": __body129,
    // figma: Size=H32px, Hierarchy=Secondary gray, Icon=Only, Destructive=True, State=Focused
    "size=h32px|hierarchy=secondary gray|icon=only|destructive=true|state=focused": __body130,
    // figma: Size=H24px, Hierarchy=Secondary gray, Icon=Only, Destructive=True, State=Focused
    "size=h24px|hierarchy=secondary gray|icon=only|destructive=true|state=focused": __body131,
    // figma: Size=H40px, Hierarchy=Primary, Icon=Only, Destructive=False, State=Hover
    "size=h40px|hierarchy=primary|icon=only|destructive=false|state=hover": __body132,
    // figma: Size=H32px, Hierarchy=Primary, Icon=Only, Destructive=False, State=Hover
    "size=h32px|hierarchy=primary|icon=only|destructive=false|state=hover": __body133,
    // figma: Size=H24px, Hierarchy=Primary, Icon=Only, Destructive=False, State=Hover
    "size=h24px|hierarchy=primary|icon=only|destructive=false|state=hover": __body134,
    // figma: Size=H40px, Hierarchy=Primary, Icon=Only, Destructive=True, State=Hover
    "size=h40px|hierarchy=primary|icon=only|destructive=true|state=hover": __body135,
    // figma: Size=H32px, Hierarchy=Primary, Icon=Only, Destructive=True, State=Hover
    "size=h32px|hierarchy=primary|icon=only|destructive=true|state=hover": __body136,
    // figma: Size=H24px, Hierarchy=Primary, Icon=Only, Destructive=True, State=Hover
    "size=h24px|hierarchy=primary|icon=only|destructive=true|state=hover": __body137,
    // figma: Size=H40px, Hierarchy=Secondary color, Icon=Only, Destructive=False, State=Hover
    "size=h40px|hierarchy=secondary color|icon=only|destructive=false|state=hover": __body138,
    // figma: Size=H32px, Hierarchy=Secondary color, Icon=Only, Destructive=False, State=Hover
    "size=h32px|hierarchy=secondary color|icon=only|destructive=false|state=hover": __body139,
    // figma: Size=H24px, Hierarchy=Secondary color, Icon=Only, Destructive=False, State=Hover
    "size=h24px|hierarchy=secondary color|icon=only|destructive=false|state=hover": __body140,
    // figma: Size=H40px, Hierarchy=Secondary color, Icon=Only, Destructive=True, State=Hover
    "size=h40px|hierarchy=secondary color|icon=only|destructive=true|state=hover": __body141,
    // figma: Size=H32px, Hierarchy=Secondary color, Icon=Only, Destructive=True, State=Hover
    "size=h32px|hierarchy=secondary color|icon=only|destructive=true|state=hover": __body142,
    // figma: Size=H24px, Hierarchy=Secondary color, Icon=Only, Destructive=True, State=Hover
    "size=h24px|hierarchy=secondary color|icon=only|destructive=true|state=hover": __body143,
    // figma: Size=H40px, Hierarchy=Ghost color, Icon=Only, Destructive=False, State=Hover
    "size=h40px|hierarchy=ghost color|icon=only|destructive=false|state=hover": __body87,
    // figma: Size=H32px, Hierarchy=Ghost color, Icon=Only, Destructive=False, State=Hover
    "size=h32px|hierarchy=ghost color|icon=only|destructive=false|state=hover": __body88,
    // figma: Size=H24px, Hierarchy=Ghost color, Icon=Only, Destructive=False, State=Hover
    "size=h24px|hierarchy=ghost color|icon=only|destructive=false|state=hover": __body89,
    // figma: Size=H40px, Hierarchy=Ghost gray, Icon=Only, Destructive=False, State=Hover
    "size=h40px|hierarchy=ghost gray|icon=only|destructive=false|state=hover": __body144,
    // figma: Size=H32px, Hierarchy=Ghost gray, Icon=Only, Destructive=False, State=Hover
    "size=h32px|hierarchy=ghost gray|icon=only|destructive=false|state=hover": __body145,
    // figma: Size=H24px, Hierarchy=Ghost gray, Icon=Only, Destructive=False, State=Hover
    "size=h24px|hierarchy=ghost gray|icon=only|destructive=false|state=hover": __body146,
    // figma: Size=H40px, Hierarchy=Ghost color, Icon=Only, Destructive=True, State=Hover
    "size=h40px|hierarchy=ghost color|icon=only|destructive=true|state=hover": __body90,
    // figma: Size=H32px, Hierarchy=Ghost color, Icon=Only, Destructive=True, State=Hover
    "size=h32px|hierarchy=ghost color|icon=only|destructive=true|state=hover": __body91,
    // figma: Size=H24px, Hierarchy=Ghost color, Icon=Only, Destructive=True, State=Hover
    "size=h24px|hierarchy=ghost color|icon=only|destructive=true|state=hover": __body92,
    // figma: Size=H40px, Hierarchy=Secondary gray, Icon=Only, Destructive=False, State=Hover
    "size=h40px|hierarchy=secondary gray|icon=only|destructive=false|state=hover": __body147,
    // figma: Size=H32px, Hierarchy=Secondary gray, Icon=Only, Destructive=False, State=Hover
    "size=h32px|hierarchy=secondary gray|icon=only|destructive=false|state=hover": __body148,
    // figma: Size=H24px, Hierarchy=Secondary gray, Icon=Only, Destructive=False, State=Hover
    "size=h24px|hierarchy=secondary gray|icon=only|destructive=false|state=hover": __body149,
    // figma: Size=H40px, Hierarchy=Secondary gray, Icon=Only, Destructive=True, State=Hover
    "size=h40px|hierarchy=secondary gray|icon=only|destructive=true|state=hover": __body150,
    // figma: Size=H32px, Hierarchy=Secondary gray, Icon=Only, Destructive=True, State=Hover
    "size=h32px|hierarchy=secondary gray|icon=only|destructive=true|state=hover": __body151,
    // figma: Size=H24px, Hierarchy=Secondary gray, Icon=Only, Destructive=True, State=Hover
    "size=h24px|hierarchy=secondary gray|icon=only|destructive=true|state=hover": __body152,
    // figma: Size=H40px, Hierarchy=Secondary gray, Icon=Default, Destructive=False, State=Default
    "size=h40px|hierarchy=secondary gray|icon=default|destructive=false|state=default": __body153,
    // figma: Size=H32px, Hierarchy=Secondary gray, Icon=Default, Destructive=False, State=Default
    "size=h32px|hierarchy=secondary gray|icon=default|destructive=false|state=default": __body154,
    // figma: Size=H24px, Hierarchy=Secondary gray, Icon=Default, Destructive=False, State=Default
    "size=h24px|hierarchy=secondary gray|icon=default|destructive=false|state=default": __body155,
    // figma: Size=H40px, Hierarchy=Secondary gray, Icon=Default, Destructive=False, State=Disabled
    "size=h40px|hierarchy=secondary gray|icon=default|destructive=false|state=disabled": __body156,
    // figma: Size=H32px, Hierarchy=Secondary gray, Icon=Default, Destructive=False, State=Disabled
    "size=h32px|hierarchy=secondary gray|icon=default|destructive=false|state=disabled": __body157,
    // figma: Size=H24px, Hierarchy=Secondary gray, Icon=Default, Destructive=False, State=Disabled
    "size=h24px|hierarchy=secondary gray|icon=default|destructive=false|state=disabled": __body158,
    // figma: Size=H40px, Hierarchy=Secondary gray, Icon=Default, Destructive=False, State=Focused
    "size=h40px|hierarchy=secondary gray|icon=default|destructive=false|state=focused": __body159,
    // figma: Size=H32px, Hierarchy=Secondary gray, Icon=Default, Destructive=False, State=Focused
    "size=h32px|hierarchy=secondary gray|icon=default|destructive=false|state=focused": __body160,
    // figma: Size=H24px, Hierarchy=Secondary gray, Icon=Default, Destructive=False, State=Focused
    "size=h24px|hierarchy=secondary gray|icon=default|destructive=false|state=focused": __body161,
    // figma: Size=H40px, Hierarchy=Secondary gray, Icon=Default, Destructive=False, State=Hover
    "size=h40px|hierarchy=secondary gray|icon=default|destructive=false|state=hover": __body162,
    // figma: Size=H32px, Hierarchy=Secondary gray, Icon=Default, Destructive=False, State=Hover
    "size=h32px|hierarchy=secondary gray|icon=default|destructive=false|state=hover": __body163,
    // figma: Size=H24px, Hierarchy=Secondary gray, Icon=Default, Destructive=False, State=Hover
    "size=h24px|hierarchy=secondary gray|icon=default|destructive=false|state=hover": __body164,
    // figma: Size=H40px, Hierarchy=Primary, Icon=Default, Destructive=False, State=Default
    "size=h40px|hierarchy=primary|icon=default|destructive=false|state=default": __body165,
    // figma: Size=H32px, Hierarchy=Primary, Icon=Default, Destructive=False, State=Default
    "size=h32px|hierarchy=primary|icon=default|destructive=false|state=default": __body166,
    // figma: Size=H24px, Hierarchy=Primary, Icon=Default, Destructive=False, State=Default
    "size=h24px|hierarchy=primary|icon=default|destructive=false|state=default": __body167,
    // figma: Size=H40px, Hierarchy=Primary, Icon=Default, Destructive=False, State=Disabled
    "size=h40px|hierarchy=primary|icon=default|destructive=false|state=disabled": __body168,
    // figma: Size=H32px, Hierarchy=Primary, Icon=Default, Destructive=False, State=Disabled
    "size=h32px|hierarchy=primary|icon=default|destructive=false|state=disabled": __body169,
    // figma: Size=H24px, Hierarchy=Primary, Icon=Default, Destructive=False, State=Disabled
    "size=h24px|hierarchy=primary|icon=default|destructive=false|state=disabled": __body170,
    // figma: Size=H40px, Hierarchy=Primary, Icon=Default, Destructive=False, State=Focused
    "size=h40px|hierarchy=primary|icon=default|destructive=false|state=focused": __body171,
    // figma: Size=H32px, Hierarchy=Primary, Icon=Default, Destructive=False, State=Focused
    "size=h32px|hierarchy=primary|icon=default|destructive=false|state=focused": __body172,
    // figma: Size=H24px, Hierarchy=Primary, Icon=Default, Destructive=False, State=Focused
    "size=h24px|hierarchy=primary|icon=default|destructive=false|state=focused": __body173,
    // figma: Size=H40px, Hierarchy=Primary, Icon=Default, Destructive=False, State=Hover
    "size=h40px|hierarchy=primary|icon=default|destructive=false|state=hover": __body174,
    // figma: Size=H32px, Hierarchy=Primary, Icon=Default, Destructive=False, State=Hover
    "size=h32px|hierarchy=primary|icon=default|destructive=false|state=hover": __body175,
    // figma: Size=H24px, Hierarchy=Primary, Icon=Default, Destructive=False, State=Hover
    "size=h24px|hierarchy=primary|icon=default|destructive=false|state=hover": __body176
  };
  return (__impls[__vkey_Button(props)] ?? __body167)();
}

// figma node: 275:58618 Icon/Arrow--up
function IconArrowUp(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "transparent",
      position: "relative",
      color: "inherit",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 12,
    viewBox: "0 0 10 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 2,
      width: 10,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 0 L 0 5 L 0.705 5.705 L 4.5 1.915 L 4.5 12 L 5.5 12 L 5.5 1.915 L 9.295 5.705 L 10 5 L 5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 275:58609 Icon/Close
function IconClose(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "transparent",
      position: "relative",
      color: "inherit",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 8,
    viewBox: "0 0 8 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 8,
      height: 8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 0.7 L 7.3 0 L 4 3.3 L 0.7 0 L 0 0.7 L 3.3 4 L 0 7.3 L 0.7 8 L 4 4.7 L 7.3 8 L 8 7.3 L 4.7 4 L 8 0.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 18:19149 Badge (208 variants)
const __venc_Badge2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);

const __vkey_Badge2 = p => "size=" + __venc_Badge2(p.size) + '|' + "icon=" + __venc_Badge2(p.icon) + '|' + "color=" + __venc_Badge2(p.color) + '|' + "outline=" + __venc_Badge2(p.outline);

export {
  IconAddAlt,
  IconChevronDown,
  __venc_Button,
  __vkey_Button,
  Button,
  IconArrowUp,
  IconClose,
  __venc_Badge2,
  __vkey_Badge2
};
