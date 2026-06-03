import { IconProps } from "../types";

/**
 * @component
 * @name ChartBarsHorizontal
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMiAyMUgzTTIyIDIxSDIxTTIxIDIxVjRDMjEgMy40NDc3MiAyMC41NTIzIDMgMjAgM0gxNkMxNS40NDc3IDMgMTUgMy40NDc3MiAxNSA0VjhNMjEgMjFIMTVNMTUgMjFWOE0xNSAyMUg5TTE1IDhIMTBDOS40NDc3MiA4IDkgOC40NDc3MiA5IDlWMTNNOSAyMVYxM005IDIxSDNNOSAxM0g0QzMuNDQ3NzIgMTMgMyAxMy40NDc3IDMgMTRWMjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/chart-bars-horizontal - Icon documentation
 */
export function ChartBarsHorizontal({
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
      <path d="M2 21H3M22 21H21M21 21V4C21 3.44772 20.5523 3 20 3H16C15.4477 3 15 3.44772 15 4V8M21 21H15M15 21V8M15 21H9M15 8H10C9.44772 8 9 8.44772 9 9V13M9 21V13M9 21H3M9 13H4C3.44772 13 3 13.4477 3 14V21" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
