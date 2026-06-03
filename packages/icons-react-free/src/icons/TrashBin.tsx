import { IconProps } from "../types";

/**
 * @component
 * @name TrashBin
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNCA3SDIwTDE4LjM3MTcgMTYuOTczNEMxOC4xMzgyIDE4LjQwMzYgMTguMDIxNCAxOS4xMTg2IDE3LjY2NjMgMTkuNjU1NEMxNy4zNTMyIDIwLjEyODYgMTYuOTEyNCAyMC41MDMyIDE2LjM5NSAyMC43MzZDMTUuODA4IDIxIDE1LjA4MzUgMjEgMTMuNjM0NCAyMUgxMC4zNjU2QzguOTE2NTMgMjEgOC4xOTIgMjEgNy42MDUgMjAuNzM2QzcuMDg3NTkgMjAuNTAzMiA2LjY0Njc4IDIwLjEyODYgNi4zMzM3MiAxOS42NTU0QzUuOTc4NTUgMTkuMTE4NiA1Ljg2MTgxIDE4LjQwMzYgNS42MjgzMiAxNi45NzM0TDQgN1oiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMyA3SDIxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTAgMTJWMTYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNCAxMlYxNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTcgNUM3IDMuODk1NDMgNy44OTU0MyAzIDkgM0gxNUMxNi4xMDQ2IDMgMTcgMy44OTU0MyAxNyA1VjdIN1Y1WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/trash-bin - Icon documentation
 */
export function TrashBin({
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
      <path d="M4 7H20L18.3717 16.9734C18.1382 18.4036 18.0214 19.1186 17.6663 19.6554C17.3532 20.1286 16.9124 20.5032 16.395 20.736C15.808 21 15.0835 21 13.6344 21H10.3656C8.91653 21 8.192 21 7.605 20.736C7.08759 20.5032 6.64678 20.1286 6.33372 19.6554C5.97855 19.1186 5.86181 18.4036 5.62832 16.9734L4 7Z" strokeWidth={strokeWidth} stroke={color}/><path d="M3 7H21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M10 12V16" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M14 12V16" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M7 5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7H7V5Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
