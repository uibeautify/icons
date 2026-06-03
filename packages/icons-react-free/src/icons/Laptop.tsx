import { IconProps } from "../types";

/**
 * @component
 * @name Laptop
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNSA3LjJDNSA2LjA3OTg5IDUgNS41MTk4NCA1LjIxNzk5IDUuMDkyMDJDNS40MDk3MyA0LjcxNTY5IDUuNzE1NjkgNC40MDk3MyA2LjA5MjAyIDQuMjE3OTlDNi41MTk4NCA0IDcuMDc5ODkgNCA4LjIgNEgxNS44QzE2LjkyMDEgNCAxNy40ODAyIDQgMTcuOTA4IDQuMjE3OTlDMTguMjg0MyA0LjQwOTczIDE4LjU5MDMgNC43MTU2OSAxOC43ODIgNS4wOTIwMkMxOSA1LjUxOTg0IDE5IDYuMDc5OSAxOSA3LjJWMTZINVY3LjJaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTMgMTYuOEMzIDE2LjUyIDMgMTYuMzggMy4wNTQ1IDE2LjI3M0MzLjEwMjQzIDE2LjE3ODkgMy4xNzg5MiAxNi4xMDI0IDMuMjczIDE2LjA1NDVDMy4zNzk5NiAxNiAzLjUxOTk3IDE2IDMuOCAxNkgyMC4yQzIwLjQ4IDE2IDIwLjYyIDE2IDIwLjcyNyAxNi4wNTQ1QzIwLjgyMTEgMTYuMTAyNCAyMC44OTc2IDE2LjE3ODkgMjAuOTQ1NSAxNi4yNzNDMjEgMTYuMzggMjEgMTYuNTIgMjEgMTYuOEMyMSAxNy45MjAxIDIxIDE4LjQ4MDIgMjAuNzgyIDE4LjkwOEMyMC41OTAzIDE5LjI4NDMgMjAuMjg0MyAxOS41OTAzIDE5LjkwOCAxOS43ODJDMTkuNDgwMiAyMCAxOC45MjAxIDIwIDE3LjggMjBINi4yQzUuMDc5ODkgMjAgNC41MTk4NCAyMCA0LjA5MjAyIDE5Ljc4MkMzLjcxNTY5IDE5LjU5MDMgMy40MDk3MyAxOS4yODQzIDMuMjE3OTkgMTguOTA4QzMgMTguNDgwMiAzIDE3LjkyMDEgMyAxNi44WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/laptop - Icon documentation
 */
export function Laptop({
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
      <path d="M5 7.2C5 6.07989 5 5.51984 5.21799 5.09202C5.40973 4.71569 5.71569 4.40973 6.09202 4.21799C6.51984 4 7.07989 4 8.2 4H15.8C16.9201 4 17.4802 4 17.908 4.21799C18.2843 4.40973 18.5903 4.71569 18.782 5.09202C19 5.51984 19 6.0799 19 7.2V16H5V7.2Z" strokeWidth={strokeWidth} stroke={color}/><path d="M3 16.8C3 16.52 3 16.38 3.0545 16.273C3.10243 16.1789 3.17892 16.1024 3.273 16.0545C3.37996 16 3.51997 16 3.8 16H20.2C20.48 16 20.62 16 20.727 16.0545C20.8211 16.1024 20.8976 16.1789 20.9455 16.273C21 16.38 21 16.52 21 16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.07989 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
