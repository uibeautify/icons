import { IconProps } from "../types";

/**
 * @component
 * @name Speaker
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNSA2QzUgNC4zNDMxNSA2LjM0MzE1IDMgOCAzSDE2QzE3LjY1NjkgMyAxOSA0LjM0MzE1IDE5IDZWMThDMTkgMTkuNjU2OSAxNy42NTY5IDIxIDE2IDIxSDhDNi4zNDMxNSAyMSA1IDE5LjY1NjkgNSAxOEw1IDZaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxNSIgcj0iMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMS41IDhIMTIuNU0xMyA4QzEzIDguNTUyMjggMTIuNTUyMyA5IDEyIDlDMTEuNDQ3NyA5IDExIDguNTUyMjggMTEgOEMxMSA3LjQ0NzcyIDExLjQ0NzcgNyAxMiA3QzEyLjU1MjMgNyAxMyA3LjQ0NzcyIDEzIDhaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/speaker - Icon documentation
 */
export function Speaker({
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
      <path d="M5 6C5 4.34315 6.34315 3 8 3H16C17.6569 3 19 4.34315 19 6V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18L5 6Z" strokeWidth={strokeWidth} stroke={color}/><circle cx="12" cy="15" r="2" strokeWidth={strokeWidth} stroke={color}/><path d="M11.5 8H12.5M13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
