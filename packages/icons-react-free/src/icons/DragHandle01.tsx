import { IconProps } from "../types";

/**
 * @component
 * @name DragHandle01
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNSAxNkM1IDE2LjU1MjMgNC41NTIyOCAxNyA0IDE3QzMuNDQ3NzIgMTcgMyAxNi41NTIzIDMgMTZDMyAxNS40NDc3IDMuNDQ3NzIgMTUgNCAxNUM0LjU1MjI4IDE1IDUgMTUuNDQ3NyA1IDE2WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMyAxNkMxMyAxNi41NTIzIDEyLjU1MjMgMTcgMTIgMTdDMTEuNDQ3NyAxNyAxMSAxNi41NTIzIDExIDE2QzExIDE1LjQ0NzcgMTEuNDQ3NyAxNSAxMiAxNUMxMi41NTIzIDE1IDEzIDE1LjQ0NzcgMTMgMTZaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTIxIDE2QzIxIDE2LjU1MjMgMjAuNTUyMyAxNyAyMCAxN0MxOS40NDc3IDE3IDE5IDE2LjU1MjMgMTkgMTZDMTkgMTUuNDQ3NyAxOS40NDc3IDE1IDIwIDE1QzIwLjU1MjMgMTUgMjEgMTUuNDQ3NyAyMSAxNloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNSA4QzUgOC41NTIyOCA0LjU1MjI4IDkgNCA5QzMuNDQ3NzIgOSAzIDguNTUyMjggMyA4QzMgNy40NDc3MiAzLjQ0NzcyIDcgNCA3QzQuNTUyMjggNyA1IDcuNDQ3NzIgNSA4WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMyA4QzEzIDguNTUyMjggMTIuNTUyMyA5IDEyIDlDMTEuNDQ3NyA5IDExIDguNTUyMjggMTEgOEMxMSA3LjQ0NzcyIDExLjQ0NzcgNyAxMiA3QzEyLjU1MjMgNyAxMyA3LjQ0NzcyIDEzIDhaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTIxIDhDMjEgOC41NTIyOCAyMC41NTIzIDkgMjAgOUMxOS40NDc3IDkgMTkgOC41NTIyOCAxOSA4QzE5IDcuNDQ3NzIgMTkuNDQ3NyA3IDIwIDdDMjAuNTUyMyA3IDIxIDcuNDQ3NzIgMjEgOFoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/drag-handle-01 - Icon documentation
 */
export function DragHandle01({
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
      <path d="M5 16C5 16.5523 4.55228 17 4 17C3.44772 17 3 16.5523 3 16C3 15.4477 3.44772 15 4 15C4.55228 15 5 15.4477 5 16Z" strokeWidth={strokeWidth} stroke={color}/><path d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z" strokeWidth={strokeWidth} stroke={color}/><path d="M21 16C21 16.5523 20.5523 17 20 17C19.4477 17 19 16.5523 19 16C19 15.4477 19.4477 15 20 15C20.5523 15 21 15.4477 21 16Z" strokeWidth={strokeWidth} stroke={color}/><path d="M5 8C5 8.55228 4.55228 9 4 9C3.44772 9 3 8.55228 3 8C3 7.44772 3.44772 7 4 7C4.55228 7 5 7.44772 5 8Z" strokeWidth={strokeWidth} stroke={color}/><path d="M13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z" strokeWidth={strokeWidth} stroke={color}/><path d="M21 8C21 8.55228 20.5523 9 20 9C19.4477 9 19 8.55228 19 8C19 7.44772 19.4477 7 20 7C20.5523 7 21 7.44772 21 8Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
