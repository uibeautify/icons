import { IconProps } from "../types";

/**
 * @component
 * @name Atom
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48ZWxsaXBzZSBjeD0iMTIuMDIzIiBjeT0iMTEuOTc3IiByeD0iNSIgcnk9IjExLjY4NDkiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDEyLjAyMyAxMS45NzcpIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PGVsbGlwc2UgY3g9IjUiIGN5PSIxMS42ODQ5IiByeD0iNSIgcnk9IjExLjY4NDkiIHRyYW5zZm9ybT0ibWF0cml4KC0wLjcwNzEwNyAwLjcwNzEwNyAwLjcwNzEwNyAwLjcwNzEwNyA3LjI5NjEgMC4xNzg5ODYpIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEzIDEyQzEzIDEyLjU1MjMgMTIuNTUyMyAxMyAxMiAxM0MxMS40NDc3IDEzIDExIDEyLjU1MjMgMTEgMTJDMTEgMTEuNDQ3NyAxMS40NDc3IDExIDEyIDExQzEyLjU1MjMgMTEgMTMgMTEuNDQ3NyAxMyAxMloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/atom - Icon documentation
 */
export function Atom({
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
      <ellipse cx="12.023" cy="11.977" rx="5" ry="11.6849" transform="rotate(45 12.023 11.977)" strokeWidth={strokeWidth} stroke={color}/><ellipse cx="5" cy="11.6849" rx="5" ry="11.6849" transform="matrix(-0.707107 0.707107 0.707107 0.707107 7.2961 0.178986)" strokeWidth={strokeWidth} stroke={color}/><path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
