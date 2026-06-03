import { IconProps } from "../types";

/**
 * @component
 * @name BluetoothPairing
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyA5LjMzMzMyTDEzIDE2TDcuMDAwMDEgMjFWM0wxMyA4TDMgMTQuNjY2NyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE5LjA5NjIgMTdDMjAuMjczOSAxNS43MjQ2IDIxIDEzLjk3NzggMjEgMTIuMDUxQzIxIDEwLjA3MjMgMjAuMjM0MiA4LjI4MzQ4IDE5IDciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNiA5LjVDMTYuNjEzNyAxMC4xMTQxIDE3IDExLjAwNjYgMTcgMTJDMTcgMTIuOTkzNCAxNi42MTM3IDEzLjg4NTkgMTYgMTQuNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/bluetooth-pairing - Icon documentation
 */
export function BluetoothPairing({
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
      <path d="M3 9.33332L13 16L7.00001 21V3L13 8L3 14.6667" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M19.0962 17C20.2739 15.7246 21 13.9778 21 12.051C21 10.0723 20.2342 8.28348 19 7" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M16 9.5C16.6137 10.1141 17 11.0066 17 12C17 12.9934 16.6137 13.8859 16 14.5" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
