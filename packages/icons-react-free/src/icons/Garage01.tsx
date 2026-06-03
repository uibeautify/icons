import { IconProps } from "../types";

/**
 * @component
 * @name Garage01
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNOSAxM0gxNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTkgMTdIMTUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0zIDIxSDIxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNiA5SDE4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTkgMjFWOUg1VjIxSDE5WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTExLjM1MDIgMy4yODg4MUwzIDdWOUgyMVY3TDEyLjY0OTggMy4yODg4MUMxMi40MTA1IDMuMTgyNDYgMTIuMjkwOSAzLjEyOTI4IDEyLjE2NjUgMy4xMDgyOEMxMi4wNTYzIDMuMDg5NjYgMTEuOTQzNyAzLjA4OTY2IDExLjgzMzUgMy4xMDgyOEMxMS43MDkxIDMuMTI5MjggMTEuNTg5NSAzLjE4MjQ2IDExLjM1MDIgMy4yODg4MVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/garage-01 - Icon documentation
 */
export function Garage01({
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
      <path d="M9 13H15" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M9 17H15" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 21H21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M6 9H18" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M19 21V9H5V21H19Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M11.3502 3.28881L3 7V9H21V7L12.6498 3.28881C12.4105 3.18246 12.2909 3.12928 12.1665 3.10828C12.0563 3.08966 11.9437 3.08966 11.8335 3.10828C11.7091 3.12928 11.5895 3.18246 11.3502 3.28881Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
