import { IconProps } from "../types";

/**
 * @component
 * @name Museum
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMiAxM0gyMk0yIDIxSDIyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTEuNDcgNS4zMzEyNUw0LjQ3IDkuNzA2MjVDNC4xNzc2MiA5Ljg4ODk5IDQgMTAuMjA5NSA0IDEwLjU1NDJWMTNIMjBWMTAuNTU0MkMyMCAxMC4yMDk1IDE5LjgyMjQgOS44ODg5OSAxOS41MyA5LjcwNjI1TDEyLjUzIDUuMzMxMjVDMTIuMjA1NyA1LjEyODU4IDExLjc5NDMgNS4xMjg1OCAxMS40NyA1LjMzMTI1WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEyIDVMMTIgMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTQuMTkxNDEgMTBMMTkuODAwOCAxMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTIwIDEzTDIwIDIxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTYgMTNMMTYgMjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMiAxM0wxMiAyMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTggMTNMOCAyMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTQgMTNMNCAyMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/museum - Icon documentation
 */
export function Museum({
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
      <path d="M2 13H22M2 21H22" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M11.47 5.33125L4.47 9.70625C4.17762 9.88899 4 10.2095 4 10.5542V13H20V10.5542C20 10.2095 19.8224 9.88899 19.53 9.70625L12.53 5.33125C12.2057 5.12858 11.7943 5.12858 11.47 5.33125Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 5L12 3" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M4.19141 10L19.8008 10" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M20 13L20 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M16 13L16 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 13L12 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M8 13L8 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M4 13L4 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
