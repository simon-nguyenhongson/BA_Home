// Components bundle — part 4 of 5. Load the parts in order as plain
// classic <script> tags: they share one global scope, so later parts can call
// declarations from earlier ones exactly as in the original single-file bundle.

function DateMonthYearItem(_p = {}) {
  const props = {
    ..._p,
    selected: _p.selected ?? false,
    hovered: _p.hovered ?? false,
    single: _p.single ?? true,
    type: _p.type ?? "single"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 60,
      height: 32,
      borderRadius: 8,
      backgroundColor: "rgb(21,94,239)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 8px",
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
      flexShrink: 0
    }
  }, props.text1 ?? "Jan"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 60,
      height: 32,
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 8px",
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
      flexShrink: 0
    }
  }, props.text1 ?? "Jan"));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 60,
      height: 32,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 8px",
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
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Jan"));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 60,
      height: 32,
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 8px",
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
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Jan"));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 60,
      height: 32,
      borderRadius: 8,
      backgroundColor: "rgb(249,250,251)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 8px",
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
      flexShrink: 0
    }
  }, props.text1 ?? "Jan"));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 60,
      height: 32,
      borderRadius: 2,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -6,
      top: 0,
      width: 72,
      height: 32,
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 60,
      height: 32,
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
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "Jan")));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 60,
      height: 32,
      borderRadius: 8,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 66,
      height: 32,
      borderRadius: "8px 0px 0px 8px",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 60,
      height: 32,
      overflow: "hidden",
      borderRadius: "8px 999px 999px 8px",
      backgroundColor: "rgb(21,94,239)",
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
      flexShrink: 0
    }
  }, props.text1 ?? "Jan")));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 60,
      height: 32,
      borderRadius: 2,
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -6,
      top: 0,
      width: 66,
      height: 32,
      borderRadius: "0px 8px 8px 0px",
      backgroundColor: "rgb(242,244,247)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 60,
      height: 32,
      overflow: "hidden",
      borderRadius: "999px 8px 8px 999px",
      backgroundColor: "rgb(21,94,239)",
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
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, props.text1 ?? "Jan")));
  const __impls = {
    // figma: Selected=true, Hovered=false, Single=True, Type=Single
    "selected=true|hovered=false|single=true|type=single": __body0,
    // figma: Selected=false, Hovered=false, Single=True, Type=Single
    "selected=false|hovered=false|single=true|type=single": __body1,
    // figma: Selected=false, Hovered=false, Single=True, Type=current
    "selected=false|hovered=false|single=true|type=current": __body2,
    // figma: Selected=false, Hovered=false, Single=True, Type=Disable
    "selected=false|hovered=false|single=true|type=disable": __body3,
    // figma: Selected=false, Hovered=true, Single=True, Type=Single
    "selected=false|hovered=true|single=true|type=single": __body4,
    // figma: Selected=false, Hovered=false, Single=False, Type=In range
    "selected=false|hovered=false|single=false|type=in range": __body5,
    // figma: Selected=false, Hovered=false, Single=False, Type=Start
    "selected=false|hovered=false|single=false|type=start": __body6,
    // figma: Selected=false, Hovered=false, Single=False, Type=End
    "selected=false|hovered=false|single=false|type=end": __body7
  };
  return (__impls[__vkey_DateMonthYearItem(props)] ?? __body1)();
}

// figma node: 106:19643 Date/Pickerdate item (6 variants)
var __venc_DatePickerdateItem = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_DatePickerdateItem = p => "selected=" + __venc_DatePickerdateItem(p.selected) + '|' + "state=" + __venc_DatePickerdateItem(p.state);

function DatePickerdateItem(_p = {}) {
  const props = {
    ..._p,
    selected: _p.selected ?? false,
    state: _p.state ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 160,
      height: 32,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 0px 0px 4px rgb(242,244,247)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 16px 10px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
      flexShrink: 0
    }
  }, props.text1 ?? "List item"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 160,
      height: 32,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(249,250,251)",
      boxShadow: "0px 0px 0px 4px rgb(242,244,247)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 16px 10px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
      flexShrink: 0
    }
  }, props.text1 ?? "List item"));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 160,
      height: 32,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(249,250,251)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 16px 10px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
      flexShrink: 0
    }
  }, props.text1 ?? "List item"));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 160,
      height: 32,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(242,244,247)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 16px 10px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
      flexShrink: 0
    }
  }, props.text1 ?? "List item"));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 160,
      height: 32,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 16px 10px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
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
      flexShrink: 0
    }
  }, props.text1 ?? "List item"));
  const __impls = {
    // figma: Selected=False, State=Focused
    "selected=false|state=focused": __body0,
    // figma: Selected=True, State=Focused
    "selected=true|state=focused": __body1,
    // figma: Selected=False, State=Hover
    "selected=false|state=hover": __body2,
    // figma: Selected=True, State=Hover
    "selected=true|state=hover": __body3,
    // figma: Selected=False, State=Default
    "selected=false|state=default": __body4,
    // figma: Selected=True, State=Default
    "selected=true|state=default": __body2
  };
  return (__impls[__vkey_DatePickerdateItem(props)] ?? __body4)();
}

// figma node: 3141:8789 Date/item (4 variants)
var __venc_DateItem = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_DateItem = p => "state=" + __venc_DateItem(p.state);

function DateItem(_p = {}) {
  const props = {
    ..._p,
    state: _p.state ?? "hovered"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48,
      height: 32,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "00"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48,
      height: 32,
      overflow: "hidden",
      backgroundColor: "rgb(249,250,251)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text1 ?? "00"));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48,
      height: 32,
      overflow: "hidden",
      backgroundColor: "rgb(245,248,255)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexShrink: 0
    }
  }, props.text1 ?? "00"));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48,
      height: 32,
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(21,94,239)",
      flexShrink: 0
    }
  }, props.text1 ?? "00"));
  const __impls = {
    // figma: State=normal
    "state=normal": __body0,
    // figma: State=hovered
    "state=hovered": __body1,
    // figma: State=selected
    "state=selected": __body2,
    // figma: State=disable
    "state=disable": __body3
  };
  return (__impls[__vkey_DateItem(props)] ?? __body1)();
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

