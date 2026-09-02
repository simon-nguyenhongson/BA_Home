// Components bundle — part 4 of 5. Load the parts in order as plain
// classic <script> tags: they share one global scope, so later parts can call
// declarations from earlier ones exactly as in the original single-file bundle.

function CheckboxText(_p = {}) {
  const props = {
    ..._p,
    checked: _p.checked ?? false,
    indeterminate: _p.indeterminate ?? false,
    type: _p.type ?? "checkbox",
    text: _p.text ?? false,
    state: _p.state ?? "default",
    subtext: _p.subtext ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 344,
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: true,
    indeterminate: false,
    type: "checkbox",
    state: "focused"
  }))), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Remember me"), props.subtext && /*#__PURE__*/React.createElement("span", {
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
  }, props.text2 ?? "Save my login details for next time.")));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 344,
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxBaseTrueFalseSm3, null))), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Remember me"), props.subtext && /*#__PURE__*/React.createElement("span", {
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
  }, props.text2 ?? "Save my login details for next time.")));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 344,
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: true,
    indeterminate: false,
    type: "checkbox",
    state: "disbaled"
  }))), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Remember me"), props.subtext && /*#__PURE__*/React.createElement("span", {
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
  }, props.text2 ?? "Save my login details for next time.")));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 344,
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxBaseTrueFalseSm2, null))), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Remember me"), props.subtext && /*#__PURE__*/React.createElement("span", {
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
  }, props.text2 ?? "Save my login details for next time.")));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 344,
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: true,
    indeterminate: false,
    type: "checkbox",
    state: "hover"
  }))), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Remember me"), props.subtext && /*#__PURE__*/React.createElement("span", {
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
  }, props.text2 ?? "Save my login details for next time.")));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 344,
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxBaseTrueFalseSm4, null))), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Remember me"), props.subtext && /*#__PURE__*/React.createElement("span", {
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
  }, props.text2 ?? "Save my login details for next time.")));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 344,
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: true,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }))), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Remember me"), props.subtext && /*#__PURE__*/React.createElement("span", {
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
  }, props.text2 ?? "Save my login details for next time.")));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 344,
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxBaseTrueFalseSm, null))), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Remember me"), props.subtext && /*#__PURE__*/React.createElement("span", {
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
  }, props.text2 ?? "Save my login details for next time.")));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 344,
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }))), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Remember me"), props.subtext && /*#__PURE__*/React.createElement("span", {
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
  }, props.text2 ?? "Save my login details for next time.")));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 344,
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxBaseFalseFalseSm3, null))), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Remember me"), props.subtext && /*#__PURE__*/React.createElement("span", {
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
  }, props.text2 ?? "Save my login details for next time.")));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 344,
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxBaseFalseFalseSm2, null))), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Remember me"), props.subtext && /*#__PURE__*/React.createElement("span", {
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
  }, props.text2 ?? "Save my login details for next time.")));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 344,
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxBaseFalseFalseSm4, null))), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Remember me"), props.subtext && /*#__PURE__*/React.createElement("span", {
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
  }, props.text2 ?? "Save my login details for next time.")));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 344,
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxBaseFalseFalseSm, null))), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Remember me"), props.subtext && /*#__PURE__*/React.createElement("span", {
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
  }, props.text2 ?? "Save my login details for next time.")));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: true,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  })));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: true,
    indeterminate: true,
    type: "checkbox",
    state: "default"
  })));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxBaseTrueFalseSm3, null)));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: true,
    indeterminate: false,
    type: "checkbox",
    state: "disbaled"
  })));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: true,
    indeterminate: true,
    type: "checkbox",
    state: "disbaled"
  })));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxBaseTrueFalseSm2, null)));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: true,
    indeterminate: false,
    type: "checkbox",
    state: "hover"
  })));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: true,
    indeterminate: true,
    type: "checkbox",
    state: "hover"
  })));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxBaseTrueFalseSm4, null)));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxBaseTrueFalseSm, null)));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "hover"
  })));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxBaseFalseFalseSm4, null)));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  })));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxBaseFalseFalseSm3, null)));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxBaseFalseFalseSm2, null)));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxBaseFalseFalseSm, null)));
  const __impls = {
    // figma: Checked=True, Indeterminate=False, Type=Checkbox, Text=True, State=Focused
    "checked=true|indeterminate=false|type=checkbox|text=true|state=focused": __body0,
    // figma: Checked=True, Indeterminate=False, Type=Radio, Text=True, State=Focused
    "checked=true|indeterminate=false|type=radio|text=true|state=focused": __body1,
    // figma: Checked=True, Indeterminate=False, Type=Checkbox, Text=True, State=Disabled
    "checked=true|indeterminate=false|type=checkbox|text=true|state=disabled": __body2,
    // figma: Checked=True, Indeterminate=False, Type=Radio, Text=True, State=Disabled
    "checked=true|indeterminate=false|type=radio|text=true|state=disabled": __body3,
    // figma: Checked=True, Indeterminate=False, Type=Checkbox, Text=True, State=Hover
    "checked=true|indeterminate=false|type=checkbox|text=true|state=hover": __body4,
    // figma: Checked=True, Indeterminate=False, Type=Radio, Text=True, State=Hover
    "checked=true|indeterminate=false|type=radio|text=true|state=hover": __body5,
    // figma: Checked=True, Indeterminate=False, Type=Checkbox, Text=True, State=Default
    "checked=true|indeterminate=false|type=checkbox|text=true|state=default": __body6,
    // figma: Checked=True, Indeterminate=False, Type=Radio, Text=True, State=Default
    "checked=true|indeterminate=false|type=radio|text=true|state=default": __body7,
    // figma: Checked=False, Indeterminate=False, Type=Checkbox, Text=True, State=Focused
    "checked=false|indeterminate=false|type=checkbox|text=true|state=focused": __body8,
    // figma: Checked=False, Indeterminate=False, Type=Radio, Text=True, State=Focused
    "checked=false|indeterminate=false|type=radio|text=true|state=focused": __body9,
    // figma: Checked=False, Indeterminate=False, Type=Checkbox, Text=True, State=Disabled
    "checked=false|indeterminate=false|type=checkbox|text=true|state=disabled": __body8,
    // figma: Checked=False, Indeterminate=False, Type=Radio, Text=True, State=Disabled
    "checked=false|indeterminate=false|type=radio|text=true|state=disabled": __body10,
    // figma: Checked=False, Indeterminate=False, Type=Checkbox, Text=True, State=Hover
    "checked=false|indeterminate=false|type=checkbox|text=true|state=hover": __body8,
    // figma: Checked=False, Indeterminate=False, Type=Radio, Text=True, State=Hover
    "checked=false|indeterminate=false|type=radio|text=true|state=hover": __body11,
    // figma: Checked=False, Indeterminate=False, Type=Checkbox, Text=True, State=Default
    "checked=false|indeterminate=false|type=checkbox|text=true|state=default": __body8,
    // figma: Checked=False, Indeterminate=False, Type=Radio, Text=True, State=Default
    "checked=false|indeterminate=false|type=radio|text=true|state=default": __body12,
    // figma: Checked=True, Indeterminate=False, Type=Checkbox, Text=False, State=Focused
    "checked=true|indeterminate=false|type=checkbox|text=false|state=focused": __body13,
    // figma: Checked=True, Indeterminate=True, Type=Checkbox, Text=False, State=Focused
    "checked=true|indeterminate=true|type=checkbox|text=false|state=focused": __body14,
    // figma: Checked=True, Indeterminate=False, Type=Radio, Text=False, State=Focused
    "checked=true|indeterminate=false|type=radio|text=false|state=focused": __body15,
    // figma: Checked=True, Indeterminate=False, Type=Checkbox, Text=False, State=Disabled
    "checked=true|indeterminate=false|type=checkbox|text=false|state=disabled": __body16,
    // figma: Checked=True, Indeterminate=True, Type=Checkbox, Text=False, State=Disabled
    "checked=true|indeterminate=true|type=checkbox|text=false|state=disabled": __body17,
    // figma: Checked=True, Indeterminate=False, Type=Radio, Text=False, State=Disabled
    "checked=true|indeterminate=false|type=radio|text=false|state=disabled": __body18,
    // figma: Checked=True, Indeterminate=False, Type=Checkbox, Text=False, State=Hover
    "checked=true|indeterminate=false|type=checkbox|text=false|state=hover": __body19,
    // figma: Checked=True, Indeterminate=True, Type=Checkbox, Text=False, State=Hover
    "checked=true|indeterminate=true|type=checkbox|text=false|state=hover": __body20,
    // figma: Checked=True, Indeterminate=False, Type=Radio, Text=False, State=Hover
    "checked=true|indeterminate=false|type=radio|text=false|state=hover": __body21,
    // figma: Checked=True, Indeterminate=False, Type=Checkbox, Text=False, State=Default
    "checked=true|indeterminate=false|type=checkbox|text=false|state=default": __body13,
    // figma: Checked=True, Indeterminate=True, Type=Checkbox, Text=False, State=Default
    "checked=true|indeterminate=true|type=checkbox|text=false|state=default": __body14,
    // figma: Checked=True, Indeterminate=False, Type=Radio, Text=False, State=Default
    "checked=true|indeterminate=false|type=radio|text=false|state=default": __body22,
    // figma: Checked=False, Indeterminate=False, Type=Checkbox, Text=False, State=Hover
    "checked=false|indeterminate=false|type=checkbox|text=false|state=hover": __body23,
    // figma: Checked=False, Indeterminate=False, Type=Radio, Text=False, State=Hover
    "checked=false|indeterminate=false|type=radio|text=false|state=hover": __body24,
    // figma: Checked=False, Indeterminate=False, Type=Checkbox, Text=False, State=Focused
    "checked=false|indeterminate=false|type=checkbox|text=false|state=focused": __body25,
    // figma: Checked=False, Indeterminate=False, Type=Radio, Text=False, State=Focused
    "checked=false|indeterminate=false|type=radio|text=false|state=focused": __body26,
    // figma: Checked=False, Indeterminate=False, Type=Checkbox, Text=False, State=Disabled
    "checked=false|indeterminate=false|type=checkbox|text=false|state=disabled": __body25,
    // figma: Checked=False, Indeterminate=False, Type=Radio, Text=False, State=Disabled
    "checked=false|indeterminate=false|type=radio|text=false|state=disabled": __body27,
    // figma: Checked=False, Indeterminate=False, Type=Checkbox, Text=False, State=Default
    "checked=false|indeterminate=false|type=checkbox|text=false|state=default": __body25,
    // figma: Checked=False, Indeterminate=False, Type=Radio, Text=False, State=Default
    "checked=false|indeterminate=false|type=radio|text=false|state=default": __body28
  };
  return (__impls[__vkey_CheckboxText(props)] ?? __body25)();
}

// figma node: 28:5628 Ava (8 variants)
var __venc_Ava = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_Ava = p => "size=" + __venc_Ava(p.size) + '|' + "text=" + __venc_Ava(p.text);

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

// figma node: 28:29962 Check group (24 variants)
var __venc_CheckGroup = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_CheckGroup = p => "selected=" + __venc_CheckGroup(p.selected) + '|' + "type=" + __venc_CheckGroup(p.type) + '|' + "state=" + __venc_CheckGroup(p.state);

