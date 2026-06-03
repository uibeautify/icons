import { IconProps } from "../types";

/**
 * @component
 * @name FileX
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTMgMjFIOS44QzguMTE5ODQgMjEgNy4yNzk3NiAyMSA2LjYzODAzIDIwLjY3M0M2LjA3MzU0IDIwLjM4NTQgNS42MTQ2IDE5LjkyNjUgNS4zMjY5OCAxOS4zNjJDNSAxOC43MjAyIDUgMTcuODgwMiA1IDE2LjJWNy44QzUgNi4xMTk4NCA1IDUuMjc5NzYgNS4zMjY5OCA0LjYzODAzQzUuNjE0NiA0LjA3MzU0IDYuMDczNTQgMy42MTQ2IDYuNjM4MDMgMy4zMjY5OEM3LjI3OTc2IDMgOC4xMTk4NCAzIDkuOCAzSDEzLjI1MDZDMTMuNTI2MSAzIDEzLjY2MzggMyAxMy43OTE0IDMuMDM0MzRDMTMuOTA0NSAzLjA2NDc2IDE0LjAxMTQgMy4xMTQ4MSAxNC4xMDcxIDMuMTgyMjFDMTQuMjE1MiAzLjI1ODI4IDE0LjMwMzQgMy4zNjQwOSAxNC40Nzk4IDMuNTc1N0wxOC42MjkyIDguNTU0OTlDMTguNzY2NSA4LjcxOTggMTguODM1MiA4LjgwMjIxIDE4Ljg4NDEgOC44OTQ2OEMxOC45Mjc0IDguOTc2NyAxOC45NTkyIDkuMDY0MzYgMTguOTc4NCA5LjE1NTEzQzE5IDkuMjU3NDYgMTkgOS4zNjQ3MyAxOSA5LjU3OTI4VjEzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTQgM1Y4QzE0IDguNTUyMjggMTQuNDQ3NyA5IDE1IDlIMTkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMjEgMjFMMTcgMTciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNyAyMUwyMSAxNyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/file-x - Icon documentation
 */
export function FileX({
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
      <path d="M13 21H9.8C8.11984 21 7.27976 21 6.63803 20.673C6.07354 20.3854 5.6146 19.9265 5.32698 19.362C5 18.7202 5 17.8802 5 16.2V7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H13.2506C13.5261 3 13.6638 3 13.7914 3.03434C13.9045 3.06476 14.0114 3.11481 14.1071 3.18221C14.2152 3.25828 14.3034 3.36409 14.4798 3.5757L18.6292 8.55499C18.7665 8.7198 18.8352 8.80221 18.8841 8.89468C18.9274 8.9767 18.9592 9.06436 18.9784 9.15513C19 9.25746 19 9.36473 19 9.57928V13" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M14 3V8C14 8.55228 14.4477 9 15 9H19" strokeWidth={strokeWidth} stroke={color}/><path d="M21 21L17 17" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M17 21L21 17" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
