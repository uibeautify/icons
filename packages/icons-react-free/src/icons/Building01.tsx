import { IconProps } from "../types";

/**
 * @component
 * @name Building01
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNyA1QzcgMy44OTU0MyA3Ljg5NTQzIDMgOSAzSDE1QzE2LjEwNDYgMyAxNyAzLjg5NTQzIDE3IDVWMjFIN1Y1WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTExIDdIMTMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMSAxMUgxMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTExIDE1SDEzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMyAxMkMzIDExLjQ0NzcgMy40NDc3MiAxMSA0IDExSDZDNi41NTIyOCAxMSA3IDExLjQ0NzcgNyAxMlYyMUg0QzMuNDQ3NzIgMjEgMyAyMC41NTIzIDMgMjBWMTJaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTcgMTRDMTcgMTMuNDQ3NyAxNy40NDc3IDEzIDE4IDEzSDIwQzIwLjU1MjMgMTMgMjEgMTMuNDQ3NyAyMSAxNFYyMEMyMSAyMC41NTIzIDIwLjU1MjMgMjEgMjAgMjFIMTdWMTRaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/building-01 - Icon documentation
 */
export function Building01({
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
      <path d="M7 5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V21H7V5Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M11 7H13" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M11 11H13" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M11 15H13" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 12C3 11.4477 3.44772 11 4 11H6C6.55228 11 7 11.4477 7 12V21H4C3.44772 21 3 20.5523 3 20V12Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M17 14C17 13.4477 17.4477 13 18 13H20C20.5523 13 21 13.4477 21 14V20C21 20.5523 20.5523 21 20 21H17V14Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
