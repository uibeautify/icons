import { IconProps } from "../types";

/**
 * @component
 * @name Telescope
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTUuMjA5IDUuMDAxMkwxNi43NjE5IDEwLjc5NjhMNC44NTYzIDEzLjAyNTFDNC4zNDI2OCAxMy4xMjEyIDMuODQxNjQgMTIuODA1NyAzLjcwNjQgMTIuMzAxTDMuMTUwNDcgMTAuMjI2MkMzLjAxNTIzIDkuNzIxNTIgMy4yOTEzOSA5LjE5Nzc1IDMuNzg0MjYgOS4wMjQyTDE1LjIwOSA1LjAwMTJaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTUuMjA5IDUuMDAxMkMxNS4wNjYxIDQuNDY3NzQgMTUuMzgyNiAzLjkxOTQgMTUuOTE2MSAzLjc3NjQ2TDE3Ljg0OCAzLjI1ODgyQzE4LjM4MTQgMy4xMTU4OCAxOC45Mjk4IDMuNDMyNDYgMTkuMDcyNyAzLjk2NTkzTDIwLjYyNTYgOS43NjE0OEMyMC43Njg2IDEwLjI5NDkgMjAuNDUyIDEwLjg0MzMgMTkuOTE4NSAxMC45ODYyTDE3Ljk4NjcgMTEuNTAzOUMxNy40NTMyIDExLjY0NjggMTYuOTA0OSAxMS4zMzAyIDE2Ljc2MTkgMTAuNzk2OEwxNS4yMDkgNS4wMDEyWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTYgMjAuOTk5OUwxMC40ODI3IDE1LjAyMzFNMTggMjAuOTk5OUwxMy41MTczIDE1LjAyMzEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTMuNzIyIiByPSIyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTIgMTZWMjAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/telescope - Icon documentation
 */
export function Telescope({
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
      <path d="M15.209 5.0012L16.7619 10.7968L4.8563 13.0251C4.34268 13.1212 3.84164 12.8057 3.7064 12.301L3.15047 10.2262C3.01523 9.72152 3.29139 9.19775 3.78426 9.0242L15.209 5.0012Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M15.209 5.0012C15.0661 4.46774 15.3826 3.9194 15.9161 3.77646L17.848 3.25882C18.3814 3.11588 18.9298 3.43246 19.0727 3.96593L20.6256 9.76148C20.7686 10.2949 20.452 10.8433 19.9185 10.9862L17.9867 11.5039C17.4532 11.6468 16.9049 11.3302 16.7619 10.7968L15.209 5.0012Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M6 20.9999L10.4827 15.0231M18 20.9999L13.5173 15.0231" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><circle cx="12" cy="13.722" r="2" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M12 16V20" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
