import { IconProps } from "../types";

/**
 * @component
 * @name PaperCheck
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNi43MjcyNyA3QzYuMDUxNDUgNyA1LjcxMzU0IDcgNS40MzIyNSA3LjA1NDIxQzQuMjI4MDIgNy4yODYzMSAzLjI4NjMxIDguMjI4MDIgMy4wNTQyMSA5LjQzMjI1QzMgOS43MTM1NCAzIDEwLjA1MTQgMyAxMC43MjczVjE2LjJDMyAxNy44ODAyIDMgMTguNzIwMiAzLjMyNjk4IDE5LjM2MkMzLjYxNDYgMTkuOTI2NSA0LjA3MzU0IDIwLjM4NTQgNC42MzgwMyAyMC42NzNDNS4yNzk3NiAyMSA2LjExOTg0IDIxIDcuOCAyMUgxNi4yQzE3Ljg4MDIgMjEgMTguNzIwMiAyMSAxOS4zNjIgMjAuNjczQzE5LjkyNjUgMjAuMzg1NCAyMC4zODU0IDE5LjkyNjUgMjAuNjczIDE5LjM2MkMyMSAxOC43MjAyIDIxIDE3Ljg4MDIgMjEgMTYuMlYxMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTcgMTdMOSAxNyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEzIDE3TDE3IDE3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTcuODk0MSA5LjAzMTE3TDIwLjQ5MjIgNy41MzExN0MyMC45NzA1IDcuMjU1MDMgMjEuMTM0MyA2LjY0MzQ0IDIwLjg1ODIgNi4xNjUxNUwxOS44NTgyIDQuNDMzMUMxOS41ODIgMy45NTQ4IDE4Ljk3MDUgMy43OTA5MyAxOC40OTIyIDQuMDY3MDdMMTAuNDk5IDguNjgxOTFDMTAuMDU4MyA4LjkzNjM0IDkuNjcwMjMgOS4yNzI1NCA5LjM1NTU0IDkuNjcyNDVMNi41MDE3OCAxMy4yOTkxTDExLjA2OTQgMTIuNjQxQzExLjU3MzEgMTIuNTY4NSAxMi4wNTgzIDEyLjQwMDQgMTIuNDk5IDEyLjE0NkwxNy44OTQxIDkuMDMxMTdaTTE3Ljg5NDEgOS4wMzExN0wxNC44OTQxIDMuODM1MDJDMTQuNjE3OSAzLjM1NjczIDE0LjAwNjQgMy4xOTI4NSAxMy41MjgxIDMuNDY4OTlMMTAuOTMgNC45Njg5OSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/paper-check - Icon documentation
 */
export function PaperCheck({
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
      <path d="M6.72727 7C6.05145 7 5.71354 7 5.43225 7.05421C4.22802 7.28631 3.28631 8.22802 3.05421 9.43225C3 9.71354 3 10.0514 3 10.7273V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V13" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M7 17L9 17" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M13 17L17 17" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M17.8941 9.03117L20.4922 7.53117C20.9705 7.25503 21.1343 6.64344 20.8582 6.16515L19.8582 4.4331C19.582 3.9548 18.9705 3.79093 18.4922 4.06707L10.499 8.68191C10.0583 8.93634 9.67023 9.27254 9.35554 9.67245L6.50178 13.2991L11.0694 12.641C11.5731 12.5685 12.0583 12.4004 12.499 12.146L17.8941 9.03117ZM17.8941 9.03117L14.8941 3.83502C14.6179 3.35673 14.0064 3.19285 13.5281 3.46899L10.93 4.96899" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
