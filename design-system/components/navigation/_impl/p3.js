import React from "react";
import {
  Button,
  IconClose,
  Badge2,
  PopoverArrow,
  Title,
  __vkey_PopOver
} from "../_impl.js";

function PopOver(_p = {}) {
  const props = {
    ..._p,
    arrow: _p.arrow ?? "-> left",
    title: _p.title ?? false,
    footer: _p.footer ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 300,
      display: "flex",
      flexDirection: "column",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "16px 16px 8px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Title, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text: "Popover title",
    size: "xx-small"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Adjust the title, content and footer padding via Auto Layout. The available sizes are 0, 8, 16, and 24. Change the contents by swapping this Paragraph component with your own component."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 16px 16px",
      alignItems: "flex-start",
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
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      width: 69,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Button, {
    leadIcon: false,
    rightIcon: false,
    size: "h32px",
    hierarchy: "secondary gray",
    icon: "default",
    destructive: false,
    state: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      width: 69,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Button, {
    leadIcon: false,
    rightIcon: false,
    size: "h32px",
    hierarchy: "primary",
    icon: "default",
    destructive: false,
    state: "default"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 0.001,
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      transform: "matrix(-1,0,0,-1,0,0)",
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(PopoverArrow, null)))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 300,
      display: "flex",
      flexDirection: "column",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Adjust the title, content and footer padding via Auto Layout. The available sizes are 0, 8, 16, and 24. Change the contents by swapping this Paragraph component with your own component."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 16px 16px",
      alignItems: "flex-start",
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
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      width: 69,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Button, {
    leadIcon: false,
    rightIcon: false,
    size: "h32px",
    hierarchy: "secondary gray",
    icon: "default",
    destructive: false,
    state: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      width: 69,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Button, {
    leadIcon: false,
    rightIcon: false,
    size: "h32px",
    hierarchy: "primary",
    icon: "default",
    destructive: false,
    state: "default"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 0.001,
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      transform: "matrix(-1,0,0,-1,0,0)",
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(PopoverArrow, null)))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 300,
      display: "flex",
      flexDirection: "column",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "16px 16px 8px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Title, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text: "Popover title",
    size: "xx-small"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Adjust the title, content and footer padding via Auto Layout. The available sizes are 0, 8, 16, and 24. Change the contents by swapping this Paragraph component with your own component."))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 0.001,
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      transform: "matrix(-1,0,0,-1,0,0)",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(PopoverArrow, null)))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 300,
      display: "flex",
      flexDirection: "column",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Adjust the title, content and footer padding via Auto Layout. The available sizes are 0, 8, 16, and 24. Change the contents by swapping this Paragraph component with your own component."))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 0.001,
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      transform: "matrix(-1,0,0,-1,0,0)",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(PopoverArrow, null)))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 300,
      display: "flex",
      flexDirection: "column",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "16px 16px 8px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Title, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text: "Popover title",
    size: "xx-small"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Adjust the title, content and footer padding via Auto Layout. The available sizes are 0, 8, 16, and 24. Change the contents by swapping this Paragraph component with your own component."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 16px 16px",
      alignItems: "flex-start",
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
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      width: 69,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Button, {
    leadIcon: false,
    rightIcon: false,
    size: "h32px",
    hierarchy: "secondary gray",
    icon: "default",
    destructive: false,
    state: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      width: 69,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Button, {
    leadIcon: false,
    rightIcon: false,
    size: "h32px",
    hierarchy: "primary",
    icon: "default",
    destructive: false,
    state: "default"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 0.001,
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,12,96)",
      transformOrigin: "0 0"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(PopoverArrow, null))))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 300,
      display: "flex",
      flexDirection: "column",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Adjust the title, content and footer padding via Auto Layout. The available sizes are 0, 8, 16, and 24. Change the contents by swapping this Paragraph component with your own component."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 16px 16px",
      alignItems: "flex-start",
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
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      width: 69,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Button, {
    leadIcon: false,
    rightIcon: false,
    size: "h32px",
    hierarchy: "secondary gray",
    icon: "default",
    destructive: false,
    state: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      width: 69,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Button, {
    leadIcon: false,
    rightIcon: false,
    size: "h32px",
    hierarchy: "primary",
    icon: "default",
    destructive: false,
    state: "default"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 0.001,
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,12,78)",
      transformOrigin: "0 0"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(PopoverArrow, null))))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 300,
      display: "flex",
      flexDirection: "column",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "16px 16px 8px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Title, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text: "Popover title",
    size: "xx-small"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Adjust the title, content and footer padding via Auto Layout. The available sizes are 0, 8, 16, and 24. Change the contents by swapping this Paragraph component with your own component.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 0.001,
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,12,72)",
      transformOrigin: "0 0"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(PopoverArrow, null))))));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 300,
      display: "flex",
      flexDirection: "column",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Adjust the title, content and footer padding via Auto Layout. The available sizes are 0, 8, 16, and 24. Change the contents by swapping this Paragraph component with your own component.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 0.001,
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,12,54)",
      transformOrigin: "0 0"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(PopoverArrow, null))))));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 300,
      display: "flex",
      flexDirection: "column",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 0.001,
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,-11.999,120)",
      transformOrigin: "0 0"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(PopoverArrow, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "16px 16px 8px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Title, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text: "Popover title",
    size: "xx-small"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Adjust the title, content and footer padding via Auto Layout. The available sizes are 0, 8, 16, and 24. Change the contents by swapping this Paragraph component with your own component."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 16px 16px",
      alignItems: "flex-start",
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
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      width: 69,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Button, {
    leadIcon: false,
    rightIcon: false,
    size: "h32px",
    hierarchy: "secondary gray",
    icon: "default",
    destructive: false,
    state: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      width: 69,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(Button, {
    leadIcon: false,
    rightIcon: false,
    size: "h32px",
    hierarchy: "primary",
    icon: "default",
    destructive: false,
    state: "default"
  }))))))));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 300,
      display: "flex",
      flexDirection: "column",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 0.001,
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,-11.999,102)",
      transformOrigin: "0 0"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(PopoverArrow, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Adjust the title, content and footer padding via Auto Layout. The available sizes are 0, 8, 16, and 24. Change the contents by swapping this Paragraph component with your own component."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 16px 16px",
      alignItems: "flex-start",
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
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      width: 69,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Button, {
    leadIcon: false,
    rightIcon: false,
    size: "h32px",
    hierarchy: "secondary gray",
    icon: "default",
    destructive: false,
    state: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      width: 69,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(Button, {
    leadIcon: false,
    rightIcon: false,
    size: "h32px",
    hierarchy: "primary",
    icon: "default",
    destructive: false,
    state: "default"
  }))))))));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 300,
      display: "flex",
      flexDirection: "column",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 0.001,
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,-11.999,96)",
      transformOrigin: "0 0"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(PopoverArrow, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 6,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "16px 16px 8px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Title, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text: "Popover title",
    size: "xx-small"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Adjust the title, content and footer padding via Auto Layout. The available sizes are 0, 8, 16, and 24. Change the contents by swapping this Paragraph component with your own component.")))))));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 300,
      display: "flex",
      flexDirection: "column",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 0.001,
      display: "flex",
      flexDirection: "column",
      padding: "16px 0px 16px 0px",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,-11.999,78)",
      transformOrigin: "0 0"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(PopoverArrow, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Adjust the title, content and footer padding via Auto Layout. The available sizes are 0, 8, 16, and 24. Change the contents by swapping this Paragraph component with your own component.")))))));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 300,
      display: "flex",
      flexDirection: "column",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 0.001,
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(PopoverArrow, null))), /*#__PURE__*/React.createElement("div", {
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
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "16px 16px 8px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Title, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text: "Popover title",
    size: "xx-small"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Adjust the title, content and footer padding via Auto Layout. The available sizes are 0, 8, 16, and 24. Change the contents by swapping this Paragraph component with your own component."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 16px 16px",
      alignItems: "flex-start",
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
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      width: 69,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Button, {
    leadIcon: false,
    rightIcon: false,
    size: "h32px",
    hierarchy: "secondary gray",
    icon: "default",
    destructive: false,
    state: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      width: 69,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(Button, {
    leadIcon: false,
    rightIcon: false,
    size: "h32px",
    hierarchy: "primary",
    icon: "default",
    destructive: false,
    state: "default"
  }))))))));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 300,
      display: "flex",
      flexDirection: "column",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 0.001,
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(PopoverArrow, null))), /*#__PURE__*/React.createElement("div", {
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
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Adjust the title, content and footer padding via Auto Layout. The available sizes are 0, 8, 16, and 24. Change the contents by swapping this Paragraph component with your own component."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 16px 16px 16px",
      alignItems: "flex-start",
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
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      width: 69,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Button, {
    leadIcon: false,
    rightIcon: false,
    size: "h32px",
    hierarchy: "secondary gray",
    icon: "default",
    destructive: false,
    state: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      width: 69,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(Button, {
    leadIcon: false,
    rightIcon: false,
    size: "h32px",
    hierarchy: "primary",
    icon: "default",
    destructive: false,
    state: "default"
  }))))))));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 300,
      display: "flex",
      flexDirection: "column",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 0.001,
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(PopoverArrow, null))), /*#__PURE__*/React.createElement("div", {
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
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "16px 16px 8px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Title, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text: "Popover title",
    size: "xx-small"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Adjust the title, content and footer padding via Auto Layout. The available sizes are 0, 8, 16, and 24. Change the contents by swapping this Paragraph component with your own component.")))))));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 300,
      display: "flex",
      flexDirection: "column",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 0.001,
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(PopoverArrow, null))), /*#__PURE__*/React.createElement("div", {
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
      overflow: "hidden",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Adjust the title, content and footer padding via Auto Layout. The available sizes are 0, 8, 16, and 24. Change the contents by swapping this Paragraph component with your own component.")))))));
  const __impls = {
    // figma: Arrow=↑ Bottom, Title=True, Footer=True
    "arrow=↑ bottom|title=true|footer=true": __body0,
    // figma: Arrow=↑ Bottom, Title=False, Footer=True
    "arrow=↑ bottom|title=false|footer=true": __body1,
    // figma: Arrow=↑ Bottom, Title=True, Footer=False
    "arrow=↑ bottom|title=true|footer=false": __body2,
    // figma: Arrow=↑ Bottom, Title=False, Footer=False
    "arrow=↑ bottom|title=false|footer=false": __body3,
    // figma: Arrow=← Right, Title=True, Footer=True
    "arrow=← right|title=true|footer=true": __body4,
    // figma: Arrow=← Right, Title=False, Footer=True
    "arrow=← right|title=false|footer=true": __body5,
    // figma: Arrow=← Right, Title=True, Footer=False
    "arrow=← right|title=true|footer=false": __body6,
    // figma: Arrow=← Right, Title=False, Footer=False
    "arrow=← right|title=false|footer=false": __body7,
    // figma: Arrow=-> Left, Title=True, Footer=True
    "arrow=-> left|title=true|footer=true": __body8,
    // figma: Arrow=-> Left, Title=False, Footer=True
    "arrow=-> left|title=false|footer=true": __body9,
    // figma: Arrow=-> Left, Title=True, Footer=False
    "arrow=-> left|title=true|footer=false": __body10,
    // figma: Arrow=-> Left, Title=False, Footer=False
    "arrow=-> left|title=false|footer=false": __body11,
    // figma: Arrow=↓ Top, Title=True, Footer=True
    "arrow=↓ top|title=true|footer=true": __body12,
    // figma: Arrow=↓ Top, Title=False, Footer=True
    "arrow=↓ top|title=false|footer=true": __body13,
    // figma: Arrow=↓ Top, Title=True, Footer=False
    "arrow=↓ top|title=true|footer=false": __body14,
    // figma: Arrow=↓ Top, Title=False, Footer=False
    "arrow=↓ top|title=false|footer=false": __body15
  };
  return (__impls[__vkey_PopOver(props)] ?? __body11)();
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

// figma node: 295:36052 alert
function Alert(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      position: "relative",
      color: "rgb(52,55,65)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 14,
    viewBox: "0 0 16 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 1,
      width: 16,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.55 8.502 L 8.9 4.995 C 8.954 4.462 8.535 4 8 4 C 7.465 4 7.046 4.462 7.1 4.995 L 7.45 8.502 C 7.478 8.785 7.716 9 8 9 C 8.284 9 8.522 8.785 8.55 8.502 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 9 11 C 9 11.552 8.552 12 8 12 C 7.448 12 7 11.552 7 11 C 7 10.448 7.448 10 8 10 C 8.552 10 9 10.448 9 11 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 8.864 0.496 C 8.685 0.189 8.356 0 8 0 C 7.644 0 7.315 0.189 7.136 0.496 L 0.136 12.496 C -0.044 12.805 -0.045 13.188 0.133 13.498 C 0.311 13.809 0.642 14 1 14 L 15 14 C 15.358 14 15.689 13.809 15.867 13.498 C 16.045 13.188 16.044 12.805 15.864 12.496 L 8.864 0.496 Z M 1 13 L 8 1 L 15 13 L 1 13 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 295:28345 menu
function Menu(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      position: "relative",
      color: "rgb(52,55,65)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 12,
    viewBox: "0 0 16 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 2,
      width: 16,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 2 L 0 2 L 0 0 Z M 0 5 L 16 5 L 16 7 L 0 7 L 0 5 Z M 16 10 L 0 10 L 0 12 L 16 12 L 16 10 Z",
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

// figma node: 38:37105 _Nav menu button (6 variants)
const __venc_NavMenuButton = v => String(v).replace(/[%|=]/g, encodeURIComponent);

const __vkey_NavMenuButton = p => "opened=" + __venc_NavMenuButton(p.opened) + '|' + "state=" + __venc_NavMenuButton(p.state);

function NavMenuButton(_p = {}) {
  const props = {
    ..._p,
    opened: _p.opened ?? false,
    state: _p.state ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconMenu, null)));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconClose, null)));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.08), 0px 0px 0px 2px rgb(209,224,255)",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconMenu, null)));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(249,250,251)",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconMenu, null)));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(249,250,251)",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconClose, null)));
  const __impls = {
    // figma: Opened=False, State=Default
    "opened=false|state=default": __body0,
    // figma: Opened=True, State=Default
    "opened=true|state=default": __body1,
    // figma: Opened=False, State=Focused
    "opened=false|state=focused": __body2,
    // figma: Opened=True, State=Focused
    "opened=true|state=focused": __body1,
    // figma: Opened=False, State=Hover
    "opened=false|state=hover": __body3,
    // figma: Opened=True, State=Hover
    "opened=true|state=hover": __body4
  };
  return (__impls[__vkey_NavMenuButton(props)] ?? __body0)();
}

