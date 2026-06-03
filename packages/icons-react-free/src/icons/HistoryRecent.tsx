import { IconProps } from "../types";

/**
 * @component
 * @name HistoryRecent
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTEgOFYxMi4zODJDMTEgMTIuNzYwNyAxMS4yMTQgMTMuMTA3IDExLjU1MjggMTMuMjc2NEwxNSAxNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTMuNjM3NDkgOC41MzEyOUM0LjE1ODggNy4yODQyNyA0Ljk1MjcxIDYuMTc5NTcgNS45NDQ3MyA1LjI5MTY4QzcuNTM3IDMuODY2NTYgOS42Mzk2NyAzIDExLjk0NDcgM0MxNi45MTUzIDMgMjAuOTQ0NyA3LjAyOTQ0IDIwLjk0NDcgMTJDMjAuOTQ0NyAxNi45NzA2IDE2LjkxNTMgMjEgMTEuOTQ0NyAyMUM3LjMxMzIxIDIxIDMuNDk4OCAxNy41MDE1IDIuOTk5OTkgMTMuMDAzTTMuMjM0MDYgNi4xMDI3NUwzLjYzNzQ5IDguNTMxMjlMNi4wODk3MiA3Ljk3OTY2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/history-recent - Icon documentation
 */
export function HistoryRecent({
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
      <path d="M11 8V12.382C11 12.7607 11.214 13.107 11.5528 13.2764L15 15" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M3.63749 8.53129C4.1588 7.28427 4.95271 6.17957 5.94473 5.29168C7.537 3.86656 9.63967 3 11.9447 3C16.9153 3 20.9447 7.02944 20.9447 12C20.9447 16.9706 16.9153 21 11.9447 21C7.31321 21 3.4988 17.5015 2.99999 13.003M3.23406 6.10275L3.63749 8.53129L6.08972 7.97966" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