function CheckGroup(_p = {}) {
  const props = {
    ..._p,
    selected: _p.selected ?? false,
    type: _p.type ?? "avatar",
    state: _p.state ?? "default",
    subText: _p.subText ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 768,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(239,244,255)",
      boxShadow: "inset 0 0 0 2px rgb(21,94,239), 0px 1px 2px 0px rgba(16,24,40,0.08), 0px 0px 0px 2px rgb(209,224,255)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 16px 16px 16px",
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
      flexDirection: "row",
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: true,
    indeterminate: false,
    type: "radio",
    state: "focused"
  }))), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "flex-start",
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
      color: "rgb(83,56,158)",
      flexShrink: 0
    }
  }, props.text1 ?? "Text demo")), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(105,65,198)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Sub text demo"))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 768,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(239,244,255)",
      boxShadow: "inset 0 0 0 2px rgb(21,94,239), 0px 1px 2px 0px rgba(16,24,40,0.08), 0px 0px 0px 2px rgb(209,224,255)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 16px 16px 16px",
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
      flexDirection: "row",
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: true,
    indeterminate: false,
    type: "checkbox",
    state: "focused"
  }))), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "flex-start",
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
      color: "rgb(83,56,158)",
      flexShrink: 0
    }
  }, props.text1 ?? "Text demo")), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(105,65,198)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Sub text demo"))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 768,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(239,244,255)",
      boxShadow: "inset 0 0 0 2px rgb(21,94,239), 0px 1px 2px 0px rgba(16,24,40,0.08), 0px 0px 0px 2px rgb(209,224,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "16px 16px 16px 16px",
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
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Ava, {
    size: "sm",
    text: false
  })), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "flex-start",
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
      color: "rgb(83,56,158)",
      flexShrink: 0
    }
  }, props.text1 ?? "Text demo")), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(105,65,198)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Subtext demo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: true,
    indeterminate: false,
    type: "check circle",
    state: "focused"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 768,
      borderRadius: 12,
      backgroundColor: "rgb(239,244,255)",
      boxShadow: "inset 0 0 0 2px rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 16px 16px 16px",
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
      flexDirection: "row",
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: true,
    indeterminate: false,
    type: "radio",
    state: "hover"
  }))), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "flex-start",
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
      color: "rgb(83,56,158)",
      flexShrink: 0
    }
  }, props.text1 ?? "Text demo")), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(105,65,198)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Sub text demo"))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 768,
      borderRadius: 12,
      backgroundColor: "rgb(239,244,255)",
      boxShadow: "inset 0 0 0 2px rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 16px 16px 16px",
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
      flexDirection: "row",
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: true,
    indeterminate: false,
    type: "checkbox",
    state: "hover"
  }))), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "flex-start",
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
      color: "rgb(83,56,158)",
      flexShrink: 0
    }
  }, props.text1 ?? "Text demo")), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(105,65,198)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Sub text demo"))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 768,
      borderRadius: 12,
      backgroundColor: "rgb(239,244,255)",
      boxShadow: "inset 0 0 0 2px rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "16px 16px 16px 16px",
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
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Ava, {
    size: "sm",
    text: false
  })), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "flex-start",
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
      color: "rgb(83,56,158)",
      flexShrink: 0
    }
  }, props.text1 ?? "Text demo")), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(105,65,198)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Subtext demo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: true,
    indeterminate: false,
    type: "check circle",
    state: "hover"
  })));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 768,
      borderRadius: 12,
      backgroundColor: "rgb(239,244,255)",
      boxShadow: "inset 0 0 0 2px rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 16px 16px 16px",
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
      flexDirection: "row",
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: true,
    indeterminate: false,
    type: "radio",
    state: "default"
  }))), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "flex-start",
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
      color: "rgb(83,56,158)",
      flexShrink: 0
    }
  }, props.text1 ?? "Text demo")), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(105,65,198)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Sub text demo"))));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 768,
      borderRadius: 12,
      backgroundColor: "rgb(239,244,255)",
      boxShadow: "inset 0 0 0 2px rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 16px 16px 16px",
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
      flexDirection: "row",
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: true,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }))), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "flex-start",
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
      color: "rgb(83,56,158)",
      flexShrink: 0
    }
  }, props.text1 ?? "Text demo")), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(105,65,198)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Sub text demo"))));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 768,
      borderRadius: 12,
      backgroundColor: "rgb(239,244,255)",
      boxShadow: "inset 0 0 0 2px rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "16px 16px 16px 16px",
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
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Ava, {
    size: "sm",
    text: false
  })), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "flex-start",
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
      color: "rgb(83,56,158)",
      flexShrink: 0
    }
  }, props.text1 ?? "Text demo")), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(105,65,198)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Subtext demo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: true,
    indeterminate: false,
    type: "check circle",
    state: "default"
  })));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 768,
      borderRadius: 12,
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "inset 0 0 0 2px rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 16px 16px 16px",
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
      flexDirection: "row",
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: true,
    indeterminate: false,
    type: "radio",
    state: "disbaled"
  }))), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "flex-start",
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
  }, props.text1 ?? "Text demo")), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Sub text demo"))));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 768,
      borderRadius: 12,
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "inset 0 0 0 2px rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 16px 16px 16px",
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
      flexDirection: "row",
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: true,
    indeterminate: false,
    type: "checkbox",
    state: "disbaled"
  }))), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "flex-start",
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
  }, props.text1 ?? "Text demo")), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Sub text demo"))));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 768,
      borderRadius: 12,
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "inset 0 0 0 2px rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "16px 16px 16px 16px",
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
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Ava, {
    size: "sm",
    text: false
  })), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "flex-start",
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
  }, props.text1 ?? "Text demo")), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Subtext demo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: true,
    indeterminate: false,
    type: "check circle",
    state: "disbaled"
  })));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 768,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(132,173,255), 0px 1px 2px 0px rgba(16,24,40,0.08), 0px 0px 0px 2px rgb(209,224,255)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 16px 16px 16px",
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
      flexDirection: "row",
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: false,
    indeterminate: false,
    type: "radio",
    state: "focused"
  }))), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "flex-start",
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
  }, props.text1 ?? "Text demo")), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Sub text demo"))));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 768,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(132,173,255), 0px 1px 2px 0px rgba(16,24,40,0.08), 0px 0px 0px 2px rgb(209,224,255)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 16px 16px 16px",
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
      flexDirection: "row",
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "focused"
  }))), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "flex-start",
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
  }, props.text1 ?? "Text demo")), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Sub text demo"))));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 768,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(132,173,255), 0px 1px 2px 0px rgba(16,24,40,0.08), 0px 0px 0px 2px rgb(209,224,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "16px 16px 16px 16px",
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
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Ava, {
    size: "sm",
    text: false
  })), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "flex-start",
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
  }, props.text1 ?? "Text demo")), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Subtext demo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: false,
    indeterminate: false,
    type: "check circle",
    state: "focused"
  })));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 768,
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(132,173,255)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 16px 16px 16px",
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
      flexDirection: "row",
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: false,
    indeterminate: false,
    type: "radio",
    state: "hover"
  }))), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "flex-start",
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
  }, props.text1 ?? "Text demo")), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Sub text demo"))));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 768,
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(132,173,255)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 16px 16px 16px",
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
      flexDirection: "row",
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "hover"
  }))), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "flex-start",
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
  }, props.text1 ?? "Text demo")), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Sub text demo"))));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 768,
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(132,173,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "16px 16px 16px 16px",
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
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Ava, {
    size: "sm",
    text: false
  })), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "flex-start",
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
  }, props.text1 ?? "Text demo")), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Subtext demo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: false,
    indeterminate: false,
    type: "check circle",
    state: "hover"
  })));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 768,
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 16px 16px 16px",
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
      flexDirection: "row",
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: false,
    indeterminate: false,
    type: "radio",
    state: "default"
  }))), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "flex-start",
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
  }, props.text1 ?? "Text demo")), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Sub text demo"))));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 768,
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 16px 16px 16px",
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
      flexDirection: "row",
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }))), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "flex-start",
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
  }, props.text1 ?? "Text demo")), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Sub text demo"))));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 768,
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "16px 16px 16px 16px",
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
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Ava, {
    size: "sm",
    text: false
  })), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "flex-start",
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
  }, props.text1 ?? "Text demo")), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Subtext demo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: false,
    indeterminate: false,
    type: "check circle",
    state: "default"
  })));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 768,
      borderRadius: 12,
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 16px 16px 16px",
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
      flexDirection: "row",
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: false,
    indeterminate: false,
    type: "radio",
    state: "disbaled"
  }))), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "flex-start",
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
  }, props.text1 ?? "Text demo")), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Sub text demo"))));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 768,
      borderRadius: 12,
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 16px 16px 16px",
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
      flexDirection: "row",
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
      flexDirection: "row",
      padding: "2px 0px 2px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "disbaled"
  }))), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "flex-start",
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
  }, props.text1 ?? "Text demo")), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Sub text demo"))));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 768,
      borderRadius: 12,
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "inset 0 0 0 1px rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "16px 16px 16px 16px",
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
      flexDirection: "row",
      gap: 12,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Ava, {
    size: "sm",
    text: false
  })), /*#__PURE__*/React.createElement("div", {
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
      alignItems: "flex-start",
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
  }, props.text1 ?? "Text demo")), props.subText && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "Subtext demo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: false,
    indeterminate: false,
    type: "check circle",
    state: "disbaled"
  })));
  const __impls = {
    // figma: Selected=True, Type=Radio button, State=Focused
    "selected=true|type=radio button|state=focused": __body0,
    // figma: Selected=True, Type=Checkbox, State=Focused
    "selected=true|type=checkbox|state=focused": __body1,
    // figma: Selected=True, Type=Avatar, State=Focused
    "selected=true|type=avatar|state=focused": __body2,
    // figma: Selected=True, Type=Radio button, State=Hover
    "selected=true|type=radio button|state=hover": __body3,
    // figma: Selected=True, Type=Checkbox, State=Hover
    "selected=true|type=checkbox|state=hover": __body4,
    // figma: Selected=True, Type=Avatar, State=Hover
    "selected=true|type=avatar|state=hover": __body5,
    // figma: Selected=True, Type=Radio button, State=Default
    "selected=true|type=radio button|state=default": __body6,
    // figma: Selected=True, Type=Checkbox, State=Default
    "selected=true|type=checkbox|state=default": __body7,
    // figma: Selected=True, Type=Avatar, State=Default
    "selected=true|type=avatar|state=default": __body8,
    // figma: Selected=True, Type=Radio button, State=Disabled
    "selected=true|type=radio button|state=disabled": __body9,
    // figma: Selected=True, Type=Checkbox, State=Disabled
    "selected=true|type=checkbox|state=disabled": __body10,
    // figma: Selected=True, Type=Avatar, State=Disabled
    "selected=true|type=avatar|state=disabled": __body11,
    // figma: Selected=False, Type=Radio button, State=Focused
    "selected=false|type=radio button|state=focused": __body12,
    // figma: Selected=False, Type=Checkbox, State=Focused
    "selected=false|type=checkbox|state=focused": __body13,
    // figma: Selected=False, Type=Avatar, State=Focused
    "selected=false|type=avatar|state=focused": __body14,
    // figma: Selected=False, Type=Radio button, State=Hover
    "selected=false|type=radio button|state=hover": __body15,
    // figma: Selected=False, Type=Checkbox, State=Hover
    "selected=false|type=checkbox|state=hover": __body16,
    // figma: Selected=False, Type=Avatar, State=Hover
    "selected=false|type=avatar|state=hover": __body17,
    // figma: Selected=False, Type=Radio button, State=Default
    "selected=false|type=radio button|state=default": __body18,
    // figma: Selected=False, Type=Checkbox, State=Default
    "selected=false|type=checkbox|state=default": __body19,
    // figma: Selected=False, Type=Avatar, State=Default
    "selected=false|type=avatar|state=default": __body20,
    // figma: Selected=False, Type=Radio button, State=Disabled
    "selected=false|type=radio button|state=disabled": __body21,
    // figma: Selected=False, Type=Checkbox, State=Disabled
    "selected=false|type=checkbox|state=disabled": __body22,
    // figma: Selected=False, Type=Avatar, State=Disabled
    "selected=false|type=avatar|state=disabled": __body23
  };
  return (__impls[__vkey_CheckGroup(props)] ?? __body20)();
}

// figma node: 24:4230 Divider (2 variants)
var __venc_Divider = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_Divider = p => "property1=" + __venc_Divider(p.property1);

function Divider(_p = {}) {
  const props = {
    ..._p,
    property1: _p.property1 ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 259,
      height: 0,
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 259,
    height: 1,
    viewBox: "0 -0.500 259 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 259,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 259 0 L 259 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 259,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 89 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 89 0.5 L 89 -0.5 L 0 -0.5 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0
    }
  }, props.text1 ?? "Text line")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 89 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 89 0.5 L 89 -0.5 L 0 -0.5 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __impls = {
    // figma: Property 1=True
    "property1=true": __body0,
    // figma: Property 1=False
    "property1=false": __body1
  };
  return (__impls[__vkey_Divider(props)] ?? __body1)();
}

