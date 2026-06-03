import { IconProps } from "../types";

/**
 * @component
 * @name DotsTripleHorizontal
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNSAxMkM1IDEyLjU1MjMgNC41NTIyOCAxMyA0IDEzQzMuNDQ3NzIgMTMgMyAxMi41NTIzIDMgMTJDMyAxMS40NDc3IDMuNDQ3NzIgMTEgNCAxMUM0LjU1MjI4IDExIDUgMTEuNDQ3NyA1IDEyWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMyAxMkMxMyAxMi41NTIzIDEyLjU1MjMgMTMgMTIgMTNDMTEuNDQ3NyAxMyAxMSAxMi41NTIzIDExIDEyQzExIDExLjQ0NzcgMTEuNDQ3NyAxMSAxMiAxMUMxMi41NTIzIDExIDEzIDExLjQ0NzcgMTMgMTJaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTIxIDEyQzIxIDEyLjU1MjMgMjAuNTUyMyAxMyAyMCAxM0MxOS40NDc3IDEzIDE5IDEyLjU1MjMgMTkgMTJDMTkgMTEuNDQ3NyAxOS40NDc3IDExIDIwIDExQzIwLjU1MjMgMTEgMjEgMTEuNDQ3NyAyMSAxMloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/dots-triple-horizontal - Icon documentation
 */
export function DotsTripleHorizontal({
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
      <path d="M5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12Z" strokeWidth={strokeWidth} stroke={color}/><path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" strokeWidth={strokeWidth} stroke={color}/><path d="M21 12C21 12.5523 20.5523 13 20 13C19.4477 13 19 12.5523 19 12C19 11.4477 19.4477 11 20 11C20.5523 11 21 11.4477 21 12Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
