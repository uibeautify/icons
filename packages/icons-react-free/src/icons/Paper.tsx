import { IconProps } from "../types";

/**
 * @component
 * @name Paper
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNyAxNlY2QzcgNC4zNDMxNSA4LjM0MzE1IDMgMTAgM0gxOEMxOS42NTY5IDMgMjEgNC4zNDMxNSAyMSA2VjE4QzIxIDE5LjY1NjkgMTkuNjU2OSAyMSAxOCAyMUgxMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTExIDdMMTcgNyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTExIDExSDE0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTQuNSAxOC41QzE0LjUgMTkuODgwNyAxNS42MTkzIDIxIDE3IDIxSDUuNUM0LjExOTI5IDIxIDMgMTkuODgwNyAzIDE4LjVDMyAxNy4xMTkzIDQuMTE5MjkgMTYgNS41IDE2SDE3QzE1LjYxOTMgMTYgMTQuNSAxNy4xMTkzIDE0LjUgMTguNVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/paper - Icon documentation
 */
export function Paper({
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
      <path d="M7 16V6C7 4.34315 8.34315 3 10 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H10" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M11 7L17 7" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M11 11H14" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M14.5 18.5C14.5 19.8807 15.6193 21 17 21H5.5C4.11929 21 3 19.8807 3 18.5C3 17.1193 4.11929 16 5.5 16H17C15.6193 16 14.5 17.1193 14.5 18.5Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
