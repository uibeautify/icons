import { IconProps } from "../types";

/**
 * @component
 * @name CheckmarkTwoSquares
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTcgN0MxOS4yMDkxIDcgMjEgOC43OTA4NiAyMSAxMVYxNC42QzIxIDE2Ljg0MDIgMjEgMTcuOTYwMyAyMC41NjQgMTguODE2QzIwLjE4MDUgMTkuNTY4NiAxOS41Njg2IDIwLjE4MDUgMTguODE2IDIwLjU2NEMxNy45NjAzIDIxIDE2Ljg0MDIgMjEgMTQuNiAyMUgxMUM4Ljc5MDg2IDIxIDcgMTkuMjA5MSA3IDE3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIzIiB5PSIzIiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHJ4PSI0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTcgMTBMOSAxMkwxMyA4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/checkmark-two-squares - Icon documentation
 */
export function CheckmarkTwoSquares({
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
      <path d="M17 7C19.2091 7 21 8.79086 21 11V14.6C21 16.8402 21 17.9603 20.564 18.816C20.1805 19.5686 19.5686 20.1805 18.816 20.564C17.9603 21 16.8402 21 14.6 21H11C8.79086 21 7 19.2091 7 17" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><rect x="3" y="3" width="14" height="14" rx="4" strokeWidth={strokeWidth} stroke={color}/><path d="M7 10L9 12L13 8" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
