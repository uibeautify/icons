import { IconProps } from "../types";

/**
 * @component
 * @name Receipt01
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNCA3LjhDNCA2LjExOTg0IDQgNS4yNzk3NiA0LjMyNjk4IDQuNjM4MDNDNC42MTQ2IDQuMDczNTQgNS4wNzM1NCAzLjYxNDYgNS42MzgwMyAzLjMyNjk4QzYuMjc5NzYgMyA3LjExOTg0IDMgOC44IDNIMTUuMkMxNi44ODAyIDMgMTcuNzIwMiAzIDE4LjM2MiAzLjMyNjk4QzE4LjkyNjUgMy42MTQ2IDE5LjM4NTQgNC4wNzM1NCAxOS42NzMgNC42MzgwM0MyMCA1LjI3OTc2IDIwIDYuMTE5ODQgMjAgNy44VjIxTDE4IDE5TDE2IDIxTDE0IDE5TDEyIDIxTDEwIDE5TDggMjFMNiAxOUw0IDIxVjcuOFoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTYgMTVMMTMgMTUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik05IDE1TDggMTUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iOSIgcj0iMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/receipt-01 - Icon documentation
 */
export function Receipt01({
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
      <path d="M4 7.8C4 6.11984 4 5.27976 4.32698 4.63803C4.6146 4.07354 5.07354 3.6146 5.63803 3.32698C6.27976 3 7.11984 3 8.8 3H15.2C16.8802 3 17.7202 3 18.362 3.32698C18.9265 3.6146 19.3854 4.07354 19.673 4.63803C20 5.27976 20 6.11984 20 7.8V21L18 19L16 21L14 19L12 21L10 19L8 21L6 19L4 21V7.8Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M16 15L13 15" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M9 15L8 15" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><circle cx="12" cy="9" r="2" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
