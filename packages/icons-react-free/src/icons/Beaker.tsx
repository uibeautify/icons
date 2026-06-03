import { IconProps } from "../types";

/**
 * @component
 * @name Beaker
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTkgOVYxOEMxOSAxOS42NTY5IDE3LjY1NjkgMjEgMTYgMjFIOEM2LjM0MzE1IDIxIDUgMTkuNjU2OSA1IDE4VjlIMTlaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTQuMDM2NDcgNC41NTQ3QzMuNTkzNDMgMy44OTAxNCA0LjA2OTgyIDMgNC44Njg1MiAzSDE4QzE4LjU1MjMgMyAxOSAzLjQ0NzcyIDE5IDRWOUg1VjYuOTA4MzNDNSA2LjMxNjA1IDQuODI0NjkgNS43MzcwMyA0LjQ5NjE1IDUuMjQ0MjNMNC4wMzY0NyA0LjU1NDdaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTUgMTdMOCAxNyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTUgMTNMOCAxMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/beaker - Icon documentation
 */
export function Beaker({
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
      <path d="M19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9H19Z" strokeWidth={strokeWidth} stroke={color}/><path d="M4.03647 4.5547C3.59343 3.89014 4.06982 3 4.86852 3H18C18.5523 3 19 3.44772 19 4V9H5V6.90833C5 6.31605 4.82469 5.73703 4.49615 5.24423L4.03647 4.5547Z" strokeWidth={strokeWidth} stroke={color}/><path d="M5 17L8 17" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M5 13L8 13" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
