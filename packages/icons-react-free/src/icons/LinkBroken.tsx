import { IconProps } from "../types";

/**
 * @component
 * @name LinkBroken
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTYuOTQ5NyAxMi43MDcyTDE5LjA3MSAxMC41ODU5QzIwLjYzMzEgOS4wMjM3NyAyMC42MzMxIDYuNDkxMTEgMTkuMDcxIDQuOTI5MDFDMTcuNTA4OSAzLjM2NjkyIDE0Ljk3NjMgMy4zNjY5MiAxMy40MTQyIDQuOTI5MDFMMTEuMjkyOSA3LjA1MDMzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNy4wNTAyMyAxMS4yOTNMNC45Mjg5MSAxMy40MTQzQzMuMzY2ODIgMTQuOTc2NCAzLjM2NjgxIDE3LjUwOSA0LjkyODkxIDE5LjA3MTFDNi40OTEwMSAyMC42MzMyIDkuMDIzNjcgMjAuNjMzMiAxMC41ODU4IDE5LjA3MTFMMTIuNzA3MSAxNi45NDk4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTQuMTIxMyA5Ljg3ODY2TDkuODc4NyAxNC4xMjEzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNS42MzU5OCA1LjYzNjA2TDQuOTI4ODcgNC45Mjg5NiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTMuNTE0OCA5LjE3MTcySDIuMTAwNTkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik05LjE3MTYzIDMuNTE0ODlWMi4xMDA2NyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE4LjM2MzcgMTguMzYzOUwxOS4wNzA4IDE5LjA3MSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE0LjgyODIgMjAuNDg1MkwxNC44MjgyIDIxLjg5OTQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0yMC40ODUyIDE0LjgyODRMMjEuODk5NCAxNC44Mjg0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/link-broken - Icon documentation
 */
export function LinkBroken({
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
      <path d="M16.9497 12.7072L19.071 10.5859C20.6331 9.02377 20.6331 6.49111 19.071 4.92901C17.5089 3.36692 14.9763 3.36692 13.4142 4.92901L11.2929 7.05033" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M7.05023 11.293L4.92891 13.4143C3.36682 14.9764 3.36681 17.509 4.92891 19.0711C6.49101 20.6332 9.02367 20.6332 10.5858 19.0711L12.7071 16.9498" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M14.1213 9.87866L9.8787 14.1213" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M5.63598 5.63606L4.92887 4.92896" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3.5148 9.17172H2.10059" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M9.17163 3.51489V2.10067" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M18.3637 18.3639L19.0708 19.071" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M14.8282 20.4852L14.8282 21.8994" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M20.4852 14.8284L21.8994 14.8284" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
