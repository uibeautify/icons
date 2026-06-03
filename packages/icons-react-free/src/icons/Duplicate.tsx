import { IconProps } from "../types";

/**
 * @component
 * @name Duplicate
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMjEgMThWMTEuNkMyMSA4LjIzOTY5IDIxIDYuNTU5NTMgMjAuMzQ2IDUuMjc2MDZDMTkuNzcwOCA0LjE0NzA4IDE4Ljg1MjkgMy4yMjkyIDE3LjcyMzkgMi42NTM5NkMxNi40NDA1IDIgMTQuNzYwMyAyIDExLjQgMkg4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMyAxMC44QzMgOS4xMTk4NCAzIDguMjc5NzYgMy4zMjY5OCA3LjYzODAzQzMuNjE0NiA3LjA3MzU0IDQuMDczNTQgNi42MTQ2IDQuNjM4MDMgNi4zMjY5OEM1LjI3OTc2IDYgNi4xMTk4NCA2IDcuOCA2SDEyLjJDMTMuODgwMiA2IDE0LjcyMDIgNiAxNS4zNjIgNi4zMjY5OEMxNS45MjY1IDYuNjE0NiAxNi4zODU0IDcuMDczNTQgMTYuNjczIDcuNjM4MDNDMTcgOC4yNzk3NiAxNyA5LjExOTg0IDE3IDEwLjhWMTcuMkMxNyAxOC44ODAyIDE3IDE5LjcyMDIgMTYuNjczIDIwLjM2MkMxNi4zODU0IDIwLjkyNjUgMTUuOTI2NSAyMS4zODU0IDE1LjM2MiAyMS42NzNDMTQuNzIwMiAyMiAxMy44ODAyIDIyIDEyLjIgMjJINy44QzYuMTE5ODQgMjIgNS4yNzk3NiAyMiA0LjYzODAzIDIxLjY3M0M0LjA3MzU0IDIxLjM4NTQgMy42MTQ2IDIwLjkyNjUgMy4zMjY5OCAyMC4zNjJDMyAxOS43MjAyIDMgMTguODgwMiAzIDE3LjJWMTAuOFoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTMgMTRIN00xMCAxMUwxMCAxNyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/duplicate - Icon documentation
 */
export function Duplicate({
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
      <path d="M21 18V11.6C21 8.23969 21 6.55953 20.346 5.27606C19.7708 4.14708 18.8529 3.2292 17.7239 2.65396C16.4405 2 14.7603 2 11.4 2H8" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 10.8C3 9.11984 3 8.27976 3.32698 7.63803C3.6146 7.07354 4.07354 6.6146 4.63803 6.32698C5.27976 6 6.11984 6 7.8 6H12.2C13.8802 6 14.7202 6 15.362 6.32698C15.9265 6.6146 16.3854 7.07354 16.673 7.63803C17 8.27976 17 9.11984 17 10.8V17.2C17 18.8802 17 19.7202 16.673 20.362C16.3854 20.9265 15.9265 21.3854 15.362 21.673C14.7202 22 13.8802 22 12.2 22H7.8C6.11984 22 5.27976 22 4.63803 21.673C4.07354 21.3854 3.6146 20.9265 3.32698 20.362C3 19.7202 3 18.8802 3 17.2V10.8Z" strokeWidth={strokeWidth} stroke={color}/><path d="M13 14H7M10 11L10 17" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
