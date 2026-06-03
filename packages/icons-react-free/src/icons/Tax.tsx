import { IconProps } from "../types";

/**
 * @component
 * @name Tax
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTQgMTNMMTAgMTYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik05IDEySDkuMDAwMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE1IDE3SDE1LjAwMDEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik04LjE0MDk0IDhIMTUuODU5MUMxNy4yODA4IDggMTguNTA3MyA4Ljk5NzkzIDE4Ljc5NjQgMTAuMzg5OUwyMC4yNTAyIDE3LjM4OTlDMjAuNjM3IDE5LjI1MjQgMTkuMjE1MSAyMSAxNy4zMTI5IDIxSDYuNjg3MUM0Ljc4NDkxIDIxIDMuMzYyOTcgMTkuMjUyNCAzLjc0OTc4IDE3LjM4OTlMNS4yMDM2MyAxMC4zODk5QzUuNDkyNzQgOC45OTc5MyA2LjcxOTIyIDggOC4xNDA5NCA4WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE0LjUgNS41QzE0LjUgNi44ODA3MSAxMy4zODA3IDggMTIgOEMxMC42MTkzIDggOS41IDYuODgwNzEgOS41IDUuNUM5LjUgNC4xMTkyOSAxMC42MTkzIDMgMTIgM0MxMy4zODA3IDMgMTQuNSA0LjExOTI5IDE0LjUgNS41WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/tax - Icon documentation
 */
export function Tax({
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
      <path d="M14 13L10 16" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M9 12H9.0001" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M15 17H15.0001" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M8.14094 8H15.8591C17.2808 8 18.5073 8.99793 18.7964 10.3899L20.2502 17.3899C20.637 19.2524 19.2151 21 17.3129 21H6.6871C4.78491 21 3.36297 19.2524 3.74978 17.3899L5.20363 10.3899C5.49274 8.99793 6.71922 8 8.14094 8Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M14.5 5.5C14.5 6.88071 13.3807 8 12 8C10.6193 8 9.5 6.88071 9.5 5.5C9.5 4.11929 10.6193 3 12 3C13.3807 3 14.5 4.11929 14.5 5.5Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
