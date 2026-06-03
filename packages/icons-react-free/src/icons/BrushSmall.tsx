import { IconProps } from "../types";

/**
 * @component
 * @name BrushSmall
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTIuNDExNyAxNS4zODU0QzExLjM1OTIgMTYuNTg3MiA5LjUwODgxIDE2LjY0ODggOC4zNzg2NiAxNS41MTk2QzcuMjQ4NTMgMTQuMzkwMyA3LjMxMDEzIDEyLjU0MTUgOC41MTI5NCAxMS40ODk5TDE2LjIyMjYgNC43NDkzMUMxNy4wMTIzIDQuMDU4OTMgMTcuOTY5MiAzLjU4NzQzIDE4Ljk5ODEgMy4zODE4MkwyMC45MDgzIDMuMDAwMUwyMC41MjYyIDQuOTA4NzJDMjAuMzIwNCA1LjkzNjc0IDE5Ljg0ODYgNi44OTI5MSAxOS4xNTc3IDcuNjgxODlMMTIuNDExNyAxNS4zODU0WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik04LjE0NDggMTkuNTYwN0M3LjA1NDQ2IDIwLjY1MDIgMy4wMDAzNiAyMC45OTU5IDMuMDAwMzYgMjAuOTk1OUMzLjAwMDM2IDIwLjk5NTkgMy4zNDYzNCAxNi45NDUxIDQuNDM2NjggMTUuODU1NkM1LjUyNzAxIDE0Ljc2NjIgNy4yNDA5OSAxNC43MTI0IDguMjY0OTYgMTUuNzM1NkM5LjI4ODkzIDE2Ljc1ODcgOS4yMzUxMyAxOC40NzEzIDguMTQ0OCAxOS41NjA3WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/brush-small - Icon documentation
 */
export function BrushSmall({
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
      <path d="M12.4117 15.3854C11.3592 16.5872 9.50881 16.6488 8.37866 15.5196C7.24853 14.3903 7.31013 12.5415 8.51294 11.4899L16.2226 4.74931C17.0123 4.05893 17.9692 3.58743 18.9981 3.38182L20.9083 3.0001L20.5262 4.90872C20.3204 5.93674 19.8486 6.89291 19.1577 7.68189L12.4117 15.3854Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M8.1448 19.5607C7.05446 20.6502 3.00036 20.9959 3.00036 20.9959C3.00036 20.9959 3.34634 16.9451 4.43668 15.8556C5.52701 14.7662 7.24099 14.7124 8.26496 15.7356C9.28893 16.7587 9.23513 18.4713 8.1448 19.5607Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
