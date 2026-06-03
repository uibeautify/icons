import { IconProps } from "../types";

/**
 * @component
 * @name DocumentCheckmark
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTkgMTNWNy44QzE5IDYuMTE5ODQgMTkgNS4yNzk3NiAxOC42NzMgNC42MzgwM0MxOC4zODU0IDQuMDczNTQgMTcuOTI2NSAzLjYxNDYgMTcuMzYyIDMuMzI2OThDMTYuNzIwMiAzIDE1Ljg4MDIgMyAxNC4yIDNIOS44QzguMTE5ODQgMyA3LjI3OTc2IDMgNi42MzgwMyAzLjMyNjk4QzYuMDczNTQgMy42MTQ2IDUuNjE0NiA0LjA3MzU0IDUuMzI2OTggNC42MzgwM0M1IDUuMjc5NzYgNSA2LjExOTg0IDUgNy44VjE2LjJDNSAxNy44ODAyIDUgMTguNzIwMiA1LjMyNjk4IDE5LjM2MkM1LjYxNDYgMTkuOTI2NSA2LjA3MzU0IDIwLjM4NTQgNi42MzgwMyAyMC42NzNDNy4yNzk3NiAyMSA4LjExOTg0IDIxIDkuOCAyMUgxMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTkgMTFIMTUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik05IDdIMTUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik05IDE1SDExIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTUgMTlMMTcgMjFMMjEgMTciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/document-checkmark - Icon documentation
 */
export function DocumentCheckmark({
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
      <path d="M19 13V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3H9.8C8.11984 3 7.27976 3 6.63803 3.32698C6.07354 3.6146 5.6146 4.07354 5.32698 4.63803C5 5.27976 5 6.11984 5 7.8V16.2C5 17.8802 5 18.7202 5.32698 19.362C5.6146 19.9265 6.07354 20.3854 6.63803 20.673C7.27976 21 8.11984 21 9.8 21H11" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M9 11H15" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M9 7H15" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M9 15H11" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M15 19L17 21L21 17" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