// figma node: 108:18741 Edit
function Edit2(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 36,
      height: 36,
      overflow: "hidden",
      position: "relative",
      color: "rgba(0,0,0,0.85)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 32.143,
    height: 32.143,
    viewBox: "0 0 32.143 32.143",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.928,
      top: 1.925,
      width: 32.143,
      height: 32.143
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.854 25.714 C 5.934 25.714 6.015 25.706 6.095 25.694 L 12.853 24.509 C 12.933 24.493 13.01 24.457 13.066 24.396 L 30.098 7.365 C 30.135 7.328 30.165 7.283 30.185 7.235 C 30.205 7.186 30.215 7.134 30.215 7.081 C 30.215 7.029 30.205 6.977 30.185 6.928 C 30.165 6.88 30.135 6.835 30.098 6.798 L 23.42 0.117 C 23.344 0.04 23.243 0 23.135 0 C 23.026 0 22.926 0.04 22.85 0.117 L 5.818 17.148 C 5.758 17.208 5.721 17.281 5.705 17.361 L 4.52 24.119 C 4.481 24.334 4.495 24.556 4.561 24.765 C 4.627 24.973 4.742 25.163 4.898 25.317 C 5.163 25.574 5.496 25.714 5.854 25.714 L 5.854 25.714 Z M 8.562 18.707 L 23.135 4.138 L 26.08 7.083 L 11.507 21.652 L 7.935 22.283 L 8.562 18.707 L 8.562 18.707 Z M 30.857 29.089 L 1.286 29.089 C 0.575 29.089 0 29.664 0 30.375 L 0 31.821 C 0 31.998 0.145 32.143 0.321 32.143 L 31.821 32.143 C 31.998 32.143 32.143 31.998 32.143 31.821 L 32.143 30.375 C 32.143 29.664 31.568 29.089 30.857 29.089 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 108:18745 Text/Text (10 variants)
var __venc_TextText2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_TextText2 = p => "hierarchy=" + __venc_TextText2(p.hierarchy) + '|' + "bullet=" + __venc_TextText2(p.bullet) + '|' + "editable=" + __venc_TextText2(p.editable) + '|' + "copyable=" + __venc_TextText2(p.copyable);

function TextText2(_p = {}) {
  const props = {
    ..._p,
    hierarchy: _p.hierarchy ?? "primary",
    bullet: _p.bullet ?? true,
    editable: _p.editable ?? true,
    copyable: _p.copyable ?? true,
    text: _p.text ?? "Text line"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 4px 0px 4px",
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
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "￮"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(24,144,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 4px 0px 4px",
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
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "￮"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "0px 4px 0px 4px",
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
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "￮"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.45)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgb(24,144,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.45)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Edit2, {
    style: {
      transform: "scale(0.444, 0.444)",
      transformOrigin: "0 0"
    }
  })));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.45)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Edit2, {
    style: {
      transform: "scale(0.444, 0.444)",
      transformOrigin: "0 0"
    }
  })));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11,
    height: 14,
    viewBox: "0 0 11 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.5,
      top: 0,
      width: 11,
      height: 14,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.5 0 L 2.125 0 C 2.056 0 2 0.056 2 0.125 L 2 1 C 2 1.069 2.056 1.125 2.125 1.125 L 9.875 1.125 L 9.875 11.875 C 9.875 11.944 9.931 12 10 12 L 10.875 12 C 10.944 12 11 11.944 11 11.875 L 11 0.5 C 11 0.223 10.777 0 10.5 0 Z M 8.5 2 L 0.5 2 C 0.223 2 0 2.223 0 2.5 L 0 10.792 C 0 10.925 0.053 11.052 0.147 11.145 L 2.855 13.853 C 2.889 13.887 2.928 13.916 2.97 13.939 L 2.97 13.969 L 3.036 13.969 C 3.091 13.989 3.148 14 3.208 14 L 8.5 14 C 8.777 14 9 13.777 9 13.5 L 9 2.5 C 9 2.223 8.777 2 8.5 2 Z M 2.969 12.378 L 1.623 11.031 L 2.969 11.031 L 2.969 12.378 Z M 7.875 12.875 L 3.969 12.875 L 3.969 10.656 C 3.969 10.311 3.689 10.031 3.344 10.031 L 1.125 10.031 L 1.125 3.125 L 7.875 3.125 L 7.875 12.875 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "22px",
      color: "rgba(0,0,0,0.45)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11,
    height: 14,
    viewBox: "0 0 11 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.5,
      top: 0,
      width: 11,
      height: 14,
      color: "rgba(0,0,0,0.85)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.5 0 L 2.125 0 C 2.056 0 2 0.056 2 0.125 L 2 1 C 2 1.069 2.056 1.125 2.125 1.125 L 9.875 1.125 L 9.875 11.875 C 9.875 11.944 9.931 12 10 12 L 10.875 12 C 10.944 12 11 11.944 11 11.875 L 11 0.5 C 11 0.223 10.777 0 10.5 0 Z M 8.5 2 L 0.5 2 C 0.223 2 0 2.223 0 2.5 L 0 10.792 C 0 10.925 0.053 11.052 0.147 11.145 L 2.855 13.853 C 2.889 13.887 2.928 13.916 2.97 13.939 L 2.97 13.969 L 3.036 13.969 C 3.091 13.989 3.148 14 3.208 14 L 8.5 14 C 8.777 14 9 13.777 9 13.5 L 9 2.5 C 9 2.223 8.777 2 8.5 2 Z M 2.969 12.378 L 1.623 11.031 L 2.969 11.031 L 2.969 12.378 Z M 7.875 12.875 L 3.969 12.875 L 3.969 10.656 C 3.969 10.311 3.689 10.031 3.344 10.031 L 1.125 10.031 L 1.125 3.125 L 7.875 3.125 L 7.875 12.875 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __impls = {
    // figma: Hierarchy=link, Bullet=true, Editable=false, Copyable=false
    "hierarchy=link|bullet=true|editable=false|copyable=false": __body0,
    // figma: Hierarchy=primary, Bullet=true, Editable=false, Copyable=false
    "hierarchy=primary|bullet=true|editable=false|copyable=false": __body1,
    // figma: Hierarchy=secondary, Bullet=true, Editable=false, Copyable=false
    "hierarchy=secondary|bullet=true|editable=false|copyable=false": __body2,
    // figma: Hierarchy=primary, Bullet=false, Editable=false, Copyable=false
    "hierarchy=primary|bullet=false|editable=false|copyable=false": __body3,
    // figma: Hierarchy=link, Bullet=false, Editable=false, Copyable=false
    "hierarchy=link|bullet=false|editable=false|copyable=false": __body4,
    // figma: Hierarchy=secondary, Bullet=false, Editable=false, Copyable=false
    "hierarchy=secondary|bullet=false|editable=false|copyable=false": __body5,
    // figma: Hierarchy=primary, Bullet=false, Editable=true, Copyable=false
    "hierarchy=primary|bullet=false|editable=true|copyable=false": __body6,
    // figma: Hierarchy=secondary, Bullet=false, Editable=true, Copyable=false
    "hierarchy=secondary|bullet=false|editable=true|copyable=false": __body7,
    // figma: Hierarchy=primary, Bullet=false, Editable=false, Copyable=true
    "hierarchy=primary|bullet=false|editable=false|copyable=true": __body8,
    // figma: Hierarchy=secondary, Bullet=false, Editable=false, Copyable=true
    "hierarchy=secondary|bullet=false|editable=false|copyable=true": __body9
  };
  return (__impls[__vkey_TextText2(props)] ?? __body0)();
}

// figma node: 146:24522 Divider (10 variants)
var __venc_Divider2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_Divider2 = p => "type=" + __venc_Divider2(p.type) + '|' + "dashed=" + __venc_Divider2(p.dashed) + '|' + "title=" + __venc_Divider2(p.title) + '|' + "orientation=" + __venc_Divider2(p.orientation);

function Divider2(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "horizontal",
    dashed: _p.dashed ?? true,
    title: _p.title ?? false,
    orientation: _p.orientation ?? "left"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 224,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Divider2, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    type: "horizontal",
    dashed: false,
    title: false,
    orientation: ".n/a"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 71,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(TextText2, {
    hierarchy: "primary",
    bullet: false,
    editable: false,
    copyable: false
  })), /*#__PURE__*/React.createElement(Divider2, {
    style: {
      position: "relative",
      width: 21,
      flexShrink: 0
    },
    type: "horizontal",
    dashed: false,
    title: false,
    orientation: ".n/a"
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 215,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Divider2, {
    style: {
      position: "relative",
      width: 21,
      flexShrink: 0
    },
    type: "horizontal",
    dashed: false,
    title: false,
    orientation: ".n/a"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 62,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(TextText2, {
    hierarchy: "primary",
    bullet: false,
    editable: false,
    copyable: false
  })), /*#__PURE__*/React.createElement(Divider2, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    type: "horizontal",
    dashed: false,
    title: false,
    orientation: ".n/a"
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 259,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Divider2, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    type: "horizontal",
    dashed: false,
    title: false,
    orientation: ".n/a"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 60,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(TextText2, {
    hierarchy: "primary",
    bullet: false,
    editable: false,
    copyable: false
  })), /*#__PURE__*/React.createElement(Divider2, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    type: "horizontal",
    dashed: false,
    title: false,
    orientation: ".n/a"
  }));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 12,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1,
    viewBox: "-0.500 0 1 12",
    fill: "none",
    style: {
      position: "relative",
      width: 1,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.5 0 L -0.5 1.8 L 0.5 1.8 L 0.5 0 L -0.5 0 Z M -0.5 4.2 L -0.5 7.8 L 0.5 7.8 L 0.5 4.2 L -0.5 4.2 Z M -0.5 10.2 L -0.5 12 L 0.5 12 L 0.5 10.2 L -0.5 10.2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 12,
      backgroundColor: "rgba(0,0,0,0.06)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1,
    viewBox: "-0.500 0 1 12",
    fill: "none",
    style: {
      position: "relative",
      width: 1,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.5 0 L -0.5 12 L 0.5 12 L 0.5 0 L -0.5 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 40 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 1.5 0.5 L 1.5 -0.5 L 0 -0.5 L 0 0.5 Z M 3.5 0.5 L 6.5 0.5 L 6.5 -0.5 L 3.5 -0.5 L 3.5 0.5 Z M 8.5 0.5 L 11.5 0.5 L 11.5 -0.5 L 8.5 -0.5 L 8.5 0.5 Z M 13.5 0.5 L 16.5 0.5 L 16.5 -0.5 L 13.5 -0.5 L 13.5 0.5 Z M 18.5 0.5 L 21.5 0.5 L 21.5 -0.5 L 18.5 -0.5 L 18.5 0.5 Z M 23.5 0.5 L 26.5 0.5 L 26.5 -0.5 L 23.5 -0.5 L 23.5 0.5 Z M 28.5 0.5 L 31.5 0.5 L 31.5 -0.5 L 28.5 -0.5 L 28.5 0.5 Z M 33.5 0.5 L 36.5 0.5 L 36.5 -0.5 L 33.5 -0.5 L 33.5 0.5 Z M 38.5 0.5 L 40 0.5 L 40 -0.5 L 38.5 -0.5 L 38.5 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.06)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 40 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.5 L 40 0.5 L 40 -0.5 L 0 -0.5 L 0 0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Type=horizontal, Dashed=true, Title=true, ⬑Orientation=right
    "type=horizontal|dashed=true|title=true|orientation=right": __body0,
    // figma: Type=horizontal, Dashed=true, Title=true, ⬑Orientation=left
    "type=horizontal|dashed=true|title=true|orientation=left": __body1,
    // figma: Type=horizontal, Dashed=true, Title=true, ⬑Orientation=center
    "type=horizontal|dashed=true|title=true|orientation=center": __body2,
    // figma: Type=vertical, Dashed=true, Title=false, ⬑Orientation=.N/A
    "type=vertical|dashed=true|title=false|orientation=.n/a": __body3,
    // figma: Type=vertical, Dashed=false, Title=false, ⬑Orientation=.N/A
    "type=vertical|dashed=false|title=false|orientation=.n/a": __body4,
    // figma: Type=horizontal, Dashed=false, Title=true, ⬑Orientation=right
    "type=horizontal|dashed=false|title=true|orientation=right": __body0,
    // figma: Type=horizontal, Dashed=false, Title=true, ⬑Orientation=left
    "type=horizontal|dashed=false|title=true|orientation=left": __body1,
    // figma: Type=horizontal, Dashed=true, Title=false, ⬑Orientation=.N/A
    "type=horizontal|dashed=true|title=false|orientation=.n/a": __body5,
    // figma: Type=horizontal, Dashed=false, Title=false, ⬑Orientation=.N/A
    "type=horizontal|dashed=false|title=false|orientation=.n/a": __body6,
    // figma: Type=horizontal, Dashed=false, Title=true, ⬑Orientation=center
    "type=horizontal|dashed=false|title=true|orientation=center": __body2
  };
  return (__impls[__vkey_Divider2(props)] ?? __body0)();
}

// figma node: 181:34318 Anchor (3 variants)
var __venc_Anchor = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_Anchor = p => "state=" + __venc_Anchor(p.state);

function Anchor(_p = {}) {
  const props = {
    ..._p,
    state: _p.state ?? "link"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 0,
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Divider2, {
    style: {
      position: "absolute",
      left: 0,
      top: -2,
      height: 22
    },
    type: "vertical",
    dashed: false,
    title: false,
    orientation: ".n/a"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "link text"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
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
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Anchor, {
    state: "link"
  })), /*#__PURE__*/React.createElement(Anchor, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    state: "link"
  }), /*#__PURE__*/React.createElement(Anchor, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    state: "link"
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 0,
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Divider2, {
    style: {
      position: "absolute",
      left: 0,
      top: -2,
      height: 22
    },
    type: "vertical",
    dashed: false,
    title: false,
    orientation: ".n/a"
  }), /*#__PURE__*/React.createElement(Divider2, {
    style: {
      position: "absolute",
      left: 0,
      top: 3,
      height: 12
    },
    type: "vertical",
    dashed: false,
    title: false,
    orientation: ".n/a"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(0,78,235)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "link text selected"));
  const __impls = {
    // figma: State=Link
    "state=link": __body0,
    // figma: State=Link-With-Subs
    "state=link-with-subs": __body1,
    // figma: State=Link-Selected
    "state=link-selected": __body2
  };
  return (__impls[__vkey_Anchor(props)] ?? __body0)();
}

// figma node: 295:27911 Breadcrumb item (7 variants)
var __venc_BreadcrumbItem = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_BreadcrumbItem = p => "position=" + __venc_BreadcrumbItem(p.position) + '|' + "linked=" + __venc_BreadcrumbItem(p.linked) + '|' + "collapsed=" + __venc_BreadcrumbItem(p.collapsed);

