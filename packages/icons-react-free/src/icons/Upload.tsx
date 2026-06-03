import { IconProps } from "../types";

/**
 * @component
 * @name Upload
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyAxM0MzIDEzLjczNCAzIDE0LjQ4MDggMyAxNS4yQzMgMTYuODgwMiAzIDE3LjcyMDIgMy4zMjY5OCAxOC4zNjJDMy42MTQ2IDE4LjkyNjUgNC4wNzM1NCAxOS4zODU0IDQuNjM4MDMgMTkuNjczQzUuMjc5NzYgMjAgNi4xMTk4NCAyMCA3LjggMjBIMTYuMkMxNy44ODAyIDIwIDE4LjcyMDIgMjAgMTkuMzYyIDE5LjY3M0MxOS45MjY1IDE5LjM4NTQgMjAuMzg1NCAxOC45MjY1IDIwLjY3MyAxOC4zNjJDMjEgMTcuNzIwMiAyMSAxNi44ODAyIDIxIDE1LjJWMTMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMiAxM1Y0TTE2IDhMMTIgNEw4IDgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/upload - Icon documentation
 */
export function Upload({
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
      <path d="M3 13C3 13.734 3 14.4808 3 15.2C3 16.8802 3 17.7202 3.32698 18.362C3.6146 18.9265 4.07354 19.3854 4.63803 19.673C5.27976 20 6.11984 20 7.8 20H16.2C17.8802 20 18.7202 20 19.362 19.673C19.9265 19.3854 20.3854 18.9265 20.673 18.362C21 17.7202 21 16.8802 21 15.2V13" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 13V4M16 8L12 4L8 8" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
