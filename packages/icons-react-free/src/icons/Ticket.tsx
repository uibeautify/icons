import { IconProps } from "../types";

/**
 * @component
 * @name Ticket
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMjEgOS4xNzA2NUMxOS44MzQ4IDkuNTgyNDkgMTkgMTAuNjkzNyAxOSAxMS45OTk5QzE5IDEzLjMwNjIgMTkuODM0OCAxNC40MTc0IDIxIDE0LjgyOTJWMTcuNEMyMSAxNy45NjAxIDIxIDE4LjI0MDEgMjAuODkxIDE4LjQ1NEMyMC43OTUxIDE4LjY0MjIgMjAuNjQyMiAxOC43OTUxIDIwLjQ1NCAxOC44OTFDMjAuMjQwMSAxOSAxOS45NjAxIDE5IDE5LjQgMTlINC42QzQuMDM5OTUgMTkgMy43NTk5MiAxOSAzLjU0NjAxIDE4Ljg5MUMzLjM1Nzg1IDE4Ljc5NTEgMy4yMDQ4NyAxOC42NDIyIDMuMTA4OTkgMTguNDU0QzMgMTguMjQwMSAzIDE3Ljk2MDEgMyAxNy40VjE0LjgyOTJDNC4xNjUxOSAxNC40MTc0IDUgMTMuMzA2MSA1IDExLjk5OTlDNSAxMC42OTM3IDQuMTY1MTkgOS41ODI0NCAzIDkuMTcwNlY2LjZDMyA2LjAzOTk1IDMgNS43NTk5MiAzLjEwODk5IDUuNTQ2MDFDMy4yMDQ4NyA1LjM1Nzg1IDMuMzU3ODUgNS4yMDQ4NyAzLjU0NjAxIDUuMTA4OTlDMy43NTk5MiA1IDQuMDM5OTUgNSA0LjYgNUgxOS40QzE5Ljk2MDEgNSAyMC4yNDAxIDUgMjAuNDU0IDUuMTA4OTlDMjAuNjQyMiA1LjIwNDg3IDIwLjc5NTEgNS4zNTc4NSAyMC44OTEgNS41NDYwMUMyMSA1Ljc1OTkyIDIxIDYuMDM5OTUgMjEgNi42VjkuMTcwNjVaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE1IDVWNyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE1IDExVjEzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTUgMTdWMTkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/ticket - Icon documentation
 */
export function Ticket({
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
      <path d="M21 9.17065C19.8348 9.58249 19 10.6937 19 11.9999C19 13.3062 19.8348 14.4174 21 14.8292V17.4C21 17.9601 21 18.2401 20.891 18.454C20.7951 18.6422 20.6422 18.7951 20.454 18.891C20.2401 19 19.9601 19 19.4 19H4.6C4.03995 19 3.75992 19 3.54601 18.891C3.35785 18.7951 3.20487 18.6422 3.10899 18.454C3 18.2401 3 17.9601 3 17.4V14.8292C4.16519 14.4174 5 13.3061 5 11.9999C5 10.6937 4.16519 9.58244 3 9.1706V6.6C3 6.03995 3 5.75992 3.10899 5.54601C3.20487 5.35785 3.35785 5.20487 3.54601 5.10899C3.75992 5 4.03995 5 4.6 5H19.4C19.9601 5 20.2401 5 20.454 5.10899C20.6422 5.20487 20.7951 5.35785 20.891 5.54601C21 5.75992 21 6.03995 21 6.6V9.17065Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M15 5V7" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M15 11V13" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M15 17V19" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
