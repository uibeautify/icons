import { IconProps } from "../types";

/**
 * @component
 * @name Attachement01
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTAgOFYxNUMxMCAxNi4xMDQ2IDEwLjg5NTQgMTcgMTIgMTdDMTMuMTA0NiAxNyAxNCAxNi4xMDQ2IDE0IDE1VjhWN0MxNCA0Ljc5MDg2IDEyLjIwOTEgMyAxMCAzQzcuNzkwODYgMyA2IDQuNzkwODYgNiA3VjE1QzYgMTguMzEzNyA4LjY4NjI5IDIxIDEyIDIxQzE1LjMxMzcgMjEgMTggMTguMzEzNyAxOCAxNVY4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/attachement-01 - Icon documentation
 */
export function Attachement01({
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
      <path d="M10 8V15C10 16.1046 10.8954 17 12 17C13.1046 17 14 16.1046 14 15V8V7C14 4.79086 12.2091 3 10 3C7.79086 3 6 4.79086 6 7V15C6 18.3137 8.68629 21 12 21C15.3137 21 18 18.3137 18 15V8" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
