import { IconProps } from "../types";

/**
 * @component
 * @name WhiteHouse
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNCAxNkwyMCAxNkMyMC41NTIzIDE2IDIxIDE2LjQ0NzcgMjEgMTdWMjBDMjEgMjAuNTUyMyAyMC41NTIzIDIxIDIwIDIxTDQgMjFDMy40NDc3MiAyMSAzIDIwLjU1MjMgMyAyMEwzIDE3QzMgMTYuNDQ3NyAzLjQ0NzcyIDE2IDQgMTZaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTkgMTZMMTkgMTMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNiAyMUwxNiAxNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTggMjFMOCAxNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTUgMTZMNSAxMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTQgMTJWMTFDNCAxMC40NDc3IDQuNDQ3NzIgMTAgNSAxMEg2LjcyMzAyQzYuOTA0MjYgMTAgNy4wODIxIDkuOTUwNzQgNy4yMzc1MSA5Ljg1NzQ5TDExLjQ4NTUgNy4zMDg3QzExLjgwMjIgNy4xMTg2OSAxMi4xOTc4IDcuMTE4NjkgMTIuNTE0NSA3LjMwODdMMTYuNzYyNSA5Ljg1NzQ5QzE2LjkxNzkgOS45NTA3NCAxNy4wOTU3IDEwIDE3LjI3NyAxMEgxOUMxOS41NTIzIDEwIDIwIDEwLjQ0NzcgMjAgMTFWMTJDMjAgMTIuNTUyMyAxOS41NTIzIDEzIDE5IDEzSDVDNC40NDc3MiAxMyA0IDEyLjU1MjMgNCAxMloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMiA3TDEyIDMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMiA0TDEzLjcwNDIgMy4zMTgzNEMxNC4yMDI0IDMuMTE5MDYgMTQuNzY2NyAzLjE3NzgyIDE1LjIxMzIgMy40NzU0NkMxNS42OTk3IDMuNzk5ODIgMTYuMzIyOCAzLjgzODYxIDE2Ljg0NTggMy41NzcxMUwxOCAzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/white-house - Icon documentation
 */
export function WhiteHouse({
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
      <path d="M4 16L20 16C20.5523 16 21 16.4477 21 17V20C21 20.5523 20.5523 21 20 21L4 21C3.44772 21 3 20.5523 3 20L3 17C3 16.4477 3.44772 16 4 16Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M19 16L19 13" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M16 21L16 16" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M8 21L8 16" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M5 16L5 13" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M4 12V11C4 10.4477 4.44772 10 5 10H6.72302C6.90426 10 7.0821 9.95074 7.23751 9.85749L11.4855 7.3087C11.8022 7.11869 12.1978 7.11869 12.5145 7.3087L16.7625 9.85749C16.9179 9.95074 17.0957 10 17.277 10H19C19.5523 10 20 10.4477 20 11V12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M12 7L12 3" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M12 4L13.7042 3.31834C14.2024 3.11906 14.7667 3.17782 15.2132 3.47546C15.6997 3.79982 16.3228 3.83861 16.8458 3.57711L18 3" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
