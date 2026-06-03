import { IconProps } from "../types";

/**
 * @component
 * @name KeyboardOff
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNOS45NDIxNSA1SDE3LjJDMTguODgwMiA1IDE5LjcyMDIgNSAyMC4zNjIgNS4zMjY5OEMyMC45MjY1IDUuNjE0NiAyMS4zODU0IDYuMDczNTQgMjEuNjczIDYuNjM4MDNDMjIgNy4yNzk3NiAyMiA4LjExOTg0IDIyIDkuOFYxNC4yQzIyIDE1LjUxMDMgMjIgMTYuMzA5NiAyMS44NDQ5IDE2LjkwMjRNNSA1LjAyODc4QzQuNDExNjggNS4wNjQ3MSAzLjk5NDI5IDUuMTQ1NDYgMy42MzgwMyA1LjMyNjk4QzMuMDczNTQgNS42MTQ2IDIuNjE0NiA2LjA3MzU0IDIuMzI2OTggNi42MzgwM0MyIDcuMjc5NzYgMiA4LjExOTg0IDIgOS44VjE0LjJDMiAxNS44ODAyIDIgMTYuNzIwMiAyLjMyNjk4IDE3LjM2MkMyLjYxNDYgMTcuOTI2NSAzLjA3MzU0IDE4LjM4NTQgMy42MzgwMyAxOC42NzNDNC4yNzk3NiAxOSA1LjExOTg0IDE5IDYuOCAxOUgxNy4yQzE3Ljk1NTEgMTkgMTguNTQwNSAxOSAxOS4wMTQ1IDE4Ljk3MDMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik02IDEwSDYuMDAwMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTYgMTRINi4wMDAxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTggMTBIMTguMDAwMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE4IDE0SDE4LjAwMDEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNCAxMEgxNC4wMDAxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTAgMTRIMTQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0zIDNMMjEgMjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/keyboard-off - Icon documentation
 */
export function KeyboardOff({
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
      <path d="M9.94215 5H17.2C18.8802 5 19.7202 5 20.362 5.32698C20.9265 5.6146 21.3854 6.07354 21.673 6.63803C22 7.27976 22 8.11984 22 9.8V14.2C22 15.5103 22 16.3096 21.8449 16.9024M5 5.02878C4.41168 5.06471 3.99429 5.14546 3.63803 5.32698C3.07354 5.6146 2.6146 6.07354 2.32698 6.63803C2 7.27976 2 8.11984 2 9.8V14.2C2 15.8802 2 16.7202 2.32698 17.362C2.6146 17.9265 3.07354 18.3854 3.63803 18.673C4.27976 19 5.11984 19 6.8 19H17.2C17.9551 19 18.5405 19 19.0145 18.9703" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M6 10H6.0001" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M6 14H6.0001" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M18 10H18.0001" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M18 14H18.0001" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M14 10H14.0001" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M10 14H14" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 3L21 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
