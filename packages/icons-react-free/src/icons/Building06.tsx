import { IconProps } from "../types";

/**
 * @component
 * @name Building06
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyA2QzMgNC4zNDMxNSA0LjM0MzE1IDMgNiAzSDEyQzEzLjY1NjkgMyAxNSA0LjM0MzE1IDE1IDZWMjFINEMzLjQ0NzcyIDIxIDMgMjAuNTUyMyAzIDIwVjZaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOCA3SDEwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOCAxMUgxMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTggMTVIMTAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNSAxMEgxOEMxOS42NTY5IDEwIDIxIDExLjM0MzEgMjEgMTNWMjBDMjEgMjAuNTUyMyAyMC41NTIzIDIxIDIwIDIxSDE1VjEwWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/building-06 - Icon documentation
 */
export function Building06({
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
      <path d="M3 6C3 4.34315 4.34315 3 6 3H12C13.6569 3 15 4.34315 15 6V21H4C3.44772 21 3 20.5523 3 20V6Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M8 7H10" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M8 11H10" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M8 15H10" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M15 10H18C19.6569 10 21 11.3431 21 13V20C21 20.5523 20.5523 21 20 21H15V10Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
