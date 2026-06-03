import { IconProps } from "../types";

/**
 * @component
 * @name Moon02
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTIgM0MxMy44MiAzIDE1LjUxMjcgMy41NDE4OCAxNi45Mjg3IDQuNDcwN0MxNi4xNzgyIDQuMTY4MSAxNS4zNTg5IDQgMTQuNSA0QzEwLjkxMDEgNCA4IDYuOTEwMTUgOCAxMC41QzggMTQuMDg5OSAxMC45MTAxIDE3IDE0LjUgMTdDMTcuODUzNiAxNyAyMC42MTMxIDE0LjQ2MDIgMjAuOTYxOSAxMS4xOTkyQzIwLjk4NTIgMTEuNDYzMSAyMSAxMS43MyAyMSAxMkMyMSAxNi45NzA2IDE2Ljk3MDYgMjEgMTIgMjFDNy4wMjk0NCAyMSAzIDE2Ljk3MDYgMyAxMkMzIDcuMDI5NDQgNy4wMjk0NCAzIDEyIDNaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/moon-02 - Icon documentation
 */
export function Moon02({
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
      <path d="M12 3C13.82 3 15.5127 3.54188 16.9287 4.4707C16.1782 4.1681 15.3589 4 14.5 4C10.9101 4 8 6.91015 8 10.5C8 14.0899 10.9101 17 14.5 17C17.8536 17 20.6131 14.4602 20.9619 11.1992C20.9852 11.4631 21 11.73 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
