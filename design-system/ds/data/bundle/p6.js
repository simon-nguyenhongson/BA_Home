// Components bundle — part 6 of 7. Load the parts in order as plain
// classic <script> tags: they share one global scope, so later parts can call
// declarations from earlier ones exactly as in the original single-file bundle.

function Toggle(_p = {}) {
  const props = {
    ..._p,
    pressed: _p.pressed ?? false,
    size: _p.size ?? "md",
    text: _p.text ?? false,
    state: _p.state ?? "default",
    tooltip: _p.tooltip ?? true,
    subText: _p.subText ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(0,64,193)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
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
      width: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 287,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 24,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(0,64,193)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
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
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Remember me"), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(71,84,103)",
      flexShrink: 0
    }
  }, props.text2 ?? "Save my login details for next time.")));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 287,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 24,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(0,64,193)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
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
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "Remember me"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIconFalseFalseTop, null))), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(102,112,133)",
      flexShrink: 0
    }
  }, props.text2 ?? "Save my login details for next time.")));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 20,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(0,64,193)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
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
      width: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 242,
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 20,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(0,64,193)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Remember me"), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0
    }
  }, props.text2 ?? "Save my login details for next time.")));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 242,
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 20,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(0,64,193)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }))), /*#__PURE__*/React.createElement("div", {
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
      gap: 4,
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
  }, props.text1 ?? "Remember me"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIconFalseFalseTop, null))), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(102,112,133)",
      flexShrink: 0
    }
  }, props.text2 ?? "Save my login details for next time.")));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
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
      width: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(21,94,239)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.08), 0px 0px 0px 4px rgb(209,224,255)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
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
      width: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 287,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 24,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
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
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Remember me"), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(71,84,103)",
      flexShrink: 0
    }
  }, props.text2 ?? "Save my login details for next time.")));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 287,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 24,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
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
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "Remember me"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIconFalseFalseTop, null))), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(102,112,133)",
      flexShrink: 0
    }
  }, props.text2 ?? "Save my login details for next time.")));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 20,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
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
      width: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 20,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(21,94,239)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.08), 0px 0px 0px 4px rgb(209,224,255)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
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
      width: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 242,
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 20,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Remember me"), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0
    }
  }, props.text2 ?? "Save my login details for next time.")));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 242,
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 20,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }))), /*#__PURE__*/React.createElement("div", {
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
      gap: 4,
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
  }, props.text1 ?? "Remember me"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIconFalseFalseTop, null))), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(102,112,133)",
      flexShrink: 0
    }
  }, props.text2 ?? "Save my login details for next time.")));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      opacity: 0.3,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(242,244,247)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
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
      width: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 287,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 24,
      opacity: 0.3,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(242,244,247)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.7,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
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
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Remember me"), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(71,84,103)",
      flexShrink: 0
    }
  }, props.text2 ?? "Save my login details for next time.")));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 287,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 24,
      opacity: 0.3,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(242,244,247)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.7,
      display: "flex",
      flexDirection: "column",
      gap: 2,
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
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "Remember me"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIconFalseFalseTop, null))), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(102,112,133)",
      flexShrink: 0
    }
  }, props.text2 ?? "Save my login details for next time.")));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      opacity: 0.3,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 20,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(242,244,247)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
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
      width: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 242,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.3,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 20,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(242,244,247)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.7,
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Remember me"), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0
    }
  }, props.text2 ?? "Save my login details for next time.")));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 242,
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 20,
      opacity: 0.3,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(242,244,247)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.7,
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
      gap: 4,
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
  }, props.text1 ?? "Remember me"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIconFalseFalseTop, null))), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(102,112,133)",
      flexShrink: 0
    }
  }, props.text2 ?? "Save my login details for next time.")));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 287,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 24,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
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
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Remember me"), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(71,84,103)",
      flexShrink: 0
    }
  }, props.text2 ?? "Save my login details for next time.")));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 287,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 24,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
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
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "Remember me"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIconFalseFalseTop, null))), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(102,112,133)",
      flexShrink: 0
    }
  }, props.text2 ?? "Save my login details for next time.")));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 20,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 242,
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 20,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Remember me"), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0
    }
  }, props.text2 ?? "Save my login details for next time.")));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 242,
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 20,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }))), /*#__PURE__*/React.createElement("div", {
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
      gap: 4,
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
  }, props.text1 ?? "Remember me"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIconFalseFalseTop, null))), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(102,112,133)",
      flexShrink: 0
    }
  }, props.text2 ?? "Save my login details for next time.")));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(242,244,247)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(242,244,247)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.08), 0px 0px 0px 4px rgb(209,224,255)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 287,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 24,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(242,244,247)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
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
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Remember me"), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(71,84,103)",
      flexShrink: 0
    }
  }, props.text2 ?? "Save my login details for next time.")));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 287,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 24,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(242,244,247)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 2,
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
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "Remember me"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIconFalseFalseTop, null))), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(102,112,133)",
      flexShrink: 0
    }
  }, props.text2 ?? "Save my login details for next time.")));
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 20,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(242,244,247)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })));
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 20,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(242,244,247)",
      boxShadow: "0px 1px 2px 0px rgba(16,24,40,0.08), 0px 0px 0px 4px rgb(209,224,255)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })));
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 242,
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 20,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(242,244,247)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Remember me"), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0
    }
  }, props.text2 ?? "Save my login details for next time.")));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 242,
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 20,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(242,244,247)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }))), /*#__PURE__*/React.createElement("div", {
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
      gap: 4,
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
  }, props.text1 ?? "Remember me"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIconFalseFalseTop, null))), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(102,112,133)",
      flexShrink: 0
    }
  }, props.text2 ?? "Save my login details for next time.")));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(242,244,247)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 287,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 24,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(242,244,247)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.7,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      alignItems: "flex-start",
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
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Remember me"), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(71,84,103)",
      flexShrink: 0
    }
  }, props.text2 ?? "Save my login details for next time.")));
  const __body36 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 287,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 44,
      height: 24,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(242,244,247)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.7,
      display: "flex",
      flexDirection: "column",
      gap: 2,
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
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "Remember me"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIconFalseFalseTop, null))), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(102,112,133)",
      flexShrink: 0
    }
  }, props.text2 ?? "Save my login details for next time.")));
  const __body37 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 20,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(249,250,251)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  })));
  const __body38 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 242,
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 20,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(249,250,251)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.7,
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Remember me"), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0
    }
  }, props.text2 ?? "Save my login details for next time.")));
  const __body39 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 242,
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 20,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(249,250,251)",
      display: "flex",
      flexDirection: "row",
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "0px 1px 3px 0px rgba(16,24,40,0.1), 0px 1px 2px 0px rgba(16,24,40,0.06)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: 0.7,
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
      gap: 4,
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
  }, props.text1 ?? "Remember me"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIconFalseFalseTop, null))), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(102,112,133)",
      flexShrink: 0
    }
  }, props.text2 ?? "Save my login details for next time.")));
  const __impls = {
    // figma: Pressed=True, Size=md, Text=False, State=Hover, Tooltip=True
    "pressed=true|size=md|text=false|state=hover|tooltip=true": __body0,
    // figma: Pressed=True, Size=md, Text=True, State=Hover, Tooltip=False
    "pressed=true|size=md|text=true|state=hover|tooltip=false": __body1,
    // figma: Pressed=True, Size=md, Text=True, State=Hover, Tooltip=True
    "pressed=true|size=md|text=true|state=hover|tooltip=true": __body2,
    // figma: Pressed=True, Size=sm, Text=False, State=Hover, Tooltip=True
    "pressed=true|size=sm|text=false|state=hover|tooltip=true": __body3,
    // figma: Pressed=True, Size=sm, Text=True, State=Hover, Tooltip=False
    "pressed=true|size=sm|text=true|state=hover|tooltip=false": __body4,
    // figma: Pressed=True, Size=sm, Text=True, State=Hover, Tooltip=True
    "pressed=true|size=sm|text=true|state=hover|tooltip=true": __body5,
    // figma: Pressed=True, Size=md, Text=False, State=Default, Tooltip=True
    "pressed=true|size=md|text=false|state=default|tooltip=true": __body6,
    // figma: Pressed=True, Size=md, Text=False, State=Focused, Tooltip=True
    "pressed=true|size=md|text=false|state=focused|tooltip=true": __body7,
    // figma: Pressed=True, Size=md, Text=True, State=Default, Tooltip=False
    "pressed=true|size=md|text=true|state=default|tooltip=false": __body8,
    // figma: Pressed=True, Size=md, Text=True, State=Default, Tooltip=True
    "pressed=true|size=md|text=true|state=default|tooltip=true": __body9,
    // figma: Pressed=True, Size=sm, Text=False, State=Default, Tooltip=True
    "pressed=true|size=sm|text=false|state=default|tooltip=true": __body10,
    // figma: Pressed=True, Size=sm, Text=False, State=Focused, Tooltip=True
    "pressed=true|size=sm|text=false|state=focused|tooltip=true": __body11,
    // figma: Pressed=True, Size=sm, Text=True, State=Default, Tooltip=False
    "pressed=true|size=sm|text=true|state=default|tooltip=false": __body12,
    // figma: Pressed=True, Size=sm, Text=True, State=Default, Tooltip=True
    "pressed=true|size=sm|text=true|state=default|tooltip=true": __body13,
    // figma: Pressed=True, Size=md, Text=False, State=Disabled, Tooltip=True
    "pressed=true|size=md|text=false|state=disabled|tooltip=true": __body14,
    // figma: Pressed=True, Size=md, Text=True, State=Disabled, Tooltip=False
    "pressed=true|size=md|text=true|state=disabled|tooltip=false": __body15,
    // figma: Pressed=True, Size=md, Text=True, State=Disabled, Tooltip=True
    "pressed=true|size=md|text=true|state=disabled|tooltip=true": __body16,
    // figma: Pressed=True, Size=sm, Text=False, State=Disabled, Tooltip=True
    "pressed=true|size=sm|text=false|state=disabled|tooltip=true": __body17,
    // figma: Pressed=True, Size=sm, Text=True, State=Disabled, Tooltip=False
    "pressed=true|size=sm|text=true|state=disabled|tooltip=false": __body18,
    // figma: Pressed=True, Size=sm, Text=True, State=Disabled, Tooltip=True
    "pressed=true|size=sm|text=true|state=disabled|tooltip=true": __body19,
    // figma: Pressed=False, Size=md, Text=False, State=Hover, Tooltip=True
    "pressed=false|size=md|text=false|state=hover|tooltip=true": __body20,
    // figma: Pressed=False, Size=md, Text=True, State=Hover, Tooltip=False
    "pressed=false|size=md|text=true|state=hover|tooltip=false": __body21,
    // figma: Pressed=False, Size=md, Text=True, State=Hover, Tooltip=True
    "pressed=false|size=md|text=true|state=hover|tooltip=true": __body22,
    // figma: Pressed=False, Size=sm, Text=False, State=Hover, Tooltip=True
    "pressed=false|size=sm|text=false|state=hover|tooltip=true": __body23,
    // figma: Pressed=False, Size=sm, Text=True, State=Hover, Tooltip=False
    "pressed=false|size=sm|text=true|state=hover|tooltip=false": __body24,
    // figma: Pressed=False, Size=sm, Text=True, State=Hover, Tooltip=True
    "pressed=false|size=sm|text=true|state=hover|tooltip=true": __body25,
    // figma: Pressed=False, Size=md, Text=False, State=Default, Tooltip=True
    "pressed=false|size=md|text=false|state=default|tooltip=true": __body26,
    // figma: Pressed=False, Size=md, Text=False, State=Focused, Tooltip=True
    "pressed=false|size=md|text=false|state=focused|tooltip=true": __body27,
    // figma: Pressed=False, Size=md, Text=True, State=Default, Tooltip=False
    "pressed=false|size=md|text=true|state=default|tooltip=false": __body28,
    // figma: Pressed=False, Size=md, Text=True, State=Default, Tooltip=True
    "pressed=false|size=md|text=true|state=default|tooltip=true": __body29,
    // figma: Pressed=False, Size=sm, Text=False, State=Default, Tooltip=True
    "pressed=false|size=sm|text=false|state=default|tooltip=true": __body30,
    // figma: Pressed=False, Size=sm, Text=False, State=Focused, Tooltip=True
    "pressed=false|size=sm|text=false|state=focused|tooltip=true": __body31,
    // figma: Pressed=False, Size=sm, Text=True, State=Default, Tooltip=False
    "pressed=false|size=sm|text=true|state=default|tooltip=false": __body32,
    // figma: Pressed=False, Size=sm, Text=True, State=Default, Tooltip=True
    "pressed=false|size=sm|text=true|state=default|tooltip=true": __body33,
    // figma: Pressed=False, Size=md, Text=False, State=Disabled, Tooltip=True
    "pressed=false|size=md|text=false|state=disabled|tooltip=true": __body34,
    // figma: Pressed=False, Size=md, Text=True, State=Disabled, Tooltip=False
    "pressed=false|size=md|text=true|state=disabled|tooltip=false": __body35,
    // figma: Pressed=False, Size=md, Text=True, State=Disabled, Tooltip=True
    "pressed=false|size=md|text=true|state=disabled|tooltip=true": __body36,
    // figma: Pressed=False, Size=sm, Text=False, State=Disabled, Tooltip=True
    "pressed=false|size=sm|text=false|state=disabled|tooltip=true": __body37,
    // figma: Pressed=False, Size=sm, Text=True, State=Disabled, Tooltip=False
    "pressed=false|size=sm|text=true|state=disabled|tooltip=false": __body38,
    // figma: Pressed=False, Size=sm, Text=True, State=Disabled, Tooltip=True
    "pressed=false|size=sm|text=true|state=disabled|tooltip=true": __body39
  };
  return (__impls[__vkey_Toggle(props)] ?? __body26)();
}

