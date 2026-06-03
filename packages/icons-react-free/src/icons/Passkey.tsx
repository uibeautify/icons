import { IconProps } from "../types";

/**
 * @component
 * @name Passkey
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjciIHI9IjQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTEgMTVDMTAuMjY5NCAxNSA5LjU1MDMxIDE1LjAyMTggOC44NDU5MiAxNS4wNjRDMS4xMDMwMiAxNS41Mjc2IDMuMjQxOSAyMSAxMSAyMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTIxIDE0QzIxIDEyLjM0MzEgMTkuNjU2OSAxMSAxOCAxMUMxNi4zNDMxIDExIDE1IDEyLjM0MzEgMTUgMTRDMTUgMTQuOTgxNSAxNS40NzEzIDE1Ljg1MjkgMTYuMiAxNi40MDAyVjE4TDE1LjYgMTguOUwxOCAyMUwxOS44IDE5LjhMMTkuODAwMyAxNi40QzIwLjUyODggMTUuODUyNyAyMSAxNC45ODE0IDIxIDE0WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE4IDE0SDE4LjAwMDEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/passkey - Icon documentation
 */
export function Passkey({
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
      <circle cx="11" cy="7" r="4" strokeWidth={strokeWidth} stroke={color}/><path d="M11 15C10.2694 15 9.55031 15.0218 8.84592 15.064C1.10302 15.5276 3.2419 21 11 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M21 14C21 12.3431 19.6569 11 18 11C16.3431 11 15 12.3431 15 14C15 14.9815 15.4713 15.8529 16.2 16.4002V18L15.6 18.9L18 21L19.8 19.8L19.8003 16.4C20.5288 15.8527 21 14.9814 21 14Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M18 14H18.0001" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
