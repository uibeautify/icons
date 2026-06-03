import { IconProps } from "../types";

/**
 * @component
 * @name CalendarClock
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMjEgOEMyMSA2LjM0MzE1IDE5LjY1NjkgNSAxOCA1SDcuOEM2LjExOTg0IDUgNS4yNzk3NiA1IDQuNjM4MDMgNS4zMjY5OEM0LjA3MzU0IDUuNjE0NiAzLjYxNDYgNi4wNzM1NCAzLjMyNjk4IDYuNjM4MDNDMyA3LjI3OTc2IDMgOC4xMTk4NCAzIDkuOFYxNi4yQzMgMTcuODgwMiAzIDE4LjcyMDIgMy4zMjY5OCAxOS4zNjJDMy42MTQ2IDE5LjkyNjUgNC4wNzM1NCAyMC4zODU0IDQuNjM4MDMgMjAuNjczQzUuMjc5NzYgMjEgNi4xMTk4NCAyMSA3LjggMjFIOCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTggNlYzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTYgNlYzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTYgMTQuNVYxNkgxNy41TTIxIDE2QzIxIDE4Ljc2MTQgMTguNzYxNCAyMSAxNiAyMUMxMy4yMzg2IDIxIDExIDE4Ljc2MTQgMTEgMTZDMTEgMTMuMjM4NiAxMy4yMzg2IDExIDE2IDExQzE4Ljc2MTQgMTEgMjEgMTMuMjM4NiAyMSAxNloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/calendar-clock - Icon documentation
 */
export function CalendarClock({
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
      <path d="M21 8C21 6.34315 19.6569 5 18 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H8" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M8 6V3" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M16 6V3" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M16 14.5V16H17.5M21 16C21 18.7614 18.7614 21 16 21C13.2386 21 11 18.7614 11 16C11 13.2386 13.2386 11 16 11C18.7614 11 21 13.2386 21 16Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
