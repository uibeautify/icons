import { IconProps } from "../types";

/**
 * @component
 * @name Data01
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cmVjdCB4PSIxMCIgeT0iNCIgd2lkdGg9IjQiIGhlaWdodD0iNCIgcng9IjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjE4IiB5PSIyIiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiByeD0iMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMTYiIHk9IjEwIiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiByeD0iMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTMgMTNIN003IDEzVjEwQzcgOS40NDc3MiA2LjU1MjI4IDkgNiA5SDRDMy40NDc3MiA5IDMgOS40NDc3MiAzIDEwVjEzTDMgMTdMMyAyMEMzIDIwLjU1MjMgMy40NDc3MiAyMSA0IDIxSDdNNyAxM0wxMCAxM0MxMC41NTIzIDEzIDExIDEzLjQ0NzcgMTEgMTRWMTdNNyAxM0w3IDIxTTcgMjFIMTFNMTEgMTdIMTRDMTQuNTUyMyAxNyAxNSAxNy40NDc3IDE1IDE4VjIwQzE1IDIwLjU1MjMgMTQuNTUyMyAyMSAxNCAyMUgxMU0xMSAxN0wxMSAyMU0xMSAxN0gzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/data-01 - Icon documentation
 */
export function Data01({
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
      <rect x="10" y="4" width="4" height="4" rx="1" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><rect x="18" y="2" width="4" height="4" rx="1" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><rect x="16" y="10" width="4" height="4" rx="1" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M3 13H7M7 13V10C7 9.44772 6.55228 9 6 9H4C3.44772 9 3 9.44772 3 10V13L3 17L3 20C3 20.5523 3.44772 21 4 21H7M7 13L10 13C10.5523 13 11 13.4477 11 14V17M7 13L7 21M7 21H11M11 17H14C14.5523 17 15 17.4477 15 18V20C15 20.5523 14.5523 21 14 21H11M11 17L11 21M11 17H3" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
