import { IconProps } from "../types";

/**
 * @component
 * @name Mobile
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNiA3LjhDNiA2LjExOTg0IDYgNS4yNzk3NiA2LjMyNjk4IDQuNjM4MDNDNi42MTQ2IDQuMDczNTQgNy4wNzM1NCAzLjYxNDYgNy42MzgwMyAzLjMyNjk4QzguMjc5NzYgMyA5LjExOTg0IDMgMTAuOCAzSDEzLjJDMTQuODgwMiAzIDE1LjcyMDIgMyAxNi4zNjIgMy4zMjY5OEMxNi45MjY1IDMuNjE0NiAxNy4zODU0IDQuMDczNTQgMTcuNjczIDQuNjM4MDNDMTggNS4yNzk3NiAxOCA2LjExOTg0IDE4IDcuOFYxNi4yQzE4IDE3Ljg4MDIgMTggMTguNzIwMiAxNy42NzMgMTkuMzYyQzE3LjM4NTQgMTkuOTI2NSAxNi45MjY1IDIwLjM4NTQgMTYuMzYyIDIwLjY3M0MxNS43MjAyIDIxIDE0Ljg4MDIgMjEgMTMuMiAyMUgxMC44QzkuMTE5ODQgMjEgOC4yNzk3NiAyMSA3LjYzODAzIDIwLjY3M0M3LjA3MzU0IDIwLjM4NTQgNi42MTQ2IDE5LjkyNjUgNi4zMjY5OCAxOS4zNjJDNiAxOC43MjAyIDYgMTcuODgwMiA2IDE2LjJWNy44WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMiAxOEgxMi4wMDAxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNiAxNUgxOCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/mobile - Icon documentation
 */
export function Mobile({
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
      <path d="M6 7.8C6 6.11984 6 5.27976 6.32698 4.63803C6.6146 4.07354 7.07354 3.6146 7.63803 3.32698C8.27976 3 9.11984 3 10.8 3H13.2C14.8802 3 15.7202 3 16.362 3.32698C16.9265 3.6146 17.3854 4.07354 17.673 4.63803C18 5.27976 18 6.11984 18 7.8V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V7.8Z" strokeWidth={strokeWidth} stroke={color}/><path d="M12 18H12.0001" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M6 15H18" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
