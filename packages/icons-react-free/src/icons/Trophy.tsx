import { IconProps } from "../types";

/**
 * @component
 * @name Trophy
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNyAzLjMzMzMzQzcgMy4xNDkyNCA3LjE0OTI0IDMgNy4zMzMzMyAzSDE2LjY2NjdDMTYuODUwOCAzIDE3IDMuMTQ5MjQgMTcgMy4zMzMzM1YxMUMxNyAxMy43NjE0IDE0Ljc2MTQgMTYgMTIgMTZDOS4yMzg1OCAxNiA3IDEzLjc2MTQgNyAxMVYzLjMzMzMzWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik00LjUgNUg3VjExTDQuMDk2NjYgMTAuMTg5NUMzLjQ0ODM2IDEwLjAwODUgMyA5LjQxNzggMyA4Ljc0NDcxVjYuNUMzIDUuNjcxNTcgMy42NzE1NyA1IDQuNSA1WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE5LjUgNUgxN1YxMUwxOS45MDMzIDEwLjE4OTVDMjAuNTUxNiAxMC4wMDg1IDIxIDkuNDE3OCAyMSA4Ljc0NDcxVjYuNUMyMSA1LjY3MTU3IDIwLjMyODQgNSAxOS41IDVaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOCAyMUgxNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEyIDE2TDEyIDIxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/trophy - Icon documentation
 */
export function Trophy({
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
      <path d="M7 3.33333C7 3.14924 7.14924 3 7.33333 3H16.6667C16.8508 3 17 3.14924 17 3.33333V11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V3.33333Z" strokeWidth={strokeWidth} stroke={color}/><path d="M4.5 5H7V11L4.09666 10.1895C3.44836 10.0085 3 9.4178 3 8.74471V6.5C3 5.67157 3.67157 5 4.5 5Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M19.5 5H17V11L19.9033 10.1895C20.5516 10.0085 21 9.4178 21 8.74471V6.5C21 5.67157 20.3284 5 19.5 5Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M8 21H16" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 16L12 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
