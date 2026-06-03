import { IconProps } from "../types";

/**
 * @component
 * @name HistorySearch
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMjEgMjFMMTYuNjY5MSAxNi42NjkxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTAgOFYxMC45NEMxMCAxMS4zMjU3IDEwLjIyMTggMTEuNjc3MSAxMC41NzAxIDExLjg0MjlMMTMgMTMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0zLjU2ODQxIDcuOTE2NzFDNC4wMzMyMiA2LjgwODI0IDQuNzQxMDkgNS44MjYyOCA1LjYyNTYxIDUuMDM3MDVDNy4wNDUzMiAzLjc3MDI4IDguOTIwMTEgMyAxMC45NzU0IDNDMTUuNDA3MiAzIDE5IDYuNTgxNzIgMTkgMTFDMTkgMTUuNDE4MyAxNS40MDcyIDE5IDEwLjk3NTQgMTlDNi44NDU3NyAxOSAzLjQ0NDc1IDE1Ljg5MDIgMyAxMS44OTE2TTMuMjA4NyA1Ljc1OEwzLjU2ODQxIDcuOTE2NzFMNS43NTQ4OCA3LjQyNjM2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/history-search - Icon documentation
 */
export function HistorySearch({
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
      <path d="M21 21L16.6691 16.6691" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M10 8V10.94C10 11.3257 10.2218 11.6771 10.5701 11.8429L13 13" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M3.56841 7.91671C4.03322 6.80824 4.74109 5.82628 5.62561 5.03705C7.04532 3.77028 8.92011 3 10.9754 3C15.4072 3 19 6.58172 19 11C19 15.4183 15.4072 19 10.9754 19C6.84577 19 3.44475 15.8902 3 11.8916M3.2087 5.758L3.56841 7.91671L5.75488 7.42636" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
