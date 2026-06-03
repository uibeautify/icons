import { IconProps } from "../types";

/**
 * @component
 * @name MessagesCircle
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTMuNSAyMUMxMS4wNDYzIDIxIDguODY3NzYgMTkuODIxNyA3LjQ5OTQ1IDE4SDEwLjVDMTQuNjQyMSAxOCAxOCAxNC42NDIyIDE4IDEwLjVDMTggOS4yMDAzOSAxNy42Njk0IDcuOTc3OTYgMTcuMDg3OCA2LjkxMjIzQzE5LjQxODcgOC4xODQzNiAyMSAxMC42NTc1IDIxIDEzLjVWMjFIMTMuNVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0zIDEwLjVDMyAxMi40MjA5IDMgMTggMyAxOEMzIDE4IDguMjc4NzUgMTggMTAuNSAxOEMxNC42NDIxIDE4IDE4IDE0LjY0MjEgMTggMTAuNUMxOCA2LjM1Nzg2IDE0LjY0MjEgMyAxMC41IDNDNi4zNTc4NiAzIDMgNi4zNTc4NiAzIDEwLjVaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOCAxM0wxMCAxMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTggOUgxMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/messages-circle - Icon documentation
 */
export function MessagesCircle({
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
      <path d="M13.5 21C11.0463 21 8.86776 19.8217 7.49945 18H10.5C14.6421 18 18 14.6422 18 10.5C18 9.20039 17.6694 7.97796 17.0878 6.91223C19.4187 8.18436 21 10.6575 21 13.5V21H13.5Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M3 10.5C3 12.4209 3 18 3 18C3 18 8.27875 18 10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M8 13L10 13" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M8 9H12" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
