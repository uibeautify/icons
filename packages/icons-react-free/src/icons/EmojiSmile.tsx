import { IconProps } from "../types";

/**
 * @component
 * @name EmojiSmile
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTkgMTQuMDIxN0MxMS4zOTE5IDE1LjMyNTggMTIuNzA1NyAxNS4zMjY0IDE1IDE0LjAyMTciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik05LjE0NDUzIDlIOC44NDU3Nk05LjUwMDExIDlDOS41MDAxMSA5LjI3NjE0IDkuMjc2MjUgOS41IDkuMDAwMTEgOS41QzguNzIzOTYgOS41IDguNTAwMTEgOS4yNzYxNCA4LjUwMDExIDlDOC41MDAxMSA4LjcyMzg2IDguNzIzOTYgOC41IDkuMDAwMTEgOC41QzkuMjc2MjUgOC41IDkuNTAwMTEgOC43MjM4NiA5LjUwMDExIDlaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTUuMTQ0NSA5SDE0Ljg0NThNMTUuNTAwMSA5QzE1LjUwMDEgOS4yNzYxNCAxNS4yNzYyIDkuNSAxNS4wMDAxIDkuNUMxNC43MjQgOS41IDE0LjUwMDEgOS4yNzYxNCAxNC41MDAxIDlDMTQuNTAwMSA4LjcyMzg2IDE0LjcyNCA4LjUgMTUuMDAwMSA4LjVDMTUuMjc2MiA4LjUgMTUuNTAwMSA4LjcyMzg2IDE1LjUwMDEgOVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/emoji-smile - Icon documentation
 */
export function EmojiSmile({
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
      <circle cx="12" cy="12" r="9" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M9 14.0217C11.3919 15.3258 12.7057 15.3264 15 14.0217" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M9.14453 9H8.84576M9.50011 9C9.50011 9.27614 9.27625 9.5 9.00011 9.5C8.72396 9.5 8.50011 9.27614 8.50011 9C8.50011 8.72386 8.72396 8.5 9.00011 8.5C9.27625 8.5 9.50011 8.72386 9.50011 9Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M15.1445 9H14.8458M15.5001 9C15.5001 9.27614 15.2762 9.5 15.0001 9.5C14.724 9.5 14.5001 9.27614 14.5001 9C14.5001 8.72386 14.724 8.5 15.0001 8.5C15.2762 8.5 15.5001 8.72386 15.5001 9Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
