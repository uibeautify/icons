import { IconProps } from "../types";

/**
 * @component
 * @name BrushWide
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMjAgMTNWNUMyMCAzLjg5NTQzIDE5LjEwNDYgMyAxOCAzSDZDNC44OTU0MyAzIDQgMy44OTU0MyA0IDVWMTNDNCAxNC4xMDQ2IDQuODk1NDMgMTUgNiAxNUg3Ljk3MjQxQzkuMDMzOCAxNSA5Ljg0MTE2IDE1Ljk1MzEgOS42NjY2NyAxN0w5LjQ5MzIgMTguMDQwOEM5LjIzNTAyIDE5LjU4OTkgMTAuNDI5NiAyMSAxMiAyMUMxMy41NzA0IDIxIDE0Ljc2NSAxOS41ODk5IDE0LjUwNjggMTguMDQwOEwxNC4zMzMzIDE3QzE0LjE1ODggMTUuOTUzMSAxNC45NjYyIDE1IDE2LjAyNzYgMTVIMThDMTkuMTA0NiAxNSAyMCAxNC4xMDQ2IDIwIDEzWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik00IDExSDIwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOSAzVjYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/brush-wide - Icon documentation
 */
export function BrushWide({
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
      <path d="M20 13V5C20 3.89543 19.1046 3 18 3H6C4.89543 3 4 3.89543 4 5V13C4 14.1046 4.89543 15 6 15H7.97241C9.0338 15 9.84116 15.9531 9.66667 17L9.4932 18.0408C9.23502 19.5899 10.4296 21 12 21C13.5704 21 14.765 19.5899 14.5068 18.0408L14.3333 17C14.1588 15.9531 14.9662 15 16.0276 15H18C19.1046 15 20 14.1046 20 13Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M4 11H20" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M9 3V6" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
