import { IconProps } from "../types";

/**
 * @component
 * @name VolumeDown
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTkgMTUuNjA3NUMxOS42MzQ4IDE0LjU1NCAyMCAxMy4zMTk2IDIwIDExLjk5OTlDMjAgMTAuNjgwMyAxOS42MzQ4IDkuNDQ1ODggMTkgOC4zOTIzMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE1IDUuNTg4ODZWMTguNDExMUMxNSAxOS4yNjg0IDE1IDE5LjY5NyAxNC44MTk1IDE5Ljk1NTFDMTQuNjYxOCAyMC4xODA1IDE0LjQxODMgMjAuMzMxIDE0LjE0NjIgMjAuMzcxMkMxMy44MzQ1IDIwLjQxNzMgMTMuNDUxMiAyMC4yMjU2IDEyLjY4NDUgMTkuODQyMkwxMi42ODQ1IDE5Ljg0MjJMNS42ODMyOCAxNi4zNDE2QzUuMjI3NCAxNi4xMTM3IDQuOTk5NDUgMTUuOTk5NyA0LjgwMTcyIDE1Ljg2OTdDMy44MTYxNSAxNS4yMjEzIDMuMTY3MDMgMTQuMTcxIDMuMDI3OTEgMTIuOTk5NkMzIDEyLjc2NDUgMyAxMi41MDk3IDMgMTJDMyAxMS40OTAzIDMgMTEuMjM1NSAzLjAyNzkxIDExLjAwMDRDMy4xNjcwMyA5LjgyODk3IDMuODE2MTUgOC43Nzg2NyA0LjgwMTcyIDguMTMwMzVDNC45OTk0NSA4LjAwMDI3IDUuMjI3MzkgNy44ODYzIDUuNjgzMjcgNy42NTgzNkw1LjY4MzI4IDcuNjU4MzZMMTIuNjg0NSA0LjE1Nzc3QzEzLjQ1MTIgMy43NzQ0MSAxMy44MzQ1IDMuNTgyNzMgMTQuMTQ2MiAzLjYyODc3QzE0LjQxODMgMy42Njg5OCAxNC42NjE4IDMuODE5NDkgMTQuODE5NSA0LjA0NDg5QzE1IDQuMzAzMDMgMTUgNC43MzE2NCAxNSA1LjU4ODg2WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/volume-down - Icon documentation
 */
export function VolumeDown({
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
      <path d="M19 15.6075C19.6348 14.554 20 13.3196 20 11.9999C20 10.6803 19.6348 9.44588 19 8.39233" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M15 5.58886V18.4111C15 19.2684 15 19.697 14.8195 19.9551C14.6618 20.1805 14.4183 20.331 14.1462 20.3712C13.8345 20.4173 13.4512 20.2256 12.6845 19.8422L12.6845 19.8422L5.68328 16.3416C5.2274 16.1137 4.99945 15.9997 4.80172 15.8697C3.81615 15.2213 3.16703 14.171 3.02791 12.9996C3 12.7645 3 12.5097 3 12C3 11.4903 3 11.2355 3.02791 11.0004C3.16703 9.82897 3.81615 8.77867 4.80172 8.13035C4.99945 8.00027 5.22739 7.8863 5.68327 7.65836L5.68328 7.65836L12.6845 4.15777C13.4512 3.77441 13.8345 3.58273 14.1462 3.62877C14.4183 3.66898 14.6618 3.81949 14.8195 4.04489C15 4.30303 15 4.73164 15 5.58886Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
