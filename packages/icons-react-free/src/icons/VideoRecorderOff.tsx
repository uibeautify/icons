import { IconProps } from "../types";

/**
 * @component
 * @name VideoRecorderOff
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTYgMTZWMTdDMTYgMTguMTA0NiAxNS4xMDQ2IDE5IDE0IDE5SDVDMy44OTU0MyAxOSAzIDE4LjEwNDYgMyAxN1Y3QzMgNS44OTU0MyAzLjg5NTQzIDUgNSA1TTIxIDE2VjguOTE0MjFDMjEgOC4wMjMzMSAxOS45MjI5IDcuNTc3MTQgMTkuMjkyOSA4LjIwNzExTDE2IDExLjVWN0MxNiA1Ljg5NTQzIDE1LjEwNDYgNSAxNCA1SDEwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMyAzTDIxIDIxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/video-recorder-off - Icon documentation
 */
export function VideoRecorderOff({
  size = 24,
  color = "currentColor",
  secondaryColor = "currentColor",
  secondaryOpacity = 0.15,
  strokeWidth = 2,
  variant = "outline",
  className,
  style,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style
      }}
      {...props}
    >
      <path d="M16 16V17C16 18.1046 15.1046 19 14 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5M21 16V8.91421C21 8.02331 19.9229 7.57714 19.2929 8.20711L16 11.5V7C16 5.89543 15.1046 5 14 5H10" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M3 3L21 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
