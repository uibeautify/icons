import { IconProps } from "../types";

/**
 * @component
 * @name Command
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMjEgNkMyMSA3LjY1Njg1IDE5LjY1NjkgOSAxOCA5SDZDNC4zNDMxNSA5IDMgNy42NTY4NSAzIDZDMyA0LjM0MzE1IDQuMzQzMTUgMyA2IDNDNy42NTY4NSAzIDkgNC4zNDMxNSA5IDZWMThDOSAxOS42NTY5IDcuNjU2ODUgMjEgNiAyMUM0LjM0MzE1IDIxIDMgMTkuNjU2OSAzIDE4QzMgMTYuMzQzMSA0LjM0MzE1IDE1IDYgMTVIMThDMTkuNjU2OSAxNSAyMSAxNi4zNDMxIDIxIDE4QzIxIDE5LjY1NjkgMTkuNjU2OSAyMSAxOCAyMUMxNi4zNDMxIDIxIDE1IDE5LjY1NjkgMTUgMThWNkMxNSA0LjM0MzE1IDE2LjM0MzEgMyAxOCAzQzE5LjY1NjkgMyAyMSA0LjM0MzE1IDIxIDZaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/command - Icon documentation
 */
export function Command({
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
      <path d="M21 6C21 7.65685 19.6569 9 18 9H6C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6V18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15H18C19.6569 15 21 16.3431 21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18V6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
