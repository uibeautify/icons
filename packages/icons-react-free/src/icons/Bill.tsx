import { IconProps } from "../types";

/**
 * @component
 * @name Bill
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyA1QzMgMy44OTU0MyAzLjg5NTQzIDMgNSAzQzYuMTA0NTcgMyA3IDMuODk1NDMgNyA1VjE0SDNWNVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNyAzSDE2LjJDMTcuODgwMiAzIDE4LjcyMDIgMyAxOS4zNjIgMy4zMjY5OEMxOS45MjY1IDMuNjE0NiAyMC4zODU0IDQuMDczNTQgMjAuNjczIDQuNjM4MDNDMjEgNS4yNzk3NiAyMSA2LjExOTg0IDIxIDcuOFYyMUwxOSAxOUwxNy41IDIxTDE2IDE5TDE0IDIxTDEyLjUgMTlMMTAuNSAyMUw5IDE5TDcgMjFWM1pNNyAzSDUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTcgMTFMMTEgMTEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNyAxNUwxMSAxNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEyIDdMMTEgNyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE3IDdMMTYgNyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/bill - Icon documentation
 */
export function Bill({
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
      <path d="M3 5C3 3.89543 3.89543 3 5 3C6.10457 3 7 3.89543 7 5V14H3V5Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M7 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V21L19 19L17.5 21L16 19L14 21L12.5 19L10.5 21L9 19L7 21V3ZM7 3H5" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M17 11L11 11" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M17 15L11 15" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 7L11 7" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M17 7L16 7" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
