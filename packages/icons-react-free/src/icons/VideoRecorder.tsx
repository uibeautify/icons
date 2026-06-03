import { IconProps } from "../types";

/**
 * @component
 * @name VideoRecorder
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTYgMTEuNVY3QzE2IDUuODk1NDMgMTUuMTA0NiA1IDE0IDVINUMzLjg5NTQzIDUgMyA1Ljg5NTQzIDMgN1YxN0MzIDE4LjEwNDYgMy44OTU0MyAxOSA1IDE5SDE0QzE1LjEwNDYgMTkgMTYgMTguMTA0NiAxNiAxN1YxMy41TTE2IDExLjVMMTkuMzMxIDguNTAyMDdDMTkuOTc0NiA3LjkyMjkgMjEgOC4zNzk1OSAyMSA5LjI0NTM2VjE1Ljc1NDZDMjEgMTYuNjIwNCAxOS45NzQ2IDE3LjA3NzEgMTkuMzMxIDE2LjQ5NzlMMTYgMTMuNU0xNiAxMS41VjEzLjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/video-recorder - Icon documentation
 */
export function VideoRecorder({
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
      <path d="M16 11.5V7C16 5.89543 15.1046 5 14 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H14C15.1046 19 16 18.1046 16 17V13.5M16 11.5L19.331 8.50207C19.9746 7.9229 21 8.37959 21 9.24536V15.7546C21 16.6204 19.9746 17.0771 19.331 16.4979L16 13.5M16 11.5V13.5" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
