import { IconProps } from "../types";

/**
 * @component
 * @name DocumentPlus
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTggMTFWNy44QzE4IDYuMTE5ODQgMTggNS4yNzk3NiAxNy42NzMgNC42MzgwM0MxNy4zODU0IDQuMDczNTQgMTYuOTI2NSAzLjYxNDYgMTYuMzYyIDMuMzI2OThDMTUuNzIwMiAzIDE0Ljg4MDIgMyAxMy4yIDNIOC44QzcuMTE5ODQgMyA2LjI3OTc2IDMgNS42MzgwMyAzLjMyNjk4QzUuMDczNTQgMy42MTQ2IDQuNjE0NiA0LjA3MzU0IDQuMzI2OTggNC42MzgwM0M0IDUuMjc5NzYgNCA2LjExOTg0IDQgNy44VjE2LjJDNCAxNy44ODAyIDQgMTguNzIwMiA0LjMyNjk4IDE5LjM2MkM0LjYxNDYgMTkuOTI2NSA1LjA3MzU0IDIwLjM4NTQgNS42MzgwMyAyMC42NzNDNi4yNzk3NiAyMSA3LjExOTg0IDIxIDguOCAyMUgxMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTggMTFIMTQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik04IDdIMTQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik04IDE1SDEwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTggMjFWMTVNMTUgMThIMjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/document-plus - Icon documentation
 */
export function DocumentPlus({
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
      <path d="M18 11V7.8C18 6.11984 18 5.27976 17.673 4.63803C17.3854 4.07354 16.9265 3.6146 16.362 3.32698C15.7202 3 14.8802 3 13.2 3H8.8C7.11984 3 6.27976 3 5.63803 3.32698C5.07354 3.6146 4.6146 4.07354 4.32698 4.63803C4 5.27976 4 6.11984 4 7.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H11" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M8 11H14" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M8 7H14" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M8 15H10" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M18 21V15M15 18H21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
