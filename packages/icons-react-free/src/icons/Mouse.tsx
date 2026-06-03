import { IconProps } from "../types";

/**
 * @component
 * @name Mouse
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNiAxMUM2IDcuNjg2MjkgOC42ODYyOSA1IDEyIDVDMTUuMzEzNyA1IDE4IDcuNjg2MjkgMTggMTFWMTVDMTggMTguMzEzNyAxNS4zMTM3IDIxIDEyIDIxQzguNjg2MjkgMjEgNiAxOC4zMTM3IDYgMTVWMTFaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTYgMTJIMTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik02IDNMMTEgM0MxMS41NTIzIDMgMTIgMy40NDc3MiAxMiA0TDEyIDEyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/mouse - Icon documentation
 */
export function Mouse({
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
      <path d="M6 11C6 7.68629 8.68629 5 12 5C15.3137 5 18 7.68629 18 11V15C18 18.3137 15.3137 21 12 21C8.68629 21 6 18.3137 6 15V11Z" strokeWidth={strokeWidth} stroke={color}/><path d="M6 12H18" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M6 3L11 3C11.5523 3 12 3.44772 12 4L12 12" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
