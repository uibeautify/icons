import { IconProps } from "../types";

/**
 * @component
 * @name HardDrive01
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyAxM0gyMU0yMSAxM0wxNi44ODQ1IDQuNzY4OTJDMTYuNTYzNCA0LjEyNjc5IDE2LjQwMjkgMy44MDU3MyAxNi4xNjM0IDMuNTcxMTZDMTUuOTUxNiAzLjM2MzczIDE1LjY5NjMgMy4yMDU5NyAxNS40MTYxIDMuMTA5MzFDMTUuMDk5MiAzIDE0Ljc0MDIgMyAxNC4wMjIzIDNIOS45Nzc3MUM5LjI1OTc5IDMgOC45MDA4NCAzIDguNTgzOTMgMy4xMDkzMUM4LjMwMzY4IDMuMjA1OTcgOC4wNDg0MiAzLjM2MzczIDcuODM2NjMgMy41NzExNkM3LjU5NzEzIDMuODA1NzMgNy40MzY2IDQuMTI2NzkgNy4xMTU1NCA0Ljc2ODkyTDMgMTNWMTcuOEMzIDE4LjkyMDEgMyAxOS40ODAyIDMuMjE3OTkgMTkuOTA4QzMuNDA5NzMgMjAuMjg0MyAzLjcxNTY5IDIwLjU5MDMgNC4wOTIwMiAyMC43ODJDNC41MTk4NCAyMSA1LjA3OTg5IDIxIDYuMiAyMUgxNy44QzE4LjkyMDEgMjEgMTkuNDgwMiAyMSAxOS45MDggMjAuNzgyQzIwLjI4NDMgMjAuNTkwMyAyMC41OTAzIDIwLjI4NDMgMjAuNzgyIDE5LjkwOEMyMSAxOS40ODAyIDIxIDE4LjkyMDEgMjEgMTcuOFYxM1oiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNiAxN0wxNyAxNyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTcgMTdMMTEgMTciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/hard-drive-01 - Icon documentation
 */
export function HardDrive01({
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
      <path d="M3 13H21M21 13L16.8845 4.76892C16.5634 4.12679 16.4029 3.80573 16.1634 3.57116C15.9516 3.36373 15.6963 3.20597 15.4161 3.10931C15.0992 3 14.7402 3 14.0223 3H9.97771C9.25979 3 8.90084 3 8.58393 3.10931C8.30368 3.20597 8.04842 3.36373 7.83663 3.57116C7.59713 3.80573 7.4366 4.12679 7.11554 4.76892L3 13V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V13Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M16 17L17 17" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M7 17L11 17" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
