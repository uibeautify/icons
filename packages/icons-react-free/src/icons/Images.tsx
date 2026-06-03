import { IconProps } from "../types";

/**
 * @component
 * @name Images
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTYuNzExIDhMMTUuNzI2MiA0LjMyNDZDMTUuMjk3NCAyLjcyNDIxIDEzLjY1MjQgMS43NzQ0NiAxMi4wNTIgMi4yMDMyOEw0LjMyNDU3IDQuMjczODRDMi43MjQxNyA0LjcwMjY2IDEuNzc0NDIgNi4zNDc2NyAyLjIwMzI1IDcuOTQ4MDdMNC4yNzM4IDE1LjY3NTVDNC43MDI2MiAxNy4yNzU5IDYuMzQ3NjMgMTguMjI1NiA3Ljk0ODAzIDE3Ljc5NjhMOCAxNy43ODI5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTIxLjg4ODggMTkuODEyQzIxLjUzNDcgMjEuMDc0MyAyMC4zNzU1IDIyIDE5IDIySDExQzEwLjEwMjMgMjIgOS4yOTY3NSAyMS42MDU3IDguNzQ2OTcgMjAuOTgwOUM4LjI4MiAyMC40NTI1IDggMTkuNzU5MiA4IDE5VjExQzggOS4zNDMxNSA5LjM0MzE1IDggMTEgOEgxOUMyMC42NTY5IDggMjIgOS4zNDMxNSAyMiAxMVYxOUMyMiAxOS4yODE0IDIxLjk2MTMgMTkuNTUzNyAyMS44ODg4IDE5LjgxMlpNOC43NDY5NyAyMC45ODA5TDE4LjE0NjggMTUuNDk3N0MxOC42MTk3IDE1LjIyMTggMTkuMjI2NSAxNS4zNzc1IDE5LjUwODIgMTUuODQ3TDIxLjg4ODggMTkuODEyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTQgMTNDMTQgMTMuNTUyMyAxMy41NTIzIDE0IDEzIDE0QzEyLjQ0NzcgMTQgMTIgMTMuNTUyMyAxMiAxM0MxMiAxMi40NDc3IDEyLjQ0NzcgMTIgMTMgMTJDMTMuNTUyMyAxMiAxNCAxMi40NDc3IDE0IDEzWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/images - Icon documentation
 */
export function Images({
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
      <path d="M16.711 8L15.7262 4.3246C15.2974 2.72421 13.6524 1.77446 12.052 2.20328L4.32457 4.27384C2.72417 4.70266 1.77442 6.34767 2.20325 7.94807L4.2738 15.6755C4.70262 17.2759 6.34763 18.2256 7.94803 17.7968L8 17.7829" strokeWidth={strokeWidth} stroke={color}/><path d="M21.8888 19.812C21.5347 21.0743 20.3755 22 19 22H11C10.1023 22 9.29675 21.6057 8.74697 20.9809C8.282 20.4525 8 19.7592 8 19V11C8 9.34315 9.34315 8 11 8H19C20.6569 8 22 9.34315 22 11V19C22 19.2814 21.9613 19.5537 21.8888 19.812ZM8.74697 20.9809L18.1468 15.4977C18.6197 15.2218 19.2265 15.3775 19.5082 15.847L21.8888 19.812" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M14 13C14 13.5523 13.5523 14 13 14C12.4477 14 12 13.5523 12 13C12 12.4477 12.4477 12 13 12C13.5523 12 14 12.4477 14 13Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
