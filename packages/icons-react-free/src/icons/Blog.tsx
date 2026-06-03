import { IconProps } from "../types";

/**
 * @component
 * @name Blog
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTkgNkMxOSA0LjM0MzE1IDE3LjY1NjkgMyAxNiAzSDkuOEM4LjExOTg0IDMgNy4yNzk3NiAzIDYuNjM4MDMgMy4zMjY5OEM2LjA3MzU0IDMuNjE0NiA1LjYxNDYgNC4wNzM1NCA1LjMyNjk4IDQuNjM4MDNDNSA1LjI3OTc2IDUgNi4xMTk4NCA1IDcuOFYxOUM1IDIwLjEwNDYgNS44OTU0MyAyMSA3IDIxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTYuNzc0MiAxMC43NDIyQzE3Ljc1MDUgOS43NjU5MSAxOS4zMzM0IDkuNzY1OTEgMjAuMzA5NyAxMC43NDIyQzIxLjI4NiAxMS43MTg1IDIxLjI4NiAxMy4zMDE0IDIwLjMwOTcgMTQuMjc3OEwxNi40NzYzIDE4LjExMTFDMTUuMzMzMiAxOS4yNTQzIDEzLjg2NzYgMjAuMDIwMyAxMi4yNzY0IDIwLjMwNjNMMTAuODc0NiAyMC41NTgzQzEwLjY0OTYgMjAuNTk4NyAxMC40NTMzIDIwLjQwMjQgMTAuNDkzNyAyMC4xNzc0TDEwLjc0NTcgMTguNzc1NUMxMS4wMzE2IDE3LjE4NDMgMTEuNzk3NiAxNS43MTg4IDEyLjk0MDggMTQuNTc1NkwxNi43NzQyIDEwLjc0MjJaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE1LjcxMzUgMTEuODAyOUwxOS4yNDkxIDE1LjMzODQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik05IDdIMTMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik05IDExSDEwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/blog - Icon documentation
 */
export function Blog({
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
      <path d="M19 6C19 4.34315 17.6569 3 16 3H9.8C8.11984 3 7.27976 3 6.63803 3.32698C6.07354 3.6146 5.6146 4.07354 5.32698 4.63803C5 5.27976 5 6.11984 5 7.8V19C5 20.1046 5.89543 21 7 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M16.7742 10.7422C17.7505 9.76591 19.3334 9.76591 20.3097 10.7422C21.286 11.7185 21.286 13.3014 20.3097 14.2778L16.4763 18.1111C15.3332 19.2543 13.8676 20.0203 12.2764 20.3063L10.8746 20.5583C10.6496 20.5987 10.4533 20.4024 10.4937 20.1774L10.7457 18.7755C11.0316 17.1843 11.7976 15.7188 12.9408 14.5756L16.7742 10.7422Z" strokeWidth={strokeWidth} stroke={color}/><path d="M15.7135 11.8029L19.2491 15.3384" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M9 7H13" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M9 11H10" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
