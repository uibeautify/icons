import { IconProps } from "../types";

/**
 * @component
 * @name Delivery
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNSA0TDExIDRDMTIuMTA0NiA0IDEzIDQuODk1NDMgMTMgNlY3TTIgMThINUgxM00xMyA3SDE0LjQzODRDMTUuMzU2MiA3IDE2LjE1NjEgNy42MjQ1OSAxNi4zNzg3IDguNTE0OTNMMTYuODEwNiAxMC4yNDI1QzE2LjkyMTkgMTAuNjg3NyAxNy4zMjE5IDExIDE3Ljc4MDggMTFIMjBDMjEuMTA0NiAxMSAyMiAxMS44OTU0IDIyIDEzVjE3QzIyIDE3LjU1MjMgMjEuNTUyMyAxOCAyMSAxOEgyME0xMyA3VjE4TTEzIDE4SDE2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNiAxM0w5IDEzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMyA5TDggOSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PGNpcmNsZSBjeD0iMTgiIGN5PSIxOCIgcj0iMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/delivery - Icon documentation
 */
export function Delivery({
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
      <path d="M5 4L11 4C12.1046 4 13 4.89543 13 6V7M2 18H5H13M13 7H14.4384C15.3562 7 16.1561 7.62459 16.3787 8.51493L16.8106 10.2425C16.9219 10.6877 17.3219 11 17.7808 11H20C21.1046 11 22 11.8954 22 13V17C22 17.5523 21.5523 18 21 18H20M13 7V18M13 18H16" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M6 13L9 13" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M3 9L8 9" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><circle cx="18" cy="18" r="2" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
