import { IconProps } from "../types";

/**
 * @component
 * @name Gift
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNSAxMkgxOVYxNi4yQzE5IDE3Ljg4MDIgMTkgMTguNzIwMiAxOC42NzMgMTkuMzYyQzE4LjM4NTQgMTkuOTI2NSAxNy45MjY1IDIwLjM4NTQgMTcuMzYyIDIwLjY3M0MxNi43MjAyIDIxIDE1Ljg4MDIgMjEgMTQuMiAyMUg5LjhDOC4xMTk4NCAyMSA3LjI3OTc2IDIxIDYuNjM4MDMgMjAuNjczQzYuMDczNTQgMjAuMzg1NCA1LjYxNDYgMTkuOTI2NSA1LjMyNjk4IDE5LjM2MkM1IDE4LjcyMDIgNSAxNy44ODAyIDUgMTYuMlYxMloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTIgMTJMMTIgMjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xOCA1LjVDMTggNC4xMTkyOSAxNi44ODA3IDMgMTUuNSAzSDE1QzEzLjM0MzEgMyAxMiA0LjM0MzE1IDEyIDZWOEgxNS41QzE2Ljg4MDcgOCAxOCA2Ljg4MDcxIDE4IDUuNVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNiA1LjVDNiA0LjExOTI5IDcuMTE5MjkgMyA4LjUgM0g5QzEwLjY1NjkgMyAxMiA0LjM0MzE1IDEyIDZWOEg4LjVDNy4xMTkyOSA4IDYgNi44ODA3MSA2IDUuNVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMyAxMEMzIDguODk1NDMgMy44OTU0MyA4IDUgOEgxOUMyMC4xMDQ2IDggMjEgOC44OTU0MyAyMSAxMFYxMUMyMSAxMS41NTIzIDIwLjU1MjMgMTIgMjAgMTJINEMzLjQ0NzcyIDEyIDMgMTEuNTUyMyAzIDExVjEwWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/gift - Icon documentation
 */
export function Gift({
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
      <path d="M5 12H19V16.2C19 17.8802 19 18.7202 18.673 19.362C18.3854 19.9265 17.9265 20.3854 17.362 20.673C16.7202 21 15.8802 21 14.2 21H9.8C8.11984 21 7.27976 21 6.63803 20.673C6.07354 20.3854 5.6146 19.9265 5.32698 19.362C5 18.7202 5 17.8802 5 16.2V12Z" strokeWidth={strokeWidth} stroke={color}/><path d="M12 12L12 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M18 5.5C18 4.11929 16.8807 3 15.5 3H15C13.3431 3 12 4.34315 12 6V8H15.5C16.8807 8 18 6.88071 18 5.5Z" strokeWidth={strokeWidth} stroke={color}/><path d="M6 5.5C6 4.11929 7.11929 3 8.5 3H9C10.6569 3 12 4.34315 12 6V8H8.5C7.11929 8 6 6.88071 6 5.5Z" strokeWidth={strokeWidth} stroke={color}/><path d="M3 10C3 8.89543 3.89543 8 5 8H19C20.1046 8 21 8.89543 21 10V11C21 11.5523 20.5523 12 20 12H4C3.44772 12 3 11.5523 3 11V10Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
