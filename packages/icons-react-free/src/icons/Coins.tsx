import { IconProps } from "../types";

/**
 * @component
 * @name Coins
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyA5Ljc1QzMgMTAuOTkyNiA1LjIxNjE5IDEyIDcuOTUgMTJDOS4xNDY2NyAxMiAxMC4yNDQyIDExLjgwNyAxMS4xIDExLjQ4NTdNMyA5Ljc1VjEzLjM1TTMgOS43NVY1LjdNMyAxMy4zNUMzIDE0LjU5MjYgNS4yMTYxOSAxNS42IDcuOTUgMTUuNkM5LjE0NjY3IDE1LjYgMTAuMjQ0MiAxNS40MDcgMTEuMSAxNS4wODU3TTMgMTMuMzVWMTYuOTVDMyAxOC4xOTI2IDUuMjE2MTkgMTkuMiA3Ljk1IDE5LjJDOS4xNDY2NyAxOS4yIDEwLjI0NDIgMTkuMDA3IDExLjEgMTguNjg1N00xMi45IDUuN0MxMi45IDcuMTkxMTcgMTAuNjgzOCA4LjQgNy45NSA4LjRDNS4yMTYxOSA4LjQgMyA3LjE5MTE3IDMgNS43TTEyLjkgNS43QzEyLjkgNC4yMDg4MyAxMC42ODM4IDMgNy45NSAzQzUuMjE2MTkgMyAzIDQuMjA4ODMgMyA1LjdNMTIuOSA1LjdWOC44NSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTIxIDE1LjE1QzIxIDE2LjM5MjcgMTguNzgzOCAxNy40IDE2LjA1IDE3LjRDMTMuMzE2MiAxNy40IDExLjEgMTYuMzkyNyAxMS4xIDE1LjE1TTIxIDE1LjE1VjE4Ljc1QzIxIDE5Ljk5MjcgMTguNzgzOCAyMSAxNi4wNSAyMUMxMy4zMTYyIDIxIDExLjEgMTkuOTkyNyAxMS4xIDE4Ljc1VjE1LjE1TTIxIDE1LjE1VjExLjFNMTEuMSAxNS4xNVYxMS4xTTIxIDExLjFDMjEgMTIuNTkxMiAxOC43ODM4IDEzLjggMTYuMDUgMTMuOEMxMy4zMTYyIDEzLjggMTEuMSAxMi41OTEyIDExLjEgMTEuMU0yMSAxMS4xQzIxIDkuNjA4ODYgMTguNzgzOCA4LjQwMDAyIDE2LjA1IDguNDAwMDJDMTMuMzE2MiA4LjQwMDAyIDExLjEgOS42MDg4NiAxMS4xIDExLjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/coins - Icon documentation
 */
export function Coins({
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
      <path d="M3 9.75C3 10.9926 5.21619 12 7.95 12C9.14667 12 10.2442 11.807 11.1 11.4857M3 9.75V13.35M3 9.75V5.7M3 13.35C3 14.5926 5.21619 15.6 7.95 15.6C9.14667 15.6 10.2442 15.407 11.1 15.0857M3 13.35V16.95C3 18.1926 5.21619 19.2 7.95 19.2C9.14667 19.2 10.2442 19.007 11.1 18.6857M12.9 5.7C12.9 7.19117 10.6838 8.4 7.95 8.4C5.21619 8.4 3 7.19117 3 5.7M12.9 5.7C12.9 4.20883 10.6838 3 7.95 3C5.21619 3 3 4.20883 3 5.7M12.9 5.7V8.85" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M21 15.15C21 16.3927 18.7838 17.4 16.05 17.4C13.3162 17.4 11.1 16.3927 11.1 15.15M21 15.15V18.75C21 19.9927 18.7838 21 16.05 21C13.3162 21 11.1 19.9927 11.1 18.75V15.15M21 15.15V11.1M11.1 15.15V11.1M21 11.1C21 12.5912 18.7838 13.8 16.05 13.8C13.3162 13.8 11.1 12.5912 11.1 11.1M21 11.1C21 9.60886 18.7838 8.40002 16.05 8.40002C13.3162 8.40002 11.1 9.60886 11.1 11.1" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
