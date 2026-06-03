import { IconProps } from "../types";

/**
 * @component
 * @name Integration
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyAxMC4yQzMgOS4wNzk4OSAzIDguNTE5ODQgMy4yMTc5OSA4LjA5MjAyQzMuNDA5NzMgNy43MTU2OSAzLjcxNTY5IDcuNDA5NzMgNC4wOTIwMiA3LjIxNzk5QzQuNTE5ODQgNyA1LjA3OTkgNyA2LjIgN0gxNy44QzE4LjkyMDEgNyAxOS40ODAyIDcgMTkuOTA4IDcuMjE3OTlDMjAuMjg0MyA3LjQwOTczIDIwLjU5MDMgNy43MTU2OSAyMC43ODIgOC4wOTIwMkMyMSA4LjUxOTg0IDIxIDkuMDc5ODkgMjEgMTAuMlYxNi4yQzIxIDE3Ljg4MDIgMjEgMTguNzIwMiAyMC42NzMgMTkuMzYyQzIwLjM4NTQgMTkuOTI2NSAxOS45MjY1IDIwLjM4NTQgMTkuMzYyIDIwLjY3M0MxOC43MjAyIDIxIDE3Ljg4MDIgMjEgMTYuMiAyMUg3LjhDNi4xMTk4NCAyMSA1LjI3OTc2IDIxIDQuNjM4MDMgMjAuNjczQzQuMDczNTQgMjAuMzg1NCAzLjYxNDYgMTkuOTI2NSAzLjMyNjk4IDE5LjM2MkMzIDE4LjcyMDIgMyAxNy44ODAyIDMgMTYuMlYxMC4yWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE0IDdMMTQgNC42QzE0IDQuMDM5OTUgMTQgMy43NTk5MiAxNC4xMDkgMy41NDYwMUMxNC4yMDQ5IDMuMzU3ODUgMTQuMzU3OCAzLjIwNDg3IDE0LjU0NiAzLjEwODk5QzE0Ljc1OTkgMyAxNS4wMzk5IDMgMTUuNiAzTDE2LjQgM0MxNi45NjAxIDMgMTcuMjQwMSAzIDE3LjQ1NCAzLjEwODk5QzE3LjY0MjIgMy4yMDQ4NyAxNy43OTUxIDMuMzU3ODUgMTcuODkxIDMuNTQ2MDFDMTggMy43NTk5MiAxOCA0LjAzOTk1IDE4IDQuNkwxOCA3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNiA3TDYgNC42QzYgNC4wMzk5NSA2IDMuNzU5OTIgNi4xMDg5OSAzLjU0NjAxQzYuMjA0ODcgMy4zNTc4NSA2LjM1Nzg1IDMuMjA0ODcgNi41NDYwMSAzLjEwODk5QzYuNzU5OTIgMyA3LjAzOTk1IDMgNy42IDNMOC40IDNDOC45NjAwNSAzIDkuMjQwMDggMyA5LjQ1Mzk5IDMuMTA4OTlDOS42NDIxNSAzLjIwNDg3IDkuNzk1MTMgMy4zNTc4NSA5Ljg5MTAxIDMuNTQ2MDFDMTAgMy43NTk5MiAxMCA0LjAzOTk1IDEwIDQuNkwxMCA3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/integration - Icon documentation
 */
export function Integration({
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
      <path d="M3 10.2C3 9.07989 3 8.51984 3.21799 8.09202C3.40973 7.71569 3.71569 7.40973 4.09202 7.21799C4.51984 7 5.0799 7 6.2 7H17.8C18.9201 7 19.4802 7 19.908 7.21799C20.2843 7.40973 20.5903 7.71569 20.782 8.09202C21 8.51984 21 9.07989 21 10.2V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V10.2Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M14 7L14 4.6C14 4.03995 14 3.75992 14.109 3.54601C14.2049 3.35785 14.3578 3.20487 14.546 3.10899C14.7599 3 15.0399 3 15.6 3L16.4 3C16.9601 3 17.2401 3 17.454 3.10899C17.6422 3.20487 17.7951 3.35785 17.891 3.54601C18 3.75992 18 4.03995 18 4.6L18 7" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M6 7L6 4.6C6 4.03995 6 3.75992 6.10899 3.54601C6.20487 3.35785 6.35785 3.20487 6.54601 3.10899C6.75992 3 7.03995 3 7.6 3L8.4 3C8.96005 3 9.24008 3 9.45399 3.10899C9.64215 3.20487 9.79513 3.35785 9.89101 3.54601C10 3.75992 10 4.03995 10 4.6L10 7" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
