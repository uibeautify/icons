import { IconProps } from "../types";

/**
 * @component
 * @name Car
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNC41MTQyOSAxMEw0IDExSDIwTDE5LjQ4NTcgMTBMMTcuNzM5NiA2LjYwNDczQzE3LjI1MyA1LjY1ODU1IDE3LjAwOTcgNS4xODU0NSAxNi42NTE0IDQuODQwMTJDMTYuMzM0NiA0LjUzNDcgMTUuOTU0NCA0LjMwMjcyIDE1LjUzNzkgNC4xNjA2NUMxNS4wNjcgNCAxNC41MzUgNCAxMy40NzEgNEgxMC41MjlDOS40NjUwMyA0IDguOTMzMDQgNCA4LjQ2MjA5IDQuMTYwNjVDOC4wNDU1OCA0LjMwMjcyIDcuNjY1NDIgNC41MzQ3IDcuMzQ4NTkgNC44NDAxMkM2Ljk5MDM0IDUuMTg1NDUgNi43NDcwMyA1LjY1ODU0IDYuMjYwNDMgNi42MDQ3M0w0LjUxNDI5IDEwWk0xOS40ODU3IDEwTDIxIDhIMjJNNC41MTQyOSAxMEwzIDhIMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTggMTdWMTlDOCAxOS41NTIzIDcuNTUyMjggMjAgNyAyMEg1QzQuNDQ3NzIgMjAgNCAxOS41NTIzIDQgMTlWMTFIMjBWMTlDMjAgMTkuNTUyMyAxOS41NTIzIDIwIDE5IDIwSDE3QzE2LjQ0NzcgMjAgMTYgMTkuNTUyMyAxNiAxOVYxN004IDE3SDE2TTggMTdIN00xNiAxN0gxNyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTcgMTRMMTAgMTQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNCAxNEwxNyAxNCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/car - Icon documentation
 */
export function Car({
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
      <path d="M4.51429 10L4 11H20L19.4857 10L17.7396 6.60473C17.253 5.65855 17.0097 5.18545 16.6514 4.84012C16.3346 4.5347 15.9544 4.30272 15.5379 4.16065C15.067 4 14.535 4 13.471 4H10.529C9.46503 4 8.93304 4 8.46209 4.16065C8.04558 4.30272 7.66542 4.5347 7.34859 4.84012C6.99034 5.18545 6.74703 5.65854 6.26043 6.60473L4.51429 10ZM19.4857 10L21 8H22M4.51429 10L3 8H2" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M8 17V19C8 19.5523 7.55228 20 7 20H5C4.44772 20 4 19.5523 4 19V11H20V19C20 19.5523 19.5523 20 19 20H17C16.4477 20 16 19.5523 16 19V17M8 17H16M8 17H7M16 17H17" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M7 14L10 14" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M14 14L17 14" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
