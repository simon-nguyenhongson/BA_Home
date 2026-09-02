// Components bundle — part 5 of 5. Load the parts in order as plain
// classic <script> tags: they share one global scope, so later parts can call
// declarations from earlier ones exactly as in the original single-file bundle.

function TreeViewItem(_p = {}) {
  const props = {
    ..._p,
    state: _p.state ?? "default",
    type: _p.type ?? "default",
    level: _p.level ?? "closed",
    badge: _p.badge ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
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
      gap: 4,
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
      gap: 10,
      padding: "0px 4px 0px 0px",
      justifyContent: "center",
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
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronRight, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 8px 4px 8px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,55,65)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (closed)"))), props.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 50,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Badge2, {
    text1: "02",
    icon1: /*#__PURE__*/React.createElement(IconTagGroup, {
      style: {
        width: "100%",
        height: "100%"
      }
    }),
    size: "sm",
    icon: "icon leading",
    color: "gray",
    outline: false
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
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
      gap: 4,
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
      gap: 10,
      padding: "0px 4px 0px 0px",
      justifyContent: "center",
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
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronRight, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 8px 4px 8px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (closed)"))), props.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 50,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Badge2, {
    text1: "02",
    icon1: /*#__PURE__*/React.createElement(IconTag, {
      style: {
        width: "100%",
        height: "100%"
      }
    }),
    size: "sm",
    icon: "icon leading",
    color: "gray",
    outline: false
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
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
      gap: 4,
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
      gap: 10,
      padding: "0px 4px 0px 0px",
      justifyContent: "center",
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
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronRight, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 8px 4px 8px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (closed)"))), props.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 50,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Badge2, {
    text1: "02",
    icon1: /*#__PURE__*/React.createElement(IconTagGroup, {
      style: {
        width: "100%",
        height: "100%"
      }
    }),
    size: "sm",
    icon: "icon leading",
    color: "gray",
    outline: false
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
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
      gap: 4,
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
      gap: 10,
      padding: "0px 4px 0px 0px",
      justifyContent: "center",
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
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronRight, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 8px 4px 8px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (closed)"))), props.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 50,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Badge2, {
    text1: "02",
    icon1: /*#__PURE__*/React.createElement(IconTagGroup, {
      style: {
        width: "100%",
        height: "100%"
      }
    }),
    size: "sm",
    icon: "icon leading",
    color: "gray",
    outline: false
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
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
      gap: 4,
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
      gap: 10,
      padding: "0px 4px 0px 0px",
      justifyContent: "center",
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
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronRight, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 8px 4px 8px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (closed)"))), props.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 50,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Badge2, {
    text1: "02",
    icon1: /*#__PURE__*/React.createElement(IconTagGroup, {
      style: {
        width: "100%",
        height: "100%"
      }
    }),
    size: "sm",
    icon: "icon leading",
    color: "gray",
    outline: false
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
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
      gap: 10,
      padding: "0px 4px 0px 0px",
      justifyContent: "center",
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
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronRight, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "3px 0px 4px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 193,
      height: 4,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(SkeletonTitle, {
    style: {
      transform: "scale(1, 0.250)",
      transformOrigin: "0 0"
    },
    size: "xxxs"
  }))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
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
      gap: 10,
      padding: "0px 4px 0px 0px",
      justifyContent: "center",
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
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronRight, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 0px 6px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 8px 4px 8px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (closed)")));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      height: 32,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "2px 8px 2px 8px",
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
      gap: 10,
      justifyContent: "center",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronRight, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 0px 6px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
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
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconDraggable, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (closed)")));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "2px 8px 2px 8px",
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
      gap: 10,
      justifyContent: "center",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronRight, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 0px 6px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "disbaled"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
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
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconDraggable, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (closed)")));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
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
      gap: 10,
      padding: "0px 4px 0px 0px",
      justifyContent: "center",
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
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronRight, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 0px 6px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "disbaled"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "4px 8px 4px 8px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (closed)")));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
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
      gap: 10,
      padding: "0px 4px 0px 0px",
      justifyContent: "center",
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
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronRight, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 0px 6px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "4px 8px 4px 8px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (closed)")));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
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
      gap: 4,
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
      gap: 10,
      padding: "0px 4px 0px 0px",
      justifyContent: "center",
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
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronDown, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 8px 4px 8px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,55,65)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (open)"))), props.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 50,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Badge2, {
    text1: "02",
    icon1: /*#__PURE__*/React.createElement(IconTagGroup, {
      style: {
        width: "100%",
        height: "100%"
      }
    }),
    size: "sm",
    icon: "icon leading",
    color: "gray",
    outline: false
  })));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
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
      gap: 4,
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
      gap: 10,
      padding: "0px 4px 0px 0px",
      justifyContent: "center",
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
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronDown, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 8px 4px 8px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (open)"))), props.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 50,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Badge2, {
    text1: "02",
    icon1: /*#__PURE__*/React.createElement(IconTag, {
      style: {
        width: "100%",
        height: "100%"
      }
    }),
    size: "sm",
    icon: "icon leading",
    color: "gray",
    outline: false
  })));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
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
      gap: 4,
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
      gap: 10,
      padding: "0px 4px 0px 0px",
      justifyContent: "center",
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
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronDown, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 8px 4px 8px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (open)"))), props.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 50,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Badge2, {
    text1: "02",
    icon1: /*#__PURE__*/React.createElement(IconTagGroup, {
      style: {
        width: "100%",
        height: "100%"
      }
    }),
    size: "sm",
    icon: "icon leading",
    color: "gray",
    outline: false
  })));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
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
      gap: 4,
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
      gap: 10,
      padding: "0px 4px 0px 0px",
      justifyContent: "center",
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
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronDown, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 8px 4px 8px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (open)"))), props.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 50,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Badge2, {
    text1: "02",
    icon1: /*#__PURE__*/React.createElement(IconTagGroup, {
      style: {
        width: "100%",
        height: "100%"
      }
    }),
    size: "sm",
    icon: "icon leading",
    color: "gray",
    outline: false
  })));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
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
      gap: 4,
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
      gap: 10,
      padding: "0px 4px 0px 0px",
      justifyContent: "center",
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
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronDown, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 8px 4px 8px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (open)"))), props.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Badge2, {
    text1: "02",
    icon1: /*#__PURE__*/React.createElement(IconTagGroup, {
      style: {
        width: "100%",
        height: "100%"
      }
    }),
    size: "sm",
    icon: "icon leading",
    color: "gray",
    outline: false
  })));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
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
      gap: 10,
      padding: "0px 4px 0px 0px",
      justifyContent: "center",
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
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronDown, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "3px 0px 4px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 193,
      height: 4,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(SkeletonTitle, {
    style: {
      transform: "scale(1, 0.250)",
      transformOrigin: "0 0"
    },
    size: "xxxs"
  }))));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      height: 32,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "2px 8px 2px 8px",
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
      padding: "4px 8px 4px 8px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (open)")), props.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 50,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Badge2, {
    text1: "02",
    icon1: /*#__PURE__*/React.createElement(IconTagGroup, {
      style: {
        width: "100%",
        height: "100%"
      }
    }),
    size: "sm",
    icon: "icon leading",
    color: "gray",
    outline: false
  })));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      height: 32,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
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
      padding: "4px 8px 4px 8px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (open)")), props.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 50,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Badge2, {
    text1: "02",
    icon1: /*#__PURE__*/React.createElement(IconTag, {
      style: {
        width: "100%",
        height: "100%"
      }
    }),
    size: "sm",
    icon: "icon leading",
    color: "gray",
    outline: false
  })));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "2px 0px 2px 0px",
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
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 8px 4px 8px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (open)")), props.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 50,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Badge2, {
    text1: "02",
    icon1: /*#__PURE__*/React.createElement(IconTagGroup, {
      style: {
        width: "100%",
        height: "100%"
      }
    }),
    size: "sm",
    icon: "icon leading",
    color: "gray",
    outline: false
  })));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      height: 32,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
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
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 8px 4px 8px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (open)")), props.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 50,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Badge2, {
    text1: "02",
    icon1: /*#__PURE__*/React.createElement(IconTagGroup, {
      style: {
        width: "100%",
        height: "100%"
      }
    }),
    size: "sm",
    icon: "icon leading",
    color: "gray",
    outline: false
  })));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      height: 32,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
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
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 8px 4px 8px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexGrow: 1,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (open)")), props.badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 50,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Badge2, {
    text1: "02",
    icon1: /*#__PURE__*/React.createElement(IconTagGroup, {
      style: {
        width: "100%",
        height: "100%"
      }
    }),
    size: "sm",
    icon: "icon leading",
    color: "gray",
    outline: false
  })));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "2px 8px 2px 8px",
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
      gap: 10,
      padding: "3px 0px 4px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 193,
      height: 4,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(SkeletonTitle, {
    style: {
      transform: "scale(1, 0.250)",
      transformOrigin: "0 0"
    },
    size: "xxxs"
  }))));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
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
      gap: 10,
      padding: "0px 4px 0px 0px",
      justifyContent: "center",
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
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronDown, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 0px 6px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 8px 4px 8px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (open)")));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      height: 32,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "2px 8px 2px 8px",
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
      gap: 10,
      justifyContent: "center",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronDown, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 0px 6px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
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
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconDraggable, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (open)")));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "2px 8px 2px 8px",
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
      gap: 10,
      justifyContent: "center",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronDown, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 0px 6px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "disbaled"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
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
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconDraggable, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (open)")));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
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
      gap: 10,
      padding: "0px 4px 0px 0px",
      justifyContent: "center",
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
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronDown, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 0px 6px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "disbaled"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "4px 8px 4px 8px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (open)")));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
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
      gap: 10,
      padding: "0px 4px 0px 0px",
      justifyContent: "center",
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
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronDown, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 0px 6px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(CheckboxIcon, {
    checked: false,
    indeterminate: false,
    type: "checkbox",
    state: "default"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "4px 8px 4px 8px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (open)")));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      height: 32,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "2px 8px 2px 8px",
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
      gap: 10,
      padding: "6px 0px 6px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
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
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 8px 4px 8px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (open)")));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      height: 32,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "2px 8px 2px 8px",
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
      gap: 10,
      padding: "6px 0px 6px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
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
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
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
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconDraggable, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (open)")));
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      height: 32,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "2px 8px 2px 8px",
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
      gap: 10,
      padding: "6px 0px 6px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
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
    state: "disbaled"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
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
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconDraggable, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "4px 0px 4px 0px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (open)")));
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      height: 32,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "2px 8px 2px 8px",
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
      gap: 10,
      padding: "6px 0px 6px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
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
    state: "disbaled"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "4px 8px 4px 8px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (open)")));
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 228,
      height: 32,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "2px 8px 2px 8px",
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
      gap: 10,
      padding: "6px 0px 6px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
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
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "4px 8px 4px 8px",
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
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Nav item (open)")));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 156,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 28,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 4px 0px 0px",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronRight, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Ava, {
    size: "sm",
    text: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "4px 8px 4px 8px",
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
  }, props.text1 ?? "ID"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconDotMark, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
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
  }, props.text2 ?? "Name")), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text3 ?? "Title"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      flexShrink: 0
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(IconDotMark, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text4 ?? "Email"))));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 156,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 28,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 4px 0px 0px",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronRight, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Ava, {
    size: "sm",
    text: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "4px 8px 4px 8px",
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
  }, props.text1 ?? "ID"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconDotMark, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
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
  }, props.text2 ?? "Name")), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(102,112,133)",
      flexShrink: 0
    }
  }, props.text3 ?? "Title"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      flexShrink: 0
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(IconDotMark, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
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
  }, props.text4 ?? "Email"))));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 156,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 28,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 4px 0px 0px",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronDown, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Ava, {
    size: "sm",
    text: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "4px 8px 4px 8px",
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
  }, props.text1 ?? "ID"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconDotMark, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
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
  }, props.text2 ?? "Name")), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(102,112,133)",
      flexShrink: 0
    }
  }, props.text3 ?? "Title"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      flexShrink: 0
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(IconDotMark, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
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
  }, props.text4 ?? "Email"))));
  const __body36 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 156,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 28,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 4px 0px 0px",
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconChevronDown, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(Ava, {
    size: "sm",
    text: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "4px 8px 4px 8px",
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
  }, props.text1 ?? "ID"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconDotMark, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
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
  }, props.text2 ?? "Name")), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(102,112,133)",
      flexShrink: 0
    }
  }, props.text3 ?? "Title"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      flexShrink: 0
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(IconDotMark, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
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
  }, props.text4 ?? "Email"))));
  const __body37 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
    text: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "4px 8px 4px 8px",
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
  }, props.text1 ?? "ID"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconDotMark, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
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
  }, props.text2 ?? "Name")), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(102,112,133)",
      flexShrink: 0
    }
  }, props.text3 ?? "Title"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconDotMark, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
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
  }, props.text4 ?? "Email"))));
  const __body38 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 132,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 8px 2px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
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
    text: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "4px 8px 4px 8px",
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
  }, props.text1 ?? "ID"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconDotMark, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
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
  }, props.text2 ?? "Name")), /*#__PURE__*/React.createElement("div", {
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
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "18px",
      color: "rgb(102,112,133)",
      flexShrink: 0
    }
  }, props.text3 ?? "Title"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 8,
      height: 8,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(IconDotMark, {
    style: {
      transform: "scale(0.500, 0.500)",
      transformOrigin: "0 0"
    }
  })), /*#__PURE__*/React.createElement("span", {
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
  }, props.text4 ?? "Email"))));
  const __impls = {
    // figma: State=Default, Type=Default, Level=Closed
    "state=default|type=default|level=closed": __body0,
    // figma: State=Disable, Type=Default, Level=Closed
    "state=disable|type=default|level=closed": __body1,
    // figma: State=Hover, Type=Default, Level=Closed
    "state=hover|type=default|level=closed": __body2,
    // figma: State=Selected, Type=Default, Level=Closed
    "state=selected|type=default|level=closed": __body3,
    // figma: State=Current, Type=Default, Level=Closed
    "state=current|type=default|level=closed": __body4,
    // figma: State=Load, Type=Load, Level=Closed
    "state=load|type=load|level=closed": __body5,
    // figma: State=Default, Type=Checkbox, Level=Closed
    "state=default|type=checkbox|level=closed": __body6,
    // figma: State=Current, Type=Checkbox, Level=Closed
    "state=current|type=checkbox|level=closed": __body6,
    // figma: State=Default, Type=Drag, Level=Closed
    "state=default|type=drag|level=closed": __body7,
    // figma: State=Disable, Type=Drag, Level=Closed
    "state=disable|type=drag|level=closed": __body8,
    // figma: State=Disable, Type=Checkbox, Level=Closed
    "state=disable|type=checkbox|level=closed": __body9,
    // figma: State=Hover, Type=Checkbox, Level=Closed
    "state=hover|type=checkbox|level=closed": __body10,
    // figma: State=Default, Type=Default, Level=Open
    "state=default|type=default|level=open": __body11,
    // figma: State=Disable, Type=Default, Level=Open
    "state=disable|type=default|level=open": __body12,
    // figma: State=Hover, Type=Default, Level=Open
    "state=hover|type=default|level=open": __body13,
    // figma: State=Selected, Type=Default, Level=Open
    "state=selected|type=default|level=open": __body14,
    // figma: State=Current, Type=Default, Level=Open
    "state=current|type=default|level=open": __body15,
    // figma: State=Load, Type=Load, Level=Open
    "state=load|type=load|level=open": __body16,
    // figma: State=Default, Type=Default, Level=Sub end
    "state=default|type=default|level=sub end": __body17,
    // figma: State=Disable, Type=Default, Level=Sub end
    "state=disable|type=default|level=sub end": __body18,
    // figma: State=Hover, Type=Default, Level=Sub end
    "state=hover|type=default|level=sub end": __body19,
    // figma: State=Selected, Type=Default, Level=Sub end
    "state=selected|type=default|level=sub end": __body20,
    // figma: State=Current, Type=Default, Level=Sub end
    "state=current|type=default|level=sub end": __body21,
    // figma: State=Load, Type=Load, Level=Sub end
    "state=load|type=load|level=sub end": __body22,
    // figma: State=Default, Type=Checkbox, Level=Open
    "state=default|type=checkbox|level=open": __body23,
    // figma: State=Current, Type=Checkbox, Level=Open
    "state=current|type=checkbox|level=open": __body23,
    // figma: State=Default, Type=Drag, Level=Open
    "state=default|type=drag|level=open": __body24,
    // figma: State=Disable, Type=Drag, Level=Open
    "state=disable|type=drag|level=open": __body25,
    // figma: State=Disable, Type=Checkbox, Level=Open
    "state=disable|type=checkbox|level=open": __body26,
    // figma: State=Hover, Type=Checkbox, Level=Open
    "state=hover|type=checkbox|level=open": __body27,
    // figma: State=Default, Type=Checkbox, Level=Sub end
    "state=default|type=checkbox|level=sub end": __body28,
    // figma: State=Current, Type=Checkbox, Level=Sub end
    "state=current|type=checkbox|level=sub end": __body28,
    // figma: State=Default, Type=Drag, Level=Sub end
    "state=default|type=drag|level=sub end": __body29,
    // figma: State=Disable, Type=Drag, Level=Sub end
    "state=disable|type=drag|level=sub end": __body30,
    // figma: State=Disable, Type=Checkbox, Level=Sub end
    "state=disable|type=checkbox|level=sub end": __body31,
    // figma: State=Hover, Type=Checkbox, Level=Sub end
    "state=hover|type=checkbox|level=sub end": __body32,
    // figma: State=Default, Type=User, Level=Closed
    "state=default|type=user|level=closed": __body33,
    // figma: State=Hover, Type=User, Level=Closed
    "state=hover|type=user|level=closed": __body34,
    // figma: State=Default, Type=User, Level=Open
    "state=default|type=user|level=open": __body35,
    // figma: State=Hover, Type=User, Level=Open
    "state=hover|type=user|level=open": __body36,
    // figma: State=Default, Type=User, Level=Sub end
    "state=default|type=user|level=sub end": __body37,
    // figma: State=Hover, Type=User, Level=Sub end
    "state=hover|type=user|level=sub end": __body38
  };
  return (__impls[__vkey_TreeViewItem(props)] ?? __body0)();
}

