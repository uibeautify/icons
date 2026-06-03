import { IconProps } from "../types";

/**
 * @component
 * @name Wrench
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTEuNzkwMiA0LjU4MjNDMTMuMjA1MiAzLjE2NzI3IDE1LjIwOTQgMi43MDA1OSAxNy4wMTMxIDMuMTgyMjZMMTQuMzM4OCA1Ljg1NjZMMTQuOTc1OSA5LjA0MjM5TDE4LjE2MTcgOS42Nzk1NUwyMC44MzYxIDcuMDA1MTlDMjEuMzE3OCA4LjgwODg5IDIwLjg1MTEgMTAuODEzMiAxOS40MzYxIDEyLjIyODJMMTQuMjEzMSAxMy42MjgyTDcuNjIzNTcgMjAuMjA4N0M2LjU2Nzg5IDIxLjI2NDMgNC44NTYzIDIxLjI2NDMgMy44MDA2MiAyMC4yMDg3QzIuNzQ0OTUgMTkuMTUzIDIuNzQ0OTUgMTcuNDQxNCAzLjgwMDYyIDE2LjM4NTdMMTAuMzkwMSA5LjgwNTI3TDExLjc5MDIgNC41ODIzWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik01Ljc4Nzg5IDE4LjI1ODVINS43ODc5OSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/wrench - Icon documentation
 */
export function Wrench({
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
      <path d="M11.7902 4.5823C13.2052 3.16727 15.2094 2.70059 17.0131 3.18226L14.3388 5.8566L14.9759 9.04239L18.1617 9.67955L20.8361 7.00519C21.3178 8.80889 20.8511 10.8132 19.4361 12.2282L14.2131 13.6282L7.62357 20.2087C6.56789 21.2643 4.8563 21.2643 3.80062 20.2087C2.74495 19.153 2.74495 17.4414 3.80062 16.3857L10.3901 9.80527L11.7902 4.5823Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M5.78789 18.2585H5.78799" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
