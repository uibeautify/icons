import { IconProps } from "../types";

/**
 * @component
 * @name Library
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyAxOUwzIDYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik03IDE5TDcgNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTExIDE5TDExIDYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNC42MzYxIDcuNjQwMzZDMTQuNDkzMiA3LjEwNjkgMTQuODA5OCA2LjU1ODU2IDE1LjM0MzIgNi40MTU2MkwxNi43OTIxIDYuMDI3MzlDMTcuMzI1NiA1Ljg4NDQ1IDE3Ljg3MzkgNi4yMDEwMyAxOC4wMTY5IDYuNzM0NUwyMC44NjM5IDE3LjM1OTdDMjEuMDA2OCAxNy44OTMxIDIwLjY5MDIgMTguNDQxNSAyMC4xNTY4IDE4LjU4NDRMMTguNzA3OSAxOC45NzI3QzE4LjE3NDQgMTkuMTE1NiAxNy42MjYxIDE4Ljc5OSAxNy40ODMxIDE4LjI2NTVMMTQuNjM2MSA3LjY0MDM2WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/library - Icon documentation
 */
export function Library({
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
      <path d="M3 19L3 6" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M7 19L7 6" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M11 19L11 6" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M14.6361 7.64036C14.4932 7.1069 14.8098 6.55856 15.3432 6.41562L16.7921 6.02739C17.3256 5.88445 17.8739 6.20103 18.0169 6.7345L20.8639 17.3597C21.0068 17.8931 20.6902 18.4415 20.1568 18.5844L18.7079 18.9727C18.1744 19.1156 17.6261 18.799 17.4831 18.2655L14.6361 7.64036Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
