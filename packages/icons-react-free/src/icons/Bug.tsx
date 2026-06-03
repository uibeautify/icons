import { IconProps } from "../types";

/**
 * @component
 * @name Bug
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNiAxMy44QzYgMTIuMTE5OCA2IDExLjI3OTggNi4zMjY5OCAxMC42MzhDNi42MTQ2IDEwLjA3MzUgNy4wNzM1NCA5LjYxNDYgNy42MzgwMyA5LjMyNjk4QzguMjc5NzYgOSA5LjExOTg0IDkgMTAuOCA5SDEzLjJDMTQuODgwMiA5IDE1LjcyMDIgOSAxNi4zNjIgOS4zMjY5OEMxNi45MjY1IDkuNjE0NiAxNy4zODU0IDEwLjA3MzUgMTcuNjczIDEwLjYzOEMxOCAxMS4yNzk4IDE4IDEyLjExOTggMTggMTMuOFYxNC4zMTYzQzE4IDE0Ljk0MDMgMTggMTUuMjUyMyAxNy45Mzg3IDE1LjU1MDhDMTcuODg0NCAxNS44MTU2IDE3Ljc5NDUgMTYuMDcxOCAxNy42NzE1IDE2LjMxMjVDMTcuNTMyOSAxNi41ODM4IDE3LjMzOCAxNi44Mjc1IDE2Ljk0ODIgMTcuMzE0OEwxNS4yNDk0IDE5LjQzODNDMTQuOTA4MyAxOS44NjQ2IDE0LjczNzggMjAuMDc3NyAxNC41NDIyIDIwLjI1MDJDMTQuMTI3NyAyMC42MTU3IDEzLjYyMDIgMjAuODU5NiAxMy4wNzU4IDIwLjk1NUMxMi44MTg5IDIxIDEyLjU0NTkgMjEgMTIgMjFDMTEuNDU0MSAyMSAxMS4xODExIDIxIDEwLjkyNDIgMjAuOTU1QzEwLjM3OTggMjAuODU5NiA5Ljg3MjM0IDIwLjYxNTcgOS40NTc3OSAyMC4yNTAyQzkuMjYyMTggMjAuMDc3NyA5LjA5MTY2IDE5Ljg2NDYgOC43NTA2MSAxOS40MzgzTDcuMDUxODMgMTcuMzE0OEM2LjY2MTk5IDE2LjgyNzUgNi40NjcwNiAxNi41ODM4IDYuMzI4NDUgMTYuMzEyNUM2LjIwNTQ4IDE2LjA3MTggNi4xMTU2IDE1LjgxNTYgNi4wNjEyNSAxNS41NTA4QzYgMTUuMjUyMyA2IDE0Ljk0MDMgNiAxNC4zMTYzVjEzLjhaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNiAxNEwzIDE0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMjEgMTRIMTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik00IDIxVjE5LjUzNTJDNCAxOS4yMDA4IDQuMTY3MSAxOC44ODg2IDQuNDQ1MyAxOC43MDMxTDYuODcwMTkgMTcuMDg2NSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTQgNi45OTk5OVY4LjI3OTI0QzQgOC43MDk2NyA0LjI3NTQzIDkuMDkxOCA0LjY4Mzc3IDkuMjI3OTJMNi41IDkuODMzMzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0yMCAyMVYxOS41MzUyQzIwIDE5LjIwMDggMTkuODMyOSAxOC44ODg2IDE5LjU1NDcgMTguNzAzMUwxNy4xMzI1IDE3LjA4ODMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0yMCA3VjguMjc5MjRDMjAgOC43MDk2NyAxOS43MjQ2IDkuMDkxODEgMTkuMzE2MiA5LjIyNzkyTDE3Ljc1IDkuNzUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik05IDdDOSA1LjM0MzE1IDEwLjM0MzEgNCAxMiA0QzEzLjY1NjkgNCAxNSA1LjM0MzE1IDE1IDdWOUg5VjdaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTIgMTNMMTIgMjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNC41IDQuNUwxNiAzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOS41IDQuNUw4IDMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/bug - Icon documentation
 */
export function Bug({
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
      <path d="M6 13.8C6 12.1198 6 11.2798 6.32698 10.638C6.6146 10.0735 7.07354 9.6146 7.63803 9.32698C8.27976 9 9.11984 9 10.8 9H13.2C14.8802 9 15.7202 9 16.362 9.32698C16.9265 9.6146 17.3854 10.0735 17.673 10.638C18 11.2798 18 12.1198 18 13.8V14.3163C18 14.9403 18 15.2523 17.9387 15.5508C17.8844 15.8156 17.7945 16.0718 17.6715 16.3125C17.5329 16.5838 17.338 16.8275 16.9482 17.3148L15.2494 19.4383C14.9083 19.8646 14.7378 20.0777 14.5422 20.2502C14.1277 20.6157 13.6202 20.8596 13.0758 20.955C12.8189 21 12.5459 21 12 21C11.4541 21 11.1811 21 10.9242 20.955C10.3798 20.8596 9.87234 20.6157 9.45779 20.2502C9.26218 20.0777 9.09166 19.8646 8.75061 19.4383L7.05183 17.3148C6.66199 16.8275 6.46706 16.5838 6.32845 16.3125C6.20548 16.0718 6.1156 15.8156 6.06125 15.5508C6 15.2523 6 14.9403 6 14.3163V13.8Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M6 14L3 14" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M21 14H18" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M4 21V19.5352C4 19.2008 4.1671 18.8886 4.4453 18.7031L6.87019 17.0865" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M4 6.99999V8.27924C4 8.70967 4.27543 9.0918 4.68377 9.22792L6.5 9.83333" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M20 21V19.5352C20 19.2008 19.8329 18.8886 19.5547 18.7031L17.1325 17.0883" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M20 7V8.27924C20 8.70967 19.7246 9.09181 19.3162 9.22792L17.75 9.75" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7V9H9V7Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 13L12 21" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M14.5 4.5L16 3" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M9.5 4.5L8 3" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
