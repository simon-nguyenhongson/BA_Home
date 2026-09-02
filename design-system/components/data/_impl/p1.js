import React from "react";

// Implementations materialized from the Figma source. Internal module —
// consumers import the named component files in this directory instead.

// Components bundle — 54 component(s) materialized from a .fig as one
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

// figma node: 275:59347 Icon/Checkmark
function IconCheckmark(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "4px 2px 4px 2px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(22,22,22)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    height: 8.207,
    viewBox: "0 0 12 8.207",
    fill: "none",
    style: {
      position: "relative",
      height: 8.207,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.5 8.207 L 0 3.707 L 0.707 3 L 4.5 6.792 L 11.293 0 L 12 0.707 L 4.5 8.207 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 275:58599 Icon/Subtract
function IconSubtract(_p = {}) {
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
    height: 1,
    viewBox: "0 0 8 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 7.5,
      width: 8,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 0 L 0 0 L 0 1 L 8 1 L 8 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 26:6342 Checkbox icon (28 variants)
const __venc_CheckboxIcon = v => String(v).replace(/[%|=]/g, encodeURIComponent);

const __vkey_CheckboxIcon = p => "checked=" + __venc_CheckboxIcon(p.checked) + '|' + "indeterminate=" + __venc_CheckboxIcon(p.indeterminate) + '|' + "type=" + __venc_CheckboxIcon(p.type) + '|' + "state=" + __venc_CheckboxIcon(p.state);

function CheckboxIcon(_p = {}) {
  const props = {
    ..._p,
    checked: _p.checked ?? false,
    indeterminate: _p.indeterminate ?? false,
    type: _p.type ?? "check circle",
    state: _p.state ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221)",
      position: "relative",
      ...props.style
    }
  });
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221)",
      position: "relative",
      ...props.style
    }
  });
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(242,244,247)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221)",
      position: "relative",
      ...props.style
    }
  });
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(242,244,247)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221)",
      position: "relative",
      ...props.style
    }
  });
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(132,173,255), 0px 1px 2px 0px rgba(16,24,40,0.08), 0px 0px 0px 2px rgb(209,224,255)",
      position: "relative",
      ...props.style
    }
  });
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(132,173,255), 0px 1px 2px 0px rgba(16,24,40,0.08), 0px 0px 0px 2px rgb(209,224,255)",
      position: "relative",
      ...props.style
    }
  });
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(209,224,255)",
      boxShadow: "inset 0 0 0 1px rgb(21,94,239)",
      position: "relative",
      ...props.style
    }
  });
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(209,224,255)",
      boxShadow: "inset 0 0 0 1px rgb(21,94,239)",
      position: "relative",
      ...props.style
    }
  });
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(239,244,255)",
      boxShadow: "inset 0 0 0 1px rgb(21,94,239)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.103
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCheckmark, null)));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(239,244,255)",
      boxShadow: "inset 0 0 0 1px rgb(21,94,239)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 12,
      height: 12
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSubtract, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(239,244,255)",
      boxShadow: "inset 0 0 0 1px rgb(21,94,239)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 6,
      height: 6,
      borderRadius: "50%",
      backgroundColor: "rgb(127,86,217)"
    }
  }));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(21,94,239)",
      boxShadow: "inset 0 0 0 1px rgb(21,94,239)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.103
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCheckmark, null)));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(242,244,247)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.103
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCheckmark, null)));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(242,244,247)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 12,
      height: 12
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSubtract, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(242,244,247)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 6,
      height: 6,
      borderRadius: "50%",
      backgroundColor: "rgb(208,213,221)"
    }
  }));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(208,213,221)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.103
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCheckmark, null)));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(239,244,255)",
      boxShadow: "inset 0 0 0 1px rgb(21,94,239), 0px 1px 2px 0px rgba(16,24,40,0.08), 0px 0px 0px 2px rgb(209,224,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.103
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCheckmark, null)));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(239,244,255)",
      boxShadow: "inset 0 0 0 1px rgb(21,94,239), 0px 1px 2px 0px rgba(16,24,40,0.08), 0px 0px 0px 2px rgb(209,224,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 12,
      height: 12
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSubtract, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(239,244,255)",
      boxShadow: "inset 0 0 0 1px rgb(21,94,239), 0px 1px 2px 0px rgba(16,24,40,0.08), 0px 0px 0px 2px rgb(209,224,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 6,
      height: 6,
      borderRadius: "50%",
      backgroundColor: "rgb(127,86,217)"
    }
  }));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(21,94,239)",
      boxShadow: "inset 0 0 0 1px rgb(21,94,239), 0px 1px 2px 0px rgba(16,24,40,0.08), 0px 0px 0px 2px rgb(209,224,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.103
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCheckmark, null)));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(209,224,255)",
      boxShadow: "inset 0 0 0 1px rgb(21,94,239)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.103
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCheckmark, null)));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "rgb(209,224,255)",
      boxShadow: "inset 0 0 0 1px rgb(21,94,239)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 12,
      height: 12
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSubtract, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(209,224,255)",
      boxShadow: "inset 0 0 0 1px rgb(21,94,239)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 5,
      width: 6,
      height: 6,
      borderRadius: "50%",
      backgroundColor: "rgb(127,86,217)"
    }
  }));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(0,78,235)",
      boxShadow: "inset 0 0 0 1px rgb(0,78,235)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -0.103
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCheckmark, null)));
  const __impls = {
    // figma: Checked=False, Indeterminate=False, Type=Checkbox, State=Default
    "checked=false|indeterminate=false|type=checkbox|state=default": __body0,
    // figma: Checked=False, Indeterminate=False, Type=Radio, State=Default
    "checked=false|indeterminate=false|type=radio|state=default": __body1,
    // figma: Checked=False, Indeterminate=False, Type=Check circle, State=Default
    "checked=false|indeterminate=false|type=check circle|state=default": __body1,
    // figma: Checked=False, Indeterminate=False, Type=Checkbox, State=Disbaled
    "checked=false|indeterminate=false|type=checkbox|state=disbaled": __body2,
    // figma: Checked=False, Indeterminate=False, Type=Radio, State=Disbaled
    "checked=false|indeterminate=false|type=radio|state=disbaled": __body3,
    // figma: Checked=False, Indeterminate=False, Type=Check circle, State=Disbaled
    "checked=false|indeterminate=false|type=check circle|state=disbaled": __body3,
    // figma: Checked=False, Indeterminate=False, Type=Checkbox, State=Focused
    "checked=false|indeterminate=false|type=checkbox|state=focused": __body4,
    // figma: Checked=False, Indeterminate=False, Type=Radio, State=Focused
    "checked=false|indeterminate=false|type=radio|state=focused": __body5,
    // figma: Checked=False, Indeterminate=False, Type=Check circle, State=Focused
    "checked=false|indeterminate=false|type=check circle|state=focused": __body5,
    // figma: Checked=False, Indeterminate=False, Type=Checkbox, State=Hover
    "checked=false|indeterminate=false|type=checkbox|state=hover": __body6,
    // figma: Checked=False, Indeterminate=False, Type=Radio, State=Hover
    "checked=false|indeterminate=false|type=radio|state=hover": __body7,
    // figma: Checked=False, Indeterminate=False, Type=Check circle, State=Hover
    "checked=false|indeterminate=false|type=check circle|state=hover": __body7,
    // figma: Checked=True, Indeterminate=False, Type=Checkbox, State=Default
    "checked=true|indeterminate=false|type=checkbox|state=default": __body8,
    // figma: Checked=True, Indeterminate=True, Type=Checkbox, State=Default
    "checked=true|indeterminate=true|type=checkbox|state=default": __body9,
    // figma: Checked=True, Indeterminate=False, Type=Radio, State=Default
    "checked=true|indeterminate=false|type=radio|state=default": __body10,
    // figma: Checked=True, Indeterminate=False, Type=Check circle, State=Default
    "checked=true|indeterminate=false|type=check circle|state=default": __body11,
    // figma: Checked=True, Indeterminate=False, Type=Checkbox, State=Disbaled
    "checked=true|indeterminate=false|type=checkbox|state=disbaled": __body12,
    // figma: Checked=True, Indeterminate=True, Type=Checkbox, State=Disbaled
    "checked=true|indeterminate=true|type=checkbox|state=disbaled": __body13,
    // figma: Checked=True, Indeterminate=False, Type=Radio, State=Disbaled
    "checked=true|indeterminate=false|type=radio|state=disbaled": __body14,
    // figma: Checked=True, Indeterminate=False, Type=Check circle, State=Disbaled
    "checked=true|indeterminate=false|type=check circle|state=disbaled": __body15,
    // figma: Checked=True, Indeterminate=False, Type=Checkbox, State=Focused
    "checked=true|indeterminate=false|type=checkbox|state=focused": __body16,
    // figma: Checked=True, Indeterminate=True, Type=Checkbox, State=Focused
    "checked=true|indeterminate=true|type=checkbox|state=focused": __body17,
    // figma: Checked=True, Indeterminate=False, Type=Radio, State=Focused
    "checked=true|indeterminate=false|type=radio|state=focused": __body18,
    // figma: Checked=True, Indeterminate=False, Type=Check circle, State=Focused
    "checked=true|indeterminate=false|type=check circle|state=focused": __body19,
    // figma: Checked=True, Indeterminate=False, Type=Checkbox, State=Hover
    "checked=true|indeterminate=false|type=checkbox|state=hover": __body20,
    // figma: Checked=True, Indeterminate=True, Type=Checkbox, State=Hover
    "checked=true|indeterminate=true|type=checkbox|state=hover": __body21,
    // figma: Checked=True, Indeterminate=False, Type=Radio, State=Hover
    "checked=true|indeterminate=false|type=radio|state=hover": __body22,
    // figma: Checked=True, Indeterminate=False, Type=Check circle, State=Hover
    "checked=true|indeterminate=false|type=check circle|state=hover": __body23
  };
  return (__impls[__vkey_CheckboxIcon(props)] ?? __body1)();
}

