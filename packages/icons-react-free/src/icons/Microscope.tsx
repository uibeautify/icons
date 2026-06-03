import { IconProps } from "../types";

/**
 * @component
 * @name Microscope
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTEgN0MxNS40MTgzIDcgMTkgMTAuNTgxNyAxOSAxNVYxN00xOSAyMUgzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTMgMThDMTMgMTcuNDQ3NyAxMy40NDc3IDE3IDE0IDE3SDIwQzIwLjU1MjMgMTcgMjEgMTcuNDQ3NyAyMSAxOFYyMEMyMSAyMC41NTIzIDIwLjU1MjMgMjEgMjAgMjFIMTRDMTMuNDQ3NyAyMSAxMyAyMC41NTIzIDEzIDIwVjE4WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik05IDlWMTVDOSAxNS41NTIzIDguNTUyMjggMTYgOCAxNkg1QzQuNDQ3NzIgMTYgNCAxNS41NTIzIDQgMTVWNEM0IDMuNDQ3NzIgNC40NDc3MiAzIDUgM0g4QzguNTUyMjggMyA5IDMuNDQ3NzIgOSA0VjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOSAxMkg0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PGNpcmNsZSBjeD0iOSIgY3k9IjciIHI9IjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/microscope - Icon documentation
 */
export function Microscope({
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
      <path d="M11 7C15.4183 7 19 10.5817 19 15V17M19 21H3" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18V20C21 20.5523 20.5523 21 20 21H14C13.4477 21 13 20.5523 13 20V18Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M9 9V15C9 15.5523 8.55228 16 8 16H5C4.44772 16 4 15.5523 4 15V4C4 3.44772 4.44772 3 5 3H8C8.55228 3 9 3.44772 9 4V5" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M9 12H4" strokeWidth={strokeWidth} stroke={color}/><circle cx="9" cy="7" r="2" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
