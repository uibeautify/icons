import { IconProps } from "../types";

/**
 * @component
 * @name LockOpened
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTYuMiA5LjkzNTA2SDcuOEM2LjExOTg0IDkuOTM1MDYgNS4yNzk3NiA5LjkzNTA2IDQuNjM4MDMgMTAuMjYyQzQuMDczNTQgMTAuNTQ5NyAzLjYxNDYgMTEuMDA4NiAzLjMyNjk4IDExLjU3MzFDMyAxMi4yMTQ4IDMgMTMuMDU0OSAzIDE0LjczNTFWMTcuMTM1MUMzIDE4LjgxNTIgMyAxOS42NTUzIDMuMzI2OTggMjAuMjk3QzMuNjE0NiAyMC44NjE1IDQuMDczNTQgMjEuMzIwNSA0LjYzODAzIDIxLjYwODFDNS4yNzk3NiAyMS45MzUxIDYuMTE5ODQgMjEuOTM1MSA3LjggMjEuOTM1MUgxNi4yQzE3Ljg4MDIgMjEuOTM1MSAxOC43MjAyIDIxLjkzNTEgMTkuMzYyIDIxLjYwODFDMTkuOTI2NSAyMS4zMjA1IDIwLjM4NTQgMjAuODYxNSAyMC42NzMgMjAuMjk3QzIxIDE5LjY1NTMgMjEgMTguODE1MiAyMSAxNy4xMzUxVjE0LjczNTFDMjEgMTMuMDU0OSAyMSAxMi4yMTQ4IDIwLjY3MyAxMS41NzMxQzIwLjM4NTQgMTEuMDA4NiAxOS45MjY1IDEwLjU0OTcgMTkuMzYyIDEwLjI2MkMxOC43MjAyIDkuOTM1MDYgMTcuODgwMiA5LjkzNTA2IDE2LjIgOS45MzUwNloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNi40MjI0IDkuODgwMThMMTYuODQ0OCA4LjY5MTk3QzE3Ljc4NTYgNi4wNDUyIDE2LjQwMjcgMy4xMzY4NyAxMy43NTU5IDIuMTk2MDNDMTEuMTczNCAxLjI3ODA1IDguMzI3OTQgMi41NzE0NSA3LjMyMTUgNS4xMjA3OEw3IDUuOTM1MTYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMiAxNC45MzUxVjE2LjkzNTEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/lock-opened - Icon documentation
 */
export function LockOpened({
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
      <path d="M16.2 9.93506H7.8C6.11984 9.93506 5.27976 9.93506 4.63803 10.262C4.07354 10.5497 3.6146 11.0086 3.32698 11.5731C3 12.2148 3 13.0549 3 14.7351V17.1351C3 18.8152 3 19.6553 3.32698 20.297C3.6146 20.8615 4.07354 21.3205 4.63803 21.6081C5.27976 21.9351 6.11984 21.9351 7.8 21.9351H16.2C17.8802 21.9351 18.7202 21.9351 19.362 21.6081C19.9265 21.3205 20.3854 20.8615 20.673 20.297C21 19.6553 21 18.8152 21 17.1351V14.7351C21 13.0549 21 12.2148 20.673 11.5731C20.3854 11.0086 19.9265 10.5497 19.362 10.262C18.7202 9.93506 17.8802 9.93506 16.2 9.93506Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M16.4224 9.88018L16.8448 8.69197C17.7856 6.0452 16.4027 3.13687 13.7559 2.19603C11.1734 1.27805 8.32794 2.57145 7.3215 5.12078L7 5.93516" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M12 14.9351V16.9351" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
