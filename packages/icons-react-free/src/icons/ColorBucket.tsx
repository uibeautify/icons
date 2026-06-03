import { IconProps } from "../types";

/**
 * @component
 * @name ColorBucket
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNOC41NDg3NSA1LjY2NzU4TDEwLjkyNTEgMy4yOTEyM0MxMS4zMTU2IDIuOTAwNyAxMS45NDg4IDIuOTAwNyAxMi4zMzkzIDMuMjkxMjNMMjAuMjY1OSAxMS4yMTc4TDE5LjA0MTcgMTEuMjE3OEMxOC4yNDYxIDExLjIxNzggMTcuNDgzMSAxMS41MzM5IDE2LjkyMDUgMTIuMDk2NUwxMS4yODY4IDE3LjczMDJDMTAuMTE1MiAxOC45MDE3IDguMjE1NyAxOC45MDE3IDcuMDQ0MTIgMTcuNzMwMkwzLjg4NjQ2IDE0LjU3MjVDMi43MTQ4OSAxMy40MDA5IDIuNzE0ODkgMTEuNTAxNCAzLjg4NjQ1IDEwLjMyOTlMNi4wODE5NyA4LjEzNDMzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTAuMzk4OCA3LjUxNzU5TDYuNjk4NjUgMy44MTc0NCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTIwLjk5MjEgMTkuMDQ4OEMyMC45OTIxIDIwLjAxMjEgMjAuMjExMiAyMC43OTMgMTkuMjQ3OSAyMC43OTNDMTguMjg0NSAyMC43OTMgMTcuNTAzNiAyMC4wMTIxIDE3LjUwMzYgMTkuMDQ4OEMxNy41MDM2IDE4LjA4NTQgMTkuMjQ3OSAxNS41NjAyIDE5LjI0NzkgMTUuNTYwMkMxOS4yNDc5IDE1LjU2MDIgMjAuOTkyMSAxOC4wODU0IDIwLjk5MjEgMTkuMDQ4OFoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/color-bucket - Icon documentation
 */
export function ColorBucket({
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
      <path d="M8.54875 5.66758L10.9251 3.29123C11.3156 2.9007 11.9488 2.9007 12.3393 3.29123L20.2659 11.2178L19.0417 11.2178C18.2461 11.2178 17.4831 11.5339 16.9205 12.0965L11.2868 17.7302C10.1152 18.9017 8.2157 18.9017 7.04412 17.7302L3.88646 14.5725C2.71489 13.4009 2.71489 11.5014 3.88645 10.3299L6.08197 8.13433" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M10.3988 7.51759L6.69865 3.81744" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M20.9921 19.0488C20.9921 20.0121 20.2112 20.793 19.2479 20.793C18.2845 20.793 17.5036 20.0121 17.5036 19.0488C17.5036 18.0854 19.2479 15.5602 19.2479 15.5602C19.2479 15.5602 20.9921 18.0854 20.9921 19.0488Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
