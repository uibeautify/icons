import { IconProps } from "../types";

/**
 * @component
 * @name MicrophoneOff
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTYgMTEuMDUwM1Y2LjJDMTYgNS4wNzk4OSAxNiA0LjUxOTg0IDE1Ljc4MiA0LjA5MjAyQzE1LjU5MDMgMy43MTU2OSAxNS4yODQzIDMuNDA5NzMgMTQuOTA4IDMuMjE3OTlDMTQuNDgwMiAzIDEzLjkyMDEgMyAxMi44IDNIOC4wNDY4N0M4LjAyMDk5IDMgOCAzLjAyMDk5IDggMy4wNDY4OE04IDhWOS44QzggMTAuOTIwMSA4IDExLjQ4MDIgOC4yMTc5OSAxMS45MDhDOC40MDk3MyAxMi4yODQzIDguNzE1NjkgMTIuNTkwMyA5LjA5MjAyIDEyLjc4MkM5LjUxOTg0IDEzIDEwLjA3OTkgMTMgMTEuMiAxM0gxMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTQgMTBDNCAxMS44NjEyIDQgMTIuNzkxOCA0LjI0NDcgMTMuNTQ1QzQuNzM5MjkgMTUuMDY3MiA1LjkzMjczIDE2LjI2MDcgNy40NTQ5NiAxNi43NTUyQzguMjA4MSAxNi45OTk5IDkuMTM4NzEgMTYuOTk5OSAxMC45OTk5IDE2Ljk5OTlIMTMuMDAwMUMxNC44NjEzIDE2Ljk5OTkgMTUuNzkxOSAxNi45OTk5IDE2LjU0NSAxNi43NTUyTTIwIDEwQzIwIDExLjg2MTIgMjAgMTIuNzkxOCAxOS43NTUzIDEzLjU0NUMxOS42NTQ3IDEzLjg1NDcgMTkuNTI1MSAxNC4xNTA4IDE5LjM2OTcgMTQuNDMwMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEyIDE3TDEyIDIxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOCAyMUgxNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTMgM0wyMSAyMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/microphone-off - Icon documentation
 */
export function MicrophoneOff({
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
      <path d="M16 11.0503V6.2C16 5.07989 16 4.51984 15.782 4.09202C15.5903 3.71569 15.2843 3.40973 14.908 3.21799C14.4802 3 13.9201 3 12.8 3H8.04687C8.02099 3 8 3.02099 8 3.04688M8 8V9.8C8 10.9201 8 11.4802 8.21799 11.908C8.40973 12.2843 8.71569 12.5903 9.09202 12.782C9.51984 13 10.0799 13 11.2 13H13" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M4 10C4 11.8612 4 12.7918 4.2447 13.545C4.73929 15.0672 5.93273 16.2607 7.45496 16.7552C8.2081 16.9999 9.13871 16.9999 10.9999 16.9999H13.0001C14.8613 16.9999 15.7919 16.9999 16.545 16.7552M20 10C20 11.8612 20 12.7918 19.7553 13.545C19.6547 13.8547 19.5251 14.1508 19.3697 14.4302" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 17L12 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M8 21H16" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M3 3L21 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
