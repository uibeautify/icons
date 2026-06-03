import { IconProps } from "../types";

/**
 * @component
 * @name ReceiptSterlingPound
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNCA3LjhDNCA2LjExOTg0IDQgNS4yNzk3NiA0LjMyNjk4IDQuNjM4MDNDNC42MTQ2IDQuMDczNTQgNS4wNzM1NCAzLjYxNDYgNS42MzgwMyAzLjMyNjk4QzYuMjc5NzYgMyA3LjExOTg0IDMgOC44IDNIMTUuMkMxNi44ODAyIDMgMTcuNzIwMiAzIDE4LjM2MiAzLjMyNjk4QzE4LjkyNjUgMy42MTQ2IDE5LjM4NTQgNC4wNzM1NCAxOS42NzMgNC42MzgwM0MyMCA1LjI3OTc2IDIwIDYuMTE5ODQgMjAgNy44VjIxTDE4IDE5TDE2IDIxTDE0IDE5TDEyIDIxTDEwIDE5TDggMjFMNiAxOUw0IDIxVjcuOFoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNC4wMTA0IDcuMzc2MzNDMTMuODA5MyA3LjI0NjgxIDEzLjQ3NSA2Ljk4NTI5IDEyLjY1NjMgNy4wMTQ1MUMxMS43NTYzIDcuMDQ2NjQgMTAuNzczNyA3LjcyNzA5IDEwLjQ3MDkgOC45OTg2NEMxMC4xMzU4IDEwLjQwNjQgMTIuNDk1NCAxMy41NDM2IDkuNTg2MDcgMTQuOTc4MkgxNC4zNzI0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOS45ODc3NSAxMS40NDM4SDEzLjIwOTQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/receipt-sterling-pound - Icon documentation
 */
export function ReceiptSterlingPound({
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
      <path d="M4 7.8C4 6.11984 4 5.27976 4.32698 4.63803C4.6146 4.07354 5.07354 3.6146 5.63803 3.32698C6.27976 3 7.11984 3 8.8 3H15.2C16.8802 3 17.7202 3 18.362 3.32698C18.9265 3.6146 19.3854 4.07354 19.673 4.63803C20 5.27976 20 6.11984 20 7.8V21L18 19L16 21L14 19L12 21L10 19L8 21L6 19L4 21V7.8Z" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" stroke={color}/><path d="M14.0104 7.37633C13.8093 7.24681 13.475 6.98529 12.6563 7.01451C11.7563 7.04664 10.7737 7.72709 10.4709 8.99864C10.1358 10.4064 12.4954 13.5436 9.58607 14.9782H14.3724" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M9.98775 11.4438H13.2094" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
