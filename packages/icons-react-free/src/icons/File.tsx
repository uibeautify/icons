import { IconProps } from "../types";

/**
 * @component
 * @name File
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNSA3LjhDNSA2LjExOTg0IDUgNS4yNzk3NiA1LjMyNjk4IDQuNjM4MDNDNS42MTQ2IDQuMDczNTQgNi4wNzM1NCAzLjYxNDYgNi42MzgwMyAzLjMyNjk4QzcuMjc5NzYgMyA4LjExOTg0IDMgOS44IDNIMTMuMjUwNkMxMy41MjYxIDMgMTMuNjYzOCAzIDEzLjc5MTQgMy4wMzQzNEMxMy45MDQ1IDMuMDY0NzYgMTQuMDExNCAzLjExNDgxIDE0LjEwNzEgMy4xODIyMUMxNC4yMTUyIDMuMjU4MjggMTQuMzAzNCAzLjM2NDA5IDE0LjQ3OTggMy41NzU3TDE4LjYyOTIgOC41NTQ5OUMxOC43NjY1IDguNzE5OCAxOC44MzUyIDguODAyMjEgMTguODg0MSA4Ljg5NDY4QzE4LjkyNzQgOC45NzY3IDE4Ljk1OTIgOS4wNjQzNiAxOC45Nzg0IDkuMTU1MTNDMTkgOS4yNTc0NiAxOSA5LjM2NDczIDE5IDkuNTc5MjhWMTYuMkMxOSAxNy44ODAyIDE5IDE4LjcyMDIgMTguNjczIDE5LjM2MkMxOC4zODU0IDE5LjkyNjUgMTcuOTI2NSAyMC4zODU0IDE3LjM2MiAyMC42NzNDMTYuNzIwMiAyMSAxNS44ODAyIDIxIDE0LjIgMjFIOS44QzguMTE5ODQgMjEgNy4yNzk3NiAyMSA2LjYzODAzIDIwLjY3M0M2LjA3MzU0IDIwLjM4NTQgNS42MTQ2IDE5LjkyNjUgNS4zMjY5OCAxOS4zNjJDNSAxOC43MjAyIDUgMTcuODgwMiA1IDE2LjJWNy44WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNCAzVjhDMTQgOC41NTIyOCAxNC40NDc3IDkgMTUgOUgxOSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/file - Icon documentation
 */
export function File({
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
      <path d="M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H13.2506C13.5261 3 13.6638 3 13.7914 3.03434C13.9045 3.06476 14.0114 3.11481 14.1071 3.18221C14.2152 3.25828 14.3034 3.36409 14.4798 3.5757L18.6292 8.55499C18.7665 8.7198 18.8352 8.80221 18.8841 8.89468C18.9274 8.9767 18.9592 9.06436 18.9784 9.15513C19 9.25746 19 9.36473 19 9.57928V16.2C19 17.8802 19 18.7202 18.673 19.362C18.3854 19.9265 17.9265 20.3854 17.362 20.673C16.7202 21 15.8802 21 14.2 21H9.8C8.11984 21 7.27976 21 6.63803 20.673C6.07354 20.3854 5.6146 19.9265 5.32698 19.362C5 18.7202 5 17.8802 5 16.2V7.8Z" strokeWidth={strokeWidth} stroke={color}/><path d="M14 3V8C14 8.55228 14.4477 9 15 9H19" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
