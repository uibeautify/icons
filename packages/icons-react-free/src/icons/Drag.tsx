import { IconProps } from "../types";

/**
 * @component
 * @name Drag
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTAuNSA5VjUuNzVDMTAuNSA0Ljc4MzUgOS43MTY1IDQgOC43NSA0QzcuNzgzNSA0IDcgNC43ODM1IDcgNS43NVYxMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE0IDlWNC43NUMxNCAzLjc4MzUgMTMuMjE2NSAzIDEyLjI1IDNDMTEuMjgzNSAzIDEwLjUgMy43ODM1IDEwLjUgNC43NVY5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTcuNSA5VjUuNzVDMTcuNSA0Ljc4MzUgMTYuNzE2NSA0IDE1Ljc1IDRDMTQuNzgzNSA0IDE0IDQuNzgzNSAxNCA1Ljc1VjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0yMSAxMVY3Ljc1QzIxIDYuNzgzNSAyMC4yMTY1IDYgMTkuMjUgNkMxOC4yODM1IDYgMTcuNSA2Ljc4MzUgMTcuNSA3Ljc1VjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0yMSA5VjEyQzIxIDE2Ljk3MDYgMTYuOTcwNiAyMSAxMiAyMUM3LjAyOTQ0IDIxIDMgMTYuOTcwNiAzIDEyVjExLjU3MTRDMyAxMC4xNTEzIDQuMTUxMjcgOSA1LjU3MTQzIDlINyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/drag - Icon documentation
 */
export function Drag({
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
      <path d="M10.5 9V5.75C10.5 4.7835 9.7165 4 8.75 4C7.7835 4 7 4.7835 7 5.75V12" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M14 9V4.75C14 3.7835 13.2165 3 12.25 3C11.2835 3 10.5 3.7835 10.5 4.75V9" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M17.5 9V5.75C17.5 4.7835 16.7165 4 15.75 4C14.7835 4 14 4.7835 14 5.75V9" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M21 11V7.75C21 6.7835 20.2165 6 19.25 6C18.2835 6 17.5 6.7835 17.5 7.75V9" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M21 9V12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12V11.5714C3 10.1513 4.15127 9 5.57143 9H7" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
