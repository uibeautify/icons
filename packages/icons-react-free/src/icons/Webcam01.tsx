import { IconProps } from "../types";

/**
 * @component
 * @name Webcam01
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTkgMTBDMTkgMTMuODY2IDE1Ljg2NiAxNyAxMiAxN0M4LjEzNDAxIDE3IDUgMTMuODY2IDUgMTBDNSA2LjEzNDAxIDguMTM0MDEgMyAxMiAzQzE1Ljg2NiAzIDE5IDYuMTM0MDEgMTkgMTBaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE0IDEwQzE0IDExLjEwNDYgMTMuMTA0NiAxMiAxMiAxMkMxMC44OTU0IDEyIDEwIDExLjEwNDYgMTAgMTBDMTAgOC44OTU0MyAxMC44OTU0IDggMTIgOEMxMy4xMDQ2IDggMTQgOC44OTU0MyAxNCAxMFoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNyAyMUM3IDE4Ljc5MDkgOC43OTA4NiAxNyAxMSAxN0gxM0MxNS4yMDkxIDE3IDE3IDE4Ljc5MDkgMTcgMjFIN1oiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/webcam-01 - Icon documentation
 */
export function Webcam01({
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
      <path d="M19 10C19 13.866 15.866 17 12 17C8.13401 17 5 13.866 5 10C5 6.13401 8.13401 3 12 3C15.866 3 19 6.13401 19 10Z" strokeWidth={strokeWidth} stroke={color}/><path d="M14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10Z" strokeWidth={strokeWidth} stroke={color}/><path d="M7 21C7 18.7909 8.79086 17 11 17H13C15.2091 17 17 18.7909 17 21H7Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
