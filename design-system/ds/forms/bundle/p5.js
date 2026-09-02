// Components bundle — part 5 of 5. Load the parts in order as plain
// classic <script> tags: they share one global scope, so later parts can call
// declarations from earlier ones exactly as in the original single-file bundle.

function Tooltip2(_p = {}) {
  const props = {
    ..._p,
    supportingText: _p.supportingText ?? false,
    theme: _p.theme ?? "dark",
    arrow: _p.arrow ?? "none"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
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
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      gap: 4,
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
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "This is a tooltip"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(102,112,133)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."))), /*#__PURE__*/React.createElement("div", {
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
      width: 320,
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(242,244,247)",
      display: "flex",
      flexDirection: "column",
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
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      gap: 4,
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
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "This is a tooltip"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(102,112,133)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
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
      fontWeight: 600,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
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
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(242,244,247)",
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
      fontWeight: 600,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "This is a tooltip")));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
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
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
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
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      gap: 4,
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
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "This is a tooltip"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(102,112,133)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
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
      backgroundColor: "rgb(255,255,255)",
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
      fontWeight: 600,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "This is a tooltip")));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
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
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      gap: 4,
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
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "This is a tooltip"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(102,112,133)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."))), /*#__PURE__*/React.createElement("div", {
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
      transform: "matrix(0.707,0.707,-0.707,0.707,20,-11)",
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
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
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
      fontWeight: 600,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
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
      transform: "matrix(0.707,0.707,-0.707,0.707,20,-11)",
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
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 326,
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,6,42)",
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
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      gap: 4,
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
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "This is a tooltip"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(102,112,133)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."))));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 118,
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
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
      backgroundColor: "rgb(255,255,255)",
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
      fontWeight: 600,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "This is a tooltip")));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 326,
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      gap: 4,
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
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "This is a tooltip"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(102,112,133)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,320,58)",
      transformOrigin: "0 0",
      width: 16,
      height: 6,
      overflow: "hidden"
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
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 118,
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
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
      fontWeight: 600,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "This is a tooltip")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,112,25)",
      transformOrigin: "0 0",
      width: 16,
      height: 6,
      overflow: "hidden"
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
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 328,
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
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
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      gap: 4,
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
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "This is a tooltip"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(102,112,133)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."))), /*#__PURE__*/React.createElement("div", {
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
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
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
      fontWeight: 600,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
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
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
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
      display: "flex",
      flexDirection: "column",
      gap: 4,
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
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "This is a tooltip"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."))), /*#__PURE__*/React.createElement("div", {
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
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(16,24,40)",
      display: "flex",
      flexDirection: "column",
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
      display: "flex",
      flexDirection: "column",
      gap: 4,
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
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "This is a tooltip"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."))));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
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
      fontWeight: 600,
      fontSize: 12,
      textAlign: "center",
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
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
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
      fontWeight: 600,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "This is a tooltip")));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
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
      display: "flex",
      flexDirection: "column",
      gap: 4,
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
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "This is a tooltip"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."))));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
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
      fontWeight: 600,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "This is a tooltip")));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
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
      display: "flex",
      flexDirection: "column",
      gap: 4,
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
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "This is a tooltip"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."))), /*#__PURE__*/React.createElement("div", {
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
      transform: "matrix(0.707,0.707,-0.707,0.707,20,-11)",
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
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
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
      fontWeight: 600,
      fontSize: 12,
      textAlign: "center",
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
      transform: "matrix(0.707,0.707,-0.707,0.707,20,-11)",
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
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 326,
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
      transform: "matrix(0,1,-1,0,6,42)",
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
      padding: "12px 12px 12px 12px",
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
      gap: 4,
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
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "This is a tooltip"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."))));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 118,
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "This is a tooltip")));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 326,
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
      padding: "12px 12px 12px 12px",
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
      gap: 4,
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
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "This is a tooltip"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,320,58)",
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
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 118,
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
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "This is a tooltip")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,112,25)",
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
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
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
      display: "flex",
      flexDirection: "column",
      gap: 4,
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
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "This is a tooltip"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand meaning, function or alt-text."))), /*#__PURE__*/React.createElement("div", {
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
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
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
      fontWeight: 600,
      fontSize: 12,
      textAlign: "center",
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
    // figma: Supporting text=True, Theme=Light, Arrow=Bottom center
    "supportingText=true|theme=light|arrow=bottom center": __body0,
    // figma: Supporting text=True, Theme=Light, Arrow=None
    "supportingText=true|theme=light|arrow=none": __body1,
    // figma: Supporting text=False, Theme=Light, Arrow=Bottom center
    "supportingText=false|theme=light|arrow=bottom center": __body2,
    // figma: Supporting text=False, Theme=Light, Arrow=None
    "supportingText=false|theme=light|arrow=none": __body3,
    // figma: Supporting text=True, Theme=Light, Arrow=Top center
    "supportingText=true|theme=light|arrow=top center": __body4,
    // figma: Supporting text=False, Theme=Light, Arrow=Top center
    "supportingText=false|theme=light|arrow=top center": __body5,
    // figma: Supporting text=True, Theme=Light, Arrow=Bottom left
    "supportingText=true|theme=light|arrow=bottom left": __body6,
    // figma: Supporting text=False, Theme=Light, Arrow=Bottom left
    "supportingText=false|theme=light|arrow=bottom left": __body7,
    // figma: Supporting text=True, Theme=Light, Arrow=Left
    "supportingText=true|theme=light|arrow=left": __body8,
    // figma: Supporting text=False, Theme=Light, Arrow=Left
    "supportingText=false|theme=light|arrow=left": __body9,
    // figma: Supporting text=True, Theme=Light, Arrow=Right
    "supportingText=true|theme=light|arrow=right": __body10,
    // figma: Supporting text=False, Theme=Light, Arrow=Right
    "supportingText=false|theme=light|arrow=right": __body11,
    // figma: Supporting text=True, Theme=Light, Arrow=Bottom right
    "supportingText=true|theme=light|arrow=bottom right": __body12,
    // figma: Supporting text=False, Theme=Light, Arrow=Bottom right
    "supportingText=false|theme=light|arrow=bottom right": __body13,
    // figma: Supporting text=True, Theme=Dark, Arrow=Bottom center
    "supportingText=true|theme=dark|arrow=bottom center": __body14,
    // figma: Supporting text=True, Theme=Dark, Arrow=None
    "supportingText=true|theme=dark|arrow=none": __body15,
    // figma: Supporting text=False, Theme=Dark, Arrow=Bottom center
    "supportingText=false|theme=dark|arrow=bottom center": __body16,
    // figma: Supporting text=False, Theme=Dark, Arrow=None
    "supportingText=false|theme=dark|arrow=none": __body17,
    // figma: Supporting text=True, Theme=Dark, Arrow=Top center
    "supportingText=true|theme=dark|arrow=top center": __body18,
    // figma: Supporting text=False, Theme=Dark, Arrow=Top center
    "supportingText=false|theme=dark|arrow=top center": __body19,
    // figma: Supporting text=True, Theme=Dark, Arrow=Bottom left
    "supportingText=true|theme=dark|arrow=bottom left": __body20,
    // figma: Supporting text=False, Theme=Dark, Arrow=Bottom left
    "supportingText=false|theme=dark|arrow=bottom left": __body21,
    // figma: Supporting text=True, Theme=Dark, Arrow=Left
    "supportingText=true|theme=dark|arrow=left": __body22,
    // figma: Supporting text=False, Theme=Dark, Arrow=Left
    "supportingText=false|theme=dark|arrow=left": __body23,
    // figma: Supporting text=True, Theme=Dark, Arrow=Right
    "supportingText=true|theme=dark|arrow=right": __body24,
    // figma: Supporting text=False, Theme=Dark, Arrow=Right
    "supportingText=false|theme=dark|arrow=right": __body25,
    // figma: Supporting text=True, Theme=Dark, Arrow=Bottom right
    "supportingText=true|theme=dark|arrow=bottom right": __body26,
    // figma: Supporting text=False, Theme=Dark, Arrow=Bottom right
    "supportingText=false|theme=dark|arrow=bottom right": __body27
  };
  return (__impls[__vkey_Tooltip2(props)] ?? __body17)();
}