// figma node: 275:58611 Icon/Chevron--right
function IconChevronRight(_p = {}) {
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
    width: 5.700,
    height: 10,
    viewBox: "0 0 5.700 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 5.3,
      top: 3,
      width: 5.7,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.7 5 L 0.7 10 L 0 9.3 L 4.3 5 L 0 0.7 L 0.7 0 L 5.7 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 275:59776 Icon/Menu
function IconMenu(_p = {}) {
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
    width: 12,
    height: 10,
    viewBox: "0 0 12 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 3,
      width: 12,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12 0 L 0 0 L 0 1 L 12 1 L 12 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12 9 L 0 9 L 0 10 L 12 10 L 12 9 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12 3 L 0 3 L 0 4 L 12 4 L 12 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 12 6 L 0 6 L 0 7 L 12 7 L 12 6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 679:35992 Skeleton Title (7 variants)
const __venc_SkeletonTitle = v => String(v).replace(/[%|=]/g, encodeURIComponent);

const __vkey_SkeletonTitle = p => "size=" + __venc_SkeletonTitle(p.size);

function SkeletonTitle(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "l"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 193,
      height: 40,
      borderRadius: 6,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 193,
      height: 40,
      borderRadius: 4,
      background: "linear-gradient(153.880deg, rgb(242,244,247) -27.79%, rgba(242,244,247,0.16) 43.61%, rgb(242,244,247) 115.01%)"
    }
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 193,
      height: 32,
      borderRadius: 6,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 193,
      height: 32,
      borderRadius: 4,
      background: "linear-gradient(148.496deg, rgb(242,244,247) -9.79%, rgba(242,244,247,0.16) 46.96%, rgb(242,244,247) 103.71%)"
    }
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 193,
      height: 24,
      borderRadius: 6,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 193,
      height: 24,
      borderRadius: 4,
      background: "linear-gradient(140.744deg, rgb(242,244,247) 7.50%, rgba(242,244,247,0.16) 50.18%, rgb(242,244,247) 92.86%)"
    }
  }));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 193,
      height: 20,
      borderRadius: 6,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 193,
      height: 20,
      borderRadius: 4,
      background: "linear-gradient(135.560deg, rgb(242,244,247) 15.31%, rgba(242,244,247,0.16) 51.64%, rgb(242,244,247) 87.96%)"
    }
  }));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 193,
      height: 16,
      borderRadius: 6,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 193,
      height: 16,
      borderRadius: 4,
      background: "linear-gradient(129.207deg, rgb(242,244,247) 22.20%, rgba(242,244,247,0.16) 52.92%, rgb(242,244,247) 83.63%)"
    }
  }));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 193,
      height: 4,
      borderRadius: 6,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 193,
      height: 4,
      borderRadius: 4,
      background: "linear-gradient(101.527deg, rgb(242,244,247) 34.85%, rgba(242,244,247,0.16) 55.27%, rgb(242,244,247) 75.69%)"
    }
  }));
  const __impls = {
    // figma: Size=l
    "size=l": __body0,
    // figma: Size=m
    "size=m": __body1,
    // figma: Size=s
    "size=s": __body2,
    // figma: Size=xs
    "size=xs": __body2,
    // figma: Size=xxs
    "size=xxs": __body3,
    // figma: Size=xxxs
    "size=xxxs": __body4,
    // figma: Size=tiny
    "size=tiny": __body5
  };
  return (__impls[__vkey_SkeletonTitle(props)] ?? __body0)();
}

// figma node: 28:7379 Cursor (3 variants)
const __venc_Cursor = v => String(v).replace(/[%|=]/g, encodeURIComponent);

const __vkey_Cursor = p => "state=" + __venc_Cursor(p.state);

