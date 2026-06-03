import { IconProps } from "../types";

/**
 * @component
 * @name Click
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNOSA5TDIxLjAzMTIgMTIuMTMxNkwxNSAxNUwxMi4xMzE3IDIxLjAzMTFMOSA5WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik05IDNWNE0xMy4yNDI2IDQuNzU3MzZMMTIuNTM1NSA1LjQ2NDQ3TTQuNzU3MzYgMTMuMjQyNkw1LjQ2NDQ3IDEyLjUzNTVNMyA5SDRNNC43NTczNiA0Ljc1NzM2TDUuNDY0NDcgNS40NjQ0NiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/click - Icon documentation
 */
export function Click({
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
      <path d="M9 9L21.0312 12.1316L15 15L12.1317 21.0311L9 9Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M9 3V4M13.2426 4.75736L12.5355 5.46447M4.75736 13.2426L5.46447 12.5355M3 9H4M4.75736 4.75736L5.46447 5.46446" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
