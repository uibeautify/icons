import { IconProps } from "../types";

/**
 * @component
 * @name Truck
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSI3IiBjeT0iMTgiIHI9IjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48Y2lyY2xlIGN4PSIxOCIgY3k9IjE4IiByPSIyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE0IDdWNkMxNCA0Ljg5NTQzIDEzLjEwNDYgNCAxMiA0TDQgNEMyLjg5NTQzIDQgMiA0Ljg5NTQzIDIgNlYxNkMyIDE3LjEwNDYgMi44OTU0MyAxOCA0IDE4SDVNMTQgN0gxNS40Mzg0QzE2LjM1NjIgNyAxNy4xNTYxIDcuNjI0NTkgMTcuMzc4NyA4LjUxNDkzTDE3LjgxMDYgMTAuMjQyNUMxNy45MjE5IDEwLjY4NzcgMTguMzIxOSAxMSAxOC43ODA4IDExSDIwQzIxLjEwNDYgMTEgMjIgMTEuODk1NCAyMiAxM1YxN0MyMiAxNy41NTIzIDIxLjU1MjMgMTggMjEgMThIMjBNMTQgN1YxOE0xNCAxOEgxNk0xNCAxOEg5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/truck - Icon documentation
 */
export function Truck({
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
      <circle cx="7" cy="18" r="2" strokeWidth={strokeWidth} stroke={color}/><circle cx="18" cy="18" r="2" strokeWidth={strokeWidth} stroke={color}/><path d="M14 7V6C14 4.89543 13.1046 4 12 4L4 4C2.89543 4 2 4.89543 2 6V16C2 17.1046 2.89543 18 4 18H5M14 7H15.4384C16.3562 7 17.1561 7.62459 17.3787 8.51493L17.8106 10.2425C17.9219 10.6877 18.3219 11 18.7808 11H20C21.1046 11 22 11.8954 22 13V17C22 17.5523 21.5523 18 21 18H20M14 7V18M14 18H16M14 18H9" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
