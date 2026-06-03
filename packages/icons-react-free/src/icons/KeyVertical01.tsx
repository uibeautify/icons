import { IconProps } from "../types";

/**
 * @component
 * @name KeyVertical01
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTcgOEMxNyA1LjIzODU4IDE0Ljc2MTQgMyAxMiAzQzkuMjM4NTggMyA3IDUuMjM4NTggNyA4QzcgMTAuMDUwMyA4LjIzNDEgMTEuODEyNCAxMCAxMi41ODRWMTNMOSAxNC41TDEwIDE2TDkgMTcuNUwxMiAyMUwxNCAxOUwxNCAxMi41ODRDMTUuNzY1OSAxMS44MTI0IDE3IDEwLjA1MDMgMTcgOFoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMyA4QzEzIDguNTUyMjggMTIuNTUyMyA5IDEyIDlDMTEuNDQ3NyA5IDExIDguNTUyMjggMTEgOEMxMSA3LjQ0NzcyIDExLjQ0NzcgNyAxMiA3QzEyLjU1MjMgNyAxMyA3LjQ0NzcyIDEzIDhaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/key-vertical-01 - Icon documentation
 */
export function KeyVertical01({
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
      <path d="M17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.0503 8.2341 11.8124 10 12.584V13L9 14.5L10 16L9 17.5L12 21L14 19L14 12.584C15.7659 11.8124 17 10.0503 17 8Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
