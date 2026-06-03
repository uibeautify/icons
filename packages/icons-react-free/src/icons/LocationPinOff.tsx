import { IconProps } from "../types";

/**
 * @component
 * @name LocationPinOff
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNi4wOTM3NyA2LjMzMzZDNS40MDEyNyA3LjQ1MDQ4IDUgOC43NzY5NSA1IDEwLjE5OThDNSAxMy4xODY0IDguOTQ4ODQgMTcuNzc5MiAxMC45MTQ3IDE5Ljg4MDZDMTEuMjY1NiAyMC4yNTU2IDExLjQ0MSAyMC40NDMxIDExLjY3ODMgMjAuNTIzN0MxMS44NzUgMjAuNTkwNSAxMi4xMjUgMjAuNTkwNSAxMi4zMjE2IDIwLjUyMzdDMTIuNTU5IDIwLjQ0MzEgMTIuNzM0MyAyMC4yNTU3IDEzLjA4NSAxOS44ODA5QzEzLjg5NSAxOS4wMTUgMTUuMDQxOSAxNy43MjYgMTYuMTEwNCAxNi4zMDA2TTguNzU0NTcgMy44MTg3N0M5LjcyNDY2IDMuMjk1NyAxMC44Mjg3IDIuOTk5ODIgMTIgMi45OTk4MkMxNS44NjYgMi45OTk4MiAxOSA2LjIyMzM3IDE5IDEwLjE5OThDMTkgMTEuMDggMTguNjU3IDEyLjA5OTcgMTguMTIyOSAxMy4xNTQxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTIgMTEuOTk5OEMxMC44OTU0IDExLjk5OTggMTAgMTEuMTA0NCAxMCA5Ljk5OTgzTTEyLjU1NDEgOC4wNzc1OEMxMy4yMzEyIDguMjcyMzkgMTMuNzYwOSA4LjgxNTI1IDEzLjkzNyA5LjUwMDAyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMyAzTDIxIDIxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/location-pin-off - Icon documentation
 */
export function LocationPinOff({
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
      <path d="M6.09377 6.3336C5.40127 7.45048 5 8.77695 5 10.1998C5 13.1864 8.94884 17.7792 10.9147 19.8806C11.2656 20.2556 11.441 20.4431 11.6783 20.5237C11.875 20.5905 12.125 20.5905 12.3216 20.5237C12.559 20.4431 12.7343 20.2557 13.085 19.8809C13.895 19.015 15.0419 17.726 16.1104 16.3006M8.75457 3.81877C9.72466 3.2957 10.8287 2.99982 12 2.99982C15.866 2.99982 19 6.22337 19 10.1998C19 11.08 18.657 12.0997 18.1229 13.1541" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M12 11.9998C10.8954 11.9998 10 11.1044 10 9.99983M12.5541 8.07758C13.2312 8.27239 13.7609 8.81525 13.937 9.50002" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 3L21 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
