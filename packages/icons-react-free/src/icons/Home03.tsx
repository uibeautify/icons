import { IconProps } from "../types";

/**
 * @component
 * @name Home03
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNC45NjE0NSA4LjE2MTZMOS4xNjE0NSA1LjA4MTZMOS4xNjE0NiA1LjA4MTZDMTAuMTgxIDQuMzMzOTUgMTAuNjkwNyAzLjk2MDEzIDExLjI0ODggMy44MTU3OUMxMS43NDE1IDMuNjg4MzYgMTIuMjU4NSAzLjY4ODM2IDEyLjc1MTIgMy44MTU3OUMxMy4zMDkzIDMuOTYwMTMgMTMuODE5IDQuMzMzOTUgMTQuODM4NSA1LjA4MTZMMTkuMDM4NSA4LjE2MTZDMTkuNzU3NCA4LjY4ODcyIDIwLjExNjggOC45NTIyOSAyMC4zNzYyIDkuMjg4ODVDMjAuNjA1OSA5LjU4NjkyIDIwLjc3NzUgOS45MjU1NSAyMC44ODIgMTAuMjg3MUMyMSAxMC42OTUzIDIxIDExLjE0MSAyMSAxMi4wMzIzVjE2LjJDMjEgMTcuODgwMiAyMSAxOC43MjAyIDIwLjY3MyAxOS4zNjJDMjAuMzg1NCAxOS45MjY1IDE5LjkyNjUgMjAuMzg1NCAxOS4zNjIgMjAuNjczQzE4LjcyMDIgMjEgMTcuODgwMiAyMSAxNi4yIDIxSDcuOEM2LjExOTg0IDIxIDUuMjc5NzYgMjEgNC42MzgwMyAyMC42NzNDNC4wNzM1NCAyMC4zODU0IDMuNjE0NiAxOS45MjY1IDMuMzI2OTggMTkuMzYyQzMgMTguNzIwMiAzIDE3Ljg4MDIgMyAxNi4yVjEyLjAzMjNDMyAxMS4xNDEgMyAxMC42OTUzIDMuMTE4MDEgMTAuMjg3MUMzLjIyMjUyIDkuOTI1NTUgMy4zOTQxMiA5LjU4NjkyIDMuNjIzODQgOS4yODg4NUMzLjg4MzI0IDguOTUyMjkgNC4yNDI2NSA4LjY4ODcyIDQuOTYxNDUgOC4xNjE2WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEyIDIxTDEyIDE3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/home-03 - Icon documentation
 */
export function Home03({
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
      <path d="M4.96145 8.1616L9.16145 5.0816L9.16146 5.0816C10.181 4.33395 10.6907 3.96013 11.2488 3.81579C11.7415 3.68836 12.2585 3.68836 12.7512 3.81579C13.3093 3.96013 13.819 4.33395 14.8385 5.0816L19.0385 8.1616C19.7574 8.68872 20.1168 8.95229 20.3762 9.28885C20.6059 9.58692 20.7775 9.92555 20.882 10.2871C21 10.6953 21 11.141 21 12.0323V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V12.0323C3 11.141 3 10.6953 3.11801 10.2871C3.22252 9.92555 3.39412 9.58692 3.62384 9.28885C3.88324 8.95229 4.24265 8.68872 4.96145 8.1616Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 21L12 17" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
