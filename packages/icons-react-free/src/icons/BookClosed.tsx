import { IconProps } from "../types";

/**
 * @component
 * @name BookClosed
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTggM0g2QzUuNDQ3NzIgMyA1IDMuNDQ3NzIgNSA0VjE3SDdIMThDMTguNTUyMyAxNyAxOSAxNi41NTIzIDE5IDE2VjRDMTkgMy40NDc3MiAxOC41NTIzIDMgMTggM1oiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNSAxNkw1IDE5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTggMTdIN0M1Ljg5NTQzIDE3IDUgMTcuODk1NCA1IDE5QzUgMjAuMTA0NiA1Ljg5NTQzIDIxIDcgMjFIMTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xOCAyMUMxNi44OTU0IDIxIDE2IDIwLjEwNDYgMTYgMTlDMTYgMTcuODk1NCAxNi44OTU0IDE3IDE4IDE3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/book-closed - Icon documentation
 */
export function BookClosed({
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
      <path d="M18 3H6C5.44772 3 5 3.44772 5 4V17H7H18C18.5523 17 19 16.5523 19 16V4C19 3.44772 18.5523 3 18 3Z" strokeWidth={strokeWidth} stroke={color}/><path d="M5 16L5 19" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M18 17H7C5.89543 17 5 17.8954 5 19C5 20.1046 5.89543 21 7 21H18" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M18 21C16.8954 21 16 20.1046 16 19C16 17.8954 16.8954 17 18 17" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
