// Components bundle — part 2 of 5. Load the parts in order as plain
// classic <script> tags: they share one global scope, so later parts can call
// declarations from earlier ones exactly as in the original single-file bundle.

function DateDatePicker(_p = {}) {
  const props = {
    ..._p,
    required: _p.required ?? true,
    ranged: _p.ranged ?? false,
    label: _p.label ?? false,
    state: _p.state ?? "placeholder",
    destructive: _p.destructive ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      height: 32,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px 0px 12px",
      justifyContent: "space-between",
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
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("div", {
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
  }, props.text1 ?? "25/05/2023"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowRight, null)), /*#__PURE__*/React.createElement("span", {
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
  }, props.text2 ?? "30/05/2023"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(132,173,255)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px 0px 12px",
      justifyContent: "space-between",
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
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("div", {
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
  }, props.text1 ?? "25/05/2023"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowRight, null)), /*#__PURE__*/React.createElement("span", {
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
  }, props.text2 ?? "30/05/2023"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(21,94,239)",
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
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("div", {
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
      color: "rgb(52,64,84)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "25/05/2023"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowRight, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text2 ?? "30/05/2023"))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      height: 32,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221)",
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
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("div", {
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
  }, props.text1 ?? "Từ ngày"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowRight, null)), /*#__PURE__*/React.createElement("span", {
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
  }, props.text2 ?? "Đến ngày"))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      height: 32,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
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
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("div", {
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
  }, props.text1 ?? "Từ ngày"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowRight, null)), /*#__PURE__*/React.createElement("span", {
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
  }, props.text2 ?? "Đến ngày"))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      height: 32,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px 0px 12px",
      justifyContent: "space-between",
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
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "25/05/2023")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(132,173,255)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px 0px 12px",
      justifyContent: "space-between",
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
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "25/05/2023")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(21,94,239)",
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
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "25/05/2023")));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      height: 32,
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
      position: "relative",
      ...props.style
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(102,112,133)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Chọn ngày/tháng/năm")));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      height: 32,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "Chọn ngày/tháng/năm")));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      overflow: "hidden",
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
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
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
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("span", {
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
  }, props.text3 ?? "Chọn ngày/tháng/năm"))));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      overflow: "hidden",
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
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(152,162,179), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
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
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("span", {
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
  }, props.text3 ?? "Chọn ngày/tháng/năm"))));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      overflow: "hidden",
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
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px 0px 12px",
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "25/05/2023")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null))));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      overflow: "hidden",
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
      padding: "0px 12px 0px 12px",
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "25/05/2023")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null))));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      overflow: "hidden",
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
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("span", {
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
  }, props.text3 ?? "25/05/2023"))));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      overflow: "hidden",
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
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("div", {
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
  }, props.text3 ?? "Từ ngày"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowRight, null)), /*#__PURE__*/React.createElement("span", {
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
  }, props.text4 ?? "Đến ngày")))));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      overflow: "hidden",
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
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(152,162,179), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("div", {
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
  }, props.text3 ?? "Từ ngày"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowRight, null)), /*#__PURE__*/React.createElement("span", {
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
  }, props.text4 ?? "Đến ngày")))));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      overflow: "hidden",
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
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 12px 0px 12px",
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("div", {
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
      color: "rgb(52,64,84)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "25/05/2023"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowRight, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "30/05/2023"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null))));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      overflow: "hidden",
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
      padding: "0px 12px 0px 12px",
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("div", {
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
      color: "rgb(52,64,84)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "25/05/2023"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowRight, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "30/05/2023"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null))));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      overflow: "hidden",
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
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
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
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("div", {
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
  }, props.text3 ?? "25/05/2023"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowRight, null)), /*#__PURE__*/React.createElement("span", {
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
  }, props.text4 ?? "30/05/2023")))));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement(DateDatePickerPlaceholderFalse, {
    style: {
      position: "relative",
      height: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Chọn ngày/tháng/năm"
  }), /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "This is an error message."));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement(DateDatePickerHoverFalse, {
    style: {
      position: "relative",
      height: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Chọn ngày/tháng/năm"
  }), /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "This is an error message."));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement(DateDatePickerFilledFalse, {
    style: {
      position: "relative",
      height: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "This is an error message."));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement(DateDatePickerFocusedFalse, {
    style: {
      position: "relative",
      height: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "This is an error message."));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement(DateDatePickerPlaceholderTrue, {
    style: {
      position: "relative",
      height: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "This is an error message."));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement(DateDatePickerHoverTrue, {
    style: {
      position: "relative",
      height: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "This is an error message."));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement(DateDatePickerFilledTrue, {
    style: {
      position: "relative",
      height: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "This is an error message."));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement(DateDatePickerFocusedTrue, {
    style: {
      position: "relative",
      height: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "This is an error message."));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      overflow: "hidden",
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
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "column",
      padding: "5px 12px 5px 12px",
      justifyContent: "center",
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
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("span", {
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
  }, props.text3 ?? "Chọn ngày/tháng/năm"))), /*#__PURE__*/React.createElement("span", {
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
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      overflow: "hidden",
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
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(152,162,179), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "column",
      padding: "5px 12px 5px 12px",
      justifyContent: "center",
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
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("span", {
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
  }, props.text3 ?? "Chọn ngày/tháng/năm"))), /*#__PURE__*/React.createElement("span", {
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
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      overflow: "hidden",
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
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "5px 12px 5px 12px",
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "25/05/2023")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null))), /*#__PURE__*/React.createElement("span", {
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
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      overflow: "hidden",
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
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1.500px rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      padding: "6px 12px 6px 12px",
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "25/05/2023")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null))), /*#__PURE__*/React.createElement("span", {
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
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      overflow: "hidden",
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
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 12px 4px 12px",
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("div", {
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
  }, props.text3 ?? "Từ ngày"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowRight, null)), /*#__PURE__*/React.createElement("span", {
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
  }, props.text4 ?? "Đến ngày")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "This is an error message."));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      overflow: "hidden",
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
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(152,162,179), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 12px 4px 12px",
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("div", {
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
  }, props.text3 ?? "Từ ngày"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowRight, null)), /*#__PURE__*/React.createElement("span", {
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
  }, props.text4 ?? "Đến ngày")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "This is an error message."));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      overflow: "hidden",
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
  }, props.text2 ?? "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(208,213,221), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 12px 4px 12px",
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("div", {
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
      color: "rgb(52,64,84)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "25/05/2023"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowRight, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexGrow: 1,
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "30/05/2023"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "This is an error message."));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 280,
      overflow: "hidden",
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
      padding: "6px 12px 6px 12px",
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconCalendar, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
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
      color: "rgb(52,64,84)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text3 ?? "25/05/2023"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowRight, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text4 ?? "30/05/2023"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "18px",
      color: "rgb(240,68,56)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "This is an error message."));
  const __impls = {
    // figma: Ranged=true, Label=False, State=Filled, Destructive=False
    "ranged=true|label=false|state=filled|destructive=false": __body0,
    // figma: Ranged=true, Label=False, State=Focused, Destructive=False
    "ranged=true|label=false|state=focused|destructive=false": __body1,
    // figma: Ranged=true, Label=False, State=Disable, Destructive=False
    "ranged=true|label=false|state=disable|destructive=false": __body2,
    // figma: Ranged=true, Label=False, State=Placeholder, Destructive=False
    "ranged=true|label=false|state=placeholder|destructive=false": __body3,
    // figma: Ranged=true, Label=False, State=Hover, Destructive=False
    "ranged=true|label=false|state=hover|destructive=false": __body4,
    // figma: Ranged=false, Label=False, State=Filled, Destructive=False
    "ranged=false|label=false|state=filled|destructive=false": __body5,
    // figma: Ranged=false, Label=False, State=Focused, Destructive=False
    "ranged=false|label=false|state=focused|destructive=false": __body6,
    // figma: Ranged=false, Label=False, State=Disable, Destructive=False
    "ranged=false|label=false|state=disable|destructive=false": __body7,
    // figma: Ranged=false, Label=False, State=Placeholder, Destructive=False
    "ranged=false|label=false|state=placeholder|destructive=false": __body8,
    // figma: Ranged=false, Label=False, State=Hover, Destructive=False
    "ranged=false|label=false|state=hover|destructive=false": __body9,
    // figma: Ranged=false, Label=True, State=Placeholder, Destructive=False
    "ranged=false|label=true|state=placeholder|destructive=false": __body10,
    // figma: Ranged=false, Label=True, State=Hover, Destructive=False
    "ranged=false|label=true|state=hover|destructive=false": __body11,
    // figma: Ranged=false, Label=True, State=Filled, Destructive=False
    "ranged=false|label=true|state=filled|destructive=false": __body12,
    // figma: Ranged=false, Label=True, State=Focused, Destructive=False
    "ranged=false|label=true|state=focused|destructive=false": __body13,
    // figma: Ranged=false, Label=True, State=Disable, Destructive=False
    "ranged=false|label=true|state=disable|destructive=false": __body14,
    // figma: Ranged=true, Label=True, State=Placeholder, Destructive=False
    "ranged=true|label=true|state=placeholder|destructive=false": __body15,
    // figma: Ranged=true, Label=True, State=Hover, Destructive=False
    "ranged=true|label=true|state=hover|destructive=false": __body16,
    // figma: Ranged=true, Label=True, State=Filled, Destructive=False
    "ranged=true|label=true|state=filled|destructive=false": __body17,
    // figma: Ranged=true, Label=True, State=Focused, Destructive=False
    "ranged=true|label=true|state=focused|destructive=false": __body18,
    // figma: Ranged=true, Label=True, State=Disable, Destructive=False
    "ranged=true|label=true|state=disable|destructive=false": __body19,
    // figma: Ranged=false, Label=False, State=Placeholder, Destructive=True
    "ranged=false|label=false|state=placeholder|destructive=true": __body20,
    // figma: Ranged=false, Label=False, State=Hover, Destructive=True
    "ranged=false|label=false|state=hover|destructive=true": __body21,
    // figma: Ranged=false, Label=False, State=Filled, Destructive=True
    "ranged=false|label=false|state=filled|destructive=true": __body22,
    // figma: Ranged=false, Label=False, State=Focused, Destructive=True
    "ranged=false|label=false|state=focused|destructive=true": __body23,
    // figma: Ranged=true, Label=False, State=Placeholder, Destructive=True
    "ranged=true|label=false|state=placeholder|destructive=true": __body24,
    // figma: Ranged=true, Label=False, State=Hover, Destructive=True
    "ranged=true|label=false|state=hover|destructive=true": __body25,
    // figma: Ranged=true, Label=False, State=Filled, Destructive=True
    "ranged=true|label=false|state=filled|destructive=true": __body26,
    // figma: Ranged=true, Label=False, State=Focused, Destructive=True
    "ranged=true|label=false|state=focused|destructive=true": __body27,
    // figma: Ranged=false, Label=True, State=Placeholder, Destructive=True
    "ranged=false|label=true|state=placeholder|destructive=true": __body28,
    // figma: Ranged=false, Label=True, State=Hover, Destructive=True
    "ranged=false|label=true|state=hover|destructive=true": __body29,
    // figma: Ranged=false, Label=True, State=Filled, Destructive=True
    "ranged=false|label=true|state=filled|destructive=true": __body30,
    // figma: Ranged=false, Label=True, State=Focused, Destructive=True
    "ranged=false|label=true|state=focused|destructive=true": __body31,
    // figma: Ranged=true, Label=True, State=Placeholder, Destructive=True
    "ranged=true|label=true|state=placeholder|destructive=true": __body32,
    // figma: Ranged=true, Label=True, State=Hover, Destructive=True
    "ranged=true|label=true|state=hover|destructive=true": __body33,
    // figma: Ranged=true, Label=True, State=Filled, Destructive=True
    "ranged=true|label=true|state=filled|destructive=true": __body34,
    // figma: Ranged=true, Label=True, State=Focused, Destructive=True
    "ranged=true|label=true|state=focused|destructive=true": __body35
  };
  return (__impls[__vkey_DateDatePicker(props)] ?? __body8)();
}

