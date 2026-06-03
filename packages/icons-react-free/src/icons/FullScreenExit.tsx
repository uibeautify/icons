import { IconProps } from "../types";

/**
 * @component
 * @name FullScreenExit
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMjEgNy41SDE5LjVDMTcuODQzMSA3LjUgMTYuNSA2LjE1Njg1IDE2LjUgNC41VjMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0zIDcuNUg0LjVDNi4xNTY4NSA3LjUgNy41IDYuMTU2ODUgNy41IDQuNVYzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNy41IDIxVjE5LjVDNy41IDE3Ljg0MzEgNi4xNTY4NSAxNi41IDQuNSAxNi41SDMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0yMSAxNi41SDE5LjVDMTcuODQzMSAxNi41IDE2LjUgMTcuODQzMSAxNi41IDE5LjVWMjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/full-screen-exit - Icon documentation
 */
export function FullScreenExit({
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
      <path d="M21 7.5H19.5C17.8431 7.5 16.5 6.15685 16.5 4.5V3" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 7.5H4.5C6.15685 7.5 7.5 6.15685 7.5 4.5V3" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M7.5 21V19.5C7.5 17.8431 6.15685 16.5 4.5 16.5H3" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M21 16.5H19.5C17.8431 16.5 16.5 17.8431 16.5 19.5V21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
