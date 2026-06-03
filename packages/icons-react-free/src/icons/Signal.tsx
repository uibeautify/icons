import { IconProps } from "../types";

/**
 * @component
 * @name Signal
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTYuNSAxNEMxNy4xMzgzIDEyLjgwNjkgMTcuNSAxMS40NDU0IDE3LjUgMTBDMTcuNSA4LjU1NDU5IDE3LjEzODMgNy4xOTMxIDE2LjUgNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTcuNSAxNEM2Ljg2MTY3IDEyLjgwNjkgNi41IDExLjQ0NTQgNi41IDEwQzYuNSA4LjU1NDU5IDYuODYxNjcgNy4xOTMxIDcuNSA2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMjAgMTdDMjEuMjY1OCAxNC45ODA4IDIyIDEyLjU3ODMgMjIgMTBDMjIgNy40MjE3NCAyMS4yNjU4IDUuMDE5MjIgMjAgMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTQgMTdDMi43MzQxOSAxNC45ODA4IDIgMTIuNTc4MyAyIDEwQzIgNy40MjE3NCAyLjczNDE5IDUuMDE5MjIgNCAzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTIgMTBWMjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMyAxMEMxMyAxMC41NTIzIDEyLjU1MjMgMTEgMTIgMTFDMTEuNDQ3NyAxMSAxMSAxMC41NTIzIDExIDEwQzExIDkuNDQ3NzIgMTEuNDQ3NyA5IDEyIDlDMTIuNTUyMyA5IDEzIDkuNDQ3NzIgMTMgMTBaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/signal - Icon documentation
 */
export function Signal({
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
      <path d="M16.5 14C17.1383 12.8069 17.5 11.4454 17.5 10C17.5 8.55459 17.1383 7.1931 16.5 6" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M7.5 14C6.86167 12.8069 6.5 11.4454 6.5 10C6.5 8.55459 6.86167 7.1931 7.5 6" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M20 17C21.2658 14.9808 22 12.5783 22 10C22 7.42174 21.2658 5.01922 20 3" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M4 17C2.73419 14.9808 2 12.5783 2 10C2 7.42174 2.73419 5.01922 4 3" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 10V21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M13 10C13 10.5523 12.5523 11 12 11C11.4477 11 11 10.5523 11 10C11 9.44772 11.4477 9 12 9C12.5523 9 13 9.44772 13 10Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
