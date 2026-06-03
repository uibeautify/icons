import { IconProps } from "../types";

/**
 * @component
 * @name Leaf
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTguMTgwNCAyLjk5OTAyQzE4LjYwMzUgMi45OTkwMyAxOS4wMjE4IDMuMDE5NTMgMTkuNDM0NCAzLjA1OTc4QzIwLjIzMjcgMy4xMzc2NyAyMC44NTk2IDMuNzY2MjggMjAuOTM3NyA0LjU2NDYzQzIwLjk3ODcgNC45ODM0NyAyMC45OTk3IDUuNDA4MjEgMjAuOTk5OCA1LjgzNzg5QzIwLjk5OTggMTIuOTM4NCAxNS4yODM0IDE4LjY5NTIgOC4yMzIxOCAxOC42OTUzQzcuODA4MzcgMTguNjk1MyA3LjM4OTM2IDE4LjY3NDQgNi45NzYxMiAxOC42MzM2QzYuMTc3ODQgMTguNTU0OSA1LjU1MTI0IDE3LjkyNiA1LjQ3Mzk1IDE3LjEyNzZDNS40MzM0NCAxNi43MDkxIDUuNDEyODQgMTYuMjg0NyA1LjQxMjg0IDE1Ljg1NTVDNS40MTI5OCA4Ljc1NTAzIDExLjEyOTIgMi45OTkwMiAxOC4xODA0IDIuOTk5MDJaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMyAyMUwxMyAxMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/leaf - Icon documentation
 */
export function Leaf({
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
      <path d="M18.1804 2.99902C18.6035 2.99903 19.0218 3.01953 19.4344 3.05978C20.2327 3.13767 20.8596 3.76628 20.9377 4.56463C20.9787 4.98347 20.9997 5.40821 20.9998 5.83789C20.9998 12.9384 15.2834 18.6952 8.23218 18.6953C7.80837 18.6953 7.38936 18.6744 6.97612 18.6336C6.17784 18.5549 5.55124 17.926 5.47395 17.1276C5.43344 16.7091 5.41284 16.2847 5.41284 15.8555C5.41298 8.75503 11.1292 2.99902 18.1804 2.99902Z" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" stroke={color}/><path d="M3 21L13 11" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
