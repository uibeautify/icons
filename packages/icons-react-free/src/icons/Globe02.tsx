import { IconProps } from "../types";

/**
 * @component
 * @name Globe02
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE2LjM4OCAxMkgyMUMyMSAxNC42NjU1IDE5Ljg0MTIgMTcuMDYwNCAxOCAxOC43MDgzTDE3IDE1Ljk2MjlMMTUuNDA2NSAxNC4zNjk0QzE1LjE0NjIgMTQuMTA5MSAxNSAxMy43NTYxIDE1IDEzLjM4OEMxNSAxMi42MjE0IDE1LjYyMTQgMTIgMTYuMzg4IDEyWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik03LjUgNC4yMDQwNEM0LjgwOTg5IDUuNzYwMTggMyA4LjY2ODczIDMgMTJDMyAxNS44MTk3IDUuMzc5NTMgMTkuMDgzNiA4LjczNzEgMjAuMzkwM0wxMSAxNS45NjI5SDlWMTIuOTYzTDEzIDkuOTQ0NFY2LjkyNTg0SDcuNVY0LjIwNDA0WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/globe-02 - Icon documentation
 */
export function Globe02({
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
      <circle cx="12" cy="12" r="9" strokeWidth={strokeWidth} stroke={color}/><path d="M16.388 12H21C21 14.6655 19.8412 17.0604 18 18.7083L17 15.9629L15.4065 14.3694C15.1462 14.1091 15 13.7561 15 13.388C15 12.6214 15.6214 12 16.388 12Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M7.5 4.20404C4.80989 5.76018 3 8.66873 3 12C3 15.8197 5.37953 19.0836 8.7371 20.3903L11 15.9629H9V12.963L13 9.9444V6.92584H7.5V4.20404Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