// figma node: 3141:8100 Date/Time select
function DateTimeSelect(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 120,
      height: 276,
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
      height: 299,
      overflow: "hidden",
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
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 2px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(DateItem, {
    state: "selected"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(DateItem, {
    text1: "01",
    state: "normal"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(DateItem, {
    text1: "02",
    state: "normal"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(DateItem, {
    text1: "03",
    state: "normal"
  })), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "04",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "05",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "06",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "07",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "08",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "09",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "10",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "11",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "12",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "13",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "14",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "15",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "16",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "17",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "18",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "19",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "20",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "11",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "12",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "13",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "14",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "15",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "16",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "17",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "18",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "19",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "20",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "21",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "22",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "23",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "24",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "25",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "26",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "27",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "28",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "29",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "30",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "31",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "32",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "33",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "34",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "35",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "36",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "37",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "38",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "39",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "40",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "41",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "42",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "43",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "44",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "45",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "46",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "47",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "48",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "49",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "50",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "51",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "52",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "53",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "54",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "55",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "56",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "57",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "58",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "59",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "60",
    state: "normal"
  }), /*#__PURE__*/React.createElement(ScrollBar, {
    style: {
      position: "absolute",
      left: 44,
      top: 0,
      width: 16,
      height: 240
    },
    type: "vertical",
    length: "25%"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "0px 0px 2px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    state: "selected"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "01",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "02",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "03",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "04",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "05",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "06",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "07",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "08",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "09",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "10",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "11",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "12",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "13",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "14",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "15",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "16",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "17",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "18",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "19",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "20",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "11",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "12",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "13",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "14",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "15",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "16",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "17",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "18",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "19",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "20",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "21",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "22",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "23",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "24",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "25",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "26",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "27",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "28",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "29",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "30",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "31",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "32",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "33",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "34",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "35",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "36",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "37",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "38",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "39",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "40",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "41",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "42",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "43",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "44",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "45",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "46",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "47",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "48",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "49",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "50",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "51",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "52",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "53",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "54",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "55",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "56",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "57",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "58",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "59",
    state: "normal"
  }), /*#__PURE__*/React.createElement(DateItem, {
    style: {
      position: "relative",
      height: 28,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text1: "60",
    state: "normal"
  }), /*#__PURE__*/React.createElement(ScrollBar, {
    style: {
      position: "absolute",
      left: 44,
      top: 0,
      width: 16,
      height: 240
    },
    type: "vertical",
    length: "25%"
  }))));
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

// figma node: 44:21900 Edit
function Edit(_p = {}) {
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

// figma node: 44:21904 Text/Text (10 variants)
var __venc_TextText = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_TextText = p => "hierarchy=" + __venc_TextText(p.hierarchy) + '|' + "bullet=" + __venc_TextText(p.bullet) + '|' + "editable=" + __venc_TextText(p.editable) + '|' + "copyable=" + __venc_TextText(p.copyable);

function TextText(_p = {}) {
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Edit, {
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
  }, props.icon1 ?? /*#__PURE__*/React.createElement(Edit, {
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
  return (__impls[__vkey_TextText(props)] ?? __body0)();
}

// figma node: 49:24303 Date/Calendar dropdown (7 variants)
var __venc_DateCalendarDropdown = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_DateCalendarDropdown = p => "type=" + __venc_DateCalendarDropdown(p.type);

function DateCalendarDropdown(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "date"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DatePickerdateItem, {
    style: {
      position: "relative",
      width: 120,
      height: 32,
      flexShrink: 0
    },
    text1: "Hôm nay",
    selected: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(DatePickerdateItem, {
    style: {
      position: "relative",
      width: 120,
      height: 32,
      flexShrink: 0
    },
    text1: "Hôm qua",
    selected: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(DatePickerdateItem, {
    style: {
      position: "relative",
      width: 120,
      height: 32,
      flexShrink: 0
    },
    text1: "Tuần này",
    selected: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(DatePickerdateItem, {
    style: {
      position: "relative",
      width: 120,
      height: 32,
      flexShrink: 0
    },
    text1: "Tuần trước",
    selected: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(DatePickerdateItem, {
    style: {
      position: "relative",
      width: 120,
      height: 32,
      flexShrink: 0
    },
    text1: "Tháng này",
    selected: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(DatePickerdateItem, {
    style: {
      position: "relative",
      width: 120,
      height: 32,
      flexShrink: 0
    },
    text1: "Tháng trước",
    selected: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(DatePickerdateItem, {
    style: {
      position: "relative",
      width: 120,
      height: 32,
      flexShrink: 0
    },
    text1: "Năm nay",
    selected: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(DatePickerdateItem, {
    style: {
      position: "relative",
      width: 120,
      height: 32,
      flexShrink: 0
    },
    text1: "Năm trước",
    selected: false,
    state: "default"
  })), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IconArrowLeft, {
    style: {
      position: "absolute",
      left: 16,
      top: 16,
      width: 16,
      height: 16
    }
  }), /*#__PURE__*/React.createElement(IconArrowRight, {
    style: {
      position: "absolute",
      left: 292,
      top: 16,
      width: 16,
      height: 16
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 114,
      top: 14,
      width: 96,
      height: 20,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(0,0,0)"
    }
  }, "Th\xE1ng 9/2023")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0
    }
  }, "T2"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0
    }
  }, "T3"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0
    }
  }, "T4"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0
    }
  }, "T5"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0
    }
  }, "T6"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0
    }
  }, "T7"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0
    }
  }, "CN")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "3px 6px 3px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "28",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "29",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "30",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "2",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "3",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "3px 6px 3px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "4",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "5",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "6",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "7",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      padding: "1px 1px 1px 1px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
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
  }, "8")), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "9",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "10",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "3px 6px 3px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "11",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "12",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "13",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "14",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "15",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "16",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "17",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "3px 6px 3px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "18",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "19",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "20",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "21",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    inView: true,
    today: true,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "23",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "24",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "3px 6px 3px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "25",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "26",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "27",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "28",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "29",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "30",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "31",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "3px 6px 3px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "1",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "2",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "3",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "4",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "5",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "6",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "7",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0px 1px 0px 0px rgb(240,240,240)",
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
      gap: 10,
      padding: "9px 12px 9px 12px",
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
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(TextText, {
    style: {
      position: "relative",
      width: 29,
      flexShrink: 0
    },
    hierarchy: "primary",
    bullet: false,
    editable: false,
    copyable: false
  })), /*#__PURE__*/React.createElement(Button3, {
    style: {
      position: "relative",
      width: 35,
      height: 26,
      flexShrink: 0
    },
    type: "primary",
    shape: "standard",
    size: "md",
    state: "normal",
    danger: false,
    ghost: false
  })))), /*#__PURE__*/React.createElement("div", {
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 48,
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(IconArrowLeft, {
    style: {
      position: "absolute",
      left: 16,
      top: 16,
      width: 16,
      height: 16
    }
  }), /*#__PURE__*/React.createElement(IconArrowRight, {
    style: {
      position: "absolute",
      left: 292,
      top: 16,
      width: 16,
      height: 16
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 114,
      top: 14,
      width: 103,
      height: 20,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(0,0,0)"
    }
  }, "Th\xE1ng 10/2023")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0
    }
  }, "T2"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0
    }
  }, "T3"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0
    }
  }, "T4"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0
    }
  }, "T5"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0
    }
  }, "T6"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0
    }
  }, "T7"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0
    }
  }, "CN")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "3px 6px 3px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "28",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "29",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "30",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "2",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "3",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "3px 6px 3px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "4",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "5",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "6",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "7",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      padding: "1px 1px 1px 1px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
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
  }, "8")), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "9",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "10",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "3px 6px 3px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "11",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "12",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "13",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "14",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "15",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "16",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "17",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "3px 6px 3px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "18",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "19",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "20",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "21",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "23",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "24",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "3px 6px 3px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "25",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "26",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "27",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "28",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "29",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "30",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "31",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "3px 6px 3px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "1",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "2",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "3",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "4",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "5",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "6",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "7",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0px 1px 0px 0px rgb(240,240,240)",
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
      gap: 10,
      padding: "9px 12px 9px 12px",
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
      gap: 10,
      alignItems: "center",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement(TextText, {
    style: {
      position: "relative",
      width: 29,
      flexShrink: 0
    },
    hierarchy: "primary",
    bullet: false,
    editable: false,
    copyable: false
  })), /*#__PURE__*/React.createElement(Button3, {
    style: {
      position: "relative",
      width: 35,
      height: 26,
      flexShrink: 0
    },
    type: "primary",
    shape: "standard",
    size: "md",
    state: "normal",
    danger: false,
    ghost: false
  })))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgb(234,236,240), 0px 4px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(234,236,240)",
      borderRight: "1px solid rgb(234,236,240)",
      borderBottom: "1px solid rgb(234,236,240)",
      borderLeft: "1px solid rgb(234,236,240)",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      padding: "12px 16px 12px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DatePickerdateItem, {
    style: {
      position: "relative",
      width: 120,
      height: 32,
      flexShrink: 0
    },
    text1: "Tháng này",
    selected: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(DatePickerdateItem, {
    style: {
      position: "relative",
      width: 120,
      height: 32,
      flexShrink: 0
    },
    text1: "Tháng trước",
    selected: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(DatePickerdateItem, {
    style: {
      position: "relative",
      width: 120,
      height: 32,
      flexShrink: 0
    },
    text1: "3 ngày trước",
    selected: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(DatePickerdateItem, {
    style: {
      position: "relative",
      width: 120,
      height: 32,
      flexShrink: 0
    },
    text1: "7 ngày trước",
    selected: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(DatePickerdateItem, {
    style: {
      position: "relative",
      width: 120,
      height: 32,
      flexShrink: 0
    },
    text1: "3 tháng trước",
    selected: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(DatePickerdateItem, {
    style: {
      position: "relative",
      width: 120,
      height: 32,
      flexShrink: 0
    },
    text1: "6 tháng trước",
    selected: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(DatePickerdateItem, {
    style: {
      position: "relative",
      width: 120,
      height: 32,
      flexShrink: 0
    },
    text1: "9 tháng trước",
    selected: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(DatePickerdateItem, {
    style: {
      position: "relative",
      width: 120,
      height: 32,
      flexShrink: 0
    },
    text1: "Năm nay",
    selected: false,
    state: "default"
  }), /*#__PURE__*/React.createElement(DatePickerdateItem, {
    style: {
      position: "relative",
      width: 120,
      height: 32,
      flexShrink: 0
    },
    text1: "Năm trước",
    selected: false,
    state: "default"
  })), /*#__PURE__*/React.createElement(DateCalendarDropdown, {
    style: {
      position: "relative",
      width: 324,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    type: "month"
  }), /*#__PURE__*/React.createElement(DateCalendarDropdown, {
    style: {
      position: "relative",
      width: 324,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    },
    text1: "2024",
    type: "month"
  }));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "0px 2px 8px 0px rgba(0,0,0,0.15)",
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
      height: 48,
      overflow: "hidden",
      borderRadius: "8px 8px 0px 0px",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 16,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconArrowLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 292,
      top: 16,
      width: 16,
      height: 16
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowRight, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 114,
      top: 14,
      width: 96,
      height: 20,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(0,0,0)"
    }
  }, props.text1 ?? "Tháng 9/2023")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 8px 8px 8px",
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
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0
    }
  }, props.text2 ?? "T2"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0
    }
  }, props.text3 ?? "T3"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0
    }
  }, props.text4 ?? "T4"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0
    }
  }, "T5"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0
    }
  }, "T6"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0
    }
  }, "T7"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"SF Pro Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "28px",
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0
    }
  }, "CN")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "3px 6px 3px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(DateDayItem, {
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(DateDayItem, {
    text1: "28",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "29",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "30",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "2",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "3",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "3px 6px 3px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "4",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "5",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "6",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "7",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      padding: "1px 1px 1px 1px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
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
  }, "8")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      transform: "scale(1.333, 1.333)",
      transformOrigin: "0 0"
    },
    text1: "9",
    inView: true,
    today: true,
    selected: true,
    rangeStart: true,
    inRange: true,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      transform: "scale(1.333, 1.333)",
      transformOrigin: "0 0"
    },
    text1: "10",
    inView: true,
    today: false,
    selected: true,
    rangeStart: false,
    inRange: true,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "3px 6px 3px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      transform: "scale(1.333, 1.333)",
      transformOrigin: "0 0"
    },
    text1: "11",
    inView: true,
    today: false,
    selected: true,
    rangeStart: false,
    inRange: true,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      transform: "scale(1.333, 1.333)",
      transformOrigin: "0 0"
    },
    text1: "12",
    inView: true,
    today: false,
    selected: true,
    rangeStart: false,
    inRange: true,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      transform: "scale(1.333, 1.333)",
      transformOrigin: "0 0"
    },
    text1: "13",
    inView: true,
    today: true,
    selected: true,
    rangeStart: false,
    inRange: true,
    rangeEnd: true,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "14",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "15",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "16",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "17",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "3px 6px 3px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "18",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "19",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "20",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "21",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    inView: true,
    today: true,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "23",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "24",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "3px 6px 3px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "25",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "26",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "27",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "28",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "29",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "30",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "31",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "3px 6px 3px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "1",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "2",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "3",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "4",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "5",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "6",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "7",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 459,
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "0px 12px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
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
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
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
      height: 48,
      overflow: "hidden",
      borderRadius: "8px 8px 0px 0px",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 16,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconArrowLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 291,
      top: 16,
      width: 16,
      height: 16
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowRight, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 114,
      top: 14,
      width: 96,
      height: 20,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)"
    }
  }, props.text1 ?? "Tháng 9/2023")), /*#__PURE__*/React.createElement("div", {
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
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 8px 8px 8px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
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
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text2 ?? "T2"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text3 ?? "T3"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, props.text4 ?? "T4"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, "T5"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, "T6"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, "T7"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)",
      flexShrink: 0
    }
  }, "CN")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "3px 6px 3px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(DateDayItem, {
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(DateDayItem, {
    text1: "28",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "29",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "30",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "2",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "3",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "3px 6px 3px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "4",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "5",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "6",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "7",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      overflow: "hidden",
      borderRadius: 2,
      display: "flex",
      flexDirection: "row",
      padding: "1px 1px 1px 1px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
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
  }, "8")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      transform: "scale(1.333, 1.333)",
      transformOrigin: "0 0"
    },
    text1: "9",
    inView: true,
    today: true,
    selected: true,
    rangeStart: true,
    inRange: true,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      transform: "scale(1.333, 1.333)",
      transformOrigin: "0 0"
    },
    text1: "10",
    inView: true,
    today: false,
    selected: true,
    rangeStart: false,
    inRange: true,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "3px 6px 3px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      transform: "scale(1.333, 1.333)",
      transformOrigin: "0 0"
    },
    text1: "11",
    inView: true,
    today: false,
    selected: true,
    rangeStart: false,
    inRange: true,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      transform: "scale(1.333, 1.333)",
      transformOrigin: "0 0"
    },
    text1: "12",
    inView: true,
    today: false,
    selected: true,
    rangeStart: false,
    inRange: true,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      transform: "scale(1.333, 1.333)",
      transformOrigin: "0 0"
    },
    text1: "13",
    inView: true,
    today: true,
    selected: true,
    rangeStart: false,
    inRange: true,
    rangeEnd: true,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "14",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "15",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "16",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "17",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "3px 6px 3px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "18",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "19",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "20",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "21",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    inView: true,
    today: true,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "23",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "24",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "3px 6px 3px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "25",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "26",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "27",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "28",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "29",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "30",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "31",
    inView: true,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      padding: "3px 6px 3px 6px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "1",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "2",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "3",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "4",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "5",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "6",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  }), /*#__PURE__*/React.createElement(DateDayItem, {
    style: {
      position: "relative",
      width: 32,
      height: 32,
      flexShrink: 0
    },
    text1: "7",
    inView: false,
    today: false,
    selected: false,
    rangeStart: false,
    inRange: false,
    rangeEnd: false,
    hovered: false,
    disabled: false
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 8px 8px 8px",
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
      backgroundColor: "rgb(249,250,251)",
      display: "flex",
      flexDirection: "column",
      padding: "2px 0px 2px 0px",
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
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "4px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
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
      color: "rgba(0,0,0,0.85)",
      flexShrink: 0
    }
  }, "00:00")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 0.001,
      height: 0.001,
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement(DateTimeSelect, {
    style: {
      position: "relative",
      flexGrow: 1,
      alignSelf: "stretch",
      height: "auto",
      width: "auto"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
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
      gap: 10,
      padding: "9px 12px 9px 12px",
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
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 51,
      height: 20,
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
      color: "rgb(71,84,103)",
      flexShrink: 0
    }
  }, "Hi\u1EC7n t\u1EA1i"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
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
      color: "rgb(0,78,235)",
      flexShrink: 0
    }
  }, "\xC1p d\u1EE5ng")))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 324,
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgb(234,236,240), 0px 4px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
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
      height: 48,
      overflow: "hidden",
      borderRadius: "8px 8px 0px 0px",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 16,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconArrowLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 292,
      top: 16,
      width: 16,
      height: 16
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowRight, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 144,
      top: 14,
      width: 36,
      height: 20,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)"
    }
  }, props.text1 ?? "2023")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "8px 8px 8px 8px",
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
      gap: 10,
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
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateMonthYearItem, {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    },
    text1: "Tháng 1",
    selected: false,
    hovered: false,
    single: true,
    type: "single"
  }), /*#__PURE__*/React.createElement(DateMonthYearItem, {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    },
    text1: "Tháng 2",
    selected: false,
    hovered: false,
    single: true,
    type: "single"
  }), /*#__PURE__*/React.createElement(DateMonthYearItem, {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    },
    text1: "Tháng 3",
    selected: false,
    hovered: false,
    single: true,
    type: "single"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateMonthYearItem, {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    },
    text1: "Tháng 4",
    selected: false,
    hovered: false,
    single: true,
    type: "single"
  }), /*#__PURE__*/React.createElement(DateMonthYearItem, {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    },
    text1: "Tháng 5",
    selected: false,
    hovered: false,
    single: true,
    type: "single"
  }), /*#__PURE__*/React.createElement(DateMonthYearItem, {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    },
    text1: "Tháng 6",
    selected: false,
    hovered: false,
    single: true,
    type: "single"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateMonthYearItem, {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    },
    text1: "Tháng 7",
    selected: false,
    hovered: false,
    single: true,
    type: "single"
  }), /*#__PURE__*/React.createElement(DateMonthYearItem, {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    },
    text1: "Tháng 8",
    selected: false,
    hovered: false,
    single: true,
    type: "single"
  }), /*#__PURE__*/React.createElement(DateMonthYearItem, {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    },
    text1: "Tháng 9",
    selected: false,
    hovered: false,
    single: true,
    type: "single"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateMonthYearItem, {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    },
    text1: "Tháng 10",
    selected: false,
    hovered: false,
    single: true,
    type: "single"
  }), /*#__PURE__*/React.createElement(DateMonthYearItem, {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    },
    text1: "Tháng 11",
    selected: false,
    hovered: false,
    single: true,
    type: "single"
  }), /*#__PURE__*/React.createElement(DateMonthYearItem, {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    },
    text1: "Tháng 12",
    selected: false,
    hovered: false,
    single: true,
    type: "single"
  })))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 324,
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgb(234,236,240), 0px 4px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
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
      height: 48,
      overflow: "hidden",
      borderRadius: "8px 8px 0px 0px",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 16,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconArrowLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 292,
      top: 16,
      width: 16,
      height: 16
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowRight, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 124,
      top: 14,
      width: 77,
      height: 20,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)"
    }
  }, props.text1 ?? "2020-2029")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "8px 8px 8px 8px",
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
      gap: 10,
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
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateMonthYearItem, {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    },
    text1: "2019",
    selected: false,
    hovered: false,
    single: true,
    type: "disable"
  }), /*#__PURE__*/React.createElement(DateMonthYearItem, {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    },
    text1: "2020",
    selected: false,
    hovered: false,
    single: true,
    type: "single"
  }), /*#__PURE__*/React.createElement(DateMonthYearItem, {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    },
    text1: "2021",
    selected: false,
    hovered: false,
    single: true,
    type: "single"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateMonthYearItem, {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    },
    text1: "2022",
    selected: false,
    hovered: false,
    single: true,
    type: "single"
  }), /*#__PURE__*/React.createElement(DateMonthYearItem, {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    },
    text1: "2023",
    selected: false,
    hovered: false,
    single: true,
    type: "single"
  }), /*#__PURE__*/React.createElement(DateMonthYearItem, {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    },
    text1: "2024",
    selected: false,
    hovered: false,
    single: true,
    type: "single"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateMonthYearItem, {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    },
    text1: "2025",
    selected: false,
    hovered: false,
    single: true,
    type: "single"
  }), /*#__PURE__*/React.createElement(DateMonthYearItem, {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    },
    text1: "2026",
    selected: false,
    hovered: false,
    single: true,
    type: "single"
  }), /*#__PURE__*/React.createElement(DateMonthYearItem, {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    },
    text1: "2027",
    selected: false,
    hovered: false,
    single: true,
    type: "single"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement(DateMonthYearItem, {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    },
    text1: "2028",
    selected: false,
    hovered: false,
    single: true,
    type: "single"
  }), /*#__PURE__*/React.createElement(DateMonthYearItem, {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    },
    text1: "2029",
    selected: false,
    hovered: false,
    single: true,
    type: "single"
  }), /*#__PURE__*/React.createElement(DateMonthYearItem, {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    },
    text1: "2030",
    selected: false,
    hovered: false,
    single: true,
    type: "disable"
  })))));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 324,
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px rgb(234,236,240), 0px 4px 16px -4px rgba(16,24,40,0.08), 0px 4px 6px -2px rgba(16,24,40,0.03)",
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
      height: 48,
      overflow: "hidden",
      borderRadius: "8px 8px 0px 0px",
      backgroundColor: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      top: 16,
      width: 16,
      height: 16
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconArrowLeft, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 292,
      top: 16,
      width: 16,
      height: 16
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconArrowRight, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 144,
      top: 14,
      width: 36,
      height: 20,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,64,84)"
    }
  }, props.text1 ?? "2023")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "8px 8px 8px 8px",
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
      gap: 10,
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
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    }
  }, props.icon3 ?? /*#__PURE__*/React.createElement(DateMonthYearItem, {
    text1: "Q1",
    selected: false,
    hovered: false,
    single: true,
    type: "single"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    }
  }, props.icon4 ?? /*#__PURE__*/React.createElement(DateMonthYearItem, {
    text1: "Q2",
    selected: false,
    hovered: false,
    single: true,
    type: "single"
  })), /*#__PURE__*/React.createElement(DateMonthYearItem, {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    },
    text1: "Q3",
    selected: false,
    hovered: false,
    single: true,
    type: "single"
  }), /*#__PURE__*/React.createElement(DateMonthYearItem, {
    style: {
      position: "relative",
      height: 32,
      flexGrow: 1,
      width: "auto"
    },
    text1: "Q4",
    selected: false,
    hovered: false,
    single: true,
    type: "single"
  })))));
  const __impls = {
    // figma: Type=Date Range
    "type=date range": __body0,
    // figma: Type=Month range
    "type=month range": __body1,
    // figma: Type=Date
    "type=date": __body2,
    // figma: Type=DateTime
    "type=datetime": __body3,
    // figma: Type=Month
    "type=month": __body4,
    // figma: Type=Year
    "type=year": __body5,
    // figma: Type=Quarter
    "type=quarter": __body6
  };
  return (__impls[__vkey_DateCalendarDropdown(props)] ?? __body2)();
}

