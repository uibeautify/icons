import { IconProps } from "../types";

/**
 * @component
 * @name Save
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyAxMUMzIDEwLjI2NiAzIDkuNTE5MTcgMyA4Ljc5OTk3QzMgNy4xMTk4MyAzIDYuMjc5NzYgMy4zMjY5OCA1LjYzODAzQzMuNjE0NiA1LjA3MzU0IDQuMDczNTQgNC42MTQ2IDQuNjM4MDMgNC4zMjY5OEM1LjI3OTc2IDQgNi4xMTk4NCA0IDcuOCA0SDE2LjJDMTcuODgwMiA0IDE4LjcyMDIgNCAxOS4zNjIgNC4zMjY5OEMxOS45MjY1IDQuNjE0NiAyMC4zODU0IDUuMDczNTQgMjAuNjczIDUuNjM4MDNDMjEgNi4yNzk3NiAyMSA3LjExOTg0IDIxIDguOFYxMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEyIDExVjIwTTE2IDE2TDEyIDIwTDggMTYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/save - Icon documentation
 */
export function Save({
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
      <path d="M3 11C3 10.266 3 9.51917 3 8.79997C3 7.11983 3 6.27976 3.32698 5.63803C3.6146 5.07354 4.07354 4.6146 4.63803 4.32698C5.27976 4 6.11984 4 7.8 4H16.2C17.8802 4 18.7202 4 19.362 4.32698C19.9265 4.6146 20.3854 5.07354 20.673 5.63803C21 6.27976 21 7.11984 21 8.8V11" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 11V20M16 16L12 20L8 16" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
