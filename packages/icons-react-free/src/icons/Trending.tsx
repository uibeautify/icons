import { IconProps } from "../types";

/**
 * @component
 * @name Trending
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTAuMjIxNyAzQzEzLjQ5OTggNC41IDEzLjUgOSAxMyAxMi41QzEzLjkyNjQgMTIuNSAxNS45NDY2IDEwLjcxNDMgMTYuMTQwNiA5LjE2MTEzQzE4LjgwNSAxMS45NzU0IDE4Ljk3ODMgMTguNzQ0OCAxNC4xODI2IDIwLjU0OThDMTMuODE3NSAxOC41OTQ2IDEyLjQzOTMgMTcuMDIyOSAxMS40Mzk1IDE2LjI2MTdDOS45OTQwNiAxNy44ODUyIDkuMjU1OTYgMTkuNDQzNCA4LjkxMzA5IDIwLjY1OTJDNC4zMTczNyAxOS4yOTczIDQuNjI0NjMgMTQuMTkxOCA1LjU4OTg1IDExLjgxODRDNy4wNjg1NCA4LjE4Mjc0IDkuNzg2MzMgNi44NTY5OSAxMC4yMjE3IDNaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/trending - Icon documentation
 */
export function Trending({
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
      <path d="M10.2217 3C13.4998 4.5 13.5 9 13 12.5C13.9264 12.5 15.9466 10.7143 16.1406 9.16113C18.805 11.9754 18.9783 18.7448 14.1826 20.5498C13.8175 18.5946 12.4393 17.0229 11.4395 16.2617C9.99406 17.8852 9.25596 19.4434 8.91309 20.6592C4.31737 19.2973 4.62463 14.1918 5.58985 11.8184C7.06854 8.18274 9.78633 6.85699 10.2217 3Z" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
