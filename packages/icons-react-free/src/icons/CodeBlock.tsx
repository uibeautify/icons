import { IconProps } from "../types";

/**
 * @component
 * @name CodeBlock
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMjEgMTYuNVY3LjVDMjEgNi4xMDIxOCAyMSA1LjQwMzI2IDIwLjc3MTYgNC44NTE5NUMyMC40NjcyIDQuMTE2ODcgMTkuODgzMSAzLjUzMjg0IDE5LjE0ODEgMy4yMjgzNkMxOC41OTY3IDMgMTcuODk3OCAzIDE2LjUgM0g3LjhDNi4xMTk4NCAzIDUuMjc5NzYgMyA0LjYzODAzIDMuMzI2OThDNC4wNzM1NCAzLjYxNDYgMy42MTQ2IDQuMDczNTQgMy4zMjY5OCA0LjYzODAzQzMgNS4yNzk3NiAzIDYuMTE5ODQgMyA3LjhWMTYuMkMzIDE3Ljg4MDIgMyAxOC43MjAyIDMuMzI2OTggMTkuMzYyQzMuNjE0NiAxOS45MjY1IDQuMDczNTQgMjAuMzg1NCA0LjYzODAzIDIwLjY3M0M1LjI3OTc2IDIxIDYuMTE5ODQgMjEgNy44IDIxSDE2LjVDMTcuODk3OCAyMSAxOC41OTY3IDIxIDE5LjE0ODEgMjAuNzcxNkMxOS44ODMxIDIwLjQ2NzIgMjAuNDY3MiAxOS44ODMxIDIwLjc3MTYgMTkuMTQ4MUMyMSAxOC41OTY3IDIxIDE3Ljg5NzggMjEgMTYuNVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNCAxNUwxNyAxMkwxNCA5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTAgMTVMNyAxMkwxMCA5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/code-block - Icon documentation
 */
export function CodeBlock({
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
      <path d="M21 16.5V7.5C21 6.10218 21 5.40326 20.7716 4.85195C20.4672 4.11687 19.8831 3.53284 19.1481 3.22836C18.5967 3 17.8978 3 16.5 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.5C17.8978 21 18.5967 21 19.1481 20.7716C19.8831 20.4672 20.4672 19.8831 20.7716 19.1481C21 18.5967 21 17.8978 21 16.5Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M14 15L17 12L14 9" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M10 15L7 12L10 9" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
