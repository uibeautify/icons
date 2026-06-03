import { IconProps } from "../types";

/**
 * @component
 * @name Thermometer
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTMgMTZDMTMgMTYuNTUyMyAxMi41NTIzIDE3IDEyIDE3QzExLjQ0NzcgMTcgMTEgMTYuNTUyMyAxMSAxNkMxMSAxNS40NDc3IDExLjQ0NzcgMTUgMTIgMTVDMTIuNTUyMyAxNSAxMyAxNS40NDc3IDEzIDE2WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMiAyMUMxNC43NjE0IDIxIDE3IDE4Ljc2MTQgMTcgMTZDMTcgMTMuOTQ5NyAxNS43NjU5IDEyLjE4NzYgMTQgMTEuNDE2VjVDMTQgMy44OTU0MyAxMy4xMDQ2IDMgMTIgM0MxMC44OTU0IDMgMTAgMy44OTU0MyAxMCA1VjExLjQxNkM4LjIzNDEgMTIuMTg3NiA3IDEzLjk0OTcgNyAxNkM3IDE4Ljc2MTQgOS4yMzg1OCAyMSAxMiAyMVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/thermometer - Icon documentation
 */
export function Thermometer({
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
      <path d="M13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16Z" strokeWidth={strokeWidth} stroke={color}/><path d="M12 21C14.7614 21 17 18.7614 17 16C17 13.9497 15.7659 12.1876 14 11.416V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V11.416C8.2341 12.1876 7 13.9497 7 16C7 18.7614 9.23858 21 12 21Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