// figma node: 44:21189 Setting
function Setting(_p = {}) {
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
    width: 34.079,
    height: 35.998,
    viewBox: "0 0 34.079 35.998",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.956,
      top: 0,
      width: 34.079,
      height: 35.998
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 33.629 22.574 L 30.998 20.324 C 31.122 19.561 31.187 18.781 31.187 18.002 C 31.187 17.223 31.122 16.443 30.998 15.68 L 33.629 13.43 C 33.828 13.26 33.97 13.033 34.037 12.781 C 34.104 12.528 34.092 12.261 34.003 12.015 L 33.967 11.911 C 33.242 9.886 32.158 8.009 30.765 6.37 L 30.692 6.286 C 30.523 6.087 30.298 5.944 30.046 5.876 C 29.795 5.808 29.528 5.818 29.282 5.904 L 26.016 7.065 C 24.81 6.077 23.464 5.298 22.01 4.751 L 21.379 1.336 C 21.331 1.079 21.207 0.843 21.022 0.658 C 20.836 0.474 20.6 0.35 20.342 0.303 L 20.234 0.283 C 18.141 -0.094 15.939 -0.094 13.846 0.283 L 13.737 0.303 C 13.48 0.35 13.243 0.474 13.058 0.658 C 12.873 0.843 12.748 1.079 12.7 1.336 L 12.066 4.767 C 10.623 5.314 9.279 6.093 8.088 7.073 L 4.797 5.904 C 4.551 5.817 4.285 5.807 4.033 5.875 C 3.781 5.943 3.556 6.087 3.387 6.286 L 3.315 6.37 C 1.924 8.01 0.839 9.887 0.113 11.911 L 0.076 12.015 C -0.104 12.518 0.044 13.08 0.45 13.43 L 3.114 15.704 C 2.989 16.459 2.929 17.231 2.929 17.998 C 2.929 18.769 2.989 19.541 3.114 20.292 L 0.45 22.566 C 0.252 22.736 0.109 22.963 0.043 23.215 C -0.024 23.468 -0.012 23.735 0.076 23.981 L 0.113 24.085 C 0.84 26.11 1.917 27.978 3.315 29.626 L 3.387 29.71 C 3.556 29.909 3.781 30.052 4.033 30.12 C 4.285 30.188 4.551 30.178 4.797 30.092 L 8.088 28.923 C 9.285 29.907 10.623 30.686 12.066 31.229 L 12.7 34.66 C 12.748 34.917 12.873 35.153 13.058 35.338 C 13.243 35.522 13.48 35.646 13.737 35.693 L 13.846 35.713 C 15.958 36.092 18.121 36.092 20.234 35.713 L 20.342 35.693 C 20.6 35.646 20.836 35.522 21.022 35.338 C 21.207 35.153 21.331 34.917 21.379 34.66 L 22.01 31.245 C 23.464 30.7 24.817 29.918 26.016 28.931 L 29.282 30.092 C 29.528 30.179 29.795 30.189 30.047 30.121 C 30.299 30.052 30.524 29.909 30.692 29.71 L 30.765 29.626 C 32.163 27.974 33.24 26.11 33.967 24.085 L 34.003 23.981 C 34.184 23.486 34.035 22.924 33.629 22.574 L 33.629 22.574 Z M 28.145 16.154 C 28.246 16.76 28.298 17.383 28.298 18.006 C 28.298 18.629 28.246 19.252 28.145 19.858 L 27.88 21.469 L 30.881 24.037 C 30.426 25.085 29.852 26.077 29.17 26.994 L 25.441 25.672 L 24.179 26.709 C 23.219 27.496 22.15 28.115 20.993 28.549 L 19.463 29.123 L 18.743 33.021 C 17.609 33.149 16.463 33.149 15.328 33.021 L 14.609 29.115 L 13.09 28.533 C 11.945 28.099 10.88 27.48 9.928 26.697 L 8.667 25.656 L 4.914 26.99 C 4.231 26.07 3.66 25.077 3.202 24.033 L 6.236 21.441 L 5.975 19.834 C 5.878 19.235 5.826 18.617 5.826 18.006 C 5.826 17.391 5.874 16.777 5.975 16.178 L 6.236 14.571 L 3.202 11.979 C 3.656 10.931 4.231 9.942 4.914 9.022 L 8.667 10.356 L 9.928 9.315 C 10.88 8.532 11.945 7.913 13.09 7.479 L 14.613 6.905 L 15.332 2.999 C 16.461 2.871 17.614 2.871 18.747 2.999 L 19.467 6.897 L 20.997 7.471 C 22.15 7.905 23.223 8.524 24.183 9.311 L 25.445 10.348 L 29.174 9.026 C 29.857 9.946 30.427 10.939 30.885 11.983 L 27.884 14.551 L 28.145 16.154 Z M 17.044 10.533 C 13.138 10.533 9.972 13.699 9.972 17.604 C 9.972 21.51 13.138 24.676 17.044 24.676 C 20.949 24.676 24.115 21.51 24.115 17.604 C 24.115 13.699 20.949 10.533 17.044 10.533 Z M 20.226 20.786 C 19.809 21.205 19.313 21.537 18.766 21.763 C 18.22 21.989 17.635 22.105 17.044 22.104 C 15.842 22.104 14.713 21.634 13.862 20.786 C 13.443 20.369 13.111 19.873 12.885 19.327 C 12.659 18.781 12.543 18.195 12.544 17.604 C 12.544 16.403 13.014 15.274 13.862 14.422 C 14.713 13.57 15.842 13.104 17.044 13.104 C 18.245 13.104 19.374 13.57 20.226 14.422 C 20.644 14.839 20.976 15.335 21.203 15.882 C 21.429 16.428 21.545 17.013 21.544 17.604 C 21.544 18.806 21.074 19.935 20.226 20.786 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 44:21191 Icon-Wrapper (26 variants)
var __venc_IconWrapper = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_IconWrapper = p => "size=" + __venc_IconWrapper(p.size) + '|' + "union=" + __venc_IconWrapper(p.union);

function IconWrapper(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "10px",
    union: _p.union ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.85)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 128,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 121.171,
    height: 127.991,
    viewBox: "0 0 121.171 127.991",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.398,
      top: 0,
      width: 121.171,
      height: 127.991
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 119.571 80.264 L 110.214 72.264 C 110.657 69.55 110.886 66.779 110.886 64.007 C 110.886 61.236 110.657 58.464 110.214 55.75 L 119.571 47.75 C 120.277 47.146 120.782 46.341 121.02 45.443 C 121.257 44.545 121.215 43.595 120.9 42.721 L 120.771 42.35 C 118.195 35.15 114.338 28.476 109.386 22.65 L 109.129 22.35 C 108.528 21.644 107.727 21.136 106.832 20.894 C 105.937 20.651 104.989 20.686 104.114 20.993 L 92.5 25.121 C 88.214 21.607 83.429 18.836 78.257 16.893 L 76.014 4.75 C 75.845 3.836 75.402 2.996 74.744 2.34 C 74.085 1.684 73.243 1.244 72.329 1.079 L 71.943 1.007 C 64.5 -0.336 56.671 -0.336 49.229 1.007 L 48.843 1.079 C 47.929 1.244 47.086 1.684 46.428 2.34 C 45.77 2.996 45.326 3.836 45.157 4.75 L 42.9 16.95 C 37.77 18.893 32.992 21.663 28.757 25.15 L 17.057 20.993 C 16.182 20.683 15.234 20.648 14.339 20.89 C 13.443 21.132 12.642 21.642 12.043 22.35 L 11.786 22.65 C 6.839 28.48 2.983 35.153 0.4 42.35 L 0.271 42.721 C -0.371 44.507 0.157 46.507 1.6 47.75 L 11.071 55.836 C 10.629 58.521 10.414 61.264 10.414 63.993 C 10.414 66.736 10.629 69.479 11.071 72.15 L 1.6 80.236 C 0.894 80.84 0.389 81.645 0.152 82.543 C -0.086 83.441 -0.044 84.39 0.271 85.264 L 0.4 85.636 C 2.986 92.836 6.814 99.479 11.786 105.336 L 12.043 105.636 C 12.644 106.342 13.444 106.85 14.339 107.092 C 15.235 107.334 16.182 107.3 17.057 106.993 L 28.757 102.836 C 33.014 106.336 37.771 109.107 42.9 111.036 L 45.157 123.236 C 45.326 124.149 45.77 124.99 46.428 125.646 C 47.086 126.302 47.929 126.741 48.843 126.907 L 49.229 126.979 C 56.74 128.329 64.432 128.329 71.943 126.979 L 72.329 126.907 C 73.243 126.741 74.085 126.302 74.744 125.646 C 75.402 124.99 75.845 124.149 76.014 123.236 L 78.257 111.093 C 83.426 109.155 88.239 106.375 92.5 102.864 L 104.114 106.993 C 104.989 107.302 105.937 107.338 106.833 107.096 C 107.729 106.853 108.529 106.344 109.129 105.636 L 109.386 105.336 C 114.357 99.464 118.186 92.836 120.771 85.636 L 120.9 85.264 C 121.543 83.507 121.014 81.507 119.571 80.264 L 119.571 80.264 Z M 100.071 57.436 C 100.429 59.593 100.614 61.807 100.614 64.021 C 100.614 66.236 100.429 68.45 100.071 70.607 L 99.129 76.336 L 109.8 85.464 C 108.182 89.191 106.14 92.719 103.714 95.979 L 90.457 91.279 L 85.971 94.964 C 82.557 97.764 78.757 99.964 74.643 101.507 L 69.2 103.55 L 66.643 117.407 C 62.608 117.864 58.535 117.864 54.5 117.407 L 51.943 103.521 L 46.543 101.45 C 42.471 99.907 38.686 97.707 35.3 94.921 L 30.814 91.221 L 17.471 95.964 C 15.043 92.693 13.014 89.164 11.386 85.45 L 22.171 76.236 L 21.243 70.521 C 20.9 68.393 20.714 66.193 20.714 64.021 C 20.714 61.836 20.886 59.65 21.243 57.521 L 22.171 51.807 L 11.386 42.593 C 13 38.864 15.043 35.35 17.471 32.079 L 30.814 36.821 L 35.3 33.121 C 38.686 30.336 42.471 28.136 46.543 26.593 L 51.957 24.55 L 54.514 10.664 C 58.529 10.207 62.629 10.207 66.657 10.664 L 69.214 24.521 L 74.657 26.564 C 78.757 28.107 82.571 30.307 85.986 33.107 L 90.471 36.793 L 103.729 32.093 C 106.157 35.364 108.186 38.893 109.814 42.607 L 99.143 51.736 L 100.071 57.436 Z M 60.6 37.45 C 46.714 37.45 35.457 48.707 35.457 62.593 C 35.457 76.479 46.714 87.736 60.6 87.736 C 74.486 87.736 85.743 76.479 85.743 62.593 C 85.743 48.707 74.486 37.45 60.6 37.45 Z M 71.914 73.907 C 70.43 75.395 68.667 76.576 66.725 77.38 C 64.783 78.184 62.702 78.596 60.6 78.593 C 56.329 78.593 52.314 76.921 49.286 73.907 C 47.798 72.423 46.617 70.66 45.813 68.718 C 45.009 66.776 44.597 64.695 44.6 62.593 C 44.6 58.321 46.271 54.307 49.286 51.279 C 52.314 48.25 56.329 46.593 60.6 46.593 C 64.871 46.593 68.886 48.25 71.914 51.279 C 73.403 52.763 74.583 54.526 75.387 56.468 C 76.191 58.41 76.603 60.491 76.6 62.593 C 76.6 66.864 74.929 70.879 71.914 73.907 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.85)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 104,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 98.452,
    height: 103.993,
    viewBox: "0 0 98.452 103.993",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.761,
      top: 0,
      width: 98.452,
      height: 103.993
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 97.152 65.215 L 89.549 58.715 C 89.909 56.509 90.095 54.258 90.095 52.006 C 90.095 49.754 89.909 47.502 89.549 45.297 L 97.152 38.797 C 97.725 38.306 98.136 37.652 98.328 36.922 C 98.521 36.192 98.487 35.421 98.231 34.711 L 98.127 34.409 C 96.034 28.56 92.9 23.137 88.876 18.403 L 88.667 18.159 C 88.179 17.585 87.528 17.173 86.801 16.976 C 86.074 16.779 85.304 16.807 84.593 17.057 L 75.156 20.411 C 71.674 17.556 67.786 15.304 63.584 13.725 L 61.762 3.859 C 61.624 3.117 61.264 2.434 60.729 1.901 C 60.194 1.368 59.51 1.011 58.767 0.876 L 58.454 0.818 C 52.406 -0.273 46.046 -0.273 39.998 0.818 L 39.685 0.876 C 38.942 1.011 38.258 1.368 37.723 1.901 C 37.188 2.434 36.828 3.117 36.69 3.859 L 34.856 13.772 C 30.688 15.351 26.806 17.601 23.365 20.434 L 13.859 17.057 C 13.148 16.805 12.378 16.776 11.65 16.973 C 10.922 17.17 10.272 17.584 9.785 18.159 L 9.576 18.403 C 5.557 23.14 2.423 28.562 0.325 34.409 L 0.221 34.711 C -0.302 36.162 0.128 37.787 1.3 38.797 L 8.996 45.367 C 8.636 47.549 8.462 49.777 8.462 51.994 C 8.462 54.223 8.636 56.451 8.996 58.622 L 1.3 65.192 C 0.727 65.682 0.316 66.336 0.123 67.066 C -0.069 67.796 -0.036 68.567 0.221 69.277 L 0.325 69.579 C 2.426 75.429 5.537 80.826 9.576 85.585 L 9.785 85.829 C 10.273 86.403 10.924 86.816 11.651 87.012 C 12.378 87.209 13.148 87.181 13.859 86.932 L 23.365 83.554 C 26.824 86.398 30.689 88.65 34.856 90.217 L 36.69 100.129 C 36.828 100.871 37.188 101.554 37.723 102.087 C 38.258 102.62 38.942 102.977 39.685 103.112 L 39.998 103.17 C 46.101 104.267 52.351 104.267 58.454 103.17 L 58.767 103.112 C 59.51 102.977 60.194 102.62 60.729 102.087 C 61.264 101.554 61.624 100.871 61.762 100.129 L 63.584 90.263 C 67.784 88.689 71.694 86.429 75.156 83.577 L 84.593 86.932 C 85.304 87.183 86.074 87.212 86.802 87.015 C 87.529 86.818 88.18 86.405 88.667 85.829 L 88.876 85.585 C 92.915 80.815 96.026 75.429 98.127 69.579 L 98.231 69.277 C 98.754 67.85 98.324 66.225 97.152 65.215 L 97.152 65.215 Z M 81.308 46.667 C 81.598 48.419 81.749 50.218 81.749 52.017 C 81.749 53.817 81.598 55.616 81.308 57.368 L 80.542 62.023 L 89.213 69.44 C 87.898 72.468 86.239 75.334 84.268 77.983 L 73.496 74.164 L 69.852 77.158 C 67.078 79.433 63.99 81.221 60.647 82.475 L 56.225 84.134 L 54.147 95.393 C 50.869 95.765 47.559 95.765 44.281 95.393 L 42.204 84.111 L 37.816 82.428 C 34.508 81.175 31.432 79.387 28.681 77.124 L 25.037 74.117 L 14.196 77.971 C 12.222 75.313 10.574 72.446 9.251 69.428 L 18.014 61.942 L 17.26 57.299 C 16.981 55.569 16.83 53.782 16.83 52.017 C 16.83 50.242 16.97 48.466 17.26 46.736 L 18.014 42.093 L 9.251 34.607 C 10.563 31.577 12.222 28.722 14.196 26.064 L 25.037 29.917 L 28.681 26.911 C 31.432 24.648 34.508 22.86 37.816 21.607 L 42.215 19.947 L 44.293 8.665 C 47.554 8.293 50.886 8.293 54.159 8.665 L 56.237 19.924 L 60.659 21.583 C 63.99 22.837 67.089 24.625 69.863 26.9 L 73.508 29.894 L 84.279 26.075 C 86.253 28.733 87.901 31.6 89.224 34.618 L 80.554 42.035 L 81.308 46.667 Z M 49.238 30.428 C 37.955 30.428 28.809 39.575 28.809 50.857 C 28.809 62.139 37.955 71.285 49.238 71.285 C 60.52 71.285 69.666 62.139 69.666 50.857 C 69.666 39.575 60.52 30.428 49.238 30.428 Z M 58.43 60.05 C 57.225 61.259 55.792 62.218 54.214 62.871 C 52.636 63.524 50.945 63.859 49.238 63.857 C 45.767 63.857 42.505 62.499 40.045 60.05 C 38.835 58.844 37.877 57.411 37.223 55.833 C 36.57 54.256 36.235 52.564 36.238 50.857 C 36.238 47.386 37.596 44.125 40.045 41.664 C 42.505 39.203 45.767 37.857 49.238 37.857 C 52.708 37.857 55.97 39.203 58.43 41.664 C 59.64 42.87 60.598 44.302 61.252 45.88 C 61.905 47.458 62.24 49.149 62.238 50.857 C 62.238 54.327 60.879 57.589 58.43 60.05 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.85)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 64,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 60.586,
    height: 63.996,
    viewBox: "0 0 60.586 63.996",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.699,
      top: 0,
      width: 60.586,
      height: 63.996
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 59.786 40.132 L 55.107 36.132 C 55.329 34.775 55.443 33.389 55.443 32.003 C 55.443 30.618 55.329 29.232 55.107 27.875 L 59.786 23.875 C 60.139 23.573 60.391 23.17 60.51 22.721 C 60.628 22.272 60.608 21.798 60.45 21.361 L 60.386 21.175 C 59.098 17.575 57.169 14.238 54.693 11.325 L 54.564 11.175 C 54.264 10.822 53.864 10.568 53.416 10.447 C 52.968 10.326 52.495 10.343 52.057 10.496 L 46.25 12.561 C 44.107 10.803 41.714 9.418 39.129 8.446 L 38.007 2.375 C 37.923 1.918 37.701 1.498 37.372 1.17 C 37.043 0.842 36.621 0.622 36.164 0.539 L 35.971 0.503 C 32.25 -0.168 28.336 -0.168 24.614 0.503 L 24.421 0.539 C 23.964 0.622 23.543 0.842 23.214 1.17 C 22.885 1.498 22.663 1.918 22.579 2.375 L 21.45 8.475 C 18.885 9.447 16.496 10.831 14.379 12.575 L 8.529 10.496 C 8.091 10.342 7.617 10.324 7.169 10.445 C 6.721 10.566 6.321 10.821 6.021 11.175 L 5.893 11.325 C 3.42 14.24 1.491 17.577 0.2 21.175 L 0.136 21.361 C -0.186 22.253 0.079 23.253 0.8 23.875 L 5.536 27.918 C 5.314 29.261 5.207 30.632 5.207 31.996 C 5.207 33.368 5.314 34.739 5.536 36.075 L 0.8 40.118 C 0.447 40.42 0.195 40.822 0.076 41.271 C -0.043 41.72 -0.022 42.195 0.136 42.632 L 0.2 42.818 C 1.493 46.418 3.407 49.739 5.893 52.668 L 6.021 52.818 C 6.322 53.171 6.722 53.425 7.17 53.546 C 7.617 53.667 8.091 53.65 8.529 53.496 L 14.379 51.418 C 16.507 53.168 18.886 54.553 21.45 55.518 L 22.579 61.618 C 22.663 62.075 22.885 62.495 23.214 62.823 C 23.543 63.151 23.964 63.371 24.421 63.453 L 24.614 63.489 C 28.37 64.164 32.216 64.164 35.971 63.489 L 36.164 63.453 C 36.621 63.371 37.043 63.151 37.372 62.823 C 37.701 62.495 37.923 62.075 38.007 61.618 L 39.129 55.546 C 41.713 54.577 44.12 53.187 46.25 51.432 L 52.057 53.496 C 52.495 53.651 52.969 53.669 53.416 53.548 C 53.864 53.427 54.265 53.172 54.564 52.818 L 54.693 52.668 C 57.179 49.732 59.093 46.418 60.386 42.818 L 60.45 42.632 C 60.771 41.753 60.507 40.753 59.786 40.132 L 59.786 40.132 Z M 50.036 28.718 C 50.214 29.796 50.307 30.903 50.307 32.011 C 50.307 33.118 50.214 34.225 50.036 35.303 L 49.564 38.168 L 54.9 42.732 C 54.091 44.596 53.07 46.36 51.857 47.989 L 45.229 45.639 L 42.986 47.482 C 41.279 48.882 39.379 49.982 37.321 50.753 L 34.6 51.775 L 33.321 58.703 C 31.304 58.932 29.267 58.932 27.25 58.703 L 25.971 51.761 L 23.271 50.725 C 21.236 49.953 19.343 48.853 17.65 47.461 L 15.407 45.611 L 8.736 47.982 C 7.521 46.346 6.507 44.582 5.693 42.725 L 11.086 38.118 L 10.621 35.261 C 10.45 34.196 10.357 33.096 10.357 32.011 C 10.357 30.918 10.443 29.825 10.621 28.761 L 11.086 25.903 L 5.693 21.296 C 6.5 19.432 7.521 17.675 8.736 16.039 L 15.407 18.411 L 17.65 16.561 C 19.343 15.168 21.236 14.068 23.271 13.296 L 25.979 12.275 L 27.257 5.332 C 29.264 5.103 31.314 5.103 33.329 5.332 L 34.607 12.261 L 37.329 13.282 C 39.379 14.053 41.286 15.153 42.993 16.553 L 45.236 18.396 L 51.864 16.046 C 53.079 17.682 54.093 19.446 54.907 21.303 L 49.571 25.868 L 50.036 28.718 Z M 30.3 18.725 C 23.357 18.725 17.729 24.353 17.729 31.296 C 17.729 38.239 23.357 43.868 30.3 43.868 C 37.243 43.868 42.871 38.239 42.871 31.296 C 42.871 24.353 37.243 18.725 30.3 18.725 Z M 35.957 36.953 C 35.215 37.698 34.333 38.288 33.363 38.69 C 32.392 39.092 31.351 39.298 30.3 39.296 C 28.164 39.296 26.157 38.461 24.643 36.953 C 23.899 36.211 23.309 35.33 22.907 34.359 C 22.505 33.388 22.298 32.347 22.3 31.296 C 22.3 29.161 23.136 27.153 24.643 25.639 C 26.157 24.125 28.164 23.296 30.3 23.296 C 32.436 23.296 34.443 24.125 35.957 25.639 C 36.701 26.381 37.291 27.263 37.693 28.234 C 38.095 29.205 38.302 30.245 38.3 31.296 C 38.3 33.432 37.464 35.439 35.957 36.953 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.85)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 45.439,
    height: 47.997,
    viewBox: "0 0 45.439 47.997",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.274,
      top: 0,
      width: 45.439,
      height: 47.997
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 44.839 30.099 L 41.33 27.099 C 41.496 26.081 41.582 25.042 41.582 24.003 C 41.582 22.963 41.496 21.924 41.33 20.906 L 44.839 17.906 C 45.104 17.68 45.293 17.378 45.382 17.041 C 45.471 16.704 45.456 16.348 45.338 16.02 L 45.289 15.881 C 44.323 13.181 42.877 10.679 41.02 8.494 L 40.923 8.381 C 40.698 8.116 40.398 7.926 40.062 7.835 C 39.726 7.744 39.371 7.757 39.043 7.872 L 34.688 9.42 C 33.08 8.103 31.286 7.063 29.346 6.335 L 28.505 1.781 C 28.442 1.439 28.276 1.123 28.029 0.877 C 27.782 0.632 27.466 0.467 27.123 0.404 L 26.979 0.378 C 24.188 -0.126 21.252 -0.126 18.461 0.378 L 18.316 0.404 C 17.973 0.467 17.657 0.632 17.41 0.877 C 17.164 1.123 16.997 1.439 16.934 1.781 L 16.088 6.356 C 14.164 7.085 12.372 8.124 10.784 9.431 L 6.396 7.872 C 6.068 7.756 5.713 7.743 5.377 7.834 C 5.041 7.925 4.741 8.116 4.516 8.381 L 4.42 8.494 C 2.565 10.68 1.118 13.182 0.15 15.881 L 0.102 16.02 C -0.139 16.69 0.059 17.44 0.6 17.906 L 4.152 20.938 C 3.986 21.945 3.905 22.974 3.905 23.997 C 3.905 25.026 3.986 26.054 4.152 27.056 L 0.6 30.088 C 0.335 30.315 0.146 30.617 0.057 30.954 C -0.032 31.29 -0.016 31.646 0.102 31.974 L 0.15 32.113 C 1.12 34.813 2.555 37.304 4.42 39.501 L 4.516 39.613 C 4.741 39.878 5.042 40.069 5.377 40.16 C 5.713 40.25 6.068 40.237 6.396 40.122 L 10.784 38.563 C 12.38 39.876 14.164 40.915 16.088 41.638 L 16.934 46.213 C 16.997 46.556 17.164 46.871 17.41 47.117 C 17.657 47.363 17.973 47.528 18.316 47.59 L 18.461 47.617 C 21.277 48.123 24.162 48.123 26.979 47.617 L 27.123 47.59 C 27.466 47.528 27.782 47.363 28.029 47.117 C 28.276 46.871 28.442 46.556 28.505 46.213 L 29.346 41.66 C 31.285 40.933 33.09 39.89 34.688 38.574 L 39.043 40.122 C 39.371 40.238 39.726 40.252 40.062 40.161 C 40.398 40.07 40.698 39.879 40.923 39.613 L 41.02 39.501 C 42.884 37.299 44.32 34.813 45.289 32.113 L 45.338 31.974 C 45.579 31.315 45.38 30.565 44.839 30.099 L 44.839 30.099 Z M 37.527 21.538 C 37.661 22.347 37.73 23.178 37.73 24.008 C 37.73 24.838 37.661 25.669 37.527 26.478 L 37.173 28.626 L 41.175 32.049 C 40.568 33.447 39.803 34.77 38.893 35.992 L 33.921 34.229 L 32.239 35.612 C 30.959 36.662 29.534 37.487 27.991 38.065 L 25.95 38.831 L 24.991 44.028 C 23.478 44.199 21.951 44.199 20.438 44.028 L 19.479 38.82 L 17.454 38.044 C 15.927 37.465 14.507 36.64 13.238 35.595 L 11.555 34.208 L 6.552 35.987 C 5.641 34.76 4.88 33.437 4.27 32.044 L 8.314 28.588 L 7.966 26.445 C 7.838 25.647 7.768 24.822 7.768 24.008 C 7.768 23.188 7.832 22.369 7.966 21.57 L 8.314 19.428 L 4.27 15.972 C 4.875 14.574 5.641 13.256 6.552 12.029 L 11.555 13.808 L 13.238 12.42 C 14.507 11.376 15.927 10.551 17.454 9.972 L 19.484 9.206 L 20.443 3.999 C 21.948 3.828 23.486 3.828 24.996 3.999 L 25.955 9.195 L 27.996 9.962 C 29.534 10.54 30.964 11.365 32.245 12.415 L 33.927 13.797 L 38.898 12.035 C 39.809 13.262 40.57 14.585 41.18 15.978 L 37.179 19.401 L 37.527 21.538 Z M 22.725 14.044 C 17.518 14.044 13.296 18.265 13.296 23.472 C 13.296 28.679 17.518 32.901 22.725 32.901 C 27.932 32.901 32.154 28.679 32.154 23.472 C 32.154 18.265 27.932 14.044 22.725 14.044 Z M 26.968 27.715 C 26.411 28.273 25.75 28.716 25.022 29.017 C 24.294 29.319 23.513 29.473 22.725 29.472 C 21.123 29.472 19.618 28.845 18.482 27.715 C 17.924 27.159 17.482 26.497 17.18 25.769 C 16.878 25.041 16.724 24.26 16.725 23.472 C 16.725 21.87 17.352 20.365 18.482 19.229 C 19.618 18.094 21.123 17.472 22.725 17.472 C 24.327 17.472 25.832 18.094 26.968 19.229 C 27.526 19.786 27.969 20.447 28.27 21.175 C 28.572 21.904 28.726 22.684 28.725 23.472 C 28.725 25.074 28.098 26.579 26.968 27.715 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.85)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 31.240,
    height: 31.998,
    viewBox: "0 0 31.240 31.998",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.876,
      top: 0,
      width: 31.24,
      height: 31.998
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 30.827 20.066 L 28.415 18.066 C 28.529 17.388 28.588 16.695 28.588 16.002 C 28.588 15.309 28.529 14.616 28.415 13.938 L 30.827 11.938 C 31.009 11.786 31.139 11.585 31.2 11.361 C 31.262 11.136 31.251 10.899 31.17 10.68 L 31.136 10.588 C 30.472 8.788 29.478 7.119 28.201 5.663 L 28.135 5.588 C 27.98 5.411 27.773 5.284 27.543 5.223 C 27.312 5.163 27.068 5.171 26.842 5.248 L 23.848 6.28 C 22.743 5.402 21.509 4.709 20.176 4.223 L 19.597 1.188 C 19.554 0.959 19.44 0.749 19.27 0.585 C 19.1 0.421 18.883 0.311 18.647 0.27 L 18.548 0.252 C 16.629 -0.084 14.611 -0.084 12.692 0.252 L 12.592 0.27 C 12.357 0.311 12.139 0.421 11.97 0.585 C 11.8 0.749 11.686 0.959 11.642 1.188 L 11.06 4.238 C 9.738 4.723 8.506 5.416 7.414 6.288 L 4.398 5.248 C 4.172 5.171 3.928 5.162 3.697 5.223 C 3.466 5.283 3.259 5.41 3.105 5.588 L 3.039 5.663 C 1.763 7.12 0.769 8.788 0.103 10.588 L 0.07 10.68 C -0.096 11.127 0.041 11.627 0.413 11.938 L 2.854 13.959 C 2.74 14.63 2.685 15.316 2.685 15.998 C 2.685 16.684 2.74 17.37 2.854 18.038 L 0.413 20.059 C 0.231 20.21 0.1 20.411 0.039 20.636 C -0.022 20.86 -0.011 21.098 0.07 21.316 L 0.103 21.409 C 0.77 23.209 1.757 24.87 3.039 26.334 L 3.105 26.409 C 3.26 26.586 3.466 26.712 3.697 26.773 C 3.928 26.834 4.172 26.825 4.398 26.748 L 7.414 25.709 C 8.512 26.584 9.738 27.277 11.06 27.759 L 11.642 30.809 C 11.686 31.037 11.8 31.248 11.97 31.411 C 12.139 31.575 12.357 31.685 12.592 31.727 L 12.692 31.745 C 14.628 32.082 16.611 32.082 18.548 31.745 L 18.647 31.727 C 18.883 31.685 19.1 31.575 19.27 31.411 C 19.44 31.248 19.554 31.037 19.597 30.809 L 20.176 27.773 C 21.508 27.289 22.749 26.594 23.848 25.716 L 26.842 26.748 C 27.067 26.826 27.312 26.835 27.543 26.774 C 27.774 26.713 27.98 26.586 28.135 26.409 L 28.201 26.334 C 29.483 24.866 30.47 23.209 31.136 21.409 L 31.17 21.316 C 31.335 20.877 31.199 20.377 30.827 20.066 L 30.827 20.066 Z M 25.8 14.359 C 25.892 14.898 25.94 15.452 25.94 16.005 C 25.94 16.559 25.892 17.113 25.8 17.652 L 25.557 19.084 L 28.308 21.366 C 27.891 22.298 27.364 23.18 26.739 23.995 L 23.321 22.82 L 22.165 23.741 C 21.284 24.441 20.305 24.991 19.244 25.377 L 17.841 25.888 L 17.181 29.352 C 16.141 29.466 15.091 29.466 14.051 29.352 L 13.392 25.88 L 11.999 25.363 C 10.95 24.977 9.974 24.427 9.101 23.73 L 7.944 22.805 L 4.504 23.991 C 3.878 23.173 3.355 22.291 2.935 21.363 L 5.716 19.059 L 5.477 17.63 C 5.388 17.098 5.34 16.548 5.34 16.005 C 5.34 15.459 5.385 14.913 5.477 14.38 L 5.716 12.952 L 2.935 10.648 C 3.352 9.716 3.878 8.838 4.504 8.02 L 7.944 9.205 L 9.101 8.28 C 9.974 7.584 10.95 7.034 11.999 6.648 L 13.395 6.138 L 14.054 2.666 C 15.089 2.552 16.146 2.552 17.185 2.666 L 17.844 6.13 L 19.248 6.641 C 20.305 7.027 21.288 7.577 22.168 8.277 L 23.325 9.198 L 26.743 8.023 C 27.369 8.841 27.892 9.723 28.312 10.652 L 25.56 12.934 L 25.8 14.359 Z M 15.623 9.363 C 12.044 9.363 9.141 12.177 9.141 15.648 C 9.141 19.12 12.044 21.934 15.623 21.934 C 19.203 21.934 22.106 19.12 22.106 15.648 C 22.106 12.177 19.203 9.363 15.623 9.363 Z M 18.54 18.477 C 18.158 18.849 17.703 19.144 17.203 19.345 C 16.702 19.546 16.165 19.649 15.623 19.648 C 14.522 19.648 13.487 19.23 12.706 18.477 C 12.323 18.106 12.019 17.665 11.811 17.179 C 11.604 16.694 11.498 16.174 11.498 15.648 C 11.498 14.58 11.929 13.577 12.706 12.82 C 13.487 12.063 14.522 11.648 15.623 11.648 C 16.725 11.648 17.76 12.063 18.54 12.82 C 18.924 13.191 19.228 13.632 19.436 14.117 C 19.643 14.602 19.749 15.123 19.748 15.648 C 19.748 16.716 19.318 17.72 18.54 18.477 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.85)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22.720,
    height: 23.998,
    viewBox: "0 0 22.720 23.998",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.637,
      top: 0,
      width: 22.72,
      height: 23.998
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 22.42 15.05 L 20.665 13.55 C 20.748 13.041 20.791 12.521 20.791 12.001 C 20.791 11.482 20.748 10.962 20.665 10.453 L 22.42 8.953 C 22.552 8.84 22.647 8.689 22.691 8.521 C 22.736 8.352 22.728 8.174 22.669 8.01 L 22.645 7.941 C 22.162 6.591 21.438 5.339 20.51 4.247 L 20.462 4.191 C 20.349 4.058 20.199 3.963 20.031 3.918 C 19.863 3.872 19.686 3.879 19.521 3.936 L 17.344 4.71 C 16.54 4.051 15.643 3.532 14.673 3.167 L 14.253 0.891 C 14.221 0.719 14.138 0.562 14.014 0.439 C 13.891 0.316 13.733 0.233 13.562 0.202 L 13.489 0.189 C 12.094 -0.063 10.626 -0.063 9.23 0.189 L 9.158 0.202 C 8.987 0.233 8.829 0.316 8.705 0.439 C 8.582 0.562 8.499 0.719 8.467 0.891 L 8.044 3.178 C 7.082 3.543 6.186 4.062 5.392 4.716 L 3.198 3.936 C 3.034 3.878 2.856 3.871 2.688 3.917 C 2.521 3.962 2.37 4.058 2.258 4.191 L 2.21 4.247 C 1.282 5.34 0.559 6.591 0.075 7.941 L 0.051 8.01 C -0.07 8.345 0.029 8.72 0.3 8.953 L 2.076 10.469 C 1.993 10.973 1.953 11.487 1.953 11.999 C 1.953 12.513 1.993 13.027 2.076 13.528 L 0.3 15.044 C 0.168 15.158 0.073 15.308 0.028 15.477 C -0.016 15.645 -0.008 15.823 0.051 15.987 L 0.075 16.057 C 0.56 17.407 1.278 18.652 2.21 19.751 L 2.258 19.807 C 2.371 19.939 2.521 20.034 2.689 20.08 C 2.856 20.125 3.034 20.119 3.198 20.061 L 5.392 19.282 C 6.19 19.938 7.082 20.458 8.044 20.819 L 8.467 23.107 C 8.499 23.278 8.582 23.436 8.705 23.559 C 8.829 23.682 8.987 23.764 9.158 23.795 L 9.23 23.809 C 10.639 24.062 12.081 24.062 13.489 23.809 L 13.562 23.795 C 13.733 23.764 13.891 23.682 14.014 23.559 C 14.138 23.436 14.221 23.278 14.253 23.107 L 14.673 20.83 C 15.642 20.467 16.545 19.945 17.344 19.287 L 19.521 20.061 C 19.685 20.119 19.863 20.126 20.031 20.081 C 20.199 20.035 20.349 19.94 20.462 19.807 L 20.51 19.751 C 21.442 18.65 22.16 17.407 22.645 16.057 L 22.669 15.987 C 22.789 15.658 22.69 15.283 22.42 15.05 L 22.42 15.05 Z M 18.763 10.769 C 18.83 11.174 18.865 11.589 18.865 12.004 C 18.865 12.419 18.83 12.834 18.763 13.239 L 18.587 14.313 L 20.588 16.025 C 20.284 16.723 19.901 17.385 19.446 17.996 L 16.961 17.115 L 16.12 17.806 C 15.479 18.331 14.767 18.743 13.996 19.033 L 12.975 19.416 L 12.496 22.014 C 11.739 22.1 10.975 22.1 10.219 22.014 L 9.739 19.41 L 8.727 19.022 C 7.963 18.733 7.254 18.32 6.619 17.798 L 5.778 17.104 L 3.276 17.993 C 2.821 17.38 2.44 16.718 2.135 16.022 L 4.157 14.294 L 3.983 13.223 C 3.919 12.824 3.884 12.411 3.884 12.004 C 3.884 11.594 3.916 11.184 3.983 10.785 L 4.157 9.714 L 2.135 7.986 C 2.438 7.287 2.821 6.628 3.276 6.015 L 5.778 6.904 L 6.619 6.21 C 7.254 5.688 7.963 5.276 8.727 4.986 L 9.742 4.603 L 10.221 2 C 10.974 1.914 11.743 1.914 12.498 2 L 12.978 4.598 L 13.998 4.981 C 14.767 5.27 15.482 5.683 16.122 6.208 L 16.963 6.899 L 19.449 6.017 C 19.904 6.631 20.285 7.292 20.59 7.989 L 18.589 9.701 L 18.763 10.769 Z M 11.363 7.022 C 8.759 7.022 6.648 9.133 6.648 11.736 C 6.648 14.34 8.759 16.451 11.363 16.451 C 13.966 16.451 16.077 14.34 16.077 11.736 C 16.077 9.133 13.966 7.022 11.363 7.022 Z M 13.484 13.858 C 13.206 14.137 12.875 14.358 12.511 14.509 C 12.147 14.66 11.757 14.737 11.363 14.736 C 10.562 14.736 9.809 14.423 9.241 13.858 C 8.962 13.579 8.741 13.249 8.59 12.885 C 8.439 12.521 8.362 12.13 8.363 11.736 C 8.363 10.935 8.676 10.183 9.241 9.615 C 9.809 9.047 10.562 8.736 11.363 8.736 C 12.163 8.736 12.916 9.047 13.484 9.615 C 13.763 9.893 13.984 10.224 14.135 10.588 C 14.286 10.952 14.363 11.342 14.363 11.736 C 14.363 12.537 14.049 13.29 13.484 13.858 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.85)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 22,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.826,
    height: 21.998,
    viewBox: "0 0 20.826 21.998",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.584,
      top: 0,
      width: 20.826,
      height: 21.998
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20.551 13.795 L 18.943 12.42 C 19.019 11.954 19.058 11.478 19.058 11.001 C 19.058 10.525 19.019 10.049 18.943 9.582 L 20.551 8.207 C 20.673 8.103 20.759 7.965 20.8 7.811 C 20.841 7.656 20.834 7.493 20.78 7.343 L 20.758 7.279 C 20.315 6.042 19.652 4.894 18.801 3.893 L 18.756 3.841 C 18.653 3.72 18.516 3.633 18.362 3.591 C 18.208 3.55 18.045 3.555 17.895 3.608 L 15.898 4.318 C 15.162 3.714 14.339 3.237 13.45 2.904 L 13.065 0.816 C 13.036 0.659 12.96 0.515 12.847 0.402 C 12.733 0.29 12.589 0.214 12.431 0.185 L 12.365 0.173 C 11.086 -0.058 9.74 -0.058 8.461 0.173 L 8.395 0.185 C 8.238 0.214 8.093 0.29 7.98 0.402 C 7.867 0.515 7.79 0.659 7.761 0.816 L 7.373 2.913 C 6.492 3.247 5.671 3.723 4.943 4.323 L 2.932 3.608 C 2.781 3.555 2.618 3.549 2.464 3.591 C 2.31 3.632 2.173 3.72 2.07 3.841 L 2.026 3.893 C 1.175 4.895 0.513 6.042 0.069 7.279 L 0.047 7.343 C -0.064 7.65 0.027 7.993 0.275 8.207 L 1.903 9.597 C 1.827 10.058 1.79 10.53 1.79 10.999 C 1.79 11.47 1.827 11.942 1.903 12.401 L 0.275 13.791 C 0.154 13.894 0.067 14.033 0.026 14.187 C -0.015 14.342 -0.008 14.505 0.047 14.655 L 0.069 14.719 C 0.513 15.956 1.171 17.098 2.026 18.105 L 2.07 18.156 C 2.173 18.278 2.311 18.365 2.465 18.407 C 2.618 18.448 2.781 18.442 2.932 18.389 L 4.943 17.675 C 5.674 18.277 6.492 18.753 7.373 19.084 L 7.761 21.181 C 7.79 21.338 7.867 21.483 7.98 21.595 C 8.093 21.708 8.238 21.784 8.395 21.812 L 8.461 21.825 C 9.752 22.057 11.074 22.057 12.365 21.825 L 12.431 21.812 C 12.589 21.784 12.733 21.708 12.847 21.595 C 12.96 21.483 13.036 21.338 13.065 21.181 L 13.45 19.094 C 14.339 18.761 15.166 18.283 15.898 17.68 L 17.895 18.389 C 18.045 18.443 18.208 18.449 18.362 18.407 C 18.516 18.365 18.653 18.278 18.756 18.156 L 18.801 18.105 C 19.655 17.095 20.313 15.956 20.758 14.719 L 20.78 14.655 C 20.89 14.353 20.799 14.009 20.551 13.795 L 20.551 13.795 Z M 17.2 9.872 C 17.261 10.243 17.293 10.623 17.293 11.004 C 17.293 11.384 17.261 11.765 17.2 12.136 L 17.038 13.12 L 18.872 14.689 C 18.594 15.33 18.243 15.936 17.826 16.496 L 15.547 15.689 L 14.776 16.322 C 14.19 16.803 13.536 17.181 12.829 17.447 L 11.894 17.798 L 11.454 20.179 C 10.761 20.258 10.061 20.258 9.367 20.179 L 8.928 17.793 L 8 17.437 C 7.3 17.172 6.649 16.793 6.067 16.315 L 5.296 15.679 L 3.003 16.494 C 2.585 15.932 2.237 15.325 1.957 14.687 L 3.811 13.103 L 3.651 12.121 C 3.592 11.755 3.56 11.377 3.56 11.004 C 3.56 10.628 3.59 10.252 3.651 9.887 L 3.811 8.904 L 1.957 7.321 C 2.234 6.68 2.585 6.076 3.003 5.514 L 5.296 6.329 L 6.067 5.693 C 6.649 5.214 7.3 4.836 8 4.571 L 8.93 4.22 L 9.37 1.833 C 10.06 1.754 10.764 1.754 11.457 1.833 L 11.896 4.215 L 12.832 4.566 C 13.536 4.831 14.192 5.209 14.779 5.69 L 15.55 6.324 L 17.828 5.516 C 18.246 6.078 18.594 6.685 18.874 7.323 L 17.04 8.892 L 17.2 9.872 Z M 10.416 6.437 C 8.029 6.437 6.094 8.372 6.094 10.758 C 6.094 13.145 8.029 15.08 10.416 15.08 C 12.802 15.08 14.737 13.145 14.737 10.758 C 14.737 8.372 12.802 6.437 10.416 6.437 Z M 12.36 12.703 C 12.105 12.959 11.802 13.161 11.468 13.3 C 11.135 13.438 10.777 13.509 10.416 13.508 C 9.681 13.508 8.992 13.221 8.471 12.703 C 8.215 12.448 8.012 12.145 7.874 11.811 C 7.736 11.477 7.665 11.119 7.666 10.758 C 7.666 10.024 7.953 9.334 8.471 8.814 C 8.992 8.293 9.681 8.008 10.416 8.008 C 11.15 8.008 11.84 8.293 12.36 8.814 C 12.616 9.069 12.819 9.372 12.957 9.705 C 13.095 10.039 13.166 10.397 13.166 10.758 C 13.166 11.492 12.878 12.182 12.36 12.703 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.85)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 20,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18.933,
    height: 19.999,
    viewBox: "0 0 18.933 19.999",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.531,
      top: 0,
      width: 18.933,
      height: 19.999
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.683 12.541 L 17.221 11.291 C 17.29 10.867 17.326 10.434 17.326 10.001 C 17.326 9.568 17.29 9.135 17.221 8.711 L 18.683 7.461 C 18.793 7.367 18.872 7.241 18.909 7.101 C 18.946 6.96 18.94 6.812 18.891 6.675 L 18.871 6.617 C 18.468 5.492 17.865 4.449 17.092 3.539 L 17.051 3.492 C 16.957 3.382 16.832 3.303 16.693 3.265 C 16.553 3.227 16.405 3.232 16.268 3.28 L 14.453 3.925 C 13.783 3.376 13.036 2.943 12.228 2.64 L 11.877 0.742 C 11.851 0.599 11.782 0.468 11.679 0.366 C 11.576 0.263 11.444 0.194 11.301 0.169 L 11.241 0.157 C 10.078 -0.052 8.855 -0.052 7.692 0.157 L 7.632 0.169 C 7.489 0.194 7.357 0.263 7.254 0.366 C 7.152 0.468 7.082 0.599 7.056 0.742 L 6.703 2.649 C 5.902 2.952 5.155 3.385 4.493 3.93 L 2.665 3.28 C 2.529 3.232 2.38 3.226 2.24 3.264 C 2.1 3.302 1.975 3.382 1.882 3.492 L 1.842 3.539 C 1.069 4.45 0.466 5.493 0.063 6.617 L 0.042 6.675 C -0.058 6.954 0.025 7.267 0.25 7.461 L 1.73 8.724 C 1.661 9.144 1.627 9.573 1.627 9.999 C 1.627 10.428 1.661 10.856 1.73 11.274 L 0.25 12.537 C 0.14 12.631 0.061 12.757 0.024 12.897 C -0.013 13.038 -0.007 13.186 0.042 13.323 L 0.063 13.381 C 0.467 14.506 1.065 15.544 1.842 16.459 L 1.882 16.506 C 1.976 16.616 2.101 16.695 2.241 16.733 C 2.38 16.771 2.528 16.766 2.665 16.718 L 4.493 16.068 C 5.158 16.615 5.902 17.048 6.703 17.349 L 7.056 19.256 C 7.082 19.398 7.152 19.53 7.254 19.632 C 7.357 19.735 7.489 19.803 7.632 19.829 L 7.692 19.84 C 8.866 20.051 10.067 20.051 11.241 19.84 L 11.301 19.829 C 11.444 19.803 11.576 19.735 11.679 19.632 C 11.782 19.53 11.851 19.398 11.877 19.256 L 12.228 17.358 C 13.035 17.056 13.787 16.621 14.453 16.073 L 16.268 16.718 C 16.405 16.766 16.553 16.772 16.693 16.734 C 16.833 16.696 16.958 16.616 17.051 16.506 L 17.092 16.459 C 17.868 15.541 18.467 14.506 18.871 13.381 L 18.891 13.323 C 18.991 13.048 18.908 12.736 18.683 12.541 L 18.683 12.541 Z M 15.636 8.974 C 15.692 9.311 15.721 9.657 15.721 10.003 C 15.721 10.349 15.692 10.695 15.636 11.032 L 15.489 11.928 L 17.156 13.354 C 16.903 13.936 16.584 14.487 16.205 14.997 L 14.134 14.262 L 13.433 14.838 C 12.9 15.276 12.306 15.619 11.663 15.861 L 10.813 16.18 L 10.413 18.345 C 9.783 18.416 9.146 18.416 8.516 18.345 L 8.116 16.175 L 7.272 15.852 C 6.636 15.611 6.045 15.267 5.516 14.832 L 4.815 14.253 L 2.73 14.994 C 2.35 14.483 2.033 13.932 1.779 13.352 L 3.464 11.912 L 3.319 11.019 C 3.266 10.686 3.237 10.343 3.237 10.003 C 3.237 9.662 3.263 9.32 3.319 8.988 L 3.464 8.095 L 1.779 6.655 C 2.031 6.073 2.35 5.524 2.73 5.012 L 4.815 5.753 L 5.516 5.175 C 6.045 4.74 6.636 4.396 7.272 4.155 L 8.118 3.836 L 8.518 1.666 C 9.145 1.595 9.786 1.595 10.415 1.666 L 10.815 3.832 L 11.665 4.151 C 12.306 4.392 12.902 4.736 13.435 5.173 L 14.136 5.749 L 16.208 5.015 C 16.587 5.526 16.904 6.077 17.158 6.657 L 15.491 8.084 L 15.636 8.974 Z M 9.469 5.852 C 7.299 5.852 5.54 7.611 5.54 9.78 C 5.54 11.95 7.299 13.709 9.469 13.709 C 11.638 13.709 13.397 11.95 13.397 9.78 C 13.397 7.611 11.638 5.852 9.469 5.852 Z M 11.237 11.548 C 11.005 11.781 10.729 11.965 10.426 12.091 C 10.122 12.216 9.797 12.281 9.469 12.28 C 8.801 12.28 8.174 12.019 7.701 11.548 C 7.468 11.316 7.284 11.041 7.158 10.737 C 7.033 10.434 6.968 10.109 6.969 9.78 C 6.969 9.113 7.23 8.486 7.701 8.012 C 8.174 7.539 8.801 7.28 9.469 7.28 C 10.136 7.28 10.763 7.539 11.237 8.012 C 11.469 8.244 11.654 8.52 11.779 8.823 C 11.905 9.127 11.969 9.452 11.969 9.78 C 11.969 10.448 11.708 11.075 11.237 11.548 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.85)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 18,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 17.040,
    height: 17.999,
    viewBox: "0 0 17.040 17.999",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.478,
      top: 0,
      width: 17.04,
      height: 17.999
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.815 11.287 L 15.499 10.162 C 15.561 9.781 15.593 9.391 15.593 9.001 C 15.593 8.611 15.561 8.222 15.499 7.84 L 16.815 6.715 C 16.914 6.63 16.985 6.517 17.018 6.39 C 17.052 6.264 17.046 6.131 17.002 6.008 L 16.983 5.956 C 16.621 4.943 16.079 4.005 15.382 3.185 L 15.346 3.143 C 15.262 3.044 15.149 2.972 15.023 2.938 C 14.897 2.904 14.764 2.909 14.641 2.952 L 13.008 3.533 C 12.405 3.039 11.732 2.649 11.005 2.376 L 10.69 0.668 C 10.666 0.54 10.603 0.421 10.511 0.329 C 10.418 0.237 10.3 0.175 10.171 0.152 L 10.117 0.142 C 9.07 -0.047 7.969 -0.047 6.923 0.142 L 6.869 0.152 C 6.74 0.175 6.622 0.237 6.529 0.329 C 6.436 0.421 6.374 0.54 6.35 0.668 L 6.033 2.384 C 5.311 2.657 4.64 3.046 4.044 3.537 L 2.399 2.952 C 2.276 2.909 2.142 2.904 2.016 2.938 C 1.89 2.972 1.778 3.043 1.694 3.143 L 1.657 3.185 C 0.962 4.005 0.419 4.944 0.056 5.956 L 0.038 6.008 C -0.052 6.259 0.022 6.54 0.225 6.715 L 1.557 7.852 C 1.495 8.23 1.465 8.615 1.465 8.999 C 1.465 9.385 1.495 9.771 1.557 10.146 L 0.225 11.283 C 0.126 11.368 0.055 11.481 0.021 11.608 C -0.012 11.734 -0.006 11.867 0.038 11.99 L 0.056 12.043 C 0.42 13.055 0.958 13.989 1.657 14.813 L 1.694 14.855 C 1.778 14.954 1.891 15.026 2.016 15.06 C 2.142 15.094 2.276 15.089 2.399 15.046 L 4.044 14.461 C 4.643 14.954 5.312 15.343 6.033 15.614 L 6.35 17.33 C 6.374 17.459 6.436 17.577 6.529 17.669 C 6.622 17.761 6.74 17.823 6.869 17.846 L 6.923 17.856 C 7.979 18.046 9.061 18.046 10.117 17.856 L 10.171 17.846 C 10.3 17.823 10.418 17.761 10.511 17.669 C 10.603 17.577 10.666 17.459 10.69 17.33 L 11.005 15.623 C 11.732 15.35 12.409 14.959 13.008 14.465 L 14.641 15.046 C 14.764 15.089 14.897 15.095 15.023 15.06 C 15.149 15.026 15.262 14.955 15.346 14.855 L 15.382 14.813 C 16.081 13.987 16.62 13.055 16.983 12.043 L 17.002 11.99 C 17.092 11.743 17.018 11.462 16.815 11.287 L 16.815 11.287 Z M 14.073 8.077 C 14.123 8.38 14.149 8.692 14.149 9.003 C 14.149 9.314 14.123 9.626 14.073 9.929 L 13.94 10.735 L 15.441 12.018 C 15.213 12.543 14.926 13.039 14.585 13.497 L 12.721 12.836 L 12.09 13.354 C 11.61 13.748 11.075 14.058 10.497 14.275 L 9.731 14.562 L 9.372 16.51 C 8.804 16.575 8.231 16.575 7.664 16.51 L 7.304 14.558 L 6.545 14.266 C 5.973 14.05 5.44 13.74 4.964 13.348 L 4.333 12.828 L 2.457 13.495 C 2.115 13.035 1.83 12.539 1.601 12.016 L 3.118 10.721 L 2.987 9.917 C 2.939 9.618 2.913 9.308 2.913 9.003 C 2.913 8.696 2.937 8.388 2.987 8.089 L 3.118 7.285 L 1.601 5.99 C 1.828 5.465 2.115 4.971 2.457 4.511 L 4.333 5.178 L 4.964 4.658 C 5.44 4.266 5.973 3.957 6.545 3.74 L 7.306 3.452 L 7.666 1.5 C 8.231 1.435 8.807 1.435 9.374 1.5 L 9.733 3.448 L 10.499 3.736 C 11.075 3.953 11.612 4.262 12.092 4.656 L 12.723 5.174 L 14.587 4.513 C 14.928 4.973 15.214 5.469 15.443 5.992 L 13.942 7.275 L 14.073 8.077 Z M 8.522 5.266 C 6.569 5.266 4.986 6.85 4.986 8.802 C 4.986 10.755 6.569 12.338 8.522 12.338 C 10.475 12.338 12.058 10.755 12.058 8.802 C 12.058 6.85 10.475 5.266 8.522 5.266 Z M 10.113 10.393 C 9.904 10.603 9.656 10.769 9.383 10.882 C 9.11 10.995 8.817 11.053 8.522 11.052 C 7.921 11.052 7.357 10.817 6.931 10.393 C 6.722 10.185 6.556 9.937 6.442 9.664 C 6.329 9.39 6.271 9.098 6.272 8.802 C 6.272 8.202 6.507 7.637 6.931 7.211 C 7.357 6.785 7.921 6.552 8.522 6.552 C 9.123 6.552 9.687 6.785 10.113 7.211 C 10.322 7.42 10.488 7.668 10.601 7.941 C 10.714 8.214 10.772 8.507 10.772 8.802 C 10.772 9.403 10.537 9.967 10.113 10.393 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.85)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 16,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 15.146,
    height: 15.999,
    viewBox: "0 0 15.146 15.999",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.425,
      top: 0,
      width: 15.146,
      height: 15.999
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14.946 10.033 L 13.777 9.033 C 13.832 8.694 13.861 8.347 13.861 8.001 C 13.861 7.655 13.832 7.308 13.777 6.969 L 14.946 5.969 C 15.035 5.893 15.098 5.793 15.127 5.68 C 15.157 5.568 15.152 5.45 15.113 5.34 L 15.096 5.294 C 14.774 4.394 14.292 3.56 13.673 2.831 L 13.641 2.794 C 13.566 2.706 13.466 2.642 13.354 2.612 C 13.242 2.582 13.124 2.586 13.014 2.624 L 11.563 3.14 C 11.027 2.701 10.429 2.355 9.782 2.112 L 9.502 0.594 C 9.481 0.48 9.425 0.375 9.343 0.293 C 9.261 0.211 9.155 0.156 9.041 0.135 L 8.993 0.126 C 8.063 -0.042 7.084 -0.042 6.154 0.126 L 6.105 0.135 C 5.991 0.156 5.886 0.211 5.803 0.293 C 5.721 0.375 5.666 0.48 5.645 0.594 L 5.363 2.119 C 4.721 2.362 4.124 2.708 3.595 3.144 L 2.132 2.624 C 2.023 2.586 1.904 2.581 1.792 2.611 C 1.68 2.642 1.58 2.705 1.505 2.794 L 1.473 2.831 C 0.855 3.56 0.373 4.394 0.05 5.294 L 0.034 5.34 C -0.046 5.563 0.02 5.813 0.2 5.969 L 1.384 6.98 C 1.329 7.315 1.302 7.658 1.302 7.999 C 1.302 8.342 1.329 8.685 1.384 9.019 L 0.2 10.03 C 0.112 10.105 0.049 10.206 0.019 10.318 C -0.011 10.43 -0.005 10.549 0.034 10.658 L 0.05 10.705 C 0.373 11.605 0.852 12.435 1.473 13.167 L 1.505 13.205 C 1.58 13.293 1.681 13.356 1.792 13.387 C 1.904 13.417 2.023 13.413 2.132 13.374 L 3.595 12.855 C 4.127 13.292 4.721 13.638 5.363 13.88 L 5.645 15.405 C 5.666 15.519 5.721 15.624 5.803 15.706 C 5.886 15.788 5.991 15.843 6.105 15.863 L 6.154 15.872 C 7.092 16.041 8.054 16.041 8.993 15.872 L 9.041 15.863 C 9.155 15.843 9.261 15.788 9.343 15.706 C 9.425 15.624 9.481 15.519 9.502 15.405 L 9.782 13.887 C 10.428 13.644 11.03 13.297 11.563 12.858 L 13.014 13.374 C 13.124 13.413 13.242 13.417 13.354 13.387 C 13.466 13.357 13.566 13.293 13.641 13.205 L 13.673 13.167 C 14.295 12.433 14.773 11.605 15.096 10.705 L 15.113 10.658 C 15.193 10.438 15.127 10.188 14.946 10.033 L 14.946 10.033 Z M 12.509 7.18 C 12.554 7.449 12.577 7.726 12.577 8.003 C 12.577 8.28 12.554 8.556 12.509 8.826 L 12.391 9.542 L 13.725 10.683 C 13.523 11.149 13.268 11.59 12.964 11.997 L 11.307 11.41 L 10.746 11.871 C 10.32 12.221 9.845 12.496 9.33 12.688 L 8.65 12.944 L 8.33 14.676 C 7.826 14.733 7.317 14.733 6.813 14.676 L 6.493 12.94 L 5.818 12.681 C 5.309 12.488 4.836 12.213 4.413 11.865 L 3.852 11.403 L 2.184 11.996 C 1.88 11.587 1.627 11.146 1.423 10.681 L 2.771 9.53 L 2.655 8.815 C 2.613 8.549 2.589 8.274 2.589 8.003 C 2.589 7.73 2.611 7.456 2.655 7.19 L 2.771 6.476 L 1.423 5.324 C 1.625 4.858 1.88 4.419 2.184 4.01 L 3.852 4.603 L 4.413 4.14 C 4.836 3.792 5.309 3.517 5.818 3.324 L 6.495 3.069 L 6.814 1.333 C 7.316 1.276 7.829 1.276 8.332 1.333 L 8.652 3.065 L 9.332 3.321 C 9.845 3.513 10.321 3.788 10.748 4.138 L 11.309 4.599 L 12.966 4.012 C 13.27 4.421 13.523 4.862 13.727 5.326 L 12.393 6.467 L 12.509 7.18 Z M 7.575 4.681 C 5.839 4.681 4.432 6.088 4.432 7.824 C 4.432 9.56 5.839 10.967 7.575 10.967 C 9.311 10.967 10.718 9.56 10.718 7.824 C 10.718 6.088 9.311 4.681 7.575 4.681 Z M 8.989 9.238 C 8.804 9.425 8.583 9.572 8.341 9.673 C 8.098 9.773 7.838 9.825 7.575 9.824 C 7.041 9.824 6.539 9.615 6.161 9.238 C 5.975 9.053 5.827 8.833 5.727 8.59 C 5.626 8.347 5.575 8.087 5.575 7.824 C 5.575 7.29 5.784 6.788 6.161 6.41 C 6.539 6.031 7.041 5.824 7.575 5.824 C 8.109 5.824 8.611 6.031 8.989 6.41 C 9.175 6.595 9.323 6.816 9.423 7.059 C 9.524 7.301 9.575 7.561 9.575 7.824 C 9.575 8.358 9.366 8.86 8.989 9.238 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.85)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 14,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.253,
    height: 13.999,
    viewBox: "0 0 13.253 13.999",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.372,
      top: 0,
      width: 13.253,
      height: 13.999
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.078 8.779 L 12.055 7.904 C 12.103 7.607 12.128 7.304 12.128 7.001 C 12.128 6.698 12.103 6.395 12.055 6.098 L 13.078 5.223 C 13.155 5.157 13.211 5.069 13.237 4.97 C 13.262 4.872 13.258 4.768 13.223 4.673 L 13.209 4.632 C 12.928 3.845 12.506 3.115 11.964 2.477 L 11.936 2.445 C 11.87 2.367 11.783 2.312 11.685 2.285 C 11.587 2.259 11.483 2.263 11.388 2.296 L 10.117 2.748 C 9.648 2.363 9.125 2.06 8.559 1.848 L 8.314 0.52 C 8.296 0.42 8.247 0.328 8.175 0.256 C 8.103 0.184 8.011 0.136 7.911 0.118 L 7.869 0.11 C 7.055 -0.037 6.198 -0.037 5.384 0.11 L 5.342 0.118 C 5.242 0.136 5.15 0.184 5.078 0.256 C 5.006 0.328 4.958 0.42 4.939 0.52 L 4.692 1.854 C 4.131 2.067 3.609 2.37 3.145 2.751 L 1.866 2.296 C 1.77 2.262 1.666 2.258 1.568 2.285 C 1.47 2.311 1.383 2.367 1.317 2.445 L 1.289 2.477 C 0.748 3.115 0.326 3.845 0.044 4.632 L 0.03 4.673 C -0.041 4.868 0.017 5.087 0.175 5.223 L 1.211 6.107 C 1.163 6.401 1.139 6.701 1.139 6.999 C 1.139 7.299 1.163 7.599 1.211 7.892 L 0.175 8.776 C 0.098 8.842 0.043 8.93 0.017 9.028 C -0.009 9.126 -0.005 9.23 0.03 9.326 L 0.044 9.367 C 0.327 10.154 0.745 10.881 1.289 11.521 L 1.317 11.554 C 1.383 11.631 1.47 11.687 1.568 11.713 C 1.666 11.74 1.77 11.736 1.866 11.702 L 3.145 11.248 C 3.611 11.631 4.131 11.934 4.692 12.145 L 4.939 13.479 C 4.958 13.579 5.006 13.671 5.078 13.743 C 5.15 13.814 5.242 13.862 5.342 13.881 L 5.384 13.888 C 6.206 14.036 7.047 14.036 7.869 13.888 L 7.911 13.881 C 8.011 13.862 8.103 13.814 8.175 13.743 C 8.247 13.671 8.296 13.579 8.314 13.479 L 8.559 12.151 C 9.125 11.939 9.651 11.635 10.117 11.251 L 11.388 11.702 C 11.483 11.736 11.587 11.74 11.685 11.714 C 11.783 11.687 11.87 11.631 11.936 11.554 L 11.964 11.521 C 12.508 10.879 12.927 10.154 13.209 9.367 L 13.223 9.326 C 13.294 9.134 13.236 8.915 13.078 8.779 L 13.078 8.779 Z M 10.945 6.282 C 10.984 6.518 11.005 6.76 11.005 7.002 C 11.005 7.245 10.984 7.487 10.945 7.723 L 10.842 8.349 L 12.009 9.348 C 11.832 9.755 11.609 10.141 11.344 10.498 L 9.894 9.984 L 9.403 10.387 C 9.03 10.693 8.614 10.934 8.164 11.102 L 7.569 11.326 L 7.289 12.842 C 6.848 12.892 6.402 12.892 5.961 12.842 L 5.681 11.323 L 5.091 11.096 C 4.645 10.927 4.231 10.687 3.861 10.382 L 3.37 9.977 L 1.911 10.496 C 1.645 10.138 1.423 9.752 1.245 9.346 L 2.425 8.338 L 2.323 7.713 C 2.286 7.481 2.266 7.24 2.266 7.002 C 2.266 6.763 2.284 6.524 2.323 6.292 L 2.425 5.667 L 1.245 4.659 C 1.422 4.251 1.645 3.867 1.911 3.509 L 3.37 4.027 L 3.861 3.623 C 4.231 3.318 4.645 3.077 5.091 2.909 L 5.683 2.685 L 5.963 1.167 C 6.402 1.117 6.85 1.117 7.291 1.167 L 7.57 2.682 L 8.166 2.906 C 8.614 3.074 9.031 3.315 9.405 3.621 L 9.895 4.024 L 11.345 3.51 C 11.611 3.868 11.833 4.254 12.011 4.66 L 10.844 5.659 L 10.945 6.282 Z M 6.628 4.096 C 5.109 4.096 3.878 5.327 3.878 6.846 C 3.878 8.365 5.109 9.596 6.628 9.596 C 8.147 9.596 9.378 8.365 9.378 6.846 C 9.378 5.327 8.147 4.096 6.628 4.096 Z M 7.866 8.084 C 7.703 8.246 7.51 8.376 7.298 8.464 C 7.086 8.551 6.858 8.597 6.628 8.596 C 6.161 8.596 5.722 8.413 5.391 8.084 C 5.228 7.921 5.099 7.728 5.011 7.516 C 4.923 7.304 4.878 7.076 4.878 6.846 C 4.878 6.379 5.061 5.94 5.391 5.609 C 5.722 5.277 6.161 5.096 6.628 5.096 C 7.095 5.096 7.534 5.277 7.866 5.609 C 8.028 5.771 8.157 5.964 8.245 6.176 C 8.333 6.389 8.378 6.616 8.378 6.846 C 8.378 7.313 8.195 7.752 7.866 8.084 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.85)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 12,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.360,
    height: 11.999,
    viewBox: "0 0 11.360 11.999",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.319,
      top: 0,
      width: 11.36,
      height: 11.999
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.21 7.525 L 10.333 6.775 C 10.374 6.52 10.396 6.261 10.396 6.001 C 10.396 5.741 10.374 5.481 10.333 5.227 L 11.21 4.477 C 11.276 4.42 11.323 4.345 11.346 4.26 C 11.368 4.176 11.364 4.087 11.334 4.005 L 11.322 3.97 C 11.081 3.295 10.719 2.67 10.255 2.124 L 10.231 2.095 C 10.174 2.029 10.099 1.982 10.016 1.959 C 9.932 1.936 9.843 1.939 9.761 1.968 L 8.672 2.355 C 8.27 2.026 7.821 1.766 7.337 1.584 L 7.126 0.445 C 7.11 0.36 7.069 0.281 7.007 0.219 C 6.945 0.158 6.867 0.117 6.781 0.101 L 6.745 0.095 C 6.047 -0.031 5.313 -0.031 4.615 0.095 L 4.579 0.101 C 4.493 0.117 4.414 0.158 4.353 0.219 C 4.291 0.281 4.249 0.36 4.233 0.445 L 4.022 1.589 C 3.541 1.771 3.093 2.031 2.696 2.358 L 1.599 1.968 C 1.517 1.939 1.428 1.936 1.344 1.959 C 1.26 1.981 1.185 2.029 1.129 2.095 L 1.105 2.124 C 0.641 2.67 0.28 3.296 0.038 3.97 L 0.025 4.005 C -0.035 4.173 0.015 4.36 0.15 4.477 L 1.038 5.235 C 0.996 5.486 0.976 5.744 0.976 5.999 C 0.976 6.257 0.996 6.514 1.038 6.764 L 0.15 7.522 C 0.084 7.579 0.036 7.654 0.014 7.739 C -0.008 7.823 -0.004 7.912 0.025 7.994 L 0.038 8.028 C 0.28 8.703 0.639 9.326 1.105 9.875 L 1.129 9.903 C 1.185 9.97 1.26 10.017 1.344 10.04 C 1.428 10.063 1.517 10.059 1.599 10.031 L 2.696 9.641 C 3.095 9.969 3.541 10.229 4.022 10.41 L 4.233 11.553 C 4.249 11.639 4.291 11.718 4.353 11.779 C 4.414 11.841 4.493 11.882 4.579 11.898 L 4.615 11.904 C 5.319 12.031 6.04 12.031 6.745 11.904 L 6.781 11.898 C 6.867 11.882 6.945 11.841 7.007 11.779 C 7.069 11.718 7.11 11.639 7.126 11.553 L 7.337 10.415 C 7.821 10.233 8.272 9.973 8.672 9.644 L 9.761 10.031 C 9.843 10.06 9.932 10.063 10.016 10.04 C 10.1 10.018 10.175 9.97 10.231 9.903 L 10.255 9.875 C 10.721 9.325 11.08 8.703 11.322 8.028 L 11.334 7.994 C 11.395 7.829 11.345 7.641 11.21 7.525 L 11.21 7.525 Z M 9.382 5.385 C 9.415 5.587 9.433 5.795 9.433 6.002 C 9.433 6.21 9.415 6.417 9.382 6.62 L 9.293 7.157 L 10.294 8.012 C 10.142 8.362 9.951 8.693 9.723 8.998 L 8.48 8.557 L 8.06 8.903 C 7.74 9.166 7.383 9.372 6.998 9.516 L 6.488 9.708 L 6.248 11.007 C 5.87 11.05 5.488 11.05 5.109 11.007 L 4.87 9.705 L 4.363 9.511 C 3.982 9.366 3.627 9.16 3.309 8.899 L 2.889 8.552 L 1.638 8.997 C 1.41 8.69 1.22 8.359 1.067 8.011 L 2.079 7.147 L 1.992 6.611 C 1.959 6.412 1.942 6.206 1.942 6.002 C 1.942 5.797 1.958 5.592 1.992 5.393 L 2.079 4.857 L 1.067 3.993 C 1.219 3.644 1.41 3.314 1.638 3.007 L 2.889 3.452 L 3.309 3.105 C 3.627 2.844 3.982 2.638 4.363 2.493 L 4.871 2.302 L 5.111 1 C 5.487 0.957 5.871 0.957 6.249 1 L 6.489 2.299 L 6.999 2.491 C 7.383 2.635 7.741 2.841 8.061 3.104 L 8.482 3.449 L 9.725 3.009 C 9.952 3.316 10.142 3.646 10.295 3.995 L 9.295 4.85 L 9.382 5.385 Z M 5.681 3.511 C 4.379 3.511 3.324 4.566 3.324 5.868 C 3.324 7.17 4.379 8.225 5.681 8.225 C 6.983 8.225 8.038 7.17 8.038 5.868 C 8.038 4.566 6.983 3.511 5.681 3.511 Z M 6.742 6.929 C 6.603 7.068 6.438 7.179 6.255 7.254 C 6.073 7.33 5.878 7.368 5.681 7.368 C 5.281 7.368 4.904 7.211 4.621 6.929 C 4.481 6.79 4.37 6.624 4.295 6.442 C 4.22 6.26 4.181 6.065 4.181 5.868 C 4.181 5.468 4.338 5.091 4.621 4.807 C 4.904 4.524 5.281 4.368 5.681 4.368 C 6.082 4.368 6.458 4.524 6.742 4.807 C 6.881 4.947 6.992 5.112 7.068 5.294 C 7.143 5.476 7.182 5.671 7.181 5.868 C 7.181 6.269 7.025 6.645 6.742 6.929 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgba(0,0,0,0.85)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 10,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.467,
    height: 9.999,
    viewBox: "0 0 9.467 9.999",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.266,
      top: 0,
      width: 9.467,
      height: 9.999
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.342 6.271 L 8.61 5.646 C 8.645 5.434 8.663 5.217 8.663 5.001 C 8.663 4.784 8.645 4.568 8.61 4.356 L 9.342 3.731 C 9.397 3.683 9.436 3.621 9.455 3.55 C 9.473 3.48 9.47 3.406 9.445 3.338 L 9.435 3.309 C 9.234 2.746 8.933 2.225 8.546 1.77 L 8.526 1.746 C 8.479 1.691 8.416 1.651 8.346 1.632 C 8.276 1.614 8.202 1.616 8.134 1.64 L 7.227 1.963 C 6.892 1.688 6.518 1.472 6.114 1.32 L 5.939 0.371 C 5.925 0.3 5.891 0.234 5.839 0.183 C 5.788 0.132 5.722 0.097 5.651 0.084 L 5.621 0.079 C 5.039 -0.026 4.427 -0.026 3.846 0.079 L 3.816 0.084 C 3.744 0.097 3.679 0.132 3.627 0.183 C 3.576 0.234 3.541 0.3 3.528 0.371 L 3.352 1.324 C 2.951 1.476 2.578 1.693 2.247 1.965 L 1.333 1.64 C 1.264 1.616 1.19 1.613 1.12 1.632 C 1.05 1.651 0.988 1.691 0.941 1.746 L 0.921 1.77 C 0.534 2.225 0.233 2.746 0.031 3.309 L 0.021 3.338 C -0.029 3.477 0.012 3.633 0.125 3.731 L 0.865 4.362 C 0.83 4.572 0.814 4.786 0.814 5 C 0.814 5.214 0.83 5.428 0.865 5.637 L 0.125 6.269 C 0.07 6.316 0.03 6.379 0.012 6.449 C -0.007 6.519 -0.003 6.593 0.021 6.661 L 0.031 6.69 C 0.233 7.253 0.532 7.772 0.921 8.229 L 0.941 8.253 C 0.988 8.308 1.05 8.348 1.12 8.367 C 1.19 8.386 1.264 8.383 1.333 8.359 L 2.247 8.034 C 2.579 8.308 2.951 8.524 3.352 8.675 L 3.528 9.628 C 3.541 9.699 3.576 9.765 3.627 9.816 C 3.679 9.867 3.744 9.902 3.816 9.915 L 3.846 9.92 C 4.433 10.026 5.034 10.026 5.621 9.92 L 5.651 9.915 C 5.722 9.902 5.788 9.867 5.839 9.816 C 5.891 9.765 5.925 9.699 5.939 9.628 L 6.114 8.679 C 6.518 8.528 6.894 8.311 7.227 8.036 L 8.134 8.359 C 8.202 8.383 8.276 8.386 8.346 8.367 C 8.416 8.348 8.479 8.308 8.526 8.253 L 8.546 8.229 C 8.934 7.771 9.233 7.253 9.435 6.69 L 9.445 6.661 C 9.496 6.524 9.454 6.368 9.342 6.271 L 9.342 6.271 Z M 7.818 4.487 C 7.846 4.656 7.86 4.829 7.86 5.002 C 7.86 5.175 7.846 5.348 7.818 5.516 L 7.744 5.964 L 8.578 6.677 C 8.452 6.968 8.292 7.244 8.103 7.498 L 7.067 7.131 L 6.717 7.419 C 6.45 7.638 6.153 7.81 5.831 7.93 L 5.406 8.09 L 5.206 9.173 C 4.891 9.208 4.573 9.208 4.258 9.173 L 4.058 8.088 L 3.636 7.926 C 3.318 7.805 3.022 7.633 2.758 7.416 L 2.407 7.127 L 1.365 7.497 C 1.175 7.242 1.017 6.966 0.89 6.676 L 1.732 5.956 L 1.66 5.51 C 1.633 5.343 1.618 5.171 1.618 5.002 C 1.618 4.831 1.632 4.66 1.66 4.494 L 1.732 4.048 L 0.89 3.328 C 1.016 3.036 1.175 2.762 1.365 2.506 L 2.407 2.877 L 2.758 2.588 C 3.022 2.37 3.318 2.198 3.636 2.078 L 4.059 1.918 L 4.259 0.833 C 4.573 0.798 4.893 0.798 5.208 0.833 L 5.407 1.916 L 5.833 2.075 C 6.153 2.196 6.451 2.368 6.718 2.587 L 7.068 2.875 L 8.104 2.507 C 8.294 2.763 8.452 3.039 8.579 3.329 L 7.746 4.042 L 7.818 4.487 Z M 4.734 2.926 C 3.65 2.926 2.77 3.805 2.77 4.89 C 2.77 5.975 3.65 6.854 4.734 6.854 C 5.819 6.854 6.699 5.975 6.699 4.89 C 6.699 3.805 5.819 2.926 4.734 2.926 Z M 5.618 5.774 C 5.502 5.89 5.365 5.983 5.213 6.045 C 5.061 6.108 4.899 6.14 4.734 6.14 C 4.401 6.14 4.087 6.01 3.85 5.774 C 3.734 5.658 3.642 5.52 3.579 5.369 C 3.516 5.217 3.484 5.054 3.484 4.89 C 3.484 4.556 3.615 4.243 3.85 4.006 C 4.087 3.77 4.401 3.64 4.734 3.64 C 5.068 3.64 5.382 3.77 5.618 4.006 C 5.735 4.122 5.827 4.26 5.89 4.412 C 5.952 4.563 5.985 4.726 5.984 4.89 C 5.984 5.224 5.854 5.538 5.618 5.774 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
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
      height: 128,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Setting, null)));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
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
      height: 104,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Setting, null)));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
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
      height: 64,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Setting, null)));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
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
      height: 48,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Setting, null)));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
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
      height: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Setting, null)));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
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
      height: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Setting, null)));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
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
      height: 22,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Setting, null)));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
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
      height: 20,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Setting, null)));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
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
      height: 18,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Setting, null)));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
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
      height: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Setting, null)));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
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
      height: 14,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Setting, null)));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
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
      height: 12,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Setting, null)));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgba(255,255,255,0)",
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
      height: 10,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }, props.icon ?? /*#__PURE__*/React.createElement(Setting, null)));
  const __impls = {
    // figma: Size=128px, Union=true
    "size=128px|union=true": __body0,
    // figma: Size=104px, Union=true
    "size=104px|union=true": __body1,
    // figma: Size=64px, Union=true
    "size=64px|union=true": __body2,
    // figma: Size=48px, Union=true
    "size=48px|union=true": __body3,
    // figma: Size=32px, Union=true
    "size=32px|union=true": __body4,
    // figma: Size=24px, Union=true
    "size=24px|union=true": __body5,
    // figma: Size=22px, Union=true
    "size=22px|union=true": __body6,
    // figma: Size=20px, Union=true
    "size=20px|union=true": __body7,
    // figma: Size=18px, Union=true
    "size=18px|union=true": __body8,
    // figma: Size=16px, Union=true
    "size=16px|union=true": __body9,
    // figma: Size=14px, Union=true
    "size=14px|union=true": __body10,
    // figma: Size=12px, Union=true
    "size=12px|union=true": __body11,
    // figma: Size=10px, Union=true
    "size=10px|union=true": __body12,
    // figma: Size=128px, Union=false
    "size=128px|union=false": __body13,
    // figma: Size=104px, Union=false
    "size=104px|union=false": __body14,
    // figma: Size=64px, Union=false
    "size=64px|union=false": __body15,
    // figma: Size=48px, Union=false
    "size=48px|union=false": __body16,
    // figma: Size=32px, Union=false
    "size=32px|union=false": __body17,
    // figma: Size=24px, Union=false
    "size=24px|union=false": __body18,
    // figma: Size=22px, Union=false
    "size=22px|union=false": __body19,
    // figma: Size=20px, Union=false
    "size=20px|union=false": __body20,
    // figma: Size=18px, Union=false
    "size=18px|union=false": __body21,
    // figma: Size=16px, Union=false
    "size=16px|union=false": __body22,
    // figma: Size=14px, Union=false
    "size=14px|union=false": __body23,
    // figma: Size=12px, Union=false
    "size=12px|union=false": __body24,
    // figma: Size=10px, Union=false
    "size=10px|union=false": __body25
  };
  return (__impls[__vkey_IconWrapper(props)] ?? __body12)();
}

// figma node: 44:21273 Button (205 variants)
var __venc_Button3 = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_Button3 = p => "type=" + __venc_Button3(p.type) + '|' + "shape=" + __venc_Button3(p.shape) + '|' + "size=" + __venc_Button3(p.size) + '|' + "state=" + __venc_Button3(p.state) + '|' + "danger=" + __venc_Button3(p.danger) + '|' + "ghost=" + __venc_Button3(p.ghost);

// Globals for scripts loaded after this file.
window.DateDatePicker = DateDatePicker;
window.Setting = Setting;
window.IconWrapper = IconWrapper;