function BreadcrumbItem(_p = {}) {
  const props = {
    ..._p,
    position: _p.position ?? "first",
    linked: _p.linked ?? false,
    collapsed: _p.collapsed ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,109,228,0.2)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 24,
    viewBox: "0 0 16 24",
    fill: "none",
    style: {
      position: "absolute",
      left: -8,
      top: 0,
      width: 16,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 0 L 0 0 L 8 12 L 0 24 L 16 24 L 16 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "0px 6px 6px 0px",
      backgroundColor: "rgba(0,109,228,0.2)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 8px 3px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(0,94,196)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Breadcrumb")));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(105,112,125,0.2)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 24,
    viewBox: "0 0 16 24",
    fill: "none",
    style: {
      position: "absolute",
      left: -8,
      top: 0,
      width: 16,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 0 L 0 0 L 8 12 L 0 24 L 16 24 L 16 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "0px 6px 6px 0px",
      backgroundColor: "rgba(105,112,125,0.2)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 8px 3px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(52,55,65)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Breadcrumb")));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,109,228,0.2)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 24,
    viewBox: "0 0 16 24",
    fill: "none",
    style: {
      position: "absolute",
      left: -8,
      top: 0,
      width: 16,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 0 L 0 0 L 8 12 L 0 24 L 16 24 L 16 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgba(0,109,228,0.2)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(0,94,196)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Breadcrumb")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 24,
    viewBox: "0 0 12 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12 12 L 4 24 L 0 24 L 0 0 L 4 0 L 12 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(105,112,125,0.2)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 24,
    viewBox: "0 0 16 24",
    fill: "none",
    style: {
      position: "absolute",
      left: -8,
      top: 0,
      width: 16,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 0 L 0 0 L 8 12 L 0 24 L 16 24 L 16 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgba(105,112,125,0.2)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 0px 3px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(52,55,65)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Breadcrumb")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 24,
    viewBox: "0 0 12 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12 12 L 4 24 L 0 24 L 0 0 L 4 0 L 12 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: "6px 0px 0px 6px",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(105,112,125,0.2)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 79,
      overflow: "hidden",
      backgroundColor: "rgba(105,112,125,0.2)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 8px 3px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(52,55,65)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Breadcrumb")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 24,
    viewBox: "0 0 12 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12 12 L 4 24 L 0 24 L 0 0 L 4 0 L 12 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      overflow: "hidden",
      borderRadius: "6px 0px 0px 6px",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,109,228,0.2)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 79,
      overflow: "hidden",
      backgroundColor: "rgba(0,109,228,0.2)",
      display: "flex",
      flexDirection: "row",
      padding: "3px 8px 3px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(0,94,196)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Breadcrumb")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 24,
    viewBox: "0 0 12 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12 12 L 4 24 L 0 24 L 0 0 L 4 0 L 12 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,109,228,0.2)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 24,
    viewBox: "0 0 16 24",
    fill: "none",
    style: {
      position: "absolute",
      left: -8,
      top: 0,
      width: 16,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16 0 L 0 0 L 8 12 L 0 24 L 16 24 L 16 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgba(0,109,228,0.2)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "3px 0px 3px 0px",
      alignItems: "center",
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
      lineHeight: "16px",
      color: "rgb(0,94,196)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "…"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronDown, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 24,
    viewBox: "0 0 12 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 12 12 L 4 24 L 0 24 L 0 0 L 4 0 L 12 12 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __impls = {
    // figma: Position=Last, Linked=True, Collapsed=False
    "position=last|linked=true|collapsed=false": __body0,
    // figma: Position=Last, Linked=False, Collapsed=False
    "position=last|linked=false|collapsed=false": __body1,
    // figma: Position=Middle, Linked=True, Collapsed=False
    "position=middle|linked=true|collapsed=false": __body2,
    // figma: Position=Middle, Linked=False, Collapsed=False
    "position=middle|linked=false|collapsed=false": __body3,
    // figma: Position=First, Linked=False, Collapsed=False
    "position=first|linked=false|collapsed=false": __body4,
    // figma: Position=First, Linked=True, Collapsed=False
    "position=first|linked=true|collapsed=false": __body5,
    // figma: Position=Middle, Linked=True, Collapsed=True
    "position=middle|linked=true|collapsed=true": __body6
  };
  return (__impls[__vkey_BreadcrumbItem(props)] ?? __body0)();
}

// figma node: 295:28342 Breadcrumbs (4 variants)
var __venc_Breadcrumbs = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_Breadcrumbs = p => "breadcrumb=" + __venc_Breadcrumbs(p.breadcrumb);

function Breadcrumbs(_p = {}) {
  const props = {
    ..._p,
    breadcrumb: _p.breadcrumb ?? "2"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(BreadcrumbItem, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "Breadcrumb",
    position: "first",
    linked: true,
    collapsed: false
  }), /*#__PURE__*/React.createElement(BreadcrumbItem, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "Breadcrumb",
    position: "last",
    linked: false,
    collapsed: false
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(BreadcrumbItem, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "Breadcrumb",
    position: "first",
    linked: true,
    collapsed: false
  }), /*#__PURE__*/React.createElement(BreadcrumbItem, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "Breadcrumb",
    position: "middle",
    linked: true,
    collapsed: false
  }), /*#__PURE__*/React.createElement(BreadcrumbItem, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "Breadcrumb",
    position: "last",
    linked: false,
    collapsed: false
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(BreadcrumbItem, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "Breadcrumb",
    position: "first",
    linked: true,
    collapsed: false
  }), /*#__PURE__*/React.createElement(BreadcrumbItem, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "Breadcrumb",
    position: "middle",
    linked: true,
    collapsed: false
  }), /*#__PURE__*/React.createElement(BreadcrumbItem, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "Breadcrumb",
    position: "middle",
    linked: true,
    collapsed: false
  }), /*#__PURE__*/React.createElement(BreadcrumbItem, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "Breadcrumb",
    position: "last",
    linked: false,
    collapsed: false
  }));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(BreadcrumbItem, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "Breadcrumb",
    position: "first",
    linked: true,
    collapsed: false
  }), /*#__PURE__*/React.createElement(BreadcrumbItem, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "Breadcrumb",
    position: "middle",
    linked: true,
    collapsed: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(BreadcrumbItem, {
    position: "middle",
    linked: true,
    collapsed: true
  })), /*#__PURE__*/React.createElement(BreadcrumbItem, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "Breadcrumb",
    position: "middle",
    linked: true,
    collapsed: false
  }), /*#__PURE__*/React.createElement(BreadcrumbItem, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "Breadcrumb",
    position: "last",
    linked: false,
    collapsed: false
  }));
  const __impls = {
    // figma: Breadcrumb=2
    "breadcrumb=2": __body0,
    // figma: Breadcrumb=3
    "breadcrumb=3": __body1,
    // figma: Breadcrumb=4
    "breadcrumb=4": __body2,
    // figma: Breadcrumb=5
    "breadcrumb=5": __body3
  };
  return (__impls[__vkey_Breadcrumbs(props)] ?? __body0)();
}

// figma node: 286:26212 arrowDown
function ArrowDown2(_p = {}) {
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
    height: 6.368,
    viewBox: "0 0 12.500 6.368",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.75,
      top: 4.75,
      width: 12.5,
      height: 6.368
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.207 0.232 C 0.493 -0.067 0.968 -0.079 1.268 0.207 L 6.077 4.798 C 6.174 4.891 6.326 4.891 6.423 4.798 L 11.232 0.207 C 11.532 -0.079 12.007 -0.067 12.293 0.232 C 12.579 0.532 12.567 1.007 12.268 1.293 L 7.458 5.883 C 6.782 6.529 5.718 6.529 5.042 5.883 L 0.232 1.293 C -0.067 1.007 -0.079 0.532 0.207 0.232 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 296:30415 popout
function Popout(_p = {}) {
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
    width: 13,
    height: 13,
    viewBox: "0 0 13 13",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 1,
      width: 13,
      height: 13
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11 7.5 C 11 7.224 11.224 7 11.5 7 C 11.776 7 12 7.224 12 7.5 L 12 11 C 12 12.105 11.105 13 10 13 L 2 13 C 0.895 13 0 12.105 0 11 L 0 3 C 0 1.895 0.895 1 2 1 L 5.5 1 C 5.776 1 6 1.224 6 1.5 C 6 1.776 5.776 2 5.5 2 L 2 2 C 1.448 2 1 2.448 1 3 L 1 11 C 1 11.552 1.448 12 2 12 L 10 12 C 10.552 12 11 11.552 11 11 L 11 7.5 Z M 5.881 7.839 C 5.685 8.034 5.369 8.034 5.174 7.839 C 4.978 7.644 4.978 7.327 5.174 7.132 L 11.305 1 L 8.5 1 C 8.224 1 8 0.776 8 0.5 C 8 0.224 8.224 0 8.5 0 L 12 0 C 12.552 0 13 0.448 13 1 L 13 4.5 C 13 4.776 12.776 5 12.5 5 C 12.224 5 12 4.776 12 4.5 L 12 1.719 L 5.881 7.839 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 296:30419 Text - Link (9 variants)
var __venc_TextLink = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_TextLink = p => "textScale=" + __venc_TextLink(p.textScale) + '|' + "external=" + __venc_TextLink(p.external) + '|' + "blockform=" + __venc_TextLink(p.blockform);

function TextLink(_p = {}) {
  const props = {
    ..._p,
    textScale: _p.textScale ?? "md",
    external: _p.external ?? false,
    blockform: _p.blockform ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(0,113,194)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Medium link"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Zilla Slab Highlight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      letterSpacing: "2px",
      color: "rgb(0,119,204)",
      textDecoration: "underline",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Medium link"));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(0,113,194)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 7.5,
      width: 12,
      height: 12
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Popout, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(0,113,194)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Xsmall Link"));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Zilla Slab Highlight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 8,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      letterSpacing: "2px",
      color: "rgb(0,119,204)",
      textDecoration: "underline",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Xsmall Link"));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(0,113,194)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 3.5,
      width: 12,
      height: 12
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Popout, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(0,113,194)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Small link"));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Zilla Slab Highlight\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 10,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      letterSpacing: "2px",
      color: "rgb(0,119,204)",
      textDecoration: "underline",
      textTransform: "uppercase",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Small link"));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(0,113,194)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Link"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 5.5,
      width: 12,
      height: 12
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Popout, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __impls = {
    // figma: Text scale=Medium, External=False, Blockform=No
    "textScale=md|external=false|blockform=false": __body0,
    // figma: Text scale=Medium, External=False, Blockform=Yes
    "textScale=md|external=false|blockform=true": __body1,
    // figma: Text scale=Medium, External=True, Blockform=No
    "textScale=md|external=true|blockform=false": __body2,
    // figma: Text scale=X-Small, External=False, Blockform=No
    "textScale=xs|external=false|blockform=false": __body3,
    // figma: Text scale=X-Small, External=False, Blockform=Yes
    "textScale=xs|external=false|blockform=true": __body4,
    // figma: Text scale=X-Small, External=True, Blockform=No
    "textScale=xs|external=true|blockform=false": __body5,
    // figma: Text scale=Small, External=False, Blockform=No
    "textScale=sm|external=false|blockform=false": __body6,
    // figma: Text scale=Small, External=False, Blockform=Yes
    "textScale=sm|external=false|blockform=true": __body7,
    // figma: Text scale=Small, External=True, Blockform=No
    "textScale=sm|external=true|blockform=false": __body8
  };
  return (__impls[__vkey_TextLink(props)] ?? __body0)();
}

// figma node: 296:30444 .📦Breadcrumb (4 variants)
var __venc_Breadcrumb = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_Breadcrumb = p => "type=" + __venc_Breadcrumb(p.type) + '|' + "active=" + __venc_Breadcrumb(p.active);

function Breadcrumb(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "default",
    active: _p.active ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
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
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(105,112,125)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Breadcrumb")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 5,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.966,0.259,-0.259,0.966,4.141,3)",
      transformOrigin: "0 0",
      width: 1,
      height: 16,
      backgroundColor: "rgb(211,218,230)"
    }
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
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
      color: "rgb(105,112,125)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "…"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(ArrowDown2, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 5,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.966,0.259,-0.259,0.966,4.141,3)",
      transformOrigin: "0 0",
      width: 1,
      height: 16,
      backgroundColor: "rgb(211,218,230)"
    }
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,55,65)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Breadcrumb"));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.776,
    height: 9.375,
    viewBox: "0 0 4.776 9.375",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.662,
      top: 1.312,
      width: 4.776,
      height: 9.375,
      color: "rgb(52,55,65)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.602 9.219 C 4.826 9.005 4.835 8.649 4.62 8.424 L 1.177 4.817 C 1.108 4.745 1.108 4.63 1.177 4.558 L 4.62 0.951 C 4.835 0.726 4.826 0.37 4.602 0.156 C 4.377 -0.059 4.021 -0.051 3.806 0.174 L 0.363 3.781 C -0.121 4.288 -0.121 5.087 0.363 5.594 L 3.806 9.201 C 4.021 9.426 4.377 9.434 4.602 9.219 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 45,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(TextLink, {
    text1: "Return",
    textScale: "sm",
    external: false,
    blockform: false
  })));
  const __impls = {
    // figma: Type=Default, Active=False
    "type=default|active=false": __body0,
    // figma: Type=Collapsed, Active=False
    "type=collapsed|active=false": __body1,
    // figma: Type=Default, Active=True
    "type=default|active=true": __body2,
    // figma: Type=Go back, Active=False
    "type=go back|active=false": __body3
  };
  return (__impls[__vkey_Breadcrumb(props)] ?? __body2)();
}

