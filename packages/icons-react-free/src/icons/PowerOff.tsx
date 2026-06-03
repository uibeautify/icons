import { IconProps } from "../types";

/**
 * @component
 * @name PowerOff
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTcgNi43NTQ2NEMxOC44Mjg5IDguMjIwNzYgMjAgMTAuNDczNiAyMCAxM0MyMCAxMy42MzU3IDE5LjkyNTggMTQuMjU0MiAxOS43ODU3IDE0Ljg0NzFNNi44NjU3MiA2Ljg2NDY4QzUuMTEzOTUgOC4zMzIxOSA0IDEwLjUzNiA0IDEzQzQgMTcuNDE4MyA3LjU4MTcyIDIxIDEyIDIxQzE0LjQ2MzcgMjEgMTYuNjY3MiAxOS44ODY0IDE4LjEzNDcgMTguMTM1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTIgM0wxMiA3TTEyIDE1TDEyIDEyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNCA0TDIwIDIwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/power-off - Icon documentation
 */
export function PowerOff({
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
      <path d="M17 6.75464C18.8289 8.22076 20 10.4736 20 13C20 13.6357 19.9258 14.2542 19.7857 14.8471M6.86572 6.86468C5.11395 8.33219 4 10.536 4 13C4 17.4183 7.58172 21 12 21C14.4637 21 16.6672 19.8864 18.1347 18.135" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 3L12 7M12 15L12 12" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M4 4L20 20" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
