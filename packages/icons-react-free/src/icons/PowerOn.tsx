import { IconProps } from "../types";

/**
 * @component
 * @name PowerOn
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNyA2Ljc1NDY0QzUuMTcxMDggOC4yMjA3NiA0IDEwLjQ3MzYgNCAxM0M0IDE3LjQxODMgNy41ODE3MiAyMSAxMiAyMUMxNi40MTgzIDIxIDIwIDE3LjQxODMgMjAgMTNDMjAgMTAuNDczNiAxOC44Mjg5IDguMjIwNzYgMTcgNi43NTQ2NCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEyIDNMMTIgMTUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/power-on - Icon documentation
 */
export function PowerOn({
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
      <path d="M7 6.75464C5.17108 8.22076 4 10.4736 4 13C4 17.4183 7.58172 21 12 21C16.4183 21 20 17.4183 20 13C20 10.4736 18.8289 8.22076 17 6.75464" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 3L12 15" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
