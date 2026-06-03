import { IconProps } from "../types";

/**
 * @component
 * @name WifiOff
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTMgMjBDMTMgMjAuNTUyMyAxMi41NTIzIDIxIDEyIDIxQzExLjQ0NzcgMjEgMTEgMjAuNTUyMyAxMSAyMEMxMSAxOS40NDc3IDExLjQ0NzcgMTkgMTIgMTlDMTIuNTUyMyAxOSAxMyAxOS40NDc3IDEzIDIwWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik04LjUgMTQuNzUzM0M5LjU2OCAxNC4yNjkzIDEwLjc1MjggMTQgMTIgMTRDMTIuNzkyOCAxNCAxMy41NjA0IDE0LjEwODggMTQuMjg4NyAxNC4zMTI0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNS41IDEwLjcwMTlDNi42NTY1OSAxMC4wNDY5IDcuOTI2NDUgOS41NjEzNCA5LjI3MzkyIDkuMjgwMDRNMTguNSAxMC43MDE5QzE3LjE3MTQgOS45NDk0OCAxNS42OTMzIDkuNDIwNjcgMTQuMTE5OSA5LjE2ODIxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMyA2LjM0Mjg2QzMuNjkxODMgNS45NTA4MiA0LjQxNDA2IDUuNjAyNzcgNS4xNjI1IDUuMzAyNzRNMjEgNi4zODI2NEMxNy42ODU3IDQuNDg0NzIgMTMuNzg4OCAzLjcwMjUyIDEwIDQuMTAzODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0zIDNMMTkgMTkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/wifi-off - Icon documentation
 */
export function WifiOff({
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
      <path d="M13 20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20C11 19.4477 11.4477 19 12 19C12.5523 19 13 19.4477 13 20Z" strokeWidth={strokeWidth} stroke={color}/><path d="M8.5 14.7533C9.568 14.2693 10.7528 14 12 14C12.7928 14 13.5604 14.1088 14.2887 14.3124" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M5.5 10.7019C6.65659 10.0469 7.92645 9.56134 9.27392 9.28004M18.5 10.7019C17.1714 9.94948 15.6933 9.42067 14.1199 9.16821" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 6.34286C3.69183 5.95082 4.41406 5.60277 5.1625 5.30274M21 6.38264C17.6857 4.48472 13.7888 3.70252 10 4.10388" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 3L19 19" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
