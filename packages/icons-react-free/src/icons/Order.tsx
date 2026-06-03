import { IconProps } from "../types";

/**
 * @component
 * @name Order
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNCA4SDIwVjE2LjJDMjAgMTcuODgwMiAyMCAxOC43MjAyIDE5LjY3MyAxOS4zNjJDMTkuMzg1NCAxOS45MjY1IDE4LjkyNjUgMjAuMzg1NCAxOC4zNjIgMjAuNjczQzE3LjcyMDIgMjEgMTYuODgwMiAyMSAxNS4yIDIxSDguOEM3LjExOTg0IDIxIDYuMjc5NzYgMjEgNS42MzgwMyAyMC42NzNDNS4wNzM1NCAyMC4zODU0IDQuNjE0NiAxOS45MjY1IDQuMzI2OTggMTkuMzYyQzQgMTguNzIwMiA0IDE3Ljg4MDIgNCAxNi4yVjhaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTMgNUMzIDMuODk1NDMgMy44OTU0MyAzIDUgM0gxOUMyMC4xMDQ2IDMgMjEgMy44OTU0MyAyMSA1VjdDMjEgNy41NTIyOCAyMC41NTIzIDggMjAgOEg0QzMuNDQ3NzIgOCAzIDcuNTUyMjggMyA3VjVaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTkgMTVWOEgxNVYxNUwxMiAxM0w5IDE1WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE3IDNWOCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTcgM1Y4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/order - Icon documentation
 */
export function Order({
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
      <path d="M4 8H20V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V8Z" strokeWidth={strokeWidth} stroke={color}/><path d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7V5Z" strokeWidth={strokeWidth} stroke={color}/><path d="M9 15V8H15V15L12 13L9 15Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M17 3V8" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M7 3V8" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
