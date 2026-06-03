import { IconProps } from "../types";

/**
 * @component
 * @name WatchCircle
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNy4zNTAzMiA3LjU0NjM4QzYuMTk5ODIgOC42OTQxNCA1LjQ5MDQ1IDEwLjI2NjEgNS40OTA0NSAxMkM1LjQ5MDQ1IDEzLjczMzkgNi4xOTk4MiAxNS4zMDU5IDcuMzUwMzIgMTYuNDUzNk03LjM1MDMyIDcuNTQ2MzhDOC41MzE4MiA2LjM2NzcgMTAuMTc4NSA1LjYzNjM2IDEyIDUuNjM2MzZDMTMuODIxNSA1LjYzNjM2IDE1LjQ2ODIgNi4zNjc3IDE2LjY0OTcgNy41NDYzOE03LjM1MDMyIDcuNTQ2MzhMOC43ODczNiAyLjcxNDkxQzguOTEzNTEgMi4yOTA3OSA5LjMwMzM4IDIgOS43NDU4NiAySDE0LjI1NDFDMTQuNjk2NiAyIDE1LjA4NjUgMi4yOTA3OSAxNS4yMTI2IDIuNzE0OTFMMTYuNjQ5NyA3LjU0NjM4TTE2LjY0OTcgNy41NDYzOEMxNy44MDAyIDguNjk0MTQgMTguNTA5NiAxMC4yNjYxIDE4LjUwOTYgMTJDMTguNTA5NiAxMy43MzM5IDE3LjgwMDIgMTUuMzA1OSAxNi42NDk3IDE2LjQ1MzZNNy4zNTAzMiAxNi40NTM2QzguNTMxODIgMTcuNjMyMyAxMC4xNzg1IDE4LjM2MzYgMTIgMTguMzYzNkMxMy44MjE1IDE4LjM2MzYgMTUuNDY4MiAxNy42MzIzIDE2LjY0OTcgMTYuNDUzNk03LjM1MDMyIDE2LjQ1MzZMOC43ODczNiAyMS4yODUxQzguOTEzNTEgMjEuNzA5MiA5LjMwMzM4IDIyIDkuNzQ1ODYgMjJIMTQuMjU0MUMxNC42OTY2IDIyIDE1LjA4NjUgMjEuNzA5MiAxNS4yMTI2IDIxLjI4NTFMMTYuNjQ5NyAxNi40NTM2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEyIDEwVjEySDE0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/watch-circle - Icon documentation
 */
export function WatchCircle({
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
      <path d="M7.35032 7.54638C6.19982 8.69414 5.49045 10.2661 5.49045 12C5.49045 13.7339 6.19982 15.3059 7.35032 16.4536M7.35032 7.54638C8.53182 6.3677 10.1785 5.63636 12 5.63636C13.8215 5.63636 15.4682 6.3677 16.6497 7.54638M7.35032 7.54638L8.78736 2.71491C8.91351 2.29079 9.30338 2 9.74586 2H14.2541C14.6966 2 15.0865 2.29079 15.2126 2.71491L16.6497 7.54638M16.6497 7.54638C17.8002 8.69414 18.5096 10.2661 18.5096 12C18.5096 13.7339 17.8002 15.3059 16.6497 16.4536M7.35032 16.4536C8.53182 17.6323 10.1785 18.3636 12 18.3636C13.8215 18.3636 15.4682 17.6323 16.6497 16.4536M7.35032 16.4536L8.78736 21.2851C8.91351 21.7092 9.30338 22 9.74586 22H14.2541C14.6966 22 15.0865 21.7092 15.2126 21.2851L16.6497 16.4536" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M12 10V12H14" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