function Cursor(_p = {}) {
  const props = {
    ..._p,
    state: _p.state ?? "arrow"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13,
    height: 12,
    viewBox: "0 0 13 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 13,
      height: 12,
      filter: "drop-shadow(0px 1px 2px rgba(7,32,61,0.24))",
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.673 0.848 C 3.16 0.662 4.121 0.776 4.375 1.34 C 4.591 1.821 4.777 2.633 4.787 2.46 C 4.812 2.076 4.763 1.245 4.926 0.81 C 5.045 0.494 5.279 0.196 5.623 0.091 C 5.912 0.001 6.252 -0.03 6.552 0.033 C 6.87 0.1 7.204 0.332 7.329 0.553 C 7.696 1.202 7.703 2.531 7.72 2.46 C 7.785 2.177 7.791 1.18 8.007 0.81 C 8.15 0.566 8.512 0.347 8.704 0.312 C 9.003 0.257 9.37 0.241 9.683 0.303 C 9.936 0.354 10.278 0.661 10.37 0.81 C 10.593 1.169 10.717 2.181 10.755 2.537 C 10.771 2.684 10.83 2.128 11.052 1.77 C 11.465 1.105 12.924 0.976 12.979 2.436 C 13.005 3.117 12.999 3.086 12.999 3.544 C 12.999 4.081 12.987 4.406 12.959 4.796 C 12.928 5.211 12.841 6.154 12.714 6.61 C 12.627 6.923 12.338 7.628 12.051 8.051 C 12.051 8.051 10.961 9.353 10.842 9.938 C 10.724 10.524 10.763 10.528 10.739 10.943 C 10.715 11.358 10.862 11.904 10.862 11.904 C 10.862 11.904 10.048 12.012 9.609 11.939 C 9.212 11.875 8.721 11.065 8.594 10.817 C 8.419 10.475 8.047 10.541 7.902 10.793 C 7.674 11.192 7.182 11.907 6.836 11.952 C 6.157 12.039 4.75 11.983 3.648 11.973 C 3.648 11.973 3.836 10.92 3.418 10.558 C 3.108 10.288 2.575 9.742 2.257 9.455 L 1.412 8.496 C 1.125 8.121 0.395 7.528 0.15 6.428 C -0.066 5.454 -0.045 4.976 0.188 4.585 C 0.423 4.188 0.868 3.972 1.055 3.934 C 1.266 3.891 1.757 3.894 1.943 3.999 C 2.169 4.127 2.261 4.165 2.438 4.406 C 2.672 4.726 2.755 4.881 2.654 4.532 C 2.577 4.259 2.328 3.913 2.214 3.522 C 2.103 3.146 1.807 2.54 1.828 1.933 C 1.836 1.703 1.933 1.13 2.673 0.848 Z",
    fill: "rgb(255,255,255)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.673 0.848 L 2.539 0.497 L 2.539 0.497 L 2.673 0.848 Z M 4.375 1.34 L 4.717 1.187 L 4.717 1.187 L 4.375 1.34 Z M 4.787 2.46 L 4.413 2.436 L 4.413 2.438 L 4.787 2.46 Z M 4.926 0.81 L 5.277 0.942 L 5.277 0.942 L 4.926 0.81 Z M 5.623 0.091 L 5.732 0.449 L 5.734 0.449 L 5.623 0.091 Z M 6.552 0.033 L 6.475 0.4 L 6.475 0.4 L 6.552 0.033 Z M 7.329 0.553 L 7.003 0.738 L 7.003 0.738 L 7.329 0.553 Z M 7.72 2.46 L 8.084 2.549 L 8.085 2.544 L 7.72 2.46 Z M 8.007 0.81 L 8.331 1 L 8.007 0.81 Z M 8.704 0.312 L 8.638 -0.057 L 8.637 -0.057 L 8.704 0.312 Z M 9.683 0.303 L 9.757 -0.064 L 9.757 -0.065 L 9.683 0.303 Z M 10.37 0.81 L 10.052 1.008 L 10.052 1.008 L 10.37 0.81 Z M 10.755 2.537 L 10.382 2.576 L 10.382 2.578 L 10.755 2.537 Z M 11.052 1.77 L 11.371 1.969 L 11.371 1.968 L 11.052 1.77 Z M 12.979 2.436 L 12.604 2.45 L 12.604 2.45 L 12.979 2.436 Z M 12.959 4.796 L 13.333 4.823 L 13.333 4.823 L 12.959 4.796 Z M 12.714 6.61 L 13.075 6.71 L 13.075 6.71 L 12.714 6.61 Z M 12.051 8.051 L 12.339 8.292 C 12.347 8.282 12.355 8.272 12.362 8.261 L 12.051 8.051 Z M 10.842 9.938 L 10.475 9.863 L 10.475 9.863 L 10.842 9.938 Z M 10.739 10.943 L 10.364 10.921 L 10.364 10.922 L 10.739 10.943 Z M 10.862 11.904 L 10.911 12.276 C 11.018 12.261 11.114 12.202 11.174 12.112 C 11.233 12.022 11.252 11.911 11.224 11.807 L 10.862 11.904 Z M 9.609 11.939 L 9.67 11.569 L 9.669 11.569 L 9.609 11.939 Z M 8.594 10.817 L 8.26 10.987 L 8.26 10.988 L 8.594 10.817 Z M 7.902 10.793 L 7.577 10.606 L 7.576 10.607 L 7.902 10.793 Z M 6.836 11.952 L 6.884 12.324 L 6.884 12.324 L 6.836 11.952 Z M 3.648 11.973 L 3.279 11.907 C 3.26 12.015 3.289 12.127 3.36 12.212 C 3.43 12.297 3.534 12.347 3.645 12.348 L 3.648 11.973 Z M 3.418 10.558 L 3.171 10.841 L 3.173 10.842 L 3.418 10.558 Z M 2.257 9.455 L 1.975 9.702 C 1.985 9.713 1.995 9.723 2.005 9.733 L 2.257 9.455 Z M 1.412 8.496 L 1.114 8.724 C 1.119 8.73 1.125 8.737 1.131 8.743 L 1.412 8.496 Z M 0.15 6.428 L -0.216 6.51 L -0.216 6.51 L 0.15 6.428 Z M 0.188 4.585 L 0.51 4.777 L 0.51 4.777 L 0.188 4.585 Z M 1.055 3.934 L 1.128 4.302 L 1.131 4.302 L 1.055 3.934 Z M 1.943 3.999 L 1.758 4.325 L 1.758 4.325 L 1.943 3.999 Z M 2.438 4.406 L 2.741 4.185 L 2.74 4.184 L 2.438 4.406 Z M 2.654 4.532 L 2.294 4.634 L 2.294 4.636 L 2.654 4.532 Z M 2.214 3.522 L 2.574 3.417 L 2.574 3.416 L 2.214 3.522 Z M 1.828 1.933 L 1.453 1.92 L 1.453 1.92 L 1.828 1.933 Z M 2.806 1.198 C 2.967 1.137 3.252 1.116 3.528 1.179 C 3.811 1.243 3.976 1.368 4.033 1.494 L 4.717 1.187 C 4.52 0.748 4.078 0.534 3.695 0.447 C 3.305 0.359 2.866 0.373 2.539 0.497 L 2.806 1.198 Z M 4.033 1.494 C 4.13 1.71 4.224 2.009 4.3 2.256 C 4.336 2.371 4.371 2.485 4.398 2.557 C 4.405 2.576 4.414 2.599 4.425 2.622 C 4.429 2.631 4.456 2.691 4.508 2.744 C 4.528 2.764 4.622 2.858 4.779 2.859 C 4.974 2.859 5.076 2.724 5.109 2.668 C 5.141 2.611 5.151 2.56 5.154 2.542 C 5.159 2.517 5.161 2.496 5.162 2.482 L 4.413 2.438 C 4.413 2.434 4.414 2.422 4.417 2.405 C 4.419 2.393 4.428 2.347 4.458 2.294 C 4.489 2.241 4.589 2.108 4.781 2.109 C 4.935 2.109 5.026 2.201 5.043 2.218 C 5.071 2.247 5.087 2.273 5.092 2.281 C 5.098 2.292 5.102 2.3 5.103 2.302 C 5.105 2.306 5.104 2.304 5.1 2.294 C 5.083 2.248 5.056 2.161 5.017 2.034 C 4.944 1.799 4.836 1.452 4.717 1.187 L 4.033 1.494 Z M 5.161 2.484 C 5.168 2.376 5.17 2.241 5.171 2.105 C 5.173 1.965 5.174 1.817 5.179 1.667 C 5.191 1.355 5.22 1.096 5.277 0.942 L 4.575 0.678 C 4.47 0.959 4.441 1.332 4.43 1.64 C 4.424 1.801 4.423 1.96 4.421 2.097 C 4.42 2.239 4.418 2.352 4.413 2.436 L 5.161 2.484 Z M 5.277 0.942 C 5.371 0.692 5.537 0.509 5.732 0.449 L 5.513 -0.268 C 5.02 -0.117 4.719 0.296 4.575 0.679 L 5.277 0.942 Z M 5.734 0.449 C 5.974 0.375 6.248 0.352 6.475 0.4 L 6.63 -0.333 C 6.256 -0.413 5.85 -0.372 5.512 -0.267 L 5.734 0.449 Z M 6.475 0.4 C 6.579 0.422 6.697 0.474 6.803 0.546 C 6.912 0.62 6.978 0.694 7.003 0.738 L 7.655 0.368 C 7.555 0.191 7.392 0.039 7.223 -0.075 C 7.052 -0.191 6.844 -0.289 6.629 -0.334 L 6.475 0.4 Z M 7.003 0.738 C 7.146 0.991 7.234 1.419 7.284 1.822 C 7.307 2.015 7.321 2.187 7.329 2.309 C 7.333 2.367 7.337 2.422 7.339 2.456 C 7.34 2.468 7.343 2.497 7.348 2.524 C 7.349 2.531 7.352 2.549 7.359 2.57 C 7.362 2.581 7.368 2.6 7.38 2.624 C 7.388 2.64 7.415 2.696 7.473 2.746 C 7.547 2.81 7.688 2.874 7.85 2.814 C 7.969 2.769 8.025 2.681 8.038 2.659 C 8.072 2.604 8.083 2.553 8.084 2.549 L 7.355 2.371 C 7.356 2.369 7.367 2.319 7.4 2.265 C 7.413 2.244 7.468 2.156 7.587 2.111 C 7.749 2.051 7.89 2.115 7.963 2.179 C 8.022 2.229 8.048 2.284 8.056 2.3 C 8.067 2.323 8.073 2.342 8.076 2.351 C 8.082 2.371 8.085 2.386 8.086 2.391 C 8.088 2.405 8.088 2.413 8.087 2.394 C 8.085 2.366 8.082 2.324 8.077 2.257 C 8.068 2.129 8.054 1.942 8.028 1.731 C 7.978 1.325 7.879 0.764 7.655 0.368 L 7.003 0.738 Z M 8.085 2.544 C 8.108 2.444 8.123 2.302 8.135 2.17 C 8.149 2.026 8.162 1.87 8.179 1.709 C 8.197 1.548 8.219 1.394 8.247 1.262 C 8.277 1.124 8.308 1.039 8.331 1 L 7.683 0.621 C 7.599 0.766 7.548 0.945 7.513 1.106 C 7.478 1.274 7.453 1.456 7.434 1.626 C 7.415 1.796 7.401 1.966 7.388 2.099 C 7.375 2.245 7.364 2.334 7.354 2.376 L 8.085 2.544 Z M 8.331 1 C 8.363 0.944 8.44 0.866 8.548 0.793 C 8.658 0.718 8.747 0.685 8.772 0.68 L 8.637 -0.057 C 8.469 -0.027 8.281 0.068 8.127 0.172 C 7.97 0.278 7.794 0.432 7.683 0.621 L 8.331 1 Z M 8.771 0.68 C 9.038 0.632 9.356 0.62 9.61 0.671 L 9.757 -0.065 C 9.385 -0.139 8.968 -0.117 8.638 -0.057 L 8.771 0.68 Z M 9.609 0.671 C 9.647 0.678 9.738 0.723 9.854 0.814 C 9.906 0.855 9.953 0.898 9.99 0.936 C 10.009 0.956 10.024 0.972 10.035 0.986 C 10.04 0.993 10.045 0.998 10.047 1.002 C 10.051 1.006 10.052 1.008 10.052 1.008 L 10.689 0.613 C 10.61 0.485 10.464 0.34 10.319 0.226 C 10.178 0.114 9.972 -0.021 9.757 -0.064 L 9.609 0.671 Z M 10.052 1.008 C 10.08 1.053 10.118 1.144 10.159 1.285 C 10.198 1.42 10.233 1.579 10.263 1.743 C 10.324 2.072 10.364 2.403 10.382 2.576 L 11.128 2.498 C 11.109 2.315 11.067 1.962 11.001 1.606 C 10.967 1.428 10.927 1.244 10.879 1.077 C 10.833 0.917 10.772 0.747 10.689 0.613 L 10.052 1.008 Z M 10.382 2.578 C 10.384 2.59 10.388 2.634 10.405 2.681 C 10.411 2.697 10.437 2.773 10.509 2.838 C 10.551 2.877 10.618 2.919 10.709 2.932 C 10.801 2.945 10.879 2.923 10.935 2.894 C 11.028 2.847 11.073 2.774 11.082 2.76 C 11.099 2.734 11.109 2.711 11.114 2.699 C 11.125 2.675 11.132 2.651 11.136 2.638 C 11.149 2.596 11.172 2.502 11.189 2.44 C 11.232 2.278 11.291 2.097 11.371 1.969 L 10.734 1.572 C 10.591 1.801 10.51 2.076 10.464 2.245 C 10.436 2.349 10.428 2.389 10.418 2.42 C 10.417 2.426 10.419 2.417 10.425 2.403 C 10.428 2.397 10.436 2.378 10.45 2.356 C 10.458 2.344 10.501 2.274 10.592 2.227 C 10.646 2.199 10.724 2.177 10.815 2.19 C 10.905 2.203 10.971 2.245 11.013 2.283 C 11.083 2.347 11.108 2.419 11.112 2.432 C 11.121 2.456 11.124 2.475 11.126 2.481 C 11.127 2.489 11.128 2.495 11.128 2.496 L 10.382 2.578 Z M 11.371 1.968 C 11.489 1.778 11.799 1.63 12.091 1.677 C 12.223 1.697 12.338 1.757 12.424 1.861 C 12.511 1.967 12.593 2.147 12.604 2.45 L 13.354 2.422 C 13.338 1.994 13.217 1.644 13.002 1.384 C 12.786 1.122 12.5 0.982 12.208 0.936 C 11.653 0.848 11.028 1.097 10.734 1.573 L 11.371 1.968 Z M 12.604 2.45 C 12.63 3.124 12.624 3.087 12.624 3.544 L 13.374 3.544 C 13.374 3.084 13.38 3.11 13.354 2.421 L 12.604 2.45 Z M 12.624 3.544 C 12.624 4.074 12.612 4.389 12.585 4.768 L 13.333 4.823 C 13.362 4.423 13.374 4.089 13.374 3.544 L 12.624 3.544 Z M 12.585 4.768 C 12.554 5.192 12.468 6.096 12.353 6.509 L 13.075 6.71 C 13.214 6.211 13.303 5.23 13.333 4.823 L 12.585 4.768 Z M 12.353 6.509 C 12.274 6.792 12 7.458 11.741 7.841 L 12.362 8.261 C 12.675 7.798 12.979 7.055 13.075 6.71 L 12.353 6.509 Z M 12.051 8.051 C 11.764 7.81 11.764 7.81 11.764 7.81 C 11.764 7.81 11.764 7.81 11.764 7.81 C 11.764 7.81 11.764 7.81 11.763 7.811 C 11.763 7.811 11.763 7.811 11.763 7.811 C 11.762 7.812 11.761 7.813 11.76 7.815 C 11.758 7.817 11.754 7.821 11.75 7.826 C 11.742 7.837 11.729 7.852 11.714 7.871 C 11.683 7.909 11.639 7.963 11.585 8.03 C 11.479 8.165 11.335 8.35 11.187 8.556 C 11.04 8.76 10.885 8.988 10.757 9.207 C 10.635 9.417 10.517 9.653 10.475 9.863 L 11.21 10.012 C 11.226 9.93 11.289 9.784 11.405 9.585 C 11.516 9.395 11.655 9.188 11.796 8.994 C 11.935 8.801 12.071 8.625 12.173 8.496 C 12.224 8.433 12.265 8.381 12.294 8.345 C 12.309 8.328 12.32 8.314 12.328 8.305 C 12.332 8.3 12.334 8.297 12.336 8.295 C 12.337 8.294 12.338 8.293 12.338 8.292 C 12.339 8.292 12.339 8.292 12.339 8.292 C 12.339 8.292 12.339 8.292 12.339 8.292 C 12.339 8.292 12.339 8.292 12.339 8.292 C 12.339 8.292 12.339 8.292 12.051 8.051 Z M 10.475 9.863 C 10.349 10.484 10.387 10.537 10.364 10.921 L 11.113 10.965 C 11.139 10.519 11.098 10.564 11.21 10.012 L 10.475 9.863 Z M 10.364 10.922 C 10.35 11.173 10.387 11.448 10.422 11.645 C 10.44 11.747 10.459 11.834 10.474 11.897 C 10.481 11.928 10.487 11.953 10.492 11.971 C 10.494 11.98 10.496 11.987 10.497 11.992 C 10.498 11.994 10.498 11.997 10.499 11.998 C 10.499 11.999 10.499 11.999 10.499 12 C 10.499 12 10.499 12 10.499 12 C 10.499 12.001 10.499 12.001 10.499 12.001 C 10.499 12.001 10.499 12.001 10.499 12.001 C 10.499 12.001 10.499 12.001 10.862 11.904 C 11.224 11.807 11.224 11.807 11.224 11.807 C 11.224 11.807 11.224 11.807 11.224 11.807 C 11.224 11.807 11.224 11.807 11.224 11.807 C 11.224 11.807 11.224 11.807 11.224 11.807 C 11.224 11.807 11.224 11.807 11.224 11.807 C 11.224 11.806 11.223 11.805 11.223 11.803 C 11.222 11.8 11.221 11.795 11.219 11.788 C 11.216 11.775 11.211 11.754 11.204 11.728 C 11.192 11.675 11.176 11.6 11.161 11.513 C 11.129 11.334 11.104 11.128 11.113 10.964 L 10.364 10.922 Z M 10.862 11.904 C 10.812 11.532 10.812 11.532 10.812 11.532 C 10.812 11.532 10.812 11.532 10.812 11.532 C 10.812 11.532 10.812 11.532 10.812 11.532 C 10.812 11.532 10.812 11.532 10.812 11.532 C 10.812 11.532 10.811 11.532 10.811 11.532 C 10.809 11.533 10.807 11.533 10.805 11.533 C 10.799 11.534 10.791 11.535 10.78 11.536 C 10.759 11.539 10.727 11.543 10.687 11.547 C 10.608 11.555 10.497 11.566 10.374 11.575 C 10.117 11.593 9.843 11.598 9.67 11.569 L 9.548 12.309 C 9.815 12.354 10.167 12.341 10.426 12.323 C 10.561 12.314 10.682 12.302 10.768 12.292 C 10.812 12.288 10.847 12.284 10.871 12.281 C 10.884 12.279 10.893 12.278 10.9 12.277 C 10.903 12.277 10.906 12.276 10.908 12.276 C 10.909 12.276 10.909 12.276 10.91 12.276 C 10.91 12.276 10.911 12.276 10.911 12.276 C 10.911 12.276 10.911 12.276 10.911 12.276 C 10.911 12.276 10.911 12.276 10.911 12.276 C 10.911 12.276 10.911 12.276 10.862 11.904 Z M 9.669 11.569 C 9.671 11.569 9.629 11.559 9.545 11.487 C 9.467 11.42 9.382 11.326 9.296 11.216 C 9.124 10.996 8.982 10.752 8.928 10.646 L 8.26 10.988 C 8.332 11.129 8.499 11.414 8.704 11.677 C 8.807 11.809 8.927 11.945 9.057 12.056 C 9.18 12.162 9.349 12.277 9.549 12.309 L 9.669 11.569 Z M 8.928 10.646 C 8.78 10.357 8.514 10.196 8.222 10.207 C 7.952 10.218 7.709 10.375 7.577 10.606 L 8.226 10.98 C 8.232 10.971 8.239 10.964 8.245 10.96 C 8.252 10.956 8.254 10.957 8.251 10.957 C 8.25 10.957 8.247 10.957 8.244 10.956 C 8.24 10.955 8.237 10.954 8.236 10.953 C 8.235 10.952 8.236 10.953 8.24 10.957 C 8.244 10.962 8.252 10.971 8.26 10.987 L 8.928 10.646 Z M 7.576 10.607 C 7.47 10.793 7.302 11.052 7.125 11.265 C 7.036 11.372 6.953 11.458 6.88 11.516 C 6.8 11.581 6.771 11.582 6.788 11.58 L 6.884 12.324 C 7.074 12.299 7.236 12.194 7.352 12.099 C 7.477 11.999 7.596 11.872 7.702 11.745 C 7.914 11.489 8.106 11.191 8.227 10.978 L 7.576 10.607 Z M 6.788 11.58 C 6.477 11.62 5.98 11.628 5.403 11.624 C 4.808 11.619 4.233 11.603 3.652 11.598 L 3.645 12.348 C 4.165 12.353 4.844 12.37 5.397 12.374 C 5.969 12.378 6.515 12.371 6.884 12.324 L 6.788 11.58 Z M 3.648 11.973 C 4.017 12.038 4.017 12.038 4.017 12.038 C 4.017 12.038 4.017 12.038 4.017 12.038 C 4.018 12.038 4.018 12.038 4.018 12.038 C 4.018 12.037 4.018 12.037 4.018 12.036 C 4.018 12.035 4.018 12.034 4.018 12.033 C 4.019 12.03 4.02 12.026 4.02 12.021 C 4.022 12.011 4.024 11.998 4.027 11.981 C 4.031 11.947 4.038 11.9 4.044 11.842 C 4.056 11.727 4.068 11.568 4.065 11.395 C 4.062 11.223 4.044 11.023 3.992 10.832 C 3.94 10.645 3.845 10.432 3.663 10.275 L 3.173 10.842 C 3.2 10.866 3.238 10.92 3.269 11.031 C 3.299 11.14 3.313 11.271 3.315 11.408 C 3.317 11.542 3.308 11.669 3.298 11.763 C 3.293 11.81 3.288 11.847 3.284 11.872 C 3.283 11.885 3.281 11.894 3.28 11.9 C 3.28 11.903 3.279 11.905 3.279 11.906 C 3.279 11.907 3.279 11.907 3.279 11.907 C 3.279 11.907 3.279 11.907 3.279 11.907 C 3.279 11.907 3.279 11.907 3.279 11.907 C 3.279 11.907 3.279 11.907 3.279 11.907 C 3.279 11.907 3.279 11.907 3.648 11.973 Z M 3.665 10.276 C 3.519 10.149 3.316 9.953 3.102 9.744 C 2.893 9.541 2.674 9.326 2.508 9.176 L 2.005 9.733 C 2.158 9.871 2.364 10.073 2.579 10.281 C 2.788 10.485 3.007 10.697 3.171 10.841 L 3.665 10.276 Z M 2.538 9.207 L 1.693 8.248 L 1.131 8.743 L 1.975 9.702 L 2.538 9.207 Z M 1.71 8.267 C 1.362 7.814 0.737 7.339 0.516 6.347 L -0.216 6.51 C 0.053 7.717 0.888 8.428 1.114 8.724 L 1.71 8.267 Z M 0.516 6.347 C 0.303 5.384 0.357 5.034 0.51 4.777 L -0.134 4.393 C -0.446 4.917 -0.435 5.524 -0.216 6.51 L 0.516 6.347 Z M 0.51 4.777 C 0.592 4.64 0.715 4.524 0.846 4.438 C 0.982 4.348 1.095 4.309 1.128 4.302 L 0.981 3.567 C 0.828 3.597 0.625 3.685 0.433 3.812 C 0.236 3.943 0.019 4.134 -0.135 4.394 L 0.51 4.777 Z M 1.131 4.302 C 1.194 4.288 1.336 4.278 1.49 4.285 C 1.564 4.289 1.631 4.296 1.685 4.307 C 1.745 4.318 1.764 4.329 1.758 4.325 L 2.128 3.673 C 2.029 3.617 1.917 3.587 1.826 3.57 C 1.729 3.551 1.625 3.541 1.527 3.536 C 1.336 3.527 1.126 3.537 0.979 3.567 L 1.131 4.302 Z M 1.758 4.325 C 1.888 4.399 1.935 4.423 1.982 4.459 C 2.018 4.486 2.061 4.526 2.136 4.628 L 2.74 4.184 C 2.638 4.045 2.546 3.945 2.435 3.861 C 2.336 3.786 2.224 3.727 2.128 3.673 L 1.758 4.325 Z M 2.135 4.627 C 2.195 4.708 2.236 4.768 2.281 4.829 C 2.312 4.872 2.364 4.945 2.415 4.993 C 2.429 5.006 2.464 5.038 2.515 5.064 C 2.555 5.084 2.709 5.152 2.877 5.056 C 3.032 4.967 3.06 4.816 3.066 4.783 C 3.074 4.733 3.071 4.69 3.069 4.671 C 3.063 4.599 3.037 4.507 3.015 4.428 L 2.294 4.636 C 2.322 4.732 2.324 4.751 2.322 4.738 C 2.322 4.734 2.319 4.703 2.326 4.661 C 2.33 4.636 2.355 4.49 2.506 4.404 C 2.67 4.311 2.819 4.377 2.853 4.394 C 2.897 4.417 2.924 4.442 2.928 4.446 C 2.942 4.459 2.936 4.456 2.889 4.39 C 2.855 4.343 2.799 4.264 2.741 4.185 L 2.135 4.627 Z M 3.015 4.43 C 2.964 4.249 2.86 4.054 2.782 3.901 C 2.695 3.731 2.62 3.575 2.574 3.417 L 1.854 3.627 C 1.922 3.86 2.028 4.072 2.114 4.241 C 2.208 4.428 2.268 4.542 2.294 4.634 L 3.015 4.43 Z M 2.574 3.416 C 2.542 3.309 2.498 3.189 2.457 3.073 C 2.413 2.953 2.369 2.831 2.33 2.703 C 2.249 2.445 2.194 2.188 2.203 1.946 L 1.453 1.92 C 1.441 2.285 1.523 2.635 1.613 2.925 C 1.659 3.072 1.708 3.209 1.751 3.328 C 1.796 3.451 1.83 3.547 1.854 3.628 L 2.574 3.416 Z M 2.203 1.946 C 2.206 1.869 2.224 1.733 2.302 1.595 C 2.376 1.464 2.517 1.308 2.806 1.198 L 2.539 0.497 C 2.088 0.669 1.811 0.941 1.65 1.225 C 1.493 1.501 1.459 1.766 1.453 1.92 L 2.203 1.946 Z",
    fill: "rgb(16,24,40)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 4,
    viewBox: "0 0 5 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 9,
      top: 9,
      width: 5,
      height: 4,
      color: "rgb(16,24,40)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0.5 C 1 0.224 0.776 0 0.5 0 C 0.224 0 0 0.224 0 0.5 L 0 3.5 C 0 3.776 0.224 4 0.5 4 C 0.776 4 1 3.776 1 3.5 L 1 0.5 Z M 2.5 0 C 2.776 0 3 0.224 3 0.5 L 3 3.5 C 3 3.776 2.776 4 2.5 4 C 2.224 4 2 3.776 2 3.5 L 2 0.5 C 2 0.224 2.224 0 2.5 0 Z M 4.5 0 C 4.776 0 5 0.224 5 0.5 L 5 3.5 C 5 3.776 4.776 4 4.5 4 C 4.224 4 4 3.776 4 3.5 L 4 0.5 C 4 0.224 4.224 0 4.5 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
      color: "rgb(16,24,40)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9,
    height: 13,
    viewBox: "0 0 9 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 3,
      width: 9,
      height: 13,
      filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.24))"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 11 L 0 0 L 9 6 L 5 7 L 8.5 12 L 7 13 L 3.5 8 L 1 11 Z",
    fill: "rgb(16,24,40)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0.555 -0.832 L -1.185 -1.992 L -0.996 0.091 L 0 0 Z M 1 11 L 0.004 11.091 L 0.223 13.495 L 1.768 11.64 L 1 11 Z M 9 6 L 9.243 6.97 L 11.436 6.422 L 9.555 5.168 L 9 6 Z M 5 7 L 4.757 6.03 L 3.347 6.382 L 4.181 7.573 L 5 7 Z M 8.5 12 L 9.055 12.832 L 9.906 12.265 L 9.319 11.427 L 8.5 12 Z M 7 13 L 6.181 13.573 L 6.741 14.374 L 7.555 13.832 L 7 13 Z M 3.5 8 L 4.319 7.427 L 3.569 6.355 L 2.732 7.36 L 3.5 8 Z M -0.996 0.091 L 0.004 11.091 L 1.996 10.909 L 0.996 -0.091 L -0.996 0.091 Z M 9.555 5.168 L 0.555 -0.832 L -0.555 0.832 L 8.445 6.832 L 9.555 5.168 Z M 5.243 7.97 L 9.243 6.97 L 8.757 5.03 L 4.757 6.03 L 5.243 7.97 Z M 4.181 7.573 L 7.681 12.573 L 9.319 11.427 L 5.819 6.427 L 4.181 7.573 Z M 7.945 11.168 L 6.445 12.168 L 7.555 13.832 L 9.055 12.832 L 7.945 11.168 Z M 7.819 12.427 L 4.319 7.427 L 2.681 8.573 L 6.181 13.573 L 7.819 12.427 Z M 1.768 11.64 L 4.268 8.64 L 2.732 7.36 L 0.232 10.36 L 1.768 11.64 Z",
    fill: "rgb(255,255,255)",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 20,
      height: 20,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 16,
    viewBox: "0 0 14 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 14,
      height: 16,
      filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.24))",
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.831 12.473 C 2.553 12.097 2.215 11.328 1.614 10.394 C 1.274 9.866 0.429 8.871 0.178 8.366 C -0.04 7.92 -0.017 7.72 0.035 7.35 C 0.127 6.692 0.757 6.179 1.429 6.248 C 1.937 6.3 2.368 6.659 2.755 6.999 C 2.989 7.203 3.277 7.6 3.45 7.824 C 3.609 8.03 3.649 8.115 3.819 8.358 C 4.044 8.68 4.114 8.839 4.028 8.485 C 3.959 7.965 3.845 7.077 3.681 6.292 C 3.556 5.697 3.525 5.604 3.406 5.147 C 3.28 4.661 3.215 4.32 3.097 3.805 C 3.015 3.44 2.867 2.695 2.827 2.276 C 2.771 1.702 2.742 0.768 3.085 0.338 C 3.354 0.002 3.971 -0.1 4.354 0.107 C 4.855 0.379 5.14 1.159 5.27 1.47 C 5.504 2.029 5.649 2.676 5.775 3.525 C 5.935 4.605 6.231 6.105 6.24 6.42 C 6.264 6.034 6.174 5.219 6.237 4.848 C 6.293 4.512 6.557 4.121 6.888 4.015 C 7.168 3.926 7.496 3.894 7.784 3.958 C 8.091 4.025 8.414 4.259 8.534 4.48 C 8.888 5.134 8.895 6.471 8.91 6.399 C 8.994 6.005 8.979 5.111 9.188 4.739 C 9.325 4.494 9.674 4.273 9.86 4.237 C 10.147 4.183 10.501 4.166 10.803 4.229 C 11.047 4.28 11.376 4.591 11.465 4.739 C 11.679 5.1 11.8 6.119 11.836 6.477 C 11.851 6.625 11.909 6.066 12.123 5.706 C 12.52 5.036 13.926 4.906 13.98 6.375 C 14.004 7.06 14 7.029 14 7.49 C 14 8.032 13.988 8.358 13.96 8.75 C 13.93 9.169 13.846 10.116 13.724 10.575 C 13.64 10.891 13.361 11.6 13.086 12.026 C 13.086 12.026 12.035 13.336 11.92 13.926 C 11.805 14.514 11.843 14.519 11.821 14.937 C 11.798 15.354 11.939 15.903 11.939 15.903 C 11.939 15.903 11.154 16.012 10.732 15.94 C 10.349 15.874 9.875 15.058 9.753 14.809 C 9.585 14.465 9.226 14.531 9.086 14.785 C 8.866 15.186 8.392 15.906 8.057 15.951 C 7.404 16.039 6.048 15.984 4.986 15.972 C 4.986 15.972 5.167 14.913 4.764 14.549 C 4.466 14.278 3.952 13.727 3.645 13.438 L 2.831 12.473 Z",
    fill: "rgb(255,255,255)",
    fillRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 2.831 12.473 L 2.529 12.696 C 2.534 12.702 2.539 12.709 2.544 12.715 L 2.831 12.473 Z M 1.614 10.394 L 1.93 10.191 L 1.93 10.191 L 1.614 10.394 Z M 0.178 8.366 L -0.159 8.531 L -0.158 8.533 L 0.178 8.366 Z M 0.035 7.35 L 0.406 7.402 L 0.407 7.402 L 0.035 7.35 Z M 1.429 6.248 L 1.391 6.621 L 1.392 6.621 L 1.429 6.248 Z M 2.755 6.999 L 2.508 7.281 L 2.508 7.281 L 2.755 6.999 Z M 3.45 7.824 L 3.153 8.054 L 3.154 8.054 L 3.45 7.824 Z M 3.819 8.358 L 4.126 8.143 L 4.126 8.143 L 3.819 8.358 Z M 4.028 8.485 L 3.656 8.534 C 3.658 8.547 3.661 8.56 3.664 8.573 L 4.028 8.485 Z M 3.681 6.292 L 4.048 6.215 L 4.048 6.215 L 3.681 6.292 Z M 3.406 5.147 L 3.043 5.241 L 3.043 5.242 L 3.406 5.147 Z M 3.097 3.805 L 2.731 3.887 L 2.731 3.888 L 3.097 3.805 Z M 2.827 2.276 L 3.2 2.24 L 3.2 2.239 L 2.827 2.276 Z M 3.085 0.338 L 2.792 0.104 L 2.792 0.104 L 3.085 0.338 Z M 4.354 0.107 L 4.175 0.437 L 4.175 0.437 L 4.354 0.107 Z M 5.27 1.47 L 5.616 1.325 L 5.616 1.325 L 5.27 1.47 Z M 5.775 3.525 L 6.146 3.47 L 6.146 3.47 L 5.775 3.525 Z M 6.24 6.42 L 5.866 6.432 C 5.872 6.632 6.035 6.792 6.235 6.795 C 6.435 6.798 6.603 6.643 6.615 6.443 L 6.24 6.42 Z M 6.237 4.848 L 6.606 4.911 L 6.606 4.911 L 6.237 4.848 Z M 6.888 4.015 L 6.774 3.658 L 6.774 3.658 L 6.888 4.015 Z M 7.784 3.958 L 7.703 4.324 L 7.704 4.324 L 7.784 3.958 Z M 8.534 4.48 L 8.864 4.302 L 8.863 4.301 L 8.534 4.48 Z M 8.91 6.399 L 8.543 6.321 L 8.542 6.324 L 8.91 6.399 Z M 9.188 4.739 L 9.515 4.923 L 9.515 4.922 L 9.188 4.739 Z M 9.86 4.237 L 9.79 3.869 L 9.789 3.869 L 9.86 4.237 Z M 10.803 4.229 L 10.88 3.862 L 10.879 3.862 L 10.803 4.229 Z M 11.465 4.739 L 11.788 4.548 L 11.787 4.547 L 11.465 4.739 Z M 11.836 6.477 L 12.209 6.44 L 12.209 6.439 L 11.836 6.477 Z M 12.123 5.706 L 12.445 5.897 L 12.445 5.897 L 12.123 5.706 Z M 13.98 6.375 L 14.355 6.362 L 14.355 6.361 L 13.98 6.375 Z M 13.96 8.75 L 14.334 8.777 L 14.335 8.776 L 13.96 8.75 Z M 13.724 10.575 L 14.086 10.672 L 14.086 10.672 L 13.724 10.575 Z M 13.086 12.026 L 13.378 12.26 C 13.386 12.25 13.394 12.24 13.401 12.229 L 13.086 12.026 Z M 11.92 13.926 L 12.288 13.998 L 12.289 13.997 L 11.92 13.926 Z M 11.821 14.937 L 12.195 14.957 L 12.195 14.957 L 11.821 14.937 Z M 11.939 15.903 L 11.991 16.274 C 12.096 16.26 12.191 16.201 12.25 16.112 C 12.31 16.023 12.329 15.913 12.302 15.81 L 11.939 15.903 Z M 10.732 15.94 L 10.668 16.309 L 10.668 16.309 L 10.732 15.94 Z M 9.753 14.809 L 9.416 14.974 L 9.416 14.974 L 9.753 14.809 Z M 9.086 14.785 L 8.757 14.604 L 8.757 14.604 L 9.086 14.785 Z M 8.057 15.951 L 8.007 15.58 L 8.007 15.58 L 8.057 15.951 Z M 4.986 15.972 L 4.616 15.909 C 4.598 16.017 4.628 16.128 4.698 16.212 C 4.768 16.297 4.872 16.346 4.982 16.347 L 4.986 15.972 Z M 4.764 14.549 L 4.512 14.826 L 4.513 14.827 L 4.764 14.549 Z M 3.645 13.438 L 3.358 13.68 C 3.367 13.691 3.377 13.701 3.388 13.711 L 3.645 13.438 Z M 3.132 12.25 C 3.013 12.088 2.874 11.832 2.673 11.463 C 2.478 11.106 2.238 10.67 1.93 10.191 L 1.299 10.597 C 1.592 11.052 1.821 11.467 2.014 11.822 C 2.202 12.166 2.371 12.482 2.529 12.696 L 3.132 12.25 Z M 1.93 10.191 C 1.749 9.911 1.439 9.513 1.162 9.146 C 0.87 8.759 0.621 8.414 0.514 8.199 L -0.158 8.533 C -0.013 8.824 0.285 9.228 0.563 9.597 C 0.857 9.986 1.139 10.348 1.299 10.597 L 1.93 10.191 Z M 0.515 8.202 C 0.418 8.003 0.388 7.886 0.378 7.793 C 0.369 7.692 0.38 7.593 0.406 7.402 L -0.336 7.298 C -0.361 7.477 -0.388 7.662 -0.368 7.866 C -0.347 8.077 -0.28 8.283 -0.159 8.531 L 0.515 8.202 Z M 0.407 7.402 C 0.471 6.938 0.925 6.573 1.391 6.621 L 1.468 5.875 C 0.589 5.785 -0.217 6.446 -0.336 7.298 L 0.407 7.402 Z M 1.392 6.621 C 1.761 6.659 2.104 6.927 2.508 7.281 L 3.002 6.717 C 2.631 6.391 2.113 5.941 1.467 5.875 L 1.392 6.621 Z M 2.508 7.281 C 2.706 7.454 2.961 7.805 3.153 8.054 L 3.747 7.595 C 3.592 7.395 3.272 6.952 3.002 6.716 L 2.508 7.281 Z M 3.154 8.054 C 3.31 8.256 3.314 8.291 3.512 8.573 L 4.126 8.143 C 3.983 7.939 3.908 7.803 3.746 7.594 L 3.154 8.054 Z M 3.512 8.573 C 3.565 8.65 3.609 8.715 3.648 8.773 C 3.676 8.814 3.725 8.889 3.772 8.937 C 3.785 8.95 3.819 8.984 3.87 9.012 C 3.911 9.035 4.074 9.113 4.251 9.007 C 4.403 8.917 4.428 8.766 4.433 8.74 C 4.441 8.693 4.439 8.653 4.438 8.635 C 4.433 8.566 4.412 8.476 4.393 8.396 L 3.664 8.573 C 3.688 8.671 3.69 8.693 3.689 8.684 C 3.689 8.681 3.687 8.652 3.693 8.614 C 3.696 8.596 3.719 8.451 3.867 8.363 C 4.04 8.26 4.198 8.337 4.233 8.356 C 4.278 8.381 4.304 8.409 4.308 8.412 C 4.32 8.425 4.315 8.421 4.269 8.353 C 4.234 8.302 4.185 8.227 4.126 8.143 L 3.512 8.573 Z M 4.4 8.435 C 4.331 7.92 4.216 7.017 4.048 6.215 L 3.314 6.369 C 3.475 7.138 3.586 8.01 3.656 8.534 L 4.4 8.435 Z M 4.048 6.215 C 3.92 5.61 3.888 5.509 3.769 5.052 L 3.043 5.242 C 3.162 5.699 3.191 5.784 3.314 6.37 L 4.048 6.215 Z M 3.769 5.053 C 3.644 4.572 3.584 4.251 3.462 3.721 L 2.731 3.888 C 2.846 4.389 2.915 4.749 3.043 5.241 L 3.769 5.053 Z M 3.463 3.722 C 3.381 3.359 3.238 2.634 3.2 2.24 L 2.453 2.311 C 2.496 2.756 2.648 3.52 2.731 3.887 L 3.463 3.722 Z M 3.2 2.239 C 3.173 1.963 3.154 1.61 3.18 1.283 C 3.207 0.938 3.28 0.694 3.378 0.572 L 2.792 0.104 C 2.546 0.411 2.462 0.85 2.432 1.223 C 2.401 1.614 2.425 2.015 2.453 2.312 L 3.2 2.239 Z M 3.378 0.572 C 3.44 0.495 3.568 0.419 3.742 0.388 C 3.915 0.358 4.075 0.383 4.175 0.437 L 4.533 -0.222 C 4.25 -0.375 3.91 -0.403 3.612 -0.351 C 3.314 -0.298 2.999 -0.155 2.792 0.104 L 3.378 0.572 Z M 4.175 0.437 C 4.33 0.521 4.483 0.706 4.624 0.957 C 4.76 1.201 4.853 1.445 4.924 1.614 L 5.616 1.325 C 5.556 1.183 5.442 0.882 5.278 0.59 C 5.118 0.305 4.879 -0.035 4.533 -0.222 L 4.175 0.437 Z M 4.924 1.614 C 5.14 2.131 5.279 2.741 5.404 3.58 L 6.146 3.47 C 6.018 2.61 5.868 1.928 5.616 1.325 L 4.924 1.614 Z M 5.404 3.58 C 5.485 4.126 5.6 4.777 5.695 5.323 C 5.742 5.598 5.785 5.846 5.816 6.045 C 5.848 6.252 5.864 6.381 5.866 6.432 L 6.615 6.409 C 6.612 6.302 6.587 6.125 6.557 5.929 C 6.525 5.723 6.481 5.47 6.434 5.195 C 6.338 4.643 6.225 4.004 6.146 3.47 L 5.404 3.58 Z M 6.615 6.443 C 6.628 6.225 6.61 5.895 6.599 5.614 C 6.586 5.304 6.583 5.05 6.606 4.911 L 5.867 4.786 C 5.828 5.018 5.838 5.357 5.849 5.643 C 5.862 5.958 5.876 6.229 5.866 6.397 L 6.615 6.443 Z M 6.606 4.911 C 6.624 4.807 6.677 4.68 6.76 4.57 C 6.844 4.458 6.933 4.394 7.003 4.372 L 6.774 3.658 C 6.512 3.742 6.304 3.927 6.159 4.121 C 6.013 4.316 5.906 4.553 5.867 4.786 L 6.606 4.911 Z M 7.002 4.373 C 7.233 4.299 7.493 4.277 7.703 4.324 L 7.866 3.591 C 7.499 3.51 7.103 3.553 6.774 3.658 L 7.002 4.373 Z M 7.704 4.324 C 7.799 4.345 7.911 4.396 8.013 4.468 C 8.117 4.541 8.18 4.615 8.205 4.66 L 8.863 4.301 C 8.767 4.125 8.609 3.971 8.445 3.855 C 8.279 3.737 8.076 3.637 7.865 3.591 L 7.704 4.324 Z M 8.204 4.659 C 8.344 4.917 8.429 5.35 8.477 5.756 C 8.5 5.95 8.512 6.123 8.52 6.246 C 8.524 6.304 8.527 6.359 8.53 6.392 C 8.531 6.404 8.533 6.431 8.536 6.455 C 8.537 6.461 8.54 6.477 8.545 6.495 C 8.547 6.505 8.552 6.522 8.561 6.544 C 8.567 6.557 8.589 6.613 8.642 6.666 C 8.671 6.695 8.725 6.74 8.806 6.763 C 8.894 6.788 8.985 6.779 9.061 6.745 C 9.184 6.69 9.234 6.589 9.241 6.575 C 9.268 6.524 9.276 6.477 9.277 6.475 L 8.542 6.324 C 8.542 6.323 8.55 6.278 8.577 6.228 C 8.584 6.215 8.633 6.114 8.757 6.059 C 8.833 6.025 8.923 6.016 9.011 6.041 C 9.092 6.064 9.146 6.108 9.175 6.138 C 9.227 6.191 9.25 6.246 9.255 6.259 C 9.263 6.28 9.268 6.297 9.27 6.305 C 9.275 6.322 9.277 6.335 9.277 6.339 C 9.279 6.35 9.279 6.355 9.278 6.337 C 9.276 6.307 9.273 6.264 9.269 6.197 C 9.26 6.069 9.247 5.881 9.222 5.668 C 9.174 5.26 9.078 4.698 8.864 4.302 L 8.204 4.659 Z M 9.276 6.478 C 9.324 6.255 9.346 5.883 9.375 5.599 C 9.391 5.444 9.41 5.3 9.435 5.176 C 9.462 5.047 9.491 4.966 9.515 4.923 L 8.86 4.556 C 8.78 4.699 8.733 4.869 8.701 5.025 C 8.668 5.185 8.646 5.359 8.629 5.523 C 8.592 5.877 8.579 6.15 8.543 6.321 L 9.276 6.478 Z M 9.515 4.922 C 9.546 4.867 9.619 4.789 9.722 4.716 C 9.77 4.682 9.818 4.654 9.859 4.634 C 9.879 4.624 9.897 4.617 9.91 4.612 C 9.924 4.607 9.931 4.606 9.93 4.606 L 9.789 3.869 C 9.622 3.901 9.438 3.998 9.289 4.104 C 9.136 4.211 8.966 4.367 8.86 4.556 L 9.515 4.922 Z M 9.93 4.606 C 10.184 4.558 10.486 4.546 10.727 4.596 L 10.879 3.862 C 10.516 3.786 10.111 3.808 9.79 3.869 L 9.93 4.606 Z M 10.726 4.596 C 10.756 4.602 10.841 4.644 10.953 4.737 C 11.003 4.778 11.048 4.821 11.084 4.859 C 11.102 4.879 11.116 4.895 11.127 4.909 C 11.132 4.916 11.136 4.921 11.139 4.926 C 11.142 4.93 11.144 4.932 11.144 4.932 L 11.787 4.547 C 11.712 4.421 11.571 4.274 11.431 4.159 C 11.295 4.046 11.094 3.907 10.88 3.862 L 10.726 4.596 Z M 11.143 4.93 C 11.17 4.977 11.207 5.07 11.247 5.212 C 11.285 5.349 11.318 5.509 11.348 5.675 C 11.407 6.007 11.446 6.34 11.463 6.515 L 12.209 6.439 C 12.191 6.256 12.15 5.901 12.086 5.543 C 12.054 5.365 12.016 5.18 11.97 5.013 C 11.925 4.852 11.867 4.682 11.788 4.548 L 11.143 4.93 Z M 11.463 6.514 C 11.464 6.525 11.468 6.567 11.483 6.612 C 11.488 6.627 11.511 6.701 11.579 6.768 C 11.62 6.808 11.688 6.856 11.783 6.871 C 11.882 6.887 11.965 6.862 12.022 6.831 C 12.116 6.78 12.16 6.705 12.167 6.692 C 12.183 6.667 12.192 6.644 12.197 6.633 C 12.207 6.609 12.213 6.587 12.217 6.574 C 12.229 6.532 12.251 6.439 12.268 6.376 C 12.31 6.213 12.367 6.028 12.445 5.897 L 11.801 5.514 C 11.664 5.743 11.586 6.018 11.542 6.188 C 11.515 6.291 11.506 6.332 11.497 6.365 C 11.495 6.37 11.497 6.363 11.503 6.35 C 11.505 6.344 11.513 6.326 11.526 6.303 C 11.532 6.294 11.574 6.22 11.666 6.171 C 11.722 6.141 11.805 6.115 11.902 6.131 C 11.997 6.146 12.064 6.194 12.104 6.233 C 12.171 6.298 12.193 6.37 12.196 6.38 C 12.204 6.403 12.207 6.421 12.208 6.427 C 12.209 6.434 12.209 6.439 12.209 6.44 L 11.463 6.514 Z M 12.445 5.897 C 12.559 5.705 12.852 5.564 13.119 5.608 C 13.239 5.628 13.346 5.685 13.429 5.789 C 13.514 5.896 13.594 6.081 13.605 6.389 L 14.355 6.361 C 14.339 5.935 14.224 5.585 14.017 5.324 C 13.809 5.06 13.529 4.916 13.241 4.868 C 12.693 4.778 12.084 5.037 11.8 5.514 L 12.445 5.897 Z M 13.605 6.389 C 13.63 7.068 13.625 7.031 13.625 7.49 L 14.375 7.49 C 14.375 7.027 14.379 7.053 14.355 6.362 L 13.605 6.389 Z M 13.625 7.49 C 13.625 8.025 13.613 8.342 13.586 8.724 L 14.335 8.776 C 14.363 8.374 14.375 8.039 14.375 7.49 L 13.625 7.49 Z M 13.586 8.723 C 13.555 9.151 13.473 10.061 13.361 10.479 L 14.086 10.672 C 14.219 10.172 14.305 9.187 14.334 8.777 L 13.586 8.723 Z M 13.361 10.479 C 13.285 10.764 13.02 11.436 12.771 11.822 L 13.401 12.229 C 13.701 11.764 13.994 11.017 14.086 10.672 L 13.361 10.479 Z M 13.086 12.026 C 12.793 11.791 12.793 11.791 12.793 11.791 C 12.793 11.791 12.793 11.791 12.793 11.791 C 12.793 11.791 12.793 11.791 12.793 11.791 C 12.793 11.792 12.792 11.792 12.792 11.792 C 12.792 11.793 12.791 11.794 12.79 11.796 C 12.787 11.798 12.784 11.802 12.78 11.807 C 12.772 11.818 12.76 11.833 12.745 11.852 C 12.715 11.89 12.673 11.945 12.621 12.013 C 12.519 12.148 12.38 12.335 12.237 12.541 C 12.095 12.747 11.946 12.977 11.823 13.197 C 11.706 13.408 11.593 13.645 11.552 13.854 L 12.289 13.997 C 12.305 13.911 12.367 13.763 12.478 13.562 C 12.585 13.371 12.72 13.163 12.855 12.967 C 12.989 12.773 13.12 12.595 13.218 12.466 C 13.267 12.402 13.308 12.35 13.336 12.314 C 13.35 12.296 13.36 12.283 13.368 12.274 C 13.371 12.269 13.374 12.265 13.376 12.263 C 13.377 12.262 13.377 12.261 13.378 12.261 C 13.378 12.261 13.378 12.26 13.378 12.26 C 13.378 12.26 13.378 12.26 13.378 12.26 C 13.378 12.26 13.378 12.26 13.378 12.26 C 13.378 12.26 13.378 12.26 13.086 12.026 Z M 11.552 13.853 C 11.43 14.476 11.467 14.527 11.446 14.917 L 12.195 14.957 C 12.219 14.511 12.18 14.552 12.288 13.998 L 11.552 13.853 Z M 11.446 14.917 C 11.433 15.167 11.468 15.441 11.502 15.64 C 11.519 15.741 11.537 15.829 11.551 15.892 C 11.558 15.923 11.564 15.948 11.568 15.966 C 11.571 15.975 11.572 15.982 11.574 15.987 C 11.574 15.99 11.575 15.992 11.575 15.993 C 11.575 15.994 11.575 15.995 11.575 15.995 C 11.576 15.995 11.576 15.996 11.576 15.996 C 11.576 15.996 11.576 15.996 11.576 15.996 C 11.576 15.996 11.576 15.996 11.576 15.996 C 11.576 15.996 11.576 15.996 11.939 15.903 C 12.302 15.81 12.302 15.81 12.302 15.81 C 12.302 15.81 12.302 15.81 12.302 15.81 C 12.302 15.81 12.302 15.81 12.302 15.81 C 12.302 15.81 12.302 15.81 12.302 15.81 C 12.302 15.81 12.302 15.81 12.302 15.809 C 12.302 15.809 12.302 15.808 12.301 15.806 C 12.3 15.803 12.299 15.798 12.298 15.791 C 12.294 15.777 12.289 15.756 12.283 15.729 C 12.272 15.676 12.256 15.601 12.241 15.513 C 12.21 15.332 12.186 15.123 12.195 14.957 L 11.446 14.917 Z M 11.939 15.903 C 11.887 15.532 11.887 15.532 11.887 15.532 C 11.887 15.532 11.887 15.532 11.887 15.532 C 11.887 15.532 11.887 15.532 11.887 15.532 C 11.887 15.532 11.887 15.532 11.887 15.532 C 11.887 15.532 11.887 15.532 11.886 15.532 C 11.885 15.532 11.883 15.532 11.88 15.532 C 11.875 15.533 11.867 15.534 11.857 15.536 C 11.836 15.538 11.806 15.542 11.768 15.546 C 11.691 15.555 11.585 15.566 11.466 15.574 C 11.218 15.593 10.957 15.598 10.795 15.57 L 10.668 16.309 C 10.929 16.354 11.271 16.341 11.521 16.322 C 11.652 16.313 11.768 16.301 11.852 16.291 C 11.894 16.287 11.928 16.283 11.952 16.279 C 11.964 16.278 11.973 16.277 11.98 16.276 C 11.983 16.275 11.985 16.275 11.987 16.275 C 11.988 16.275 11.989 16.275 11.99 16.275 C 11.99 16.274 11.99 16.274 11.99 16.274 C 11.99 16.274 11.99 16.274 11.99 16.274 C 11.99 16.274 11.99 16.274 11.99 16.274 C 11.991 16.274 11.991 16.274 11.939 15.903 Z M 10.795 15.57 C 10.804 15.572 10.767 15.564 10.685 15.491 C 10.61 15.424 10.528 15.33 10.445 15.219 C 10.28 14.997 10.143 14.751 10.09 14.644 L 9.416 14.974 C 9.486 15.116 9.647 15.403 9.844 15.667 C 9.943 15.8 10.059 15.937 10.184 16.05 C 10.302 16.155 10.468 16.275 10.668 16.309 L 10.795 15.57 Z M 10.09 14.644 C 9.949 14.357 9.69 14.186 9.394 14.198 C 9.121 14.209 8.884 14.374 8.757 14.604 L 9.414 14.966 C 9.42 14.956 9.426 14.95 9.43 14.947 C 9.434 14.945 9.433 14.947 9.424 14.948 C 9.42 14.948 9.414 14.947 9.408 14.946 C 9.402 14.944 9.398 14.942 9.395 14.94 C 9.392 14.938 9.393 14.938 9.397 14.943 C 9.401 14.947 9.408 14.957 9.416 14.974 L 10.09 14.644 Z M 8.757 14.604 C 8.654 14.793 8.492 15.054 8.321 15.268 C 8.236 15.376 8.155 15.462 8.086 15.52 C 8.009 15.585 7.984 15.583 8.007 15.58 L 8.108 16.323 C 8.298 16.297 8.458 16.188 8.57 16.093 C 8.691 15.991 8.806 15.863 8.908 15.735 C 9.113 15.478 9.298 15.178 9.415 14.965 L 8.757 14.604 Z M 8.007 15.58 C 7.711 15.619 7.234 15.628 6.678 15.624 C 6.114 15.62 5.541 15.603 4.99 15.597 L 4.982 16.347 C 5.493 16.353 6.129 16.37 6.672 16.374 C 7.222 16.378 7.75 16.371 8.108 16.323 L 8.007 15.58 Z M 4.986 15.972 C 5.356 16.035 5.356 16.035 5.356 16.035 C 5.356 16.035 5.356 16.035 5.356 16.035 C 5.356 16.035 5.356 16.035 5.356 16.034 C 5.356 16.034 5.356 16.034 5.356 16.033 C 5.356 16.032 5.356 16.031 5.357 16.03 C 5.357 16.027 5.358 16.023 5.359 16.018 C 5.36 16.008 5.362 15.995 5.364 15.978 C 5.369 15.944 5.375 15.897 5.381 15.839 C 5.393 15.724 5.404 15.565 5.401 15.391 C 5.398 15.219 5.382 15.019 5.331 14.829 C 5.282 14.643 5.192 14.43 5.015 14.271 L 4.513 14.827 C 4.538 14.85 4.576 14.906 4.606 15.021 C 4.635 15.131 4.649 15.265 4.651 15.403 C 4.654 15.539 4.645 15.668 4.635 15.763 C 4.63 15.81 4.625 15.848 4.622 15.874 C 4.62 15.887 4.618 15.896 4.618 15.902 C 4.617 15.905 4.617 15.907 4.617 15.908 C 4.616 15.909 4.616 15.909 4.616 15.909 C 4.616 15.909 4.616 15.909 4.616 15.909 C 4.616 15.909 4.616 15.909 4.616 15.909 C 4.616 15.909 4.616 15.909 4.616 15.909 C 4.616 15.909 4.616 15.909 4.986 15.972 Z M 5.016 14.272 C 4.876 14.144 4.681 13.947 4.475 13.737 C 4.274 13.533 4.062 13.316 3.902 13.165 L 3.388 13.711 C 3.535 13.85 3.733 14.053 3.94 14.263 C 4.142 14.468 4.353 14.682 4.512 14.826 L 5.016 14.272 Z M 3.931 13.196 L 3.117 12.231 L 2.544 12.715 L 3.358 13.68 L 3.931 13.196 Z",
    fill: "rgb(16,24,40)",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 4,
    viewBox: "0 0 5 4",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 11,
      width: 5,
      height: 4,
      color: "rgb(16,24,40)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0.5 C 1 0.224 0.776 0 0.5 0 C 0.224 0 0 0.224 0 0.5 L 0 3.5 C 0 3.776 0.224 4 0.5 4 C 0.776 4 1 3.776 1 3.5 L 1 0.5 Z M 2.5 0 C 2.776 0 3 0.224 3 0.5 L 3 3.5 C 3 3.776 2.776 4 2.5 4 C 2.224 4 2 3.776 2 3.5 L 2 0.5 C 2 0.224 2.224 0 2.5 0 Z M 4.5 0 C 4.776 0 5 0.224 5 0.5 L 5 3.5 C 5 3.776 4.776 4 4.5 4 C 4.224 4 4 3.776 4 3.5 L 4 0.5 C 4 0.224 4.224 0 4.5 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __impls = {
    // figma: State=Drag
    "state=drag": __body0,
    // figma: State=Arrow
    "state=arrow": __body1,
    // figma: State=Hand
    "state=hand": __body2
  };
  return (__impls[__vkey_Cursor(props)] ?? __body1)();
}

