import { IconProps } from "../types";

/**
 * @component
 * @name Video
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cmVjdCB4PSIzIiB5PSIzIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHJ4PSIzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEwIDE0LjUwNTJWOS40OTQ4MUMxMCA4Ljg1NTg2IDEwLjcxMjEgOC40NzQ3NCAxMS4yNDM4IDguODI5MTdMMTUuMDAxNSAxMS4zMzQ0QzE1LjQ3NjUgMTEuNjUxIDE1LjQ3NjUgMTIuMzQ5IDE1LjAwMTUgMTIuNjY1NkwxMS4yNDM4IDE1LjE3MDhDMTAuNzEyMSAxNS41MjUzIDEwIDE1LjE0NDEgMTAgMTQuNTA1MloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/video - Icon documentation
 */
export function Video({
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
      <rect x="3" y="3" width="18" height="18" rx="3" strokeWidth={strokeWidth} stroke={color}/><path d="M10 14.5052V9.49481C10 8.85586 10.7121 8.47474 11.2438 8.82917L15.0015 11.3344C15.4765 11.651 15.4765 12.349 15.0015 12.6656L11.2438 15.1708C10.7121 15.5253 10 15.1441 10 14.5052Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