// figma node: 38:39560 Progress bar (55 variants)
var __venc_ProgressBar = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_ProgressBar = p => "progress=" + __venc_ProgressBar(p.progress) + '|' + "label=" + __venc_ProgressBar(p.label);

function ProgressBar(_p = {}) {
  const props = {
    ..._p,
    progress: _p.progress ?? "0%",
    label: _p.label ?? "false"
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
      width: 287,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8.085,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), /*#__PURE__*/React.createElement("span", {
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
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), /*#__PURE__*/React.createElement("span", {
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
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -17.5,
      top: -42,
      width: 43
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Tooltip2, {
    text1: "0%",
    supportingText: false,
    theme: "light",
    arrow: "none"
  }))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
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
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -17.5,
      top: 16,
      width: 43
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Tooltip2, {
    text1: "0%",
    supportingText: false,
    theme: "light",
    arrow: "none"
  }))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
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
      width: 44,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })));
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
      height: 8,
      borderRadius: 8,
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 280,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 28.203,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), /*#__PURE__*/React.createElement("span", {
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
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("span", {
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
      width: 32,
      height: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: -42,
      width: 48
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Tooltip2, {
    text1: "10%",
    supportingText: false,
    theme: "light",
    arrow: "none"
  })))));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
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
      height: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4,
      top: 16,
      width: 48
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Tooltip2, {
    text1: "10%",
    supportingText: false,
    theme: "light",
    arrow: "none"
  })))));
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
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
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
      width: 278,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 56.006,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), /*#__PURE__*/React.createElement("span", {
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
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("span", {
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
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
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
      height: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 64,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 35,
      top: -42,
      width: 50
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Tooltip2, {
    text1: "20%",
    supportingText: false,
    theme: "light",
    arrow: "none"
  })))));
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
      width: 64,
      height: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 64,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 35,
      top: 16,
      width: 50
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Tooltip2, {
    text1: "20%",
    supportingText: false,
    theme: "light",
    arrow: "none"
  })))));
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
      width: 101.2,
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
      width: 278,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 84.009,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), /*#__PURE__*/React.createElement("span", {
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
      width: 96,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), /*#__PURE__*/React.createElement("span", {
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
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
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
      height: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 96,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 67,
      top: -42,
      width: 50
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Tooltip2, {
    text1: "30%",
    supportingText: false,
    theme: "light",
    arrow: "none"
  })))));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
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
      height: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 96,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 67,
      top: 16,
      width: 50
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Tooltip2, {
    text1: "30%",
    supportingText: false,
    theme: "light",
    arrow: "none"
  })))));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
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
      height: 8,
      borderRadius: 8,
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 278,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 112.015,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), /*#__PURE__*/React.createElement("span", {
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
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("span", {
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
      width: 128,
      height: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 128,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 98,
      top: -42,
      width: 51
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Tooltip2, {
    text1: "40%",
    supportingText: false,
    theme: "light",
    arrow: "none"
  })))));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
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
      height: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 128,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 98,
      top: 16,
      width: 51
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Tooltip2, {
    text1: "40%",
    supportingText: false,
    theme: "light",
    arrow: "none"
  })))));
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
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
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
      width: 278,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 140.015,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), /*#__PURE__*/React.createElement("span", {
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
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("span", {
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
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
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
      height: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 160,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 131,
      top: -42,
      width: 50
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Tooltip2, {
    text1: "50%",
    supportingText: false,
    theme: "light",
    arrow: "none"
  })))));
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
      width: 160,
      height: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 160,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 131,
      top: 16,
      width: 50
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Tooltip2, {
    text1: "50%",
    supportingText: false,
    theme: "light",
    arrow: "none"
  })))));
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
      width: 184,
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
      width: 278,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 168.018,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), /*#__PURE__*/React.createElement("span", {
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
      width: 192,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), /*#__PURE__*/React.createElement("span", {
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
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
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
      height: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 192,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 163,
      top: -42,
      width: 50
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Tooltip2, {
    text1: "60%",
    supportingText: false,
    theme: "light",
    arrow: "none"
  })))));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
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
      height: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 192,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 163,
      top: 16,
      width: 50
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Tooltip2, {
    text1: "60%",
    supportingText: false,
    theme: "light",
    arrow: "none"
  })))));
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
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
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
      width: 279,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 196.72,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), /*#__PURE__*/React.createElement("span", {
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
  const __body36 = () => /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("span", {
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
  const __body37 = () => /*#__PURE__*/React.createElement("div", {
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
      height: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 224,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 195,
      top: -42,
      width: 49
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Tooltip2, {
    text1: "70%",
    supportingText: false,
    theme: "light",
    arrow: "none"
  })))));
  const __body38 = () => /*#__PURE__*/React.createElement("div", {
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
      height: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 224,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 195,
      top: 16,
      width: 49
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Tooltip2, {
    text1: "70%",
    supportingText: false,
    theme: "light",
    arrow: "none"
  })))));
  const __body39 = () => /*#__PURE__*/React.createElement("div", {
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
  const __body40 = () => /*#__PURE__*/React.createElement("div", {
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
      width: 278,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 224.023,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), /*#__PURE__*/React.createElement("span", {
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
  const __body41 = () => /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("span", {
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
  const __body42 = () => /*#__PURE__*/React.createElement("div", {
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
      height: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 256,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 227,
      top: -42,
      width: 50
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Tooltip2, {
    text1: "80%",
    supportingText: false,
    theme: "light",
    arrow: "none"
  })))));
  const __body43 = () => /*#__PURE__*/React.createElement("div", {
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
      height: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 256,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 227,
      top: 16,
      width: 50
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Tooltip2, {
    text1: "80%",
    supportingText: false,
    theme: "light",
    arrow: "none"
  })))));
  const __body44 = () => /*#__PURE__*/React.createElement("div", {
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
  const __body45 = () => /*#__PURE__*/React.createElement("div", {
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
      width: 278,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 252.026,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), /*#__PURE__*/React.createElement("span", {
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
  const __body46 = () => /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("span", {
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
  const __body47 = () => /*#__PURE__*/React.createElement("div", {
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
      height: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 288,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 259,
      top: -42,
      width: 50
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Tooltip2, {
    text1: "90%",
    supportingText: false,
    theme: "light",
    arrow: "none"
  })))));
  const __body48 = () => /*#__PURE__*/React.createElement("div", {
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
      height: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 288,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 259,
      top: 16,
      width: 50
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Tooltip2, {
    text1: "90%",
    supportingText: false,
    theme: "light",
    arrow: "none"
  })))));
  const __body49 = () => /*#__PURE__*/React.createElement("div", {
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
  const __body50 = () => /*#__PURE__*/React.createElement("div", {
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
      width: 271,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 271,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  })), /*#__PURE__*/React.createElement("span", {
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
  const __body51 = () => /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("span", {
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
  const __body52 = () => /*#__PURE__*/React.createElement("div", {
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
      height: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 288,
      top: -42,
      width: 56
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Tooltip2, {
    text1: "100%",
    supportingText: false,
    theme: "light",
    arrow: "none"
  })))));
  const __body53 = () => /*#__PURE__*/React.createElement("div", {
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
      height: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 320,
      height: 8,
      borderRadius: 4,
      backgroundColor: "rgb(127,86,217)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 288,
      top: 16,
      width: 56
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Tooltip2, {
    text1: "100%",
    supportingText: false,
    theme: "light",
    arrow: "none"
  })))));
  const __body54 = () => /*#__PURE__*/React.createElement("div", {
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
  const __impls = {
    // figma: Progress=0%, Label=Right
    "progress=0%25|label=right": __body0,
    // figma: Progress=0%, Label=Bottom
    "progress=0%25|label=bottom": __body1,
    // figma: Progress=0%, Label=Top floating
    "progress=0%25|label=top floating": __body2,
    // figma: Progress=0%, Label=Bottom floating
    "progress=0%25|label=bottom floating": __body3,
    // figma: Progress=0%, Label=False
    "progress=0%25|label=false": __body4,
    // figma: Progress=10%, Label=Right
    "progress=10%25|label=right": __body5,
    // figma: Progress=10%, Label=Bottom
    "progress=10%25|label=bottom": __body6,
    // figma: Progress=10%, Label=Top floating
    "progress=10%25|label=top floating": __body7,
    // figma: Progress=10%, Label=Bottom floating
    "progress=10%25|label=bottom floating": __body8,
    // figma: Progress=10%, Label=False
    "progress=10%25|label=false": __body9,
    // figma: Progress=20%, Label=Right
    "progress=20%25|label=right": __body10,
    // figma: Progress=20%, Label=Bottom
    "progress=20%25|label=bottom": __body11,
    // figma: Progress=20%, Label=Top floating
    "progress=20%25|label=top floating": __body12,
    // figma: Progress=20%, Label=Bottom floating
    "progress=20%25|label=bottom floating": __body13,
    // figma: Progress=20%, Label=False
    "progress=20%25|label=false": __body14,
    // figma: Progress=30%, Label=Right
    "progress=30%25|label=right": __body15,
    // figma: Progress=30%, Label=Bottom
    "progress=30%25|label=bottom": __body16,
    // figma: Progress=30%, Label=Top floating
    "progress=30%25|label=top floating": __body17,
    // figma: Progress=30%, Label=Bottom floating
    "progress=30%25|label=bottom floating": __body18,
    // figma: Progress=30%, Label=False
    "progress=30%25|label=false": __body19,
    // figma: Progress=40%, Label=Right
    "progress=40%25|label=right": __body20,
    // figma: Progress=40%, Label=Bottom
    "progress=40%25|label=bottom": __body21,
    // figma: Progress=40%, Label=Top floating
    "progress=40%25|label=top floating": __body22,
    // figma: Progress=40%, Label=Bottom floating
    "progress=40%25|label=bottom floating": __body23,
    // figma: Progress=40%, Label=False
    "progress=40%25|label=false": __body24,
    // figma: Progress=50%, Label=Right
    "progress=50%25|label=right": __body25,
    // figma: Progress=50%, Label=Bottom
    "progress=50%25|label=bottom": __body26,
    // figma: Progress=50%, Label=Top floating
    "progress=50%25|label=top floating": __body27,
    // figma: Progress=50%, Label=Bottom floating
    "progress=50%25|label=bottom floating": __body28,
    // figma: Progress=50%, Label=False
    "progress=50%25|label=false": __body29,
    // figma: Progress=60%, Label=Right
    "progress=60%25|label=right": __body30,
    // figma: Progress=60%, Label=Bottom
    "progress=60%25|label=bottom": __body31,
    // figma: Progress=60%, Label=Top floating
    "progress=60%25|label=top floating": __body32,
    // figma: Progress=60%, Label=Bottom floating
    "progress=60%25|label=bottom floating": __body33,
    // figma: Progress=60%, Label=False
    "progress=60%25|label=false": __body34,
    // figma: Progress=70%, Label=Right
    "progress=70%25|label=right": __body35,
    // figma: Progress=70%, Label=Bottom
    "progress=70%25|label=bottom": __body36,
    // figma: Progress=70%, Label=Top floating
    "progress=70%25|label=top floating": __body37,
    // figma: Progress=70%, Label=Bottom floating
    "progress=70%25|label=bottom floating": __body38,
    // figma: Progress=70%, Label=False
    "progress=70%25|label=false": __body39,
    // figma: Progress=80%, Label=Right
    "progress=80%25|label=right": __body40,
    // figma: Progress=80%, Label=Bottom
    "progress=80%25|label=bottom": __body41,
    // figma: Progress=80%, Label=Top floating
    "progress=80%25|label=top floating": __body42,
    // figma: Progress=80%, Label=Bottom floating
    "progress=80%25|label=bottom floating": __body43,
    // figma: Progress=80%, Label=False
    "progress=80%25|label=false": __body44,
    // figma: Progress=90%, Label=Right
    "progress=90%25|label=right": __body45,
    // figma: Progress=90%, Label=Bottom
    "progress=90%25|label=bottom": __body46,
    // figma: Progress=90%, Label=Top floating
    "progress=90%25|label=top floating": __body47,
    // figma: Progress=90%, Label=Bottom floating
    "progress=90%25|label=bottom floating": __body48,
    // figma: Progress=90%, Label=False
    "progress=90%25|label=false": __body49,
    // figma: Progress=100%, Label=Right
    "progress=100%25|label=right": __body50,
    // figma: Progress=100%, Label=Bottom
    "progress=100%25|label=bottom": __body51,
    // figma: Progress=100%, Label=Top floating
    "progress=100%25|label=top floating": __body52,
    // figma: Progress=100%, Label=Bottom floating
    "progress=100%25|label=bottom floating": __body53,
    // figma: Progress=100%, Label=False
    "progress=100%25|label=false": __body54
  };
  return (__impls[__vkey_ProgressBar(props)] ?? __body4)();
}

// Globals for scripts loaded after this file.
window.Tooltip2 = Tooltip2;
window.ProgressBar = ProgressBar;
