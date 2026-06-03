import { IconProps } from "../types";

/**
 * @component
 * @name Home02
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNCA4VjE2LjJDNCAxNy44ODAyIDQgMTguNzIwMiA0LjMyNjk4IDE5LjM2MkM0LjYxNDYgMTkuOTI2NSA1LjA3MzU0IDIwLjM4NTQgNS42MzgwMyAyMC42NzNDNi4yNzk3NiAyMSA3LjExOTg0IDIxIDguOCAyMUgxNS4yQzE2Ljg4MDIgMjEgMTcuNzIwMiAyMSAxOC4zNjIgMjAuNjczQzE4LjkyNjUgMjAuMzg1NCAxOS4zODU0IDE5LjkyNjUgMTkuNjczIDE5LjM2MkMyMCAxOC43MjAyIDIwIDE3Ljg4MDIgMjAgMTYuMlY4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMiA5TDkuNTMwNDIgNC40ODE3NUMxMC40MjgzIDMuOTQzMDEgMTAuODc3MyAzLjY3MzY0IDExLjM1NjUgMy41NjgzOUMxMS43ODA1IDMuNDc1MyAxMi4yMTk1IDMuNDc1MyAxMi42NDM1IDMuNTY4MzlDMTMuMTIyNyAzLjY3MzY0IDEzLjU3MTcgMy45NDMwMSAxNC40Njk2IDQuNDgxNzVMMjIgOSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTkgMTdDOSAxNi4wNjgxIDkgMTUuNjAyMiA5LjE1MjI0IDE1LjIzNDZDOS4zNTUyMyAxNC43NDQ2IDkuNzQ0NTggMTQuMzU1MiAxMC4yMzQ2IDE0LjE1MjJDMTAuNjAyMiAxNCAxMS4wNjgxIDE0IDEyIDE0VjE0QzEyLjkzMTkgMTQgMTMuMzk3OCAxNCAxMy43NjU0IDE0LjE1MjJDMTQuMjU1NCAxNC4zNTUyIDE0LjY0NDggMTQuNzQ0NiAxNC44NDc4IDE1LjIzNDZDMTUgMTUuNjAyMiAxNSAxNi4wNjgxIDE1IDE3VjIxSDlWMTdaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/home-02 - Icon documentation
 */
export function Home02({
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
      <path d="M4 8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V8" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M2 9L9.53042 4.48175C10.4283 3.94301 10.8773 3.67364 11.3565 3.56839C11.7805 3.4753 12.2195 3.4753 12.6435 3.56839C13.1227 3.67364 13.5717 3.94301 14.4696 4.48175L22 9" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M9 17C9 16.0681 9 15.6022 9.15224 15.2346C9.35523 14.7446 9.74458 14.3552 10.2346 14.1522C10.6022 14 11.0681 14 12 14V14C12.9319 14 13.3978 14 13.7654 14.1522C14.2554 14.3552 14.6448 14.7446 14.8478 15.2346C15 15.6022 15 16.0681 15 17V21H9V17Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
