import React from "react";
import {
  IconInformation,
  IconCloseOutline,
  __vkey_NumberInput,
  Toggle
} from "../_impl.js";

function NumberInput(_p = {}) {
  const props = {
    ..._p,
    required: _p.required ?? true,
    type: _p.type ?? "default",
    state: _p.state ?? "default",
    destructive: _p.destructive ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(152,162,179), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "123.456")))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(152,162,179), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "123.456")))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      height: 32,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(152,162,179), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "123.456")))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "123.456")))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "123.456")))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      height: 32,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "123.456")))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "123.456")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "123.456")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "123.456")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "This is an error message."));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(249,112,102), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "123.456")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(249,112,102), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "123.456")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(249,112,102), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "123.456")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "This is an error message."));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(242,244,247)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(102,112,133)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "123.456")))));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(208,213,221)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "123.456")))));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      height: 32,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(242,244,247)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(102,112,133)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "123.456")))));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "123.456")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "123.456")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "123.456")))));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "123.456")))));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      height: 32,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "123.456")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      height: 32,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "123.456")))));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(217,45,32), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "123.456")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(217,45,32), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "123.456")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(217,45,32), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "123.456")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(217,45,32), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "123.456")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(217,45,32), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "123.456")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "This is an error message."));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(217,45,32), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "123.456")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "This is an error message."));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "123.456")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "123.456")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "123.456")))));
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "123.456")))));
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      height: 32,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "123.456")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))));
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      height: 32,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "123.456")))));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "123.456")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "123.456")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "123.456")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body36 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "123.456")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body37 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "123.456")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "This is an error message."));
  const __body38 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "123,456")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "This is an error message."));
  const __impls = {
    // figma: Type=Default, State=Hover, Destructive=False
    "type=default|state=hover|destructive=false": __body0,
    // figma: Type=Label tooltip, State=Hover, Destructive=False
    "type=label tooltip|state=hover|destructive=false": __body1,
    // figma: Type=No label, State=Hover, Destructive=False
    "type=no label|state=hover|destructive=false": __body2,
    // figma: Type=Default, State=Default, Destructive=False
    "type=default|state=default|destructive=false": __body3,
    // figma: Type=Label tooltip, State=Default, Destructive=False
    "type=label tooltip|state=default|destructive=false": __body4,
    // figma: Type=No label, State=Default, Destructive=False
    "type=no label|state=default|destructive=false": __body5,
    // figma: Type=Default, State=Default, Destructive=True
    "type=default|state=default|destructive=true": __body6,
    // figma: Type=Label tooltip, State=Default, Destructive=True
    "type=label tooltip|state=default|destructive=true": __body7,
    // figma: Type=No label, State=Default, Destructive=True
    "type=no label|state=default|destructive=true": __body8,
    // figma: Type=Default, State=Hover, Destructive=True
    "type=default|state=hover|destructive=true": __body9,
    // figma: Type=Label tooltip, State=Hover, Destructive=True
    "type=label tooltip|state=hover|destructive=true": __body10,
    // figma: Type=No label, State=Hover, Destructive=True
    "type=no label|state=hover|destructive=true": __body11,
    // figma: Type=Default, State=Disabled, Destructive=False
    "type=default|state=disabled|destructive=false": __body12,
    // figma: Type=Label tooltip, State=Disabled, Destructive=False
    "type=label tooltip|state=disabled|destructive=false": __body13,
    // figma: Type=No label, State=Disabled, Destructive=False
    "type=no label|state=disabled|destructive=false": __body14,
    // figma: Type=Default, State=Filled, Destructive=False
    "type=default|state=filled|destructive=false": __body15,
    // figma: Type=Label tooltip, State=Filled, Destructive=False
    "type=label tooltip|state=filled|destructive=false": __body16,
    // figma: Type=Default, State=Filled no X, Destructive=False
    "type=default|state=filled no x|destructive=false": __body17,
    // figma: Type=Label tooltip, State=Filled no X, Destructive=False
    "type=label tooltip|state=filled no x|destructive=false": __body18,
    // figma: Type=No label, State=Filled, Destructive=False
    "type=no label|state=filled|destructive=false": __body19,
    // figma: Type=No label, State=Filled no X, Destructive=False
    "type=no label|state=filled no x|destructive=false": __body20,
    // figma: Type=Default, State=Focused, Destructive=True
    "type=default|state=focused|destructive=true": __body21,
    // figma: Type=Label tooltip, State=Focused, Destructive=True
    "type=label tooltip|state=focused|destructive=true": __body22,
    // figma: Type=Default, State=Focused no X, Destructive=True
    "type=default|state=focused no x|destructive=true": __body23,
    // figma: Type=Label tooltip, State=Focused no X, Destructive=True
    "type=label tooltip|state=focused no x|destructive=true": __body24,
    // figma: Type=No label, State=Focused, Destructive=True
    "type=no label|state=focused|destructive=true": __body25,
    // figma: Type=No label, State=Focused no X, Destructive=True
    "type=no label|state=focused no x|destructive=true": __body26,
    // figma: Type=Default, State=Focused, Destructive=False
    "type=default|state=focused|destructive=false": __body27,
    // figma: Type=Label tooltip, State=Focused, Destructive=False
    "type=label tooltip|state=focused|destructive=false": __body28,
    // figma: Type=Default, State=Focused no X, Destructive=False
    "type=default|state=focused no x|destructive=false": __body29,
    // figma: Type=Label tooltip, State=Focused no X, Destructive=False
    "type=label tooltip|state=focused no x|destructive=false": __body30,
    // figma: Type=No label, State=Focused, Destructive=False
    "type=no label|state=focused|destructive=false": __body31,
    // figma: Type=No label, State=Focused no X, Destructive=False
    "type=no label|state=focused no x|destructive=false": __body32,
    // figma: Type=Default, State=Filled, Destructive=True
    "type=default|state=filled|destructive=true": __body33,
    // figma: Type=Label tooltip, State=Filled, Destructive=True
    "type=label tooltip|state=filled|destructive=true": __body34,
    // figma: Type=Default, State=Filled no X, Destructive=True
    "type=default|state=filled no x|destructive=true": __body35,
    // figma: Type=Label tooltip, State=Filled no X, Destructive=True
    "type=label tooltip|state=filled no x|destructive=true": __body36,
    // figma: Type=No label, State=Filled, Destructive=True
    "type=no label|state=filled|destructive=true": __body37,
    // figma: Type=No label, State=Filled no X, Destructive=True
    "type=no label|state=filled no x|destructive=true": __body38
  };
  return (__impls[__vkey_NumberInput(props)] ?? __body3)();
}

