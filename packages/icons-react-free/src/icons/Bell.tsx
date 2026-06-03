import { IconProps } from "../types";

/**
 * @component
 * @name Bell
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTIgM0M4LjY4NjI5IDMgNiA1LjIzODU4IDYgOEM2IDkuNjIzOTMgNi4wMTU4MyAxMS4yMzc0IDUuODM5MzEgMTIuODU0OUM1LjcyMjIgMTMuOTI4MiA0IDE0Ljc1NjMgNCAxNS44MzMzQzQgMTYuNDc3NyA0LjY3MTU3IDE3IDUuNSAxN0gxOC41QzE5LjMyODQgMTcgMjAgMTYuNDc3NyAyMCAxNS44MzMzQzIwIDE0Ljc1NjMgMTguMjc3OCAxMy45MjgyIDE4LjE2MDcgMTIuODU0OUMxNy45ODQyIDExLjIzNzQgMTggOS42MjM5MyAxOCA4QzE4IDUuMjM4NTggMTUuMzEzNyAzIDEyIDNaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEwIDIxSDE0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/bell - Icon documentation
 */
export function Bell({
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
      <path d="M12 3C8.68629 3 6 5.23858 6 8C6 9.62393 6.01583 11.2374 5.83931 12.8549C5.7222 13.9282 4 14.7563 4 15.8333C4 16.4777 4.67157 17 5.5 17H18.5C19.3284 17 20 16.4777 20 15.8333C20 14.7563 18.2778 13.9282 18.1607 12.8549C17.9842 11.2374 18 9.62393 18 8C18 5.23858 15.3137 3 12 3Z" strokeWidth={strokeWidth} stroke={color}/><path d="M10 21H14" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
