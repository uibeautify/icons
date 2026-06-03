import { IconProps } from "../types";

/**
 * @component
 * @name Email
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTYuMiA1SDcuOEM2LjExOTg0IDUgNS4yNzk3NiA1IDQuNjM4MDMgNS4zMjY5OEM0LjA3MzU0IDUuNjE0NiAzLjYxNDYgNi4wNzM1NCAzLjMyNjk4IDYuNjM4MDNDMyA3LjI3OTc2IDMgOC4xMTk4NCAzIDkuOFYxNC4yQzMgMTUuODgwMiAzIDE2LjcyMDIgMy4zMjY5OCAxNy4zNjJDMy42MTQ2IDE3LjkyNjUgNC4wNzM1NCAxOC4zODU0IDQuNjM4MDMgMTguNjczQzUuMjc5NzYgMTkgNi4xMTk4NCAxOSA3LjggMTlIMTYuMkMxNy44ODAyIDE5IDE4LjcyMDIgMTkgMTkuMzYyIDE4LjY3M0MxOS45MjY1IDE4LjM4NTQgMjAuMzg1NCAxNy45MjY1IDIwLjY3MyAxNy4zNjJDMjEgMTYuNzIwMiAyMSAxNS44ODAyIDIxIDE0LjJWOS44QzIxIDguMTE5ODQgMjEgNy4yNzk3NiAyMC42NzMgNi42MzgwM0MyMC4zODU0IDYuMDczNTQgMTkuOTI2NSA1LjYxNDYgMTkuMzYyIDUuMzI2OThDMTguNzIwMiA1IDE3Ljg4MDIgNSAxNi4yIDVaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNyA5TDExLjQ4NTUgMTEuNjkxM0MxMS44MDIyIDExLjg4MTMgMTIuMTk3OCAxMS44ODEzIDEyLjUxNDUgMTEuNjkxM0wxNyA5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/email - Icon documentation
 */
export function Email({
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
      <path d="M16.2 5H7.8C6.11984 5 5.27976 5 4.63803 5.32698C4.07354 5.6146 3.6146 6.07354 3.32698 6.63803C3 7.27976 3 8.11984 3 9.8V14.2C3 15.8802 3 16.7202 3.32698 17.362C3.6146 17.9265 4.07354 18.3854 4.63803 18.673C5.27976 19 6.11984 19 7.8 19H16.2C17.8802 19 18.7202 19 19.362 18.673C19.9265 18.3854 20.3854 17.9265 20.673 17.362C21 16.7202 21 15.8802 21 14.2V9.8C21 8.11984 21 7.27976 20.673 6.63803C20.3854 6.07354 19.9265 5.6146 19.362 5.32698C18.7202 5 17.8802 5 16.2 5Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M7 9L11.4855 11.6913C11.8022 11.8813 12.1978 11.8813 12.5145 11.6913L17 9" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