// figma node: 51:19159 Cell Body Normal (192 variants)
var __venc_CellBodyNormal = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_CellBodyNormal = p => "state=" + __venc_CellBodyNormal(p.state) + '|' + "type=" + __venc_CellBodyNormal(p.type) + '|' + "compressed=" + __venc_CellBodyNormal(p.compressed);

function CellBodyNormal(_p = {}) {
  const props = {
    ..._p,
    state: _p.state ?? "default",
    type: _p.type ?? "Action button",
    compressed: _p.compressed ?? false,
    icon2: _p.icon2 ?? true,
    more: _p.more ?? true,
    drag: _p.drag ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(CheckboxIcon, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    },
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(CheckboxIcon, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IconDraggable, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IconDraggable, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(CheckboxIcon, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IconDraggable, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IconDraggable, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(CheckboxIcon, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    },
    checked: true,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(CheckboxIcon, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    checked: true,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IconDraggable, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IconDraggable, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    leadIcon: false,
    rightIcon: false,
    size: "h24px",
    hierarchy: "ghost gray",
    icon: "only",
    destructive: false,
    state: "default"
  }), props.icon2 && /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    leadIcon: false,
    rightIcon: false,
    size: "h24px",
    hierarchy: "ghost gray",
    icon: "only",
    destructive: false,
    state: "default"
  }), props.more && /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    changeRight: /*#__PURE__*/React.createElement(IconOverflowMenuHorizontal, null),
    size: "h24px",
    hierarchy: "ghost gray",
    icon: "only",
    destructive: false,
    state: "default"
  }));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    leadIcon: false,
    rightIcon: false,
    size: "h24px",
    hierarchy: "ghost gray",
    icon: "only",
    destructive: false,
    state: "default"
  }), props.icon2 && /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    leadIcon: false,
    rightIcon: false,
    size: "h24px",
    hierarchy: "ghost gray",
    icon: "only",
    destructive: false,
    state: "default"
  }), props.more && /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    changeRight: /*#__PURE__*/React.createElement(IconOverflowMenuHorizontal, null),
    size: "h24px",
    hierarchy: "ghost gray",
    icon: "only",
    destructive: false,
    state: "default"
  }));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    leadIcon: false,
    rightIcon: false,
    changeRight: /*#__PURE__*/React.createElement(IconSave, null),
    size: "h24px",
    hierarchy: "ghost color",
    icon: "only",
    destructive: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    leadIcon: false,
    rightIcon: false,
    changeRight: /*#__PURE__*/React.createElement(IconCloseOutline, null),
    size: "h24px",
    hierarchy: "ghost color",
    icon: "only",
    destructive: true,
    state: "default"
  }));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    leadIcon: false,
    rightIcon: false,
    changeRight: /*#__PURE__*/React.createElement(IconSave, null),
    size: "h24px",
    hierarchy: "ghost color",
    icon: "only",
    destructive: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    leadIcon: false,
    rightIcon: false,
    changeRight: /*#__PURE__*/React.createElement(IconCloseOutline, null),
    size: "h24px",
    hierarchy: "ghost color",
    icon: "only",
    destructive: true,
    state: "default"
  }));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    leadIcon: false,
    rightIcon: false,
    size: "h24px",
    hierarchy: "ghost gray",
    icon: "only",
    destructive: false,
    state: "default"
  }), props.icon2 && /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    leadIcon: false,
    rightIcon: false,
    size: "h24px",
    hierarchy: "ghost gray",
    icon: "only",
    destructive: false,
    state: "default"
  }), props.more && /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    changeRight: /*#__PURE__*/React.createElement(IconOverflowMenuHorizontal, null),
    size: "h24px",
    hierarchy: "ghost gray",
    icon: "only",
    destructive: false,
    state: "default"
  }));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    leadIcon: false,
    rightIcon: false,
    changeRight: /*#__PURE__*/React.createElement(IconSave, null),
    size: "h24px",
    hierarchy: "ghost color",
    icon: "only",
    destructive: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    leadIcon: false,
    rightIcon: false,
    changeRight: /*#__PURE__*/React.createElement(IconCloseOutline, null),
    size: "h24px",
    hierarchy: "ghost color",
    icon: "only",
    destructive: true,
    state: "default"
  }));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    leadIcon: false,
    rightIcon: false,
    changeRight: /*#__PURE__*/React.createElement(IconSave, null),
    size: "h24px",
    hierarchy: "ghost color",
    icon: "only",
    destructive: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    leadIcon: false,
    rightIcon: false,
    changeRight: /*#__PURE__*/React.createElement(IconCloseOutline, null),
    size: "h24px",
    hierarchy: "ghost color",
    icon: "only",
    destructive: true,
    state: "default"
  }));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    leadIcon: false,
    rightIcon: false,
    size: "h24px",
    hierarchy: "ghost gray",
    icon: "only",
    destructive: false,
    state: "default"
  }), props.icon2 && /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    leadIcon: false,
    rightIcon: false,
    size: "h24px",
    hierarchy: "ghost gray",
    icon: "only",
    destructive: false,
    state: "default"
  }), props.more && /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    changeRight: /*#__PURE__*/React.createElement(IconOverflowMenuHorizontal, null),
    size: "h24px",
    hierarchy: "ghost gray",
    icon: "only",
    destructive: false,
    state: "default"
  }));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    leadIcon: false,
    rightIcon: false,
    changeRight: /*#__PURE__*/React.createElement(IconSave, null),
    size: "h24px",
    hierarchy: "ghost color",
    icon: "only",
    destructive: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    leadIcon: false,
    rightIcon: false,
    changeRight: /*#__PURE__*/React.createElement(IconCloseOutline, null),
    size: "h24px",
    hierarchy: "ghost color",
    icon: "only",
    destructive: true,
    state: "default"
  }));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    leadIcon: false,
    rightIcon: false,
    changeRight: /*#__PURE__*/React.createElement(IconSave, null),
    size: "h24px",
    hierarchy: "ghost color",
    icon: "only",
    destructive: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    },
    leadIcon: false,
    rightIcon: false,
    changeRight: /*#__PURE__*/React.createElement(IconCloseOutline, null),
    size: "h24px",
    hierarchy: "ghost color",
    icon: "only",
    destructive: true,
    state: "default"
  }));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Toggle, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    pressed: false,
    size: "sm",
    text: false,
    state: "default",
    tooltip: true
  }));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IconCheckmark, {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IconCheckmark, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Toggle, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    pressed: false,
    size: "sm",
    text: false,
    state: "default",
    tooltip: true
  }));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IconCheckmark, {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IconCheckmark, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Toggle, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    pressed: false,
    size: "sm",
    text: false,
    state: "default",
    tooltip: true
  }));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IconCheckmark, {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IconCheckmark, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }));
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Toggle, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    pressed: false,
    size: "sm",
    text: false,
    state: "default",
    tooltip: true
  }));
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
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
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")));
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
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
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")), /*#__PURE__*/React.createElement(IconChevronDown, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 181,
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Badge2, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    size: "sm",
    icon: "x close",
    color: "gray",
    outline: false
  }), /*#__PURE__*/React.createElement(Badge2, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    size: "sm",
    icon: "x close",
    color: "gray",
    outline: false
  }))), /*#__PURE__*/React.createElement(IconChevronDown, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(CheckboxIcon, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    },
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
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
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IconChevronRight, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }), props.drag && /*#__PURE__*/React.createElement(IconDraggable, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement(CheckboxIcon, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    },
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
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
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")));
  const __body36 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
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
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
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
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")));
  const __body37 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(245,251,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
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
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "right",
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "123")));
  const __body38 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(245,251,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  });
  const __body39 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(245,251,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
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
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")));
  const __body40 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(224,242,254)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Label 1, Label 2")));
  const __body41 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(245,251,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")));
  const __body42 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(224,242,254)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")));
  const __body43 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(245,251,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
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
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "dd/mm/yyyy")));
  const __body44 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(245,251,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "dd/mm/yyyy")));
  const __body45 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(245,248,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
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
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")));
  const __body46 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(255,251,250)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  });
  const __body47 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(255,251,250)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "right",
      lineHeight: "20px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "123")));
  const __body48 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(245,248,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
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
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
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
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text|")));
  const __body49 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
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
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")));
  const __body50 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
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
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")), /*#__PURE__*/React.createElement(IconChevronDown, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }));
  const __body51 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 180,
      height: 30,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 22,
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
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Badge2, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    size: "sm",
    icon: "x close",
    color: "gray",
    outline: false
  }), /*#__PURE__*/React.createElement(Badge2, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    size: "sm",
    icon: "x close",
    color: "gray",
    outline: false
  })))), /*#__PURE__*/React.createElement(IconChevronDown, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }));
  const __body52 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(CheckboxIcon, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
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
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")));
  const __body53 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IconChevronRight, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }), props.drag && /*#__PURE__*/React.createElement(IconDraggable, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }), /*#__PURE__*/React.createElement(CheckboxIcon, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
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
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")));
  const __body54 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
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
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")));
  const __body55 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(245,251,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "right",
      lineHeight: "18px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "123")));
  const __body56 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(245,251,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  });
  const __body57 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(245,251,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
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
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")));
  const __body58 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(224,242,254)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      lineHeight: "18px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Lable 1, Label 2")));
  const __body59 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(245,251,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")));
  const __body60 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(224,242,254)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Textc")));
  const __body61 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(245,251,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
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
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "dd/mm/yyyy")));
  const __body62 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(245,251,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "dd/mm/yyyy")));
  const __body63 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(245,248,255)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
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
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")));
  const __body64 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(255,251,250)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  });
  const __body65 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(255,251,250)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "right",
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "123")));
  const __body66 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(245,248,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
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
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text|")));
  const __body67 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
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
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
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
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Lorem ipsum i ...")));
  const __body68 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
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
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Lorem ipsum i ...")));
  const __body69 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
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
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
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
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, props.text1 ?? "Text"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(HelpIconFalseFalseTop, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })))));
  const __body70 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
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
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, props.text1 ?? "Text"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(HelpIconFalseFalseTop, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })))));
  const __body71 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
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
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, props.text1 ?? "Text"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(HelpIconFalseFalseTop, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })))));
  const __body72 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
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
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, props.text1 ?? "Text"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(HelpIconFalseFalseTop, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })))));
  const __body73 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IconChevronRight, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
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
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")));
  const __body74 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IconChevronRight, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Text"));
  const __body75 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IconChevronRight, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, props.text1 ?? "Text"));
  const __body76 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IconChevronRight, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Text"));
  const __body77 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IconChevronRight, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Text"));
  const __body78 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Badge2, {
    style: {
      position: "relative",
      width: 64,
      flexShrink: 0
    },
    text1: "Status",
    size: "sm",
    icon: "dot",
    color: "gray",
    outline: false
  }));
  const __body79 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Badge2, {
    style: {
      position: "relative",
      width: 64,
      flexShrink: 0
    },
    text1: "Status",
    size: "sm",
    icon: "dot",
    color: "gray",
    outline: false
  }));
  const __body80 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  });
  const __body81 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  });
  const __body82 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Processbar, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    progress: "10%",
    label: "right",
    muiti: "no"
  }));
  const __body83 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Processbar, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    progress: "10%",
    label: "right",
    muiti: "no"
  }));
  const __body84 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(SkeletonTitle, {
    style: {
      position: "relative",
      height: 4,
      flexGrow: 1,
      width: "auto"
    },
    size: "xxxs"
  }), /*#__PURE__*/React.createElement(SkeletonTitle, {
    style: {
      position: "relative",
      height: 4,
      flexGrow: 1,
      width: "auto"
    },
    size: "xxxs"
  }));
  const __body85 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(SkeletonTitle, {
    style: {
      position: "relative",
      height: 4,
      flexGrow: 1,
      width: "auto"
    },
    size: "xxxs"
  }), /*#__PURE__*/React.createElement(SkeletonTitle, {
    style: {
      position: "relative",
      height: 4,
      flexGrow: 1,
      width: "auto"
    },
    size: "xxxs"
  }));
  const __body86 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(SkeletonTitle, {
    style: {
      position: "relative",
      height: 4,
      flexGrow: 1,
      width: "auto"
    },
    size: "xxxs"
  }), /*#__PURE__*/React.createElement(SkeletonTitle, {
    style: {
      position: "relative",
      height: 4,
      flexGrow: 1,
      width: "auto"
    },
    size: "xxxs"
  }));
  const __body87 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Badge2, {
    style: {
      position: "relative",
      width: 64,
      flexShrink: 0
    },
    text1: "Status",
    size: "sm",
    icon: "dot",
    color: "gray",
    outline: false
  }));
  const __body88 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  });
  const __body89 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Processbar, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    progress: "10%",
    label: "right",
    muiti: "no"
  }));
  const __body90 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Badge2, {
    style: {
      position: "relative",
      width: 64,
      flexShrink: 0
    },
    text1: "Status",
    size: "sm",
    icon: "dot",
    color: "gray",
    outline: false
  }));
  const __body91 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  });
  const __body92 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Processbar, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    progress: "10%",
    label: "right",
    muiti: "no"
  }));
  const __body93 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(CheckboxIcon, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    },
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
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
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")));
  const __body94 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IconChevronRight, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }), props.drag && /*#__PURE__*/React.createElement(IconDraggable, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement(CheckboxIcon, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    },
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
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
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")));
  const __body95 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
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
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")));
  const __body96 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(CheckboxIcon, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
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
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")));
  const __body97 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IconChevronRight, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }), props.drag && /*#__PURE__*/React.createElement(IconDraggable, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }), /*#__PURE__*/React.createElement(CheckboxIcon, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
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
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")));
  const __body98 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
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
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
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
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Lorem ipsum i ...")));
  const __body99 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
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
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Lorem ipsum i ...")));
  const __body100 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(CheckboxIcon, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    },
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
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
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")));
  const __body101 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IconChevronRight, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }), props.drag && /*#__PURE__*/React.createElement(IconDraggable, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement(CheckboxIcon, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    },
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
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
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")));
  const __body102 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
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
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")));
  const __body103 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(CheckboxIcon, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
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
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")));
  const __body104 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(IconChevronRight, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }), props.drag && /*#__PURE__*/React.createElement(IconDraggable, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }), /*#__PURE__*/React.createElement(CheckboxIcon, {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
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
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Text")));
  const __body105 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
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
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
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
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Lorem ipsum i ...")));
  const __body106 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
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
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Lorem ipsum i ...")));
  const __body107 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px 0px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "right",
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "123.456")));
  const __body108 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px 0px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(MetricChange, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    trend: "up"
  }));
  const __body109 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px 0px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "right",
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "0,1")));
  const __body110 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "right",
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "123.456")));
  const __body111 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "right",
      lineHeight: "18px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "123.456")));
  const __body112 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(MetricChange, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    trend: "up"
  }));
  const __body113 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "right",
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "0,1")));
  const __body114 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px 0px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "right",
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "123.456")));
  const __body115 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px 0px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(MetricChange, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    trend: "up"
  }));
  const __body116 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px 0px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "right",
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "0,1")));
  const __body117 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "right",
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "123.456")));
  const __body118 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "right",
      lineHeight: "18px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "123.456")));
  const __body119 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(MetricChange, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    trend: "up"
  }));
  const __body120 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "right",
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "0,1")));
  const __body121 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px 0px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "right",
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "123.456")));
  const __body122 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px 0px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(MetricChange, {
    style: {
      position: "relative",
      flexShrink: 0
    },
    trend: "up"
  }));
  const __body123 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px 0px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "right",
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "0,1")));
  const __body124 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "right",
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "123.456")));
  const __body125 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "right",
      lineHeight: "18px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "123.456")));
  const __body126 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(MetricChange, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    trend: "up"
  }));
  const __body127 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 30,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
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
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "right",
      lineHeight: "20px",
      color: "rgb(16,24,40)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "0,1")));
  const __body128 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    type: "no label",
    destructive: false,
    state: "default",
    addon: "default"
  }));
  const __body129 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(ComboboxSingleSelect, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    text1: "Select ",
    type: "no label",
    destructive: false,
    state: "default"
  }));
  const __body130 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(InputTextToLabel, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    text1: "Label",
    type: "no label",
    destructive: false,
    state: "default"
  }));
  const __body131 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(NumberInput, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    text1: "Number",
    type: "no label",
    state: "default",
    destructive: false
  }));
  const __body132 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 60,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    text2: "error message.",
    type: "no label",
    destructive: true,
    state: "default",
    addon: "default"
  }));
  const __body133 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 160,
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(DateDatePicker, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    text1: "Chọn",
    ranged: false,
    label: false,
    state: "placeholder",
    destructive: false
  }));
  const __body134 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 160,
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(DateDatePicker, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    text1: "Chọn",
    icon1: /*#__PURE__*/React.createElement(IconTime, {
      style: {
        width: "100%",
        height: "100%"
      }
    }),
    ranged: false,
    label: false,
    state: "placeholder",
    destructive: false
  }));
  const __body135 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(ComboboxSingleSelect, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    text1: "Select ",
    type: "no label",
    destructive: false,
    state: "default"
  }));
  const __body136 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(InputTextToLabel, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    text1: "Label",
    type: "no label",
    destructive: false,
    state: "default"
  }));
  const __body137 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(NumberInput, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    text1: "Number",
    type: "no label",
    state: "default",
    destructive: false
  }));
  const __body138 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 60,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    text2: "error message.",
    type: "no label",
    destructive: true,
    state: "default",
    addon: "default"
  }));
  const __body139 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 160,
      height: 40,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
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
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IconCalendar, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1
    }
  }, "Ch\u1ECDn"))));
  const __body140 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 160,
      height: 40,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
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
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IconTime, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1
    }
  }, "Ch\u1ECDn"))));
  const __body141 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(ComboboxSingleSelect, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    text1: "Select ",
    type: "no label",
    destructive: false,
    state: "default"
  }));
  const __body142 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(InputTextToLabel, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    text1: "Label   ",
    type: "no label",
    destructive: false,
    state: "default"
  }));
  const __body143 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 40,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(NumberInput, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    text1: "Number",
    type: "no label",
    state: "default",
    destructive: false
  }));
  const __body144 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 140,
      height: 60,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    text2: "error message.",
    type: "no label",
    destructive: true,
    state: "default",
    addon: "default"
  }));
  const __body145 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 160,
      height: 40,
      backgroundColor: "rgb(239,244,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
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
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IconCalendar, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1
    }
  }, "Ch\u1ECDn"))));
  const __body146 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 160,
      height: 40,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
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
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IconTime, {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(152,162,179)",
      flexGrow: 1
    }
  }, "Ch\u1ECDn"))));
  const __body147 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-502dc04e1538b2bd",
    style: {
      position: "relative",
      width: 28,
      height: 28,
      borderRadius: 8,
      flexShrink: 0
    }
  }));
  const __body148 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-502dc04e1538b2bd",
    style: {
      position: "relative",
      width: 24,
      height: 24,
      borderRadius: 6.857142925262451,
      flexShrink: 0
    }
  }));
  const __body149 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-502dc04e1538b2bd",
    style: {
      position: "relative",
      width: 24,
      height: 24,
      borderRadius: 6.857142925262451,
      flexShrink: 0
    }
  }));
  const __body150 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-502dc04e1538b2bd",
    style: {
      position: "relative",
      width: 24,
      height: 24,
      borderRadius: 6.857142925262451,
      flexShrink: 0
    }
  }));
  const __body151 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 12px 0px 12px",
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
      width: 28,
      height: 28,
      borderRadius: 8,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement(IconImage, {
    style: {
      position: "absolute",
      left: 18,
      top: 12,
      width: 16,
      height: 16
    }
  }));
  const __body152 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
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
      width: 24,
      height: 24,
      borderRadius: 6.857142925262451,
      backgroundColor: "rgb(249,250,251)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18,
      top: 9,
      width: 12,
      height: 12
    }
  }, /*#__PURE__*/React.createElement(IconImage, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body153 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 12px 0px 12px",
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
      width: 28,
      height: 28,
      borderRadius: 8,
      backgroundColor: "rgb(249,250,251)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement(IconImage, {
    style: {
      position: "absolute",
      left: 18,
      top: 12,
      width: 16,
      height: 16
    }
  }));
  const __body154 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
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
      width: 24,
      height: 24,
      borderRadius: 6.857142925262451,
      backgroundColor: "rgb(249,250,251)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18,
      top: 9,
      width: 12,
      height: 12
    }
  }, /*#__PURE__*/React.createElement(IconImage, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body155 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(242,244,247)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "6px 12px 6px 12px",
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
      width: 24,
      height: 24,
      borderRadius: 6.857142925262451,
      backgroundColor: "rgb(249,250,251)",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18,
      top: 9,
      width: 12,
      height: 12
    }
  }, /*#__PURE__*/React.createElement(IconImage, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body156 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 359,
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Processbar, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    progress: "100%",
    label: "false",
    muiti: "\byes"
  }), /*#__PURE__*/React.createElement(Processbar, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    progress: "100%",
    label: "false",
    muiti: "\byes"
  }));
  const __body157 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Color, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    prop: "1"
  }), /*#__PURE__*/React.createElement(Color, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    prop: "1"
  }));
  const __impls = {
    // figma: State=Default, Type=Checkbox, Compressed=False
    "state=default|type=Checkbox|compressed=false": __body0,
    // figma: State=Default, Type=Checkbox (AG), Compressed=False
    "state=default|type=Checkbox (AG)|compressed=false": __body0,
    // figma: State=Default, Type=Checkbox, Compressed=True
    "state=default|type=Checkbox|compressed=true": __body1,
    // figma: State=Default, Type=Checkbox (AG), Compressed=True
    "state=default|type=Checkbox (AG)|compressed=true": __body1,
    // figma: State=Default, Type=Drag, Compressed=False
    "state=default|type=Drag|compressed=false": __body2,
    // figma: State=Default, Type=Drag, Compressed=True
    "state=default|type=Drag|compressed=true": __body3,
    // figma: State=Hover, Type=Checkbox, Compressed=False
    "state=hover|type=Checkbox|compressed=false": __body0,
    // figma: State=Hover, Type=Checkbox, Compressed=True
    "state=hover|type=Checkbox|compressed=true": __body4,
    // figma: State=Hover, Type=Drag, Compressed=False
    "state=hover|type=Drag|compressed=false": __body5,
    // figma: State=Hover, Type=Drag, Compressed=True
    "state=hover|type=Drag|compressed=true": __body6,
    // figma: State=Checked, Type=Checkbox, Compressed=False
    "state=checked|type=Checkbox|compressed=false": __body7,
    // figma: State=Checked, Type=Checkbox, Compressed=True
    "state=checked|type=Checkbox|compressed=true": __body8,
    // figma: State=Checked, Type=Drag, Compressed=False
    "state=checked|type=Drag|compressed=false": __body9,
    // figma: State=Checked, Type=Drag, Compressed=True
    "state=checked|type=Drag|compressed=true": __body10,
    // figma: State=Default, Type=Action button, Compressed=False
    "state=default|type=Action button|compressed=false": __body11,
    // figma: State=Default, Type=Action button, Compressed=True
    "state=default|type=Action button|compressed=true": __body12,
    // figma: State=Default, Type=Confirm button, Compressed=False
    "state=default|type=Confirm button|compressed=false": __body13,
    // figma: State=Default, Type=Confirm button, Compressed=True
    "state=default|type=Confirm button|compressed=true": __body14,
    // figma: State=Hover, Type=Action button, Compressed=False
    "state=hover|type=Action button|compressed=false": __body11,
    // figma: State=Hover, Type=Action button, Compressed=True
    "state=hover|type=Action button|compressed=true": __body15,
    // figma: State=Hover, Type=Confirm button, Compressed=False
    "state=hover|type=Confirm button|compressed=false": __body16,
    // figma: State=Hover, Type=Confirm button, Compressed=True
    "state=hover|type=Confirm button|compressed=true": __body17,
    // figma: State=Checked, Type=Action button, Compressed=False
    "state=checked|type=Action button|compressed=false": __body11,
    // figma: State=Checked, Type=Action button, Compressed=True
    "state=checked|type=Action button|compressed=true": __body18,
    // figma: State=Checked, Type=Confirm button, Compressed=False
    "state=checked|type=Confirm button|compressed=false": __body19,
    // figma: State=Checked, Type=Confirm button, Compressed=True
    "state=checked|type=Confirm button|compressed=true": __body20,
    // figma: State=Default, Type=Toggle, Compressed=False
    "state=default|type=Toggle|compressed=false": __body21,
    // figma: State=Default, Type=Toggle (AG), Compressed=False
    "state=default|type=Toggle (AG)|compressed=false": __body21,
    // figma: State=Default, Type=Only icon, Compressed=False
    "state=default|type=Only icon|compressed=false": __body22,
    // figma: State=Default, Type=Only icon, Compressed=True
    "state=default|type=Only icon|compressed=true": __body23,
    // figma: State=Default, Type=Toggle, Compressed=True
    "state=default|type=Toggle|compressed=true": __body24,
    // figma: State=Hover, Type=Toggle, Compressed=False
    "state=hover|type=Toggle|compressed=false": __body21,
    // figma: State=Hover, Type=Only icon, Compressed=False
    "state=hover|type=Only icon|compressed=false": __body25,
    // figma: State=Hover, Type=Only icon, Compressed=True
    "state=hover|type=Only icon|compressed=true": __body26,
    // figma: State=Hover, Type=Toggle, Compressed=True
    "state=hover|type=Toggle|compressed=true": __body27,
    // figma: State=Checked, Type=Toggle, Compressed=False
    "state=checked|type=Toggle|compressed=false": __body21,
    // figma: State=Checked, Type=Only icon, Compressed=False
    "state=checked|type=Only icon|compressed=false": __body28,
    // figma: State=Checked, Type=Only icon, Compressed=True
    "state=checked|type=Only icon|compressed=true": __body29,
    // figma: State=Checked, Type=Toggle, Compressed=True
    "state=checked|type=Toggle|compressed=true": __body30,
    // figma: State=Default, Type=Text, Compressed=False
    "state=default|type=Text|compressed=false": __body31,
    // figma: State=Default, Type=AG Selecting, Compressed=False
    "state=default|type=AG Selecting|compressed=false": __body32,
    // figma: State=Default, Type=AG Selecting (Muilty), Compressed=False
    "state=default|type=AG Selecting (Muilty)|compressed=false": __body33,
    // figma: State=Default, Type=Text check, Compressed=False
    "state=default|type=Text check|compressed=false": __body34,
    // figma: State=Default, Type=Drag check, Compressed=False
    "state=default|type=Drag check|compressed=false": __body35,
    // figma: State=Default, Type=Text (AG), Compressed=False
    "state=default|type=Text (AG)|compressed=false": __body36,
    // figma: State=Default, Type=Number (AG), Compressed=False
    "state=default|type=Number (AG)|compressed=false": __body37,
    // figma: State=Default, Type=Blank (AG), Compressed=False
    "state=default|type=Blank (AG)|compressed=false": __body38,
    // figma: State=Default, Type=Filled Select (AG), Compressed=False
    "state=default|type=Filled Select (AG)|compressed=false": __body39,
    // figma: State=Default, Type=Filled Select muilty (AG), Compressed=False
    "state=default|type=Filled Select muilty (AG)|compressed=false": __body40,
    // figma: State=Default, Type=Black select (AG), Compressed=False
    "state=default|type=Black select (AG)|compressed=false": __body41,
    // figma: State=Default, Type=Black select muilty (AG), Compressed=False
    "state=default|type=Black select muilty (AG)|compressed=false": __body42,
    // figma: State=Default, Type=Filled Date (AG), Compressed=False
    "state=default|type=Filled Date (AG)|compressed=false": __body43,
    // figma: State=Default, Type=Blank Date (AG), Compressed=False
    "state=default|type=Blank Date (AG)|compressed=false": __body44,
    // figma: State=Default, Type=Text invalid (AG), Compressed=False
    "state=default|type=Text invalid (AG)|compressed=false": __body45,
    // figma: State=Default, Type=Blank Invalid (AG), Compressed=False
    "state=default|type=Blank Invalid (AG)|compressed=false": __body46,
    // figma: State=Default, Type=Number Invalid (AG), Compressed=False
    "state=default|type=Number Invalid (AG)|compressed=false": __body47,
    // figma: State=Default, Type=AG typing, Compressed=False
    "state=default|type=AG typing|compressed=false": __body48,
    // figma: State=Default, Type=Text, Compressed=True
    "state=default|type=Text|compressed=true": __body49,
    // figma: State=Default, Type=AG Selecting, Compressed=True
    "state=default|type=AG Selecting|compressed=true": __body50,
    // figma: State=Default, Type=AG Selecting (Muilty), Compressed=True
    "state=default|type=AG Selecting (Muilty)|compressed=true": __body51,
    // figma: State=Default, Type=Text check, Compressed=True
    "state=default|type=Text check|compressed=true": __body52,
    // figma: State=Default, Type=Drag check, Compressed=True
    "state=default|type=Drag check|compressed=true": __body53,
    // figma: State=Default, Type=Text (AG), Compressed=True
    "state=default|type=Text (AG)|compressed=true": __body54,
    // figma: State=Default, Type=Number (AG), Compressed=True
    "state=default|type=Number (AG)|compressed=true": __body55,
    // figma: State=Default, Type=Blank (AG), Compressed=True
    "state=default|type=Blank (AG)|compressed=true": __body56,
    // figma: State=Default, Type=Filled Select (AG), Compressed=True
    "state=default|type=Filled Select (AG)|compressed=true": __body57,
    // figma: State=Default, Type=Filled Select Muilt (AG), Compressed=True
    "state=default|type=Filled Select Muilt (AG)|compressed=true": __body58,
    // figma: State=Default, Type=Black select (AG), Compressed=True
    "state=default|type=Black select (AG)|compressed=true": __body59,
    // figma: State=Default, Type=Black select Muilty (AG), Compressed=True
    "state=default|type=Black select Muilty (AG)|compressed=true": __body60,
    // figma: State=Default, Type=Filled Date (AG), Compressed=True
    "state=default|type=Filled Date (AG)|compressed=true": __body61,
    // figma: State=Default, Type=Blank Date (AG), Compressed=True
    "state=default|type=Blank Date (AG)|compressed=true": __body62,
    // figma: State=Default, Type=Text invalid (AG), Compressed=True
    "state=default|type=Text invalid (AG)|compressed=true": __body63,
    // figma: State=Default, Type=Blank Invalid (AG), Compressed=True
    "state=default|type=Blank Invalid (AG)|compressed=true": __body64,
    // figma: State=Default, Type=Number Invalid (AG), Compressed=True
    "state=default|type=Number Invalid (AG)|compressed=true": __body65,
    // figma: State=Default, Type=AG typing, Compressed=True
    "state=default|type=AG typing|compressed=true": __body66,
    // figma: State=Default, Type=Description, Compressed=False
    "state=default|type=Description|compressed=false": __body67,
    // figma: State=Default, Type=Description, Compressed=True
    "state=default|type=Description|compressed=true": __body68,
    // figma: State=Default, Type=Tooltip, Compressed=False
    "state=default|type=Tooltip|compressed=false": __body69,
    // figma: State=Default, Type=Tooltip, Compressed=True
    "state=default|type=Tooltip|compressed=true": __body70,
    // figma: State=Hover, Type=Tooltip, Compressed=False
    "state=hover|type=Tooltip|compressed=false": __body69,
    // figma: State=Hover, Type=Tooltip, Compressed=True
    "state=hover|type=Tooltip|compressed=true": __body71,
    // figma: State=Checked, Type=Tooltip, Compressed=False
    "state=checked|type=Tooltip|compressed=false": __body69,
    // figma: State=Checked, Type=Tooltip, Compressed=True
    "state=checked|type=Tooltip|compressed=true": __body72,
    // figma: State=Default, Type=Tree, Compressed=False
    "state=default|type=Tree|compressed=false": __body73,
    // figma: State=Default, Type=Tree, Compressed=True
    "state=default|type=Tree|compressed=true": __body74,
    // figma: State=Hover, Type=Tree, Compressed=False
    "state=hover|type=Tree|compressed=false": __body75,
    // figma: State=Hover, Type=Tree, Compressed=True
    "state=hover|type=Tree|compressed=true": __body76,
    // figma: State=Checked, Type=Tree, Compressed=False
    "state=checked|type=Tree|compressed=false": __body75,
    // figma: State=Checked, Type=Tree, Compressed=True
    "state=checked|type=Tree|compressed=true": __body77,
    // figma: State=Default, Type=Link, Compressed=False
    "state=default|type=Link|compressed=false": __body36,
    // figma: State=Default, Type=Link, Compressed=True
    "state=default|type=Link|compressed=true": __body49,
    // figma: State=Default, Type=Status, Compressed=False
    "state=default|type=Status|compressed=false": __body78,
    // figma: State=Default, Type=Status, Compressed=True
    "state=default|type=Status|compressed=true": __body79,
    // figma: State=Default, Type=Blank, Compressed=False
    "state=default|type=Blank|compressed=false": __body80,
    // figma: State=Default, Type=Blank, Compressed=True
    "state=default|type=Blank|compressed=true": __body81,
    // figma: State=Default, Type=Process, Compressed=False
    "state=default|type=Process|compressed=false": __body82,
    // figma: State=Default, Type=Process, Compressed=True
    "state=default|type=Process|compressed=true": __body83,
    // figma: State=Default, Type=Load, Compressed=False
    "state=default|type=Load|compressed=false": __body84,
    // figma: State=Default, Type=Load, Compressed=True
    "state=default|type=Load|compressed=true": __body85,
    // figma: State=Hover, Type=Load, Compressed=False
    "state=hover|type=Load|compressed=false": __body84,
    // figma: State=Hover, Type=Load, Compressed=True
    "state=hover|type=Load|compressed=true": __body86,
    // figma: State=Hover, Type=Status, Compressed=False
    "state=hover|type=Status|compressed=false": __body78,
    // figma: State=Hover, Type=Status, Compressed=True
    "state=hover|type=Status|compressed=true": __body87,
    // figma: State=Hover, Type=Blank, Compressed=False
    "state=hover|type=Blank|compressed=false": __body80,
    // figma: State=Hover, Type=Blank, Compressed=True
    "state=hover|type=Blank|compressed=true": __body88,
    // figma: State=Hover, Type=Process, Compressed=False
    "state=hover|type=Process|compressed=false": __body82,
    // figma: State=Hover, Type=Process, Compressed=True
    "state=hover|type=Process|compressed=true": __body89,
    // figma: State=Checked, Type=Status, Compressed=False
    "state=checked|type=Status|compressed=false": __body78,
    // figma: State=Checked, Type=Status, Compressed=True
    "state=checked|type=Status|compressed=true": __body90,
    // figma: State=Checked, Type=Blank, Compressed=False
    "state=checked|type=Blank|compressed=false": __body80,
    // figma: State=Checked, Type=Blank, Compressed=True
    "state=checked|type=Blank|compressed=true": __body91,
    // figma: State=Checked, Type=Process, Compressed=False
    "state=checked|type=Process|compressed=false": __body82,
    // figma: State=Checked, Type=Process, Compressed=True
    "state=checked|type=Process|compressed=true": __body92,
    // figma: State=Hover, Type=Text, Compressed=False
    "state=hover|type=Text|compressed=false": __body36,
    // figma: State=Hover, Type=Text check, Compressed=False
    "state=hover|type=Text check|compressed=false": __body93,
    // figma: State=Hover, Type=Drag check, Compressed=False
    "state=hover|type=Drag check|compressed=false": __body94,
    // figma: State=Hover, Type=Text, Compressed=True
    "state=hover|type=Text|compressed=true": __body95,
    // figma: State=Hover, Type=Text check, Compressed=True
    "state=hover|type=Text check|compressed=true": __body96,
    // figma: State=Hover, Type=Drag check, Compressed=True
    "state=hover|type=Drag check|compressed=true": __body97,
    // figma: State=Hover, Type=Description, Compressed=False
    "state=hover|type=Description|compressed=false": __body98,
    // figma: State=Hover, Type=Description, Compressed=True
    "state=hover|type=Description|compressed=true": __body99,
    // figma: State=Hover, Type=Link, Compressed=False
    "state=hover|type=Link|compressed=false": __body36,
    // figma: State=Hover, Type=Link, Compressed=True
    "state=hover|type=Link|compressed=true": __body95,
    // figma: State=Checked, Type=Text, Compressed=False
    "state=checked|type=Text|compressed=false": __body36,
    // figma: State=Checked, Type=Text check, Compressed=False
    "state=checked|type=Text check|compressed=false": __body100,
    // figma: State=Checked, Type=Drag check, Compressed=False
    "state=checked|type=Drag check|compressed=false": __body101,
    // figma: State=Checked, Type=Text, Compressed=True
    "state=checked|type=Text|compressed=true": __body102,
    // figma: State=Checked, Type=Text check, Compressed=True
    "state=checked|type=Text check|compressed=true": __body103,
    // figma: State=Checked, Type=Drag check, Compressed=True
    "state=checked|type=Drag check|compressed=true": __body104,
    // figma: State=Checked, Type=Description, Compressed=False
    "state=checked|type=Description|compressed=false": __body105,
    // figma: State=Checked, Type=Description, Compressed=True
    "state=checked|type=Description|compressed=true": __body106,
    // figma: State=Checked, Type=Link, Compressed=False
    "state=checked|type=Link|compressed=false": __body36,
    // figma: State=Checked, Type=Link, Compressed=True
    "state=checked|type=Link|compressed=true": __body102,
    // figma: State=Default, Type=Number, Compressed=False
    "state=default|type=Number|compressed=false": __body107,
    // figma: State=Default, Type=Money, Compressed=False
    "state=default|type=Money|compressed=false": __body107,
    // figma: State=Default, Type=changeview, Compressed=False
    "state=default|type=changeview|compressed=false": __body108,
    // figma: State=Default, Type=Decimal, Compressed=False
    "state=default|type=Decimal|compressed=false": __body109,
    // figma: State=Default, Type=Number, Compressed=True
    "state=default|type=Number|compressed=true": __body110,
    // figma: State=Default, Type=Money, Compressed=True
    "state=default|type=Money|compressed=true": __body111,
    // figma: State=Default, Type=changeview, Compressed=True
    "state=default|type=changeview|compressed=true": __body112,
    // figma: State=Default, Type=Decimal, Compressed=True
    "state=default|type=Decimal|compressed=true": __body113,
    // figma: State=Hover, Type=Number, Compressed=False
    "state=hover|type=Number|compressed=false": __body107,
    // figma: State=Hover, Type=Money, Compressed=False
    "state=hover|type=Money|compressed=false": __body114,
    // figma: State=Hover, Type=changeview, Compressed=False
    "state=hover|type=changeview|compressed=false": __body115,
    // figma: State=Hover, Type=Decimal, Compressed=False
    "state=hover|type=Decimal|compressed=false": __body116,
    // figma: State=Hover, Type=Number, Compressed=True
    "state=hover|type=Number|compressed=true": __body117,
    // figma: State=Hover, Type=Money, Compressed=True
    "state=hover|type=Money|compressed=true": __body118,
    // figma: State=Hover, Type=changeview, Compressed=True
    "state=hover|type=changeview|compressed=true": __body119,
    // figma: State=Hover, Type=Decimal, Compressed=True
    "state=hover|type=Decimal|compressed=true": __body120,
    // figma: State=Checked, Type=Number, Compressed=False
    "state=checked|type=Number|compressed=false": __body107,
    // figma: State=Checked, Type=Money, Compressed=False
    "state=checked|type=Money|compressed=false": __body121,
    // figma: State=Checked, Type=changeview, Compressed=False
    "state=checked|type=changeview|compressed=false": __body122,
    // figma: State=Checked, Type=Decimal, Compressed=False
    "state=checked|type=Decimal|compressed=false": __body123,
    // figma: State=Checked, Type=Number, Compressed=True
    "state=checked|type=Number|compressed=true": __body124,
    // figma: State=Checked, Type=Money, Compressed=True
    "state=checked|type=Money|compressed=true": __body125,
    // figma: State=Checked, Type=changeview, Compressed=True
    "state=checked|type=changeview|compressed=true": __body126,
    // figma: State=Checked, Type=Decimal, Compressed=True
    "state=checked|type=Decimal|compressed=true": __body127,
    // figma: State=Default, Type=Field input, Compressed=False
    "state=default|type=Field input|compressed=false": __body128,
    // figma: State=Default, Type=Combo select, Compressed=False
    "state=default|type=Combo select|compressed=false": __body129,
    // figma: State=Default, Type=Text label, Compressed=False
    "state=default|type=Text label|compressed=false": __body130,
    // figma: State=Default, Type=Number input, Compressed=False
    "state=default|type=Number input|compressed=false": __body131,
    // figma: State=Default, Type=Input Invalid (Ant D), Compressed=False
    "state=default|type=Input Invalid (Ant D)|compressed=false": __body132,
    // figma: State=Default, Type=Date picker, Compressed=False
    "state=default|type=Date picker|compressed=false": __body133,
    // figma: State=Default, Type=Time picker, Compressed=False
    "state=default|type=Time picker|compressed=false": __body134,
    // figma: State=Hover, Type=Field input, Compressed=False
    "state=hover|type=Field input|compressed=false": __body128,
    // figma: State=Hover, Type=Combo select, Compressed=False
    "state=hover|type=Combo select|compressed=false": __body135,
    // figma: State=Hover, Type=Text label, Compressed=False
    "state=hover|type=Text label|compressed=false": __body136,
    // figma: State=Hover, Type=Number input, Compressed=False
    "state=hover|type=Number input|compressed=false": __body137,
    // figma: State=Hover, Type=Input Invalid (Ant D), Compressed=False
    "state=hover|type=Input Invalid (Ant D)|compressed=false": __body138,
    // figma: State=Hover, Type=Date picker, Compressed=False
    "state=hover|type=Date picker|compressed=false": __body139,
    // figma: State=Hover, Type=Time picker, Compressed=False
    "state=hover|type=Time picker|compressed=false": __body140,
    // figma: State=Checked, Type=Field input, Compressed=False
    "state=checked|type=Field input|compressed=false": __body128,
    // figma: State=Checked, Type=Combo select, Compressed=False
    "state=checked|type=Combo select|compressed=false": __body141,
    // figma: State=Checked, Type=Text label, Compressed=False
    "state=checked|type=Text label|compressed=false": __body142,
    // figma: State=Checked, Type=Number input, Compressed=False
    "state=checked|type=Number input|compressed=false": __body143,
    // figma: State=Checked, Type=Input Invalid (Ant D), Compressed=False
    "state=checked|type=Input Invalid (Ant D)|compressed=false": __body144,
    // figma: State=Checked, Type=Date picker, Compressed=False
    "state=checked|type=Date picker|compressed=false": __body145,
    // figma: State=Checked, Type=Time picker, Compressed=False
    "state=checked|type=Time picker|compressed=false": __body146,
    // figma: State=Default, Type=Picture, Compressed=False
    "state=default|type=Picture|compressed=false": __body147,
    // figma: State=Default, Type=Picture, Compressed=True
    "state=default|type=Picture|compressed=true": __body148,
    // figma: State=Hover, Type=Picture, Compressed=False
    "state=hover|type=Picture|compressed=false": __body147,
    // figma: State=Hover, Type=Picture, Compressed=True
    "state=hover|type=Picture|compressed=true": __body149,
    // figma: State=Checked, Type=Picture, Compressed=False
    "state=checked|type=Picture|compressed=false": __body147,
    // figma: State=Checked, Type=Picture, Compressed=True
    "state=checked|type=Picture|compressed=true": __body150,
    // figma: State=Default, Type=Pic placeholder, Compressed=False
    "state=default|type=Pic placeholder|compressed=false": __body151,
    // figma: State=Default, Type=Pic placeholder, Compressed=True
    "state=default|type=Pic placeholder|compressed=true": __body152,
    // figma: State=Hover, Type=Pic placeholder, Compressed=False
    "state=hover|type=Pic placeholder|compressed=false": __body153,
    // figma: State=Hover, Type=Pic placeholder, Compressed=True
    "state=hover|type=Pic placeholder|compressed=true": __body154,
    // figma: State=Checked, Type=Pic placeholder, Compressed=False
    "state=checked|type=Pic placeholder|compressed=false": __body153,
    // figma: State=Checked, Type=Pic placeholder, Compressed=True
    "state=checked|type=Pic placeholder|compressed=true": __body155,
    // figma: State=Default, Type=Process Bar, Compressed=False
    "state=default|type=Process Bar|compressed=false": __body156,
    // figma: State=Default, Type=Process color, Compressed=False
    "state=default|type=Process color|compressed=false": __body157
  };
  return (__impls[__vkey_CellBodyNormal(props)] ?? __body11)();
}

