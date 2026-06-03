import { IconProps } from "../types";

/**
 * @component
 * @name TextFormatStrikethrough
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNOS41IDEyQzcuMDE0NzIgMTIgNSAxMC4yMDkxIDUgOEM1IDUuNzkwODYgNy4wMTQ3MiA0IDkuNSA0SDE2QzE3LjY1NjkgNCAxOSA1LjE5MzkxIDE5IDYuNjY2NjdNNSAxNy4zMzMzQzUgMTguODA2MSA2LjM0MzE1IDIwIDggMjBIMTQuNUMxNi45ODUzIDIwIDE5IDE4LjIwOTEgMTkgMTZDMTkgMTUuODQ5OCAxOC45OTA3IDE1LjcwMTUgMTguOTcyNSAxNS41NTU2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMyAxMkgyMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/text-format-strikethrough - Icon documentation
 */
export function TextFormatStrikethrough({
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
      <path d="M9.5 12C7.01472 12 5 10.2091 5 8C5 5.79086 7.01472 4 9.5 4H16C17.6569 4 19 5.19391 19 6.66667M5 17.3333C5 18.8061 6.34315 20 8 20H14.5C16.9853 20 19 18.2091 19 16C19 15.8498 18.9907 15.7015 18.9725 15.5556" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M3 12H21" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
