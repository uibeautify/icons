import { IconProps } from "../types";

/**
 * @component
 * @name Scan
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNiAzQzUuMDY4MTIgMyA0LjYwMjE4IDMgNC4yMzQ2MyAzLjE1MjI0QzMuNzQ0NTggMy4zNTUyMyAzLjM1NTIzIDMuNzQ0NTggMy4xNTIyNCA0LjIzNDYzQzMgNC42MDIxOCAzIDUuMDY4MTIgMyA2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTggM0MxOC45MzE5IDMgMTkuMzk3OCAzIDE5Ljc2NTQgMy4xNTIyNEMyMC4yNTU0IDMuMzU1MjMgMjAuNjQ0OCAzLjc0NDU4IDIwLjg0NzggNC4yMzQ2M0MyMSA0LjYwMjE4IDIxIDUuMDY4MTIgMjEgNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTIxIDE4QzIxIDE4LjkzMTkgMjEgMTkuMzk3OCAyMC44NDc4IDE5Ljc2NTRDMjAuNjQ0OCAyMC4yNTU0IDIwLjI1NTQgMjAuNjQ0OCAxOS43NjU0IDIwLjg0NzhDMTkuMzk3OCAyMSAxOC45MzE5IDIxIDE4IDIxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMyAxOEMzIDE4LjkzMTkgMyAxOS4zOTc4IDMuMTUyMjQgMTkuNzY1NEMzLjM1NTIzIDIwLjI1NTQgMy43NDQ1OCAyMC42NDQ4IDQuMjM0NjMgMjAuODQ3OEM0LjYwMjE4IDIxIDUuMDY4MTIgMjEgNiAyMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTMgMTJMMjEgMTIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/scan - Icon documentation
 */
export function Scan({
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
      <path d="M6 3C5.06812 3 4.60218 3 4.23463 3.15224C3.74458 3.35523 3.35523 3.74458 3.15224 4.23463C3 4.60218 3 5.06812 3 6" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M18 3C18.9319 3 19.3978 3 19.7654 3.15224C20.2554 3.35523 20.6448 3.74458 20.8478 4.23463C21 4.60218 21 5.06812 21 6" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M21 18C21 18.9319 21 19.3978 20.8478 19.7654C20.6448 20.2554 20.2554 20.6448 19.7654 20.8478C19.3978 21 18.9319 21 18 21" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M3 18C3 18.9319 3 19.3978 3.15224 19.7654C3.35523 20.2554 3.74458 20.6448 4.23463 20.8478C4.60218 21 5.06812 21 6 21" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M3 12L21 12" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
