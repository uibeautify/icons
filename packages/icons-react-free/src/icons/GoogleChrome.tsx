import { IconProps } from "../types";

/**
 * @component
 * @name GoogleChrome
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNC44ODkgMTQuNzY3QzE0LjE2MDkgMTUuNTI2OSAxMy4xMzU5IDE2IDEyLjAwMDQgMTZDMTAuODY1IDE2IDkuODM5OTkgMTUuNTI2OSA5LjExMTkgMTQuNzY3QzguNDIzNDYgMTQuMDQ4NSA4LjAwMDQ1IDEzLjA3MzcgOC4wMDA0NSAxMkM4LjAwMDQ1IDkuNzkwODYgOS43OTEzMSA4IDEyLjAwMDQgOE0xMi4wMDA0IDhDMTQuMjA5NiA4IDE2LjAwMDQgOS43OTA4NiAxNi4wMDA0IDEyQzE2LjAwMDQgMTMuMDczNyAxNS41Nzc0IDE0LjA0ODUgMTQuODg5IDE0Ljc2N00xMi4wMDA0IDhMMjEuMDAwNCA4TTE0Ljg4OSAxNC43NjdMOC41MTQ5NCAyMS4xNzc2TTkuMTExOSAxNC43NjdMMi44MDA3OCA4LjI0ODUyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/google-chrome - Icon documentation
 */
export function GoogleChrome({
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
      <circle cx="12" cy="12" r="10" strokeWidth={strokeWidth} stroke={color}/><path d="M14.889 14.767C14.1609 15.5269 13.1359 16 12.0004 16C10.865 16 9.83999 15.5269 9.1119 14.767C8.42346 14.0485 8.00045 13.0737 8.00045 12C8.00045 9.79086 9.79131 8 12.0004 8M12.0004 8C14.2096 8 16.0004 9.79086 16.0004 12C16.0004 13.0737 15.5774 14.0485 14.889 14.767M12.0004 8L21.0004 8M14.889 14.767L8.51494 21.1776M9.1119 14.767L2.80078 8.24852" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