// figma node: 275:59039 Icon/Search
function IconSearch(_p = {}) {
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
    width: 13.518,
    height: 13.518,
    viewBox: "0 0 13.518 13.518",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.982,
      top: 0.982,
      width: 13.518,
      height: 13.518
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.518 12.811 L 9.742 9.035 C 10.649 7.945 11.101 6.548 11.005 5.134 C 10.908 3.719 10.27 2.396 9.223 1.441 C 8.176 0.485 6.801 -0.031 5.384 0.001 C 3.966 0.034 2.616 0.611 1.614 1.614 C 0.611 2.616 0.034 3.966 0.001 5.384 C -0.031 6.801 0.485 8.176 1.441 9.223 C 2.396 10.27 3.719 10.908 5.134 11.005 C 6.548 11.101 7.945 10.649 9.035 9.742 L 12.811 13.518 L 13.518 12.811 Z M 1.018 5.518 C 1.018 4.628 1.282 3.758 1.776 3.018 C 2.271 2.278 2.973 1.701 3.796 1.36 C 4.618 1.02 5.523 0.931 6.396 1.104 C 7.269 1.278 8.07 1.706 8.7 2.336 C 9.329 2.965 9.758 3.767 9.931 4.64 C 10.105 5.513 10.016 6.418 9.675 7.24 C 9.335 8.062 8.758 8.765 8.018 9.259 C 7.278 9.754 6.408 10.018 5.518 10.018 C 4.325 10.016 3.181 9.542 2.337 8.698 C 1.494 7.855 1.019 6.711 1.018 5.518 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
}

