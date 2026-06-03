import { IconProps } from "../types";

/**
 * @component
 * @name ShoppingCartDiscount
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTUgN0wxMSAxMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEwIDZIMTAuMDAwMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE2IDEySDE2LjAwMDEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMC42NDQ0IDIwLjVIMTAuMzQ1Nk0xMSAyMC41QzExIDIwLjc3NjEgMTAuNzc2MSAyMSAxMC41IDIxQzEwLjIyMzkgMjEgMTAgMjAuNzc2MSAxMCAyMC41QzEwIDIwLjIyMzkgMTAuMjIzOSAyMCAxMC41IDIwQzEwLjc3NjEgMjAgMTEgMjAuMjIzOSAxMSAyMC41WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE2LjY0NDQgMjAuNUgxNi4zNDU2TTE3IDIwLjVDMTcgMjAuNzc2MSAxNi43NzYxIDIxIDE2LjUgMjFDMTYuMjIzOSAyMSAxNiAyMC43NzYxIDE2IDIwLjVDMTYgMjAuMjIzOSAxNi4yMjM5IDIwIDE2LjUgMjBDMTYuNzc2MSAyMCAxNyAyMC4yMjM5IDE3IDIwLjVaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMi4wMDAwMSAyTDMuNjgyNjUgMy4wMDk1OUM0LjE5OTY5IDMuMzE5ODEgNC41NDkxOCAzLjg0Njc1IDQuNjMzODQgNC40NDM3NUw0Ljg1NDU1IDZMNS41OTM5NiAxMi40NTUyQzUuODI1MzIgMTQuNDc1IDcuNTM0OTYgMTYgOS41Njc5NyAxNkgxNi4zODAxQzE4LjQzNTEgMTYgMjAuMTU1NyAxNC40NDI4IDIwLjM2MDIgMTIuMzk4TDIxIDYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/shopping-cart-discount - Icon documentation
 */
export function ShoppingCartDiscount({
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
      <path d="M15 7L11 11" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M10 6H10.0001" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M16 12H16.0001" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M10.6444 20.5H10.3456M11 20.5C11 20.7761 10.7761 21 10.5 21C10.2239 21 10 20.7761 10 20.5C10 20.2239 10.2239 20 10.5 20C10.7761 20 11 20.2239 11 20.5Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M16.6444 20.5H16.3456M17 20.5C17 20.7761 16.7761 21 16.5 21C16.2239 21 16 20.7761 16 20.5C16 20.2239 16.2239 20 16.5 20C16.7761 20 17 20.2239 17 20.5Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M2.00001 2L3.68265 3.00959C4.19969 3.31981 4.54918 3.84675 4.63384 4.44375L4.85455 6L5.59396 12.4552C5.82532 14.475 7.53496 16 9.56797 16H16.3801C18.4351 16 20.1557 14.4428 20.3602 12.398L21 6" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
