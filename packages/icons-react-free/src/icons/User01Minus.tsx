import { IconProps } from "../types";

/**
 * @component
 * @name User01Minus
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjciIHI9IjQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTEgMjFDMy4yNDE5IDIxIDEuMTAzMDIgMTUuNTI3NiA4Ljg0NTkyIDE1LjA2NEM5LjU1MDMxIDE1LjAyMTggMTAuMjY5NCAxNSAxMSAxNUMxMS43MzA2IDE1IDEyLjQ0OTcgMTUuMDIxOCAxMy4xNTQxIDE1LjA2NEMxNC4zMjMxIDE1LjEzNCAxNS4yNjY4IDE1LjMxODEgMTYgMTUuNTgwNCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE1IDIwSDIxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/user-01-minus - Icon documentation
 */
export function User01Minus({
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
      <circle cx="11" cy="7" r="4" strokeWidth={strokeWidth} stroke={color}/><path d="M11 21C3.2419 21 1.10302 15.5276 8.84592 15.064C9.55031 15.0218 10.2694 15 11 15C11.7306 15 12.4497 15.0218 13.1541 15.064C14.3231 15.134 15.2668 15.3181 16 15.5804" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M15 20H21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
