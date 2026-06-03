import { IconProps } from "../types";

/**
 * @component
 * @name Calculator
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTYgM0g4QzYuMzQzMTUgMyA1IDQuMzQzMTUgNSA2VjE4QzUgMTkuNjU2OSA2LjM0MzE1IDIxIDggMjFIMTZDMTcuNjU2OSAyMSAxOSAxOS42NTY5IDE5IDE4VjZDMTkgNC4zNDMxNSAxNy42NTY5IDMgMTYgM1oiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOSAxNEg5LjAwMDEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik05IDE3SDkuMDAwMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEyIDE0SDEyLjAwMDEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNSAxNEgxNS4wMDAxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTIgMTdIMTIuMDAwMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE1IDE3SDE1LjAwMDEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjgiIHk9IjYiIHdpZHRoPSI4IiBoZWlnaHQ9IjQiIHJ4PSIxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/calculator - Icon documentation
 */
export function Calculator({
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
      <path d="M16 3H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V6C19 4.34315 17.6569 3 16 3Z" strokeWidth={strokeWidth} stroke={color}/><path d="M9 14H9.0001" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M9 17H9.0001" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 14H12.0001" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M15 14H15.0001" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 17H12.0001" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M15 17H15.0001" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><rect x="8" y="6" width="8" height="4" rx="1" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
