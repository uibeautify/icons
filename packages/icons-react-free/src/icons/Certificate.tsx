import { IconProps } from "../types";

/**
 * @component
 * @name Certificate
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTEgMTlINkM0LjM0MzE1IDE5IDMgMTcuNjU2OSAzIDE2VjhDMyA2LjM0MzE1IDQuMzQzMTUgNSA2IDVIMTlDMjAuMTA0NiA1IDIxIDUuODk1NDMgMjEgNyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTIwIDE1Ljk0OTVDMjAuNjE4NiAxNS4zMTgyIDIxIDE0LjQ1MzcgMjEgMTMuNUMyMSAxMS41NjcgMTkuNDMzIDEwIDE3LjUgMTBDMTUuNTY3IDEwIDE0IDExLjU2NyAxNCAxMy41QzE0IDE0LjQ1MzcgMTQuMzgxNCAxNS4zMTgyIDE1IDE1Ljk0OTVDMTUuNjM1MyAxNi41OTc4IDE2LjUyMDcgMTcgMTcuNSAxN0MxOC40NzkzIDE3IDE5LjM2NDcgMTYuNTk3OCAyMCAxNS45NDk1Wk0xNSAxNS45NDk1VjIxTDE3LjEyODYgMjAuMTQ4NkMxNy4zNjcgMjAuMDUzMiAxNy42MzMgMjAuMDUzMiAxNy44NzE0IDIwLjE0ODZMMjAgMjFWMTUuOTQ5NSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik03IDEwTDExIDEwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNyAxNEw5IDE0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/certificate - Icon documentation
 */
export function Certificate({
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
      <path d="M11 19H6C4.34315 19 3 17.6569 3 16V8C3 6.34315 4.34315 5 6 5H19C20.1046 5 21 5.89543 21 7" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M20 15.9495C20.6186 15.3182 21 14.4537 21 13.5C21 11.567 19.433 10 17.5 10C15.567 10 14 11.567 14 13.5C14 14.4537 14.3814 15.3182 15 15.9495C15.6353 16.5978 16.5207 17 17.5 17C18.4793 17 19.3647 16.5978 20 15.9495ZM15 15.9495V21L17.1286 20.1486C17.367 20.0532 17.633 20.0532 17.8714 20.1486L20 21V15.9495" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M7 10L11 10" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M7 14L9 14" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