// figma node: 805:38040 Catetree (2 variants)
var __venc_Catetree = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_Catetree = p => "single=" + __venc_Catetree(p.single);

function Catetree(_p = {}) {
  const props = {
    ..._p,
    single: _p.single ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "0px 16px 0px 0px",
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
      justifyContent: "space-between",
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
      flexShrink: 0
    }
  }, props.text1 ?? "Danh mục sản phẩm"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Button, {
    rightIcon: false,
    changeRight: /*#__PURE__*/React.createElement(IconClose, null),
    size: "h32px",
    hierarchy: "ghost gray",
    icon: "only",
    destructive: false,
    state: "default"
  }))), /*#__PURE__*/React.createElement(SearchField, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Tìm kiếm danh mục",
    state: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 102,
      flexShrink: 0
    },
    rightIcon: false,
    changeRight: /*#__PURE__*/React.createElement(IconCheckboxChecked, null),
    text1: "Chọn tất cả",
    size: "h32px",
    hierarchy: "link color",
    icon: "default",
    destructive: false,
    state: "default"
  })), /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 80,
      flexShrink: 0
    },
    rightIcon: false,
    changeRight: /*#__PURE__*/React.createElement(IconExpandAll, null),
    text1: "Mở rộng",
    size: "h32px",
    hierarchy: "link gray",
    icon: "default",
    destructive: false,
    state: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(TreeViewItem, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Cate name level 1(#)",
    state: "default",
    type: "checkbox",
    level: "closed"
  }), /*#__PURE__*/React.createElement(TreeViewItem, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Cate name level 1(#)",
    state: "default",
    type: "checkbox",
    level: "closed"
  }), /*#__PURE__*/React.createElement(TreeViewItem, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Cate name level 1(#)",
    state: "default",
    type: "checkbox",
    level: "closed"
  }), /*#__PURE__*/React.createElement(TreeViewItem, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Cate name level 1(#)",
    state: "default",
    type: "checkbox",
    level: "closed"
  }), /*#__PURE__*/React.createElement(TreeViewItem, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Cale name level 1(#)",
    state: "default",
    type: "checkbox",
    level: "closed"
  }), /*#__PURE__*/React.createElement(TreeViewItem, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Cale name level 1(#)",
    state: "default",
    type: "checkbox",
    level: "closed"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 320,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "0px 16px 0px 0px",
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
      justifyContent: "space-between",
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
      flexShrink: 0
    }
  }, props.text1 ?? "Danh mục sản phẩm"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Button, {
    rightIcon: false,
    changeRight: /*#__PURE__*/React.createElement(IconClose, null),
    size: "h32px",
    hierarchy: "ghost gray",
    icon: "only",
    destructive: false,
    state: "default"
  }))), /*#__PURE__*/React.createElement(SearchField, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Tìm kiếm danh mục",
    state: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
      flexWrap: "wrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      position: "relative",
      width: 80,
      flexShrink: 0
    },
    rightIcon: false,
    changeRight: /*#__PURE__*/React.createElement(IconExpandAll, null),
    text1: "Mở rộng",
    size: "h32px",
    hierarchy: "link gray",
    icon: "default",
    destructive: false,
    state: "default"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(TreeViewItem, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Cate name level 1(#)",
    state: "default",
    type: "default",
    level: "closed"
  }), /*#__PURE__*/React.createElement(TreeViewItem, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Cate name level 1(#)",
    state: "default",
    type: "default",
    level: "closed"
  }), /*#__PURE__*/React.createElement(TreeViewItem, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Cate name level 1(#)",
    state: "default",
    type: "default",
    level: "closed"
  }), /*#__PURE__*/React.createElement(TreeViewItem, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Cate name level 1(#)",
    state: "default",
    type: "default",
    level: "closed"
  }), /*#__PURE__*/React.createElement(TreeViewItem, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Cale name level 1(#)",
    state: "default",
    type: "default",
    level: "closed"
  }), /*#__PURE__*/React.createElement(TreeViewItem, {
    style: {
      position: "relative",
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "Cale name level 1(#)",
    state: "default",
    type: "default",
    level: "closed"
  })));
  const __impls = {
    // figma: Single=False
    "single=false": __body0,
    // figma: Single=True
    "single=true": __body1
  };
  return (__impls[__vkey_Catetree(props)] ?? __body0)();
}

// figma node: 6292:14967 Carousel/Slick (3 variants)
var __venc_CarouselSlick = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_CarouselSlick = p => "state=" + __venc_CarouselSlick(p.state);

function CarouselSlick(_p = {}) {
  const props = {
    ..._p,
    state: _p.state ?? "inactive"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 12,
      opacity: 0.3,
      borderRadius: 1,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "1.500px 8px 1.500px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 0.001,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 12,
      opacity: 0.75,
      borderRadius: 1,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "1.500px 8px 1.500px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 0.001,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      borderRadius: 1,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "1.500px 12px 1.500px 12px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 0.001,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }));
  const __impls = {
    // figma: State=inactive
    "state=inactive": __body0,
    // figma: State=hover
    "state=hover": __body1,
    // figma: State=active
    "state=active": __body2
  };
  return (__impls[__vkey_CarouselSlick(props)] ?? __body0)();
}

