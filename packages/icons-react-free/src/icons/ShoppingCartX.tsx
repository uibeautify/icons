import { IconProps } from "../types";

/**
 * @component
 * @name ShoppingCartX
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTUgMTFMMTEgN00xMSAxMUwxNSA3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTAuNjQ0NCAyMC41SDEwLjM0NTZNMTEgMjAuNUMxMSAyMC43NzYxIDEwLjc3NjEgMjEgMTAuNSAyMUMxMC4yMjM5IDIxIDEwIDIwLjc3NjEgMTAgMjAuNUMxMCAyMC4yMjM5IDEwLjIyMzkgMjAgMTAuNSAyMEMxMC43NzYxIDIwIDExIDIwLjIyMzkgMTEgMjAuNVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNi42NDQ0IDIwLjVIMTYuMzQ1Nk0xNyAyMC41QzE3IDIwLjc3NjEgMTYuNzc2MSAyMSAxNi41IDIxQzE2LjIyMzkgMjEgMTYgMjAuNzc2MSAxNiAyMC41QzE2IDIwLjIyMzkgMTYuMjIzOSAyMCAxNi41IDIwQzE2Ljc3NjEgMjAgMTcgMjAuMjIzOSAxNyAyMC41WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTIuMDAwMDEgMkwzLjY4MjY1IDMuMDA5NTlDNC4xOTk2OSAzLjMxOTgxIDQuNTQ5MTggMy44NDY3NSA0LjYzMzg0IDQuNDQzNzVMNC44NTQ1NSA2TDUuNTkzOTYgMTIuNDU1MkM1LjgyNTMyIDE0LjQ3NSA3LjUzNDk2IDE2IDkuNTY3OTcgMTZIMTYuMzgwMUMxOC40MzUxIDE2IDIwLjE1NTcgMTQuNDQyOCAyMC4zNjAyIDEyLjM5OEwyMSA2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/shopping-cart-x - Icon documentation
 */
export function ShoppingCartX({
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
      <path d="M15 11L11 7M11 11L15 7" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M10.6444 20.5H10.3456M11 20.5C11 20.7761 10.7761 21 10.5 21C10.2239 21 10 20.7761 10 20.5C10 20.2239 10.2239 20 10.5 20C10.7761 20 11 20.2239 11 20.5Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M16.6444 20.5H16.3456M17 20.5C17 20.7761 16.7761 21 16.5 21C16.2239 21 16 20.7761 16 20.5C16 20.2239 16.2239 20 16.5 20C16.7761 20 17 20.2239 17 20.5Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M2.00001 2L3.68265 3.00959C4.19969 3.31981 4.54918 3.84675 4.63384 4.44375L4.85455 6L5.59396 12.4552C5.82532 14.475 7.53496 16 9.56797 16H16.3801C18.4351 16 20.1557 14.4428 20.3602 12.398L21 6" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