// figma node: 28:5628 Ava (8 variants)
const __venc_Ava = v => String(v).replace(/[%|=]/g, encodeURIComponent);

const __vkey_Ava = p => "size=" + __venc_Ava(p.size) + '|' + "text=" + __venc_Ava(p.text);

function Ava(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "xs",
    text: _p.text ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-436985b609d05307",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-436985b609d05307",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 32
    }
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      height: 40,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-436985b609d05307",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40
    }
  }));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48,
      height: 48,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-436985b609d05307",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 48
    }
  }));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48,
      height: 48,
      borderRadius: 200,
      backgroundColor: "rgb(209,224,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 10,
      width: 48,
      height: 28,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      textAlign: "center",
      lineHeight: "28px",
      color: "rgb(71,84,103)"
    }
  }, props.text1 ?? "EX"));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      height: 40,
      borderRadius: 200,
      backgroundColor: "rgb(209,224,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 8,
      width: 40,
      height: 24,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      lineHeight: "24px",
      color: "rgb(71,84,103)"
    }
  }, props.text1 ?? "EX"));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      borderRadius: 200,
      backgroundColor: "rgb(209,224,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 6,
      width: 32,
      height: 20,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "rgb(71,84,103)"
    }
  }, props.text1 ?? "EX"));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 200,
      backgroundColor: "rgb(209,224,255)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: -4,
      top: 2,
      width: 32,
      height: 20,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "rgb(21,94,239)"
    }
  }, props.text1 ?? "EX"));
  const __impls = {
    // figma: Size=xs, Text=False
    "size=xs|text=false": __body0,
    // figma: Size=sm, Text=False
    "size=sm|text=false": __body1,
    // figma: Size=md, Text=False
    "size=md|text=false": __body2,
    // figma: Size=lg, Text=False
    "size=lg|text=false": __body3,
    // figma: Size=lg, Text=True
    "size=lg|text=true": __body4,
    // figma: Size=md, Text=True
    "size=md|text=true": __body5,
    // figma: Size=sm, Text=True
    "size=sm|text=true": __body6,
    // figma: Size=xs, Text=True
    "size=xs|text=true": __body7
  };
  return (__impls[__vkey_Ava(props)] ?? __body0)();
}

// figma node: 275:59210 Icon/Notification
function IconNotification(_p = {}) {
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
    width: 13,
    height: 14.500,
    viewBox: "0 0 13 14.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.5,
      top: 0.5,
      width: 13,
      height: 14.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.854 9.146 L 11.5 7.793 L 11.5 6 C 11.498 4.761 11.037 3.567 10.206 2.648 C 9.375 1.729 8.233 1.151 7 1.025 L 7 0 L 6 0 L 6 1.025 C 4.767 1.151 3.625 1.729 2.794 2.648 C 1.963 3.567 1.502 4.761 1.5 6 L 1.5 7.793 L 0.146 9.146 C 0.053 9.24 0 9.367 0 9.5 L 0 11 C 0 11.133 0.053 11.26 0.146 11.354 C 0.24 11.447 0.367 11.5 0.5 11.5 L 4 11.5 L 4 11.888 C 3.989 12.523 4.213 13.139 4.628 13.618 C 5.043 14.098 5.621 14.408 6.25 14.488 C 6.598 14.522 6.949 14.484 7.28 14.374 C 7.612 14.265 7.917 14.088 8.176 13.853 C 8.435 13.619 8.642 13.333 8.784 13.014 C 8.926 12.695 9 12.349 9 12 L 9 11.5 L 12.5 11.5 C 12.633 11.5 12.76 11.447 12.854 11.354 C 12.947 11.26 13 11.133 13 11 L 13 9.5 C 13 9.367 12.947 9.24 12.854 9.146 Z M 8 12 C 8 12.398 7.842 12.779 7.561 13.061 C 7.279 13.342 6.898 13.5 6.5 13.5 C 6.102 13.5 5.721 13.342 5.439 13.061 C 5.158 12.779 5 12.398 5 12 L 5 11.5 L 8 11.5 L 8 12 Z M 12 10.5 L 1 10.5 L 1 9.707 L 2.353 8.354 C 2.447 8.26 2.5 8.133 2.5 8 L 2.5 6 C 2.5 4.939 2.921 3.922 3.672 3.172 C 4.422 2.421 5.439 2 6.5 2 C 7.561 2 8.578 2.421 9.328 3.172 C 10.079 3.922 10.5 4.939 10.5 6 L 10.5 8 C 10.5 8.133 10.553 8.26 10.646 8.354 L 12 9.707 L 12 10.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 38:39277 Nav button (6 variants)
const __venc_NavButton = v => String(v).replace(/[%|=]/g, encodeURIComponent);

const __vkey_NavButton = p => "current=" + __venc_NavButton(p.current) + '|' + "size=" + __venc_NavButton(p.size) + '|' + "theme=" + __venc_NavButton(p.theme) + '|' + "state=" + __venc_NavButton(p.state);

function NavButton(_p = {}) {
  const props = {
    ..._p,
    current: _p.current ?? false,
    size: _p.size ?? "md",
    theme: _p.theme ?? "default",
    state: _p.state ?? "default",
    showBadge: _p.showBadge ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconNotification, null)));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "rgb(239,244,255)",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconNotification, null)), props.showBadge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: 2,
      width: 28,
      height: 18
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Badge2, {
    text1: "999",
    size: "sm",
    icon: "false",
    color: "error",
    outline: false
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.08), 0px 0px 0px 2px rgb(209,224,255)",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconNotification, null)));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(239,244,255)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.08), 0px 0px 0px 2px rgb(209,224,255)",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconNotification, null)));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(249,250,251)",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconNotification, null)));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(209,224,255)",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconNotification, null)));
  const __impls = {
    // figma: Current=False, Size=md, Theme=Default, State=Default
    "current=false|size=md|theme=default|state=default": __body0,
    // figma: Current=True, Size=md, Theme=Default, State=Default
    "current=true|size=md|theme=default|state=default": __body1,
    // figma: Current=False, Size=md, Theme=Default, State=Focused
    "current=false|size=md|theme=default|state=focused": __body2,
    // figma: Current=True, Size=md, Theme=Default, State=Focused
    "current=true|size=md|theme=default|state=focused": __body3,
    // figma: Current=False, Size=md, Theme=Default, State=Hover
    "current=false|size=md|theme=default|state=hover": __body4,
    // figma: Current=True, Size=md, Theme=Default, State=Hover
    "current=true|size=md|theme=default|state=hover": __body5
  };
  return (__impls[__vkey_NavButton(props)] ?? __body0)();
}

