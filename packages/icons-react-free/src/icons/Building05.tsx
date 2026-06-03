import { IconProps } from "../types";

/**
 * @component
 * @name Building05
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNyA3QzcgNS44OTU0MyA3Ljg5NTQzIDUgOSA1SDE1QzE2LjEwNDYgNSAxNyA1Ljg5NTQzIDE3IDdWMjFIN1Y3WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTExIDlIMTMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMSAxM0gxMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEyIDVMMTIgMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE3IDEzSDE5QzIwLjEwNDYgMTMgMjEgMTMuODk1NCAyMSAxNVYyMEMyMSAyMC41NTIzIDIwLjU1MjMgMjEgMjAgMjFIMTdWMTNaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMyAxNUMzIDEzLjg5NTQgMy44OTU0MyAxMyA1IDEzSDdWMjFINEMzLjQ0NzcyIDIxIDMgMjAuNTUyMyAzIDIwVjE1WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/building-05 - Icon documentation
 */
export function Building05({
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
      <path d="M7 7C7 5.89543 7.89543 5 9 5H15C16.1046 5 17 5.89543 17 7V21H7V7Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M11 9H13" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M11 13H13" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 5L12 2" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M17 13H19C20.1046 13 21 13.8954 21 15V20C21 20.5523 20.5523 21 20 21H17V13Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 15C3 13.8954 3.89543 13 5 13H7V21H4C3.44772 21 3 20.5523 3 20V15Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