// figma node: 275:59206 Icon/Locked
function IconLocked(_p = {}) {
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
    height: 14,
    viewBox: "0 0 10 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 1,
      width: 10,
      height: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9 6 L 8 6 L 8 3 C 8 2.204 7.684 1.441 7.121 0.879 C 6.559 0.316 5.796 0 5 0 C 4.204 0 3.441 0.316 2.879 0.879 C 2.316 1.441 2 2.204 2 3 L 2 6 L 1 6 C 0.735 6 0.48 6.105 0.293 6.293 C 0.105 6.48 0 6.735 0 7 L 0 13 C 0 13.265 0.105 13.52 0.293 13.707 C 0.48 13.895 0.735 14 1 14 L 9 14 C 9.265 14 9.52 13.895 9.707 13.707 C 9.895 13.52 10 13.265 10 13 L 10 7 C 10 6.735 9.895 6.48 9.707 6.293 C 9.52 6.105 9.265 6 9 6 Z M 3 3 C 3 2.47 3.211 1.961 3.586 1.586 C 3.961 1.211 4.47 1 5 1 C 5.53 1 6.039 1.211 6.414 1.586 C 6.789 1.961 7 2.47 7 3 L 7 6 L 3 6 L 3 3 Z M 9 13 L 1 13 L 1 7 L 9 7 L 9 13 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 377:31429 illustration (36 variants)
var __venc_Illustration = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_Illustration = p => "style2=" + __venc_Illustration(p.style2) + '|' + "color=" + __venc_Illustration(p.color) + '|' + "size=" + __venc_Illustration(p.size);

function Illustration(_p = {}) {
  const props = {
    ..._p,
    style2: _p.style2 ?? "box",
    color: _p.color ?? "gray",
    size: _p.size ?? "sm"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 172,
      height: 128,
      position: "relative",
      color: "rgb(239,244,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22,
      top: 0,
      width: 128,
      height: 128,
      borderRadius: "50%",
      backgroundColor: "rgb(178,204,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      top: 14,
      width: 12,
      height: 12,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 104,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 152,
      top: 28,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 144,
      top: 4,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 16,
      width: 140,
      height: 80,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 140,
    height: 80,
    viewBox: "0 0 140 80",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 140,
      height: 80
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 72 0 C 58.534 0 46.622 6.654 39.373 16.854 C 37.006 16.295 34.538 16 32 16 C 14.327 16 0 30.327 0 48 C 0 65.673 14.327 80 32 80 L 112 80 C 127.464 80 140 67.464 140 52 C 140 36.536 127.464 24 112 24 C 110.902 24 109.818 24.063 108.752 24.186 C 102.623 9.96 88.475 0 72 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 16,
      width: 64,
      height: 64,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(178,204,255) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32,
      top: 0,
      width: 80,
      height: 80,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(178,204,255) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 84,
      top: 24,
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(178,204,255) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 58,
      top: 60,
      width: 56,
      height: 56,
      borderRadius: 36,
      backgroundColor: "rgba(0,78,235,0.4)",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      top: 14,
      width: 28,
      height: 28
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(1.750, 1.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 220,
      height: 160,
      position: "relative",
      color: "rgb(239,244,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 30,
      top: 0,
      width: 160,
      height: 160,
      borderRadius: "50%",
      backgroundColor: "rgb(178,204,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18,
      top: 12,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 192,
      top: 120,
      width: 12,
      height: 12,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15,
      top: 128,
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 200,
      top: 36,
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 184,
      top: 4,
      width: 14,
      height: 14,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 16,
      width: 174,
      height: 99.429,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 174.000,
    height: 99.429,
    viewBox: "0 0 174.000 99.429",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 174,
      height: 99.429
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 89.486 0 C 72.749 0 57.945 8.27 48.935 20.947 C 45.993 20.253 42.925 19.886 39.771 19.886 C 17.806 19.886 0 37.692 0 59.657 C 0 81.622 17.806 99.429 39.771 99.429 L 139.148 99.429 C 139.166 99.429 139.183 99.429 139.2 99.429 C 158.42 99.429 174 83.848 174 64.629 C 174 45.409 158.42 29.829 139.2 29.829 C 137.835 29.829 136.488 29.907 135.164 30.06 C 127.546 12.378 109.961 0 89.486 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 19.886,
      width: 79.543,
      height: 79.543,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(178,204,255) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 39.771,
      top: 0,
      width: 99.429,
      height: 99.429,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(178,204,255) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 104.4,
      top: 29.829,
      width: 69.6,
      height: 69.6,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(178,204,255) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 82,
      top: 84,
      width: 56,
      height: 56,
      borderRadius: 36,
      backgroundColor: "rgba(0,78,235,0.4)",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      top: 14,
      width: 28,
      height: 28
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(1.750, 1.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 220,
      height: 160,
      position: "relative",
      color: "rgb(239,244,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 30,
      top: 0,
      width: 160,
      height: 160,
      borderRadius: "50%",
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18,
      top: 12,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 192,
      top: 120,
      width: 12,
      height: 12,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15,
      top: 128,
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 200,
      top: 36,
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 184,
      top: 4,
      width: 14,
      height: 14,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 16,
      width: 174,
      height: 99.429,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 174.000,
    height: 99.429,
    viewBox: "0 0 174.000 99.429",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 174,
      height: 99.429
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 89.486 0 C 72.749 0 57.945 8.27 48.935 20.947 C 45.993 20.253 42.925 19.886 39.771 19.886 C 17.806 19.886 0 37.692 0 59.657 C 0 81.622 17.806 99.429 39.771 99.429 L 139.148 99.429 C 139.166 99.429 139.183 99.429 139.2 99.429 C 158.42 99.429 174 83.848 174 64.629 C 174 45.409 158.42 29.829 139.2 29.829 C 137.835 29.829 136.488 29.907 135.164 30.06 C 127.546 12.378 109.961 0 89.486 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 19.886,
      width: 79.543,
      height: 79.543,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(208,213,221) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 39.771,
      top: 0,
      width: 99.429,
      height: 99.429,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(208,213,221) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 104.4,
      top: 29.829,
      width: 69.6,
      height: 69.6,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(208,213,221) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 82,
      top: 84,
      width: 56,
      height: 56,
      borderRadius: 36,
      backgroundColor: "rgba(52,64,84,0.4)",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      top: 14,
      width: 28,
      height: 28
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(1.750, 1.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 220,
      height: 160,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 30,
      top: 0,
      width: 160,
      height: 160,
      borderRadius: "50%",
      backgroundColor: "rgb(178,204,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18,
      top: 12,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 192,
      top: 120,
      width: 12,
      height: 12,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15,
      top: 128,
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 200,
      top: 28,
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 184,
      top: 4,
      width: 14,
      height: 14,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11.441,
      top: 12,
      width: 196.56,
      height: 114.437
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.906,-0.423,0.423,0.906,-0.000,28.937)",
      transformOrigin: "0 0",
      width: 68.396,
      height: 94.339,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 68.396,
    height: 94.339,
    viewBox: "0 0 68.396 94.339",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68.396,
      height: 94.339,
      borderRadius: 5.261234760284424
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.261 94.339 L 63.135 94.339 C 66.041 94.339 68.396 91.984 68.396 89.078 L 68.396 15.784 L 52.612 0 L 5.261 0 C 2.356 0 0 2.356 0 5.261 L 0 89.078 C 0 91.984 2.356 94.339 5.261 94.339 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.784,
    height: 15.784,
    viewBox: "0 0 15.784 15.784",
    fill: "none",
    style: {
      position: "absolute",
      left: 52.613,
      top: 0,
      width: 15.784,
      height: 15.784,
      color: "rgb(132,173,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 15.784 15.784 L 0 15.784 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 64.449,
      top: 0,
      width: 68.396,
      height: 94.339,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 68.396,
    height: 94.339,
    viewBox: "0 0 68.396 94.339",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68.396,
      height: 94.339,
      borderRadius: 5.261234760284424
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.261 94.339 L 63.135 94.339 C 66.041 94.339 68.396 91.984 68.396 89.078 L 68.396 15.784 L 52.612 0 L 5.261 0 C 2.356 0 0 2.356 0 5.261 L 0 89.078 C 0 91.984 2.356 94.339 5.261 94.339 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.784,
    height: 15.784,
    viewBox: "0 0 15.784 15.784",
    fill: "none",
    style: {
      position: "absolute",
      left: 52.613,
      top: 0,
      width: 15.784,
      height: 15.784,
      color: "rgb(132,173,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 15.784 15.784 L 0 15.784 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.906,0.423,-0.423,0.906,134.572,0)",
      transformOrigin: "0 0",
      width: 68.396,
      height: 94.339,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 68.396,
    height: 94.339,
    viewBox: "0 0 68.396 94.339",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68.396,
      height: 94.339,
      borderRadius: 5.261234760284424
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.261 94.339 L 63.135 94.339 C 66.041 94.339 68.396 91.984 68.396 89.078 L 68.396 15.784 L 52.612 0 L 5.261 0 C 2.356 0 0 2.356 0 5.261 L 0 89.078 C 0 91.984 2.356 94.339 5.261 94.339 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.784,
    height: 15.784,
    viewBox: "0 0 15.784 15.784",
    fill: "none",
    style: {
      position: "absolute",
      left: 52.613,
      top: 0,
      width: 15.784,
      height: 15.784,
      color: "rgb(132,173,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 15.784 15.784 L 0 15.784 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 82,
      top: 88,
      width: 56,
      height: 56,
      borderRadius: 36,
      backgroundColor: "rgba(0,78,235,0.4)",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      top: 14,
      width: 28,
      height: 28
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(1.750, 1.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 220,
      height: 160,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 30,
      top: 0,
      width: 160,
      height: 160,
      borderRadius: "50%",
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18,
      top: 12,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 192,
      top: 120,
      width: 12,
      height: 12,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15,
      top: 128,
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 200,
      top: 28,
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 184,
      top: 4,
      width: 14,
      height: 14,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11.441,
      top: 12,
      width: 196.56,
      height: 114.437
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.906,-0.423,0.423,0.906,-0.000,28.937)",
      transformOrigin: "0 0",
      width: 68.396,
      height: 94.339,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 68.396,
    height: 94.339,
    viewBox: "0 0 68.396 94.339",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68.396,
      height: 94.339,
      borderRadius: 5.261234760284424
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.261 94.339 L 63.135 94.339 C 66.041 94.339 68.396 91.984 68.396 89.078 L 68.396 15.784 L 52.612 0 L 5.261 0 C 2.356 0 0 2.356 0 5.261 L 0 89.078 C 0 91.984 2.356 94.339 5.261 94.339 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.784,
    height: 15.784,
    viewBox: "0 0 15.784 15.784",
    fill: "none",
    style: {
      position: "absolute",
      left: 52.613,
      top: 0,
      width: 15.784,
      height: 15.784,
      color: "rgb(208,213,221)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 15.784 15.784 L 0 15.784 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 64.449,
      top: 0,
      width: 68.396,
      height: 94.339,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 68.396,
    height: 94.339,
    viewBox: "0 0 68.396 94.339",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68.396,
      height: 94.339,
      borderRadius: 5.261234760284424
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.261 94.339 L 63.135 94.339 C 66.041 94.339 68.396 91.984 68.396 89.078 L 68.396 15.784 L 52.612 0 L 5.261 0 C 2.356 0 0 2.356 0 5.261 L 0 89.078 C 0 91.984 2.356 94.339 5.261 94.339 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.784,
    height: 15.784,
    viewBox: "0 0 15.784 15.784",
    fill: "none",
    style: {
      position: "absolute",
      left: 52.613,
      top: 0,
      width: 15.784,
      height: 15.784,
      color: "rgb(208,213,221)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 15.784 15.784 L 0 15.784 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.906,0.423,-0.423,0.906,134.572,0)",
      transformOrigin: "0 0",
      width: 68.396,
      height: 94.339,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 68.396,
    height: 94.339,
    viewBox: "0 0 68.396 94.339",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 68.396,
      height: 94.339,
      borderRadius: 5.261234760284424
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.261 94.339 L 63.135 94.339 C 66.041 94.339 68.396 91.984 68.396 89.078 L 68.396 15.784 L 52.612 0 L 5.261 0 C 2.356 0 0 2.356 0 5.261 L 0 89.078 C 0 91.984 2.356 94.339 5.261 94.339 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.784,
    height: 15.784,
    viewBox: "0 0 15.784 15.784",
    fill: "none",
    style: {
      position: "absolute",
      left: 52.613,
      top: 0,
      width: 15.784,
      height: 15.784,
      color: "rgb(208,213,221)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 15.784 15.784 L 0 15.784 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 82,
      top: 88,
      width: 56,
      height: 56,
      borderRadius: 36,
      backgroundColor: "rgba(52,64,84,0.4)",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      top: 14,
      width: 28,
      height: 28
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(1.750, 1.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 220,
      height: 168,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 30,
      top: 8,
      width: 160,
      height: 160,
      borderRadius: "50%",
      backgroundColor: "rgb(178,204,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18,
      top: 20,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 192,
      top: 128,
      width: 12,
      height: 12,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15,
      top: 136,
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 200,
      top: 44,
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 184,
      top: 12,
      width: 14,
      height: 14,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 46,
      top: 0,
      width: 128,
      height: 137.432,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 128,
    height: 137.432,
    viewBox: "0 0 128 137.432",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 128,
      height: 137.432,
      color: "rgb(239,244,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 64 54.953 L 70.912 52.058 L 64.001 55.002 L 64.001 137.432 L 127.69 110.743 L 127.69 28.277 L 128 28.147 L 127.69 28.009 L 127.69 27.87 L 127.53 27.938 L 64.503 0 L 0 27.476 L 0.305 27.608 L 0 109.74 L 64 137.383 L 64 54.953 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 64,
    height: 109.775,
    viewBox: "0 0 64 109.775",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 27.608,
      width: 64,
      height: 109.775
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 64 27.345 L 64 109.775 L 0 82.132 L 0.305 0 L 64 27.345 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 63.689,
    height: 109.562,
    viewBox: "0 0 63.689 109.562",
    fill: "none",
    style: {
      position: "absolute",
      left: 64.002,
      top: 27.871,
      width: 63.689,
      height: 109.562
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 27.132 L 0 109.562 L 63.689 82.873 L 63.689 0 L 0 27.132 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 128,
    height: 54.953,
    viewBox: "0 0 128 54.953",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 128,
      height: 54.953,
      color: "rgb(209,224,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 64 54.953 L 128 28.147 L 64.503 0 L 0 27.476 L 64 54.953 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 82.173,
    height: 54.785,
    viewBox: "0 0 82.173 54.785",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.125,
      top: 10.388,
      width: 82.173,
      height: 54.785,
      color: "rgb(178,204,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.812 L 63.756 34.563 L 64.335 54.785 L 82.173 47.425 L 81.634 27.075 L 15.992 0 L 0 6.812 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 82,
      top: 104,
      width: 56,
      height: 56,
      borderRadius: 36,
      backgroundColor: "rgba(0,78,235,0.4)",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      top: 14,
      width: 28,
      height: 28
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(1.750, 1.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 220,
      height: 168,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 30,
      top: 8,
      width: 160,
      height: 160,
      borderRadius: "50%",
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18,
      top: 20,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 192,
      top: 128,
      width: 12,
      height: 12,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15,
      top: 136,
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 200,
      top: 44,
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 184,
      top: 12,
      width: 14,
      height: 14,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 46,
      top: 0,
      width: 128,
      height: 137.432,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 128,
    height: 137.432,
    viewBox: "0 0 128 137.432",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 128,
      height: 137.432,
      color: "rgb(239,244,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 64 54.953 L 70.912 52.058 L 64.001 55.002 L 64.001 137.432 L 127.69 110.743 L 127.69 28.277 L 128 28.147 L 127.69 28.009 L 127.69 27.87 L 127.53 27.938 L 64.503 0 L 0 27.476 L 0.305 27.608 L 0 109.74 L 64 137.383 L 64 54.953 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 64,
    height: 109.775,
    viewBox: "0 0 64 109.775",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 27.608,
      width: 64,
      height: 109.775
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 64 27.345 L 64 109.775 L 0 82.132 L 0.305 0 L 64 27.345 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 63.689,
    height: 109.562,
    viewBox: "0 0 63.689 109.562",
    fill: "none",
    style: {
      position: "absolute",
      left: 64.002,
      top: 27.871,
      width: 63.689,
      height: 109.562
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 27.132 L 0 109.562 L 63.689 82.873 L 63.689 0 L 0 27.132 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 128,
    height: 54.953,
    viewBox: "0 0 128 54.953",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 128,
      height: 54.953,
      color: "rgb(242,244,247)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 64 54.953 L 128 28.147 L 64.503 0 L 0 27.476 L 64 54.953 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 82.173,
    height: 54.785,
    viewBox: "0 0 82.173 54.785",
    fill: "none",
    style: {
      position: "absolute",
      left: 24.125,
      top: 10.388,
      width: 82.173,
      height: 54.785,
      color: "rgb(234,236,240)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 6.812 L 63.756 34.563 L 64.335 54.785 L 82.173 47.425 L 81.634 27.075 L 15.992 0 L 0 6.812 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 82,
      top: 104,
      width: 56,
      height: 56,
      borderRadius: 36,
      backgroundColor: "rgba(52,64,84,0.4)",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      top: 14,
      width: 28,
      height: 28
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(1.750, 1.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 172,
      height: 128,
      position: "relative",
      color: "rgb(239,244,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22,
      top: 0,
      width: 128,
      height: 128,
      borderRadius: "50%",
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      top: 14,
      width: 12,
      height: 12,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 104,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 152,
      top: 28,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 144,
      top: 4,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 16,
      width: 140,
      height: 80,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 140,
    height: 80,
    viewBox: "0 0 140 80",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 140,
      height: 80
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 72 0 C 58.534 0 46.622 6.654 39.373 16.854 C 37.006 16.295 34.538 16 32 16 C 14.327 16 0 30.327 0 48 C 0 65.673 14.327 80 32 80 L 112 80 C 127.464 80 140 67.464 140 52 C 140 36.536 127.464 24 112 24 C 110.902 24 109.818 24.063 108.752 24.186 C 102.623 9.96 88.475 0 72 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 16,
      width: 64,
      height: 64,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(208,213,221) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32,
      top: 0,
      width: 80,
      height: 80,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(208,213,221) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 84,
      top: 24,
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(208,213,221) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 58,
      top: 60,
      width: 56,
      height: 56,
      borderRadius: 36,
      backgroundColor: "rgba(52,64,84,0.4)",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      top: 14,
      width: 28,
      height: 28
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(1.750, 1.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 152,
      height: 118,
      position: "relative",
      color: "rgb(239,244,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 0,
      width: 104,
      height: 104,
      borderRadius: "50%",
      backgroundColor: "rgb(178,204,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20,
      top: 16,
      width: 112,
      height: 64,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 111.999,
    height: 64,
    viewBox: "0 0 111.999 64",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 111.999,
      height: 64
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 57.6 0 C 46.827 0 37.297 5.323 31.498 13.483 C 29.605 13.036 27.63 12.8 25.6 12.8 C 11.462 12.8 0 24.262 0 38.4 C 0 52.539 11.462 64 25.6 64 L 25.649 64 L 89.6 64 C 101.971 64 111.999 53.971 111.999 41.6 C 111.999 29.229 101.97 19.2 89.599 19.2 C 88.721 19.2 87.854 19.251 87.002 19.349 C 82.098 7.968 70.779 0 57.6 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 12.8,
      width: 51.2,
      height: 51.2,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(178,204,255) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 25.6,
      top: 0,
      width: 64,
      height: 64,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(178,204,255) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 67.199,
      top: 19.2,
      width: 44.8,
      height: 44.8,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(178,204,255) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 14,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11,
      top: 102,
      width: 14,
      height: 14,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 138,
      top: 28,
      width: 14,
      height: 14,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 130,
      top: 4,
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 52,
      top: 62,
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: "rgba(0,78,235,0.4)",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: 12,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0"
    }
  }))));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 120,
      height: 93.158,
      position: "relative",
      color: "rgb(239,244,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18.945,
      top: 0,
      width: 82.105,
      height: 82.105,
      borderRadius: "50%",
      backgroundColor: "rgb(178,204,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.789,
      top: 12.632,
      width: 88.421,
      height: 50.526,
      boxShadow: "0px 15.789px 18.947px -3.158px rgba(16,24,40,0.08), 0px 6.316px 6.316px -3.158px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 88.419,
    height: 50.527,
    viewBox: "0 0 88.419 50.527",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.002,
      top: 0,
      width: 88.419,
      height: 50.527
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 45.472 0 C 36.968 0 29.444 4.203 24.866 10.644 C 23.371 10.292 21.813 10.105 20.211 10.105 C 9.049 10.105 0 19.154 0 30.316 C 0 41.478 9.049 50.527 20.211 50.527 L 20.309 50.526 L 70.735 50.526 L 70.735 50.526 C 80.502 50.526 88.419 42.609 88.419 32.842 C 88.419 23.075 80.502 15.158 70.735 15.158 C 70.041 15.158 69.357 15.198 68.684 15.275 C 64.813 6.29 55.877 0 45.472 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 10.105,
      width: 40.421,
      height: 40.421,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(178,204,255) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20.211,
      top: 0,
      width: 50.526,
      height: 50.526,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(178,204,255) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 53.053,
      top: 15.158,
      width: 35.368,
      height: 35.368,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(178,204,255) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.633,
      top: 11.053,
      width: 7.895,
      height: 7.895,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.684,
      top: 80.527,
      width: 11.053,
      height: 11.053,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 108.945,
      top: 22.105,
      width: 11.053,
      height: 11.053,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 102.633,
      top: 3.158,
      width: 6.316,
      height: 6.316,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 41.055,
      top: 48.948,
      width: 37.895,
      height: 37.895,
      borderRadius: 18.94736671447754,
      backgroundColor: "rgba(0,78,235,0.4)",
      backdropFilter: "blur(6.316px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.471,
      top: 9.473,
      width: 18.947,
      height: 18.947
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(1.184, 1.184)",
      transformOrigin: "0 0"
    }
  }))));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 80,
      height: 62.105,
      position: "relative",
      color: "rgb(239,244,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.631,
      top: 0,
      width: 54.737,
      height: 54.737,
      borderRadius: "50%",
      backgroundColor: "rgb(178,204,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.525,
      top: 8.421,
      width: 58.947,
      height: 33.684,
      boxShadow: "0px 10.526px 12.632px -2.105px rgba(16,24,40,0.08), 0px 4.211px 4.211px -2.105px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 58.946,
    height: 33.684,
    viewBox: "0 0 58.946 33.684",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.004,
      top: 0,
      width: 58.946,
      height: 33.684
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 30.316 0 C 24.646 0 19.63 2.802 16.578 7.096 C 15.581 6.861 14.542 6.737 13.474 6.737 C 6.032 6.737 0 12.769 0 20.211 C 0 27.652 6.032 33.684 13.474 33.684 L 13.532 33.684 L 47.158 33.684 L 47.158 33.684 C 53.668 33.684 58.946 28.406 58.946 21.895 C 58.946 15.384 53.668 10.105 47.157 10.105 C 46.695 10.105 46.239 10.132 45.79 10.184 C 43.209 4.193 37.252 0 30.316 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 6.737,
      width: 26.947,
      height: 26.947,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(178,204,255) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13.475,
      top: 0,
      width: 33.684,
      height: 33.684,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(178,204,255) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 35.368,
      top: 10.105,
      width: 23.579,
      height: 23.579,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(178,204,255) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.422,
      top: 7.368,
      width: 5.263,
      height: 5.263,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.789,
      top: 53.684,
      width: 7.368,
      height: 7.368,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 72.631,
      top: 14.737,
      width: 7.368,
      height: 7.368,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 68.422,
      top: 2.105,
      width: 4.211,
      height: 4.211,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.369,
      top: 32.631,
      width: 25.263,
      height: 25.263,
      borderRadius: 12.631579399108887,
      backgroundColor: "rgba(0,78,235,0.4)",
      backdropFilter: "blur(4.211px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.314,
      top: 6.316,
      width: 12.632,
      height: 12.632
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(0.789, 0.789)",
      transformOrigin: "0 0"
    }
  }))));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48,
      height: 37.263,
      position: "relative",
      color: "rgb(239,244,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.579,
      top: 0,
      width: 32.842,
      height: 32.842,
      borderRadius: "50%",
      backgroundColor: "rgb(178,204,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.315,
      top: 5.053,
      width: 35.368,
      height: 20.211,
      boxShadow: "0px 6.316px 7.579px -1.263px rgba(16,24,40,0.08), 0px 2.526px 2.526px -1.263px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 35.368,
    height: 20.211,
    viewBox: "0 0 35.368 20.211",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.003,
      top: 0,
      width: 35.368,
      height: 20.211
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.189 0 C 14.787 0 11.778 1.681 9.947 4.258 C 9.349 4.117 8.725 4.042 8.084 4.042 C 3.619 4.042 0 7.662 0 12.126 C 0 16.591 3.619 20.211 8.084 20.211 L 8.125 20.211 L 28.269 20.211 C 28.278 20.211 28.286 20.211 28.295 20.211 C 32.201 20.211 35.368 17.044 35.368 13.137 C 35.368 9.23 32.201 6.063 28.295 6.063 C 28.017 6.063 27.743 6.079 27.474 6.11 C 25.926 2.516 22.351 0 18.189 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 4.042,
      width: 16.168,
      height: 16.168,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(178,204,255) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.086,
      top: 0,
      width: 20.211,
      height: 20.211,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(178,204,255) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 21.221,
      top: 6.063,
      width: 14.147,
      height: 14.147,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(178,204,255) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.052,
      top: 4.421,
      width: 3.158,
      height: 3.158,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.474,
      top: 32.211,
      width: 4.421,
      height: 4.421,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 43.579,
      top: 8.842,
      width: 4.421,
      height: 4.421,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 41.052,
      top: 1.263,
      width: 2.526,
      height: 2.526,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16.421,
      top: 19.579,
      width: 15.158,
      height: 15.158,
      borderRadius: 7.5789475440979,
      backgroundColor: "rgba(0,78,235,0.4)",
      backdropFilter: "blur(2.526px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.789,
      top: 3.79,
      width: 7.579,
      height: 7.579
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(0.474, 0.474)",
      transformOrigin: "0 0"
    }
  }))));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 152,
      height: 118,
      position: "relative",
      color: "rgb(239,244,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 0,
      width: 104,
      height: 104,
      borderRadius: "50%",
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20,
      top: 16,
      width: 112,
      height: 64,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 112,
    height: 64,
    viewBox: "0 0 112 64",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 112,
      height: 64
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 57.6 0 C 46.827 0 37.298 5.323 31.499 13.483 C 29.605 13.036 27.63 12.8 25.6 12.8 C 11.462 12.8 0 24.262 0 38.4 C 0 52.538 11.462 64 25.6 64 L 89.6 64 C 101.971 64 112 53.971 112 41.6 C 112 29.229 101.971 19.2 89.6 19.2 C 88.721 19.2 87.854 19.251 87.002 19.349 C 82.098 7.968 70.78 0 57.6 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 12.8,
      width: 51.2,
      height: 51.2,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(208,213,221) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 25.6,
      top: 0,
      width: 64,
      height: 64,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(208,213,221) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 67.199,
      top: 19.2,
      width: 44.8,
      height: 44.8,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(208,213,221) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 14,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11,
      top: 102,
      width: 14,
      height: 14,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 138,
      top: 28,
      width: 14,
      height: 14,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 130,
      top: 4,
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 52,
      top: 62,
      width: 48,
      height: 48,
      borderRadius: 36,
      backgroundColor: "rgba(52,64,84,0.4)",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: 12,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0"
    }
  }))));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 120,
      height: 93.158,
      position: "relative",
      color: "rgb(239,244,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18.945,
      top: 0,
      width: 82.105,
      height: 82.105,
      borderRadius: "50%",
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.789,
      top: 12.631,
      width: 88.421,
      height: 50.526,
      boxShadow: "0px 15.789px 18.947px -3.158px rgba(16,24,40,0.08), 0px 6.316px 6.316px -3.158px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 88.421,
    height: 50.526,
    viewBox: "0 0 88.421 50.526",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 88.421,
      height: 50.526
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 45.474 0 C 36.969 0 29.446 4.203 24.867 10.644 C 23.372 10.292 21.813 10.105 20.211 10.105 C 9.049 10.105 0 19.154 0 30.316 C 0 41.478 9.049 50.526 20.211 50.526 L 70.737 50.526 C 80.504 50.526 88.421 42.609 88.421 32.842 C 88.421 23.075 80.504 15.158 70.737 15.158 C 70.043 15.158 69.359 15.198 68.686 15.276 C 64.814 6.29 55.879 0 45.474 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 10.105,
      width: 40.421,
      height: 40.421,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(208,213,221) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 20.211,
      top: 0,
      width: 50.526,
      height: 50.526,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(208,213,221) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 53.053,
      top: 15.158,
      width: 35.368,
      height: 35.368,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(208,213,221) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.633,
      top: 11.053,
      width: 7.895,
      height: 7.895,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.684,
      top: 80.526,
      width: 11.053,
      height: 11.053,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 108.945,
      top: 22.105,
      width: 11.053,
      height: 11.053,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 102.633,
      top: 3.158,
      width: 6.316,
      height: 6.316,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 41.055,
      top: 48.947,
      width: 37.895,
      height: 37.895,
      borderRadius: 28.421051025390625,
      backgroundColor: "rgba(52,64,84,0.4)",
      backdropFilter: "blur(6.316px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.471,
      top: 9.474,
      width: 18.947,
      height: 18.947
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(1.184, 1.184)",
      transformOrigin: "0 0"
    }
  }))));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 80,
      height: 62.105,
      position: "relative",
      color: "rgb(239,244,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.631,
      top: 0,
      width: 54.737,
      height: 54.737,
      borderRadius: "50%",
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.525,
      top: 8.421,
      width: 58.947,
      height: 33.684,
      boxShadow: "0px 10.526px 12.632px -2.105px rgba(16,24,40,0.08), 0px 4.211px 4.211px -2.105px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 58.947,
    height: 33.684,
    viewBox: "0 0 58.947 33.684",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 58.947,
      height: 33.684
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 30.316 0 C 24.646 0 19.63 2.802 16.578 7.096 C 15.582 6.861 14.542 6.737 13.474 6.737 C 6.032 6.737 0 12.769 0 20.211 C 0 27.652 6.032 33.684 13.474 33.684 L 47.158 33.684 C 53.669 33.684 58.947 28.406 58.947 21.895 C 58.947 15.384 53.669 10.105 47.158 10.105 C 46.695 10.105 46.239 10.132 45.791 10.184 C 43.21 4.194 37.252 0 30.316 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 6.737,
      width: 26.947,
      height: 26.947,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(208,213,221) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13.475,
      top: 0,
      width: 33.684,
      height: 33.684,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(208,213,221) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 35.368,
      top: 10.105,
      width: 23.579,
      height: 23.579,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(208,213,221) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.422,
      top: 7.368,
      width: 5.263,
      height: 5.263,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.789,
      top: 53.684,
      width: 7.368,
      height: 7.368,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 72.631,
      top: 14.737,
      width: 7.368,
      height: 7.368,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 68.422,
      top: 2.105,
      width: 4.211,
      height: 4.211,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.369,
      top: 32.631,
      width: 25.263,
      height: 25.263,
      borderRadius: 18.947370529174805,
      backgroundColor: "rgba(52,64,84,0.4)",
      backdropFilter: "blur(4.211px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.314,
      top: 6.316,
      width: 12.632,
      height: 12.632
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(0.789, 0.789)",
      transformOrigin: "0 0"
    }
  }))));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48,
      height: 37.263,
      position: "relative",
      color: "rgb(239,244,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.579,
      top: 0,
      width: 32.842,
      height: 32.842,
      borderRadius: "50%",
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.315,
      top: 5.052,
      width: 35.368,
      height: 20.211,
      boxShadow: "0px 6.316px 7.579px -1.263px rgba(16,24,40,0.08), 0px 2.526px 2.526px -1.263px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 35.368,
    height: 20.211,
    viewBox: "0 0 35.368 20.211",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 35.368,
      height: 20.211
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.189 0 C 14.788 0 11.778 1.681 9.947 4.258 C 9.349 4.117 8.725 4.042 8.084 4.042 C 3.619 4.042 0 7.662 0 12.126 C 0 16.591 3.619 20.211 8.084 20.211 L 28.295 20.211 C 32.201 20.211 35.368 17.044 35.368 13.137 C 35.368 9.23 32.201 6.063 28.295 6.063 C 28.017 6.063 27.743 6.079 27.474 6.11 C 25.926 2.516 22.351 0 18.189 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 4.042,
      width: 16.168,
      height: 16.168,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(208,213,221) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.086,
      top: 0,
      width: 20.211,
      height: 20.211,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(208,213,221) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 21.221,
      top: 6.063,
      width: 14.147,
      height: 14.147,
      borderRadius: "50%",
      background: "linear-gradient(133.210deg, rgb(208,213,221) 14.20%, rgba(255,255,255,0) 44.29%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.052,
      top: 4.421,
      width: 3.158,
      height: 3.158,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.474,
      top: 32.21,
      width: 4.421,
      height: 4.421,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 43.579,
      top: 8.842,
      width: 4.421,
      height: 4.421,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 41.052,
      top: 1.263,
      width: 2.526,
      height: 2.526,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16.421,
      top: 19.579,
      width: 15.158,
      height: 15.158,
      borderRadius: 11.36842155456543,
      backgroundColor: "rgba(52,64,84,0.4)",
      backdropFilter: "blur(2.526px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.789,
      top: 3.79,
      width: 7.579,
      height: 7.579
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(0.474, 0.474)",
      transformOrigin: "0 0"
    }
  }))));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 152,
      height: 118,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 0,
      width: 104,
      height: 104,
      borderRadius: "50%",
      backgroundColor: "rgb(178,204,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13.439,
      top: 8,
      width: 124.56,
      height: 72.519
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.906,-0.423,0.423,0.906,0,18.337)",
      transformOrigin: "0 0",
      width: 43.343,
      height: 59.783,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 43.343,
    height: 59.783,
    viewBox: "0 0 43.343 59.783",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 43.343,
      height: 59.783,
      borderRadius: 3.3340587615966797
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.334 59.783 L 40.009 59.783 C 41.85 59.783 43.343 58.29 43.343 56.449 L 43.343 10.002 L 33.341 0 L 3.334 0 C 1.493 0 0 1.493 0 3.334 L 0 56.449 C 0 58.29 1.493 59.783 3.334 59.783 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.002,
    height: 10.002,
    viewBox: "0 0 10.002 10.002",
    fill: "none",
    style: {
      position: "absolute",
      left: 33.34,
      top: 0,
      width: 10.002,
      height: 10.002,
      color: "rgb(132,173,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 10.002 10.002 L 0 10.002 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40.842,
      top: 0,
      width: 43.343,
      height: 59.783,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 43.343,
    height: 59.783,
    viewBox: "0 0 43.343 59.783",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 43.343,
      height: 59.783,
      borderRadius: 3.3340587615966797
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.334 59.783 L 40.009 59.783 C 41.85 59.783 43.343 58.29 43.343 56.449 L 43.343 10.002 L 33.341 0 L 3.334 0 C 1.493 0 0 1.493 0 3.334 L 0 56.449 C 0 58.29 1.493 59.783 3.334 59.783 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.002,
    height: 10.002,
    viewBox: "0 0 10.002 10.002",
    fill: "none",
    style: {
      position: "absolute",
      left: 33.34,
      top: 0,
      width: 10.002,
      height: 10.002,
      color: "rgb(132,173,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 10.002 10.002 L 0 10.002 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.906,0.423,-0.423,0.906,85.279,0)",
      transformOrigin: "0 0",
      width: 43.343,
      height: 59.783,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 43.343,
    height: 59.783,
    viewBox: "0 0 43.343 59.783",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 43.343,
      height: 59.783,
      borderRadius: 3.3340587615966797
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.334 59.783 L 40.009 59.783 C 41.85 59.783 43.343 58.29 43.343 56.449 L 43.343 10.002 L 33.341 0 L 3.334 0 C 1.493 0 0 1.493 0 3.334 L 0 56.449 C 0 58.29 1.493 59.783 3.334 59.783 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.002,
    height: 10.002,
    viewBox: "0 0 10.002 10.002",
    fill: "none",
    style: {
      position: "absolute",
      left: 33.341,
      top: 0,
      width: 10.002,
      height: 10.002,
      color: "rgb(132,173,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 10.002 10.002 L 0 10.002 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 6,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11,
      top: 102,
      width: 14,
      height: 14,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 138,
      top: 28,
      width: 14,
      height: 14,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 130,
      top: 4,
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 52,
      top: 62,
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: "rgba(0,78,235,0.4)",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: 12,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0"
    }
  }))));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 120,
      height: 93.158,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18.945,
      top: 0,
      width: 82.105,
      height: 82.105,
      borderRadius: "50%",
      backgroundColor: "rgb(178,204,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.611,
      top: 6.316,
      width: 98.337,
      height: 57.252
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.906,-0.423,0.423,0.906,0,14.477)",
      transformOrigin: "0 0",
      width: 34.218,
      height: 47.197,
      boxShadow: "0px 15.789px 18.947px -3.158px rgba(16,24,40,0.08), 0px 6.316px 6.316px -3.158px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 34.218,
    height: 47.197,
    viewBox: "0 0 34.218 47.197",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 34.218,
      height: 47.197,
      borderRadius: 2.6321513652801514
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.632 47.197 L 31.586 47.197 C 33.04 47.197 34.218 46.019 34.218 44.565 L 34.218 7.896 L 26.322 0 L 2.632 0 C 1.178 0 0 1.178 0 2.632 L 0 44.565 C 0 46.019 1.178 47.197 2.632 47.197 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.896,
    height: 7.896,
    viewBox: "0 0 7.896 7.896",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.32,
      top: -0.001,
      width: 7.896,
      height: 7.896,
      color: "rgb(132,173,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 7.896 7.896 L 0 7.896 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32.24,
      top: 0,
      width: 34.218,
      height: 47.197,
      boxShadow: "0px 15.789px 18.947px -3.158px rgba(16,24,40,0.08), 0px 6.316px 6.316px -3.158px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 34.218,
    height: 47.197,
    viewBox: "0 0 34.218 47.197",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 34.218,
      height: 47.197,
      borderRadius: 2.6321513652801514
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.632 47.197 L 31.586 47.197 C 33.04 47.197 34.218 46.019 34.218 44.565 L 34.218 7.896 L 26.322 0 L 2.632 0 C 1.178 0 0 1.178 0 2.632 L 0 44.565 C 0 46.019 1.178 47.197 2.632 47.197 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.896,
    height: 7.896,
    viewBox: "0 0 7.896 7.896",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.324,
      top: 0,
      width: 7.896,
      height: 7.896,
      color: "rgb(132,173,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 7.896 7.896 L 0 7.896 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.906,0.423,-0.423,0.906,67.324,-0.000)",
      transformOrigin: "0 0",
      width: 34.218,
      height: 47.197,
      boxShadow: "0px 15.789px 18.947px -3.158px rgba(16,24,40,0.08), 0px 6.316px 6.316px -3.158px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 34.218,
    height: 47.197,
    viewBox: "0 0 34.218 47.197",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 34.218,
      height: 47.197,
      borderRadius: 2.6321513652801514
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.632 47.197 L 31.586 47.197 C 33.04 47.197 34.218 46.019 34.218 44.565 L 34.218 7.896 L 26.322 0 L 2.632 0 C 1.178 0 0 1.178 0 2.632 L 0 44.565 C 0 46.019 1.178 47.197 2.632 47.197 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.896,
    height: 7.896,
    viewBox: "0 0 7.896 7.896",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.322,
      top: 0,
      width: 7.896,
      height: 7.896,
      color: "rgb(132,173,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 7.896 7.896 L 0 7.896 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.633,
      top: 4.737,
      width: 7.895,
      height: 7.895,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.684,
      top: 80.526,
      width: 11.053,
      height: 11.053,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 108.945,
      top: 22.105,
      width: 11.053,
      height: 11.053,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 102.633,
      top: 3.158,
      width: 6.316,
      height: 6.316,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 41.055,
      top: 48.948,
      width: 37.895,
      height: 37.895,
      borderRadius: 18.94736671447754,
      backgroundColor: "rgba(0,78,235,0.4)",
      backdropFilter: "blur(6.316px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.471,
      top: 9.474,
      width: 18.947,
      height: 18.947
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(1.184, 1.184)",
      transformOrigin: "0 0"
    }
  }))));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 80,
      height: 62.105,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.631,
      top: 0,
      width: 54.737,
      height: 54.737,
      borderRadius: "50%",
      backgroundColor: "rgb(178,204,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.075,
      top: 4.211,
      width: 65.558,
      height: 38.168
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.906,-0.423,0.423,0.906,0.001,9.651)",
      transformOrigin: "0 0",
      width: 22.812,
      height: 31.465,
      boxShadow: "0px 10.526px 12.632px -2.105px rgba(16,24,40,0.08), 0px 4.211px 4.211px -2.105px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22.812,
    height: 31.465,
    viewBox: "0 0 22.812 31.465",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: 0,
      width: 22.812,
      height: 31.465,
      borderRadius: 1.7547677755355835
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.755 31.465 L 21.057 31.465 C 22.026 31.465 22.812 30.679 22.812 29.71 L 22.812 5.264 L 17.548 0 L 1.755 0 C 0.786 0 0 0.786 0 1.755 L 0 29.71 C 0 30.679 0.786 31.465 1.755 31.465 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.264,
    height: 5.264,
    viewBox: "0 0 5.264 5.264",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.546,
      top: 0,
      width: 5.264,
      height: 5.264,
      color: "rgb(132,173,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5.264 5.264 L 0 5.264 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 21.495,
      top: 0,
      width: 22.812,
      height: 31.465,
      boxShadow: "0px 10.526px 12.632px -2.105px rgba(16,24,40,0.08), 0px 4.211px 4.211px -2.105px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22.812,
    height: 31.465,
    viewBox: "0 0 22.812 31.465",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22.812,
      height: 31.465,
      borderRadius: 1.7547677755355835
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.755 31.465 L 21.057 31.465 C 22.026 31.465 22.812 30.679 22.812 29.71 L 22.812 5.264 L 17.548 0 L 1.755 0 C 0.786 0 0 0.786 0 1.755 L 0 29.71 C 0 30.679 0.786 31.465 1.755 31.465 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.264,
    height: 5.264,
    viewBox: "0 0 5.264 5.264",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.549,
      top: 0,
      width: 5.264,
      height: 5.264,
      color: "rgb(132,173,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5.264 5.264 L 0 5.264 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.906,0.423,-0.423,0.906,44.884,0)",
      transformOrigin: "0 0",
      width: 22.812,
      height: 31.465,
      boxShadow: "0px 10.526px 12.632px -2.105px rgba(16,24,40,0.08), 0px 4.211px 4.211px -2.105px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22.812,
    height: 31.465,
    viewBox: "0 0 22.812 31.465",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: 0,
      width: 22.812,
      height: 31.465,
      borderRadius: 1.7547677755355835
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.755 31.465 L 21.057 31.465 C 22.026 31.465 22.812 30.679 22.812 29.71 L 22.812 5.264 L 17.548 0 L 1.755 0 C 0.786 0 0 0.786 0 1.755 L 0 29.71 C 0 30.679 0.786 31.465 1.755 31.465 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.264,
    height: 5.264,
    viewBox: "0 0 5.264 5.264",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.548,
      top: 0,
      width: 5.264,
      height: 5.264,
      color: "rgb(132,173,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5.264 5.264 L 0 5.264 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.422,
      top: 3.158,
      width: 5.263,
      height: 5.263,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.789,
      top: 53.684,
      width: 7.368,
      height: 7.368,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 72.631,
      top: 14.737,
      width: 7.368,
      height: 7.368,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 68.422,
      top: 2.105,
      width: 4.211,
      height: 4.211,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.369,
      top: 32.632,
      width: 25.263,
      height: 25.263,
      borderRadius: 12.631579399108887,
      backgroundColor: "rgba(0,78,235,0.4)",
      backdropFilter: "blur(4.211px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.314,
      top: 6.316,
      width: 12.632,
      height: 12.632
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(0.789, 0.789)",
      transformOrigin: "0 0"
    }
  }))));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48,
      height: 37.263,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.579,
      top: 0,
      width: 32.842,
      height: 32.842,
      borderRadius: "50%",
      backgroundColor: "rgb(178,204,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.246,
      top: 2.527,
      width: 39.335,
      height: 22.901
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.906,-0.423,0.423,0.906,-0.001,5.791)",
      transformOrigin: "0 0",
      width: 13.687,
      height: 18.879,
      boxShadow: "0px 6.316px 7.579px -1.263px rgba(16,24,40,0.08), 0px 2.526px 2.526px -1.263px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.687,
    height: 18.879,
    viewBox: "0 0 13.687 18.879",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.687,
      height: 18.879,
      borderRadius: 1.0528606176376343
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.053 18.879 L 12.634 18.879 C 13.216 18.879 13.687 18.407 13.687 17.826 L 13.687 3.159 L 10.529 0 L 1.053 0 C 0.471 0 0 0.471 0 1.053 L 0 17.826 C 0 18.407 0.471 18.879 1.053 18.879 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.159,
    height: 3.159,
    viewBox: "0 0 3.159 3.159",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.527,
      top: -0.001,
      width: 3.159,
      height: 3.159,
      color: "rgb(132,173,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 3.159 3.159 L 0 3.159 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.895,
      top: 0,
      width: 13.687,
      height: 18.879,
      boxShadow: "0px 6.316px 7.579px -1.263px rgba(16,24,40,0.08), 0px 2.526px 2.526px -1.263px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.687,
    height: 18.879,
    viewBox: "0 0 13.687 18.879",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: 0,
      width: 13.687,
      height: 18.879,
      borderRadius: 1.0528606176376343
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.053 18.879 L 12.634 18.879 C 13.216 18.879 13.687 18.407 13.687 17.826 L 13.687 3.159 L 10.529 0 L 1.053 0 C 0.471 0 0 0.471 0 1.053 L 0 17.826 C 0 18.407 0.471 18.879 1.053 18.879 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.159,
    height: 3.159,
    viewBox: "0 0 3.159 3.159",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.529,
      top: 0,
      width: 3.159,
      height: 3.159,
      color: "rgb(132,173,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 3.159 3.159 L 0 3.159 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.906,0.423,-0.423,0.906,26.929,0)",
      transformOrigin: "0 0",
      width: 13.687,
      height: 18.879,
      boxShadow: "0px 6.316px 7.579px -1.263px rgba(16,24,40,0.08), 0px 2.526px 2.526px -1.263px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.687,
    height: 18.879,
    viewBox: "0 0 13.687 18.879",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: 0,
      width: 13.687,
      height: 18.879,
      borderRadius: 1.0528606176376343
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.053 18.879 L 12.634 18.879 C 13.216 18.879 13.687 18.407 13.687 17.826 L 13.687 3.159 L 10.529 0 L 1.053 0 C 0.471 0 0 0.471 0 1.053 L 0 17.826 C 0 18.407 0.471 18.879 1.053 18.879 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.159,
    height: 3.159,
    viewBox: "0 0 3.159 3.159",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.527,
      top: 0.001,
      width: 3.159,
      height: 3.159,
      color: "rgb(132,173,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 3.159 3.159 L 0 3.159 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.052,
      top: 1.895,
      width: 3.158,
      height: 3.158,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.474,
      top: 32.211,
      width: 4.421,
      height: 4.421,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 43.579,
      top: 8.842,
      width: 4.421,
      height: 4.421,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 41.052,
      top: 1.263,
      width: 2.526,
      height: 2.526,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16.421,
      top: 19.579,
      width: 15.158,
      height: 15.158,
      borderRadius: 7.5789475440979,
      backgroundColor: "rgba(0,78,235,0.4)",
      backdropFilter: "blur(2.526px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.789,
      top: 3.79,
      width: 7.579,
      height: 7.579
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(0.474, 0.474)",
      transformOrigin: "0 0"
    }
  }))));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 152,
      height: 118,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 0,
      width: 104,
      height: 104,
      borderRadius: "50%",
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 13.439,
      top: 8,
      width: 124.56,
      height: 72.519
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.906,-0.423,0.423,0.906,0,18.337)",
      transformOrigin: "0 0",
      width: 43.343,
      height: 59.783,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 43.343,
    height: 59.783,
    viewBox: "0 0 43.343 59.783",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 43.343,
      height: 59.783,
      borderRadius: 3.3340587615966797
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.334 59.783 L 40.009 59.783 C 41.85 59.783 43.343 58.29 43.343 56.449 L 43.343 10.002 L 33.341 0 L 3.334 0 C 1.493 0 0 1.493 0 3.334 L 0 56.449 C 0 58.29 1.493 59.783 3.334 59.783 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.002,
    height: 10.002,
    viewBox: "0 0 10.002 10.002",
    fill: "none",
    style: {
      position: "absolute",
      left: 33.34,
      top: 0,
      width: 10.002,
      height: 10.002,
      color: "rgb(208,213,221)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 10.002 10.002 L 0 10.002 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40.842,
      top: 0,
      width: 43.343,
      height: 59.783,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 43.343,
    height: 59.783,
    viewBox: "0 0 43.343 59.783",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 43.343,
      height: 59.783,
      borderRadius: 3.3340587615966797
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.334 59.783 L 40.009 59.783 C 41.85 59.783 43.343 58.29 43.343 56.449 L 43.343 10.002 L 33.341 0 L 3.334 0 C 1.493 0 0 1.493 0 3.334 L 0 56.449 C 0 58.29 1.493 59.783 3.334 59.783 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.002,
    height: 10.002,
    viewBox: "0 0 10.002 10.002",
    fill: "none",
    style: {
      position: "absolute",
      left: 33.34,
      top: 0,
      width: 10.002,
      height: 10.002,
      color: "rgb(208,213,221)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 10.002 10.002 L 0 10.002 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.906,0.423,-0.423,0.906,85.279,0)",
      transformOrigin: "0 0",
      width: 43.343,
      height: 59.783,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 43.343,
    height: 59.783,
    viewBox: "0 0 43.343 59.783",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 43.343,
      height: 59.783,
      borderRadius: 3.3340587615966797
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.334 59.783 L 40.009 59.783 C 41.85 59.783 43.343 58.29 43.343 56.449 L 43.343 10.002 L 33.341 0 L 3.334 0 C 1.493 0 0 1.493 0 3.334 L 0 56.449 C 0 58.29 1.493 59.783 3.334 59.783 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.002,
    height: 10.002,
    viewBox: "0 0 10.002 10.002",
    fill: "none",
    style: {
      position: "absolute",
      left: 33.341,
      top: 0,
      width: 10.002,
      height: 10.002,
      color: "rgb(208,213,221)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 10.002 10.002 L 0 10.002 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 6,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11,
      top: 102,
      width: 14,
      height: 14,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 138,
      top: 28,
      width: 14,
      height: 14,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 130,
      top: 4,
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 52,
      top: 62,
      width: 48,
      height: 48,
      borderRadius: 36,
      backgroundColor: "rgba(52,64,84,0.4)",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: 12,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0"
    }
  }))));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 120,
      height: 93.158,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18.945,
      top: 0,
      width: 82.105,
      height: 82.105,
      borderRadius: "50%",
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.611,
      top: 6.316,
      width: 98.337,
      height: 57.252
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.906,-0.423,0.423,0.906,0,14.477)",
      transformOrigin: "0 0",
      width: 34.218,
      height: 47.197,
      boxShadow: "0px 15.789px 18.947px -3.158px rgba(16,24,40,0.08), 0px 6.316px 6.316px -3.158px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 34.218,
    height: 47.197,
    viewBox: "0 0 34.218 47.197",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 34.218,
      height: 47.197,
      borderRadius: 2.6321513652801514
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.632 47.197 L 31.586 47.197 C 33.04 47.197 34.218 46.019 34.218 44.565 L 34.218 7.896 L 26.322 0 L 2.632 0 C 1.178 0 0 1.178 0 2.632 L 0 44.565 C 0 46.019 1.178 47.197 2.632 47.197 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.896,
    height: 7.896,
    viewBox: "0 0 7.896 7.896",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.32,
      top: -0.001,
      width: 7.896,
      height: 7.896,
      color: "rgb(208,213,221)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 7.896 7.896 L 0 7.896 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32.24,
      top: 0,
      width: 34.218,
      height: 47.197,
      boxShadow: "0px 15.789px 18.947px -3.158px rgba(16,24,40,0.08), 0px 6.316px 6.316px -3.158px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 34.218,
    height: 47.197,
    viewBox: "0 0 34.218 47.197",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 34.218,
      height: 47.197,
      borderRadius: 2.6321513652801514
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.632 47.197 L 31.586 47.197 C 33.04 47.197 34.218 46.019 34.218 44.565 L 34.218 7.896 L 26.322 0 L 2.632 0 C 1.178 0 0 1.178 0 2.632 L 0 44.565 C 0 46.019 1.178 47.197 2.632 47.197 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.896,
    height: 7.896,
    viewBox: "0 0 7.896 7.896",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.324,
      top: 0,
      width: 7.896,
      height: 7.896,
      color: "rgb(208,213,221)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 7.896 7.896 L 0 7.896 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.906,0.423,-0.423,0.906,67.324,0)",
      transformOrigin: "0 0",
      width: 34.218,
      height: 47.197,
      boxShadow: "0px 15.789px 18.947px -3.158px rgba(16,24,40,0.08), 0px 6.316px 6.316px -3.158px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 34.218,
    height: 47.197,
    viewBox: "0 0 34.218 47.197",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 34.218,
      height: 47.197,
      borderRadius: 2.6321513652801514
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.632 47.197 L 31.586 47.197 C 33.04 47.197 34.218 46.019 34.218 44.565 L 34.218 7.896 L 26.322 0 L 2.632 0 C 1.178 0 0 1.178 0 2.632 L 0 44.565 C 0 46.019 1.178 47.197 2.632 47.197 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.896,
    height: 7.896,
    viewBox: "0 0 7.896 7.896",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.323,
      top: -0.001,
      width: 7.896,
      height: 7.896,
      color: "rgb(208,213,221)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 7.896 7.896 L 0 7.896 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.633,
      top: 4.737,
      width: 7.895,
      height: 7.895,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.684,
      top: 80.526,
      width: 11.053,
      height: 11.053,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 108.945,
      top: 22.105,
      width: 11.053,
      height: 11.053,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 102.633,
      top: 3.158,
      width: 6.316,
      height: 6.316,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 41.055,
      top: 48.948,
      width: 37.895,
      height: 37.895,
      borderRadius: 28.421051025390625,
      backgroundColor: "rgba(52,64,84,0.4)",
      backdropFilter: "blur(6.316px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.471,
      top: 9.473,
      width: 18.947,
      height: 18.947
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(1.184, 1.184)",
      transformOrigin: "0 0"
    }
  }))));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 80,
      height: 62.105,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.631,
      top: 0,
      width: 54.737,
      height: 54.737,
      borderRadius: "50%",
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.075,
      top: 4.21,
      width: 65.558,
      height: 38.168
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.906,-0.423,0.423,0.906,0.001,9.651)",
      transformOrigin: "0 0",
      width: 22.812,
      height: 31.465,
      boxShadow: "0px 10.526px 12.632px -2.105px rgba(16,24,40,0.08), 0px 4.211px 4.211px -2.105px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22.812,
    height: 31.465,
    viewBox: "0 0 22.812 31.465",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: 0,
      width: 22.812,
      height: 31.465,
      borderRadius: 1.7547677755355835
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.755 31.465 L 21.057 31.465 C 22.026 31.465 22.812 30.679 22.812 29.71 L 22.812 5.264 L 17.548 0 L 1.755 0 C 0.786 0 0 0.786 0 1.755 L 0 29.71 C 0 30.679 0.786 31.465 1.755 31.465 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.264,
    height: 5.264,
    viewBox: "0 0 5.264 5.264",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.546,
      top: 0,
      width: 5.264,
      height: 5.264,
      color: "rgb(208,213,221)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5.264 5.264 L 0 5.264 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 21.495,
      top: 0,
      width: 22.812,
      height: 31.465,
      boxShadow: "0px 10.526px 12.632px -2.105px rgba(16,24,40,0.08), 0px 4.211px 4.211px -2.105px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22.812,
    height: 31.465,
    viewBox: "0 0 22.812 31.465",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22.812,
      height: 31.465,
      borderRadius: 1.7547677755355835
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.755 31.465 L 21.057 31.465 C 22.026 31.465 22.812 30.679 22.812 29.71 L 22.812 5.264 L 17.548 0 L 1.755 0 C 0.786 0 0 0.786 0 1.755 L 0 29.71 C 0 30.679 0.786 31.465 1.755 31.465 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.264,
    height: 5.264,
    viewBox: "0 0 5.264 5.264",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.549,
      top: 0,
      width: 5.264,
      height: 5.264,
      color: "rgb(208,213,221)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5.264 5.264 L 0 5.264 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.906,0.423,-0.423,0.906,44.884,0.000)",
      transformOrigin: "0 0",
      width: 22.812,
      height: 31.465,
      boxShadow: "0px 10.526px 12.632px -2.105px rgba(16,24,40,0.08), 0px 4.211px 4.211px -2.105px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22.812,
    height: 31.465,
    viewBox: "0 0 22.812 31.465",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: 0,
      width: 22.812,
      height: 31.465,
      borderRadius: 1.7547677755355835
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.755 31.465 L 21.057 31.465 C 22.026 31.465 22.812 30.679 22.812 29.71 L 22.812 5.264 L 17.548 0 L 1.755 0 C 0.786 0 0 0.786 0 1.755 L 0 29.71 C 0 30.679 0.786 31.465 1.755 31.465 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.264,
    height: 5.264,
    viewBox: "0 0 5.264 5.264",
    fill: "none",
    style: {
      position: "absolute",
      left: 17.548,
      top: 0,
      width: 5.264,
      height: 5.264,
      color: "rgb(208,213,221)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 5.264 5.264 L 0 5.264 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.422,
      top: 3.158,
      width: 5.263,
      height: 5.263,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.789,
      top: 53.684,
      width: 7.368,
      height: 7.368,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 72.631,
      top: 14.737,
      width: 7.368,
      height: 7.368,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 68.422,
      top: 2.105,
      width: 4.211,
      height: 4.211,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.369,
      top: 32.632,
      width: 25.263,
      height: 25.263,
      borderRadius: 18.947370529174805,
      backgroundColor: "rgba(52,64,84,0.4)",
      backdropFilter: "blur(4.211px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.314,
      top: 6.316,
      width: 12.632,
      height: 12.632
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(0.789, 0.789)",
      transformOrigin: "0 0"
    }
  }))));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48,
      height: 37.263,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.579,
      top: 0,
      width: 32.842,
      height: 32.842,
      borderRadius: "50%",
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 4.246,
      top: 2.526,
      width: 39.335,
      height: 22.901
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.906,-0.423,0.423,0.906,-0.001,5.791)",
      transformOrigin: "0 0",
      width: 13.687,
      height: 18.879,
      boxShadow: "0px 6.316px 7.579px -1.263px rgba(16,24,40,0.08), 0px 2.526px 2.526px -1.263px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.687,
    height: 18.879,
    viewBox: "0 0 13.687 18.879",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 13.687,
      height: 18.879,
      borderRadius: 1.0528606176376343
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.053 18.879 L 12.634 18.879 C 13.216 18.879 13.687 18.407 13.687 17.826 L 13.687 3.159 L 10.529 0 L 1.053 0 C 0.471 0 0 0.471 0 1.053 L 0 17.826 C 0 18.407 0.471 18.879 1.053 18.879 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.159,
    height: 3.159,
    viewBox: "0 0 3.159 3.159",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.527,
      top: -0.001,
      width: 3.159,
      height: 3.159,
      color: "rgb(208,213,221)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 3.159 3.159 L 0 3.159 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.895,
      top: 0,
      width: 13.687,
      height: 18.879,
      boxShadow: "0px 6.316px 7.579px -1.263px rgba(16,24,40,0.08), 0px 2.526px 2.526px -1.263px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.687,
    height: 18.879,
    viewBox: "0 0 13.687 18.879",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: 0,
      width: 13.687,
      height: 18.879,
      borderRadius: 1.0528606176376343
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.053 18.879 L 12.634 18.879 C 13.216 18.879 13.687 18.407 13.687 17.826 L 13.687 3.159 L 10.529 0 L 1.053 0 C 0.471 0 0 0.471 0 1.053 L 0 17.826 C 0 18.407 0.471 18.879 1.053 18.879 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.159,
    height: 3.159,
    viewBox: "0 0 3.159 3.159",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.529,
      top: 0,
      width: 3.159,
      height: 3.159,
      color: "rgb(208,213,221)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 3.159 3.159 L 0 3.159 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.906,0.423,-0.423,0.906,26.929,0)",
      transformOrigin: "0 0",
      width: 13.687,
      height: 18.879,
      boxShadow: "0px 6.316px 7.579px -1.263px rgba(16,24,40,0.08), 0px 2.526px 2.526px -1.263px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 13.687,
    height: 18.879,
    viewBox: "0 0 13.687 18.879",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: 0,
      width: 13.687,
      height: 18.879,
      borderRadius: 1.0528606176376343
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.053 18.879 L 12.634 18.879 C 13.216 18.879 13.687 18.407 13.687 17.826 L 13.687 3.159 L 10.529 0 L 1.053 0 C 0.471 0 0 0.471 0 1.053 L 0 17.826 C 0 18.407 0.471 18.879 1.053 18.879 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3.159,
    height: 3.159,
    viewBox: "0 0 3.159 3.159",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.527,
      top: 0.001,
      width: 3.159,
      height: 3.159,
      color: "rgb(208,213,221)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 3.159 3.159 L 0 3.159 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.052,
      top: 1.895,
      width: 3.158,
      height: 3.158,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.474,
      top: 32.21,
      width: 4.421,
      height: 4.421,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 43.579,
      top: 8.842,
      width: 4.421,
      height: 4.421,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 41.052,
      top: 1.263,
      width: 2.526,
      height: 2.526,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16.421,
      top: 19.579,
      width: 15.158,
      height: 15.158,
      borderRadius: 11.36842155456543,
      backgroundColor: "rgba(52,64,84,0.4)",
      backdropFilter: "blur(2.526px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.789,
      top: 3.79,
      width: 7.579,
      height: 7.579
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(0.474, 0.474)",
      transformOrigin: "0 0"
    }
  }))));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 152,
      height: 124,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 6,
      width: 104,
      height: 104,
      borderRadius: "50%",
      backgroundColor: "rgb(178,204,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 20,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11,
      top: 102,
      width: 14,
      height: 14,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 138,
      top: 34,
      width: 14,
      height: 14,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 130,
      top: 10,
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 34,
      top: 0,
      width: 84,
      height: 90.19,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 84,
    height: 90.190,
    viewBox: "0 0 84 90.190",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 84,
      height: 90.19,
      color: "rgb(239,244,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 42 36.063 L 46.536 34.163 L 42.001 36.095 L 42.001 90.19 L 83.796 72.675 L 83.796 18.557 L 84 18.471 L 83.796 18.381 L 83.796 18.29 L 83.692 18.335 L 42.33 0 L 0 18.031 L 0.2 18.117 L 0 72.017 L 42 90.158 L 42 36.063 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 42,
    height: 72.040,
    viewBox: "0 0 42 72.040",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 18.118,
      width: 42,
      height: 72.04
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 42 17.945 L 42 72.04 L 0 53.899 L 0.2 0 L 42 17.945 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 41.796,
    height: 71.900,
    viewBox: "0 0 41.796 71.900",
    fill: "none",
    style: {
      position: "absolute",
      left: 42,
      top: 18.29,
      width: 41.796,
      height: 71.9
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 17.805 L 0 71.9 L 41.796 54.385 L 41.796 0 L 0 17.805 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 84,
    height: 36.063,
    viewBox: "0 0 84 36.063",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 84,
      height: 36.063,
      color: "rgb(209,224,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 42 36.063 L 84 18.471 L 42.33 0 L 0 18.031 L 42 36.063 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 53.926,
    height: 35.953,
    viewBox: "0 0 53.926 35.953",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.832,
      top: 6.817,
      width: 53.926,
      height: 35.953,
      color: "rgb(178,204,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.47 L 41.84 22.682 L 42.22 35.953 L 53.926 31.123 L 53.572 17.768 L 10.495 0 L 0 4.47 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 52,
      top: 68,
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: "rgba(0,78,235,0.4)",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: 12,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0"
    }
  }))));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 120,
      height: 97.895,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18.945,
      top: 4.737,
      width: 82.105,
      height: 82.105,
      borderRadius: "50%",
      backgroundColor: "rgb(178,204,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.633,
      top: 15.789,
      width: 7.895,
      height: 7.895,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.684,
      top: 80.526,
      width: 11.053,
      height: 11.053,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 108.945,
      top: 26.842,
      width: 11.053,
      height: 11.053,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 102.633,
      top: 7.895,
      width: 6.316,
      height: 6.316,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.842,
      top: 0,
      width: 66.316,
      height: 71.202,
      boxShadow: "0px 15.789px 18.947px -3.158px rgba(16,24,40,0.08), 0px 6.316px 6.316px -3.158px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 66.316,
    height: 71.202,
    viewBox: "0 0 66.316 71.202",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 66.316,
      height: 71.202,
      color: "rgb(239,244,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 33.158 28.471 L 36.739 26.971 L 33.158 28.496 L 33.158 71.202 L 66.155 57.375 L 66.155 14.65 L 66.316 14.583 L 66.155 14.511 L 66.155 14.439 L 66.072 14.475 L 33.418 0 L 0 14.235 L 0.158 14.303 L 0 56.855 L 33.158 71.177 L 33.158 28.471 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 33.158,
    height: 56.874,
    viewBox: "0 0 33.158 56.874",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 14.303,
      width: 33.158,
      height: 56.874
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 33.158 14.167 L 33.158 56.874 L 0 42.552 L 0.158 0 L 33.158 14.167 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 32.997,
    height: 56.763,
    viewBox: "0 0 32.997 56.763",
    fill: "none",
    style: {
      position: "absolute",
      left: 33.158,
      top: 14.439,
      width: 32.997,
      height: 56.763
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14.057 L 0 56.763 L 32.997 42.936 L 32.997 0 L 0 14.057 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 66.316,
    height: 28.471,
    viewBox: "0 0 66.316 28.471",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 66.316,
      height: 28.471,
      color: "rgb(209,224,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 33.158 28.471 L 66.316 14.583 L 33.418 0 L 0 14.235 L 33.158 28.471 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 42.573,
    height: 28.384,
    viewBox: "0 0 42.573 28.384",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.498,
      top: 5.382,
      width: 42.573,
      height: 28.384,
      color: "rgb(178,204,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.529 L 33.031 17.907 L 33.331 28.384 L 42.573 24.57 L 42.294 14.027 L 8.285 0 L 0 3.529 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 41.055,
      top: 53.684,
      width: 37.895,
      height: 37.895,
      borderRadius: 18.94736671447754,
      backgroundColor: "rgba(0,78,235,0.4)",
      backdropFilter: "blur(6.316px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.471,
      top: 9.473,
      width: 18.947,
      height: 18.947
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(1.184, 1.184)",
      transformOrigin: "0 0"
    }
  }))));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 80,
      height: 65.263,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.631,
      top: 3.158,
      width: 54.737,
      height: 54.737,
      borderRadius: "50%",
      backgroundColor: "rgb(178,204,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.422,
      top: 10.526,
      width: 5.263,
      height: 5.263,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.789,
      top: 53.684,
      width: 7.368,
      height: 7.368,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 72.631,
      top: 17.895,
      width: 7.368,
      height: 7.368,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 68.422,
      top: 5.263,
      width: 4.211,
      height: 4.211,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 17.895,
      top: 0,
      width: 44.211,
      height: 47.468,
      boxShadow: "0px 10.526px 12.632px -2.105px rgba(16,24,40,0.08), 0px 4.211px 4.211px -2.105px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 44.211,
    height: 47.468,
    viewBox: "0 0 44.211 47.468",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: 0,
      width: 44.211,
      height: 47.468,
      color: "rgb(239,244,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 22.105 18.98 L 24.493 17.98 L 22.106 18.997 L 22.106 47.468 L 44.103 38.25 L 44.103 9.767 L 44.211 9.722 L 44.103 9.674 L 44.103 9.626 L 44.048 9.65 L 22.279 0 L 0 9.49 L 0.105 9.536 L 0 37.903 L 22.105 47.451 L 22.105 18.98 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 22.105,
    height: 37.916,
    viewBox: "0 0 22.105 37.916",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: 9.535,
      width: 22.105,
      height: 37.916
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 22.105 9.445 L 22.105 37.916 L 0 28.368 L 0.105 0 L 22.105 9.445 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 21.998,
    height: 37.842,
    viewBox: "0 0 21.998 37.842",
    fill: "none",
    style: {
      position: "absolute",
      left: 22.105,
      top: 9.626,
      width: 21.998,
      height: 37.842
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 9.371 L 0 37.842 L 21.998 28.624 L 21.998 0 L 0 9.371 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 44.211,
    height: 18.980,
    viewBox: "0 0 44.211 18.980",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: 0,
      width: 44.211,
      height: 18.98,
      color: "rgb(209,224,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 22.105 18.98 L 44.211 9.722 L 22.279 0 L 0 9.49 L 22.105 18.98 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 28.382,
    height: 18.923,
    viewBox: "0 0 28.382 18.923",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.332,
      top: 3.588,
      width: 28.382,
      height: 18.923,
      color: "rgb(178,204,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 2.353 L 22.021 11.938 L 22.221 18.923 L 28.382 16.38 L 28.196 9.351 L 5.523 0 L 0 2.353 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.369,
      top: 35.79,
      width: 25.263,
      height: 25.263,
      borderRadius: 12.631579399108887,
      backgroundColor: "rgba(0,78,235,0.4)",
      backdropFilter: "blur(4.211px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.314,
      top: 6.315,
      width: 12.632,
      height: 12.632
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(0.789, 0.789)",
      transformOrigin: "0 0"
    }
  }))));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48,
      height: 39.158,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.579,
      top: 1.895,
      width: 32.842,
      height: 32.842,
      borderRadius: "50%",
      backgroundColor: "rgb(178,204,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.052,
      top: 6.316,
      width: 3.158,
      height: 3.158,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.474,
      top: 32.21,
      width: 4.421,
      height: 4.421,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 43.579,
      top: 10.737,
      width: 4.421,
      height: 4.421,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 41.052,
      top: 3.158,
      width: 2.526,
      height: 2.526,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.738,
      top: 0,
      width: 26.526,
      height: 28.481,
      boxShadow: "0px 6.316px 7.579px -1.263px rgba(16,24,40,0.08), 0px 2.526px 2.526px -1.263px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 26.526,
    height: 28.481,
    viewBox: "0 0 26.526 28.481",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: 0,
      width: 26.526,
      height: 28.481,
      color: "rgb(239,244,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.263 11.388 L 14.696 10.788 L 13.263 11.398 L 13.263 28.481 L 26.462 22.95 L 26.462 5.86 L 26.526 5.833 L 26.462 5.804 L 26.462 5.776 L 26.429 5.79 L 13.367 0 L 0 5.694 L 0.063 5.721 L 0 22.742 L 13.263 28.471 L 13.263 11.388 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.263,
    height: 22.750,
    viewBox: "0 0 13.263 22.750",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: 5.721,
      width: 13.263,
      height: 22.75
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.263 5.667 L 13.263 22.75 L 0 17.021 L 0.063 0 L 13.263 5.667 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.199,
    height: 22.705,
    viewBox: "0 0 13.199 22.705",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.262,
      top: 5.776,
      width: 13.199,
      height: 22.705
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5.623 L 0 22.705 L 13.199 17.174 L 13.199 0 L 0 5.623 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 26.526,
    height: 11.388,
    viewBox: "0 0 26.526 11.388",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: 0,
      width: 26.526,
      height: 11.388,
      color: "rgb(209,224,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.263 11.388 L 26.526 5.833 L 13.367 0 L 0 5.694 L 13.263 11.388 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.029,
    height: 11.354,
    viewBox: "0 0 17.029 11.354",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.998,
      top: 2.152,
      width: 17.029,
      height: 11.354,
      color: "rgb(178,204,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1.412 L 13.213 7.163 L 13.333 11.354 L 17.029 9.828 L 16.918 5.611 L 3.314 0 L 0 1.412 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16.421,
      top: 21.474,
      width: 15.158,
      height: 15.158,
      borderRadius: 7.5789475440979,
      backgroundColor: "rgba(0,78,235,0.4)",
      backdropFilter: "blur(2.526px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.789,
      top: 3.789,
      width: 7.579,
      height: 7.579
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(0.474, 0.474)",
      transformOrigin: "0 0"
    }
  }))));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 152,
      height: 124,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 24,
      top: 6,
      width: 104,
      height: 104,
      borderRadius: "50%",
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 20,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11,
      top: 102,
      width: 14,
      height: 14,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 138,
      top: 34,
      width: 14,
      height: 14,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 130,
      top: 10,
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 34,
      top: 0,
      width: 84,
      height: 90.19,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 84,
    height: 90.190,
    viewBox: "0 0 84 90.190",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 84,
      height: 90.19,
      color: "rgb(239,244,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 42 36.063 L 46.536 34.163 L 42.001 36.095 L 42.001 90.19 L 83.796 72.675 L 83.796 18.557 L 84 18.471 L 83.796 18.381 L 83.796 18.29 L 83.692 18.335 L 42.33 0 L 0 18.031 L 0.2 18.117 L 0 72.017 L 42 90.158 L 42 36.063 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 42,
    height: 72.040,
    viewBox: "0 0 42 72.040",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 18.118,
      width: 42,
      height: 72.04
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 42 17.945 L 42 72.04 L 0 53.899 L 0.2 0 L 42 17.945 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 41.796,
    height: 71.900,
    viewBox: "0 0 41.796 71.900",
    fill: "none",
    style: {
      position: "absolute",
      left: 42,
      top: 18.29,
      width: 41.796,
      height: 71.9
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 17.805 L 0 71.9 L 41.796 54.385 L 41.796 0 L 0 17.805 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 84,
    height: 36.063,
    viewBox: "0 0 84 36.063",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 84,
      height: 36.063,
      color: "rgb(242,244,247)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 42 36.063 L 84 18.471 L 42.33 0 L 0 18.031 L 42 36.063 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 53.926,
    height: 35.953,
    viewBox: "0 0 53.926 35.953",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.832,
      top: 6.817,
      width: 53.926,
      height: 35.953,
      color: "rgb(234,236,240)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 4.47 L 41.84 22.682 L 42.22 35.953 L 53.926 31.123 L 53.572 17.768 L 10.495 0 L 0 4.47 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 52,
      top: 68,
      width: 48,
      height: 48,
      borderRadius: 36,
      backgroundColor: "rgba(52,64,84,0.4)",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12,
      top: 12,
      width: 24,
      height: 24
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(1.500, 1.500)",
      transformOrigin: "0 0"
    }
  }))));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 120,
      height: 97.895,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 18.945,
      top: 4.737,
      width: 82.105,
      height: 82.105,
      borderRadius: "50%",
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.633,
      top: 15.79,
      width: 7.895,
      height: 7.895,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.684,
      top: 80.527,
      width: 11.053,
      height: 11.053,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 108.945,
      top: 26.842,
      width: 11.053,
      height: 11.053,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 102.633,
      top: 7.895,
      width: 6.316,
      height: 6.316,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 26.842,
      top: 0,
      width: 66.316,
      height: 71.202,
      boxShadow: "0px 15.789px 18.947px -3.158px rgba(16,24,40,0.08), 0px 6.316px 6.316px -3.158px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 66.316,
    height: 71.202,
    viewBox: "0 0 66.316 71.202",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 66.316,
      height: 71.202,
      color: "rgb(239,244,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 33.158 28.471 L 36.739 26.971 L 33.158 28.496 L 33.158 71.202 L 66.155 57.375 L 66.155 14.65 L 66.316 14.583 L 66.155 14.511 L 66.155 14.439 L 66.072 14.475 L 33.418 0 L 0 14.235 L 0.158 14.303 L 0 56.855 L 33.158 71.177 L 33.158 28.471 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 33.158,
    height: 56.874,
    viewBox: "0 0 33.158 56.874",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 14.303,
      width: 33.158,
      height: 56.874
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 33.158 14.167 L 33.158 56.874 L 0 42.552 L 0.158 0 L 33.158 14.167 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 32.997,
    height: 56.763,
    viewBox: "0 0 32.997 56.763",
    fill: "none",
    style: {
      position: "absolute",
      left: 33.158,
      top: 14.44,
      width: 32.997,
      height: 56.763
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 14.057 L 0 56.763 L 32.997 42.936 L 32.997 0 L 0 14.057 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 66.316,
    height: 28.471,
    viewBox: "0 0 66.316 28.471",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 66.316,
      height: 28.471,
      color: "rgb(242,244,247)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 33.158 28.471 L 66.316 14.583 L 33.418 0 L 0 14.235 L 33.158 28.471 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 42.573,
    height: 28.384,
    viewBox: "0 0 42.573 28.384",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.498,
      top: 5.382,
      width: 42.573,
      height: 28.384,
      color: "rgb(234,236,240)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.529 L 33.031 17.907 L 33.331 28.384 L 42.573 24.57 L 42.294 14.027 L 8.285 0 L 0 3.529 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 41.055,
      top: 53.684,
      width: 37.895,
      height: 37.895,
      borderRadius: 28.421051025390625,
      backgroundColor: "rgba(52,64,84,0.4)",
      backdropFilter: "blur(6.316px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9.471,
      top: 9.474,
      width: 18.947,
      height: 18.947
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(1.184, 1.184)",
      transformOrigin: "0 0"
    }
  }))));
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 80,
      height: 65.263,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 12.631,
      top: 3.158,
      width: 54.737,
      height: 54.737,
      borderRadius: "50%",
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8.422,
      top: 10.526,
      width: 5.263,
      height: 5.263,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.789,
      top: 53.684,
      width: 7.368,
      height: 7.368,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 72.631,
      top: 17.895,
      width: 7.368,
      height: 7.368,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 68.422,
      top: 5.263,
      width: 4.211,
      height: 4.211,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 17.895,
      top: 0,
      width: 44.211,
      height: 47.468,
      boxShadow: "0px 10.526px 12.632px -2.105px rgba(16,24,40,0.08), 0px 4.211px 4.211px -2.105px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 44.211,
    height: 47.468,
    viewBox: "0 0 44.211 47.468",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: 0,
      width: 44.211,
      height: 47.468,
      color: "rgb(239,244,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 22.105 18.98 L 24.493 17.98 L 22.106 18.997 L 22.106 47.468 L 44.103 38.25 L 44.103 9.767 L 44.211 9.722 L 44.103 9.674 L 44.103 9.626 L 44.048 9.65 L 22.279 0 L 0 9.49 L 0.105 9.536 L 0 37.903 L 22.105 47.451 L 22.105 18.98 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 22.105,
    height: 37.916,
    viewBox: "0 0 22.105 37.916",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: 9.535,
      width: 22.105,
      height: 37.916
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 22.105 9.445 L 22.105 37.916 L 0 28.368 L 0.105 0 L 22.105 9.445 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 21.998,
    height: 37.842,
    viewBox: "0 0 21.998 37.842",
    fill: "none",
    style: {
      position: "absolute",
      left: 22.105,
      top: 9.626,
      width: 21.998,
      height: 37.842
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 9.371 L 0 37.842 L 21.998 28.624 L 21.998 0 L 0 9.371 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 44.211,
    height: 18.980,
    viewBox: "0 0 44.211 18.980",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: 0,
      width: 44.211,
      height: 18.98,
      color: "rgb(242,244,247)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 22.105 18.98 L 44.211 9.722 L 22.279 0 L 0 9.49 L 22.105 18.98 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 28.382,
    height: 18.923,
    viewBox: "0 0 28.382 18.923",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.332,
      top: 3.588,
      width: 28.382,
      height: 18.923,
      color: "rgb(234,236,240)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 2.353 L 22.021 11.938 L 22.221 18.923 L 28.382 16.38 L 28.196 9.351 L 5.523 0 L 0 2.353 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 27.369,
      top: 35.79,
      width: 25.263,
      height: 25.263,
      borderRadius: 18.947370529174805,
      backgroundColor: "rgba(52,64,84,0.4)",
      backdropFilter: "blur(4.211px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 6.314,
      top: 6.316,
      width: 12.632,
      height: 12.632
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(0.789, 0.789)",
      transformOrigin: "0 0"
    }
  }))));
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48,
      height: 39.158,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 7.579,
      top: 1.895,
      width: 32.842,
      height: 32.842,
      borderRadius: "50%",
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 5.052,
      top: 6.316,
      width: 3.158,
      height: 3.158,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.474,
      top: 32.211,
      width: 4.421,
      height: 4.421,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 43.579,
      top: 10.737,
      width: 4.421,
      height: 4.421,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 41.052,
      top: 3.158,
      width: 2.526,
      height: 2.526,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 10.738,
      top: 0,
      width: 26.526,
      height: 28.481,
      boxShadow: "0px 6.316px 7.579px -1.263px rgba(16,24,40,0.08), 0px 2.526px 2.526px -1.263px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 26.526,
    height: 28.481,
    viewBox: "0 0 26.526 28.481",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: 0,
      width: 26.526,
      height: 28.481,
      color: "rgb(239,244,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.263 11.388 L 14.696 10.788 L 13.263 11.398 L 13.263 28.481 L 26.462 22.95 L 26.462 5.86 L 26.526 5.833 L 26.462 5.804 L 26.462 5.776 L 26.429 5.79 L 13.367 0 L 0 5.694 L 0.063 5.721 L 0 22.742 L 13.263 28.471 L 13.263 11.388 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.263,
    height: 22.750,
    viewBox: "0 0 13.263 22.750",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: 5.721,
      width: 13.263,
      height: 22.75
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.263 5.667 L 13.263 22.75 L 0 17.021 L 0.063 0 L 13.263 5.667 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.199,
    height: 22.705,
    viewBox: "0 0 13.199 22.705",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.262,
      top: 5.776,
      width: 13.199,
      height: 22.705
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5.623 L 0 22.705 L 13.199 17.174 L 13.199 0 L 0 5.623 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 26.526,
    height: 11.388,
    viewBox: "0 0 26.526 11.388",
    fill: "none",
    style: {
      position: "absolute",
      left: -0.001,
      top: 0,
      width: 26.526,
      height: 11.388,
      color: "rgb(242,244,247)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.263 11.388 L 26.526 5.833 L 13.367 0 L 0 5.694 L 13.263 11.388 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.029,
    height: 11.354,
    viewBox: "0 0 17.029 11.354",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.998,
      top: 2.153,
      width: 17.029,
      height: 11.354,
      color: "rgb(234,236,240)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 1.412 L 13.213 7.163 L 13.333 11.354 L 17.029 9.828 L 16.918 5.611 L 3.314 0 L 0 1.412 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16.421,
      top: 21.474,
      width: 15.158,
      height: 15.158,
      borderRadius: 11.36842155456543,
      backgroundColor: "rgba(52,64,84,0.4)",
      backdropFilter: "blur(2.526px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3.789,
      top: 3.79,
      width: 7.579,
      height: 7.579
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(0.474, 0.474)",
      transformOrigin: "0 0"
    }
  }))));
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 172,
      height: 136,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22,
      top: 8,
      width: 128,
      height: 128,
      borderRadius: "50%",
      backgroundColor: "rgb(178,204,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      top: 22,
      width: 12,
      height: 12,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 112,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 152,
      top: 36,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 144,
      top: 12,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 34,
      top: 0,
      width: 104,
      height: 111.664,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 104,
    height: 111.664,
    viewBox: "0 0 104 111.664",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 104,
      height: 111.664,
      color: "rgb(239,244,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 52 44.649 L 57.616 42.297 L 52.001 44.689 L 52.001 111.664 L 103.748 89.979 L 103.748 22.975 L 104 22.869 L 103.748 22.757 L 103.748 22.645 L 103.618 22.7 L 52.408 0 L 0 22.325 L 0.248 22.431 L 0 89.163 L 52 111.624 L 52 44.649 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 52,
    height: 89.193,
    viewBox: "0 0 52 89.193",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 22.431,
      width: 52,
      height: 89.193
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 52 22.218 L 52 89.193 L 0 66.732 L 0.248 0 L 52 22.218 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 51.747,
    height: 89.019,
    viewBox: "0 0 51.747 89.019",
    fill: "none",
    style: {
      position: "absolute",
      left: 52,
      top: 22.645,
      width: 51.747,
      height: 89.019
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 22.044 L 0 89.019 L 51.747 67.334 L 51.747 0 L 0 22.044 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 104,
    height: 44.649,
    viewBox: "0 0 104 44.649",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 104,
      height: 44.649,
      color: "rgb(209,224,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 52 44.649 L 104 22.869 L 52.408 0 L 0 22.325 L 52 44.649 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 66.766,
    height: 44.513,
    viewBox: "0 0 66.766 44.513",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.602,
      top: 8.44,
      width: 66.766,
      height: 44.513,
      color: "rgb(178,204,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5.535 L 51.802 28.082 L 52.272 44.513 L 66.766 38.533 L 66.328 21.998 L 12.993 0 L 0 5.535 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 58,
      top: 72,
      width: 56,
      height: 56,
      borderRadius: 36,
      backgroundColor: "rgba(0,78,235,0.4)",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      top: 14,
      width: 28,
      height: 28
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(1.750, 1.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 172,
      height: 136,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22,
      top: 8,
      width: 128,
      height: 128,
      borderRadius: "50%",
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      top: 22,
      width: 12,
      height: 12,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 112,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 152,
      top: 36,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 144,
      top: 12,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 34,
      top: 0,
      width: 104,
      height: 111.664,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 104,
    height: 111.664,
    viewBox: "0 0 104 111.664",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 104,
      height: 111.664,
      color: "rgb(239,244,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 52 44.649 L 57.616 42.297 L 52.001 44.689 L 52.001 111.664 L 103.748 89.979 L 103.748 22.975 L 104 22.869 L 103.748 22.757 L 103.748 22.645 L 103.618 22.7 L 52.408 0 L 0 22.325 L 0.248 22.431 L 0 89.163 L 52 111.624 L 52 44.649 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 52,
    height: 89.193,
    viewBox: "0 0 52 89.193",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 22.431,
      width: 52,
      height: 89.193
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 52 22.218 L 52 89.193 L 0 66.732 L 0.248 0 L 52 22.218 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 51.747,
    height: 89.019,
    viewBox: "0 0 51.747 89.019",
    fill: "none",
    style: {
      position: "absolute",
      left: 52,
      top: 22.645,
      width: 51.747,
      height: 89.019
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 22.044 L 0 89.019 L 51.747 67.334 L 51.747 0 L 0 22.044 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 104,
    height: 44.649,
    viewBox: "0 0 104 44.649",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 104,
      height: 44.649,
      color: "rgb(242,244,247)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 52 44.649 L 104 22.869 L 52.408 0 L 0 22.325 L 52 44.649 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 66.766,
    height: 44.513,
    viewBox: "0 0 66.766 44.513",
    fill: "none",
    style: {
      position: "absolute",
      left: 19.602,
      top: 8.44,
      width: 66.766,
      height: 44.513,
      color: "rgb(234,236,240)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 5.535 L 51.802 28.082 L 52.272 44.513 L 66.766 38.533 L 66.328 21.998 L 12.993 0 L 0 5.535 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 58,
      top: 72,
      width: 56,
      height: 56,
      borderRadius: 36,
      backgroundColor: "rgba(52,64,84,0.4)",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      top: 14,
      width: 28,
      height: 28
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(1.750, 1.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 172,
      height: 128,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22,
      top: 0,
      width: 128,
      height: 128,
      borderRadius: "50%",
      backgroundColor: "rgb(178,204,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      top: 6,
      width: 12,
      height: 12,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 104,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 156,
      top: 88,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 144,
      top: 4,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(209,224,255)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11,
      top: 10,
      width: 149.44,
      height: 87.004
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.906,-0.423,0.423,0.906,0,22)",
      transformOrigin: "0 0",
      width: 52,
      height: 71.724,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 52,
    height: 71.724,
    viewBox: "0 0 52 71.724",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 52,
      height: 71.724,
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4 71.724 L 48 71.724 C 50.209 71.724 52 69.933 52 67.724 L 52 12 L 40 0 L 4 0 C 1.791 0 0 1.791 0 4 L 0 67.724 C 0 69.933 1.791 71.724 4 71.724 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 40,
      top: 0,
      width: 12,
      height: 12,
      color: "rgb(132,173,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 12 12 L 0 12 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49,
      top: 0,
      width: 52,
      height: 71.724,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 52,
    height: 71.724,
    viewBox: "0 0 52 71.724",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 52,
      height: 71.724,
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4 71.724 L 48 71.724 C 50.209 71.724 52 69.933 52 67.724 L 52 12 L 40 0 L 4 0 C 1.791 0 0 1.791 0 4 L 0 67.724 C 0 69.933 1.791 71.724 4 71.724 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 40,
      top: 0,
      width: 12,
      height: 12,
      color: "rgb(132,173,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 12 12 L 0 12 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.906,0.423,-0.423,0.906,102.313,0)",
      transformOrigin: "0 0",
      width: 52,
      height: 71.724,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 52,
    height: 71.724,
    viewBox: "0 0 52 71.724",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 52,
      height: 71.724,
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4 71.724 L 48 71.724 C 50.209 71.724 52 69.933 52 67.724 L 52 12 L 40 0 L 4 0 C 1.791 0 0 1.791 0 4 L 0 67.724 C 0 69.933 1.791 71.724 4 71.724 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 40,
      top: 0,
      width: 12,
      height: 12,
      color: "rgb(132,173,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 12 12 L 0 12 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 58,
      top: 68,
      width: 56,
      height: 56,
      borderRadius: 36,
      backgroundColor: "rgba(0,78,235,0.4)",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      top: 14,
      width: 28,
      height: 28
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(1.750, 1.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 172,
      height: 128,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 22,
      top: 0,
      width: 128,
      height: 128,
      borderRadius: "50%",
      backgroundColor: "rgb(234,236,240)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      top: 6,
      width: 12,
      height: 12,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 9,
      top: 104,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 156,
      top: 88,
      width: 16,
      height: 16,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 144,
      top: 4,
      width: 10,
      height: 10,
      borderRadius: "50%",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 11,
      top: 10,
      width: 149.44,
      height: 87.004
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.906,-0.423,0.423,0.906,0,22)",
      transformOrigin: "0 0",
      width: 52,
      height: 71.724,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 52,
    height: 71.724,
    viewBox: "0 0 52 71.724",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 52,
      height: 71.724,
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4 71.724 L 48 71.724 C 50.209 71.724 52 69.933 52 67.724 L 52 12 L 40 0 L 4 0 C 1.791 0 0 1.791 0 4 L 0 67.724 C 0 69.933 1.791 71.724 4 71.724 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 40,
      top: 0,
      width: 12,
      height: 12,
      color: "rgb(208,213,221)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 12 12 L 0 12 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 49,
      top: 0,
      width: 52,
      height: 71.724,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 52,
    height: 71.724,
    viewBox: "0 0 52 71.724",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 52,
      height: 71.724,
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4 71.724 L 48 71.724 C 50.209 71.724 52 69.933 52 67.724 L 52 12 L 40 0 L 4 0 C 1.791 0 0 1.791 0 4 L 0 67.724 C 0 69.933 1.791 71.724 4 71.724 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 40,
      top: 0,
      width: 12,
      height: 12,
      color: "rgb(208,213,221)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 12 12 L 0 12 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.906,0.423,-0.423,0.906,102.313,0)",
      transformOrigin: "0 0",
      width: 52,
      height: 71.724,
      boxShadow: "0px 20px 24px -4px rgba(16,24,40,0.08), 0px 8px 8px -4px rgba(16,24,40,0.03)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 52,
    height: 71.724,
    viewBox: "0 0 52 71.724",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 52,
      height: 71.724,
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4 71.724 L 48 71.724 C 50.209 71.724 52 69.933 52 67.724 L 52 12 L 40 0 L 4 0 C 1.791 0 0 1.791 0 4 L 0 67.724 C 0 69.933 1.791 71.724 4 71.724 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    style: {
      position: "absolute",
      left: 40,
      top: 0,
      width: 12,
      height: 12,
      color: "rgb(208,213,221)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 12 12 L 0 12 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 58,
      top: 68,
      width: 56,
      height: 56,
      borderRadius: 36,
      backgroundColor: "rgba(52,64,84,0.4)",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 14,
      top: 14,
      width: 28,
      height: 28
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, {
    style: {
      transform: "scale(1.750, 1.750)",
      transformOrigin: "0 0"
    }
  }))));
  const __impls = {
    // figma: Style=Cloud, Color=Primary, Size=xl
    "style2=cloud|color=primary|size=xl": __body0,
    // figma: Style=Cloud, Color=Primary, Size=xxl
    "style2=cloud|color=primary|size=xxl": __body1,
    // figma: Style=Cloud, Color=Gray, Size=xxl
    "style2=cloud|color=gray|size=xxl": __body2,
    // figma: Style=Documents, Color=Primary, Size=xxl
    "style2=documents|color=primary|size=xxl": __body3,
    // figma: Style=Documents, Color=Gray, Size=xxl
    "style2=documents|color=gray|size=xxl": __body4,
    // figma: Style=Box, Color=Primary, Size=xxl
    "style2=box|color=primary|size=xxl": __body5,
    // figma: Style=Box, Color=Gray, Size=xxl
    "style2=box|color=gray|size=xxl": __body6,
    // figma: Style=Cloud, Color=Gray, Size=xl
    "style2=cloud|color=gray|size=xl": __body7,
    // figma: Style=Cloud, Color=Primary, Size=lg
    "style2=cloud|color=primary|size=lg": __body8,
    // figma: Style=Cloud, Color=Primary, Size=md
    "style2=cloud|color=primary|size=md": __body9,
    // figma: Style=Cloud, Color=Primary, Size=sm
    "style2=cloud|color=primary|size=sm": __body10,
    // figma: Style=Cloud, Color=Primary, Size=tiny
    "style2=cloud|color=primary|size=tiny": __body11,
    // figma: Style=Cloud, Color=Gray, Size=lg
    "style2=cloud|color=gray|size=lg": __body12,
    // figma: Style=Cloud, Color=Gray, Size=md
    "style2=cloud|color=gray|size=md": __body13,
    // figma: Style=Cloud, Color=Gray, Size=sm
    "style2=cloud|color=gray|size=sm": __body14,
    // figma: Style=Cloud, Color=Gray, Size=tiny
    "style2=cloud|color=gray|size=tiny": __body15,
    // figma: Style=Documents, Color=Primary, Size=lg
    "style2=documents|color=primary|size=lg": __body16,
    // figma: Style=Documents, Color=Primary, Size=md
    "style2=documents|color=primary|size=md": __body17,
    // figma: Style=Documents, Color=Primary, Size=sm
    "style2=documents|color=primary|size=sm": __body18,
    // figma: Style=Documents, Color=Primary, Size=tiny
    "style2=documents|color=primary|size=tiny": __body19,
    // figma: Style=Documents, Color=Gray, Size=lg
    "style2=documents|color=gray|size=lg": __body20,
    // figma: Style=Documents, Color=Gray, Size=md
    "style2=documents|color=gray|size=md": __body21,
    // figma: Style=Documents, Color=Gray, Size=sm
    "style2=documents|color=gray|size=sm": __body22,
    // figma: Style=Documents, Color=Gray, Size=tiny
    "style2=documents|color=gray|size=tiny": __body23,
    // figma: Style=Box, Color=Primary, Size=lg
    "style2=box|color=primary|size=lg": __body24,
    // figma: Style=Box, Color=Primary, Size=md
    "style2=box|color=primary|size=md": __body25,
    // figma: Style=Box, Color=Primary, Size=sm
    "style2=box|color=primary|size=sm": __body26,
    // figma: Style=Box, Color=Primary, Size=tiny
    "style2=box|color=primary|size=tiny": __body27,
    // figma: Style=Box, Color=Gray, Size=lg
    "style2=box|color=gray|size=lg": __body28,
    // figma: Style=Box, Color=Gray, Size=md
    "style2=box|color=gray|size=md": __body29,
    // figma: Style=Box, Color=Gray, Size=sm
    "style2=box|color=gray|size=sm": __body30,
    // figma: Style=Box, Color=Gray, Size=tiny
    "style2=box|color=gray|size=tiny": __body31,
    // figma: Style=Box, Color=Primary, Size=xl
    "style2=box|color=primary|size=xl": __body32,
    // figma: Style=Box, Color=Gray, Size=xl
    "style2=box|color=gray|size=xl": __body33,
    // figma: Style=Documents, Color=Primary, Size=xl
    "style2=documents|color=primary|size=xl": __body34,
    // figma: Style=Documents, Color=Gray, Size=xl
    "style2=documents|color=gray|size=xl": __body35
  };
  return (__impls[__vkey_Illustration(props)] ?? __body30)();
}

