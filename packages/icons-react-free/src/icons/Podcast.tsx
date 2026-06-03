import { IconProps } from "../types";

/**
 * @component
 * @name Podcast
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTMuMTk2MSAyMC4wMTk0TDEzLjYwNzggMTcuOTYxMkMxMy44MTA3IDE2Ljk0NjYgMTMuMDM0NyAxNiAxMiAxNkMxMC45NjUzIDE2IDEwLjE4OTMgMTYuOTQ2NiAxMC4zOTIyIDE3Ljk2MTJMMTAuODAzOSAyMC4wMTk0QzEwLjgzNzMgMjAuMTg2NiAxMC44NTQxIDIwLjI3MDMgMTAuODc5OSAyMC4zNDEzQzExLjAwNDggMjAuNjg1MyAxMS4zMDc2IDIwLjkzMzYgMTEuNjY5NCAyMC45ODg2QzExLjc0NDIgMjEgMTEuODI5NSAyMSAxMiAyMUMxMi4xNzA1IDIxIDEyLjI1NTggMjEgMTIuMzMwNiAyMC45ODg2QzEyLjY5MjQgMjAuOTMzNiAxMi45OTUyIDIwLjY4NTMgMTMuMTIwMSAyMC4zNDEzQzEzLjE0NTkgMjAuMjcwMyAxMy4xNjI3IDIwLjE4NjYgMTMuMTk2MSAyMC4wMTk0WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEzIDEyQzEzIDEyLjU1MjMgMTIuNTUyMyAxMyAxMiAxM0MxMS40NDc3IDEzIDExIDEyLjU1MjMgMTEgMTJDMTEgMTEuNDQ3NyAxMS40NDc3IDExIDEyIDExQzEyLjU1MjMgMTEgMTMgMTEuNDQ3NyAxMyAxMloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNy40MTYwNCAxNEM3LjE0ODQ1IDEzLjM4NzUgNyAxMi43MTExIDcgMTJDNyA5LjIzODU4IDkuMjM4NTggNyAxMiA3QzE0Ljc2MTQgNyAxNyA5LjIzODU4IDE3IDEyQzE3IDEyLjcxMTEgMTYuODUxNiAxMy4zODc1IDE2LjU4NCAxNCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE4LjcwODMgMThDMjAuMTMzNCAxNi40MDc3IDIxIDE0LjMwNTEgMjEgMTJDMjEgNy4wMjk0NCAxNi45NzA2IDMgMTIgM0M3LjAyOTQ0IDMgMyA3LjAyOTQ0IDMgMTJDMyAxNC4zMDUxIDMuODY2NTYgMTYuNDA3NyA1LjI5MTY4IDE4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/podcast - Icon documentation
 */
export function Podcast({
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
      <path d="M13.1961 20.0194L13.6078 17.9612C13.8107 16.9466 13.0347 16 12 16C10.9653 16 10.1893 16.9466 10.3922 17.9612L10.8039 20.0194C10.8373 20.1866 10.8541 20.2703 10.8799 20.3413C11.0048 20.6853 11.3076 20.9336 11.6694 20.9886C11.7442 21 11.8295 21 12 21C12.1705 21 12.2558 21 12.3306 20.9886C12.6924 20.9336 12.9952 20.6853 13.1201 20.3413C13.1459 20.2703 13.1627 20.1866 13.1961 20.0194Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" strokeWidth={strokeWidth} stroke={color}/><path d="M7.41604 14C7.14845 13.3875 7 12.7111 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 12.7111 16.8516 13.3875 16.584 14" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M18.7083 18C20.1334 16.4077 21 14.3051 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 14.3051 3.86656 16.4077 5.29168 18" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
