// src/icons/Activity.tsx
import { jsx } from "react/jsx-runtime";
function Activity({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx("path", { d: "M3 12H5L8 8L12 20L15 4L19 12H21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/Adjustment.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function Adjustment({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx2("path", { d: "M3 5H6", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx2("path", { d: "M10 5L21 5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx2("path", { d: "M16 12L21 12", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx2("path", { d: "M3 12L12 12", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx2("path", { d: "M3 19H6", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx2("path", { d: "M10 19L21 19", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx2("circle", { cx: "8", cy: "5", r: "2", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx2("circle", { cx: "14", cy: "12", r: "2", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx2("circle", { cx: "8", cy: "19", r: "2", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Airplane.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function Airplane({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs2(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx3("path", { d: "M6.136 18.1741L20.6295 7.07754C21.1813 6.65508 20.9987 5.78185 20.3239 5.61578L18.0312 5.05156C16.1377 4.58557 14.1422 5.21306 12.8562 6.67892L10.763 9.06471L6.9753 8.16987L6.97529 8.16987C6.34713 8.02147 6.03304 7.94726 5.72862 7.96887C5.45917 7.988 5.19639 8.06151 4.95613 8.18496C4.68468 8.32445 4.45469 8.55085 3.9947 9.00365L3.492 9.4985L8.33933 12.535L6.136 14.7039H4.29916C3.6401 14.7039 3.31057 14.7039 3.16847 14.8302C3.04535 14.9397 2.98407 15.1028 3.00463 15.2663C3.02837 15.4549 3.27636 15.6719 3.77235 16.1059L6.136 18.1741Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx3("path", { d: "M15.0602 15.1996L14.6351 18.3732L13.3601 19.1666L12.2661 17.4649", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Airplay.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function Airplay({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs3(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx4("path", { d: "M10.8686 16.1314L9.73137 17.2686C8.87462 18.1254 8.44624 18.5538 8.4173 18.9215C8.39218 19.2407 8.52136 19.5525 8.76477 19.7604C9.04529 20 9.65111 20 10.8627 20H13.1373C14.3489 20 14.9547 20 15.2352 19.7604C15.4786 19.5525 15.6078 19.2407 15.5827 18.9215C15.5538 18.5538 15.1254 18.1254 14.2686 17.2686L14.2686 17.2686L13.1314 16.1314C12.7354 15.7354 12.5373 15.5373 12.309 15.4632C12.1082 15.3979 11.8918 15.3979 11.691 15.4632C11.4627 15.5373 11.2646 15.7354 10.8686 16.1314Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx4("path", { d: "M5 17.8174C4.87081 17.7783 4.75133 17.7307 4.63803 17.673C4.07354 17.3854 3.6146 16.9265 3.32698 16.362C3 15.7202 3 14.8802 3 13.2V8.8C3 7.11984 3 6.27976 3.32698 5.63803C3.6146 5.07354 4.07354 4.6146 4.63803 4.32698C5.27976 4 6.11984 4 7.8 4H16.2C17.8802 4 18.7202 4 19.362 4.32698C19.9265 4.6146 20.3854 5.07354 20.673 5.63803C21 6.27976 21 7.11984 21 8.8V13.2C21 14.8802 21 15.7202 20.673 16.362C20.3854 16.9265 19.9265 17.3854 19.362 17.673C19.2487 17.7307 19.1292 17.7783 19 17.8174", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Airpods.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function Airpods({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs4(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx5("path", { d: "M3 7.2V10.2C3 11.1941 3.80589 12 4.8 12C5.46274 12 6 12.5373 6 13.2V19C6 20.1046 6.89543 21 8 21C9.10457 21 10 20.1046 10 19V5.8C10 4.2536 8.7464 3 7.2 3C4.8804 3 3 4.8804 3 7.2Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx5("path", { d: "M21 7.2V10.2C21 11.1941 20.1941 12 19.2 12C18.5373 12 18 12.5373 18 13.2V19C18 20.1046 17.1046 21 16 21C14.8954 21 14 20.1046 14 19V5.8C14 4.2536 15.2536 3 16.8 3C19.1196 3 21 4.8804 21 7.2Z", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/AlignBottom.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function AlignBottom({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs5(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx6("path", { d: "M3 21H21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx6("rect", { x: "6", y: "3", width: "4", height: "14", rx: "1", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx6("rect", { x: "14", y: "9", width: "4", height: "8", rx: "1", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/AlignHorizontalCenters.tsx
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
function AlignHorizontalCenters({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs6(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx7("path", { d: "M12 3L12 6M12 21L12 18M12 10L12 14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx7("rect", { x: "4", y: "6", width: "16", height: "4", rx: "1", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx7("rect", { x: "8", y: "14", width: "8", height: "4", rx: "1", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/AlignLeft.tsx
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
function AlignLeft({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs7(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx8("path", { d: "M3 3V21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx8("rect", { x: "7", y: "6", width: "14", height: "4", rx: "1", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx8("rect", { x: "7", y: "14", width: "8", height: "4", rx: "1", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/AlignRight.tsx
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
function AlignRight({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs8(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx9("path", { d: "M21 3V21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx9("rect", { x: "3", y: "6", width: "14", height: "4", rx: "1", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx9("rect", { x: "9", y: "14", width: "8", height: "4", rx: "1", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/AlignTop.tsx
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
function AlignTop({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs9(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx10("path", { d: "M3 3H21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx10("rect", { x: "6", y: "7", width: "4", height: "14", rx: "1", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx10("rect", { x: "14", y: "7", width: "4", height: "8", rx: "1", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/AlignVerticalCenters.tsx
import { jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
function AlignVerticalCenters({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs10(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx11("path", { d: "M3 12L6 12M21 12L18 12M10 12L14 12", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx11("rect", { x: "6", y: "20", width: "16", height: "4", rx: "1", transform: "rotate(-90 6 20)", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx11("rect", { x: "14", y: "16", width: "8", height: "4", rx: "1", transform: "rotate(-90 14 16)", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Ambulance.tsx
import { jsx as jsx12, jsxs as jsxs11 } from "react/jsx-runtime";
function Ambulance({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs11(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx12("circle", { cx: "7", cy: "18", r: "2", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx12("circle", { cx: "18", cy: "18", r: "2", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx12("path", { d: "M14 7V6C14 4.89543 13.1046 4 12 4L4 4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H5M14 7H15.4384C16.3562 7 17.1561 7.62459 17.3787 8.51493L17.8106 10.2425C17.9219 10.6877 18.3219 11 18.7808 11H20C21.1046 11 22 11.8954 22 13V17C22 17.5523 21.5523 18 21 18H20M14 7V18M14 18H16M14 18H9", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx12("path", { d: "M6 10H10M8 12L8 8", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Anchor.tsx
import { jsx as jsx13, jsxs as jsxs12 } from "react/jsx-runtime";
function Anchor({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs12(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx13("path", { d: "M5.97058 13H3.53829C3.21662 13 2.95707 13.3952 3.00594 13.7763C4.24099 23.4079 19.759 23.4079 20.9941 13.7763C21.0429 13.3952 20.7834 13 20.4617 13H18.0294", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx13("path", { d: "M12 7L12 21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx13("circle", { cx: "12", cy: "5", r: "2", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx13("path", { d: "M10 10H14", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Android.tsx
import { jsx as jsx14, jsxs as jsxs13 } from "react/jsx-runtime";
function Android({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs13(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx14("path", { d: "M19 10H5C5 6.13401 8.13401 3 12 3C15.866 3 19 6.13401 19 10Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx14("path", { d: "M16.5 4L17.25 3", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx14("path", { d: "M7.5 4L6.75 3", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx14("path", { d: "M9.0001 7H9", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx14("path", { d: "M15.0001 7H15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx14("path", { d: "M6 14H18V17.8C18 18.9201 18 19.4802 17.782 19.908C17.5903 20.2843 17.2843 20.5903 16.908 20.782C16.4802 21 15.9201 21 14.8 21H9.2C8.07989 21 7.51984 21 7.09202 20.782C6.71569 20.5903 6.40973 20.2843 6.21799 19.908C6 19.4802 6 18.9201 6 17.8V14Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx14("path", { d: "M2 16.5C2 15.1193 3.11929 14 4.5 14H6V17C6 18.1046 5.10457 19 4 19C2.89543 19 2 18.1046 2 17V16.5Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx14("path", { d: "M18 14H19.5C20.8807 14 22 15.1193 22 16.5V17C22 18.1046 21.1046 19 20 19C18.8954 19 18 18.1046 18 17V14Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Annotation.tsx
import { jsx as jsx15, jsxs as jsxs14 } from "react/jsx-runtime";
function Annotation({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs14(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx15("path", { d: "M3 8.8C3 7.11984 3 6.27976 3.32698 5.63803C3.6146 5.07354 4.07354 4.6146 4.63803 4.32698C5.27976 4 6.11984 4 7.8 4H16.2C17.8802 4 18.7202 4 19.362 4.32698C19.9265 4.6146 20.3854 5.07354 20.673 5.63803C21 6.27976 21 7.11984 21 8.8V14.1347C21 14.9391 21 15.3413 20.9234 15.6738C20.6656 16.7922 19.7922 17.6656 18.6738 17.9234C18.3413 18 17.9391 18 17.1347 18C16.665 18 16.4301 18 16.2048 18.0256C15.4595 18.1104 14.7531 18.403 14.1662 18.87C13.9888 19.0112 13.8227 19.1773 13.4905 19.5095L12 21L9.91806 18.9181C9.5911 18.5911 9.42763 18.4276 9.23843 18.3083C9.0463 18.1871 8.83493 18.0996 8.61339 18.0494C8.39525 18 8.16405 18 7.70167 18C6.11421 18 5.32048 18 4.70728 17.7072C4.08785 17.4114 3.58859 16.9121 3.29281 16.2927C3 15.6795 3 14.8858 3 13.2983V8.8Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx15("path", { d: "M7.64442 11H7.34565M8 11C8 11.2761 7.77614 11.5 7.5 11.5C7.22386 11.5 7 11.2761 7 11C7 10.7239 7.22386 10.5 7.5 10.5C7.77614 10.5 8 10.7239 8 11Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx15("path", { d: "M12.1444 11H11.8456M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx15("path", { d: "M16.6444 11H16.3456M17 11C17 11.2761 16.7761 11.5 16.5 11.5C16.2239 11.5 16 11.2761 16 11C16 10.7239 16.2239 10.5 16.5 10.5C16.7761 10.5 17 10.7239 17 11Z", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/AppleTv.tsx
import { jsx as jsx16, jsxs as jsxs15 } from "react/jsx-runtime";
function AppleTv({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs15(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx16("path", { d: "M13.5527 7.35481V9.19234H15.0443V10.4056H13.5527V14.7532C13.5527 15.4019 13.8471 15.7328 14.5013 15.7328C14.6807 15.7295 14.8598 15.7166 15.0378 15.6941V16.917C14.7458 16.9637 14.4503 16.9852 14.1546 16.9814C12.6105 16.9814 12.0152 16.3912 12.0152 14.9115V10.4345H10.8441V9.21873H11.9825V7.3561L13.5527 7.35481ZM20.2587 16.9144H18.6231L15.8752 9.21873H17.5043L19.4343 15.4026H19.4736L21.4036 9.21873H23L20.2587 16.9144Z", fill: color }),
        /* @__PURE__ */ jsx16("path", { d: "M7.17194 7.7648C7.58796 7.27155 7.79423 6.63929 7.74768 6C7.10963 6.06065 6.52065 6.36329 6.10552 6.84378C5.89869 7.07388 5.74019 7.34197 5.63913 7.63259C5.53808 7.92321 5.49646 8.23063 5.51669 8.53714C5.83453 8.54316 6.14945 8.47655 6.43668 8.34253C6.7239 8.20851 6.97559 8.01074 7.17194 7.7648Z", fill: color }),
        /* @__PURE__ */ jsx16("path", { d: "M7.70993 8.65186C8.1107 8.66877 8.50273 8.77657 8.85445 8.96631C9.2061 9.15606 9.50834 9.4233 9.73824 9.74659C9.37647 9.96946 9.07727 10.278 8.86813 10.6441L8.79391 10.7837C8.63227 11.1135 8.54572 11.475 8.54098 11.8423C8.54331 12.3156 8.68473 12.7784 8.9482 13.1743C9.2117 13.5703 9.58636 13.8823 10.0263 14.0738L9.95601 14.2798C9.78317 14.7571 9.54946 15.2112 9.2607 15.6314C8.80273 16.3342 8.29229 16.9669 7.55954 16.983C6.87265 16.998 6.6112 16.6036 5.88572 16.5542L5.73435 16.5494C4.89039 16.5494 4.66115 16.9745 3.92186 16.9996L3.78514 16.9947C3.11343 16.9279 2.59747 16.2119 2.1621 15.605C1.207 14.2424 0.487444 11.75 1.46875 10.0767C1.69408 9.66932 2.02394 9.32697 2.42577 9.08448C2.82761 8.84198 3.28754 8.70783 3.75877 8.69483C4.43332 8.68286 5.06192 9.10914 5.499 9.1626L5.58396 9.16846C6.02227 9.16841 6.79416 8.59986 7.70993 8.65186ZM7.42673 10.1665C7.31668 10.187 7.17829 10.2265 6.99411 10.2954C6.90948 10.3271 6.61457 10.4444 6.47263 10.4946C6.30812 10.5528 5.96918 10.6685 5.58396 10.6685C5.22586 10.6685 4.9153 10.5745 4.73826 10.5152C4.56096 10.4557 4.34725 10.369 4.23729 10.3267C3.93684 10.2109 3.82967 10.1946 3.78709 10.1948C3.57836 10.2028 3.37645 10.263 3.20116 10.3687C3.02249 10.4765 2.87828 10.627 2.78124 10.8023C2.77517 10.8132 2.76903 10.8246 2.76269 10.8355C2.51603 11.2561 2.42537 11.8973 2.5664 12.6978C2.70506 13.4844 3.03862 14.2402 3.38768 14.7398C3.50367 14.9014 3.60343 15.04 3.70506 15.1685C3.80809 15.2987 3.89342 15.3927 3.96385 15.4585C3.96971 15.464 3.97613 15.4684 3.98143 15.4732C4.02435 15.457 4.09048 15.4321 4.19725 15.3863C4.518 15.2486 5.00907 15.0494 5.73435 15.0494C6.47058 15.0494 6.97435 15.2629 7.27731 15.3921C7.38534 15.4382 7.4459 15.4604 7.47946 15.4722C7.48799 15.4653 7.50007 15.4592 7.51169 15.4488C7.63394 15.3391 7.78783 15.1446 8.00387 14.813L8.02438 14.7818C8.07179 14.7128 8.1148 14.6412 8.15817 14.5699C7.98955 14.3964 7.83449 14.2087 7.69919 14.0054C7.27412 13.3666 7.04472 12.6172 7.04099 11.8491C7.04094 11.8404 7.04087 11.8316 7.04099 11.8228C7.04841 11.2478 7.18102 10.6833 7.42673 10.1665Z", fill: color })
      ]
    }
  );
}

// src/icons/Apps.tsx
import { jsx as jsx17, jsxs as jsxs16 } from "react/jsx-runtime";
function Apps({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs16(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx17("rect", { x: "3", y: "3", width: "7", height: "7", rx: "2", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx17("rect", { x: "3", y: "14", width: "7", height: "7", rx: "2", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx17("rect", { x: "14", y: "14", width: "7", height: "7", rx: "2", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx17("rect", { x: "13.1719", y: "6.5", width: "6.12089", height: "6.12089", rx: "2", transform: "rotate(-45 13.1719 6.5)", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Archive.tsx
import { jsx as jsx18, jsxs as jsxs17 } from "react/jsx-runtime";
function Archive({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs17(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx18("path", { d: "M4 9H20V15.2C20 16.8802 20 17.7202 19.673 18.362C19.3854 18.9265 18.9265 19.3854 18.362 19.673C17.7202 20 16.8802 20 15.2 20H8.8C7.11984 20 6.27976 20 5.63803 19.673C5.07354 19.3854 4.6146 18.9265 4.32698 18.362C4 17.7202 4 16.8802 4 15.2V9Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx18("path", { d: "M10 13H14", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx18("path", { d: "M3 7.2C3 6.0799 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.07989 21 7.2V7.4C21 7.96005 21 8.24008 20.891 8.45399C20.7951 8.64215 20.6422 8.79513 20.454 8.89101C20.2401 9 19.9601 9 19.4 9H4.6C4.03995 9 3.75992 9 3.54601 8.89101C3.35785 8.79513 3.20487 8.64215 3.10899 8.45399C3 8.24008 3 7.96005 3 7.4V7.2Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/ArrowCollapseUp.tsx
import { jsx as jsx19, jsxs as jsxs18 } from "react/jsx-runtime";
function ArrowCollapseUp({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs18(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx19("path", { d: "M4 4H20", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx19("path", { d: "M12 20V8M16 12L12 8L8 12", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ArrowDown.tsx
import { jsx as jsx20 } from "react/jsx-runtime";
function ArrowDown({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx20(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx20("path", { d: "M12 4V20M17 15L12 20L7 15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/ArrowLeft.tsx
import { jsx as jsx21 } from "react/jsx-runtime";
function ArrowLeft({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx21(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx21("path", { d: "M20 12L4 12M9 7L4 12L9 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/ArrowRight.tsx
import { jsx as jsx22 } from "react/jsx-runtime";
function ArrowRight({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx22(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx22("path", { d: "M4 12L20 12M15 7L20 12L15 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/ArrowUp.tsx
import { jsx as jsx23 } from "react/jsx-runtime";
function ArrowUp({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx23(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx23("path", { d: "M12 20V4M17 9L12 4L7 9", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/AtSign.tsx
import { jsx as jsx24, jsxs as jsxs19 } from "react/jsx-runtime";
function AtSign({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs19(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx24("path", { d: "M15.8114 8.4C15.8114 9.59414 15.772 11.5 15.772 12.9C15.772 14.1417 15.79 16.7409 17.9914 16.9466C22.0799 16.9466 21.0378 9.06468 20.361 7.05337C19.8445 5.51862 18.6288 4.31431 17.0794 3.80273C13.8379 2.73242 10.3334 2.73242 7.09196 3.80273C5.5426 4.31431 4.32682 5.51862 3.81037 7.05337C2.72988 10.2643 2.72988 13.7357 3.81037 16.9466C4.32682 18.4814 5.5426 19.6857 7.09196 20.1973C9.58918 21.0218 12.2425 21.2111 14.8114 20.7652", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx24("path", { d: "M15.5843 10C14.8817 8.8044 13.5683 8 12.064 8C9.81952 8 8 9.79086 8 12C8 14.2091 9.81952 16 12.064 16C13.5683 16 14.8817 15.1956 15.5843 14", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Atom.tsx
import { jsx as jsx25, jsxs as jsxs20 } from "react/jsx-runtime";
function Atom({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs20(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx25("ellipse", { cx: "12.023", cy: "11.977", rx: "5", ry: "11.6849", transform: "rotate(45 12.023 11.977)", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx25("ellipse", { cx: "5", cy: "11.6849", rx: "5", ry: "11.6849", transform: "matrix(-0.707107 0.707107 0.707107 0.707107 7.2961 0.178986)", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx25("path", { d: "M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Attachement01.tsx
import { jsx as jsx26 } from "react/jsx-runtime";
function Attachement01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx26(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx26("path", { d: "M10 8V15C10 16.1046 10.8954 17 12 17C13.1046 17 14 16.1046 14 15V8V7C14 4.79086 12.2091 3 10 3C7.79086 3 6 4.79086 6 7V15C6 18.3137 8.68629 21 12 21C15.3137 21 18 18.3137 18 15V8", strokeWidth, strokeLinecap: "round", stroke: color })
    }
  );
}

// src/icons/Award.tsx
import { jsx as jsx27, jsxs as jsxs21 } from "react/jsx-runtime";
function Award({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs21(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx27("path", { d: "M7.55746 13.6351C8.73642 14.6903 10.2933 15.3319 12 15.3319C13.7067 15.3319 15.2636 14.6903 16.4425 13.6351C17.8058 12.4149 18.6638 10.6417 18.6638 8.66811C18.6638 4.98779 15.6803 2.0043 12 2.0043C8.31968 2.0043 5.3362 4.98779 5.3362 8.66811C5.3362 10.6417 6.19416 12.4149 7.55746 13.6351ZM16.4425 13.6351V21.9957L12 19.7744L7.55746 21.9957L7.55746 13.6351", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx27("path", { d: "M11.293 7.87943L12 6.44684L12.707 7.87943M12 6.44684V10.1673M13.144 9.29343L14.2213 8.14374L12.707 7.87943M12.707 7.87943L10.6272 10.8894M14.2213 8.14374L10.856 9.29343M12 10.1673L13.3728 10.8894L13.144 9.29343M13.144 9.29343L9.77873 8.14374M13.3728 10.8894L11.293 7.87943M10.856 9.29343L10.6272 10.8894L12 10.1673M11.293 7.87943L9.77873 8.14374L10.856 9.29343", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Backspace01.tsx
import { jsx as jsx28, jsxs as jsxs22 } from "react/jsx-runtime";
function Backspace01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs22(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx28("path", { d: "M6.60265 6.25629C7.16579 5.4679 8.075 5 9.04385 5H18C19.6569 5 21 6.34315 21 8V16C21 17.6569 19.6569 19 18 19H9.04385C8.075 19 7.16579 18.5321 6.60265 17.7437L3.33034 13.1625C2.83363 12.4671 2.83363 11.5329 3.33034 10.8375L6.60265 6.25629Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx28("path", { d: "M16 9L10 15M10 9L16 15", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Backspace02.tsx
import { jsx as jsx29 } from "react/jsx-runtime";
function Backspace02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx29(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx29("path", { d: "M6.60265 6.25629C7.16579 5.4679 8.075 5 9.04385 5H18C19.6569 5 21 6.34315 21 8V16C21 17.6569 19.6569 19 18 19H9.04385C8.075 19 7.16579 18.5321 6.60265 17.7437L3.33034 13.1625C2.83363 12.4671 2.83363 11.5329 3.33034 10.8375L6.60265 6.25629Z", strokeWidth, stroke: color })
    }
  );
}

// src/icons/Badge.tsx
import { jsx as jsx30, jsxs as jsxs23 } from "react/jsx-runtime";
function Badge({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs23(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx30("circle", { cx: "12", cy: "15.3333", r: "6.66667", strokeWidth, stroke: color, strokeLinejoin: "round", strokeLinecap: "round" }),
        /* @__PURE__ */ jsx30("path", { d: "M12 8.66667C13.5795 8.66667 15.049 9.13747 16.2758 9.9464L18.7585 7.46375C19.3672 6.85503 19.5181 5.92509 19.1331 5.15511L17.9379 2.76465C17.7036 2.29602 17.2246 2 16.7006 2H7.29935C6.77541 2 6.29643 2.29602 6.06212 2.76465L4.86689 5.15511C4.4819 5.92509 4.63281 6.85503 5.24153 7.46375L7.72417 9.9464C8.95103 9.13747 10.4205 8.66667 12 8.66667ZM6.06212 2.76465L12 8.66667M12 8.66667L17.9379 2.76465", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx30("path", { d: "M11.292 14.5437L11.999 13.1111L12.706 14.5437M11.999 13.1111V16.8316M13.143 15.9577L14.2203 14.808L12.706 14.5437M12.706 14.5437L10.6262 17.5536M14.2203 14.808L10.8551 15.9577M11.999 16.8316L13.3719 17.5536L13.143 15.9577M13.143 15.9577L9.77777 14.808M13.3719 17.5536L11.292 14.5437M10.8551 15.9577L10.6262 17.5536L11.999 16.8316M11.292 14.5437L9.77777 14.808L10.8551 15.9577", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Bank.tsx
import { jsx as jsx31, jsxs as jsxs24 } from "react/jsx-runtime";
function Bank({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs24(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx31("path", { d: "M5 10V17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx31("path", { d: "M9 10V17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx31("path", { d: "M15 10V17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx31("path", { d: "M19 10V17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx31("path", { d: "M11.5939 3.18051L3.59386 6.73606C3.23273 6.89656 3 7.25468 3 7.64987V9C3 9.55228 3.44772 10 4 10H20C20.5523 10 21 9.55228 21 9V7.64987C21 7.25468 20.7673 6.89656 20.4061 6.73606L12.4061 3.18051C12.1476 3.06559 11.8524 3.06559 11.5939 3.18051Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx31("rect", { x: "3", y: "17", width: "18", height: "4", rx: "1", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/BankNote.tsx
import { jsx as jsx32, jsxs as jsxs25 } from "react/jsx-runtime";
function BankNote({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs25(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx32("path", { d: "M3 9.8C3 8.11984 3 7.27976 3.32698 6.63803C3.6146 6.07354 4.07354 5.6146 4.63803 5.32698C5.27976 5 6.11984 5 7.8 5H16.2C17.8802 5 18.7202 5 19.362 5.32698C19.9265 5.6146 20.3854 6.07354 20.673 6.63803C21 7.27976 21 8.11984 21 9.8V14.2C21 15.8802 21 16.7202 20.673 17.362C20.3854 17.9265 19.9265 18.3854 19.362 18.673C18.7202 19 17.8802 19 16.2 19H7.8C6.11984 19 5.27976 19 4.63803 18.673C4.07354 18.3854 3.6146 17.9265 3.32698 17.362C3 16.7202 3 15.8802 3 14.2V9.8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx32("circle", { cx: "12", cy: "12", r: "3", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx32("path", { d: "M7 6C7 7.65685 5.65685 9 4 9C3.64936 9 3.31278 8.93985 3 8.82929C3 8.05847 3 7.67305 3.07043 7.35378C3.32206 6.21301 4.21301 5.32206 5.35378 5.07043C5.67305 5 6.05847 5 6.82929 5C6.93985 5.31278 7 5.64936 7 6Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx32("path", { d: "M7 18C7 16.3431 5.65685 15 4 15C3.64936 15 3.31278 15.0602 3 15.1707C3 15.9415 3 16.3269 3.07043 16.6462C3.32206 17.787 4.21301 18.6779 5.35378 18.9296C5.67305 19 6.05847 19 6.82929 19C6.93985 18.6872 7 18.3506 7 18Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx32("path", { d: "M17 6C17 7.65685 18.3431 9 20 9C20.3506 9 20.6872 8.93985 21 8.82929C21 8.05847 21 7.67305 20.9296 7.35378C20.6779 6.21301 19.787 5.32206 18.6462 5.07043C18.3269 5 17.9415 5 17.1707 5C17.0602 5.31278 17 5.64936 17 6Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx32("path", { d: "M17 18C17 16.3431 18.3431 15 20 15C20.3506 15 20.6872 15.0602 21 15.1707C21 15.9415 21 16.3269 20.9296 16.6462C20.6779 17.787 19.787 18.6779 18.6462 18.9296C18.3269 19 17.9415 19 17.1707 19C17.0602 18.6872 17 18.3506 17 18Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/BankNoteStack01.tsx
import { jsx as jsx33, jsxs as jsxs26 } from "react/jsx-runtime";
function BankNoteStack01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs26(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx33("path", { d: "M2 15V13.6C2 10.2397 2 8.55953 2.65396 7.27606C3.2292 6.14708 4.14708 5.2292 5.27606 4.65396C6.55953 4 8.23969 4 11.6 4H18", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx33("path", { d: "M5 11.8C5 10.1198 5 9.27976 5.32698 8.63803C5.6146 8.07354 6.07354 7.6146 6.63803 7.32698C7.27976 7 8.11984 7 9.8 7H17.2C18.8802 7 19.7202 7 20.362 7.32698C20.9265 7.6146 21.3854 8.07354 21.673 8.63803C22 9.27976 22 10.1198 22 11.8V15.2C22 16.8802 22 17.7202 21.673 18.362C21.3854 18.9265 20.9265 19.3854 20.362 19.673C19.7202 20 18.8802 20 17.2 20H9.8C8.11984 20 7.27976 20 6.63803 19.673C6.07354 19.3854 5.6146 18.9265 5.32698 18.362C5 17.7202 5 16.8802 5 15.2V11.8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx33("circle", { cx: "13.5", cy: "13.5", r: "2.5", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx33("path", { d: "M18 19C18 17.3431 19.3431 16 21 16C21.3506 16 21.6872 16.0602 22 16.1707C22 16.9415 22 17.3269 21.9296 17.6462C21.6779 18.787 20.787 19.6779 19.6462 19.9296C19.3269 20 18.9415 20 18.1707 20C18.0602 19.6872 18 19.3506 18 19Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx33("path", { d: "M18 8C18 9.65685 19.3431 11 21 11C21.3506 11 21.6872 10.9398 22 10.8293C22 10.0585 22 9.67305 21.9296 9.35378C21.6779 8.21301 20.787 7.32206 19.6462 7.07043C19.3269 7 18.9415 7 18.1707 7C18.0602 7.31278 18 7.64936 18 8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx33("path", { d: "M9 19C9 17.3431 7.65685 16 6 16C5.64936 16 5.31278 16.0602 5 16.1707C5 16.9415 5 17.3269 5.07043 17.6462C5.32206 18.787 6.21301 19.6779 7.35378 19.9296C7.67305 20 8.05847 20 8.82929 20C8.93985 19.6872 9 19.3506 9 19Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx33("path", { d: "M9 8C9 9.65685 7.65685 11 6 11C5.64936 11 5.31278 10.9398 5 10.8293C5 10.0585 5 9.67305 5.07043 9.35378C5.32206 8.21301 6.21301 7.32206 7.35378 7.07043C7.67305 7 8.05847 7 8.82929 7C8.93985 7.31278 9 7.64936 9 8Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/BankNoteStack02.tsx
import { jsx as jsx34, jsxs as jsxs27 } from "react/jsx-runtime";
function BankNoteStack02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs27(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx34("path", { d: "M17 21H7", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx34("path", { d: "M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V12.2C21 13.8802 21 14.7202 20.673 15.362C20.3854 15.9265 19.9265 16.3854 19.362 16.673C18.7202 17 17.8802 17 16.2 17H7.8C6.11984 17 5.27976 17 4.63803 16.673C4.07354 16.3854 3.6146 15.9265 3.32698 15.362C3 14.7202 3 13.8802 3 12.2V7.8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx34("circle", { cx: "12", cy: "10", r: "3", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx34("path", { d: "M7 4C7 5.65685 5.65685 7 4 7C3.64936 7 3.31278 6.93985 3 6.82929C3 6.05847 3 5.67305 3.07043 5.35378C3.32206 4.21301 4.21301 3.32206 5.35378 3.07043C5.67305 3 6.05847 3 6.82929 3C6.93985 3.31278 7 3.64936 7 4Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx34("path", { d: "M7 16C7 14.3431 5.65685 13 4 13C3.64936 13 3.31278 13.0602 3 13.1707C3 13.9415 3 14.3269 3.07043 14.6462C3.32206 15.787 4.21301 16.6779 5.35378 16.9296C5.67305 17 6.05847 17 6.82929 17C6.93985 16.6872 7 16.3506 7 16Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx34("path", { d: "M17 4C17 5.65685 18.3431 7 20 7C20.3506 7 20.6872 6.93985 21 6.82929C21 6.05847 21 5.67305 20.9296 5.35378C20.6779 4.21301 19.787 3.32206 18.6462 3.07043C18.3269 3 17.9415 3 17.1707 3C17.0602 3.31278 17 3.64936 17 4Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx34("path", { d: "M17 16C17 14.3431 18.3431 13 20 13C20.3506 13 20.6872 13.0602 21 13.1707C21 13.9415 21 14.3269 20.9296 14.6462C20.6779 15.787 19.787 16.6779 18.6462 16.9296C18.3269 17 17.9415 17 17.1707 17C17.0602 16.6872 17 16.3506 17 16Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Barcode01.tsx
import { jsx as jsx35, jsxs as jsxs28 } from "react/jsx-runtime";
function Barcode01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs28(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx35("path", { d: "M14 4V7", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx35("path", { d: "M14 11L14 20", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx35("path", { d: "M10 4V7", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx35("path", { d: "M10 11L10 20", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx35("path", { d: "M6 11H3V20H6V11Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx35("path", { d: "M21 11H18V20H21V11Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx35("path", { d: "M6 7V4H3V7", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx35("path", { d: "M21 7V4H18V7", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx35("path", { d: "M1 11H23", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Barcode02.tsx
import { jsx as jsx36, jsxs as jsxs29 } from "react/jsx-runtime";
function Barcode02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs29(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx36("path", { d: "M3 6.5C3 6.03558 3 5.80337 3.02567 5.60842C3.2029 4.26222 4.26222 3.2029 5.60842 3.02567C5.80337 3 6.03558 3 6.5 3H7.5M3 17.5C3 17.9644 3 18.1966 3.02567 18.3916C3.2029 19.7378 4.26222 20.7971 5.60842 20.9743C5.80337 21 6.03558 21 6.5 21H7.5M16.5 21H17.5C17.9644 21 18.1966 21 18.3916 20.9743C19.7378 20.7971 20.7971 19.7378 20.9743 18.3916C21 18.1966 21 17.9644 21 17.5M21 6.5C21 6.03558 21 5.80337 20.9743 5.60842C20.7971 4.26222 19.7378 3.2029 18.3916 3.02567C18.1966 3 17.9644 3 17.5 3H16.5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx36("path", { d: "M14 7V13", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx36("path", { d: "M10 7V13", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx36("path", { d: "M10 17H14", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx36("path", { d: "M6 7V17", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx36("path", { d: "M18 7V17", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Basketball.tsx
import { jsx as jsx37, jsxs as jsxs30 } from "react/jsx-runtime";
function Basketball({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs30(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx37("circle", { cx: "12", cy: "12", r: "9", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx37("path", { d: "M3 12L21 12", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx37("path", { d: "M12 3L12 21", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx37("path", { d: "M8 12.0001C8 14.4154 7.04855 16.6085 5.5 18.2251C3.95145 16.6085 3 14.4154 3 12.0001C3 9.58478 3.95145 7.39168 5.5 5.77515C7.04855 7.39168 8 9.58478 8 12.0001Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx37("path", { d: "M21 12.0001C21 14.4154 20.0485 16.6085 18.5 18.2251C16.9515 16.6085 16 14.4154 16 12.0001C16 9.58478 16.9515 7.39168 18.5 5.77515C20.0485 7.39168 21 9.58478 21 12.0001Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Battery.tsx
import { jsx as jsx38, jsxs as jsxs31 } from "react/jsx-runtime";
function Battery({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs31(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx38("rect", { x: "3", y: "6", width: "16", height: "12", rx: "3", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx38("path", { d: "M22 11L22 13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/BatteryCharging.tsx
import { jsx as jsx39, jsxs as jsxs32 } from "react/jsx-runtime";
function BatteryCharging({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs32(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx39("path", { d: "M8 6H6C4.34315 6 3 7.34315 3 9V15C3 16.6569 4.34315 18 6 18H6.5M15.5 6H16C17.6569 6 19 7.34315 19 9V15C19 16.6569 17.6569 18 16 18H14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx39("path", { d: "M22 11L22 13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx39("path", { d: "M12 6L9 12H13L10 18", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/BatteryFull.tsx
import { jsx as jsx40, jsxs as jsxs33 } from "react/jsx-runtime";
function BatteryFull({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs33(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx40("rect", { x: "3", y: "6", width: "16", height: "12", rx: "3", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx40("path", { d: "M22 11L22 13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx40("path", { d: "M7 10L7 14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx40("path", { d: "M11 10L11 14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx40("path", { d: "M15 10L15 14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/BatteryHalfCharged.tsx
import { jsx as jsx41, jsxs as jsxs34 } from "react/jsx-runtime";
function BatteryHalfCharged({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs34(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx41("rect", { x: "3", y: "6", width: "16", height: "12", rx: "3", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx41("path", { d: "M22 11L22 13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx41("path", { d: "M7 10L7 14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx41("path", { d: "M11 10L11 14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/BatteryLow.tsx
import { jsx as jsx42, jsxs as jsxs35 } from "react/jsx-runtime";
function BatteryLow({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs35(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx42("rect", { x: "3", y: "6", width: "16", height: "12", rx: "3", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx42("path", { d: "M22 11L22 13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx42("path", { d: "M7 10L7 14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Beaker.tsx
import { jsx as jsx43, jsxs as jsxs36 } from "react/jsx-runtime";
function Beaker({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs36(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx43("path", { d: "M19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9H19Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx43("path", { d: "M4.03647 4.5547C3.59343 3.89014 4.06982 3 4.86852 3H18C18.5523 3 19 3.44772 19 4V9H5V6.90833C5 6.31605 4.82469 5.73703 4.49615 5.24423L4.03647 4.5547Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx43("path", { d: "M5 17L8 17", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx43("path", { d: "M5 13L8 13", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Bell.tsx
import { jsx as jsx44, jsxs as jsxs37 } from "react/jsx-runtime";
function Bell({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs37(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx44("path", { d: "M12 3C8.68629 3 6 5.23858 6 8C6 9.62393 6.01583 11.2374 5.83931 12.8549C5.7222 13.9282 4 14.7563 4 15.8333C4 16.4777 4.67157 17 5.5 17H18.5C19.3284 17 20 16.4777 20 15.8333C20 14.7563 18.2778 13.9282 18.1607 12.8549C17.9842 11.2374 18 9.62393 18 8C18 5.23858 15.3137 3 12 3Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx44("path", { d: "M10 21H14", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/BellOff.tsx
import { jsx as jsx45, jsxs as jsxs38 } from "react/jsx-runtime";
function BellOff({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs38(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx45("path", { d: "M6.31702 6.3194C6.09214 6.84463 5.96967 7.4104 5.96967 8C5.96967 9.62393 5.98551 11.2374 5.80899 12.8549C5.69187 13.9282 3.96967 14.7563 3.96967 15.8333C3.96967 16.4777 4.64125 17 5.46967 17H17M8.74324 3.7837C9.67492 3.28757 10.782 3 11.9697 3C15.2834 3 17.9697 5.23858 17.9697 8C17.9697 9.62393 17.9538 11.2374 18.1304 12.8549C18.2156 13.6363 19.1518 14.2878 19.6546 15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx45("path", { d: "M10 21H14", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx45("path", { d: "M3 3L20 20", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/BezierCurve.tsx
import { jsx as jsx46, jsxs as jsxs39 } from "react/jsx-runtime";
function BezierCurve({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs39(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx46("rect", { x: "10", y: "4", width: "4", height: "4", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx46("rect", { x: "18", y: "16", width: "4", height: "4", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx46("rect", { x: "2", y: "16", width: "4", height: "4", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx46("path", { d: "M4 6L10 6", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx46("path", { d: "M14 6H20", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx46("path", { d: "M19.9512 16C19.9834 15.6641 20 15.3228 20 14.9771C20 10.6878 17.4505 7.08378 14 6.0619M4.04884 16C4.01657 15.6641 4 15.3228 4 14.9771C4 10.6878 6.54955 7.08378 10 6.0619", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx46("rect", { x: "20", y: "5", width: "2", height: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx46("rect", { x: "2", y: "5", width: "2", height: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Bicycle.tsx
import { jsx as jsx47 } from "react/jsx-runtime";
function Bicycle({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx47(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx47("path", { d: "M8.96456 17C8.98791 16.8367 9 16.6698 9 16.5C9 14.9038 7.93142 13.5571 6.47058 13.1363C6.16239 13.0476 5.83675 13 5.5 13C3.567 13 2 14.567 2 16.5C2 18.433 3.567 20 5.5 20C7.26324 20 8.72194 18.6961 8.96456 17ZM6.47058 13.1363L8.5 10M8.5 10L5.5 4M8.5 10H15.988M5.5 4H7M5.5 4H4M18 6H15L15.988 10M8.96456 17H11L15.988 10M16.8332 13.4216C15.7413 14.0141 15 15.1705 15 16.5C15 18.433 16.567 20 18.5 20C20.433 20 22 18.433 22 16.5C22 14.567 20.433 13 18.5 13C17.8965 13 17.3288 13.1527 16.8332 13.4216ZM16.8332 13.4216L15.988 10", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/Bill.tsx
import { jsx as jsx48, jsxs as jsxs40 } from "react/jsx-runtime";
function Bill({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs40(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx48("path", { d: "M3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5V14H3V5Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx48("path", { d: "M7 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V21L19 19L17.5 21L16 19L14 21L12.5 19L10.5 21L9 19L7 21V3ZM7 3H5", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx48("path", { d: "M17 11L11 11", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx48("path", { d: "M17 15L11 15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx48("path", { d: "M12 7L11 7", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx48("path", { d: "M17 7L16 7", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/BinocularSingle.tsx
import { jsx as jsx49, jsxs as jsxs41 } from "react/jsx-runtime";
function BinocularSingle({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs41(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx49("path", { d: "M13.6168 3.43969C13.9959 2.99741 14.6713 2.97147 15.0832 3.38337L20.6271 8.92726C21.039 9.33916 21.013 10.0145 20.5707 10.3936L17.144 13.3308C16.7473 13.6709 16.1556 13.6482 15.7861 13.2787L10.7317 8.22433C10.3623 7.85484 10.3395 7.26317 10.6796 6.86643L13.6168 3.43969Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx49("path", { d: "M10.0786 9.09065C10.4594 8.6512 11.1335 8.62816 11.5435 9.04057L14.964 12.4815C15.3724 12.8923 15.3474 13.5631 14.9096 13.9423L11.1341 17.213C10.7376 17.5565 10.1431 17.5352 9.77223 17.1643L6.84625 14.2383C6.47527 13.8674 6.45406 13.2728 6.79767 12.8763L10.0786 9.09065Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx49("path", { d: "M6.89495 14.287L9.72338 17.1155L5.47673 20.7555C5.07999 21.0955 4.48832 21.0728 4.11883 20.7033L3.30711 19.8916C2.93762 19.5221 2.9149 18.9304 3.25496 18.5337L6.89495 14.287Z", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Blank.tsx
import { jsx as jsx50, jsxs as jsxs42 } from "react/jsx-runtime";
function Blank({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs42(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx50("rect", { x: "7", y: "8", width: "10", height: "8", rx: "3", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx50("path", { d: "M16.5 3H18C19.6569 3 21 4.34315 21 6V7.5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx50("path", { d: "M7.5 3H6C4.34315 3 3 4.34315 3 6V7.5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx50("path", { d: "M3 16.5V18C3 19.6569 4.34315 21 6 21H7.5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx50("path", { d: "M16.5 21H18C19.6569 21 21 19.6569 21 18V16.5", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Block.tsx
import { jsx as jsx51, jsxs as jsxs43 } from "react/jsx-runtime";
function Block({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs43(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx51("circle", { cx: "12", cy: "12", r: "9", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx51("path", { d: "M18 6L6 18", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Blog.tsx
import { jsx as jsx52, jsxs as jsxs44 } from "react/jsx-runtime";
function Blog({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs44(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx52("path", { d: "M19 6C19 4.34315 17.6569 3 16 3H9.8C8.11984 3 7.27976 3 6.63803 3.32698C6.07354 3.6146 5.6146 4.07354 5.32698 4.63803C5 5.27976 5 6.11984 5 7.8V19C5 20.1046 5.89543 21 7 21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx52("path", { d: "M16.7742 10.7422C17.7505 9.76591 19.3334 9.76591 20.3097 10.7422C21.286 11.7185 21.286 13.3014 20.3097 14.2778L16.4763 18.1111C15.3332 19.2543 13.8676 20.0203 12.2764 20.3063L10.8746 20.5583C10.6496 20.5987 10.4533 20.4024 10.4937 20.1774L10.7457 18.7755C11.0316 17.1843 11.7976 15.7188 12.9408 14.5756L16.7742 10.7422Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx52("path", { d: "M15.7135 11.8029L19.2491 15.3384", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx52("path", { d: "M9 7H13", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx52("path", { d: "M9 11H10", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Bluetooth.tsx
import { jsx as jsx53 } from "react/jsx-runtime";
function Bluetooth({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx53(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx53("path", { d: "M6.00002 8L18 16L12 21V3L18 8L6 16", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/BluetoothPairing.tsx
import { jsx as jsx54, jsxs as jsxs45 } from "react/jsx-runtime";
function BluetoothPairing({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs45(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx54("path", { d: "M3 9.33332L13 16L7.00001 21V3L13 8L3 14.6667", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx54("path", { d: "M19.0962 17C20.2739 15.7246 21 13.9778 21 12.051C21 10.0723 20.2342 8.28348 19 7", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx54("path", { d: "M16 9.5C16.6137 10.1141 17 11.0066 17 12C17 12.9934 16.6137 13.8859 16 14.5", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/BluetoothX.tsx
import { jsx as jsx55, jsxs as jsxs46 } from "react/jsx-runtime";
function BluetoothX({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs46(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx55("path", { d: "M3 9.33332L13 16L7.00001 21V3L13 8L3 14.6667", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx55("path", { d: "M21 10L17 14M17 10L21 14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/BookClosed.tsx
import { jsx as jsx56, jsxs as jsxs47 } from "react/jsx-runtime";
function BookClosed({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs47(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx56("path", { d: "M18 3H6C5.44772 3 5 3.44772 5 4V17H7H18C18.5523 17 19 16.5523 19 16V4C19 3.44772 18.5523 3 18 3Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx56("path", { d: "M5 16L5 19", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx56("path", { d: "M18 17H7C5.89543 17 5 17.8954 5 19C5 20.1046 5.89543 21 7 21H18", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx56("path", { d: "M18 21C16.8954 21 16 20.1046 16 19C16 17.8954 16.8954 17 18 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/BookOpened01.tsx
import { jsx as jsx57 } from "react/jsx-runtime";
function BookOpened01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx57(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx57("path", { d: "M12 5L13.3877 4.07488C13.987 3.67535 14.2866 3.47559 14.6108 3.33408C14.8985 3.20847 15.2001 3.11717 15.5092 3.06207C15.8574 3 16.2175 3 16.9378 3H21V19H16.4533C15.9131 19 15.643 19 15.3819 19.0466C15.15 19.0879 14.9239 19.1563 14.7081 19.2506C14.465 19.3567 14.2402 19.5065 13.7908 19.8062L12 21L10.2092 19.8062C9.75977 19.5065 9.53504 19.3567 9.29191 19.2506C9.0761 19.1563 8.84995 19.0879 8.61814 19.0466C8.35696 19 8.08687 19 7.54668 19H3V3H7.06224C7.78249 3 8.14262 3 8.49085 3.06207C8.79994 3.11717 9.10147 3.20847 9.38921 3.33408C9.71339 3.47559 10.013 3.67535 10.6123 4.07488L12 5ZM12 21V5", strokeWidth, strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/BookOpened02.tsx
import { jsx as jsx58, jsxs as jsxs48 } from "react/jsx-runtime";
function BookOpened02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs48(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx58("path", { d: "M12 5L13.3877 4.07488C13.987 3.67535 14.2866 3.47559 14.6108 3.33408C14.8985 3.20847 15.2001 3.11717 15.5092 3.06207C15.8574 3 16.2175 3 16.9378 3H21V19H16.4533C15.9131 19 15.643 19 15.3819 19.0466C15.15 19.0879 14.9239 19.1563 14.7081 19.2506C14.465 19.3567 14.2402 19.5065 13.7908 19.8062L12 21L10.2092 19.8062C9.75977 19.5065 9.53504 19.3567 9.29191 19.2506C9.0761 19.1563 8.84995 19.0879 8.61814 19.0466C8.35696 19 8.08687 19 7.54668 19H3V3H7.06224C7.78249 3 8.14262 3 8.49085 3.06207C8.79994 3.11717 9.10147 3.20847 9.38921 3.33408C9.71339 3.47559 10.013 3.67535 10.6123 4.07488L12 5ZM12 21V5", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx58("path", { d: "M7 7L8 7", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx58("path", { d: "M16 7L17 7", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx58("path", { d: "M7 11L8 11", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx58("path", { d: "M16 11L17 11", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx58("path", { d: "M7 15L8 15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx58("path", { d: "M16 15L17 15", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Bookmark.tsx
import { jsx as jsx59 } from "react/jsx-runtime";
function Bookmark({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx59(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx59("path", { d: "M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V18.9028C19 19.8548 19 20.3308 18.801 20.597C18.6276 20.8291 18.362 20.9745 18.0731 20.9957C17.7416 21.02 17.3405 20.7636 16.5384 20.251L12.8616 17.9012C12.5494 17.7017 12.3934 17.6019 12.2255 17.5631C12.0771 17.5287 11.9229 17.5287 11.7745 17.5631C11.6066 17.6019 11.4506 17.7017 11.1384 17.9012L7.46162 20.251C6.65949 20.7636 6.25842 21.02 5.9269 20.9957C5.63798 20.9745 5.37244 20.8291 5.199 20.597C5 20.3308 5 19.8548 5 18.9028V7.8Z", strokeWidth, stroke: color })
    }
  );
}

// src/icons/BookmarkCheckmark.tsx
import { jsx as jsx60, jsxs as jsxs49 } from "react/jsx-runtime";
function BookmarkCheckmark({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs49(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx60("path", { d: "M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V18.9028C19 19.8548 19 20.3308 18.801 20.597C18.6276 20.8291 18.362 20.9745 18.0731 20.9957C17.7416 21.02 17.3405 20.7636 16.5384 20.251L12.8616 17.9012C12.5494 17.7017 12.3934 17.6019 12.2255 17.5631C12.0771 17.5287 11.9229 17.5287 11.7745 17.5631C11.6066 17.6019 11.4506 17.7017 11.1384 17.9012L7.46162 20.251C6.65949 20.7636 6.25842 21.02 5.9269 20.9957C5.63798 20.9745 5.37244 20.8291 5.199 20.597C5 20.3308 5 19.8548 5 18.9028V7.8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx60("path", { d: "M9 10L11 12L15 8", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/BookmarkMinus.tsx
import { jsx as jsx61, jsxs as jsxs50 } from "react/jsx-runtime";
function BookmarkMinus({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs50(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx61("path", { d: "M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V18.9028C19 19.8548 19 20.3308 18.801 20.597C18.6276 20.8291 18.362 20.9745 18.0731 20.9957C17.7416 21.02 17.3405 20.7636 16.5384 20.251L12.8616 17.9012C12.5494 17.7017 12.3934 17.6019 12.2255 17.5631C12.0771 17.5287 11.9229 17.5287 11.7745 17.5631C11.6066 17.6019 11.4506 17.7017 11.1384 17.9012L7.46162 20.251C6.65949 20.7636 6.25842 21.02 5.9269 20.9957C5.63798 20.9745 5.37244 20.8291 5.199 20.597C5 20.3308 5 19.8548 5 18.9028V7.8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx61("path", { d: "M9 11H15", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/BookmarkPlus.tsx
import { jsx as jsx62, jsxs as jsxs51 } from "react/jsx-runtime";
function BookmarkPlus({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs51(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx62("path", { d: "M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V18.9028C19 19.8548 19 20.3308 18.801 20.597C18.6276 20.8291 18.362 20.9745 18.0731 20.9957C17.7416 21.02 17.3405 20.7636 16.5384 20.251L12.8616 17.9012C12.5494 17.7017 12.3934 17.6019 12.2255 17.5631C12.0771 17.5287 11.9229 17.5287 11.7745 17.5631C11.6066 17.6019 11.4506 17.7017 11.1384 17.9012L7.46162 20.251C6.65949 20.7636 6.25842 21.02 5.9269 20.9957C5.63798 20.9745 5.37244 20.8291 5.199 20.597C5 20.3308 5 19.8548 5 18.9028V7.8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx62("path", { d: "M12 13V7M9 10H15", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Bookmarks.tsx
import { jsx as jsx63, jsxs as jsxs52 } from "react/jsx-runtime";
function Bookmarks({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs52(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx63("path", { d: "M3 10.8C3 9.11984 3 8.27976 3.32698 7.63803C3.6146 7.07354 4.07354 6.6146 4.63803 6.32698C5.27976 6 6.11984 6 7.8 6H12.2C13.8802 6 14.7202 6 15.362 6.32698C15.9265 6.6146 16.3854 7.07354 16.673 7.63803C17 8.27976 17 9.11984 17 10.8V19.9007C17 20.8527 17 21.3287 16.801 21.5949C16.6276 21.827 16.362 21.9724 16.0731 21.9936C15.7416 22.0179 15.3405 21.7616 14.5384 21.2489L10.8616 18.8991C10.5494 18.6996 10.3934 18.5998 10.2255 18.561C10.0771 18.5266 9.92287 18.5266 9.77449 18.561C9.60665 18.5998 9.45056 18.6996 9.13838 18.8991L5.46162 21.2489C4.65949 21.7616 4.25842 22.0179 3.9269 21.9936C3.63798 21.9724 3.37244 21.827 3.199 21.5949C3 21.3287 3 20.8527 3 19.9007L3 10.8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx63("path", { d: "M7 2H11.4C14.7603 2 16.4405 2 17.7239 2.65396C18.8529 3.2292 19.7708 4.14708 20.346 5.27606C21 6.55953 21 8.23969 21 11.6V18.5", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/BorderRadiusTopLeft.tsx
import { jsx as jsx64 } from "react/jsx-runtime";
function BorderRadiusTopLeft({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx64(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx64("path", { d: "M21 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V21", strokeWidth, strokeLinecap: "round", stroke: color })
    }
  );
}

// src/icons/Briefcase.tsx
import { jsx as jsx65, jsxs as jsxs53 } from "react/jsx-runtime";
function Briefcase({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs53(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx65("path", { d: "M18 7H6C4.34315 7 3 8.34315 3 10V14C3.55228 14 4 14.4477 4 15V18C4 19.6569 5.34315 21 7 21H17C18.6569 21 20 19.6569 20 18V15C20 14.4477 20.4477 14 21 14V10C21 8.34315 19.6569 7 18 7Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx65("path", { d: "M9 14L3 14", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx65("path", { d: "M21 14L15 14", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx65("path", { d: "M16 7V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V7", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx65("rect", { x: "9", y: "12", width: "6", height: "4", rx: "1", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Browser.tsx
import { jsx as jsx66, jsxs as jsxs54 } from "react/jsx-runtime";
function Browser({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs54(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx66("rect", { x: "3", y: "3", width: "18", height: "18", rx: "3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx66("path", { d: "M3 9H21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx66("path", { d: "M11 6L17 6", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx66("path", { d: "M7.0001 6H7", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/BrushSmall.tsx
import { jsx as jsx67, jsxs as jsxs55 } from "react/jsx-runtime";
function BrushSmall({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs55(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx67("path", { d: "M12.4117 15.3854C11.3592 16.5872 9.50881 16.6488 8.37866 15.5196C7.24853 14.3903 7.31013 12.5415 8.51294 11.4899L16.2226 4.74931C17.0123 4.05893 17.9692 3.58743 18.9981 3.38182L20.9083 3.0001L20.5262 4.90872C20.3204 5.93674 19.8486 6.89291 19.1577 7.68189L12.4117 15.3854Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx67("path", { d: "M8.1448 19.5607C7.05446 20.6502 3.00036 20.9959 3.00036 20.9959C3.00036 20.9959 3.34634 16.9451 4.43668 15.8556C5.52701 14.7662 7.24099 14.7124 8.26496 15.7356C9.28893 16.7587 9.23513 18.4713 8.1448 19.5607Z", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/BrushWide.tsx
import { jsx as jsx68, jsxs as jsxs56 } from "react/jsx-runtime";
function BrushWide({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs56(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx68("path", { d: "M20 13V5C20 3.89543 19.1046 3 18 3H6C4.89543 3 4 3.89543 4 5V13C4 14.1046 4.89543 15 6 15H7.97241C9.0338 15 9.84116 15.9531 9.66667 17L9.4932 18.0408C9.23502 19.5899 10.4296 21 12 21C13.5704 21 14.765 19.5899 14.5068 18.0408L14.3333 17C14.1588 15.9531 14.9662 15 16.0276 15H18C19.1046 15 20 14.1046 20 13Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx68("path", { d: "M4 11H20", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx68("path", { d: "M9 3V6", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Bug.tsx
import { jsx as jsx69, jsxs as jsxs57 } from "react/jsx-runtime";
function Bug({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs57(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx69("path", { d: "M6 13.8C6 12.1198 6 11.2798 6.32698 10.638C6.6146 10.0735 7.07354 9.6146 7.63803 9.32698C8.27976 9 9.11984 9 10.8 9H13.2C14.8802 9 15.7202 9 16.362 9.32698C16.9265 9.6146 17.3854 10.0735 17.673 10.638C18 11.2798 18 12.1198 18 13.8V14.3163C18 14.9403 18 15.2523 17.9387 15.5508C17.8844 15.8156 17.7945 16.0718 17.6715 16.3125C17.5329 16.5838 17.338 16.8275 16.9482 17.3148L15.2494 19.4383C14.9083 19.8646 14.7378 20.0777 14.5422 20.2502C14.1277 20.6157 13.6202 20.8596 13.0758 20.955C12.8189 21 12.5459 21 12 21C11.4541 21 11.1811 21 10.9242 20.955C10.3798 20.8596 9.87234 20.6157 9.45779 20.2502C9.26218 20.0777 9.09166 19.8646 8.75061 19.4383L7.05183 17.3148C6.66199 16.8275 6.46706 16.5838 6.32845 16.3125C6.20548 16.0718 6.1156 15.8156 6.06125 15.5508C6 15.2523 6 14.9403 6 14.3163V13.8Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx69("path", { d: "M6 14L3 14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx69("path", { d: "M21 14H18", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx69("path", { d: "M4 21V19.5352C4 19.2008 4.1671 18.8886 4.4453 18.7031L6.87019 17.0865", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx69("path", { d: "M4 6.99999V8.27924C4 8.70967 4.27543 9.0918 4.68377 9.22792L6.5 9.83333", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx69("path", { d: "M20 21V19.5352C20 19.2008 19.8329 18.8886 19.5547 18.7031L17.1325 17.0883", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx69("path", { d: "M20 7V8.27924C20 8.70967 19.7246 9.09181 19.3162 9.22792L17.75 9.75", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx69("path", { d: "M9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7V9H9V7Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx69("path", { d: "M12 13L12 21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx69("path", { d: "M14.5 4.5L16 3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx69("path", { d: "M9.5 4.5L8 3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Building01.tsx
import { jsx as jsx70, jsxs as jsxs58 } from "react/jsx-runtime";
function Building01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs58(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx70("path", { d: "M7 5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V21H7V5Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx70("path", { d: "M11 7H13", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx70("path", { d: "M11 11H13", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx70("path", { d: "M11 15H13", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx70("path", { d: "M3 12C3 11.4477 3.44772 11 4 11H6C6.55228 11 7 11.4477 7 12V21H4C3.44772 21 3 20.5523 3 20V12Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx70("path", { d: "M17 14C17 13.4477 17.4477 13 18 13H20C20.5523 13 21 13.4477 21 14V20C21 20.5523 20.5523 21 20 21H17V14Z", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Building02.tsx
import { jsx as jsx71, jsxs as jsxs59 } from "react/jsx-runtime";
function Building02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs59(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx71("path", { d: "M3 6C3 4.34315 4.34315 3 6 3H13C14.6569 3 16 4.34315 16 6V21H4C3.44772 21 3 20.5523 3 20V6Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx71("path", { d: "M11.5 7H12", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx71("path", { d: "M7 7H7.5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx71("path", { d: "M11.5 11H12", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx71("path", { d: "M7 11H7.5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx71("path", { d: "M11.5 15H12", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx71("path", { d: "M7 15H7.5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx71("path", { d: "M16 11H19C20.1046 11 21 11.8954 21 13V20C21 20.5523 20.5523 21 20 21H16V11Z", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Building03.tsx
import { jsx as jsx72, jsxs as jsxs60 } from "react/jsx-runtime";
function Building03({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs60(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx72("path", { d: "M5 9.3798C5 8.50403 5.38269 7.67198 6.04763 7.10203L10.0476 3.67346C11.1711 2.71049 12.8289 2.71049 13.9524 3.67346L17.9524 7.10204C18.6173 7.67198 19 8.50403 19 9.3798V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V9.3798Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx72("path", { d: "M9 10L10 10", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx72("path", { d: "M14 10H15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx72("path", { d: "M9 14L10 14", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx72("path", { d: "M14 14H15", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Building04.tsx
import { jsx as jsx73, jsxs as jsxs61 } from "react/jsx-runtime";
function Building04({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs61(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx73("path", { d: "M8 8.1406C8 7.40586 8.26964 6.69666 8.75777 6.14751L11.2526 3.34084C11.6504 2.89332 12.3496 2.89332 12.7474 3.34084L15.2422 6.14751C15.7304 6.69666 16 7.40586 16 8.1406V21H8V8.1406Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx73("path", { d: "M3 13C3 11.8954 3.89543 11 5 11H8V21H4C3.44772 21 3 20.5523 3 20V13Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx73("path", { d: "M16 12C16 11.4477 16.4477 11 17 11H19C20.1046 11 21 11.8954 21 13V20C21 20.5523 20.5523 21 20 21H16V12Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx73("path", { d: "M12.1444 8.5H11.8456M12.5 8.5C12.5 8.77614 12.2761 9 12 9C11.7239 9 11.5 8.77614 11.5 8.5C11.5 8.22386 11.7239 8 12 8C12.2761 8 12.5 8.22386 12.5 8.5Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx73("path", { d: "M12 17L12 21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Building05.tsx
import { jsx as jsx74, jsxs as jsxs62 } from "react/jsx-runtime";
function Building05({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs62(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx74("path", { d: "M7 7C7 5.89543 7.89543 5 9 5H15C16.1046 5 17 5.89543 17 7V21H7V7Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx74("path", { d: "M11 9H13", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx74("path", { d: "M11 13H13", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx74("path", { d: "M12 5L12 2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx74("path", { d: "M17 13H19C20.1046 13 21 13.8954 21 15V20C21 20.5523 20.5523 21 20 21H17V13Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx74("path", { d: "M3 15C3 13.8954 3.89543 13 5 13H7V21H4C3.44772 21 3 20.5523 3 20V15Z", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Building06.tsx
import { jsx as jsx75, jsxs as jsxs63 } from "react/jsx-runtime";
function Building06({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs63(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx75("path", { d: "M3 6C3 4.34315 4.34315 3 6 3H12C13.6569 3 15 4.34315 15 6V21H4C3.44772 21 3 20.5523 3 20V6Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx75("path", { d: "M8 7H10", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx75("path", { d: "M8 11H10", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx75("path", { d: "M8 15H10", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx75("path", { d: "M15 10H18C19.6569 10 21 11.3431 21 13V20C21 20.5523 20.5523 21 20 21H15V10Z", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Bulb.tsx
import { jsx as jsx76, jsxs as jsxs64 } from "react/jsx-runtime";
function Bulb({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs64(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx76("path", { d: "M12 3C8.13401 3 5 6.13401 5 10C5 12.7924 6.63505 14.8765 9 16H15C17.3649 14.8765 19 12.7924 19 10C19 6.13401 15.866 3 12 3Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx76("path", { d: "M12 16V11M12 11L14 9M12 11L10 9", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx76("path", { d: "M9 16L9 20C9 20.5523 9.44772 21 10 21L14 21C14.5523 21 15 20.5523 15 20L15 16", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/BurgerMenu.tsx
import { jsx as jsx77, jsxs as jsxs65 } from "react/jsx-runtime";
function BurgerMenu({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs65(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx77("path", { d: "M3 12H21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx77("path", { d: "M3 18H21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx77("path", { d: "M3 6H21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Bus.tsx
import { jsx as jsx78, jsxs as jsxs66 } from "react/jsx-runtime";
function Bus({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs66(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx78("path", { d: "M14.2 3H9.8C8.11984 3 7.27976 3 6.63803 3.32698C6.07354 3.6146 5.6146 4.07354 5.32698 4.63803C5 5.27976 5 6.11984 5 7.8V12H19V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx78("path", { d: "M8 18L9 18M16 18L15 18M9 18L9 19.4C9 19.9601 9 20.2401 8.89101 20.454C8.79513 20.6422 8.64215 20.7951 8.45399 20.891C8.24008 21 7.96005 21 7.4 21L6.6 21C6.03995 21 5.75992 21 5.54601 20.891C5.35785 20.7951 5.20487 20.6422 5.10899 20.454C5 20.2401 5 19.9601 5 19.4L5 12L19 12L19 19.4C19 19.9601 19 20.2401 18.891 20.454C18.7951 20.6422 18.6422 20.7951 18.454 20.891C18.2401 21 17.9601 21 17.4 21L16.6 21C16.0399 21 15.7599 21 15.546 20.891C15.3578 20.7951 15.2049 20.6422 15.109 20.454C15 20.2401 15 19.9601 15 19.4L15 18M9 18L15 18", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx78("path", { d: "M8 15H9", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx78("path", { d: "M15 15L16 15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx78("path", { d: "M2 7V9H5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx78("path", { d: "M22 7V9H19", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Calculator.tsx
import { jsx as jsx79, jsxs as jsxs67 } from "react/jsx-runtime";
function Calculator({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs67(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx79("path", { d: "M16 3H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V6C19 4.34315 17.6569 3 16 3Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx79("path", { d: "M9 14H9.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx79("path", { d: "M9 17H9.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx79("path", { d: "M12 14H12.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx79("path", { d: "M15 14H15.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx79("path", { d: "M12 17H12.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx79("path", { d: "M15 17H15.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx79("rect", { x: "8", y: "6", width: "8", height: "4", rx: "1", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Calendar.tsx
import { jsx as jsx80, jsxs as jsxs68 } from "react/jsx-runtime";
function Calendar({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs68(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx80("path", { d: "M16.2 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V9.8C21 8.11984 21 7.27976 20.673 6.63803C20.3854 6.07354 19.9265 5.6146 19.362 5.32698C18.7202 5 17.8802 5 16.2 5Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx80("path", { d: "M8 6V3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx80("path", { d: "M16 6V3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx80("path", { d: "M7 10H17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/CalendarCheckmark.tsx
import { jsx as jsx81, jsxs as jsxs69 } from "react/jsx-runtime";
function CalendarCheckmark({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs69(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx81("path", { d: "M21 12V9.8C21 8.11984 21 7.27976 20.673 6.63803C20.3854 6.07354 19.9265 5.6146 19.362 5.32698C18.7202 5 17.8802 5 16.2 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H10", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx81("path", { d: "M8 6V3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx81("path", { d: "M16 6V3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx81("path", { d: "M7 10H17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx81("path", { d: "M15 19L17 21L21 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/CalendarClock.tsx
import { jsx as jsx82, jsxs as jsxs70 } from "react/jsx-runtime";
function CalendarClock({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs70(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx82("path", { d: "M21 8C21 6.34315 19.6569 5 18 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H8", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx82("path", { d: "M8 6V3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx82("path", { d: "M16 6V3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx82("path", { d: "M16 14.5V16H17.5M21 16C21 18.7614 18.7614 21 16 21C13.2386 21 11 18.7614 11 16C11 13.2386 13.2386 11 16 11C18.7614 11 21 13.2386 21 16Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/CalendarMinus.tsx
import { jsx as jsx83, jsxs as jsxs71 } from "react/jsx-runtime";
function CalendarMinus({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs71(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx83("path", { d: "M21 16V9.8C21 8.11984 21 7.27976 20.673 6.63803C20.3854 6.07354 19.9265 5.6146 19.362 5.32698C18.7202 5 17.8802 5 16.2 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H10", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx83("path", { d: "M8 6V3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx83("path", { d: "M16 6V3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx83("path", { d: "M7 10H17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx83("path", { d: "M15 21H21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/CalendarPlus.tsx
import { jsx as jsx84, jsxs as jsxs72 } from "react/jsx-runtime";
function CalendarPlus({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs72(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx84("path", { d: "M11 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V9.8C3 8.11984 3 7.27976 3.32698 6.63803C3.6146 6.07354 4.07354 5.6146 4.63803 5.32698C5.27976 5 6.11984 5 7.8 5H16.2C17.8802 5 18.7202 5 19.362 5.32698C19.9265 5.6146 20.3854 6.07354 20.673 6.63803C21 7.27976 21 8.11984 21 9.8V11", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx84("path", { d: "M8 6V3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx84("path", { d: "M16 6V3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx84("path", { d: "M7 10H17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx84("path", { d: "M18 21V15M15 18H21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/CalendarX.tsx
import { jsx as jsx85, jsxs as jsxs73 } from "react/jsx-runtime";
function CalendarX({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs73(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx85("path", { d: "M21 12V9.8C21 8.11984 21 7.27976 20.673 6.63803C20.3854 6.07354 19.9265 5.6146 19.362 5.32698C18.7202 5 17.8802 5 16.2 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H12", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx85("path", { d: "M8 6V3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx85("path", { d: "M16 6V3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx85("path", { d: "M7 10H17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx85("path", { d: "M21 21L17 17M17 21L21 17", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Call.tsx
import { jsx as jsx86 } from "react/jsx-runtime";
function Call({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx86(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx86("path", { d: "M6.99824 3.75182C6.76603 3.07292 5.93054 2.75361 5.35165 3.17753L4.63848 3.69978C4.35511 3.90729 4.07863 4.12939 3.8654 4.40849C1.78784 7.12776 3.29565 12.41 7.4365 16.5508C11.5774 20.6917 16.8596 22.1995 19.5788 20.1219C19.8579 19.9087 20.08 19.6322 20.2875 19.3488L20.8098 18.6357C21.2337 18.0568 20.9144 17.2213 20.2355 16.9891C19.2197 16.6416 18.1525 16.1403 17.0721 15.4979C16.6501 15.2471 16.1261 15.339 15.8182 15.7213C15.6083 15.982 15.3783 16.2231 15.1171 16.3413C13.215 17.2021 6.66856 11.0652 7.62399 8.8726C7.74437 8.59635 7.99726 8.35037 8.2672 8.12515C8.63639 7.81713 8.71893 7.30266 8.47383 6.88902C7.8389 5.81751 7.34285 4.75937 6.99824 3.75182Z", strokeWidth, stroke: color })
    }
  );
}

// src/icons/Camera.tsx
import { jsx as jsx87, jsxs as jsxs74 } from "react/jsx-runtime";
function Camera({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs74(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx87("path", { d: "M3 9.39445V15.2C3 16.8802 3 17.7202 3.32698 18.362C3.6146 18.9265 4.07354 19.3854 4.63803 19.673C5.27976 20 6.11984 20 7.8 20H16.2C17.8802 20 18.7202 20 19.362 19.673C19.9265 19.3854 20.3854 18.9265 20.673 18.362C21 17.7202 21 16.8802 21 15.2V9.39445C21 9.02812 21 8.84496 20.984 8.69075C20.8377 7.27857 19.7214 6.16233 18.3092 6.01598C18.155 6 17.9719 6 17.6056 6C17.5371 6 17.5029 6 17.4706 5.99791C17.1823 5.97926 16.9161 5.83681 16.7407 5.60726C16.7211 5.58159 16.7021 5.55311 16.6641 5.49615L15.475 3.71248C15.3013 3.45199 15.2145 3.32174 15.0998 3.22745C14.9982 3.14398 14.8812 3.08135 14.7554 3.04315C14.6133 3 14.4568 3 14.1437 3H9.85629C9.54322 3 9.38669 3 9.2446 3.04315C9.11881 3.08135 9.00179 3.14398 8.90022 3.22745C8.7855 3.32174 8.69867 3.45199 8.52501 3.71248L7.3359 5.49615C7.29793 5.55311 7.27894 5.58159 7.25932 5.60726C7.08386 5.83681 6.8177 5.97926 6.52938 5.99791C6.49713 6 6.4629 6 6.39445 6C6.02812 6 5.84496 6 5.69075 6.01598C4.27857 6.16233 3.16233 7.27857 3.01598 8.69075C3 8.84496 3 9.02812 3 9.39445Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx87("path", { d: "M15 12.5C15 14.1569 13.6569 15.5 12 15.5C10.3431 15.5 9 14.1569 9 12.5C9 10.8431 10.3431 9.5 12 9.5C13.6569 9.5 15 10.8431 15 12.5Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/CameraOff.tsx
import { jsx as jsx88, jsxs as jsxs75 } from "react/jsx-runtime";
function CameraOff({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs75(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx88("path", { d: "M19.362 19.673C18.7202 20 17.8802 20 16.2 20H7.8C6.11984 20 5.27976 20 4.63803 19.673C4.07354 19.3854 3.6146 18.9265 3.32698 18.362C3 17.7202 3 16.8802 3 15.2V9C3 7.34315 4.34315 6 6 6M8.58329 3.62507C8.69999 3.45002 8.75834 3.3625 8.82877 3.2922C8.96804 3.15321 9.14521 3.05839 9.3381 3.01961C9.43567 3 9.54086 3 9.75124 3H14.1437C14.4568 3 14.6133 3 14.7554 3.04315C14.8812 3.08135 14.9982 3.14398 15.0998 3.22745C15.2145 3.32174 15.3013 3.45199 15.475 3.71248L16.6641 5.49615C16.7021 5.55311 16.7211 5.58159 16.7407 5.60726C16.9161 5.83681 17.1823 5.97926 17.4706 5.99791C17.5029 6 17.5371 6 17.6056 6C17.9719 6 18.155 6 18.3092 6.01598C19.7214 6.16233 20.8377 7.27857 20.984 8.69075C21 8.84496 21 9.02812 21 9.39445V15.2C21 15.4907 21 15.7563 20.9983 16", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx88("path", { d: "M10.1384 10.1473C9.44486 10.6968 9 11.5465 9 12.5C9 14.1569 10.3431 15.5 12 15.5C12.9408 15.5 13.7805 15.0669 14.3306 14.3892", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx88("path", { d: "M3 3L21 21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Car.tsx
import { jsx as jsx89, jsxs as jsxs76 } from "react/jsx-runtime";
function Car({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs76(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx89("path", { d: "M4.51429 10L4 11H20L19.4857 10L17.7396 6.60473C17.253 5.65855 17.0097 5.18545 16.6514 4.84012C16.3346 4.5347 15.9544 4.30272 15.5379 4.16065C15.067 4 14.535 4 13.471 4H10.529C9.46503 4 8.93304 4 8.46209 4.16065C8.04558 4.30272 7.66542 4.5347 7.34859 4.84012C6.99034 5.18545 6.74703 5.65854 6.26043 6.60473L4.51429 10ZM19.4857 10L21 8H22M4.51429 10L3 8H2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx89("path", { d: "M8 17V19C8 19.5523 7.55228 20 7 20H5C4.44772 20 4 19.5523 4 19V11H20V19C20 19.5523 19.5523 20 19 20H17C16.4477 20 16 19.5523 16 19V17M8 17H16M8 17H7M16 17H17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx89("path", { d: "M7 14L10 14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx89("path", { d: "M14 14L17 14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Card.tsx
import { jsx as jsx90, jsxs as jsxs77 } from "react/jsx-runtime";
function Card({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs77(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx90("rect", { x: "3", y: "5", width: "18", height: "14", rx: "3", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx90("path", { d: "M3 10H21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx90("path", { d: "M16 15H15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx90("path", { d: "M11 15L7 15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/CardLock.tsx
import { jsx as jsx91, jsxs as jsxs78 } from "react/jsx-runtime";
function CardLock({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs78(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx91("path", { d: "M9 17H6C4.34315 17 3 15.6569 3 14V6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V9", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx91("path", { d: "M3 8H21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx91("path", { d: "M10 13L7 13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx91("path", { d: "M19 17H15C14.535 17 14.3025 17 14.1118 17.0511C13.5941 17.1898 13.1898 17.5941 13.0511 18.1118C13 18.3025 13 18.535 13 19C13 19.465 13 19.6975 13.0511 19.8882C13.1898 20.4059 13.5941 20.8102 14.1118 20.9489C14.3025 21 14.535 21 15 21H19C19.465 21 19.6975 21 19.8882 20.9489C20.4059 20.8102 20.8102 20.4059 20.9489 19.8882C21 19.6975 21 19.465 21 19C21 18.535 21 18.3025 20.9489 18.1118C20.8102 17.5941 20.4059 17.1898 19.8882 17.0511C19.6975 17 19.465 17 19 17Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx91("path", { d: "M19 17V15C19 13.8954 18.1046 13 17 13C15.8954 13 15 13.8954 15 15V17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/CaretRight.tsx
import { jsx as jsx92 } from "react/jsx-runtime";
function CaretRight({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx92(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx92("path", { d: "M14.8686 10.8686L12.7314 8.73137L12.7314 8.73137C11.8746 7.87462 11.4462 7.44624 11.0785 7.4173C10.7593 7.39218 10.4475 7.52136 10.2396 7.76477C10 8.04529 10 8.65111 10 9.86274V14.1373C10 15.3489 10 15.9547 10.2396 16.2352C10.4475 16.4786 10.7593 16.6078 11.0785 16.5827C11.4462 16.5538 11.8746 16.1254 12.7314 15.2686L14.8686 13.1314C15.2646 12.7354 15.4627 12.5373 15.5368 12.309C15.6021 12.1082 15.6021 11.8918 15.5368 11.691C15.4627 11.4627 15.2646 11.2646 14.8686 10.8686Z", strokeWidth, strokeLinecap: "round", stroke: color })
    }
  );
}

// src/icons/CaretRightSmall.tsx
import { jsx as jsx93 } from "react/jsx-runtime";
function CaretRightSmall({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx93(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx93("path", { d: "M13.8686 10.8686L12.7314 9.73137C11.8746 8.87462 11.4462 8.44624 11.0785 8.4173C10.7593 8.39218 10.4475 8.52136 10.2396 8.76477C10 9.04529 10 9.65111 10 10.8627V13.1373C10 14.3489 10 14.9547 10.2396 15.2352C10.4475 15.4786 10.7593 15.6078 11.0785 15.5827C11.4462 15.5538 11.8746 15.1254 12.7314 14.2686L13.8686 13.1314C14.2646 12.7354 14.4627 12.5373 14.5368 12.309C14.6021 12.1082 14.6021 11.8918 14.5368 11.691C14.4627 11.4627 14.2646 11.2646 13.8686 10.8686Z", strokeWidth, strokeLinecap: "round", stroke: color })
    }
  );
}

// src/icons/Category.tsx
import { jsx as jsx94, jsxs as jsxs79 } from "react/jsx-runtime";
function Category({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs79(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx94("path", { d: "M3.24298 15.4485C2.98652 13.5678 2.85829 12.6275 3.14684 11.8974C3.40016 11.2564 3.86647 10.7222 4.46736 10.3845C5.15179 10 6.10085 10 7.99897 10H16.001C17.8992 10 18.8482 10 19.5326 10.3845C20.1335 10.7222 20.5998 11.2564 20.8532 11.8974C21.1417 12.6275 21.0135 13.5678 20.757 15.4485L20.5661 16.8485C20.3655 18.3198 20.2652 19.0554 19.9133 19.6091C19.6033 20.097 19.1588 20.4849 18.6335 20.7262C18.0374 21 17.295 21 15.8101 21H8.18988C6.70505 21 5.96264 21 5.36648 20.7262C4.84116 20.4849 4.39674 20.097 4.08669 19.6091C3.73482 19.0554 3.63451 18.3198 3.43389 16.8485L3.24298 15.4485Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx94("path", { d: "M6.00001 6.5H18", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx94("path", { d: "M9 3L15 3", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Certificate.tsx
import { jsx as jsx95, jsxs as jsxs80 } from "react/jsx-runtime";
function Certificate({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs80(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx95("path", { d: "M11 19H6C4.34315 19 3 17.6569 3 16V8C3 6.34315 4.34315 5 6 5H19C20.1046 5 21 5.89543 21 7", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx95("path", { d: "M20 15.9495C20.6186 15.3182 21 14.4537 21 13.5C21 11.567 19.433 10 17.5 10C15.567 10 14 11.567 14 13.5C14 14.4537 14.3814 15.3182 15 15.9495C15.6353 16.5978 16.5207 17 17.5 17C18.4793 17 19.3647 16.5978 20 15.9495ZM15 15.9495V21L17.1286 20.1486C17.367 20.0532 17.633 20.0532 17.8714 20.1486L20 21V15.9495", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx95("path", { d: "M7 10L11 10", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx95("path", { d: "M7 14L9 14", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ChartBarsHorizontal.tsx
import { jsx as jsx96 } from "react/jsx-runtime";
function ChartBarsHorizontal({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx96(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx96("path", { d: "M2 21H3M22 21H21M21 21V4C21 3.44772 20.5523 3 20 3H16C15.4477 3 15 3.44772 15 4V8M21 21H15M15 21V8M15 21H9M15 8H10C9.44772 8 9 8.44772 9 9V13M9 21V13M9 21H3M9 13H4C3.44772 13 3 13.4477 3 14V21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/ChartCohort.tsx
import { jsx as jsx97, jsxs as jsxs81 } from "react/jsx-runtime";
function ChartCohort({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs81(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx97("path", { d: "M21 9V3H3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx97("path", { d: "M3 3V21H9", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx97("path", { d: "M9 21V3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx97("path", { d: "M15 3V15H3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx97("path", { d: "M21 9H3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ChartLineUp.tsx
import { jsx as jsx98, jsxs as jsxs82 } from "react/jsx-runtime";
function ChartLineUp({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs82(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx98("path", { d: "M3 3V20C3 20.5523 3.44772 21 4 21H21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx98("path", { d: "M21 6L12 15L8 11L3 16", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ChartPie.tsx
import { jsx as jsx99, jsxs as jsxs83 } from "react/jsx-runtime";
function ChartPie({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs83(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx99("path", { d: "M11.5 6.06609C11.1729 6.0225 10.8391 6 10.5 6C6.35786 6 3 9.35786 3 13.5C3 17.6421 6.35786 21 10.5 21C14.6421 21 18 17.6421 18 13.5C18 13.1609 17.9775 12.8271 17.9339 12.5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx99("path", { d: "M21 12C21 7.02944 16.9706 3 12 3V12H21Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Charts.tsx
import { jsx as jsx100, jsxs as jsxs84 } from "react/jsx-runtime";
function Charts({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs84(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx100("path", { d: "M9 21L9 14.5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx100("path", { d: "M3 21L3 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx100("path", { d: "M15 21L15 15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx100("path", { d: "M21 21L21 11", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx100("path", { d: "M21 7V3H17M21 3L12 12L8 8L3 13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Checkmark.tsx
import { jsx as jsx101 } from "react/jsx-runtime";
function Checkmark({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx101(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx101("path", { d: "M4 14L8 18L19 7", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/CheckmarkInCircle.tsx
import { jsx as jsx102, jsxs as jsxs85 } from "react/jsx-runtime";
function CheckmarkInCircle({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs85(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx102("circle", { cx: "12", cy: "12", r: "9", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx102("path", { d: "M8.5 12L11 14.5L16 9.5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/CheckmarkTwoSquares.tsx
import { jsx as jsx103, jsxs as jsxs86 } from "react/jsx-runtime";
function CheckmarkTwoSquares({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs86(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx103("path", { d: "M17 7C19.2091 7 21 8.79086 21 11V14.6C21 16.8402 21 17.9603 20.564 18.816C20.1805 19.5686 19.5686 20.1805 18.816 20.564C17.9603 21 16.8402 21 14.6 21H11C8.79086 21 7 19.2091 7 17", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx103("rect", { x: "3", y: "3", width: "14", height: "14", rx: "4", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx103("path", { d: "M7 10L9 12L13 8", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ChevronDoubleVerticalIn.tsx
import { jsx as jsx104, jsxs as jsxs87 } from "react/jsx-runtime";
function ChevronDoubleVerticalIn({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs87(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx104("path", { d: "M7 4L12 9L17 4", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx104("path", { d: "M7 20L12 15L17 20", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ChevronDoubleVerticalOut.tsx
import { jsx as jsx105, jsxs as jsxs88 } from "react/jsx-runtime";
function ChevronDoubleVerticalOut({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs88(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx105("path", { d: "M7 9L12 4L17 9", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx105("path", { d: "M7 15L12 20L17 15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ChevronDoubleVerticalUp.tsx
import { jsx as jsx106, jsxs as jsxs89 } from "react/jsx-runtime";
function ChevronDoubleVerticalUp({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs89(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx106("path", { d: "M6 12L12 6L18 12", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx106("path", { d: "M6 19L12 13L18 19", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ChevronDown.tsx
import { jsx as jsx107 } from "react/jsx-runtime";
function ChevronDown({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx107(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx107("path", { d: "M6 9L12 15L18 9", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/ChevronDownSmall.tsx
import { jsx as jsx108 } from "react/jsx-runtime";
function ChevronDownSmall({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx108(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx108("path", { d: "M16 10L12 14L8 10", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/ChevronLeft.tsx
import { jsx as jsx109 } from "react/jsx-runtime";
function ChevronLeft({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx109(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx109("path", { d: "M15 6L9 12L15 18", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/ChevronLeftSmall.tsx
import { jsx as jsx110 } from "react/jsx-runtime";
function ChevronLeftSmall({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx110(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx110("path", { d: "M14 16L10 12L14 8", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/ChevronLineLeft.tsx
import { jsx as jsx111, jsxs as jsxs90 } from "react/jsx-runtime";
function ChevronLineLeft({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs90(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx111("path", { d: "M17 18L11 12L17 6", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx111("path", { d: "M7 18L7 6", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ChevronLineRight.tsx
import { jsx as jsx112, jsxs as jsxs91 } from "react/jsx-runtime";
function ChevronLineRight({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs91(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx112("path", { d: "M7 18L13 12L7 6", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx112("path", { d: "M17 18L17 6", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ChevronRight.tsx
import { jsx as jsx113 } from "react/jsx-runtime";
function ChevronRight({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx113(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx113("path", { d: "M9 6L15 12L9 18", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/ChevronRightSmall.tsx
import { jsx as jsx114 } from "react/jsx-runtime";
function ChevronRightSmall({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx114(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx114("path", { d: "M10 16L14 12L10 8", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/ChevronUp.tsx
import { jsx as jsx115 } from "react/jsx-runtime";
function ChevronUp({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx115(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx115("path", { d: "M6 15L12 9L18 15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/ChevronUpSmall.tsx
import { jsx as jsx116 } from "react/jsx-runtime";
function ChevronUpSmall({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx116(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx116("path", { d: "M16 14L12 10L8 14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/Church.tsx
import { jsx as jsx117, jsxs as jsxs92 } from "react/jsx-runtime";
function Church({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs92(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx117("path", { d: "M3 15V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V15C21 13.3431 19.6569 12 18 12H16V10C16 9.37049 15.7036 8.77771 15.2 8.4L12 6L8.8 8.4C8.29639 8.77771 8 9.37049 8 10V12H6C4.34315 12 3 13.3431 3 15Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx117("path", { d: "M12 6V2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx117("path", { d: "M10 4L14 4", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx117("path", { d: "M8 16H7V17H8V16Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx117("path", { d: "M11 12H13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx117("path", { d: "M17 16H16V17H17V16Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx117("path", { d: "M12 21V18", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Click.tsx
import { jsx as jsx118, jsxs as jsxs93 } from "react/jsx-runtime";
function Click({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs93(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx118("path", { d: "M9 9L21.0312 12.1316L15 15L12.1317 21.0311L9 9Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx118("path", { d: "M9 3V4M13.2426 4.75736L12.5355 5.46447M4.75736 13.2426L5.46447 12.5355M3 9H4M4.75736 4.75736L5.46447 5.46446", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Clipboard.tsx
import { jsx as jsx119, jsxs as jsxs94 } from "react/jsx-runtime";
function Clipboard({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs94(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx119("path", { d: "M9 5H8.2C7.07989 5 6.51984 5 6.09202 5.21799C5.71569 5.40973 5.40973 5.71569 5.21799 6.09202C5 6.51984 5 7.07989 5 8.2V16.2C5 17.8802 5 18.7202 5.32698 19.362C5.6146 19.9265 6.07354 20.3854 6.63803 20.673C7.27976 21 8.11984 21 9.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V8.2C19 7.07989 19 6.51984 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.4802 5 16.9201 5 15.8 5H15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx119("rect", { x: "9", y: "3", width: "6", height: "4", rx: "1", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/ClipboardCheckmark.tsx
import { jsx as jsx120, jsxs as jsxs95 } from "react/jsx-runtime";
function ClipboardCheckmark({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs95(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx120("path", { d: "M9 5H8.2C7.07989 5 6.51984 5 6.09202 5.21799C5.71569 5.40973 5.40973 5.71569 5.21799 6.09202C5 6.51984 5 7.07989 5 8.2V16.2C5 17.8802 5 18.7202 5.32698 19.362C5.6146 19.9265 6.07354 20.3854 6.63803 20.673C7.27976 21 8.11984 21 9.8 21H11M15 5H15.8C16.9201 5 17.4802 5 17.908 5.21799C18.2843 5.40973 18.5903 5.71569 18.782 6.09202C19 6.51984 19 7.07989 19 8.2V13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx120("path", { d: "M15 19L17 21L21 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx120("rect", { x: "9", y: "3", width: "6", height: "4", rx: "1", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/ClipboardX.tsx
import { jsx as jsx121, jsxs as jsxs96 } from "react/jsx-runtime";
function ClipboardX({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs96(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx121("path", { d: "M9 5H8.2C7.07989 5 6.51984 5 6.09202 5.21799C5.71569 5.40973 5.40973 5.71569 5.21799 6.09202C5 6.51984 5 7.07989 5 8.2V16.2C5 17.8802 5 18.7202 5.32698 19.362C5.6146 19.9265 6.07354 20.3854 6.63803 20.673C7.27976 21 8.11984 21 9.8 21H13M15 5H15.8C16.9201 5 17.4802 5 17.908 5.21799C18.2843 5.40973 18.5903 5.71569 18.782 6.09202C19 6.51984 19 7.07989 19 8.2V13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx121("path", { d: "M21 21L17 17", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx121("path", { d: "M17 21L21 17", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx121("rect", { x: "9", y: "3", width: "6", height: "4", rx: "1", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Clipping.tsx
import { jsx as jsx122, jsxs as jsxs97 } from "react/jsx-runtime";
function Clipping({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs97(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx122("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M7.5 19.796C8.82378 20.5617 10.3607 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C10.3607 3 8.82378 3.43827 7.5 4.20404C10.1901 5.76018 12 8.66873 12 12C12 15.3313 10.1901 18.2398 7.5 19.796Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx122("path", { d: "M12 12C12 15.3313 10.1901 18.2398 7.5 19.796C4.8099 18.2398 3 15.3313 3 12C3 8.66873 4.80989 5.76018 7.5 4.20404C10.1901 5.76018 12 8.66873 12 12Z", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Clock.tsx
import { jsx as jsx123, jsxs as jsxs98 } from "react/jsx-runtime";
function Clock({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs98(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx123("circle", { cx: "12", cy: "12", r: "9", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx123("path", { d: "M11 8V12C11 12.5523 11.4477 13 12 13H16", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ClockSnooze.tsx
import { jsx as jsx124, jsxs as jsxs99 } from "react/jsx-runtime";
function ClockSnooze({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs99(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx124("path", { d: "M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx124("path", { d: "M11 8V12.382C11 12.7607 11.214 13.107 11.5528 13.2764L12 13.5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx124("path", { d: "M21 21H16L21 16H16", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/CloseX.tsx
import { jsx as jsx125 } from "react/jsx-runtime";
function CloseX({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx125(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx125("path", { d: "M18 6L6 18M6 6L18 18", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/CloseXInCircle.tsx
import { jsx as jsx126, jsxs as jsxs100 } from "react/jsx-runtime";
function CloseXInCircle({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs100(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx126("circle", { cx: "12", cy: "12", r: "9", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx126("path", { d: "M9.00003 9L15 15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx126("path", { d: "M9.00003 15L15 9.00003", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/CloseXSmall.tsx
import { jsx as jsx127, jsxs as jsxs101 } from "react/jsx-runtime";
function CloseXSmall({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs101(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx127("path", { d: "M17 7L7 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx127("path", { d: "M7 7L17 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Cloud.tsx
import { jsx as jsx128 } from "react/jsx-runtime";
function Cloud({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx128(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx128("path", { d: "M3 14.231C3 12.1961 4.43551 10.506 6.32148 10.1745C7.12876 7.74605 9.3662 6 12 6C14.9818 6 17.4555 8.23785 17.9212 11.1702C19.6556 11.3842 21 12.9033 21 14.7455C21 15.6754 20.6574 16.523 20.095 17.1619C19.4917 17.8474 18.5253 18 17.6122 18H6.65042C5.5702 18 4.4297 17.7563 3.81984 16.8647C3.30552 16.1127 3 15.1698 3 14.231Z", strokeWidth, strokeLinecap: "round", stroke: color })
    }
  );
}

// src/icons/CloudOff.tsx
import { jsx as jsx129, jsxs as jsxs102 } from "react/jsx-runtime";
function CloudOff({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs102(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx129("path", { d: "M11 6.08535C11.3252 6.02922 11.6593 6 12 6C14.9818 6 17.4555 8.23785 17.9212 11.1702C19.6556 11.3842 21 12.9033 21 14.7455C21 15.1418 20.9378 15.5231 20.8228 15.8797M7.5 8.08992C6.98358 8.69192 6.57949 9.39835 6.32148 10.1745C4.43551 10.506 3 12.1961 3 14.231C3 15.1698 3.30552 16.1127 3.81984 16.8647C4.4297 17.7563 5.5702 18 6.65042 18H17.5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx129("path", { d: "M3 3L21 21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Code.tsx
import { jsx as jsx130, jsxs as jsxs103 } from "react/jsx-runtime";
function Code({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs103(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx130("path", { d: "M18 15L21 12L18 9", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx130("path", { d: "M6 15L3 12L6 9", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx130("path", { d: "M14 6L10 18", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/CodeBlock.tsx
import { jsx as jsx131, jsxs as jsxs104 } from "react/jsx-runtime";
function CodeBlock({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs104(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx131("path", { d: "M21 16.5V7.5C21 6.10218 21 5.40326 20.7716 4.85195C20.4672 4.11687 19.8831 3.53284 19.1481 3.22836C18.5967 3 17.8978 3 16.5 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.5C17.8978 21 18.5967 21 19.1481 20.7716C19.8831 20.4672 20.4672 19.8831 20.7716 19.1481C21 18.5967 21 17.8978 21 16.5Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx131("path", { d: "M14 15L17 12L14 9", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx131("path", { d: "M10 15L7 12L10 9", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Coin.tsx
import { jsx as jsx132 } from "react/jsx-runtime";
function Coin({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx132(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx132("path", { d: "M21 10C21 12.7614 16.9706 15 12 15C7.02944 15 3 12.7614 3 10M21 10C21 7.23858 16.9706 5 12 5C7.02944 5 3 7.23858 3 10M21 10V14C21 16.7614 16.9706 19 12 19C7.02944 19 3 16.7614 3 14V10", strokeWidth, strokeLinecap: "round", stroke: color })
    }
  );
}

// src/icons/Coins.tsx
import { jsx as jsx133, jsxs as jsxs105 } from "react/jsx-runtime";
function Coins({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs105(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx133("path", { d: "M3 9.75C3 10.9926 5.21619 12 7.95 12C9.14667 12 10.2442 11.807 11.1 11.4857M3 9.75V13.35M3 9.75V5.7M3 13.35C3 14.5926 5.21619 15.6 7.95 15.6C9.14667 15.6 10.2442 15.407 11.1 15.0857M3 13.35V16.95C3 18.1926 5.21619 19.2 7.95 19.2C9.14667 19.2 10.2442 19.007 11.1 18.6857M12.9 5.7C12.9 7.19117 10.6838 8.4 7.95 8.4C5.21619 8.4 3 7.19117 3 5.7M12.9 5.7C12.9 4.20883 10.6838 3 7.95 3C5.21619 3 3 4.20883 3 5.7M12.9 5.7V8.85", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx133("path", { d: "M21 15.15C21 16.3927 18.7838 17.4 16.05 17.4C13.3162 17.4 11.1 16.3927 11.1 15.15M21 15.15V18.75C21 19.9927 18.7838 21 16.05 21C13.3162 21 11.1 19.9927 11.1 18.75V15.15M21 15.15V11.1M11.1 15.15V11.1M21 11.1C21 12.5912 18.7838 13.8 16.05 13.8C13.3162 13.8 11.1 12.5912 11.1 11.1M21 11.1C21 9.60886 18.7838 8.40002 16.05 8.40002C13.3162 8.40002 11.1 9.60886 11.1 11.1", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/CoinsJar.tsx
import { jsx as jsx134, jsxs as jsxs106 } from "react/jsx-runtime";
function CoinsJar({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs106(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx134("path", { d: "M4 11L20 11", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx134("path", { d: "M6.89392 21H17.1061C19.2144 21 21.4617 19.5499 20.781 17.5545C20.5919 17.0001 20.2853 16.5333 19.8809 16.189C19.0398 15.473 18.034 14.643 18.034 13.5385V11H5.966V13.5385C5.966 14.643 4.96013 15.473 4.11909 16.189C3.71468 16.5333 3.40809 17.0001 3.21898 17.5545C2.53831 19.5499 4.7856 21 6.89392 21Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx134("circle", { cx: "8", cy: "5", r: "2", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx134("path", { d: "M17 8C17 6.89543 16.1046 6 15 6C13.8954 6 13 6.89543 13 8", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ColorBucket.tsx
import { jsx as jsx135, jsxs as jsxs107 } from "react/jsx-runtime";
function ColorBucket({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs107(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx135("path", { d: "M8.54875 5.66758L10.9251 3.29123C11.3156 2.9007 11.9488 2.9007 12.3393 3.29123L20.2659 11.2178L19.0417 11.2178C18.2461 11.2178 17.4831 11.5339 16.9205 12.0965L11.2868 17.7302C10.1152 18.9017 8.2157 18.9017 7.04412 17.7302L3.88646 14.5725C2.71489 13.4009 2.71489 11.5014 3.88645 10.3299L6.08197 8.13433", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx135("path", { d: "M10.3988 7.51759L6.69865 3.81744", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx135("path", { d: "M20.9921 19.0488C20.9921 20.0121 20.2112 20.793 19.2479 20.793C18.2845 20.793 17.5036 20.0121 17.5036 19.0488C17.5036 18.0854 19.2479 15.5602 19.2479 15.5602C19.2479 15.5602 20.9921 18.0854 20.9921 19.0488Z", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ColumnsThree.tsx
import { jsx as jsx136, jsxs as jsxs108 } from "react/jsx-runtime";
function ColumnsThree({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs108(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx136("rect", { x: "3", y: "3", width: "18", height: "18", rx: "3", strokeWidth, strokeLinejoin: "round", strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx136("path", { d: "M9 3V21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx136("path", { d: "M15 3V21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ColumnsTwo.tsx
import { jsx as jsx137, jsxs as jsxs109 } from "react/jsx-runtime";
function ColumnsTwo({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs109(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx137("rect", { x: "3", y: "3", width: "18", height: "18", rx: "3", strokeWidth, strokeLinejoin: "round", strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx137("path", { d: "M12 3L12 21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Command.tsx
import { jsx as jsx138 } from "react/jsx-runtime";
function Command({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx138(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx138("path", { d: "M21 6C21 7.65685 19.6569 9 18 9H6C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6V18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15H18C19.6569 15 21 16.3431 21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18V6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z", strokeWidth, strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/Compass.tsx
import { jsx as jsx139, jsxs as jsxs110 } from "react/jsx-runtime";
function Compass({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs110(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx139("circle", { cx: "12", cy: "12", r: "9", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx139("path", { d: "M10.3795 9.87351L14.4821 8.50596C14.9707 8.34311 15.2149 8.26169 15.3774 8.31962C15.5187 8.37002 15.63 8.48127 15.6804 8.62263C15.7383 8.78507 15.6569 9.02934 15.494 9.51789L14.1265 13.6205C14.0801 13.7597 14.0569 13.8292 14.0174 13.887C13.9824 13.9382 13.9382 13.9824 13.887 14.0174C13.8292 14.0569 13.7597 14.0801 13.6205 14.1265L9.5179 15.494C9.02935 15.6569 8.78508 15.7383 8.62263 15.6804C8.48127 15.63 8.37003 15.5187 8.31962 15.3774C8.2617 15.2149 8.34312 14.9706 8.50597 14.4821L9.87351 10.3795C9.91989 10.2403 9.94308 10.1708 9.9826 10.113C10.0176 10.0618 10.0618 10.0176 10.113 9.9826C10.1708 9.94308 10.2403 9.91989 10.3795 9.87351Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Compose.tsx
import { jsx as jsx140, jsxs as jsxs111 } from "react/jsx-runtime";
function Compose({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs111(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx140("path", { d: "M15.0056 6.13647L17.8341 8.9649", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx140("path", { d: "M19.9554 5.42943L18.5412 4.01521C18.1507 3.62469 17.5175 3.62469 17.127 4.01521L6.35797 14.7842C5.99814 15.144 5.71027 15.5692 5.50981 16.037L3.69194 20.2787L7.93364 18.4608C8.40138 18.2603 8.82656 17.9725 9.18639 17.6126L19.9554 6.84364C20.3459 6.45312 20.3459 5.81995 19.9554 5.42943Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Confetti.tsx
import { jsx as jsx141, jsxs as jsxs112 } from "react/jsx-runtime";
function Confetti({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs112(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx141("path", { d: "M7.52425 7.99847C7.57945 9.33007 8.76944 11.417 10.6802 13.3278C12.591 15.2386 14.6779 16.4285 16.0095 16.4838C16.4469 16.5019 16.8028 16.3976 17.0442 16.1562C18.0205 15.1799 16.7542 12.3306 14.2158 9.79224C11.6774 7.25383 8.82811 5.9875 7.8518 6.96381C7.61041 7.2052 7.50611 7.56109 7.52425 7.99847ZM16.0095 16.4838L6.04341 20.8568C5.21514 21.2202 4.24874 21.0384 3.60916 20.3988C2.96958 19.7593 2.78778 18.7929 3.15121 17.9646L7.52425 7.99847", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx141("path", { d: "M19.1807 10.4408C20.032 10.1944 21.2397 10.3144 22.3778 10.7507", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx141("path", { d: "M13.3753 4.55945C13.8735 3.82655 14.134 2.64118 14.0722 1.42389", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx141("path", { d: "M16.6454 7.02429C17.4046 5.1738 20.4703 4.8567 21.1508 2.66397", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx141("path", { d: "M8.24421 2.44187L8.68124 3.34132", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx141("path", { d: "M20.9445 15.7631L21.9115 16.0179", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx141("path", { d: "M10.0019 19.1226C9.08185 18.5801 8.09169 17.8102 7.14478 16.8633C6.1987 15.9172 5.42933 14.9279 4.88691 14.0086", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Contract.tsx
import { jsx as jsx142, jsxs as jsxs113 } from "react/jsx-runtime";
function Contract({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs113(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx142("path", { d: "M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V16.2C19 17.8802 19 18.7202 18.673 19.362C18.3854 19.9265 17.9265 20.3854 17.362 20.673C16.7202 21 15.8802 21 14.2 21H9.8C8.11984 21 7.27976 21 6.63803 20.673C6.07354 20.3854 5.6146 19.9265 5.32698 19.362C5 18.7202 5 17.8802 5 16.2V7.8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx142("path", { d: "M9 11L15 11", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx142("path", { d: "M9 7L15 7", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx142("path", { d: "M9.03046 17C9.03046 17 9.13452 15 11 15C12.1193 15 13 16 13 17H14.2538H15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Contrast.tsx
import { jsx as jsx143, jsxs as jsxs114 } from "react/jsx-runtime";
function Contrast({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs114(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx143("circle", { cx: "12", cy: "12", r: "9", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx143("path", { d: "M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7V17Z", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Copy.tsx
import { jsx as jsx144, jsxs as jsxs115 } from "react/jsx-runtime";
function Copy({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs115(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx144("path", { d: "M17 7C19.2091 7 21 8.79086 21 11V14.6C21 16.8402 21 17.9603 20.564 18.816C20.1805 19.5686 19.5686 20.1805 18.816 20.564C17.9603 21 16.8402 21 14.6 21H11C8.79086 21 7 19.2091 7 17", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx144("rect", { x: "3", y: "3", width: "14", height: "14", rx: "4", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Cpu01.tsx
import { jsx as jsx145, jsxs as jsxs116 } from "react/jsx-runtime";
function Cpu01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs116(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx145("rect", { x: "5", y: "5", width: "14", height: "14", rx: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx145("rect", { x: "9", y: "9", width: "6", height: "6", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx145("path", { d: "M5 9L3 9", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx145("path", { d: "M21 9L19 9", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx145("path", { d: "M5 15L3 15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx145("path", { d: "M21 15L19 15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx145("path", { d: "M9 5V3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx145("path", { d: "M9 21V19", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx145("path", { d: "M15 5V3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx145("path", { d: "M15 21V19", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Crop.tsx
import { jsx as jsx146 } from "react/jsx-runtime";
function Crop({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx146(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx146("path", { d: "M7 7V14C7 15.6569 8.34315 17 10 17H17M7 7V3M7 7H3M17 17V21M17 17H21M11 7H14C15.6569 7 17 8.34315 17 10V13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/CrossHair01.tsx
import { jsx as jsx147, jsxs as jsxs117 } from "react/jsx-runtime";
function CrossHair01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs117(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx147("circle", { cx: "12", cy: "12", r: "7", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx147("path", { d: "M17 12L21 12", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx147("path", { d: "M3 12L7 12", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx147("path", { d: "M12 7L12 3", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx147("path", { d: "M12 21L12 17", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx147("path", { d: "M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Crown.tsx
import { jsx as jsx148, jsxs as jsxs118 } from "react/jsx-runtime";
function Crown({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs118(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx148("path", { d: "M3 6.11342C3 5.682 3.50973 5.45309 3.83218 5.73972L7.16782 8.70473C7.35726 8.87312 7.64274 8.87312 7.83218 8.70473L11.6678 5.29527C11.8573 5.12688 12.1427 5.12688 12.3322 5.29527L16.1678 8.70473C16.3573 8.87312 16.6427 8.87312 16.8322 8.70473L20.1678 5.73972C20.4903 5.45309 21 5.682 21 6.11342V16C21 17.1046 20.1046 18 19 18H5C3.89543 18 3 17.1046 3 16V6.11342Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx148("path", { d: "M3 14H21", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/CurrencyDollar.tsx
import { jsx as jsx149 } from "react/jsx-runtime";
function CurrencyDollar({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx149(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx149("path", { d: "M19 8C19 6.89543 18.1046 6 17 6H12M5 16C5 17.1046 5.89543 18 7 18H12M12 18H16C16.9319 18 17.3978 18 17.7654 17.8478C18.2554 17.6448 18.6448 17.2554 18.8478 16.7654C19 16.3978 19 15.9319 19 15C19 14.0681 19 13.6022 18.8478 13.2346C18.6448 12.7446 18.2554 12.3552 17.7654 12.1522C17.3978 12 16.9319 12 16 12H8C7.06812 12 6.60218 12 6.23463 11.8478C5.74458 11.6448 5.35523 11.2554 5.15224 10.7654C5 10.3978 5 9.93188 5 9C5 8.06812 5 7.60218 5.15224 7.23463C5.35523 6.74458 5.74458 6.35523 6.23463 6.15224C6.60218 6 7.06812 6 8 6H12M12 18V21M12 6V3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/CurrencyEuro.tsx
import { jsx as jsx150, jsxs as jsxs119 } from "react/jsx-runtime";
function CurrencyEuro({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs119(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx150("path", { d: "M18 3.93552C16.795 3.33671 15.4368 3 14 3C9.02944 3 5 7.02944 5 12C5 16.9706 9.02944 21 14 21C15.4368 21 16.795 20.6633 18 20.0645", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx150("path", { d: "M3 10H12", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx150("path", { d: "M3 14H12", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/CurrencyRupee.tsx
import { jsx as jsx151, jsxs as jsxs120 } from "react/jsx-runtime";
function CurrencyRupee({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs120(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx151("path", { d: "M6 3H10C12.7614 3 15 5.23858 15 8C15 10.7614 12.7614 13 10 13H6L16 21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx151("path", { d: "M6 3H18", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx151("path", { d: "M6 8H18", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/CurrencySterlingPound.tsx
import { jsx as jsx152, jsxs as jsxs121 } from "react/jsx-runtime";
function CurrencySterlingPound({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs121(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx152("path", { d: "M16 3.80269C15.1175 3.29218 14.0929 3 13 3C10.1792 3 7.81299 4.94661 7.17151 7.56978C6.94412 8.49965 7.13974 9.46581 7.41481 10.3827L8.45258 13.8419C9.3286 16.762 7.83057 19.8678 5 21H17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx152("path", { d: "M6 13L14 13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/CurrencyYen.tsx
import { jsx as jsx153, jsxs as jsxs122 } from "react/jsx-runtime";
function CurrencyYen({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs122(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx153("path", { d: "M7 13L17 13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx153("path", { d: "M7 17L17 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx153("path", { d: "M18 3L12 12M12 12L6 3M12 12V21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Cursor.tsx
import { jsx as jsx154 } from "react/jsx-runtime";
function Cursor({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx154(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx154("path", { d: "M3 3L9 21L12 15L18 21L21 18L15 12L21 9L3 3Z", strokeWidth, strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/Data01.tsx
import { jsx as jsx155, jsxs as jsxs123 } from "react/jsx-runtime";
function Data01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs123(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx155("rect", { x: "10", y: "4", width: "4", height: "4", rx: "1", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx155("rect", { x: "18", y: "2", width: "4", height: "4", rx: "1", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx155("rect", { x: "16", y: "10", width: "4", height: "4", rx: "1", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx155("path", { d: "M3 13H7M7 13V10C7 9.44772 6.55228 9 6 9H4C3.44772 9 3 9.44772 3 10V13L3 17L3 20C3 20.5523 3.44772 21 4 21H7M7 13L10 13C10.5523 13 11 13.4477 11 14V17M7 13L7 21M7 21H11M11 17H14C14.5523 17 15 17.4477 15 18V20C15 20.5523 14.5523 21 14 21H11M11 17L11 21M11 17H3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/DataFlow.tsx
import { jsx as jsx156, jsxs as jsxs124 } from "react/jsx-runtime";
function DataFlow({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs124(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx156("path", { d: "M7 5H18C19.6569 5 21 6.34315 21 8V9C21 10.6569 19.6569 12 18 12H7C5.34315 12 4 13.3431 4 15V16C4 17.6569 5.34315 19 7 19H17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx156("rect", { x: "3", y: "3", width: "4", height: "4", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx156("rect", { x: "17", y: "17", width: "4", height: "4", rx: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Database.tsx
import { jsx as jsx157, jsxs as jsxs125 } from "react/jsx-runtime";
function Database({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs125(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx157("ellipse", { cx: "12", cy: "6", rx: "7", ry: "3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx157("path", { d: "M19 10C19 11.6569 15.866 13 12 13C8.13401 13 5 11.6569 5 10", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx157("path", { d: "M19 14C19 15.6569 15.866 17 12 17C8.13401 17 5 15.6569 5 14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx157("path", { d: "M5 6V18C5 19.6569 8.13401 21 12 21C15.866 21 19 19.6569 19 18V6", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Delivery.tsx
import { jsx as jsx158, jsxs as jsxs126 } from "react/jsx-runtime";
function Delivery({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs126(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx158("path", { d: "M5 4L11 4C12.1046 4 13 4.89543 13 6V7M2 18H5H13M13 7H14.4384C15.3562 7 16.1561 7.62459 16.3787 8.51493L16.8106 10.2425C16.9219 10.6877 17.3219 11 17.7808 11H20C21.1046 11 22 11.8954 22 13V17C22 17.5523 21.5523 18 21 18H20M13 7V18M13 18H16", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx158("path", { d: "M6 13L9 13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx158("path", { d: "M3 9L8 9", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx158("circle", { cx: "18", cy: "18", r: "2", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Diamond01.tsx
import { jsx as jsx159, jsxs as jsxs127 } from "react/jsx-runtime";
function Diamond01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs127(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx159("path", { d: "M6.05003 5.42496C6.39735 4.90398 6.57101 4.64349 6.80045 4.45491C7.00357 4.28796 7.23762 4.1627 7.4892 4.0863C7.77337 4 8.08645 4 8.71259 4H15.2874C15.9136 4 16.2266 4 16.5108 4.0863C16.7624 4.1627 16.9964 4.28796 17.1996 4.45491C17.429 4.64349 17.6027 4.90398 17.95 5.42496L19.687 8.03055C20.1583 8.73749 20.394 9.09096 20.4731 9.46963C20.5429 9.80393 20.5259 10.1505 20.4238 10.4764C20.3082 10.8456 20.0392 11.1744 19.5011 11.8319L14.4767 17.973C13.6279 19.0104 13.2035 19.529 12.6934 19.7176C12.2459 19.883 11.7541 19.883 11.3066 19.7176C10.7965 19.529 10.3721 19.0104 9.52334 17.973L4.49887 11.8319C3.96084 11.1744 3.69183 10.8456 3.57618 10.4764C3.47408 10.1505 3.45713 9.80393 3.52694 9.46963C3.60603 9.09096 3.84167 8.73749 4.31297 8.03055L6.05003 5.42496Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx159("path", { d: "M3.33313 10L20.5937 10", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Diamond02.tsx
import { jsx as jsx160, jsxs as jsxs128 } from "react/jsx-runtime";
function Diamond02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs128(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx160("path", { d: "M6.05003 5.42496C6.39735 4.90398 6.57101 4.64349 6.80045 4.45491C7.00357 4.28796 7.23762 4.1627 7.4892 4.0863C7.77337 4 8.08645 4 8.71259 4H15.2874C15.9136 4 16.2266 4 16.5108 4.0863C16.7624 4.1627 16.9964 4.28796 17.1996 4.45491C17.429 4.64349 17.6027 4.90398 17.95 5.42496L19.687 8.03055C20.1583 8.73749 20.394 9.09096 20.4731 9.46963C20.5429 9.80393 20.5259 10.1505 20.4238 10.4764C20.3082 10.8456 20.0392 11.1744 19.5011 11.8319L14.4767 17.973C13.6279 19.0104 13.2035 19.529 12.6934 19.7176C12.2459 19.883 11.7541 19.883 11.3066 19.7176C10.7965 19.529 10.3721 19.0104 9.52334 17.973L4.49887 11.8319C3.96084 11.1744 3.69183 10.8456 3.57618 10.4764C3.47408 10.1505 3.45713 9.80393 3.52694 9.46963C3.60603 9.09096 3.84167 8.73749 4.31297 8.03055L6.05003 5.42496Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx160("path", { d: "M3 10L21 10", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx160("path", { d: "M10 4L8 10L11.6364 20", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx160("path", { d: "M14 4L16 10L12.3636 20", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Disc.tsx
import { jsx as jsx161, jsxs as jsxs129 } from "react/jsx-runtime";
function Disc({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs129(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx161("path", { d: "M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx161("path", { d: "M14.7 12C14.7 13.4912 13.4912 14.7 12 14.7C10.5088 14.7 9.3 13.4912 9.3 12C9.3 10.5088 10.5088 9.29999 12 9.29999C13.4912 9.29999 14.7 10.5088 14.7 12Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx161("path", { d: "M13.8 5.96088C15.832 6.56563 17.4344 8.16798 18.0391 10.2M10.2 18.0391C8.168 17.4343 6.56564 15.832 5.96089 13.8", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Discount.tsx
import { jsx as jsx162, jsxs as jsxs130 } from "react/jsx-runtime";
function Discount({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs130(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx162("path", { d: "M10.5883 2.40679C11.3687 1.62904 12.6313 1.62904 13.4117 2.40679L15.0866 4.0758C15.4058 4.39392 15.8232 4.59489 16.2709 4.64614L18.6201 4.91499C19.7148 5.04028 20.5019 6.02735 20.3805 7.12247L20.1199 9.47255C20.0702 9.92048 20.1733 10.3721 20.4124 10.7541L21.6668 12.7584C22.2514 13.6923 21.9705 14.9232 21.0386 15.511L19.0387 16.7725C18.6575 17.013 18.3687 17.3751 18.2191 17.8002L17.4343 20.0307C17.0685 21.07 15.931 21.6178 14.8904 21.2557L12.6572 20.4787C12.2316 20.3306 11.7684 20.3306 11.3428 20.4787L9.10959 21.2557C8.06895 21.6178 6.93147 21.07 6.56574 20.0307L5.78088 17.8002C5.63129 17.3751 5.34249 17.013 4.96131 16.7725L2.96145 15.511C2.02953 14.9232 1.7486 13.6923 2.33317 12.7584L3.58764 10.7541C3.82675 10.3721 3.92982 9.92048 3.88014 9.47255L3.61952 7.12247C3.49808 6.02735 4.28524 5.04028 5.37992 4.91499L7.72908 4.64614C8.17683 4.59489 8.59416 4.39392 8.91339 4.0758L10.5883 2.40679Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx162("path", { d: "M15 9L9 15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx162("path", { d: "M9 9H9.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx162("path", { d: "M15 15H15.0001", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Dislike.tsx
import { jsx as jsx163, jsxs as jsxs131 } from "react/jsx-runtime";
function Dislike({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs131(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx163("path", { d: "M5.87856 14.511H8.07663C9.0161 14.511 9.6738 15.4392 9.36234 16.3256L9.23945 16.6753C8.58091 18.5493 9.7117 20.5768 11.6521 21.0013C11.8521 21.045 12.0539 20.9359 12.1267 20.7446L14.0095 15.7994C14.3048 15.0237 15.0486 14.511 15.8786 14.511H17V6.69799C17 5.33189 16.0791 4.12711 14.7454 3.8312C11.7774 3.17266 9.4659 2.94616 6.48941 3.01047C5.04635 3.04165 3.87099 4.15526 3.69078 5.58736L2.98122 11.2262C2.76181 12.9699 4.12111 14.511 5.87856 14.511Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx163("rect", { x: "21", y: "16.011", width: "4", height: "13", rx: "1", transform: "rotate(180 21 16.011)", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Dns.tsx
import { jsx as jsx164, jsxs as jsxs132 } from "react/jsx-runtime";
function Dns({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs132(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx164("rect", { x: "3", y: "3", width: "18", height: "8", rx: "3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx164("path", { d: "M11 7L17 7", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx164("path", { d: "M7.0001 7H7", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx164("rect", { x: "3", y: "13", width: "18", height: "8", rx: "3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx164("path", { d: "M11 17L17 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx164("path", { d: "M7.0001 17H7", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Document.tsx
import { jsx as jsx165, jsxs as jsxs133 } from "react/jsx-runtime";
function Document({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs133(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx165("path", { d: "M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V16.2C19 17.8802 19 18.7202 18.673 19.362C18.3854 19.9265 17.9265 20.3854 17.362 20.673C16.7202 21 15.8802 21 14.2 21H9.8C8.11984 21 7.27976 21 6.63803 20.673C6.07354 20.3854 5.6146 19.9265 5.32698 19.362C5 18.7202 5 17.8802 5 16.2V7.8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx165("path", { d: "M9 11H15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx165("path", { d: "M9 7H15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx165("path", { d: "M9 15H11", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/DocumentCheckmark.tsx
import { jsx as jsx166, jsxs as jsxs134 } from "react/jsx-runtime";
function DocumentCheckmark({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs134(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx166("path", { d: "M19 13V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H9.8C8.11984 3 7.27976 3 6.63803 3.32698C6.07354 3.6146 5.6146 4.07354 5.32698 4.63803C5 5.27976 5 6.11984 5 7.8V16.2C5 17.8802 5 18.7202 5.32698 19.362C5.6146 19.9265 6.07354 20.3854 6.63803 20.673C7.27976 21 8.11984 21 9.8 21H11", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx166("path", { d: "M9 11H15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx166("path", { d: "M9 7H15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx166("path", { d: "M9 15H11", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx166("path", { d: "M15 19L17 21L21 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/DocumentMinus.tsx
import { jsx as jsx167, jsxs as jsxs135 } from "react/jsx-runtime";
function DocumentMinus({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs135(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx167("path", { d: "M19 16V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H9.8C8.11984 3 7.27976 3 6.63803 3.32698C6.07354 3.6146 5.6146 4.07354 5.32698 4.63803C5 5.27976 5 6.11984 5 7.8V16.2C5 17.8802 5 18.7202 5.32698 19.362C5.6146 19.9265 6.07354 20.3854 6.63803 20.673C7.27976 21 8.11984 21 9.8 21H11", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx167("path", { d: "M9 11H15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx167("path", { d: "M9 7H15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx167("path", { d: "M9 15H11", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx167("path", { d: "M15 20H21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/DocumentPlus.tsx
import { jsx as jsx168, jsxs as jsxs136 } from "react/jsx-runtime";
function DocumentPlus({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs136(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx168("path", { d: "M18 11V7.8C18 6.11984 18 5.27976 17.673 4.63803C17.3854 4.07354 16.9265 3.6146 16.362 3.32698C15.7202 3 14.8802 3 13.2 3H8.8C7.11984 3 6.27976 3 5.63803 3.32698C5.07354 3.6146 4.6146 4.07354 4.32698 4.63803C4 5.27976 4 6.11984 4 7.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H11", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx168("path", { d: "M8 11H14", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx168("path", { d: "M8 7H14", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx168("path", { d: "M8 15H10", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx168("path", { d: "M18 21V15M15 18H21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/DocumentX.tsx
import { jsx as jsx169, jsxs as jsxs137 } from "react/jsx-runtime";
function DocumentX({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs137(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx169("path", { d: "M19 13V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H9.8C8.11984 3 7.27976 3 6.63803 3.32698C6.07354 3.6146 5.6146 4.07354 5.32698 4.63803C5 5.27976 5 6.11984 5 7.8V16.2C5 17.8802 5 18.7202 5.32698 19.362C5.6146 19.9265 6.07354 20.3854 6.63803 20.673C7.27976 21 8.11984 21 9.8 21H13", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx169("path", { d: "M9 11H15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx169("path", { d: "M9 7H15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx169("path", { d: "M9 15H11", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx169("path", { d: "M21 21L17 17", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx169("path", { d: "M17 21L21 17", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Documents.tsx
import { jsx as jsx170, jsxs as jsxs138 } from "react/jsx-runtime";
function Documents({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs138(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx170("path", { d: "M8 6C7.07003 6 6.60504 6 6.22354 6.10222C5.18827 6.37962 4.37962 7.18827 4.10222 8.22354C4 8.60504 4 9.07003 4 10V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H11C11.93 22 12.395 22 12.7765 21.8978C13.8117 21.6204 14.6204 20.8117 14.8978 19.7765C15 19.395 15 18.93 15 18", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx170("path", { d: "M8 6.8C8 5.11984 8 4.27976 8.32698 3.63803C8.6146 3.07354 9.07354 2.6146 9.63803 2.32698C10.2798 2 11.1198 2 12.8 2H15.2C16.8802 2 17.7202 2 18.362 2.32698C18.9265 2.6146 19.3854 3.07354 19.673 3.63803C20 4.27976 20 5.11984 20 6.8V13.2C20 14.8802 20 15.7202 19.673 16.362C19.3854 16.9265 18.9265 17.3854 18.362 17.673C17.7202 18 16.8802 18 15.2 18H12.8C11.1198 18 10.2798 18 9.63803 17.673C9.07354 17.3854 8.6146 16.9265 8.32698 16.362C8 15.7202 8 14.8802 8 13.2V6.8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx170("path", { d: "M12 10H16", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx170("path", { d: "M12 6H16", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx170("path", { d: "M12 14H14", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Domain.tsx
import { jsx as jsx171, jsxs as jsxs139 } from "react/jsx-runtime";
function Domain({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs139(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx171("path", { d: "M9 13L9 17H12M12 14V17M15 13V17H12", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx171("rect", { x: "3", y: "3", width: "18", height: "18", rx: "3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx171("path", { d: "M3 9H21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx171("path", { d: "M7.0001 6H7", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx171("path", { d: "M10.0001 6H10", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx171("path", { d: "M13.0001 6H13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/DotLarge.tsx
import { jsx as jsx172 } from "react/jsx-runtime";
function DotLarge({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx172(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx172("circle", { cx: "12", cy: "12", r: "6", strokeWidth, strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/DotMedium.tsx
import { jsx as jsx173 } from "react/jsx-runtime";
function DotMedium({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx173(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx173("circle", { cx: "12", cy: "12", r: "4", strokeWidth, strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/DotSmall.tsx
import { jsx as jsx174 } from "react/jsx-runtime";
function DotSmall({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx174(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx174("circle", { cx: "11.5", cy: "11.5", r: "2.5", strokeWidth, strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/DotsTripleHorizontal.tsx
import { jsx as jsx175, jsxs as jsxs140 } from "react/jsx-runtime";
function DotsTripleHorizontal({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs140(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx175("path", { d: "M5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx175("path", { d: "M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx175("path", { d: "M21 12C21 12.5523 20.5523 13 20 13C19.4477 13 19 12.5523 19 12C19 11.4477 19.4477 11 20 11C20.5523 11 21 11.4477 21 12Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/DotsTripleVertical.tsx
import { jsx as jsx176, jsxs as jsxs141 } from "react/jsx-runtime";
function DotsTripleVertical({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs141(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx176("path", { d: "M13 4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx176("path", { d: "M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx176("path", { d: "M13 20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20C11 19.4477 11.4477 19 12 19C12.5523 19 13 19.4477 13 20Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Download.tsx
import { jsx as jsx177, jsxs as jsxs142 } from "react/jsx-runtime";
function Download({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs142(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx177("path", { d: "M3 14C3 14.734 3 15.4808 3 16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V14", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx177("path", { d: "M12 3V14M16 10L12 14L8 10", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Drag.tsx
import { jsx as jsx178, jsxs as jsxs143 } from "react/jsx-runtime";
function Drag({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs143(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx178("path", { d: "M10.5 9V5.75C10.5 4.7835 9.7165 4 8.75 4C7.7835 4 7 4.7835 7 5.75V12", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx178("path", { d: "M14 9V4.75C14 3.7835 13.2165 3 12.25 3C11.2835 3 10.5 3.7835 10.5 4.75V9", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx178("path", { d: "M17.5 9V5.75C17.5 4.7835 16.7165 4 15.75 4C14.7835 4 14 4.7835 14 5.75V9", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx178("path", { d: "M21 11V7.75C21 6.7835 20.2165 6 19.25 6C18.2835 6 17.5 6.7835 17.5 7.75V9", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx178("path", { d: "M21 9V12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12V11.5714C3 10.1513 4.15127 9 5.57143 9H7", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/DragHandle01.tsx
import { jsx as jsx179, jsxs as jsxs144 } from "react/jsx-runtime";
function DragHandle01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs144(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx179("path", { d: "M5 16C5 16.5523 4.55228 17 4 17C3.44772 17 3 16.5523 3 16C3 15.4477 3.44772 15 4 15C4.55228 15 5 15.4477 5 16Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx179("path", { d: "M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx179("path", { d: "M21 16C21 16.5523 20.5523 17 20 17C19.4477 17 19 16.5523 19 16C19 15.4477 19.4477 15 20 15C20.5523 15 21 15.4477 21 16Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx179("path", { d: "M5 8C5 8.55228 4.55228 9 4 9C3.44772 9 3 8.55228 3 8C3 7.44772 3.44772 7 4 7C4.55228 7 5 7.44772 5 8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx179("path", { d: "M13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx179("path", { d: "M21 8C21 8.55228 20.5523 9 20 9C19.4477 9 19 8.55228 19 8C19 7.44772 19.4477 7 20 7C20.5523 7 21 7.44772 21 8Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/DragHandle02.tsx
import { jsx as jsx180, jsxs as jsxs145 } from "react/jsx-runtime";
function DragHandle02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs145(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx180("path", { d: "M9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx180("path", { d: "M17 4C17 4.55228 16.5523 5 16 5C15.4477 5 15 4.55228 15 4C15 3.44772 15.4477 3 16 3C16.5523 3 17 3.44772 17 4Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx180("path", { d: "M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx180("path", { d: "M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx180("path", { d: "M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx180("path", { d: "M17 20C17 20.5523 16.5523 21 16 21C15.4477 21 15 20.5523 15 20C15 19.4477 15.4477 19 16 19C16.5523 19 17 19.4477 17 20Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Dribbble.tsx
import { jsx as jsx181 } from "react/jsx-runtime";
function Dribbble({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx181(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx181("path", { d: "M3.07644 10.8217C6.60311 11.0782 9.8295 10.6982 12.6809 9.61781M5.8621 18.5823C3.75096 16.6128 2.70285 13.6788 3.07644 10.8217C3.50801 7.52127 5.72775 4.78325 8.73134 3.61195M12.6809 9.61781C13.157 10.5411 13.591 11.4849 13.9803 12.4428M12.6809 9.61781C14.8769 8.78579 16.8504 7.53835 18.5675 5.84629M12.6809 9.61781C11.5789 7.48014 10.2514 5.45204 8.73134 3.61195M13.9803 12.4428C10.741 13.2284 7.91806 15.3194 5.8621 18.5823M13.9803 12.4428C14.9855 14.916 15.6928 17.4833 16.0571 20.0359M13.9803 12.4428C16.1592 11.9143 18.5265 11.9765 20.9754 12.67M5.8621 18.5823C8.5896 21.1267 12.7354 21.7162 16.0571 20.0359M16.0571 20.0359C18.8013 18.6476 20.7381 15.895 20.9754 12.67M8.73134 3.61195C12.111 2.29397 16.0793 3.19182 18.5675 5.84629C20.2791 7.67221 21.1589 10.1767 20.9754 12.67", strokeWidth, stroke: color })
    }
  );
}

// src/icons/Duplicate.tsx
import { jsx as jsx182, jsxs as jsxs146 } from "react/jsx-runtime";
function Duplicate({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs146(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx182("path", { d: "M21 18V11.6C21 8.23969 21 6.55953 20.346 5.27606C19.7708 4.14708 18.8529 3.2292 17.7239 2.65396C16.4405 2 14.7603 2 11.4 2H8", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx182("path", { d: "M3 10.8C3 9.11984 3 8.27976 3.32698 7.63803C3.6146 7.07354 4.07354 6.6146 4.63803 6.32698C5.27976 6 6.11984 6 7.8 6H12.2C13.8802 6 14.7202 6 15.362 6.32698C15.9265 6.6146 16.3854 7.07354 16.673 7.63803C17 8.27976 17 9.11984 17 10.8V17.2C17 18.8802 17 19.7202 16.673 20.362C16.3854 20.9265 15.9265 21.3854 15.362 21.673C14.7202 22 13.8802 22 12.2 22H7.8C6.11984 22 5.27976 22 4.63803 21.673C4.07354 21.3854 3.6146 20.9265 3.32698 20.362C3 19.7202 3 18.8802 3 17.2V10.8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx182("path", { d: "M13 14H7M10 11L10 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Edit.tsx
import { jsx as jsx183, jsxs as jsxs147 } from "react/jsx-runtime";
function Edit({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs147(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx183("path", { d: "M12 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V12", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx183("path", { d: "M20.938 4.07417L19.8695 3.00569C19.479 2.61517 18.8458 2.61517 18.4553 3.00569L10.6214 10.8396C10.1062 11.3548 9.74158 12.0008 9.56672 12.708L8.99999 15.0001L11.2825 14.3873C11.96 14.2054 12.5778 13.8486 13.0738 13.3525L20.938 5.48838C21.3285 5.09786 21.3285 4.4647 20.938 4.07417Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/EllipseDashed.tsx
import { jsx as jsx184 } from "react/jsx-runtime";
function EllipseDashed({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx184(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx184("path", { d: "M4.84992 6.52318C5.19304 6.0756 5.72266 5.47885 6.52827 4.85228M3.08205 10.8272C2.94778 11.6701 3.01492 12.5578 3.08205 13.1769M4.86484 17.4735C5.37953 18.1448 6.08071 18.8311 6.52081 19.1369M10.8249 20.9272C11.623 21.0614 12.8911 20.9719 13.1746 20.9272M17.4752 19.1352C18.0569 18.718 18.7266 18.0444 19.1399 17.4704M20.9196 10.8226C21.0339 11.6789 21.0157 12.6081 20.9196 13.1789M19.1399 6.53092C18.772 6.03424 18.0148 5.26251 17.4845 4.85403M10.8257 3.07675C11.7836 2.94703 12.3323 2.97697 13.1805 3.07676", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/EllipseSolid.tsx
import { jsx as jsx185 } from "react/jsx-runtime";
function EllipseSolid({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx185(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx185("circle", { cx: "12", cy: "12", r: "9", strokeWidth, stroke: color })
    }
  );
}

// src/icons/Email.tsx
import { jsx as jsx186, jsxs as jsxs148 } from "react/jsx-runtime";
function Email({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs148(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx186("path", { d: "M16.2 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V14.2C3 15.8802 3 16.7202 3.32698 17.362C3.6146 17.9265 4.07354 18.3854 4.63803 18.673C5.27976 19 6.11984 19 7.8 19H16.2C17.8802 19 18.7202 19 19.362 18.673C19.9265 18.3854 20.3854 17.9265 20.673 17.362C21 16.7202 21 15.8802 21 14.2V9.8C21 8.11984 21 7.27976 20.673 6.63803C20.3854 6.07354 19.9265 5.6146 19.362 5.32698C18.7202 5 17.8802 5 16.2 5Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx186("path", { d: "M7 9L11.4855 11.6913C11.8022 11.8813 12.1978 11.8813 12.5145 11.6913L17 9", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/EmojiJoy.tsx
import { jsx as jsx187, jsxs as jsxs149 } from "react/jsx-runtime";
function EmojiJoy({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs149(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx187("circle", { cx: "12", cy: "12", r: "9", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx187("path", { d: "M14 8.00003C14.7813 7.45331 15.2186 7.41414 16 8.00003", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx187("path", { d: "M8 8.00003C8.78128 7.45331 9.21863 7.41414 10 8.00003", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx187("path", { d: "M8 12H16V13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13V12Z", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/EmojiNeutral.tsx
import { jsx as jsx188, jsxs as jsxs150 } from "react/jsx-runtime";
function EmojiNeutral({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs150(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx188("circle", { cx: "12", cy: "12", r: "9", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx188("path", { d: "M9 15H15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx188("path", { d: "M9.14453 9H8.84576M9.50011 9C9.50011 9.27614 9.27625 9.5 9.00011 9.5C8.72396 9.5 8.50011 9.27614 8.50011 9C8.50011 8.72386 8.72396 8.5 9.00011 8.5C9.27625 8.5 9.50011 8.72386 9.50011 9Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx188("path", { d: "M15.1445 9H14.8458M15.5001 9C15.5001 9.27614 15.2762 9.5 15.0001 9.5C14.724 9.5 14.5001 9.27614 14.5001 9C14.5001 8.72386 14.724 8.5 15.0001 8.5C15.2762 8.5 15.5001 8.72386 15.5001 9Z", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/EmojiSad.tsx
import { jsx as jsx189, jsxs as jsxs151 } from "react/jsx-runtime";
function EmojiSad({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs151(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx189("circle", { cx: "12", cy: "12", r: "9", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx189("path", { d: "M9 15C11.3919 13.6959 12.7057 13.6952 15 15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx189("path", { d: "M9.14453 9H8.84576M9.50011 9C9.50011 9.27614 9.27625 9.5 9.00011 9.5C8.72396 9.5 8.50011 9.27614 8.50011 9C8.50011 8.72386 8.72396 8.5 9.00011 8.5C9.27625 8.5 9.50011 8.72386 9.50011 9Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx189("path", { d: "M15.1445 9H14.8458M15.5001 9C15.5001 9.27614 15.2762 9.5 15.0001 9.5C14.724 9.5 14.5001 9.27614 14.5001 9C14.5001 8.72386 14.724 8.5 15.0001 8.5C15.2762 8.5 15.5001 8.72386 15.5001 9Z", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/EmojiSmile.tsx
import { jsx as jsx190, jsxs as jsxs152 } from "react/jsx-runtime";
function EmojiSmile({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs152(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx190("circle", { cx: "12", cy: "12", r: "9", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx190("path", { d: "M9 14.0217C11.3919 15.3258 12.7057 15.3264 15 14.0217", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx190("path", { d: "M9.14453 9H8.84576M9.50011 9C9.50011 9.27614 9.27625 9.5 9.00011 9.5C8.72396 9.5 8.50011 9.27614 8.50011 9C8.50011 8.72386 8.72396 8.5 9.00011 8.5C9.27625 8.5 9.50011 8.72386 9.50011 9Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx190("path", { d: "M15.1445 9H14.8458M15.5001 9C15.5001 9.27614 15.2762 9.5 15.0001 9.5C14.724 9.5 14.5001 9.27614 14.5001 9C14.5001 8.72386 14.724 8.5 15.0001 8.5C15.2762 8.5 15.5001 8.72386 15.5001 9Z", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Eraser.tsx
import { jsx as jsx191, jsxs as jsxs153 } from "react/jsx-runtime";
function Eraser({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs153(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx191("path", { d: "M8 21L17 21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx191("path", { d: "M11.2922 7.21176L3.5889 14.915C2.80786 15.6961 2.80785 16.9624 3.5889 17.7435L6.2368 20.3914C6.60752 20.7621 7.10898 20.9724 7.63323 20.9771L9.91896 20.9974C10.4555 21.0022 10.9715 20.7911 11.351 20.4117L17.9215 13.8411M11.2922 7.21176L13.7855 4.71847C14.5665 3.93743 15.8328 3.93743 16.6139 4.71847L20.4148 8.5194C21.1959 9.30045 21.1959 10.5668 20.4148 11.3478L17.9215 13.8411M11.2922 7.21176L17.9215 13.8411", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ErrorOctagon.tsx
import { jsx as jsx192, jsxs as jsxs154 } from "react/jsx-runtime";
function ErrorOctagon({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs154(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx192("path", { d: "M6.99411 4.40589C7.51297 3.88703 7.7724 3.62761 8.07514 3.44208C8.34356 3.27759 8.6362 3.15638 8.9423 3.08289C9.28757 3 9.65445 3 10.3882 3H13.6118C14.3455 3 14.7124 3 15.0577 3.08289C15.3638 3.15638 15.6564 3.27759 15.9249 3.44208C16.2276 3.62761 16.487 3.88703 17.0059 4.40589L19.5941 6.99411C20.113 7.51297 20.3724 7.7724 20.5579 8.07515C20.7224 8.34356 20.8436 8.6362 20.9171 8.9423C21 9.28757 21 9.65445 21 10.3882V13.6118C21 14.3455 21 14.7124 20.9171 15.0577C20.8436 15.3638 20.7224 15.6564 20.5579 15.9249C20.3724 16.2276 20.113 16.487 19.5941 17.0059L17.0059 19.5941C16.487 20.113 16.2276 20.3724 15.9249 20.5579C15.6564 20.7224 15.3638 20.8436 15.0577 20.9171C14.7124 21 14.3455 21 13.6118 21H10.3882C9.65445 21 9.28757 21 8.9423 20.9171C8.6362 20.8436 8.34356 20.7224 8.07514 20.5579C7.7724 20.3724 7.51297 20.113 6.99411 19.5941L4.40589 17.0059C3.88703 16.487 3.6276 16.2276 3.44208 15.9249C3.27759 15.6564 3.15638 15.3638 3.08289 15.0577C3 14.7124 3 14.3455 3 13.6118V10.3882C3 9.65445 3 9.28757 3.08289 8.9423C3.15638 8.6362 3.27759 8.34356 3.44208 8.07514C3.6276 7.7724 3.88703 7.51297 4.40589 6.99411L6.99411 4.40589Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx192("path", { d: "M12 12L12 8", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx192("path", { d: "M12 16H12.0001", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ErrorTriangle.tsx
import { jsx as jsx193, jsxs as jsxs155 } from "react/jsx-runtime";
function ErrorTriangle({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs155(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx193("path", { d: "M10.5689 4.86216C11.0295 3.94095 11.2598 3.48035 11.5715 3.33254C11.8427 3.20391 12.1573 3.20391 12.4285 3.33254C12.7402 3.48035 12.9705 3.94095 13.4311 4.86217L20.3422 18.6845C20.7256 19.4512 20.9173 19.8345 20.8712 20.1462C20.831 20.4183 20.6805 20.6618 20.4551 20.8195C20.197 21 19.7684 21 18.9111 21L5.08886 21C4.23164 21 3.80303 21 3.54489 20.8195C3.31949 20.6618 3.16898 20.4183 3.12877 20.1462C3.08273 19.8345 3.27441 19.4512 3.65777 18.6845L10.5689 4.86216Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx193("path", { d: "M12 13L12 10", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx193("path", { d: "M12 17H12.0001", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ExchangeSquareToCircle.tsx
import { jsx as jsx194, jsxs as jsxs156 } from "react/jsx-runtime";
function ExchangeSquareToCircle({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs156(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx194("path", { d: "M10 14C10 16.2091 11.7909 18 14 18C16.2091 18 18 16.2091 18 14C18 11.7909 16.2091 10 14 10", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx194("path", { d: "M6 9.2C6 8.07989 6 7.51984 6.21799 7.09202C6.40973 6.71569 6.71569 6.40973 7.09202 6.21799C7.51984 6 8.07989 6 9.2 6H10.8C11.9201 6 12.4802 6 12.908 6.21799C13.2843 6.40973 13.5903 6.71569 13.782 7.09202C14 7.51984 14 8.07989 14 9.2V10.8C14 11.9201 14 12.4802 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.4802 14 11.9201 14 10.8 14H9.2C8.07989 14 7.51984 14 7.09202 13.782C6.71569 13.5903 6.40973 13.2843 6.21799 12.908C6 12.4802 6 11.9201 6 10.8V9.2Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx194("path", { d: "M2 13C2 16.2716 3.57111 19.1763 6 21.0007H3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx194("path", { d: "M22 11.001C22 7.72934 20.4289 4.82466 18 3.00024H21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ExternalLink.tsx
import { jsx as jsx195, jsxs as jsxs157 } from "react/jsx-runtime";
function ExternalLink({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs157(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx195("path", { d: "M10 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V13", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx195("path", { d: "M21 8V3H15M21 3L12 12", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Eye.tsx
import { jsx as jsx196, jsxs as jsxs158 } from "react/jsx-runtime";
function Eye({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs158(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx196("path", { d: "M3 12.917C4.64352 9.36087 8.05636 6.91699 12.0001 6.91699C15.9437 6.91699 19.3564 9.36076 21 12.9167", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx196("path", { d: "M14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/EyeDropper.tsx
import { jsx as jsx197, jsxs as jsxs159 } from "react/jsx-runtime";
function EyeDropper({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs159(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx197("path", { d: "M15.9277 3.94975C17.0992 2.77818 18.9987 2.77818 20.1703 3.94975C21.3419 5.12132 21.3419 7.02082 20.1703 8.19239L15.9277 12.435L11.685 8.19239L15.9277 3.94975Z", strokeWidth, strokeLinejoin: "round", strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx197("path", { d: "M12.3921 8.89948L15.2206 11.7279L7.06913 19.8793C6.84958 20.0989 6.58193 20.2643 6.28737 20.3625L4.39001 20.9949C3.60825 21.2555 2.86451 20.5118 3.1251 19.73L3.75755 17.8327C3.85574 17.5381 4.02116 17.2705 4.2407 17.0509L12.3921 8.89948Z", strokeWidth, strokeLinejoin: "round", strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx197("path", { d: "M10.2708 6.7782L17.3419 13.8493", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/EyeOff.tsx
import { jsx as jsx198 } from "react/jsx-runtime";
function EyeOff({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx198(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx198("path", { d: "M3 7.99999C3.59119 9.27916 4.41131 10.4144 5.40273 11.3438M12.0001 14V18M12.0001 14C9.47495 14 7.16747 12.9981 5.40273 11.3438M12.0001 14C14.4885 14 16.7656 13.027 18.5202 11.4154M21 8.00023C20.3935 9.31236 19.5462 10.4731 18.5202 11.4154M5.40273 11.3438L3 14.9926M18.5202 11.4154L21 14.9926", strokeWidth, strokeLinecap: "round", stroke: color })
    }
  );
}

// src/icons/Eyeglasses.tsx
import { jsx as jsx199, jsxs as jsxs160 } from "react/jsx-runtime";
function Eyeglasses({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs160(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx199("circle", { cx: "7", cy: "17", r: "3", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx199("circle", { cx: "17", cy: "17", r: "3", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx199("path", { d: "M10 17H14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx199("path", { d: "M4 17H3.16561C2.55273 17 2.08405 16.4537 2.17724 15.8479L3.86955 4.84794C3.9446 4.36011 4.36435 4 4.85792 4H6", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx199("path", { d: "M20 17H20.8344C21.4473 17 21.916 16.4537 21.8228 15.8479L20.1305 4.84794C20.0554 4.36011 19.6357 4 19.1421 4H18", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/FaceId.tsx
import { jsx as jsx200, jsxs as jsxs161 } from "react/jsx-runtime";
function FaceId({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs161(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx200("path", { d: "M16.5 3H18C19.6569 3 21 4.34315 21 6V7.5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx200("path", { d: "M7.5 3H6C4.34315 3 3 4.34315 3 6V7.5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx200("path", { d: "M3 16.5V18C3 19.6569 4.34315 21 6 21H7.5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx200("path", { d: "M16.5 21H18C19.6569 21 21 19.6569 21 18V16.5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx200("path", { d: "M8 8V9", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx200("path", { d: "M16 8V9", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx200("path", { d: "M12 8V11.5C12 12.0523 11.5523 12.5 11 12.5H10.5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx200("path", { d: "M8 16C10.4687 17.3198 13.5744 17.3468 16 16", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Facebook.tsx
import { jsx as jsx201, jsxs as jsxs162 } from "react/jsx-runtime";
function Facebook({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs162(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx201("path", { d: "M12.9296 9.425C12.9296 8.78125 13.5255 8.55 14.1927 8.55C14.8599 8.55 15.5725 8.75 15.5725 8.75L16 6.3C16 6.3 15.0931 6 12.9296 6C11.6016 6 10.8308 6.4875 10.2672 7.20625C9.73603 7.8875 9.7166 8.98125 9.7166 9.6875V11.2938H8V13.6875H9.7166V22H12.9296V13.6875H15.4753L15.6632 11.2938H12.9296V9.425Z", fill: color }),
        /* @__PURE__ */ jsx201("circle", { cx: "12", cy: "12", r: "10", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Factory.tsx
import { jsx as jsx202, jsxs as jsxs163 } from "react/jsx-runtime";
function Factory({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs163(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx202("path", { d: "M3 9V21H21V3H17V9H13V6L8 9V6L3 9Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx202("path", { d: "M14 13L16 13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx202("path", { d: "M10 13L8 13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx202("path", { d: "M14 17L16 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx202("path", { d: "M10 17L8 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Favicon.tsx
import { jsx as jsx203, jsxs as jsxs164 } from "react/jsx-runtime";
function Favicon({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs164(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx203("path", { d: "M2 10.8C2 9.11984 2 8.27976 2.32698 7.63803C2.6146 7.07354 3.07354 6.6146 3.63803 6.32698C4.27976 6 5.11984 6 6.8 6L17.2 6C18.8802 6 19.7202 6 20.362 6.32698C20.9265 6.6146 21.3854 7.07354 21.673 7.63803C22 8.27976 22 9.11984 22 10.8V13.2C22 14.8802 22 15.7202 21.673 16.362C21.3854 16.9265 20.9265 17.3854 20.362 17.673C19.7202 18 18.8802 18 17.2 18L6.8 18C5.11984 18 4.27976 18 3.63803 17.673C3.07354 17.3854 2.6146 16.9265 2.32698 16.362C2 15.7202 2 14.8802 2 13.2V10.8Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx203("path", { d: "M5.5 10V14M11.5 10.2676C11.2058 10.0974 10.8643 10 10.5 10C9.39543 10 8.5 10.8954 8.5 12C8.5 13.1046 9.39543 14 10.5 14C10.8643 14 11.2058 13.9026 11.5 13.7324M18.5 12C18.5 13.1046 17.6046 14 16.5 14C15.3954 14 14.5 13.1046 14.5 12C14.5 10.8954 15.3954 10 16.5 10C17.6046 10 18.5 10.8954 18.5 12Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Figma.tsx
import { jsx as jsx204, jsxs as jsxs165 } from "react/jsx-runtime";
function Figma({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs165(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx204("path", { d: "M12 2H15.5C17.433 2 19 3.567 19 5.5C19 7.433 17.433 9 15.5 9H12V2Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx204("path", { d: "M12 2H8.5C6.567 2 5 3.567 5 5.5C5 7.433 6.567 9 8.5 9H12V2Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx204("path", { d: "M12 9H8.5C6.567 9 5 10.567 5 12.5C5 14.433 6.567 16 8.5 16H12V9Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx204("path", { d: "M12 16H8.5C6.567 16 5 17.567 5 19.5C5 21.433 6.567 23 8.5 23C10.433 23 12 21.433 12 19.5V16Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx204("circle", { cx: "15.5", cy: "12.5", r: "3.5", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/File.tsx
import { jsx as jsx205, jsxs as jsxs166 } from "react/jsx-runtime";
function File({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs166(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx205("path", { d: "M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H13.2506C13.5261 3 13.6638 3 13.7914 3.03434C13.9045 3.06476 14.0114 3.11481 14.1071 3.18221C14.2152 3.25828 14.3034 3.36409 14.4798 3.5757L18.6292 8.55499C18.7665 8.7198 18.8352 8.80221 18.8841 8.89468C18.9274 8.9767 18.9592 9.06436 18.9784 9.15513C19 9.25746 19 9.36473 19 9.57928V16.2C19 17.8802 19 18.7202 18.673 19.362C18.3854 19.9265 17.9265 20.3854 17.362 20.673C16.7202 21 15.8802 21 14.2 21H9.8C8.11984 21 7.27976 21 6.63803 20.673C6.07354 20.3854 5.6146 19.9265 5.32698 19.362C5 18.7202 5 17.8802 5 16.2V7.8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx205("path", { d: "M14 3V8C14 8.55228 14.4477 9 15 9H19", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/FileCheckmark.tsx
import { jsx as jsx206, jsxs as jsxs167 } from "react/jsx-runtime";
function FileCheckmark({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs167(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx206("path", { d: "M11 21H9.8C8.11984 21 7.27976 21 6.63803 20.673C6.07354 20.3854 5.6146 19.9265 5.32698 19.362C5 18.7202 5 17.8802 5 16.2V7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H13.2506C13.5261 3 13.6638 3 13.7914 3.03434C13.9045 3.06476 14.0114 3.11481 14.1071 3.18221C14.2152 3.25828 14.3034 3.36409 14.4798 3.5757L18.6292 8.55499C18.7665 8.7198 18.8352 8.80221 18.8841 8.89468C18.9274 8.9767 18.9592 9.06436 18.9784 9.15513C19 9.25746 19 9.36473 19 9.57928V13", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx206("path", { d: "M14 3V8C14 8.55228 14.4477 9 15 9H19", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx206("path", { d: "M15 19L17 21L21 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/FileMinus.tsx
import { jsx as jsx207, jsxs as jsxs168 } from "react/jsx-runtime";
function FileMinus({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs168(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx207("path", { d: "M10 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V7.8C4 6.11984 4 5.27976 4.32698 4.63803C4.6146 4.07354 5.07354 3.6146 5.63803 3.32698C6.27976 3 7.11984 3 8.8 3H12.2506C12.5261 3 12.6638 3 12.7914 3.03434C12.9045 3.06476 13.0114 3.11481 13.1071 3.18221C13.2152 3.25828 13.3034 3.36409 13.4798 3.5757L17.6292 8.55499C17.7665 8.7198 17.8352 8.80221 17.8841 8.89468C17.9274 8.9767 17.9592 9.06436 17.9784 9.15513C18 9.25746 18 9.36473 18 9.57928V15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx207("path", { d: "M13 3V8C13 8.55228 13.4477 9 14 9H18", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx207("path", { d: "M15 20H21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/FilePlus.tsx
import { jsx as jsx208, jsxs as jsxs169 } from "react/jsx-runtime";
function FilePlus({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs169(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx208("path", { d: "M11 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V7.8C4 6.11984 4 5.27976 4.32698 4.63803C4.6146 4.07354 5.07354 3.6146 5.63803 3.32698C6.27976 3 7.11984 3 8.8 3H12.2506C12.5261 3 12.6638 3 12.7914 3.03434C12.9045 3.06476 13.0114 3.11481 13.1071 3.18221C13.2152 3.25828 13.3034 3.36409 13.4798 3.5757L17.6292 8.55499C17.7665 8.7198 17.8352 8.80221 17.8841 8.89468C17.9274 8.9767 17.9592 9.06436 17.9784 9.15513C18 9.25746 18 9.36473 18 9.57928V11", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx208("path", { d: "M13 3V8C13 8.55228 13.4477 9 14 9H18", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx208("path", { d: "M18 21V15M15 18H21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/FileX.tsx
import { jsx as jsx209, jsxs as jsxs170 } from "react/jsx-runtime";
function FileX({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs170(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx209("path", { d: "M13 21H9.8C8.11984 21 7.27976 21 6.63803 20.673C6.07354 20.3854 5.6146 19.9265 5.32698 19.362C5 18.7202 5 17.8802 5 16.2V7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H13.2506C13.5261 3 13.6638 3 13.7914 3.03434C13.9045 3.06476 14.0114 3.11481 14.1071 3.18221C14.2152 3.25828 14.3034 3.36409 14.4798 3.5757L18.6292 8.55499C18.7665 8.7198 18.8352 8.80221 18.8841 8.89468C18.9274 8.9767 18.9592 9.06436 18.9784 9.15513C19 9.25746 19 9.36473 19 9.57928V13", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx209("path", { d: "M14 3V8C14 8.55228 14.4477 9 15 9H19", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx209("path", { d: "M21 21L17 17", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx209("path", { d: "M17 21L21 17", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/FileZip.tsx
import { jsx as jsx210, jsxs as jsxs171 } from "react/jsx-runtime";
function FileZip({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs171(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx210("path", { d: "M13 20H14.2C15.8802 20 16.7202 20 17.362 19.673C17.9265 19.3854 18.3854 18.9265 18.673 18.362C19 17.7202 19 16.8802 19 15.2V8.56125C19 8.35323 19 8.24922 18.9796 8.14974C18.9615 8.06148 18.9315 7.97607 18.8905 7.89583C18.8443 7.80539 18.7793 7.72417 18.6494 7.56174L15.4804 3.60049C15.304 3.37997 15.2158 3.26971 15.1063 3.19035C15.0093 3.12004 14.9005 3.06773 14.785 3.03591C14.6546 3 14.5134 3 14.231 3H9.8C8.11984 3 7.27976 3 6.63803 3.32698C6.07354 3.6146 5.6146 4.07354 5.32698 4.63803C5 5.27976 5 6.11984 5 7.8L5 16C5 16.93 5 17.395 5.10222 17.7765C5.37962 18.8117 6.18827 19.6204 7.22354 19.8978C7.60504 20 8.07003 20 9 20", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx210("path", { d: "M10 8L9 8", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx210("path", { d: "M10 12L9 12", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx210("path", { d: "M13 10L12 10", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx210("path", { d: "M13 6L12 6", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx210("path", { d: "M13 17L13 20C13 20.5523 12.5523 21 12 21H10C9.44772 21 9 20.5523 9 20L9 17C9 16.4477 9.44772 16 10 16H12C12.5523 16 13 16.4477 13 17Z", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Files.tsx
import { jsx as jsx211, jsxs as jsxs172 } from "react/jsx-runtime";
function Files({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs172(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx211("path", { d: "M8 6C7.07003 6 6.60504 6 6.22354 6.10222C5.18827 6.37962 4.37962 7.18827 4.10222 8.22354C4 8.60504 4 9.07003 4 10V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H12C12.93 22 13.395 22 13.7765 21.8978C14.8117 21.6204 15.6204 20.8117 15.8978 19.7765C16 19.395 16 18.93 16 18", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx211("path", { d: "M8 6.8C8 5.11984 8 4.27976 8.32698 3.63803C8.6146 3.07354 9.07354 2.6146 9.63803 2.32698C10.2798 2 11.1198 2 12.8 2H14.2506C14.5261 2 14.6638 2 14.7914 2.03434C14.9045 2.06476 15.0114 2.11481 15.1071 2.18221C15.2152 2.25828 15.3034 2.36409 15.4798 2.5757L19.6292 7.55499C19.7665 7.7198 19.8352 7.80221 19.8841 7.89468C19.9274 7.9767 19.9592 8.06436 19.9784 8.15513C20 8.25746 20 8.36473 20 8.57928V13.2C20 14.8802 20 15.7202 19.673 16.362C19.3854 16.9265 18.9265 17.3854 18.362 17.673C17.7202 18 16.8802 18 15.2 18H12.8C11.1198 18 10.2798 18 9.63803 17.673C9.07354 17.3854 8.6146 16.9265 8.32698 16.362C8 15.7202 8 14.8802 8 13.2V6.8Z", strokeWidth, strokeLinejoin: "round", strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx211("path", { d: "M15 2V7C15 7.55228 15.4477 8 16 8H20", strokeWidth, strokeLinejoin: "round", strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/FilesBox.tsx
import { jsx as jsx212, jsxs as jsxs173 } from "react/jsx-runtime";
function FilesBox({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs173(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx212("path", { d: "M3.14094 13.4832L5.3971 5.21065C5.75306 3.90546 6.93853 3 8.29139 3H15.7086C17.0615 3 18.2469 3.90546 18.6029 5.21065L20.8591 13.4832C20.9526 13.8262 21 14.1801 21 14.5357V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V14.5357C3 14.1801 3.0474 13.8262 3.14094 13.4832Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx212("path", { d: "M3.14453 14H6.58579C6.851 14 7.10536 14.1054 7.29289 14.2929L8.70711 15.7071C8.89464 15.8946 9.149 16 9.41421 16H14.5858C14.851 16 15.1054 15.8946 15.2929 15.7071L16.7071 14.2929C16.8946 14.1054 17.149 14 17.4142 14H20.8047", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx212("path", { d: "M9 7H15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx212("path", { d: "M10 11H14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/FilterFunnel.tsx
import { jsx as jsx213, jsxs as jsxs174 } from "react/jsx-runtime";
function FilterFunnel({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs174(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx213("path", { d: "M20.382 3H3.61803C2.87465 3 2.39116 3.78231 2.72361 4.44721L3.04657 5.09313C4.32236 7.64472 6.29932 9.77959 8.74554 11.2473L10 12V21L14 19V12L15.2545 11.2473C17.7007 9.77959 19.6776 7.64472 20.9534 5.09313L21.2764 4.44721C21.6088 3.78231 21.1253 3 20.382 3Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx213("path", { d: "M20.382 3H3.61803C2.87465 3 2.39116 3.78231 2.72361 4.44721L3.04657 5.09313C4.32236 7.64472 6.29932 9.77959 8.74554 11.2473L10 12V21L14 19V12L15.2545 11.2473C17.7007 9.77959 19.6776 7.64472 20.9534 5.09313L21.2764 4.44721C21.6088 3.78231 21.1253 3 20.382 3Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/FilterLines.tsx
import { jsx as jsx214, jsxs as jsxs175 } from "react/jsx-runtime";
function FilterLines({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs175(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx214("path", { d: "M4 6L20 6", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx214("path", { d: "M7 12L17 12", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx214("path", { d: "M10 18L14 18", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/FiltersColors.tsx
import { jsx as jsx215, jsxs as jsxs176 } from "react/jsx-runtime";
function FiltersColors({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs176(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx215("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M13.4218 13.6109C13.6659 14.2265 13.8 14.8976 13.8 15.6C13.8 17.1993 13.1047 18.6362 12 19.625C12.9554 20.4801 14.217 21 15.6 21C18.5823 21 21 18.5824 21 15.6C21 13.1098 19.3144 11.0132 17.0218 10.3892C16.4007 11.9559 15.0677 13.1628 13.4218 13.6109Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx215("path", { d: "M6.97816 10.3891C7.59926 11.9559 8.93231 13.1628 10.5782 13.6109C11.0312 13.7342 11.5079 13.8 12 13.8C12.4921 13.8 12.9688 13.7342 13.4218 13.6109C15.0677 13.1628 16.4007 11.9559 17.0218 10.3891C17.2659 9.77357 17.4 9.10245 17.4 8.4C17.4 5.41766 14.9823 3 12 3C9.01766 3 6.6 5.41766 6.6 8.4C6.6 9.10245 6.73412 9.77357 6.97816 10.3891Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx215("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M10.5782 13.6109C8.93232 13.1628 7.59926 11.9559 6.97816 10.3892C4.68564 11.0132 3 13.1098 3 15.6C3 18.5824 5.41766 21 8.4 21C9.78304 21 11.0446 20.4801 12 19.625C13.1048 18.6362 13.8 17.1993 13.8 15.6C13.8 14.8976 13.6659 14.2264 13.4218 13.6109C12.9688 13.7342 12.4921 13.8 12 13.8C11.5079 13.8 11.0312 13.7342 10.5782 13.6109Z", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/FingerPrint.tsx
import { jsx as jsx216, jsxs as jsxs177 } from "react/jsx-runtime";
function FingerPrint({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs177(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx216("path", { d: "M19.6549 17.9658C17.3743 18.6956 12.7561 18.6111 12.1853 12.6044", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx216("path", { d: "M16.0278 21C13.9353 20.6977 9.99432 18.9423 9.36656 13.7459C8.77367 8.65403 14.4766 7.79904 15.2234 12.5786C15.8706 16.7207 21.3614 15.7359 21.0916 11.8961C20.7382 6.86501 17.043 3.03506 12.265 3.00019C7.48706 2.96531 1.24332 7.85251 3.46152 16.6329", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx216("path", { d: "M9.12258 20.6303C7.11232 18.9204 4.85524 13.4514 7.22786 9.14646C9.90696 4.28544 17.5795 5.49567 18.0878 12.1503", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Flag.tsx
import { jsx as jsx217, jsxs as jsxs178 } from "react/jsx-runtime";
function Flag({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs178(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx217("path", { d: "M3 3L3 21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx217("path", { d: "M7 16V4H21L19 10L21 16H7Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/FlashDrive.tsx
import { jsx as jsx218, jsxs as jsxs179 } from "react/jsx-runtime";
function FlashDrive({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs179(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx218("path", { d: "M5 7.65116C5 7.29154 5.29154 7 5.65116 7H18.3488C18.7085 7 19 7.29154 19 7.65116V14C19 17.866 15.866 21 12 21C8.13401 21 5 17.866 5 14V7.65116Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx218("path", { d: "M15 3H9C8.44772 3 8 3.44772 8 4V7H16L16 4C16 3.44772 15.5523 3 15 3Z", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/FlaskErlenmeyer.tsx
import { jsx as jsx219, jsxs as jsxs180 } from "react/jsx-runtime";
function FlaskErlenmeyer({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs180(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx219("path", { d: "M7.4 21H16.6C18.6599 21 19.6898 21 20.233 20.5747C20.7057 20.2046 20.9871 19.6418 20.9996 19.0416C21.0139 18.3519 20.3959 17.5279 19.16 15.88L17.75 14H6.25L4.84 15.88C3.60406 17.5279 2.98609 18.3519 3.00043 19.0416C3.01291 19.6418 3.29433 20.2046 3.767 20.5747C4.31015 21 5.3401 21 7.4 21Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx219("path", { d: "M8 4.5V5C8 5.55228 8.44772 6 9 6C9.55228 6 10 6.44772 10 7V8.25C10 8.33237 10 8.37356 9.99838 8.41375C9.98319 8.79132 9.86134 9.15686 9.64696 9.46803C9.62414 9.50115 9.59943 9.53409 9.55002 9.59997L9.55 9.6L6.25 14H17.75L14.45 9.6C14.4006 9.5341 14.3759 9.50115 14.353 9.46803C14.1387 9.15686 14.0168 8.79132 14.0016 8.41375C14 8.37356 14 8.33237 14 8.25V7C14 6.44772 14.4477 6 15 6C15.5523 6 16 5.55228 16 5V4.5C16 3.67157 15.3284 3 14.5 3H9.5C8.67157 3 8 3.67157 8 4.5Z", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/FlaskRound.tsx
import { jsx as jsx220, jsxs as jsxs181 } from "react/jsx-runtime";
function FlaskRound({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs181(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx220("path", { d: "M12 21C15.866 21 19 18.0309 19 14.3684C19 11.3643 16.8915 8.82672 14 8.01146V6H14.5C15.3284 6 16 5.32843 16 4.5C16 3.67157 15.3284 3 14.5 3H9.5C8.67157 3 8 3.67157 8 4.5C8 5.32843 8.67157 6 9.5 6H10V8.01146C7.10851 8.82672 5 11.3643 5 14.3684C5 18.0309 8.13401 21 12 21Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx220("path", { d: "M5 13H19", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Flatten.tsx
import { jsx as jsx221, jsxs as jsxs182 } from "react/jsx-runtime";
function Flatten({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs182(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx221("path", { d: "M3 17H21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx221("path", { d: "M5 21H19", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx221("path", { d: "M12 3V13M16 9L12 13L8 9", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/FlipHorizontal.tsx
import { jsx as jsx222, jsxs as jsxs183 } from "react/jsx-runtime";
function FlipHorizontal({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs183(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx222("path", { d: "M12 3L12 4", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx222("path", { d: "M12 8V10", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx222("path", { d: "M12 14V16", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx222("path", { d: "M12 20V21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx222("path", { d: "M17.1314 10.8686L18.2686 9.73137C19.1254 8.87462 19.5538 8.44624 19.9215 8.4173C20.2407 8.39218 20.5525 8.52136 20.7604 8.76477C21 9.04529 21 9.65111 21 10.8627V13.1373C21 14.3489 21 14.9547 20.7604 15.2352C20.5525 15.4786 20.2407 15.6078 19.9215 15.5827C19.5538 15.5538 19.1254 15.1254 18.2686 14.2686L17.1314 13.1314C16.7354 12.7354 16.5373 12.5373 16.4632 12.309C16.3979 12.1082 16.3979 11.8918 16.4632 11.691C16.5373 11.4627 16.7354 11.2646 17.1314 10.8686Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx222("path", { d: "M6.86863 10.8686L5.73137 9.73137C4.87462 8.87462 4.44624 8.44624 4.07846 8.4173C3.75934 8.39218 3.44749 8.52136 3.23959 8.76477C3 9.04529 3 9.65111 3 10.8627V13.1373C3 14.3489 3 14.9547 3.23959 15.2352C3.44749 15.4786 3.75934 15.6078 4.07846 15.5827C4.44624 15.5538 4.87462 15.1254 5.73137 14.2686L6.86863 13.1314C7.26465 12.7354 7.46265 12.5373 7.53684 12.309C7.6021 12.1082 7.6021 11.8918 7.53684 11.691C7.46265 11.4627 7.26465 11.2646 6.86863 10.8686Z", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/FlipVertical.tsx
import { jsx as jsx223, jsxs as jsxs184 } from "react/jsx-runtime";
function FlipVertical({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs184(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx223("path", { d: "M21.005 11.995L20.005 11.995", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx223("path", { d: "M16.005 11.995L14.005 11.995", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx223("path", { d: "M10.005 11.995L8.005 11.995", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx223("path", { d: "M4.005 11.995L3.005 11.995", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx223("path", { d: "M13.1314 17.1314L14.2686 18.2686C15.1254 19.1254 15.5538 19.5538 15.5827 19.9215C15.6078 20.2407 15.4786 20.5525 15.2352 20.7604C14.9547 21 14.3489 21 13.1373 21L10.8627 21C9.65111 21 9.04529 21 8.76477 20.7604C8.52136 20.5525 8.39218 20.2407 8.4173 19.9215C8.44624 19.5538 8.87462 19.1254 9.73137 18.2686L10.8686 17.1314C11.2646 16.7354 11.4627 16.5373 11.691 16.4632C11.8918 16.3979 12.1082 16.3979 12.309 16.4632C12.5373 16.5373 12.7354 16.7354 13.1314 17.1314Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx223("path", { d: "M13.1314 6.86863L14.2686 5.73137C15.1254 4.87462 15.5538 4.44624 15.5827 4.07846C15.6078 3.75934 15.4786 3.44749 15.2352 3.23959C14.9547 3 14.3489 3 13.1373 3L10.8627 3C9.65111 3 9.04529 3 8.76477 3.23959C8.52136 3.44749 8.39218 3.75934 8.4173 4.07846C8.44624 4.44624 8.87462 4.87462 9.73137 5.73137L10.8686 6.86863C11.2646 7.26465 11.4627 7.46265 11.691 7.53684C11.8918 7.6021 12.1082 7.6021 12.309 7.53684C12.5373 7.46265 12.7354 7.26465 13.1314 6.86863Z", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/FloppyDisk.tsx
import { jsx as jsx224, jsxs as jsxs185 } from "react/jsx-runtime";
function FloppyDisk({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs185(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx224("path", { d: "M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H13.0118C13.7455 3 14.1124 3 14.4577 3.08289C14.7638 3.15638 15.0564 3.27759 15.3249 3.44208C15.6276 3.6276 15.887 3.88703 16.4059 4.40589L19.5941 7.59411C20.113 8.11297 20.3724 8.3724 20.5579 8.67515C20.7224 8.94356 20.8436 9.2362 20.9171 9.5423C21 9.88757 21 10.2545 21 10.9882V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx224("path", { d: "M7 21V15C7 13.8954 7.89543 13 9 13H15C16.1046 13 17 13.8954 17 15V21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx224("path", { d: "M11 17L13 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx224("path", { d: "M7 3V5C7 6.10457 7.89543 7 9 7H13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Folder.tsx
import { jsx as jsx225, jsxs as jsxs186 } from "react/jsx-runtime";
function Folder({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs186(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx225("path", { d: "M3 8H16.2C17.8802 8 18.7202 8 19.362 8.32698C19.9265 8.6146 20.3854 9.07354 20.673 9.63803C21 10.2798 21 11.1198 21 12.8V15.2C21 16.8802 21 17.7202 20.673 18.362C20.3854 18.9265 19.9265 19.3854 19.362 19.673C18.7202 20 17.8802 20 16.2 20H7.8C6.11984 20 5.27976 20 4.63803 19.673C4.07354 19.3854 3.6146 18.9265 3.32698 18.362C3 17.7202 3 16.8802 3 15.2V8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx225("path", { d: "M3 5.6C3 5.03995 3 4.75992 3.10899 4.54601C3.20487 4.35785 3.35785 4.20487 3.54601 4.10899C3.75992 4 4.03995 4 4.6 4H9.02229C9.74021 4 10.0992 4 10.4161 4.10931C10.6963 4.20597 10.9516 4.36373 11.1634 4.57116C11.4029 4.80573 11.5634 5.12679 11.8845 5.76892L13 8H4.6C4.03995 8 3.75992 8 3.54601 7.89101C3.35785 7.79513 3.20487 7.64215 3.10899 7.45399C3 7.24008 3 6.96005 3 6.4V5.6Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/FolderMinus.tsx
import { jsx as jsx226, jsxs as jsxs187 } from "react/jsx-runtime";
function FolderMinus({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs187(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx226("path", { d: "M21 15V12.8C21 11.1198 21 10.2798 20.673 9.63803C20.3854 9.07354 19.9265 8.6146 19.362 8.32698C18.7202 8 17.8802 8 16.2 8H3V15.2C3 16.8802 3 17.7202 3.32698 18.362C3.6146 18.9265 4.07354 19.3854 4.63803 19.673C5.27976 20 6.11984 20 7.8 20H10", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx226("path", { d: "M3 5.6C3 5.03995 3 4.75992 3.10899 4.54601C3.20487 4.35785 3.35785 4.20487 3.54601 4.10899C3.75992 4 4.03995 4 4.6 4H9.02229C9.74021 4 10.0992 4 10.4161 4.10931C10.6963 4.20597 10.9516 4.36373 11.1634 4.57116C11.4029 4.80573 11.5634 5.12679 11.8845 5.76892L13 8H4.6C4.03995 8 3.75992 8 3.54601 7.89101C3.35785 7.79513 3.20487 7.64215 3.10899 7.45399C3 7.24008 3 6.96005 3 6.4V5.6Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx226("path", { d: "M15 20H21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/FolderOpened.tsx
import { jsx as jsx227, jsxs as jsxs188 } from "react/jsx-runtime";
function FolderOpened({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs188(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx227("path", { d: "M5.96976 12.3974C6.192 11.5396 6.30312 11.1108 6.54503 10.7917C6.75848 10.5101 7.04272 10.2902 7.36881 10.1541C7.73836 10 8.1814 10 9.06748 10H17.4733C18.8813 10 19.5853 10 20.0646 10.2921C20.4847 10.5481 20.7957 10.95 20.9382 11.4209C21.1007 11.9582 20.9242 12.6397 20.5711 14.0026L19.6383 17.6026C19.4161 18.4603 19.305 18.8892 19.0631 19.2083C18.8496 19.4899 18.5654 19.7098 18.2393 19.8459C17.8697 20 17.4267 20 16.5406 20H8.13475C6.72681 20 6.02284 20 5.54346 19.7079C5.12337 19.4519 4.81236 19.05 4.66991 18.5791C4.50735 18.0418 4.68391 17.3603 5.03703 15.9974L5.96976 12.3974Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx227("path", { d: "M12.6 20H9.4C7.15979 20 6.03968 20 5.18404 19.564C4.43139 19.1805 3.81947 18.5686 3.43597 17.816C3 16.9603 3 15.8402 3 13.6V8V5.6C3 5.03995 3 4.75992 3.10899 4.54601C3.20487 4.35785 3.35785 4.20487 3.54601 4.10899C3.75992 4 4.03995 4 4.6 4H6.02229C6.74021 4 7.09916 4 7.41607 4.10931C7.69632 4.20597 7.95158 4.36373 8.16337 4.57116C8.40287 4.80573 8.42538 5.47338 8.88446 5.76892C9.25854 6.00974 9.5 6 10 6C10.5 6 12.6 6 12.6 6C14.8402 6 15.9603 6 16.816 6.43597C17.5686 6.81947 18.1805 7.43139 18.564 8.18404C18.8061 8.65905 18.9616 9.5 18.9616 10", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/FolderPlus.tsx
import { jsx as jsx228, jsxs as jsxs189 } from "react/jsx-runtime";
function FolderPlus({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs189(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx228("path", { d: "M21 11C21 9.34315 19.6569 8 18 8H3V15.2C3 16.8802 3 17.7202 3.32698 18.362C3.6146 18.9265 4.07354 19.3854 4.63803 19.673C5.27976 20 6.11984 20 7.8 20H11", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx228("path", { d: "M3 5.6C3 5.03995 3 4.75992 3.10899 4.54601C3.20487 4.35785 3.35785 4.20487 3.54601 4.10899C3.75992 4 4.03995 4 4.6 4H9.02229C9.74021 4 10.0992 4 10.4161 4.10931C10.6963 4.20597 10.9516 4.36373 11.1634 4.57116C11.4029 4.80573 11.5634 5.12679 11.8845 5.76892L13 8H4.6C4.03995 8 3.75992 8 3.54601 7.89101C3.35785 7.79513 3.20487 7.64215 3.10899 7.45399C3 7.24008 3 6.96005 3 6.4V5.6Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx228("path", { d: "M18 21V15M15 18H21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Folders.tsx
import { jsx as jsx229, jsxs as jsxs190 } from "react/jsx-runtime";
function Folders({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs190(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx229("path", { d: "M3 10.2C3 9.07989 3 8.51984 3.21799 8.09202C3.40973 7.71569 3.71569 7.40973 4.09202 7.21799C4.51984 7 5.07989 7 6.2 7H8.89182C9.53016 7 9.84933 7 10.1281 7.08284C10.5613 7.21154 10.9381 7.48311 11.1971 7.85332C11.3639 8.09162 11.4648 8.39441 11.6667 9C11.7676 9.30279 11.8181 9.45419 11.9014 9.57334C12.031 9.75844 12.2194 9.89423 12.4359 9.95858C12.5753 10 12.7349 10 13.0541 10H16.2C17.8802 10 18.7202 10 19.362 10.327C19.9265 10.6146 20.3854 11.0735 20.673 11.638C21 12.2798 21 13.1198 21 14.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V10.2Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx229("path", { d: "M5 7V6.2C5 5.07989 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.07989 3 8.2 3H11.2635C11.6589 3 11.8566 3 12.0334 3.03205C12.6242 3.1391 13.1355 3.50585 13.4264 4.03102C13.5135 4.18827 13.5769 4.37551 13.7037 4.75C13.7671 4.93724 13.7988 5.03086 13.8424 5.10949C13.9878 5.37208 14.2435 5.55545 14.5388 5.60897C14.6273 5.625 14.7261 5.625 14.9238 5.625H16.2C17.8802 5.625 18.7202 5.625 19.362 5.95198C19.9265 6.2396 20.3854 6.69854 20.673 7.26303C21 7.90476 21 8.74484 21 10.425V15", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/FormButton.tsx
import { jsx as jsx230, jsxs as jsxs191 } from "react/jsx-runtime";
function FormButton({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs191(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx230("path", { d: "M6.5 13.9912C5.63476 13.9707 5.0877 13.9021 4.63803 13.673C4.07354 13.3854 3.6146 12.9265 3.32698 12.362C3 11.7202 3 10.8802 3 9.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V9.2C21 9.70285 21 10.1304 20.9912 10.5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx230("path", { d: "M10.3038 8.47754L21 15.0038L14.8038 16.2718L10.6077 21.0038L10.3038 8.47754Z", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/FormCheckbox.tsx
import { jsx as jsx231, jsxs as jsxs192 } from "react/jsx-runtime";
function FormCheckbox({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs192(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx231("path", { d: "M8.5 12L11 14.5L16 9.5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx231("rect", { x: "3", y: "3", width: "18", height: "18", rx: "3", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/FormInput.tsx
import { jsx as jsx232, jsxs as jsxs193 } from "react/jsx-runtime";
function FormInput({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs193(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx232("path", { d: "M17 3H16.8541C15.7178 3 14.679 3.64201 14.1708 4.65836L14 5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx232("path", { d: "M17 21H16.8541C15.7178 21 14.679 20.358 14.1708 19.3416L14 19", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx232("path", { d: "M11 3H11.1459C12.2822 3 13.321 3.64201 13.8292 4.65836L14 5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx232("path", { d: "M11 21H11.1459C12.2822 21 13.321 20.358 13.8292 19.3416L14 19", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx232("path", { d: "M14 5L14 19", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx232("path", { d: "M17.5 17H17.8C18.9201 17 19.4802 17 19.908 16.782C20.2843 16.5903 20.5903 16.2843 20.782 15.908C21 15.4802 21 14.9201 21 13.8V10.2C21 9.07989 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H17.5M14 17H6.2C5.07989 17 4.51984 17 4.09202 16.782C3.71569 16.5903 3.40973 16.2843 3.21799 15.908C3 15.4802 3 14.9201 3 13.8V10.2C3 9.07989 3 8.51984 3.21799 8.09202C3.40973 7.71569 3.71569 7.40973 4.09202 7.21799C4.51984 7 5.07989 7 6.2 7H14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/FormRadioButton.tsx
import { jsx as jsx233, jsxs as jsxs194 } from "react/jsx-runtime";
function FormRadioButton({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs194(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx233("circle", { cx: "12", cy: "12", r: "9", strokeWidth, strokeLinejoin: "round", strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx233("path", { d: "M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color, fill: color })
      ]
    }
  );
}

// src/icons/FormToggleOff.tsx
import { jsx as jsx234, jsxs as jsxs195 } from "react/jsx-runtime";
function FormToggleOff({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs195(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx234("rect", { x: "3", y: "6", width: "18", height: "12", rx: "6", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx234("circle", { cx: "9", cy: "12", r: "2.5", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/FormToggleOn.tsx
import { jsx as jsx235, jsxs as jsxs196 } from "react/jsx-runtime";
function FormToggleOn({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs196(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx235("rect", { x: "3", y: "6", width: "18", height: "12", rx: "6", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx235("path", { d: "M17.5 12C17.5 13.3807 16.3807 14.5 15 14.5C13.6193 14.5 12.5 13.3807 12.5 12C12.5 10.6193 13.6193 9.5 15 9.5C16.3807 9.5 17.5 10.6193 17.5 12Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Framer.tsx
import { jsx as jsx236 } from "react/jsx-runtime";
function Framer({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx236(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx236("path", { d: "M19 3V9H5V15L12 21V15H19L5 3H19Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/FullScreen.tsx
import { jsx as jsx237, jsxs as jsxs197 } from "react/jsx-runtime";
function FullScreen({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs197(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx237("path", { d: "M16.5 3H18C19.6569 3 21 4.34315 21 6V7.5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx237("path", { d: "M7.5 3H6C4.34315 3 3 4.34315 3 6V7.5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx237("path", { d: "M3 16.5V18C3 19.6569 4.34315 21 6 21H7.5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx237("path", { d: "M16.5 21H18C19.6569 21 21 19.6569 21 18V16.5", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/FullScreenExit.tsx
import { jsx as jsx238, jsxs as jsxs198 } from "react/jsx-runtime";
function FullScreenExit({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs198(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx238("path", { d: "M21 7.5H19.5C17.8431 7.5 16.5 6.15685 16.5 4.5V3", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx238("path", { d: "M3 7.5H4.5C6.15685 7.5 7.5 6.15685 7.5 4.5V3", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx238("path", { d: "M7.5 21V19.5C7.5 17.8431 6.15685 16.5 4.5 16.5H3", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx238("path", { d: "M21 16.5H19.5C17.8431 16.5 16.5 17.8431 16.5 19.5V21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/FunctionFormula.tsx
import { jsx as jsx239 } from "react/jsx-runtime";
function FunctionFormula({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx239(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx239("path", { d: "M19 4H5L13 12L5 20H19", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/GameCubeController.tsx
import { jsx as jsx240, jsxs as jsxs199 } from "react/jsx-runtime";
function GameCubeController({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs199(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx240("path", { d: "M21.9344 16.8419L21.2069 10.6318C20.9626 8.54582 19.4448 6.80277 17.3758 6.4418C13.5067 5.76676 10.4404 5.77364 6.62398 6.44091C4.55502 6.80265 3.03742 8.54595 2.79304 10.632L2.06558 16.8419C1.75315 19.5088 5.11103 20.9379 6.81637 18.8638C8.00893 17.4133 9.78814 16.5728 11.6659 16.5728H12.3341C14.2119 16.5728 15.9911 17.4133 17.1836 18.8638C18.889 20.9379 22.2468 19.5088 21.9344 16.8419Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx240("path", { d: "M12 3L12 5.74136", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx240("path", { d: "M18 12H18.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx240("path", { d: "M14 12H14.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx240("path", { d: "M16 10H16.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx240("path", { d: "M16 14H16.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx240("path", { d: "M6 12H10", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx240("path", { d: "M8 10L8 14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Garage01.tsx
import { jsx as jsx241, jsxs as jsxs200 } from "react/jsx-runtime";
function Garage01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs200(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx241("path", { d: "M9 13H15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx241("path", { d: "M9 17H15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx241("path", { d: "M3 21H21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx241("path", { d: "M6 9H18", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx241("path", { d: "M19 21V9H5V21H19Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx241("path", { d: "M11.3502 3.28881L3 7V9H21V7L12.6498 3.28881C12.4105 3.18246 12.2909 3.12928 12.1665 3.10828C12.0563 3.08966 11.9437 3.08966 11.8335 3.10828C11.7091 3.12928 11.5895 3.18246 11.3502 3.28881Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Garage02.tsx
import { jsx as jsx242, jsxs as jsxs201 } from "react/jsx-runtime";
function Garage02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs201(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx242("path", { d: "M3 7.4L11.2973 3.34356C11.5552 3.21748 11.6841 3.15444 11.8191 3.12961C11.9387 3.10761 12.0613 3.10761 12.1809 3.12961C12.3159 3.15444 12.4448 3.21748 12.7027 3.34356L21 7.4", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx242("path", { d: "M19 14L20 12L21 12M16 18L16 20C16 20.5523 16.4477 21 17 21L18 21C18.5523 21 19 20.5523 19 20L19 18L19 14M19 14L5 14M19 14L16.8739 10.4565C16.3317 9.5529 15.3552 9 14.3014 9L9.69857 9C8.64478 9 7.66826 9.5529 7.12609 10.4565L5 14M19 18L16 18L8 18M8 18L8 20C8 20.5523 7.55228 21 7 21L6 21C5.44771 21 5 20.5523 5 20L5 18M8 18L5 18M5 14L4 12L3 12M5 14L5 18", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Gift.tsx
import { jsx as jsx243, jsxs as jsxs202 } from "react/jsx-runtime";
function Gift({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs202(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx243("path", { d: "M5 12H19V16.2C19 17.8802 19 18.7202 18.673 19.362C18.3854 19.9265 17.9265 20.3854 17.362 20.673C16.7202 21 15.8802 21 14.2 21H9.8C8.11984 21 7.27976 21 6.63803 20.673C6.07354 20.3854 5.6146 19.9265 5.32698 19.362C5 18.7202 5 17.8802 5 16.2V12Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx243("path", { d: "M12 12L12 21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx243("path", { d: "M18 5.5C18 4.11929 16.8807 3 15.5 3H15C13.3431 3 12 4.34315 12 6V8H15.5C16.8807 8 18 6.88071 18 5.5Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx243("path", { d: "M6 5.5C6 4.11929 7.11929 3 8.5 3H9C10.6569 3 12 4.34315 12 6V8H8.5C7.11929 8 6 6.88071 6 5.5Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx243("path", { d: "M3 10C3 8.89543 3.89543 8 5 8H19C20.1046 8 21 8.89543 21 10V11C21 11.5523 20.5523 12 20 12H4C3.44772 12 3 11.5523 3 11V10Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/GitBranch.tsx
import { jsx as jsx244, jsxs as jsxs203 } from "react/jsx-runtime";
function GitBranch({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs203(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx244("path", { d: "M19 7V9C19 10.6569 17.6569 12 16 12H8C6.34315 12 5 13.3431 5 15L5 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx244("path", { d: "M5 7L5 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx244("rect", { x: "3", y: "17", width: "4", height: "4", rx: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx244("rect", { x: "3", y: "3", width: "4", height: "4", rx: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx244("rect", { x: "17", y: "3", width: "4", height: "4", rx: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/GitCommit.tsx
import { jsx as jsx245, jsxs as jsxs204 } from "react/jsx-runtime";
function GitCommit({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs204(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx245("path", { d: "M8 12L3 12", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx245("path", { d: "M21 12L16 12", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx245("rect", { x: "8", y: "8", width: "8", height: "8", rx: "4", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/GitCompare.tsx
import { jsx as jsx246, jsxs as jsxs205 } from "react/jsx-runtime";
function GitCompare({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs205(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx246("rect", { x: "3", y: "3", width: "4", height: "4", rx: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx246("rect", { x: "17", y: "17", width: "4", height: "4", rx: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx246("path", { d: "M19 17V8C19 6.34315 17.6569 5 16 5H11M14 7L11 5L14 3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx246("path", { d: "M5 7L5 16C5 17.6569 6.34315 19 8 19L13 19M10 17L13 19L10 21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/GitFork.tsx
import { jsx as jsx247, jsxs as jsxs206 } from "react/jsx-runtime";
function GitFork({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs206(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx247("path", { d: "M19 7V9C19 10.6569 17.6569 12 16 12H8C6.34315 12 5 10.6569 5 9V7", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx247("path", { d: "M12 12L12 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx247("rect", { x: "10", y: "17", width: "4", height: "4", rx: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx247("rect", { x: "3", y: "3", width: "4", height: "4", rx: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx247("rect", { x: "17", y: "3", width: "4", height: "4", rx: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/GitMerge.tsx
import { jsx as jsx248, jsxs as jsxs207 } from "react/jsx-runtime";
function GitMerge({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs207(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx248("path", { d: "M17 13H11C7.68629 13 5 10.3137 5 7", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx248("path", { d: "M5 7L5 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx248("rect", { x: "17", y: "11", width: "4", height: "4", rx: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx248("rect", { x: "3", y: "3", width: "4", height: "4", rx: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx248("rect", { x: "3", y: "17", width: "4", height: "4", rx: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/GitPullRequest.tsx
import { jsx as jsx249, jsxs as jsxs208 } from "react/jsx-runtime";
function GitPullRequest({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs208(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx249("path", { d: "M5 7L5 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx249("rect", { x: "3", y: "17", width: "4", height: "4", rx: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx249("rect", { x: "3", y: "3", width: "4", height: "4", rx: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx249("rect", { x: "17", y: "17", width: "4", height: "4", rx: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx249("path", { d: "M19 17V8C19 6.34315 17.6569 5 16 5H11M14 7L11 5L14 3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/GitPullRequestClosed.tsx
import { jsx as jsx250, jsxs as jsxs209 } from "react/jsx-runtime";
function GitPullRequestClosed({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs209(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx250("path", { d: "M5 7L5 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx250("path", { d: "M19 12L19 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx250("rect", { x: "3", y: "17", width: "4", height: "4", rx: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx250("rect", { x: "3", y: "3", width: "4", height: "4", rx: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx250("rect", { x: "17", y: "17", width: "4", height: "4", rx: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx250("path", { d: "M19 5L21 3M19 5L21 7M19 5L17 7M19 5L17 3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/GitPullRequestDraft.tsx
import { jsx as jsx251, jsxs as jsxs210 } from "react/jsx-runtime";
function GitPullRequestDraft({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs210(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx251("path", { d: "M5 7L5 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx251("rect", { x: "3", y: "17", width: "4", height: "4", rx: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx251("rect", { x: "3", y: "3", width: "4", height: "4", rx: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx251("rect", { x: "17", y: "17", width: "4", height: "4", rx: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx251("path", { d: "M19.1444 4H18.8456M19.5 4C19.5 4.27614 19.2761 4.5 19 4.5C18.7239 4.5 18.5 4.27614 18.5 4C18.5 3.72386 18.7239 3.5 19 3.5C19.2761 3.5 19.5 3.72386 19.5 4Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx251("path", { d: "M19.1444 11H18.8456M19.5 11C19.5 11.2761 19.2761 11.5 19 11.5C18.7239 11.5 18.5 11.2761 18.5 11C18.5 10.7239 18.7239 10.5 19 10.5C19.2761 10.5 19.5 10.7239 19.5 11Z", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Globe01.tsx
import { jsx as jsx252, jsxs as jsxs211 } from "react/jsx-runtime";
function Globe01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs211(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx252("circle", { cx: "11.9998", cy: "12.0008", r: "9", transform: "rotate(-15 11.9998 12.0008)", strokeWidth, strokeLinejoin: "round", strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx252("path", { d: "M8.63353 4.20561C9.04426 3.26748 10.1908 2.9602 11.0157 3.5671C13.2654 5.22226 15.0678 7.80373 15.9118 10.9535C16.7558 14.1033 16.4855 17.2401 15.3649 19.7983C14.9539 20.7364 13.8073 21.0436 12.9825 20.4365C10.7335 18.781 8.93205 16.1992 8.0882 13.0499C7.24439 9.90047 7.51352 6.76378 8.63353 4.20561Z", strokeWidth, strokeLinejoin: "round", strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx252("path", { d: "M3.29682 14.2943L20.6835 9.63555", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Globe02.tsx
import { jsx as jsx253, jsxs as jsxs212 } from "react/jsx-runtime";
function Globe02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs212(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx253("circle", { cx: "12", cy: "12", r: "9", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx253("path", { d: "M16.388 12H21C21 14.6655 19.8412 17.0604 18 18.7083L17 15.9629L15.4065 14.3694C15.1462 14.1091 15 13.7561 15 13.388C15 12.6214 15.6214 12 16.388 12Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx253("path", { d: "M7.5 4.20404C4.80989 5.76018 3 8.66873 3 12C3 15.8197 5.37953 19.0836 8.7371 20.3903L11 15.9629H9V12.963L13 9.9444V6.92584H7.5V4.20404Z", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Google.tsx
import { jsx as jsx254 } from "react/jsx-runtime";
function Google({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx254(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx254("path", { d: "M20.9012 10.3635H12.1805V14.0452H17.1229C16.3334 16.5 14.3822 17.3182 12.1409 17.3182C11.2727 17.3193 10.417 17.114 9.6464 16.7197C8.87584 16.3255 8.21317 15.754 7.71462 15.0537C7.21607 14.3533 6.89634 13.5449 6.78257 12.6969C6.6688 11.8488 6.76434 10.9863 7.06108 10.1824C7.35782 9.37855 7.84701 8.65704 8.48715 8.07913C9.12728 7.50121 9.89947 7.08393 10.7382 6.8627C11.5769 6.64147 12.4575 6.62281 13.3051 6.80831C14.1527 6.9938 14.9424 7.37798 15.6071 7.92825L18.3227 5.37825C17.2289 4.38639 15.906 3.67247 14.4687 3.29845C13.0314 2.92443 11.5232 2.9016 10.0749 3.23196C8.6266 3.56231 7.28203 4.23586 6.15785 5.19416C5.03368 6.15245 4.16388 7.36654 3.62392 8.73105C3.08396 10.0956 2.89017 11.5693 3.05936 13.0243C3.22855 14.4793 3.75561 15.8717 4.5948 17.0805C5.43399 18.2894 6.55995 19.2783 7.87498 19.9613C9.19 20.6443 10.6544 21.0009 12.1409 21C17.1785 21 21.7333 17.727 20.9012 10.3635Z", strokeWidth, strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/GoogleChrome.tsx
import { jsx as jsx255, jsxs as jsxs213 } from "react/jsx-runtime";
function GoogleChrome({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs213(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx255("circle", { cx: "12", cy: "12", r: "10", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx255("path", { d: "M14.889 14.767C14.1609 15.5269 13.1359 16 12.0004 16C10.865 16 9.83999 15.5269 9.1119 14.767C8.42346 14.0485 8.00045 13.0737 8.00045 12C8.00045 9.79086 9.79131 8 12.0004 8M12.0004 8C14.2096 8 16.0004 9.79086 16.0004 12C16.0004 13.0737 15.5774 14.0485 14.889 14.767M12.0004 8L21.0004 8M14.889 14.767L8.51494 21.1776M9.1119 14.767L2.80078 8.24852", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/GraduationCap.tsx
import { jsx as jsx256, jsxs as jsxs214 } from "react/jsx-runtime";
function GraduationCap({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs214(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx256("path", { d: "M19 8.83271L22 7.5L12 3L2 7.5L5 8.83271L12 12L19 8.83271ZM5 8.83271V16.4351C5 17.3909 5.45133 18.3011 6.24835 18.8287C10.5985 21.7085 13.4773 21.7388 17.7798 18.8292C18.561 18.3009 19 17.4009 19 16.4578V8.83271", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx256("path", { d: "M22 7.5L22 13", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Grid.tsx
import { jsx as jsx257, jsxs as jsxs215 } from "react/jsx-runtime";
function Grid({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs215(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx257("rect", { x: "3", y: "3", width: "7", height: "7", rx: "2", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx257("rect", { x: "14", y: "3", width: "7", height: "7", rx: "2", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx257("rect", { x: "3", y: "14", width: "7", height: "7", rx: "2", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx257("rect", { x: "14", y: "14", width: "7", height: "7", rx: "2", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Group.tsx
import { jsx as jsx258, jsxs as jsxs216 } from "react/jsx-runtime";
function Group({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs216(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx258("path", { d: "M21 11V20C21 20.5523 20.5523 21 20 21H11", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx258("path", { d: "M17 7V16C17 16.5523 16.5523 17 16 17H7", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx258("rect", { x: "3", y: "3", width: "10", height: "10", rx: "1", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Hammer.tsx
import { jsx as jsx259, jsxs as jsxs217 } from "react/jsx-runtime";
function Hammer({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs217(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx259("path", { d: "M19.3929 9.25635L21 10.8635L17.7857 14.0778L16.1786 12.4706L16.8214 11.8278L15.2143 10.2206L14.5714 10.8635L12 8.29206C11.307 5.3032 6.53571 4.11349 6.53571 4.11349C10.1132 2.63993 14.4253 4.28881 15.2143 5.07777L17.7857 7.64918L17.1428 8.29205L18.75 9.89921L19.3929 9.25635Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx259("path", { d: "M12.3214 8.61356L14.5714 10.8636L6.38181 19.6449C5.99582 20.0588 5.34357 20.0702 4.94339 19.67L3.21944 17.946C2.80954 17.5362 2.83293 16.8647 3.27035 16.4843L12.3214 8.61356Z", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/HardDrive01.tsx
import { jsx as jsx260, jsxs as jsxs218 } from "react/jsx-runtime";
function HardDrive01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs218(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx260("path", { d: "M3 13H21M21 13L16.8845 4.76892C16.5634 4.12679 16.4029 3.80573 16.1634 3.57116C15.9516 3.36373 15.6963 3.20597 15.4161 3.10931C15.0992 3 14.7402 3 14.0223 3H9.97771C9.25979 3 8.90084 3 8.58393 3.10931C8.30368 3.20597 8.04842 3.36373 7.83663 3.57116C7.59713 3.80573 7.4366 4.12679 7.11554 4.76892L3 13V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V13Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx260("path", { d: "M16 17L17 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx260("path", { d: "M7 17L11 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/HardDrive02.tsx
import { jsx as jsx261, jsxs as jsxs219 } from "react/jsx-runtime";
function HardDrive02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs219(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx261("path", { d: "M3.5 15L6.328 5.304C6.56898 4.47778 6.68947 4.06467 6.93223 3.75819C7.1465 3.48767 7.42714 3.27719 7.74684 3.14723C8.10903 3 8.53935 3 9.4 3H14.6C15.4606 3 15.891 3 16.2532 3.14723C16.5729 3.27719 16.8535 3.48767 17.0678 3.75819C17.3105 4.06467 17.431 4.47778 17.672 5.304L20.5 15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx261("path", { d: "M7 17L11 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx261("path", { d: "M16 17L17 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx261("rect", { x: "3", y: "13", width: "18", height: "8", rx: "4", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Hashtag.tsx
import { jsx as jsx262, jsxs as jsxs220 } from "react/jsx-runtime";
function Hashtag({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs220(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx262("path", { d: "M16.0001 4V20", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx262("path", { d: "M8.00006 4L8.00006 20", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx262("path", { d: "M4.00006 8L20.0001 8", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx262("path", { d: "M4.00006 16H20.0001", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Headphone01.tsx
import { jsx as jsx263, jsxs as jsxs221 } from "react/jsx-runtime";
function Headphone01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs221(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx263("rect", { x: "17", y: "10", width: "4", height: "5", rx: "2", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx263("rect", { x: "3", y: "10", width: "4", height: "5", rx: "2", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx263("path", { d: "M17 12V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V16C7 18.7614 9.23858 21 12 21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Headphone02.tsx
import { jsx as jsx264, jsxs as jsxs222 } from "react/jsx-runtime";
function Headphone02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs222(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx264("rect", { x: "17", y: "15", width: "4", height: "6", rx: "2", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx264("rect", { x: "3", y: "15", width: "4", height: "6", rx: "2", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx264("path", { d: "M21 18V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12V18", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Heart.tsx
import { jsx as jsx265 } from "react/jsx-runtime";
function Heart({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx265(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx265("path", { d: "M12 20C8.92498 18.214 6.58928 16.609 4.79622 14.6499C-0.158268 9.23663 6.08971 1.9044 12 6.39214C17.9103 1.9044 24.1583 9.23663 19.2038 14.6499C17.4107 16.609 15.075 18.214 12 20Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/Hexagon.tsx
import { jsx as jsx266 } from "react/jsx-runtime";
function Hexagon({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx266(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx266("path", { d: "M9.66891 3.79505C10.5197 3.32237 10.9451 3.08604 11.3956 2.99338C11.7944 2.91138 12.2056 2.91138 12.6044 2.99338C13.0549 3.08604 13.4803 3.32237 14.3311 3.79505L18.5311 6.12838C19.4297 6.62759 19.8789 6.87719 20.2061 7.2322C20.4955 7.54627 20.7146 7.91852 20.8485 8.32405C21 8.78244 21 9.29641 21 10.3243V13.6757C21 14.7036 21 15.2176 20.8485 15.676C20.7146 16.0815 20.4955 16.4537 20.2061 16.7678C19.8789 17.1228 19.4297 17.3724 18.5311 17.8716L14.3311 20.205C13.4803 20.6776 13.0549 20.914 12.6044 21.0066C12.2056 21.0886 11.7944 21.0886 11.3956 21.0066C10.9451 20.914 10.5197 20.6776 9.66891 20.205L5.46891 17.8716C4.57034 17.3724 4.12106 17.1228 3.7939 16.7678C3.50447 16.4537 3.28544 16.0815 3.15145 15.676C3 15.2176 3 14.7036 3 13.6757V10.3243C3 9.29641 3 8.78244 3.15145 8.32405C3.28544 7.91852 3.50447 7.54627 3.7939 7.2322C4.12106 6.87719 4.57034 6.62759 5.46891 6.12838L9.66891 3.79505Z", strokeWidth, strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/HistoryRecent.tsx
import { jsx as jsx267, jsxs as jsxs223 } from "react/jsx-runtime";
function HistoryRecent({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs223(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx267("path", { d: "M11 8V12.382C11 12.7607 11.214 13.107 11.5528 13.2764L15 15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx267("path", { d: "M3.63749 8.53129C4.1588 7.28427 4.95271 6.17957 5.94473 5.29168C7.537 3.86656 9.63967 3 11.9447 3C16.9153 3 20.9447 7.02944 20.9447 12C20.9447 16.9706 16.9153 21 11.9447 21C7.31321 21 3.4988 17.5015 2.99999 13.003M3.23406 6.10275L3.63749 8.53129L6.08972 7.97966", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/HistorySearch.tsx
import { jsx as jsx268, jsxs as jsxs224 } from "react/jsx-runtime";
function HistorySearch({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs224(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx268("path", { d: "M21 21L16.6691 16.6691", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx268("path", { d: "M10 8V10.94C10 11.3257 10.2218 11.6771 10.5701 11.8429L13 13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx268("path", { d: "M3.56841 7.91671C4.03322 6.80824 4.74109 5.82628 5.62561 5.03705C7.04532 3.77028 8.92011 3 10.9754 3C15.4072 3 19 6.58172 19 11C19 15.4183 15.4072 19 10.9754 19C6.84577 19 3.44475 15.8902 3 11.8916M3.2087 5.758L3.56841 7.91671L5.75488 7.42636", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Home01.tsx
import { jsx as jsx269, jsxs as jsxs225 } from "react/jsx-runtime";
function Home01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs225(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx269("path", { d: "M4 8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V8", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx269("path", { d: "M2 9L9.53042 4.48175C10.4283 3.94301 10.8773 3.67364 11.3565 3.56839C11.7805 3.4753 12.2195 3.4753 12.6435 3.56839C13.1227 3.67364 13.5717 3.94301 14.4696 4.48175L22 9", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx269("path", { d: "M12 21L12 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Home02.tsx
import { jsx as jsx270, jsxs as jsxs226 } from "react/jsx-runtime";
function Home02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs226(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx270("path", { d: "M4 8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V8", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx270("path", { d: "M2 9L9.53042 4.48175C10.4283 3.94301 10.8773 3.67364 11.3565 3.56839C11.7805 3.4753 12.2195 3.4753 12.6435 3.56839C13.1227 3.67364 13.5717 3.94301 14.4696 4.48175L22 9", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx270("path", { d: "M9 17C9 16.0681 9 15.6022 9.15224 15.2346C9.35523 14.7446 9.74458 14.3552 10.2346 14.1522C10.6022 14 11.0681 14 12 14V14C12.9319 14 13.3978 14 13.7654 14.1522C14.2554 14.3552 14.6448 14.7446 14.8478 15.2346C15 15.6022 15 16.0681 15 17V21H9V17Z", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Home03.tsx
import { jsx as jsx271, jsxs as jsxs227 } from "react/jsx-runtime";
function Home03({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs227(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx271("path", { d: "M4.96145 8.1616L9.16145 5.0816L9.16146 5.0816C10.181 4.33395 10.6907 3.96013 11.2488 3.81579C11.7415 3.68836 12.2585 3.68836 12.7512 3.81579C13.3093 3.96013 13.819 4.33395 14.8385 5.0816L19.0385 8.1616C19.7574 8.68872 20.1168 8.95229 20.3762 9.28885C20.6059 9.58692 20.7775 9.92555 20.882 10.2871C21 10.6953 21 11.141 21 12.0323V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V12.0323C3 11.141 3 10.6953 3.11801 10.2871C3.22252 9.92555 3.39412 9.58692 3.62384 9.28885C3.88324 8.95229 4.24265 8.68872 4.96145 8.1616Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx271("path", { d: "M12 21L12 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Home04.tsx
import { jsx as jsx272, jsxs as jsxs228 } from "react/jsx-runtime";
function Home04({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs228(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx272("path", { d: "M4.96145 8.1616L9.16145 5.0816L9.16146 5.0816C10.181 4.33395 10.6907 3.96013 11.2488 3.81579C11.7415 3.68836 12.2585 3.68836 12.7512 3.81579C13.3093 3.96013 13.819 4.33395 14.8385 5.0816L19.0385 8.1616C19.7574 8.68872 20.1168 8.95229 20.3762 9.28885C20.6059 9.58692 20.7775 9.92555 20.882 10.2871C21 10.6953 21 11.141 21 12.0323V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V12.0323C3 11.141 3 10.6953 3.11801 10.2871C3.22252 9.92555 3.39412 9.58692 3.62384 9.28885C3.88324 8.95229 4.24265 8.68872 4.96145 8.1616Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx272("path", { d: "M9 15.8201C10.8167 17.0312 13.1833 17.0312 15 15.8201", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Home05.tsx
import { jsx as jsx273, jsxs as jsxs229 } from "react/jsx-runtime";
function Home05({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs229(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx273("path", { d: "M4.96145 8.1616L9.16145 5.0816L9.16146 5.0816C10.181 4.33395 10.6907 3.96013 11.2488 3.81579C11.7415 3.68836 12.2585 3.68836 12.7512 3.81579C13.3093 3.96013 13.819 4.33395 14.8385 5.0816L19.0385 8.1616C19.7574 8.68872 20.1168 8.95229 20.3762 9.28885C20.6059 9.58692 20.7775 9.92555 20.882 10.2871C21 10.6953 21 11.141 21 12.0323V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V12.0323C3 11.141 3 10.6953 3.11801 10.2871C3.22252 9.92555 3.39412 9.58692 3.62384 9.28885C3.88324 8.95229 4.24265 8.68872 4.96145 8.1616Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx273("path", { d: "M9 17C9 16.0681 9 15.6022 9.15224 15.2346C9.35523 14.7446 9.74458 14.3552 10.2346 14.1522C10.6022 14 11.0681 14 12 14V14C12.9319 14 13.3978 14 13.7654 14.1522C14.2554 14.3552 14.6448 14.7446 14.8478 15.2346C15 15.6022 15 16.0681 15 17V21H9V17Z", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Hospital.tsx
import { jsx as jsx274, jsxs as jsxs230 } from "react/jsx-runtime";
function Hospital({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs230(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx274("path", { d: "M8.5 4C8.32261 4.04566 8.15475 4.11504 8 4.20456C7.4022 4.55037 7 5.19671 7 5.93699V21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V5.93699C21 5.00507 20.3626 4.22202 19.5 4", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx274("path", { d: "M11 12H12", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx274("path", { d: "M11 16H12", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx274("path", { d: "M16 12H17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx274("path", { d: "M16 16H17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx274("path", { d: "M12 4H16", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx274("path", { d: "M14 6L14 2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx274("path", { d: "M3 12.2C3 11.0799 3 10.5198 3.21799 10.092C3.40973 9.71569 3.71569 9.40973 4.09202 9.21799C4.51984 9 5.07989 9 6.2 9H7V21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V12.2Z", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Hotel.tsx
import { jsx as jsx275, jsxs as jsxs231 } from "react/jsx-runtime";
function Hotel({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs231(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx275("path", { d: "M3 9.67263C3 8.48262 3.70338 7.40511 4.7928 6.92624L13.1952 3.23288C14.5169 2.6519 16 3.62001 16 5.06381V21H4C3.44772 21 3 20.5523 3 20V9.67263Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx275("path", { d: "M16 7L20.3581 11.0312C20.7673 11.4098 21 11.942 21 12.4994V20C21 20.5523 20.5523 21 20 21H16V7Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx275("path", { d: "M11.5 10H12", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx275("path", { d: "M11.5 14H12", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx275("path", { d: "M7 10H7.5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx275("path", { d: "M7 14H7.5", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Image.tsx
import { jsx as jsx276, jsxs as jsxs232 } from "react/jsx-runtime";
function Image({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs232(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx276("path", { d: "M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx276("path", { d: "M20.6928 16.6621L17.1002 12.7102C16.7159 12.2875 16.5238 12.0761 16.2954 11.9914C16.0946 11.917 15.8752 11.9089 15.6694 11.9685C15.4355 12.0363 15.2284 12.233 14.8143 12.6265L6 21H17.4566C17.9614 21 18.2137 21 18.4253 20.9697C19.7444 20.7808 20.7808 19.7444 20.9697 18.4253C21 18.2137 21 17.9614 21 17.4566C21 17.3877 21 17.3532 20.9978 17.3198C20.9842 17.1174 20.9094 16.9238 20.7832 16.7648C20.7624 16.7387 20.7392 16.7132 20.6929 16.6622L20.6928 16.6621Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx276("path", { d: "M9 9C9 9.55228 8.55228 10 8 10C7.44772 10 7 9.55228 7 9C7 8.44772 7.44772 8 8 8C8.55228 8 9 8.44772 9 9Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/ImageMinus.tsx
import { jsx as jsx277, jsxs as jsxs233 } from "react/jsx-runtime";
function ImageMinus({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs233(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx277("path", { d: "M11 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H17.5C17.9644 21 18.1966 21 18.3916 20.9743C19.7378 20.7971 20.7971 19.7378 20.9743 18.3916C21 18.1966 21 17.9644 21 17.5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx277("path", { d: "M20.6569 16.6569L17.0734 13.0734C16.6958 12.6958 16.507 12.507 16.2877 12.4319C16.0947 12.3658 15.8862 12.3603 15.69 12.4162C15.4671 12.4796 15.2686 12.6583 14.8717 13.0155L6 21H17.4853C17.9634 21 18.2024 21 18.403 20.9728C19.74 20.7915 20.7915 19.74 20.9728 18.403C21 18.2024 21 17.9634 21 17.4853C21 17.4154 21 17.3805 20.9977 17.3469C20.983 17.1286 20.8971 16.9211 20.7531 16.7563C20.7309 16.7309 20.7063 16.7063 20.6569 16.6569L20.6569 16.6569Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx277("path", { d: "M9 9C9 9.55228 8.55228 10 8 10C7.44772 10 7 9.55228 7 9C7 8.44772 7.44772 8 8 8C8.55228 8 9 8.44772 9 9Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx277("path", { d: "M15 7H21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ImagePlus.tsx
import { jsx as jsx278, jsxs as jsxs234 } from "react/jsx-runtime";
function ImagePlus({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs234(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx278("path", { d: "M11 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H17.5C17.9644 21 18.1966 21 18.3916 20.9743C19.7378 20.7971 20.7971 19.7378 20.9743 18.3916C21 18.1966 21 17.9644 21 17.5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx278("path", { d: "M20.6569 16.6569L17.0734 13.0734C16.6958 12.6958 16.507 12.507 16.2877 12.4319C16.0947 12.3658 15.8862 12.3603 15.69 12.4162C15.4671 12.4796 15.2686 12.6583 14.8717 13.0155L6 21H17.4853C17.9634 21 18.2024 21 18.403 20.9728C19.74 20.7915 20.7915 19.74 20.9728 18.403C21 18.2024 21 17.9634 21 17.4853C21 17.4154 21 17.3805 20.9977 17.3469C20.983 17.1286 20.8971 16.9211 20.7531 16.7563C20.7309 16.7309 20.7063 16.7063 20.6569 16.6569L20.6569 16.6569Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx278("path", { d: "M9 9C9 9.55228 8.55228 10 8 10C7.44772 10 7 9.55228 7 9C7 8.44772 7.44772 8 8 8C8.55228 8 9 8.44772 9 9Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx278("path", { d: "M18 9V3M15 6H21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ImageSearch.tsx
import { jsx as jsx279, jsxs as jsxs235 } from "react/jsx-runtime";
function ImageSearch({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs235(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx279("path", { d: "M11 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H17.5C17.9644 21 18.1966 21 18.3916 20.9743C19.7378 20.7971 20.7971 19.7378 20.9743 18.3916C21 18.1966 21 17.9644 21 17.5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx279("path", { d: "M20.6569 16.6569L17.0734 13.0734C16.6958 12.6958 16.507 12.507 16.2877 12.4319C16.0947 12.3658 15.8862 12.3603 15.69 12.4162C15.4671 12.4796 15.2686 12.6583 14.8717 13.0155L6 21H17.4853C17.9634 21 18.2024 21 18.403 20.9728C19.74 20.7915 20.7915 19.74 20.9728 18.403C21 18.2024 21 17.9634 21 17.4853C21 17.4154 21 17.3805 20.9977 17.3469C20.983 17.1286 20.8971 16.9211 20.7531 16.7563C20.7309 16.7309 20.7063 16.7063 20.6569 16.6569L20.6569 16.6569Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx279("path", { d: "M9 9C9 9.55228 8.55228 10 8 10C7.44772 10 7 9.55228 7 9C7 8.44772 7.44772 8 8 8C8.55228 8 9 8.44772 9 9Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx279("path", { d: "M19.6967 7.69239C20.1931 7.19491 20.5 6.5083 20.5 5.75C20.5 4.23122 19.2688 3 17.75 3C16.2312 3 15 4.23122 15 5.75C15 7.26878 16.2312 8.5 17.75 8.5C18.5105 8.5 19.1989 8.19131 19.6967 7.69239ZM19.6967 7.69239L21 9", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Images.tsx
import { jsx as jsx280, jsxs as jsxs236 } from "react/jsx-runtime";
function Images({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs236(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx280("path", { d: "M16.711 8L15.7262 4.3246C15.2974 2.72421 13.6524 1.77446 12.052 2.20328L4.32457 4.27384C2.72417 4.70266 1.77442 6.34767 2.20325 7.94807L4.2738 15.6755C4.70262 17.2759 6.34763 18.2256 7.94803 17.7968L8 17.7829", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx280("path", { d: "M21.8888 19.812C21.5347 21.0743 20.3755 22 19 22H11C10.1023 22 9.29675 21.6057 8.74697 20.9809C8.282 20.4525 8 19.7592 8 19V11C8 9.34315 9.34315 8 11 8H19C20.6569 8 22 9.34315 22 11V19C22 19.2814 21.9613 19.5537 21.8888 19.812ZM8.74697 20.9809L18.1468 15.4977C18.6197 15.2218 19.2265 15.3775 19.5082 15.847L21.8888 19.812", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx280("path", { d: "M14 13C14 13.5523 13.5523 14 13 14C12.4477 14 12 13.5523 12 13C12 12.4477 12.4477 12 13 12C13.5523 12 14 12.4477 14 13Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Inbox.tsx
import { jsx as jsx281, jsxs as jsxs237 } from "react/jsx-runtime";
function Inbox({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs237(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx281("path", { d: "M3.14094 13.4832L5.3971 5.21065C5.75306 3.90546 6.93853 3 8.29139 3H15.7086C17.0615 3 18.2469 3.90546 18.6029 5.21065L20.8591 13.4832C20.9526 13.8262 21 14.1801 21 14.5357V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V14.5357C3 14.1801 3.0474 13.8262 3.14094 13.4832Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx281("path", { d: "M3.14453 14H6.58579C6.851 14 7.10536 14.1054 7.29289 14.2929L8.70711 15.7071C8.89464 15.8946 9.149 16 9.41421 16H14.5858C14.851 16 15.1054 15.8946 15.2929 15.7071L16.7071 14.2929C16.8946 14.1054 17.149 14 17.4142 14H20.8047", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/InfoCircle.tsx
import { jsx as jsx282, jsxs as jsxs238 } from "react/jsx-runtime";
function InfoCircle({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs238(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx282("circle", { cx: "12", cy: "12", r: "9", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx282("path", { d: "M12 16L12 12L10.5 12", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx282("path", { d: "M12 8H12.0001", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/InfoSquare.tsx
import { jsx as jsx283, jsxs as jsxs239 } from "react/jsx-runtime";
function InfoSquare({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs239(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx283("rect", { x: "3", y: "3", width: "18", height: "18", rx: "3", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx283("path", { d: "M12 16L12 12L10.5 12", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx283("path", { d: "M12 8H12.0001", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Instagram.tsx
import { jsx as jsx284, jsxs as jsxs240 } from "react/jsx-runtime";
function Instagram({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs240(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx284("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5.5", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx284("circle", { cx: "12", cy: "12", r: "5", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx284("path", { d: "M18.0001 6H18", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Integration.tsx
import { jsx as jsx285, jsxs as jsxs241 } from "react/jsx-runtime";
function Integration({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs241(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx285("path", { d: "M3 10.2C3 9.07989 3 8.51984 3.21799 8.09202C3.40973 7.71569 3.71569 7.40973 4.09202 7.21799C4.51984 7 5.0799 7 6.2 7H17.8C18.9201 7 19.4802 7 19.908 7.21799C20.2843 7.40973 20.5903 7.71569 20.782 8.09202C21 8.51984 21 9.07989 21 10.2V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V10.2Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx285("path", { d: "M14 7L14 4.6C14 4.03995 14 3.75992 14.109 3.54601C14.2049 3.35785 14.3578 3.20487 14.546 3.10899C14.7599 3 15.0399 3 15.6 3L16.4 3C16.9601 3 17.2401 3 17.454 3.10899C17.6422 3.20487 17.7951 3.35785 17.891 3.54601C18 3.75992 18 4.03995 18 4.6L18 7", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx285("path", { d: "M6 7L6 4.6C6 4.03995 6 3.75992 6.10899 3.54601C6.20487 3.35785 6.35785 3.20487 6.54601 3.10899C6.75992 3 7.03995 3 7.6 3L8.4 3C8.96005 3 9.24008 3 9.45399 3.10899C9.64215 3.20487 9.79513 3.35785 9.89101 3.54601C10 3.75992 10 4.03995 10 4.6L10 7", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Invoice.tsx
import { jsx as jsx286, jsxs as jsxs242 } from "react/jsx-runtime";
function Invoice({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs242(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx286("path", { d: "M4 7.8C4 6.11984 4 5.27976 4.32698 4.63803C4.6146 4.07354 5.07354 3.6146 5.63803 3.32698C6.27976 3 7.11984 3 8.8 3H11.7923C12.6043 3 13.0103 3 13.3875 3.09979C13.7218 3.18822 14.0382 3.33376 14.3228 3.52997C14.6441 3.7514 14.9083 4.05967 15.4367 4.6762L18.8444 8.65184C19.2722 9.1509 19.4861 9.40043 19.6384 9.68194C19.7736 9.93164 19.8726 10.1993 19.9325 10.4768C20 10.7897 20 11.1183 20 11.7756V21L18 19L16 21L14 19L12 21L10 19L8 21L6 19L4 21V7.8Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx286("path", { d: "M14 4V9C14 9.55228 14.4477 10 15 10H19", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx286("path", { d: "M8 11L11 11", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx286("path", { d: "M8 15L15 15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx286("path", { d: "M8 7L9 7", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Ios.tsx
import { jsx as jsx287, jsxs as jsxs243 } from "react/jsx-runtime";
function Ios({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs243(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx287("path", { d: "M19.4586 9.9629C18.776 10.3587 18.2106 10.9121 17.8152 11.5713C17.4199 12.2304 17.2076 12.9738 17.1982 13.7318C17.2009 14.585 17.4678 15.4186 17.9658 16.1295C18.4638 16.8404 19.1711 17.3974 20 17.7313C19.6732 18.73 19.1895 19.6764 18.5652 20.5387C17.672 21.7566 16.738 22.9743 15.3169 22.9743C13.8958 22.9743 13.5302 22.1923 11.8925 22.1923C10.2954 22.1923 9.72687 23 8.4275 23C7.12812 23 6.22138 21.8719 5.17912 20.4874C3.80239 18.548 3.04575 16.2735 3 13.9369C3 10.0911 5.63938 8.05294 8.238 8.05294C9.61862 8.05294 10.7691 8.91173 11.6354 8.91173C12.461 8.91173 13.7469 8.00155 15.3169 8.00155C16.1241 7.98183 16.9241 8.1504 17.6463 8.49242C18.3686 8.83445 18.9909 9.33943 19.4586 9.9629Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx287("path", { d: "M14.5717 4.18787C15.2638 3.40817 15.6556 2.42466 15.6816 1.40162C15.6828 1.26675 15.6692 1.13214 15.641 1C14.4521 1.11122 13.3528 1.65386 12.5685 2.51662C11.8697 3.26525 11.4632 4.2225 11.418 5.22569C11.4185 5.34769 11.4321 5.46932 11.4586 5.58865C11.5523 5.60562 11.6475 5.61431 11.7428 5.61463C12.2907 5.57288 12.824 5.42487 13.3103 5.1796C13.7967 4.93433 14.2258 4.59692 14.5717 4.18787Z", fill: color })
      ]
    }
  );
}

// src/icons/KeyHole.tsx
import { jsx as jsx288, jsxs as jsxs244 } from "react/jsx-runtime";
function KeyHole({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs244(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx288("rect", { x: "5", y: "3", width: "14", height: "18", rx: "7", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx288("path", { d: "M12 7C10.3431 7 9 8.34315 9 10C9 11.1104 9.6033 12.0799 10.5 12.5987L9.5 16H14.5L13.5 12.5987C14.3967 12.0799 15 11.1104 15 10C15 8.34315 13.6569 7 12 7Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/KeyHorizontal01.tsx
import { jsx as jsx289, jsxs as jsxs245 } from "react/jsx-runtime";
function KeyHorizontal01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs245(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx289("path", { d: "M8 7C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17C10.0503 17 11.8124 15.7659 12.584 14L13 14L14.5 15L16 14L17.5 15L21 12L19 10L12.584 10C11.8124 8.2341 10.0503 7 8 7Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx289("path", { d: "M8 12L8 11.9999", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/KeyHorizontal02.tsx
import { jsx as jsx290, jsxs as jsxs246 } from "react/jsx-runtime";
function KeyHorizontal02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs246(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx290("path", { d: "M3 9L3 15C3 16.6569 4.34315 18 6 18L8 18C9.65685 18 11 16.6569 11 15L11 14L15 14L15 16C15 16.5523 15.4477 17 16 17L18 17C18.5523 17 19 16.5523 19 16L19 14L21 14L21 12C21 10.8954 20.1046 10 19 10L11 10L11 9C11 7.34315 9.65685 6 8 6L6 6C4.34315 6 3 7.34315 3 9Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx290("path", { d: "M7 14L7 10", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/KeyVertical01.tsx
import { jsx as jsx291, jsxs as jsxs247 } from "react/jsx-runtime";
function KeyVertical01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs247(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx291("path", { d: "M17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.0503 8.2341 11.8124 10 12.584V13L9 14.5L10 16L9 17.5L12 21L14 19L14 12.584C15.7659 11.8124 17 10.0503 17 8Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx291("path", { d: "M13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/KeyVertical02.tsx
import { jsx as jsx292, jsxs as jsxs248 } from "react/jsx-runtime";
function KeyVertical02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs248(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx292("path", { d: "M15 3L9 3C7.34315 3 6 4.34315 6 6V8C6 9.65685 7.34315 11 9 11H10L10 15H8C7.44771 15 7 15.4477 7 16L7 18C7 18.5523 7.44771 19 8 19H10V21H12C13.1046 21 14 20.1046 14 19L14 11H15C16.6569 11 18 9.65685 18 8V6C18 4.34315 16.6569 3 15 3Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx292("path", { d: "M10 7H14", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Keyboard.tsx
import { jsx as jsx293, jsxs as jsxs249 } from "react/jsx-runtime";
function Keyboard({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs249(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx293("rect", { x: "2", y: "5", width: "20", height: "14", rx: "3", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx293("path", { d: "M6 10H6.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx293("path", { d: "M6 14H6.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx293("path", { d: "M10 10H10.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx293("path", { d: "M14 10H14.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx293("path", { d: "M18 10H18.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx293("path", { d: "M18 14H18.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx293("path", { d: "M10 14H14", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/KeyboardOff.tsx
import { jsx as jsx294, jsxs as jsxs250 } from "react/jsx-runtime";
function KeyboardOff({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs250(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx294("path", { d: "M9.94215 5H17.2C18.8802 5 19.7202 5 20.362 5.32698C20.9265 5.6146 21.3854 6.07354 21.673 6.63803C22 7.27976 22 8.11984 22 9.8V14.2C22 15.5103 22 16.3096 21.8449 16.9024M5 5.02878C4.41168 5.06471 3.99429 5.14546 3.63803 5.32698C3.07354 5.6146 2.6146 6.07354 2.32698 6.63803C2 7.27976 2 8.11984 2 9.8V14.2C2 15.8802 2 16.7202 2.32698 17.362C2.6146 17.9265 3.07354 18.3854 3.63803 18.673C4.27976 19 5.11984 19 6.8 19H17.2C17.9551 19 18.5405 19 19.0145 18.9703", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx294("path", { d: "M6 10H6.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx294("path", { d: "M6 14H6.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx294("path", { d: "M18 10H18.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx294("path", { d: "M18 14H18.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx294("path", { d: "M14 10H14.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx294("path", { d: "M10 14H14", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx294("path", { d: "M3 3L21 21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Laptop.tsx
import { jsx as jsx295, jsxs as jsxs251 } from "react/jsx-runtime";
function Laptop({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs251(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx295("path", { d: "M5 7.2C5 6.07989 5 5.51984 5.21799 5.09202C5.40973 4.71569 5.71569 4.40973 6.09202 4.21799C6.51984 4 7.07989 4 8.2 4H15.8C16.9201 4 17.4802 4 17.908 4.21799C18.2843 4.40973 18.5903 4.71569 18.782 5.09202C19 5.51984 19 6.0799 19 7.2V16H5V7.2Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx295("path", { d: "M3 16.8C3 16.52 3 16.38 3.0545 16.273C3.10243 16.1789 3.17892 16.1024 3.273 16.0545C3.37996 16 3.51997 16 3.8 16H20.2C20.48 16 20.62 16 20.727 16.0545C20.8211 16.1024 20.8976 16.1789 20.9455 16.273C21 16.38 21 16.52 21 16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.07989 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/LayersOne.tsx
import { jsx as jsx296 } from "react/jsx-runtime";
function LayersOne({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx296(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx296("path", { d: "M3 12L12 6L21 12L12 18.0001L3 12Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/LayersThree.tsx
import { jsx as jsx297, jsxs as jsxs252 } from "react/jsx-runtime";
function LayersThree({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs252(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx297("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M3 16L6.6 14L12 17L17.4 14L21 16L12 21L3 16Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx297("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M6.6 10L10.2 12L12 13L13.8 12L17.4 10L21 12L17.4 14L12 17L6.6 14L3 12L6.6 10Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx297("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12 3L3 8L6.6 10L10.2 12L12 13L13.8 12L17.4 10L21 8L12 3Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/LayersTwo.tsx
import { jsx as jsx298, jsxs as jsxs253 } from "react/jsx-runtime";
function LayersTwo({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs253(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx298("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M6.6 12L10.2 14L12 15L13.8 14L17.4 12L21 14L17.4 16L12 19L6.6 16L3 14L6.6 12Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx298("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12 5L3 10L6.6 12L10.2 14L12 15L13.8 14L17.4 12L21 10L12 5Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Layout.tsx
import { jsx as jsx299, jsxs as jsxs254 } from "react/jsx-runtime";
function Layout({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs254(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx299("rect", { x: "3", y: "3", width: "18", height: "18", rx: "3", strokeWidth, strokeLinejoin: "round", strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx299("path", { d: "M12 3L12 21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx299("path", { d: "M3 12L12 12", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Leaf.tsx
import { jsx as jsx300, jsxs as jsxs255 } from "react/jsx-runtime";
function Leaf({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs255(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx300("path", { d: "M18.1804 2.99902C18.6035 2.99903 19.0218 3.01953 19.4344 3.05978C20.2327 3.13767 20.8596 3.76628 20.9377 4.56463C20.9787 4.98347 20.9997 5.40821 20.9998 5.83789C20.9998 12.9384 15.2834 18.6952 8.23218 18.6953C7.80837 18.6953 7.38936 18.6744 6.97612 18.6336C6.17784 18.5549 5.55124 17.926 5.47395 17.1276C5.43344 16.7091 5.41284 16.2847 5.41284 15.8555C5.41298 8.75503 11.1292 2.99902 18.1804 2.99902Z", strokeWidth, strokeLinejoin: "round", strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx300("path", { d: "M3 21L13 11", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Library.tsx
import { jsx as jsx301, jsxs as jsxs256 } from "react/jsx-runtime";
function Library({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs256(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx301("path", { d: "M3 19L3 6", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx301("path", { d: "M7 19L7 6", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx301("path", { d: "M11 19L11 6", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx301("path", { d: "M14.6361 7.64036C14.4932 7.1069 14.8098 6.55856 15.3432 6.41562L16.7921 6.02739C17.3256 5.88445 17.8739 6.20103 18.0169 6.7345L20.8639 17.3597C21.0068 17.8931 20.6902 18.4415 20.1568 18.5844L18.7079 18.9727C18.1744 19.1156 17.6261 18.799 17.4831 18.2655L14.6361 7.64036Z", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Lighthouse.tsx
import { jsx as jsx302, jsxs as jsxs257 } from "react/jsx-runtime";
function Lighthouse({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs257(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx302("path", { d: "M17 21L14.1529 5.81571C14.0643 5.34274 13.6513 5 13.1701 5H10.8299C10.3487 5 9.93574 5.34274 9.84705 5.81571L7 21H17Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx302("path", { d: "M12 5L12 3", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx302("path", { d: "M5 21H19", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx302("path", { d: "M15.796 15.6901C13.085 14.7798 11.2661 14.7602 8.25224 15.6901", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx302("path", { d: "M8.97615 10.479C11.2975 9.84472 12.9312 9.84584 15.0283 10.4498", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx302("path", { d: "M12 21L12 19", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Like.tsx
import { jsx as jsx303, jsxs as jsxs258 } from "react/jsx-runtime";
function Like({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs258(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx303("path", { d: "M18.1214 9.5H15.9234C14.9839 9.5 14.3262 8.57175 14.6377 7.68542L14.7606 7.33572C15.4191 5.46173 14.2883 3.43419 12.3479 3.00969C12.1479 2.96596 11.9461 3.07512 11.8733 3.26638L9.99052 8.21162C9.69519 8.98733 8.95143 9.5 8.1214 9.5H7V17.313C7 18.6791 7.9209 19.8839 9.25456 20.1798C12.2226 20.8383 14.5341 21.0648 17.5106 21.0005C18.9537 20.9693 20.129 19.8557 20.3092 18.4236L21.0188 12.7848C21.2382 11.0411 19.8789 9.5 18.1214 9.5Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx303("rect", { x: "3", y: "8", width: "4", height: "13", rx: "1", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Link.tsx
import { jsx as jsx304, jsxs as jsxs259 } from "react/jsx-runtime";
function Link({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs259(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx304("path", { d: "M16.9497 12.7072L19.071 10.5859C20.6331 9.02377 20.6331 6.49111 19.071 4.92901C17.5089 3.36692 14.9763 3.36692 13.4142 4.92901L11.2929 7.05033", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx304("path", { d: "M7.05023 11.293L4.92891 13.4143C3.36681 14.9764 3.36681 17.509 4.92891 19.0711C6.49101 20.6332 9.02367 20.6332 10.5858 19.0711L12.7071 16.9498", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx304("path", { d: "M14.1213 9.87866L9.8787 14.1213", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/LinkBroken.tsx
import { jsx as jsx305, jsxs as jsxs260 } from "react/jsx-runtime";
function LinkBroken({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs260(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx305("path", { d: "M16.9497 12.7072L19.071 10.5859C20.6331 9.02377 20.6331 6.49111 19.071 4.92901C17.5089 3.36692 14.9763 3.36692 13.4142 4.92901L11.2929 7.05033", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx305("path", { d: "M7.05023 11.293L4.92891 13.4143C3.36682 14.9764 3.36681 17.509 4.92891 19.0711C6.49101 20.6332 9.02367 20.6332 10.5858 19.0711L12.7071 16.9498", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx305("path", { d: "M14.1213 9.87866L9.8787 14.1213", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx305("path", { d: "M5.63598 5.63606L4.92887 4.92896", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx305("path", { d: "M3.5148 9.17172H2.10059", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx305("path", { d: "M9.17163 3.51489V2.10067", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx305("path", { d: "M18.3637 18.3639L19.0708 19.071", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx305("path", { d: "M14.8282 20.4852L14.8282 21.8994", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx305("path", { d: "M20.4852 14.8284L21.8994 14.8284", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ListNumbered.tsx
import { jsx as jsx306, jsxs as jsxs261 } from "react/jsx-runtime";
function ListNumbered({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs261(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx306("path", { d: "M9 6L20 6", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx306("path", { d: "M9 12L20 12", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx306("path", { d: "M9 18L20 18", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx306("path", { d: "M4 10V6H3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx306("path", { d: "M3 14H4.58579C5.47669 14 5.92286 15.0771 5.29289 15.7071L3 18H5.5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ListSearch.tsx
import { jsx as jsx307, jsxs as jsxs262 } from "react/jsx-runtime";
function ListSearch({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs262(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx307("path", { d: "M11 21H9.8C8.11984 21 7.27976 21 6.63803 20.673C6.07354 20.3854 5.6146 19.9265 5.32698 19.362C5 18.7202 5 17.8802 5 16.2V7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V10", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx307("path", { d: "M9 7H15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx307("path", { d: "M9 11H14", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx307("path", { d: "M9 15H11", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx307("path", { d: "M19.6967 19.6924C20.1931 19.1949 20.5 18.5083 20.5 17.75C20.5 16.2312 19.2688 15 17.75 15C16.2312 15 15 16.2312 15 17.75C15 19.2688 16.2312 20.5 17.75 20.5C18.5105 20.5 19.1989 20.1913 19.6967 19.6924ZM19.6967 19.6924L21 21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ListUnordered.tsx
import { jsx as jsx308, jsxs as jsxs263 } from "react/jsx-runtime";
function ListUnordered({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs263(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx308("path", { d: "M8 6L20 6", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx308("path", { d: "M4 6H4.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx308("path", { d: "M8 12L20 12", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx308("path", { d: "M4 12H4.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx308("path", { d: "M8 18L20 18", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx308("path", { d: "M4 18H4.0001", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Live.tsx
import { jsx as jsx309, jsxs as jsxs264 } from "react/jsx-runtime";
function Live({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs264(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx309("path", { d: "M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx309("path", { d: "M8.99951 8C7.78534 8.91223 7 10.3644 7 12C7 13.6356 7.78534 15.0878 8.99951 16M15.0005 8C16.2147 8.91223 17 10.3644 17 12C17 13.6356 16.2147 15.0878 15.0005 16", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx309("path", { d: "M6.59912 4.79999C4.41362 6.442 3 9.05591 3 12C3 14.9441 4.41362 17.558 6.59912 19.2M17.4009 4.79999C19.5864 6.442 21 9.05591 21 12C21 14.9441 19.5864 17.558 17.4009 19.2", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Loading.tsx
import { jsx as jsx310 } from "react/jsx-runtime";
function Loading({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx310(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx310("path", { d: "M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/LocationPin.tsx
import { jsx as jsx311, jsxs as jsxs265 } from "react/jsx-runtime";
function LocationPin({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs265(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx311("path", { d: "M19 10.2C19 13.1866 15.0512 17.7794 13.0853 19.8808C12.7344 20.2558 12.559 20.4433 12.3217 20.5239C12.125 20.5907 11.875 20.5907 11.6783 20.5239C11.441 20.4433 11.2656 20.2558 10.9147 19.8808C8.94884 17.7794 5 13.1866 5 10.2C5 6.22355 8.13401 3 12 3C15.866 3 19 6.22355 19 10.2Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx311("circle", { cx: "12", cy: "10", r: "2", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/LocationPinOff.tsx
import { jsx as jsx312, jsxs as jsxs266 } from "react/jsx-runtime";
function LocationPinOff({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs266(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx312("path", { d: "M6.09377 6.3336C5.40127 7.45048 5 8.77695 5 10.1998C5 13.1864 8.94884 17.7792 10.9147 19.8806C11.2656 20.2556 11.441 20.4431 11.6783 20.5237C11.875 20.5905 12.125 20.5905 12.3216 20.5237C12.559 20.4431 12.7343 20.2557 13.085 19.8809C13.895 19.015 15.0419 17.726 16.1104 16.3006M8.75457 3.81877C9.72466 3.2957 10.8287 2.99982 12 2.99982C15.866 2.99982 19 6.22337 19 10.1998C19 11.08 18.657 12.0997 18.1229 13.1541", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx312("path", { d: "M12 11.9998C10.8954 11.9998 10 11.1044 10 9.99983M12.5541 8.07758C13.2312 8.27239 13.7609 8.81525 13.937 9.50002", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx312("path", { d: "M3 3L21 21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/LocationPins.tsx
import { jsx as jsx313, jsxs as jsxs267 } from "react/jsx-runtime";
function LocationPins({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs267(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx313("circle", { cx: "10", cy: "10.0001", r: "2", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx313("path", { d: "M17 10.2C17 13.1866 13.0512 17.7794 11.0853 19.8808C10.7344 20.2558 10.559 20.4433 10.3217 20.5239C10.125 20.5907 9.875 20.5907 9.67834 20.5239C9.44099 20.4433 9.26557 20.2558 8.91474 19.8808C6.94884 17.7794 3 13.1866 3 10.2C3 6.22355 6.13401 3 10 3C13.866 3 17 6.22355 17 10.2Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx313("path", { d: "M15 20.8401C15 20.8401 21 13.8772 21 9.81962C21 7.3544 20.0084 5.17276 18.487 3.84009", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Lock01.tsx
import { jsx as jsx314, jsxs as jsxs268 } from "react/jsx-runtime";
function Lock01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs268(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx314("path", { d: "M16.2 8.99512H7.8C6.11984 8.99512 5.27976 8.99512 4.63803 9.3221C4.07354 9.60972 3.6146 10.0687 3.32698 10.6331C3 11.2749 3 12.115 3 13.7951V16.1951C3 17.8753 3 18.7154 3.32698 19.3571C3.6146 19.9216 4.07354 20.3805 4.63803 20.6681C5.27976 20.9951 6.11984 20.9951 7.8 20.9951H16.2C17.8802 20.9951 18.7202 20.9951 19.362 20.6681C19.9265 20.3805 20.3854 19.9216 20.673 19.3571C21 18.7154 21 17.8753 21 16.1951V13.7951C21 12.115 21 11.2749 20.673 10.6331C20.3854 10.0687 19.9265 9.60972 19.362 9.3221C18.7202 8.99512 17.8802 8.99512 16.2 8.99512Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx314("path", { d: "M17 8.99512V7.99512C17 5.23369 14.7614 2.99512 12 2.99512C9.23858 2.99512 7 5.23369 7 7.99512V8.99512", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx314("path", { d: "M12 13.9951L12 15.9951", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/LockOpened.tsx
import { jsx as jsx315, jsxs as jsxs269 } from "react/jsx-runtime";
function LockOpened({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs269(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx315("path", { d: "M16.2 9.93506H7.8C6.11984 9.93506 5.27976 9.93506 4.63803 10.262C4.07354 10.5497 3.6146 11.0086 3.32698 11.5731C3 12.2148 3 13.0549 3 14.7351V17.1351C3 18.8152 3 19.6553 3.32698 20.297C3.6146 20.8615 4.07354 21.3205 4.63803 21.6081C5.27976 21.9351 6.11984 21.9351 7.8 21.9351H16.2C17.8802 21.9351 18.7202 21.9351 19.362 21.6081C19.9265 21.3205 20.3854 20.8615 20.673 20.297C21 19.6553 21 18.8152 21 17.1351V14.7351C21 13.0549 21 12.2148 20.673 11.5731C20.3854 11.0086 19.9265 10.5497 19.362 10.262C18.7202 9.93506 17.8802 9.93506 16.2 9.93506Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx315("path", { d: "M16.4224 9.88018L16.8448 8.69197C17.7856 6.0452 16.4027 3.13687 13.7559 2.19603C11.1734 1.27805 8.32794 2.57145 7.3215 5.12078L7 5.93516", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx315("path", { d: "M12 14.9351V16.9351", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/LogIn.tsx
import { jsx as jsx316, jsxs as jsxs270 } from "react/jsx-runtime";
function LogIn({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs270(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx316("path", { d: "M9 6C9 4.34315 10.3431 3 12 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H12C10.3431 21 9 19.6569 9 18", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx316("path", { d: "M3 12L16 12M13 9L16 12L13 15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/LogOut.tsx
import { jsx as jsx317, jsxs as jsxs271 } from "react/jsx-runtime";
function LogOut({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs271(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx317("path", { d: "M10 12L21 12M18 9L21 12L18 15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx317("path", { d: "M15 6C15 4.34315 13.6569 3 12 3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34314 21 6 21H12C13.6569 21 15 19.6569 15 18", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Loop02.tsx
import { jsx as jsx318, jsxs as jsxs272 } from "react/jsx-runtime";
function Loop02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs272(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx318("path", { d: "M16 6H18C19.6569 6 21 7.34315 21 9V15C21 16.6569 19.6569 18 18 18H12M15 20.5L12 18L15 15.5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx318("path", { d: "M8 18H6C4.34315 18 3 16.6569 3 15V9C3 7.34315 4.34315 6 6 6H12M9 8.5L12 6L9 3.5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Luggage.tsx
import { jsx as jsx319, jsxs as jsxs273 } from "react/jsx-runtime";
function Luggage({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs273(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx319("rect", { x: "6", y: "6", width: "12", height: "14", rx: "3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx319("path", { d: "M8 20V21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx319("path", { d: "M16 20V21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx319("path", { d: "M10 11V15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx319("path", { d: "M14 11V15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx319("path", { d: "M9 4V6H15V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/MagicWand01.tsx
import { jsx as jsx320, jsxs as jsxs274 } from "react/jsx-runtime";
function MagicWand01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs274(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx320("path", { d: "M2.97792 20.9766L14.9987 8.95581", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx320("path", { d: "M19.2413 4.74264L17.8271 6.15685M20.9987 8.98528L18.9987 8.98528M19.2413 13.2279L17.8271 11.8137M10.756 4.74264L12.1703 6.15685M14.9987 2.98528L14.9987 4.98528", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/MagicWand02.tsx
import { jsx as jsx321, jsxs as jsxs275 } from "react/jsx-runtime";
function MagicWand02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs275(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx321("path", { d: "M10.335 10.7779L3.26396 17.849C2.87343 18.2395 2.87343 18.8726 3.26396 19.2632L4.67817 20.6774C5.06869 21.0679 5.70186 21.0679 6.09238 20.6774L13.1635 13.6063M10.335 10.7779L12.4563 8.65657C12.8469 8.26605 13.48 8.26605 13.8706 8.65657L15.2848 10.0708C15.6753 10.4613 15.6753 11.0945 15.2848 11.485L13.1635 13.6063M10.335 10.7779L13.1635 13.6063", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx321("path", { d: "M18.9772 4.96411L17.4846 6.45678M21.4504 10.9348L19.3394 10.9348M18.9772 16.9055L17.4846 15.4128M7.03583 4.96411L8.52851 6.45678M13.0065 2.49096L13.0065 4.60192", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Map.tsx
import { jsx as jsx322 } from "react/jsx-runtime";
function Map({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx322(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx322("path", { d: "M15.0355 6.97635C15.014 6.99067 14.986 6.99067 14.9645 6.97635L9 3L4.42496 6.05003C3.90398 6.39735 3.64349 6.57101 3.45491 6.80045C3.28796 7.00357 3.1627 7.23762 3.0863 7.4892C3 7.77337 3 8.08645 3 8.71259V18.0104C3 18.9815 3 19.4671 3.20249 19.7348C3.37889 19.968 3.64852 20.1123 3.9404 20.1297C4.27544 20.1497 4.67946 19.8804 5.48752 19.3417L9 17M9 3V17M15.0355 6.97635L18.5125 4.65835C19.3205 4.11964 19.7246 3.85029 20.0596 3.87029C20.3515 3.88772 20.6211 4.03202 20.7975 4.26521C21 4.53288 21 5.01846 21 5.98963V15.2874C21 15.9136 21 16.2266 20.9137 16.5108C20.8373 16.7624 20.712 16.9964 20.5451 17.1996C20.3565 17.429 20.096 17.6027 19.575 17.95L15 21L9 17M15 21L15.0355 6.97635", strokeWidth, strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/Megaphone01.tsx
import { jsx as jsx323, jsxs as jsxs276 } from "react/jsx-runtime";
function Megaphone01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs276(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx323("ellipse", { cx: "17", cy: "11", rx: "4", ry: "8", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx323("path", { d: "M13.3956 13.5194C13.7015 13.8367 14.221 14 14.652 14C15.9488 14 17 12.6569 17 11C17 9.34315 15.9488 8 14.652 8C14.1245 8 13.5116 8.26236 13.1777 8.6965", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx323("path", { d: "M16.5 3.05127L4.69687 7.72413C4.24755 7.90202 3.87122 8.23403 3.6718 8.67421C2.86729 10.45 2.85729 11.6539 3.67017 13.3595C3.87043 13.7797 4.23678 14.0939 4.66951 14.2654L16.4936 18.9514", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx323("path", { d: "M5.9261 14.7783L7.77208 20.3162C7.90819 20.7246 8.29033 21 8.72076 21H10.6126C11.2951 21 11.7771 20.3313 11.5613 19.6838L10.5297 16.5891", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Message.tsx
import { jsx as jsx324, jsxs as jsxs277 } from "react/jsx-runtime";
function Message({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs277(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx324("path", { d: "M3 12C3 14.3051 3 21 3 21C3 21 9.3345 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx324("path", { d: "M9 10L15 10", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx324("path", { d: "M9 14L12 14", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/MessageMinus.tsx
import { jsx as jsx325, jsxs as jsxs278 } from "react/jsx-runtime";
function MessageMinus({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs278(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx325("path", { d: "M3 12C3 14.3051 3 21 3 21C3 21 9.3345 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx325("path", { d: "M9 12H15", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/MessagePlus.tsx
import { jsx as jsx326, jsxs as jsxs279 } from "react/jsx-runtime";
function MessagePlus({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs279(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx326("path", { d: "M3 12C3 14.3051 3 21 3 21C3 21 9.3345 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx326("path", { d: "M12 15V9", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx326("path", { d: "M9 12H15", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/MessageTemporary.tsx
import { jsx as jsx327 } from "react/jsx-runtime";
function MessageTemporary({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx327(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx327("path", { d: "M2.99753 13.9977C2.99753 12.9584 2.94594 11.2336 3.13667 10.43M4.62603 6.82432C5.05638 6.18385 5.827 5.33316 6.83782 4.63261M10.4275 3.14152C11.4972 2.97631 12.4627 2.90675 13.5586 3.14157M17.1762 4.63258C18.0469 5.18306 19.0477 6.344 19.368 6.8344M20.859 10.4425C21.0197 11.0274 21.0531 12.4061 20.859 13.5573M19.366 17.173C18.9044 17.8457 18.0603 18.7557 17.1635 19.3756M9.98872 20.9979C11.0306 20.9979 12.6133 21.0769 13.5629 20.8659M3 19V21H5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/MessagesCircle.tsx
import { jsx as jsx328, jsxs as jsxs280 } from "react/jsx-runtime";
function MessagesCircle({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs280(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx328("path", { d: "M13.5 21C11.0463 21 8.86776 19.8217 7.49945 18H10.5C14.6421 18 18 14.6422 18 10.5C18 9.20039 17.6694 7.97796 17.0878 6.91223C19.4187 8.18436 21 10.6575 21 13.5V21H13.5Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx328("path", { d: "M3 10.5C3 12.4209 3 18 3 18C3 18 8.27875 18 10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx328("path", { d: "M8 13L10 13", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx328("path", { d: "M8 9H12", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Meta.tsx
import { jsx as jsx329 } from "react/jsx-runtime";
function Meta({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx329(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx329("path", { d: "M16.9164 6.00706C22.4263 6.00706 23.8038 19 19.327 19C15.539 19 12.5672 6.0071 7.27403 6.00706C2.45283 6.00703 -0.301884 19 4.51926 19C10.0291 19 11.7509 5.64941 16.9164 6.00706Z", strokeWidth, strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/Metafield.tsx
import { jsx as jsx330, jsxs as jsxs281 } from "react/jsx-runtime";
function Metafield({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs281(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx330("path", { d: "M21 16.2V10C21 9.06812 21 8.60218 20.8478 8.23463C20.6448 7.74458 20.2554 7.35523 19.7654 7.15224C19.3978 7 18.9319 7 18 7V4.6C18 4.03995 18 3.75992 17.891 3.54601C17.7951 3.35785 17.6422 3.20487 17.454 3.10899C17.2401 3 16.9601 3 16.4 3H15.6C15.0399 3 14.7599 3 14.546 3.10899C14.3578 3.20487 14.2049 3.35785 14.109 3.54601C14 3.75992 14 4.03995 14 4.6V7H12H10V4.6C10 4.03995 10 3.75992 9.89101 3.54601C9.79513 3.35785 9.64215 3.20487 9.45399 3.10899C9.24008 3 8.96005 3 8.4 3H7.6C7.03995 3 6.75992 3 6.54601 3.10899C6.35785 3.20487 6.20487 3.35785 6.10899 3.54601C6 3.75992 6 4.03995 6 4.6V7C5.06812 7 4.60218 7 4.23463 7.15224C3.74458 7.35523 3.35523 7.74458 3.15224 8.23463C3 8.60218 3 9.06812 3 10V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx330("path", { d: "M6 7L6 4.6C6 4.03995 6 3.75992 6.10899 3.54601C6.20487 3.35785 6.35785 3.20487 6.54601 3.10899C6.75992 3 7.03995 3 7.6 3L8.4 3C8.96005 3 9.24008 3 9.45399 3.10899C9.64215 3.20487 9.79513 3.35785 9.89101 3.54601C10 3.75992 10 4.03995 10 4.6L10 7", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx330("path", { d: "M9 11L15 11", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Microphone.tsx
import { jsx as jsx331, jsxs as jsxs282 } from "react/jsx-runtime";
function Microphone({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs282(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx331("rect", { x: "8", y: "3", width: "8", height: "10", rx: "2", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx331("path", { d: "M4 10C4 11.8612 4 12.7918 4.2447 13.545C4.73929 15.0672 5.93273 16.2607 7.45496 16.7552C8.2081 16.9999 9.13871 16.9999 10.9999 16.9999H13.0001C14.8613 16.9999 15.7919 16.9999 16.545 16.7552C18.0673 16.2607 19.2607 15.0672 19.7553 13.545C20 12.7918 20 11.8612 20 10", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx331("path", { d: "M12 17L12 21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx331("path", { d: "M8 21H16", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/MicrophoneOff.tsx
import { jsx as jsx332, jsxs as jsxs283 } from "react/jsx-runtime";
function MicrophoneOff({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs283(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx332("path", { d: "M16 11.0503V6.2C16 5.07989 16 4.51984 15.782 4.09202C15.5903 3.71569 15.2843 3.40973 14.908 3.21799C14.4802 3 13.9201 3 12.8 3H8.04687C8.02099 3 8 3.02099 8 3.04688M8 8V9.8C8 10.9201 8 11.4802 8.21799 11.908C8.40973 12.2843 8.71569 12.5903 9.09202 12.782C9.51984 13 10.0799 13 11.2 13H13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx332("path", { d: "M4 10C4 11.8612 4 12.7918 4.2447 13.545C4.73929 15.0672 5.93273 16.2607 7.45496 16.7552C8.2081 16.9999 9.13871 16.9999 10.9999 16.9999H13.0001C14.8613 16.9999 15.7919 16.9999 16.545 16.7552M20 10C20 11.8612 20 12.7918 19.7553 13.545C19.6547 13.8547 19.5251 14.1508 19.3697 14.4302", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx332("path", { d: "M12 17L12 21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx332("path", { d: "M8 21H16", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx332("path", { d: "M3 3L21 21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Microscope.tsx
import { jsx as jsx333, jsxs as jsxs284 } from "react/jsx-runtime";
function Microscope({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs284(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx333("path", { d: "M11 7C15.4183 7 19 10.5817 19 15V17M19 21H3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx333("path", { d: "M13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18V20C21 20.5523 20.5523 21 20 21H14C13.4477 21 13 20.5523 13 20V18Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx333("path", { d: "M9 9V15C9 15.5523 8.55228 16 8 16H5C4.44772 16 4 15.5523 4 15V4C4 3.44772 4.44772 3 5 3H8C8.55228 3 9 3.44772 9 4V5", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx333("path", { d: "M9 12H4", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx333("circle", { cx: "9", cy: "7", r: "2", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Minus.tsx
import { jsx as jsx334 } from "react/jsx-runtime";
function Minus({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx334(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx334("path", { d: "M6 12L18 12", strokeWidth, strokeLinecap: "round", stroke: color })
    }
  );
}

// src/icons/MinusSmall.tsx
import { jsx as jsx335 } from "react/jsx-runtime";
function MinusSmall({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx335(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx335("path", { d: "M7 12H17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/Mobile.tsx
import { jsx as jsx336, jsxs as jsxs285 } from "react/jsx-runtime";
function Mobile({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs285(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx336("path", { d: "M6 7.8C6 6.11984 6 5.27976 6.32698 4.63803C6.6146 4.07354 7.07354 3.6146 7.63803 3.32698C8.27976 3 9.11984 3 10.8 3H13.2C14.8802 3 15.7202 3 16.362 3.32698C16.9265 3.6146 17.3854 4.07354 17.673 4.63803C18 5.27976 18 6.11984 18 7.8V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V7.8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx336("path", { d: "M12 18H12.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx336("path", { d: "M6 15H18", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Money.tsx
import { jsx as jsx337, jsxs as jsxs286 } from "react/jsx-runtime";
function Money({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs286(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx337("path", { d: "M21 9V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V12.2C3 13.8802 3 14.7202 3.32698 15.362C3.6146 15.9265 4.07354 16.3854 4.63803 16.673C5.27976 17 6.11984 17 7.8 17H8", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx337("path", { d: "M7 4C7 5.65685 5.65685 7 4 7C3.64936 7 3.31278 6.93985 3 6.82929C3 6.05847 3 5.67305 3.07043 5.35378C3.32206 4.21301 4.21301 3.32206 5.35378 3.07043C5.67305 3 6.05847 3 6.82929 3C6.93985 3.31278 7 3.64936 7 4Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx337("path", { d: "M7 16C7 14.3431 5.65685 13 4 13C3.64936 13 3.31278 13.0602 3 13.1707C3 13.9415 3 14.3269 3.07043 14.6462C3.32206 15.787 4.21301 16.6779 5.35378 16.9296C5.67305 17 6.05847 17 6.82929 17C6.93985 16.6872 7 16.3506 7 16Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx337("path", { d: "M17 4C17 5.65685 18.3431 7 20 7C20.3506 7 20.6872 6.93985 21 6.82929C21 6.05847 21 5.67305 20.9296 5.35378C20.6779 4.21301 19.787 3.32206 18.6462 3.07043C18.3269 3 17.9415 3 17.1707 3C17.0602 3.31278 17 3.64936 17 4Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx337("path", { d: "M9.40135 11.5C9.14609 11.0587 9 10.5464 9 10C9 8.34315 10.3431 7 12 7C13.3062 7 14.4175 7.83481 14.8293 9", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx337("path", { d: "M21 15.4C21 16.7255 18.9853 17.8 16.5 17.8C14.0147 17.8 12 16.7255 12 15.4M21 15.4C21 14.0745 18.9853 13 16.5 13C14.0147 13 12 14.0745 12 15.4M21 15.4V19C21 20.1046 18.9853 21 16.5 21C14.0147 21 12 20.1046 12 19V15.4", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/MoneyBag.tsx
import { jsx as jsx338, jsxs as jsxs287 } from "react/jsx-runtime";
function MoneyBag({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs287(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx338("path", { d: "M10 7H14L15.08 5.56C15.698 4.73604 16.007 4.32406 15.9998 3.97921C15.9935 3.67912 15.8528 3.39769 15.6165 3.21264C15.3449 3 14.8299 3 13.8 3H10.2C9.17005 3 8.65508 3 8.3835 3.21264C8.14717 3.39769 8.00646 3.67912 8.00022 3.97921C7.99305 4.32406 8.30203 4.73604 8.92 5.56L10 7Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx338("path", { d: "M12 7L20 7", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx338("path", { d: "M12 7C15.7548 7 18.564 12.0843 19.9778 15.3397C20.6588 16.9075 20.0847 18.6865 18.7172 19.7121C17.6026 20.5481 16.2468 21 14.8535 21H9.14652C7.75319 21 6.39744 20.5481 5.28278 19.7121C3.91533 18.6865 3.34122 16.9075 4.02216 15.3397C5.43603 12.0843 8.24525 7 12 7Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Monitor.tsx
import { jsx as jsx339, jsxs as jsxs288 } from "react/jsx-runtime";
function Monitor({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs288(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx339("rect", { x: "3", y: "3", width: "18", height: "13", rx: "3", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx339("path", { d: "M8 21C11.157 19.6581 12.9093 19.6753 16 21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Moon01.tsx
import { jsx as jsx340 } from "react/jsx-runtime";
function Moon01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx340(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx340("path", { d: "M10.4268 3.14078C9.52537 4.5427 9 6.20962 9 8.00015C9.00006 12.9707 13.0295 17.0002 18 17.0002C18.5366 17.0002 19.0615 16.9495 19.5723 16.8595C17.9713 19.349 15.1798 21.0002 12 21.0002C7.02949 21.0002 3.00009 16.9706 3 12.0002C3 7.5665 6.2066 3.8851 10.4268 3.14078Z", strokeWidth, strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/Moon02.tsx
import { jsx as jsx341 } from "react/jsx-runtime";
function Moon02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx341(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx341("path", { d: "M12 3C13.82 3 15.5127 3.54188 16.9287 4.4707C16.1782 4.1681 15.3589 4 14.5 4C10.9101 4 8 6.91015 8 10.5C8 14.0899 10.9101 17 14.5 17C17.8536 17 20.6131 14.4602 20.9619 11.1992C20.9852 11.4631 21 11.73 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z", strokeWidth, strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/Mosque.tsx
import { jsx as jsx342, jsxs as jsxs289 } from "react/jsx-runtime";
function Mosque({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs289(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx342("path", { d: "M6 15.6759V16H18V15.6759C18 14.0042 17.1645 12.443 15.7735 11.5157L12 9L8.2265 11.5157C6.83551 12.443 6 14.0042 6 15.6759Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx342("path", { d: "M12 9L12 7", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx342("path", { d: "M17 12.6719V6.09484C17 4.81098 17.7254 3.63732 18.8737 3.06316C18.9532 3.0234 19.0468 3.0234 19.1263 3.06316C20.2746 3.63732 21 4.81098 21 6.09484V16", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx342("path", { d: "M7 12.6719V6.09484C7 4.81098 6.27463 3.63732 5.12632 3.06316C5.0468 3.0234 4.9532 3.0234 4.87368 3.06316C3.72536 3.63732 3 4.81098 3 6.09484V16", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx342("path", { d: "M21 21V16H3V21H21Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Mouse.tsx
import { jsx as jsx343, jsxs as jsxs290 } from "react/jsx-runtime";
function Mouse({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs290(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx343("path", { d: "M6 11C6 7.68629 8.68629 5 12 5C15.3137 5 18 7.68629 18 11V15C18 18.3137 15.3137 21 12 21C8.68629 21 6 18.3137 6 15V11Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx343("path", { d: "M6 12H18", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx343("path", { d: "M6 3L11 3C11.5523 3 12 3.44772 12 4L12 12", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Movie01.tsx
import { jsx as jsx344, jsxs as jsxs291 } from "react/jsx-runtime";
function Movie01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs291(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx344("rect", { x: "3", y: "3", width: "18", height: "18", rx: "3", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx344("path", { d: "M7 3V21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx344("path", { d: "M17 3V21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx344("path", { d: "M7 9H3", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx344("path", { d: "M7 15H3", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx344("path", { d: "M21 15H17", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx344("path", { d: "M13 12L11 14V10L13 12ZM11 10L11.8889 12M11 14L11.8889 12M13 12H11.8889", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx344("path", { d: "M21 9H17", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Movie02.tsx
import { jsx as jsx345, jsxs as jsxs292 } from "react/jsx-runtime";
function Movie02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs292(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx345("rect", { x: "4", y: "3", width: "16", height: "18", rx: "3", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx345("path", { d: "M8 3V21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx345("path", { d: "M16 3V21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx345("path", { d: "M8 8L4 8", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx345("path", { d: "M20 8H16", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx345("path", { d: "M20 12L4 12", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx345("path", { d: "M8 16L4 16", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx345("path", { d: "M20 16H16", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Museum.tsx
import { jsx as jsx346, jsxs as jsxs293 } from "react/jsx-runtime";
function Museum({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs293(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx346("path", { d: "M2 13H22M2 21H22", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx346("path", { d: "M11.47 5.33125L4.47 9.70625C4.17762 9.88899 4 10.2095 4 10.5542V13H20V10.5542C20 10.2095 19.8224 9.88899 19.53 9.70625L12.53 5.33125C12.2057 5.12858 11.7943 5.12858 11.47 5.33125Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx346("path", { d: "M12 5L12 3", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx346("path", { d: "M4.19141 10L19.8008 10", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx346("path", { d: "M20 13L20 21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx346("path", { d: "M16 13L16 21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx346("path", { d: "M12 13L12 21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx346("path", { d: "M8 13L8 21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx346("path", { d: "M4 13L4 21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/MusicNote.tsx
import { jsx as jsx347 } from "react/jsx-runtime";
function MusicNote({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx347(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx347("path", { d: "M12 17.5C12 19.433 10.433 21 8.5 21C6.567 21 5 19.433 5 17.5C5 15.567 6.567 14 8.5 14C10.433 14 12 15.567 12 17.5ZM12 17.5V8M12 8V3H15C17.2091 3 19 4.79086 19 7V8H12Z", strokeWidth, strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/Newspaper.tsx
import { jsx as jsx348, jsxs as jsxs294 } from "react/jsx-runtime";
function Newspaper({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs294(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx348("path", { d: "M6.99999 16V6C6.99999 4.34315 8.34314 3 9.99999 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H5", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx348("path", { d: "M7 10V15M7 15V19C7 20.1046 6.10457 21 5 21C3.89543 21 3 20.1046 3 19V15H7Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx348("path", { d: "M17 9V7C17 6.44772 16.5523 6 16 6H12C11.4477 6 11 6.44772 11 7V9C11 9.55228 11.4477 10 12 10H16C16.5523 10 17 9.55228 17 9Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx348("path", { d: "M11 13.5H17", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx348("path", { d: "M11 17H17", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Note.tsx
import { jsx as jsx349, jsxs as jsxs295 } from "react/jsx-runtime";
function Note({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs295(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx349("path", { d: "M3 8.8C3 7.11984 3 6.27976 3.32698 5.63803C3.6146 5.07354 4.07354 4.6146 4.63803 4.32698C5.27976 4 6.11984 4 7.8 4H15.2506C15.5261 4 15.6638 4 15.7914 4.03434C15.9045 4.06476 16.0114 4.11481 16.1071 4.18221C16.2152 4.25828 16.3034 4.36409 16.4798 4.5757L20.6292 9.55499C20.7665 9.7198 20.8352 9.80221 20.8841 9.89468C20.9274 9.9767 20.9592 10.0644 20.9784 10.1551C21 10.2575 21 10.3647 21 10.5793V15.2C21 16.8802 21 17.7202 20.673 18.362C20.3854 18.9265 19.9265 19.3854 19.362 19.673C18.7202 20 17.8802 20 16.2 20H7.8C6.11984 20 5.27976 20 4.63803 19.673C4.07354 19.3854 3.6146 18.9265 3.32698 18.362C3 17.7202 3 16.8802 3 15.2V8.8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx349("path", { d: "M16 4V9C16 9.55228 16.4477 10 17 10H21", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx349("path", { d: "M7 12L12 12", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx349("path", { d: "M7 8L10 8", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx349("path", { d: "M7 16L15 16", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/NotificationBox.tsx
import { jsx as jsx350, jsxs as jsxs296 } from "react/jsx-runtime";
function NotificationBox({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs296(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx350("path", { d: "M13 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V11", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx350("path", { d: "M7 14L10 10L14 14L16.25 11", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx350("circle", { cx: "19", cy: "5", r: "2", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Order.tsx
import { jsx as jsx351, jsxs as jsxs297 } from "react/jsx-runtime";
function Order({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs297(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx351("path", { d: "M4 8H20V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx351("path", { d: "M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7V5Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx351("path", { d: "M9 15V8H15V15L12 13L9 15Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx351("path", { d: "M17 3V8", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx351("path", { d: "M7 3V8", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Package.tsx
import { jsx as jsx352, jsxs as jsxs298 } from "react/jsx-runtime";
function Package({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs298(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx352("path", { d: "M4.54307 6.43815L10.5431 3.10482C11.4491 2.60144 12.5509 2.60144 13.4569 3.10482L19.4569 6.43815C20.4093 6.96726 21 7.97112 21 9.06062V15.5302C21 16.6197 20.4093 17.6236 19.4569 18.1527L13.4569 21.486C12.5509 21.9894 11.4491 21.9894 10.5431 21.486L4.54307 18.1527C3.59068 17.6236 3 16.6197 3 15.5302V9.06062C3 7.97112 3.59068 6.96726 4.54307 6.43815Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx352("path", { d: "M11.9999 12.2954L20.5167 7.50004M11.9999 12.2954L3.45077 7.48462M11.9999 12.2954L12 21.8125", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Page.tsx
import { jsx as jsx353, jsxs as jsxs299 } from "react/jsx-runtime";
function Page({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs299(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx353("path", { d: "M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V16.2C19 17.8802 19 18.7202 18.673 19.362C18.3854 19.9265 17.9265 20.3854 17.362 20.673C16.7202 21 15.8802 21 14.2 21H9.8C8.11984 21 7.27976 21 6.63803 20.673C6.07354 20.3854 5.6146 19.9265 5.32698 19.362C5 18.7202 5 17.8802 5 16.2V7.8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx353("path", { d: "M10 12H15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx353("path", { d: "M10 8H15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx353("path", { d: "M3 8H6", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx353("path", { d: "M3 12H6", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx353("path", { d: "M3 16H6", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx353("path", { d: "M10 16H15", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/PaintPalette.tsx
import { jsx as jsx354, jsxs as jsxs300 } from "react/jsx-runtime";
function PaintPalette({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs300(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx354("path", { d: "M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 8.66873 6.60989 9.95614 9.3 8.4C10.6238 7.63423 10.3607 3 12 3C16.9706 3 21 7.02944 21 12Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx354("circle", { cx: "14.8841", cy: "9.54304", r: "1.8", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx354("path", { d: "M15.9813 15.5209H15.7125M16.3014 15.5209C16.3014 15.7695 16.0999 15.9709 15.8514 15.9709C15.6028 15.9709 15.4014 15.7695 15.4014 15.5209C15.4014 15.2724 15.6028 15.0709 15.8514 15.0709C16.0999 15.0709 16.3014 15.2724 16.3014 15.5209Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx354("path", { d: "M11.68 17.1136H11.4111M12 17.1136C12 17.3621 11.7985 17.5636 11.55 17.5636C11.3015 17.5636 11.1 17.3621 11.1 17.1136C11.1 16.865 11.3015 16.6636 11.55 16.6636C11.7985 16.6636 12 16.865 12 17.1136Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx354("path", { d: "M7.80477 14.6209H7.53588M8.12479 14.6209C8.12479 14.8694 7.92332 15.0709 7.67479 15.0709C7.42626 15.0709 7.22479 14.8694 7.22479 14.6209C7.22479 14.3724 7.42626 14.1709 7.67479 14.1709C7.92332 14.1709 8.12479 14.3724 8.12479 14.6209Z", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Paper.tsx
import { jsx as jsx355, jsxs as jsxs301 } from "react/jsx-runtime";
function Paper({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs301(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx355("path", { d: "M7 16V6C7 4.34315 8.34315 3 10 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H10", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx355("path", { d: "M11 7L17 7", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx355("path", { d: "M11 11H14", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx355("path", { d: "M14.5 18.5C14.5 19.8807 15.6193 21 17 21H5.5C4.11929 21 3 19.8807 3 18.5C3 17.1193 4.11929 16 5.5 16H17C15.6193 16 14.5 17.1193 14.5 18.5Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/PaperCheck.tsx
import { jsx as jsx356, jsxs as jsxs302 } from "react/jsx-runtime";
function PaperCheck({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs302(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx356("path", { d: "M6.72727 7C6.05145 7 5.71354 7 5.43225 7.05421C4.22802 7.28631 3.28631 8.22802 3.05421 9.43225C3 9.71354 3 10.0514 3 10.7273V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V13", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx356("path", { d: "M7 17L9 17", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx356("path", { d: "M13 17L17 17", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx356("path", { d: "M17.8941 9.03117L20.4922 7.53117C20.9705 7.25503 21.1343 6.64344 20.8582 6.16515L19.8582 4.4331C19.582 3.9548 18.9705 3.79093 18.4922 4.06707L10.499 8.68191C10.0583 8.93634 9.67023 9.27254 9.35554 9.67245L6.50178 13.2991L11.0694 12.641C11.5731 12.5685 12.0583 12.4004 12.499 12.146L17.8941 9.03117ZM17.8941 9.03117L14.8941 3.83502C14.6179 3.35673 14.0064 3.19285 13.5281 3.46899L10.93 4.96899", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Passkey.tsx
import { jsx as jsx357, jsxs as jsxs303 } from "react/jsx-runtime";
function Passkey({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs303(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx357("circle", { cx: "11", cy: "7", r: "4", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx357("path", { d: "M11 15C10.2694 15 9.55031 15.0218 8.84592 15.064C1.10302 15.5276 3.2419 21 11 21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx357("path", { d: "M21 14C21 12.3431 19.6569 11 18 11C16.3431 11 15 12.3431 15 14C15 14.9815 15.4713 15.8529 16.2 16.4002V18L15.6 18.9L18 21L19.8 19.8L19.8003 16.4C20.5288 15.8527 21 14.9814 21 14Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx357("path", { d: "M18 14H18.0001", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Passport.tsx
import { jsx as jsx358, jsxs as jsxs304 } from "react/jsx-runtime";
function Passport({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs304(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx358("path", { d: "M15 5.99999V4.0039C15 3.31916 14.3273 2.83697 13.6789 3.05687L5 5.99999V18C5 19.6568 6.34315 21 8 21H16C17.6569 21 19 19.6568 19 18V8.99999C19 7.34313 17.6569 5.99999 16 5.99999H15ZM5 5.99999H15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx358("circle", { cx: "12", cy: "12", r: "2", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx358("path", { d: "M10 17L14 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Password01.tsx
import { jsx as jsx359, jsxs as jsxs305 } from "react/jsx-runtime";
function Password01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs305(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx359("path", { d: "M7.14442 20.5H6.84565M7.5 20.5C7.5 20.7761 7.27614 21 7 21C6.72386 21 6.5 20.7761 6.5 20.5C6.5 20.2239 6.72386 20 7 20C7.27614 20 7.5 20.2239 7.5 20.5Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx359("path", { d: "M12.1444 20.5H11.8456M12.5 20.5C12.5 20.7761 12.2761 21 12 21C11.7239 21 11.5 20.7761 11.5 20.5C11.5 20.2239 11.7239 20 12 20C12.2761 20 12.5 20.2239 12.5 20.5Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx359("path", { d: "M17.1444 20.5H16.8456M17.5 20.5C17.5 20.7761 17.2761 21 17 21C16.7239 21 16.5 20.7761 16.5 20.5C16.5 20.2239 16.7239 20 17 20C17.2761 20 17.5 20.2239 17.5 20.5Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx359("path", { d: "M16.8 9H7.2C6.0799 9 5.51984 9 5.09202 9.21799C4.71569 9.40973 4.40973 9.71569 4.21799 10.092C4 10.5198 4 11.0799 4 12.2V12.8C4 13.9201 4 14.4802 4.21799 14.908C4.40973 15.2843 4.71569 15.5903 5.09202 15.782C5.51984 16 6.0799 16 7.2 16H16.8C17.9201 16 18.4802 16 18.908 15.782C19.2843 15.5903 19.5903 15.2843 19.782 14.908C20 14.4802 20 13.9201 20 12.8V12.2C20 11.0799 20 10.5198 19.782 10.092C19.5903 9.71569 19.2843 9.40973 18.908 9.21799C18.4802 9 17.9201 9 16.8 9Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx359("path", { d: "M15 9V6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6V9", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Password02.tsx
import { jsx as jsx360, jsxs as jsxs306 } from "react/jsx-runtime";
function Password02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs306(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx360("path", { d: "M17 3H16.8541C15.7178 3 14.679 3.64201 14.1708 4.65836L14 5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx360("path", { d: "M17 21H16.8541C15.7178 21 14.679 20.358 14.1708 19.3416L14 19", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx360("path", { d: "M11 3H11.1459C12.2822 3 13.321 3.64201 13.8292 4.65836L14 5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx360("path", { d: "M11 21H11.1459C12.2822 21 13.321 20.358 13.8292 19.3416L14 19", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx360("path", { d: "M14 5L14 19", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx360("path", { d: "M10 12H10.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx360("path", { d: "M6.5 12H6.5001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx360("path", { d: "M18 17C18.9319 17 19.3978 17 19.7654 16.8478C20.2554 16.6448 20.6448 16.2554 20.8478 15.7654C21 15.3978 21 14.9319 21 14V10C21 9.06812 21 8.60218 20.8478 8.23463C20.6448 7.74458 20.2554 7.35523 19.7654 7.15224C19.3978 7 18.9319 7 18 7M14 17H6.2C5.07989 17 4.51984 17 4.09202 16.782C3.71569 16.5903 3.40973 16.2843 3.21799 15.908C3 15.4802 3 14.9201 3 13.8V10.2C3 9.07989 3 8.51984 3.21799 8.09202C3.40973 7.71569 3.71569 7.40973 4.09202 7.21799C4.51984 7 5.07989 7 6.2 7H14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Pause.tsx
import { jsx as jsx361, jsxs as jsxs307 } from "react/jsx-runtime";
function Pause({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs307(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx361("path", { d: "M20 17.4V6.6C20 6.03995 20 5.75992 19.891 5.54601C19.7951 5.35785 19.6422 5.20487 19.454 5.10899C19.2401 5 18.9601 5 18.4 5H16.6C16.0399 5 15.7599 5 15.546 5.10899C15.3578 5.20487 15.2049 5.35785 15.109 5.54601C15 5.75992 15 6.03995 15 6.6V17.4C15 17.9601 15 18.2401 15.109 18.454C15.2049 18.6422 15.3578 18.7951 15.546 18.891C15.7599 19 16.0399 19 16.6 19H18.4C18.9601 19 19.2401 19 19.454 18.891C19.6422 18.7951 19.7951 18.6422 19.891 18.454C20 18.2401 20 17.9601 20 17.4Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx361("path", { d: "M9 17.4V6.6C9 6.03995 9 5.75992 8.89101 5.54601C8.79513 5.35785 8.64215 5.20487 8.45399 5.10899C8.24008 5 7.96005 5 7.4 5H5.6C5.03995 5 4.75992 5 4.54601 5.10899C4.35785 5.20487 4.20487 5.35785 4.10899 5.54601C4 5.75992 4 6.03995 4 6.6V17.4C4 17.9601 4 18.2401 4.10899 18.454C4.20487 18.6422 4.35785 18.7951 4.54601 18.891C4.75992 19 5.03995 19 5.6 19H7.4C7.96005 19 8.24008 19 8.45399 18.891C8.64215 18.7951 8.79513 18.6422 8.89101 18.454C9 18.2401 9 17.9601 9 17.4Z", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Payment.tsx
import { jsx as jsx362, jsxs as jsxs308 } from "react/jsx-runtime";
function Payment({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs308(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx362("path", { d: "M19 3L21.0591 12.8838C21.3405 14.2342 21.0514 15.6408 20.2604 16.7709L18.3615 19.4835C18.1262 19.8197 18 20.2201 18 20.6304V21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx362("path", { d: "M17.5 15V10C15.567 10 14 11.567 14 13.5V15.7686C14 15.9068 13.9116 16.0295 13.7805 16.0732C12.12 16.6267 11 18.1806 11 19.9309V21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx362("path", { d: "M6 21C6 21 6 21 6 21ZM6 21C4.34315 21 3 19.6569 3 18M16 6.78947C16 6.05573 16 5.68886 15.9362 5.38435C15.6918 4.21885 14.7812 3.30823 13.6156 3.06385C13.3111 3 12.9443 3 12.2105 3L7.8 3C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8L3 18M3 18C3 18 3 18 3 18Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx362("path", { d: "M9.5 14.5C8.11929 14.5 7 13.3807 7 12C7 10.6193 8.11929 9.5 9.5 9.5C10.0628 9.5 10.5822 9.68597 11 9.99982", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx362("path", { d: "M15 7C13.3431 7 12 5.65685 12 4C12 3.64936 12.0602 3.31278 12.1707 3C12.9415 3 13.3269 3 13.6462 3.07043C14.787 3.32206 15.6779 4.21301 15.9296 5.35378C16 5.67305 16 6.05847 16 6.82929C15.6872 6.93985 15.3506 7 15 7Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx362("path", { d: "M4 7C5.65685 7 7 5.65685 7 4C7 3.64936 6.93985 3.31278 6.82929 3C6.05847 3 5.67305 3 5.35378 3.07043C4.21301 3.32206 3.32206 4.21301 3.07043 5.35378C3 5.67305 3 6.05847 3 6.82929C3.31278 6.93985 3.64936 7 4 7Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx362("path", { d: "M4 17C5.65685 17 7 18.3431 7 20C7 20.3506 6.93985 20.6872 6.82929 21C6.05847 21 5.67305 21 5.35378 20.9296C4.21301 20.6779 3.32206 19.787 3.07043 18.6462C3 18.3269 3 17.9415 3 17.1707C3.31278 17.0602 3.64936 17 4 17Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Pen.tsx
import { jsx as jsx363, jsxs as jsxs309 } from "react/jsx-runtime";
function Pen({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs309(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx363("path", { d: "M19 21L19.4858 16.8385C19.6678 15.2793 19.7588 14.4996 19.5082 13.8241C19.2991 13.2604 18.8579 12.7028 18.3573 12.3697C17.7575 11.9706 17.0458 11.8879 15.6225 11.7225C13.0734 11.4262 10.8632 11.4261 8.36311 11.7167C6.94878 11.8811 6.24162 11.9633 5.6418 12.3624C5.14229 12.6948 4.69956 13.2543 4.49091 13.8168C4.24037 14.4923 4.33114 15.2699 4.51268 16.8252L5 21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx363("path", { d: "M15.6587 11.7267C13.0936 11.4262 10.8739 11.4247 8.3613 11.7169C6.95019 11.881 6.24463 11.9631 5.93764 11.7559C5.66166 11.5697 5.50792 11.2911 5.49748 10.9583C5.48587 10.5882 5.91475 10.0557 6.77251 8.99063L9.50779 5.59441C10.3604 4.53584 10.7866 4.00655 11.3009 3.81469C11.7518 3.64645 12.2482 3.64645 12.6991 3.81469C13.2134 4.00655 13.6396 4.53584 14.4922 5.59442L17.2406 9.00689C18.095 10.0678 18.5222 10.5982 18.5105 10.9685C18.5 11.3009 18.3456 11.5804 18.0699 11.7662C17.7626 11.9733 17.0613 11.8911 15.6587 11.7267H15.6587Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx363("path", { d: "M16.3221 7.86158C13.2433 7.45836 10.7046 7.4697 7.6669 7.88673", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/PenTool.tsx
import { jsx as jsx364, jsxs as jsxs310 } from "react/jsx-runtime";
function PenTool({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs310(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx364("path", { d: "M4.91966 9.1953L12 3L19.0803 9.1953C19.6449 9.68931 19.8856 10.4577 19.7036 11.1855L18 18H6L4.29638 11.1855C4.11443 10.4577 4.35507 9.68931 4.91966 9.1953Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx364("rect", { x: "4", y: "18", width: "16", height: "3", rx: "1", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx364("path", { d: "M12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8ZM12 8V3", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Pencil.tsx
import { jsx as jsx365, jsxs as jsxs311 } from "react/jsx-runtime";
function Pencil({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs311(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx365("path", { d: "M15.5421 4.3032C16.7137 3.13163 18.6132 3.13163 19.7848 4.30321C20.9564 5.47478 20.9564 7.37427 19.7848 8.54585L12.05 16.2806C10.6239 17.7068 8.90518 18.8064 7.01263 19.5037L4.55224 20.4102C4.00712 20.611 3.47701 20.0809 3.67784 19.5358L4.5843 17.0754C5.28156 15.1828 6.38123 13.4641 7.80741 12.0379L15.5421 4.3032Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx365("path", { d: "M14.128 5.71729L18.3706 9.95993", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Pentagon.tsx
import { jsx as jsx366 } from "react/jsx-runtime";
function Pentagon({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx366(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx366("path", { d: "M9.64675 4.00882C10.5051 3.52598 10.9343 3.28455 11.3894 3.18995C11.7922 3.10623 12.2078 3.10623 12.6106 3.18995C13.0657 3.28455 13.4949 3.52598 14.3533 4.00882L18.3578 6.26138C19.4225 6.8603 19.9549 7.15976 20.3111 7.59204C20.6258 7.97385 20.8411 8.42754 20.9379 8.91271C21.0475 9.46203 20.9429 10.0638 20.7336 11.2674L19.6779 17.3373C19.432 18.7513 19.3091 19.4582 18.9527 19.9884C18.6386 20.4557 18.1993 20.8253 17.685 21.0547C17.1016 21.3149 16.3841 21.3149 14.9489 21.3149H12H9.05111C7.61594 21.3149 6.89836 21.3149 6.315 21.0547C5.80072 20.8253 5.3614 20.4557 5.04727 19.9884C4.69094 19.4582 4.56799 18.7513 4.32209 17.3373L3.26645 11.2674C3.05713 10.0638 2.95247 9.46203 3.0621 8.91271C3.15893 8.42754 3.37425 7.97385 3.68887 7.59204C4.04509 7.15976 4.57746 6.8603 5.64221 6.26138L9.64675 4.00882Z", strokeWidth, strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/Percentage.tsx
import { jsx as jsx367, jsxs as jsxs312 } from "react/jsx-runtime";
function Percentage({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs312(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx367("circle", { cx: "6", cy: "7", r: "2", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx367("circle", { cx: "18", cy: "17", r: "2", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx367("path", { d: "M19 5L5 19", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Perspective.tsx
import { jsx as jsx368 } from "react/jsx-runtime";
function Perspective({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx368(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx368("path", { d: "M9 3.99992L5.53529 3.0375C4.2609 2.6835 3 3.64189 3 4.96454L3 11.9999M9 3.99992L9 20M9 20L15 18.3333L19.5353 17.0735C20.4009 16.8331 21 16.0449 21 15.1465V11.9999L21 8.85342C21 7.95501 20.4009 7.16684 19.5353 6.92639L15 5.66658L9 3.99992M9 20L5.53529 20.9624C4.2609 21.3164 3 20.358 3 19.0354V11.9999M15 18.3333L15 5.66658M21 11.9999H3", strokeWidth, strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/PictureInPicture.tsx
import { jsx as jsx369, jsxs as jsxs313 } from "react/jsx-runtime";
function PictureInPicture({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs313(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx369("path", { d: "M7.8 19H16.2C17.8802 19 18.7202 19 19.362 18.673C19.9265 18.3854 20.3854 17.9265 20.673 17.362C21 16.7202 21 15.8802 21 14.2V9.8C21 8.11984 21 7.27976 20.673 6.63803C20.3854 6.07354 19.9265 5.6146 19.362 5.32698C18.7202 5 17.8802 5 16.2 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V14.2C3 15.8802 3 16.7202 3.32698 17.362C3.6146 17.9265 4.07354 18.3854 4.63803 18.673C5.27976 19 6.11984 19 7.8 19Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx369("rect", { x: "9", y: "11", width: "8", height: "4", rx: "1", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/PigSavings.tsx
import { jsx as jsx370, jsxs as jsxs314 } from "react/jsx-runtime";
function PigSavings({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs314(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx370("path", { d: "M19 15.1429V13.0001C19 10.2386 16.7614 8 13.9999 8H9L6 5V7.84301C6 7.94699 5.98324 8.05029 5.95036 8.14893L5.64313 9.0706C5.23134 10.306 4.34567 11.3272 3.18094 11.9095C3.07005 11.965 3 12.0783 3 12.2023V14.754C3 14.9048 3.08518 15.0426 3.22002 15.11C4.37542 15.6877 5.31229 16.6246 5.88999 17.78L5.95492 17.9098C5.98456 17.9691 6 18.0345 6 18.1008V19.691C6 20.1492 6 20.3784 6.08918 20.5534C6.16762 20.7073 6.29278 20.8325 6.44674 20.9109C6.62175 21.0001 6.85087 21.0001 7.30909 21.0001H7.69091C8.14913 21.0001 8.37825 21.0001 8.55327 20.9109C8.70722 20.8325 8.83238 20.7073 8.91082 20.5534C9 20.3784 9 20.1492 9 19.691V19.3091C9 18.8509 9 18.6218 9.08918 18.4467C9.16762 18.2928 9.29278 18.1676 9.44673 18.0892C9.62175 18 9.85087 18 10.3091 18H11.6909C12.1491 18 12.3782 18 12.5533 18.0892C12.7072 18.1676 12.8324 18.2928 12.9108 18.4467C13 18.6218 13 18.8509 13 19.3091V19.691C13 20.1492 13 20.3784 13.0892 20.5534C13.1676 20.7073 13.2928 20.8325 13.4467 20.9109C13.6218 21.0001 13.8509 21.0001 14.3091 21.0001H14.6909C15.1491 21.0001 15.3782 21.0001 15.5533 20.9109C15.7072 20.8325 15.8324 20.7073 15.9108 20.5534C16 20.3784 16 20.1492 16 19.691V18.143C16 18.0641 16.064 18.0001 16.1429 18.0001C17.7208 18 19 16.7208 19 15.1429Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx370("path", { d: "M19.3636 13.6364C20.5 13.6364 21 13.5 21 10.5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx370("path", { d: "M11 12L15 12", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx370("path", { d: "M10.55 5C10.7816 3.85888 11.7905 3 13 3C14.2095 3 15.2184 3.85888 15.45 5", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Pill.tsx
import { jsx as jsx371, jsxs as jsxs315 } from "react/jsx-runtime";
function Pill({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs315(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx371("rect", { x: "14.0015", y: "0.098999", width: "14", height: "19.6611", rx: "7", transform: "rotate(45 14.0015 0.098999)", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx371("path", { d: "M17.829 11.1722C18.2187 10.3564 18.2187 9.40093 17.829 8.58514", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx371("path", { d: "M7.05025 7.05023L16.9497 16.9497", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Pin.tsx
import { jsx as jsx372, jsxs as jsxs316 } from "react/jsx-runtime";
function Pin({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs316(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx372("path", { d: "M13.0724 4.12317C13.4252 3.50958 13.6015 3.20278 13.8482 3.06778C14.0665 2.94833 14.3214 2.91453 14.5632 2.97298C14.8366 3.03905 15.0868 3.28928 15.5873 3.78975L20.1838 8.38626C20.683 8.8855 20.9327 9.13512 20.9987 9.40846C21.0566 9.64798 21.024 9.90044 20.9072 10.1174C20.7739 10.365 20.4691 10.5431 19.8594 10.8992L17.878 12.0566C16.5016 12.8607 15.5833 14.2651 15.3988 15.8484C15.2665 16.9829 14.7552 18.0395 13.9475 18.8472L13.3543 19.4404C13.1919 19.6028 13.1106 19.6841 13.0298 19.7384C12.6926 19.9647 12.2521 19.9647 11.915 19.7384C11.8342 19.6841 11.7529 19.6028 11.5904 19.4404L4.55961 12.4095C4.39714 12.247 4.3159 12.1658 4.26161 12.0849C4.0353 11.7478 4.0353 11.3073 4.26161 10.9702C4.3159 10.8893 4.39714 10.8081 4.55961 10.6456L5.15911 10.0461C5.96267 9.24258 7.01395 8.73382 8.1427 8.60225C9.73017 8.41721 11.1361 7.491 11.9327 6.10546L13.0724 4.12317Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx372("path", { d: "M8.05856 15.9414L2.99995 21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/PinOff.tsx
import { jsx as jsx373, jsxs as jsxs317 } from "react/jsx-runtime";
function PinOff({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs317(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx373("path", { d: "M15.3988 15.8484C15.2665 16.9829 14.7552 18.0395 13.9475 18.8472L13.3543 19.4404C13.1919 19.6029 13.1106 19.6841 13.0298 19.7384C12.6926 19.9647 12.2522 19.9647 11.915 19.7384C11.8342 19.6841 11.7529 19.6029 11.5905 19.4404L4.55962 12.4095C4.39714 12.2471 4.31591 12.1658 4.26162 12.085C4.03531 11.7478 4.03531 11.3073 4.26162 10.9702C4.31591 10.8894 4.39714 10.8081 4.55962 10.6457L5.15912 10.0461C5.96267 9.2426 7.01396 8.73384 8.14271 8.60226C8.28593 8.58557 8.42768 8.56284 8.56763 8.53429M17.3593 12.4041C17.5238 12.2786 17.697 12.1624 17.878 12.0566L19.8595 10.8992C20.4691 10.5431 20.7739 10.365 20.9072 10.1174C21.024 9.90046 21.0566 9.648 20.9987 9.40847C20.9327 9.13514 20.683 8.88552 20.1838 8.38628L15.5873 3.78977C15.0868 3.2893 14.8366 3.03906 14.5633 2.973C14.3214 2.91455 14.0665 2.94835 13.8482 3.06779C13.6015 3.2028 13.4252 3.50959 13.0724 4.12318L11.9327 6.10547C11.8236 6.29524 11.7031 6.47639 11.5722 6.6482", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx373("path", { d: "M8.05856 15.9414L2.99995 21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx373("path", { d: "M4 4L20 20", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Pinterest.tsx
import { jsx as jsx374 } from "react/jsx-runtime";
function Pinterest({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx374(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx374("path", { d: "M8.24888 16.6787C7.96471 17.8239 7.89138 19.0242 8.01055 20.2793L8.24888 21.3736L8.82638 20.5634C9.52305 19.5464 10.0272 18.4012 10.3114 17.2009L10.8797 14.9105C11.5489 15.7808 12.5847 16.2848 13.6847 16.2664C16.5264 16.2664 19.1664 13.4171 19.1664 9.71567C19.1664 6.01426 16.453 3 12.1447 3C8.03805 3 5.10471 5.90432 5.10471 9.56908C5.10471 11.6855 6.14971 13.2338 7.24971 13.2338C7.59805 13.2338 7.83638 13.1697 8.05638 12.7941C7.38721 12.0794 7.03888 11.035 7.03888 9.91723C7.03888 7.12285 8.99138 5.1164 12.0714 5.1164C14.8305 5.1164 16.7005 6.94878 16.7005 9.80729C16.7005 12.3726 15.3439 14.3516 13.428 14.3516C11.008 14.3516 11.5672 12.1069 11.6589 11.7954C11.6589 11.7954 12.3464 9.44081 12.3464 9.04685C12.3464 7.96575 11.7505 7.39771 10.9439 7.39771C9.77055 7.39771 9.02805 8.49714 9.02805 10.0363C9.03721 10.6777 9.14721 11.319 9.34888 11.9328L8.24888 16.6787Z", fill: color })
    }
  );
}

// src/icons/Play.tsx
import { jsx as jsx375 } from "react/jsx-runtime";
function Play({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx375(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx375("path", { d: "M16.4383 10.7506L10.5995 6.07961C9.76734 5.41387 9.35125 5.081 9.00108 5.08063C8.69654 5.0803 8.40845 5.21876 8.21846 5.45677C8 5.73045 8 6.2633 8 7.329V16.671C8 17.7367 8 18.2696 8.21846 18.5432C8.40845 18.7812 8.69654 18.9197 9.00108 18.9194C9.35125 18.919 9.76734 18.5861 10.5995 17.9204L10.5995 17.9204L16.4383 13.2494C16.9721 12.8223 17.239 12.6088 17.3357 12.3508C17.4204 12.1246 17.4204 11.8754 17.3357 11.6492C17.239 11.3912 16.9721 11.1777 16.4383 10.7506Z", strokeWidth, strokeLinecap: "round", stroke: color })
    }
  );
}

// src/icons/Plug.tsx
import { jsx as jsx376, jsxs as jsxs318 } from "react/jsx-runtime";
function Plug({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs318(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx376("path", { d: "M10 10.3423C10 8.96573 10.9369 7.76578 12.2724 7.4319L18 6V18L12.2724 16.5681C10.9369 16.2342 10 15.0343 10 13.6577V10.3423Z", strokeWidth, strokeLinejoin: "round", strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx376("path", { d: "M18 4V20", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx376("path", { d: "M18 9H21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx376("path", { d: "M18 15H21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx376("path", { d: "M10 12H8C6.89543 12 6 12.8954 6 14V19C6 20.1046 5.10457 21 4 21H3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Plus.tsx
import { jsx as jsx377, jsxs as jsxs319 } from "react/jsx-runtime";
function Plus({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs319(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx377("path", { d: "M6 12L18 12", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx377("path", { d: "M12 18L12 6", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/PlusSmall.tsx
import { jsx as jsx378 } from "react/jsx-runtime";
function PlusSmall({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx378(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx378("path", { d: "M7 12H17M11.995 17.005L11.995 7.005", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/Podcast.tsx
import { jsx as jsx379, jsxs as jsxs320 } from "react/jsx-runtime";
function Podcast({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs320(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx379("path", { d: "M13.1961 20.0194L13.6078 17.9612C13.8107 16.9466 13.0347 16 12 16C10.9653 16 10.1893 16.9466 10.3922 17.9612L10.8039 20.0194C10.8373 20.1866 10.8541 20.2703 10.8799 20.3413C11.0048 20.6853 11.3076 20.9336 11.6694 20.9886C11.7442 21 11.8295 21 12 21C12.1705 21 12.2558 21 12.3306 20.9886C12.6924 20.9336 12.9952 20.6853 13.1201 20.3413C13.1459 20.2703 13.1627 20.1866 13.1961 20.0194Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx379("path", { d: "M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx379("path", { d: "M7.41604 14C7.14845 13.3875 7 12.7111 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 12.7111 16.8516 13.3875 16.584 14", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx379("path", { d: "M18.7083 18C20.1334 16.4077 21 14.3051 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 14.3051 3.86656 16.4077 5.29168 18", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/PowerOff.tsx
import { jsx as jsx380, jsxs as jsxs321 } from "react/jsx-runtime";
function PowerOff({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs321(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx380("path", { d: "M17 6.75464C18.8289 8.22076 20 10.4736 20 13C20 13.6357 19.9258 14.2542 19.7857 14.8471M6.86572 6.86468C5.11395 8.33219 4 10.536 4 13C4 17.4183 7.58172 21 12 21C14.4637 21 16.6672 19.8864 18.1347 18.135", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx380("path", { d: "M12 3L12 7M12 15L12 12", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx380("path", { d: "M4 4L20 20", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/PowerOn.tsx
import { jsx as jsx381, jsxs as jsxs322 } from "react/jsx-runtime";
function PowerOn({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs322(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx381("path", { d: "M7 6.75464C5.17108 8.22076 4 10.4736 4 13C4 17.4183 7.58172 21 12 21C16.4183 21 20 17.4183 20 13C20 10.4736 18.8289 8.22076 17 6.75464", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx381("path", { d: "M12 3L12 15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Presentation.tsx
import { jsx as jsx382, jsxs as jsxs323 } from "react/jsx-runtime";
function Presentation({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs323(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx382("path", { d: "M4 3H20V11.2C20 12.8802 20 13.7202 19.673 14.362C19.3854 14.9265 18.9265 15.3854 18.362 15.673C17.7202 16 16.8802 16 15.2 16H8.8C7.11984 16 6.27976 16 5.63803 15.673C5.07354 15.3854 4.6146 14.9265 4.32698 14.362C4 13.7202 4 12.8802 4 11.2V3Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx382("path", { d: "M2 3H22", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx382("path", { d: "M12 16L6 21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx382("path", { d: "M12 16V21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx382("path", { d: "M12 16L18 21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx382("path", { d: "M8 7L8 12", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx382("path", { d: "M12 10L12 12", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx382("path", { d: "M16 8L16 12", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/PriceList.tsx
import { jsx as jsx383, jsxs as jsxs324 } from "react/jsx-runtime";
function PriceList({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs324(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx383("path", { d: "M18 7C18 6.07003 18 5.60504 17.8978 5.22354C17.6204 4.18827 16.8117 3.37962 15.7765 3.10222C15.395 3 14.93 3 14 3H8.8C7.11984 3 6.27976 3 5.63803 3.32698C5.07354 3.6146 4.6146 4.07354 4.32698 4.63803C4 5.27976 4 6.11984 4 7.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H10", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx383("path", { d: "M8 11H11", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx383("path", { d: "M8 7H14", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx383("path", { d: "M8 15H10", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx383("path", { d: "M20 13C20 12.4477 19.5523 12 19 12H17M14 19C14 19.5523 14.4477 20 15 20H17M17 20H18.4C18.9601 20 19.2401 20 19.454 19.891C19.6422 19.7951 19.7951 19.6422 19.891 19.454C20 19.2401 20 18.9601 20 18.4L20 17.6C20 17.0399 20 16.7599 19.891 16.546C19.7951 16.3578 19.6422 16.2049 19.454 16.109C19.2401 16 18.9601 16 18.4 16H15.6C15.0399 16 14.7599 16 14.546 15.891C14.3578 15.7951 14.2049 15.6422 14.109 15.454C14 15.2401 14 14.9601 14 14.4L14 13.6C14 13.0399 14 12.7599 14.109 12.546C14.2049 12.3578 14.3578 12.2049 14.546 12.109C14.7599 12 15.0399 12 15.6 12H17M17 20V21M17 12V11", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Printer.tsx
import { jsx as jsx384, jsxs as jsxs325 } from "react/jsx-runtime";
function Printer({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs325(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx384("path", { d: "M16.2 7H7.8C6.11984 7 5.27976 7 4.63803 7.32698C4.07354 7.6146 3.6146 8.07354 3.32698 8.63803C3 9.27976 3 10.1198 3 11.8V13.2C3 14.8802 3 15.7202 3.32698 16.362C3.6146 16.9265 4.07354 17.3854 4.63803 17.673C5.27976 18 6.11984 18 7.8 18H8V15H16V18H16.2C17.8802 18 18.7202 18 19.362 17.673C19.9265 17.3854 20.3854 16.9265 20.673 16.362C21 15.7202 21 14.8802 21 13.2V11.8C21 10.1198 21 9.27976 20.673 8.63803C20.3854 8.07354 19.9265 7.6146 19.362 7.32698C18.7202 7 17.8802 7 16.2 7Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx384("path", { d: "M7 15L17 15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx384("path", { d: "M8 15H16V17.8C16 18.9201 16 19.4802 15.782 19.908C15.5903 20.2843 15.2843 20.5903 14.908 20.782C14.4802 21 13.9201 21 12.8 21H11.2C10.0799 21 9.51984 21 9.09202 20.782C8.71569 20.5903 8.40973 20.2843 8.21799 19.908C8 19.4802 8 18.9201 8 17.8V15Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx384("path", { d: "M7 11H8", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx384("path", { d: "M14.8 3H9.2C8.0799 3 7.51984 3 7.09202 3.21799C6.71569 3.40973 6.40973 3.71569 6.21799 4.09202C6 4.51984 6 5.0799 6 6.2V7H18V6.2C18 5.0799 18 4.51984 17.782 4.09202C17.5903 3.71569 17.2843 3.40973 16.908 3.21799C16.4802 3 15.9201 3 14.8 3Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Projector.tsx
import { jsx as jsx385, jsxs as jsxs326 } from "react/jsx-runtime";
function Projector({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs326(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx385("path", { d: "M3 9.8C3 8.11984 3 7.27976 3.32698 6.63803C3.6146 6.07354 4.07354 5.6146 4.63803 5.32698C5.27976 5 6.11984 5 7.8 5H16.2C17.8802 5 18.7202 5 19.362 5.32698C19.9265 5.6146 20.3854 6.07354 20.673 6.63803C21 7.27976 21 8.11984 21 9.8V10.2C21 11.8802 21 12.7202 20.673 13.362C20.3854 13.9265 19.9265 14.3854 19.362 14.673C18.7202 15 17.8802 15 16.2 15H7.8C6.11984 15 5.27976 15 4.63803 14.673C4.07354 14.3854 3.6146 13.9265 3.32698 13.362C3 12.7202 3 11.8802 3 10.2V9.8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx385("circle", { cx: "16", cy: "10", r: "1", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx385("path", { d: "M12 15L6 20", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx385("path", { d: "M12 15V20", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx385("path", { d: "M12 15L18 20", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Puzzle.tsx
import { jsx as jsx386 } from "react/jsx-runtime";
function Puzzle({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx386(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx386("path", { d: "M12 2.00049C14.1014 2.00049 15.8244 3.62099 15.9874 5.68053C15.9969 5.80127 16.0017 5.86164 16.0246 5.90099C16.0458 5.93751 16.0729 5.96251 16.111 5.98079C16.152 6.00049 16.208 6.00049 16.32 6.00049H19C20.6569 6.00049 22 7.34363 22 9.00049V11.0513C22 11.2844 22 11.4009 21.9628 11.453C21.9266 11.5039 21.887 11.5275 21.825 11.5353C21.7615 11.5433 21.646 11.4811 21.4151 11.3567C20.9938 11.1297 20.5124 11.0005 20 11.0005C18.3431 11.0005 17 12.3436 17 14.0005C17.0003 15.6571 18.3433 17.0005 20 17.0005C20.5125 17.0005 20.9939 16.8705 21.4152 16.6429C21.6459 16.5182 21.7613 16.4559 21.8248 16.4639C21.8868 16.4716 21.9265 16.4953 21.9628 16.5461C22 16.5983 22 16.7148 22 16.9479V19.0005C21.9997 20.6571 20.6567 22.0005 19 22.0005H5C3.34331 22.0005 2.00026 20.6571 2 19.0005V9.00049C2 7.34363 3.34315 6.00049 5 6.00049H7.68C7.79201 6.00049 7.84801 6.00049 7.88904 5.98079C7.92712 5.96251 7.95418 5.93751 7.9754 5.90099C7.99828 5.86164 8.00305 5.80127 8.01261 5.68053C8.17561 3.62099 9.89856 2.00049 12 2.00049Z", strokeWidth, strokeLinejoin: "round", strokeLinecap: "round", stroke: color })
    }
  );
}

// src/icons/QrCode01.tsx
import { jsx as jsx387, jsxs as jsxs327 } from "react/jsx-runtime";
function QrCode01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs327(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx387("path", { d: "M5 1H4.2C3.07989 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.07989 1 4.2V5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx387("path", { d: "M19 1H19.8C20.9201 1 21.4802 1 21.908 1.21799C22.2843 1.40973 22.5903 1.71569 22.782 2.09202C23 2.51984 23 3.07989 23 4.2V5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx387("path", { d: "M23 19V19.8C23 20.9201 23 21.4802 22.782 21.908C22.5903 22.2843 22.2843 22.5903 21.908 22.782C21.4802 23 20.9201 23 19.8 23H19", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx387("path", { d: "M1 19V19.8C1 20.9201 1 21.4802 1.21799 21.908C1.40973 22.2843 1.71569 22.5903 2.09202 22.782C2.51984 23 3.07989 23 4.2 23H5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx387("rect", { x: "5", y: "5", width: "5", height: "5", rx: "1", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx387("rect", { x: "5", y: "14", width: "5", height: "5", rx: "1", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx387("rect", { x: "14", y: "5", width: "5", height: "5", rx: "1", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx387("path", { d: "M14.0001 14H14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx387("path", { d: "M14.0001 19H14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx387("path", { d: "M17 17L16 16", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx387("path", { d: "M19.0001 14H19", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx387("path", { d: "M19.0001 19H19", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/QrCode02.tsx
import { jsx as jsx388, jsxs as jsxs328 } from "react/jsx-runtime";
function QrCode02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs328(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx388("rect", { x: "2", y: "2", width: "8", height: "8", rx: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx388("rect", { x: "2", y: "14", width: "8", height: "8", rx: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx388("rect", { x: "14", y: "2", width: "8", height: "8", rx: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx388("path", { d: "M18.0001 18H18", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx388("rect", { x: "5", y: "17", width: "2", height: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx388("rect", { x: "5", y: "5", width: "2", height: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx388("rect", { x: "17", y: "5", width: "2", height: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx388("path", { d: "M14.3711 14.4805H14.6016M14 14H15V15H14V14Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx388("path", { d: "M14.3711 21.4805H14.6016M14 21H15V22H14V21Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx388("path", { d: "M21.3711 14.4805H21.6016M21 14H22V15H21V14Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx388("path", { d: "M21.3711 21.4805H21.6016M21 21H22V22H21V21Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/QuestionMark.tsx
import { jsx as jsx389, jsxs as jsxs329 } from "react/jsx-runtime";
function QuestionMark({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs329(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx389("path", { d: "M7 8.2C7 5.57807 9.25482 3 12 3C14.7452 3 17 5.57807 17 8.2C17 9.52452 16.4246 10.5535 15.5012 11.2475C13.8614 12.48 12 13.9487 12 16", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx389("path", { d: "M12 21H12.0001", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/QuestionMarkInCircle.tsx
import { jsx as jsx390, jsxs as jsxs330 } from "react/jsx-runtime";
function QuestionMarkInCircle({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs330(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx390("circle", { cx: "12", cy: "12", r: "9", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx390("path", { d: "M10 10C10 8.99157 10.9019 8 12 8C13.0981 8 14 8.99157 14 10C14 10.5284 13.7524 10.9345 13.3587 11.2014C12.7056 11.6441 12 12.211 12 13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx390("path", { d: "M12 16H12.0001", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/QuestionMarkInHexagon.tsx
import { jsx as jsx391, jsxs as jsxs331 } from "react/jsx-runtime";
function QuestionMarkInHexagon({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs331(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx391("path", { d: "M9.66891 3.79505C10.5197 3.32237 10.9451 3.08604 11.3956 2.99338C11.7944 2.91138 12.2056 2.91138 12.6044 2.99338C13.0549 3.08604 13.4803 3.32237 14.3311 3.79505L18.5311 6.12838C19.4297 6.62759 19.8789 6.87719 20.2061 7.2322C20.4955 7.54627 20.7146 7.91852 20.8485 8.32405C21 8.78244 21 9.29641 21 10.3243V13.6757C21 14.7036 21 15.2176 20.8485 15.676C20.7146 16.0815 20.4955 16.4537 20.2061 16.7678C19.8789 17.1228 19.4297 17.3724 18.5311 17.8716L14.3311 20.205C13.4803 20.6776 13.0549 20.914 12.6044 21.0066C12.2056 21.0886 11.7944 21.0886 11.3956 21.0066C10.9451 20.914 10.5197 20.6776 9.66891 20.205L5.46891 17.8716C4.57034 17.3724 4.12106 17.1228 3.7939 16.7678C3.50447 16.4537 3.28544 16.0815 3.15145 15.676C3 15.2176 3 14.7036 3 13.6757V10.3243C3 9.29641 3 8.78244 3.15145 8.32405C3.28544 7.91852 3.50447 7.54627 3.7939 7.2322C4.12106 6.87719 4.57034 6.62759 5.46891 6.12838L9.66891 3.79505Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx391("path", { d: "M10 10C10 8.99157 10.9019 8 12 8C13.0981 8 14 8.99157 14 10C14 10.5284 13.7524 10.9345 13.3587 11.2014C12.7056 11.6441 12 12.211 12 13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx391("path", { d: "M12 16H12.0001", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/QuestionMarkInOctagon.tsx
import { jsx as jsx392, jsxs as jsxs332 } from "react/jsx-runtime";
function QuestionMarkInOctagon({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs332(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx392("path", { d: "M6.99411 4.40589C7.51297 3.88703 7.7724 3.62761 8.07514 3.44208C8.34356 3.27759 8.6362 3.15638 8.9423 3.08289C9.28757 3 9.65445 3 10.3882 3H13.6118C14.3455 3 14.7124 3 15.0577 3.08289C15.3638 3.15638 15.6564 3.27759 15.9249 3.44208C16.2276 3.62761 16.487 3.88703 17.0059 4.40589L19.5941 6.99411C20.113 7.51297 20.3724 7.7724 20.5579 8.07515C20.7224 8.34356 20.8436 8.6362 20.9171 8.9423C21 9.28757 21 9.65445 21 10.3882V13.6118C21 14.3455 21 14.7124 20.9171 15.0577C20.8436 15.3638 20.7224 15.6564 20.5579 15.9249C20.3724 16.2276 20.113 16.487 19.5941 17.0059L17.0059 19.5941C16.487 20.113 16.2276 20.3724 15.9249 20.5579C15.6564 20.7224 15.3638 20.8436 15.0577 20.9171C14.7124 21 14.3455 21 13.6118 21H10.3882C9.65445 21 9.28757 21 8.9423 20.9171C8.6362 20.8436 8.34356 20.7224 8.07514 20.5579C7.7724 20.3724 7.51297 20.113 6.99411 19.5941L4.40589 17.0059C3.88703 16.487 3.6276 16.2276 3.44208 15.9249C3.27759 15.6564 3.15638 15.3638 3.08289 15.0577C3 14.7124 3 14.3455 3 13.6118V10.3882C3 9.65445 3 9.28757 3.08289 8.9423C3.15638 8.6362 3.27759 8.34356 3.44208 8.07514C3.6276 7.7724 3.88703 7.51297 4.40589 6.99411L6.99411 4.40589Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx392("path", { d: "M10 10C10 8.99157 10.9019 8 12 8C13.0981 8 14 8.99157 14 10C14 10.5284 13.7524 10.9345 13.3587 11.2014C12.7056 11.6441 12 12.211 12 13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx392("path", { d: "M12 16H12.0001", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/QuestionMarkInSquare.tsx
import { jsx as jsx393, jsxs as jsxs333 } from "react/jsx-runtime";
function QuestionMarkInSquare({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs333(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx393("rect", { x: "3", y: "3", width: "18", height: "18", rx: "3", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx393("path", { d: "M10 10C10 8.99157 10.9019 8 12 8C13.0981 8 14 8.99157 14 10C14 10.5284 13.7524 10.9345 13.3587 11.2014C12.7056 11.6441 12 12.211 12 13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx393("path", { d: "M12 16H12.0001", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Quote.tsx
import { jsx as jsx394, jsxs as jsxs334 } from "react/jsx-runtime";
function Quote({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs334(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx394("path", { d: "M9 12H7V5L3.13176 11.7694C3.04542 11.9205 3 12.0915 3 12.2656V18C3 18.5523 3.44772 19 4 19H9C9.55228 19 10 18.5523 10 18V13C10 12.4477 9.55228 12 9 12Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx394("path", { d: "M20 12H18V5L14.1318 11.7694C14.0454 11.9205 14 12.0915 14 12.2656V18C14 18.5523 14.4477 19 15 19H20C20.5523 19 21 18.5523 21 18V13C21 12.4477 20.5523 12 20 12Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/QuoteBlock.tsx
import { jsx as jsx395, jsxs as jsxs335 } from "react/jsx-runtime";
function QuoteBlock({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs335(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx395("path", { d: "M17 3L21 3", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx395("path", { d: "M17 9L21 9", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx395("path", { d: "M3 15L21 15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx395("path", { d: "M3 21L21 21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx395("path", { d: "M5.66667 7H4.5V4L3.03519 6.92965C3.01205 6.97593 3 7.02697 3 7.07872V8.66677C3 8.85087 3.14924 9.00011 3.33334 9.00011L5.66667 9.00008C5.85076 9.00008 6 8.85084 6 8.66675V7.33333C6 7.14924 5.85076 7 5.66667 7Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx395("path", { d: "M12.6667 7H11.5V4L10.0352 6.92965C10.012 6.97593 10 7.02697 10 7.07872V8.66677C10 8.85087 10.1492 9.00011 10.3333 9.00011L12.6667 9.00008C12.8508 9.00008 13 8.85084 13 8.66675V7.33333C13 7.14924 12.8508 7 12.6667 7Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Receipt01.tsx
import { jsx as jsx396, jsxs as jsxs336 } from "react/jsx-runtime";
function Receipt01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs336(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx396("path", { d: "M4 7.8C4 6.11984 4 5.27976 4.32698 4.63803C4.6146 4.07354 5.07354 3.6146 5.63803 3.32698C6.27976 3 7.11984 3 8.8 3H15.2C16.8802 3 17.7202 3 18.362 3.32698C18.9265 3.6146 19.3854 4.07354 19.673 4.63803C20 5.27976 20 6.11984 20 7.8V21L18 19L16 21L14 19L12 21L10 19L8 21L6 19L4 21V7.8Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx396("path", { d: "M16 15L13 15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx396("path", { d: "M9 15L8 15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx396("circle", { cx: "12", cy: "9", r: "2", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Receipt02.tsx
import { jsx as jsx397, jsxs as jsxs337 } from "react/jsx-runtime";
function Receipt02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs337(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx397("path", { d: "M4 7.8C4 6.11984 4 5.27976 4.32698 4.63803C4.6146 4.07354 5.07354 3.6146 5.63803 3.32698C6.27976 3 7.11984 3 8.8 3H15.2C16.8802 3 17.7202 3 18.362 3.32698C18.9265 3.6146 19.3854 4.07354 19.673 4.63803C20 5.27976 20 6.11984 20 7.8V21L18 19L16 21L14 19L12 21L10 19L8 21L6 19L4 21V7.8Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx397("path", { d: "M16 7L13 7", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx397("path", { d: "M16 15L13 15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx397("path", { d: "M9 7L8 7", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx397("path", { d: "M9 15L8 15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx397("path", { d: "M16 11L13 11", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx397("path", { d: "M9 11L8 11", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ReceiptCheckmark.tsx
import { jsx as jsx398, jsxs as jsxs338 } from "react/jsx-runtime";
function ReceiptCheckmark({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs338(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx398("path", { d: "M4 7.8C4 6.11984 4 5.27976 4.32698 4.63803C4.6146 4.07354 5.07354 3.6146 5.63803 3.32698C6.27976 3 7.11984 3 8.8 3H15.2C16.8802 3 17.7202 3 18.362 3.32698C18.9265 3.6146 19.3854 4.07354 19.673 4.63803C20 5.27976 20 6.11984 20 7.8V21L18 19L16 21L14 19L12 21L10 19L8 21L6 19L4 21V7.8Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx398("path", { d: "M9 11L11 13L15 9", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ReceiptDollar.tsx
import { jsx as jsx399, jsxs as jsxs339 } from "react/jsx-runtime";
function ReceiptDollar({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs339(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx399("path", { d: "M4 7.8C4 6.11984 4 5.27976 4.32698 4.63803C4.6146 4.07354 5.07354 3.6146 5.63803 3.32698C6.27976 3 7.11984 3 8.8 3H15.2C16.8802 3 17.7202 3 18.362 3.32698C18.9265 3.6146 19.3854 4.07354 19.673 4.63803C20 5.27976 20 6.11984 20 7.8V21L18 19L16 21L14 19L12 21L10 19L8 21L6 19L4 21V7.8Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx399("path", { d: "M15 8.6C15 8.15817 14.6418 7.8 14.2 7.8H12M9 13.4C9 13.8418 9.35817 14.2 9.8 14.2H12M12 14.2H13.4C13.9601 14.2 14.2401 14.2 14.454 14.091C14.6422 13.9951 14.7951 13.8422 14.891 13.654C15 13.4401 15 13.1601 15 12.6C15 12.0399 15 11.7599 14.891 11.546C14.7951 11.3578 14.6422 11.2049 14.454 11.109C14.2401 11 13.9601 11 13.4 11H10.6C10.0399 11 9.75992 11 9.54601 10.891C9.35785 10.7951 9.20487 10.6422 9.10899 10.454C9 10.2401 9 9.96005 9 9.4C9 8.83995 9 8.55992 9.10899 8.34601C9.20487 8.15785 9.35785 8.00487 9.54601 7.90899C9.75992 7.8 10.0399 7.8 10.6 7.8H12M12 14.2V15M12 7.8V7", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ReceiptEuro.tsx
import { jsx as jsx400, jsxs as jsxs340 } from "react/jsx-runtime";
function ReceiptEuro({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs340(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx400("path", { d: "M4 7.8C4 6.11984 4 5.27976 4.32698 4.63803C4.6146 4.07354 5.07354 3.6146 5.63803 3.32698C6.27976 3 7.11984 3 8.8 3H15.2C16.8802 3 17.7202 3 18.362 3.32698C18.9265 3.6146 19.3854 4.07354 19.673 4.63803C20 5.27976 20 6.11984 20 7.8V21L18 19L16 21L14 19L12 21L10 19L8 21L6 19L4 21V7.8Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx400("path", { d: "M13.9996 7C12.5859 7.00003 10.1158 7.86875 10.1158 11.0635C10.215 14.5052 12.9811 14.9992 13.9996 14.9992", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx400("path", { d: "M9 11H13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ReceiptRupee.tsx
import { jsx as jsx401, jsxs as jsxs341 } from "react/jsx-runtime";
function ReceiptRupee({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs341(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx401("path", { d: "M4 7.8C4 6.11984 4 5.27976 4.32698 4.63803C4.6146 4.07354 5.07354 3.6146 5.63803 3.32698C6.27976 3 7.11984 3 8.8 3H15.2C16.8802 3 17.7202 3 18.362 3.32698C18.9265 3.6146 19.3854 4.07354 19.673 4.63803C20 5.27976 20 6.11984 20 7.8V21L18 19L16 21L14 19L12 21L10 19L8 21L6 19L4 21V7.8Z", strokeWidth, strokeLinejoin: "round", strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx401("path", { d: "M14.6373 7.0166H9.39072C10.6149 7.01653 13.1216 7.0166 13.1216 10.0092C13.1216 12.4187 11.2561 12.6713 9.39072 12.6713L14.2292 15.45", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ReceiptSterlingPound.tsx
import { jsx as jsx402, jsxs as jsxs342 } from "react/jsx-runtime";
function ReceiptSterlingPound({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs342(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx402("path", { d: "M4 7.8C4 6.11984 4 5.27976 4.32698 4.63803C4.6146 4.07354 5.07354 3.6146 5.63803 3.32698C6.27976 3 7.11984 3 8.8 3H15.2C16.8802 3 17.7202 3 18.362 3.32698C18.9265 3.6146 19.3854 4.07354 19.673 4.63803C20 5.27976 20 6.11984 20 7.8V21L18 19L16 21L14 19L12 21L10 19L8 21L6 19L4 21V7.8Z", strokeWidth, strokeLinejoin: "round", strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx402("path", { d: "M14.0104 7.37633C13.8093 7.24681 13.475 6.98529 12.6563 7.01451C11.7563 7.04664 10.7737 7.72709 10.4709 8.99864C10.1358 10.4064 12.4954 13.5436 9.58607 14.9782H14.3724", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx402("path", { d: "M9.98775 11.4438H13.2094", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ReceiptX.tsx
import { jsx as jsx403, jsxs as jsxs343 } from "react/jsx-runtime";
function ReceiptX({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs343(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx403("path", { d: "M4 7.8C4 6.11984 4 5.27976 4.32698 4.63803C4.6146 4.07354 5.07354 3.6146 5.63803 3.32698C6.27976 3 7.11984 3 8.8 3H15.2C16.8802 3 17.7202 3 18.362 3.32698C18.9265 3.6146 19.3854 4.07354 19.673 4.63803C20 5.27976 20 6.11984 20 7.8V21L18 19L16 21L14 19L12 21L10 19L8 21L6 19L4 21V7.8Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx403("path", { d: "M14 13L10 9M10 13L14 9", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ReceiptYen.tsx
import { jsx as jsx404, jsxs as jsxs344 } from "react/jsx-runtime";
function ReceiptYen({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs344(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx404("path", { d: "M4 7.8C4 6.11984 4 5.27976 4.32698 4.63803C4.6146 4.07354 5.07354 3.6146 5.63803 3.32698C6.27976 3 7.11984 3 8.8 3H15.2C16.8802 3 17.7202 3 18.362 3.32698C18.9265 3.6146 19.3854 4.07354 19.673 4.63803C20 5.27976 20 6.11984 20 7.8V21L18 19L16 21L14 19L12 21L10 19L8 21L6 19L4 21V7.8Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx404("path", { d: "M10 11H14M14.5 7L12 10M12 10L9.5 7M12 10V15M10 14H14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/RecordStart.tsx
import { jsx as jsx405, jsxs as jsxs345 } from "react/jsx-runtime";
function RecordStart({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs345(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx405("circle", { cx: "12", cy: "12", r: "9", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx405("circle", { cx: "12", cy: "12", r: "6", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/RecordStop.tsx
import { jsx as jsx406, jsxs as jsxs346 } from "react/jsx-runtime";
function RecordStop({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs346(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx406("circle", { cx: "12", cy: "12", r: "9", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx406("rect", { x: "9", y: "9", width: "6", height: "6", rx: "1", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Recording.tsx
import { jsx as jsx407, jsxs as jsxs347 } from "react/jsx-runtime";
function Recording({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs347(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx407("path", { d: "M4 9L4 15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx407("path", { d: "M20 9L20 15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx407("path", { d: "M12 3L12 21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx407("path", { d: "M8 6L8 18", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx407("path", { d: "M16 6L16 18", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Redo.tsx
import { jsx as jsx408 } from "react/jsx-runtime";
function Redo({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx408(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx408("path", { d: "M15 19H8.5C5.46243 19 3 16.5376 3 13.5C3 10.4624 5.46243 8 8.5 8H21M17 5L21 8L17 11", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/Refresh.tsx
import { jsx as jsx409 } from "react/jsx-runtime";
function Refresh({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx409(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx409("path", { d: "M20.3072 8.53129C19.7859 7.28427 18.992 6.17957 18 5.29168C16.4077 3.86656 14.3051 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.6315 21 20.4459 17.5015 20.9447 13.003M21.1141 3.6742L20.3072 8.53129L15.4028 7.42802", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/Replay.tsx
import { jsx as jsx410, jsxs as jsxs348 } from "react/jsx-runtime";
function Replay({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs348(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx410("path", { d: "M10.5 14.3355V9.6645C10.5 8.99369 11.2759 8.62076 11.7998 9.03981L14.7191 11.3753C15.1195 11.6956 15.1195 12.3044 14.7191 12.6247L11.7998 14.9602C11.2759 15.3792 10.5 15.0063 10.5 14.3355Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx410("path", { d: "M3.63749 8.53129C4.1588 7.28427 4.95271 6.17957 5.94473 5.29168C7.537 3.86656 9.63967 3 11.9447 3C16.9153 3 20.9447 7.02944 20.9447 12C20.9447 16.9706 16.9153 21 11.9447 21C7.31321 21 3.4988 17.5015 2.99999 13.003M3.23406 6.10275L3.63749 8.53129L6.08972 7.97966", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Restricted.tsx
import { jsx as jsx411, jsxs as jsxs349 } from "react/jsx-runtime";
function Restricted({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs349(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx411("circle", { cx: "12", cy: "12", r: "9", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx411("path", { d: "M16 12H8", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Reviews.tsx
import { jsx as jsx412, jsxs as jsxs350 } from "react/jsx-runtime";
function Reviews({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs350(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx412("path", { d: "M14.8812 7.85755L12.4287 3.77012C12.2345 3.44645 11.7655 3.44645 11.5713 3.77012L9.11879 7.85755C9.04342 7.98317 8.91675 8.06942 8.77225 8.0935L3.95838 8.89581C3.55722 8.96267 3.39945 9.45499 3.68702 9.74256L7.31806 13.3736C7.43224 13.4878 7.48425 13.6501 7.4577 13.8094L6.66881 18.5427C6.60027 18.9539 7.03546 19.2635 7.40143 19.0639L11.7606 16.6861C11.9098 16.6047 12.0902 16.6047 12.2394 16.6861L16.5986 19.0639C16.9645 19.2635 17.3997 18.9539 17.3312 18.5427L16.5423 13.8094C16.5158 13.6501 16.5678 13.4878 16.6819 13.3736L20.313 9.74256C20.6005 9.45499 20.4428 8.96267 20.0416 8.89581L15.2278 8.0935C15.0832 8.06942 14.9566 7.98317 14.8812 7.85755Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx412("path", { d: "M18.5 5.13883L17.5105 4.97391C17.3981 4.95518 17.2995 4.8881 17.2409 4.7904L16.75 3.97217", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx412("path", { d: "M7.25002 3.97217L6.75908 4.7904C6.70045 4.8881 6.60193 4.95518 6.48954 4.97391L5.50002 5.13883", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx412("path", { d: "M3.15828 13.8834L3.79532 14.5938C3.87139 14.6787 3.90643 14.7926 3.89118 14.9055L3.75693 15.8997", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx412("path", { d: "M20.8417 13.8834L20.2047 14.5938C20.1286 14.6787 20.0936 14.7926 20.1088 14.9055L20.2431 15.8997", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx412("path", { d: "M13.0682 21.0035L12.1974 20.6132C12.0935 20.5666 11.9743 20.568 11.8714 20.6169L10.9654 21.0477", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Reward.tsx
import { jsx as jsx413, jsxs as jsxs351 } from "react/jsx-runtime";
function Reward({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs351(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx413("path", { d: "M14.1454 16.9755L18.1905 20.944L18.8301 17.7955L22.0446 17.169L18.0228 13.2194M9.94678 16.9663L5.88979 20.9352L5.24786 17.7984L2.04465 17.1658L6.03533 13.254", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx413("path", { d: "M11.2351 9.2162L11.999 7.66833L12.7629 9.2162M11.999 7.66833V11.6882M13.235 10.744L14.399 9.50177L12.7629 9.2162M12.7629 9.2162L10.5157 12.4683M14.399 9.50177L10.763 10.744M11.999 11.6882L13.4823 12.4683L13.235 10.744M13.235 10.744L9.59903 9.50177M13.4823 12.4683L11.2351 9.2162M10.763 10.744L10.5157 12.4683L11.999 11.6882M11.2351 9.2162L9.59903 9.50177L10.763 10.744", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx413("path", { d: "M10.626 3.45025C11.3967 2.72258 12.6013 2.72258 13.372 3.45025L14.2014 4.23324C14.5022 4.5173 14.8838 4.70105 15.2935 4.75917L16.4227 4.91936C17.4721 5.06824 18.2232 6.01002 18.1348 7.06629L18.0397 8.20287C18.0052 8.6152 18.0995 9.02808 18.3094 9.38461L18.8883 10.3674C19.4262 11.2807 19.1581 12.4551 18.2772 13.0445L17.3293 13.6788C16.9854 13.909 16.7214 14.2401 16.5736 14.6265L16.1661 15.6918C15.7874 16.6818 14.7021 17.2045 13.692 16.8833L12.6051 16.5376C12.2108 16.4122 11.7873 16.4122 11.393 16.5376L10.306 16.8833C9.29593 17.2045 8.21064 16.6818 7.83196 15.6918L7.4245 14.6265C7.27668 14.2401 7.01263 13.909 6.66875 13.6788L5.72085 13.0445C4.83992 12.4551 4.57187 11.2807 5.1098 10.3674L5.68862 9.38461C5.8986 9.02808 5.99284 8.6152 5.95834 8.20287L5.86325 7.06629C5.77487 6.01002 6.52591 5.06824 7.57537 4.91936L8.7046 4.75917C9.11427 4.70105 9.49584 4.5173 9.7967 4.23324L10.626 3.45025Z", strokeWidth, strokeLinejoin: "round", strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Rhombus.tsx
import { jsx as jsx414 } from "react/jsx-runtime";
function Rhombus({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx414(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx414("rect", { x: "12", y: "1.77325", width: "14.4628", height: "14.4628", rx: "3", transform: "rotate(45 12 1.77325)", strokeWidth, stroke: color })
    }
  );
}

// src/icons/Rocket01.tsx
import { jsx as jsx415, jsxs as jsxs352 } from "react/jsx-runtime";
function Rocket01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs352(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx415("path", { d: "M14 19C14 20.1046 12 22 12 22C12 22 10 20.1046 10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19Z", strokeWidth, strokeLinejoin: "round", strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx415("path", { d: "M7.99545 10.4878C7.80576 8.59087 7.71091 7.6424 7.88944 6.75736C8.04748 5.97391 8.36044 5.22994 8.80996 4.56912C9.31777 3.82259 10.0621 3.22713 11.5507 2.03622L12.0001 1.67676L12.4494 2.03622C13.938 3.22713 14.6823 3.82259 15.1902 4.56912C15.6397 5.22994 15.9526 5.97391 16.1107 6.75736C16.2892 7.6424 16.1944 8.59087 16.0047 10.4878L15.6191 14.3434C13.3409 13.2043 10.6593 13.2043 8.38101 14.3434L7.99545 10.4878Z", strokeWidth, strokeLinejoin: "round", strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx415("path", { d: "M8.01911 10.7244L8.38101 14.3434L7.88829 15.0004C7.24288 15.8609 6.92017 16.2912 6.60941 16.3868C6.25029 16.4974 5.85951 16.3973 5.59777 16.1277C5.37129 15.8944 5.29522 15.3619 5.1431 14.2971C5.01796 13.4211 4.95538 12.9831 5.04904 12.605C5.15783 12.1658 5.41235 11.7764 5.77101 11.5006C6.07977 11.2631 6.50606 11.1447 7.35866 10.9078L8.01911 10.7244Z", strokeWidth, strokeLinejoin: "round", strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx415("path", { d: "M15.6191 14.3434L15.981 10.7244L16.6415 10.9078C17.4941 11.1447 17.9204 11.2631 18.2291 11.5006C18.5878 11.7764 18.8423 12.1658 18.9511 12.605C19.0447 12.9831 18.9822 13.4211 18.857 14.2971C18.7049 15.3619 18.6288 15.8944 18.4023 16.1277C18.1406 16.3973 17.7498 16.4974 17.3907 16.3868C17.08 16.2912 16.7572 15.8609 16.1118 15.0004L15.6191 14.3434Z", strokeWidth, strokeLinejoin: "round", strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Rocket02.tsx
import { jsx as jsx416, jsxs as jsxs353 } from "react/jsx-runtime";
function Rocket02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs353(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx416("path", { d: "M8.61371 18.1274C7.83266 18.9085 5.07817 18.8345 5.07817 18.8345C5.07817 18.8345 5.00423 16.08 5.78528 15.299C6.56633 14.5179 7.83266 14.5179 8.61371 15.299C9.39476 16.08 9.39476 17.3464 8.61371 18.1274Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx416("path", { d: "M9.16362 7.07345C6.49227 6.43273 3.91272 7.57611 2.95686 8.22789L5.78529 11.0563L8.17371 11.3217C9.33583 11.4508 10.3756 11.9741 11.1571 12.7556M5.78529 11.0563L8.9055 7.36879C8.99015 7.26875 9.07621 7.1703 9.16362 7.07345M16.8185 14.4806C17.4426 17.5028 16.3227 20.0567 15.6848 20.9558L12.8564 18.1274L12.591 15.739C12.4618 14.5768 11.9386 13.5371 11.1571 12.7556M12.8564 18.1274L16.6903 14.6001C16.7334 14.5605 16.7761 14.5207 16.8185 14.4806M9.16362 7.07345C12.0439 3.88217 16.4003 2.43129 20.6345 3.27814C21.288 7.4166 19.8571 11.6069 16.8185 14.4806M11.1571 12.7556L14.2706 9.6421", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Router.tsx
import { jsx as jsx417, jsxs as jsxs354 } from "react/jsx-runtime";
function Router({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs354(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx417("path", { d: "M3 17C3 16.07 3 15.605 3.10222 15.2235C3.37962 14.1883 4.18827 13.3796 5.22354 13.1022C5.60504 13 6.07003 13 7 13H17C17.93 13 18.395 13 18.7765 13.1022C19.8117 13.3796 20.6204 14.1883 20.8978 15.2235C21 15.605 21 16.07 21 17C21 17.93 21 18.395 20.8978 18.7765C20.6204 19.8117 19.8117 20.6204 18.7765 20.8978C18.395 21 17.93 21 17 21H7C6.07003 21 5.60504 21 5.22354 20.8978C4.18827 20.6204 3.37962 19.8117 3.10222 18.7765C3 18.395 3 17.93 3 17Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx417("path", { d: "M16 17H16.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx417("path", { d: "M16 13L16 11", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx417("path", { d: "M7 17H10", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx417("path", { d: "M12 4C13.2599 3.3508 14.6042 3 16 3C17.3958 3 18.7401 3.3508 20 4", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx417("path", { d: "M14 7.55298C14.6519 7.18891 15.3198 7 16 7C16.6802 7 17.3481 7.18891 18 7.55298", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/RowsThree.tsx
import { jsx as jsx418, jsxs as jsxs355 } from "react/jsx-runtime";
function RowsThree({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs355(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx418("rect", { x: "3", y: "3", width: "18", height: "18", rx: "3", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx418("path", { d: "M3 9L21 9", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx418("path", { d: "M3 15L21 15", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/RowsTwo.tsx
import { jsx as jsx419, jsxs as jsxs356 } from "react/jsx-runtime";
function RowsTwo({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs356(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx419("rect", { x: "3", y: "3", width: "18", height: "18", rx: "3", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx419("path", { d: "M3 12L21 12", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Rss.tsx
import { jsx as jsx420, jsxs as jsxs357 } from "react/jsx-runtime";
function Rss({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs357(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx420("path", { d: "M6 19C6 19.5523 5.55228 20 5 20C4.44772 20 4 19.5523 4 19C4 18.4477 4.44772 18 5 18C5.55228 18 6 18.4477 6 19Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx420("path", { d: "M4 13.083C4.32521 13.0284 4.65929 13 5 13C8.31371 13 11 15.6863 11 19C11 19.3407 10.9716 19.6748 10.917 20", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx420("path", { d: "M4 8.04484C4.32936 8.01516 4.66291 8 5 8C11.0751 8 16 12.9249 16 19C16 19.3371 15.9848 19.6706 15.9552 20", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx420("path", { d: "M4 3.03074C4.33072 3.01035 4.66415 3 5 3C13.8366 3 21 10.1634 21 19C21 19.3359 20.9897 19.6693 20.9693 20", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Safe.tsx
import { jsx as jsx421, jsxs as jsxs358 } from "react/jsx-runtime";
function Safe({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs358(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx421("rect", { x: "3", y: "3", width: "18", height: "16", rx: "3", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx421("circle", { cx: "12", cy: "11", r: "3", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx421("path", { d: "M7 19V21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx421("path", { d: "M17 11H15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx421("path", { d: "M6 7L2 7", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx421("path", { d: "M6 15L2 15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx421("path", { d: "M17 19V21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Sandglass.tsx
import { jsx as jsx422, jsxs as jsxs359 } from "react/jsx-runtime";
function Sandglass({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs359(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx422("path", { d: "M15.6391 3H8.36092C7.12504 3 6.18496 4.10973 6.38813 5.3288L6.85755 8.14533C6.94844 8.69062 7.26097 9.17398 7.72094 9.48063L9.5547 10.7031C9.8329 10.8886 10 11.2008 10 11.5352V12.4648C10 12.7992 9.8329 13.1114 9.5547 13.2969L7.72094 14.5194C7.26097 14.826 6.94844 15.3094 6.85755 15.8547L6.38813 18.6712C6.18496 19.8903 7.12504 21 8.36092 21H15.6391C16.875 21 17.815 19.8903 17.6119 18.6712L17.1424 15.8547C17.0516 15.3094 16.739 14.826 16.2791 14.5194L14.4453 13.2969C14.1671 13.1114 14 12.7992 14 12.4648V11.5352C14 11.2008 14.1671 10.8886 14.4453 10.7031L16.2791 9.48063C16.739 9.17398 17.0516 8.69062 17.1424 8.14533L17.6119 5.3288C17.815 4.10973 16.875 3 15.6391 3Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx422("path", { d: "M11 17H13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Save.tsx
import { jsx as jsx423, jsxs as jsxs360 } from "react/jsx-runtime";
function Save({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs360(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx423("path", { d: "M3 11C3 10.266 3 9.51917 3 8.79997C3 7.11983 3 6.27976 3.32698 5.63803C3.6146 5.07354 4.07354 4.6146 4.63803 4.32698C5.27976 4 6.11984 4 7.8 4H16.2C17.8802 4 18.7202 4 19.362 4.32698C19.9265 4.6146 20.3854 5.07354 20.673 5.63803C21 6.27976 21 7.11984 21 8.8V11", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx423("path", { d: "M12 11V20M16 16L12 20L8 16", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Scale.tsx
import { jsx as jsx424, jsxs as jsxs361 } from "react/jsx-runtime";
function Scale({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs361(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx424("path", { d: "M17 21H7", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx424("path", { d: "M12 21L12 7", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx424("path", { d: "M6 5C8 5.5 8.5 5.5 10 5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx424("path", { d: "M18 5C16 5.5 15.5 5.5 14 5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx424("path", { d: "M6 16C7.65685 16 9 14.6569 9 13L6 5L3 13C3 14.6569 4.34315 16 6 16Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx424("path", { d: "M18 16C19.6569 16 21 14.6569 21 13L18 5L15 13C15 14.6569 16.3431 16 18 16Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx424("circle", { cx: "12", cy: "5", r: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Scan.tsx
import { jsx as jsx425, jsxs as jsxs362 } from "react/jsx-runtime";
function Scan({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs362(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx425("path", { d: "M6 3C5.06812 3 4.60218 3 4.23463 3.15224C3.74458 3.35523 3.35523 3.74458 3.15224 4.23463C3 4.60218 3 5.06812 3 6", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx425("path", { d: "M18 3C18.9319 3 19.3978 3 19.7654 3.15224C20.2554 3.35523 20.6448 3.74458 20.8478 4.23463C21 4.60218 21 5.06812 21 6", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx425("path", { d: "M21 18C21 18.9319 21 19.3978 20.8478 19.7654C20.6448 20.2554 20.2554 20.6448 19.7654 20.8478C19.3978 21 18.9319 21 18 21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx425("path", { d: "M3 18C3 18.9319 3 19.3978 3.15224 19.7654C3.35523 20.2554 3.74458 20.6448 4.23463 20.8478C4.60218 21 5.06812 21 6 21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx425("path", { d: "M3 12L21 12", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Scissors.tsx
import { jsx as jsx426 } from "react/jsx-runtime";
function Scissors({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx426(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx426("path", { d: "M8.59865 19.5C8.85391 19.0587 9 18.5464 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21C7.11042 21 8.07994 20.3967 8.59865 19.5ZM8.59865 19.5L18 3M15.4013 19.5C15.1461 19.0587 15 18.5464 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18C21 19.6569 19.6569 21 18 21C16.8896 21 15.9201 20.3967 15.4013 19.5ZM15.4013 19.5L6 3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/SdCard.tsx
import { jsx as jsx427, jsxs as jsxs363 } from "react/jsx-runtime";
function SdCard({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs363(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx427("path", { d: "M6.59411 4.40589C7.11297 3.88703 7.3724 3.6276 7.67515 3.44208C7.94356 3.27759 8.2362 3.15638 8.5423 3.08289C8.88757 3 9.25445 3 9.98823 3H15.2C16.8802 3 17.7202 3 18.362 3.32698C18.9265 3.6146 19.3854 4.07354 19.673 4.63803C20 5.27976 20 6.11984 20 7.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V8.98822C4 8.25445 4 7.88757 4.08289 7.5423C4.15638 7.2362 4.27759 6.94356 4.44208 6.67515C4.6276 6.3724 4.88703 6.11297 5.40589 5.59411L6.59411 4.40589Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx427("path", { d: "M16 7V9", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx427("path", { d: "M12 7V9", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Search01.tsx
import { jsx as jsx428, jsxs as jsxs364 } from "react/jsx-runtime";
function Search01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs364(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx428("circle", { cx: "9", cy: "9", r: "6", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx428("path", { d: "M21 21L13.2441 13.2441", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Search02.tsx
import { jsx as jsx429, jsxs as jsxs365 } from "react/jsx-runtime";
function Search02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs365(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx429("circle", { cx: "11", cy: "11", r: "8", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx429("path", { d: "M21 21.0001L16.6691 16.6692", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Send.tsx
import { jsx as jsx430, jsxs as jsxs366 } from "react/jsx-runtime";
function Send({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs366(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx430("path", { d: "M3 3L21 12L3 21L5 12L3 3Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx430("path", { d: "M5 12L9 12", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Server.tsx
import { jsx as jsx431, jsxs as jsxs367 } from "react/jsx-runtime";
function Server({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs367(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx431("path", { d: "M3 8.8C3 7.11984 3 6.27976 3.32698 5.63803C3.6146 5.07354 4.07354 4.6146 4.63803 4.32698C5.27976 4 6.11984 4 7.8 4H16.2C17.8802 4 18.7202 4 19.362 4.32698C19.9265 4.6146 20.3854 5.07354 20.673 5.63803C21 6.27976 21 7.11984 21 8.8V12H3V8.8Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx431("path", { d: "M11 8L17 8", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx431("path", { d: "M7.0001 8H7", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx431("path", { d: "M3 12H21V15.2C21 16.8802 21 17.7202 20.673 18.362C20.3854 18.9265 19.9265 19.3854 19.362 19.673C18.7202 20 17.8802 20 16.2 20H7.8C6.11984 20 5.27976 20 4.63803 19.673C4.07354 19.3854 3.6146 18.9265 3.32698 18.362C3 17.7202 3 16.8802 3 15.2V12Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx431("path", { d: "M11 16L17 16", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx431("path", { d: "M7.0001 16H7", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Settings.tsx
import { jsx as jsx432, jsxs as jsxs368 } from "react/jsx-runtime";
function Settings({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs368(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx432("path", { d: "M9.89105 4.78444C10.1677 4.2945 10.306 4.04953 10.4316 3.90119C11.2525 2.9317 12.7475 2.9317 13.5684 3.90119C13.694 4.04953 13.8323 4.2945 14.1089 4.78444C14.2292 4.99741 14.2893 5.10389 14.3544 5.19456C14.7619 5.76241 15.4301 6.08421 16.1282 6.04878C16.2396 6.04312 16.3604 6.02373 16.6018 5.98496C17.1574 5.89576 17.4351 5.85116 17.6294 5.85687C18.8992 5.89419 19.8314 7.06308 19.5852 8.30933C19.5475 8.50002 19.4422 8.76089 19.2316 9.28263C19.1401 9.50942 19.0943 9.62282 19.064 9.73023C18.8742 10.4029 19.0392 11.126 19.5021 11.6496C19.576 11.7333 19.6665 11.8156 19.8473 11.9802C20.2634 12.3589 20.4715 12.5482 20.5882 12.7037C21.3507 13.7197 21.018 15.1773 19.8902 15.7619C19.7176 15.8513 19.448 15.9316 18.9088 16.0923C18.6744 16.1621 18.5572 16.1971 18.4543 16.2403C17.81 16.5113 17.3476 17.0911 17.2268 17.7796C17.2075 17.8895 17.1996 18.0115 17.1836 18.2556C17.147 18.817 17.1287 19.0977 17.0799 19.2859C16.7609 20.5155 15.4139 21.1642 14.2537 20.6469C14.0762 20.5677 13.8453 20.407 13.3835 20.0856C13.1827 19.9459 13.0823 19.8761 12.9844 19.8226C12.3708 19.4878 11.6292 19.4878 11.0156 19.8226C10.9176 19.8761 10.8173 19.9459 10.6165 20.0856C10.1547 20.407 9.92383 20.5677 9.7463 20.6469C8.58607 21.1642 7.23907 20.5155 6.92013 19.2859C6.87133 19.0977 6.853 18.817 6.81635 18.2556C6.80042 18.0115 6.79246 17.8895 6.77317 17.7796C6.65238 17.0911 6.18996 16.5113 5.54566 16.2403C5.44278 16.1971 5.32559 16.1621 5.09121 16.0923C4.552 15.9316 4.28239 15.8513 4.10982 15.7619C2.98198 15.1773 2.6493 13.7197 3.41182 12.7037C3.52849 12.5482 3.73654 12.3589 4.15264 11.9802C4.33351 11.8156 4.42395 11.7333 4.49787 11.6496C4.9608 11.126 5.12583 10.4029 4.93596 9.73023C4.90564 9.62282 4.85987 9.50942 4.76834 9.28263C4.55776 8.76089 4.45247 8.50002 4.4148 8.30933C4.16863 7.06308 5.10079 5.89419 6.37058 5.85687C6.56486 5.85116 6.84262 5.89576 7.39814 5.98496C7.63962 6.02373 7.76036 6.04312 7.87182 6.04878C8.56988 6.08421 9.23808 5.76241 9.64562 5.19456C9.71069 5.10389 9.77081 4.99741 9.89105 4.78444Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx432("circle", { cx: "12", cy: "12", r: "3", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Shapes.tsx
import { jsx as jsx433, jsxs as jsxs369 } from "react/jsx-runtime";
function Shapes({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs369(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx433("path", { d: "M12.8269 14H9.77895C8.80622 14 8.31986 14 7.94833 13.8107C7.62152 13.6442 7.35582 13.3785 7.1893 13.0517C7 12.6801 7 12.1938 7 11.2211V5.77895C7 4.80622 7 4.31986 7.1893 3.94833C7.35582 3.62152 7.62152 3.35582 7.94833 3.1893C8.31986 3 8.80622 3 9.77895 3H15.2211C16.1938 3 16.6801 3 17.0517 3.1893C17.3785 3.35582 17.6442 3.62152 17.8107 3.94833C18 4.31986 18 4.80622 18 5.77895V13.2706C18 13.6734 17.6734 14 17.2706 14", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx433("path", { d: "M7 9.34143C4.66962 10.1651 3 12.3876 3 15C3 18.3137 5.68629 21 9 21C9.34071 21 9.67479 20.9716 10 20.9171", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx433("path", { d: "M14.2625 11.4861C14.5302 11.0021 14.664 10.7601 14.8399 10.6811C14.9931 10.6121 15.1687 10.6132 15.3211 10.6839C15.4959 10.7651 15.6269 11.0086 15.8889 11.4958L20.2659 19.635C20.5079 20.085 20.6289 20.31 20.6057 20.4937C20.5854 20.6541 20.499 20.7987 20.3673 20.8925C20.2165 21 19.961 21 19.4501 21H10.571C10.054 21 9.7955 21 9.64414 20.8913C9.51207 20.7964 9.42597 20.6504 9.4069 20.489C9.38504 20.3039 9.51016 20.0777 9.76038 19.6253L14.2625 11.4861Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Share.tsx
import { jsx as jsx434, jsxs as jsxs370 } from "react/jsx-runtime";
function Share({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs370(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx434("path", { d: "M9.875 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V9.75", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx434("path", { d: "M16 3H21C15.408 6.70482 12.4512 9.87519 10 14.5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Shield.tsx
import { jsx as jsx435 } from "react/jsx-runtime";
function Shield({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx435(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx435("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M20.8159 8.20153C20.8838 7.77819 20.9178 7.56651 20.8715 7.37264C20.831 7.20323 20.7442 7.04301 20.6243 6.91666C20.4871 6.77205 20.288 6.68355 19.8897 6.50654L12.6498 3.28881C12.4105 3.18246 12.2909 3.12928 12.1665 3.10828C12.0563 3.08966 11.9437 3.08966 11.8335 3.10828C11.7091 3.12928 11.5895 3.18246 11.3502 3.28881L4.11028 6.50654C3.71202 6.68355 3.51289 6.77205 3.3757 6.91666C3.25583 7.04301 3.16898 7.20323 3.12853 7.37264C3.08223 7.56651 3.11619 7.77819 3.18411 8.20153C4.10902 13.9662 5.31878 16.9861 11.2089 20.536C11.4859 20.703 11.6244 20.7865 11.7847 20.8218C11.9204 20.8517 12.0796 20.8517 12.2153 20.8218C12.3756 20.7865 12.5141 20.703 12.7911 20.536C18.6812 16.9861 19.891 13.9662 20.8159 8.20153Z", strokeWidth, strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/ShieldOff.tsx
import { jsx as jsx436, jsxs as jsxs371 } from "react/jsx-runtime";
function ShieldOff({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs371(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx436("path", { d: "M17.1775 17.1564C16.104 18.3011 14.691 19.391 12.7911 20.5361C12.5141 20.703 12.3756 20.7865 12.2153 20.8218C12.0796 20.8517 11.9204 20.8517 11.7847 20.8218C11.6244 20.7865 11.4859 20.703 11.2089 20.5361C5.31878 16.9862 4.10902 13.9662 3.18411 8.20157C3.11619 7.77823 3.08223 7.56656 3.12852 7.37268C3.16898 7.20327 3.25583 7.04306 3.3757 6.9167C3.51289 6.77209 3.71202 6.68359 4.11027 6.50659L5.79577 5.75748M9.20175 4.24371L11.3502 3.28885C11.5895 3.1825 11.7091 3.12932 11.8335 3.10832C11.9437 3.08971 12.0563 3.08971 12.1665 3.10832C12.2909 3.12932 12.4105 3.1825 12.6498 3.28885L19.8897 6.50659C20.288 6.68359 20.4871 6.77209 20.6243 6.9167C20.7442 7.04306 20.831 7.20327 20.8715 7.37268C20.9178 7.56656 20.8838 7.77823 20.8159 8.20157C20.428 10.6193 19.9899 12.5543 19.1775 14.2481", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx436("path", { d: "M3 3L21 21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Ship.tsx
import { jsx as jsx437, jsxs as jsxs372 } from "react/jsx-runtime";
function Ship({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs372(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx437("path", { d: "M6 20L3 15.2857L4 15.1429L11.1515 14.1212C11.7143 14.0408 12.2857 14.0408 12.8485 14.1212L20 15.1429L21 15.2857L18 20M4 15.1429L4.75 11.5714M20 15.1429L19.25 11.5714M19.25 11.5714L18.8337 9.58897C18.6392 8.66301 17.8225 8 16.8764 8H7.12362C6.17747 8 5.36077 8.66301 5.16632 9.58897L4.75 11.5714M19.25 11.5714L16 11M4.75 11.5714L8 11", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx437("path", { d: "M4.63635 21.0001L5.86363 20.182C6.6068 19.6865 7.57499 19.6865 8.31817 20.182C9.06135 20.6774 10.0295 20.6774 10.7727 20.182C11.5159 19.6865 12.4841 19.6865 13.2273 20.182C13.9704 20.6774 14.9386 20.6774 15.6818 20.182C16.425 19.6865 17.3932 19.6865 18.1364 20.182L19.3636 21.0001", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx437("path", { d: "M12 15L12 19", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx437("path", { d: "M12 2L12 4", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx437("path", { d: "M9 8L9 5C9 4.44772 9.44772 4 10 4L14 4C14.5523 4 15 4.44772 15 5L15 8", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ShoppingBag.tsx
import { jsx as jsx438, jsxs as jsxs373 } from "react/jsx-runtime";
function ShoppingBag({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs373(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx438("path", { d: "M4.89505 4.88906C4.95393 3.82923 5.83051 3 6.89197 3H17.108C18.1695 3 19.0461 3.82923 19.1049 4.88906L19.8827 18.8891C19.9464 20.0355 19.034 21 17.8858 21H6.11419C4.96602 21 4.05359 20.0355 4.11727 18.8891L4.89505 4.88906Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx438("path", { d: "M14.8292 7C14.6975 7.37262 14.4943 7.71145 14.2361 8C13.6867 8.61375 12.8884 9 11.9999 9C11.1114 9 10.3132 8.61375 9.76384 8C9.50558 7.71145 9.30236 7.37262 9.17065 7", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ShoppingBasket.tsx
import { jsx as jsx439, jsxs as jsxs374 } from "react/jsx-runtime";
function ShoppingBasket({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs374(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx439("path", { d: "M6 10H3L5.3971 18.7894C5.75306 20.0945 6.93853 21 8.29139 21H15.7086C17.0615 21 18.2469 20.0945 18.6029 18.7894L21 10H18M6 10H18M6 10L7.37833 5.17584C7.7463 3.88793 8.92346 3 10.2629 3H12H13.7371C15.0765 3 16.2537 3.88793 16.6217 5.17584L18 10", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx439("path", { d: "M11 4H13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx439("path", { d: "M13 15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15C11 14.4477 11.4477 14 12 14C12.5523 14 13 14.4477 13 15Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/ShoppingCart.tsx
import { jsx as jsx440, jsxs as jsxs375 } from "react/jsx-runtime";
function ShoppingCart({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs375(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx440("path", { d: "M10.6444 20.5H10.3456M11 20.5C11 20.7761 10.7761 21 10.5 21C10.2239 21 10 20.7761 10 20.5C10 20.2239 10.2239 20 10.5 20C10.7761 20 11 20.2239 11 20.5Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx440("path", { d: "M16.6444 20.5H16.3456M17 20.5C17 20.7761 16.7761 21 16.5 21C16.2239 21 16 20.7761 16 20.5C16 20.2239 16.2239 20 16.5 20C16.7761 20 17 20.2239 17 20.5Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx440("path", { d: "M2.00001 2L3.68265 3.00959C4.19969 3.31981 4.54918 3.84675 4.63384 4.44375L4.85455 6M4.85455 6L5.59396 12.4552C5.82532 14.475 7.53496 16 9.56797 16H16.3801C18.4351 16 20.1557 14.4428 20.3602 12.398L20.7801 8.19901C20.8978 7.02164 19.9733 6 18.79 6H4.85455Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ShoppingCartDiscount.tsx
import { jsx as jsx441, jsxs as jsxs376 } from "react/jsx-runtime";
function ShoppingCartDiscount({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs376(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx441("path", { d: "M15 7L11 11", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx441("path", { d: "M10 6H10.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx441("path", { d: "M16 12H16.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx441("path", { d: "M10.6444 20.5H10.3456M11 20.5C11 20.7761 10.7761 21 10.5 21C10.2239 21 10 20.7761 10 20.5C10 20.2239 10.2239 20 10.5 20C10.7761 20 11 20.2239 11 20.5Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx441("path", { d: "M16.6444 20.5H16.3456M17 20.5C17 20.7761 16.7761 21 16.5 21C16.2239 21 16 20.7761 16 20.5C16 20.2239 16.2239 20 16.5 20C16.7761 20 17 20.2239 17 20.5Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx441("path", { d: "M2.00001 2L3.68265 3.00959C4.19969 3.31981 4.54918 3.84675 4.63384 4.44375L4.85455 6L5.59396 12.4552C5.82532 14.475 7.53496 16 9.56797 16H16.3801C18.4351 16 20.1557 14.4428 20.3602 12.398L21 6", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ShoppingCartMinus.tsx
import { jsx as jsx442, jsxs as jsxs377 } from "react/jsx-runtime";
function ShoppingCartMinus({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs377(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx442("path", { d: "M10.6444 20.5H10.3456M11 20.5C11 20.7761 10.7761 21 10.5 21C10.2239 21 10 20.7761 10 20.5C10 20.2239 10.2239 20 10.5 20C10.7761 20 11 20.2239 11 20.5Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx442("path", { d: "M16.6444 20.5H16.3456M17 20.5C17 20.7761 16.7761 21 16.5 21C16.2239 21 16 20.7761 16 20.5C16 20.2239 16.2239 20 16.5 20C16.7761 20 17 20.2239 17 20.5Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx442("path", { d: "M2.00001 2L3.68265 3.00959C4.19969 3.31981 4.54918 3.84675 4.63384 4.44375L4.85455 6L5.59396 12.4552C5.82532 14.475 7.53496 16 9.56797 16H16.3801C18.4351 16 20.1557 14.4428 20.3602 12.398L21 6", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx442("path", { d: "M16 10H10", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ShoppingCartPlus.tsx
import { jsx as jsx443, jsxs as jsxs378 } from "react/jsx-runtime";
function ShoppingCartPlus({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs378(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx443("path", { d: "M16 9H10M13 6L13 12", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx443("path", { d: "M10.6444 20.5H10.3456M11 20.5C11 20.7761 10.7761 21 10.5 21C10.2239 21 10 20.7761 10 20.5C10 20.2239 10.2239 20 10.5 20C10.7761 20 11 20.2239 11 20.5Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx443("path", { d: "M16.6444 20.5H16.3456M17 20.5C17 20.7761 16.7761 21 16.5 21C16.2239 21 16 20.7761 16 20.5C16 20.2239 16.2239 20 16.5 20C16.7761 20 17 20.2239 17 20.5Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx443("path", { d: "M2.00001 2L3.68265 3.00959C4.19969 3.31981 4.54918 3.84675 4.63384 4.44375L4.85455 6L5.59396 12.4552C5.82532 14.475 7.53496 16 9.56797 16H16.3801C18.4351 16 20.1557 14.4428 20.3602 12.398L21 6", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ShoppingCartUp.tsx
import { jsx as jsx444, jsxs as jsxs379 } from "react/jsx-runtime";
function ShoppingCartUp({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs379(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx444("path", { d: "M13 12L13 7M10.5 9.5L13 7L15.5 9.5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx444("path", { d: "M10.6444 20.5H10.3456M11 20.5C11 20.7761 10.7761 21 10.5 21C10.2239 21 10 20.7761 10 20.5C10 20.2239 10.2239 20 10.5 20C10.7761 20 11 20.2239 11 20.5Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx444("path", { d: "M16.6444 20.5H16.3456M17 20.5C17 20.7761 16.7761 21 16.5 21C16.2239 21 16 20.7761 16 20.5C16 20.2239 16.2239 20 16.5 20C16.7761 20 17 20.2239 17 20.5Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx444("path", { d: "M2.00001 2L3.68265 3.00959C4.19969 3.31981 4.54918 3.84675 4.63384 4.44375L4.85455 6L5.59396 12.4552C5.82532 14.475 7.53496 16 9.56797 16H16.3801C18.4351 16 20.1557 14.4428 20.3602 12.398L21 6", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ShoppingCartX.tsx
import { jsx as jsx445, jsxs as jsxs380 } from "react/jsx-runtime";
function ShoppingCartX({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs380(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx445("path", { d: "M15 11L11 7M11 11L15 7", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx445("path", { d: "M10.6444 20.5H10.3456M11 20.5C11 20.7761 10.7761 21 10.5 21C10.2239 21 10 20.7761 10 20.5C10 20.2239 10.2239 20 10.5 20C10.7761 20 11 20.2239 11 20.5Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx445("path", { d: "M16.6444 20.5H16.3456M17 20.5C17 20.7761 16.7761 21 16.5 21C16.2239 21 16 20.7761 16 20.5C16 20.2239 16.2239 20 16.5 20C16.7761 20 17 20.2239 17 20.5Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx445("path", { d: "M2.00001 2L3.68265 3.00959C4.19969 3.31981 4.54918 3.84675 4.63384 4.44375L4.85455 6L5.59396 12.4552C5.82532 14.475 7.53496 16 9.56797 16H16.3801C18.4351 16 20.1557 14.4428 20.3602 12.398L21 6", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Shuffle.tsx
import { jsx as jsx446, jsxs as jsxs381 } from "react/jsx-runtime";
function Shuffle({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs381(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx446("path", { d: "M3 17H6.30143C7.35522 17 8.33174 16.4471 8.87391 15.5435L13.1261 8.45651C13.6683 7.5529 14.6448 7 15.6986 7H21M19 9.5L21 7L19 4.5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx446("path", { d: "M3 7H6.30143C7.35522 7 8.33174 7.5529 8.87391 8.45651L9.1768 8.96134M21 17H15.6986C14.6448 17 13.6683 16.4471 13.1261 15.5435L13 15.3333M19 14.5L21 17L19 19.5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/SidebarLeft.tsx
import { jsx as jsx447, jsxs as jsxs382 } from "react/jsx-runtime";
function SidebarLeft({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs382(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx447("rect", { x: "3", y: "3", width: "18", height: "18", rx: "3", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx447("rect", { x: "7", y: "7", width: "4", height: "10", rx: "1", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/SidebarRight.tsx
import { jsx as jsx448, jsxs as jsxs383 } from "react/jsx-runtime";
function SidebarRight({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs383(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx448("rect", { x: "3", y: "3", width: "18", height: "18", rx: "3", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx448("rect", { x: "13", y: "7", width: "4", height: "10", rx: "1", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Signal.tsx
import { jsx as jsx449, jsxs as jsxs384 } from "react/jsx-runtime";
function Signal({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs384(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx449("path", { d: "M16.5 14C17.1383 12.8069 17.5 11.4454 17.5 10C17.5 8.55459 17.1383 7.1931 16.5 6", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx449("path", { d: "M7.5 14C6.86167 12.8069 6.5 11.4454 6.5 10C6.5 8.55459 6.86167 7.1931 7.5 6", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx449("path", { d: "M20 17C21.2658 14.9808 22 12.5783 22 10C22 7.42174 21.2658 5.01922 20 3", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx449("path", { d: "M4 17C2.73419 14.9808 2 12.5783 2 10C2 7.42174 2.73419 5.01922 4 3", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx449("path", { d: "M12 10V21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx449("path", { d: "M13 10C13 10.5523 12.5523 11 12 11C11.4477 11 11 10.5523 11 10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/SimCard.tsx
import { jsx as jsx450, jsxs as jsxs385 } from "react/jsx-runtime";
function SimCard({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs385(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx450("path", { d: "M6.59411 4.40589C7.11297 3.88703 7.3724 3.6276 7.67515 3.44208C7.94356 3.27759 8.2362 3.15638 8.5423 3.08289C8.88757 3 9.25445 3 9.98823 3H15.2C16.8802 3 17.7202 3 18.362 3.32698C18.9265 3.6146 19.3854 4.07354 19.673 4.63803C20 5.27976 20 6.11984 20 7.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V8.98822C4 8.25445 4 7.88757 4.08289 7.5423C4.15638 7.2362 4.27759 6.94356 4.44208 6.67515C4.6276 6.3724 4.88703 6.11297 5.40589 5.59411L6.59411 4.40589Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx450("path", { d: "M12 13L16 13", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx450("path", { d: "M12 17V9", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx450("rect", { x: "8", y: "9", width: "8", height: "8", rx: "1", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/SkipBackward.tsx
import { jsx as jsx451, jsxs as jsxs386 } from "react/jsx-runtime";
function SkipBackward({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs386(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx451("path", { d: "M11.6314 10.8686L14.2686 8.23137L14.2686 8.23137C15.1254 7.37462 15.5538 6.94624 15.9215 6.9173C16.2407 6.89218 16.5525 7.02136 16.7604 7.26477C17 7.54529 17 8.15111 17 9.36274L17 14.6373C17 15.8489 17 16.4547 16.7604 16.7352C16.5525 16.9786 16.2407 17.1078 15.9215 17.0827C15.5538 17.0538 15.1254 16.6254 14.2686 15.7686L11.6314 13.1314C11.2354 12.7354 11.0373 12.5373 10.9632 12.309C10.8979 12.1082 10.8979 11.8918 10.9632 11.691C11.0373 11.4627 11.2354 11.2646 11.6314 10.8686Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx451("path", { d: "M7 7L7 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/SkipForward.tsx
import { jsx as jsx452, jsxs as jsxs387 } from "react/jsx-runtime";
function SkipForward({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs387(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx452("path", { d: "M12.3686 10.8686L9.73137 8.23137L9.73137 8.23137C8.87462 7.37462 8.44624 6.94624 8.07846 6.9173C7.75934 6.89218 7.44749 7.02136 7.23959 7.26477C7 7.54529 7 8.15111 7 9.36274L7 14.6373C7 15.8489 7 16.4547 7.23959 16.7352C7.44748 16.9786 7.75934 17.1078 8.07846 17.0827C8.44624 17.0538 8.87462 16.6254 9.73137 15.7686L12.3686 13.1314C12.7646 12.7354 12.9627 12.5373 13.0368 12.309C13.1021 12.1082 13.1021 11.8918 13.0368 11.691C12.9627 11.4627 12.7646 11.2646 12.3686 10.8686Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx452("path", { d: "M17 7L17 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/SlashForward.tsx
import { jsx as jsx453 } from "react/jsx-runtime";
function SlashForward({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx453(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx453("path", { d: "M19 5L5 19", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/Sliders.tsx
import { jsx as jsx454, jsxs as jsxs388 } from "react/jsx-runtime";
function Sliders({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs388(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx454("path", { d: "M5 3V6", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx454("path", { d: "M19 3V6", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx454("path", { d: "M12 3V14", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx454("path", { d: "M5 10L5 21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx454("path", { d: "M19 10L19 21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx454("path", { d: "M12 18L12 21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx454("path", { d: "M7 10H3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx454("path", { d: "M21 10H17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx454("path", { d: "M14 18H10", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Slideshow.tsx
import { jsx as jsx455, jsxs as jsxs389 } from "react/jsx-runtime";
function Slideshow({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs389(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx455("path", { d: "M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V11.2C21 12.8802 21 13.7202 20.673 14.362C20.3854 14.9265 19.9265 15.3854 19.362 15.673C18.7202 16 17.8802 16 16.2 16H7.8C6.11984 16 5.27976 16 4.63803 15.673C4.07354 15.3854 3.6146 14.9265 3.32698 14.362C3 13.7202 3 12.8802 3 11.2V7.8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx455("path", { d: "M15 16H6L15.1495 9.59535C15.4574 9.37984 15.6113 9.27208 15.7796 9.22634C15.9284 9.1859 16.0845 9.18041 16.2357 9.21029C16.4068 9.2441 16.568 9.34078 16.8902 9.53414L20.7755 11.8653", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx455("path", { d: "M9 8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx455("path", { d: "M7.14442 20.5H6.84565M7.5 20.5C7.5 20.7761 7.27614 21 7 21C6.72386 21 6.5 20.7761 6.5 20.5C6.5 20.2239 6.72386 20 7 20C7.27614 20 7.5 20.2239 7.5 20.5Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx455("path", { d: "M12.1444 20.5H11.8456M12.5 20.5C12.5 20.7761 12.2761 21 12 21C11.7239 21 11.5 20.7761 11.5 20.5C11.5 20.2239 11.7239 20 12 20C12.2761 20 12.5 20.2239 12.5 20.5Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx455("path", { d: "M17.1444 20.5H16.8456M17.5 20.5C17.5 20.7761 17.2761 21 17 21C16.7239 21 16.5 20.7761 16.5 20.5C16.5 20.2239 16.7239 20 17 20C17.2761 20 17.5 20.2239 17.5 20.5Z", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Snapchat.tsx
import { jsx as jsx456 } from "react/jsx-runtime";
function Snapchat({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx456(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx456("path", { d: "M17.7006 9.34619V7.75079C17.7006 4.57472 15.1314 2 11.9891 2C8.84679 2 6.29944 4.57472 6.29944 7.75079V9.34619C6.29944 9.36996 6.27679 9.38701 6.25426 9.38022L5.3216 9.09882C4.58734 8.87728 3.82887 9.3632 3.71372 10.1289C3.64161 10.6084 3.84586 11.087 4.2372 11.3677C5.13378 12.0108 5.67903 12.4353 6.08741 12.8586C6.16649 14.5754 2.24201 16.5348 2.0056 17.3711C1.86375 17.9924 4.46431 19.0438 4.46431 19.0438C4.46431 19.0438 4.97421 19.8774 5.08023 20.1096C5.18624 20.3418 7.65262 20.0854 8.41242 20.6926C8.89551 21.0787 10.2102 21.5684 11.1037 21.8739C11.6887 22.0739 12.2929 22.0068 12.8963 21.8739C13.7898 21.5684 15.1045 21.0787 15.5876 20.6926C16.3474 20.0854 18.8138 20.3418 18.9198 20.1096C19.0258 19.8774 19.5357 19.0438 19.5357 19.0438C19.5357 19.0438 22.1362 17.9924 21.9944 17.3711C21.758 16.5348 17.8335 14.5754 17.9126 12.8586C18.321 12.4353 18.8662 12.0108 19.7628 11.3677C20.1541 11.087 20.3584 10.6084 20.2863 10.1289C20.1711 9.3632 19.4127 8.87728 18.6784 9.09882L17.7457 9.38022C17.7232 9.38701 17.7006 9.36996 17.7006 9.34619Z", strokeWidth, strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/Snowflake01.tsx
import { jsx as jsx457, jsxs as jsxs390 } from "react/jsx-runtime";
function Snowflake01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs390(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx457("path", { d: "M11.9989 6V18M11.9989 6L8.99893 3M11.9989 6L14.9989 3M11.9989 18L8.99893 21M11.9989 18L14.9989 21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx457("path", { d: "M17.1951 8.99999L6.80277 15M17.1951 8.99999L18.2932 4.90192M17.1951 8.99999L21.2932 10.0981M6.80277 15L2.70469 13.9019M6.80277 15L5.70469 19.0981", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx457("path", { d: "M17.1951 15L6.80279 8.99999M17.1951 15L21.2932 13.9019M17.1951 15L18.2932 19.0981M6.80279 8.99999L5.70471 4.90191M6.80279 8.99999L2.70471 10.0981", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Snowflake02.tsx
import { jsx as jsx458, jsxs as jsxs391 } from "react/jsx-runtime";
function Snowflake02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs391(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx458("path", { d: "M11.9997 7.5V16.5M11.9997 7.5V3M11.9997 7.5L14.2497 4.5M11.9997 7.5L9.74969 4.5M11.9997 16.5V21M11.9997 16.5L9.74969 19.5M11.9997 16.5L14.2497 19.5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx458("path", { d: "M15.8968 9.75001L8.10259 14.25M15.8968 9.75001L19.7939 7.50001M15.8968 9.75001L19.6199 10.1986M15.8968 9.75001L17.3699 6.30145M8.10259 14.25L4.20547 16.5M8.10259 14.25L4.37951 13.8015M8.10259 14.25L6.62951 17.6986", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx458("path", { d: "M15.8968 14.25L8.10259 9.75001M15.8968 14.25L19.7939 16.5M15.8968 14.25L17.3699 17.6986M15.8968 14.25L19.6199 13.8015M8.10259 9.75001L4.20547 7.50001M8.10259 9.75001L6.62951 6.30145M8.10259 9.75001L4.37951 10.1986", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Snowflake03.tsx
import { jsx as jsx459, jsxs as jsxs392 } from "react/jsx-runtime";
function Snowflake03({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs392(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx459("path", { d: "M11.999 9L6.99902 4M11.999 9L16.999 4M11.999 9V3M11.999 9V15M11.999 15L7 20M11.999 15L17 20M11.999 15V21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx459("path", { d: "M14.9995 11.9995L19.9995 6.99951M14.9995 11.9995L19.9995 16.9995M14.9995 11.9995L20.9995 11.9995M14.9995 11.9995L8.99951 11.9995M8.99951 11.9995L3.99951 7.00049M8.99951 11.9995L3.99951 17.0005M8.99951 11.9995L2.99951 11.9995", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/SocialPost.tsx
import { jsx as jsx460, jsxs as jsxs393 } from "react/jsx-runtime";
function SocialPost({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs393(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx460("path", { d: "M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V16.2C19 17.8802 19 18.7202 18.673 19.362C18.3854 19.9265 17.9265 20.3854 17.362 20.673C16.7202 21 15.8802 21 14.2 21H9.8C8.11984 21 7.27976 21 6.63803 20.673C6.07354 20.3854 5.6146 19.9265 5.32698 19.362C5 18.7202 5 17.8802 5 16.2V7.8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx460("path", { d: "M8 13.5H16", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx460("path", { d: "M8 17H11", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx460("path", { d: "M15 17L16 17", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx460("path", { d: "M16 9V7C16 6.44772 15.5523 6 15 6H9C8.44772 6 8 6.44772 8 7V9C8 9.55228 8.44772 10 9 10H15C15.5523 10 16 9.55228 16 9Z", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Sort.tsx
import { jsx as jsx461, jsxs as jsxs394 } from "react/jsx-runtime";
function Sort({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs394(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx461("path", { d: "M7 6V20M3 16L7 20L11 16", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx461("path", { d: "M17 18L17 4M13 8L17 4L21 8", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Speaker.tsx
import { jsx as jsx462, jsxs as jsxs395 } from "react/jsx-runtime";
function Speaker({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs395(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx462("path", { d: "M5 6C5 4.34315 6.34315 3 8 3H16C17.6569 3 19 4.34315 19 6V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18L5 6Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx462("circle", { cx: "12", cy: "15", r: "2", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx462("path", { d: "M11.5 8H12.5M13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Speedometer.tsx
import { jsx as jsx463, jsxs as jsxs396 } from "react/jsx-runtime";
function Speedometer({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs396(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx463("path", { d: "M12 3V5M18.364 5.63604L16.9497 7.05025M21 12H19M3 12H5M5.63604 5.63604L7.05025 7.05025", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx463("path", { d: "M12 15V10", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx463("path", { d: "M13 15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15C11 14.4477 11.4477 14 12 14C12.5523 14 13 14.4477 13 15Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx463("circle", { cx: "12", cy: "12", r: "9", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/SpellingCheckmark.tsx
import { jsx as jsx464, jsxs as jsxs397 } from "react/jsx-runtime";
function SpellingCheckmark({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs397(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx464("path", { d: "M4 21L7.11111 14M16.8889 14L12 3L7.11111 14M16.8889 14H7.11111M16.8889 14L17.1111 14.5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx464("path", { d: "M15 19L17 21L21 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Square.tsx
import { jsx as jsx465 } from "react/jsx-runtime";
function Square({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx465(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx465("rect", { x: "3", y: "3", width: "18", height: "18", rx: "3", strokeWidth, stroke: color })
    }
  );
}

// src/icons/SquareExclude.tsx
import { jsx as jsx466, jsxs as jsxs398 } from "react/jsx-runtime";
function SquareExclude({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs398(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx466("path", { d: "M16 3H4C3.44772 3 3 3.44772 3 4V16C3 16.5523 3.44772 17 4 17H7V20C7 20.5523 7.44772 21 8 21H20C20.5523 21 21 20.5523 21 20V8C21 7.44772 20.5523 7 20 7H17V4C17 3.44772 16.5523 3 16 3Z", strokeWidth, strokeLinejoin: "round", strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx466("path", { d: "M7 10V8C7 7.44772 7.44772 7 8 7H10", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx466("path", { d: "M14 7H16C16.5523 7 17 7.44772 17 8V10", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx466("path", { d: "M17 14V16C17 16.5523 16.5523 17 16 17H14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx466("path", { d: "M7 14V16C7 16.5523 7.44772 17 8 17H10", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/SquareIntersect.tsx
import { jsx as jsx467, jsxs as jsxs399 } from "react/jsx-runtime";
function SquareIntersect({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs399(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx467("path", { d: "M8 7H16C16.5523 7 17 7.44772 17 8V16C17 16.5523 16.5523 17 16 17H8C7.44772 17 7 16.5523 7 16V8C7 7.44772 7.44772 7 8 7Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx467("path", { d: "M3 9V11", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx467("path", { d: "M3 5V4C3 3.44772 3.44772 3 4 3H5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx467("path", { d: "M3 15V16C3 16.5523 3.44772 17 4 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx467("path", { d: "M9 3H11", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx467("path", { d: "M15 3H16C16.5523 3 17 3.44772 17 4", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx467("path", { d: "M21 15V13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx467("path", { d: "M21 19V20C21 20.5523 20.5523 21 20 21H19", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx467("path", { d: "M21 9V8C21 7.44772 20.5523 7 20 7", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx467("path", { d: "M15 21H13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx467("path", { d: "M9 21H8C7.44772 21 7 20.5523 7 20", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/SquareSubtract.tsx
import { jsx as jsx468, jsxs as jsxs400 } from "react/jsx-runtime";
function SquareSubtract({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs400(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx468("path", { d: "M19 7H20C20.5523 7 21 7.44772 21 8V20C21 20.5523 20.5523 21 20 21H8C7.44772 21 7 20.5523 7 20V18.5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx468("path", { d: "M3 5V4C3 3.44772 3.44772 3 4 3H5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx468("path", { d: "M9 3H11", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx468("path", { d: "M15 3H16C16.5523 3 17 3.44772 17 4V5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx468("path", { d: "M17 9V11", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx468("path", { d: "M17 15V16C17 16.5523 16.5523 17 16 17H15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx468("path", { d: "M11 17H9", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx468("path", { d: "M5 17H4C3.44772 17 3 16.5523 3 16V15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx468("path", { d: "M3 9V11", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/SquareUnion.tsx
import { jsx as jsx469 } from "react/jsx-runtime";
function SquareUnion({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx469(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx469("path", { d: "M16 3H4C3.44772 3 3 3.44772 3 4V16C3 16.5523 3.44772 17 4 17H6C6.55228 17 7 17.4477 7 18V20C7 20.5523 7.44772 21 8 21H20C20.5523 21 21 20.5523 21 20V8C21 7.44772 20.5523 7 20 7H18C17.4477 7 17 6.55228 17 6V4C17 3.44772 16.5523 3 16 3Z", strokeWidth, strokeLinejoin: "round", strokeLinecap: "round", stroke: color })
    }
  );
}

// src/icons/Star.tsx
import { jsx as jsx470 } from "react/jsx-runtime";
function Star({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx470(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx470("path", { d: "M15.0715 8.42443L12.4078 4.06556C12.2214 3.76064 11.7786 3.76064 11.5922 4.06556L8.92848 8.42443C8.85592 8.54317 8.73522 8.62438 8.5979 8.64685L3.3728 9.50186C2.9866 9.56506 2.83593 10.0403 3.11518 10.3145L7.04318 14.171C7.15477 14.2806 7.20569 14.4378 7.17952 14.592L6.32262 19.6399C6.25612 20.0316 6.66904 20.3287 7.01936 20.1411L11.7744 17.5946C11.9153 17.5191 12.0847 17.5191 12.2256 17.5946L16.9806 20.1411C17.331 20.3287 17.7439 20.0317 17.6774 19.6399L16.8205 14.592C16.7943 14.4378 16.8452 14.2806 16.9568 14.171L20.8848 10.3145C21.1641 10.0403 21.0134 9.56506 20.6272 9.50186L15.4021 8.64685C15.2648 8.62438 15.1441 8.54317 15.0715 8.42443Z", strokeWidth, stroke: color })
    }
  );
}

// src/icons/Stars.tsx
import { jsx as jsx471, jsxs as jsxs401 } from "react/jsx-runtime";
function Stars({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs401(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx471("path", { d: "M9.5 9.5L12 3L14.5 9.5L21 12L14.5 14.5L12 21L9.5 14.5L3 12L9.5 9.5Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx471("path", { d: "M17 5H21M19 3L19 7", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx471("path", { d: "M3 19H7M5 17L5 21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Status.tsx
import { jsx as jsx472, jsxs as jsxs402 } from "react/jsx-runtime";
function Status({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs402(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx472("path", { d: "M12 3V6", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx472("path", { d: "M12 18V21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx472("path", { d: "M5.63605 5.63599L7.75737 7.75731", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx472("path", { d: "M16.2426 16.2427L18.3639 18.364", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx472("path", { d: "M18.364 5.63599L16.2426 7.75731", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx472("path", { d: "M7.75739 16.2427L5.63606 18.364", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx472("path", { d: "M21 12L18 12", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx472("path", { d: "M6 12L3 12", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/StickerRound.tsx
import { jsx as jsx473, jsxs as jsxs403 } from "react/jsx-runtime";
function StickerRound({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs403(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx473("path", { d: "M3 13C3 17.4183 6.58172 21 11 21C11.6403 21 12.2544 20.7456 12.7071 20.2929L20.2929 12.7071C20.7456 12.2544 21 11.6403 21 11C21 6.58172 17.4183 3 13 3H12C7.02944 3 3 7.02944 3 12L3 13Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx473("path", { d: "M19.8881 11.4382C14.9916 9.56631 9.56628 14.9916 11.4382 19.8881C11.6666 20.4856 12.4291 20.5709 12.8815 20.1185L20.1185 12.8815C20.5709 12.4291 20.4856 11.6666 19.8881 11.4382Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/StickerSquare.tsx
import { jsx as jsx474, jsxs as jsxs404 } from "react/jsx-runtime";
function StickerSquare({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs404(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx474("path", { d: "M3 13C3 15.8003 3 17.2004 3.54497 18.27C4.02433 19.2108 4.78924 19.9757 5.73005 20.455C6.79961 21 8.19974 21 11 21C11.6403 21 12.2544 20.7456 12.7071 20.2929L20.2929 12.7071C20.7456 12.2544 21 11.6403 21 11C21 8.19974 21 6.79961 20.455 5.73005C19.9757 4.78924 19.2108 4.02433 18.27 3.54497C17.2004 3 15.8003 3 13 3H11C8.19974 3 6.79961 3 5.73005 3.54497C4.78924 4.02433 4.02434 4.78924 3.54497 5.73005C3 6.79961 3 8.19974 3 11L3 13Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx474("path", { d: "M19.8881 11.4382C14.9916 9.56631 9.56628 14.9916 11.4382 19.8881C11.6666 20.4856 12.4291 20.5709 12.8815 20.1185L20.1185 12.8815C20.5709 12.4291 20.4856 11.6666 19.8881 11.4382Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Stopwatch01.tsx
import { jsx as jsx475, jsxs as jsxs405 } from "react/jsx-runtime";
function Stopwatch01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs405(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx475("circle", { cx: "12", cy: "14", r: "7", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx475("path", { d: "M8 3H16", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx475("path", { d: "M12 3L12 7", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx475("path", { d: "M11 12V15H14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Stopwatch02.tsx
import { jsx as jsx476, jsxs as jsxs406 } from "react/jsx-runtime";
function Stopwatch02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs406(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx476("circle", { cx: "12", cy: "14", r: "7", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx476("path", { d: "M12 14L10 12", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx476("path", { d: "M9 3L15 3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx476("path", { d: "M12 3V7", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx476("path", { d: "M5 6L3 8", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx476("path", { d: "M19 6L21 8", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Store.tsx
import { jsx as jsx477, jsxs as jsxs407 } from "react/jsx-runtime";
function Store({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs407(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx477("path", { d: "M5 8V21H19V8", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx477("path", { d: "M3 4C3 3.44772 3.44772 3 4 3H9V5C9 6.65685 7.65685 8 6 8C4.34315 8 3 6.65685 3 5V4Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx477("path", { d: "M9 3H15V5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5V3Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx477("path", { d: "M15 3H20C20.5523 3 21 3.44772 21 4V5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5V3Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx477("path", { d: "M3 21H21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx477("path", { d: "M8 14L16 14", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx477("path", { d: "M9 14H15V21H9V14Z", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/StreamToTv.tsx
import { jsx as jsx478, jsxs as jsxs408 } from "react/jsx-runtime";
function StreamToTv({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs408(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx478("path", { d: "M3 6C3 5.44772 3.44772 5 4 5H16.2C17.8802 5 18.7202 5 19.362 5.32698C19.9265 5.6146 20.3854 6.07354 20.673 6.63803C21 7.27976 21 8.11984 21 9.8V16C21 16.93 21 17.395 20.8978 17.7765C20.6204 18.8117 19.8117 19.6204 18.7765 19.8978C18.395 20 17.93 20 17 20", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx478("path", { d: "M5 19C5 19.5523 4.55228 20 4 20C3.44772 20 3 19.5523 3 19C3 18.4477 3.44772 18 4 18C4.55228 18 5 18.4477 5 19Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx478("path", { d: "M8.89998 20C8.96557 19.6769 9 19.3425 9 19C9 16.2386 6.76142 14 4 14C3.65753 14 3.32311 14.0344 3 14.1", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx478("path", { d: "M12.9451 20C12.9814 19.6717 13 19.338 13 19C13 14.0294 8.97056 10 4 10C3.66199 10 3.32833 10.0186 3 10.0549", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Sun01.tsx
import { jsx as jsx479, jsxs as jsxs409 } from "react/jsx-runtime";
function Sun01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs409(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx479("path", { d: "M11.9996 5.19985V4.3363M16.5277 6.0802L16.8512 5.27954M20.3961 8.59275L20.996 7.97157M7.46839 6.0802L7.14491 5.27954M3.59994 8.59275L3.00008 7.97157", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx479("path", { d: "M12 11C7.36745 11 3.55238 14.5 3.05493 19H7.10002C7.56329 16.7178 9.58105 15 12 15C14.419 15 16.4367 16.7178 16.9 19H20.9451C20.4476 14.5 16.6326 11 12 11Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Sun02.tsx
import { jsx as jsx480, jsxs as jsxs410 } from "react/jsx-runtime";
function Sun02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs410(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx480("circle", { cx: "12", cy: "12", r: "4", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx480("path", { d: "M12 3H12.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx480("path", { d: "M12 21H12.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx480("path", { d: "M7.5 4.20581H7.5001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx480("path", { d: "M7.5 19.7942H7.5001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx480("path", { d: "M16.5 4.20581H16.5001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx480("path", { d: "M16.5 19.7942H16.5001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx480("path", { d: "M19.7939 7.5H19.794", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx480("path", { d: "M19.7939 16.5H19.794", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx480("path", { d: "M21 12H21.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx480("path", { d: "M4.20605 7.5H4.20615", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx480("path", { d: "M4.20605 16.5H4.20615", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx480("path", { d: "M3 12H3.0001", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Support.tsx
import { jsx as jsx481, jsxs as jsxs411 } from "react/jsx-runtime";
function Support({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs411(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx481("circle", { cx: "12", cy: "12", r: "9", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx481("circle", { cx: "12", cy: "12", r: "5", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx481("path", { d: "M18 6L16 8M5.99997 18L7.99997 16", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx481("path", { d: "M6.00003 6L8.00003 8M18 18L16 16", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Tablet.tsx
import { jsx as jsx482, jsxs as jsxs412 } from "react/jsx-runtime";
function Tablet({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs412(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx482("path", { d: "M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx482("path", { d: "M12 18H12.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx482("path", { d: "M3 15L21 15", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Tag.tsx
import { jsx as jsx483, jsxs as jsxs413 } from "react/jsx-runtime";
function Tag({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs413(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx483("path", { d: "M12.8729 4.59966C12.1762 3.90291 11.8278 3.55453 11.4149 3.34069C11.0494 3.15145 10.649 3.03941 10.2384 3.01155C9.77443 2.98007 9.29585 3.09709 8.3387 3.33114L7.16312 3.61859C6.13466 3.87007 5.62043 3.99581 5.20255 4.26199C4.83295 4.49741 4.51942 4.81095 4.28399 5.18054C4.01781 5.59843 3.89207 6.11266 3.64059 7.14111L3.35314 8.31669C3.11909 9.27385 3.00207 9.75243 3.03355 10.2164C3.06141 10.627 3.17345 11.0274 3.36269 11.3929C3.57653 11.8058 3.92491 12.1542 4.62166 12.8509L10.5874 18.8166C11.7754 20.0047 12.3694 20.5987 13.0544 20.8213C13.657 21.017 14.306 21.017 14.9085 20.8213C15.5935 20.5987 16.1875 20.0047 17.3756 18.8166L18.8386 17.3536C20.0267 16.1655 20.6207 15.5715 20.8433 14.8865C21.039 14.284 21.039 13.635 20.8433 13.0324C20.6207 12.3474 20.0267 11.7534 18.8386 10.5654L12.8729 4.59966Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx483("path", { d: "M10.1613 9.05322C10.1613 9.60551 9.71362 10.0532 9.16133 10.0532C8.60905 10.0532 8.16133 9.60551 8.16133 9.05322C8.16133 8.50094 8.60905 8.05322 9.16133 8.05322C9.71362 8.05322 10.1613 8.50094 10.1613 9.05322Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/TagMinus.tsx
import { jsx as jsx484, jsxs as jsxs414 } from "react/jsx-runtime";
function TagMinus({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs414(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx484("path", { d: "M21 14H15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx484("path", { d: "M18.1922 18L17.3756 18.8166C16.1875 20.0047 15.5935 20.5987 14.9085 20.8213C14.306 21.017 13.657 21.017 13.0544 20.8213C12.3694 20.5987 11.7754 20.0047 10.5874 18.8166L4.62166 12.8509C3.92491 12.1542 3.57653 11.8058 3.36269 11.3929C3.17345 11.0274 3.06141 10.627 3.03355 10.2164C3.00207 9.75243 3.11909 9.27385 3.35314 8.31669L3.64059 7.14111C3.89207 6.11266 4.01781 5.59843 4.28399 5.18054C4.51942 4.81095 4.83295 4.49741 5.20255 4.26199C5.62043 3.99581 6.13466 3.87007 7.16312 3.61859L8.3387 3.33114C9.29585 3.09709 9.77443 2.98007 10.2384 3.01155C10.649 3.03941 11.0494 3.15145 11.4149 3.34069C11.8278 3.55453 12.1762 3.90291 12.8729 4.59966L18.2733 10", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx484("path", { d: "M10.1613 9.05322C10.1613 9.60551 9.71362 10.0532 9.16133 10.0532C8.60905 10.0532 8.16133 9.60551 8.16133 9.05322C8.16133 8.50094 8.60905 8.05322 9.16133 8.05322C9.71362 8.05322 10.1613 8.50094 10.1613 9.05322Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/TagPlus.tsx
import { jsx as jsx485, jsxs as jsxs415 } from "react/jsx-runtime";
function TagPlus({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs415(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx485("path", { d: "M16.2733 8L12.8729 4.59966C12.1762 3.90291 11.8278 3.55453 11.4149 3.34069C11.0494 3.15145 10.649 3.03941 10.2384 3.01155C9.77443 2.98007 9.29585 3.09709 8.3387 3.33114L7.16312 3.61859C6.13466 3.87007 5.62043 3.99581 5.20255 4.26199C4.83295 4.49741 4.51942 4.81095 4.28399 5.18054C4.01781 5.59843 3.89207 6.11266 3.64059 7.14111L3.35314 8.31669C3.11909 9.27385 3.00207 9.75243 3.03355 10.2164C3.06141 10.627 3.17345 11.0274 3.36269 11.3929C3.57653 11.8058 3.92491 12.1542 4.62166 12.8509L11.8761 20.1054C13.0389 21.2681 14.9241 21.2681 16.0869 20.1054", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx485("path", { d: "M10.1613 9.05322C10.1613 9.60551 9.71362 10.0532 9.16133 10.0532C8.60905 10.0532 8.16133 9.60551 8.16133 9.05322C8.16133 8.50094 8.60905 8.05322 9.16133 8.05322C9.71362 8.05322 10.1613 8.50094 10.1613 9.05322Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx485("path", { d: "M21 14H15M18 11L18 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Tags.tsx
import { jsx as jsx486, jsxs as jsxs416 } from "react/jsx-runtime";
function Tags({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs416(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx486("path", { d: "M3.14602 6.2583C2.90367 6.63877 2.78919 7.10697 2.56022 8.04335L2.29851 9.11369C2.08541 9.98516 1.97887 10.4209 2.00753 10.8433C2.03289 11.2171 2.1349 11.5817 2.3072 11.9145C2.5019 12.2904 2.81909 12.6076 3.45346 13.242L8.8851 18.6736C9.96679 19.7553 10.5076 20.2962 11.1313 20.4988", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx486("path", { d: "M14.6079 4.81966C13.9735 4.18529 13.6563 3.8681 13.2804 3.67341C12.9476 3.5011 12.583 3.3991 12.2092 3.37373C11.7868 3.34507 11.3511 3.45162 10.4796 3.66471L9.40925 3.92643C8.47286 4.15539 8.00467 4.26988 7.6242 4.51223C7.28769 4.72658 7.00223 5.01204 6.78788 5.34855C6.54553 5.72902 6.43104 6.19721 6.20208 7.1336L5.94036 8.20394C5.72727 9.0754 5.62072 9.51114 5.64938 9.93356C5.67475 10.3074 5.77675 10.672 5.94906 11.0047C6.14375 11.3807 6.46094 11.6979 7.09532 12.3322L12.527 17.7639C13.6086 18.8456 14.1495 19.3864 14.7732 19.5891C15.3217 19.7673 15.9127 19.7673 16.4613 19.5891C17.0849 19.3864 17.6258 18.8456 18.7075 17.7639L20.0395 16.4318C21.1212 15.3501 21.6621 14.8093 21.8647 14.1856C22.043 13.637 22.043 13.0461 21.8647 12.4975C21.6621 11.8738 21.1212 11.333 20.0395 10.2513L14.6079 4.81966Z", strokeWidth, strokeLinejoin: "round", strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx486("path", { d: "M12.364 9.08301C12.364 9.63529 11.9163 10.083 11.364 10.083C10.8118 10.083 10.364 9.63529 10.364 9.08301C10.364 8.53072 10.8118 8.08301 11.364 8.08301C11.9163 8.08301 12.364 8.53072 12.364 9.08301Z", strokeWidth, strokeLinejoin: "round", strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Target.tsx
import { jsx as jsx487, jsxs as jsxs417 } from "react/jsx-runtime";
function Target({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs417(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx487("circle", { cx: "12", cy: "11.9999", r: "1", transform: "rotate(45 12 11.9999)", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx487("path", { d: "M17.8284 6.17157L17.3045 3.55215C17.2262 3.16056 16.7431 3.01428 16.4607 3.29666L14.4821 5.27525C14.3639 5.39346 14.3126 5.56293 14.3454 5.72686L15 9L18.2731 9.65463C18.4371 9.68741 18.6065 9.6361 18.7247 9.51789L20.7033 7.5393C20.9857 7.25692 20.8394 6.77378 20.4478 6.69546L17.8284 6.17157Z", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx487("path", { d: "M15 9L12 12", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx487("path", { d: "M10.5 3.12451C6.24343 3.83863 3 7.54058 3 12.0001C3 16.9706 7.02944 21.0001 12 21.0001C16.4595 21.0001 20.1615 17.7566 20.8756 13.5", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx487("path", { d: "M10.5 7.229C8.47145 7.86614 7 9.76128 7 12.0001C7 14.7615 9.23858 17.0001 12 17.0001C14.2389 17.0001 16.134 15.5286 16.7711 13.5", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Task.tsx
import { jsx as jsx488, jsxs as jsxs418 } from "react/jsx-runtime";
function Task({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs418(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx488("path", { d: "M12 4H21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx488("path", { d: "M12 12H21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx488("path", { d: "M12 20H21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx488("rect", { x: "3", y: "18", width: "4", height: "4", rx: "1", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx488("rect", { x: "3", y: "10", width: "4", height: "4", rx: "1", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx488("path", { d: "M3 4L5 6L8.55556 2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Tax.tsx
import { jsx as jsx489, jsxs as jsxs419 } from "react/jsx-runtime";
function Tax({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs419(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx489("path", { d: "M14 13L10 16", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx489("path", { d: "M9 12H9.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx489("path", { d: "M15 17H15.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx489("path", { d: "M8.14094 8H15.8591C17.2808 8 18.5073 8.99793 18.7964 10.3899L20.2502 17.3899C20.637 19.2524 19.2151 21 17.3129 21H6.6871C4.78491 21 3.36297 19.2524 3.74978 17.3899L5.20363 10.3899C5.49274 8.99793 6.71922 8 8.14094 8Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx489("path", { d: "M14.5 5.5C14.5 6.88071 13.3807 8 12 8C10.6193 8 9.5 6.88071 9.5 5.5C9.5 4.11929 10.6193 3 12 3C13.3807 3 14.5 4.11929 14.5 5.5Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Telescope.tsx
import { jsx as jsx490, jsxs as jsxs420 } from "react/jsx-runtime";
function Telescope({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs420(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx490("path", { d: "M15.209 5.0012L16.7619 10.7968L4.8563 13.0251C4.34268 13.1212 3.84164 12.8057 3.7064 12.301L3.15047 10.2262C3.01523 9.72152 3.29139 9.19775 3.78426 9.0242L15.209 5.0012Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx490("path", { d: "M15.209 5.0012C15.0661 4.46774 15.3826 3.9194 15.9161 3.77646L17.848 3.25882C18.3814 3.11588 18.9298 3.43246 19.0727 3.96593L20.6256 9.76148C20.7686 10.2949 20.452 10.8433 19.9185 10.9862L17.9867 11.5039C17.4532 11.6468 16.9049 11.3302 16.7619 10.7968L15.209 5.0012Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx490("path", { d: "M6 20.9999L10.4827 15.0231M18 20.9999L13.5173 15.0231", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx490("circle", { cx: "12", cy: "13.722", r: "2", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx490("path", { d: "M12 16V20", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Terminal.tsx
import { jsx as jsx491, jsxs as jsxs421 } from "react/jsx-runtime";
function Terminal({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs421(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx491("path", { d: "M21 16.5V7.5C21 6.10218 21 5.40326 20.7716 4.85195C20.4672 4.11687 19.8831 3.53284 19.1481 3.22836C18.5967 3 17.8978 3 16.5 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.5C17.8978 21 18.5967 21 19.1481 20.7716C19.8831 20.4672 20.4672 19.8831 20.7716 19.1481C21 18.5967 21 17.8978 21 16.5Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx491("path", { d: "M8 15L11 12L8 9", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx491("path", { d: "M13 15L16 15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Text.tsx
import { jsx as jsx492 } from "react/jsx-runtime";
function Text({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx492(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx492("path", { d: "M12 4V20M12 4H4V8M12 4H20V8M12 20H9M12 20H15", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/TextAlignCenter.tsx
import { jsx as jsx493, jsxs as jsxs422 } from "react/jsx-runtime";
function TextAlignCenter({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs422(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx493("path", { d: "M4 6L20 6", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx493("path", { d: "M7 10L17 10", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx493("path", { d: "M4 14L20 14", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx493("path", { d: "M7 18H17", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/TextAlignJustify.tsx
import { jsx as jsx494, jsxs as jsxs423 } from "react/jsx-runtime";
function TextAlignJustify({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs423(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx494("path", { d: "M4 6L20 6", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx494("path", { d: "M4 10L20 10", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx494("path", { d: "M4 14L20 14", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx494("path", { d: "M4 18L20 18", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/TextAlignLeft.tsx
import { jsx as jsx495, jsxs as jsxs424 } from "react/jsx-runtime";
function TextAlignLeft({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs424(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx495("path", { d: "M4 6L20 6", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx495("path", { d: "M4 10L16 10", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx495("path", { d: "M4 14L20 14", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx495("path", { d: "M4 18L16 18", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/TextAlignRight.tsx
import { jsx as jsx496, jsxs as jsxs425 } from "react/jsx-runtime";
function TextAlignRight({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs425(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx496("path", { d: "M4 6L20 6", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx496("path", { d: "M8 10L20 10", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx496("path", { d: "M4 14L20 14", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx496("path", { d: "M8 18H20", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/TextFormatBold.tsx
import { jsx as jsx497, jsxs as jsxs426 } from "react/jsx-runtime";
function TextFormatBold({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs426(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx497("path", { d: "M4 4H13C15.2091 4 17 5.79086 17 8C17 10.2091 15.2091 12 13 12H10", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx497("path", { d: "M10 12H16C18.2091 12 20 13.7909 20 16C20 18.2091 18.2091 20 16 20H4", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx497("path", { d: "M10 4V20", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx497("path", { d: "M6 4V20", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/TextFormatItalic.tsx
import { jsx as jsx498 } from "react/jsx-runtime";
function TextFormatItalic({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx498(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx498("path", { d: "M16 4L8 20M16 4H11M16 4H20M8 20H4M8 20H13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/TextFormatStrikethrough.tsx
import { jsx as jsx499, jsxs as jsxs427 } from "react/jsx-runtime";
function TextFormatStrikethrough({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs427(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx499("path", { d: "M9.5 12C7.01472 12 5 10.2091 5 8C5 5.79086 7.01472 4 9.5 4H16C17.6569 4 19 5.19391 19 6.66667M5 17.3333C5 18.8061 6.34315 20 8 20H14.5C16.9853 20 19 18.2091 19 16C19 15.8498 18.9907 15.7015 18.9725 15.5556", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx499("path", { d: "M3 12H21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/TextFormatUnderlined.tsx
import { jsx as jsx500, jsxs as jsxs428 } from "react/jsx-runtime";
function TextFormatUnderlined({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs428(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx500("path", { d: "M6 4V10C6 13.3137 8.68629 16 12 16C15.3137 16 18 13.3137 18 10V4M6 4H8M6 4H4M18 4H20M18 4H16", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx500("path", { d: "M4 20H20", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Theme.tsx
import { jsx as jsx501, jsxs as jsxs429 } from "react/jsx-runtime";
function Theme({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs429(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx501("path", { d: "M14.8996 5.00024H19.0002V9.10083L21.8996 12.0002L19.0002 14.8997V19.0002H14.8996L12.0002 21.8997L9.10074 19.0002H5.00015V14.8997L2.10074 12.0002L5.00015 9.10083V5.00024H9.10074L12.0002 2.10083L14.8996 5.00024Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx501("path", { d: "M9 15V13M15 15V13M15 13V11.4721C15 11.1616 14.9277 10.8554 14.7889 10.5777L14.5528 10.1056C14.214 9.428 13.5215 9 12.7639 9H11.2361C10.4785 9 9.786 9.428 9.44721 10.1056L9.21115 10.5777C9.07229 10.8554 9 11.1616 9 11.4721V13M15 13H9", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Thermometer.tsx
import { jsx as jsx502, jsxs as jsxs430 } from "react/jsx-runtime";
function Thermometer({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs430(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx502("path", { d: "M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx502("path", { d: "M12 21C14.7614 21 17 18.7614 17 16C17 13.9497 15.7659 12.1876 14 11.416V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V11.416C8.2341 12.1876 7 13.9497 7 16C7 18.7614 9.23858 21 12 21Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Ticket.tsx
import { jsx as jsx503, jsxs as jsxs431 } from "react/jsx-runtime";
function Ticket({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs431(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx503("path", { d: "M21 9.17065C19.8348 9.58249 19 10.6937 19 11.9999C19 13.3062 19.8348 14.4174 21 14.8292V17.4C21 17.9601 21 18.2401 20.891 18.454C20.7951 18.6422 20.6422 18.7951 20.454 18.891C20.2401 19 19.9601 19 19.4 19H4.6C4.03995 19 3.75992 19 3.54601 18.891C3.35785 18.7951 3.20487 18.6422 3.10899 18.454C3 18.2401 3 17.9601 3 17.4V14.8292C4.16519 14.4174 5 13.3061 5 11.9999C5 10.6937 4.16519 9.58244 3 9.1706V6.6C3 6.03995 3 5.75992 3.10899 5.54601C3.20487 5.35785 3.35785 5.20487 3.54601 5.10899C3.75992 5 4.03995 5 4.6 5H19.4C19.9601 5 20.2401 5 20.454 5.10899C20.6422 5.20487 20.7951 5.35785 20.891 5.54601C21 5.75992 21 6.03995 21 6.6V9.17065Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx503("path", { d: "M15 5V7", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx503("path", { d: "M15 11V13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx503("path", { d: "M15 17V19", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Tiktok.tsx
import { jsx as jsx504 } from "react/jsx-runtime";
function Tiktok({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx504(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx504("path", { d: "M20 7.47223L19.9838 7.47103C17.7079 7.30798 15.7259 5.56468 15.66 3L12.8251 3.01321C12.8036 6.02932 12.8176 9.04604 12.8106 12.07C12.8036 13.4132 12.8326 14.7486 12.7602 16.0918C12.6819 17.2253 11.6741 18.0956 10.4568 18.0956C6.64445 18.0956 7.20588 12.45 11.1966 13.1436C11.1966 12.0333 11.2401 10.9225 11.2256 9.81222C6.64967 9.81222 5 13.1871 5 15.2069C5 19.21 7.89233 21 10.5171 21C13.4225 20.909 15.6131 18.531 15.7685 15.6355C15.7899 13.4522 15.7829 9.07005 15.7829 9.07005C15.7829 9.07005 18.5218 10.4577 20 10.4961V7.47223Z", strokeWidth, strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/Train.tsx
import { jsx as jsx505, jsxs as jsxs432 } from "react/jsx-runtime";
function Train({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs432(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx505("path", { d: "M4 7.8C4 6.11984 4 5.27976 4.32698 4.63803C4.6146 4.07354 5.07354 3.6146 5.63803 3.32698C6.27976 3 7.11984 3 8.8 3H15.2C16.8802 3 17.7202 3 18.362 3.32698C18.9265 3.6146 19.3854 4.07354 19.673 4.63803C20 5.27976 20 6.11984 20 7.8V14.4C20 14.9601 20 15.2401 19.891 15.454C19.7951 15.6422 19.6422 15.7951 19.454 15.891C19.2401 16 18.9601 16 18.4 16H5.6C5.03995 16 4.75992 16 4.54601 15.891C4.35785 15.7951 4.20487 15.6422 4.10899 15.454C4 15.2401 4 14.9601 4 14.4V7.8Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx505("path", { d: "M4 10H20", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx505("path", { d: "M3 21L8 16H16L21 21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx505("path", { d: "M4 20L20 20", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx505("path", { d: "M8 13H9", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx505("path", { d: "M15 13H16", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Translate.tsx
import { jsx as jsx506, jsxs as jsxs433 } from "react/jsx-runtime";
function Translate({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs433(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx506("path", { d: "M3 6H13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx506("path", { d: "M8 6V3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx506("path", { d: "M11 6C10.9991 11.0972 9.63093 13.8472 4 18.5M5 10L10 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx506("path", { d: "M13 21L14.2 18M14.2 18L17 11L19.8 18L21 21M14.2 18H19.8", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/TrashBin.tsx
import { jsx as jsx507, jsxs as jsxs434 } from "react/jsx-runtime";
function TrashBin({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs434(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx507("path", { d: "M4 7H20L18.3717 16.9734C18.1382 18.4036 18.0214 19.1186 17.6663 19.6554C17.3532 20.1286 16.9124 20.5032 16.395 20.736C15.808 21 15.0835 21 13.6344 21H10.3656C8.91653 21 8.192 21 7.605 20.736C7.08759 20.5032 6.64678 20.1286 6.33372 19.6554C5.97855 19.1186 5.86181 18.4036 5.62832 16.9734L4 7Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx507("path", { d: "M3 7H21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx507("path", { d: "M10 12V16", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx507("path", { d: "M14 12V16", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx507("path", { d: "M7 5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7H7V5Z", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/TrendUp.tsx
import { jsx as jsx508 } from "react/jsx-runtime";
function TrendUp({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx508(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx508("path", { d: "M21 13V7H15M21 7L12 16L8 12L3 17", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/Trending.tsx
import { jsx as jsx509 } from "react/jsx-runtime";
function Trending({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx509(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx509("path", { d: "M10.2217 3C13.4998 4.5 13.5 9 13 12.5C13.9264 12.5 15.9466 10.7143 16.1406 9.16113C18.805 11.9754 18.9783 18.7448 14.1826 20.5498C13.8175 18.5946 12.4393 17.0229 11.4395 16.2617C9.99406 17.8852 9.25596 19.4434 8.91309 20.6592C4.31737 19.2973 4.62463 14.1918 5.58985 11.8184C7.06854 8.18274 9.78633 6.85699 10.2217 3Z", strokeWidth, strokeLinejoin: "round", strokeLinecap: "round", stroke: color })
    }
  );
}

// src/icons/Triangle.tsx
import { jsx as jsx510 } from "react/jsx-runtime";
function Triangle({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx510(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx510("path", { d: "M10.7094 4.68203C11.1733 3.81276 11.4053 3.37812 11.7127 3.23763C11.9804 3.11527 12.2884 3.11706 12.5546 3.24252C12.8603 3.38657 13.0873 3.82387 13.5411 4.69847L20.7874 18.6631C21.188 19.4352 21.3883 19.8212 21.3452 20.1358C21.3076 20.4103 21.1577 20.657 20.9313 20.8169C20.672 21 20.237 21 19.3672 21H4.6676C3.78776 21 3.34785 21 3.08758 20.8149C2.86043 20.6533 2.71104 20.4042 2.67544 20.1277C2.63465 19.8109 2.84179 19.4228 3.25606 18.6466L10.7094 4.68203Z", strokeWidth, strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/Trophy.tsx
import { jsx as jsx511, jsxs as jsxs435 } from "react/jsx-runtime";
function Trophy({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs435(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx511("path", { d: "M7 3.33333C7 3.14924 7.14924 3 7.33333 3H16.6667C16.8508 3 17 3.14924 17 3.33333V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V3.33333Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx511("path", { d: "M4.5 5H7V11L4.09666 10.1895C3.44836 10.0085 3 9.4178 3 8.74471V6.5C3 5.67157 3.67157 5 4.5 5Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx511("path", { d: "M19.5 5H17V11L19.9033 10.1895C20.5516 10.0085 21 9.4178 21 8.74471V6.5C21 5.67157 20.3284 5 19.5 5Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx511("path", { d: "M8 21H16", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx511("path", { d: "M12 16L12 21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Truck.tsx
import { jsx as jsx512, jsxs as jsxs436 } from "react/jsx-runtime";
function Truck({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs436(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx512("circle", { cx: "7", cy: "18", r: "2", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx512("circle", { cx: "18", cy: "18", r: "2", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx512("path", { d: "M14 7V6C14 4.89543 13.1046 4 12 4L4 4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H5M14 7H15.4384C16.3562 7 17.1561 7.62459 17.3787 8.51493L17.8106 10.2425C17.9219 10.6877 18.3219 11 18.7808 11H20C21.1046 11 22 11.8954 22 13V17C22 17.5523 21.5523 18 21 18H20M14 7V18M14 18H16M14 18H9", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Tv.tsx
import { jsx as jsx513, jsxs as jsxs437 } from "react/jsx-runtime";
function Tv({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs437(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx513("rect", { x: "3", y: "4", width: "18", height: "13", rx: "3", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx513("path", { d: "M17 17L19 20", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx513("path", { d: "M7 17L5 20", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx513("path", { d: "M7 9H10.6364", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx513("path", { d: "M8.81824 9V12.6364", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx513("path", { d: "M13.3636 9L15.1818 12.6364L17 9", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Twitch.tsx
import { jsx as jsx514, jsxs as jsxs438 } from "react/jsx-runtime";
function Twitch({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs438(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx514("path", { d: "M18.6667 14L16 18H14L8 20.5V17H4V5.5L7 2H21V10.5L18.6667 14ZM7 2V14H11V16L15 14H18.6667", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx514("path", { d: "M17 6V9", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx514("path", { d: "M13 6V9", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Umbrella.tsx
import { jsx as jsx515, jsxs as jsxs439 } from "react/jsx-runtime";
function Umbrella({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs439(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx515("path", { d: "M12 13V18C12 19.6569 13.3431 21 15 21C16.6569 21 18 19.6569 18 18", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx515("path", { d: "M12 3C6.47715 3 2 7.47715 2 13V13.5C2 12.1193 3.11929 11 4.5 11C5.88071 11 7 12.1193 7 13.5C7 12.1193 8.11929 11 9.5 11C10.8807 11 12 12.1193 12 13.5C12 12.1193 13.1193 11 14.5 11C15.8807 11 17 12.1193 17 13.5C17 12.1193 18.1193 11 19.5 11C20.8807 11 22 12.1193 22 13.5V13C22 7.47715 17.5228 3 12 3Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Undo.tsx
import { jsx as jsx516 } from "react/jsx-runtime";
function Undo({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx516(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx516("path", { d: "M9 19H15.5C18.5376 19 21 16.5376 21 13.5C21 10.4624 18.5376 8 15.5 8H3M7 5L3 8L7 11", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/Ungroup.tsx
import { jsx as jsx517, jsxs as jsxs440 } from "react/jsx-runtime";
function Ungroup({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs440(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx517("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx517("rect", { x: "7", y: "7", width: "6", height: "6", rx: "1", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx517("path", { d: "M17 11V16C17 16.5523 16.5523 17 16 17H11", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Upload.tsx
import { jsx as jsx518, jsxs as jsxs441 } from "react/jsx-runtime";
function Upload({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs441(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx518("path", { d: "M3 13C3 13.734 3 14.4808 3 15.2C3 16.8802 3 17.7202 3.32698 18.362C3.6146 18.9265 4.07354 19.3854 4.63803 19.673C5.27976 20 6.11984 20 7.8 20H16.2C17.8802 20 18.7202 20 19.362 19.673C19.9265 19.3854 20.3854 18.9265 20.673 18.362C21 17.7202 21 16.8802 21 15.2V13", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx518("path", { d: "M12 13V4M16 8L12 4L8 8", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/User01.tsx
import { jsx as jsx519, jsxs as jsxs442 } from "react/jsx-runtime";
function User01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs442(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx519("circle", { cx: "12", cy: "7", r: "4", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx519("path", { d: "M14.1541 15.064C13.4497 15.0218 12.7306 15 12 15C11.2694 15 10.5503 15.0218 9.84592 15.064C2.10302 15.5276 4.2419 21 12 21C19.7581 21 21.897 15.5276 14.1541 15.064Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/User01Minus.tsx
import { jsx as jsx520, jsxs as jsxs443 } from "react/jsx-runtime";
function User01Minus({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs443(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx520("circle", { cx: "11", cy: "7", r: "4", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx520("path", { d: "M11 21C3.2419 21 1.10302 15.5276 8.84592 15.064C9.55031 15.0218 10.2694 15 11 15C11.7306 15 12.4497 15.0218 13.1541 15.064C14.3231 15.134 15.2668 15.3181 16 15.5804", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx520("path", { d: "M15 20H21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/User01Plus.tsx
import { jsx as jsx521, jsxs as jsxs444 } from "react/jsx-runtime";
function User01Plus({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs444(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx521("circle", { cx: "11", cy: "7", r: "4", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx521("path", { d: "M11 15C10.2694 15 9.55031 15.0218 8.84592 15.064C1.10302 15.5276 3.2419 21 11 21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx521("path", { d: "M17 20V14M14 17H20", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/User01QuestionMark.tsx
import { jsx as jsx522, jsxs as jsxs445 } from "react/jsx-runtime";
function User01QuestionMark({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs445(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx522("circle", { cx: "11", cy: "7", r: "4", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx522("path", { d: "M11 15C10.2694 15 9.55031 15.0218 8.84592 15.064C1.10302 15.5276 3.2419 21 11 21", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx522("path", { d: "M16 15C16 13.9916 16.9019 13 18 13C19.0981 13 20 13.9916 20 15C20 15.5284 19.7524 15.9345 19.3587 16.2014C18.7056 16.6441 18 17.211 18 18", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx522("path", { d: "M18 21H18.0001", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/User02.tsx
import { jsx as jsx523, jsxs as jsxs446 } from "react/jsx-runtime";
function User02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs446(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx523("circle", { cx: "12", cy: "7", r: "4", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx523("path", { d: "M19 21C18.5098 17.6077 15.5625 15 12 15C8.43745 15 5.49019 17.6077 5 21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/User03.tsx
import { jsx as jsx524, jsxs as jsxs447 } from "react/jsx-runtime";
function User03({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs447(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx524("circle", { cx: "12", cy: "7", r: "4", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx524("path", { d: "M19 21V18C19 16.3431 17.6569 15 16 15H8C6.34315 15 5 16.3431 5 18V21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/User04.tsx
import { jsx as jsx525, jsxs as jsxs448 } from "react/jsx-runtime";
function User04({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs448(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx525("circle", { cx: "12", cy: "9", r: "5", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx525("path", { d: "M19 20C18.5098 16.6077 15.5625 14 12 14C8.43745 14 5.49019 16.6077 5 20", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/UserAnonymous.tsx
import { jsx as jsx526, jsxs as jsxs449 } from "react/jsx-runtime";
function UserAnonymous({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs449(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx526("path", { d: "M3 12L21 12", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx526("path", { d: "M7.85358 3.43925L5.21937 11.3419C5.11145 11.6657 5.35243 12 5.69371 12H18.3063C18.6476 12 18.8886 11.6657 18.7806 11.3419L16.1464 3.43926C16.0638 3.19139 15.8043 3.04893 15.5508 3.1123L12 4L8.44919 3.1123C8.19573 3.04893 7.9362 3.19139 7.85358 3.43925Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx526("circle", { cx: "7.5", cy: "18.5", r: "2.5", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx526("circle", { cx: "16.5", cy: "18.5", r: "2.5", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx526("path", { d: "M13.8157 18.1424C12.6208 17.8443 11.6557 17.8288 10.5 18.0775", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/UserId.tsx
import { jsx as jsx527, jsxs as jsxs450 } from "react/jsx-runtime";
function UserId({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs450(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx527("rect", { x: "2", y: "5", width: "20", height: "14", rx: "3", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx527("circle", { cx: "8.57143", cy: "10.7143", r: "1.71429", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx527("path", { d: "M11.1429 15C10.9628 13.5462 9.88012 12.4286 8.57143 12.4286C7.26274 12.4286 6.18007 13.5462 6 15", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx527("path", { d: "M15 10H18", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx527("path", { d: "M15 14H18", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/UserInCircle.tsx
import { jsx as jsx528, jsxs as jsxs451 } from "react/jsx-runtime";
function UserInCircle({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs451(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx528("circle", { cx: "12", cy: "12", r: "9", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx528("circle", { cx: "12", cy: "10.5", r: "3.6", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx528("path", { d: "M17.7148 18.7613C16.8814 16.0453 14.6374 14.1 12 14.1C9.36258 14.1 7.11859 16.0453 6.28517 18.7613", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Users01.tsx
import { jsx as jsx529, jsxs as jsxs452 } from "react/jsx-runtime";
function Users01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs452(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx529("circle", { cx: "6.91543", cy: "9.81775", r: "2.81775", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx529("path", { d: "M6.91544 19.7764C1.45973 19.7764 -0.0443909 15.928 5.40063 15.602C5.59881 15.5901 5.79865 15.5806 6 15.5734", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx529("circle", { cx: "16.0274", cy: "7.66638", r: "3.37952", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx529("path", { d: "M17.8079 14.6411C17.1985 14.6047 16.5765 14.5858 15.9444 14.5858C15.3124 14.5858 14.6903 14.6047 14.081 14.6411C7.38272 15.0422 9.23303 19.7763 15.9444 19.7763C22.6558 19.7763 24.5061 15.0422 17.8079 14.6411Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Verified.tsx
import { jsx as jsx530, jsxs as jsxs453 } from "react/jsx-runtime";
function Verified({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs453(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx530("path", { d: "M9.89105 4.61036C10.1677 4.12043 10.306 3.87546 10.4316 3.72712C11.2525 2.75763 12.7475 2.75763 13.5684 3.72712C13.694 3.87546 13.8323 4.12043 14.1089 4.61036C14.2292 4.82333 14.2893 4.92982 14.3544 5.02049C14.7619 5.58834 15.4301 5.91013 16.1282 5.87471C16.2396 5.86905 16.3604 5.84966 16.6018 5.81089C17.1574 5.72168 17.4351 5.67708 17.6294 5.68279C18.8992 5.72012 19.8314 6.889 19.5852 8.13526C19.5475 8.32595 19.4422 8.58682 19.2316 9.10856C19.1401 9.33535 19.0943 9.44875 19.064 9.55616C18.8742 10.2288 19.0392 10.9519 19.5021 11.4756C19.576 11.5592 19.6665 11.6415 19.8473 11.8061C20.2634 12.1848 20.4715 12.3742 20.5882 12.5296C21.3507 13.5457 21.018 15.0032 19.8902 15.5878C19.7176 15.6772 19.448 15.7576 18.9088 15.9182C18.6744 15.9881 18.5572 16.023 18.4543 16.0663C17.81 16.3372 17.3476 16.9171 17.2268 17.6055C17.2075 17.7154 17.1996 17.8375 17.1836 18.0815C17.147 18.6429 17.1287 18.9237 17.0799 19.1118C16.7609 20.3415 15.4139 20.9901 14.2537 20.4728C14.0762 20.3937 13.8453 20.233 13.3835 19.9116C13.1827 19.7719 13.0823 19.702 12.9844 19.6486C12.3708 19.3138 11.6292 19.3138 11.0156 19.6486C10.9176 19.702 10.8173 19.7719 10.6165 19.9116C10.1547 20.233 9.92383 20.3937 9.7463 20.4728C8.58607 20.9901 7.23907 20.3415 6.92013 19.1118C6.87133 18.9237 6.853 18.6429 6.81635 18.0815C6.80042 17.8375 6.79246 17.7154 6.77317 17.6055C6.65238 16.9171 6.18996 16.3372 5.54566 16.0663C5.44278 16.023 5.32559 15.9881 5.09121 15.9182C4.552 15.7576 4.28239 15.6772 4.10982 15.5878C2.98198 15.0032 2.6493 13.5457 3.41182 12.5296C3.52849 12.3742 3.73654 12.1848 4.15264 11.8061C4.33351 11.6415 4.42395 11.5592 4.49787 11.4756C4.9608 10.9519 5.12583 10.2288 4.93596 9.55616C4.90564 9.44875 4.85987 9.33535 4.76834 9.10856C4.55776 8.58682 4.45247 8.32595 4.4148 8.13526C4.16863 6.889 5.10079 5.72012 6.37058 5.68279C6.56486 5.67708 6.84262 5.72168 7.39814 5.81089C7.63962 5.84966 7.76036 5.86905 7.87182 5.87471C8.56988 5.91013 9.23808 5.58834 9.64562 5.02049C9.71069 4.92982 9.77081 4.82333 9.89105 4.61036Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx530("path", { d: "M9 12L11 14L15 10", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Video.tsx
import { jsx as jsx531, jsxs as jsxs454 } from "react/jsx-runtime";
function Video({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs454(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx531("rect", { x: "3", y: "3", width: "18", height: "18", rx: "3", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx531("path", { d: "M10 14.5052V9.49481C10 8.85586 10.7121 8.47474 11.2438 8.82917L15.0015 11.3344C15.4765 11.651 15.4765 12.349 15.0015 12.6656L11.2438 15.1708C10.7121 15.5253 10 15.1441 10 14.5052Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/VideoRecorder.tsx
import { jsx as jsx532 } from "react/jsx-runtime";
function VideoRecorder({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx532(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx532("path", { d: "M16 11.5V7C16 5.89543 15.1046 5 14 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H14C15.1046 19 16 18.1046 16 17V13.5M16 11.5L19.331 8.50207C19.9746 7.9229 21 8.37959 21 9.24536V15.7546C21 16.6204 19.9746 17.0771 19.331 16.4979L16 13.5M16 11.5V13.5", strokeWidth, stroke: color })
    }
  );
}

// src/icons/VideoRecorderOff.tsx
import { jsx as jsx533, jsxs as jsxs455 } from "react/jsx-runtime";
function VideoRecorderOff({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs455(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx533("path", { d: "M16 16V17C16 18.1046 15.1046 19 14 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5M21 16V8.91421C21 8.02331 19.9229 7.57714 19.2929 8.20711L16 11.5V7C16 5.89543 15.1046 5 14 5H10", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx533("path", { d: "M3 3L21 21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Videos.tsx
import { jsx as jsx534, jsxs as jsxs456 } from "react/jsx-runtime";
function Videos({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs456(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx534("path", { d: "M16.711 8L15.7262 4.3246C15.2974 2.72421 13.6524 1.77446 12.052 2.20328L4.32457 4.27384C2.72417 4.70266 1.77442 6.34767 2.20325 7.94807L4.2738 15.6755C4.70262 17.2759 6.34763 18.2256 7.94803 17.7968L8 17.7829", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx534("path", { d: "M19 8H11C9.34315 8 8 9.34315 8 11V19C8 20.6569 9.34315 22 11 22H19C20.6569 22 22 20.6569 22 19V11C22 9.34315 20.6569 8 19 8Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx534("path", { d: "M13 17.3355V12.6645C13 11.9937 13.7759 11.6208 14.2998 12.0398L17.2191 14.3753C17.6195 14.6956 17.6195 15.3044 17.2191 15.6247L14.2998 17.9602C13.7759 18.3792 13 18.0063 13 17.3355Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Vimeo.tsx
import { jsx as jsx535 } from "react/jsx-runtime";
function Vimeo({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx535(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx535("path", { d: "M18.3716 4C15.0279 4 13.4448 8.25207 13.4448 8.25207L13.7036 8.62135C14.0005 8.44663 14.3557 8.25207 14.7666 8.25207C15.2131 8.25207 15.5836 8.57653 15.5836 9.43238C15.5836 10.8497 13.937 14.3331 12.4579 14.3331C11.8009 14.3331 11.5066 13.2852 11.0804 11.3912C10.9357 10.8372 10.682 9.41733 10.3142 7.13665C9.97172 5.0231 9.72811 4.17717 8.51539 4.17717C5.7323 4.17717 3 7.99005 3 7.99005L3.39574 8.80108C3.69263 8.62636 4.04529 8.42924 4.56277 8.42924C5.54968 8.42924 5.64864 9.5072 6.21442 11.5034C6.72431 13.335 7.22661 15.1342 7.74421 16.9982C8.2643 18.8622 9.33237 20 10.6465 20C12.6178 20 14.5155 18.3556 17.0931 15.0743C18.293 13.5621 19.5565 11.531 20.2186 10.1011C20.8883 8.65881 21 7.43111 21 6.86716C21 5.23026 20.3429 4 18.3716 4Z", strokeWidth, strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/Virus.tsx
import { jsx as jsx536, jsxs as jsxs457 } from "react/jsx-runtime";
function Virus({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs457(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx536("circle", { cx: "12", cy: "12", r: "5", strokeWidth, strokeLinejoin: "round", strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx536("path", { d: "M12 3V7M18.364 5.63604L15.5355 8.46447M21 12H17M18.364 18.364L15.5355 15.5355M12 21L12 17M5.63604 18.364L8.46447 15.5355M3 12H7M5.63604 5.63604L8.46447 8.46447", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx536("path", { d: "M10.2474 3.13796C11.2062 2.9335 12.9902 2.97293 13.7526 3.13813M17.0264 4.49405C17.849 5.02745 19.0826 6.31681 19.5048 6.97267M20.861 10.2464C21.0655 11.2053 21.0261 12.9892 20.8609 13.7516M19.5049 17.0255C18.9715 17.848 17.6822 19.0816 17.0263 19.5038M13.7526 20.8601C12.7937 21.0645 11.0097 21.0251 10.2474 20.8599M6.97352 19.504C6.15097 18.9706 4.91737 17.6812 4.49514 17.0253M3.13893 13.7516C2.93447 12.7928 2.9739 11.0088 3.1391 10.2464M4.49502 6.97255C5.02843 6.14999 6.31779 4.9164 6.97365 4.49416", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Voicemail.tsx
import { jsx as jsx537 } from "react/jsx-runtime";
function Voicemail({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx537(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx537("path", { d: "M6.5 16C8.433 16 10 14.433 10 12.5C10 10.567 8.433 9 6.5 9C4.567 9 3 10.567 3 12.5C3 14.433 4.567 16 6.5 16ZM6.5 16H17.5M17.5 16C19.433 16 21 14.433 21 12.5C21 10.567 19.433 9 17.5 9C15.567 9 14 10.567 14 12.5C14 14.433 15.567 16 17.5 16Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/VolumeDown.tsx
import { jsx as jsx538, jsxs as jsxs458 } from "react/jsx-runtime";
function VolumeDown({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs458(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx538("path", { d: "M19 15.6075C19.6348 14.554 20 13.3196 20 11.9999C20 10.6803 19.6348 9.44588 19 8.39233", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx538("path", { d: "M15 5.58886V18.4111C15 19.2684 15 19.697 14.8195 19.9551C14.6618 20.1805 14.4183 20.331 14.1462 20.3712C13.8345 20.4173 13.4512 20.2256 12.6845 19.8422L12.6845 19.8422L5.68328 16.3416C5.2274 16.1137 4.99945 15.9997 4.80172 15.8697C3.81615 15.2213 3.16703 14.171 3.02791 12.9996C3 12.7645 3 12.5097 3 12C3 11.4903 3 11.2355 3.02791 11.0004C3.16703 9.82897 3.81615 8.77867 4.80172 8.13035C4.99945 8.00027 5.22739 7.8863 5.68327 7.65836L5.68328 7.65836L12.6845 4.15777C13.4512 3.77441 13.8345 3.58273 14.1462 3.62877C14.4183 3.66898 14.6618 3.81949 14.8195 4.04489C15 4.30303 15 4.73164 15 5.58886Z", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/VolumeOff.tsx
import { jsx as jsx539, jsxs as jsxs459 } from "react/jsx-runtime";
function VolumeOff({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs459(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx539("path", { d: "M16 16V18.4111C16 19.2684 16 19.697 15.8195 19.9551C15.6618 20.1805 15.4183 20.331 15.1462 20.3712C14.8345 20.4173 14.4512 20.2256 13.6845 19.8422L6.68328 16.3416C6.2274 16.1137 5.99945 15.9997 5.80172 15.8697C4.81615 15.2213 4.16703 14.171 4.02791 12.9996C4 12.7645 4 12.5097 4 12C4 11.4903 4 11.2355 4.02791 11.0004C4.16703 9.82897 4.81615 8.77867 5.80172 8.13035C5.99945 8.00027 6.2274 7.8863 6.68328 7.65836L7 7.5M10.6438 5.67808L13.6845 4.15777C14.4512 3.77441 14.8345 3.58273 15.1462 3.62877C15.4183 3.66898 15.6618 3.81949 15.8195 4.04489C16 4.30303 16 4.73164 16 5.58885V11", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx539("path", { d: "M4 4L20 20", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/VolumeUp.tsx
import { jsx as jsx540, jsxs as jsxs460 } from "react/jsx-runtime";
function VolumeUp({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs460(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx540("path", { d: "M20.2211 6C21.3462 7.72556 22 9.78642 22 12C22 14.2136 21.3462 16.2744 20.2211 18", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx540("path", { d: "M17 15.6075C17.6348 14.554 18 13.3196 18 11.9999C18 10.6803 17.6348 9.44588 17 8.39233", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx540("path", { d: "M13 5.69527V18.3047C13 19.1925 13 19.6364 12.8133 19.8973C12.6503 20.1251 12.3994 20.2741 12.1214 20.3081C11.8029 20.347 11.4132 20.1345 10.6338 19.7094L4.63369 16.4366L4.63367 16.4365C4.10217 16.1466 3.83641 16.0017 3.60974 15.8328C2.75487 15.1956 2.18971 14.2436 2.03976 13.1881C2 12.9082 2 12.6054 2 12C2 11.3946 2 11.0918 2.03976 10.812C2.18971 9.75638 2.75487 8.80435 3.60974 8.16725C3.83641 7.99832 4.10217 7.85336 4.63369 7.56344L10.6338 4.29063C11.4132 3.86553 11.8029 3.65298 12.1214 3.69194C12.3994 3.72593 12.6503 3.87492 12.8133 4.10266C13 4.36364 13 4.80752 13 5.69527Z", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/VolumeX.tsx
import { jsx as jsx541, jsxs as jsxs461 } from "react/jsx-runtime";
function VolumeX({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs461(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx541("path", { d: "M14 5.58886V18.4111C14 19.2684 14 19.697 13.8195 19.9551C13.6618 20.1805 13.4183 20.331 13.1462 20.3712C12.8345 20.4173 12.4512 20.2256 11.6845 19.8422L11.6845 19.8422L4.68328 16.3416C4.2274 16.1137 3.99945 15.9997 3.80172 15.8697C2.81615 15.2213 2.16703 14.171 2.02791 12.9996C2 12.7645 2 12.5097 2 12C2 11.4903 2 11.2355 2.02791 11.0004C2.16703 9.82897 2.81615 8.77867 3.80172 8.13035C3.99945 8.00027 4.22739 7.8863 4.68327 7.65836L4.68328 7.65836L11.6845 4.15777C12.4512 3.77441 12.8345 3.58273 13.1462 3.62877C13.4183 3.66898 13.6618 3.81949 13.8195 4.04489C14 4.30303 14 4.73164 14 5.58886Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx541("path", { d: "M22 10L18 14M18 10L22 14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Wallet01.tsx
import { jsx as jsx542, jsxs as jsxs462 } from "react/jsx-runtime";
function Wallet01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs462(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx542("path", { d: "M3 7H18C19.6569 7 21 8.34315 21 10V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18L3 7ZM3 7V5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx542("path", { d: "M16 3H5C3.89543 3 3 3.89543 3 5C3 6.10457 3.89543 7 5 7H18", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx542("path", { d: "M17 14C17 14.5523 16.5523 15 16 15C15.4477 15 15 14.5523 15 14C15 13.4477 15.4477 13 16 13C16.5523 13 17 13.4477 17 14Z", strokeWidth, stroke: color })
      ]
    }
  );
}

// src/icons/Wallet02.tsx
import { jsx as jsx543, jsxs as jsxs463 } from "react/jsx-runtime";
function Wallet02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs463(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx543("path", { d: "M3 7H18C19.6569 7 21 8.34315 21 10V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18L3 7ZM3 7V5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx543("path", { d: "M5 3H16V7H5C3.89543 7 3 6.10457 3 5C3 3.89543 3.89543 3 5 3Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx543("path", { d: "M20 11H21V17H20C18.3431 17 17 15.6569 17 14C17 12.3431 18.3431 11 20 11Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Warehouse.tsx
import { jsx as jsx544, jsxs as jsxs464 } from "react/jsx-runtime";
function Warehouse({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs464(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx544("path", { d: "M21 21V7L12 3L3 7V21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx544("rect", { x: "12", y: "16", width: "5", height: "5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx544("rect", { x: "7", y: "16", width: "5", height: "5", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx544("path", { d: "M9.5 11H14.5V16H9.5V11Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/WarningCircle.tsx
import { jsx as jsx545, jsxs as jsxs465 } from "react/jsx-runtime";
function WarningCircle({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs465(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx545("path", { d: "M12 12L12 8", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx545("path", { d: "M12 16H12.0001", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx545("circle", { cx: "12", cy: "12", r: "9", strokeWidth, strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/WarningHexagon.tsx
import { jsx as jsx546, jsxs as jsxs466 } from "react/jsx-runtime";
function WarningHexagon({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs466(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx546("path", { d: "M9.66891 3.79505C10.5197 3.32237 10.9451 3.08604 11.3956 2.99338C11.7944 2.91138 12.2056 2.91138 12.6044 2.99338C13.0549 3.08604 13.4803 3.32237 14.3311 3.79505L18.5311 6.12838C19.4297 6.62759 19.8789 6.87719 20.2061 7.2322C20.4955 7.54627 20.7146 7.91852 20.8485 8.32405C21 8.78244 21 9.29641 21 10.3243V13.6757C21 14.7036 21 15.2176 20.8485 15.676C20.7146 16.0815 20.4955 16.4537 20.2061 16.7678C19.8789 17.1228 19.4297 17.3724 18.5311 17.8716L14.3311 20.205C13.4803 20.6776 13.0549 20.914 12.6044 21.0066C12.2056 21.0886 11.7944 21.0886 11.3956 21.0066C10.9451 20.914 10.5197 20.6776 9.66891 20.205L5.46891 17.8716C4.57034 17.3724 4.12106 17.1228 3.7939 16.7678C3.50447 16.4537 3.28544 16.0815 3.15145 15.676C3 15.2176 3 14.7036 3 13.6757V10.3243C3 9.29641 3 8.78244 3.15145 8.32405C3.28544 7.91852 3.50447 7.54627 3.7939 7.2322C4.12106 6.87719 4.57034 6.62759 5.46891 6.12838L9.66891 3.79505Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx546("path", { d: "M12 12L12 8", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx546("path", { d: "M12 16H12.0001", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/WatchCircle.tsx
import { jsx as jsx547, jsxs as jsxs467 } from "react/jsx-runtime";
function WatchCircle({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs467(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx547("path", { d: "M7.35032 7.54638C6.19982 8.69414 5.49045 10.2661 5.49045 12C5.49045 13.7339 6.19982 15.3059 7.35032 16.4536M7.35032 7.54638C8.53182 6.3677 10.1785 5.63636 12 5.63636C13.8215 5.63636 15.4682 6.3677 16.6497 7.54638M7.35032 7.54638L8.78736 2.71491C8.91351 2.29079 9.30338 2 9.74586 2H14.2541C14.6966 2 15.0865 2.29079 15.2126 2.71491L16.6497 7.54638M16.6497 7.54638C17.8002 8.69414 18.5096 10.2661 18.5096 12C18.5096 13.7339 17.8002 15.3059 16.6497 16.4536M7.35032 16.4536C8.53182 17.6323 10.1785 18.3636 12 18.3636C13.8215 18.3636 15.4682 17.6323 16.6497 16.4536M7.35032 16.4536L8.78736 21.2851C8.91351 21.7092 9.30338 22 9.74586 22H14.2541C14.6966 22 15.0865 21.7092 15.2126 21.2851L16.6497 16.4536", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx547("path", { d: "M12 10V12H14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Webcam01.tsx
import { jsx as jsx548, jsxs as jsxs468 } from "react/jsx-runtime";
function Webcam01({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs468(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx548("path", { d: "M19 10C19 13.866 15.866 17 12 17C8.13401 17 5 13.866 5 10C5 6.13401 8.13401 3 12 3C15.866 3 19 6.13401 19 10Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx548("path", { d: "M14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx548("path", { d: "M7 21C7 18.7909 8.79086 17 11 17H13C15.2091 17 17 18.7909 17 21H7Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Webcam02.tsx
import { jsx as jsx549, jsxs as jsxs469 } from "react/jsx-runtime";
function Webcam02({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs469(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx549("path", { d: "M19 10C19 13.866 15.866 17 12 17C8.13401 17 5 13.866 5 10C5 6.13401 8.13401 3 12 3C15.866 3 19 6.13401 19 10Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx549("path", { d: "M14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx549("path", { d: "M12 17L12 20", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx549("path", { d: "M8 21C10.5181 19.741 13.4819 19.741 16 21", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Webflow.tsx
import { jsx as jsx550, jsxs as jsxs470 } from "react/jsx-runtime";
function Webflow({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs470(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx550("path", { d: "M7 11V6H2V11H7Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx550("path", { d: "M2 14C7.6 14 9.66667 8.66667 10 6H14C13.2 15.6 5.66667 18 2 18V14Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx550("path", { d: "M22 6H17L11 18H16L22 6Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/WhiteHouse.tsx
import { jsx as jsx551, jsxs as jsxs471 } from "react/jsx-runtime";
function WhiteHouse({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs471(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx551("path", { d: "M4 16L20 16C20.5523 16 21 16.4477 21 17V20C21 20.5523 20.5523 21 20 21L4 21C3.44772 21 3 20.5523 3 20L3 17C3 16.4477 3.44772 16 4 16Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx551("path", { d: "M19 16L19 13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx551("path", { d: "M16 21L16 16", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx551("path", { d: "M8 21L8 16", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx551("path", { d: "M5 16L5 13", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx551("path", { d: "M4 12V11C4 10.4477 4.44772 10 5 10H6.72302C6.90426 10 7.0821 9.95074 7.23751 9.85749L11.4855 7.3087C11.8022 7.11869 12.1978 7.11869 12.5145 7.3087L16.7625 9.85749C16.9179 9.95074 17.0957 10 17.277 10H19C19.5523 10 20 10.4477 20 11V12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx551("path", { d: "M12 7L12 3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx551("path", { d: "M12 4L13.7042 3.31834C14.2024 3.11906 14.7667 3.17782 15.2132 3.47546C15.6997 3.79982 16.3228 3.83861 16.8458 3.57711L18 3", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Wifi.tsx
import { jsx as jsx552, jsxs as jsxs472 } from "react/jsx-runtime";
function Wifi({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs472(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx552("path", { d: "M13 20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20C11 19.4477 11.4477 19 12 19C12.5523 19 13 19.4477 13 20Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx552("path", { d: "M8.5 14.7533C9.568 14.2693 10.7528 14 12 14C13.2472 14 14.432 14.2693 15.5 14.7533", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx552("path", { d: "M5.5 10.7019C7.41105 9.61966 9.63137 9 12 9C14.3686 9 16.589 9.61966 18.5 10.7019", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx552("path", { d: "M3 6.34279C5.62669 4.85432 8.6917 4 11.9651 4C15.2675 4 18.3579 4.86955 21 6.38257", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/WifiOff.tsx
import { jsx as jsx553, jsxs as jsxs473 } from "react/jsx-runtime";
function WifiOff({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs473(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx553("path", { d: "M13 20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20C11 19.4477 11.4477 19 12 19C12.5523 19 13 19.4477 13 20Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx553("path", { d: "M8.5 14.7533C9.568 14.2693 10.7528 14 12 14C12.7928 14 13.5604 14.1088 14.2887 14.3124", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx553("path", { d: "M5.5 10.7019C6.65659 10.0469 7.92645 9.56134 9.27392 9.28004M18.5 10.7019C17.1714 9.94948 15.6933 9.42067 14.1199 9.16821", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx553("path", { d: "M3 6.34286C3.69183 5.95082 4.41406 5.60277 5.1625 5.30274M21 6.38264C17.6857 4.48472 13.7888 3.70252 10 4.10388", strokeWidth, strokeLinecap: "round", stroke: color }),
        /* @__PURE__ */ jsx553("path", { d: "M3 3L19 19", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Wrench.tsx
import { jsx as jsx554, jsxs as jsxs474 } from "react/jsx-runtime";
function Wrench({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs474(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx554("path", { d: "M11.7902 4.5823C13.2052 3.16727 15.2094 2.70059 17.0131 3.18226L14.3388 5.8566L14.9759 9.04239L18.1617 9.67955L20.8361 7.00519C21.3178 8.80889 20.8511 10.8132 19.4361 12.2282L14.2131 13.6282L7.62357 20.2087C6.56789 21.2643 4.8563 21.2643 3.80062 20.2087C2.74495 19.153 2.74495 17.4414 3.80062 16.3857L10.3901 9.80527L11.7902 4.5823Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx554("path", { d: "M5.78789 18.2585H5.78799", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/XTwitter.tsx
import { jsx as jsx555, jsxs as jsxs475 } from "react/jsx-runtime";
function XTwitter({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs475(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx555("path", { d: "M8.14812 3.03308L3.78687 3.03311L15.9913 20.9674H20.2963L8.14812 3.03308Z", strokeWidth, strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx555("path", { d: "M13.1297 10.3823L19.3794 3M10.6314 13.3333L4.14095 21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/Youtube.tsx
import { jsx as jsx556, jsxs as jsxs476 } from "react/jsx-runtime";
function Youtube({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs476(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx556("path", { d: "M11.9895 18.7931C11.9895 18.7931 18.2548 18.7931 19.8089 18.3793C20.6839 18.1448 21.342 17.469 21.573 16.6345C22 15.1034 22 11.8828 22 11.8828C22 11.8828 22 8.68276 21.573 7.16552C21.342 6.31034 20.6839 5.64828 19.8089 5.42069C18.2548 5 11.9895 5 11.9895 5C11.9895 5 5.73819 5 4.19111 5.42069C3.33007 5.64828 2.65803 6.31034 2.41302 7.16552C2 8.68276 2 11.8828 2 11.8828C2 11.8828 2 15.1034 2.41302 16.6345C2.65803 17.469 3.33007 18.1448 4.19111 18.3793C5.73819 18.7931 11.9895 18.7931 11.9895 18.7931Z", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx556("path", { d: "M15.1035 11.8966L9.93104 8.96558V14.8276L15.1035 11.8966Z", fill: color })
      ]
    }
  );
}

// src/icons/Zap.tsx
import { jsx as jsx557 } from "react/jsx-runtime";
function Zap({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx557(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: /* @__PURE__ */ jsx557("path", { d: "M10.56 3.92C10.9987 3.33512 11.218 3.04268 11.4115 3.00789C11.5789 2.97779 11.7502 3.03487 11.866 3.15939C12 3.30335 12 3.6689 12 4.4V9.2C12 9.48003 12 9.62004 12.0545 9.727C12.1024 9.82108 12.1789 9.89757 12.273 9.9455C12.38 10 12.52 10 12.8 10H19.4C19.915 10 20.1725 10 20.3082 10.1063C20.4264 10.1988 20.4968 10.3396 20.4999 10.4896C20.5035 10.662 20.349 10.868 20.04 11.28L13.44 20.08C13.0013 20.6649 12.782 20.9573 12.5885 20.9921C12.4211 21.0222 12.2498 20.9651 12.134 20.8406C12 20.6966 12 20.3311 12 19.6V14.8C12 14.52 12 14.38 11.9455 14.273C11.8976 14.1789 11.8211 14.1024 11.727 14.0545C11.62 14 11.48 14 11.2 14H4.6C4.08503 14 3.82754 14 3.69175 13.8937C3.57358 13.8012 3.50323 13.6604 3.50011 13.5104C3.49652 13.338 3.65102 13.132 3.96 12.72L10.56 3.92Z", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
    }
  );
}

// src/icons/ZapOff.tsx
import { jsx as jsx558, jsxs as jsxs477 } from "react/jsx-runtime";
function ZapOff({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs477(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx558("path", { d: "M6.85538 8.8595L3.96 12.72C3.65102 13.132 3.49652 13.338 3.50011 13.5104C3.50323 13.6604 3.57358 13.8012 3.69175 13.8937C3.82754 14 4.08503 14 4.6 14H11.2C11.48 14 11.62 14 11.727 14.0545C11.8211 14.1024 11.8976 14.1789 11.9455 14.273C12 14.38 12 14.52 12 14.8V19.6C12 20.3311 12 20.6966 12.134 20.8406C12.2498 20.9651 12.4211 21.0222 12.5885 20.9921C12.782 20.9573 13.0013 20.6649 13.44 20.08L15.375 17.5M8.97661 6.03119L10.56 3.92C10.9987 3.33512 11.218 3.04268 11.4115 3.00789C11.5789 2.97779 11.7502 3.03487 11.866 3.15939C12 3.30335 12 3.6689 12 4.4V9.2C12 9.48003 12 9.62004 12.0545 9.727C12.1024 9.82108 12.1789 9.89757 12.273 9.9455C12.38 10 12.52 10 12.8 10H19.4C19.915 10 20.1725 10 20.3082 10.1063C20.4264 10.1988 20.4968 10.3396 20.4999 10.4896C20.5035 10.662 20.349 10.868 20.04 11.28L18 14L17.5593 14.5875", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx558("path", { d: "M3 5L19 21", strokeWidth, strokeLinecap: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ZoomIn.tsx
import { jsx as jsx559, jsxs as jsxs478 } from "react/jsx-runtime";
function ZoomIn({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs478(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx559("path", { d: "M8 10.995H14M10.995 14L10.995 8", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx559("circle", { cx: "11", cy: "11", r: "8", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx559("path", { d: "M21 21.0001L16.6691 16.6692", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}

// src/icons/ZoomOut.tsx
import { jsx as jsx560, jsxs as jsxs479 } from "react/jsx-runtime";
function ZoomOut({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsxs479(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx560("path", { d: "M8 10.9951H14", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color }),
        /* @__PURE__ */ jsx560("circle", { cx: "11", cy: "11", r: "8", strokeWidth, stroke: color }),
        /* @__PURE__ */ jsx560("path", { d: "M21 21.0001L16.6691 16.6692", strokeWidth, strokeLinecap: "round", strokeLinejoin: "round", stroke: color })
      ]
    }
  );
}
export {
  Activity,
  Adjustment,
  Airplane,
  Airplay,
  Airpods,
  AlignBottom,
  AlignHorizontalCenters,
  AlignLeft,
  AlignRight,
  AlignTop,
  AlignVerticalCenters,
  Ambulance,
  Anchor,
  Android,
  Annotation,
  AppleTv,
  Apps,
  Archive,
  ArrowCollapseUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  AtSign,
  Atom,
  Attachement01,
  Award,
  Backspace01,
  Backspace02,
  Badge,
  Bank,
  BankNote,
  BankNoteStack01,
  BankNoteStack02,
  Barcode01,
  Barcode02,
  Basketball,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryHalfCharged,
  BatteryLow,
  Beaker,
  Bell,
  BellOff,
  BezierCurve,
  Bicycle,
  Bill,
  BinocularSingle,
  Blank,
  Block,
  Blog,
  Bluetooth,
  BluetoothPairing,
  BluetoothX,
  BookClosed,
  BookOpened01,
  BookOpened02,
  Bookmark,
  BookmarkCheckmark,
  BookmarkMinus,
  BookmarkPlus,
  Bookmarks,
  BorderRadiusTopLeft,
  Briefcase,
  Browser,
  BrushSmall,
  BrushWide,
  Bug,
  Building01,
  Building02,
  Building03,
  Building04,
  Building05,
  Building06,
  Bulb,
  BurgerMenu,
  Bus,
  Calculator,
  Calendar,
  CalendarCheckmark,
  CalendarClock,
  CalendarMinus,
  CalendarPlus,
  CalendarX,
  Call,
  Camera,
  CameraOff,
  Car,
  Card,
  CardLock,
  CaretRight,
  CaretRightSmall,
  Category,
  Certificate,
  ChartBarsHorizontal,
  ChartCohort,
  ChartLineUp,
  ChartPie,
  Charts,
  Checkmark,
  CheckmarkInCircle,
  CheckmarkTwoSquares,
  ChevronDoubleVerticalIn,
  ChevronDoubleVerticalOut,
  ChevronDoubleVerticalUp,
  ChevronDown,
  ChevronDownSmall,
  ChevronLeft,
  ChevronLeftSmall,
  ChevronLineLeft,
  ChevronLineRight,
  ChevronRight,
  ChevronRightSmall,
  ChevronUp,
  ChevronUpSmall,
  Church,
  Click,
  Clipboard,
  ClipboardCheckmark,
  ClipboardX,
  Clipping,
  Clock,
  ClockSnooze,
  CloseX,
  CloseXInCircle,
  CloseXSmall,
  Cloud,
  CloudOff,
  Code,
  CodeBlock,
  Coin,
  Coins,
  CoinsJar,
  ColorBucket,
  ColumnsThree,
  ColumnsTwo,
  Command,
  Compass,
  Compose,
  Confetti,
  Contract,
  Contrast,
  Copy,
  Cpu01,
  Crop,
  CrossHair01,
  Crown,
  CurrencyDollar,
  CurrencyEuro,
  CurrencyRupee,
  CurrencySterlingPound,
  CurrencyYen,
  Cursor,
  Data01,
  DataFlow,
  Database,
  Delivery,
  Diamond01,
  Diamond02,
  Disc,
  Discount,
  Dislike,
  Dns,
  Document,
  DocumentCheckmark,
  DocumentMinus,
  DocumentPlus,
  DocumentX,
  Documents,
  Domain,
  DotLarge,
  DotMedium,
  DotSmall,
  DotsTripleHorizontal,
  DotsTripleVertical,
  Download,
  Drag,
  DragHandle01,
  DragHandle02,
  Dribbble,
  Duplicate,
  Edit,
  EllipseDashed,
  EllipseSolid,
  Email,
  EmojiJoy,
  EmojiNeutral,
  EmojiSad,
  EmojiSmile,
  Eraser,
  ErrorOctagon,
  ErrorTriangle,
  ExchangeSquareToCircle,
  ExternalLink,
  Eye,
  EyeDropper,
  EyeOff,
  Eyeglasses,
  FaceId,
  Facebook,
  Factory,
  Favicon,
  Figma,
  File,
  FileCheckmark,
  FileMinus,
  FilePlus,
  FileX,
  FileZip,
  Files,
  FilesBox,
  FilterFunnel,
  FilterLines,
  FiltersColors,
  FingerPrint,
  Flag,
  FlashDrive,
  FlaskErlenmeyer,
  FlaskRound,
  Flatten,
  FlipHorizontal,
  FlipVertical,
  FloppyDisk,
  Folder,
  FolderMinus,
  FolderOpened,
  FolderPlus,
  Folders,
  FormButton,
  FormCheckbox,
  FormInput,
  FormRadioButton,
  FormToggleOff,
  FormToggleOn,
  Framer,
  FullScreen,
  FullScreenExit,
  FunctionFormula,
  GameCubeController,
  Garage01,
  Garage02,
  Gift,
  GitBranch,
  GitCommit,
  GitCompare,
  GitFork,
  GitMerge,
  GitPullRequest,
  GitPullRequestClosed,
  GitPullRequestDraft,
  Globe01,
  Globe02,
  Google,
  GoogleChrome,
  GraduationCap,
  Grid,
  Group,
  Hammer,
  HardDrive01,
  HardDrive02,
  Hashtag,
  Headphone01,
  Headphone02,
  Heart,
  Hexagon,
  HistoryRecent,
  HistorySearch,
  Home01,
  Home02,
  Home03,
  Home04,
  Home05,
  Hospital,
  Hotel,
  Image,
  ImageMinus,
  ImagePlus,
  ImageSearch,
  Images,
  Inbox,
  InfoCircle,
  InfoSquare,
  Instagram,
  Integration,
  Invoice,
  Ios,
  KeyHole,
  KeyHorizontal01,
  KeyHorizontal02,
  KeyVertical01,
  KeyVertical02,
  Keyboard,
  KeyboardOff,
  Laptop,
  LayersOne,
  LayersThree,
  LayersTwo,
  Layout,
  Leaf,
  Library,
  Lighthouse,
  Like,
  Link,
  LinkBroken,
  ListNumbered,
  ListSearch,
  ListUnordered,
  Live,
  Loading,
  LocationPin,
  LocationPinOff,
  LocationPins,
  Lock01,
  LockOpened,
  LogIn,
  LogOut,
  Loop02,
  Luggage,
  MagicWand01,
  MagicWand02,
  Map,
  Megaphone01,
  Message,
  MessageMinus,
  MessagePlus,
  MessageTemporary,
  MessagesCircle,
  Meta,
  Metafield,
  Microphone,
  MicrophoneOff,
  Microscope,
  Minus,
  MinusSmall,
  Mobile,
  Money,
  MoneyBag,
  Monitor,
  Moon01,
  Moon02,
  Mosque,
  Mouse,
  Movie01,
  Movie02,
  Museum,
  MusicNote,
  Newspaper,
  Note,
  NotificationBox,
  Order,
  Package,
  Page,
  PaintPalette,
  Paper,
  PaperCheck,
  Passkey,
  Passport,
  Password01,
  Password02,
  Pause,
  Payment,
  Pen,
  PenTool,
  Pencil,
  Pentagon,
  Percentage,
  Perspective,
  PictureInPicture,
  PigSavings,
  Pill,
  Pin,
  PinOff,
  Pinterest,
  Play,
  Plug,
  Plus,
  PlusSmall,
  Podcast,
  PowerOff,
  PowerOn,
  Presentation,
  PriceList,
  Printer,
  Projector,
  Puzzle,
  QrCode01,
  QrCode02,
  QuestionMark,
  QuestionMarkInCircle,
  QuestionMarkInHexagon,
  QuestionMarkInOctagon,
  QuestionMarkInSquare,
  Quote,
  QuoteBlock,
  Receipt01,
  Receipt02,
  ReceiptCheckmark,
  ReceiptDollar,
  ReceiptEuro,
  ReceiptRupee,
  ReceiptSterlingPound,
  ReceiptX,
  ReceiptYen,
  RecordStart,
  RecordStop,
  Recording,
  Redo,
  Refresh,
  Replay,
  Restricted,
  Reviews,
  Reward,
  Rhombus,
  Rocket01,
  Rocket02,
  Router,
  RowsThree,
  RowsTwo,
  Rss,
  Safe,
  Sandglass,
  Save,
  Scale,
  Scan,
  Scissors,
  SdCard,
  Search01,
  Search02,
  Send,
  Server,
  Settings,
  Shapes,
  Share,
  Shield,
  ShieldOff,
  Ship,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
  ShoppingCartDiscount,
  ShoppingCartMinus,
  ShoppingCartPlus,
  ShoppingCartUp,
  ShoppingCartX,
  Shuffle,
  SidebarLeft,
  SidebarRight,
  Signal,
  SimCard,
  SkipBackward,
  SkipForward,
  SlashForward,
  Sliders,
  Slideshow,
  Snapchat,
  Snowflake01,
  Snowflake02,
  Snowflake03,
  SocialPost,
  Sort,
  Speaker,
  Speedometer,
  SpellingCheckmark,
  Square,
  SquareExclude,
  SquareIntersect,
  SquareSubtract,
  SquareUnion,
  Star,
  Stars,
  Status,
  StickerRound,
  StickerSquare,
  Stopwatch01,
  Stopwatch02,
  Store,
  StreamToTv,
  Sun01,
  Sun02,
  Support,
  Tablet,
  Tag,
  TagMinus,
  TagPlus,
  Tags,
  Target,
  Task,
  Tax,
  Telescope,
  Terminal,
  Text,
  TextAlignCenter,
  TextAlignJustify,
  TextAlignLeft,
  TextAlignRight,
  TextFormatBold,
  TextFormatItalic,
  TextFormatStrikethrough,
  TextFormatUnderlined,
  Theme,
  Thermometer,
  Ticket,
  Tiktok,
  Train,
  Translate,
  TrashBin,
  TrendUp,
  Trending,
  Triangle,
  Trophy,
  Truck,
  Tv,
  Twitch,
  Umbrella,
  Undo,
  Ungroup,
  Upload,
  User01,
  User01Minus,
  User01Plus,
  User01QuestionMark,
  User02,
  User03,
  User04,
  UserAnonymous,
  UserId,
  UserInCircle,
  Users01,
  Verified,
  Video,
  VideoRecorder,
  VideoRecorderOff,
  Videos,
  Vimeo,
  Virus,
  Voicemail,
  VolumeDown,
  VolumeOff,
  VolumeUp,
  VolumeX,
  Wallet01,
  Wallet02,
  Warehouse,
  WarningCircle,
  WarningHexagon,
  WatchCircle,
  Webcam01,
  Webcam02,
  Webflow,
  WhiteHouse,
  Wifi,
  WifiOff,
  Wrench,
  XTwitter,
  Youtube,
  Zap,
  ZapOff,
  ZoomIn,
  ZoomOut
};