// figma node: 30:7398 No data (3 variants)
var __venc_NoData = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_NoData = p => "type=" + __venc_NoData(p.type) + '|' + "breakpoint=" + __venc_NoData(p.breakpoint);

function NoData(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "illustration 02",
    breakpoint: _p.breakpoint ?? "desktop"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1440,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 64,
      padding: "80px 0px 80px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 296,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Illustration, {
    style: {
      position: "relative",
      width: 80,
      height: 62.105,
      transform: "matrix(-1,0,0,1,0,0)",
      flexShrink: 0
    },
    style2: "documents",
    color: "gray",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
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
      textAlign: "center",
      lineHeight: "20px",
      color: "rgb(102,112,133)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Không có dữ liệu"))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 375,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 64,
      padding: "64px 0px 64px 0px",
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
      padding: "0px 16px 0px 16px",
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(Illustration, {
    style: {
      position: "relative",
      width: 80,
      height: 62.105,
      flexShrink: 0
    },
    style2: "documents",
    color: "gray",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
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
      fontSize: 12,
      textAlign: "center",
      lineHeight: "18px",
      color: "rgb(102,112,133)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "nowrap"
    }
  }, props.text1 ?? "Không có dữ liệu")))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1440,
      height: 900,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "180px 208px 180px 208px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 903,
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Illustration, {
    style: {
      position: "relative",
      width: 152,
      height: 118,
      flexShrink: 0
    },
    icon1: /*#__PURE__*/React.createElement(IconLocked, {
      style: {
        transform: "scale(1.500, 1.500)",
        transformOrigin: "0 0"
      }
    }),
    style2: "documents",
    color: "primary",
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
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
      fontWeight: 600,
      fontSize: 18,
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgb(16,24,40)",
      flexShrink: 0
    }
  }, props.text1 ?? "Quyền truy cập bị hạn chế"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      lineHeight: "20px",
      color: "rgb(102,112,133)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text2 ?? "Bạn không được phân quyền truy cập trang này!"))));
  const __impls = {
    // figma: Type=No data, Breakpoint=Desktop
    "type=no data|breakpoint=desktop": __body0,
    // figma: Type=Illustration 02, Breakpoint=Mobile
    "type=illustration 02|breakpoint=mobile": __body1,
    // figma: Type=No access, Breakpoint=Desktop
    "type=no access|breakpoint=desktop": __body2
  };
  return (__impls[__vkey_NoData(props)] ?? __body0)();
}

