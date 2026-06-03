import { IconProps } from "../types";

/**
 * @component
 * @name HardDrive02
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMy41IDE1TDYuMzI4IDUuMzA0QzYuNTY4OTggNC40Nzc3OCA2LjY4OTQ3IDQuMDY0NjcgNi45MzIyMyAzLjc1ODE5QzcuMTQ2NSAzLjQ4NzY3IDcuNDI3MTQgMy4yNzcxOSA3Ljc0Njg0IDMuMTQ3MjNDOC4xMDkwMyAzIDguNTM5MzUgMyA5LjQgM0gxNC42QzE1LjQ2MDYgMyAxNS44OTEgMyAxNi4yNTMyIDMuMTQ3MjNDMTYuNTcyOSAzLjI3NzE5IDE2Ljg1MzUgMy40ODc2NyAxNy4wNjc4IDMuNzU4MTlDMTcuMzEwNSA0LjA2NDY3IDE3LjQzMSA0LjQ3Nzc4IDE3LjY3MiA1LjMwNEwyMC41IDE1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNyAxN0wxMSAxNyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE2IDE3TDE3IDE3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIzIiB5PSIxMyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjgiIHJ4PSI0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/hard-drive-02 - Icon documentation
 */
export function HardDrive02({
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
      <path d="M3.5 15L6.328 5.304C6.56898 4.47778 6.68947 4.06467 6.93223 3.75819C7.1465 3.48767 7.42714 3.27719 7.74684 3.14723C8.10903 3 8.53935 3 9.4 3H14.6C15.4606 3 15.891 3 16.2532 3.14723C16.5729 3.27719 16.8535 3.48767 17.0678 3.75819C17.3105 4.06467 17.431 4.47778 17.672 5.304L20.5 15" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M7 17L11 17" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M16 17L17 17" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><rect x="3" y="13" width="18" height="8" rx="4" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
