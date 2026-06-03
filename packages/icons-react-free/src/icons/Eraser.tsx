import { IconProps } from "../types";

/**
 * @component
 * @name Eraser
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNOCAyMUwxNyAyMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTExLjI5MjIgNy4yMTE3NkwzLjU4ODkgMTQuOTE1QzIuODA3ODYgMTUuNjk2MSAyLjgwNzg1IDE2Ljk2MjQgMy41ODg5IDE3Ljc0MzVMNi4yMzY4IDIwLjM5MTRDNi42MDc1MiAyMC43NjIxIDcuMTA4OTggMjAuOTcyNCA3LjYzMzIzIDIwLjk3NzFMOS45MTg5NiAyMC45OTc0QzEwLjQ1NTUgMjEuMDAyMiAxMC45NzE1IDIwLjc5MTEgMTEuMzUxIDIwLjQxMTdMMTcuOTIxNSAxMy44NDExTTExLjI5MjIgNy4yMTE3NkwxMy43ODU1IDQuNzE4NDdDMTQuNTY2NSAzLjkzNzQzIDE1LjgzMjggMy45Mzc0MyAxNi42MTM5IDQuNzE4NDdMMjAuNDE0OCA4LjUxOTRDMjEuMTk1OSA5LjMwMDQ1IDIxLjE5NTkgMTAuNTY2OCAyMC40MTQ4IDExLjM0NzhMMTcuOTIxNSAxMy44NDExTTExLjI5MjIgNy4yMTE3NkwxNy45MjE1IDEzLjg0MTEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/eraser - Icon documentation
 */
export function Eraser({
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
      <path d="M8 21L17 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M11.2922 7.21176L3.5889 14.915C2.80786 15.6961 2.80785 16.9624 3.5889 17.7435L6.2368 20.3914C6.60752 20.7621 7.10898 20.9724 7.63323 20.9771L9.91896 20.9974C10.4555 21.0022 10.9715 20.7911 11.351 20.4117L17.9215 13.8411M11.2922 7.21176L13.7855 4.71847C14.5665 3.93743 15.8328 3.93743 16.6139 4.71847L20.4148 8.5194C21.1959 9.30045 21.1959 10.5668 20.4148 11.3478L17.9215 13.8411M11.2922 7.21176L17.9215 13.8411" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
