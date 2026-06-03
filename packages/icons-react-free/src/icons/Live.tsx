import { IconProps } from "../types";

/**
 * @component
 * @name Live
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTMgMTJDMTMgMTIuNTUyMyAxMi41NTIzIDEzIDEyIDEzQzExLjQ0NzcgMTMgMTEgMTIuNTUyMyAxMSAxMkMxMSAxMS40NDc3IDExLjQ0NzcgMTEgMTIgMTFDMTIuNTUyMyAxMSAxMyAxMS40NDc3IDEzIDEyWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik04Ljk5OTUxIDhDNy43ODUzNCA4LjkxMjIzIDcgMTAuMzY0NCA3IDEyQzcgMTMuNjM1NiA3Ljc4NTM0IDE1LjA4NzggOC45OTk1MSAxNk0xNS4wMDA1IDhDMTYuMjE0NyA4LjkxMjIzIDE3IDEwLjM2NDQgMTcgMTJDMTcgMTMuNjM1NiAxNi4yMTQ3IDE1LjA4NzggMTUuMDAwNSAxNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTYuNTk5MTIgNC43OTk5OUM0LjQxMzYyIDYuNDQyIDMgOS4wNTU5MSAzIDEyQzMgMTQuOTQ0MSA0LjQxMzYyIDE3LjU1OCA2LjU5OTEyIDE5LjJNMTcuNDAwOSA0Ljc5OTk5QzE5LjU4NjQgNi40NDIgMjEgOS4wNTU5MSAyMSAxMkMyMSAxNC45NDQxIDE5LjU4NjQgMTcuNTU4IDE3LjQwMDkgMTkuMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/live - Icon documentation
 */
export function Live({
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
      <path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" strokeWidth={strokeWidth} stroke={color}/><path d="M8.99951 8C7.78534 8.91223 7 10.3644 7 12C7 13.6356 7.78534 15.0878 8.99951 16M15.0005 8C16.2147 8.91223 17 10.3644 17 12C17 13.6356 16.2147 15.0878 15.0005 16" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M6.59912 4.79999C4.41362 6.442 3 9.05591 3 12C3 14.9441 4.41362 17.558 6.59912 19.2M17.4009 4.79999C19.5864 6.442 21 9.05591 21 12C21 14.9441 19.5864 17.558 17.4009 19.2" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
