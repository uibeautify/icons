import { IconProps } from "../types";

/**
 * @component
 * @name User01
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjciIHI9IjQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTQuMTU0MSAxNS4wNjRDMTMuNDQ5NyAxNS4wMjE4IDEyLjczMDYgMTUgMTIgMTVDMTEuMjY5NCAxNSAxMC41NTAzIDE1LjAyMTggOS44NDU5MiAxNS4wNjRDMi4xMDMwMiAxNS41Mjc2IDQuMjQxOSAyMSAxMiAyMUMxOS43NTgxIDIxIDIxLjg5NyAxNS41Mjc2IDE0LjE1NDEgMTUuMDY0WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/user-01 - Icon documentation
 */
export function User01({
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
      <circle cx="12" cy="7" r="4" strokeWidth={strokeWidth} stroke={color}/><path d="M14.1541 15.064C13.4497 15.0218 12.7306 15 12 15C11.2694 15 10.5503 15.0218 9.84592 15.064C2.10302 15.5276 4.2419 21 12 21C19.7581 21 21.897 15.5276 14.1541 15.064Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
