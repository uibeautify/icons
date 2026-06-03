import { IconProps } from "../types";

/**
 * @component
 * @name Newspaper
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNi45OTk5OSAxNlY2QzYuOTk5OTkgNC4zNDMxNSA4LjM0MzE0IDMgOS45OTk5OSAzSDE4QzE5LjY1NjkgMyAyMSA0LjM0MzE1IDIxIDZWMThDMjEgMTkuNjU2OSAxOS42NTY5IDIxIDE4IDIxSDUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNyAxMFYxNU03IDE1VjE5QzcgMjAuMTA0NiA2LjEwNDU3IDIxIDUgMjFDMy44OTU0MyAyMSAzIDIwLjEwNDYgMyAxOVYxNUg3WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE3IDlWN0MxNyA2LjQ0NzcyIDE2LjU1MjMgNiAxNiA2SDEyQzExLjQ0NzcgNiAxMSA2LjQ0NzcyIDExIDdWOUMxMSA5LjU1MjI4IDExLjQ0NzcgMTAgMTIgMTBIMTZDMTYuNTUyMyAxMCAxNyA5LjU1MjI4IDE3IDlaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTEgMTMuNUgxNyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTExIDE3SDE3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/newspaper - Icon documentation
 */
export function Newspaper({
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
      <path d="M6.99999 16V6C6.99999 4.34315 8.34314 3 9.99999 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H5" strokeWidth={strokeWidth} stroke={color}/><path d="M7 10V15M7 15V19C7 20.1046 6.10457 21 5 21C3.89543 21 3 20.1046 3 19V15H7Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M17 9V7C17 6.44772 16.5523 6 16 6H12C11.4477 6 11 6.44772 11 7V9C11 9.55228 11.4477 10 12 10H16C16.5523 10 17 9.55228 17 9Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M11 13.5H17" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M11 17H17" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
