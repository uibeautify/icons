import { IconProps } from "../types";

/**
 * @component
 * @name MoneyBag
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTAgN0gxNEwxNS4wOCA1LjU2QzE1LjY5OCA0LjczNjA0IDE2LjAwNyA0LjMyNDA2IDE1Ljk5OTggMy45NzkyMUMxNS45OTM1IDMuNjc5MTIgMTUuODUyOCAzLjM5NzY5IDE1LjYxNjUgMy4yMTI2NEMxNS4zNDQ5IDMgMTQuODI5OSAzIDEzLjggM0gxMC4yQzkuMTcwMDUgMyA4LjY1NTA4IDMgOC4zODM1IDMuMjEyNjRDOC4xNDcxNyAzLjM5NzY5IDguMDA2NDYgMy42NzkxMiA4LjAwMDIyIDMuOTc5MjFDNy45OTMwNSA0LjMyNDA2IDguMzAyMDMgNC43MzYwNCA4LjkyIDUuNTZMMTAgN1oiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMiA3TDIwIDciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMiA3QzE1Ljc1NDggNyAxOC41NjQgMTIuMDg0MyAxOS45Nzc4IDE1LjMzOTdDMjAuNjU4OCAxNi45MDc1IDIwLjA4NDcgMTguNjg2NSAxOC43MTcyIDE5LjcxMjFDMTcuNjAyNiAyMC41NDgxIDE2LjI0NjggMjEgMTQuODUzNSAyMUg5LjE0NjUyQzcuNzUzMTkgMjEgNi4zOTc0NCAyMC41NDgxIDUuMjgyNzggMTkuNzEyMUMzLjkxNTMzIDE4LjY4NjUgMy4zNDEyMiAxNi45MDc1IDQuMDIyMTYgMTUuMzM5N0M1LjQzNjAzIDEyLjA4NDMgOC4yNDUyNSA3IDEyIDdaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/money-bag - Icon documentation
 */
export function MoneyBag({
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
      <path d="M10 7H14L15.08 5.56C15.698 4.73604 16.007 4.32406 15.9998 3.97921C15.9935 3.67912 15.8528 3.39769 15.6165 3.21264C15.3449 3 14.8299 3 13.8 3H10.2C9.17005 3 8.65508 3 8.3835 3.21264C8.14717 3.39769 8.00646 3.67912 8.00022 3.97921C7.99305 4.32406 8.30203 4.73604 8.92 5.56L10 7Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M12 7L20 7" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M12 7C15.7548 7 18.564 12.0843 19.9778 15.3397C20.6588 16.9075 20.0847 18.6865 18.7172 19.7121C17.6026 20.5481 16.2468 21 14.8535 21H9.14652C7.75319 21 6.39744 20.5481 5.28278 19.7121C3.91533 18.6865 3.34122 16.9075 4.02216 15.3397C5.43603 12.0843 8.24525 7 12 7Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
