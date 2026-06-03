import { IconProps } from "../types";

/**
 * @component
 * @name EmojiSad
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTkgMTVDMTEuMzkxOSAxMy42OTU5IDEyLjcwNTcgMTMuNjk1MiAxNSAxNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTkuMTQ0NTMgOUg4Ljg0NTc2TTkuNTAwMTEgOUM5LjUwMDExIDkuMjc2MTQgOS4yNzYyNSA5LjUgOS4wMDAxMSA5LjVDOC43MjM5NiA5LjUgOC41MDAxMSA5LjI3NjE0IDguNTAwMTEgOUM4LjUwMDExIDguNzIzODYgOC43MjM5NiA4LjUgOS4wMDAxMSA4LjVDOS4yNzYyNSA4LjUgOS41MDAxMSA4LjcyMzg2IDkuNTAwMTEgOVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNS4xNDQ1IDlIMTQuODQ1OE0xNS41MDAxIDlDMTUuNTAwMSA5LjI3NjE0IDE1LjI3NjIgOS41IDE1LjAwMDEgOS41QzE0LjcyNCA5LjUgMTQuNTAwMSA5LjI3NjE0IDE0LjUwMDEgOUMxNC41MDAxIDguNzIzODYgMTQuNzI0IDguNSAxNS4wMDAxIDguNUMxNS4yNzYyIDguNSAxNS41MDAxIDguNzIzODYgMTUuNTAwMSA5WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/emoji-sad - Icon documentation
 */
export function EmojiSad({
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
      <circle cx="12" cy="12" r="9" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M9 15C11.3919 13.6959 12.7057 13.6952 15 15" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M9.14453 9H8.84576M9.50011 9C9.50011 9.27614 9.27625 9.5 9.00011 9.5C8.72396 9.5 8.50011 9.27614 8.50011 9C8.50011 8.72386 8.72396 8.5 9.00011 8.5C9.27625 8.5 9.50011 8.72386 9.50011 9Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M15.1445 9H14.8458M15.5001 9C15.5001 9.27614 15.2762 9.5 15.0001 9.5C14.724 9.5 14.5001 9.27614 14.5001 9C14.5001 8.72386 14.724 8.5 15.0001 8.5C15.2762 8.5 15.5001 8.72386 15.5001 9Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
