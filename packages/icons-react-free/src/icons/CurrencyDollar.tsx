import { IconProps } from "../types";

/**
 * @component
 * @name CurrencyDollar
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTkgOEMxOSA2Ljg5NTQzIDE4LjEwNDYgNiAxNyA2SDEyTTUgMTZDNSAxNy4xMDQ2IDUuODk1NDMgMTggNyAxOEgxMk0xMiAxOEgxNkMxNi45MzE5IDE4IDE3LjM5NzggMTggMTcuNzY1NCAxNy44NDc4QzE4LjI1NTQgMTcuNjQ0OCAxOC42NDQ4IDE3LjI1NTQgMTguODQ3OCAxNi43NjU0QzE5IDE2LjM5NzggMTkgMTUuOTMxOSAxOSAxNUMxOSAxNC4wNjgxIDE5IDEzLjYwMjIgMTguODQ3OCAxMy4yMzQ2QzE4LjY0NDggMTIuNzQ0NiAxOC4yNTU0IDEyLjM1NTIgMTcuNzY1NCAxMi4xNTIyQzE3LjM5NzggMTIgMTYuOTMxOSAxMiAxNiAxMkg4QzcuMDY4MTIgMTIgNi42MDIxOCAxMiA2LjIzNDYzIDExLjg0NzhDNS43NDQ1OCAxMS42NDQ4IDUuMzU1MjMgMTEuMjU1NCA1LjE1MjI0IDEwLjc2NTRDNSAxMC4zOTc4IDUgOS45MzE4OCA1IDlDNSA4LjA2ODEyIDUgNy42MDIxOCA1LjE1MjI0IDcuMjM0NjNDNS4zNTUyMyA2Ljc0NDU4IDUuNzQ0NTggNi4zNTUyMyA2LjIzNDYzIDYuMTUyMjRDNi42MDIxOCA2IDcuMDY4MTIgNiA4IDZIMTJNMTIgMThWMjFNMTIgNlYzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/currency-dollar - Icon documentation
 */
export function CurrencyDollar({
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
      <path d="M19 8C19 6.89543 18.1046 6 17 6H12M5 16C5 17.1046 5.89543 18 7 18H12M12 18H16C16.9319 18 17.3978 18 17.7654 17.8478C18.2554 17.6448 18.6448 17.2554 18.8478 16.7654C19 16.3978 19 15.9319 19 15C19 14.0681 19 13.6022 18.8478 13.2346C18.6448 12.7446 18.2554 12.3552 17.7654 12.1522C17.3978 12 16.9319 12 16 12H8C7.06812 12 6.60218 12 6.23463 11.8478C5.74458 11.6448 5.35523 11.2554 5.15224 10.7654C5 10.3978 5 9.93188 5 9C5 8.06812 5 7.60218 5.15224 7.23463C5.35523 6.74458 5.74458 6.35523 6.23463 6.15224C6.60218 6 7.06812 6 8 6H12M12 18V21M12 6V3" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