// figma node: 38:36705 Header navigation (6 variants)
const __venc_HeaderNavigation = v => String(v).replace(/[%|=]/g, encodeURIComponent);

const __vkey_HeaderNavigation = p => "type=" + __venc_HeaderNavigation(p.type) + '|' + "breakpoint=" + __venc_HeaderNavigation(p.breakpoint);

function HeaderNavigation(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "4 menu",
    breakpoint: _p.breakpoint ?? "desktop"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1440,
      height: 48,
      borderTop: "1px solid rgb(242,244,247)",
      borderRight: "1px solid rgb(242,244,247)",
      borderBottom: "1px solid rgb(242,244,247)",
      borderLeft: "1px solid rgb(242,244,247)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1440,
      height: 48,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 24px 0px 24px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 40,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.563,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22.497,
    height: 24,
    viewBox: "0 0 22.497 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22.497,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.578 21.836 C 8.593 21.836 4.599 17.778 4.552 12.825 C 4.57 10.672 5.275 9.271 5.984 8.474 C 6.826 7.535 11.351 3.236 11.351 3.236 L 8.108 0 C 8.108 0 4.144 3.867 3.089 5.03 C 2.039 6.196 1.311 7.447 0.672 8.893 C 0.033 10.338 0 12.763 0 12.763 C 0.022 18.974 5.084 24 11.307 24 C 17.2 24 21.975 19.488 22.497 13.739 C 22.031 18.281 18.25 21.836 13.578 21.836 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.871,
    height: 21.689,
    viewBox: "0 0 17.871 21.689",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.693,
      top: 0.136,
      width: 17.871,
      height: 21.689
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.979 19.491 C 1.547 18.24 0.389 16.586 0 14.194 C 0.764 17.099 3.343 19.411 6.466 19.411 C 10.202 19.411 13.118 16.593 13.298 12.921 C 13.497 8.878 9.742 6.314 9.742 6.314 L 6.484 9.37 C 6.484 9.37 3.376 6.277 3.361 6.259 L 9.845 0 C 11.66 2.018 17.134 6.02 17.747 10.551 C 19.128 20.808 8.659 24.459 2.979 19.491 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"IBM Plex Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 24,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      letterSpacing: "-0.020em",
      color: "rgb(71,84,103)",
      flexShrink: 0
    }
  }, props.text1 ?? "SOOBINZHONGSON")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
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
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
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
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
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
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
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
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(NavButton, {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      flexShrink: 0
    },
    current: false,
    size: "md",
    theme: "default",
    state: "default"
  }), /*#__PURE__*/React.createElement(Ava, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    size: "sm",
    text: false
  })))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1440,
      height: 48,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(242,244,247)",
      borderRight: "1px solid rgb(242,244,247)",
      borderBottom: "1px solid rgb(242,244,247)",
      borderLeft: "1px solid rgb(242,244,247)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1440,
      height: 48,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 24px 0px 24px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 40,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.563,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22.497,
    height: 24,
    viewBox: "0 0 22.497 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22.497,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.578 21.836 C 8.593 21.836 4.599 17.778 4.552 12.825 C 4.57 10.672 5.275 9.271 5.984 8.474 C 6.826 7.535 11.351 3.236 11.351 3.236 L 8.108 0 C 8.108 0 4.144 3.867 3.089 5.03 C 2.039 6.196 1.311 7.447 0.672 8.893 C 0.033 10.338 0 12.763 0 12.763 C 0.022 18.974 5.084 24 11.307 24 C 17.2 24 21.975 19.488 22.497 13.739 C 22.031 18.281 18.25 21.836 13.578 21.836 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.871,
    height: 21.689,
    viewBox: "0 0 17.871 21.689",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.693,
      top: 0.136,
      width: 17.871,
      height: 21.689
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.979 19.491 C 1.547 18.24 0.389 16.586 0 14.194 C 0.764 17.099 3.343 19.411 6.466 19.411 C 10.202 19.411 13.118 16.593 13.298 12.921 C 13.497 8.878 9.742 6.314 9.742 6.314 L 6.484 9.37 C 6.484 9.37 3.376 6.277 3.361 6.259 L 9.845 0 C 11.66 2.018 17.134 6.02 17.747 10.551 C 19.128 20.808 8.659 24.459 2.979 19.491 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"IBM Plex Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 24,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      letterSpacing: "-0.020em",
      color: "rgb(71,84,103)",
      flexShrink: 0
    }
  }, props.text1 ?? "SOOBINZHONGSON"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(NavButton, {
    current: false,
    size: "md",
    theme: "default",
    state: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Ava, {
    size: "sm",
    text: false
  }))))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1440,
      height: 48,
      borderTop: "1px solid rgb(242,244,247)",
      borderRight: "1px solid rgb(242,244,247)",
      borderBottom: "1px solid rgb(242,244,247)",
      borderLeft: "1px solid rgb(242,244,247)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1440,
      height: 47,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 24px 0px 24px",
      justifyContent: "space-between",
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
      gap: 40,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.563,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22.497,
    height: 24,
    viewBox: "0 0 22.497 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22.497,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.578 21.836 C 8.593 21.836 4.599 17.778 4.552 12.825 C 4.57 10.672 5.275 9.271 5.984 8.474 C 6.826 7.535 11.351 3.236 11.351 3.236 L 8.108 0 C 8.108 0 4.144 3.867 3.089 5.03 C 2.039 6.196 1.311 7.447 0.672 8.893 C 0.033 10.338 0 12.763 0 12.763 C 0.022 18.974 5.084 24 11.307 24 C 17.2 24 21.975 19.488 22.497 13.739 C 22.031 18.281 18.25 21.836 13.578 21.836 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.871,
    height: 21.689,
    viewBox: "0 0 17.871 21.689",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.693,
      top: 0.136,
      width: 17.871,
      height: 21.689
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.979 19.491 C 1.547 18.24 0.389 16.586 0 14.194 C 0.764 17.099 3.343 19.411 6.466 19.411 C 10.202 19.411 13.118 16.593 13.298 12.921 C 13.497 8.878 9.742 6.314 9.742 6.314 L 6.484 9.37 C 6.484 9.37 3.376 6.277 3.361 6.259 L 9.845 0 C 11.66 2.018 17.134 6.02 17.747 10.551 C 19.128 20.808 8.659 24.459 2.979 19.491 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"IBM Plex Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 24,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      letterSpacing: "-0.020em",
      color: "rgb(71,84,103)",
      flexShrink: 0
    }
  }, props.text1 ?? "SOOBINZHONGSON")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(NavButton, {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      flexShrink: 0
    },
    current: false,
    size: "md",
    theme: "default",
    state: "default"
  }), /*#__PURE__*/React.createElement(Ava, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    size: "sm",
    text: false
  })))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1440,
      height: 48,
      borderTop: "1px solid rgb(242,244,247)",
      borderRight: "1px solid rgb(242,244,247)",
      borderBottom: "1px solid rgb(242,244,247)",
      borderLeft: "1px solid rgb(242,244,247)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1440,
      height: 48,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      display: "flex",
      flexDirection: "row",
      padding: "0px 24px 0px 24px",
      justifyContent: "space-between",
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
      gap: 40,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.563,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22.497,
    height: 24,
    viewBox: "0 0 22.497 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22.497,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.578 21.836 C 8.593 21.836 4.599 17.778 4.552 12.825 C 4.57 10.672 5.275 9.271 5.984 8.474 C 6.826 7.535 11.351 3.236 11.351 3.236 L 8.108 0 C 8.108 0 4.144 3.867 3.089 5.03 C 2.039 6.196 1.311 7.447 0.672 8.893 C 0.033 10.338 0 12.763 0 12.763 C 0.022 18.974 5.084 24 11.307 24 C 17.2 24 21.975 19.488 22.497 13.739 C 22.031 18.281 18.25 21.836 13.578 21.836 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.871,
    height: 21.689,
    viewBox: "0 0 17.871 21.689",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.693,
      top: 0.136,
      width: 17.871,
      height: 21.689
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.979 19.491 C 1.547 18.24 0.389 16.586 0 14.194 C 0.764 17.099 3.343 19.411 6.466 19.411 C 10.202 19.411 13.118 16.593 13.298 12.921 C 13.497 8.878 9.742 6.314 9.742 6.314 L 6.484 9.37 C 6.484 9.37 3.376 6.277 3.361 6.259 L 9.845 0 C 11.66 2.018 17.134 6.02 17.747 10.551 C 19.128 20.808 8.659 24.459 2.979 19.491 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"IBM Plex Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 24,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      letterSpacing: "-0.020em",
      color: "rgb(71,84,103)",
      flexShrink: 0
    }
  }, props.text1 ?? "SOOBINZHONGSON")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(NavButton, {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      flexShrink: 0
    },
    current: false,
    size: "md",
    theme: "default",
    state: "default"
  }), /*#__PURE__*/React.createElement(Ava, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    size: "sm",
    text: false
  })))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1440,
      height: 48,
      borderTop: "1px solid rgb(242,244,247)",
      borderRight: "1px solid rgb(242,244,247)",
      borderBottom: "1px solid rgb(242,244,247)",
      borderLeft: "1px solid rgb(242,244,247)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1440,
      height: 48,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 24px 0px 24px",
      justifyContent: "space-between",
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
      gap: 40,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.563,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22.497,
    height: 24,
    viewBox: "0 0 22.497 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22.497,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.578 21.836 C 8.593 21.836 4.599 17.778 4.552 12.825 C 4.57 10.672 5.275 9.271 5.984 8.474 C 6.826 7.535 11.351 3.236 11.351 3.236 L 8.108 0 C 8.108 0 4.144 3.867 3.089 5.03 C 2.039 6.196 1.311 7.447 0.672 8.893 C 0.033 10.338 0 12.763 0 12.763 C 0.022 18.974 5.084 24 11.307 24 C 17.2 24 21.975 19.488 22.497 13.739 C 22.031 18.281 18.25 21.836 13.578 21.836 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.871,
    height: 21.689,
    viewBox: "0 0 17.871 21.689",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.693,
      top: 0.136,
      width: 17.871,
      height: 21.689
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.979 19.491 C 1.547 18.24 0.389 16.586 0 14.194 C 0.764 17.099 3.343 19.411 6.466 19.411 C 10.202 19.411 13.118 16.593 13.298 12.921 C 13.497 8.878 9.742 6.314 9.742 6.314 L 6.484 9.37 C 6.484 9.37 3.376 6.277 3.361 6.259 L 9.845 0 C 11.66 2.018 17.134 6.02 17.747 10.551 C 19.128 20.808 8.659 24.459 2.979 19.491 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"IBM Plex Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 24,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      letterSpacing: "-0.020em",
      color: "rgb(71,84,103)",
      flexShrink: 0
    }
  }, props.text1 ?? "SOOBINZHONGSON")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(NavButton, {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      flexShrink: 0
    },
    current: false,
    size: "md",
    theme: "default",
    state: "default"
  }), /*#__PURE__*/React.createElement(Ava, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    size: "sm",
    text: false
  })))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1440,
      height: 48,
      borderTop: "1px solid rgb(242,244,247)",
      borderRight: "1px solid rgb(242,244,247)",
      borderBottom: "1px solid rgb(242,244,247)",
      borderLeft: "1px solid rgb(242,244,247)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1440,
      height: 48,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 24px 0px 24px",
      justifyContent: "space-between",
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
      gap: 40,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.563,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22.497,
    height: 24,
    viewBox: "0 0 22.497 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22.497,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.578 21.836 C 8.593 21.836 4.599 17.778 4.552 12.825 C 4.57 10.672 5.275 9.271 5.984 8.474 C 6.826 7.535 11.351 3.236 11.351 3.236 L 8.108 0 C 8.108 0 4.144 3.867 3.089 5.03 C 2.039 6.196 1.311 7.447 0.672 8.893 C 0.033 10.338 0 12.763 0 12.763 C 0.022 18.974 5.084 24 11.307 24 C 17.2 24 21.975 19.488 22.497 13.739 C 22.031 18.281 18.25 21.836 13.578 21.836 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.871,
    height: 21.689,
    viewBox: "0 0 17.871 21.689",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.693,
      top: 0.136,
      width: 17.871,
      height: 21.689
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.979 19.491 C 1.547 18.24 0.389 16.586 0 14.194 C 0.764 17.099 3.343 19.411 6.466 19.411 C 10.202 19.411 13.118 16.593 13.298 12.921 C 13.497 8.878 9.742 6.314 9.742 6.314 L 6.484 9.37 C 6.484 9.37 3.376 6.277 3.361 6.259 L 9.845 0 C 11.66 2.018 17.134 6.02 17.747 10.551 C 19.128 20.808 8.659 24.459 2.979 19.491 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"IBM Plex Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 24,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      letterSpacing: "-0.020em",
      color: "rgb(71,84,103)",
      flexShrink: 0
    }
  }, props.text1 ?? "SOOBINZHONGSON")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 14,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 1 C 10.3 1 13 3.7 13 7 C 13 10.3 10.3 13 7 13 C 3.7 13 1 10.3 1 7 C 1 3.7 3.7 1 7 1 Z M 7 0 C 3.15 0 0 3.15 0 7 C 0 10.85 3.15 14 7 14 C 10.85 14 14 10.85 14 7 C 14 3.15 10.85 0 7 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 11 6.5 L 7.5 6.5 L 7.5 3 L 6.5 3 L 6.5 6.5 L 3 6.5 L 3 7.5 L 6.5 7.5 L 6.5 11 L 7.5 11 L 7.5 7.5 L 11 7.5 L 11 6.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
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
  }, "Menu"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0
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
      height: 5.7,
      color: "rgb(22,22,22)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 5.7 L 0 0.7 L 0.7 0 L 5 4.3 L 9.3 0 L 10 0.7 L 5 5.7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(NavButton, {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      flexShrink: 0
    },
    current: false,
    size: "md",
    theme: "default",
    state: "default"
  }), /*#__PURE__*/React.createElement(Ava, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    size: "sm",
    text: false
  })))));
  const __impls = {
    // figma: Type=4 menu, Breakpoint=Desktop
    "type=4 menu|breakpoint=desktop": __body0,
    // figma: Type=no menu, Breakpoint=Desktop
    "type=no menu|breakpoint=desktop": __body1,
    // figma: Type=5 menu, Breakpoint=Desktop
    "type=5 menu|breakpoint=desktop": __body2,
    // figma: Type=6 menu, Breakpoint=Desktop
    "type=6 menu|breakpoint=desktop": __body3,
    // figma: Type=7 menu, Breakpoint=Desktop
    "type=7 menu|breakpoint=desktop": __body4,
    // figma: Type=8 menu, Breakpoint=Desktop
    "type=8 menu|breakpoint=desktop": __body5
  };
  return (__impls[__vkey_HeaderNavigation(props)] ?? __body0)();
}