// figma node: 24:4318 Scroll bar (6 variants)
var __venc_ScrollBar = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_ScrollBar = p => "type=" + __venc_ScrollBar(p.type) + '|' + "length=" + __venc_ScrollBar(p.length);

function ScrollBar(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "horizontal",
    length: _p.length ?? "25%"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 240,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8,
      height: 58,
      borderRadius: 8,
      backgroundColor: "rgb(234,236,240)"
    }
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 240,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8,
      height: 116,
      borderRadius: 8,
      backgroundColor: "rgb(234,236,240)"
    }
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 16,
      height: 240,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "4px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 8,
      height: 174,
      borderRadius: 8,
      backgroundColor: "rgb(234,236,240)"
    }
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 240,
      height: 16,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "4px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 58,
      height: 8,
      borderRadius: 8,
      backgroundColor: "rgb(217,217,217)"
    }
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 240,
      height: 16,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "4px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 116,
      height: 8,
      borderRadius: 8,
      backgroundColor: "rgb(234,236,240)"
    }
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 240,
      height: 16,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "4px 4px 4px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 174,
      height: 8,
      borderRadius: 8,
      backgroundColor: "rgb(234,236,240)"
    }
  })));
  const __impls = {
    // figma: Type=Vertical, Length=25%
    "type=vertical|length=25%25": __body0,
    // figma: Type=Vertical, Length=50%
    "type=vertical|length=50%25": __body1,
    // figma: Type=Vertical, Length=75%
    "type=vertical|length=75%25": __body2,
    // figma: Type=Horizontal, Length=25%
    "type=horizontal|length=25%25": __body3,
    // figma: Type=Horizontal, Length=50%
    "type=horizontal|length=50%25": __body4,
    // figma: Type=Horizontal, Length=75%
    "type=horizontal|length=75%25": __body5
  };
  return (__impls[__vkey_ScrollBar(props)] ?? __body3)();
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

// figma node: 181:33718 Anchor/Link
function AnchorLink(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
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
      height: 26
    },
    type: "vertical",
    dashed: false,
    title: false,
    orientation: ".n/a"
  })), /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "link text"));
}

// Globals for scripts loaded after this file.
window.TreeViewItem = TreeViewItem;
window.Catetree = Catetree;
window.CarouselSlick = CarouselSlick;
window.IconLocked = IconLocked;
window.Illustration = Illustration;
window.NoData = NoData;
window.ScrollBar = ScrollBar;
window.Edit2 = Edit2;
window.TextText2 = TextText2;
window.Divider2 = Divider2;
window.AnchorLink = AnchorLink;
