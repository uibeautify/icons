import { IconProps } from "../types";

/**
 * @component
 * @name Building03
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNSA5LjM3OThDNSA4LjUwNDAzIDUuMzgyNjkgNy42NzE5OCA2LjA0NzYzIDcuMTAyMDNMMTAuMDQ3NiAzLjY3MzQ2QzExLjE3MTEgMi43MTA0OSAxMi44Mjg5IDIuNzEwNDkgMTMuOTUyNCAzLjY3MzQ2TDE3Ljk1MjQgNy4xMDIwNEMxOC42MTczIDcuNjcxOTggMTkgOC41MDQwMyAxOSA5LjM3OThWMjBDMTkgMjAuNTUyMyAxOC41NTIzIDIxIDE4IDIxSDZDNS40NDc3MiAyMSA1IDIwLjU1MjMgNSAyMFY5LjM3OThaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOSAxMEwxMCAxMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE0IDEwSDE1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOSAxNEwxMCAxNCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE0IDE0SDE1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/building-03 - Icon documentation
 */
export function Building03({
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
      <path d="M5 9.3798C5 8.50403 5.38269 7.67198 6.04763 7.10203L10.0476 3.67346C11.1711 2.71049 12.8289 2.71049 13.9524 3.67346L17.9524 7.10204C18.6173 7.67198 19 8.50403 19 9.3798V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V9.3798Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M9 10L10 10" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M14 10H15" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M9 14L10 14" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M14 14H15" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
