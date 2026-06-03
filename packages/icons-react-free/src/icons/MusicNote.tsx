import { IconProps } from "../types";

/**
 * @component
 * @name MusicNote
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTIgMTcuNUMxMiAxOS40MzMgMTAuNDMzIDIxIDguNSAyMUM2LjU2NyAyMSA1IDE5LjQzMyA1IDE3LjVDNSAxNS41NjcgNi41NjcgMTQgOC41IDE0QzEwLjQzMyAxNCAxMiAxNS41NjcgMTIgMTcuNVpNMTIgMTcuNVY4TTEyIDhWM0gxNUMxNy4yMDkxIDMgMTkgNC43OTA4NiAxOSA3VjhIMTJaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/music-note - Icon documentation
 */
export function MusicNote({
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
      <path d="M12 17.5C12 19.433 10.433 21 8.5 21C6.567 21 5 19.433 5 17.5C5 15.567 6.567 14 8.5 14C10.433 14 12 15.567 12 17.5ZM12 17.5V8M12 8V3H15C17.2091 3 19 4.79086 19 7V8H12Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
