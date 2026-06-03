import { IconProps } from "../types";

/**
 * @component
 * @name CoinsJar
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNCAxMUwyMCAxMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTYuODkzOTIgMjFIMTcuMTA2MUMxOS4yMTQ0IDIxIDIxLjQ2MTcgMTkuNTQ5OSAyMC43ODEgMTcuNTU0NUMyMC41OTE5IDE3LjAwMDEgMjAuMjg1MyAxNi41MzMzIDE5Ljg4MDkgMTYuMTg5QzE5LjAzOTggMTUuNDczIDE4LjAzNCAxNC42NDMgMTguMDM0IDEzLjUzODVWMTFINS45NjZWMTMuNTM4NUM1Ljk2NiAxNC42NDMgNC45NjAxMyAxNS40NzMgNC4xMTkwOSAxNi4xODlDMy43MTQ2OCAxNi41MzMzIDMuNDA4MDkgMTcuMDAwMSAzLjIxODk4IDE3LjU1NDVDMi41MzgzMSAxOS41NDk5IDQuNzg1NiAyMSA2Ljg5MzkyIDIxWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PGNpcmNsZSBjeD0iOCIgY3k9IjUiIHI9IjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNyA4QzE3IDYuODk1NDMgMTYuMTA0NiA2IDE1IDZDMTMuODk1NCA2IDEzIDYuODk1NDMgMTMgOCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/coins-jar - Icon documentation
 */
export function CoinsJar({
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
      <path d="M4 11L20 11" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M6.89392 21H17.1061C19.2144 21 21.4617 19.5499 20.781 17.5545C20.5919 17.0001 20.2853 16.5333 19.8809 16.189C19.0398 15.473 18.034 14.643 18.034 13.5385V11H5.966V13.5385C5.966 14.643 4.96013 15.473 4.11909 16.189C3.71468 16.5333 3.40809 17.0001 3.21898 17.5545C2.53831 19.5499 4.7856 21 6.89392 21Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><circle cx="8" cy="5" r="2" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M17 8C17 6.89543 16.1046 6 15 6C13.8954 6 13 6.89543 13 8" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
