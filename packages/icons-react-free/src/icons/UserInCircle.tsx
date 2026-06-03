import { IconProps } from "../types";

/**
 * @component
 * @name UserInCircle
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMC41IiByPSIzLjYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTcuNzE0OCAxOC43NjEzQzE2Ljg4MTQgMTYuMDQ1MyAxNC42Mzc0IDE0LjEgMTIgMTQuMUM5LjM2MjU4IDE0LjEgNy4xMTg1OSAxNi4wNDUzIDYuMjg1MTcgMTguNzYxMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/user-in-circle - Icon documentation
 */
export function UserInCircle({
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
      <circle cx="12" cy="12" r="9" strokeWidth={strokeWidth} stroke={color}/><circle cx="12" cy="10.5" r="3.6" strokeWidth={strokeWidth} stroke={color}/><path d="M17.7148 18.7613C16.8814 16.0453 14.6374 14.1 12 14.1C9.36258 14.1 7.11859 16.0453 6.28517 18.7613" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
