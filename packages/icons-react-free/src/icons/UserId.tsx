import { IconProps } from "../types";

/**
 * @component
 * @name UserId
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cmVjdCB4PSIyIiB5PSI1IiB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHJ4PSIzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PGNpcmNsZSBjeD0iOC41NzE0MyIgY3k9IjEwLjcxNDMiIHI9IjEuNzE0MjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTEuMTQyOSAxNUMxMC45NjI4IDEzLjU0NjIgOS44ODAxMiAxMi40Mjg2IDguNTcxNDMgMTIuNDI4NkM3LjI2Mjc0IDEyLjQyODYgNi4xODAwNyAxMy41NDYyIDYgMTUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNSAxMEgxOCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE1IDE0SDE4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/user-id - Icon documentation
 */
export function UserId({
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
      <rect x="2" y="5" width="20" height="14" rx="3" strokeWidth={strokeWidth} stroke={color}/><circle cx="8.57143" cy="10.7143" r="1.71429" strokeWidth={strokeWidth} stroke={color}/><path d="M11.1429 15C10.9628 13.5462 9.88012 12.4286 8.57143 12.4286C7.26274 12.4286 6.18007 13.5462 6 15" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M15 10H18" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M15 14H18" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
