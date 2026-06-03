import { IconProps } from "../types";

/**
 * @component
 * @name Megaphone01
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48ZWxsaXBzZSBjeD0iMTciIGN5PSIxMSIgcng9IjQiIHJ5PSI4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEzLjM5NTYgMTMuNTE5NEMxMy43MDE1IDEzLjgzNjcgMTQuMjIxIDE0IDE0LjY1MiAxNEMxNS45NDg4IDE0IDE3IDEyLjY1NjkgMTcgMTFDMTcgOS4zNDMxNSAxNS45NDg4IDggMTQuNjUyIDhDMTQuMTI0NSA4IDEzLjUxMTYgOC4yNjIzNiAxMy4xNzc3IDguNjk2NSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE2LjUgMy4wNTEyN0w0LjY5Njg3IDcuNzI0MTNDNC4yNDc1NSA3LjkwMjAyIDMuODcxMjIgOC4yMzQwMyAzLjY3MTggOC42NzQyMUMyLjg2NzI5IDEwLjQ1IDIuODU3MjkgMTEuNjUzOSAzLjY3MDE3IDEzLjM1OTVDMy44NzA0MyAxMy43Nzk3IDQuMjM2NzggMTQuMDkzOSA0LjY2OTUxIDE0LjI2NTRMMTYuNDkzNiAxOC45NTE0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNS45MjYxIDE0Ljc3ODNMNy43NzIwOCAyMC4zMTYyQzcuOTA4MTkgMjAuNzI0NiA4LjI5MDMzIDIxIDguNzIwNzYgMjFIMTAuNjEyNkMxMS4yOTUxIDIxIDExLjc3NzEgMjAuMzMxMyAxMS41NjEzIDE5LjY4MzhMMTAuNTI5NyAxNi41ODkxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/megaphone-01 - Icon documentation
 */
export function Megaphone01({
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
      <ellipse cx="17" cy="11" rx="4" ry="8" strokeWidth={strokeWidth} stroke={color}/><path d="M13.3956 13.5194C13.7015 13.8367 14.221 14 14.652 14C15.9488 14 17 12.6569 17 11C17 9.34315 15.9488 8 14.652 8C14.1245 8 13.5116 8.26236 13.1777 8.6965" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M16.5 3.05127L4.69687 7.72413C4.24755 7.90202 3.87122 8.23403 3.6718 8.67421C2.86729 10.45 2.85729 11.6539 3.67017 13.3595C3.87043 13.7797 4.23678 14.0939 4.66951 14.2654L16.4936 18.9514" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M5.9261 14.7783L7.77208 20.3162C7.90819 20.7246 8.29033 21 8.72076 21H10.6126C11.2951 21 11.7771 20.3313 11.5613 19.6838L10.5297 16.5891" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