// figma node: 28:33230 Processbar (37 variants)
const __venc_Processbar = v => String(v).replace(/[%|=]/g, encodeURIComponent);

const __vkey_Processbar = p => "progress=" + __venc_Processbar(p.progress) + '|' + "label=" + __venc_Processbar(p.label) + '|' + "muiti=" + __venc_Processbar(p.muiti);

function Processbar(_p = {}) {
  const props = {
    ..._p,
    progress: _p.progress ?? "0%",
    label: _p.label ?? "bottom",
    muiti: _p.muiti ?? "no",
    subNumber: _p.subNumber ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 8,
      borderRadius: 8,
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 290,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  })), props.subNumber && /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "0%"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 8,
      borderRadius: 8,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  })), props.subNumber && /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "0%"));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 8,
      borderRadius: 8,
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 284,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28.606,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), props.subNumber && /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "10%"));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 8,
      borderRadius: 8,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), props.subNumber && /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "10%"));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 71.8,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 8,
      borderRadius: 8,
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 282,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 56.812,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), props.subNumber && /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "20%"));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 8,
      borderRadius: 8,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 64,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), props.subNumber && /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "20%"));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 101.2,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 8,
      borderRadius: 8,
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 282,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 85.218,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), props.subNumber && /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "30%"));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 8,
      borderRadius: 8,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 96,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), props.subNumber && /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "30%"));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 128.8,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 8,
      borderRadius: 8,
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 282,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 113.626,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), props.subNumber && /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "40%"));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 8,
      borderRadius: 8,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 128,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), props.subNumber && /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "40%"));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 157,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 8,
      borderRadius: 8,
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 282,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 142.029,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), props.subNumber && /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "50%"));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 8,
      borderRadius: 8,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 160,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), props.subNumber && /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "50%"));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 184,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 8,
      borderRadius: 8,
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 282,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 170.435,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), props.subNumber && /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "60%"));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 8,
      borderRadius: 8,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 192,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), props.subNumber && /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "60%"));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 211.6,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 8,
      borderRadius: 8,
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 283,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 199.541,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), props.subNumber && /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "70%"));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 8,
      borderRadius: 8,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 224,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), props.subNumber && /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "70%"));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 238.9,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 8,
      borderRadius: 8,
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 282,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 227.247,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), props.subNumber && /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "80%"));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 8,
      borderRadius: 8,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 256,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), props.subNumber && /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "80%"));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 266.8,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 8,
      borderRadius: 8,
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 282,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 255.653,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), props.subNumber && /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "90%"));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 8,
      borderRadius: 8,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 288,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), props.subNumber && /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "90%"));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 294.4,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })));
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 8,
      borderRadius: 8,
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 276,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 276,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), props.subNumber && /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "100%"));
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 8,
      borderRadius: 8,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), props.subNumber && /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "100%"));
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 258,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(21,94,239)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 186,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(21,94,239)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 107,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(21,94,239)"
    }
  })));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 8,
      borderRadius: 8,
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 282,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 227.363,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(220,104,3)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 163.913,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,170,8)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 94.294,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(21,94,239)"
    }
  })), props.subNumber && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "80%"));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 8,
      borderRadius: 8,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 258,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(220,104,3)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 186,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,170,8)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 107,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(21,94,239)"
    }
  })), props.subNumber && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "80%"));
  const __body36 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(142,0,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 8,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "25%")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,0,0)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 8,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text2 ?? "25%")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(142,0,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 8,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text3 ?? "25%")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(142,0,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 8,
      whiteSpace: "nowrap",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text4 ?? "25%")));
  const __impls = {
    // figma: Progress=0%, Label=Right, Muiti=No
    "progress=0%25|label=right|muiti=no": __body0,
    // figma: Progress=0%, Label=Bottom, Muiti=No
    "progress=0%25|label=bottom|muiti=no": __body1,
    // figma: Progress=0%, Label=False, Muiti=No
    "progress=0%25|label=false|muiti=no": __body2,
    // figma: Progress=10%, Label=Right, Muiti=No
    "progress=10%25|label=right|muiti=no": __body3,
    // figma: Progress=10%, Label=Bottom, Muiti=No
    "progress=10%25|label=bottom|muiti=no": __body4,
    // figma: Progress=10%, Label=False, Muiti=No
    "progress=10%25|label=false|muiti=no": __body5,
    // figma: Progress=20%, Label=Right, Muiti=No
    "progress=20%25|label=right|muiti=no": __body6,
    // figma: Progress=20%, Label=Bottom, Muiti=No
    "progress=20%25|label=bottom|muiti=no": __body7,
    // figma: Progress=20%, Label=False, Muiti=No
    "progress=20%25|label=false|muiti=no": __body8,
    // figma: Progress=30%, Label=Right, Muiti=No
    "progress=30%25|label=right|muiti=no": __body9,
    // figma: Progress=30%, Label=Bottom, Muiti=No
    "progress=30%25|label=bottom|muiti=no": __body10,
    // figma: Progress=30%, Label=False, Muiti=No
    "progress=30%25|label=false|muiti=no": __body11,
    // figma: Progress=40%, Label=Right, Muiti=No
    "progress=40%25|label=right|muiti=no": __body12,
    // figma: Progress=40%, Label=Bottom, Muiti=No
    "progress=40%25|label=bottom|muiti=no": __body13,
    // figma: Progress=40%, Label=False, Muiti=No
    "progress=40%25|label=false|muiti=no": __body14,
    // figma: Progress=50%, Label=Right, Muiti=No
    "progress=50%25|label=right|muiti=no": __body15,
    // figma: Progress=50%, Label=Bottom, Muiti=No
    "progress=50%25|label=bottom|muiti=no": __body16,
    // figma: Progress=50%, Label=False, Muiti=No
    "progress=50%25|label=false|muiti=no": __body17,
    // figma: Progress=60%, Label=Right, Muiti=No
    "progress=60%25|label=right|muiti=no": __body18,
    // figma: Progress=60%, Label=Bottom, Muiti=No
    "progress=60%25|label=bottom|muiti=no": __body19,
    // figma: Progress=60%, Label=False, Muiti=No
    "progress=60%25|label=false|muiti=no": __body20,
    // figma: Progress=70%, Label=Right, Muiti=No
    "progress=70%25|label=right|muiti=no": __body21,
    // figma: Progress=70%, Label=Bottom, Muiti=No
    "progress=70%25|label=bottom|muiti=no": __body22,
    // figma: Progress=70%, Label=False, Muiti=No
    "progress=70%25|label=false|muiti=no": __body23,
    // figma: Progress=80%, Label=Right, Muiti=No
    "progress=80%25|label=right|muiti=no": __body24,
    // figma: Progress=80%, Label=Bottom, Muiti=No
    "progress=80%25|label=bottom|muiti=no": __body25,
    // figma: Progress=80%, Label=False, Muiti=No
    "progress=80%25|label=false|muiti=no": __body26,
    // figma: Progress=90%, Label=Right, Muiti=No
    "progress=90%25|label=right|muiti=no": __body27,
    // figma: Progress=90%, Label=Bottom, Muiti=No
    "progress=90%25|label=bottom|muiti=no": __body28,
    // figma: Progress=90%, Label=False, Muiti=No
    "progress=90%25|label=false|muiti=no": __body29,
    // figma: Progress=100%, Label=Right, Muiti=No
    "progress=100%25|label=right|muiti=no": __body30,
    // figma: Progress=100%, Label=Bottom, Muiti=No
    "progress=100%25|label=bottom|muiti=no": __body31,
    // figma: Progress=100%, Label=False, Muiti=No
    "progress=100%25|label=false|muiti=no": __body32,
    // figma: Progress=80%, Label=False, Muiti=Yes
    "progress=80%25|label=false|muiti=\byes": __body33,
    // figma: Progress=80%, Label=Right, Muiti=Yes
    "progress=80%25|label=right|muiti=\byes": __body34,
    // figma: Progress=80%, Label=Bottom, Muiti=Yes
    "progress=80%25|label=bottom|muiti=\byes": __body35,
    // figma: Progress=100%, Label=False, Muiti=Yes
    "progress=100%25|label=false|muiti=\byes": __body36
  };
  return (__impls[__vkey_Processbar(props)] ?? __body1)();
}

