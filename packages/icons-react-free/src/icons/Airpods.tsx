import { IconProps } from "../types";

/**
 * @component
 * @name Airpods
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyA3LjJWMTAuMkMzIDExLjE5NDEgMy44MDU4OSAxMiA0LjggMTJDNS40NjI3NCAxMiA2IDEyLjUzNzMgNiAxMy4yVjE5QzYgMjAuMTA0NiA2Ljg5NTQzIDIxIDggMjFDOS4xMDQ1NyAyMSAxMCAyMC4xMDQ2IDEwIDE5VjUuOEMxMCA0LjI1MzYgOC43NDY0IDMgNy4yIDNDNC44ODA0IDMgMyA0Ljg4MDQgMyA3LjJaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTIxIDcuMlYxMC4yQzIxIDExLjE5NDEgMjAuMTk0MSAxMiAxOS4yIDEyQzE4LjUzNzMgMTIgMTggMTIuNTM3MyAxOCAxMy4yVjE5QzE4IDIwLjEwNDYgMTcuMTA0NiAyMSAxNiAyMUMxNC44OTU0IDIxIDE0IDIwLjEwNDYgMTQgMTlWNS44QzE0IDQuMjUzNiAxNS4yNTM2IDMgMTYuOCAzQzE5LjExOTYgMyAyMSA0Ljg4MDQgMjEgNy4yWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/airpods - Icon documentation
 */
export function Airpods({
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
      <path d="M3 7.2V10.2C3 11.1941 3.80589 12 4.8 12C5.46274 12 6 12.5373 6 13.2V19C6 20.1046 6.89543 21 8 21C9.10457 21 10 20.1046 10 19V5.8C10 4.2536 8.7464 3 7.2 3C4.8804 3 3 4.8804 3 7.2Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M21 7.2V10.2C21 11.1941 20.1941 12 19.2 12C18.5373 12 18 12.5373 18 13.2V19C18 20.1046 17.1046 21 16 21C14.8954 21 14 20.1046 14 19V5.8C14 4.2536 15.2536 3 16.8 3C19.1196 3 21 4.8804 21 7.2Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
