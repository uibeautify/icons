import { IconProps } from "../types";

/**
 * @component
 * @name TextFormatBold
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNCA0SDEzQzE1LjIwOTEgNCAxNyA1Ljc5MDg2IDE3IDhDMTcgMTAuMjA5MSAxNS4yMDkxIDEyIDEzIDEySDEwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTAgMTJIMTZDMTguMjA5MSAxMiAyMCAxMy43OTA5IDIwIDE2QzIwIDE4LjIwOTEgMTguMjA5MSAyMCAxNiAyMEg0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTAgNFYyMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTYgNFYyMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/text-format-bold - Icon documentation
 */
export function TextFormatBold({
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
      <path d="M4 4H13C15.2091 4 17 5.79086 17 8C17 10.2091 15.2091 12 13 12H10" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M10 12H16C18.2091 12 20 13.7909 20 16C20 18.2091 18.2091 20 16 20H4" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M10 4V20" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M6 4V20" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
