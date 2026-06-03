import { IconProps } from "../types";

/**
 * @component
 * @name Anchor
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNS45NzA1OCAxM0gzLjUzODI5QzMuMjE2NjIgMTMgMi45NTcwNyAxMy4zOTUyIDMuMDA1OTQgMTMuNzc2M0M0LjI0MDk5IDIzLjQwNzkgMTkuNzU5IDIzLjQwNzkgMjAuOTk0MSAxMy43NzYzQzIxLjA0MjkgMTMuMzk1MiAyMC43ODM0IDEzIDIwLjQ2MTcgMTNIMTguMDI5NCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEyIDdMMTIgMjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iNSIgcj0iMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMCAxMEgxNCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/anchor - Icon documentation
 */
export function Anchor({
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
      <path d="M5.97058 13H3.53829C3.21662 13 2.95707 13.3952 3.00594 13.7763C4.24099 23.4079 19.759 23.4079 20.9941 13.7763C21.0429 13.3952 20.7834 13 20.4617 13H18.0294" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M12 7L12 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><circle cx="12" cy="5" r="2" strokeWidth={strokeWidth} stroke={color}/><path d="M10 10H14" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
