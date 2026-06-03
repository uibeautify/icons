import { IconProps } from "../types";

/**
 * @component
 * @name Lighthouse
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTcgMjFMMTQuMTUyOSA1LjgxNTcxQzE0LjA2NDMgNS4zNDI3NCAxMy42NTEzIDUgMTMuMTcwMSA1SDEwLjgyOTlDMTAuMzQ4NyA1IDkuOTM1NzQgNS4zNDI3NCA5Ljg0NzA1IDUuODE1NzFMNyAyMUgxN1oiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMiA1TDEyIDMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik01IDIxSDE5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTUuNzk2IDE1LjY5MDFDMTMuMDg1IDE0Ljc3OTggMTEuMjY2MSAxNC43NjAyIDguMjUyMjQgMTUuNjkwMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTguOTc2MTUgMTAuNDc5QzExLjI5NzUgOS44NDQ3MiAxMi45MzEyIDkuODQ1ODQgMTUuMDI4MyAxMC40NDk4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTIgMjFMMTIgMTkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/lighthouse - Icon documentation
 */
export function Lighthouse({
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
      <path d="M17 21L14.1529 5.81571C14.0643 5.34274 13.6513 5 13.1701 5H10.8299C10.3487 5 9.93574 5.34274 9.84705 5.81571L7 21H17Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 5L12 3" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M5 21H19" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M15.796 15.6901C13.085 14.7798 11.2661 14.7602 8.25224 15.6901" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M8.97615 10.479C11.2975 9.84472 12.9312 9.84584 15.0283 10.4498" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 21L12 19" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
