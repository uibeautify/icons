import { IconProps } from "../types";

/**
 * @component
 * @name MessageTemporary
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMi45OTc1MyAxMy45OTc3QzIuOTk3NTMgMTIuOTU4NCAyLjk0NTk0IDExLjIzMzYgMy4xMzY2NyAxMC40M000LjYyNjAzIDYuODI0MzJDNS4wNTYzOCA2LjE4Mzg1IDUuODI3IDUuMzMzMTYgNi44Mzc4MiA0LjYzMjYxTTEwLjQyNzUgMy4xNDE1MkMxMS40OTcyIDIuOTc2MzEgMTIuNDYyNyAyLjkwNjc1IDEzLjU1ODYgMy4xNDE1N00xNy4xNzYyIDQuNjMyNThDMTguMDQ2OSA1LjE4MzA2IDE5LjA0NzcgNi4zNDQgMTkuMzY4IDYuODM0NE0yMC44NTkgMTAuNDQyNUMyMS4wMTk3IDExLjAyNzQgMjEuMDUzMSAxMi40MDYxIDIwLjg1OSAxMy41NTczTTE5LjM2NiAxNy4xNzNDMTguOTA0NCAxNy44NDU3IDE4LjA2MDMgMTguNzU1NyAxNy4xNjM1IDE5LjM3NTZNOS45ODg3MiAyMC45OTc5QzExLjAzMDYgMjAuOTk3OSAxMi42MTMzIDIxLjA3NjkgMTMuNTYyOSAyMC44NjU5TTMgMTlWMjFINSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/message-temporary - Icon documentation
 */
export function MessageTemporary({
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
      <path d="M2.99753 13.9977C2.99753 12.9584 2.94594 11.2336 3.13667 10.43M4.62603 6.82432C5.05638 6.18385 5.827 5.33316 6.83782 4.63261M10.4275 3.14152C11.4972 2.97631 12.4627 2.90675 13.5586 3.14157M17.1762 4.63258C18.0469 5.18306 19.0477 6.344 19.368 6.8344M20.859 10.4425C21.0197 11.0274 21.0531 12.4061 20.859 13.5573M19.366 17.173C18.9044 17.8457 18.0603 18.7557 17.1635 19.3756M9.98872 20.9979C11.0306 20.9979 12.6133 21.0769 13.5629 20.8659M3 19V21H5" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
