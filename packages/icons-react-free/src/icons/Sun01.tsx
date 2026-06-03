import { IconProps } from "../types";

/**
 * @component
 * @name Sun01
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTEuOTk5NiA1LjE5OTg1VjQuMzM2M00xNi41Mjc3IDYuMDgwMkwxNi44NTEyIDUuMjc5NTRNMjAuMzk2MSA4LjU5Mjc1TDIwLjk5NiA3Ljk3MTU3TTcuNDY4MzkgNi4wODAyTDcuMTQ0OTEgNS4yNzk1NE0zLjU5OTk0IDguNTkyNzVMMy4wMDAwOCA3Ljk3MTU3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTIgMTFDNy4zNjc0NSAxMSAzLjU1MjM4IDE0LjUgMy4wNTQ5MyAxOUg3LjEwMDAyQzcuNTYzMjkgMTYuNzE3OCA5LjU4MTA1IDE1IDEyIDE1QzE0LjQxOSAxNSAxNi40MzY3IDE2LjcxNzggMTYuOSAxOUgyMC45NDUxQzIwLjQ0NzYgMTQuNSAxNi42MzI2IDExIDEyIDExWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/sun-01 - Icon documentation
 */
export function Sun01({
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
      <path d="M11.9996 5.19985V4.3363M16.5277 6.0802L16.8512 5.27954M20.3961 8.59275L20.996 7.97157M7.46839 6.0802L7.14491 5.27954M3.59994 8.59275L3.00008 7.97157" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M12 11C7.36745 11 3.55238 14.5 3.05493 19H7.10002C7.56329 16.7178 9.58105 15 12 15C14.419 15 16.4367 16.7178 16.9 19H20.9451C20.4476 14.5 16.6326 11 12 11Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
