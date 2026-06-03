import { IconProps } from "../types";

/**
 * @component
 * @name User01Plus
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjciIHI9IjQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTEgMTVDMTAuMjY5NCAxNSA5LjU1MDMxIDE1LjAyMTggOC44NDU5MiAxNS4wNjRDMS4xMDMwMiAxNS41Mjc2IDMuMjQxOSAyMSAxMSAyMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE3IDIwVjE0TTE0IDE3SDIwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/user-01-plus - Icon documentation
 */
export function User01Plus({
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
      <circle cx="11" cy="7" r="4" strokeWidth={strokeWidth} stroke={color}/><path d="M11 15C10.2694 15 9.55031 15.0218 8.84592 15.064C1.10302 15.5276 3.2419 21 11 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M17 20V14M14 17H20" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