// figma node: 275:58610 Icon/Chevron--up
function IconChevronUp(_p = {}) {
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
      top: 5,
      width: 10,
      height: 5.7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 0 L 10 5 L 9.3 5.7 L 5 1.4 L 0.7 5.7 L 0 5 L 5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 275:58387 Icon/Cube
function IconCube(_p = {}) {
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
    width: 13,
    height: 15,
    viewBox: "0 0 13 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.5,
      top: 0.5,
      width: 13,
      height: 15
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.752 3.568 L 6.752 0.068 C 6.675 0.024 6.589 0 6.5 0 C 6.411 0 6.325 0.024 6.248 0.068 L 0.248 3.568 C 0.173 3.612 0.11 3.675 0.066 3.751 C 0.023 3.827 0 3.913 0 4 L 0 11 C 0 11.087 0.023 11.173 0.066 11.249 C 0.11 11.325 0.173 11.388 0.248 11.432 L 6.248 14.932 C 6.325 14.977 6.411 15 6.5 15 C 6.589 15 6.675 14.977 6.752 14.932 L 12.752 11.432 C 12.827 11.388 12.89 11.325 12.934 11.249 C 12.977 11.173 13 11.087 13 11 L 13 4 C 13 3.913 12.977 3.827 12.934 3.751 C 12.89 3.675 12.827 3.612 12.752 3.568 Z M 6.5 1.079 L 11.508 4 L 6.5 6.921 L 1.492 4 L 6.5 1.079 Z M 1 4.871 L 6 7.787 L 6 13.629 L 1 10.713 L 1 4.871 Z M 7 13.629 L 7 7.787 L 12 4.871 L 12 10.713 L 7 13.629 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 35:40930 Nav item menu 2 (12 variants)
const __venc_NavItemMenu2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);

const __vkey_NavItemMenu2 = p => "icon=" + __venc_NavItemMenu2(p.icon) + '|' + "state=" + __venc_NavItemMenu2(p.state) + '|' + "breakpoint=" + __venc_NavItemMenu2(p.breakpoint);

function NavItemMenu2(_p = {}) {
  const props = {
    ..._p,
    icon: _p.icon ?? "no icon",
    state: _p.state ?? "default",
    breakpoint: _p.breakpoint ?? "desktop",
    linkText: _p.linkText ?? true,
    badge: _p.badge ?? true,
    subText: _p.subText ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCube, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, props.text1 ?? "Products"), props.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 51,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Badge2, {
    text1: "New",
    size: "md",
    icon: "false",
    color: "success",
    outline: false
  }))), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Find the best solution for you.")), props.linkText && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 89,
      flexShrink: 0
    },
    leadIcon: false,
    text1: "Learn more",
    size: "h24px",
    hierarchy: "link color",
    icon: "default",
    destructive: false,
    state: "default"
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCube, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, props.text1 ?? "Products"), props.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 51,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Badge2, {
    text1: "New",
    size: "md",
    icon: "false",
    color: "success",
    outline: false
  }))), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Find the best solution for you.")), props.linkText && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 89,
      flexShrink: 0
    },
    leadIcon: false,
    text1: "Learn more",
    size: "h24px",
    hierarchy: "link color",
    icon: "default",
    destructive: false,
    state: "default"
  }))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, props.text1 ?? "Products"), props.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 51,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Badge2, {
    text1: "New",
    size: "md",
    icon: "false",
    color: "success",
    outline: false
  }))), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Find the best solution for you.")), props.linkText && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 89,
      flexShrink: 0
    },
    leadIcon: false,
    text1: "Learn more",
    size: "h24px",
    hierarchy: "link color",
    icon: "default",
    destructive: false,
    state: "default"
  }))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, props.text1 ?? "Products"), props.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 51,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Badge2, {
    text1: "New",
    size: "md",
    icon: "false",
    color: "success",
    outline: false
  }))), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Find the best solution for you.")), props.linkText && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 89,
      flexShrink: 0
    },
    leadIcon: false,
    text1: "Learn more",
    size: "h24px",
    hierarchy: "link color",
    icon: "default",
    destructive: false,
    state: "default"
  }))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      borderRadius: 8,
      backgroundColor: "rgb(249,250,251)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCube, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, props.text1 ?? "Products"), props.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 51,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Badge2, {
    text1: "New",
    size: "md",
    icon: "false",
    color: "success",
    outline: false
  }))), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Find the best solution for you.")), props.linkText && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 89,
      flexShrink: 0
    },
    leadIcon: false,
    text1: "Learn more",
    size: "h24px",
    hierarchy: "link color",
    icon: "default",
    destructive: false,
    state: "default"
  }))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      backgroundColor: "rgb(249,250,251)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCube, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, props.text1 ?? "Products"), props.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 51,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Badge2, {
    text1: "New",
    size: "md",
    icon: "false",
    color: "success",
    outline: false
  }))), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Find the best solution for you.")), props.linkText && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 89,
      flexShrink: 0
    },
    leadIcon: false,
    text1: "Learn more",
    size: "h24px",
    hierarchy: "link color",
    icon: "default",
    destructive: false,
    state: "default"
  }))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      borderRadius: 8,
      backgroundColor: "rgb(249,250,251)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, props.text1 ?? "Products"), props.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 51,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Badge2, {
    text1: "New",
    size: "md",
    icon: "false",
    color: "success",
    outline: false
  }))), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Find the best solution for you.")), props.linkText && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 89,
      flexShrink: 0
    },
    leadIcon: false,
    text1: "Learn more",
    size: "h24px",
    hierarchy: "link color",
    icon: "default",
    destructive: false,
    state: "default"
  }))));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      backgroundColor: "rgb(249,250,251)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, props.text1 ?? "Products"), props.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 51,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Badge2, {
    text1: "New",
    size: "md",
    icon: "false",
    color: "success",
    outline: false
  }))), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Find the best solution for you.")), props.linkText && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 89,
      flexShrink: 0
    },
    leadIcon: false,
    text1: "Learn more",
    size: "h24px",
    hierarchy: "link color",
    icon: "default",
    destructive: false,
    state: "default"
  }))));
  const __impls = {
    // figma: Icon=Icon lead, State=Default, Breakpoint=Desktop
    "icon=icon lead|state=default|breakpoint=desktop": __body0,
    // figma: Icon=Icon lead, State=Default, Breakpoint=Mobile
    "icon=icon lead|state=default|breakpoint=mobile": __body1,
    // figma: Icon=No icon, State=Default, Breakpoint=Desktop
    "icon=no icon|state=default|breakpoint=desktop": __body2,
    // figma: Icon=No icon, State=Default, Breakpoint=Mobile
    "icon=no icon|state=default|breakpoint=mobile": __body3,
    // figma: Icon=Icon lead, State=Focused, Breakpoint=Desktop
    "icon=icon lead|state=focused|breakpoint=desktop": __body0,
    // figma: Icon=Icon lead, State=Focused, Breakpoint=Mobile
    "icon=icon lead|state=focused|breakpoint=mobile": __body1,
    // figma: Icon=No icon, State=Focused, Breakpoint=Desktop
    "icon=no icon|state=focused|breakpoint=desktop": __body2,
    // figma: Icon=No icon, State=Focused, Breakpoint=Mobile
    "icon=no icon|state=focused|breakpoint=mobile": __body3,
    // figma: Icon=Icon lead, State=Hover, Breakpoint=Desktop
    "icon=icon lead|state=hover|breakpoint=desktop": __body4,
    // figma: Icon=Icon lead, State=Hover, Breakpoint=Mobile
    "icon=icon lead|state=hover|breakpoint=mobile": __body5,
    // figma: Icon=No icon, State=Hover, Breakpoint=Desktop
    "icon=no icon|state=hover|breakpoint=desktop": __body6,
    // figma: Icon=No icon, State=Hover, Breakpoint=Mobile
    "icon=no icon|state=hover|breakpoint=mobile": __body7
  };
  return (__impls[__vkey_NavItemMenu2(props)] ?? __body2)();
}

