import { IconProps } from "../types";

/**
 * @component
 * @name Youtube
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTEuOTg5NSAxOC43OTMxQzExLjk4OTUgMTguNzkzMSAxOC4yNTQ4IDE4Ljc5MzEgMTkuODA4OSAxOC4zNzkzQzIwLjY4MzkgMTguMTQ0OCAyMS4zNDIgMTcuNDY5IDIxLjU3MyAxNi42MzQ1QzIyIDE1LjEwMzQgMjIgMTEuODgyOCAyMiAxMS44ODI4QzIyIDExLjg4MjggMjIgOC42ODI3NiAyMS41NzMgNy4xNjU1MkMyMS4zNDIgNi4zMTAzNCAyMC42ODM5IDUuNjQ4MjggMTkuODA4OSA1LjQyMDY5QzE4LjI1NDggNSAxMS45ODk1IDUgMTEuOTg5NSA1QzExLjk4OTUgNSA1LjczODE5IDUgNC4xOTExMSA1LjQyMDY5QzMuMzMwMDcgNS42NDgyOCAyLjY1ODAzIDYuMzEwMzQgMi40MTMwMiA3LjE2NTUyQzIgOC42ODI3NiAyIDExLjg4MjggMiAxMS44ODI4QzIgMTEuODgyOCAyIDE1LjEwMzQgMi40MTMwMiAxNi42MzQ1QzIuNjU4MDMgMTcuNDY5IDMuMzMwMDcgMTguMTQ0OCA0LjE5MTExIDE4LjM3OTNDNS43MzgxOSAxOC43OTMxIDExLjk4OTUgMTguNzkzMSAxMS45ODk1IDE4Ljc5MzFaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE1LjEwMzUgMTEuODk2Nkw5LjkzMTA0IDguOTY1NThWMTQuODI3NkwxNS4xMDM1IDExLjg5NjZaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/youtube - Icon documentation
 */
export function Youtube({
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
      <path d="M11.9895 18.7931C11.9895 18.7931 18.2548 18.7931 19.8089 18.3793C20.6839 18.1448 21.342 17.469 21.573 16.6345C22 15.1034 22 11.8828 22 11.8828C22 11.8828 22 8.68276 21.573 7.16552C21.342 6.31034 20.6839 5.64828 19.8089 5.42069C18.2548 5 11.9895 5 11.9895 5C11.9895 5 5.73819 5 4.19111 5.42069C3.33007 5.64828 2.65803 6.31034 2.41302 7.16552C2 8.68276 2 11.8828 2 11.8828C2 11.8828 2 15.1034 2.41302 16.6345C2.65803 17.469 3.33007 18.1448 4.19111 18.3793C5.73819 18.7931 11.9895 18.7931 11.9895 18.7931Z" strokeWidth={strokeWidth} stroke={color}/><path d="M15.1035 11.8966L9.93104 8.96558V14.8276L15.1035 11.8966Z" fill={color}/>
    </svg>
  );
}