// figma node: 275:58622 Icon/Arrow--left
function IconArrowLeft(_p = {}) {
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
    d: "M 5 10 L 5.705 9.295 L 1.915 5.5 L 12 5.5 L 12 4.5 L 1.915 4.5 L 5.705 0.705 L 5 0 L 0 5 L 5 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 275:59730 Icon/Close--filled
function IconCloseFilled(_p = {}) {
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
    d: "M 7 0 C 3.1 0 0 3.1 0 7 C 0 10.9 3.1 14 7 14 C 10.9 14 14 10.9 14 7 C 14 3.1 10.9 0 7 0 Z M 9.7 10.5 L 7 7.8 L 4.3 10.5 L 3.5 9.7 L 6.2 7 L 3.5 4.3 L 4.3 3.5 L 7 6.2 L 9.7 3.5 L 10.5 4.3 L 7.8 7 L 10.5 9.7 L 9.7 10.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 25:10081 Input field (36 variants)
var __venc_InputField = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_InputField = p => "size=" + __venc_InputField(p.size) + '|' + "type=" + __venc_InputField(p.type) + '|' + "destructive=" + __venc_InputField(p.destructive) + '|' + "state=" + __venc_InputField(p.state);

// Globals for scripts loaded after this file.
window.Toggle = Toggle;
window.CellBodyNormal = CellBodyNormal;
window.IconArrowLeft = IconArrowLeft;
window.IconCloseFilled = IconCloseFilled;
