import { IconProps } from "../types";

/**
 * @component
 * @name EyeDropper
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTUuOTI3NyAzLjk0OTc1QzE3LjA5OTIgMi43NzgxOCAxOC45OTg3IDIuNzc4MTggMjAuMTcwMyAzLjk0OTc1QzIxLjM0MTkgNS4xMjEzMiAyMS4zNDE5IDcuMDIwODIgMjAuMTcwMyA4LjE5MjM5TDE1LjkyNzcgMTIuNDM1TDExLjY4NSA4LjE5MjM5TDE1LjkyNzcgMy45NDk3NVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMi4zOTIxIDguODk5NDhMMTUuMjIwNiAxMS43Mjc5TDcuMDY5MTMgMTkuODc5M0M2Ljg0OTU4IDIwLjA5ODkgNi41ODE5MyAyMC4yNjQzIDYuMjg3MzcgMjAuMzYyNUw0LjM5MDAxIDIwLjk5NDlDMy42MDgyNSAyMS4yNTU1IDIuODY0NTEgMjAuNTExOCAzLjEyNTEgMTkuNzNMMy43NTc1NSAxNy44MzI3QzMuODU1NzQgMTcuNTM4MSA0LjAyMTE2IDE3LjI3MDUgNC4yNDA3IDE3LjA1MDlMMTIuMzkyMSA4Ljg5OTQ4WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEwLjI3MDggNi43NzgyTDE3LjM0MTkgMTMuODQ5MyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/eye-dropper - Icon documentation
 */
export function EyeDropper({
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
      <path d="M15.9277 3.94975C17.0992 2.77818 18.9987 2.77818 20.1703 3.94975C21.3419 5.12132 21.3419 7.02082 20.1703 8.19239L15.9277 12.435L11.685 8.19239L15.9277 3.94975Z" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" stroke={color}/><path d="M12.3921 8.89948L15.2206 11.7279L7.06913 19.8793C6.84958 20.0989 6.58193 20.2643 6.28737 20.3625L4.39001 20.9949C3.60825 21.2555 2.86451 20.5118 3.1251 19.73L3.75755 17.8327C3.85574 17.5381 4.02116 17.2705 4.2407 17.0509L12.3921 8.89948Z" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" stroke={color}/><path d="M10.2708 6.7782L17.3419 13.8493" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
