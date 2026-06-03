import { IconProps } from "../types";

/**
 * @component
 * @name Voicemail
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNi41IDE2QzguNDMzIDE2IDEwIDE0LjQzMyAxMCAxMi41QzEwIDEwLjU2NyA4LjQzMyA5IDYuNSA5QzQuNTY3IDkgMyAxMC41NjcgMyAxMi41QzMgMTQuNDMzIDQuNTY3IDE2IDYuNSAxNlpNNi41IDE2SDE3LjVNMTcuNSAxNkMxOS40MzMgMTYgMjEgMTQuNDMzIDIxIDEyLjVDMjEgMTAuNTY3IDE5LjQzMyA5IDE3LjUgOUMxNS41NjcgOSAxNCAxMC41NjcgMTQgMTIuNUMxNCAxNC40MzMgMTUuNTY3IDE2IDE3LjUgMTZaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/voicemail - Icon documentation
 */
export function Voicemail({
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
      <path d="M6.5 16C8.433 16 10 14.433 10 12.5C10 10.567 8.433 9 6.5 9C4.567 9 3 10.567 3 12.5C3 14.433 4.567 16 6.5 16ZM6.5 16H17.5M17.5 16C19.433 16 21 14.433 21 12.5C21 10.567 19.433 9 17.5 9C15.567 9 14 10.567 14 12.5C14 14.433 15.567 16 17.5 16Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
