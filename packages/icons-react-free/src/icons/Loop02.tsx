import { IconProps } from "../types";

/**
 * @component
 * @name Loop02
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTYgNkgxOEMxOS42NTY5IDYgMjEgNy4zNDMxNSAyMSA5VjE1QzIxIDE2LjY1NjkgMTkuNjU2OSAxOCAxOCAxOEgxMk0xNSAyMC41TDEyIDE4TDE1IDE1LjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik04IDE4SDZDNC4zNDMxNSAxOCAzIDE2LjY1NjkgMyAxNVY5QzMgNy4zNDMxNSA0LjM0MzE1IDYgNiA2SDEyTTkgOC41TDEyIDZMOSAzLjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/loop-02 - Icon documentation
 */
export function Loop02({
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
      <path d="M16 6H18C19.6569 6 21 7.34315 21 9V15C21 16.6569 19.6569 18 18 18H12M15 20.5L12 18L15 15.5" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M8 18H6C4.34315 18 3 16.6569 3 15V9C3 7.34315 4.34315 6 6 6H12M9 8.5L12 6L9 3.5" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
