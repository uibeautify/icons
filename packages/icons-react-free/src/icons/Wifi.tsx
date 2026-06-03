import { IconProps } from "../types";

/**
 * @component
 * @name Wifi
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTMgMjBDMTMgMjAuNTUyMyAxMi41NTIzIDIxIDEyIDIxQzExLjQ0NzcgMjEgMTEgMjAuNTUyMyAxMSAyMEMxMSAxOS40NDc3IDExLjQ0NzcgMTkgMTIgMTlDMTIuNTUyMyAxOSAxMyAxOS40NDc3IDEzIDIwWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik04LjUgMTQuNzUzM0M5LjU2OCAxNC4yNjkzIDEwLjc1MjggMTQgMTIgMTRDMTMuMjQ3MiAxNCAxNC40MzIgMTQuMjY5MyAxNS41IDE0Ljc1MzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik01LjUgMTAuNzAxOUM3LjQxMTA1IDkuNjE5NjYgOS42MzEzNyA5IDEyIDlDMTQuMzY4NiA5IDE2LjU4OSA5LjYxOTY2IDE4LjUgMTAuNzAxOSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTMgNi4zNDI3OUM1LjYyNjY5IDQuODU0MzIgOC42OTE3IDQgMTEuOTY1MSA0QzE1LjI2NzUgNCAxOC4zNTc5IDQuODY5NTUgMjEgNi4zODI1NyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/wifi - Icon documentation
 */
export function Wifi({
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
      <path d="M13 20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20C11 19.4477 11.4477 19 12 19C12.5523 19 13 19.4477 13 20Z" strokeWidth={strokeWidth} stroke={color}/><path d="M8.5 14.7533C9.568 14.2693 10.7528 14 12 14C13.2472 14 14.432 14.2693 15.5 14.7533" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M5.5 10.7019C7.41105 9.61966 9.63137 9 12 9C14.3686 9 16.589 9.61966 18.5 10.7019" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 6.34279C5.62669 4.85432 8.6917 4 11.9651 4C15.2675 4 18.3579 4.86955 21 6.38257" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