// figma node: 35:42833 Nav dropdown sub menu (12 variants)
const __venc_NavDropdownSubMenu = v => String(v).replace(/[%|=]/g, encodeURIComponent);

const __vkey_NavDropdownSubMenu = p => "type=" + __venc_NavDropdownSubMenu(p.type) + '|' + "breakpoint=" + __venc_NavDropdownSubMenu(p.breakpoint);

function NavDropdownSubMenu(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "simple",
    breakpoint: _p.breakpoint ?? "desktop"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 768,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240), 0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
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
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "32px 20px 24px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    text2: "The latest industry news, updates and info.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Customer stories",
    text2: "Learn how our customers are making big changes.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Video tutorials",
    text2: "Get up and running on new features and techniques.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Documentation",
    text2: "All the boring stuff that you (hopefully won’t) need.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(249,250,251)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "20px 20px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Recent"), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      width: 264,
      height: 84,
      flexShrink: 0
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    text2: "The latest industry news, updates and info.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      width: 264,
      height: 84,
      flexShrink: 0
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    text2: "The latest industry news, updates and info.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      width: 264,
      height: 84,
      flexShrink: 0
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    text2: "The latest industry news, updates and info.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240), 0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "column",
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
      gap: 8,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    text2: "The latest industry news, updates and info.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Customer stories",
    text2: "Learn how our customers are making big changes.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Video tutorials",
    text2: "Get up and running on new features and techniques.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Documentation",
    text2: "All the boring stuff that you (hopefully won’t) need.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Help and support",
    text2: "Learn, fix a problem, and get answers to your questions.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240), 0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 0px 16px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    text2: "The latest industry news, updates and info.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Customer stories",
    text2: "Learn how our customers are making big changes.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Video tutorials",
    text2: "Get up and running on new features and techniques.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Documentation",
    text2: "All the boring stuff that you (hopefully won’t) need.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Help and support",
    text2: "Learn, fix a problem, and get answers to your questions.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240), 0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "24px 0px 24px 0px",
      alignItems: "flex-start",
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
      padding: "0px 16px 0px 16px",
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
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(127,86,217)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Resources")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    text2: "The latest industry news, updates and info.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Customer stories",
    text2: "Learn how our customers are making big changes.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Video tutorials",
    text2: "Get up and running on new features and techniques.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Documentation",
    text2: "All the boring stuff that you (hopefully won’t) need.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(249,250,251)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "20px 0px 20px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
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
      padding: "0px 16px 0px 16px",
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
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Recent")), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    text2: "The latest industry news, updates and info.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    text2: "The latest industry news, updates and info.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    text2: "The latest industry news, updates and info.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  })))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240), 0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "12px 0px 16px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    text2: "The latest industry news, updates and info.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Customer stories",
    text2: "Learn how our customers are making big changes.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Video tutorials",
    text2: "Get up and running on new features and techniques.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Documentation",
    text2: "All the boring stuff that you (hopefully won’t) need.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Help and support",
    text2: "Learn, fix a problem, and get answers to your questions.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "API reference",
    text2: "Complete reference documentation for API.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Setup 101",
    text2: "Get up and running as fast as possible with our 101 guide.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Podcast",
    text2: "Talks about the industry and the latest technologies.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "University",
    text2: "Short courses to become a master of advanced features.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Changelog",
    text2: "Check out the latest updates and releases from our team.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 608,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240), 0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    text2: "The latest industry news, updates and info.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Customer stories",
    text2: "Learn how our customers are making big changes.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Video tutorials",
    text2: "Get up and running on new features and techniques.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Documentation",
    text2: "All the boring stuff that you (hopefully won’t) need.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Help and support",
    text2: "Learn, fix a problem, and get answers to your questions.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    text2: "The latest industry news, updates and info.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Customer stories",
    text2: "Learn how our customers are making big changes.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Video tutorials",
    text2: "Get up and running on new features and techniques.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Documentation",
    text2: "All the boring stuff that you (hopefully won’t) need.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Help and support",
    text2: "Learn, fix a problem, and get answers to your questions.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1440,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
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
      width: 1280,
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
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      padding: "32px 32px 32px 32px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Resources"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    text2: "The latest industry news, updates and info.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Customer stories",
    text2: "Learn how our customers are making big changes.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Video tutorials",
    text2: "Get up and running on new features and techniques.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Documentation",
    text2: "All the boring stuff that you (hopefully won’t) need.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "About us",
    text2: "Learn about our story and our mission statement.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Press",
    text2: "News and writings, press releases, and press resources.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconCube, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 72,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, "Careers"), /*#__PURE__*/React.createElement(Badge2, {
    style: {
      position: "relative",
      width: 51,
      flexShrink: 0
    },
    text1: "New",
    size: "md",
    icon: "false",
    color: "success",
    outline: false
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "We\u2019re always looking for talented people. Join our team!")))), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Legal",
    text2: "All the boring stuff that we Dan from legal made us add.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 400,
      overflow: "hidden",
      backgroundColor: "rgb(249,250,251)",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "32px 32px 32px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "About us",
    text2: "Learn about our story and our mission statement.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Press",
    text2: "News and writings, press releases, and press resources.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconCube, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 72,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, "Careers"), /*#__PURE__*/React.createElement(Badge2, {
    style: {
      position: "relative",
      width: 51,
      flexShrink: 0
    },
    text1: "New",
    size: "md",
    icon: "false",
    color: "success",
    outline: false
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "We\u2019re always looking for talented people. Join our team!")))), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Legal",
    text2: "All the boring stuff that we Dan from legal made us add.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }))))), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 80 442",
    fill: "none",
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "40px 32px 40px 32px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch",
      color: "rgb(249,250,251)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 80 0 L 80 442 L 0 442 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "16px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
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
      padding: "0px 16px 0px 16px",
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
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Resources")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Customer stories",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Video tutorials",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Documentation",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
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
      padding: "0px 16px 0px 16px",
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
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Company")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "About us",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Press",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconCube, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 72,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, "Careers"), /*#__PURE__*/React.createElement(Badge2, {
    style: {
      position: "relative",
      width: 51,
      flexShrink: 0
    },
    text1: "New",
    size: "md",
    icon: "false",
    color: "success",
    outline: false
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Find the best solution for you.")))), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Legal",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(249,250,251)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(249,250,251)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "20px 0px 20px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
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
      padding: "0px 16px 0px 16px",
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
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Recent")), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    text2: "The latest industry news, updates and info.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    text2: "The latest industry news, updates and info.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    text2: "The latest industry news, updates and info.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  })))));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "16px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
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
      padding: "0px 16px 0px 16px",
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
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Resources")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Customer stories",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Video tutorials",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Documentation",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
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
      padding: "0px 16px 0px 16px",
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
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Company")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "About us",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Press",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconCube, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 72,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, "Careers"), /*#__PURE__*/React.createElement(Badge2, {
    style: {
      position: "relative",
      width: 51,
      flexShrink: 0
    },
    text1: "New",
    size: "md",
    icon: "false",
    color: "success",
    outline: false
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Find the best solution for you.")))), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Legal",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
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
      padding: "0px 16px 0px 16px",
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
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Company")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "About us",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Press",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconCube, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 72,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, "Careers"), /*#__PURE__*/React.createElement(Badge2, {
    style: {
      position: "relative",
      width: 51,
      flexShrink: 0
    },
    text1: "New",
    size: "md",
    icon: "false",
    color: "success",
    outline: false
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Find the best solution for you.")))), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Legal",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(249,250,251)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "20px 0px 20px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
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
      padding: "0px 16px 0px 16px",
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
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "Recent")), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    text2: "The latest industry news, updates and info.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    text2: "The latest industry news, updates and info.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    text2: "The latest industry news, updates and info.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }))));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "16px 0px 24px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
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
      padding: "0px 16px 0px 16px",
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
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Resources")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Customer stories",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Video tutorials",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Documentation",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
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
      padding: "0px 16px 0px 16px",
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
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Company")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "About us",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Press",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconCube, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 72,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, "Careers"), /*#__PURE__*/React.createElement(Badge2, {
    style: {
      position: "relative",
      width: 51,
      flexShrink: 0
    },
    text1: "New",
    size: "md",
    icon: "false",
    color: "success",
    outline: false
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Find the best solution for you.")))), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Legal",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
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
      padding: "0px 16px 0px 16px",
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
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Company")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "About us",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Press",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconCube, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 72,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, "Careers"), /*#__PURE__*/React.createElement(Badge2, {
    style: {
      position: "relative",
      width: 51,
      flexShrink: 0
    },
    text1: "New",
    size: "md",
    icon: "false",
    color: "success",
    outline: false
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Find the best solution for you.")))), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Legal",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
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
      padding: "0px 16px 0px 16px",
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
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "Company")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "About us",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Press",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconCube, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 72,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, "Careers"), /*#__PURE__*/React.createElement(Badge2, {
    style: {
      position: "relative",
      width: 51,
      flexShrink: 0
    },
    text1: "New",
    size: "md",
    icon: "false",
    color: "success",
    outline: false
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Find the best solution for you.")))), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Legal",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(249,250,251)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "20px 0px 20px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
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
      padding: "0px 16px 0px 16px",
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
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexGrow: 1
    }
  }, "Recent")), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    text2: "The latest industry news, updates and info.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    text2: "The latest industry news, updates and info.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    text2: "The latest industry news, updates and info.",
    icon: "icon lead",
    state: "default",
    breakpoint: "mobile"
  }))));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1440,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
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
      width: 1280,
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
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      padding: "32px 32px 32px 32px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Use cases"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Convert",
    text2: "Analyze conversion rates and improve your sales.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Engage",
    text2: "Measure active usage and target areas of improvement.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Retain",
    text2: "Find retention drivers and make your customers smile.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Resources"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    text2: "The latest industry news, updates and info.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Customer stories",
    text2: "Learn how our customers are making big changes.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Video tutorials",
    text2: "Get up and running on new features and techniques.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "About us",
    text2: "Learn about our story and our mission statement.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Press",
    text2: "News and writings, press releases, and press resources.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconCube, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 72,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, "Careers"), /*#__PURE__*/React.createElement(Badge2, {
    style: {
      position: "relative",
      width: 51,
      flexShrink: 0
    },
    text1: "New",
    size: "md",
    icon: "false",
    color: "success",
    outline: false
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "We\u2019re always looking for talented people. Join our team!"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 400,
      overflow: "hidden",
      backgroundColor: "rgb(249,250,251)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "20px 32px 20px 20px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 66,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "About us",
    text2: "Learn about our story and our mission statement.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Press",
    text2: "News and writings, press releases, and press resources.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconCube, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 72,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, "Careers"), /*#__PURE__*/React.createElement(Badge2, {
    style: {
      position: "relative",
      width: 51,
      flexShrink: 0
    },
    text1: "New",
    size: "md",
    icon: "false",
    color: "success",
    outline: false
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "We\u2019re always looking for talented people. Join our team!")))), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Legal",
    text2: "All the boring stuff that we Dan from legal made us add.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }))))), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 80 418",
    fill: "none",
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "40px 32px 40px 32px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch",
      color: "rgb(249,250,251)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 80 0 L 80 418 L 0 418 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1440,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
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
      width: 1310,
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
      width: 980,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      padding: "32px 32px 32px 32px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Use cases"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Convert",
    text2: "Analyze conversion rates and improve your sales.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 102,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Engage",
    text2: "Measure active usage and target areas of improvement.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 102,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Retain",
    text2: "Find retention drivers and make your customers smile.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Resources"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Blog",
    text2: "The latest industry news, updates and info.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Customer stories",
    text2: "Learn how our customers are making big changes.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 102,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Video tutorials",
    text2: "Get up and running on new features and techniques.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 102,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "About us",
    text2: "Learn about our story and our mission statement.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 102,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Press",
    text2: "News and writings, press releases, and press resources.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconCube, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 72,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, "Careers"), /*#__PURE__*/React.createElement(Badge2, {
    style: {
      position: "relative",
      width: 51,
      flexShrink: 0
    },
    text1: "New",
    size: "md",
    icon: "false",
    color: "success",
    outline: false
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "We\u2019re always looking for talented people. Join our team!")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 102,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "About us",
    text2: "Learn about our story and our mission statement.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 102,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Press",
    text2: "News and writings, press releases, and press resources.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconCube, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 72,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, "Careers"), /*#__PURE__*/React.createElement(Badge2, {
    style: {
      position: "relative",
      width: 51,
      flexShrink: 0
    },
    text1: "New",
    size: "md",
    icon: "false",
    color: "success",
    outline: false
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "We\u2019re always looking for talented people. Join our team!"))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(249,250,251)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "32px 32px 32px 32px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "About us",
    text2: "Learn about our story and our mission statement.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement(NavItemMenu2, {
    style: {
      position: "relative",
      height: 84,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    linkText: false,
    badge: false,
    text1: "Press",
    text2: "News and writings, press releases, and press resources.",
    icon: "icon lead",
    state: "default",
    breakpoint: "desktop"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 16,
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconCube, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 72,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, "Careers"), /*#__PURE__*/React.createElement(Badge2, {
    style: {
      position: "relative",
      width: 51,
      flexShrink: 0
    },
    text1: "New",
    size: "md",
    icon: "false",
    color: "success",
    outline: false
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "We\u2019re always looking for talented people. Join our team!")))))))), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 65 422",
    fill: "none",
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "40px 32px 40px 32px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch",
      color: "rgb(249,250,251)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 65 0 L 65 422 L 0 422 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Type=with recent 2, Breakpoint=Desktop
    "type=with recent 2|breakpoint=desktop": __body0,
    // figma: Type=Simple, Breakpoint=Desktop
    "type=simple|breakpoint=desktop": __body1,
    // figma: Type=Simple, Breakpoint=Mobile
    "type=simple|breakpoint=mobile": __body2,
    // figma: Type=with recent 2, Breakpoint=Mobile
    "type=with recent 2|breakpoint=mobile": __body3,
    // figma: Type=Simple 2-col, Breakpoint=Mobile
    "type=simple 2-col|breakpoint=mobile": __body4,
    // figma: Type=Simple 2-col, Breakpoint=Desktop
    "type=simple 2-col|breakpoint=desktop": __body5,
    // figma: Type=2-col, Breakpoint=Desktop
    "type=2-col|breakpoint=desktop": __body6,
    // figma: Type=2-col, Breakpoint=Mobile
    "type=2-col|breakpoint=mobile": __body7,
    // figma: Type=3-col, Breakpoint=Mobile
    "type=3-col|breakpoint=mobile": __body8,
    // figma: Type=4-col, Breakpoint=Mobile
    "type=4-col|breakpoint=mobile": __body9,
    // figma: Type=3-col, Breakpoint=Desktop
    "type=3-col|breakpoint=desktop": __body10,
    // figma: Type=4-col, Breakpoint=Desktop
    "type=4-col|breakpoint=desktop": __body11
  };
  return (__impls[__vkey_NavDropdownSubMenu(props)] ?? __body1)();
}

