// Components bundle — part 5 of 5. Load the parts in order as plain
// classic <script> tags: they share one global scope, so later parts can call
// declarations from earlier ones exactly as in the original single-file bundle.

function TextParagraph2(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "md",
    text: _p.text ?? "Paragraph text"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 16,
      whiteSpace: "nowrap",
      lineHeight: "24px",
      color: "rgb(52,55,65)",
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
      gap: 4,
      alignItems: "flex-start",
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
      whiteSpace: "nowrap",
      lineHeight: "20px",
      color: "rgb(52,55,65)",
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
      gap: 4,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(52,55,65)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.text));
  const __impls = {
    // figma: Size=Medium
    "size=md": __body0,
    // figma: Size=Small
    "size=sm": __body1,
    // figma: Size=X-Small
    "size=xs": __body2
  };
  return (__impls[__vkey_TextParagraph2(props)] ?? __body0)();
}

// figma node: 766:36723 Callout (8 variants)
var __venc_Callout = v => String(v).replace(/[%|=]/g, encodeURIComponent);

var __vkey_Callout = p => "color=" + __venc_Callout(p.color) + '|' + "size=" + __venc_Callout(p.size);

function Callout(_p = {}) {
  const props = {
    ..._p,
    color: _p.color ?? "success",
    size: _p.size ?? "md",
    icon: _p.icon ?? true,
    hasContent: _p.hasContent ?? true,
    button: _p.button ?? false,
    description: _p.description ?? true
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 400,
      backgroundColor: "rgb(230,241,250)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IInCircle, null)), /*#__PURE__*/React.createElement(TextParagraph2, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text: "Title",
    size: "md"
  })), props.hasContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.description && /*#__PURE__*/React.createElement(TextParagraph2, {
    style: {
      position: "relative",
      height: 40,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc, vitae felis viverra ligula enim enim.",
    size: "sm"
  }), props.button && /*#__PURE__*/React.createElement(Button6, {
    style: {
      position: "relative",
      height: 32,
      flexShrink: 0
    },
    iconLeft: false,
    style2: "filled",
    color: "primary*",
    size: "sm",
    disabled: false,
    loading: false,
    iconOnly: false
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 400,
      backgroundColor: "rgb(230,249,247)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IInCircle, null)), /*#__PURE__*/React.createElement(TextParagraph2, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text: "Title",
    size: "md"
  })), props.hasContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.description && /*#__PURE__*/React.createElement(TextParagraph2, {
    style: {
      position: "relative",
      height: 40,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc, vitae felis viverra ligula enim enim.",
    size: "sm"
  }), props.button && /*#__PURE__*/React.createElement(Button6, {
    style: {
      position: "relative",
      height: 32,
      flexShrink: 0
    },
    iconLeft: false,
    style2: "filled",
    color: "success",
    size: "sm",
    disabled: false,
    loading: false,
    iconOnly: false
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 400,
      backgroundColor: "rgb(255,249,232)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IInCircle, null)), /*#__PURE__*/React.createElement(TextParagraph2, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text: "Title",
    size: "md"
  })), props.hasContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.description && /*#__PURE__*/React.createElement(TextParagraph2, {
    style: {
      position: "relative",
      height: 40,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc, vitae felis viverra ligula enim enim.",
    size: "sm"
  }), props.button && /*#__PURE__*/React.createElement(Button6, {
    style: {
      position: "relative",
      height: 32,
      flexShrink: 0
    },
    iconLeft: false,
    style2: "filled",
    color: "warning",
    size: "sm",
    disabled: false,
    loading: false,
    iconOnly: false
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 400,
      backgroundColor: "rgb(248,233,233)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
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
      gap: 8,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IInCircle, null)), /*#__PURE__*/React.createElement(TextParagraph2, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text: "Title",
    size: "md"
  })), props.hasContent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, props.description && /*#__PURE__*/React.createElement(TextParagraph2, {
    style: {
      position: "relative",
      height: 40,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc, vitae felis viverra ligula enim enim.",
    size: "sm"
  }), props.button && /*#__PURE__*/React.createElement(Button6, {
    style: {
      position: "relative",
      height: 32,
      flexShrink: 0
    },
    iconLeft: false,
    style2: "filled",
    color: "danger",
    size: "sm",
    disabled: false,
    loading: false,
    iconOnly: false
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 400,
      backgroundColor: "rgb(230,241,250)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 8px 8px 8px",
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
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IInCircle, null)), /*#__PURE__*/React.createElement(TextParagraph2, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text: "Title",
    size: "md"
  })), props.hasContent && /*#__PURE__*/React.createElement("div", {
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
  }, props.description && /*#__PURE__*/React.createElement(TextParagraph2, {
    style: {
      position: "relative",
      height: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc, vitae felis viverra ligula enim enim.",
    size: "xs"
  }), props.button && /*#__PURE__*/React.createElement(Button6, {
    style: {
      position: "relative",
      height: 32,
      flexShrink: 0
    },
    iconLeft: false,
    style2: "filled",
    color: "primary*",
    size: "sm",
    disabled: false,
    loading: false,
    iconOnly: false
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 400,
      backgroundColor: "rgb(230,249,247)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 8px 8px 8px",
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
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IInCircle, null)), /*#__PURE__*/React.createElement(TextParagraph2, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text: "Title",
    size: "md"
  })), props.hasContent && /*#__PURE__*/React.createElement("div", {
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
  }, props.description && /*#__PURE__*/React.createElement(TextParagraph2, {
    style: {
      position: "relative",
      height: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc, vitae felis viverra ligula enim enim.",
    size: "xs"
  }), props.button && /*#__PURE__*/React.createElement(Button6, {
    style: {
      position: "relative",
      height: 32,
      flexShrink: 0
    },
    iconLeft: false,
    style2: "filled",
    color: "success",
    size: "sm",
    disabled: false,
    loading: false,
    iconOnly: false
  })));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 400,
      backgroundColor: "rgb(255,249,232)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 8px 8px 8px",
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
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IInCircle, null)), /*#__PURE__*/React.createElement(TextParagraph2, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text: "Title",
    size: "md"
  })), props.hasContent && /*#__PURE__*/React.createElement("div", {
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
  }, props.description && /*#__PURE__*/React.createElement(TextParagraph2, {
    style: {
      position: "relative",
      height: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc, vitae felis viverra ligula enim enim.",
    size: "xs"
  }), props.button && /*#__PURE__*/React.createElement(Button6, {
    style: {
      position: "relative",
      height: 32,
      flexShrink: 0
    },
    iconLeft: false,
    style2: "filled",
    color: "warning",
    size: "sm",
    disabled: false,
    loading: false,
    iconOnly: false
  })));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 400,
      backgroundColor: "rgb(248,233,233)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "8px 8px 8px 8px",
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
  }, props.icon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      flexShrink: 0
    }
  }, props.icon2 ?? /*#__PURE__*/React.createElement(IInCircle, null)), /*#__PURE__*/React.createElement(TextParagraph2, {
    style: {
      position: "relative",
      flexGrow: 1,
      width: "auto"
    },
    text: "Title",
    size: "md"
  })), props.hasContent && /*#__PURE__*/React.createElement("div", {
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
  }, props.description && /*#__PURE__*/React.createElement(TextParagraph2, {
    style: {
      position: "relative",
      height: 32,
      flexShrink: 0,
      alignSelf: "stretch",
      width: "auto"
    },
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nunc, vitae felis viverra ligula enim enim.",
    size: "xs"
  }), props.button && /*#__PURE__*/React.createElement(Button6, {
    style: {
      position: "relative",
      height: 32,
      flexShrink: 0
    },
    iconLeft: false,
    style2: "filled",
    color: "danger",
    size: "sm",
    disabled: false,
    loading: false,
    iconOnly: false
  })));
  const __impls = {
    // figma: Color=Primary, Size=Medium
    "color=primary|size=md": __body0,
    // figma: Color=Success, Size=Medium
    "color=success|size=md": __body1,
    // figma: Color=Warning, Size=Medium
    "color=warning|size=md": __body2,
    // figma: Color=Danger, Size=Medium
    "color=danger|size=md": __body3,
    // figma: Color=Primary, Size=Small
    "color=primary|size=sm": __body4,
    // figma: Color=Success, Size=Small
    "color=success|size=sm": __body5,
    // figma: Color=Warning, Size=Small
    "color=warning|size=sm": __body6,
    // figma: Color=Danger, Size=Small
    "color=danger|size=sm": __body7
  };
  return (__impls[__vkey_Callout(props)] ?? __body1)();
}

// Globals for scripts loaded after this file.
window.TextParagraph2 = TextParagraph2;
window.Callout = Callout;
