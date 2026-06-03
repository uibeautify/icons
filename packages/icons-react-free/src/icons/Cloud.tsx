import { IconProps } from "../types";

/**
 * @component
 * @name Cloud
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyAxNC4yMzFDMyAxMi4xOTYxIDQuNDM1NTEgMTAuNTA2IDYuMzIxNDggMTAuMTc0NUM3LjEyODc2IDcuNzQ2MDUgOS4zNjYyIDYgMTIgNkMxNC45ODE4IDYgMTcuNDU1NSA4LjIzNzg1IDE3LjkyMTIgMTEuMTcwMkMxOS42NTU2IDExLjM4NDIgMjEgMTIuOTAzMyAyMSAxNC43NDU1QzIxIDE1LjY3NTQgMjAuNjU3NCAxNi41MjMgMjAuMDk1IDE3LjE2MTlDMTkuNDkxNyAxNy44NDc0IDE4LjUyNTMgMTggMTcuNjEyMiAxOEg2LjY1MDQyQzUuNTcwMiAxOCA0LjQyOTcgMTcuNzU2MyAzLjgxOTg0IDE2Ljg2NDdDMy4zMDU1MiAxNi4xMTI3IDMgMTUuMTY5OCAzIDE0LjIzMVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/cloud - Icon documentation
 */
export function Cloud({
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
      <path d="M3 14.231C3 12.1961 4.43551 10.506 6.32148 10.1745C7.12876 7.74605 9.3662 6 12 6C14.9818 6 17.4555 8.23785 17.9212 11.1702C19.6556 11.3842 21 12.9033 21 14.7455C21 15.6754 20.6574 16.523 20.095 17.1619C19.4917 17.8474 18.5253 18 17.6122 18H6.65042C5.5702 18 4.4297 17.7563 3.81984 16.8647C3.30552 16.1127 3 15.1698 3 14.231Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
