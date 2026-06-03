import { IconProps } from "../types";

/**
 * @component
 * @name Refresh
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMjAuMzA3MiA4LjUzMTI5QzE5Ljc4NTkgNy4yODQyNyAxOC45OTIgNi4xNzk1NyAxOCA1LjI5MTY4QzE2LjQwNzcgMy44NjY1NiAxNC4zMDUxIDMgMTIgM0M3LjAyOTQ0IDMgMyA3LjAyOTQ0IDMgMTJDMyAxNi45NzA2IDcuMDI5NDQgMjEgMTIgMjFDMTYuNjMxNSAyMSAyMC40NDU5IDE3LjUwMTUgMjAuOTQ0NyAxMy4wMDNNMjEuMTE0MSAzLjY3NDJMMjAuMzA3MiA4LjUzMTI5TDE1LjQwMjggNy40MjgwMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/refresh - Icon documentation
 */
export function Refresh({
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
      <path d="M20.3072 8.53129C19.7859 7.28427 18.992 6.17957 18 5.29168C16.4077 3.86656 14.3051 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.6315 21 20.4459 17.5015 20.9447 13.003M21.1141 3.6742L20.3072 8.53129L15.4028 7.42802" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