// figma node: 35:45489 Dropdown nav header menu  (12 variants)
const __venc_DropdownNavHeaderMenu = v => String(v).replace(/[%|=]/g, encodeURIComponent);

const __vkey_DropdownNavHeaderMenu = p => "open=" + __venc_DropdownNavHeaderMenu(p.open) + '|' + "type=" + __venc_DropdownNavHeaderMenu(p.type) + '|' + "breakpoint=" + __venc_DropdownNavHeaderMenu(p.breakpoint);

function DropdownNavHeaderMenu(_p = {}) {
  const props = {
    ..._p,
    open: _p.open ?? false,
    type: _p.type ?? "featured card",
    breakpoint: _p.breakpoint ?? "desktop"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    leadIcon: false,
    text1: "Resources",
    size: "h24px",
    hierarchy: "link color",
    icon: "default",
    destructive: false,
    state: "default"
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 3px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    leadIcon: false,
    changeLeft: /*#__PURE__*/React.createElement(IconChevronUp, null),
    text1: "Resources",
    size: "h24px",
    hierarchy: "link color",
    icon: "default",
    destructive: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(NavDropdownSubMenu, {
    style: {
      position: "absolute",
      left: -125,
      top: 40,
      width: 336,
      height: 458
    },
    type: "simple",
    breakpoint: "desktop"
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 3px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    leadIcon: false,
    changeLeft: /*#__PURE__*/React.createElement(IconChevronUp, null),
    text1: "Resources",
    size: "h24px",
    hierarchy: "link color",
    icon: "default",
    destructive: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(NavDropdownSubMenu, {
    style: {
      position: "absolute",
      left: -145,
      top: 36,
      width: 375
    },
    type: "simple",
    breakpoint: "mobile"
  }));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 3px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    leadIcon: false,
    changeLeft: /*#__PURE__*/React.createElement(IconChevronUp, null),
    text1: "Resources",
    size: "h24px",
    hierarchy: "link color",
    icon: "default",
    destructive: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(NavDropdownSubMenu, {
    style: {
      position: "absolute",
      left: -261,
      top: 44,
      width: 608
    },
    type: "simple 2-col",
    breakpoint: "desktop"
  }));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 3px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    leadIcon: false,
    changeLeft: /*#__PURE__*/React.createElement(IconChevronUp, null),
    text1: "Resources",
    size: "h24px",
    hierarchy: "link color",
    icon: "default",
    destructive: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(NavDropdownSubMenu, {
    style: {
      position: "absolute",
      left: -133,
      top: 44,
      width: 375
    },
    type: "simple 2-col",
    breakpoint: "mobile"
  }));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 3px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    leadIcon: false,
    changeLeft: /*#__PURE__*/React.createElement(IconChevronUp, null),
    text1: "Resources",
    size: "h24px",
    hierarchy: "link color",
    icon: "default",
    destructive: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(NavDropdownSubMenu, {
    style: {
      position: "absolute",
      left: -341,
      top: 39,
      width: 768
    },
    type: "with recent 2",
    breakpoint: "desktop"
  }));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 3px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    leadIcon: false,
    changeLeft: /*#__PURE__*/React.createElement(IconChevronUp, null),
    text1: "Resources",
    size: "h24px",
    hierarchy: "link color",
    icon: "default",
    destructive: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(NavDropdownSubMenu, {
    style: {
      position: "absolute",
      left: -145,
      top: 36,
      width: 375
    },
    type: "with recent 2",
    breakpoint: "mobile"
  }));
  const __impls = {
    // figma: Open=False, Type=Simple, Breakpoint=Desktop
    "open=false|type=simple|breakpoint=desktop": __body0,
    // figma: Open=False, Type=Simple, Breakpoint=Mobile
    "open=false|type=simple|breakpoint=mobile": __body0,
    // figma: Open=False, Type=Simple 2-col, Breakpoint=Desktop
    "open=false|type=simple 2-col|breakpoint=desktop": __body0,
    // figma: Open=False, Type=Simple 2-col, Breakpoint=Mobile
    "open=false|type=simple 2-col|breakpoint=mobile": __body0,
    // figma: Open=False, Type=Featured card, Breakpoint=Desktop
    "open=false|type=featured card|breakpoint=desktop": __body0,
    // figma: Open=False, Type=Featured card, Breakpoint=Mobile
    "open=false|type=featured card|breakpoint=mobile": __body0,
    // figma: Open=True, Type=Simple, Breakpoint=Desktop
    "open=true|type=simple|breakpoint=desktop": __body1,
    // figma: Open=True, Type=Simple, Breakpoint=Mobile
    "open=true|type=simple|breakpoint=mobile": __body2,
    // figma: Open=True, Type=Simple 2-col, Breakpoint=Desktop
    "open=true|type=simple 2-col|breakpoint=desktop": __body3,
    // figma: Open=True, Type=Simple 2-col, Breakpoint=Mobile
    "open=true|type=simple 2-col|breakpoint=mobile": __body4,
    // figma: Open=True, Type=Featured card, Breakpoint=Desktop
    "open=true|type=featured card|breakpoint=desktop": __body5,
    // figma: Open=True, Type=Featured card, Breakpoint=Mobile
    "open=true|type=featured card|breakpoint=mobile": __body6
  };
  return (__impls[__vkey_DropdownNavHeaderMenu(props)] ?? __body0)();
}