// figma node: 275:58816 Icon/Information
function IconInformation(_p = {}) {
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
    d: "M 7.5 10 L 7.5 6 L 5.5 6 L 5.5 7 L 6.5 7 L 6.5 10 L 5 10 L 5 11 L 9 11 L 9 10 L 7.5 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7 3 C 6.852 3 6.707 3.044 6.583 3.126 C 6.46 3.209 6.364 3.326 6.307 3.463 C 6.25 3.6 6.235 3.751 6.264 3.896 C 6.293 4.042 6.365 4.175 6.47 4.28 C 6.575 4.385 6.708 4.457 6.854 4.486 C 6.999 4.515 7.15 4.5 7.287 4.443 C 7.424 4.386 7.541 4.29 7.624 4.167 C 7.706 4.043 7.75 3.898 7.75 3.75 C 7.75 3.551 7.671 3.36 7.53 3.22 C 7.39 3.079 7.199 3 7 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7 14 C 5.616 14 4.262 13.589 3.111 12.82 C 1.96 12.051 1.063 10.958 0.533 9.679 C 0.003 8.4 -0.136 6.992 0.135 5.634 C 0.405 4.277 1.071 3.029 2.05 2.05 C 3.029 1.071 4.277 0.405 5.634 0.135 C 6.992 -0.136 8.4 0.003 9.679 0.533 C 10.958 1.063 12.051 1.96 12.82 3.111 C 13.589 4.262 14 5.616 14 7 C 14 8.857 13.263 10.637 11.95 11.95 C 10.637 13.263 8.857 14 7 14 Z M 7 1 C 5.813 1 4.653 1.352 3.667 2.011 C 2.68 2.67 1.911 3.608 1.457 4.704 C 1.003 5.8 0.884 7.007 1.115 8.171 C 1.347 9.334 1.918 10.404 2.757 11.243 C 3.596 12.082 4.666 12.653 5.829 12.885 C 6.993 13.116 8.2 12.997 9.296 12.543 C 10.392 12.089 11.33 11.32 11.989 10.333 C 12.648 9.347 13 8.187 13 7 C 13 5.409 12.368 3.883 11.243 2.757 C 10.117 1.632 8.591 1 7 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 28:31405 Tooltip (8 variants)
const __venc_Tooltip = v => String(v).replace(/[%|=]/g, encodeURIComponent);

const __vkey_Tooltip = p => "theme=" + __venc_Tooltip(p.theme) + '|' + "arrow=" + __venc_Tooltip(p.arrow);

function Tooltip(_p = {}) {
  const props = {
    ..._p,
    theme: _p.theme ?? "dark",
    arrow: _p.arrow ?? "bottom center"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 110,
      height: 40,
      maxWidth: 320,
      maxHeight: 116.364,
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(16,24,40)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(16,24,40)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "This is a tooltip")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 6,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.707,0.707,-0.707,0.707,8,-11)",
      transformOrigin: "0 0",
      width: 12,
      height: 12,
      borderRadius: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.293 1.707 C 10.923 1.077 12 1.523 12 2.414 L 12 11 C 12 11.552 11.552 12 11 12 L 2.414 12 C 1.523 12 1.077 10.923 1.707 10.293 L 10.293 1.707 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      maxWidth: 320,
      maxHeight: null,
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(16,24,40)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      transform: "matrix(-1,0,0,-1,0,0)",
      width: 16,
      height: 6,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.707,0.707,-0.707,0.707,8,-11)",
      transformOrigin: "0 0",
      width: 12,
      height: 12,
      borderRadius: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.293 1.707 C 10.923 1.077 12 1.523 12 2.414 L 12 11 C 12 11.552 11.552 12 11 12 L 2.414 12 C 1.523 12 1.077 10.923 1.707 10.293 L 10.293 1.707 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(16,24,40)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "This is a tooltip")));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      maxWidth: 320,
      maxHeight: null,
      boxShadow: "0px 4px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(71,84,103)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      transform: "matrix(-1,0,0,-1,0,0)",
      width: 28,
      height: 6,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.707,0.707,-0.707,0.707,19.500,-11)",
      transformOrigin: "0 0",
      width: 12,
      height: 12,
      borderRadius: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.293 1.707 C 10.923 1.077 12 1.523 12 2.414 L 12 11 C 12 11.552 11.552 12 11 12 L 2.414 12 C 1.523 12 1.077 10.923 1.707 10.293 L 10.293 1.707 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(71,84,103)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "This is a tooltip")));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      maxWidth: 320,
      maxHeight: null,
      boxShadow: "0px 4px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(71,84,103)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      transform: "matrix(-1,0,0,-1,0,0)",
      width: 28,
      height: 6,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.707,0.707,-0.707,0.707,7.500,-11)",
      transformOrigin: "0 0",
      width: 12,
      height: 12,
      borderRadius: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.293 1.707 C 10.923 1.077 12 1.523 12 2.414 L 12 11 C 12 11.552 11.552 12 11 12 L 2.414 12 C 1.523 12 1.077 10.923 1.707 10.293 L 10.293 1.707 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(71,84,103)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "This is a tooltip")));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 110,
      height: 40,
      maxWidth: 320,
      maxHeight: 116.364,
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(16,24,40)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(16,24,40)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "This is a tooltip")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 28,
      height: 6,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.707,0.707,-0.707,0.707,20,-11.000)",
      transformOrigin: "0 0",
      width: 12,
      height: 12,
      borderRadius: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.293 1.707 C 10.923 1.077 12 1.523 12 2.414 L 12 11 C 12 11.552 11.552 12 11 12 L 2.414 12 C 1.523 12 1.077 10.923 1.707 10.293 L 10.293 1.707 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 116,
      maxWidth: 320,
      maxHeight: null,
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(16,24,40)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,6,9)",
      transformOrigin: "0 0",
      width: 16,
      height: 6
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.707,0.707,-0.707,0.707,8,-11)",
      transformOrigin: "0 0",
      width: 12,
      height: 12,
      borderRadius: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.293 1.707 C 10.923 1.077 12 1.523 12 2.414 L 12 11 C 12 11.552 11.552 12 11 12 L 2.414 12 C 1.523 12 1.077 10.923 1.707 10.293 L 10.293 1.707 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(16,24,40)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "This is a tooltip")));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 116,
      maxWidth: 320,
      maxHeight: null,
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(16,24,40)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(16,24,40)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "This is a tooltip")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,110,25)",
      transformOrigin: "0 0",
      width: 16,
      height: 6
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.707,0.707,-0.707,0.707,8,-11)",
      transformOrigin: "0 0",
      width: 12,
      height: 12,
      borderRadius: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.293 1.707 C 10.923 1.077 12 1.523 12 2.414 L 12 11 C 12 11.552 11.552 12 11 12 L 2.414 12 C 1.523 12 1.077 10.923 1.707 10.293 L 10.293 1.707 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      maxWidth: 320,
      maxHeight: null,
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(16,24,40)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(16,24,40)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "This is a tooltip")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 28,
      height: 6,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.707,0.707,-0.707,0.707,8,-11)",
      transformOrigin: "0 0",
      width: 12,
      height: 12,
      borderRadius: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.293 1.707 C 10.923 1.077 12 1.523 12 2.414 L 12 11 C 12 11.552 11.552 12 11 12 L 2.414 12 C 1.523 12 1.077 10.923 1.707 10.293 L 10.293 1.707 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __impls = {
    // figma: Theme=Dark, Arrow=Bottom center
    "theme=dark|arrow=bottom center": __body0,
    // figma: Theme=Dark, Arrow=Top center
    "theme=dark|arrow=top center": __body1,
    // figma: Theme=Dark, Arrow=Top right
    "theme=dark|arrow=top right": __body2,
    // figma: Theme=Dark, Arrow=Top left
    "theme=dark|arrow=top left": __body3,
    // figma: Theme=Dark, Arrow=Bottom left
    "theme=dark|arrow=bottom left": __body4,
    // figma: Theme=Dark, Arrow=Left
    "theme=dark|arrow=left": __body5,
    // figma: Theme=Dark, Arrow=Right
    "theme=dark|arrow=right": __body6,
    // figma: Theme=Dark, Arrow=Bottom right
    "theme=dark|arrow=bottom right": __body7
  };
  return (__impls[__vkey_Tooltip(props)] ?? __body0)();
}

