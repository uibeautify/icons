import { IconProps } from "../types";

/**
 * @component
 * @name Store
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNSA4VjIxSDE5VjgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0zIDRDMyAzLjQ0NzcyIDMuNDQ3NzIgMyA0IDNIOVY1QzkgNi42NTY4NSA3LjY1Njg1IDggNiA4QzQuMzQzMTUgOCAzIDYuNjU2ODUgMyA1VjRaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOSAzSDE1VjVDMTUgNi42NTY4NSAxMy42NTY5IDggMTIgOEMxMC4zNDMxIDggOSA2LjY1Njg1IDkgNVYzWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE1IDNIMjBDMjAuNTUyMyAzIDIxIDMuNDQ3NzIgMjEgNFY1QzIxIDYuNjU2ODUgMTkuNjU2OSA4IDE4IDhDMTYuMzQzMSA4IDE1IDYuNjU2ODUgMTUgNVYzWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTMgMjFIMjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik04IDE0TDE2IDE0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOSAxNEgxNVYyMUg5VjE0WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/store - Icon documentation
 */
export function Store({
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
      <path d="M5 8V21H19V8" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 4C3 3.44772 3.44772 3 4 3H9V5C9 6.65685 7.65685 8 6 8C4.34315 8 3 6.65685 3 5V4Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M9 3H15V5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5V3Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M15 3H20C20.5523 3 21 3.44772 21 4V5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5V3Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 21H21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M8 14L16 14" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M9 14H15V21H9V14Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
