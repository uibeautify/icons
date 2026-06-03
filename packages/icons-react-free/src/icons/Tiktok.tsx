import { IconProps } from "../types";

/**
 * @component
 * @name Tiktok
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMjAgNy40NzIyM0wxOS45ODM4IDcuNDcxMDNDMTcuNzA3OSA3LjMwNzk4IDE1LjcyNTkgNS41NjQ2OCAxNS42NiAzTDEyLjgyNTEgMy4wMTMyMUMxMi44MDM2IDYuMDI5MzIgMTIuODE3NiA5LjA0NjA0IDEyLjgxMDYgMTIuMDdDMTIuODAzNiAxMy40MTMyIDEyLjgzMjYgMTQuNzQ4NiAxMi43NjAyIDE2LjA5MThDMTIuNjgxOSAxNy4yMjUzIDExLjY3NDEgMTguMDk1NiAxMC40NTY4IDE4LjA5NTZDNi42NDQ0NSAxOC4wOTU2IDcuMjA1ODggMTIuNDUgMTEuMTk2NiAxMy4xNDM2QzExLjE5NjYgMTIuMDMzMyAxMS4yNDAxIDEwLjkyMjUgMTEuMjI1NiA5LjgxMjIyQzYuNjQ5NjcgOS44MTIyMiA1IDEzLjE4NzEgNSAxNS4yMDY5QzUgMTkuMjEgNy44OTIzMyAyMSAxMC41MTcxIDIxQzEzLjQyMjUgMjAuOTA5IDE1LjYxMzEgMTguNTMxIDE1Ljc2ODUgMTUuNjM1NUMxNS43ODk5IDEzLjQ1MjIgMTUuNzgyOSA5LjA3MDA1IDE1Ljc4MjkgOS4wNzAwNUMxNS43ODI5IDkuMDcwMDUgMTguNTIxOCAxMC40NTc3IDIwIDEwLjQ5NjFWNy40NzIyM1oiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/tiktok - Icon documentation
 */
export function Tiktok({
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
      <path d="M20 7.47223L19.9838 7.47103C17.7079 7.30798 15.7259 5.56468 15.66 3L12.8251 3.01321C12.8036 6.02932 12.8176 9.04604 12.8106 12.07C12.8036 13.4132 12.8326 14.7486 12.7602 16.0918C12.6819 17.2253 11.6741 18.0956 10.4568 18.0956C6.64445 18.0956 7.20588 12.45 11.1966 13.1436C11.1966 12.0333 11.2401 10.9225 11.2256 9.81222C6.64967 9.81222 5 13.1871 5 15.2069C5 19.21 7.89233 21 10.5171 21C13.4225 20.909 15.6131 18.531 15.7685 15.6355C15.7899 13.4522 15.7829 9.07005 15.7829 9.07005C15.7829 9.07005 18.5218 10.4577 20 10.4961V7.47223Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
