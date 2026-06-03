import { IconProps } from "../types";

/**
 * @component
 * @name ShoppingBag
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNC44OTUwNSA0Ljg4OTA2QzQuOTUzOTMgMy44MjkyMyA1LjgzMDUxIDMgNi44OTE5NyAzSDE3LjEwOEMxOC4xNjk1IDMgMTkuMDQ2MSAzLjgyOTIzIDE5LjEwNDkgNC44ODkwNkwxOS44ODI3IDE4Ljg4OTFDMTkuOTQ2NCAyMC4wMzU1IDE5LjAzNCAyMSAxNy44ODU4IDIxSDYuMTE0MTlDNC45NjYwMiAyMSA0LjA1MzU5IDIwLjAzNTUgNC4xMTcyNyAxOC44ODkxTDQuODk1MDUgNC44ODkwNloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTQuODI5MiA3QzE0LjY5NzUgNy4zNzI2MiAxNC40OTQzIDcuNzExNDUgMTQuMjM2MSA4QzEzLjY4NjcgOC42MTM3NSAxMi44ODg0IDkgMTEuOTk5OSA5QzExLjExMTQgOSAxMC4zMTMyIDguNjEzNzUgOS43NjM4NCA4QzkuNTA1NTggNy43MTE0NSA5LjMwMjM2IDcuMzcyNjIgOS4xNzA2NSA3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/shopping-bag - Icon documentation
 */
export function ShoppingBag({
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
      <path d="M4.89505 4.88906C4.95393 3.82923 5.83051 3 6.89197 3H17.108C18.1695 3 19.0461 3.82923 19.1049 4.88906L19.8827 18.8891C19.9464 20.0355 19.034 21 17.8858 21H6.11419C4.96602 21 4.05359 20.0355 4.11727 18.8891L4.89505 4.88906Z" strokeWidth={strokeWidth} stroke={color}/><path d="M14.8292 7C14.6975 7.37262 14.4943 7.71145 14.2361 8C13.6867 8.61375 12.8884 9 11.9999 9C11.1114 9 10.3132 8.61375 9.76384 8C9.50558 7.71145 9.30236 7.37262 9.17065 7" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
