import { IconProps } from "../types";

/**
 * @component
 * @name Call
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNi45OTgyNCAzLjc1MTgyQzYuNzY2MDMgMy4wNzI5MiA1LjkzMDU0IDIuNzUzNjEgNS4zNTE2NSAzLjE3NzUzTDQuNjM4NDggMy42OTk3OEM0LjM1NTExIDMuOTA3MjkgNC4wNzg2MyA0LjEyOTM5IDMuODY1NCA0LjQwODQ5QzEuNzg3ODQgNy4xMjc3NiAzLjI5NTY1IDEyLjQxIDcuNDM2NSAxNi41NTA4QzExLjU3NzQgMjAuNjkxNyAxNi44NTk2IDIyLjE5OTUgMTkuNTc4OCAyMC4xMjE5QzE5Ljg1NzkgMTkuOTA4NyAyMC4wOCAxOS42MzIyIDIwLjI4NzUgMTkuMzQ4OEwyMC44MDk4IDE4LjYzNTdDMjEuMjMzNyAxOC4wNTY4IDIwLjkxNDQgMTcuMjIxMyAyMC4yMzU1IDE2Ljk4OTFDMTkuMjE5NyAxNi42NDE2IDE4LjE1MjUgMTYuMTQwMyAxNy4wNzIxIDE1LjQ5NzlDMTYuNjUwMSAxNS4yNDcxIDE2LjEyNjEgMTUuMzM5IDE1LjgxODIgMTUuNzIxM0MxNS42MDgzIDE1Ljk4MiAxNS4zNzgzIDE2LjIyMzEgMTUuMTE3MSAxNi4zNDEzQzEzLjIxNSAxNy4yMDIxIDYuNjY4NTYgMTEuMDY1MiA3LjYyMzk5IDguODcyNkM3Ljc0NDM3IDguNTk2MzUgNy45OTcyNiA4LjM1MDM3IDguMjY3MiA4LjEyNTE1QzguNjM2MzkgNy44MTcxMyA4LjcxODkzIDcuMzAyNjYgOC40NzM4MyA2Ljg4OTAyQzcuODM4OSA1LjgxNzUxIDcuMzQyODUgNC43NTkzNyA2Ljk5ODI0IDMuNzUxODJaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/call - Icon documentation
 */
export function Call({
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
      <path d="M6.99824 3.75182C6.76603 3.07292 5.93054 2.75361 5.35165 3.17753L4.63848 3.69978C4.35511 3.90729 4.07863 4.12939 3.8654 4.40849C1.78784 7.12776 3.29565 12.41 7.4365 16.5508C11.5774 20.6917 16.8596 22.1995 19.5788 20.1219C19.8579 19.9087 20.08 19.6322 20.2875 19.3488L20.8098 18.6357C21.2337 18.0568 20.9144 17.2213 20.2355 16.9891C19.2197 16.6416 18.1525 16.1403 17.0721 15.4979C16.6501 15.2471 16.1261 15.339 15.8182 15.7213C15.6083 15.982 15.3783 16.2231 15.1171 16.3413C13.215 17.2021 6.66856 11.0652 7.62399 8.8726C7.74437 8.59635 7.99726 8.35037 8.2672 8.12515C8.63639 7.81713 8.71893 7.30266 8.47383 6.88902C7.8389 5.81751 7.34285 4.75937 6.99824 3.75182Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
