import { IconProps } from "../types";

/**
 * @component
 * @name FilesBox
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMy4xNDA5NCAxMy40ODMyTDUuMzk3MSA1LjIxMDY1QzUuNzUzMDYgMy45MDU0NiA2LjkzODUzIDMgOC4yOTEzOSAzSDE1LjcwODZDMTcuMDYxNSAzIDE4LjI0NjkgMy45MDU0NiAxOC42MDI5IDUuMjEwNjVMMjAuODU5MSAxMy40ODMyQzIwLjk1MjYgMTMuODI2MiAyMSAxNC4xODAxIDIxIDE0LjUzNTdWMThDMjEgMTkuNjU2OSAxOS42NTY5IDIxIDE4IDIxSDZDNC4zNDMxNSAyMSAzIDE5LjY1NjkgMyAxOFYxNC41MzU3QzMgMTQuMTgwMSAzLjA0NzQgMTMuODI2MiAzLjE0MDk0IDEzLjQ4MzJaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMy4xNDQ1MyAxNEg2LjU4NTc5QzYuODUxIDE0IDcuMTA1MzYgMTQuMTA1NCA3LjI5Mjg5IDE0LjI5MjlMOC43MDcxMSAxNS43MDcxQzguODk0NjQgMTUuODk0NiA5LjE0OSAxNiA5LjQxNDIxIDE2SDE0LjU4NThDMTQuODUxIDE2IDE1LjEwNTQgMTUuODk0NiAxNS4yOTI5IDE1LjcwNzFMMTYuNzA3MSAxNC4yOTI5QzE2Ljg5NDYgMTQuMTA1NCAxNy4xNDkgMTQgMTcuNDE0MiAxNEgyMC44MDQ3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOSA3SDE1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTAgMTFIMTQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/files-box - Icon documentation
 */
export function FilesBox({
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
      <path d="M3.14094 13.4832L5.3971 5.21065C5.75306 3.90546 6.93853 3 8.29139 3H15.7086C17.0615 3 18.2469 3.90546 18.6029 5.21065L20.8591 13.4832C20.9526 13.8262 21 14.1801 21 14.5357V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V14.5357C3 14.1801 3.0474 13.8262 3.14094 13.4832Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M3.14453 14H6.58579C6.851 14 7.10536 14.1054 7.29289 14.2929L8.70711 15.7071C8.89464 15.8946 9.149 16 9.41421 16H14.5858C14.851 16 15.1054 15.8946 15.2929 15.7071L16.7071 14.2929C16.8946 14.1054 17.149 14 17.4142 14H20.8047" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M9 7H15" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M10 11H14" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
