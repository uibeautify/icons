import { IconProps } from "../types";

/**
 * @component
 * @name TextFormatUnderlined
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNiA0VjEwQzYgMTMuMzEzNyA4LjY4NjI5IDE2IDEyIDE2QzE1LjMxMzcgMTYgMTggMTMuMzEzNyAxOCAxMFY0TTYgNEg4TTYgNEg0TTE4IDRIMjBNMTggNEgxNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTQgMjBIMjAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/text-format-underlined - Icon documentation
 */
export function TextFormatUnderlined({
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
      <path d="M6 4V10C6 13.3137 8.68629 16 12 16C15.3137 16 18 13.3137 18 10V4M6 4H8M6 4H4M18 4H20M18 4H16" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M4 20H20" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
