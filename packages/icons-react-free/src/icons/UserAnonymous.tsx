import { IconProps } from "../types";

/**
 * @component
 * @name UserAnonymous
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyAxMkwyMSAxMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTcuODUzNTggMy40MzkyNUw1LjIxOTM3IDExLjM0MTlDNS4xMTE0NSAxMS42NjU3IDUuMzUyNDMgMTIgNS42OTM3MSAxMkgxOC4zMDYzQzE4LjY0NzYgMTIgMTguODg4NiAxMS42NjU3IDE4Ljc4MDYgMTEuMzQxOUwxNi4xNDY0IDMuNDM5MjZDMTYuMDYzOCAzLjE5MTM5IDE1LjgwNDMgMy4wNDg5MyAxNS41NTA4IDMuMTEyM0wxMiA0TDguNDQ5MTkgMy4xMTIzQzguMTk1NzMgMy4wNDg5MyA3LjkzNjIgMy4xOTEzOSA3Ljg1MzU4IDMuNDM5MjVaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PGNpcmNsZSBjeD0iNy41IiBjeT0iMTguNSIgcj0iMi41IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PGNpcmNsZSBjeD0iMTYuNSIgY3k9IjE4LjUiIHI9IjIuNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMy44MTU3IDE4LjE0MjRDMTIuNjIwOCAxNy44NDQzIDExLjY1NTcgMTcuODI4OCAxMC41IDE4LjA3NzUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/user-anonymous - Icon documentation
 */
export function UserAnonymous({
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
      <path d="M3 12L21 12" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M7.85358 3.43925L5.21937 11.3419C5.11145 11.6657 5.35243 12 5.69371 12H18.3063C18.6476 12 18.8886 11.6657 18.7806 11.3419L16.1464 3.43926C16.0638 3.19139 15.8043 3.04893 15.5508 3.1123L12 4L8.44919 3.1123C8.19573 3.04893 7.9362 3.19139 7.85358 3.43925Z" strokeWidth={strokeWidth} stroke={color}/><circle cx="7.5" cy="18.5" r="2.5" strokeWidth={strokeWidth} stroke={color}/><circle cx="16.5" cy="18.5" r="2.5" strokeWidth={strokeWidth} stroke={color}/><path d="M13.8157 18.1424C12.6208 17.8443 11.6557 17.8288 10.5 18.0775" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