// figma node: 28:31592 Help icon (16 variants)
const __venc_HelpIcon = v => String(v).replace(/[%|=]/g, encodeURIComponent);

const __vkey_HelpIcon = p => "open=" + __venc_HelpIcon(p.open) + '|' + "supportingText=" + __venc_HelpIcon(p.supportingText) + '|' + "tooltip=" + __venc_HelpIcon(p.tooltip);

function HelpIcon(_p = {}) {
  const props = {
    ..._p,
    cursor: _p.cursor ?? true,
    open: _p.open ?? false,
    supportingText: _p.supportingText ?? "false",
    tooltip: _p.tooltip ?? "bottom"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null)));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null)), props.cursor && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 8,
      width: 20,
      height: 20
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Cursor, {
    state: "hand"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null)), /*#__PURE__*/React.createElement(Tooltip, {
    style: {
      position: "absolute",
      left: -12,
      top: -118.364,
      width: 28,
      height: 116.364
    },
    theme: "dark",
    arrow: "bottom left"
  }), props.cursor && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 8,
      width: 20,
      height: 20
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Cursor, {
    state: "hand"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null)), /*#__PURE__*/React.createElement(Tooltip, {
    style: {
      position: "absolute",
      left: -82,
      top: -42
    },
    theme: "dark",
    arrow: "bottom right"
  }), props.cursor && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 8,
      width: 20,
      height: 20
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Cursor, {
    state: "hand"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null)), /*#__PURE__*/React.createElement(Tooltip, {
    style: {
      position: "absolute",
      left: -46.5,
      top: 18
    },
    theme: "dark",
    arrow: "top center"
  }), props.cursor && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 8,
      width: 20,
      height: 20
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Cursor, {
    state: "hand"
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null)), /*#__PURE__*/React.createElement(Tooltip, {
    style: {
      position: "absolute",
      left: 18,
      top: -9,
      width: 118
    },
    theme: "dark",
    arrow: "left"
  }), props.cursor && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 8,
      width: 20,
      height: 20
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Cursor, {
    state: "hand"
  })));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null)), /*#__PURE__*/React.createElement(Tooltip, {
    style: {
      position: "absolute",
      left: -119,
      top: -9,
      width: 118
    },
    theme: "dark",
    arrow: "right"
  }), props.cursor && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 8,
      width: 20,
      height: 20
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Cursor, {
    state: "hand"
  })));
  const __impls = {
    // figma: Open=False, Supporting text=False, Tooltip=Top arrow
    "open=false|supportingText=false|tooltip=top arrow": __body0,
    // figma: Open=False, Supporting text=False, Tooltip=Top right
    "open=false|supportingText=false|tooltip=top right": __body0,
    // figma: Open=False, Supporting text=False, Tooltip=Top left
    "open=false|supportingText=false|tooltip=top left": __body0,
    // figma: Open=False, Supporting text=False, Tooltip=Bottom
    "open=false|supportingText=false|tooltip=bottom": __body0,
    // figma: Open=False, Supporting text=False, Tooltip=Bottom Left
    "open=false|supportingText=false|tooltip=bottom left": __body0,
    // figma: Open=False, Supporting text=False, Tooltip=Bottom Right
    "open=false|supportingText=false|tooltip=bottom right": __body0,
    // figma: Open=False, Supporting text=False, Tooltip=Right
    "open=false|supportingText=false|tooltip=right": __body0,
    // figma: Open=False, Supporting text=False, Tooltip=Left
    "open=false|supportingText=false|tooltip=left": __body0,
    // figma: Open=True, Supporting text=False, Tooltip=Top arrow
    "open=true|supportingText=false|tooltip=top arrow": __body1,
    // figma: Open=True, Supporting text=False, Tooltip=Top right
    "open=true|supportingText=false|tooltip=top right": __body2,
    // figma: Open=True, Supporting text=False, Tooltip=Top left
    "open=true|supportingText=false|tooltip=top left": __body3,
    // figma: Open=True, Supporting text=False, Tooltip=Bottom
    "open=true|supportingText=false|tooltip=bottom": __body4,
    // figma: Open=True, Supporting text=False, Tooltip=Bottom Left
    "open=true|supportingText=false|tooltip=bottom left": __body4,
    // figma: Open=True, Supporting text=False, Tooltip=Bottom Right
    "open=true|supportingText=false|tooltip=bottom right": __body4,
    // figma: Open=True, Supporting text=False, Tooltip=Right
    "open=true|supportingText=false|tooltip=right": __body5,
    // figma: Open=True, Supporting text=False, Tooltip=Left
    "open=true|supportingText=false|tooltip=left": __body6
  };
  return (__impls[__vkey_HelpIcon(props)] ?? __body0)();
}

