import { IconProps } from "../types";

/**
 * @component
 * @name Archive
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNCA5SDIwVjE1LjJDMjAgMTYuODgwMiAyMCAxNy43MjAyIDE5LjY3MyAxOC4zNjJDMTkuMzg1NCAxOC45MjY1IDE4LjkyNjUgMTkuMzg1NCAxOC4zNjIgMTkuNjczQzE3LjcyMDIgMjAgMTYuODgwMiAyMCAxNS4yIDIwSDguOEM3LjExOTg0IDIwIDYuMjc5NzYgMjAgNS42MzgwMyAxOS42NzNDNS4wNzM1NCAxOS4zODU0IDQuNjE0NiAxOC45MjY1IDQuMzI2OTggMTguMzYyQzQgMTcuNzIwMiA0IDE2Ljg4MDIgNCAxNS4yVjlaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEwIDEzSDE0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMyA3LjJDMyA2LjA3OTkgMyA1LjUxOTg0IDMuMjE3OTkgNS4wOTIwMkMzLjQwOTczIDQuNzE1NjkgMy43MTU2OSA0LjQwOTczIDQuMDkyMDIgNC4yMTc5OUM0LjUxOTg0IDQgNS4wNzk5IDQgNi4yIDRIMTcuOEMxOC45MjAxIDQgMTkuNDgwMiA0IDE5LjkwOCA0LjIxNzk5QzIwLjI4NDMgNC40MDk3MyAyMC41OTAzIDQuNzE1NjkgMjAuNzgyIDUuMDkyMDJDMjEgNS41MTk4NCAyMSA2LjA3OTg5IDIxIDcuMlY3LjRDMjEgNy45NjAwNSAyMSA4LjI0MDA4IDIwLjg5MSA4LjQ1Mzk5QzIwLjc5NTEgOC42NDIxNSAyMC42NDIyIDguNzk1MTMgMjAuNDU0IDguODkxMDFDMjAuMjQwMSA5IDE5Ljk2MDEgOSAxOS40IDlINC42QzQuMDM5OTUgOSAzLjc1OTkyIDkgMy41NDYwMSA4Ljg5MTAxQzMuMzU3ODUgOC43OTUxMyAzLjIwNDg3IDguNjQyMTUgMy4xMDg5OSA4LjQ1Mzk5QzMgOC4yNDAwOCAzIDcuOTYwMDUgMyA3LjRWNy4yWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/archive - Icon documentation
 */
export function Archive({
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
      <path d="M4 9H20V15.2C20 16.8802 20 17.7202 19.673 18.362C19.3854 18.9265 18.9265 19.3854 18.362 19.673C17.7202 20 16.8802 20 15.2 20H8.8C7.11984 20 6.27976 20 5.63803 19.673C5.07354 19.3854 4.6146 18.9265 4.32698 18.362C4 17.7202 4 16.8802 4 15.2V9Z" strokeWidth={strokeWidth} stroke={color}/><path d="M10 13H14" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 7.2C3 6.0799 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.07989 21 7.2V7.4C21 7.96005 21 8.24008 20.891 8.45399C20.7951 8.64215 20.6422 8.79513 20.454 8.89101C20.2401 9 19.9601 9 19.4 9H4.6C4.03995 9 3.75992 9 3.54601 8.89101C3.35785 8.79513 3.20487 8.64215 3.10899 8.45399C3 8.24008 3 7.96005 3 7.4V7.2Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
