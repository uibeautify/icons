import { IconProps } from "../types";

/**
 * @component
 * @name Server
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyA4LjhDMyA3LjExOTg0IDMgNi4yNzk3NiAzLjMyNjk4IDUuNjM4MDNDMy42MTQ2IDUuMDczNTQgNC4wNzM1NCA0LjYxNDYgNC42MzgwMyA0LjMyNjk4QzUuMjc5NzYgNCA2LjExOTg0IDQgNy44IDRIMTYuMkMxNy44ODAyIDQgMTguNzIwMiA0IDE5LjM2MiA0LjMyNjk4QzE5LjkyNjUgNC42MTQ2IDIwLjM4NTQgNS4wNzM1NCAyMC42NzMgNS42MzgwM0MyMSA2LjI3OTc2IDIxIDcuMTE5ODQgMjEgOC44VjEySDNWOC44WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTExIDhMMTcgOCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTcuMDAwMSA4SDciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0zIDEySDIxVjE1LjJDMjEgMTYuODgwMiAyMSAxNy43MjAyIDIwLjY3MyAxOC4zNjJDMjAuMzg1NCAxOC45MjY1IDE5LjkyNjUgMTkuMzg1NCAxOS4zNjIgMTkuNjczQzE4LjcyMDIgMjAgMTcuODgwMiAyMCAxNi4yIDIwSDcuOEM2LjExOTg0IDIwIDUuMjc5NzYgMjAgNC42MzgwMyAxOS42NzNDNC4wNzM1NCAxOS4zODU0IDMuNjE0NiAxOC45MjY1IDMuMzI2OTggMTguMzYyQzMgMTcuNzIwMiAzIDE2Ljg4MDIgMyAxNS4yVjEyWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTExIDE2TDE3IDE2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNy4wMDAxIDE2SDciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/server - Icon documentation
 */
export function Server({
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
      <path d="M3 8.8C3 7.11984 3 6.27976 3.32698 5.63803C3.6146 5.07354 4.07354 4.6146 4.63803 4.32698C5.27976 4 6.11984 4 7.8 4H16.2C17.8802 4 18.7202 4 19.362 4.32698C19.9265 4.6146 20.3854 5.07354 20.673 5.63803C21 6.27976 21 7.11984 21 8.8V12H3V8.8Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M11 8L17 8" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M7.0001 8H7" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M3 12H21V15.2C21 16.8802 21 17.7202 20.673 18.362C20.3854 18.9265 19.9265 19.3854 19.362 19.673C18.7202 20 17.8802 20 16.2 20H7.8C6.11984 20 5.27976 20 4.63803 19.673C4.07354 19.3854 3.6146 18.9265 3.32698 18.362C3 17.7202 3 16.8802 3 15.2V12Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M11 16L17 16" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M7.0001 16H7" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