// figma node: 295:36048 check
function Check3(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      position: "relative",
      color: "rgb(52,55,65)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 8.500,
    viewBox: "0 0 12.500 8.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.75,
      top: 3.75,
      width: 12.5,
      height: 8.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.219 8.281 L 4.22 8.282 C 4.366 8.426 4.558 8.5 4.75 8.5 C 4.942 8.5 5.134 8.426 5.28 8.282 L 12.281 1.28 C 12.573 0.987 12.573 0.513 12.281 0.22 L 12.28 0.219 C 11.987 -0.073 11.513 -0.073 11.219 0.219 L 4.75 6.689 L 1.28 3.219 C 0.987 2.927 0.513 2.927 0.22 3.219 L 0.219 3.22 C -0.073 3.513 -0.073 3.987 0.219 4.281 L 4.219 8.281 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 295:36050 cross
function Cross(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      position: "relative",
      color: "rgb(52,55,65)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.500,
    height: 10.500,
    viewBox: "0 0 10.500 10.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.75,
      top: 2.75,
      width: 10.5,
      height: 10.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.22 0.22 C 0.513 -0.073 0.987 -0.073 1.28 0.22 L 5.25 4.189 L 9.22 0.22 C 9.513 -0.073 9.987 -0.073 10.28 0.22 C 10.573 0.513 10.573 0.987 10.28 1.28 L 6.311 5.25 L 10.28 9.22 C 10.573 9.513 10.573 9.987 10.28 10.28 C 9.987 10.573 9.513 10.573 9.22 10.28 L 5.25 6.311 L 1.28 10.28 C 0.987 10.573 0.513 10.573 0.22 10.28 C -0.073 9.987 -0.073 9.513 0.22 9.22 L 4.189 5.25 L 0.22 1.28 C -0.073 0.987 -0.073 0.513 0.22 0.22 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 286:26151 Spinner / Static (5 variants)
const __venc_SpinnerStatic = v => String(v).replace(/[%|=]/g, encodeURIComponent);

const __vkey_SpinnerStatic = p => "size=" + __venc_SpinnerStatic(p.size);

function SpinnerStatic(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "2xl"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 12,
      height: 12,
      position: "relative",
      color: "rgb(0,119,204)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12,
      height: 12,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 1px rgb(211,218,230)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 6,
    viewBox: "0 0 6 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 0,
      width: 6,
      height: 6
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5 6 L 6 6 C 6 2.686 3.314 0 0 0 L 0 1 C 2.761 1 5 3.239 5 6 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      position: "relative",
      color: "rgb(0,119,204)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 2px rgb(211,218,230)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 12,
      top: 0,
      width: 12,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10 12 L 12 12 C 12 5.373 6.627 0 0 0 L 0 2 C 5.523 2 10 6.477 10 12 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      position: "relative",
      color: "rgb(0,119,204)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 32,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 2px rgb(211,218,230)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 16,
      top: 0,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14 16 L 16 16 C 16 7.163 8.837 0 0 0 L 0 2 C 7.732 2 14 8.268 14 16 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      height: 40,
      position: "relative",
      color: "rgb(0,119,204)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 2px rgb(211,218,230)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 20,
      top: 0,
      width: 20,
      height: 20
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18 20 L 20 20 C 20 8.954 11.046 0 0 0 L 0 2 C 9.941 2 18 10.059 18 20 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      position: "relative",
      color: "rgb(0,119,204)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 1px rgb(211,218,230)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 8,
    viewBox: "0 0 8 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 8,
      top: 0,
      width: 8,
      height: 8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 8 L 8 8 C 8 3.582 4.418 0 0 0 L 0 1 C 3.866 1 7 4.134 7 8 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
  const __impls = {
    // figma: Size=Small
    "size=sm": __body0,
    // figma: Size=Large
    "size=lg": __body1,
    // figma: Size=X-Large
    "size=xl": __body2,
    // figma: Size=XX-Large
    "size=2xl": __body3,
    // figma: Size=Medium*
    "size=medium*": __body4
  };
  return (__impls[__vkey_SpinnerStatic(props)] ?? __body3)();
}

// figma node: 295:36297 .📦Step / Indicator (21 variants)
const __venc_StepIndicator = v => String(v).replace(/[%|=]/g, encodeURIComponent);

const __vkey_StepIndicator = p => "status=" + __venc_StepIndicator(p.status) + '|' + "size=" + __venc_StepIndicator(p.size);

function StepIndicator(_p = {}) {
  const props = {
    ..._p,
    status: _p.status ?? "default / current",
    size: _p.size ?? "md"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      borderRadius: 32,
      backgroundColor: "rgb(0,119,204)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 4,
      top: 5.5,
      width: 24,
      height: 20,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "rgb(255,255,255)"
    }
  }, props.text1 ?? "1"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 32,
      backgroundColor: "rgb(0,119,204)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 4,
      top: 5.5,
      width: 16,
      height: 13,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(255,255,255)"
    }
  }, props.text1 ?? "1"));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      borderRadius: 32,
      backgroundColor: "rgb(0,119,204)",
      position: "relative",
      ...props.style
    }
  });
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      borderRadius: 32,
      boxShadow: "inset 0 0 0 2px rgb(211,218,230)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 4,
      top: 5.5,
      width: 24,
      height: 20,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "rgb(52,55,65)"
    }
  }, props.text1 ?? "1"));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 32,
      boxShadow: "inset 0 0 0 2px rgb(211,218,230)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 4,
      top: 5.5,
      width: 16,
      height: 13,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,55,65)"
    }
  }, props.text1 ?? "1"));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      borderRadius: 32,
      boxShadow: "inset 0 0 0 2px rgb(211,218,230)",
      position: "relative",
      ...props.style
    }
  });
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      borderRadius: 32,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 32
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SpinnerStatic, {
    size: "xl"
  })));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 32,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SpinnerStatic, {
    size: "lg"
  })));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      borderRadius: 32,
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SpinnerStatic, {
    size: "medium*"
  })));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      borderRadius: 32,
      backgroundColor: "rgba(171,180,196,0.1)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 4,
      top: 5.5,
      width: 24,
      height: 20,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "rgb(162,171,186)"
    }
  }, props.text1 ?? "1"));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 32,
      backgroundColor: "rgba(171,180,196,0.1)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 4,
      top: 5.5,
      width: 16,
      height: 13,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(162,171,186)"
    }
  }, props.text1 ?? "1"));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      borderRadius: 32,
      backgroundColor: "rgba(171,180,196,0.1)",
      position: "relative",
      ...props.style
    }
  });
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 32,
      backgroundColor: "rgb(0,191,179)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Check3, null)));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 32,
      backgroundColor: "rgb(0,191,179)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 6,
      width: 12,
      height: 12
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Check3, {
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
      borderRadius: 32,
      backgroundColor: "rgb(0,191,179)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 8,
      height: 8
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Check3, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  })));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 32,
      backgroundColor: "rgb(254,197,20)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Alert, null)));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 32,
      backgroundColor: "rgb(254,197,20)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 6,
      width: 12,
      height: 12
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Alert, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 32,
      backgroundColor: "rgb(254,197,20)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 8,
      height: 8
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Alert, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  })));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 32,
      backgroundColor: "rgb(189,39,30)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      top: 8,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Cross, null)));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 32,
      backgroundColor: "rgb(189,39,30)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6,
      top: 6,
      width: 12,
      height: 12
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Cross, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 16,
      overflow: "hidden",
      borderRadius: 32,
      backgroundColor: "rgb(189,39,30)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 8,
      height: 8
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Cross, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  })));
  const __impls = {
    // figma: Status=Default / Current, Size=Medium
    "status=default / current|size=md": __body0,
    // figma: Status=Default / Current, Size=Small
    "status=default / current|size=sm": __body1,
    // figma: Status=Default / Current, Size=X Small
    "status=default / current|size=xs": __body2,
    // figma: Status=Incomplete, Size=Medium
    "status=incomplete|size=md": __body3,
    // figma: Status=Incomplete, Size=Small
    "status=incomplete|size=sm": __body4,
    // figma: Status=Incomplete, Size=X Small
    "status=incomplete|size=xs": __body5,
    // figma: Status=Loading, Size=Medium
    "status=loading|size=md": __body6,
    // figma: Status=Loading, Size=Small
    "status=loading|size=sm": __body7,
    // figma: Status=Loading, Size=X Small
    "status=loading|size=xs": __body8,
    // figma: Status=Disabled, Size=Medium
    "status=disabled|size=md": __body9,
    // figma: Status=Disabled, Size=Small
    "status=disabled|size=sm": __body10,
    // figma: Status=Disabled, Size=X Small
    "status=disabled|size=xs": __body11,
    // figma: Status=Success, Size=Medium
    "status=success|size=md": __body12,
    // figma: Status=Success, Size=Small
    "status=success|size=sm": __body13,
    // figma: Status=Success, Size=X Small
    "status=success|size=xs": __body14,
    // figma: Status=Warning, Size=Medium
    "status=warning|size=md": __body15,
    // figma: Status=Warning, Size=Small
    "status=warning|size=sm": __body16,
    // figma: Status=Warning, Size=X Small
    "status=warning|size=xs": __body17,
    // figma: Status=Danger, Size=Medium
    "status=danger|size=md": __body18,
    // figma: Status=Danger, Size=Small
    "status=danger|size=sm": __body19,
    // figma: Status=Danger, Size=X Small
    "status=danger|size=xs": __body20
  };
  return (__impls[__vkey_StepIndicator(props)] ?? __body0)();
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

