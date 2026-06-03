import { IconProps } from "../types";

/**
 * @component
 * @name ListSearch
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTEgMjFIOS44QzguMTE5ODQgMjEgNy4yNzk3NiAyMSA2LjYzODAzIDIwLjY3M0M2LjA3MzU0IDIwLjM4NTQgNS42MTQ2IDE5LjkyNjUgNS4zMjY5OCAxOS4zNjJDNSAxOC43MjAyIDUgMTcuODgwMiA1IDE2LjJWNy44QzUgNi4xMTk4NCA1IDUuMjc5NzYgNS4zMjY5OCA0LjYzODAzQzUuNjE0NiA0LjA3MzU0IDYuMDczNTQgMy42MTQ2IDYuNjM4MDMgMy4zMjY5OEM3LjI3OTc2IDMgOC4xMTk4NCAzIDkuOCAzSDE0LjJDMTUuODgwMiAzIDE2LjcyMDIgMyAxNy4zNjIgMy4zMjY5OEMxNy45MjY1IDMuNjE0NiAxOC4zODU0IDQuMDczNTQgMTguNjczIDQuNjM4MDNDMTkgNS4yNzk3NiAxOSA2LjExOTg0IDE5IDcuOFYxMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTkgN0gxNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTkgMTFIMTQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik05IDE1SDExIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTkuNjk2NyAxOS42OTI0QzIwLjE5MzEgMTkuMTk0OSAyMC41IDE4LjUwODMgMjAuNSAxNy43NUMyMC41IDE2LjIzMTIgMTkuMjY4OCAxNSAxNy43NSAxNUMxNi4yMzEyIDE1IDE1IDE2LjIzMTIgMTUgMTcuNzVDMTUgMTkuMjY4OCAxNi4yMzEyIDIwLjUgMTcuNzUgMjAuNUMxOC41MTA1IDIwLjUgMTkuMTk4OSAyMC4xOTEzIDE5LjY5NjcgMTkuNjkyNFpNMTkuNjk2NyAxOS42OTI0TDIxIDIxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/list-search - Icon documentation
 */
export function ListSearch({
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
      <path d="M11 21H9.8C8.11984 21 7.27976 21 6.63803 20.673C6.07354 20.3854 5.6146 19.9265 5.32698 19.362C5 18.7202 5 17.8802 5 16.2V7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V10" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M9 7H15" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M9 11H14" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M9 15H11" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M19.6967 19.6924C20.1931 19.1949 20.5 18.5083 20.5 17.75C20.5 16.2312 19.2688 15 17.75 15C16.2312 15 15 16.2312 15 17.75C15 19.2688 16.2312 20.5 17.75 20.5C18.5105 20.5 19.1989 20.1913 19.6967 19.6924ZM19.6967 19.6924L21 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
