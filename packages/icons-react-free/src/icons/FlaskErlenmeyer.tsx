import { IconProps } from "../types";

/**
 * @component
 * @name FlaskErlenmeyer
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNy40IDIxSDE2LjZDMTguNjU5OSAyMSAxOS42ODk4IDIxIDIwLjIzMyAyMC41NzQ3QzIwLjcwNTcgMjAuMjA0NiAyMC45ODcxIDE5LjY0MTggMjAuOTk5NiAxOS4wNDE2QzIxLjAxMzkgMTguMzUxOSAyMC4zOTU5IDE3LjUyNzkgMTkuMTYgMTUuODhMMTcuNzUgMTRINi4yNUw0Ljg0IDE1Ljg4QzMuNjA0MDYgMTcuNTI3OSAyLjk4NjA5IDE4LjM1MTkgMy4wMDA0MyAxOS4wNDE2QzMuMDEyOTEgMTkuNjQxOCAzLjI5NDMzIDIwLjIwNDYgMy43NjcgMjAuNTc0N0M0LjMxMDE1IDIxIDUuMzQwMSAyMSA3LjQgMjFaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOCA0LjVWNUM4IDUuNTUyMjggOC40NDc3MiA2IDkgNkM5LjU1MjI4IDYgMTAgNi40NDc3MiAxMCA3VjguMjVDMTAgOC4zMzIzNyAxMCA4LjM3MzU2IDkuOTk4MzggOC40MTM3NUM5Ljk4MzE5IDguNzkxMzIgOS44NjEzNCA5LjE1Njg2IDkuNjQ2OTYgOS40NjgwM0M5LjYyNDE0IDkuNTAxMTUgOS41OTk0MyA5LjUzNDA5IDkuNTUwMDIgOS41OTk5N0w5LjU1IDkuNkw2LjI1IDE0SDE3Ljc1TDE0LjQ1IDkuNkMxNC40MDA2IDkuNTM0MSAxNC4zNzU5IDkuNTAxMTUgMTQuMzUzIDkuNDY4MDNDMTQuMTM4NyA5LjE1Njg2IDE0LjAxNjggOC43OTEzMiAxNC4wMDE2IDguNDEzNzVDMTQgOC4zNzM1NiAxNCA4LjMzMjM3IDE0IDguMjVWN0MxNCA2LjQ0NzcyIDE0LjQ0NzcgNiAxNSA2QzE1LjU1MjMgNiAxNiA1LjU1MjI4IDE2IDVWNC41QzE2IDMuNjcxNTcgMTUuMzI4NCAzIDE0LjUgM0g5LjVDOC42NzE1NyAzIDggMy42NzE1NyA4IDQuNVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/flask-erlenmeyer - Icon documentation
 */
export function FlaskErlenmeyer({
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
      <path d="M7.4 21H16.6C18.6599 21 19.6898 21 20.233 20.5747C20.7057 20.2046 20.9871 19.6418 20.9996 19.0416C21.0139 18.3519 20.3959 17.5279 19.16 15.88L17.75 14H6.25L4.84 15.88C3.60406 17.5279 2.98609 18.3519 3.00043 19.0416C3.01291 19.6418 3.29433 20.2046 3.767 20.5747C4.31015 21 5.3401 21 7.4 21Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M8 4.5V5C8 5.55228 8.44772 6 9 6C9.55228 6 10 6.44772 10 7V8.25C10 8.33237 10 8.37356 9.99838 8.41375C9.98319 8.79132 9.86134 9.15686 9.64696 9.46803C9.62414 9.50115 9.59943 9.53409 9.55002 9.59997L9.55 9.6L6.25 14H17.75L14.45 9.6C14.4006 9.5341 14.3759 9.50115 14.353 9.46803C14.1387 9.15686 14.0168 8.79132 14.0016 8.41375C14 8.37356 14 8.33237 14 8.25V7C14 6.44772 14.4477 6 15 6C15.5523 6 16 5.55228 16 5V4.5C16 3.67157 15.3284 3 14.5 3H9.5C8.67157 3 8 3.67157 8 4.5Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
