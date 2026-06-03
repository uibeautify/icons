import { IconProps } from "../types";

/**
 * @component
 * @name Snowflake02
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTEuOTk5NyA3LjVWMTYuNU0xMS45OTk3IDcuNVYzTTExLjk5OTcgNy41TDE0LjI0OTcgNC41TTExLjk5OTcgNy41TDkuNzQ5NjkgNC41TTExLjk5OTcgMTYuNVYyMU0xMS45OTk3IDE2LjVMOS43NDk2OSAxOS41TTExLjk5OTcgMTYuNUwxNC4yNDk3IDE5LjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNS44OTY4IDkuNzUwMDFMOC4xMDI1OSAxNC4yNU0xNS44OTY4IDkuNzUwMDFMMTkuNzkzOSA3LjUwMDAxTTE1Ljg5NjggOS43NTAwMUwxOS42MTk5IDEwLjE5ODZNMTUuODk2OCA5Ljc1MDAxTDE3LjM2OTkgNi4zMDE0NU04LjEwMjU5IDE0LjI1TDQuMjA1NDcgMTYuNU04LjEwMjU5IDE0LjI1TDQuMzc5NTEgMTMuODAxNU04LjEwMjU5IDE0LjI1TDYuNjI5NTEgMTcuNjk4NiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE1Ljg5NjggMTQuMjVMOC4xMDI1OSA5Ljc1MDAxTTE1Ljg5NjggMTQuMjVMMTkuNzkzOSAxNi41TTE1Ljg5NjggMTQuMjVMMTcuMzY5OSAxNy42OTg2TTE1Ljg5NjggMTQuMjVMMTkuNjE5OSAxMy44MDE1TTguMTAyNTkgOS43NTAwMUw0LjIwNTQ3IDcuNTAwMDFNOC4xMDI1OSA5Ljc1MDAxTDYuNjI5NTEgNi4zMDE0NU04LjEwMjU5IDkuNzUwMDFMNC4zNzk1MSAxMC4xOTg2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/snowflake-02 - Icon documentation
 */
export function Snowflake02({
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
      <path d="M11.9997 7.5V16.5M11.9997 7.5V3M11.9997 7.5L14.2497 4.5M11.9997 7.5L9.74969 4.5M11.9997 16.5V21M11.9997 16.5L9.74969 19.5M11.9997 16.5L14.2497 19.5" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M15.8968 9.75001L8.10259 14.25M15.8968 9.75001L19.7939 7.50001M15.8968 9.75001L19.6199 10.1986M15.8968 9.75001L17.3699 6.30145M8.10259 14.25L4.20547 16.5M8.10259 14.25L4.37951 13.8015M8.10259 14.25L6.62951 17.6986" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M15.8968 14.25L8.10259 9.75001M15.8968 14.25L19.7939 16.5M15.8968 14.25L17.3699 17.6986M15.8968 14.25L19.6199 13.8015M8.10259 9.75001L4.20547 7.50001M8.10259 9.75001L6.62951 6.30145M8.10259 9.75001L4.37951 10.1986" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
