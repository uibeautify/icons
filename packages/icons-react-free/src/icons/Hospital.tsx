import { IconProps } from "../types";

/**
 * @component
 * @name Hospital
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNOC41IDRDOC4zMjI2MSA0LjA0NTY2IDguMTU0NzUgNC4xMTUwNCA4IDQuMjA0NTZDNy40MDIyIDQuNTUwMzcgNyA1LjE5NjcxIDcgNS45MzY5OVYyMUgxNy44QzE4LjkyMDEgMjEgMTkuNDgwMiAyMSAxOS45MDggMjAuNzgyQzIwLjI4NDMgMjAuNTkwMyAyMC41OTAzIDIwLjI4NDMgMjAuNzgyIDE5LjkwOEMyMSAxOS40ODAyIDIxIDE4LjkyMDEgMjEgMTcuOFY1LjkzNjk5QzIxIDUuMDA1MDcgMjAuMzYyNiA0LjIyMjAyIDE5LjUgNCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTExIDEySDEyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTEgMTZIMTIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNiAxMkgxNyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE2IDE2SDE3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTIgNEgxNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE0IDZMMTQgMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTMgMTIuMkMzIDExLjA3OTkgMyAxMC41MTk4IDMuMjE3OTkgMTAuMDkyQzMuNDA5NzMgOS43MTU2OSAzLjcxNTY5IDkuNDA5NzMgNC4wOTIwMiA5LjIxNzk5QzQuNTE5ODQgOSA1LjA3OTg5IDkgNi4yIDlIN1YyMUg0LjZDNC4wMzk5NSAyMSAzLjc1OTkyIDIxIDMuNTQ2MDEgMjAuODkxQzMuMzU3ODUgMjAuNzk1MSAzLjIwNDg3IDIwLjY0MjIgMy4xMDg5OSAyMC40NTRDMyAyMC4yNDAxIDMgMTkuOTYwMSAzIDE5LjRWMTIuMloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/hospital - Icon documentation
 */
export function Hospital({
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
      <path d="M8.5 4C8.32261 4.04566 8.15475 4.11504 8 4.20456C7.4022 4.55037 7 5.19671 7 5.93699V21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V5.93699C21 5.00507 20.3626 4.22202 19.5 4" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M11 12H12" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M11 16H12" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M16 12H17" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M16 16H17" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M12 4H16" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M14 6L14 2" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M3 12.2C3 11.0799 3 10.5198 3.21799 10.092C3.40973 9.71569 3.71569 9.40973 4.09202 9.21799C4.51984 9 5.07989 9 6.2 9H7V21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V12.2Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
