import { IconProps } from "../types";

/**
 * @component
 * @name SquareExclude
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTYgM0g0QzMuNDQ3NzIgMyAzIDMuNDQ3NzIgMyA0VjE2QzMgMTYuNTUyMyAzLjQ0NzcyIDE3IDQgMTdIN1YyMEM3IDIwLjU1MjMgNy40NDc3MiAyMSA4IDIxSDIwQzIwLjU1MjMgMjEgMjEgMjAuNTUyMyAyMSAyMFY4QzIxIDcuNDQ3NzIgMjAuNTUyMyA3IDIwIDdIMTdWNEMxNyAzLjQ0NzcyIDE2LjU1MjMgMyAxNiAzWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTcgMTBWOEM3IDcuNDQ3NzIgNy40NDc3MiA3IDggN0gxMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE0IDdIMTZDMTYuNTUyMyA3IDE3IDcuNDQ3NzIgMTcgOFYxMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE3IDE0VjE2QzE3IDE2LjU1MjMgMTYuNTUyMyAxNyAxNiAxN0gxNCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTcgMTRWMTZDNyAxNi41NTIzIDcuNDQ3NzIgMTcgOCAxN0gxMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/square-exclude - Icon documentation
 */
export function SquareExclude({
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
      <path d="M16 3H4C3.44772 3 3 3.44772 3 4V16C3 16.5523 3.44772 17 4 17H7V20C7 20.5523 7.44772 21 8 21H20C20.5523 21 21 20.5523 21 20V8C21 7.44772 20.5523 7 20 7H17V4C17 3.44772 16.5523 3 16 3Z" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" stroke={color}/><path d="M7 10V8C7 7.44772 7.44772 7 8 7H10" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M14 7H16C16.5523 7 17 7.44772 17 8V10" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M17 14V16C17 16.5523 16.5523 17 16 17H14" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M7 14V16C7 16.5523 7.44772 17 8 17H10" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