// figma node: 275:58612 Icon/Chevron--left
function IconChevronLeft(_p = {}) {
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
      left: 5,
      top: 3,
      width: 5.7,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5 L 5 0 L 5.7 0.7 L 1.4 5 L 5.7 9.3 L 5 10 L 0 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 296:30899 Breadcrumbs normal (6 variants)
var __venc_BreadcrumbsNormal = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_BreadcrumbsNormal = p => "count=" + __venc_BreadcrumbsNormal(p.count) + '|' + "goBack=" + __venc_BreadcrumbsNormal(p.goBack);

function BreadcrumbsNormal(_p = {}) {
  const props = {
    ..._p,
    count: _p.count ?? "1",
    goBack: _p.goBack ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "Breadcrumb",
    type: "default",
    active: false
  }), /*#__PURE__*/React.createElement(Breadcrumb, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    type: "default",
    active: true
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "Breadcrumb",
    type: "default",
    active: false
  }), /*#__PURE__*/React.createElement(Breadcrumb, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "Breadcrumb",
    type: "default",
    active: false
  }), /*#__PURE__*/React.createElement(Breadcrumb, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    type: "default",
    active: true
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "Breadcrumb",
    type: "default",
    active: false
  }), /*#__PURE__*/React.createElement(Breadcrumb, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "Breadcrumb",
    type: "default",
    active: false
  }), /*#__PURE__*/React.createElement(Breadcrumb, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "Breadcrumb",
    type: "default",
    active: false
  }), /*#__PURE__*/React.createElement(Breadcrumb, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    type: "default",
    active: true
  }));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "Breadcrumb",
    type: "default",
    active: false
  }), /*#__PURE__*/React.createElement(Breadcrumb, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "Breadcrumb",
    type: "default",
    active: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Breadcrumb, {
    icon1: /*#__PURE__*/React.createElement(IconChevronDown, {
      style: {
        transform: "scale(0.750, 0.750)",
        transformOrigin: "0 0"
      }
    }),
    type: "collapsed",
    active: false
  })), /*#__PURE__*/React.createElement(Breadcrumb, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    type: "default",
    active: false
  }), /*#__PURE__*/React.createElement(Breadcrumb, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    type: "default",
    active: true
  }));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    type: "default",
    active: true
  }));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Breadcrumb, {
    icon1: /*#__PURE__*/React.createElement(IconChevronLeft, {
      style: {
        transform: "scale(0.750, 0.750)",
        transformOrigin: "0 0"
      }
    }),
    type: "go back",
    active: false
  })));
  const __impls = {
    // figma: Count=2, Go back=False
    "count=2|goBack=false": __body0,
    // figma: Count=3, Go back=False
    "count=3|goBack=false": __body1,
    // figma: Count=4, Go back=False
    "count=4|goBack=false": __body2,
    // figma: Count=Many, Go back=False
    "count=many|goBack=false": __body3,
    // figma: Count=1, Go back=False
    "count=1|goBack=false": __body4,
    // figma: Count=1, Go back=True
    "count=1|goBack=true": __body5
  };
  return (__impls[__vkey_BreadcrumbsNormal(props)] ?? __body4)();
}

// figma node: 286:26179 plusInCircle
function PlusInCircle2(_p = {}) {
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
    width: 15,
    height: 15,
    viewBox: "0 0 15 15",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.5,
      top: 0.5,
      width: 15,
      height: 15
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 7 L 11.5 7 C 11.776 7 12 7.224 12 7.5 C 12 7.776 11.776 8 11.5 8 L 8 8 L 8 11.5 C 8 11.776 7.776 12 7.5 12 C 7.224 12 7 11.776 7 11.5 L 7 8 L 3.5 8 C 3.224 8 3 7.776 3 7.5 C 3 7.224 3.224 7 3.5 7 L 7 7 L 7 3.5 C 7 3.224 7.224 3 7.5 3 C 7.776 3 8 3.224 8 3.5 L 8 7 Z M 7.5 0 C 11.636 0 15 3.364 15 7.5 C 15 11.636 11.636 15 7.5 15 C 3.364 15 0 11.636 0 7.5 C 0 3.364 3.364 0 7.5 0 Z M 7.5 0.882 C 3.845 0.882 0.882 3.845 0.882 7.5 C 0.882 11.155 3.845 14.118 7.5 14.118 C 11.155 14.118 14.118 11.155 14.118 7.5 C 14.118 3.845 11.155 0.882 7.5 0.882 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 766:36071 Spinner / Animated (20 variants)
var __venc_SpinnerAnimated = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_SpinnerAnimated = p => "size=" + __venc_SpinnerAnimated(p.size) + '|' + "keyframe=" + __venc_SpinnerAnimated(p.keyframe);

function SpinnerAnimated(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "2xl",
    keyframe: _p.keyframe ?? "1"
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
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,12)",
      transformOrigin: "0 0",
      width: 12,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("svg", {
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
    d: "M 5 6 C 5 6 5 6 5 6 C 5 3.239 2.761 1 0 1 L 0 0 L 0.012 0 C 3.32 0.006 6 2.69 6 6 C 6 6 6 6 6 6 L 5 6 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
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
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,12,12)",
      transformOrigin: "0 0",
      width: 12,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.000,
    height: 6,
    viewBox: "0 0 6.000 6",
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
  }))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
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
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,12,0)",
      transformOrigin: "0 0",
      width: 12,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("svg", {
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
  }))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
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
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 12,
      height: 12
    }
  }, /*#__PURE__*/React.createElement("svg", {
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
  }))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
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
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,24)",
      transformOrigin: "0 0",
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
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
    d: "M 10 12 C 10 12 10 12 10 12 C 10 6.477 5.523 2 0 2 L 0 0 L 0.017 0 C 6.637 0.009 12 5.378 12 12 C 12 12 12 12 12 12 L 10 12 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
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
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,24,24)",
      transformOrigin: "0 0",
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 12.000,
    height: 12,
    viewBox: "0 0 12.000 12",
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
  }))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
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
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,24,0)",
      transformOrigin: "0 0",
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
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
  }))));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
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
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("svg", {
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
  }))));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
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
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,32)",
      transformOrigin: "0 0",
      width: 32,
      height: 32
    }
  }, /*#__PURE__*/React.createElement("svg", {
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
    d: "M 14 16 L 16 16 C 16 7.17 8.847 0.011 0.02 0 L 0 0 L 0 2 C 7.732 2 14 8.268 14 16 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
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
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,32,32)",
      transformOrigin: "0 0",
      width: 32,
      height: 32
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.000,
    height: 16,
    viewBox: "0 0 16.000 16",
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
  }))));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
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
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,32,0)",
      transformOrigin: "0 0",
      width: 32,
      height: 32
    }
  }, /*#__PURE__*/React.createElement("svg", {
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
  }))));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
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
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 32,
      height: 32
    }
  }, /*#__PURE__*/React.createElement("svg", {
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
  }))));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
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
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,40)",
      transformOrigin: "0 0",
      width: 40,
      height: 40
    }
  }, /*#__PURE__*/React.createElement("svg", {
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
    d: "M 18 20 L 20 20 C 20 8.962 11.057 0.012 0.022 0 L 0 0 L 0 2 C 9.941 2 18 10.059 18 20 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
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
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,40,40)",
      transformOrigin: "0 0",
      width: 40,
      height: 40
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.000,
    height: 20,
    viewBox: "0 0 20.000 20",
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
  }))));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
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
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,40,0)",
      transformOrigin: "0 0",
      width: 40,
      height: 40
    }
  }, /*#__PURE__*/React.createElement("svg", {
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
  }))));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
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
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 40,
      height: 40
    }
  }, /*#__PURE__*/React.createElement("svg", {
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
  }))));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
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
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,-1,1,0,0,16)",
      transformOrigin: "0 0",
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
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
    d: "M 7 8 C 7 8 7 8 7 8 C 7 4.134 3.866 1 0 1 L 0 0 L 0.014 0 C 4.426 0.007 8 3.586 8 8 C 8 8 8 8 8 8 L 7 8 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
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
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,-1,16,16)",
      transformOrigin: "0 0",
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.000,
    height: 8,
    viewBox: "0 0 8.000 8",
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
  }))));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
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
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,16,0)",
      transformOrigin: "0 0",
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
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
  }))));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
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
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16,
      height: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
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
  }))));
  const __impls = {
    // figma: Size=Small, Keyframe=4
    "size=sm|keyframe=4": __body0,
    // figma: Size=Small, Keyframe=3
    "size=sm|keyframe=3": __body1,
    // figma: Size=Small, Keyframe=2
    "size=sm|keyframe=2": __body2,
    // figma: Size=Small, Keyframe=1
    "size=sm|keyframe=1": __body3,
    // figma: Size=Large, Keyframe=4
    "size=lg|keyframe=4": __body4,
    // figma: Size=Large, Keyframe=3
    "size=lg|keyframe=3": __body5,
    // figma: Size=Large, Keyframe=2
    "size=lg|keyframe=2": __body6,
    // figma: Size=Large, Keyframe=1
    "size=lg|keyframe=1": __body7,
    // figma: Size=X-Large, Keyframe=4
    "size=xl|keyframe=4": __body8,
    // figma: Size=X-Large, Keyframe=3
    "size=xl|keyframe=3": __body9,
    // figma: Size=X-Large, Keyframe=2
    "size=xl|keyframe=2": __body10,
    // figma: Size=X-Large, Keyframe=1
    "size=xl|keyframe=1": __body11,
    // figma: Size=XX-Large, Keyframe=4
    "size=2xl|keyframe=4": __body12,
    // figma: Size=XX-Large, Keyframe=3
    "size=2xl|keyframe=3": __body13,
    // figma: Size=XX-Large, Keyframe=2
    "size=2xl|keyframe=2": __body14,
    // figma: Size=XX-Large, Keyframe=1
    "size=2xl|keyframe=1": __body15,
    // figma: Size=Medium*, Keyframe=4
    "size=medium*|keyframe=4": __body16,
    // figma: Size=Medium*, Keyframe=3
    "size=medium*|keyframe=3": __body17,
    // figma: Size=Medium*, Keyframe=2
    "size=medium*|keyframe=2": __body18,
    // figma: Size=Medium*, Keyframe=1
    "size=medium*|keyframe=1": __body19
  };
  return (__impls[__vkey_SpinnerAnimated(props)] ?? __body15)();
}

// figma node: 766:36193 Button (156 variants)
var __venc_Button6 = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_Button6 = p => "style2=" + __venc_Button6(p.style2) + '|' + "color=" + __venc_Button6(p.color) + '|' + "size=" + __venc_Button6(p.size) + '|' + "disabled=" + __venc_Button6(p.disabled) + '|' + "loading=" + __venc_Button6(p.loading) + '|' + "iconOnly=" + __venc_Button6(p.iconOnly);

