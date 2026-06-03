import { IconProps } from "../types";

/**
 * @component
 * @name Favicon
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMiAxMC44QzIgOS4xMTk4NCAyIDguMjc5NzYgMi4zMjY5OCA3LjYzODAzQzIuNjE0NiA3LjA3MzU0IDMuMDczNTQgNi42MTQ2IDMuNjM4MDMgNi4zMjY5OEM0LjI3OTc2IDYgNS4xMTk4NCA2IDYuOCA2TDE3LjIgNkMxOC44ODAyIDYgMTkuNzIwMiA2IDIwLjM2MiA2LjMyNjk4QzIwLjkyNjUgNi42MTQ2IDIxLjM4NTQgNy4wNzM1NCAyMS42NzMgNy42MzgwM0MyMiA4LjI3OTc2IDIyIDkuMTE5ODQgMjIgMTAuOFYxMy4yQzIyIDE0Ljg4MDIgMjIgMTUuNzIwMiAyMS42NzMgMTYuMzYyQzIxLjM4NTQgMTYuOTI2NSAyMC45MjY1IDE3LjM4NTQgMjAuMzYyIDE3LjY3M0MxOS43MjAyIDE4IDE4Ljg4MDIgMTggMTcuMiAxOEw2LjggMThDNS4xMTk4NCAxOCA0LjI3OTc2IDE4IDMuNjM4MDMgMTcuNjczQzMuMDczNTQgMTcuMzg1NCAyLjYxNDYgMTYuOTI2NSAyLjMyNjk4IDE2LjM2MkMyIDE1LjcyMDIgMiAxNC44ODAyIDIgMTMuMlYxMC44WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTUuNSAxMFYxNE0xMS41IDEwLjI2NzZDMTEuMjA1OCAxMC4wOTc0IDEwLjg2NDMgMTAgMTAuNSAxMEM5LjM5NTQzIDEwIDguNSAxMC44OTU0IDguNSAxMkM4LjUgMTMuMTA0NiA5LjM5NTQzIDE0IDEwLjUgMTRDMTAuODY0MyAxNCAxMS4yMDU4IDEzLjkwMjYgMTEuNSAxMy43MzI0TTE4LjUgMTJDMTguNSAxMy4xMDQ2IDE3LjYwNDYgMTQgMTYuNSAxNEMxNS4zOTU0IDE0IDE0LjUgMTMuMTA0NiAxNC41IDEyQzE0LjUgMTAuODk1NCAxNS4zOTU0IDEwIDE2LjUgMTBDMTcuNjA0NiAxMCAxOC41IDEwLjg5NTQgMTguNSAxMloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/favicon - Icon documentation
 */
export function Favicon({
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
      <path d="M2 10.8C2 9.11984 2 8.27976 2.32698 7.63803C2.6146 7.07354 3.07354 6.6146 3.63803 6.32698C4.27976 6 5.11984 6 6.8 6L17.2 6C18.8802 6 19.7202 6 20.362 6.32698C20.9265 6.6146 21.3854 7.07354 21.673 7.63803C22 8.27976 22 9.11984 22 10.8V13.2C22 14.8802 22 15.7202 21.673 16.362C21.3854 16.9265 20.9265 17.3854 20.362 17.673C19.7202 18 18.8802 18 17.2 18L6.8 18C5.11984 18 4.27976 18 3.63803 17.673C3.07354 17.3854 2.6146 16.9265 2.32698 16.362C2 15.7202 2 14.8802 2 13.2V10.8Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M5.5 10V14M11.5 10.2676C11.2058 10.0974 10.8643 10 10.5 10C9.39543 10 8.5 10.8954 8.5 12C8.5 13.1046 9.39543 14 10.5 14C10.8643 14 11.2058 13.9026 11.5 13.7324M18.5 12C18.5 13.1046 17.6046 14 16.5 14C15.3954 14 14.5 13.1046 14.5 12C14.5 10.8954 15.3954 10 16.5 10C17.6046 10 18.5 10.8954 18.5 12Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
