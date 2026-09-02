// Components bundle — part 3 of 5. Load the parts in order as plain
// classic <script> tags: they share one global scope, so later parts can call
// declarations from earlier ones exactly as in the original single-file bundle.

function Button3(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "primary",
    shape: _p.shape ?? "standard",
    size: _p.size ?? "lg",
    state: _p.state ?? "normal",
    danger: _p.danger ?? false,
    ghost: _p.ghost ?? true,
    icon: _p.icon ?? false,
    title: _p.title ?? "Button Title",
    oneCharTitle: _p.oneCharTitle ?? "A"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      outline: "1px dashed rgb(255,255,255)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(24,144,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(24,144,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(24,144,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      outline: "1px dashed rgb(255,255,255)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(24,144,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      outline: "1px dashed rgb(255,255,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(24,144,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(24,144,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -4,
      top: -4.002,
      width: 112,
      height: 40,
      opacity: 0.1,
      borderRadius: 5,
      backgroundColor: "rgb(64,169,255)"
    }
  }), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button Title"));
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      outline: "1px dashed rgb(64,169,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -4,
      top: -4,
      width: 112,
      height: 40,
      opacity: 0.1,
      borderRadius: 5,
      backgroundColor: "rgb(64,169,255)"
    }
  }), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button Title"));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -4.5,
      top: -4.002,
      width: 112,
      height: 40,
      opacity: 0.1,
      borderRadius: 5,
      backgroundColor: "rgb(64,169,255)"
    }
  }), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Button Title"));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgba(0,0,0,0.03)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(9,109,217)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body36 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      outline: "1px dashed rgb(9,109,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(9,109,217)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body37 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(9,109,217), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(9,109,217)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body38 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(9,109,217)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(9,109,217)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body39 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body40 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body41 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      outline: "1px dashed rgb(64,169,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body42 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body43 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body44 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body45 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(24,144,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body46 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      outline: "1px dashed rgb(255,255,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body47 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(255,255,255), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body48 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(24,144,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(24,144,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body49 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 5
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: false
  })));
  const __body50 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 5
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: false
  })));
  const __body51 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(64,169,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 5
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body52 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 5
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body53 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(64,169,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 5
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body54 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 5
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body55 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 5
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body56 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(24,144,255)",
      boxShadow: "inset 0 0 0 1px rgb(24,144,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 5
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body57 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 9
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: false
  })));
  const __body58 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 9
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: false
  })));
  const __body59 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(64,169,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 9
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body60 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 9
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body61 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(64,169,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 9
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body62 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 9
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body63 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 9
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body64 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(24,144,255)",
      boxShadow: "inset 0 0 0 1px rgb(24,144,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 9
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body65 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 15
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: false
  })));
  const __body66 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 15
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: false
  })));
  const __body67 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(64,169,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 15
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body68 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 15
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body69 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(64,169,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 15
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body70 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13.5,
      top: 15
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body71 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 15
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body72 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(24,144,255)",
      boxShadow: "inset 0 0 0 1px rgb(24,144,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 15
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body73 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(245,245,245)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 5
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: false
  })));
  const __body74 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 5
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: false
  })));
  const __body75 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(64,169,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 5
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body76 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 5
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body77 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(64,169,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 5
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body78 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 5
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body79 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 5
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body80 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(24,144,255)",
      boxShadow: "inset 0 0 0 1px rgb(24,144,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 6px 0px 6px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5,
      top: 5
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body81 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(245,245,245)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 9.003
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: false
  })));
  const __body82 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 9.003
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: false
  })));
  const __body83 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(64,169,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 9
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body84 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 9
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body85 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(64,169,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 9
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body86 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 9.005
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body87 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 9.005
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body88 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(24,144,255)",
      boxShadow: "inset 0 0 0 1px rgb(24,144,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 10px 4px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 9.005
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body89 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(245,245,245)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 15
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: false
  })));
  const __body90 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 15
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: false
  })));
  const __body91 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(64,169,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 15
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body92 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 15
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body93 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(64,169,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 15
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body94 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 15
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body95 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 15
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body96 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(24,144,255)",
      boxShadow: "inset 0 0 0 1px rgb(24,144,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 14px 8px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.oneCharTitle), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13,
      top: 15
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconWrapper, {
    size: "14px",
    union: true
  })));
  const __body97 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.25)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body98 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.25)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body99 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.25)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body100 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.25)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body101 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(250,250,250)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgb(255,77,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,120,117)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body102 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgb(255,77,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,120,117)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body103 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(255,120,117)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgb(255,77,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,120,117)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body104 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(255,120,117), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgb(255,77,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,120,117)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body105 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,120,117)",
      boxShadow: "inset 0 0 0 1px rgb(255,77,79), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body106 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgb(255,77,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,77,79)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body107 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(255,77,79)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgb(255,77,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,77,79)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body108 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(255,77,79), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgb(255,77,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,77,79)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body109 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,77,79)",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body110 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.25)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body111 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.25)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body112 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.25)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body113 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.25)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body114 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(250,250,250)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgb(255,77,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,120,117)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body115 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgb(255,77,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,120,117)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body116 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(255,120,117)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgb(255,77,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,120,117)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body117 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(255,120,117), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgb(255,77,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,120,117)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body118 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,120,117)",
      boxShadow: "inset 0 0 0 1px rgb(255,77,79), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body119 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgb(255,77,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,77,79)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body120 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgb(255,77,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,77,79)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body121 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(255,77,79)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgb(255,77,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,77,79)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body122 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(255,77,79), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgb(255,77,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,77,79)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body123 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,77,79)",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body124 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.25)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body125 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.25)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body126 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.25)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body127 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(250,250,250)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgb(255,77,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(255,120,117)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body128 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgb(255,77,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(255,120,117)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body129 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(255,120,117)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgb(255,77,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(255,120,117)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body130 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(255,120,117), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgb(255,77,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(255,120,117)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body131 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,120,117)",
      boxShadow: "inset 0 0 0 1px rgb(255,77,79), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body132 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgb(255,77,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(255,77,79)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body133 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(255,77,79)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgb(255,77,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(255,77,79)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body134 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(255,77,79), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgb(255,77,79)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(255,77,79)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body135 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,77,79)",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body136 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(250,250,250)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body137 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgb(24,144,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(24,144,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body138 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body139 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(24,144,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(24,144,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body140 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(64,169,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body141 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body142 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body143 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body144 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(24,144,255)",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 7px 0px 7px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body145 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(250,250,250)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body146 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgb(24,144,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(24,144,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body147 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(24,144,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(24,144,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body148 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body149 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(64,169,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body150 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body151 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body152 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body153 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(24,144,255)",
      boxShadow: "inset 0 0 0 1px rgb(24,144,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6.400px 15px 6.400px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body154 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(9,109,217), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -4,
      top: -4,
      width: 112,
      height: 40,
      opacity: 0.1,
      borderRadius: 5,
      backgroundColor: "rgb(64,169,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 104,
      height: 32.001,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.016)"
    }
  }), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body155 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(64,169,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -4,
      top: -4,
      width: 112,
      height: 40,
      opacity: 0.1,
      borderRadius: 5,
      backgroundColor: "rgb(64,169,255)"
    }
  }));
  const __body156 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(64,169,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -4,
      top: -4,
      width: 112,
      height: 40,
      opacity: 0.1,
      borderRadius: 5,
      backgroundColor: "rgb(64,169,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 104,
      height: 32.001,
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(64,169,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)"
    }
  }), props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body157 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body158 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgb(9,109,217)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(9,109,217)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body159 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(9,109,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(9,109,217)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body160 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(9,109,217), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(9,109,217)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body161 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(9,109,217)",
      boxShadow: "inset 0 0 0 1px rgb(9,109,217)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body162 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(250,250,250)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body163 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgb(24,144,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(24,144,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body164 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(24,144,255)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(24,144,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body165 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(64,169,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body166 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(64,169,255)",
      boxShadow: "inset 0 0 0 1px rgb(64,169,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body167 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body168 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      outline: "1px dashed rgb(217,217,217)",
      outlineOffset: "-1px",
      boxShadow: "0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body169 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 2,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217), 0px 2px 0px 0px rgba(0,0,0,0.016)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __body170 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(24,144,255)",
      boxShadow: "inset 0 0 0 1px rgb(24,144,255), 0px 2px 0px 0px rgba(0,0,0,0.043)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 15px 4px 15px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.500,
    height: 12.500,
    viewBox: "0 0 12.500 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.75,
      top: 0.752,
      width: 12.5,
      height: 12.5,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12.462 11.602 L 8.405 7.544 C 9.034 6.73 9.375 5.734 9.375 4.688 C 9.375 3.434 8.886 2.259 8.002 1.373 C 7.117 0.487 5.939 0 4.688 0 C 3.436 0 2.258 0.489 1.373 1.373 C 0.487 2.258 0 3.434 0 4.688 C 0 5.939 0.489 7.117 1.373 8.002 C 2.258 8.887 3.434 9.375 4.688 9.375 C 5.734 9.375 6.728 9.034 7.542 8.406 L 11.6 12.462 C 11.612 12.474 11.626 12.484 11.642 12.49 C 11.657 12.497 11.674 12.5 11.691 12.5 C 11.707 12.5 11.724 12.497 11.74 12.49 C 11.755 12.484 11.769 12.474 11.781 12.462 L 12.462 11.783 C 12.474 11.771 12.484 11.757 12.49 11.741 C 12.497 11.726 12.5 11.709 12.5 11.692 C 12.5 11.675 12.497 11.659 12.49 11.643 C 12.484 11.628 12.474 11.613 12.462 11.602 L 12.462 11.602 Z M 7.163 7.163 C 6.5 7.823 5.622 8.188 4.688 8.188 C 3.753 8.188 2.875 7.823 2.213 7.163 C 1.552 6.5 1.188 5.622 1.188 4.688 C 1.188 3.753 1.552 2.873 2.213 2.213 C 2.875 1.552 3.753 1.188 4.688 1.188 C 5.622 1.188 6.502 1.55 7.163 2.213 C 7.823 2.875 8.188 3.753 8.188 4.688 C 8.188 5.622 7.823 6.502 7.163 7.163 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.title));
  const __impls = {
    // figma: Type=secondary, Shape=standard, Size=small, State=disabled, Danger=false, Ghost=true
    "type=secondary|shape=standard|size=sm|state=disabled|danger=false|ghost=true": __body0,
    // figma: Type=text, Shape=standard, Size=small, State=disabled, Danger=false, Ghost=true
    "type=text|shape=standard|size=sm|state=disabled|danger=false|ghost=true": __body1,
    // figma: Type=link, Shape=standard, Size=small, State=disabled, Danger=false, Ghost=true
    "type=link|shape=standard|size=sm|state=disabled|danger=false|ghost=true": __body1,
    // figma: Type=dashed, Shape=standard, Size=small, State=disabled, Danger=false, Ghost=true
    "type=dashed|shape=standard|size=sm|state=disabled|danger=false|ghost=true": __body2,
    // figma: Type=primary, Shape=standard, Size=small, State=disabled, Danger=false, Ghost=true
    "type=primary|shape=standard|size=sm|state=disabled|danger=false|ghost=true": __body3,
    // figma: Type=secondary, Shape=standard, Size=small, State=hover or press, Danger=false, Ghost=true
    "type=secondary|shape=standard|size=sm|state=hover or press|danger=false|ghost=true": __body4,
    // figma: Type=text, Shape=standard, Size=small, State=hover or press, Danger=false, Ghost=true
    "type=text|shape=standard|size=sm|state=hover or press|danger=false|ghost=true": __body5,
    // figma: Type=link, Shape=standard, Size=small, State=hover or press, Danger=false, Ghost=true
    "type=link|shape=standard|size=sm|state=hover or press|danger=false|ghost=true": __body6,
    // figma: Type=dashed, Shape=standard, Size=small, State=hover or press, Danger=false, Ghost=true
    "type=dashed|shape=standard|size=sm|state=hover or press|danger=false|ghost=true": __body7,
    // figma: Type=primary, Shape=standard, Size=small, State=hover or press, Danger=false, Ghost=true
    "type=primary|shape=standard|size=sm|state=hover or press|danger=false|ghost=true": __body8,
    // figma: Type=text, Shape=standard, Size=small, State=normal, Danger=false, Ghost=true
    "type=text|shape=standard|size=sm|state=normal|danger=false|ghost=true": __body9,
    // figma: Type=link, Shape=standard, Size=small, State=normal, Danger=false, Ghost=true
    "type=link|shape=standard|size=sm|state=normal|danger=false|ghost=true": __body10,
    // figma: Type=dashed, Shape=standard, Size=small, State=normal, Danger=false, Ghost=true
    "type=dashed|shape=standard|size=sm|state=normal|danger=false|ghost=true": __body11,
    // figma: Type=secondary, Shape=standard, Size=small, State=normal, Danger=false, Ghost=true
    "type=secondary|shape=standard|size=sm|state=normal|danger=false|ghost=true": __body4,
    // figma: Type=primary, Shape=standard, Size=small, State=normal, Danger=false, Ghost=true
    "type=primary|shape=standard|size=sm|state=normal|danger=false|ghost=true": __body12,
    // figma: Type=text, Shape=standard, Size=large, State=disabled, Danger=false, Ghost=true
    "type=text|shape=standard|size=lg|state=disabled|danger=false|ghost=true": __body13,
    // figma: Type=link, Shape=standard, Size=large, State=disabled, Danger=false, Ghost=true
    "type=link|shape=standard|size=lg|state=disabled|danger=false|ghost=true": __body13,
    // figma: Type=dashed, Shape=standard, Size=large, State=disabled, Danger=false, Ghost=true
    "type=dashed|shape=standard|size=lg|state=disabled|danger=false|ghost=true": __body14,
    // figma: Type=secondary, Shape=standard, Size=large, State=disabled, Danger=false, Ghost=true
    "type=secondary|shape=standard|size=lg|state=disabled|danger=false|ghost=true": __body15,
    // figma: Type=primary, Shape=standard, Size=large, State=disabled, Danger=false, Ghost=true
    "type=primary|shape=standard|size=lg|state=disabled|danger=false|ghost=true": __body16,
    // figma: Type=text, Shape=standard, Size=large, State=hover or press, Danger=false, Ghost=true
    "type=text|shape=standard|size=lg|state=hover or press|danger=false|ghost=true": __body17,
    // figma: Type=link, Shape=standard, Size=large, State=hover or press, Danger=false, Ghost=true
    "type=link|shape=standard|size=lg|state=hover or press|danger=false|ghost=true": __body18,
    // figma: Type=dashed, Shape=standard, Size=large, State=hover or press, Danger=false, Ghost=true
    "type=dashed|shape=standard|size=lg|state=hover or press|danger=false|ghost=true": __body19,
    // figma: Type=secondary, Shape=standard, Size=large, State=hover or press, Danger=false, Ghost=true
    "type=secondary|shape=standard|size=lg|state=hover or press|danger=false|ghost=true": __body20,
    // figma: Type=primary, Shape=standard, Size=large, State=hover or press, Danger=false, Ghost=true
    "type=primary|shape=standard|size=lg|state=hover or press|danger=false|ghost=true": __body21,
    // figma: Type=text, Shape=standard, Size=large, State=normal, Danger=false, Ghost=true
    "type=text|shape=standard|size=lg|state=normal|danger=false|ghost=true": __body22,
    // figma: Type=link, Shape=standard, Size=large, State=normal, Danger=false, Ghost=true
    "type=link|shape=standard|size=lg|state=normal|danger=false|ghost=true": __body23,
    // figma: Type=dashed, Shape=standard, Size=large, State=normal, Danger=false, Ghost=true
    "type=dashed|shape=standard|size=lg|state=normal|danger=false|ghost=true": __body24,
    // figma: Type=secondary, Shape=standard, Size=large, State=normal, Danger=false, Ghost=true
    "type=secondary|shape=standard|size=lg|state=normal|danger=false|ghost=true": __body25,
    // figma: Type=primary, Shape=standard, Size=large, State=normal, Danger=false, Ghost=true
    "type=primary|shape=standard|size=lg|state=normal|danger=false|ghost=true": __body26,
    // figma: Type=text, Shape=standard, Size=medium, State=disabled, Danger=false, Ghost=true
    "type=text|shape=standard|size=md|state=disabled|danger=false|ghost=true": __body27,
    // figma: Type=link, Shape=standard, Size=medium, State=disabled, Danger=false, Ghost=true
    "type=link|shape=standard|size=md|state=disabled|danger=false|ghost=true": __body27,
    // figma: Type=dashed, Shape=standard, Size=medium, State=disabled, Danger=false, Ghost=true
    "type=dashed|shape=standard|size=md|state=disabled|danger=false|ghost=true": __body28,
    // figma: Type=secondary, Shape=standard, Size=medium, State=disabled, Danger=false, Ghost=true
    "type=secondary|shape=standard|size=md|state=disabled|danger=false|ghost=true": __body29,
    // figma: Type=primary, Shape=standard, Size=medium, State=disabled, Danger=false, Ghost=true
    "type=primary|shape=standard|size=md|state=disabled|danger=false|ghost=true": __body30,
    // figma: Type=secondary, Shape=standard, Size=medium, State=animating, Danger=false, Ghost=true
    "type=secondary|shape=standard|size=md|state=animating|danger=false|ghost=true": __body31,
    // figma: Type=dashed, Shape=standard, Size=medium, State=animating, Danger=false, Ghost=true
    "type=dashed|shape=standard|size=md|state=animating|danger=false|ghost=true": __body32,
    // figma: Type=primary, Shape=standard, Size=medium, State=animating, Danger=false, Ghost=true
    "type=primary|shape=standard|size=md|state=animating|danger=false|ghost=true": __body33,
    // figma: Type=text, Shape=standard, Size=medium, State=active, Danger=false, Ghost=true
    "type=text|shape=standard|size=md|state=active|danger=false|ghost=true": __body34,
    // figma: Type=link, Shape=standard, Size=medium, State=active, Danger=false, Ghost=true
    "type=link|shape=standard|size=md|state=active|danger=false|ghost=true": __body35,
    // figma: Type=dashed, Shape=standard, Size=medium, State=active, Danger=false, Ghost=true
    "type=dashed|shape=standard|size=md|state=active|danger=false|ghost=true": __body36,
    // figma: Type=secondary, Shape=standard, Size=medium, State=active, Danger=false, Ghost=true
    "type=secondary|shape=standard|size=md|state=active|danger=false|ghost=true": __body37,
    // figma: Type=primary, Shape=standard, Size=medium, State=active, Danger=false, Ghost=true
    "type=primary|shape=standard|size=md|state=active|danger=false|ghost=true": __body38,
    // figma: Type=text, Shape=standard, Size=medium, State=hover or press, Danger=false, Ghost=true
    "type=text|shape=standard|size=md|state=hover or press|danger=false|ghost=true": __body39,
    // figma: Type=link, Shape=standard, Size=medium, State=hover or press, Danger=false, Ghost=true
    "type=link|shape=standard|size=md|state=hover or press|danger=false|ghost=true": __body40,
    // figma: Type=dashed, Shape=standard, Size=medium, State=hover or press, Danger=false, Ghost=true
    "type=dashed|shape=standard|size=md|state=hover or press|danger=false|ghost=true": __body41,
    // figma: Type=secondary, Shape=standard, Size=medium, State=hover or press, Danger=false, Ghost=true
    "type=secondary|shape=standard|size=md|state=hover or press|danger=false|ghost=true": __body42,
    // figma: Type=primary, Shape=standard, Size=medium, State=hover or press, Danger=false, Ghost=true
    "type=primary|shape=standard|size=md|state=hover or press|danger=false|ghost=true": __body43,
    // figma: Type=text, Shape=standard, Size=medium, State=normal, Danger=false, Ghost=true
    "type=text|shape=standard|size=md|state=normal|danger=false|ghost=true": __body44,
    // figma: Type=link, Shape=standard, Size=medium, State=normal, Danger=false, Ghost=true
    "type=link|shape=standard|size=md|state=normal|danger=false|ghost=true": __body45,
    // figma: Type=dashed, Shape=standard, Size=medium, State=normal, Danger=false, Ghost=true
    "type=dashed|shape=standard|size=md|state=normal|danger=false|ghost=true": __body46,
    // figma: Type=secondary, Shape=standard, Size=medium, State=normal, Danger=false, Ghost=true
    "type=secondary|shape=standard|size=md|state=normal|danger=false|ghost=true": __body47,
    // figma: Type=primary, Shape=standard, Size=medium, State=normal, Danger=false, Ghost=true
    "type=primary|shape=standard|size=md|state=normal|danger=false|ghost=true": __body48,
    // figma: Type=dashed, Shape=square, Size=small, State=disabled, Danger=false, Ghost=false
    "type=dashed|shape=square|size=sm|state=disabled|danger=false|ghost=false": __body49,
    // figma: Type=secondary, Shape=square, Size=small, State=disabled, Danger=false, Ghost=false
    "type=secondary|shape=square|size=sm|state=disabled|danger=false|ghost=false": __body50,
    // figma: Type=primary, Shape=square, Size=small, State=disabled, Danger=false, Ghost=false
    "type=primary|shape=square|size=sm|state=disabled|danger=false|ghost=false": __body50,
    // figma: Type=dashed, Shape=square, Size=small, State=hover or press, Danger=false, Ghost=false
    "type=dashed|shape=square|size=sm|state=hover or press|danger=false|ghost=false": __body51,
    // figma: Type=secondary, Shape=square, Size=small, State=hover or press, Danger=false, Ghost=false
    "type=secondary|shape=square|size=sm|state=hover or press|danger=false|ghost=false": __body52,
    // figma: Type=primary, Shape=square, Size=small, State=hover or press, Danger=false, Ghost=false
    "type=primary|shape=square|size=sm|state=hover or press|danger=false|ghost=false": __body53,
    // figma: Type=dashed, Shape=square, Size=small, State=normal, Danger=false, Ghost=false
    "type=dashed|shape=square|size=sm|state=normal|danger=false|ghost=false": __body54,
    // figma: Type=secondary, Shape=square, Size=small, State=normal, Danger=false, Ghost=false
    "type=secondary|shape=square|size=sm|state=normal|danger=false|ghost=false": __body55,
    // figma: Type=primary, Shape=square, Size=small, State=normal, Danger=false, Ghost=false
    "type=primary|shape=square|size=sm|state=normal|danger=false|ghost=false": __body56,
    // figma: Type=dashed, Shape=square, Size=medium, State=disabled, Danger=false, Ghost=false
    "type=dashed|shape=square|size=md|state=disabled|danger=false|ghost=false": __body57,
    // figma: Type=secondary, Shape=square, Size=medium, State=disabled, Danger=false, Ghost=false
    "type=secondary|shape=square|size=md|state=disabled|danger=false|ghost=false": __body58,
    // figma: Type=primary, Shape=square, Size=medium, State=disabled, Danger=false, Ghost=false
    "type=primary|shape=square|size=md|state=disabled|danger=false|ghost=false": __body58,
    // figma: Type=dashed, Shape=square, Size=medium, State=hover or press, Danger=false, Ghost=false
    "type=dashed|shape=square|size=md|state=hover or press|danger=false|ghost=false": __body59,
    // figma: Type=secondary, Shape=square, Size=medium, State=hover or press, Danger=false, Ghost=false
    "type=secondary|shape=square|size=md|state=hover or press|danger=false|ghost=false": __body60,
    // figma: Type=primary, Shape=square, Size=medium, State=hover or press, Danger=false, Ghost=false
    "type=primary|shape=square|size=md|state=hover or press|danger=false|ghost=false": __body61,
    // figma: Type=dashed, Shape=square, Size=medium, State=normal, Danger=false, Ghost=false
    "type=dashed|shape=square|size=md|state=normal|danger=false|ghost=false": __body62,
    // figma: Type=secondary, Shape=square, Size=medium, State=normal, Danger=false, Ghost=false
    "type=secondary|shape=square|size=md|state=normal|danger=false|ghost=false": __body63,
    // figma: Type=primary, Shape=square, Size=medium, State=normal, Danger=false, Ghost=false
    "type=primary|shape=square|size=md|state=normal|danger=false|ghost=false": __body64,
    // figma: Type=dashed, Shape=square, Size=large, State=disabled, Danger=false, Ghost=false
    "type=dashed|shape=square|size=lg|state=disabled|danger=false|ghost=false": __body65,
    // figma: Type=secondary, Shape=square, Size=large, State=disabled, Danger=false, Ghost=false
    "type=secondary|shape=square|size=lg|state=disabled|danger=false|ghost=false": __body66,
    // figma: Type=primary, Shape=square, Size=large, State=disabled, Danger=false, Ghost=false
    "type=primary|shape=square|size=lg|state=disabled|danger=false|ghost=false": __body66,
    // figma: Type=dashed, Shape=square, Size=large, State=hover or press, Danger=false, Ghost=false
    "type=dashed|shape=square|size=lg|state=hover or press|danger=false|ghost=false": __body67,
    // figma: Type=secondary, Shape=square, Size=large, State=hover or press, Danger=false, Ghost=false
    "type=secondary|shape=square|size=lg|state=hover or press|danger=false|ghost=false": __body68,
    // figma: Type=primary, Shape=square, Size=large, State=hover or press, Danger=false, Ghost=false
    "type=primary|shape=square|size=lg|state=hover or press|danger=false|ghost=false": __body69,
    // figma: Type=dashed, Shape=square, Size=large, State=normal, Danger=false, Ghost=false
    "type=dashed|shape=square|size=lg|state=normal|danger=false|ghost=false": __body70,
    // figma: Type=secondary, Shape=square, Size=large, State=normal, Danger=false, Ghost=false
    "type=secondary|shape=square|size=lg|state=normal|danger=false|ghost=false": __body71,
    // figma: Type=primary, Shape=square, Size=large, State=normal, Danger=false, Ghost=false
    "type=primary|shape=square|size=lg|state=normal|danger=false|ghost=false": __body72,
    // figma: Type=dashed, Shape=circle, Size=small, State=disabled, Danger=false, Ghost=false
    "type=dashed|shape=circle|size=sm|state=disabled|danger=false|ghost=false": __body73,
    // figma: Type=secondary, Shape=circle, Size=small, State=disabled, Danger=false, Ghost=false
    "type=secondary|shape=circle|size=sm|state=disabled|danger=false|ghost=false": __body74,
    // figma: Type=primary, Shape=circle, Size=small, State=disabled, Danger=false, Ghost=false
    "type=primary|shape=circle|size=sm|state=disabled|danger=false|ghost=false": __body74,
    // figma: Type=dashed, Shape=circle, Size=small, State=hover or press, Danger=false, Ghost=false
    "type=dashed|shape=circle|size=sm|state=hover or press|danger=false|ghost=false": __body75,
    // figma: Type=secondary, Shape=circle, Size=small, State=hover or press, Danger=false, Ghost=false
    "type=secondary|shape=circle|size=sm|state=hover or press|danger=false|ghost=false": __body76,
    // figma: Type=primary, Shape=circle, Size=small, State=hover or press, Danger=false, Ghost=false
    "type=primary|shape=circle|size=sm|state=hover or press|danger=false|ghost=false": __body77,
    // figma: Type=dashed, Shape=circle, Size=small, State=normal, Danger=false, Ghost=false
    "type=dashed|shape=circle|size=sm|state=normal|danger=false|ghost=false": __body78,
    // figma: Type=secondary, Shape=circle, Size=small, State=normal, Danger=false, Ghost=false
    "type=secondary|shape=circle|size=sm|state=normal|danger=false|ghost=false": __body79,
    // figma: Type=primary, Shape=circle, Size=small, State=normal, Danger=false, Ghost=false
    "type=primary|shape=circle|size=sm|state=normal|danger=false|ghost=false": __body80,
    // figma: Type=dashed, Shape=circle, Size=medium, State=disabled, Danger=false, Ghost=false
    "type=dashed|shape=circle|size=md|state=disabled|danger=false|ghost=false": __body81,
    // figma: Type=secondary, Shape=circle, Size=medium, State=disabled, Danger=false, Ghost=false
    "type=secondary|shape=circle|size=md|state=disabled|danger=false|ghost=false": __body82,
    // figma: Type=primary, Shape=circle, Size=medium, State=disabled, Danger=false, Ghost=false
    "type=primary|shape=circle|size=md|state=disabled|danger=false|ghost=false": __body82,
    // figma: Type=dashed, Shape=circle, Size=medium, State=hover or press, Danger=false, Ghost=false
    "type=dashed|shape=circle|size=md|state=hover or press|danger=false|ghost=false": __body83,
    // figma: Type=secondary, Shape=circle, Size=medium, State=hover or press, Danger=false, Ghost=false
    "type=secondary|shape=circle|size=md|state=hover or press|danger=false|ghost=false": __body84,
    // figma: Type=primary, Shape=circle, Size=medium, State=hover or press, Danger=false, Ghost=false
    "type=primary|shape=circle|size=md|state=hover or press|danger=false|ghost=false": __body85,
    // figma: Type=dashed, Shape=circle, Size=medium, State=normal, Danger=false, Ghost=false
    "type=dashed|shape=circle|size=md|state=normal|danger=false|ghost=false": __body86,
    // figma: Type=secondary, Shape=circle, Size=medium, State=normal, Danger=false, Ghost=false
    "type=secondary|shape=circle|size=md|state=normal|danger=false|ghost=false": __body87,
    // figma: Type=primary, Shape=circle, Size=medium, State=normal, Danger=false, Ghost=false
    "type=primary|shape=circle|size=md|state=normal|danger=false|ghost=false": __body88,
    // figma: Type=dashed, Shape=circle, Size=large, State=disabled, Danger=false, Ghost=false
    "type=dashed|shape=circle|size=lg|state=disabled|danger=false|ghost=false": __body89,
    // figma: Type=secondary, Shape=circle, Size=large, State=disabled, Danger=false, Ghost=false
    "type=secondary|shape=circle|size=lg|state=disabled|danger=false|ghost=false": __body90,
    // figma: Type=primary, Shape=circle, Size=large, State=disabled, Danger=false, Ghost=false
    "type=primary|shape=circle|size=lg|state=disabled|danger=false|ghost=false": __body90,
    // figma: Type=dashed, Shape=circle, Size=large, State=hover or press, Danger=false, Ghost=false
    "type=dashed|shape=circle|size=lg|state=hover or press|danger=false|ghost=false": __body91,
    // figma: Type=secondary, Shape=circle, Size=large, State=hover or press, Danger=false, Ghost=false
    "type=secondary|shape=circle|size=lg|state=hover or press|danger=false|ghost=false": __body92,
    // figma: Type=primary, Shape=circle, Size=large, State=hover or press, Danger=false, Ghost=false
    "type=primary|shape=circle|size=lg|state=hover or press|danger=false|ghost=false": __body93,
    // figma: Type=dashed, Shape=circle, Size=large, State=normal, Danger=false, Ghost=false
    "type=dashed|shape=circle|size=lg|state=normal|danger=false|ghost=false": __body94,
    // figma: Type=secondary, Shape=circle, Size=large, State=normal, Danger=false, Ghost=false
    "type=secondary|shape=circle|size=lg|state=normal|danger=false|ghost=false": __body95,
    // figma: Type=primary, Shape=circle, Size=large, State=normal, Danger=false, Ghost=false
    "type=primary|shape=circle|size=lg|state=normal|danger=false|ghost=false": __body96,
    // figma: Type=text, Shape=standard, Size=small, State=disabled, Danger=true, Ghost=false
    "type=text|shape=standard|size=sm|state=disabled|danger=true|ghost=false": __body97,
    // figma: Type=link, Shape=standard, Size=small, State=disabled, Danger=true, Ghost=false
    "type=link|shape=standard|size=sm|state=disabled|danger=true|ghost=false": __body97,
    // figma: Type=dashed, Shape=standard, Size=small, State=disabled, Danger=true, Ghost=false
    "type=dashed|shape=standard|size=sm|state=disabled|danger=true|ghost=false": __body98,
    // figma: Type=secondary, Shape=standard, Size=small, State=disabled, Danger=true, Ghost=false
    "type=secondary|shape=standard|size=sm|state=disabled|danger=true|ghost=false": __body99,
    // figma: Type=primary, Shape=standard, Size=small, State=disabled, Danger=true, Ghost=false
    "type=primary|shape=standard|size=sm|state=disabled|danger=true|ghost=false": __body100,
    // figma: Type=text, Shape=standard, Size=small, State=hover or press, Danger=true, Ghost=false
    "type=text|shape=standard|size=sm|state=hover or press|danger=true|ghost=false": __body101,
    // figma: Type=link, Shape=standard, Size=small, State=hover or press, Danger=true, Ghost=false
    "type=link|shape=standard|size=sm|state=hover or press|danger=true|ghost=false": __body102,
    // figma: Type=dashed, Shape=standard, Size=small, State=hover or press, Danger=true, Ghost=false
    "type=dashed|shape=standard|size=sm|state=hover or press|danger=true|ghost=false": __body103,
    // figma: Type=secondary, Shape=standard, Size=small, State=hover or press, Danger=true, Ghost=false
    "type=secondary|shape=standard|size=sm|state=hover or press|danger=true|ghost=false": __body104,
    // figma: Type=primary, Shape=standard, Size=small, State=hover or press, Danger=true, Ghost=false
    "type=primary|shape=standard|size=sm|state=hover or press|danger=true|ghost=false": __body105,
    // figma: Type=text, Shape=standard, Size=small, State=normal, Danger=true, Ghost=false
    "type=text|shape=standard|size=sm|state=normal|danger=true|ghost=false": __body106,
    // figma: Type=link, Shape=standard, Size=small, State=normal, Danger=true, Ghost=false
    "type=link|shape=standard|size=sm|state=normal|danger=true|ghost=false": __body106,
    // figma: Type=dashed, Shape=standard, Size=small, State=normal, Danger=true, Ghost=false
    "type=dashed|shape=standard|size=sm|state=normal|danger=true|ghost=false": __body107,
    // figma: Type=secondary, Shape=standard, Size=small, State=normal, Danger=true, Ghost=false
    "type=secondary|shape=standard|size=sm|state=normal|danger=true|ghost=false": __body108,
    // figma: Type=primary, Shape=standard, Size=small, State=normal, Danger=true, Ghost=false
    "type=primary|shape=standard|size=sm|state=normal|danger=true|ghost=false": __body109,
    // figma: Type=text, Shape=standard, Size=medium, State=disabled, Danger=true, Ghost=false
    "type=text|shape=standard|size=md|state=disabled|danger=true|ghost=false": __body110,
    // figma: Type=link, Shape=standard, Size=medium, State=disabled, Danger=true, Ghost=false
    "type=link|shape=standard|size=md|state=disabled|danger=true|ghost=false": __body111,
    // figma: Type=dashed, Shape=standard, Size=medium, State=disabled, Danger=true, Ghost=false
    "type=dashed|shape=standard|size=md|state=disabled|danger=true|ghost=false": __body112,
    // figma: Type=secondary, Shape=standard, Size=medium, State=disabled, Danger=true, Ghost=false
    "type=secondary|shape=standard|size=md|state=disabled|danger=true|ghost=false": __body113,
    // figma: Type=primary, Shape=standard, Size=medium, State=disabled, Danger=true, Ghost=false
    "type=primary|shape=standard|size=md|state=disabled|danger=true|ghost=false": __body113,
    // figma: Type=text, Shape=standard, Size=medium, State=hover or press, Danger=true, Ghost=false
    "type=text|shape=standard|size=md|state=hover or press|danger=true|ghost=false": __body114,
    // figma: Type=link, Shape=standard, Size=medium, State=hover or press, Danger=true, Ghost=false
    "type=link|shape=standard|size=md|state=hover or press|danger=true|ghost=false": __body115,
    // figma: Type=dashed, Shape=standard, Size=medium, State=hover or press, Danger=true, Ghost=false
    "type=dashed|shape=standard|size=md|state=hover or press|danger=true|ghost=false": __body116,
    // figma: Type=secondary, Shape=standard, Size=medium, State=hover or press, Danger=true, Ghost=false
    "type=secondary|shape=standard|size=md|state=hover or press|danger=true|ghost=false": __body117,
    // figma: Type=primary, Shape=standard, Size=medium, State=hover or press, Danger=true, Ghost=false
    "type=primary|shape=standard|size=md|state=hover or press|danger=true|ghost=false": __body118,
    // figma: Type=text, Shape=standard, Size=medium, State=normal, Danger=true, Ghost=false
    "type=text|shape=standard|size=md|state=normal|danger=true|ghost=false": __body119,
    // figma: Type=link, Shape=standard, Size=medium, State=normal, Danger=true, Ghost=false
    "type=link|shape=standard|size=md|state=normal|danger=true|ghost=false": __body120,
    // figma: Type=dashed, Shape=standard, Size=medium, State=normal, Danger=true, Ghost=false
    "type=dashed|shape=standard|size=md|state=normal|danger=true|ghost=false": __body121,
    // figma: Type=secondary, Shape=standard, Size=medium, State=normal, Danger=true, Ghost=false
    "type=secondary|shape=standard|size=md|state=normal|danger=true|ghost=false": __body122,
    // figma: Type=primary, Shape=standard, Size=medium, State=normal, Danger=true, Ghost=false
    "type=primary|shape=standard|size=md|state=normal|danger=true|ghost=false": __body123,
    // figma: Type=text, Shape=standard, Size=large, State=disabled, Danger=true, Ghost=false
    "type=text|shape=standard|size=lg|state=disabled|danger=true|ghost=false": __body124,
    // figma: Type=link, Shape=standard, Size=large, State=disabled, Danger=true, Ghost=false
    "type=link|shape=standard|size=lg|state=disabled|danger=true|ghost=false": __body124,
    // figma: Type=dashed, Shape=standard, Size=large, State=disabled, Danger=true, Ghost=false
    "type=dashed|shape=standard|size=lg|state=disabled|danger=true|ghost=false": __body125,
    // figma: Type=secondary, Shape=standard, Size=large, State=disabled, Danger=true, Ghost=false
    "type=secondary|shape=standard|size=lg|state=disabled|danger=true|ghost=false": __body126,
    // figma: Type=primary, Shape=standard, Size=large, State=disabled, Danger=true, Ghost=false
    "type=primary|shape=standard|size=lg|state=disabled|danger=true|ghost=false": __body126,
    // figma: Type=text, Shape=standard, Size=large, State=hover or press, Danger=true, Ghost=false
    "type=text|shape=standard|size=lg|state=hover or press|danger=true|ghost=false": __body127,
    // figma: Type=link, Shape=standard, Size=large, State=hover or press, Danger=true, Ghost=false
    "type=link|shape=standard|size=lg|state=hover or press|danger=true|ghost=false": __body128,
    // figma: Type=dashed, Shape=standard, Size=large, State=hover or press, Danger=true, Ghost=false
    "type=dashed|shape=standard|size=lg|state=hover or press|danger=true|ghost=false": __body129,
    // figma: Type=secondary, Shape=standard, Size=large, State=hover or press, Danger=true, Ghost=false
    "type=secondary|shape=standard|size=lg|state=hover or press|danger=true|ghost=false": __body130,
    // figma: Type=primary, Shape=standard, Size=large, State=hover or press, Danger=true, Ghost=false
    "type=primary|shape=standard|size=lg|state=hover or press|danger=true|ghost=false": __body131,
    // figma: Type=text, Shape=standard, Size=large, State=normal, Danger=true, Ghost=false
    "type=text|shape=standard|size=lg|state=normal|danger=true|ghost=false": __body132,
    // figma: Type=link, Shape=standard, Size=large, State=normal, Danger=true, Ghost=false
    "type=link|shape=standard|size=lg|state=normal|danger=true|ghost=false": __body132,
    // figma: Type=dashed, Shape=standard, Size=large, State=normal, Danger=true, Ghost=false
    "type=dashed|shape=standard|size=lg|state=normal|danger=true|ghost=false": __body133,
    // figma: Type=secondary, Shape=standard, Size=large, State=normal, Danger=true, Ghost=false
    "type=secondary|shape=standard|size=lg|state=normal|danger=true|ghost=false": __body134,
    // figma: Type=primary, Shape=standard, Size=large, State=normal, Danger=true, Ghost=false
    "type=primary|shape=standard|size=lg|state=normal|danger=true|ghost=false": __body135,
    // figma: Type=text, Shape=standard, Size=small, State=disabled, Danger=false, Ghost=false
    "type=text|shape=standard|size=sm|state=disabled|danger=false|ghost=false": __body97,
    // figma: Type=link, Shape=standard, Size=small, State=disabled, Danger=false, Ghost=false
    "type=link|shape=standard|size=sm|state=disabled|danger=false|ghost=false": __body97,
    // figma: Type=dashed, Shape=standard, Size=small, State=disabled, Danger=false, Ghost=false
    "type=dashed|shape=standard|size=sm|state=disabled|danger=false|ghost=false": __body98,
    // figma: Type=secondary, Shape=standard, Size=small, State=disabled, Danger=false, Ghost=false
    "type=secondary|shape=standard|size=sm|state=disabled|danger=false|ghost=false": __body99,
    // figma: Type=primary, Shape=standard, Size=small, State=disabled, Danger=false, Ghost=false
    "type=primary|shape=standard|size=sm|state=disabled|danger=false|ghost=false": __body100,
    // figma: Type=text, Shape=standard, Size=small, State=hover or press, Danger=false, Ghost=false
    "type=text|shape=standard|size=sm|state=hover or press|danger=false|ghost=false": __body136,
    // figma: Type=link, Shape=standard, Size=small, State=hover or press, Danger=false, Ghost=false
    "type=link|shape=standard|size=sm|state=hover or press|danger=false|ghost=false": __body137,
    // figma: Type=secondary, Shape=standard, Size=small, State=hover or press, Danger=false, Ghost=false
    "type=secondary|shape=standard|size=sm|state=hover or press|danger=false|ghost=false": __body138,
    // figma: Type=dashed, Shape=standard, Size=small, State=hover or press, Danger=false, Ghost=false
    "type=dashed|shape=standard|size=sm|state=hover or press|danger=false|ghost=false": __body139,
    // figma: Type=primary, Shape=standard, Size=small, State=hover or press, Danger=false, Ghost=false
    "type=primary|shape=standard|size=sm|state=hover or press|danger=false|ghost=false": __body140,
    // figma: Type=text, Shape=standard, Size=small, State=normal, Danger=false, Ghost=false
    "type=text|shape=standard|size=sm|state=normal|danger=false|ghost=false": __body141,
    // figma: Type=link, Shape=standard, Size=small, State=normal, Danger=false, Ghost=false
    "type=link|shape=standard|size=sm|state=normal|danger=false|ghost=false": __body137,
    // figma: Type=dashed, Shape=standard, Size=small, State=normal, Danger=false, Ghost=false
    "type=dashed|shape=standard|size=sm|state=normal|danger=false|ghost=false": __body142,
    // figma: Type=secondary, Shape=standard, Size=small, State=normal, Danger=false, Ghost=false
    "type=secondary|shape=standard|size=sm|state=normal|danger=false|ghost=false": __body143,
    // figma: Type=primary, Shape=standard, Size=small, State=normal, Danger=false, Ghost=false
    "type=primary|shape=standard|size=sm|state=normal|danger=false|ghost=false": __body144,
    // figma: Type=text, Shape=standard, Size=large, State=disabled, Danger=false, Ghost=false
    "type=text|shape=standard|size=lg|state=disabled|danger=false|ghost=false": __body124,
    // figma: Type=link, Shape=standard, Size=large, State=disabled, Danger=false, Ghost=false
    "type=link|shape=standard|size=lg|state=disabled|danger=false|ghost=false": __body124,
    // figma: Type=dashed, Shape=standard, Size=large, State=disabled, Danger=false, Ghost=false
    "type=dashed|shape=standard|size=lg|state=disabled|danger=false|ghost=false": __body125,
    // figma: Type=secondary, Shape=standard, Size=large, State=disabled, Danger=false, Ghost=false
    "type=secondary|shape=standard|size=lg|state=disabled|danger=false|ghost=false": __body126,
    // figma: Type=primary, Shape=standard, Size=large, State=disabled, Danger=false, Ghost=false
    "type=primary|shape=standard|size=lg|state=disabled|danger=false|ghost=false": __body126,
    // figma: Type=text, Shape=standard, Size=large, State=hover or press, Danger=false, Ghost=false
    "type=text|shape=standard|size=lg|state=hover or press|danger=false|ghost=false": __body145,
    // figma: Type=link, Shape=standard, Size=large, State=hover or press, Danger=false, Ghost=false
    "type=link|shape=standard|size=lg|state=hover or press|danger=false|ghost=false": __body146,
    // figma: Type=dashed, Shape=standard, Size=large, State=hover or press, Danger=false, Ghost=false
    "type=dashed|shape=standard|size=lg|state=hover or press|danger=false|ghost=false": __body147,
    // figma: Type=secondary, Shape=standard, Size=large, State=hover or press, Danger=false, Ghost=false
    "type=secondary|shape=standard|size=lg|state=hover or press|danger=false|ghost=false": __body148,
    // figma: Type=primary, Shape=standard, Size=large, State=hover or press, Danger=false, Ghost=false
    "type=primary|shape=standard|size=lg|state=hover or press|danger=false|ghost=false": __body149,
    // figma: Type=text, Shape=standard, Size=large, State=normal, Danger=false, Ghost=false
    "type=text|shape=standard|size=lg|state=normal|danger=false|ghost=false": __body150,
    // figma: Type=link, Shape=standard, Size=large, State=normal, Danger=false, Ghost=false
    "type=link|shape=standard|size=lg|state=normal|danger=false|ghost=false": __body146,
    // figma: Type=dashed, Shape=standard, Size=large, State=normal, Danger=false, Ghost=false
    "type=dashed|shape=standard|size=lg|state=normal|danger=false|ghost=false": __body151,
    // figma: Type=secondary, Shape=standard, Size=large, State=normal, Danger=false, Ghost=false
    "type=secondary|shape=standard|size=lg|state=normal|danger=false|ghost=false": __body152,
    // figma: Type=primary, Shape=standard, Size=large, State=normal, Danger=false, Ghost=false
    "type=primary|shape=standard|size=lg|state=normal|danger=false|ghost=false": __body153,
    // figma: Type=text, Shape=standard, Size=medium, State=disabled, Danger=false, Ghost=false
    "type=text|shape=standard|size=md|state=disabled|danger=false|ghost=false": __body110,
    // figma: Type=link, Shape=standard, Size=medium, State=disabled, Danger=false, Ghost=false
    "type=link|shape=standard|size=md|state=disabled|danger=false|ghost=false": __body111,
    // figma: Type=dashed, Shape=standard, Size=medium, State=disabled, Danger=false, Ghost=false
    "type=dashed|shape=standard|size=md|state=disabled|danger=false|ghost=false": __body112,
    // figma: Type=secondary, Shape=standard, Size=medium, State=disabled, Danger=false, Ghost=false
    "type=secondary|shape=standard|size=md|state=disabled|danger=false|ghost=false": __body113,
    // figma: Type=primary, Shape=standard, Size=medium, State=disabled, Danger=false, Ghost=false
    "type=primary|shape=standard|size=md|state=disabled|danger=false|ghost=false": __body113,
    // figma: Type=secondary, Shape=standard, Size=medium, State=animating, Danger=false, Ghost=false
    "type=secondary|shape=standard|size=md|state=animating|danger=false|ghost=false": __body154,
    // figma: Type=primary, Shape=standard, Size=medium, State=animating, Danger=false, Ghost=false
    "type=primary|shape=standard|size=md|state=animating|danger=false|ghost=false": __body155,
    // figma: Type=dashed, Shape=standard, Size=medium, State=animating, Danger=false, Ghost=false
    "type=dashed|shape=standard|size=md|state=animating|danger=false|ghost=false": __body156,
    // figma: Type=text, Shape=standard, Size=medium, State=active, Danger=false, Ghost=false
    "type=text|shape=standard|size=md|state=active|danger=false|ghost=false": __body157,
    // figma: Type=link, Shape=standard, Size=medium, State=active, Danger=false, Ghost=false
    "type=link|shape=standard|size=md|state=active|danger=false|ghost=false": __body158,
    // figma: Type=dashed, Shape=standard, Size=medium, State=active, Danger=false, Ghost=false
    "type=dashed|shape=standard|size=md|state=active|danger=false|ghost=false": __body159,
    // figma: Type=secondary, Shape=standard, Size=medium, State=active, Danger=false, Ghost=false
    "type=secondary|shape=standard|size=md|state=active|danger=false|ghost=false": __body160,
    // figma: Type=primary, Shape=standard, Size=medium, State=active, Danger=false, Ghost=false
    "type=primary|shape=standard|size=md|state=active|danger=false|ghost=false": __body161,
    // figma: Type=text, Shape=standard, Size=medium, State=hover or press, Danger=false, Ghost=false
    "type=text|shape=standard|size=md|state=hover or press|danger=false|ghost=false": __body162,
    // figma: Type=link, Shape=standard, Size=medium, State=hover or press, Danger=false, Ghost=false
    "type=link|shape=standard|size=md|state=hover or press|danger=false|ghost=false": __body163,
    // figma: Type=dashed, Shape=standard, Size=medium, State=hover or press, Danger=false, Ghost=false
    "type=dashed|shape=standard|size=md|state=hover or press|danger=false|ghost=false": __body164,
    // figma: Type=secondary, Shape=standard, Size=medium, State=hover or press, Danger=false, Ghost=false
    "type=secondary|shape=standard|size=md|state=hover or press|danger=false|ghost=false": __body165,
    // figma: Type=primary, Shape=standard, Size=medium, State=hover or press, Danger=false, Ghost=false
    "type=primary|shape=standard|size=md|state=hover or press|danger=false|ghost=false": __body166,
    // figma: Type=text, Shape=standard, Size=medium, State=normal, Danger=false, Ghost=false
    "type=text|shape=standard|size=md|state=normal|danger=false|ghost=false": __body167,
    // figma: Type=link, Shape=standard, Size=medium, State=normal, Danger=false, Ghost=false
    "type=link|shape=standard|size=md|state=normal|danger=false|ghost=false": __body163,
    // figma: Type=dashed, Shape=standard, Size=medium, State=normal, Danger=false, Ghost=false
    "type=dashed|shape=standard|size=md|state=normal|danger=false|ghost=false": __body168,
    // figma: Type=secondary, Shape=standard, Size=medium, State=normal, Danger=false, Ghost=false
    "type=secondary|shape=standard|size=md|state=normal|danger=false|ghost=false": __body169,
    // figma: Type=primary, Shape=standard, Size=medium, State=normal, Danger=false, Ghost=false
    "type=primary|shape=standard|size=md|state=normal|danger=false|ghost=false": __body170
  };
  return (__impls[__vkey_Button3(props)] ?? __body26)();
}

