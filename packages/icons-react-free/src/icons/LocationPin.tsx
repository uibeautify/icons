import { IconProps } from "../types";

/**
 * @component
 * @name LocationPin
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTkgMTAuMkMxOSAxMy4xODY2IDE1LjA1MTIgMTcuNzc5NCAxMy4wODUzIDE5Ljg4MDhDMTIuNzM0NCAyMC4yNTU4IDEyLjU1OSAyMC40NDMzIDEyLjMyMTcgMjAuNTIzOUMxMi4xMjUgMjAuNTkwNyAxMS44NzUgMjAuNTkwNyAxMS42NzgzIDIwLjUyMzlDMTEuNDQxIDIwLjQ0MzMgMTEuMjY1NiAyMC4yNTU4IDEwLjkxNDcgMTkuODgwOEM4Ljk0ODg0IDE3Ljc3OTQgNSAxMy4xODY2IDUgMTAuMkM1IDYuMjIzNTUgOC4xMzQwMSAzIDEyIDNDMTUuODY2IDMgMTkgNi4yMjM1NSAxOSAxMC4yWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/location-pin - Icon documentation
 */
export function LocationPin({
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
      <path d="M19 10.2C19 13.1866 15.0512 17.7794 13.0853 19.8808C12.7344 20.2558 12.559 20.4433 12.3217 20.5239C12.125 20.5907 11.875 20.5907 11.6783 20.5239C11.441 20.4433 11.2656 20.2558 10.9147 19.8808C8.94884 17.7794 5 13.1866 5 10.2C5 6.22355 8.13401 3 12 3C15.866 3 19 6.22355 19 10.2Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><circle cx="12" cy="10" r="2" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
