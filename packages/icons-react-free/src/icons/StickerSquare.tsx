import { IconProps } from "../types";

/**
 * @component
 * @name StickerSquare
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyAxM0MzIDE1LjgwMDMgMyAxNy4yMDA0IDMuNTQ0OTcgMTguMjdDNC4wMjQzMyAxOS4yMTA4IDQuNzg5MjQgMTkuOTc1NyA1LjczMDA1IDIwLjQ1NUM2Ljc5OTYxIDIxIDguMTk5NzQgMjEgMTEgMjFDMTEuNjQwMyAyMSAxMi4yNTQ0IDIwLjc0NTYgMTIuNzA3MSAyMC4yOTI5TDIwLjI5MjkgMTIuNzA3MUMyMC43NDU2IDEyLjI1NDQgMjEgMTEuNjQwMyAyMSAxMUMyMSA4LjE5OTc0IDIxIDYuNzk5NjEgMjAuNDU1IDUuNzMwMDVDMTkuOTc1NyA0Ljc4OTI0IDE5LjIxMDggNC4wMjQzMyAxOC4yNyAzLjU0NDk3QzE3LjIwMDQgMyAxNS44MDAzIDMgMTMgM0gxMUM4LjE5OTc0IDMgNi43OTk2MSAzIDUuNzMwMDUgMy41NDQ5N0M0Ljc4OTI0IDQuMDI0MzMgNC4wMjQzNCA0Ljc4OTI0IDMuNTQ0OTcgNS43MzAwNUMzIDYuNzk5NjEgMyA4LjE5OTc0IDMgMTFMMyAxM1oiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTkuODg4MSAxMS40MzgyQzE0Ljk5MTYgOS41NjYzMSA5LjU2NjI4IDE0Ljk5MTYgMTEuNDM4MiAxOS44ODgxQzExLjY2NjYgMjAuNDg1NiAxMi40MjkxIDIwLjU3MDkgMTIuODgxNSAyMC4xMTg1TDIwLjExODUgMTIuODgxNUMyMC41NzA5IDEyLjQyOTEgMjAuNDg1NiAxMS42NjY2IDE5Ljg4ODEgMTEuNDM4MloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/sticker-square - Icon documentation
 */
export function StickerSquare({
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
      <path d="M3 13C3 15.8003 3 17.2004 3.54497 18.27C4.02433 19.2108 4.78924 19.9757 5.73005 20.455C6.79961 21 8.19974 21 11 21C11.6403 21 12.2544 20.7456 12.7071 20.2929L20.2929 12.7071C20.7456 12.2544 21 11.6403 21 11C21 8.19974 21 6.79961 20.455 5.73005C19.9757 4.78924 19.2108 4.02433 18.27 3.54497C17.2004 3 15.8003 3 13 3H11C8.19974 3 6.79961 3 5.73005 3.54497C4.78924 4.02433 4.02434 4.78924 3.54497 5.73005C3 6.79961 3 8.19974 3 11L3 13Z" strokeWidth={strokeWidth} stroke={color}/><path d="M19.8881 11.4382C14.9916 9.56631 9.56628 14.9916 11.4382 19.8881C11.6666 20.4856 12.4291 20.5709 12.8815 20.1185L20.1185 12.8815C20.5709 12.4291 20.4856 11.6666 19.8881 11.4382Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
