import { IconProps } from "../types";

/**
 * @component
 * @name Download
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyAxNEMzIDE0LjczNCAzIDE1LjQ4MDggMyAxNi4yQzMgMTcuODgwMiAzIDE4LjcyMDIgMy4zMjY5OCAxOS4zNjJDMy42MTQ2IDE5LjkyNjUgNC4wNzM1NCAyMC4zODU0IDQuNjM4MDMgMjAuNjczQzUuMjc5NzYgMjEgNi4xMTk4NCAyMSA3LjggMjFIMTYuMkMxNy44ODAyIDIxIDE4LjcyMDIgMjEgMTkuMzYyIDIwLjY3M0MxOS45MjY1IDIwLjM4NTQgMjAuMzg1NCAxOS45MjY1IDIwLjY3MyAxOS4zNjJDMjEgMTguNzIwMiAyMSAxNy44ODAyIDIxIDE2LjJWMTQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMiAzVjE0TTE2IDEwTDEyIDE0TDggMTAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/download - Icon documentation
 */
export function Download({
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
      <path d="M3 14C3 14.734 3 15.4808 3 16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V14" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 3V14M16 10L12 14L8 10" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
