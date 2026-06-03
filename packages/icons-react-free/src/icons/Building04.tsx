import { IconProps } from "../types";

/**
 * @component
 * @name Building04
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNOCA4LjE0MDZDOCA3LjQwNTg2IDguMjY5NjQgNi42OTY2NiA4Ljc1Nzc3IDYuMTQ3NTFMMTEuMjUyNiAzLjM0MDg0QzExLjY1MDQgMi44OTMzMiAxMi4zNDk2IDIuODkzMzIgMTIuNzQ3NCAzLjM0MDg0TDE1LjI0MjIgNi4xNDc1MUMxNS43MzA0IDYuNjk2NjYgMTYgNy40MDU4NiAxNiA4LjE0MDZWMjFIOFY4LjE0MDZaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMyAxM0MzIDExLjg5NTQgMy44OTU0MyAxMSA1IDExSDhWMjFINEMzLjQ0NzcyIDIxIDMgMjAuNTUyMyAzIDIwVjEzWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE2IDEyQzE2IDExLjQ0NzcgMTYuNDQ3NyAxMSAxNyAxMUgxOUMyMC4xMDQ2IDExIDIxIDExLjg5NTQgMjEgMTNWMjBDMjEgMjAuNTUyMyAyMC41NTIzIDIxIDIwIDIxSDE2VjEyWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEyLjE0NDQgOC41SDExLjg0NTZNMTIuNSA4LjVDMTIuNSA4Ljc3NjE0IDEyLjI3NjEgOSAxMiA5QzExLjcyMzkgOSAxMS41IDguNzc2MTQgMTEuNSA4LjVDMTEuNSA4LjIyMzg2IDExLjcyMzkgOCAxMiA4QzEyLjI3NjEgOCAxMi41IDguMjIzODYgMTIuNSA4LjVaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTIgMTdMMTIgMjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/building-04 - Icon documentation
 */
export function Building04({
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
      <path d="M8 8.1406C8 7.40586 8.26964 6.69666 8.75777 6.14751L11.2526 3.34084C11.6504 2.89332 12.3496 2.89332 12.7474 3.34084L15.2422 6.14751C15.7304 6.69666 16 7.40586 16 8.1406V21H8V8.1406Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 13C3 11.8954 3.89543 11 5 11H8V21H4C3.44772 21 3 20.5523 3 20V13Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M16 12C16 11.4477 16.4477 11 17 11H19C20.1046 11 21 11.8954 21 13V20C21 20.5523 20.5523 21 20 21H16V12Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12.1444 8.5H11.8456M12.5 8.5C12.5 8.77614 12.2761 9 12 9C11.7239 9 11.5 8.77614 11.5 8.5C11.5 8.22386 11.7239 8 12 8C12.2761 8 12.5 8.22386 12.5 8.5Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 17L12 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
