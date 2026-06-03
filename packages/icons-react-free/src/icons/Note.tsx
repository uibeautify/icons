import { IconProps } from "../types";

/**
 * @component
 * @name Note
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyA4LjhDMyA3LjExOTg0IDMgNi4yNzk3NiAzLjMyNjk4IDUuNjM4MDNDMy42MTQ2IDUuMDczNTQgNC4wNzM1NCA0LjYxNDYgNC42MzgwMyA0LjMyNjk4QzUuMjc5NzYgNCA2LjExOTg0IDQgNy44IDRIMTUuMjUwNkMxNS41MjYxIDQgMTUuNjYzOCA0IDE1Ljc5MTQgNC4wMzQzNEMxNS45MDQ1IDQuMDY0NzYgMTYuMDExNCA0LjExNDgxIDE2LjEwNzEgNC4xODIyMUMxNi4yMTUyIDQuMjU4MjggMTYuMzAzNCA0LjM2NDA5IDE2LjQ3OTggNC41NzU3TDIwLjYyOTIgOS41NTQ5OUMyMC43NjY1IDkuNzE5OCAyMC44MzUyIDkuODAyMjEgMjAuODg0MSA5Ljg5NDY4QzIwLjkyNzQgOS45NzY3IDIwLjk1OTIgMTAuMDY0NCAyMC45Nzg0IDEwLjE1NTFDMjEgMTAuMjU3NSAyMSAxMC4zNjQ3IDIxIDEwLjU3OTNWMTUuMkMyMSAxNi44ODAyIDIxIDE3LjcyMDIgMjAuNjczIDE4LjM2MkMyMC4zODU0IDE4LjkyNjUgMTkuOTI2NSAxOS4zODU0IDE5LjM2MiAxOS42NzNDMTguNzIwMiAyMCAxNy44ODAyIDIwIDE2LjIgMjBINy44QzYuMTE5ODQgMjAgNS4yNzk3NiAyMCA0LjYzODAzIDE5LjY3M0M0LjA3MzU0IDE5LjM4NTQgMy42MTQ2IDE4LjkyNjUgMy4zMjY5OCAxOC4zNjJDMyAxNy43MjAyIDMgMTYuODgwMiAzIDE1LjJWOC44WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNiA0VjlDMTYgOS41NTIyOCAxNi40NDc3IDEwIDE3IDEwSDIxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTcgMTJMMTIgMTIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik03IDhMMTAgOCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTcgMTZMMTUgMTYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/note - Icon documentation
 */
export function Note({
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
      <path d="M3 8.8C3 7.11984 3 6.27976 3.32698 5.63803C3.6146 5.07354 4.07354 4.6146 4.63803 4.32698C5.27976 4 6.11984 4 7.8 4H15.2506C15.5261 4 15.6638 4 15.7914 4.03434C15.9045 4.06476 16.0114 4.11481 16.1071 4.18221C16.2152 4.25828 16.3034 4.36409 16.4798 4.5757L20.6292 9.55499C20.7665 9.7198 20.8352 9.80221 20.8841 9.89468C20.9274 9.9767 20.9592 10.0644 20.9784 10.1551C21 10.2575 21 10.3647 21 10.5793V15.2C21 16.8802 21 17.7202 20.673 18.362C20.3854 18.9265 19.9265 19.3854 19.362 19.673C18.7202 20 17.8802 20 16.2 20H7.8C6.11984 20 5.27976 20 4.63803 19.673C4.07354 19.3854 3.6146 18.9265 3.32698 18.362C3 17.7202 3 16.8802 3 15.2V8.8Z" strokeWidth={strokeWidth} stroke={color}/><path d="M16 4V9C16 9.55228 16.4477 10 17 10H21" strokeWidth={strokeWidth} stroke={color}/><path d="M7 12L12 12" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M7 8L10 8" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M7 16L15 16" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
