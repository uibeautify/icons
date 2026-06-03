import { IconProps } from "../types";

/**
 * @component
 * @name FilterFunnel
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMjAuMzgyIDNIMy42MTgwM0MyLjg3NDY1IDMgMi4zOTExNiAzLjc4MjMxIDIuNzIzNjEgNC40NDcyMUwzLjA0NjU3IDUuMDkzMTNDNC4zMjIzNiA3LjY0NDcyIDYuMjk5MzIgOS43Nzk1OSA4Ljc0NTU0IDExLjI0NzNMMTAgMTJWMjFMMTQgMTlWMTJMMTUuMjU0NSAxMS4yNDczQzE3LjcwMDcgOS43Nzk1OSAxOS42Nzc2IDcuNjQ0NzIgMjAuOTUzNCA1LjA5MzEzTDIxLjI3NjQgNC40NDcyMUMyMS42MDg4IDMuNzgyMzEgMjEuMTI1MyAzIDIwLjM4MiAzWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTIwLjM4MiAzSDMuNjE4MDNDMi44NzQ2NSAzIDIuMzkxMTYgMy43ODIzMSAyLjcyMzYxIDQuNDQ3MjFMMy4wNDY1NyA1LjA5MzEzQzQuMzIyMzYgNy42NDQ3MiA2LjI5OTMyIDkuNzc5NTkgOC43NDU1NCAxMS4yNDczTDEwIDEyVjIxTDE0IDE5VjEyTDE1LjI1NDUgMTEuMjQ3M0MxNy43MDA3IDkuNzc5NTkgMTkuNjc3NiA3LjY0NDcyIDIwLjk1MzQgNS4wOTMxM0wyMS4yNzY0IDQuNDQ3MjFDMjEuNjA4OCAzLjc4MjMxIDIxLjEyNTMgMyAyMC4zODIgM1oiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/filter-funnel - Icon documentation
 */
export function FilterFunnel({
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
      <path d="M20.382 3H3.61803C2.87465 3 2.39116 3.78231 2.72361 4.44721L3.04657 5.09313C4.32236 7.64472 6.29932 9.77959 8.74554 11.2473L10 12V21L14 19V12L15.2545 11.2473C17.7007 9.77959 19.6776 7.64472 20.9534 5.09313L21.2764 4.44721C21.6088 3.78231 21.1253 3 20.382 3Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M20.382 3H3.61803C2.87465 3 2.39116 3.78231 2.72361 4.44721L3.04657 5.09313C4.32236 7.64472 6.29932 9.77959 8.74554 11.2473L10 12V21L14 19V12L15.2545 11.2473C17.7007 9.77959 19.6776 7.64472 20.9534 5.09313L21.2764 4.44721C21.6088 3.78231 21.1253 3 20.382 3Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
