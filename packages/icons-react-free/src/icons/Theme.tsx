import { IconProps } from "../types";

/**
 * @component
 * @name Theme
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTQuODk5NiA1LjAwMDI0SDE5LjAwMDJWOS4xMDA4M0wyMS44OTk2IDEyLjAwMDJMMTkuMDAwMiAxNC44OTk3VjE5LjAwMDJIMTQuODk5NkwxMi4wMDAyIDIxLjg5OTdMOS4xMDA3NCAxOS4wMDAySDUuMDAwMTVWMTQuODk5N0wyLjEwMDc0IDEyLjAwMDJMNS4wMDAxNSA5LjEwMDgzVjUuMDAwMjRIOS4xMDA3NEwxMi4wMDAyIDIuMTAwODNMMTQuODk5NiA1LjAwMDI0WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTkgMTVWMTNNMTUgMTVWMTNNMTUgMTNWMTEuNDcyMUMxNSAxMS4xNjE2IDE0LjkyNzcgMTAuODU1NCAxNC43ODg5IDEwLjU3NzdMMTQuNTUyOCAxMC4xMDU2QzE0LjIxNCA5LjQyOCAxMy41MjE1IDkgMTIuNzYzOSA5SDExLjIzNjFDMTAuNDc4NSA5IDkuNzg2IDkuNDI4IDkuNDQ3MjEgMTAuMTA1Nkw5LjIxMTE1IDEwLjU3NzdDOS4wNzIyOSAxMC44NTU0IDkgMTEuMTYxNiA5IDExLjQ3MjFWMTNNMTUgMTNIOSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/theme - Icon documentation
 */
export function Theme({
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
      <path d="M14.8996 5.00024H19.0002V9.10083L21.8996 12.0002L19.0002 14.8997V19.0002H14.8996L12.0002 21.8997L9.10074 19.0002H5.00015V14.8997L2.10074 12.0002L5.00015 9.10083V5.00024H9.10074L12.0002 2.10083L14.8996 5.00024Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M9 15V13M15 15V13M15 13V11.4721C15 11.1616 14.9277 10.8554 14.7889 10.5777L14.5528 10.1056C14.214 9.428 13.5215 9 12.7639 9H11.2361C10.4785 9 9.786 9.428 9.44721 10.1056L9.21115 10.5777C9.07229 10.8554 9 11.1616 9 11.4721V13M15 13H9" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
