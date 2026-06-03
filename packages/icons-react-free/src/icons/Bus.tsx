import { IconProps } from "../types";

/**
 * @component
 * @name Bus
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTQuMiAzSDkuOEM4LjExOTg0IDMgNy4yNzk3NiAzIDYuNjM4MDMgMy4zMjY5OEM2LjA3MzU0IDMuNjE0NiA1LjYxNDYgNC4wNzM1NCA1LjMyNjk4IDQuNjM4MDNDNSA1LjI3OTc2IDUgNi4xMTk4NCA1IDcuOFYxMkgxOVY3LjhDMTkgNi4xMTk4NCAxOSA1LjI3OTc2IDE4LjY3MyA0LjYzODAzQzE4LjM4NTQgNC4wNzM1NCAxNy45MjY1IDMuNjE0NiAxNy4zNjIgMy4zMjY5OEMxNi43MjAyIDMgMTUuODgwMiAzIDE0LjIgM1oiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik04IDE4TDkgMThNMTYgMThMMTUgMThNOSAxOEw5IDE5LjRDOSAxOS45NjAxIDkgMjAuMjQwMSA4Ljg5MTAxIDIwLjQ1NEM4Ljc5NTEzIDIwLjY0MjIgOC42NDIxNSAyMC43OTUxIDguNDUzOTkgMjAuODkxQzguMjQwMDggMjEgNy45NjAwNSAyMSA3LjQgMjFMNi42IDIxQzYuMDM5OTUgMjEgNS43NTk5MiAyMSA1LjU0NjAxIDIwLjg5MUM1LjM1Nzg1IDIwLjc5NTEgNS4yMDQ4NyAyMC42NDIyIDUuMTA4OTkgMjAuNDU0QzUgMjAuMjQwMSA1IDE5Ljk2MDEgNSAxOS40TDUgMTJMMTkgMTJMMTkgMTkuNEMxOSAxOS45NjAxIDE5IDIwLjI0MDEgMTguODkxIDIwLjQ1NEMxOC43OTUxIDIwLjY0MjIgMTguNjQyMiAyMC43OTUxIDE4LjQ1NCAyMC44OTFDMTguMjQwMSAyMSAxNy45NjAxIDIxIDE3LjQgMjFMMTYuNiAyMUMxNi4wMzk5IDIxIDE1Ljc1OTkgMjEgMTUuNTQ2IDIwLjg5MUMxNS4zNTc4IDIwLjc5NTEgMTUuMjA0OSAyMC42NDIyIDE1LjEwOSAyMC40NTRDMTUgMjAuMjQwMSAxNSAxOS45NjAxIDE1IDE5LjRMMTUgMThNOSAxOEwxNSAxOCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTggMTVIOSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE1IDE1TDE2IDE1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMiA3VjlINSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTIyIDdWOUgxOSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/bus - Icon documentation
 */
export function Bus({
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
      <path d="M14.2 3H9.8C8.11984 3 7.27976 3 6.63803 3.32698C6.07354 3.6146 5.6146 4.07354 5.32698 4.63803C5 5.27976 5 6.11984 5 7.8V12H19V7.8C19 6.11984 19 5.27976 18.673 4.63803C18.3854 4.07354 17.9265 3.6146 17.362 3.32698C16.7202 3 15.8802 3 14.2 3Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M8 18L9 18M16 18L15 18M9 18L9 19.4C9 19.9601 9 20.2401 8.89101 20.454C8.79513 20.6422 8.64215 20.7951 8.45399 20.891C8.24008 21 7.96005 21 7.4 21L6.6 21C6.03995 21 5.75992 21 5.54601 20.891C5.35785 20.7951 5.20487 20.6422 5.10899 20.454C5 20.2401 5 19.9601 5 19.4L5 12L19 12L19 19.4C19 19.9601 19 20.2401 18.891 20.454C18.7951 20.6422 18.6422 20.7951 18.454 20.891C18.2401 21 17.9601 21 17.4 21L16.6 21C16.0399 21 15.7599 21 15.546 20.891C15.3578 20.7951 15.2049 20.6422 15.109 20.454C15 20.2401 15 19.9601 15 19.4L15 18M9 18L15 18" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M8 15H9" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M15 15L16 15" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M2 7V9H5" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M22 7V9H19" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