function Button6(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "default*",
    color: _p.color ?? "primary*",
    size: _p.size ?? "medium*",
    disabled: _p.disabled ?? false,
    loading: _p.loading ?? false,
    iconOnly: _p.iconOnly ?? true,
    text: _p.text ?? "Button",
    iconLeft: _p.iconLeft ?? true,
    loadingText: _p.loadingText ?? "Loading…",
    minWidth: _p.minWidth ?? true,
    iconRight: _p.iconRight ?? false,
    leftSpinner: _p.leftSpinner ?? true,
    rightSpinner: _p.rightSpinner ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "medium*",
    keyframe: "1"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "medium*",
    keyframe: "1"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      height: 40,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "medium*",
    keyframe: "1"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgba(105,112,125,0.1)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "medium*",
    keyframe: "1"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgba(105,112,125,0.1)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "medium*",
    keyframe: "1"
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgba(105,112,125,0.1)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "medium*",
    keyframe: "1"
  })));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
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
  }, props.leftSpinner && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "sm",
    keyframe: "1"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(105,112,125)",
      flexShrink: 0
    }
  }, props.loadingText), props.rightSpinner && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "sm",
    keyframe: "1"
  })));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
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
  }, props.leftSpinner && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "medium*",
    keyframe: "1"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(105,112,125)",
      flexShrink: 0
    }
  }, props.loadingText), props.rightSpinner && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "medium*",
    keyframe: "1"
  })));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
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
  }, props.leftSpinner && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "medium*",
    keyframe: "1"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(105,112,125)",
      flexShrink: 0
    }
  }, props.loadingText), props.rightSpinner && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "medium*",
    keyframe: "1"
  })));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgba(105,112,125,0.1)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.leftSpinner && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "medium*",
    keyframe: "1"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(105,112,125)",
      flexShrink: 0
    }
  }, props.loadingText), props.rightSpinner && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "medium*",
    keyframe: "1"
  }))));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgba(105,112,125,0.1)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.leftSpinner && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "medium*",
    keyframe: "1"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(105,112,125)",
      flexShrink: 0
    }
  }, props.loadingText), props.rightSpinner && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "medium*",
    keyframe: "1"
  }))));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      height: 40,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgba(105,112,125,0.1)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgba(105,112,125,0.1)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgba(105,112,125,0.1)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(105,112,125)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(105,112,125)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null)));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(105,112,125)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null)));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgba(105,112,125,0.1)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(105,112,125)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgba(105,112,125,0.1)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(105,112,125)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(223,229,239)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(223,229,239)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(223,229,239)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(42,44,52)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(42,44,52)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(42,44,52)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null)));
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null)));
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(223,229,239)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(223,229,239)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(42,44,52)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(42,44,52)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgba(211,218,230,0.15)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "medium*",
    keyframe: "1"
  })));
  const __body36 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgba(211,218,230,0.15)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "medium*",
    keyframe: "1"
  })));
  const __body37 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgba(211,218,230,0.15)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "medium*",
    keyframe: "1"
  })));
  const __body38 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
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
  }, props.leftSpinner && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "sm",
    keyframe: "1"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(162,171,186)",
      flexShrink: 0
    }
  }, props.loadingText), props.rightSpinner && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "sm",
    keyframe: "1"
  })));
  const __body39 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
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
  }, props.leftSpinner && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "medium*",
    keyframe: "1"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(162,171,186)",
      flexShrink: 0
    }
  }, props.loadingText), props.rightSpinner && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "medium*",
    keyframe: "1"
  })));
  const __body40 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
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
  }, props.leftSpinner && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "medium*",
    keyframe: "1"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(162,171,186)",
      flexShrink: 0
    }
  }, props.loadingText), props.rightSpinner && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "medium*",
    keyframe: "1"
  })));
  const __body41 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgba(211,218,230,0.15)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.leftSpinner && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "medium*",
    keyframe: "1"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(162,171,186)",
      flexShrink: 0
    }
  }, props.loadingText), props.rightSpinner && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "medium*",
    keyframe: "1"
  }))));
  const __body42 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgba(211,218,230,0.15)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, props.leftSpinner && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "medium*",
    keyframe: "1"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(162,171,186)",
      flexShrink: 0
    }
  }, props.loadingText), props.rightSpinner && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(SpinnerAnimated, {
    size: "medium*",
    keyframe: "1"
  }))));
  const __body43 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgba(211,218,230,0.15)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body44 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgba(211,218,230,0.15)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body45 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgba(211,218,230,0.15)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body46 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(162,171,186)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body47 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(162,171,186)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null)));
  const __body48 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(162,171,186)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null)));
  const __body49 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgba(211,218,230,0.15)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(162,171,186)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body50 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgba(211,218,230,0.15)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(162,171,186)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body51 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(240,78,152)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body52 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(240,78,152)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body53 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(240,78,152)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body54 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(252,220,234)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body55 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(252,220,234)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body56 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(252,220,234)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body57 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(168,55,106)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body58 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(168,55,106)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null)));
  const __body59 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(168,55,106)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null)));
  const __body60 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(240,78,152)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body61 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(240,78,152)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body62 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(252,220,234)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(168,55,106)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body63 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(252,220,234)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(168,55,106)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body64 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(189,39,30)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body65 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(189,39,30)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body66 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(189,39,30)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body67 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(242,212,210)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body68 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(242,212,210)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body69 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(242,212,210)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body70 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(180,37,29)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body71 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(180,37,29)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null)));
  const __body72 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(180,37,29)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null)));
  const __body73 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(189,39,30)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body74 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(189,39,30)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body75 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(242,212,210)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(180,37,29)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body76 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(242,212,210)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(180,37,29)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body77 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(255,243,208)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body78 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(255,243,208)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body79 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,243,208)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body80 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(254,197,20)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body81 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(254,197,20)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body82 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(254,197,20)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body83 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(140,95,0)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body84 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(140,95,0)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null)));
  const __body85 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(140,95,0)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null)));
  const __body86 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(254,197,20)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body87 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(254,197,20)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body88 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(255,243,208)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(140,95,0)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body89 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(255,243,208)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(140,95,0)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body90 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(0,191,179)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body91 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(0,191,179)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body92 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(0,191,179)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body93 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(204,242,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body94 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(204,242,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body95 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(204,242,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body96 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(0,114,107)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body97 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(0,114,107)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null)));
  const __body98 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(0,114,107)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null)));
  const __body99 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(0,191,179)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body100 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(0,191,179)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body101 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(204,242,240)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(0,114,107)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body102 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(204,242,240)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(0,114,107)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body103 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(105,112,125)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body104 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(105,112,125)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body105 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(105,112,125)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body106 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(233,237,243)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body107 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(233,237,243)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body108 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(233,237,243)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body109 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(52,55,65)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body110 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(52,55,65)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null)));
  const __body111 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(52,55,65)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null)));
  const __body112 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(105,112,125)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body113 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(105,112,125)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body114 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(233,237,243)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(52,55,65)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body115 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(233,237,243)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(52,55,65)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body116 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(0,119,204)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body117 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(0,119,204)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body118 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(0,119,204)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body119 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 24,
      height: 24,
      borderRadius: 4,
      backgroundColor: "rgb(204,228,245)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body120 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 32,
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(204,228,245)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body121 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(204,228,245)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
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
  }, props.icon ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)));
  const __body122 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 24,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(0,94,196)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body123 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(0,94,196)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null)));
  const __body124 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
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
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(0,94,196)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null)));
  const __body125 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(0,119,204)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body126 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(0,119,204)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body127 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 32,
      borderRadius: 4,
      backgroundColor: "rgb(204,228,245)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(0,94,196)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __body128 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgb(204,228,245)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, props.iconLeft && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconLeft2 ?? /*#__PURE__*/React.createElement(PlusInCircle2, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "21px",
      color: "rgb(0,94,196)",
      flexShrink: 0
    }
  }, props.text), props.iconRight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.iconRight2 ?? /*#__PURE__*/React.createElement(ArrowDown2, null))));
  const __impls = {
    // figma: Style=Empty, Color=Inverted, Size=Extra Small, Disabled=False, Loading=True, Icon only=True
    "style2=empty|color=inverted|size=extra small|disabled=false|loading=true|iconOnly=true": __body0,
    // figma: Style=Empty, Color=Inverted, Size=Small, Disabled=False, Loading=True, Icon only=True
    "style2=empty|color=inverted|size=sm|disabled=false|loading=true|iconOnly=true": __body1,
    // figma: Style=Empty, Color=Inverted, Size=Medium*, Disabled=False, Loading=True, Icon only=True
    "style2=empty|color=inverted|size=medium*|disabled=false|loading=true|iconOnly=true": __body2,
    // figma: Style=Default*, Color=Inverted, Size=Extra Small, Disabled=False, Loading=True, Icon only=True
    "style2=default*|color=inverted|size=extra small|disabled=false|loading=true|iconOnly=true": __body3,
    // figma: Style=Default*, Color=Inverted, Size=Small, Disabled=False, Loading=True, Icon only=True
    "style2=default*|color=inverted|size=sm|disabled=false|loading=true|iconOnly=true": __body4,
    // figma: Style=Default*, Color=Inverted, Size=Medium*, Disabled=False, Loading=True, Icon only=True
    "style2=default*|color=inverted|size=medium*|disabled=false|loading=true|iconOnly=true": __body5,
    // figma: Style=Empty, Color=Inverted, Size=Extra Small, Disabled=False, Loading=True, Icon only=False
    "style2=empty|color=inverted|size=extra small|disabled=false|loading=true|iconOnly=false": __body6,
    // figma: Style=Empty, Color=Inverted, Size=Small, Disabled=False, Loading=True, Icon only=False
    "style2=empty|color=inverted|size=sm|disabled=false|loading=true|iconOnly=false": __body7,
    // figma: Style=Empty, Color=Inverted, Size=Medium*, Disabled=False, Loading=True, Icon only=False
    "style2=empty|color=inverted|size=medium*|disabled=false|loading=true|iconOnly=false": __body8,
    // figma: Style=Default*, Color=Inverted, Size=Small, Disabled=False, Loading=True, Icon only=False
    "style2=default*|color=inverted|size=sm|disabled=false|loading=true|iconOnly=false": __body9,
    // figma: Style=Default*, Color=Inverted, Size=Medium*, Disabled=False, Loading=True, Icon only=False
    "style2=default*|color=inverted|size=medium*|disabled=false|loading=true|iconOnly=false": __body10,
    // figma: Style=Empty, Color=Inverted, Size=Extra Small, Disabled=True, Loading=False, Icon only=True
    "style2=empty|color=inverted|size=extra small|disabled=true|loading=false|iconOnly=true": __body11,
    // figma: Style=Empty, Color=Inverted, Size=Small, Disabled=True, Loading=False, Icon only=True
    "style2=empty|color=inverted|size=sm|disabled=true|loading=false|iconOnly=true": __body12,
    // figma: Style=Empty, Color=Inverted, Size=Medium*, Disabled=True, Loading=False, Icon only=True
    "style2=empty|color=inverted|size=medium*|disabled=true|loading=false|iconOnly=true": __body13,
    // figma: Style=Default*, Color=Inverted, Size=Extra Small, Disabled=True, Loading=False, Icon only=True
    "style2=default*|color=inverted|size=extra small|disabled=true|loading=false|iconOnly=true": __body14,
    // figma: Style=Default*, Color=Inverted, Size=Small, Disabled=True, Loading=False, Icon only=True
    "style2=default*|color=inverted|size=sm|disabled=true|loading=false|iconOnly=true": __body15,
    // figma: Style=Default*, Color=Inverted, Size=Medium*, Disabled=True, Loading=False, Icon only=True
    "style2=default*|color=inverted|size=medium*|disabled=true|loading=false|iconOnly=true": __body16,
    // figma: Style=Empty, Color=Inverted, Size=Extra Small, Disabled=True, Loading=False, Icon only=False
    "style2=empty|color=inverted|size=extra small|disabled=true|loading=false|iconOnly=false": __body17,
    // figma: Style=Empty, Color=Inverted, Size=Small, Disabled=True, Loading=False, Icon only=False
    "style2=empty|color=inverted|size=sm|disabled=true|loading=false|iconOnly=false": __body18,
    // figma: Style=Empty, Color=Inverted, Size=Medium*, Disabled=True, Loading=False, Icon only=False
    "style2=empty|color=inverted|size=medium*|disabled=true|loading=false|iconOnly=false": __body19,
    // figma: Style=Default*, Color=Inverted, Size=Small, Disabled=True, Loading=False, Icon only=False
    "style2=default*|color=inverted|size=sm|disabled=true|loading=false|iconOnly=false": __body20,
    // figma: Style=Default*, Color=Inverted, Size=Medium*, Disabled=True, Loading=False, Icon only=False
    "style2=default*|color=inverted|size=medium*|disabled=true|loading=false|iconOnly=false": __body21,
    // figma: Style=Empty, Color=Inverted, Size=Extra Small, Disabled=False, Loading=False, Icon only=True
    "style2=empty|color=inverted|size=extra small|disabled=false|loading=false|iconOnly=true": __body11,
    // figma: Style=Empty, Color=Inverted, Size=Small, Disabled=False, Loading=False, Icon only=True
    "style2=empty|color=inverted|size=sm|disabled=false|loading=false|iconOnly=true": __body12,
    // figma: Style=Empty, Color=Inverted, Size=Medium*, Disabled=False, Loading=False, Icon only=True
    "style2=empty|color=inverted|size=medium*|disabled=false|loading=false|iconOnly=true": __body13,
    // figma: Style=Filled, Color=Inverted, Size=Extra Small, Disabled=False, Loading=False, Icon only=True
    "style2=filled|color=inverted|size=extra small|disabled=false|loading=false|iconOnly=true": __body22,
    // figma: Style=Filled, Color=Inverted, Size=Small, Disabled=False, Loading=False, Icon only=True
    "style2=filled|color=inverted|size=sm|disabled=false|loading=false|iconOnly=true": __body23,
    // figma: Style=Filled, Color=Inverted, Size=Medium*, Disabled=False, Loading=False, Icon only=True
    "style2=filled|color=inverted|size=medium*|disabled=false|loading=false|iconOnly=true": __body24,
    // figma: Style=Default*, Color=Inverted, Size=Extra Small, Disabled=False, Loading=False, Icon only=True
    "style2=default*|color=inverted|size=extra small|disabled=false|loading=false|iconOnly=true": __body25,
    // figma: Style=Default*, Color=Inverted, Size=Small, Disabled=False, Loading=False, Icon only=True
    "style2=default*|color=inverted|size=sm|disabled=false|loading=false|iconOnly=true": __body26,
    // figma: Style=Default*, Color=Inverted, Size=Medium*, Disabled=False, Loading=False, Icon only=True
    "style2=default*|color=inverted|size=medium*|disabled=false|loading=false|iconOnly=true": __body27,
    // figma: Style=Empty, Color=Inverted, Size=Extra Small, Disabled=False, Loading=False, Icon only=False
    "style2=empty|color=inverted|size=extra small|disabled=false|loading=false|iconOnly=false": __body28,
    // figma: Style=Empty, Color=Inverted, Size=Small, Disabled=False, Loading=False, Icon only=False
    "style2=empty|color=inverted|size=sm|disabled=false|loading=false|iconOnly=false": __body29,
    // figma: Style=Empty, Color=Inverted, Size=Medium*, Disabled=False, Loading=False, Icon only=False
    "style2=empty|color=inverted|size=medium*|disabled=false|loading=false|iconOnly=false": __body30,
    // figma: Style=Filled, Color=Inverted, Size=Small, Disabled=False, Loading=False, Icon only=False
    "style2=filled|color=inverted|size=sm|disabled=false|loading=false|iconOnly=false": __body31,
    // figma: Style=Filled, Color=Inverted, Size=Medium*, Disabled=False, Loading=False, Icon only=False
    "style2=filled|color=inverted|size=medium*|disabled=false|loading=false|iconOnly=false": __body32,
    // figma: Style=Default*, Color=Inverted, Size=Small, Disabled=False, Loading=False, Icon only=False
    "style2=default*|color=inverted|size=sm|disabled=false|loading=false|iconOnly=false": __body33,
    // figma: Style=Default*, Color=Inverted, Size=Medium*, Disabled=False, Loading=False, Icon only=False
    "style2=default*|color=inverted|size=medium*|disabled=false|loading=false|iconOnly=false": __body34,
    // figma: Style=Empty, Color=Primary*, Size=Extra Small, Disabled=False, Loading=True, Icon only=True
    "style2=empty|color=primary*|size=extra small|disabled=false|loading=true|iconOnly=true": __body0,
    // figma: Style=Empty, Color=Primary*, Size=Small, Disabled=False, Loading=True, Icon only=True
    "style2=empty|color=primary*|size=sm|disabled=false|loading=true|iconOnly=true": __body1,
    // figma: Style=Empty, Color=Primary*, Size=Medium*, Disabled=False, Loading=True, Icon only=True
    "style2=empty|color=primary*|size=medium*|disabled=false|loading=true|iconOnly=true": __body2,
    // figma: Style=Default*, Color=Primary*, Size=Extra Small, Disabled=False, Loading=True, Icon only=True
    "style2=default*|color=primary*|size=extra small|disabled=false|loading=true|iconOnly=true": __body35,
    // figma: Style=Default*, Color=Primary*, Size=Small, Disabled=False, Loading=True, Icon only=True
    "style2=default*|color=primary*|size=sm|disabled=false|loading=true|iconOnly=true": __body36,
    // figma: Style=Default*, Color=Primary*, Size=Medium*, Disabled=False, Loading=True, Icon only=True
    "style2=default*|color=primary*|size=medium*|disabled=false|loading=true|iconOnly=true": __body37,
    // figma: Style=Empty, Color=Primary*, Size=Extra Small, Disabled=False, Loading=True, Icon only=False
    "style2=empty|color=primary*|size=extra small|disabled=false|loading=true|iconOnly=false": __body38,
    // figma: Style=Empty, Color=Primary*, Size=Small, Disabled=False, Loading=True, Icon only=False
    "style2=empty|color=primary*|size=sm|disabled=false|loading=true|iconOnly=false": __body39,
    // figma: Style=Empty, Color=Primary*, Size=Medium*, Disabled=False, Loading=True, Icon only=False
    "style2=empty|color=primary*|size=medium*|disabled=false|loading=true|iconOnly=false": __body40,
    // figma: Style=Default*, Color=Primary*, Size=Small, Disabled=False, Loading=True, Icon only=False
    "style2=default*|color=primary*|size=sm|disabled=false|loading=true|iconOnly=false": __body41,
    // figma: Style=Default*, Color=Primary*, Size=Medium*, Disabled=False, Loading=True, Icon only=False
    "style2=default*|color=primary*|size=medium*|disabled=false|loading=true|iconOnly=false": __body42,
    // figma: Style=Empty, Color=Primary*, Size=Extra Small, Disabled=True, Loading=False, Icon only=True
    "style2=empty|color=primary*|size=extra small|disabled=true|loading=false|iconOnly=true": __body11,
    // figma: Style=Empty, Color=Primary*, Size=Small, Disabled=True, Loading=False, Icon only=True
    "style2=empty|color=primary*|size=sm|disabled=true|loading=false|iconOnly=true": __body12,
    // figma: Style=Empty, Color=Primary*, Size=Medium*, Disabled=True, Loading=False, Icon only=True
    "style2=empty|color=primary*|size=medium*|disabled=true|loading=false|iconOnly=true": __body13,
    // figma: Style=Default*, Color=Primary*, Size=Extra Small, Disabled=True, Loading=False, Icon only=True
    "style2=default*|color=primary*|size=extra small|disabled=true|loading=false|iconOnly=true": __body43,
    // figma: Style=Default*, Color=Primary*, Size=Small, Disabled=True, Loading=False, Icon only=True
    "style2=default*|color=primary*|size=sm|disabled=true|loading=false|iconOnly=true": __body44,
    // figma: Style=Default*, Color=Primary*, Size=Medium*, Disabled=True, Loading=False, Icon only=True
    "style2=default*|color=primary*|size=medium*|disabled=true|loading=false|iconOnly=true": __body45,
    // figma: Style=Empty, Color=Primary*, Size=Extra Small, Disabled=True, Loading=False, Icon only=False
    "style2=empty|color=primary*|size=extra small|disabled=true|loading=false|iconOnly=false": __body46,
    // figma: Style=Empty, Color=Primary*, Size=Small, Disabled=True, Loading=False, Icon only=False
    "style2=empty|color=primary*|size=sm|disabled=true|loading=false|iconOnly=false": __body47,
    // figma: Style=Empty, Color=Primary*, Size=Medium*, Disabled=True, Loading=False, Icon only=False
    "style2=empty|color=primary*|size=medium*|disabled=true|loading=false|iconOnly=false": __body48,
    // figma: Style=Default*, Color=Primary*, Size=Small, Disabled=True, Loading=False, Icon only=False
    "style2=default*|color=primary*|size=sm|disabled=true|loading=false|iconOnly=false": __body49,
    // figma: Style=Default*, Color=Primary*, Size=Medium*, Disabled=True, Loading=False, Icon only=False
    "style2=default*|color=primary*|size=medium*|disabled=true|loading=false|iconOnly=false": __body50,
    // figma: Style=Empty, Color=Accent, Size=Extra Small, Disabled=False, Loading=False, Icon only=True
    "style2=empty|color=accent|size=extra small|disabled=false|loading=false|iconOnly=true": __body11,
    // figma: Style=Empty, Color=Accent, Size=Small, Disabled=False, Loading=False, Icon only=True
    "style2=empty|color=accent|size=sm|disabled=false|loading=false|iconOnly=true": __body12,
    // figma: Style=Empty, Color=Accent, Size=Medium*, Disabled=False, Loading=False, Icon only=True
    "style2=empty|color=accent|size=medium*|disabled=false|loading=false|iconOnly=true": __body13,
    // figma: Style=Filled, Color=Accent, Size=Extra Small, Disabled=False, Loading=False, Icon only=True
    "style2=filled|color=accent|size=extra small|disabled=false|loading=false|iconOnly=true": __body51,
    // figma: Style=Filled, Color=Accent, Size=Small, Disabled=False, Loading=False, Icon only=True
    "style2=filled|color=accent|size=sm|disabled=false|loading=false|iconOnly=true": __body52,
    // figma: Style=Filled, Color=Accent, Size=Medium*, Disabled=False, Loading=False, Icon only=True
    "style2=filled|color=accent|size=medium*|disabled=false|loading=false|iconOnly=true": __body53,
    // figma: Style=Default*, Color=Accent, Size=Extra Small, Disabled=False, Loading=False, Icon only=True
    "style2=default*|color=accent|size=extra small|disabled=false|loading=false|iconOnly=true": __body54,
    // figma: Style=Default*, Color=Accent, Size=Small, Disabled=False, Loading=False, Icon only=True
    "style2=default*|color=accent|size=sm|disabled=false|loading=false|iconOnly=true": __body55,
    // figma: Style=Default*, Color=Accent, Size=Medium*, Disabled=False, Loading=False, Icon only=True
    "style2=default*|color=accent|size=medium*|disabled=false|loading=false|iconOnly=true": __body56,
    // figma: Style=Empty, Color=Accent, Size=Extra Small, Disabled=False, Loading=False, Icon only=False
    "style2=empty|color=accent|size=extra small|disabled=false|loading=false|iconOnly=false": __body57,
    // figma: Style=Empty, Color=Accent, Size=Small, Disabled=False, Loading=False, Icon only=False
    "style2=empty|color=accent|size=sm|disabled=false|loading=false|iconOnly=false": __body58,
    // figma: Style=Empty, Color=Accent, Size=Medium*, Disabled=False, Loading=False, Icon only=False
    "style2=empty|color=accent|size=medium*|disabled=false|loading=false|iconOnly=false": __body59,
    // figma: Style=Filled, Color=Accent, Size=Small, Disabled=False, Loading=False, Icon only=False
    "style2=filled|color=accent|size=sm|disabled=false|loading=false|iconOnly=false": __body60,
    // figma: Style=Filled, Color=Accent, Size=Medium*, Disabled=False, Loading=False, Icon only=False
    "style2=filled|color=accent|size=medium*|disabled=false|loading=false|iconOnly=false": __body61,
    // figma: Style=Default*, Color=Accent, Size=Small, Disabled=False, Loading=False, Icon only=False
    "style2=default*|color=accent|size=sm|disabled=false|loading=false|iconOnly=false": __body62,
    // figma: Style=Default*, Color=Accent, Size=Medium*, Disabled=False, Loading=False, Icon only=False
    "style2=default*|color=accent|size=medium*|disabled=false|loading=false|iconOnly=false": __body63,
    // figma: Style=Empty, Color=Danger, Size=Extra Small, Disabled=False, Loading=False, Icon only=True
    "style2=empty|color=danger|size=extra small|disabled=false|loading=false|iconOnly=true": __body11,
    // figma: Style=Empty, Color=Danger, Size=Small, Disabled=False, Loading=False, Icon only=True
    "style2=empty|color=danger|size=sm|disabled=false|loading=false|iconOnly=true": __body12,
    // figma: Style=Empty, Color=Danger, Size=Medium*, Disabled=False, Loading=False, Icon only=True
    "style2=empty|color=danger|size=medium*|disabled=false|loading=false|iconOnly=true": __body13,
    // figma: Style=Filled, Color=Danger, Size=Extra Small, Disabled=False, Loading=False, Icon only=True
    "style2=filled|color=danger|size=extra small|disabled=false|loading=false|iconOnly=true": __body64,
    // figma: Style=Filled, Color=Danger, Size=Small, Disabled=False, Loading=False, Icon only=True
    "style2=filled|color=danger|size=sm|disabled=false|loading=false|iconOnly=true": __body65,
    // figma: Style=Filled, Color=Danger, Size=Medium*, Disabled=False, Loading=False, Icon only=True
    "style2=filled|color=danger|size=medium*|disabled=false|loading=false|iconOnly=true": __body66,
    // figma: Style=Default*, Color=Danger, Size=Extra Small, Disabled=False, Loading=False, Icon only=True
    "style2=default*|color=danger|size=extra small|disabled=false|loading=false|iconOnly=true": __body67,
    // figma: Style=Default*, Color=Danger, Size=Small, Disabled=False, Loading=False, Icon only=True
    "style2=default*|color=danger|size=sm|disabled=false|loading=false|iconOnly=true": __body68,
    // figma: Style=Default*, Color=Danger, Size=Medium*, Disabled=False, Loading=False, Icon only=True
    "style2=default*|color=danger|size=medium*|disabled=false|loading=false|iconOnly=true": __body69,
    // figma: Style=Empty, Color=Danger, Size=Extra Small, Disabled=False, Loading=False, Icon only=False
    "style2=empty|color=danger|size=extra small|disabled=false|loading=false|iconOnly=false": __body70,
    // figma: Style=Empty, Color=Danger, Size=Small, Disabled=False, Loading=False, Icon only=False
    "style2=empty|color=danger|size=sm|disabled=false|loading=false|iconOnly=false": __body71,
    // figma: Style=Empty, Color=Danger, Size=Medium*, Disabled=False, Loading=False, Icon only=False
    "style2=empty|color=danger|size=medium*|disabled=false|loading=false|iconOnly=false": __body72,
    // figma: Style=Filled, Color=Danger, Size=Small, Disabled=False, Loading=False, Icon only=False
    "style2=filled|color=danger|size=sm|disabled=false|loading=false|iconOnly=false": __body73,
    // figma: Style=Filled, Color=Danger, Size=Medium*, Disabled=False, Loading=False, Icon only=False
    "style2=filled|color=danger|size=medium*|disabled=false|loading=false|iconOnly=false": __body74,
    // figma: Style=Default*, Color=Danger, Size=Small, Disabled=False, Loading=False, Icon only=False
    "style2=default*|color=danger|size=sm|disabled=false|loading=false|iconOnly=false": __body75,
    // figma: Style=Default*, Color=Danger, Size=Medium*, Disabled=False, Loading=False, Icon only=False
    "style2=default*|color=danger|size=medium*|disabled=false|loading=false|iconOnly=false": __body76,
    // figma: Style=Empty, Color=Warning, Size=Extra Small, Disabled=False, Loading=False, Icon only=True
    "style2=empty|color=warning|size=extra small|disabled=false|loading=false|iconOnly=true": __body11,
    // figma: Style=Empty, Color=Warning, Size=Small, Disabled=False, Loading=False, Icon only=True
    "style2=empty|color=warning|size=sm|disabled=false|loading=false|iconOnly=true": __body12,
    // figma: Style=Empty, Color=Warning, Size=Medium*, Disabled=False, Loading=False, Icon only=True
    "style2=empty|color=warning|size=medium*|disabled=false|loading=false|iconOnly=true": __body13,
    // figma: Style=Default*, Color=Warning, Size=Extra Small, Disabled=False, Loading=False, Icon only=True
    "style2=default*|color=warning|size=extra small|disabled=false|loading=false|iconOnly=true": __body77,
    // figma: Style=Default*, Color=Warning, Size=Small, Disabled=False, Loading=False, Icon only=True
    "style2=default*|color=warning|size=sm|disabled=false|loading=false|iconOnly=true": __body78,
    // figma: Style=Default*, Color=Warning, Size=Medium*, Disabled=False, Loading=False, Icon only=True
    "style2=default*|color=warning|size=medium*|disabled=false|loading=false|iconOnly=true": __body79,
    // figma: Style=Filled, Color=Warning, Size=Extra Small, Disabled=False, Loading=False, Icon only=True
    "style2=filled|color=warning|size=extra small|disabled=false|loading=false|iconOnly=true": __body80,
    // figma: Style=Filled, Color=Warning, Size=Small, Disabled=False, Loading=False, Icon only=True
    "style2=filled|color=warning|size=sm|disabled=false|loading=false|iconOnly=true": __body81,
    // figma: Style=Filled, Color=Warning, Size=Medium*, Disabled=False, Loading=False, Icon only=True
    "style2=filled|color=warning|size=medium*|disabled=false|loading=false|iconOnly=true": __body82,
    // figma: Style=Empty, Color=Warning, Size=Extra Small, Disabled=False, Loading=False, Icon only=False
    "style2=empty|color=warning|size=extra small|disabled=false|loading=false|iconOnly=false": __body83,
    // figma: Style=Empty, Color=Warning, Size=Small, Disabled=False, Loading=False, Icon only=False
    "style2=empty|color=warning|size=sm|disabled=false|loading=false|iconOnly=false": __body84,
    // figma: Style=Empty, Color=Warning, Size=Medium*, Disabled=False, Loading=False, Icon only=False
    "style2=empty|color=warning|size=medium*|disabled=false|loading=false|iconOnly=false": __body85,
    // figma: Style=Filled, Color=Warning, Size=Small, Disabled=False, Loading=False, Icon only=False
    "style2=filled|color=warning|size=sm|disabled=false|loading=false|iconOnly=false": __body86,
    // figma: Style=Filled, Color=Warning, Size=Medium*, Disabled=False, Loading=False, Icon only=False
    "style2=filled|color=warning|size=medium*|disabled=false|loading=false|iconOnly=false": __body87,
    // figma: Style=Default*, Color=Warning, Size=Small, Disabled=False, Loading=False, Icon only=False
    "style2=default*|color=warning|size=sm|disabled=false|loading=false|iconOnly=false": __body88,
    // figma: Style=Default*, Color=Warning, Size=Medium*, Disabled=False, Loading=False, Icon only=False
    "style2=default*|color=warning|size=medium*|disabled=false|loading=false|iconOnly=false": __body89,
    // figma: Style=Empty, Color=Success, Size=Extra Small, Disabled=False, Loading=False, Icon only=True
    "style2=empty|color=success|size=extra small|disabled=false|loading=false|iconOnly=true": __body11,
    // figma: Style=Empty, Color=Success, Size=Small, Disabled=False, Loading=False, Icon only=True
    "style2=empty|color=success|size=sm|disabled=false|loading=false|iconOnly=true": __body12,
    // figma: Style=Empty, Color=Success, Size=Medium*, Disabled=False, Loading=False, Icon only=True
    "style2=empty|color=success|size=medium*|disabled=false|loading=false|iconOnly=true": __body13,
    // figma: Style=Filled, Color=Success, Size=Extra Small, Disabled=False, Loading=False, Icon only=True
    "style2=filled|color=success|size=extra small|disabled=false|loading=false|iconOnly=true": __body90,
    // figma: Style=Filled, Color=Success, Size=Small, Disabled=False, Loading=False, Icon only=True
    "style2=filled|color=success|size=sm|disabled=false|loading=false|iconOnly=true": __body91,
    // figma: Style=Filled, Color=Success, Size=Medium*, Disabled=False, Loading=False, Icon only=True
    "style2=filled|color=success|size=medium*|disabled=false|loading=false|iconOnly=true": __body92,
    // figma: Style=Default*, Color=Success, Size=Extra Small, Disabled=False, Loading=False, Icon only=True
    "style2=default*|color=success|size=extra small|disabled=false|loading=false|iconOnly=true": __body93,
    // figma: Style=Default*, Color=Success, Size=Small, Disabled=False, Loading=False, Icon only=True
    "style2=default*|color=success|size=sm|disabled=false|loading=false|iconOnly=true": __body94,
    // figma: Style=Default*, Color=Success, Size=Medium*, Disabled=False, Loading=False, Icon only=True
    "style2=default*|color=success|size=medium*|disabled=false|loading=false|iconOnly=true": __body95,
    // figma: Style=Empty, Color=Success, Size=Extra Small, Disabled=False, Loading=False, Icon only=False
    "style2=empty|color=success|size=extra small|disabled=false|loading=false|iconOnly=false": __body96,
    // figma: Style=Empty, Color=Success, Size=Small, Disabled=False, Loading=False, Icon only=False
    "style2=empty|color=success|size=sm|disabled=false|loading=false|iconOnly=false": __body97,
    // figma: Style=Empty, Color=Success, Size=Medium*, Disabled=False, Loading=False, Icon only=False
    "style2=empty|color=success|size=medium*|disabled=false|loading=false|iconOnly=false": __body98,
    // figma: Style=Filled, Color=Success, Size=Small, Disabled=False, Loading=False, Icon only=False
    "style2=filled|color=success|size=sm|disabled=false|loading=false|iconOnly=false": __body99,
    // figma: Style=Filled, Color=Success, Size=Medium*, Disabled=False, Loading=False, Icon only=False
    "style2=filled|color=success|size=medium*|disabled=false|loading=false|iconOnly=false": __body100,
    // figma: Style=Default*, Color=Success, Size=Small, Disabled=False, Loading=False, Icon only=False
    "style2=default*|color=success|size=sm|disabled=false|loading=false|iconOnly=false": __body101,
    // figma: Style=Default*, Color=Success, Size=Medium*, Disabled=False, Loading=False, Icon only=False
    "style2=default*|color=success|size=medium*|disabled=false|loading=false|iconOnly=false": __body102,
    // figma: Style=Empty, Color=Text, Size=Extra Small, Disabled=False, Loading=False, Icon only=True
    "style2=empty|color=text|size=extra small|disabled=false|loading=false|iconOnly=true": __body11,
    // figma: Style=Empty, Color=Text, Size=Small, Disabled=False, Loading=False, Icon only=True
    "style2=empty|color=text|size=sm|disabled=false|loading=false|iconOnly=true": __body12,
    // figma: Style=Empty, Color=Text, Size=Medium*, Disabled=False, Loading=False, Icon only=True
    "style2=empty|color=text|size=medium*|disabled=false|loading=false|iconOnly=true": __body13,
    // figma: Style=Filled, Color=Text, Size=Extra Small, Disabled=False, Loading=False, Icon only=True
    "style2=filled|color=text|size=extra small|disabled=false|loading=false|iconOnly=true": __body103,
    // figma: Style=Filled, Color=Text, Size=Small, Disabled=False, Loading=False, Icon only=True
    "style2=filled|color=text|size=sm|disabled=false|loading=false|iconOnly=true": __body104,
    // figma: Style=Filled, Color=Text, Size=Medium*, Disabled=False, Loading=False, Icon only=True
    "style2=filled|color=text|size=medium*|disabled=false|loading=false|iconOnly=true": __body105,
    // figma: Style=Default*, Color=Text, Size=Extra Small, Disabled=False, Loading=False, Icon only=True
    "style2=default*|color=text|size=extra small|disabled=false|loading=false|iconOnly=true": __body106,
    // figma: Style=Default*, Color=Text, Size=Small, Disabled=False, Loading=False, Icon only=True
    "style2=default*|color=text|size=sm|disabled=false|loading=false|iconOnly=true": __body107,
    // figma: Style=Default*, Color=Text, Size=Medium*, Disabled=False, Loading=False, Icon only=True
    "style2=default*|color=text|size=medium*|disabled=false|loading=false|iconOnly=true": __body108,
    // figma: Style=Empty, Color=Text, Size=Extra Small, Disabled=False, Loading=False, Icon only=False
    "style2=empty|color=text|size=extra small|disabled=false|loading=false|iconOnly=false": __body109,
    // figma: Style=Empty, Color=Text, Size=Small, Disabled=False, Loading=False, Icon only=False
    "style2=empty|color=text|size=sm|disabled=false|loading=false|iconOnly=false": __body110,
    // figma: Style=Empty, Color=Text, Size=Medium*, Disabled=False, Loading=False, Icon only=False
    "style2=empty|color=text|size=medium*|disabled=false|loading=false|iconOnly=false": __body111,
    // figma: Style=Filled, Color=Text, Size=Small, Disabled=False, Loading=False, Icon only=False
    "style2=filled|color=text|size=sm|disabled=false|loading=false|iconOnly=false": __body112,
    // figma: Style=Filled, Color=Text, Size=Medium*, Disabled=False, Loading=False, Icon only=False
    "style2=filled|color=text|size=medium*|disabled=false|loading=false|iconOnly=false": __body113,
    // figma: Style=Default*, Color=Text, Size=Small, Disabled=False, Loading=False, Icon only=False
    "style2=default*|color=text|size=sm|disabled=false|loading=false|iconOnly=false": __body114,
    // figma: Style=Default*, Color=Text, Size=Medium*, Disabled=False, Loading=False, Icon only=False
    "style2=default*|color=text|size=medium*|disabled=false|loading=false|iconOnly=false": __body115,
    // figma: Style=Empty, Color=Primary*, Size=Extra Small, Disabled=False, Loading=False, Icon only=True
    "style2=empty|color=primary*|size=extra small|disabled=false|loading=false|iconOnly=true": __body11,
    // figma: Style=Empty, Color=Primary*, Size=Small, Disabled=False, Loading=False, Icon only=True
    "style2=empty|color=primary*|size=sm|disabled=false|loading=false|iconOnly=true": __body12,
    // figma: Style=Empty, Color=Primary*, Size=Medium*, Disabled=False, Loading=False, Icon only=True
    "style2=empty|color=primary*|size=medium*|disabled=false|loading=false|iconOnly=true": __body13,
    // figma: Style=Filled, Color=Primary*, Size=Extra Small, Disabled=False, Loading=False, Icon only=True
    "style2=filled|color=primary*|size=extra small|disabled=false|loading=false|iconOnly=true": __body116,
    // figma: Style=Filled, Color=Primary*, Size=Small, Disabled=False, Loading=False, Icon only=True
    "style2=filled|color=primary*|size=sm|disabled=false|loading=false|iconOnly=true": __body117,
    // figma: Style=Filled, Color=Primary*, Size=Medium*, Disabled=False, Loading=False, Icon only=True
    "style2=filled|color=primary*|size=medium*|disabled=false|loading=false|iconOnly=true": __body118,
    // figma: Style=Default*, Color=Primary*, Size=Extra Small, Disabled=False, Loading=False, Icon only=True
    "style2=default*|color=primary*|size=extra small|disabled=false|loading=false|iconOnly=true": __body119,
    // figma: Style=Default*, Color=Primary*, Size=Small, Disabled=False, Loading=False, Icon only=True
    "style2=default*|color=primary*|size=sm|disabled=false|loading=false|iconOnly=true": __body120,
    // figma: Style=Default*, Color=Primary*, Size=Medium*, Disabled=False, Loading=False, Icon only=True
    "style2=default*|color=primary*|size=medium*|disabled=false|loading=false|iconOnly=true": __body121,
    // figma: Style=Empty, Color=Primary*, Size=Extra Small, Disabled=False, Loading=False, Icon only=False
    "style2=empty|color=primary*|size=extra small|disabled=false|loading=false|iconOnly=false": __body122,
    // figma: Style=Empty, Color=Primary*, Size=Small, Disabled=False, Loading=False, Icon only=False
    "style2=empty|color=primary*|size=sm|disabled=false|loading=false|iconOnly=false": __body123,
    // figma: Style=Empty, Color=Primary*, Size=Medium*, Disabled=False, Loading=False, Icon only=False
    "style2=empty|color=primary*|size=medium*|disabled=false|loading=false|iconOnly=false": __body124,
    // figma: Style=Filled, Color=Primary*, Size=Small, Disabled=False, Loading=False, Icon only=False
    "style2=filled|color=primary*|size=sm|disabled=false|loading=false|iconOnly=false": __body125,
    // figma: Style=Filled, Color=Primary*, Size=Medium*, Disabled=False, Loading=False, Icon only=False
    "style2=filled|color=primary*|size=medium*|disabled=false|loading=false|iconOnly=false": __body126,
    // figma: Style=Default*, Color=Primary*, Size=Small, Disabled=False, Loading=False, Icon only=False
    "style2=default*|color=primary*|size=sm|disabled=false|loading=false|iconOnly=false": __body127,
    // figma: Style=Default*, Color=Primary*, Size=Medium*, Disabled=False, Loading=False, Icon only=False
    "style2=default*|color=primary*|size=medium*|disabled=false|loading=false|iconOnly=false": __body128
  };
  return (__impls[__vkey_Button6(props)] ?? __body121)();
}

