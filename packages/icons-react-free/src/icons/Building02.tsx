import { IconProps } from "../types";

/**
 * @component
 * @name Building02
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyA2QzMgNC4zNDMxNSA0LjM0MzE1IDMgNiAzSDEzQzE0LjY1NjkgMyAxNiA0LjM0MzE1IDE2IDZWMjFINEMzLjQ0NzcyIDIxIDMgMjAuNTUyMyAzIDIwVjZaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTEuNSA3SDEyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNyA3SDcuNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTExLjUgMTFIMTIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik03IDExSDcuNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTExLjUgMTVIMTIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik03IDE1SDcuNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE2IDExSDE5QzIwLjEwNDYgMTEgMjEgMTEuODk1NCAyMSAxM1YyMEMyMSAyMC41NTIzIDIwLjU1MjMgMjEgMjAgMjFIMTZWMTFaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/building-02 - Icon documentation
 */
export function Building02({
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
      <path d="M3 6C3 4.34315 4.34315 3 6 3H13C14.6569 3 16 4.34315 16 6V21H4C3.44772 21 3 20.5523 3 20V6Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M11.5 7H12" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M7 7H7.5" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M11.5 11H12" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M7 11H7.5" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M11.5 15H12" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M7 15H7.5" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M16 11H19C20.1046 11 21 11.8954 21 13V20C21 20.5523 20.5523 21 20 21H16V11Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
