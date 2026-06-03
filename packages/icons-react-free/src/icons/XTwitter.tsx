import { IconProps } from "../types";

/**
 * @component
 * @name XTwitter
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNOC4xNDgxMiAzLjAzMzA4TDMuNzg2ODcgMy4wMzMxMUwxNS45OTEzIDIwLjk2NzRIMjAuMjk2M0w4LjE0ODEyIDMuMDMzMDhaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEzLjEyOTcgMTAuMzgyM0wxOS4zNzk0IDNNMTAuNjMxNCAxMy4zMzMzTDQuMTQwOTUgMjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/x-twitter - Icon documentation
 */
export function XTwitter({
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
      <path d="M8.14812 3.03308L3.78687 3.03311L15.9913 20.9674H20.2963L8.14812 3.03308Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M13.1297 10.3823L19.3794 3M10.6314 13.3333L4.14095 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
