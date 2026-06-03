import { IconProps } from "../types";

/**
 * @component
 * @name Figma
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTIgMkgxNS41QzE3LjQzMyAyIDE5IDMuNTY3IDE5IDUuNUMxOSA3LjQzMyAxNy40MzMgOSAxNS41IDlIMTJWMloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTIgMkg4LjVDNi41NjcgMiA1IDMuNTY3IDUgNS41QzUgNy40MzMgNi41NjcgOSA4LjUgOUgxMlYyWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMiA5SDguNUM2LjU2NyA5IDUgMTAuNTY3IDUgMTIuNUM1IDE0LjQzMyA2LjU2NyAxNiA4LjUgMTZIMTJWOVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTIgMTZIOC41QzYuNTY3IDE2IDUgMTcuNTY3IDUgMTkuNUM1IDIxLjQzMyA2LjU2NyAyMyA4LjUgMjNDMTAuNDMzIDIzIDEyIDIxLjQzMyAxMiAxOS41VjE2WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxjaXJjbGUgY3g9IjE1LjUiIGN5PSIxMi41IiByPSIzLjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/figma - Icon documentation
 */
export function Figma({
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
      <path d="M12 2H15.5C17.433 2 19 3.567 19 5.5C19 7.433 17.433 9 15.5 9H12V2Z" strokeWidth={strokeWidth} stroke={color}/><path d="M12 2H8.5C6.567 2 5 3.567 5 5.5C5 7.433 6.567 9 8.5 9H12V2Z" strokeWidth={strokeWidth} stroke={color}/><path d="M12 9H8.5C6.567 9 5 10.567 5 12.5C5 14.433 6.567 16 8.5 16H12V9Z" strokeWidth={strokeWidth} stroke={color}/><path d="M12 16H8.5C6.567 16 5 17.567 5 19.5C5 21.433 6.567 23 8.5 23C10.433 23 12 21.433 12 19.5V16Z" strokeWidth={strokeWidth} stroke={color}/><circle cx="15.5" cy="12.5" r="3.5" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
