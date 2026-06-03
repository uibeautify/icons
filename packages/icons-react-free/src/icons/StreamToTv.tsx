import { IconProps } from "../types";

/**
 * @component
 * @name StreamToTv
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyA2QzMgNS40NDc3MiAzLjQ0NzcyIDUgNCA1SDE2LjJDMTcuODgwMiA1IDE4LjcyMDIgNSAxOS4zNjIgNS4zMjY5OEMxOS45MjY1IDUuNjE0NiAyMC4zODU0IDYuMDczNTQgMjAuNjczIDYuNjM4MDNDMjEgNy4yNzk3NiAyMSA4LjExOTg0IDIxIDkuOFYxNkMyMSAxNi45MyAyMSAxNy4zOTUgMjAuODk3OCAxNy43NzY1QzIwLjYyMDQgMTguODExNyAxOS44MTE3IDE5LjYyMDQgMTguNzc2NSAxOS44OTc4QzE4LjM5NSAyMCAxNy45MyAyMCAxNyAyMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTUgMTlDNSAxOS41NTIzIDQuNTUyMjggMjAgNCAyMEMzLjQ0NzcyIDIwIDMgMTkuNTUyMyAzIDE5QzMgMTguNDQ3NyAzLjQ0NzcyIDE4IDQgMThDNC41NTIyOCAxOCA1IDE4LjQ0NzcgNSAxOVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOC44OTk5OCAyMEM4Ljk2NTU3IDE5LjY3NjkgOSAxOS4zNDI1IDkgMTlDOSAxNi4yMzg2IDYuNzYxNDIgMTQgNCAxNEMzLjY1NzUzIDE0IDMuMzIzMTEgMTQuMDM0NCAzIDE0LjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMi45NDUxIDIwQzEyLjk4MTQgMTkuNjcxNyAxMyAxOS4zMzggMTMgMTlDMTMgMTQuMDI5NCA4Ljk3MDU2IDEwIDQgMTBDMy42NjE5OSAxMCAzLjMyODMzIDEwLjAxODYgMyAxMC4wNTQ5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/stream-to-tv - Icon documentation
 */
export function StreamToTv({
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
      <path d="M3 6C3 5.44772 3.44772 5 4 5H16.2C17.8802 5 18.7202 5 19.362 5.32698C19.9265 5.6146 20.3854 6.07354 20.673 6.63803C21 7.27976 21 8.11984 21 9.8V16C21 16.93 21 17.395 20.8978 17.7765C20.6204 18.8117 19.8117 19.6204 18.7765 19.8978C18.395 20 17.93 20 17 20" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M5 19C5 19.5523 4.55228 20 4 20C3.44772 20 3 19.5523 3 19C3 18.4477 3.44772 18 4 18C4.55228 18 5 18.4477 5 19Z" strokeWidth={strokeWidth} stroke={color}/><path d="M8.89998 20C8.96557 19.6769 9 19.3425 9 19C9 16.2386 6.76142 14 4 14C3.65753 14 3.32311 14.0344 3 14.1" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12.9451 20C12.9814 19.6717 13 19.338 13 19C13 14.0294 8.97056 10 4 10C3.66199 10 3.32833 10.0186 3 10.0549" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
