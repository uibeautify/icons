import { IconProps } from "../types";

/**
 * @component
 * @name CardLock
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNOSAxN0g2QzQuMzQzMTUgMTcgMyAxNS42NTY5IDMgMTRWNkMzIDQuMzQzMTUgNC4zNDMxNSAzIDYgM0gxOEMxOS42NTY5IDMgMjEgNC4zNDMxNSAyMSA2VjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0zIDhIMjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMCAxM0w3IDEzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTkgMTdIMTVDMTQuNTM1IDE3IDE0LjMwMjUgMTcgMTQuMTExOCAxNy4wNTExQzEzLjU5NDEgMTcuMTg5OCAxMy4xODk4IDE3LjU5NDEgMTMuMDUxMSAxOC4xMTE4QzEzIDE4LjMwMjUgMTMgMTguNTM1IDEzIDE5QzEzIDE5LjQ2NSAxMyAxOS42OTc1IDEzLjA1MTEgMTkuODg4MkMxMy4xODk4IDIwLjQwNTkgMTMuNTk0MSAyMC44MTAyIDE0LjExMTggMjAuOTQ4OUMxNC4zMDI1IDIxIDE0LjUzNSAyMSAxNSAyMUgxOUMxOS40NjUgMjEgMTkuNjk3NSAyMSAxOS44ODgyIDIwLjk0ODlDMjAuNDA1OSAyMC44MTAyIDIwLjgxMDIgMjAuNDA1OSAyMC45NDg5IDE5Ljg4ODJDMjEgMTkuNjk3NSAyMSAxOS40NjUgMjEgMTlDMjEgMTguNTM1IDIxIDE4LjMwMjUgMjAuOTQ4OSAxOC4xMTE4QzIwLjgxMDIgMTcuNTk0MSAyMC40MDU5IDE3LjE4OTggMTkuODg4MiAxNy4wNTExQzE5LjY5NzUgMTcgMTkuNDY1IDE3IDE5IDE3WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE5IDE3VjE1QzE5IDEzLjg5NTQgMTguMTA0NiAxMyAxNyAxM0MxNS44OTU0IDEzIDE1IDEzLjg5NTQgMTUgMTVWMTciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/card-lock - Icon documentation
 */
export function CardLock({
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
      <path d="M9 17H6C4.34315 17 3 15.6569 3 14V6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V9" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 8H21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M10 13L7 13" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M19 17H15C14.535 17 14.3025 17 14.1118 17.0511C13.5941 17.1898 13.1898 17.5941 13.0511 18.1118C13 18.3025 13 18.535 13 19C13 19.465 13 19.6975 13.0511 19.8882C13.1898 20.4059 13.5941 20.8102 14.1118 20.9489C14.3025 21 14.535 21 15 21H19C19.465 21 19.6975 21 19.8882 20.9489C20.4059 20.8102 20.8102 20.4059 20.9489 19.8882C21 19.6975 21 19.465 21 19C21 18.535 21 18.3025 20.9489 18.1118C20.8102 17.5941 20.4059 17.1898 19.8882 17.0511C19.6975 17 19.465 17 19 17Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M19 17V15C19 13.8954 18.1046 13 17 13C15.8954 13 15 13.8954 15 15V17" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
