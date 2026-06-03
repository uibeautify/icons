import { IconProps } from "../types";

/**
 * @component
 * @name Documents
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNOCA2QzcuMDcwMDMgNiA2LjYwNTA0IDYgNi4yMjM1NCA2LjEwMjIyQzUuMTg4MjcgNi4zNzk2MiA0LjM3OTYyIDcuMTg4MjcgNC4xMDIyMiA4LjIyMzU0QzQgOC42MDUwNCA0IDkuMDcwMDMgNCAxMFYxNy4yQzQgMTguODgwMiA0IDE5LjcyMDIgNC4zMjY5OCAyMC4zNjJDNC42MTQ2IDIwLjkyNjUgNS4wNzM1NCAyMS4zODU0IDUuNjM4MDMgMjEuNjczQzYuMjc5NzYgMjIgNy4xMTk4NCAyMiA4LjggMjJIMTFDMTEuOTMgMjIgMTIuMzk1IDIyIDEyLjc3NjUgMjEuODk3OEMxMy44MTE3IDIxLjYyMDQgMTQuNjIwNCAyMC44MTE3IDE0Ljg5NzggMTkuNzc2NUMxNSAxOS4zOTUgMTUgMTguOTMgMTUgMTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOCA2LjhDOCA1LjExOTg0IDggNC4yNzk3NiA4LjMyNjk4IDMuNjM4MDNDOC42MTQ2IDMuMDczNTQgOS4wNzM1NCAyLjYxNDYgOS42MzgwMyAyLjMyNjk4QzEwLjI3OTggMiAxMS4xMTk4IDIgMTIuOCAySDE1LjJDMTYuODgwMiAyIDE3LjcyMDIgMiAxOC4zNjIgMi4zMjY5OEMxOC45MjY1IDIuNjE0NiAxOS4zODU0IDMuMDczNTQgMTkuNjczIDMuNjM4MDNDMjAgNC4yNzk3NiAyMCA1LjExOTg0IDIwIDYuOFYxMy4yQzIwIDE0Ljg4MDIgMjAgMTUuNzIwMiAxOS42NzMgMTYuMzYyQzE5LjM4NTQgMTYuOTI2NSAxOC45MjY1IDE3LjM4NTQgMTguMzYyIDE3LjY3M0MxNy43MjAyIDE4IDE2Ljg4MDIgMTggMTUuMiAxOEgxMi44QzExLjExOTggMTggMTAuMjc5OCAxOCA5LjYzODAzIDE3LjY3M0M5LjA3MzU0IDE3LjM4NTQgOC42MTQ2IDE2LjkyNjUgOC4zMjY5OCAxNi4zNjJDOCAxNS43MjAyIDggMTQuODgwMiA4IDEzLjJWNi44WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMiAxMEgxNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEyIDZIMTYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMiAxNEgxNCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/documents - Icon documentation
 */
export function Documents({
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
      <path d="M8 6C7.07003 6 6.60504 6 6.22354 6.10222C5.18827 6.37962 4.37962 7.18827 4.10222 8.22354C4 8.60504 4 9.07003 4 10V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H11C11.93 22 12.395 22 12.7765 21.8978C13.8117 21.6204 14.6204 20.8117 14.8978 19.7765C15 19.395 15 18.93 15 18" strokeWidth={strokeWidth} stroke={color}/><path d="M8 6.8C8 5.11984 8 4.27976 8.32698 3.63803C8.6146 3.07354 9.07354 2.6146 9.63803 2.32698C10.2798 2 11.1198 2 12.8 2H15.2C16.8802 2 17.7202 2 18.362 2.32698C18.9265 2.6146 19.3854 3.07354 19.673 3.63803C20 4.27976 20 5.11984 20 6.8V13.2C20 14.8802 20 15.7202 19.673 16.362C19.3854 16.9265 18.9265 17.3854 18.362 17.673C17.7202 18 16.8802 18 15.2 18H12.8C11.1198 18 10.2798 18 9.63803 17.673C9.07354 17.3854 8.6146 16.9265 8.32698 16.362C8 15.7202 8 14.8802 8 13.2V6.8Z" strokeWidth={strokeWidth} stroke={color}/><path d="M12 10H16" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 6H16" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 14H14" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
