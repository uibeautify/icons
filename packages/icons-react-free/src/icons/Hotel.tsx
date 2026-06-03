import { IconProps } from "../types";

/**
 * @component
 * @name Hotel
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyA5LjY3MjYzQzMgOC40ODI2MiAzLjcwMzM4IDcuNDA1MTEgNC43OTI4IDYuOTI2MjRMMTMuMTk1MiAzLjIzMjg4QzE0LjUxNjkgMi42NTE5IDE2IDMuNjIwMDEgMTYgNS4wNjM4MVYyMUg0QzMuNDQ3NzIgMjEgMyAyMC41NTIzIDMgMjBWOS42NzI2M1oiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNiA3TDIwLjM1ODEgMTEuMDMxMkMyMC43NjczIDExLjQwOTggMjEgMTEuOTQyIDIxIDEyLjQ5OTRWMjBDMjEgMjAuNTUyMyAyMC41NTIzIDIxIDIwIDIxSDE2VjdaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTEuNSAxMEgxMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTExLjUgMTRIMTIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik03IDEwSDcuNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTcgMTRINy41IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/hotel - Icon documentation
 */
export function Hotel({
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
      <path d="M3 9.67263C3 8.48262 3.70338 7.40511 4.7928 6.92624L13.1952 3.23288C14.5169 2.6519 16 3.62001 16 5.06381V21H4C3.44772 21 3 20.5523 3 20V9.67263Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M16 7L20.3581 11.0312C20.7673 11.4098 21 11.942 21 12.4994V20C21 20.5523 20.5523 21 20 21H16V7Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M11.5 10H12" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M11.5 14H12" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M7 10H7.5" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M7 14H7.5" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
