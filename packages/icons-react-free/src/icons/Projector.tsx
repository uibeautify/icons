import { IconProps } from "../types";

/**
 * @component
 * @name Projector
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyA5LjhDMyA4LjExOTg0IDMgNy4yNzk3NiAzLjMyNjk4IDYuNjM4MDNDMy42MTQ2IDYuMDczNTQgNC4wNzM1NCA1LjYxNDYgNC42MzgwMyA1LjMyNjk4QzUuMjc5NzYgNSA2LjExOTg0IDUgNy44IDVIMTYuMkMxNy44ODAyIDUgMTguNzIwMiA1IDE5LjM2MiA1LjMyNjk4QzE5LjkyNjUgNS42MTQ2IDIwLjM4NTQgNi4wNzM1NCAyMC42NzMgNi42MzgwM0MyMSA3LjI3OTc2IDIxIDguMTE5ODQgMjEgOS44VjEwLjJDMjEgMTEuODgwMiAyMSAxMi43MjAyIDIwLjY3MyAxMy4zNjJDMjAuMzg1NCAxMy45MjY1IDE5LjkyNjUgMTQuMzg1NCAxOS4zNjIgMTQuNjczQzE4LjcyMDIgMTUgMTcuODgwMiAxNSAxNi4yIDE1SDcuOEM2LjExOTg0IDE1IDUuMjc5NzYgMTUgNC42MzgwMyAxNC42NzNDNC4wNzM1NCAxNC4zODU0IDMuNjE0NiAxMy45MjY1IDMuMzI2OTggMTMuMzYyQzMgMTIuNzIwMiAzIDExLjg4MDIgMyAxMC4yVjkuOFoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48Y2lyY2xlIGN4PSIxNiIgY3k9IjEwIiByPSIxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEyIDE1TDYgMjAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMiAxNVYyMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEyIDE1TDE4IDIwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/projector - Icon documentation
 */
export function Projector({
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
      <path d="M3 9.8C3 8.11984 3 7.27976 3.32698 6.63803C3.6146 6.07354 4.07354 5.6146 4.63803 5.32698C5.27976 5 6.11984 5 7.8 5H16.2C17.8802 5 18.7202 5 19.362 5.32698C19.9265 5.6146 20.3854 6.07354 20.673 6.63803C21 7.27976 21 8.11984 21 9.8V10.2C21 11.8802 21 12.7202 20.673 13.362C20.3854 13.9265 19.9265 14.3854 19.362 14.673C18.7202 15 17.8802 15 16.2 15H7.8C6.11984 15 5.27976 15 4.63803 14.673C4.07354 14.3854 3.6146 13.9265 3.32698 13.362C3 12.7202 3 11.8802 3 10.2V9.8Z" strokeWidth={strokeWidth} stroke={color}/><circle cx="16" cy="10" r="1" strokeWidth={strokeWidth} stroke={color}/><path d="M12 15L6 20" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 15V20" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 15L18 20" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
