import { IconProps } from "../types";

/**
 * @component
 * @name Eyeglasses
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSI3IiBjeT0iMTciIHI9IjMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxjaXJjbGUgY3g9IjE3IiBjeT0iMTciIHI9IjMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMCAxN0gxNCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTQgMTdIMy4xNjU2MUMyLjU1MjczIDE3IDIuMDg0MDUgMTYuNDUzNyAyLjE3NzI0IDE1Ljg0NzlMMy44Njk1NSA0Ljg0Nzk0QzMuOTQ0NiA0LjM2MDExIDQuMzY0MzUgNCA0Ljg1NzkyIDRINiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTIwIDE3SDIwLjgzNDRDMjEuNDQ3MyAxNyAyMS45MTYgMTYuNDUzNyAyMS44MjI4IDE1Ljg0NzlMMjAuMTMwNSA0Ljg0Nzk0QzIwLjA1NTQgNC4zNjAxMSAxOS42MzU3IDQgMTkuMTQyMSA0SDE4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/eyeglasses - Icon documentation
 */
export function Eyeglasses({
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
      <circle cx="7" cy="17" r="3" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><circle cx="17" cy="17" r="3" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M10 17H14" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M4 17H3.16561C2.55273 17 2.08405 16.4537 2.17724 15.8479L3.86955 4.84794C3.9446 4.36011 4.36435 4 4.85792 4H6" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M20 17H20.8344C21.4473 17 21.916 16.4537 21.8228 15.8479L20.1305 4.84794C20.0554 4.36011 19.6357 4 19.1421 4H18" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
