import { IconProps } from "../types";

/**
 * @component
 * @name CloudOff
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTEgNi4wODUzNUMxMS4zMjUyIDYuMDI5MjIgMTEuNjU5MyA2IDEyIDZDMTQuOTgxOCA2IDE3LjQ1NTUgOC4yMzc4NSAxNy45MjEyIDExLjE3MDJDMTkuNjU1NiAxMS4zODQyIDIxIDEyLjkwMzMgMjEgMTQuNzQ1NUMyMSAxNS4xNDE4IDIwLjkzNzggMTUuNTIzMSAyMC44MjI4IDE1Ljg3OTdNNy41IDguMDg5OTJDNi45ODM1OCA4LjY5MTkyIDYuNTc5NDkgOS4zOTgzNSA2LjMyMTQ4IDEwLjE3NDVDNC40MzU1MSAxMC41MDYgMyAxMi4xOTYxIDMgMTQuMjMxQzMgMTUuMTY5OCAzLjMwNTUyIDE2LjExMjcgMy44MTk4NCAxNi44NjQ3QzQuNDI5NyAxNy43NTYzIDUuNTcwMiAxOCA2LjY1MDQyIDE4SDE3LjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0zIDNMMjEgMjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/cloud-off - Icon documentation
 */
export function CloudOff({
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
      <path d="M11 6.08535C11.3252 6.02922 11.6593 6 12 6C14.9818 6 17.4555 8.23785 17.9212 11.1702C19.6556 11.3842 21 12.9033 21 14.7455C21 15.1418 20.9378 15.5231 20.8228 15.8797M7.5 8.08992C6.98358 8.69192 6.57949 9.39835 6.32148 10.1745C4.43551 10.506 3 12.1961 3 14.231C3 15.1698 3.30552 16.1127 3.81984 16.8647C4.4297 17.7563 5.5702 18 6.65042 18H17.5" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 3L21 21" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
