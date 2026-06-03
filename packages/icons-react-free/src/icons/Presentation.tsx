import { IconProps } from "../types";

/**
 * @component
 * @name Presentation
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNCAzSDIwVjExLjJDMjAgMTIuODgwMiAyMCAxMy43MjAyIDE5LjY3MyAxNC4zNjJDMTkuMzg1NCAxNC45MjY1IDE4LjkyNjUgMTUuMzg1NCAxOC4zNjIgMTUuNjczQzE3LjcyMDIgMTYgMTYuODgwMiAxNiAxNS4yIDE2SDguOEM3LjExOTg0IDE2IDYuMjc5NzYgMTYgNS42MzgwMyAxNS42NzNDNS4wNzM1NCAxNS4zODU0IDQuNjE0NiAxNC45MjY1IDQuMzI2OTggMTQuMzYyQzQgMTMuNzIwMiA0IDEyLjg4MDIgNCAxMS4yVjNaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTIgM0gyMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEyIDE2TDYgMjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMiAxNlYyMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEyIDE2TDE4IDIxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOCA3TDggMTIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMiAxMEwxMiAxMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE2IDhMMTYgMTIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/presentation - Icon documentation
 */
export function Presentation({
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
      <path d="M4 3H20V11.2C20 12.8802 20 13.7202 19.673 14.362C19.3854 14.9265 18.9265 15.3854 18.362 15.673C17.7202 16 16.8802 16 15.2 16H8.8C7.11984 16 6.27976 16 5.63803 15.673C5.07354 15.3854 4.6146 14.9265 4.32698 14.362C4 13.7202 4 12.8802 4 11.2V3Z" strokeWidth={strokeWidth} stroke={color}/><path d="M2 3H22" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 16L6 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 16V21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 16L18 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M8 7L8 12" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M12 10L12 12" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M16 8L16 12" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