// figma node: 766:36716 iInCircle
function IInCircle(_p = {}) {
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
    d: "M 5.499 9.508 L 5.469 6 L 4.25 6 L 4.25 5 L 6.651 5 L 6.681 8.508 L 7.8 8.508 L 7.8 9.508 L 5.499 9.508 Z M 5.25 3.306 C 5.25 3.075 5.319 2.882 5.457 2.729 C 5.594 2.576 5.791 2.5 6.047 2.5 C 6.303 2.5 6.501 2.576 6.641 2.729 C 6.78 2.882 6.85 3.075 6.85 3.306 C 6.85 3.534 6.78 3.723 6.641 3.874 C 6.501 4.025 6.303 4.1 6.047 4.1 C 5.791 4.1 5.594 4.025 5.457 3.874 C 5.319 3.723 5.25 3.534 5.25 3.306 Z M 6 11 C 8.761 11 11 8.761 11 6 C 11 3.239 8.761 1 6 1 C 3.239 1 1 3.239 1 6 C 1 8.761 3.239 11 6 11 Z M 6 12 C 2.686 12 0 9.314 0 6 C 0 2.686 2.686 0 6 0 C 9.314 0 12 2.686 12 6 C 12 9.314 9.314 12 6 12 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}

// figma node: 766:36054 Text - Paragraph (3 variants)
var __venc_TextParagraph2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_TextParagraph2 = p => "size=" + __venc_TextParagraph2(p.size);

// Globals for scripts loaded after this file.
window.CheckboxText = CheckboxText;
window.Ava = Ava;
window.CheckGroup = CheckGroup;
window.Divider = Divider;
window.Edit2 = Edit2;
window.TextText2 = TextText2;
window.Divider2 = Divider2;
window.Anchor = Anchor;
window.BreadcrumbItem = BreadcrumbItem;
window.Breadcrumbs = Breadcrumbs;
window.ArrowDown2 = ArrowDown2;
window.Popout = Popout;
window.TextLink = TextLink;
window.Breadcrumb = Breadcrumb;
window.IconChevronLeft = IconChevronLeft;
window.BreadcrumbsNormal = BreadcrumbsNormal;
window.PlusInCircle2 = PlusInCircle2;
window.SpinnerAnimated = SpinnerAnimated;
window.Button6 = Button6;
window.IInCircle = IInCircle;
