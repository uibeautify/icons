import { IconProps } from "../types";

/**
 * @component
 * @name Garage02
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyA3LjRMMTEuMjk3MyAzLjM0MzU2QzExLjU1NTIgMy4yMTc0OCAxMS42ODQxIDMuMTU0NDQgMTEuODE5MSAzLjEyOTYxQzExLjkzODcgMy4xMDc2MSAxMi4wNjEzIDMuMTA3NjEgMTIuMTgwOSAzLjEyOTYxQzEyLjMxNTkgMy4xNTQ0NCAxMi40NDQ4IDMuMjE3NDggMTIuNzAyNyAzLjM0MzU2TDIxIDcuNCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE5IDE0TDIwIDEyTDIxIDEyTTE2IDE4TDE2IDIwQzE2IDIwLjU1MjMgMTYuNDQ3NyAyMSAxNyAyMUwxOCAyMUMxOC41NTIzIDIxIDE5IDIwLjU1MjMgMTkgMjBMMTkgMThMMTkgMTRNMTkgMTRMNSAxNE0xOSAxNEwxNi44NzM5IDEwLjQ1NjVDMTYuMzMxNyA5LjU1MjkgMTUuMzU1MiA5IDE0LjMwMTQgOUw5LjY5ODU3IDlDOC42NDQ3OCA5IDcuNjY4MjYgOS41NTI5IDcuMTI2MDkgMTAuNDU2NUw1IDE0TTE5IDE4TDE2IDE4TDggMThNOCAxOEw4IDIwQzggMjAuNTUyMyA3LjU1MjI4IDIxIDcgMjFMNiAyMUM1LjQ0NzcxIDIxIDUgMjAuNTUyMyA1IDIwTDUgMThNOCAxOEw1IDE4TTUgMTRMNCAxMkwzIDEyTTUgMTRMNSAxOCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/garage-02 - Icon documentation
 */
export function Garage02({
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
      <path d="M3 7.4L11.2973 3.34356C11.5552 3.21748 11.6841 3.15444 11.8191 3.12961C11.9387 3.10761 12.0613 3.10761 12.1809 3.12961C12.3159 3.15444 12.4448 3.21748 12.7027 3.34356L21 7.4" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M19 14L20 12L21 12M16 18L16 20C16 20.5523 16.4477 21 17 21L18 21C18.5523 21 19 20.5523 19 20L19 18L19 14M19 14L5 14M19 14L16.8739 10.4565C16.3317 9.5529 15.3552 9 14.3014 9L9.69857 9C8.64478 9 7.66826 9.5529 7.12609 10.4565L5 14M19 18L16 18L8 18M8 18L8 20C8 20.5523 7.55228 21 7 21L6 21C5.44771 21 5 20.5523 5 20L5 18M8 18L5 18M5 14L4 12L3 12M5 14L5 18" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
