import { IconProps } from "../types";

/**
 * @component
 * @name Mosque
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNiAxNS42NzU5VjE2SDE4VjE1LjY3NTlDMTggMTQuMDA0MiAxNy4xNjQ1IDEyLjQ0MyAxNS43NzM1IDExLjUxNTdMMTIgOUw4LjIyNjUgMTEuNTE1N0M2LjgzNTUxIDEyLjQ0MyA2IDE0LjAwNDIgNiAxNS42NzU5WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEyIDlMMTIgNyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE3IDEyLjY3MTlWNi4wOTQ4NEMxNyA0LjgxMDk4IDE3LjcyNTQgMy42MzczMiAxOC44NzM3IDMuMDYzMTZDMTguOTUzMiAzLjAyMzQgMTkuMDQ2OCAzLjAyMzQgMTkuMTI2MyAzLjA2MzE2QzIwLjI3NDYgMy42MzczMiAyMSA0LjgxMDk4IDIxIDYuMDk0ODRWMTYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik03IDEyLjY3MTlWNi4wOTQ4NEM3IDQuODEwOTggNi4yNzQ2MyAzLjYzNzMyIDUuMTI2MzIgMy4wNjMxNkM1LjA0NjggMy4wMjM0IDQuOTUzMiAzLjAyMzQgNC44NzM2OCAzLjA2MzE2QzMuNzI1MzYgMy42MzczMiAzIDQuODEwOTggMyA2LjA5NDg0VjE2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMjEgMjFWMTZIM1YyMUgyMVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/mosque - Icon documentation
 */
export function Mosque({
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
      <path d="M6 15.6759V16H18V15.6759C18 14.0042 17.1645 12.443 15.7735 11.5157L12 9L8.2265 11.5157C6.83551 12.443 6 14.0042 6 15.6759Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M12 9L12 7" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M17 12.6719V6.09484C17 4.81098 17.7254 3.63732 18.8737 3.06316C18.9532 3.0234 19.0468 3.0234 19.1263 3.06316C20.2746 3.63732 21 4.81098 21 6.09484V16" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M7 12.6719V6.09484C7 4.81098 6.27463 3.63732 5.12632 3.06316C5.0468 3.0234 4.9532 3.0234 4.87368 3.06316C3.72536 3.63732 3 4.81098 3 6.09484V16" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M21 21V16H3V21H21Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
