import { IconProps } from "../types";

/**
 * @component
 * @name PaintPalette
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMjEgMTJDMjEgMTYuOTcwNiAxNi45NzA2IDIxIDEyIDIxQzcuMDI5NDQgMjEgMyAxNi45NzA2IDMgMTJDMyA4LjY2ODczIDYuNjA5ODkgOS45NTYxNCA5LjMgOC40QzEwLjYyMzggNy42MzQyMyAxMC4zNjA3IDMgMTIgM0MxNi45NzA2IDMgMjEgNy4wMjk0NCAyMSAxMloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48Y2lyY2xlIGN4PSIxNC44ODQxIiBjeT0iOS41NDMwNCIgcj0iMS44IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTUuOTgxMyAxNS41MjA5SDE1LjcxMjVNMTYuMzAxNCAxNS41MjA5QzE2LjMwMTQgMTUuNzY5NSAxNi4wOTk5IDE1Ljk3MDkgMTUuODUxNCAxNS45NzA5QzE1LjYwMjggMTUuOTcwOSAxNS40MDE0IDE1Ljc2OTUgMTUuNDAxNCAxNS41MjA5QzE1LjQwMTQgMTUuMjcyNCAxNS42MDI4IDE1LjA3MDkgMTUuODUxNCAxNS4wNzA5QzE2LjA5OTkgMTUuMDcwOSAxNi4zMDE0IDE1LjI3MjQgMTYuMzAxNCAxNS41MjA5WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTExLjY4IDE3LjExMzZIMTEuNDExMU0xMiAxNy4xMTM2QzEyIDE3LjM2MjEgMTEuNzk4NSAxNy41NjM2IDExLjU1IDE3LjU2MzZDMTEuMzAxNSAxNy41NjM2IDExLjEgMTcuMzYyMSAxMS4xIDE3LjExMzZDMTEuMSAxNi44NjUgMTEuMzAxNSAxNi42NjM2IDExLjU1IDE2LjY2MzZDMTEuNzk4NSAxNi42NjM2IDEyIDE2Ljg2NSAxMiAxNy4xMTM2WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTcuODA0NzcgMTQuNjIwOUg3LjUzNTg4TTguMTI0NzkgMTQuNjIwOUM4LjEyNDc5IDE0Ljg2OTQgNy45MjMzMiAxNS4wNzA5IDcuNjc0NzkgMTUuMDcwOUM3LjQyNjI2IDE1LjA3MDkgNy4yMjQ3OSAxNC44Njk0IDcuMjI0NzkgMTQuNjIwOUM3LjIyNDc5IDE0LjM3MjQgNy40MjYyNiAxNC4xNzA5IDcuNjc0NzkgMTQuMTcwOUM3LjkyMzMyIDE0LjE3MDkgOC4xMjQ3OSAxNC4zNzI0IDguMTI0NzkgMTQuNjIwOVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/paint-palette - Icon documentation
 */
export function PaintPalette({
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
      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 8.66873 6.60989 9.95614 9.3 8.4C10.6238 7.63423 10.3607 3 12 3C16.9706 3 21 7.02944 21 12Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><circle cx="14.8841" cy="9.54304" r="1.8" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M15.9813 15.5209H15.7125M16.3014 15.5209C16.3014 15.7695 16.0999 15.9709 15.8514 15.9709C15.6028 15.9709 15.4014 15.7695 15.4014 15.5209C15.4014 15.2724 15.6028 15.0709 15.8514 15.0709C16.0999 15.0709 16.3014 15.2724 16.3014 15.5209Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M11.68 17.1136H11.4111M12 17.1136C12 17.3621 11.7985 17.5636 11.55 17.5636C11.3015 17.5636 11.1 17.3621 11.1 17.1136C11.1 16.865 11.3015 16.6636 11.55 16.6636C11.7985 16.6636 12 16.865 12 17.1136Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M7.80477 14.6209H7.53588M8.12479 14.6209C8.12479 14.8694 7.92332 15.0709 7.67479 15.0709C7.42626 15.0709 7.22479 14.8694 7.22479 14.6209C7.22479 14.3724 7.42626 14.1709 7.67479 14.1709C7.92332 14.1709 8.12479 14.3724 8.12479 14.6209Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
