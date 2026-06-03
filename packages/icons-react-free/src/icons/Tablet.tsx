import { IconProps } from "../types";

/**
 * @component
 * @name Tablet
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyA3LjhDMyA2LjExOTg0IDMgNS4yNzk3NiAzLjMyNjk4IDQuNjM4MDNDMy42MTQ2IDQuMDczNTQgNC4wNzM1NCAzLjYxNDYgNC42MzgwMyAzLjMyNjk4QzUuMjc5NzYgMyA2LjExOTg0IDMgNy44IDNIMTYuMkMxNy44ODAyIDMgMTguNzIwMiAzIDE5LjM2MiAzLjMyNjk4QzE5LjkyNjUgMy42MTQ2IDIwLjM4NTQgNC4wNzM1NCAyMC42NzMgNC42MzgwM0MyMSA1LjI3OTc2IDIxIDYuMTE5ODQgMjEgNy44VjE2LjJDMjEgMTcuODgwMiAyMSAxOC43MjAyIDIwLjY3MyAxOS4zNjJDMjAuMzg1NCAxOS45MjY1IDE5LjkyNjUgMjAuMzg1NCAxOS4zNjIgMjAuNjczQzE4LjcyMDIgMjEgMTcuODgwMiAyMSAxNi4yIDIxSDcuOEM2LjExOTg0IDIxIDUuMjc5NzYgMjEgNC42MzgwMyAyMC42NzNDNC4wNzM1NCAyMC4zODU0IDMuNjE0NiAxOS45MjY1IDMuMzI2OTggMTkuMzYyQzMgMTguNzIwMiAzIDE3Ljg4MDIgMyAxNi4yVjcuOFoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTIgMThIMTIuMDAwMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTMgMTVMMjEgMTUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/tablet - Icon documentation
 */
export function Tablet({
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
      <path d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z" strokeWidth={strokeWidth} stroke={color}/><path d="M12 18H12.0001" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 15L21 15" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
