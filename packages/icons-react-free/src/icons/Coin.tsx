import { IconProps } from "../types";

/**
 * @component
 * @name Coin
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMjEgMTBDMjEgMTIuNzYxNCAxNi45NzA2IDE1IDEyIDE1QzcuMDI5NDQgMTUgMyAxMi43NjE0IDMgMTBNMjEgMTBDMjEgNy4yMzg1OCAxNi45NzA2IDUgMTIgNUM3LjAyOTQ0IDUgMyA3LjIzODU4IDMgMTBNMjEgMTBWMTRDMjEgMTYuNzYxNCAxNi45NzA2IDE5IDEyIDE5QzcuMDI5NDQgMTkgMyAxNi43NjE0IDMgMTRWMTAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/coin - Icon documentation
 */
export function Coin({
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
      <path d="M21 10C21 12.7614 16.9706 15 12 15C7.02944 15 3 12.7614 3 10M21 10C21 7.23858 16.9706 5 12 5C7.02944 5 3 7.23858 3 10M21 10V14C21 16.7614 16.9706 19 12 19C7.02944 19 3 16.7614 3 14V10" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
