import { IconProps } from "../types";

/**
 * @component
 * @name ChartPie
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTEuNSA2LjA2NjA5QzExLjE3MjkgNi4wMjI1IDEwLjgzOTEgNiAxMC41IDZDNi4zNTc4NiA2IDMgOS4zNTc4NiAzIDEzLjVDMyAxNy42NDIxIDYuMzU3ODYgMjEgMTAuNSAyMUMxNC42NDIxIDIxIDE4IDE3LjY0MjEgMTggMTMuNUMxOCAxMy4xNjA5IDE3Ljk3NzUgMTIuODI3MSAxNy45MzM5IDEyLjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0yMSAxMkMyMSA3LjAyOTQ0IDE2Ljk3MDYgMyAxMiAzVjEySDIxWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/chart-pie - Icon documentation
 */
export function ChartPie({
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
      <path d="M11.5 6.06609C11.1729 6.0225 10.8391 6 10.5 6C6.35786 6 3 9.35786 3 13.5C3 17.6421 6.35786 21 10.5 21C14.6421 21 18 17.6421 18 13.5C18 13.1609 17.9775 12.8271 17.9339 12.5" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M21 12C21 7.02944 16.9706 3 12 3V12H21Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
