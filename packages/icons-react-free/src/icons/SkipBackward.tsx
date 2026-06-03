import { IconProps } from "../types";

/**
 * @component
 * @name SkipBackward
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTEuNjMxNCAxMC44Njg2TDE0LjI2ODYgOC4yMzEzN0wxNC4yNjg2IDguMjMxMzdDMTUuMTI1NCA3LjM3NDYyIDE1LjU1MzggNi45NDYyNCAxNS45MjE1IDYuOTE3M0MxNi4yNDA3IDYuODkyMTggMTYuNTUyNSA3LjAyMTM2IDE2Ljc2MDQgNy4yNjQ3N0MxNyA3LjU0NTI5IDE3IDguMTUxMTEgMTcgOS4zNjI3NEwxNyAxNC42MzczQzE3IDE1Ljg0ODkgMTcgMTYuNDU0NyAxNi43NjA0IDE2LjczNTJDMTYuNTUyNSAxNi45Nzg2IDE2LjI0MDcgMTcuMTA3OCAxNS45MjE1IDE3LjA4MjdDMTUuNTUzOCAxNy4wNTM4IDE1LjEyNTQgMTYuNjI1NCAxNC4yNjg2IDE1Ljc2ODZMMTEuNjMxNCAxMy4xMzE0QzExLjIzNTQgMTIuNzM1NCAxMS4wMzczIDEyLjUzNzMgMTAuOTYzMiAxMi4zMDlDMTAuODk3OSAxMi4xMDgyIDEwLjg5NzkgMTEuODkxOCAxMC45NjMyIDExLjY5MUMxMS4wMzczIDExLjQ2MjcgMTEuMjM1NCAxMS4yNjQ2IDExLjYzMTQgMTAuODY4NloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik03IDdMNyAxNyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/skip-backward - Icon documentation
 */
export function SkipBackward({
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
      <path d="M11.6314 10.8686L14.2686 8.23137L14.2686 8.23137C15.1254 7.37462 15.5538 6.94624 15.9215 6.9173C16.2407 6.89218 16.5525 7.02136 16.7604 7.26477C17 7.54529 17 8.15111 17 9.36274L17 14.6373C17 15.8489 17 16.4547 16.7604 16.7352C16.5525 16.9786 16.2407 17.1078 15.9215 17.0827C15.5538 17.0538 15.1254 16.6254 14.2686 15.7686L11.6314 13.1314C11.2354 12.7354 11.0373 12.5373 10.9632 12.309C10.8979 12.1082 10.8979 11.8918 10.9632 11.691C11.0373 11.4627 11.2354 11.2646 11.6314 10.8686Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M7 7L7 17" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
