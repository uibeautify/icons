import { IconProps } from "../types";

/**
 * @component
 * @name Videos
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTYuNzExIDhMMTUuNzI2MiA0LjMyNDZDMTUuMjk3NCAyLjcyNDIxIDEzLjY1MjQgMS43NzQ0NiAxMi4wNTIgMi4yMDMyOEw0LjMyNDU3IDQuMjczODRDMi43MjQxNyA0LjcwMjY2IDEuNzc0NDIgNi4zNDc2NyAyLjIwMzI1IDcuOTQ4MDdMNC4yNzM4IDE1LjY3NTVDNC43MDI2MiAxNy4yNzU5IDYuMzQ3NjMgMTguMjI1NiA3Ljk0ODAzIDE3Ljc5NjhMOCAxNy43ODI5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE5IDhIMTFDOS4zNDMxNSA4IDggOS4zNDMxNSA4IDExVjE5QzggMjAuNjU2OSA5LjM0MzE1IDIyIDExIDIySDE5QzIwLjY1NjkgMjIgMjIgMjAuNjU2OSAyMiAxOVYxMUMyMiA5LjM0MzE1IDIwLjY1NjkgOCAxOSA4WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEzIDE3LjMzNTVWMTIuNjY0NUMxMyAxMS45OTM3IDEzLjc3NTkgMTEuNjIwOCAxNC4yOTk4IDEyLjAzOThMMTcuMjE5MSAxNC4zNzUzQzE3LjYxOTUgMTQuNjk1NiAxNy42MTk1IDE1LjMwNDQgMTcuMjE5MSAxNS42MjQ3TDE0LjI5OTggMTcuOTYwMkMxMy43NzU5IDE4LjM3OTIgMTMgMTguMDA2MyAxMyAxNy4zMzU1WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/videos - Icon documentation
 */
export function Videos({
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
      <path d="M16.711 8L15.7262 4.3246C15.2974 2.72421 13.6524 1.77446 12.052 2.20328L4.32457 4.27384C2.72417 4.70266 1.77442 6.34767 2.20325 7.94807L4.2738 15.6755C4.70262 17.2759 6.34763 18.2256 7.94803 17.7968L8 17.7829" strokeWidth={strokeWidth} stroke={color}/><path d="M19 8H11C9.34315 8 8 9.34315 8 11V19C8 20.6569 9.34315 22 11 22H19C20.6569 22 22 20.6569 22 19V11C22 9.34315 20.6569 8 19 8Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M13 17.3355V12.6645C13 11.9937 13.7759 11.6208 14.2998 12.0398L17.2191 14.3753C17.6195 14.6956 17.6195 15.3044 17.2191 15.6247L14.2998 17.9602C13.7759 18.3792 13 18.0063 13 17.3355Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