// figma node: 275:58623 Icon/Arrow--down
function IconArrowDown(_p = {}) {
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
    d: "M 9.295 6.295 L 5.5 10.085 L 5.5 0 L 4.5 0 L 4.5 10.085 L 0.705 6.295 L 0 7 L 5 12 L 10 7 L 9.295 6.295 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
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

// figma node: 275:58682 Icon/Filter
function IconFilter(_p = {}) {
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
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 12,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 12 L 5 12 C 4.735 12 4.48 11.895 4.293 11.707 C 4.105 11.52 4 11.265 4 11 L 4 7.205 L 0.295 3.5 C 0.107 3.313 0.001 3.06 0 2.795 L 0 1 C 0 0.735 0.105 0.48 0.293 0.293 C 0.48 0.105 0.735 0 1 0 L 11 0 C 11.265 0 11.52 0.105 11.707 0.293 C 11.895 0.48 12 0.735 12 1 L 12 2.795 C 11.999 3.06 11.893 3.313 11.705 3.5 L 8 7.205 L 8 11 C 8 11.265 7.895 11.52 7.707 11.707 C 7.52 11.895 7.265 12 7 12 Z M 1 1 L 1 2.795 L 5 6.795 L 5 11 L 7 11 L 7 6.795 L 11 2.795 L 11 1 L 1 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 51:18544 Table title text (36 variants)
const __venc_TableTitleText = v => String(v).replace(/[%|=]/g, encodeURIComponent);

const __vkey_TableTitleText = p => "text=" + __venc_TableTitleText(p.text) + '|' + "state=" + __venc_TableTitleText(p.state) + '|' + "help=" + __venc_TableTitleText(p.help) + '|' + "filter=" + __venc_TableTitleText(p.filter);

export {
  IconAddAlt,
  IconChevronDown,
  __venc_Button,
  __vkey_Button,
  Button,
  IconCheckmark,
  IconSubtract,
  __venc_CheckboxIcon,
  __vkey_CheckboxIcon,
  CheckboxIcon,
  IconChevronRight,
  IconMenu,
  __venc_SkeletonTitle,
  __vkey_SkeletonTitle,
  SkeletonTitle,
  __venc_Cursor,
  __vkey_Cursor,
  Cursor,
  IconInformation,
  __venc_Tooltip,
  __vkey_Tooltip,
  Tooltip,
  __venc_HelpIcon,
  __vkey_HelpIcon,
  HelpIcon,
  IconArrowDown,
  IconArrowUp,
  IconFilter,
  __venc_TableTitleText,
  __vkey_TableTitleText
};