// figma node: 14447:15938 Color picker (5 variants)
var __venc_ColorPicker = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_ColorPicker = p => "state=" + __venc_ColorPicker(p.state);

function ColorPicker(_p = {}) {
  const props = {
    ..._p,
    state: _p.state ?? "default"
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, null)), /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "Select option")))));
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, null)), /*#__PURE__*/React.createElement("span", {
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
  }, props.text1 ?? "Select option")))));
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
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, null)), /*#__PURE__*/React.createElement("div", {
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
  }, props.text1 ?? "Select option")))));
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
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, null)), /*#__PURE__*/React.createElement("div", {
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
  }, props.text1 ?? "Select option")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))));
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
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon1 ?? /*#__PURE__*/React.createElement(IconSearch, null)), /*#__PURE__*/React.createElement("div", {
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
  }, props.text1 ?? "Select option")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      flexShrink: 0,
      alignSelf: "stretch",
      height: "auto"
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IconCloseOutline, null)))));
  const __impls = {
    // figma: State=Hover
    "state=hover": __body0,
    // figma: State=Default
    "state=default": __body1,
    // figma: State=Disabled
    "state=disabled": __body2,
    // figma: State=Filled
    "state=filled": __body3,
    // figma: State=Focused
    "state=focused": __body4
  };
  return (__impls[__vkey_ColorPicker(props)] ?? __body1)();
}

