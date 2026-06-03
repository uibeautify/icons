import { IconProps } from "../types";

/**
 * @component
 * @name VolumeOff
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTYgMTZWMTguNDExMUMxNiAxOS4yNjg0IDE2IDE5LjY5NyAxNS44MTk1IDE5Ljk1NTFDMTUuNjYxOCAyMC4xODA1IDE1LjQxODMgMjAuMzMxIDE1LjE0NjIgMjAuMzcxMkMxNC44MzQ1IDIwLjQxNzMgMTQuNDUxMiAyMC4yMjU2IDEzLjY4NDUgMTkuODQyMkw2LjY4MzI4IDE2LjM0MTZDNi4yMjc0IDE2LjExMzcgNS45OTk0NSAxNS45OTk3IDUuODAxNzIgMTUuODY5N0M0LjgxNjE1IDE1LjIyMTMgNC4xNjcwMyAxNC4xNzEgNC4wMjc5MSAxMi45OTk2QzQgMTIuNzY0NSA0IDEyLjUwOTcgNCAxMkM0IDExLjQ5MDMgNCAxMS4yMzU1IDQuMDI3OTEgMTEuMDAwNEM0LjE2NzAzIDkuODI4OTcgNC44MTYxNSA4Ljc3ODY3IDUuODAxNzIgOC4xMzAzNUM1Ljk5OTQ1IDguMDAwMjcgNi4yMjc0IDcuODg2MyA2LjY4MzI4IDcuNjU4MzZMNyA3LjVNMTAuNjQzOCA1LjY3ODA4TDEzLjY4NDUgNC4xNTc3N0MxNC40NTEyIDMuNzc0NDEgMTQuODM0NSAzLjU4MjczIDE1LjE0NjIgMy42Mjg3N0MxNS40MTgzIDMuNjY4OTggMTUuNjYxOCAzLjgxOTQ5IDE1LjgxOTUgNC4wNDQ4OUMxNiA0LjMwMzAzIDE2IDQuNzMxNjQgMTYgNS41ODg4NVYxMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTQgNEwyMCAyMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/volume-off - Icon documentation
 */
export function VolumeOff({
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
      <path d="M16 16V18.4111C16 19.2684 16 19.697 15.8195 19.9551C15.6618 20.1805 15.4183 20.331 15.1462 20.3712C14.8345 20.4173 14.4512 20.2256 13.6845 19.8422L6.68328 16.3416C6.2274 16.1137 5.99945 15.9997 5.80172 15.8697C4.81615 15.2213 4.16703 14.171 4.02791 12.9996C4 12.7645 4 12.5097 4 12C4 11.4903 4 11.2355 4.02791 11.0004C4.16703 9.82897 4.81615 8.77867 5.80172 8.13035C5.99945 8.00027 6.2274 7.8863 6.68328 7.65836L7 7.5M10.6438 5.67808L13.6845 4.15777C14.4512 3.77441 14.8345 3.58273 15.1462 3.62877C15.4183 3.66898 15.6618 3.81949 15.8195 4.04489C16 4.30303 16 4.73164 16 5.58885V11" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M4 4L20 20" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
