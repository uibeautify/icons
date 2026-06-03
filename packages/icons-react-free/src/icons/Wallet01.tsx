import { IconProps } from "../types";

/**
 * @component
 * @name Wallet01
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyA3SDE4QzE5LjY1NjkgNyAyMSA4LjM0MzE1IDIxIDEwVjE4QzIxIDE5LjY1NjkgMTkuNjU2OSAyMSAxOCAyMUg2QzQuMzQzMTUgMjEgMyAxOS42NTY5IDMgMThMMyA3Wk0zIDdWNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE2IDNINUMzLjg5NTQzIDMgMyAzLjg5NTQzIDMgNUMzIDYuMTA0NTcgMy44OTU0MyA3IDUgN0gxOCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE3IDE0QzE3IDE0LjU1MjMgMTYuNTUyMyAxNSAxNiAxNUMxNS40NDc3IDE1IDE1IDE0LjU1MjMgMTUgMTRDMTUgMTMuNDQ3NyAxNS40NDc3IDEzIDE2IDEzQzE2LjU1MjMgMTMgMTcgMTMuNDQ3NyAxNyAxNFoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/wallet-01 - Icon documentation
 */
export function Wallet01({
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
      <path d="M3 7H18C19.6569 7 21 8.34315 21 10V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18L3 7ZM3 7V5" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M16 3H5C3.89543 3 3 3.89543 3 5C3 6.10457 3.89543 7 5 7H18" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M17 14C17 14.5523 16.5523 15 16 15C15.4477 15 15 14.5523 15 14C15 13.4477 15.4477 13 16 13C16.5523 13 17 13.4477 17 14Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
