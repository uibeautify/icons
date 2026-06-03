import { IconProps } from "../types";

/**
 * @component
 * @name FolderPlus
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMjEgMTFDMjEgOS4zNDMxNSAxOS42NTY5IDggMTggOEgzVjE1LjJDMyAxNi44ODAyIDMgMTcuNzIwMiAzLjMyNjk4IDE4LjM2MkMzLjYxNDYgMTguOTI2NSA0LjA3MzU0IDE5LjM4NTQgNC42MzgwMyAxOS42NzNDNS4yNzk3NiAyMCA2LjExOTg0IDIwIDcuOCAyMEgxMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTMgNS42QzMgNS4wMzk5NSAzIDQuNzU5OTIgMy4xMDg5OSA0LjU0NjAxQzMuMjA0ODcgNC4zNTc4NSAzLjM1Nzg1IDQuMjA0ODcgMy41NDYwMSA0LjEwODk5QzMuNzU5OTIgNCA0LjAzOTk1IDQgNC42IDRIOS4wMjIyOUM5Ljc0MDIxIDQgMTAuMDk5MiA0IDEwLjQxNjEgNC4xMDkzMUMxMC42OTYzIDQuMjA1OTcgMTAuOTUxNiA0LjM2MzczIDExLjE2MzQgNC41NzExNkMxMS40MDI5IDQuODA1NzMgMTEuNTYzNCA1LjEyNjc5IDExLjg4NDUgNS43Njg5MkwxMyA4SDQuNkM0LjAzOTk1IDggMy43NTk5MiA4IDMuNTQ2MDEgNy44OTEwMUMzLjM1Nzg1IDcuNzk1MTMgMy4yMDQ4NyA3LjY0MjE1IDMuMTA4OTkgNy40NTM5OUMzIDcuMjQwMDggMyA2Ljk2MDA1IDMgNi40VjUuNloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTggMjFWMTVNMTUgMThIMjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/folder-plus - Icon documentation
 */
export function FolderPlus({
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
      <path d="M21 11C21 9.34315 19.6569 8 18 8H3V15.2C3 16.8802 3 17.7202 3.32698 18.362C3.6146 18.9265 4.07354 19.3854 4.63803 19.673C5.27976 20 6.11984 20 7.8 20H11" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 5.6C3 5.03995 3 4.75992 3.10899 4.54601C3.20487 4.35785 3.35785 4.20487 3.54601 4.10899C3.75992 4 4.03995 4 4.6 4H9.02229C9.74021 4 10.0992 4 10.4161 4.10931C10.6963 4.20597 10.9516 4.36373 11.1634 4.57116C11.4029 4.80573 11.5634 5.12679 11.8845 5.76892L13 8H4.6C4.03995 8 3.75992 8 3.54601 7.89101C3.35785 7.79513 3.20487 7.64215 3.10899 7.45399C3 7.24008 3 6.96005 3 6.4V5.6Z" strokeWidth={strokeWidth} stroke={color}/><path d="M18 21V15M15 18H21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
