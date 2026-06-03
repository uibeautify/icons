import { IconProps } from "../types";

/**
 * @component
 * @name FileMinus
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTAgMjFIOC44QzcuMTE5ODQgMjEgNi4yNzk3NiAyMSA1LjYzODAzIDIwLjY3M0M1LjA3MzU0IDIwLjM4NTQgNC42MTQ2IDE5LjkyNjUgNC4zMjY5OCAxOS4zNjJDNCAxOC43MjAyIDQgMTcuODgwMiA0IDE2LjJWNy44QzQgNi4xMTk4NCA0IDUuMjc5NzYgNC4zMjY5OCA0LjYzODAzQzQuNjE0NiA0LjA3MzU0IDUuMDczNTQgMy42MTQ2IDUuNjM4MDMgMy4zMjY5OEM2LjI3OTc2IDMgNy4xMTk4NCAzIDguOCAzSDEyLjI1MDZDMTIuNTI2MSAzIDEyLjY2MzggMyAxMi43OTE0IDMuMDM0MzRDMTIuOTA0NSAzLjA2NDc2IDEzLjAxMTQgMy4xMTQ4MSAxMy4xMDcxIDMuMTgyMjFDMTMuMjE1MiAzLjI1ODI4IDEzLjMwMzQgMy4zNjQwOSAxMy40Nzk4IDMuNTc1N0wxNy42MjkyIDguNTU0OTlDMTcuNzY2NSA4LjcxOTggMTcuODM1MiA4LjgwMjIxIDE3Ljg4NDEgOC44OTQ2OEMxNy45Mjc0IDguOTc2NyAxNy45NTkyIDkuMDY0MzYgMTcuOTc4NCA5LjE1NTEzQzE4IDkuMjU3NDYgMTggOS4zNjQ3MyAxOCA5LjU3OTI4VjE1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTMgM1Y4QzEzIDguNTUyMjggMTMuNDQ3NyA5IDE0IDlIMTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTUgMjBIMjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/file-minus - Icon documentation
 */
export function FileMinus({
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
      <path d="M10 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V7.8C4 6.11984 4 5.27976 4.32698 4.63803C4.6146 4.07354 5.07354 3.6146 5.63803 3.32698C6.27976 3 7.11984 3 8.8 3H12.2506C12.5261 3 12.6638 3 12.7914 3.03434C12.9045 3.06476 13.0114 3.11481 13.1071 3.18221C13.2152 3.25828 13.3034 3.36409 13.4798 3.5757L17.6292 8.55499C17.7665 8.7198 17.8352 8.80221 17.8841 8.89468C17.9274 8.9767 17.9592 9.06436 17.9784 9.15513C18 9.25746 18 9.36473 18 9.57928V15" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M13 3V8C13 8.55228 13.4477 9 14 9H18" strokeWidth={strokeWidth} stroke={color}/><path d="M15 20H21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
