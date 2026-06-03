import { IconProps } from "../types";

/**
 * @component
 * @name Speedometer
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTIgM1Y1TTE4LjM2NCA1LjYzNjA0TDE2Ljk0OTcgNy4wNTAyNU0yMSAxMkgxOU0zIDEySDVNNS42MzYwNCA1LjYzNjA0TDcuMDUwMjUgNy4wNTAyNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEyIDE1VjEwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTMgMTVDMTMgMTUuNTUyMyAxMi41NTIzIDE2IDEyIDE2QzExLjQ0NzcgMTYgMTEgMTUuNTUyMyAxMSAxNUMxMSAxNC40NDc3IDExLjQ0NzcgMTQgMTIgMTRDMTIuNTUyMyAxNCAxMyAxNC40NDc3IDEzIDE1WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/speedometer - Icon documentation
 */
export function Speedometer({
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
      <path d="M12 3V5M18.364 5.63604L16.9497 7.05025M21 12H19M3 12H5M5.63604 5.63604L7.05025 7.05025" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 15V10" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M13 15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15C11 14.4477 11.4477 14 12 14C12.5523 14 13 14.4477 13 15Z" strokeWidth={strokeWidth} stroke={color}/><circle cx="12" cy="12" r="9" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
