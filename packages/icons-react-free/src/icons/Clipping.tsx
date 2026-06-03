import { IconProps } from "../types";

/**
 * @component
 * @name Clipping
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuNSAxOS43OTZDOC44MjM3OCAyMC41NjE3IDEwLjM2MDcgMjEgMTIgMjFDMTYuOTcwNiAyMSAyMSAxNi45NzA2IDIxIDEyQzIxIDcuMDI5NDQgMTYuOTcwNiAzIDEyIDNDMTAuMzYwNyAzIDguODIzNzggMy40MzgyNyA3LjUgNC4yMDQwNEMxMC4xOTAxIDUuNzYwMTggMTIgOC42Njg3MyAxMiAxMkMxMiAxNS4zMzEzIDEwLjE5MDEgMTguMjM5OCA3LjUgMTkuNzk2WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMiAxMkMxMiAxNS4zMzEzIDEwLjE5MDEgMTguMjM5OCA3LjUgMTkuNzk2QzQuODA5OSAxOC4yMzk4IDMgMTUuMzMxMyAzIDEyQzMgOC42Njg3MyA0LjgwOTg5IDUuNzYwMTggNy41IDQuMjA0MDRDMTAuMTkwMSA1Ljc2MDE4IDEyIDguNjY4NzMgMTIgMTJaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/clipping - Icon documentation
 */
export function Clipping({
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 19.796C8.82378 20.5617 10.3607 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C10.3607 3 8.82378 3.43827 7.5 4.20404C10.1901 5.76018 12 8.66873 12 12C12 15.3313 10.1901 18.2398 7.5 19.796Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M12 12C12 15.3313 10.1901 18.2398 7.5 19.796C4.8099 18.2398 3 15.3313 3 12C3 8.66873 4.80989 5.76018 7.5 4.20404C10.1901 5.76018 12 8.66873 12 12Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
