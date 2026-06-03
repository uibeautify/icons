import { IconProps } from "../types";

/**
 * @component
 * @name LocationPins
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwLjAwMDEiIHI9IjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTcgMTAuMkMxNyAxMy4xODY2IDEzLjA1MTIgMTcuNzc5NCAxMS4wODUzIDE5Ljg4MDhDMTAuNzM0NCAyMC4yNTU4IDEwLjU1OSAyMC40NDMzIDEwLjMyMTcgMjAuNTIzOUMxMC4xMjUgMjAuNTkwNyA5Ljg3NSAyMC41OTA3IDkuNjc4MzQgMjAuNTIzOUM5LjQ0MDk5IDIwLjQ0MzMgOS4yNjU1NyAyMC4yNTU4IDguOTE0NzQgMTkuODgwOEM2Ljk0ODg0IDE3Ljc3OTQgMyAxMy4xODY2IDMgMTAuMkMzIDYuMjIzNTUgNi4xMzQwMSAzIDEwIDNDMTMuODY2IDMgMTcgNi4yMjM1NSAxNyAxMC4yWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNSAyMC44NDAxQzE1IDIwLjg0MDEgMjEgMTMuODc3MiAyMSA5LjgxOTYyQzIxIDcuMzU0NCAyMC4wMDg0IDUuMTcyNzYgMTguNDg3IDMuODQwMDkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/location-pins - Icon documentation
 */
export function LocationPins({
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
      <circle cx="10" cy="10.0001" r="2" strokeWidth={strokeWidth} stroke={color}/><path d="M17 10.2C17 13.1866 13.0512 17.7794 11.0853 19.8808C10.7344 20.2558 10.559 20.4433 10.3217 20.5239C10.125 20.5907 9.875 20.5907 9.67834 20.5239C9.44099 20.4433 9.26557 20.2558 8.91474 19.8808C6.94884 17.7794 3 13.1866 3 10.2C3 6.22355 6.13401 3 10 3C13.866 3 17 6.22355 17 10.2Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M15 20.8401C15 20.8401 21 13.8772 21 9.81962C21 7.3544 20.0084 5.17276 18.487 3.84009" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
