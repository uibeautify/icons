import { IconProps } from "../types";

/**
 * @component
 * @name Virus
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTIgM1Y3TTE4LjM2NCA1LjYzNjA0TDE1LjUzNTUgOC40NjQ0N00yMSAxMkgxN00xOC4zNjQgMTguMzY0TDE1LjUzNTUgMTUuNTM1NU0xMiAyMUwxMiAxN001LjYzNjA0IDE4LjM2NEw4LjQ2NDQ3IDE1LjUzNTVNMyAxMkg3TTUuNjM2MDQgNS42MzYwNEw4LjQ2NDQ3IDguNDY0NDciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMC4yNDc0IDMuMTM3OTZDMTEuMjA2MiAyLjkzMzUgMTIuOTkwMiAyLjk3MjkzIDEzLjc1MjYgMy4xMzgxM00xNy4wMjY0IDQuNDk0MDVDMTcuODQ5IDUuMDI3NDUgMTkuMDgyNiA2LjMxNjgxIDE5LjUwNDggNi45NzI2N00yMC44NjEgMTAuMjQ2NEMyMS4wNjU1IDExLjIwNTMgMjEuMDI2MSAxMi45ODkyIDIwLjg2MDkgMTMuNzUxNk0xOS41MDQ5IDE3LjAyNTVDMTguOTcxNSAxNy44NDggMTcuNjgyMiAxOS4wODE2IDE3LjAyNjMgMTkuNTAzOE0xMy43NTI2IDIwLjg2MDFDMTIuNzkzNyAyMS4wNjQ1IDExLjAwOTcgMjEuMDI1MSAxMC4yNDc0IDIwLjg1OTlNNi45NzM1MiAxOS41MDRDNi4xNTA5NyAxOC45NzA2IDQuOTE3MzcgMTcuNjgxMiA0LjQ5NTE0IDE3LjAyNTNNMy4xMzg5MyAxMy43NTE2QzIuOTM0NDcgMTIuNzkyOCAyLjk3MzkgMTEuMDA4OCAzLjEzOTEgMTAuMjQ2NE00LjQ5NTAyIDYuOTcyNTVDNS4wMjg0MyA2LjE0OTk5IDYuMzE3NzkgNC45MTY0IDYuOTczNjUgNC40OTQxNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/virus - Icon documentation
 */
export function Virus({
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
      <circle cx="12" cy="12" r="5" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" stroke={color}/><path d="M12 3V7M18.364 5.63604L15.5355 8.46447M21 12H17M18.364 18.364L15.5355 15.5355M12 21L12 17M5.63604 18.364L8.46447 15.5355M3 12H7M5.63604 5.63604L8.46447 8.46447" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M10.2474 3.13796C11.2062 2.9335 12.9902 2.97293 13.7526 3.13813M17.0264 4.49405C17.849 5.02745 19.0826 6.31681 19.5048 6.97267M20.861 10.2464C21.0655 11.2053 21.0261 12.9892 20.8609 13.7516M19.5049 17.0255C18.9715 17.848 17.6822 19.0816 17.0263 19.5038M13.7526 20.8601C12.7937 21.0645 11.0097 21.0251 10.2474 20.8599M6.97352 19.504C6.15097 18.9706 4.91737 17.6812 4.49514 17.0253M3.13893 13.7516C2.93447 12.7928 2.9739 11.0088 3.1391 10.2464M4.49502 6.97255C5.02843 6.14999 6.31779 4.9164 6.97365 4.49416" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
