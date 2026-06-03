import { IconProps } from "../types";

/**
 * @component
 * @name StickerRound
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyAxM0MzIDE3LjQxODMgNi41ODE3MiAyMSAxMSAyMUMxMS42NDAzIDIxIDEyLjI1NDQgMjAuNzQ1NiAxMi43MDcxIDIwLjI5MjlMMjAuMjkyOSAxMi43MDcxQzIwLjc0NTYgMTIuMjU0NCAyMSAxMS42NDAzIDIxIDExQzIxIDYuNTgxNzIgMTcuNDE4MyAzIDEzIDNIMTJDNy4wMjk0NCAzIDMgNy4wMjk0NCAzIDEyTDMgMTNaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE5Ljg4ODEgMTEuNDM4MkMxNC45OTE2IDkuNTY2MzEgOS41NjYyOCAxNC45OTE2IDExLjQzODIgMTkuODg4MUMxMS42NjY2IDIwLjQ4NTYgMTIuNDI5MSAyMC41NzA5IDEyLjg4MTUgMjAuMTE4NUwyMC4xMTg1IDEyLjg4MTVDMjAuNTcwOSAxMi40MjkxIDIwLjQ4NTYgMTEuNjY2NiAxOS44ODgxIDExLjQzODJaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/sticker-round - Icon documentation
 */
export function StickerRound({
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
      <path d="M3 13C3 17.4183 6.58172 21 11 21C11.6403 21 12.2544 20.7456 12.7071 20.2929L20.2929 12.7071C20.7456 12.2544 21 11.6403 21 11C21 6.58172 17.4183 3 13 3H12C7.02944 3 3 7.02944 3 12L3 13Z" strokeWidth={strokeWidth} stroke={color}/><path d="M19.8881 11.4382C14.9916 9.56631 9.56628 14.9916 11.4382 19.8881C11.6666 20.4856 12.4291 20.5709 12.8815 20.1185L20.1185 12.8815C20.5709 12.4291 20.4856 11.6666 19.8881 11.4382Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
