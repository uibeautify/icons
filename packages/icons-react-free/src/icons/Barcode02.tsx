import { IconProps } from "../types";

/**
 * @component
 * @name Barcode02
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyA2LjVDMyA2LjAzNTU4IDMgNS44MDMzNyAzLjAyNTY3IDUuNjA4NDJDMy4yMDI5IDQuMjYyMjIgNC4yNjIyMiAzLjIwMjkgNS42MDg0MiAzLjAyNTY3QzUuODAzMzcgMyA2LjAzNTU4IDMgNi41IDNINy41TTMgMTcuNUMzIDE3Ljk2NDQgMyAxOC4xOTY2IDMuMDI1NjcgMTguMzkxNkMzLjIwMjkgMTkuNzM3OCA0LjI2MjIyIDIwLjc5NzEgNS42MDg0MiAyMC45NzQzQzUuODAzMzcgMjEgNi4wMzU1OCAyMSA2LjUgMjFINy41TTE2LjUgMjFIMTcuNUMxNy45NjQ0IDIxIDE4LjE5NjYgMjEgMTguMzkxNiAyMC45NzQzQzE5LjczNzggMjAuNzk3MSAyMC43OTcxIDE5LjczNzggMjAuOTc0MyAxOC4zOTE2QzIxIDE4LjE5NjYgMjEgMTcuOTY0NCAyMSAxNy41TTIxIDYuNUMyMSA2LjAzNTU4IDIxIDUuODAzMzcgMjAuOTc0MyA1LjYwODQyQzIwLjc5NzEgNC4yNjIyMiAxOS43Mzc4IDMuMjAyOSAxOC4zOTE2IDMuMDI1NjdDMTguMTk2NiAzIDE3Ljk2NDQgMyAxNy41IDNIMTYuNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE0IDdWMTMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMCA3VjEzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTAgMTdIMTQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik02IDdWMTciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xOCA3VjE3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/barcode-02 - Icon documentation
 */
export function Barcode02({
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
      <path d="M3 6.5C3 6.03558 3 5.80337 3.02567 5.60842C3.2029 4.26222 4.26222 3.2029 5.60842 3.02567C5.80337 3 6.03558 3 6.5 3H7.5M3 17.5C3 17.9644 3 18.1966 3.02567 18.3916C3.2029 19.7378 4.26222 20.7971 5.60842 20.9743C5.80337 21 6.03558 21 6.5 21H7.5M16.5 21H17.5C17.9644 21 18.1966 21 18.3916 20.9743C19.7378 20.7971 20.7971 19.7378 20.9743 18.3916C21 18.1966 21 17.9644 21 17.5M21 6.5C21 6.03558 21 5.80337 20.9743 5.60842C20.7971 4.26222 19.7378 3.2029 18.3916 3.02567C18.1966 3 17.9644 3 17.5 3H16.5" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M14 7V13" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M10 7V13" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M10 17H14" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M6 7V17" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M18 7V17" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
