import { IconProps } from "../types";

/**
 * @component
 * @name Package
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNC41NDMwNyA2LjQzODE1TDEwLjU0MzEgMy4xMDQ4MkMxMS40NDkxIDIuNjAxNDQgMTIuNTUwOSAyLjYwMTQ0IDEzLjQ1NjkgMy4xMDQ4MkwxOS40NTY5IDYuNDM4MTVDMjAuNDA5MyA2Ljk2NzI2IDIxIDcuOTcxMTIgMjEgOS4wNjA2MlYxNS41MzAyQzIxIDE2LjYxOTcgMjAuNDA5MyAxNy42MjM2IDE5LjQ1NjkgMTguMTUyN0wxMy40NTY5IDIxLjQ4NkMxMi41NTA5IDIxLjk4OTQgMTEuNDQ5MSAyMS45ODk0IDEwLjU0MzEgMjEuNDg2TDQuNTQzMDcgMTguMTUyN0MzLjU5MDY4IDE3LjYyMzYgMyAxNi42MTk3IDMgMTUuNTMwMlY5LjA2MDYyQzMgNy45NzExMiAzLjU5MDY4IDYuOTY3MjYgNC41NDMwNyA2LjQzODE1WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTExLjk5OTkgMTIuMjk1NEwyMC41MTY3IDcuNTAwMDRNMTEuOTk5OSAxMi4yOTU0TDMuNDUwNzcgNy40ODQ2Mk0xMS45OTk5IDEyLjI5NTRMMTIgMjEuODEyNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/package - Icon documentation
 */
export function Package({
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
      <path d="M4.54307 6.43815L10.5431 3.10482C11.4491 2.60144 12.5509 2.60144 13.4569 3.10482L19.4569 6.43815C20.4093 6.96726 21 7.97112 21 9.06062V15.5302C21 16.6197 20.4093 17.6236 19.4569 18.1527L13.4569 21.486C12.5509 21.9894 11.4491 21.9894 10.5431 21.486L4.54307 18.1527C3.59068 17.6236 3 16.6197 3 15.5302V9.06062C3 7.97112 3.59068 6.96726 4.54307 6.43815Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M11.9999 12.2954L20.5167 7.50004M11.9999 12.2954L3.45077 7.48462M11.9999 12.2954L12 21.8125" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
