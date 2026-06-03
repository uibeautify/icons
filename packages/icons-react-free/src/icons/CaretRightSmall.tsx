import { IconProps } from "../types";

/**
 * @component
 * @name CaretRightSmall
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTMuODY4NiAxMC44Njg2TDEyLjczMTQgOS43MzEzN0MxMS44NzQ2IDguODc0NjIgMTEuNDQ2MiA4LjQ0NjI0IDExLjA3ODUgOC40MTczQzEwLjc1OTMgOC4zOTIxOCAxMC40NDc1IDguNTIxMzYgMTAuMjM5NiA4Ljc2NDc3QzEwIDkuMDQ1MjkgMTAgOS42NTExMSAxMCAxMC44NjI3VjEzLjEzNzNDMTAgMTQuMzQ4OSAxMCAxNC45NTQ3IDEwLjIzOTYgMTUuMjM1MkMxMC40NDc1IDE1LjQ3ODYgMTAuNzU5MyAxNS42MDc4IDExLjA3ODUgMTUuNTgyN0MxMS40NDYyIDE1LjU1MzggMTEuODc0NiAxNS4xMjU0IDEyLjczMTQgMTQuMjY4NkwxMy44Njg2IDEzLjEzMTRDMTQuMjY0NiAxMi43MzU0IDE0LjQ2MjcgMTIuNTM3MyAxNC41MzY4IDEyLjMwOUMxNC42MDIxIDEyLjEwODIgMTQuNjAyMSAxMS44OTE4IDE0LjUzNjggMTEuNjkxQzE0LjQ2MjcgMTEuNDYyNyAxNC4yNjQ2IDExLjI2NDYgMTMuODY4NiAxMC44Njg2WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/caret-right-small - Icon documentation
 */
export function CaretRightSmall({
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
      <path d="M13.8686 10.8686L12.7314 9.73137C11.8746 8.87462 11.4462 8.44624 11.0785 8.4173C10.7593 8.39218 10.4475 8.52136 10.2396 8.76477C10 9.04529 10 9.65111 10 10.8627V13.1373C10 14.3489 10 14.9547 10.2396 15.2352C10.4475 15.4786 10.7593 15.6078 11.0785 15.5827C11.4462 15.5538 11.8746 15.1254 12.7314 14.2686L13.8686 13.1314C14.2646 12.7354 14.4627 12.5373 14.5368 12.309C14.6021 12.1082 14.6021 11.8918 14.5368 11.691C14.4627 11.4627 14.2646 11.2646 13.8686 10.8686Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
