import { IconProps } from "../types";

/**
 * @component
 * @name Document
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNSA3LjhDNSA2LjExOTg0IDUgNS4yNzk3NiA1LjMyNjk4IDQuNjM4MDNDNS42MTQ2IDQuMDczNTQgNi4wNzM1NCAzLjYxNDYgNi42MzgwMyAzLjMyNjk4QzcuMjc5NzYgMyA4LjExOTg0IDMgOS44IDNIMTQuMkMxNS44ODAyIDMgMTYuNzIwMiAzIDE3LjM2MiAzLjMyNjk4QzE3LjkyNjUgMy42MTQ2IDE4LjM4NTQgNC4wNzM1NCAxOC42NzMgNC42MzgwM0MxOSA1LjI3OTc2IDE5IDYuMTE5ODQgMTkgNy44VjE2LjJDMTkgMTcuODgwMiAxOSAxOC43MjAyIDE4LjY3MyAxOS4zNjJDMTguMzg1NCAxOS45MjY1IDE3LjkyNjUgMjAuMzg1NCAxNy4zNjIgMjAuNjczQzE2LjcyMDIgMjEgMTUuODgwMiAyMSAxNC4yIDIxSDkuOEM4LjExOTg0IDIxIDcuMjc5NzYgMjEgNi42MzgwMyAyMC42NzNDNi4wNzM1NCAyMC4zODU0IDUuNjE0NiAxOS45MjY1IDUuMzI2OTggMTkuMzYyQzUgMTguNzIwMiA1IDE3Ljg4MDIgNSAxNi4yVjcuOFoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOSAxMUgxNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTkgN0gxNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTkgMTVIMTEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/document - Icon documentation
 */
export function Document({
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
      <path d="M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V16.2C19 17.8802 19 18.7202 18.673 19.362C18.3854 19.9265 17.9265 20.3854 17.362 20.673C16.7202 21 15.8802 21 14.2 21H9.8C8.11984 21 7.27976 21 6.63803 20.673C6.07354 20.3854 5.6146 19.9265 5.32698 19.362C5 18.7202 5 17.8802 5 16.2V7.8Z" strokeWidth={strokeWidth} stroke={color}/><path d="M9 11H15" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M9 7H15" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M9 15H11" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
