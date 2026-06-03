import { IconProps } from "../types";

/**
 * @component
 * @name SquareUnion
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTYgM0g0QzMuNDQ3NzIgMyAzIDMuNDQ3NzIgMyA0VjE2QzMgMTYuNTUyMyAzLjQ0NzcyIDE3IDQgMTdINkM2LjU1MjI4IDE3IDcgMTcuNDQ3NyA3IDE4VjIwQzcgMjAuNTUyMyA3LjQ0NzcyIDIxIDggMjFIMjBDMjAuNTUyMyAyMSAyMSAyMC41NTIzIDIxIDIwVjhDMjEgNy40NDc3MiAyMC41NTIzIDcgMjAgN0gxOEMxNy40NDc3IDcgMTcgNi41NTIyOCAxNyA2VjRDMTcgMy40NDc3MiAxNi41NTIzIDMgMTYgM1oiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/square-union - Icon documentation
 */
export function SquareUnion({
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
      <path d="M16 3H4C3.44772 3 3 3.44772 3 4V16C3 16.5523 3.44772 17 4 17H6C6.55228 17 7 17.4477 7 18V20C7 20.5523 7.44772 21 8 21H20C20.5523 21 21 20.5523 21 20V8C21 7.44772 20.5523 7 20 7H18C17.4477 7 17 6.55228 17 6V4C17 3.44772 16.5523 3 16 3Z" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
