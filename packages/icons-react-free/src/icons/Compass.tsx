import { IconProps } from "../types";

/**
 * @component
 * @name Compass
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEwLjM3OTUgOS44NzM1MUwxNC40ODIxIDguNTA1OTZDMTQuOTcwNyA4LjM0MzExIDE1LjIxNDkgOC4yNjE2OSAxNS4zNzc0IDguMzE5NjJDMTUuNTE4NyA4LjM3MDAyIDE1LjYzIDguNDgxMjcgMTUuNjgwNCA4LjYyMjYzQzE1LjczODMgOC43ODUwNyAxNS42NTY5IDkuMDI5MzQgMTUuNDk0IDkuNTE3ODlMMTQuMTI2NSAxMy42MjA1QzE0LjA4MDEgMTMuNzU5NyAxNC4wNTY5IDEzLjgyOTIgMTQuMDE3NCAxMy44ODdDMTMuOTgyNCAxMy45MzgyIDEzLjkzODIgMTMuOTgyNCAxMy44ODcgMTQuMDE3NEMxMy44MjkyIDE0LjA1NjkgMTMuNzU5NyAxNC4wODAxIDEzLjYyMDUgMTQuMTI2NUw5LjUxNzkgMTUuNDk0QzkuMDI5MzUgMTUuNjU2OSA4Ljc4NTA4IDE1LjczODMgOC42MjI2MyAxNS42ODA0QzguNDgxMjcgMTUuNjMgOC4zNzAwMyAxNS41MTg3IDguMzE5NjIgMTUuMzc3NEM4LjI2MTcgMTUuMjE0OSA4LjM0MzEyIDE0Ljk3MDYgOC41MDU5NyAxNC40ODIxTDkuODczNTEgMTAuMzc5NUM5LjkxOTg5IDEwLjI0MDMgOS45NDMwOCAxMC4xNzA4IDkuOTgyNiAxMC4xMTNDMTAuMDE3NiAxMC4wNjE4IDEwLjA2MTggMTAuMDE3NiAxMC4xMTMgOS45ODI2QzEwLjE3MDggOS45NDMwOCAxMC4yNDAzIDkuOTE5ODkgMTAuMzc5NSA5Ljg3MzUxWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/compass - Icon documentation
 */
export function Compass({
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
      <circle cx="12" cy="12" r="9" strokeWidth={strokeWidth} stroke={color}/><path d="M10.3795 9.87351L14.4821 8.50596C14.9707 8.34311 15.2149 8.26169 15.3774 8.31962C15.5187 8.37002 15.63 8.48127 15.6804 8.62263C15.7383 8.78507 15.6569 9.02934 15.494 9.51789L14.1265 13.6205C14.0801 13.7597 14.0569 13.8292 14.0174 13.887C13.9824 13.9382 13.9382 13.9824 13.887 14.0174C13.8292 14.0569 13.7597 14.0801 13.6205 14.1265L9.5179 15.494C9.02935 15.6569 8.78508 15.7383 8.62263 15.6804C8.48127 15.63 8.37003 15.5187 8.31962 15.3774C8.2617 15.2149 8.34312 14.9706 8.50597 14.4821L9.87351 10.3795C9.91989 10.2403 9.94308 10.1708 9.9826 10.113C10.0176 10.0618 10.0618 10.0176 10.113 9.9826C10.1708 9.94308 10.2403 9.91989 10.3795 9.87351Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
