import { IconProps } from "../types";

/**
 * @component
 * @name DataFlow
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNyA1SDE4QzE5LjY1NjkgNSAyMSA2LjM0MzE1IDIxIDhWOUMyMSAxMC42NTY5IDE5LjY1NjkgMTIgMTggMTJIN0M1LjM0MzE1IDEyIDQgMTMuMzQzMSA0IDE1VjE2QzQgMTcuNjU2OSA1LjM0MzE1IDE5IDcgMTlIMTciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjMiIHk9IjMiIHdpZHRoPSI0IiBoZWlnaHQ9IjQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjE3IiB5PSIxNyIgd2lkdGg9IjQiIGhlaWdodD0iNCIgcng9IjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/data-flow - Icon documentation
 */
export function DataFlow({
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
      <path d="M7 5H18C19.6569 5 21 6.34315 21 8V9C21 10.6569 19.6569 12 18 12H7C5.34315 12 4 13.3431 4 15V16C4 17.6569 5.34315 19 7 19H17" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><rect x="3" y="3" width="4" height="4" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><rect x="17" y="17" width="4" height="4" rx="2" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
