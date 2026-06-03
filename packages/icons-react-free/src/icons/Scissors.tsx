import { IconProps } from "../types";

/**
 * @component
 * @name Scissors
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNOC41OTg2NSAxOS41QzguODUzOTEgMTkuMDU4NyA5IDE4LjU0NjQgOSAxOEM5IDE2LjM0MzEgNy42NTY4NSAxNSA2IDE1QzQuMzQzMTUgMTUgMyAxNi4zNDMxIDMgMThDMyAxOS42NTY5IDQuMzQzMTUgMjEgNiAyMUM3LjExMDQyIDIxIDguMDc5OTQgMjAuMzk2NyA4LjU5ODY1IDE5LjVaTTguNTk4NjUgMTkuNUwxOCAzTTE1LjQwMTMgMTkuNUMxNS4xNDYxIDE5LjA1ODcgMTUgMTguNTQ2NCAxNSAxOEMxNSAxNi4zNDMxIDE2LjM0MzEgMTUgMTggMTVDMTkuNjU2OSAxNSAyMSAxNi4zNDMxIDIxIDE4QzIxIDE5LjY1NjkgMTkuNjU2OSAyMSAxOCAyMUMxNi44ODk2IDIxIDE1LjkyMDEgMjAuMzk2NyAxNS40MDEzIDE5LjVaTTE1LjQwMTMgMTkuNUw2IDMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/scissors - Icon documentation
 */
export function Scissors({
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
      <path d="M8.59865 19.5C8.85391 19.0587 9 18.5464 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21C7.11042 21 8.07994 20.3967 8.59865 19.5ZM8.59865 19.5L18 3M15.4013 19.5C15.1461 19.0587 15 18.5464 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18C21 19.6569 19.6569 21 18 21C16.8896 21 15.9201 20.3967 15.4013 19.5ZM15.4013 19.5L6 3" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
