// Components bundle — part 2 of 7. Load the parts in order as plain
// classic <script> tags: they share one global scope, so later parts can call
// declarations from earlier ones exactly as in the original single-file bundle.

function TableTitleText(_p = {}) {
  const props = {
    ..._p,
    text: _p.text ?? "only",
    state: _p.state ?? "default",
    help: _p.help ?? true,
    filter: _p.filter ?? false
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
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"));
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
  }, /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconFilter, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
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
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(208,213,221)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"));
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
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(208,213,221)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconFilter, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
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
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"));
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
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconFilter, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
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
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIcon, {
    open: false,
    supportingText: "false",
    tooltip: "top arrow",
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIcon, {
    open: false,
    supportingText: "false",
    tooltip: "top arrow",
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconFilter, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIcon, {
    open: false,
    supportingText: "false",
    tooltip: "top arrow",
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowUp, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIcon, {
    open: false,
    supportingText: "false",
    tooltip: "top arrow",
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconFilter, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconArrowUp, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIcon, {
    open: false,
    supportingText: "false",
    tooltip: "top arrow",
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowDown, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIcon, {
    open: false,
    supportingText: "false",
    tooltip: "top arrow",
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconFilter, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconArrowDown, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconArrowUp, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconFilter, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowUp, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconArrowDown, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(71,84,103)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconFilter, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowDown, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(208,213,221)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIcon, {
    open: false,
    supportingText: "false",
    tooltip: "top arrow",
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(208,213,221)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIcon, {
    open: false,
    supportingText: "false",
    tooltip: "top arrow",
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconFilter, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(208,213,221)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIcon, {
    open: false,
    supportingText: "false",
    tooltip: "top arrow",
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowUp, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(208,213,221)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIcon, {
    open: false,
    supportingText: "false",
    tooltip: "top arrow",
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconFilter, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconArrowUp, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(208,213,221)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIcon, {
    open: false,
    supportingText: "false",
    tooltip: "top arrow",
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowDown, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(208,213,221)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIcon, {
    open: false,
    supportingText: "false",
    tooltip: "top arrow",
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconFilter, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconArrowDown, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(208,213,221)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconArrowUp, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(208,213,221)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconFilter, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowUp, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(208,213,221)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconArrowDown, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(208,213,221)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconFilter, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowDown, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIcon, {
    open: false,
    supportingText: "false",
    tooltip: "top arrow",
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIcon, {
    open: false,
    supportingText: "false",
    tooltip: "top arrow",
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconFilter, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIcon, {
    open: false,
    supportingText: "false",
    tooltip: "top arrow",
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowUp, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIcon, {
    open: false,
    supportingText: "false",
    tooltip: "top arrow",
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconFilter, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconArrowUp, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIcon, {
    open: false,
    supportingText: "false",
    tooltip: "top arrow",
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowDown, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(HelpIcon, {
    open: false,
    supportingText: "false",
    tooltip: "top arrow",
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconFilter, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconArrowDown, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })));
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconArrowUp, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconFilter, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowUp, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconArrowDown, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconFilter, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowDown, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __impls = {
    // figma: Text=Only, State=Default, help=False, Filter=False
    "text=only|state=default|help=false|filter=false": __body0,
    // figma: Text=Only, State=Default, help=False, Filter=True
    "text=only|state=default|help=false|filter=true": __body1,
    // figma: Text=Only, State=Disabled, help=False, Filter=False
    "text=only|state=disabled|help=false|filter=false": __body2,
    // figma: Text=Only, State=Disabled, help=False, Filter=True
    "text=only|state=disabled|help=false|filter=true": __body3,
    // figma: Text=Only, State=Hover, help=False, Filter=False
    "text=only|state=hover|help=false|filter=false": __body4,
    // figma: Text=Only, State=Hover, help=False, Filter=True
    "text=only|state=hover|help=false|filter=true": __body5,
    // figma: Text=with tool tip, State=Default, help=True, Filter=False
    "text=with tool tip|state=default|help=true|filter=false": __body6,
    // figma: Text=with tool tip, State=Default, help=True, Filter=True
    "text=with tool tip|state=default|help=true|filter=true": __body7,
    // figma: Text=sort up, State=Default, help=True, Filter=False
    "text=sort up|state=default|help=true|filter=false": __body8,
    // figma: Text=sort up, State=Default, help=True, Filter=True
    "text=sort up|state=default|help=true|filter=true": __body9,
    // figma: Text=sort down, State=Default, help=True, Filter=False
    "text=sort down|state=default|help=true|filter=false": __body10,
    // figma: Text=sort down, State=Default, help=True, Filter=True
    "text=sort down|state=default|help=true|filter=true": __body11,
    // figma: Text=sort up, State=Default, help=False, Filter=False
    "text=sort up|state=default|help=false|filter=false": __body12,
    // figma: Text=sort up, State=Default, help=False, Filter=True
    "text=sort up|state=default|help=false|filter=true": __body13,
    // figma: Text=sort down, State=Default, help=False, Filter=False
    "text=sort down|state=default|help=false|filter=false": __body14,
    // figma: Text=sort down, State=Default, help=False, Filter=True
    "text=sort down|state=default|help=false|filter=true": __body15,
    // figma: Text=with tool tip, State=Disabled, help=True, Filter=False
    "text=with tool tip|state=disabled|help=true|filter=false": __body16,
    // figma: Text=with tool tip, State=Disabled, help=True, Filter=True
    "text=with tool tip|state=disabled|help=true|filter=true": __body17,
    // figma: Text=sort up, State=Disabled, help=True, Filter=False
    "text=sort up|state=disabled|help=true|filter=false": __body18,
    // figma: Text=sort up, State=Disabled, help=True, Filter=True
    "text=sort up|state=disabled|help=true|filter=true": __body19,
    // figma: Text=sort down, State=Disabled, help=True, Filter=False
    "text=sort down|state=disabled|help=true|filter=false": __body20,
    // figma: Text=sort down, State=Disabled, help=True, Filter=True
    "text=sort down|state=disabled|help=true|filter=true": __body21,
    // figma: Text=sort up, State=Disabled, help=False, Filter=False
    "text=sort up|state=disabled|help=false|filter=false": __body22,
    // figma: Text=sort up, State=Disabled, help=False, Filter=True
    "text=sort up|state=disabled|help=false|filter=true": __body23,
    // figma: Text=sort down, State=Disabled, help=False, Filter=False
    "text=sort down|state=disabled|help=false|filter=false": __body24,
    // figma: Text=sort down, State=Disabled, help=False, Filter=True
    "text=sort down|state=disabled|help=false|filter=true": __body25,
    // figma: Text=with tool tip, State=Hover, help=True, Filter=False
    "text=with tool tip|state=hover|help=true|filter=false": __body26,
    // figma: Text=with tool tip, State=Hover, help=True, Filter=True
    "text=with tool tip|state=hover|help=true|filter=true": __body27,
    // figma: Text=sort up, State=Hover, help=True, Filter=False
    "text=sort up|state=hover|help=true|filter=false": __body28,
    // figma: Text=sort up, State=Hover, help=True, Filter=True
    "text=sort up|state=hover|help=true|filter=true": __body29,
    // figma: Text=sort down, State=Hover, help=True, Filter=False
    "text=sort down|state=hover|help=true|filter=false": __body30,
    // figma: Text=sort down, State=Hover, help=True, Filter=True
    "text=sort down|state=hover|help=true|filter=true": __body31,
    // figma: Text=sort up, State=Hover, help=False, Filter=False
    "text=sort up|state=hover|help=false|filter=false": __body32,
    // figma: Text=sort up, State=Hover, help=False, Filter=True
    "text=sort up|state=hover|help=false|filter=true": __body33,
    // figma: Text=sort down, State=Hover, help=False, Filter=False
    "text=sort down|state=hover|help=false|filter=false": __body34,
    // figma: Text=sort down, State=Hover, help=False, Filter=True
    "text=sort down|state=hover|help=false|filter=true": __body35
  };
  return (__impls[__vkey_TableTitleText(props)] ?? __body0)();
}

// figma node: 51:18770 Cell Title (74 variants)
var __venc_CellTitle = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_CellTitle = p => "type=" + __venc_CellTitle(p.type) + '|' + "compressed=" + __venc_CellTitle(p.compressed) + '|' + "error=" + __venc_CellTitle(p.error) + '|' + "filter=" + __venc_CellTitle(p.filter) + '|' + "editColumn=" + __venc_CellTitle(p.editColumn);

function CellTitle(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "blank",
    compressed: _p.compressed ?? false,
    error: _p.error ?? false,
    filter: _p.filter ?? true,
    editColumn: _p.editColumn ?? true,
    checkbox: _p.checkbox ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      height: 40,
      backgroundColor: "rgb(249,250,251)",
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, props.checkbox && /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 46,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(TableTitleText, {
    text1: "Title",
    text: "with tool tip",
    state: "default",
    help: true,
    filter: false
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,12)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      height: 40,
      backgroundColor: "rgb(249,250,251)",
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, props.checkbox && /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement(TableTitleText, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "Title",
    text: "with tool tip",
    state: "default",
    help: true,
    filter: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconMenu, null)), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,12)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      height: 40,
      backgroundColor: "rgb(240,68,56)",
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, props.checkbox && /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement(TableTitleText, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "Title",
    text: "with tool tip",
    state: "default",
    help: true,
    filter: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconMenu, null)), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,12)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, props.checkbox && /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 42,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(TableTitleText, {
    text1: "Title",
    text: "with tool tip",
    state: "default",
    help: true,
    filter: false
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,7)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, props.checkbox && /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement(TableTitleText, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    text1: "Title",
    text: "with tool tip",
    state: "default",
    help: true,
    filter: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconMenu, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,7)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 42,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(TableTitleText, {
    text1: "Title",
    text: "with tool tip",
    state: "default",
    help: true,
    filter: false
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,7)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      height: 30,
      backgroundColor: "rgb(240,68,56)",
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(TableTitleText, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    text1: "Title",
    text: "with tool tip",
    state: "default",
    help: true,
    filter: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconMenu, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,7)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      height: 40,
      backgroundColor: "rgb(249,250,251)",
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, props.checkbox && /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(TableTitleText, {
    text1: "Title",
    text: "only",
    state: "default",
    help: false,
    filter: false
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,12)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      height: 40,
      backgroundColor: "rgb(249,250,251)",
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, props.checkbox && /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(TableTitleText, {
    text1: "Title",
    text: "only",
    state: "default",
    help: false,
    filter: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(Button, {
    changeRight: /*#__PURE__*/React.createElement(IconChevronRight, null),
    size: "h24px",
    hierarchy: "ghost gray",
    icon: "only",
    destructive: false,
    state: "default"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,12)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      height: 40,
      backgroundColor: "rgb(249,250,251)",
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, props.checkbox && /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement(TableTitleText, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "Title",
    text: "only",
    state: "default",
    help: false,
    filter: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconMenu, null)), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,12)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      height: 40,
      backgroundColor: "rgb(240,68,56)",
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, props.checkbox && /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement(TableTitleText, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "Title",
    text: "only",
    state: "default",
    help: false,
    filter: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconMenu, null)), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,12)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, props.checkbox && /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(TableTitleText, {
    text1: "Title",
    text: "only",
    state: "default",
    help: false,
    filter: false
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,7)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, props.checkbox && /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(TableTitleText, {
    text1: "Title",
    text: "only",
    state: "default",
    help: false,
    filter: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(Button, {
    changeRight: /*#__PURE__*/React.createElement(IconChevronRight, null),
    size: "h24px",
    hierarchy: "ghost gray",
    icon: "only",
    destructive: false,
    state: "default"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,7)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, props.checkbox && /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement(TableTitleText, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    text1: "Title",
    text: "only",
    state: "default",
    help: false,
    filter: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconMenu, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,7)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 26,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(TableTitleText, {
    text1: "Title",
    text: "only",
    state: "default",
    help: false,
    filter: false
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,7)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      height: 30,
      backgroundColor: "rgb(240,68,56)",
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement(TableTitleText, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    text1: "Title",
    text: "only",
    state: "default",
    help: false,
    filter: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconMenu, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,7)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      height: 40,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 4,
      flexGrow: 1,
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SkeletonTitle, {
    size: "xxxs"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 4,
      flexGrow: 1,
      width: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(SkeletonTitle, {
    size: "xxxs"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,12)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 4,
      flexGrow: 1,
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(SkeletonTitle, {
    size: "xxxs"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 4,
      flexGrow: 1,
      width: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(SkeletonTitle, {
    size: "xxxs"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,7)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      height: 40,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, props.checkbox && /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 70,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(TableTitleText, {
    text1: "Number",
    text: "with tool tip",
    state: "default",
    help: true,
    filter: false
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,12)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 142,
      height: 40,
      backgroundColor: "rgb(249,250,251)",
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, props.checkbox && /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconMenu, null)), /*#__PURE__*/React.createElement(TableTitleText, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "Number",
    text: "with tool tip",
    state: "default",
    help: true,
    filter: false
  }), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,141,12)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
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
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Button, {
    size: "h24px",
    hierarchy: "ghost color",
    icon: "only",
    destructive: false,
    state: "default"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,47,12)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 30,
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Button, {
    size: "h24px",
    hierarchy: "ghost color",
    icon: "only",
    destructive: false,
    state: "default"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,30,7)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 30,
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Button, {
    size: "h24px",
    hierarchy: "ghost color",
    icon: "only",
    destructive: false,
    state: "default"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,29,7)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 118,
      height: 40,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, props.checkbox && /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 70,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(TableTitleText, {
    text1: "Number",
    text: "with tool tip",
    state: "default",
    help: true,
    filter: false
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,117,12)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      backgroundColor: "rgb(240,68,56)",
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, props.checkbox && /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconMenu, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 70,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(TableTitleText, {
    text1: "Number",
    text: "with tool tip",
    state: "default",
    help: true,
    filter: false
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,117,12)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
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
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, props.checkbox && /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 62,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(TableTitleText, {
    text1: "Number",
    text: "with tool tip",
    state: "default",
    help: true,
    filter: false
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,7)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, props.checkbox && /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconMenu, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement(TableTitleText, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    text1: "Number",
    text: "with tool tip",
    state: "default",
    help: true,
    filter: false
  }), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,7)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
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
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 62,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(TableTitleText, {
    text1: "Number",
    text: "with tool tip",
    state: "default",
    help: true,
    filter: false
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,7)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      height: 30,
      backgroundColor: "rgb(240,68,56)",
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconMenu, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement(TableTitleText, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    text1: "Number",
    text: "with tool tip",
    state: "default",
    help: true,
    filter: false
  }), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,7)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      height: 40,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, props.checkbox && /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 54,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(TableTitleText, {
    text1: "Number",
    text: "only",
    state: "default",
    help: false,
    filter: false
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,12)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      height: 40,
      backgroundColor: "rgb(249,250,251)",
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, props.checkbox && /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconMenu, null)), /*#__PURE__*/React.createElement(TableTitleText, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "Number",
    text: "only",
    state: "default",
    help: false,
    filter: false
  }), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,12)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      height: 40,
      backgroundColor: "rgb(240,68,56)",
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, props.checkbox && /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconMenu, null)), /*#__PURE__*/React.createElement(TableTitleText, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text1: "Number",
    text: "only",
    state: "default",
    help: false,
    filter: false
  }), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,12)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
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
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, props.checkbox && /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 46,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(TableTitleText, {
    text1: "Number",
    text: "only",
    state: "default",
    help: false,
    filter: false
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,7)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, props.checkbox && /*#__PURE__*/React.createElement("div", {
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
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconMenu, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement(TableTitleText, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    text1: "Number",
    text: "only",
    state: "default",
    help: false,
    filter: false
  }), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,7)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
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
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 46,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(TableTitleText, {
    text1: "Number",
    text: "only",
    state: "default",
    help: false,
    filter: false
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,7)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 130,
      height: 30,
      backgroundColor: "rgb(240,68,56)",
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconMenu, {
    style: {
      transform: "scale(0.750, 0.750)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement(TableTitleText, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      width: "auto",
      height: "auto"
    },
    text1: "Number",
    text: "only",
    state: "default",
    help: false,
    filter: false
  }), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,129,7)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body36 = () => /*#__PURE__*/React.createElement("div", {
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
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(0,0,0)",
      ...props.style
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
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,39,12)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body37 = () => /*#__PURE__*/React.createElement("div", {
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
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(234,236,240)",
      ...props.style
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
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,39,12)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body38 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 40,
      backgroundColor: "rgb(240,68,56)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(234,236,240)",
      ...props.style
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
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,39,12)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body39 = () => /*#__PURE__*/React.createElement("div", {
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
      color: "rgb(234,236,240)",
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
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,39,7)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body40 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 30,
      backgroundColor: "rgb(240,68,56)",
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
      color: "rgb(234,236,240)",
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
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,39,7)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body41 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 68,
      height: 40,
      backgroundColor: "rgb(249,250,251)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,67,12)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body42 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 68,
      height: 40,
      backgroundColor: "rgb(240,68,56)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "8px 12px 8px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,67,12)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body43 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 68,
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,67,7)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body44 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 68,
      height: 30,
      backgroundColor: "rgb(240,68,56)",
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
      color: "rgb(234,236,240)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 1,
    viewBox: "0 -0.500 16 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,67,7)",
      transformOrigin: "0 0",
      width: 16,
      height: 1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 16 0 L 16 -1 L 0 -1 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Type=Text w tooltip, Compressed=False, Error=False, Filter=False, Edit column=False
    "type=text w tooltip|compressed=false|error=false|filter=false|editColumn=false": __body0,
    // figma: Type=Text w tooltip, Compressed=False, Error=False, Filter=False, Edit column=True
    "type=text w tooltip|compressed=false|error=false|filter=false|editColumn=true": __body0,
    // figma: Type=Text w tooltip, Compressed=False, Error=False, Filter=True, Edit column=False
    "type=text w tooltip|compressed=false|error=false|filter=true|editColumn=false": __body1,
    // figma: Type=Text w tooltip, Compressed=False, Error=False, Filter=True, Edit column=True
    "type=text w tooltip|compressed=false|error=false|filter=true|editColumn=true": __body1,
    // figma: Type=Text w tooltip, Compressed=False, Error=True, Filter=False, Edit column=False
    "type=text w tooltip|compressed=false|error=true|filter=false|editColumn=false": __body0,
    // figma: Type=Text w tooltip, Compressed=False, Error=True, Filter=True, Edit column=False
    "type=text w tooltip|compressed=false|error=true|filter=true|editColumn=false": __body2,
    // figma: Type=Text w tooltip, Compressed=True, Error=False, Filter=False, Edit column=False
    "type=text w tooltip|compressed=true|error=false|filter=false|editColumn=false": __body3,
    // figma: Type=Text w tooltip, Compressed=True, Error=False, Filter=False, Edit column=True
    "type=text w tooltip|compressed=true|error=false|filter=false|editColumn=true": __body3,
    // figma: Type=Text w tooltip, Compressed=True, Error=False, Filter=True, Edit column=False
    "type=text w tooltip|compressed=true|error=false|filter=true|editColumn=false": __body4,
    // figma: Type=Text w tooltip, Compressed=True, Error=False, Filter=True, Edit column=True
    "type=text w tooltip|compressed=true|error=false|filter=true|editColumn=true": __body4,
    // figma: Type=Text w tooltip, Compressed=True, Error=True, Filter=False, Edit column=False
    "type=text w tooltip|compressed=true|error=true|filter=false|editColumn=false": __body5,
    // figma: Type=Text w tooltip, Compressed=True, Error=True, Filter=True, Edit column=False
    "type=text w tooltip|compressed=true|error=true|filter=true|editColumn=false": __body6,
    // figma: Type=Text, Compressed=False, Error=False, Filter=False, Edit column=False
    "type=text|compressed=false|error=false|filter=false|editColumn=false": __body7,
    // figma: Type=hz expand, Compressed=False, Error=False, Filter=False, Edit column=False
    "type=hz expand|compressed=false|error=false|filter=false|editColumn=false": __body8,
    // figma: Type=Text, Compressed=False, Error=False, Filter=False, Edit column=True
    "type=text|compressed=false|error=false|filter=false|editColumn=true": __body7,
    // figma: Type=Text, Compressed=False, Error=False, Filter=True, Edit column=False
    "type=text|compressed=false|error=false|filter=true|editColumn=false": __body9,
    // figma: Type=Text, Compressed=False, Error=False, Filter=True, Edit column=True
    "type=text|compressed=false|error=false|filter=true|editColumn=true": __body9,
    // figma: Type=Text, Compressed=False, Error=True, Filter=False, Edit column=False
    "type=text|compressed=false|error=true|filter=false|editColumn=false": __body7,
    // figma: Type=Text, Compressed=False, Error=True, Filter=True, Edit column=False
    "type=text|compressed=false|error=true|filter=true|editColumn=false": __body10,
    // figma: Type=Text, Compressed=True, Error=False, Filter=False, Edit column=False
    "type=text|compressed=true|error=false|filter=false|editColumn=false": __body11,
    // figma: Type=hz expand, Compressed=True, Error=False, Filter=False, Edit column=False
    "type=hz expand|compressed=true|error=false|filter=false|editColumn=false": __body12,
    // figma: Type=Text, Compressed=True, Error=False, Filter=False, Edit column=True
    "type=text|compressed=true|error=false|filter=false|editColumn=true": __body11,
    // figma: Type=Text, Compressed=True, Error=False, Filter=True, Edit column=False
    "type=text|compressed=true|error=false|filter=true|editColumn=false": __body13,
    // figma: Type=Text, Compressed=True, Error=False, Filter=True, Edit column=True
    "type=text|compressed=true|error=false|filter=true|editColumn=true": __body13,
    // figma: Type=Text, Compressed=True, Error=True, Filter=False, Edit column=False
    "type=text|compressed=true|error=true|filter=false|editColumn=false": __body14,
    // figma: Type=Text, Compressed=True, Error=True, Filter=True, Edit column=False
    "type=text|compressed=true|error=true|filter=true|editColumn=false": __body15,
    // figma: Type=Load, Compressed=False, Error=False, Filter=False, Edit column=False
    "type=load|compressed=false|error=false|filter=false|editColumn=false": __body16,
    // figma: Type=Load, Compressed=True, Error=False, Filter=False, Edit column=False
    "type=load|compressed=true|error=false|filter=false|editColumn=false": __body17,
    // figma: Type=Number w tooltip, Compressed=False, Error=False, Filter=False, Edit column=False
    "type=number w tooltip|compressed=false|error=false|filter=false|editColumn=false": __body18,
    // figma: Type=Number w tooltip, Compressed=False, Error=False, Filter=False, Edit column=True
    "type=number w tooltip|compressed=false|error=false|filter=false|editColumn=true": __body18,
    // figma: Type=Number w tooltip, Compressed=False, Error=False, Filter=True, Edit column=False
    "type=number w tooltip|compressed=false|error=false|filter=true|editColumn=false": __body19,
    // figma: Type=Number w tooltip, Compressed=False, Error=False, Filter=True, Edit column=True
    "type=number w tooltip|compressed=false|error=false|filter=true|editColumn=true": __body19,
    // figma: Type=Action, Compressed=False, Error=False, Filter=False, Edit column=False
    "type=action|compressed=false|error=false|filter=false|editColumn=false": __body20,
    // figma: Type=Action, Compressed=False, Error=False, Filter=True, Edit column=False
    "type=action|compressed=false|error=false|filter=true|editColumn=false": __body20,
    // figma: Type=Action, Compressed=True, Error=False, Filter=False, Edit column=False
    "type=action|compressed=true|error=false|filter=false|editColumn=false": __body21,
    // figma: Type=Action, Compressed=True, Error=False, Filter=True, Edit column=False
    "type=action|compressed=true|error=false|filter=true|editColumn=false": __body22,
    // figma: Type=Number w tooltip, Compressed=False, Error=True, Filter=False, Edit column=False
    "type=number w tooltip|compressed=false|error=true|filter=false|editColumn=false": __body23,
    // figma: Type=Number w tooltip, Compressed=False, Error=True, Filter=True, Edit column=False
    "type=number w tooltip|compressed=false|error=true|filter=true|editColumn=false": __body24,
    // figma: Type=Number w tooltip, Compressed=True, Error=False, Filter=False, Edit column=False
    "type=number w tooltip|compressed=true|error=false|filter=false|editColumn=false": __body25,
    // figma: Type=Number w tooltip, Compressed=True, Error=False, Filter=False, Edit column=True
    "type=number w tooltip|compressed=true|error=false|filter=false|editColumn=true": __body25,
    // figma: Type=Number w tooltip, Compressed=True, Error=False, Filter=True, Edit column=False
    "type=number w tooltip|compressed=true|error=false|filter=true|editColumn=false": __body26,
    // figma: Type=Number w tooltip, Compressed=True, Error=False, Filter=True, Edit column=True
    "type=number w tooltip|compressed=true|error=false|filter=true|editColumn=true": __body26,
    // figma: Type=Number w tooltip, Compressed=True, Error=True, Filter=False, Edit column=False
    "type=number w tooltip|compressed=true|error=true|filter=false|editColumn=false": __body27,
    // figma: Type=Number w tooltip, Compressed=True, Error=True, Filter=True, Edit column=False
    "type=number w tooltip|compressed=true|error=true|filter=true|editColumn=false": __body28,
    // figma: Type=Number, Compressed=False, Error=False, Filter=False, Edit column=False
    "type=number|compressed=false|error=false|filter=false|editColumn=false": __body29,
    // figma: Type=Number, Compressed=False, Error=False, Filter=False, Edit column=True
    "type=number|compressed=false|error=false|filter=false|editColumn=true": __body29,
    // figma: Type=Number, Compressed=False, Error=False, Filter=True, Edit column=False
    "type=number|compressed=false|error=false|filter=true|editColumn=false": __body30,
    // figma: Type=Number, Compressed=False, Error=False, Filter=True, Edit column=True
    "type=number|compressed=false|error=false|filter=true|editColumn=true": __body30,
    // figma: Type=Number, Compressed=False, Error=True, Filter=False, Edit column=False
    "type=number|compressed=false|error=true|filter=false|editColumn=false": __body29,
    // figma: Type=Number, Compressed=False, Error=True, Filter=True, Edit column=False
    "type=number|compressed=false|error=true|filter=true|editColumn=false": __body31,
    // figma: Type=Number, Compressed=True, Error=False, Filter=False, Edit column=False
    "type=number|compressed=true|error=false|filter=false|editColumn=false": __body32,
    // figma: Type=Number, Compressed=True, Error=False, Filter=False, Edit column=True
    "type=number|compressed=true|error=false|filter=false|editColumn=true": __body32,
    // figma: Type=Number, Compressed=True, Error=False, Filter=True, Edit column=False
    "type=number|compressed=true|error=false|filter=true|editColumn=false": __body33,
    // figma: Type=Number, Compressed=True, Error=False, Filter=True, Edit column=True
    "type=number|compressed=true|error=false|filter=true|editColumn=true": __body33,
    // figma: Type=Number, Compressed=True, Error=True, Filter=False, Edit column=False
    "type=number|compressed=true|error=true|filter=false|editColumn=false": __body34,
    // figma: Type=Number, Compressed=True, Error=True, Filter=True, Edit column=False
    "type=number|compressed=true|error=true|filter=true|editColumn=false": __body35,
    // figma: Type=Checkbox, Compressed=False, Error=False, Filter=False, Edit column=False
    "type=checkbox|compressed=false|error=false|filter=false|editColumn=false": __body36,
    // figma: Type=Checkbox, Compressed=False, Error=False, Filter=True, Edit column=False
    "type=checkbox|compressed=false|error=false|filter=true|editColumn=false": __body37,
    // figma: Type=Checkbox, Compressed=False, Error=False, Filter=True, Edit column=True
    "type=checkbox|compressed=false|error=false|filter=true|editColumn=true": __body37,
    // figma: Type=Checkbox, Compressed=False, Error=True, Filter=False, Edit column=False
    "type=checkbox|compressed=false|error=true|filter=false|editColumn=false": __body37,
    // figma: Type=Checkbox, Compressed=False, Error=True, Filter=True, Edit column=False
    "type=checkbox|compressed=false|error=true|filter=true|editColumn=false": __body38,
    // figma: Type=Checkbox, Compressed=True, Error=False, Filter=False, Edit column=False
    "type=checkbox|compressed=true|error=false|filter=false|editColumn=false": __body39,
    // figma: Type=Checkbox, Compressed=True, Error=False, Filter=True, Edit column=False
    "type=checkbox|compressed=true|error=false|filter=true|editColumn=false": __body39,
    // figma: Type=Checkbox, Compressed=True, Error=False, Filter=True, Edit column=True
    "type=checkbox|compressed=true|error=false|filter=true|editColumn=true": __body39,
    // figma: Type=Checkbox, Compressed=True, Error=True, Filter=False, Edit column=False
    "type=checkbox|compressed=true|error=true|filter=false|editColumn=false": __body39,
    // figma: Type=Checkbox, Compressed=True, Error=True, Filter=True, Edit column=False
    "type=checkbox|compressed=true|error=true|filter=true|editColumn=false": __body40,
    // figma: Type=Blank, Compressed=False, Error=False, Filter=False, Edit column=False
    "type=blank|compressed=false|error=false|filter=false|editColumn=false": __body41,
    // figma: Type=Blank, Compressed=False, Error=False, Filter=True, Edit column=False
    "type=blank|compressed=false|error=false|filter=true|editColumn=false": __body41,
    // figma: Type=Blank, Compressed=False, Error=True, Filter=False, Edit column=False
    "type=blank|compressed=false|error=true|filter=false|editColumn=false": __body41,
    // figma: Type=Blank, Compressed=False, Error=True, Filter=True, Edit column=False
    "type=blank|compressed=false|error=true|filter=true|editColumn=false": __body42,
    // figma: Type=Blank, Compressed=True, Error=False, Filter=False, Edit column=False
    "type=blank|compressed=true|error=false|filter=false|editColumn=false": __body43,
    // figma: Type=Blank, Compressed=True, Error=False, Filter=True, Edit column=False
    "type=blank|compressed=true|error=false|filter=true|editColumn=false": __body43,
    // figma: Type=Blank, Compressed=True, Error=True, Filter=False, Edit column=False
    "type=blank|compressed=true|error=true|filter=false|editColumn=false": __body43,
    // figma: Type=Blank, Compressed=True, Error=True, Filter=True, Edit column=False
    "type=blank|compressed=true|error=true|filter=true|editColumn=false": __body44
  };
  return (__impls[__vkey_CellTitle(props)] ?? __body0)();
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
var __venc_Badge2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_Badge2 = p => "size=" + __venc_Badge2(p.size) + '|' + "icon=" + __venc_Badge2(p.icon) + '|' + "color=" + __venc_Badge2(p.color) + '|' + "outline=" + __venc_Badge2(p.outline);

// Globals for scripts loaded after this file.
window.TableTitleText = TableTitleText;
window.CellTitle = CellTitle;
window.IconClose = IconClose;
