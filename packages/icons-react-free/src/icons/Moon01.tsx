import { IconProps } from "../types";

/**
 * @component
 * @name Moon01
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTAuNDI2OCAzLjE0MDc4QzkuNTI1MzcgNC41NDI3IDkgNi4yMDk2MiA5IDguMDAwMTVDOS4wMDAwNiAxMi45NzA3IDEzLjAyOTUgMTcuMDAwMiAxOCAxNy4wMDAyQzE4LjUzNjYgMTcuMDAwMiAxOS4wNjE1IDE2Ljk0OTUgMTkuNTcyMyAxNi44NTk1QzE3Ljk3MTMgMTkuMzQ5IDE1LjE3OTggMjEuMDAwMiAxMiAyMS4wMDAyQzcuMDI5NDkgMjEuMDAwMiAzLjAwMDA5IDE2Ljk3MDYgMyAxMi4wMDAyQzMgNy41NjY1IDYuMjA2NiAzLjg4NTEgMTAuNDI2OCAzLjE0MDc4WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/moon-01 - Icon documentation
 */
export function Moon01({
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
      <path d="M10.4268 3.14078C9.52537 4.5427 9 6.20962 9 8.00015C9.00006 12.9707 13.0295 17.0002 18 17.0002C18.5366 17.0002 19.0615 16.9495 19.5723 16.8595C17.9713 19.349 15.1798 21.0002 12 21.0002C7.02949 21.0002 3.00009 16.9706 3 12.0002C3 7.5665 6.2066 3.8851 10.4268 3.14078Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