// figma node: 28:31591 Help icon/False/False/Top no arrow
function HelpIconFalseFalseTop(_p = {}) {
  const props = {
    ..._p,
    cursor: _p.cursor ?? true
  };
  return /*#__PURE__*/React.createElement("div", {
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
}

// figma node: 25:11134 Toggle (40 variants)
var __venc_Toggle = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_Toggle = p => "pressed=" + __venc_Toggle(p.pressed) + '|' + "size=" + __venc_Toggle(p.size) + '|' + "text=" + __venc_Toggle(p.text) + '|' + "state=" + __venc_Toggle(p.state) + '|' + "tooltip=" + __venc_Toggle(p.tooltip);

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

// figma node: 14960:15613 Components/Radio-Button/Solid (54 variants)
var __venc_ComponentsRadioButtonSolid = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_ComponentsRadioButtonSolid = p => "size=" + __venc_ComponentsRadioButtonSolid(p.size) + '|' + "position=" + __venc_ComponentsRadioButtonSolid(p.position) + '|' + "checked=" + __venc_ComponentsRadioButtonSolid(p.checked) + '|' + "disabled=" + __venc_ComponentsRadioButtonSolid(p.disabled) + '|' + "animation=" + __venc_ComponentsRadioButtonSolid(p.animation);

function ComponentsRadioButtonSolid(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "sm",
    position: _p.position ?? "left",
    checked: _p.checked ?? false,
    disabled: _p.disabled ?? true,
    animation: _p.animation ?? "none"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(240,240,240)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "1px 8px 1px 8px",
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
  }, props.text1 ?? "Hangzhou"));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "1px 8px 1px 8px",
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
  }, props.text1 ?? "Hangzhou"));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(240,240,240)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "1px 8px 1px 8px",
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
  }, props.text1 ?? "Hangzhou"));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "1px 8px 1px 8px",
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
  }, props.text1 ?? "Hangzhou"));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "2px 0px 0px 2px",
      backgroundColor: "rgb(240,240,240)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "1px 8px 1px 8px",
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
  }, props.text1 ?? "Hangzhou"));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "2px 0px 0px 2px",
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "1px 8px 1px 8px",
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
  }, props.text1 ?? "Hangzhou"));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "0px 2px 2px 0px",
      backgroundColor: "rgb(64,169,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "1px 8px 1px 8px",
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "0px 2px 2px 0px",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "1px 8px 1px 8px",
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
      color: "rgb(24,144,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(64,169,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "1px 8px 1px 8px",
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "1px 8px 1px 8px",
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
      color: "rgb(24,144,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "2px 0px 0px 2px",
      backgroundColor: "rgb(64,169,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "1px 8px 1px 8px",
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "2px 0px 0px 2px",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "1px 8px 1px 8px",
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
      color: "rgb(24,144,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "0px 2px 2px 0px",
      backgroundColor: "rgb(24,144,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "1px 8px 1px 8px",
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "0px 2px 2px 0px",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "1px 8px 1px 8px",
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
  }, props.text1 ?? "Hangzhou"));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(24,144,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "1px 8px 1px 8px",
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "1px 8px 1px 8px",
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
  }, props.text1 ?? "Hangzhou"));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "2px 0px 0px 2px",
      backgroundColor: "rgb(24,144,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "1px 8px 1px 8px",
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "2px 0px 0px 2px",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "1px 8px 1px 8px",
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
  }, props.text1 ?? "Hangzhou"));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(240,240,240)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 16px 5px 16px",
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
  }, props.text1 ?? "Hangzhou"));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 16px 5px 16px",
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
  }, props.text1 ?? "Hangzhou"));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(240,240,240)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 16px 5px 16px",
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
  }, props.text1 ?? "Hangzhou"));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 16px 5px 16px",
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
  }, props.text1 ?? "Hangzhou"));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "2px 0px 0px 2px",
      backgroundColor: "rgb(240,240,240)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 16px 5px 16px",
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
  }, props.text1 ?? "Hangzhou"));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "2px 0px 0px 2px",
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 16px 5px 16px",
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
  }, props.text1 ?? "Hangzhou"));
  const __body24 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "0px 2px 2px 0px",
      backgroundColor: "rgb(64,169,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 16px 5px 16px",
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body25 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "0px 2px 2px 0px",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 16px 5px 16px",
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
      color: "rgb(24,144,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body26 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(64,169,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 16px 5px 16px",
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body27 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 16px 5px 16px",
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
      color: "rgb(24,144,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body28 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "2px 0px 0px 2px",
      backgroundColor: "rgb(64,169,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 16px 5px 16px",
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body29 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "2px 0px 0px 2px",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 16px 5px 16px",
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
      color: "rgb(24,144,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body30 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "0px 2px 2px 0px",
      backgroundColor: "rgb(24,144,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 16px 5px 16px",
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body31 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "0px 2px 2px 0px",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 16px 5px 16px",
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
  }, props.text1 ?? "Hangzhou"));
  const __body32 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(24,144,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 16px 5px 16px",
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body33 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 16px 5px 16px",
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
  }, props.text1 ?? "Hangzhou"));
  const __body34 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "2px 0px 0px 2px",
      backgroundColor: "rgb(24,144,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 16px 5px 16px",
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
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body35 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "2px 0px 0px 2px",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "5px 16px 5px 16px",
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
  }, props.text1 ?? "Hangzhou"));
  const __body36 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(240,240,240)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 16px 8px 16px",
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
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body37 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 2,
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 16px 8px 16px",
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
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body38 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(240,240,240)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 16px 8px 16px",
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
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body39 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 16px 8px 16px",
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
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body40 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "2px 0px 0px 2px",
      backgroundColor: "rgb(240,240,240)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 16px 8px 16px",
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
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body41 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "2px 0px 0px 2px",
      backgroundColor: "rgb(245,245,245)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 16px 8px 16px",
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
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body42 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "0px 2px 2px 0px",
      backgroundColor: "rgb(64,169,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 16px 8px 16px",
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
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body43 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "0px 2px 2px 0px",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 16px 8px 16px",
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
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(24,144,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body44 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(64,169,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 16px 8px 16px",
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
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body45 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 16px 8px 16px",
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
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(24,144,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body46 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "2px 0px 0px 2px",
      backgroundColor: "rgb(64,169,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 16px 8px 16px",
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
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body47 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "2px 0px 0px 2px",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 16px 8px 16px",
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
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(24,144,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body48 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "0px 2px 2px 0px",
      backgroundColor: "rgb(24,144,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 16px 8px 16px",
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
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body49 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "0px 2px 2px 0px",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 16px 8px 16px",
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
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body50 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(24,144,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 16px 8px 16px",
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
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body51 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 16px 8px 16px",
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
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body52 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "2px 0px 0px 2px",
      backgroundColor: "rgb(24,144,255)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 16px 8px 16px",
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
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __body53 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      overflow: "hidden",
      borderRadius: "2px 0px 0px 2px",
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(217,217,217)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 16px 8px 16px",
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
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(0,0,0)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text1 ?? "Hangzhou"));
  const __impls = {
    // figma: Size=small, Position=right, Checked=true, Disabled=true, Animation=none
    "size=sm|position=right|checked=true|disabled=true|animation=none": __body0,
    // figma: Size=small, Position=right, Checked=false, Disabled=true, Animation=none
    "size=sm|position=right|checked=false|disabled=true|animation=none": __body1,
    // figma: Size=small, Position=center, Checked=true, Disabled=true, Animation=none
    "size=sm|position=center|checked=true|disabled=true|animation=none": __body2,
    // figma: Size=small, Position=center, Checked=false, Disabled=true, Animation=none
    "size=sm|position=center|checked=false|disabled=true|animation=none": __body3,
    // figma: Size=small, Position=left, Checked=true, Disabled=true, Animation=none
    "size=sm|position=left|checked=true|disabled=true|animation=none": __body4,
    // figma: Size=small, Position=left, Checked=false, Disabled=true, Animation=none
    "size=sm|position=left|checked=false|disabled=true|animation=none": __body5,
    // figma: Size=small, Position=right, Checked=true, Disabled=false, Animation=hovered
    "size=sm|position=right|checked=true|disabled=false|animation=hovered": __body6,
    // figma: Size=small, Position=right, Checked=false, Disabled=false, Animation=hovered
    "size=sm|position=right|checked=false|disabled=false|animation=hovered": __body7,
    // figma: Size=small, Position=center, Checked=true, Disabled=false, Animation=hovered
    "size=sm|position=center|checked=true|disabled=false|animation=hovered": __body8,
    // figma: Size=small, Position=center, Checked=false, Disabled=false, Animation=hovered
    "size=sm|position=center|checked=false|disabled=false|animation=hovered": __body9,
    // figma: Size=small, Position=left, Checked=true, Disabled=false, Animation=hovered
    "size=sm|position=left|checked=true|disabled=false|animation=hovered": __body10,
    // figma: Size=small, Position=left, Checked=false, Disabled=false, Animation=hovered
    "size=sm|position=left|checked=false|disabled=false|animation=hovered": __body11,
    // figma: Size=small, Position=right, Checked=true, Disabled=false, Animation=none
    "size=sm|position=right|checked=true|disabled=false|animation=none": __body12,
    // figma: Size=small, Position=right, Checked=false, Disabled=false, Animation=none
    "size=sm|position=right|checked=false|disabled=false|animation=none": __body13,
    // figma: Size=small, Position=center, Checked=true, Disabled=false, Animation=none
    "size=sm|position=center|checked=true|disabled=false|animation=none": __body14,
    // figma: Size=small, Position=center, Checked=false, Disabled=false, Animation=none
    "size=sm|position=center|checked=false|disabled=false|animation=none": __body15,
    // figma: Size=small, Position=left, Checked=true, Disabled=false, Animation=none
    "size=sm|position=left|checked=true|disabled=false|animation=none": __body16,
    // figma: Size=small, Position=left, Checked=false, Disabled=false, Animation=none
    "size=sm|position=left|checked=false|disabled=false|animation=none": __body17,
    // figma: Size=medium, Position=right, Checked=true, Disabled=true, Animation=none
    "size=md|position=right|checked=true|disabled=true|animation=none": __body18,
    // figma: Size=medium, Position=right, Checked=false, Disabled=true, Animation=none
    "size=md|position=right|checked=false|disabled=true|animation=none": __body19,
    // figma: Size=medium, Position=center, Checked=true, Disabled=true, Animation=none
    "size=md|position=center|checked=true|disabled=true|animation=none": __body20,
    // figma: Size=medium, Position=center, Checked=false, Disabled=true, Animation=none
    "size=md|position=center|checked=false|disabled=true|animation=none": __body21,
    // figma: Size=medium, Position=left, Checked=true, Disabled=true, Animation=none
    "size=md|position=left|checked=true|disabled=true|animation=none": __body22,
    // figma: Size=medium, Position=left, Checked=false, Disabled=true, Animation=none
    "size=md|position=left|checked=false|disabled=true|animation=none": __body23,
    // figma: Size=medium, Position=right, Checked=true, Disabled=false, Animation=hovered
    "size=md|position=right|checked=true|disabled=false|animation=hovered": __body24,
    // figma: Size=medium, Position=right, Checked=false, Disabled=false, Animation=hovered
    "size=md|position=right|checked=false|disabled=false|animation=hovered": __body25,
    // figma: Size=medium, Position=center, Checked=true, Disabled=false, Animation=hovered
    "size=md|position=center|checked=true|disabled=false|animation=hovered": __body26,
    // figma: Size=medium, Position=center, Checked=false, Disabled=false, Animation=hovered
    "size=md|position=center|checked=false|disabled=false|animation=hovered": __body27,
    // figma: Size=medium, Position=left, Checked=true, Disabled=false, Animation=hovered
    "size=md|position=left|checked=true|disabled=false|animation=hovered": __body28,
    // figma: Size=medium, Position=left, Checked=false, Disabled=false, Animation=hovered
    "size=md|position=left|checked=false|disabled=false|animation=hovered": __body29,
    // figma: Size=medium, Position=right, Checked=true, Disabled=false, Animation=none
    "size=md|position=right|checked=true|disabled=false|animation=none": __body30,
    // figma: Size=medium, Position=right, Checked=false, Disabled=false, Animation=none
    "size=md|position=right|checked=false|disabled=false|animation=none": __body31,
    // figma: Size=medium, Position=center, Checked=true, Disabled=false, Animation=none
    "size=md|position=center|checked=true|disabled=false|animation=none": __body32,
    // figma: Size=medium, Position=center, Checked=false, Disabled=false, Animation=none
    "size=md|position=center|checked=false|disabled=false|animation=none": __body33,
    // figma: Size=medium, Position=left, Checked=true, Disabled=false, Animation=none
    "size=md|position=left|checked=true|disabled=false|animation=none": __body34,
    // figma: Size=medium, Position=left, Checked=false, Disabled=false, Animation=none
    "size=md|position=left|checked=false|disabled=false|animation=none": __body35,
    // figma: Size=large, Position=right, Checked=true, Disabled=true, Animation=none
    "size=lg|position=right|checked=true|disabled=true|animation=none": __body36,
    // figma: Size=large, Position=right, Checked=false, Disabled=true, Animation=none
    "size=lg|position=right|checked=false|disabled=true|animation=none": __body37,
    // figma: Size=large, Position=center, Checked=true, Disabled=true, Animation=none
    "size=lg|position=center|checked=true|disabled=true|animation=none": __body38,
    // figma: Size=large, Position=center, Checked=false, Disabled=true, Animation=none
    "size=lg|position=center|checked=false|disabled=true|animation=none": __body39,
    // figma: Size=large, Position=left, Checked=true, Disabled=true, Animation=none
    "size=lg|position=left|checked=true|disabled=true|animation=none": __body40,
    // figma: Size=large, Position=left, Checked=false, Disabled=true, Animation=none
    "size=lg|position=left|checked=false|disabled=true|animation=none": __body41,
    // figma: Size=large, Position=right, Checked=true, Disabled=false, Animation=hovered
    "size=lg|position=right|checked=true|disabled=false|animation=hovered": __body42,
    // figma: Size=large, Position=right, Checked=false, Disabled=false, Animation=hovered
    "size=lg|position=right|checked=false|disabled=false|animation=hovered": __body43,
    // figma: Size=large, Position=center, Checked=true, Disabled=false, Animation=hovered
    "size=lg|position=center|checked=true|disabled=false|animation=hovered": __body44,
    // figma: Size=large, Position=center, Checked=false, Disabled=false, Animation=hovered
    "size=lg|position=center|checked=false|disabled=false|animation=hovered": __body45,
    // figma: Size=large, Position=left, Checked=true, Disabled=false, Animation=hovered
    "size=lg|position=left|checked=true|disabled=false|animation=hovered": __body46,
    // figma: Size=large, Position=left, Checked=false, Disabled=false, Animation=hovered
    "size=lg|position=left|checked=false|disabled=false|animation=hovered": __body47,
    // figma: Size=large, Position=right, Checked=true, Disabled=false, Animation=none
    "size=lg|position=right|checked=true|disabled=false|animation=none": __body48,
    // figma: Size=large, Position=right, Checked=false, Disabled=false, Animation=none
    "size=lg|position=right|checked=false|disabled=false|animation=none": __body49,
    // figma: Size=large, Position=center, Checked=true, Disabled=false, Animation=none
    "size=lg|position=center|checked=true|disabled=false|animation=none": __body50,
    // figma: Size=large, Position=center, Checked=false, Disabled=false, Animation=none
    "size=lg|position=center|checked=false|disabled=false|animation=none": __body51,
    // figma: Size=large, Position=left, Checked=true, Disabled=false, Animation=none
    "size=lg|position=left|checked=true|disabled=false|animation=none": __body52,
    // figma: Size=large, Position=left, Checked=false, Disabled=false, Animation=none
    "size=lg|position=left|checked=false|disabled=false|animation=none": __body53
  };
  return (__impls[__vkey_ComponentsRadioButtonSolid(props)] ?? __body5)();
}

// figma node: 33:7045 Tooltip (28 variants)
var __venc_Tooltip2 = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_Tooltip2 = p => "supportingText=" + __venc_Tooltip2(p.supportingText) + '|' + "theme=" + __venc_Tooltip2(p.theme) + '|' + "arrow=" + __venc_Tooltip2(p.arrow);

// Globals for scripts loaded after this file.
window.DateMonthYearItem = DateMonthYearItem;
window.DatePickerdateItem = DatePickerdateItem;
window.DateItem = DateItem;
window.ScrollBar = ScrollBar;
window.DateTimeSelect = DateTimeSelect;
window.IconArrowLeft = IconArrowLeft;
window.Edit = Edit;
window.TextText = TextText;
window.DateCalendarDropdown = DateCalendarDropdown;
window.IconSearch = IconSearch;
window.ColorPicker = ColorPicker;
window.HelpIconFalseFalseTop = HelpIconFalseFalseTop;
window.Toggle = Toggle;
window.ComponentsRadioButtonSolid = ComponentsRadioButtonSolid;
