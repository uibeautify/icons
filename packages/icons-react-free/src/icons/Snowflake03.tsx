import { IconProps } from "../types";

/**
 * @component
 * @name Snowflake03
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTEuOTk5IDlMNi45OTkwMiA0TTExLjk5OSA5TDE2Ljk5OSA0TTExLjk5OSA5VjNNMTEuOTk5IDlWMTVNMTEuOTk5IDE1TDcgMjBNMTEuOTk5IDE1TDE3IDIwTTExLjk5OSAxNVYyMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE0Ljk5OTUgMTEuOTk5NUwxOS45OTk1IDYuOTk5NTFNMTQuOTk5NSAxMS45OTk1TDE5Ljk5OTUgMTYuOTk5NU0xNC45OTk1IDExLjk5OTVMMjAuOTk5NSAxMS45OTk1TTE0Ljk5OTUgMTEuOTk5NUw4Ljk5OTUxIDExLjk5OTVNOC45OTk1MSAxMS45OTk1TDMuOTk5NTEgNy4wMDA0OU04Ljk5OTUxIDExLjk5OTVMMy45OTk1MSAxNy4wMDA1TTguOTk5NTEgMTEuOTk5NUwyLjk5OTUxIDExLjk5OTUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/snowflake-03 - Icon documentation
 */
export function Snowflake03({
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
      <path d="M11.999 9L6.99902 4M11.999 9L16.999 4M11.999 9V3M11.999 9V15M11.999 15L7 20M11.999 15L17 20M11.999 15V21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M14.9995 11.9995L19.9995 6.99951M14.9995 11.9995L19.9995 16.9995M14.9995 11.9995L20.9995 11.9995M14.9995 11.9995L8.99951 11.9995M8.99951 11.9995L3.99951 7.00049M8.99951 11.9995L3.99951 17.0005M8.99951 11.9995L2.99951 11.9995" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
