import { IconProps } from "../types";

/**
 * @component
 * @name Badge
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjE1LjMzMzMiIHI9IjYuNjY2NjciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xMiA4LjY2NjY3QzEzLjU3OTUgOC42NjY2NyAxNS4wNDkgOS4xMzc0NyAxNi4yNzU4IDkuOTQ2NEwxOC43NTg1IDcuNDYzNzVDMTkuMzY3MiA2Ljg1NTAzIDE5LjUxODEgNS45MjUwOSAxOS4xMzMxIDUuMTU1MTFMMTcuOTM3OSAyLjc2NDY1QzE3LjcwMzYgMi4yOTYwMiAxNy4yMjQ2IDIgMTYuNzAwNiAySDcuMjk5MzVDNi43NzU0MSAyIDYuMjk2NDMgMi4yOTYwMiA2LjA2MjEyIDIuNzY0NjVMNC44NjY4OSA1LjE1NTExQzQuNDgxOSA1LjkyNTA5IDQuNjMyODEgNi44NTUwMyA1LjI0MTUzIDcuNDYzNzVMNy43MjQxNyA5Ljk0NjRDOC45NTEwMyA5LjEzNzQ3IDEwLjQyMDUgOC42NjY2NyAxMiA4LjY2NjY3Wk02LjA2MjEyIDIuNzY0NjVMMTIgOC42NjY2N00xMiA4LjY2NjY3TDE3LjkzNzkgMi43NjQ2NSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTExLjI5MiAxNC41NDM3TDExLjk5OSAxMy4xMTExTDEyLjcwNiAxNC41NDM3TTExLjk5OSAxMy4xMTExVjE2LjgzMTZNMTMuMTQzIDE1Ljk1NzdMMTQuMjIwMyAxNC44MDhMMTIuNzA2IDE0LjU0MzdNMTIuNzA2IDE0LjU0MzdMMTAuNjI2MiAxNy41NTM2TTE0LjIyMDMgMTQuODA4TDEwLjg1NTEgMTUuOTU3N00xMS45OTkgMTYuODMxNkwxMy4zNzE5IDE3LjU1MzZMMTMuMTQzIDE1Ljk1NzdNMTMuMTQzIDE1Ljk1NzdMOS43Nzc3NyAxNC44MDhNMTMuMzcxOSAxNy41NTM2TDExLjI5MiAxNC41NDM3TTEwLjg1NTEgMTUuOTU3N0wxMC42MjYyIDE3LjU1MzZMMTEuOTk5IDE2LjgzMTZNMTEuMjkyIDE0LjU0MzdMOS43Nzc3NyAxNC44MDhMMTAuODU1MSAxNS45NTc3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/badge - Icon documentation
 */
export function Badge({
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
      <circle cx="12" cy="15.3333" r="6.66667" strokeWidth={strokeWidth} stroke={color} strokeLinejoin="round" strokeLinecap="round"/><path d="M12 8.66667C13.5795 8.66667 15.049 9.13747 16.2758 9.9464L18.7585 7.46375C19.3672 6.85503 19.5181 5.92509 19.1331 5.15511L17.9379 2.76465C17.7036 2.29602 17.2246 2 16.7006 2H7.29935C6.77541 2 6.29643 2.29602 6.06212 2.76465L4.86689 5.15511C4.4819 5.92509 4.63281 6.85503 5.24153 7.46375L7.72417 9.9464C8.95103 9.13747 10.4205 8.66667 12 8.66667ZM6.06212 2.76465L12 8.66667M12 8.66667L17.9379 2.76465" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M11.292 14.5437L11.999 13.1111L12.706 14.5437M11.999 13.1111V16.8316M13.143 15.9577L14.2203 14.808L12.706 14.5437M12.706 14.5437L10.6262 17.5536M14.2203 14.808L10.8551 15.9577M11.999 16.8316L13.3719 17.5536L13.143 15.9577M13.143 15.9577L9.77777 14.808M13.3719 17.5536L11.292 14.5437M10.8551 15.9577L10.6262 17.5536L11.999 16.8316M11.292 14.5437L9.77777 14.808L10.8551 15.9577" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
