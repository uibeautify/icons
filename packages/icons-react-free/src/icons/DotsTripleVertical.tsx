import { IconProps } from "../types";

/**
 * @component
 * @name DotsTripleVertical
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTMgNEMxMyA0LjU1MjI4IDEyLjU1MjMgNSAxMiA1QzExLjQ0NzcgNSAxMSA0LjU1MjI4IDExIDRDMTEgMy40NDc3MiAxMS40NDc3IDMgMTIgM0MxMi41NTIzIDMgMTMgMy40NDc3MiAxMyA0WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMyAxMkMxMyAxMi41NTIzIDEyLjU1MjMgMTMgMTIgMTNDMTEuNDQ3NyAxMyAxMSAxMi41NTIzIDExIDEyQzExIDExLjQ0NzcgMTEuNDQ3NyAxMSAxMiAxMUMxMi41NTIzIDExIDEzIDExLjQ0NzcgMTMgMTJaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEzIDIwQzEzIDIwLjU1MjMgMTIuNTUyMyAyMSAxMiAyMUMxMS40NDc3IDIxIDExIDIwLjU1MjMgMTEgMjBDMTEgMTkuNDQ3NyAxMS40NDc3IDE5IDEyIDE5QzEyLjU1MjMgMTkgMTMgMTkuNDQ3NyAxMyAyMFoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/dots-triple-vertical - Icon documentation
 */
export function DotsTripleVertical({
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
      <path d="M13 4C13 4.55228 12.5523 5 12 5C11.4477 5 11 4.55228 11 4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4Z" strokeWidth={strokeWidth} stroke={color}/><path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" strokeWidth={strokeWidth} stroke={color}/><path d="M13 20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20C11 19.4477 11.4477 19 12 19C12.5523 19 13 19.4477 13 20Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
