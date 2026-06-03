import { IconProps } from "../types";

/**
 * @component
 * @name Calendar
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTYuMiA1SDcuOEM2LjExOTg0IDUgNS4yNzk3NiA1IDQuNjM4MDMgNS4zMjY5OEM0LjA3MzU0IDUuNjE0NiAzLjYxNDYgNi4wNzM1NCAzLjMyNjk4IDYuNjM4MDNDMyA3LjI3OTc2IDMgOC4xMTk4NCAzIDkuOFYxNi4yQzMgMTcuODgwMiAzIDE4LjcyMDIgMy4zMjY5OCAxOS4zNjJDMy42MTQ2IDE5LjkyNjUgNC4wNzM1NCAyMC4zODU0IDQuNjM4MDMgMjAuNjczQzUuMjc5NzYgMjEgNi4xMTk4NCAyMSA3LjggMjFIMTYuMkMxNy44ODAyIDIxIDE4LjcyMDIgMjEgMTkuMzYyIDIwLjY3M0MxOS45MjY1IDIwLjM4NTQgMjAuMzg1NCAxOS45MjY1IDIwLjY3MyAxOS4zNjJDMjEgMTguNzIwMiAyMSAxNy44ODAyIDIxIDE2LjJWOS44QzIxIDguMTE5ODQgMjEgNy4yNzk3NiAyMC42NzMgNi42MzgwM0MyMC4zODU0IDYuMDczNTQgMTkuOTI2NSA1LjYxNDYgMTkuMzYyIDUuMzI2OThDMTguNzIwMiA1IDE3Ljg4MDIgNSAxNi4yIDVaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOCA2VjMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNiA2VjMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik03IDEwSDE3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/calendar - Icon documentation
 */
export function Calendar({
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
      <path d="M16.2 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V9.8C21 8.11984 21 7.27976 20.673 6.63803C20.3854 6.07354 19.9265 5.6146 19.362 5.32698C18.7202 5 17.8802 5 16.2 5Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M8 6V3" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M16 6V3" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M7 10H17" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