// figma node: 275:58797 Icon/Warning--alt
function IconWarningAlt(_p = {}) {
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
    height: 13.500,
    viewBox: "0 0 14 13.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1.5,
      width: 14,
      height: 13.5
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7 10 C 6.852 10 6.707 10.044 6.583 10.126 C 6.46 10.209 6.364 10.326 6.307 10.463 C 6.25 10.6 6.235 10.751 6.264 10.896 C 6.293 11.042 6.365 11.175 6.47 11.28 C 6.575 11.385 6.708 11.457 6.854 11.486 C 6.999 11.515 7.15 11.5 7.287 11.443 C 7.424 11.386 7.541 11.29 7.624 11.167 C 7.706 11.043 7.75 10.898 7.75 10.75 C 7.75 10.551 7.671 10.36 7.53 10.22 C 7.39 10.079 7.199 10 7 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 7.5 4.5 L 6.5 4.5 L 6.5 9 L 7.5 9 L 7.5 4.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 13.5 13.5 L 0.5 13.5 C 0.414 13.5 0.33 13.478 0.255 13.436 C 0.18 13.394 0.117 13.333 0.073 13.259 C 0.028 13.186 0.003 13.102 0 13.017 C -0.003 12.931 0.017 12.846 0.056 12.769 L 6.556 0.269 C 6.599 0.188 6.662 0.12 6.741 0.073 C 6.819 0.025 6.908 0 7 0 C 7.092 0 7.181 0.025 7.259 0.073 C 7.338 0.12 7.401 0.188 7.444 0.269 L 13.944 12.769 C 13.983 12.846 14.003 12.931 14 13.017 C 13.997 13.102 13.972 13.186 13.927 13.259 C 13.883 13.333 13.82 13.394 13.745 13.436 C 13.67 13.478 13.586 13.5 13.5 13.5 Z M 1.325 12.5 L 12.675 12.5 L 12.676 12.498 L 7.001 1.586 L 6.999 1.586 L 1.324 12.498 L 1.325 12.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 295:36267 Step base (18 variants)
const __venc_StepBase = v => String(v).replace(/[%|=]/g, encodeURIComponent);

const __vkey_StepBase = p => "status=" + __venc_StepBase(p.status) + '|' + "size=" + __venc_StepBase(p.size);

export {
  PopOver,
  __venc_Tooltip,
  __vkey_Tooltip,
  Tooltip,
  Alert,
  Menu,
  IconMenu,
  __venc_NavMenuButton,
  __vkey_NavMenuButton,
  NavMenuButton,
  __venc_Ava,
  __vkey_Ava,
  Ava,
  IconNotification,
  __venc_NavButton,
  __vkey_NavButton,
  NavButton,
  __venc_HeaderNavigation,
  __vkey_HeaderNavigation,
  HeaderNavigation,
  IconChevronUp,
  IconCube,
  __venc_NavItemMenu2,
  __vkey_NavItemMenu2,
  NavItemMenu2,
  __venc_NavDropdownSubMenu,
  __vkey_NavDropdownSubMenu,
  NavDropdownSubMenu,
  __venc_DropdownNavHeaderMenu,
  __vkey_DropdownNavHeaderMenu,
  DropdownNavHeaderMenu,
  Check3,
  Cross,
  __venc_SpinnerStatic,
  __vkey_SpinnerStatic,
  SpinnerStatic,
  __venc_StepIndicator,
  __vkey_StepIndicator,
  StepIndicator,
  IconCheckmark,
  IconWarningAlt,
  __venc_StepBase,
  __vkey_StepBase
};
