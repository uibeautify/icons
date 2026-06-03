import { IconProps } from "../types";

/**
 * @component
 * @name Umbrella
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTIgMTNWMThDMTIgMTkuNjU2OSAxMy4zNDMxIDIxIDE1IDIxQzE2LjY1NjkgMjEgMTggMTkuNjU2OSAxOCAxOCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEyIDNDNi40NzcxNSAzIDIgNy40NzcxNSAyIDEzVjEzLjVDMiAxMi4xMTkzIDMuMTE5MjkgMTEgNC41IDExQzUuODgwNzEgMTEgNyAxMi4xMTkzIDcgMTMuNUM3IDEyLjExOTMgOC4xMTkyOSAxMSA5LjUgMTFDMTAuODgwNyAxMSAxMiAxMi4xMTkzIDEyIDEzLjVDMTIgMTIuMTE5MyAxMy4xMTkzIDExIDE0LjUgMTFDMTUuODgwNyAxMSAxNyAxMi4xMTkzIDE3IDEzLjVDMTcgMTIuMTE5MyAxOC4xMTkzIDExIDE5LjUgMTFDMjAuODgwNyAxMSAyMiAxMi4xMTkzIDIyIDEzLjVWMTNDMjIgNy40NzcxNSAxNy41MjI4IDMgMTIgM1oiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/umbrella - Icon documentation
 */
export function Umbrella({
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
      <path d="M12 13V18C12 19.6569 13.3431 21 15 21C16.6569 21 18 19.6569 18 18" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 3C6.47715 3 2 7.47715 2 13V13.5C2 12.1193 3.11929 11 4.5 11C5.88071 11 7 12.1193 7 13.5C7 12.1193 8.11929 11 9.5 11C10.8807 11 12 12.1193 12 13.5C12 12.1193 13.1193 11 14.5 11C15.8807 11 17 12.1193 17 13.5C17 12.1193 18.1193 11 19.5 11C20.8807 11 22 12.1193 22 13.5V13C22 7.47715 17.5228 3 12 3Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
