import { IconProps } from "../types";

/**
 * @component
 * @name CameraOff
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTkuMzYyIDE5LjY3M0MxOC43MjAyIDIwIDE3Ljg4MDIgMjAgMTYuMiAyMEg3LjhDNi4xMTk4NCAyMCA1LjI3OTc2IDIwIDQuNjM4MDMgMTkuNjczQzQuMDczNTQgMTkuMzg1NCAzLjYxNDYgMTguOTI2NSAzLjMyNjk4IDE4LjM2MkMzIDE3LjcyMDIgMyAxNi44ODAyIDMgMTUuMlY5QzMgNy4zNDMxNSA0LjM0MzE1IDYgNiA2TTguNTgzMjkgMy42MjUwN0M4LjY5OTk5IDMuNDUwMDIgOC43NTgzNCAzLjM2MjUgOC44Mjg3NyAzLjI5MjJDOC45NjgwNCAzLjE1MzIxIDkuMTQ1MjEgMy4wNTgzOSA5LjMzODEgMy4wMTk2MUM5LjQzNTY3IDMgOS41NDA4NiAzIDkuNzUxMjQgM0gxNC4xNDM3QzE0LjQ1NjggMyAxNC42MTMzIDMgMTQuNzU1NCAzLjA0MzE1QzE0Ljg4MTIgMy4wODEzNSAxNC45OTgyIDMuMTQzOTggMTUuMDk5OCAzLjIyNzQ1QzE1LjIxNDUgMy4zMjE3NCAxNS4zMDEzIDMuNDUxOTkgMTUuNDc1IDMuNzEyNDhMMTYuNjY0MSA1LjQ5NjE1QzE2LjcwMjEgNS41NTMxMSAxNi43MjExIDUuNTgxNTkgMTYuNzQwNyA1LjYwNzI2QzE2LjkxNjEgNS44MzY4MSAxNy4xODIzIDUuOTc5MjYgMTcuNDcwNiA1Ljk5NzkxQzE3LjUwMjkgNiAxNy41MzcxIDYgMTcuNjA1NiA2QzE3Ljk3MTkgNiAxOC4xNTUgNiAxOC4zMDkyIDYuMDE1OThDMTkuNzIxNCA2LjE2MjMzIDIwLjgzNzcgNy4yNzg1NyAyMC45ODQgOC42OTA3NUMyMSA4Ljg0NDk2IDIxIDkuMDI4MTIgMjEgOS4zOTQ0NVYxNS4yQzIxIDE1LjQ5MDcgMjEgMTUuNzU2MyAyMC45OTgzIDE2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTAuMTM4NCAxMC4xNDczQzkuNDQ0ODYgMTAuNjk2OCA5IDExLjU0NjUgOSAxMi41QzkgMTQuMTU2OSAxMC4zNDMxIDE1LjUgMTIgMTUuNUMxMi45NDA4IDE1LjUgMTMuNzgwNSAxNS4wNjY5IDE0LjMzMDYgMTQuMzg5MiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0zIDNMMjEgMjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/camera-off - Icon documentation
 */
export function CameraOff({
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
      <path d="M19.362 19.673C18.7202 20 17.8802 20 16.2 20H7.8C6.11984 20 5.27976 20 4.63803 19.673C4.07354 19.3854 3.6146 18.9265 3.32698 18.362C3 17.7202 3 16.8802 3 15.2V9C3 7.34315 4.34315 6 6 6M8.58329 3.62507C8.69999 3.45002 8.75834 3.3625 8.82877 3.2922C8.96804 3.15321 9.14521 3.05839 9.3381 3.01961C9.43567 3 9.54086 3 9.75124 3H14.1437C14.4568 3 14.6133 3 14.7554 3.04315C14.8812 3.08135 14.9982 3.14398 15.0998 3.22745C15.2145 3.32174 15.3013 3.45199 15.475 3.71248L16.6641 5.49615C16.7021 5.55311 16.7211 5.58159 16.7407 5.60726C16.9161 5.83681 17.1823 5.97926 17.4706 5.99791C17.5029 6 17.5371 6 17.6056 6C17.9719 6 18.155 6 18.3092 6.01598C19.7214 6.16233 20.8377 7.27857 20.984 8.69075C21 8.84496 21 9.02812 21 9.39445V15.2C21 15.4907 21 15.7563 20.9983 16" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M10.1384 10.1473C9.44486 10.6968 9 11.5465 9 12.5C9 14.1569 10.3431 15.5 12 15.5C12.9408 15.5 13.7805 15.0669 14.3306 14.3892" strokeWidth={strokeWidth} stroke={color}/><path d="M3 3L21 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