// figma node: 49:24122 Date/Day item (14 variants)
var __venc_DateDayItem = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_DateDayItem = p => "inView=" + __venc_DateDayItem(p.inView) + '|' + "today=" + __venc_DateDayItem(p.today) + '|' + "selected=" + __venc_DateDayItem(p.selected) + '|' + "rangeStart=" + __venc_DateDayItem(p.rangeStart) + '|' + "inRange=" + __venc_DateDayItem(p.inRange) + '|' + "rangeEnd=" + __venc_DateDayItem(p.rangeEnd) + '|' + "hovered=" + __venc_DateDayItem(p.hovered) + '|' + "disabled=" + __venc_DateDayItem(p.disabled);

function DateDayItem(_p = {}) {
  const props = {
    ..._p,
    inView: _p.inView ?? false,
    today: _p.today ?? false,
    selected: _p.selected ?? false,
    rangeStart: _p.rangeStart ?? false,
    inRange: _p.inRange ?? false,
    rangeEnd: _p.rangeEnd ?? false,
    hovered: _p.hovered ?? false,
    disabled: _p.disabled ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      borderRadius: 2,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -8,
      top: 0,
      width: 48,
      height: 32,
      backgroundColor: "rgb(245,245,245)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 999,
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "row",
      padding: "1px 1px 1px 1px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
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
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0
    }
  }, props.text1 ?? "22")));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 2,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -6,
      top: 0,
      width: 36,
      height: 24,
      backgroundColor: "rgb(245,245,245)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      padding: "1px 1px 1px 1px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
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
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "22")));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 8,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 30,
      height: 24,
      borderRadius: "99px 0px 0px 99px",
      backgroundColor: "rgb(230,247,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(24,144,255)",
      display: "flex",
      flexDirection: "row",
      padding: "1px 1px 1px 1px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "22")));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 2,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -6,
      top: 0,
      width: 30,
      height: 24,
      borderRadius: "0px 99px 99px 0px",
      backgroundColor: "rgb(230,247,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(24,144,255)",
      display: "flex",
      flexDirection: "row",
      padding: "1px 1px 1px 1px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "22")));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      borderRadius: 2,
      boxShadow: "inset 0 0 0 1px rgb(21,94,239)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -6,
      top: 0,
      width: 44,
      height: 32,
      backgroundColor: "rgb(230,247,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 999,
      boxShadow: "inset 0 0 0 1px rgb(24,144,255)",
      display: "flex",
      flexDirection: "row",
      padding: "1px 1px 1px 1px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
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
  }, props.text1 ?? "22")));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 2,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -6,
      top: 0,
      width: 36,
      height: 24,
      backgroundColor: "rgb(230,247,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      padding: "1px 1px 1px 1px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "22")));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 999,
      boxShadow: "inset 0 0 0 1px rgb(208,213,221)",
      display: "flex",
      flexDirection: "row",
      padding: "1px 1px 1px 1px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "22"));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      padding: "1px 1px 1px 1px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "1"));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      padding: "1px 1px 1px 1px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "1"));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      padding: "1px 1px 1px 1px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "23"));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 999,
      boxShadow: "inset 0 0 0 1px rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      padding: "1px 1px 1px 1px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "22"));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      padding: "1px 1px 1px 1px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "27"));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      overflow: "hidden",
      borderRadius: 999,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      padding: "1px 1px 1px 1px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
      color: "rgba(0,0,0,0.25)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "27"));
  const __impls = {
    // figma: In View=true, Today=true, Selected=false, ⬑ Range Start=false, ⬑ In Range=true, ⬑ Range End=false, Hovered=false, Disabl
    "inView=true|today=true|selected=false|rangeStart=false|inRange=true|rangeEnd=false|hovered=false|disabled=true": __body0,
    // figma: In View=true, Today=false, Selected=false, ⬑ Range Start=false, ⬑ In Range=true, ⬑ Range End=false, Hovered=false, Disab
    "inView=true|today=false|selected=false|rangeStart=false|inRange=true|rangeEnd=false|hovered=false|disabled=true": __body1,
    // figma: In View=true, Today=true, Selected=true, ⬑ Range Start=true, ⬑ In Range=true, ⬑ Range End=false, Hovered=false, Disabled
    "inView=true|today=true|selected=true|rangeStart=true|inRange=true|rangeEnd=false|hovered=false|disabled=false": __body2,
    // figma: In View=true, Today=true, Selected=true, ⬑ Range Start=false, ⬑ In Range=true, ⬑ Range End=true, Hovered=false, Disabled
    "inView=true|today=true|selected=true|rangeStart=false|inRange=true|rangeEnd=true|hovered=false|disabled=false": __body3,
    // figma: In View=true, Today=true, Selected=true, ⬑ Range Start=false, ⬑ In Range=true, ⬑ Range End=false, Hovered=false, Disable
    "inView=true|today=true|selected=true|rangeStart=false|inRange=true|rangeEnd=false|hovered=false|disabled=false": __body4,
    // figma: In View=true, Today=false, Selected=true, ⬑ Range Start=false, ⬑ In Range=true, ⬑ Range End=false, Hovered=false, Disabl
    "inView=true|today=false|selected=true|rangeStart=false|inRange=true|rangeEnd=false|hovered=false|disabled=false": __body5,
    // figma: In View=false, Today=true, Selected=false, ⬑ Range Start=false, ⬑ In Range=false, ⬑ Range End=false, Hovered=false, Disa
    "inView=false|today=true|selected=false|rangeStart=false|inRange=false|rangeEnd=false|hovered=false|disabled=false": __body6,
    // figma: In View=true, Today=false, Selected=false, ⬑ Range Start=false, ⬑ In Range=false, ⬑ Range End=false, Hovered=false, Disa
    "inView=true|today=false|selected=false|rangeStart=false|inRange=false|rangeEnd=false|hovered=false|disabled=false": __body7,
    // figma: In View=true, Today=false, Selected=false, ⬑ Range Start=false, ⬑ In Range=false, ⬑ Range End=false, Hovered=true, Disab
    "inView=true|today=false|selected=false|rangeStart=false|inRange=false|rangeEnd=false|hovered=true|disabled=false": __body8,
    // figma: In View=true, Today=false, Selected=true, ⬑ Range Start=false, ⬑ In Range=false, ⬑ Range End=false, Hovered=false, Disab
    "inView=true|today=false|selected=true|rangeStart=false|inRange=false|rangeEnd=false|hovered=false|disabled=false": __body9,
    // figma: In View=true, Today=true, Selected=false, ⬑ Range Start=false, ⬑ In Range=false, ⬑ Range End=false, Hovered=false, Disab
    "inView=true|today=true|selected=false|rangeStart=false|inRange=false|rangeEnd=false|hovered=false|disabled=false": __body10,
    // figma: In View=true, Today=true, Selected=false, ⬑ Range Start=false, ⬑ In Range=false, ⬑ Range End=false, Hovered=true, Disabl
    "inView=true|today=true|selected=false|rangeStart=false|inRange=false|rangeEnd=false|hovered=true|disabled=false": __body10,
    // figma: In View=false, Today=false, Selected=false, ⬑ Range Start=false, ⬑ In Range=false, ⬑ Range End=false, Hovered=false, Dis
    "inView=false|today=false|selected=false|rangeStart=false|inRange=false|rangeEnd=false|hovered=false|disabled=false": __body11,
    // figma: In View=false, Today=false, Selected=false, ⬑ Range Start=false, ⬑ In Range=false, ⬑ Range End=false, Hovered=true, Disa
    "inView=false|today=false|selected=false|rangeStart=false|inRange=false|rangeEnd=false|hovered=true|disabled=false": __body12
  };
  return (__impls[__vkey_DateDayItem(props)] ?? __body11)();
}

// figma node: 49:24140 Date/MonthYear item (8 variants)
var __venc_DateMonthYearItem = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_DateMonthYearItem = p => "selected=" + __venc_DateMonthYearItem(p.selected) + '|' + "hovered=" + __venc_DateMonthYearItem(p.hovered) + '|' + "single=" + __venc_DateMonthYearItem(p.single) + '|' + "type=" + __venc_DateMonthYearItem(p.type);

// Globals for scripts loaded after this file.
window.Button3 = Button3;
window.DateDayItem = DateDayItem;