// figma node: 9357:22076 Input-Addon/Label
function InputAddonLabel(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(250,250,250)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 11,
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0
    }
  }, props.text1 ?? "http://")));
}

// figma node: 9419:16646 input-addon-left
function InputAddonLeft(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 45,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLabel, {
    text1: "KFM"
  })));
}

// figma node: 657:31295 Text field (54 variants)
const __venc_TextField = v => String(v).replace(/[%|=]/g, encodeURIComponent);

const __vkey_TextField = p => "type=" + __venc_TextField(p.type) + '|' + "destructive=" + __venc_TextField(p.destructive) + '|' + "state=" + __venc_TextField(p.state) + '|' + "addon=" + __venc_TextField(p.addon);

function TextField(_p = {}) {
  const props = {
    ..._p,
    required: _p.required ?? true,
    type: _p.type ?? "default",
    destructive: _p.destructive ?? false,
    state: _p.state ?? "default",
    addon: _p.addon ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(152,162,179), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input")))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(152,162,179), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input"))))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(152,162,179), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input")))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(152,162,179), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input"))))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      height: 32,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(152,162,179), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text input")))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(152,162,179), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text input")))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input")))));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input"))))));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input")))));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input"))))));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      height: 32,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text input")))));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text input")))));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input"))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input"))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text input")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "This is an error message."));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text input")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "This is an error message."));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(249,112,102), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(249,112,102), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input"))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(249,112,102), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(249,112,102), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input"))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(249,112,102), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text input")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "This is an error message."));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(249,112,102), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text input")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "This is an error message."));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(242,244,247)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(102,112,133)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input")))));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input"))))));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(242,244,247)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(102,112,133)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input")))));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input"))))));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      height: 32,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(242,244,247)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(102,112,133)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text input")))));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text input")))));
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))));
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null))))));
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null))))));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      height: 32,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text input")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text input")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))));
  const __body36 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(217,45,32), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body37 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(217,45,32), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body38 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(217,45,32), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body39 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(217,45,32), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body40 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(217,45,32), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text input")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "This is an error message."));
  const __body41 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(217,45,32), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text input")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "This is an error message."));
  const __body42 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))));
  const __body43 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null))))));
  const __body44 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))));
  const __body45 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null))))));
  const __body46 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      height: 32,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text input")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))));
  const __body47 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text input")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))));
  const __body48 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body49 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body50 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body51 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Label"), props.required && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0
    }
  }, props.text2 ?? "*"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconInformation, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Text input")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null))))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "This is an error message."));
  const __body52 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text input")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "This is an error message."));
  const __body53 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(InputAddonLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(253,162,155)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text input")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "This is an error message."));
  const __impls = {
    // figma: Type=Default, Destructive=False, State=Hover, Addon=Default
    "type=default|destructive=false|state=hover|addon=default": __body0,
    // figma: Type=Default, Destructive=False, State=Hover, Addon=LEFT
    "type=default|destructive=false|state=hover|addon=left": __body1,
    // figma: Type=Label tooltip, Destructive=False, State=Hover, Addon=Default
    "type=label tooltip|destructive=false|state=hover|addon=default": __body2,
    // figma: Type=Label tooltip, Destructive=False, State=Hover, Addon=LEFT
    "type=label tooltip|destructive=false|state=hover|addon=left": __body3,
    // figma: Type=No label, Destructive=False, State=Hover, Addon=Default
    "type=no label|destructive=false|state=hover|addon=default": __body4,
    // figma: Type=No label, Destructive=False, State=Hover, Addon=LEFT
    "type=no label|destructive=false|state=hover|addon=left": __body5,
    // figma: Type=Default, Destructive=False, State=Default, Addon=Default
    "type=default|destructive=false|state=default|addon=default": __body6,
    // figma: Type=Default, Destructive=False, State=Default, Addon=LEFT
    "type=default|destructive=false|state=default|addon=left": __body7,
    // figma: Type=Label tooltip, Destructive=False, State=Default, Addon=Default
    "type=label tooltip|destructive=false|state=default|addon=default": __body8,
    // figma: Type=Label tooltip, Destructive=False, State=Default, Addon=LEFT
    "type=label tooltip|destructive=false|state=default|addon=left": __body9,
    // figma: Type=No label, Destructive=False, State=Default, Addon=Default
    "type=no label|destructive=false|state=default|addon=default": __body10,
    // figma: Type=No label, Destructive=False, State=Default, Addon=LEFT
    "type=no label|destructive=false|state=default|addon=left": __body11,
    // figma: Type=Default, Destructive=True, State=Default, Addon=Default
    "type=default|destructive=true|state=default|addon=default": __body12,
    // figma: Type=Default, Destructive=True, State=Default, Addon=LEFT
    "type=default|destructive=true|state=default|addon=left": __body13,
    // figma: Type=Label tooltip, Destructive=True, State=Default, Addon=Default
    "type=label tooltip|destructive=true|state=default|addon=default": __body14,
    // figma: Type=Label tooltip, Destructive=True, State=Default, Addon=LEFT
    "type=label tooltip|destructive=true|state=default|addon=left": __body15,
    // figma: Type=No label, Destructive=True, State=Default, Addon=Default
    "type=no label|destructive=true|state=default|addon=default": __body16,
    // figma: Type=No label, Destructive=True, State=Default, Addon=LEFT
    "type=no label|destructive=true|state=default|addon=left": __body17,
    // figma: Type=Default, Destructive=True, State=Hover, Addon=Default
    "type=default|destructive=true|state=hover|addon=default": __body18,
    // figma: Type=Default, Destructive=True, State=Hover, Addon=LEFT
    "type=default|destructive=true|state=hover|addon=left": __body19,
    // figma: Type=Label tooltip, Destructive=True, State=Hover, Addon=Default
    "type=label tooltip|destructive=true|state=hover|addon=default": __body20,
    // figma: Type=Label tooltip, Destructive=True, State=Hover, Addon=LEFT
    "type=label tooltip|destructive=true|state=hover|addon=left": __body21,
    // figma: Type=No label, Destructive=True, State=Hover, Addon=Default
    "type=no label|destructive=true|state=hover|addon=default": __body22,
    // figma: Type=No label, Destructive=True, State=Hover, Addon=LEFT
    "type=no label|destructive=true|state=hover|addon=left": __body23,
    // figma: Type=Default, Destructive=False, State=Disabled, Addon=Default
    "type=default|destructive=false|state=disabled|addon=default": __body24,
    // figma: Type=Default, Destructive=False, State=Disabled, Addon=LEFT
    "type=default|destructive=false|state=disabled|addon=left": __body25,
    // figma: Type=Label tooltip, Destructive=False, State=Disabled, Addon=Default
    "type=label tooltip|destructive=false|state=disabled|addon=default": __body26,
    // figma: Type=Label tooltip, Destructive=False, State=Disabled, Addon=LEFT
    "type=label tooltip|destructive=false|state=disabled|addon=left": __body27,
    // figma: Type=No label, Destructive=False, State=Disabled, Addon=Default
    "type=no label|destructive=false|state=disabled|addon=default": __body28,
    // figma: Type=No label, Destructive=False, State=Disabled, Addon=LEFT
    "type=no label|destructive=false|state=disabled|addon=left": __body29,
    // figma: Type=Default, Destructive=False, State=Filled, Addon=Default
    "type=default|destructive=false|state=filled|addon=default": __body30,
    // figma: Type=Default, Destructive=False, State=Filled, Addon=LEFT
    "type=default|destructive=false|state=filled|addon=left": __body31,
    // figma: Type=Label tooltip, Destructive=False, State=Filled, Addon=Default
    "type=label tooltip|destructive=false|state=filled|addon=default": __body32,
    // figma: Type=Label tooltip, Destructive=False, State=Filled, Addon=LEFT
    "type=label tooltip|destructive=false|state=filled|addon=left": __body33,
    // figma: Type=No label, Destructive=False, State=Filled, Addon=Default
    "type=no label|destructive=false|state=filled|addon=default": __body34,
    // figma: Type=No label, Destructive=False, State=Filled, Addon=LEFT
    "type=no label|destructive=false|state=filled|addon=left": __body35,
    // figma: Type=Default, Destructive=True, State=Focused, Addon=Default
    "type=default|destructive=true|state=focused|addon=default": __body36,
    // figma: Type=Default, Destructive=True, State=Focused, Addon=LEFT
    "type=default|destructive=true|state=focused|addon=left": __body37,
    // figma: Type=Label tooltip, Destructive=True, State=Focused, Addon=Default
    "type=label tooltip|destructive=true|state=focused|addon=default": __body38,
    // figma: Type=Label tooltip, Destructive=True, State=Focused, Addon=LEFT
    "type=label tooltip|destructive=true|state=focused|addon=left": __body39,
    // figma: Type=No label, Destructive=True, State=Focused, Addon=Default
    "type=no label|destructive=true|state=focused|addon=default": __body40,
    // figma: Type=No label, Destructive=True, State=Focused, Addon=LEFT
    "type=no label|destructive=true|state=focused|addon=left": __body41,
    // figma: Type=Default, Destructive=False, State=Focused, Addon=Default
    "type=default|destructive=false|state=focused|addon=default": __body42,
    // figma: Type=Default, Destructive=False, State=Focused, Addon=LEFT
    "type=default|destructive=false|state=focused|addon=left": __body43,
    // figma: Type=Label tooltip, Destructive=False, State=Focused, Addon=Default
    "type=label tooltip|destructive=false|state=focused|addon=default": __body44,
    // figma: Type=Label tooltip, Destructive=False, State=Focused, Addon=LEFT
    "type=label tooltip|destructive=false|state=focused|addon=left": __body45,
    // figma: Type=No label, Destructive=False, State=Focused, Addon=Default
    "type=no label|destructive=false|state=focused|addon=default": __body46,
    // figma: Type=No label, Destructive=False, State=Focused, Addon=LEFT
    "type=no label|destructive=false|state=focused|addon=left": __body47,
    // figma: Type=Default, Destructive=True, State=Filled, Addon=Default
    "type=default|destructive=true|state=filled|addon=default": __body48,
    // figma: Type=Default, Destructive=True, State=Filled, Addon=LEFT
    "type=default|destructive=true|state=filled|addon=left": __body49,
    // figma: Type=Label tooltip, Destructive=True, State=Filled, Addon=Default
    "type=label tooltip|destructive=true|state=filled|addon=default": __body50,
    // figma: Type=Label tooltip, Destructive=True, State=Filled, Addon=LEFT
    "type=label tooltip|destructive=true|state=filled|addon=left": __body51,
    // figma: Type=No label, Destructive=True, State=Filled, Addon=Default
    "type=no label|destructive=true|state=filled|addon=default": __body52,
    // figma: Type=No label, Destructive=True, State=Filled, Addon=LEFT
    "type=no label|destructive=true|state=filled|addon=left": __body53
  };
  return (__impls[__vkey_TextField(props)] ?? __body6)();
}

// figma node: 25:11134 Toggle (40 variants)
const __venc_Toggle = v => String(v).replace(/[%|=]/g, encodeURIComponent);

const __vkey_Toggle = p => "pressed=" + __venc_Toggle(p.pressed) + '|' + "size=" + __venc_Toggle(p.size) + '|' + "text=" + __venc_Toggle(p.text) + '|' + "state=" + __venc_Toggle(p.state) + '|' + "tooltip=" + __venc_Toggle(p.tooltip);

export {
  NumberInput,
  __venc_Processbar,
  __vkey_Processbar,
  Processbar,
  InputAddonLabel,
  InputAddonLeft,
  __venc_TextField,
  __vkey_TextField,
  TextField,
  __venc_Toggle,
  __vkey_Toggle
};
