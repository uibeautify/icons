import { IconProps } from "../types";

/**
 * @component
 * @name Diamond02
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNi4wNTAwMyA1LjQyNDk2QzYuMzk3MzUgNC45MDM5OCA2LjU3MTAxIDQuNjQzNDkgNi44MDA0NSA0LjQ1NDkxQzcuMDAzNTcgNC4yODc5NiA3LjIzNzYyIDQuMTYyNyA3LjQ4OTIgNC4wODYzQzcuNzczMzcgNCA4LjA4NjQ1IDQgOC43MTI1OSA0SDE1LjI4NzRDMTUuOTEzNiA0IDE2LjIyNjYgNCAxNi41MTA4IDQuMDg2M0MxNi43NjI0IDQuMTYyNyAxNi45OTY0IDQuMjg3OTYgMTcuMTk5NiA0LjQ1NDkxQzE3LjQyOSA0LjY0MzQ5IDE3LjYwMjcgNC45MDM5OCAxNy45NSA1LjQyNDk2TDE5LjY4NyA4LjAzMDU1QzIwLjE1ODMgOC43Mzc0OSAyMC4zOTQgOS4wOTA5NiAyMC40NzMxIDkuNDY5NjNDMjAuNTQyOSA5LjgwMzkzIDIwLjUyNTkgMTAuMTUwNSAyMC40MjM4IDEwLjQ3NjRDMjAuMzA4MiAxMC44NDU2IDIwLjAzOTIgMTEuMTc0NCAxOS41MDExIDExLjgzMTlMMTQuNDc2NyAxNy45NzNDMTMuNjI3OSAxOS4wMTA0IDEzLjIwMzUgMTkuNTI5IDEyLjY5MzQgMTkuNzE3NkMxMi4yNDU5IDE5Ljg4MyAxMS43NTQxIDE5Ljg4MyAxMS4zMDY2IDE5LjcxNzZDMTAuNzk2NSAxOS41MjkgMTAuMzcyMSAxOS4wMTA0IDkuNTIzMzQgMTcuOTczTDQuNDk4ODcgMTEuODMxOUMzLjk2MDg0IDExLjE3NDQgMy42OTE4MyAxMC44NDU2IDMuNTc2MTggMTAuNDc2NEMzLjQ3NDA4IDEwLjE1MDUgMy40NTcxMyA5LjgwMzkzIDMuNTI2OTQgOS40Njk2M0MzLjYwNjAzIDkuMDkwOTYgMy44NDE2NyA4LjczNzQ5IDQuMzEyOTcgOC4wMzA1NUw2LjA1MDAzIDUuNDI0OTZaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTMgMTBMMjEgMTAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTAgNEw4IDEwTDExLjYzNjQgMjAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTQgNEwxNiAxMEwxMi4zNjM2IDIwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/diamond-02 - Icon documentation
 */
export function Diamond02({
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
      <path d="M6.05003 5.42496C6.39735 4.90398 6.57101 4.64349 6.80045 4.45491C7.00357 4.28796 7.23762 4.1627 7.4892 4.0863C7.77337 4 8.08645 4 8.71259 4H15.2874C15.9136 4 16.2266 4 16.5108 4.0863C16.7624 4.1627 16.9964 4.28796 17.1996 4.45491C17.429 4.64349 17.6027 4.90398 17.95 5.42496L19.687 8.03055C20.1583 8.73749 20.394 9.09096 20.4731 9.46963C20.5429 9.80393 20.5259 10.1505 20.4238 10.4764C20.3082 10.8456 20.0392 11.1744 19.5011 11.8319L14.4767 17.973C13.6279 19.0104 13.2035 19.529 12.6934 19.7176C12.2459 19.883 11.7541 19.883 11.3066 19.7176C10.7965 19.529 10.3721 19.0104 9.52334 17.973L4.49887 11.8319C3.96084 11.1744 3.69183 10.8456 3.57618 10.4764C3.47408 10.1505 3.45713 9.80393 3.52694 9.46963C3.60603 9.09096 3.84167 8.73749 4.31297 8.03055L6.05003 5.42496Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M3 10L21 10" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M10 4L8 10L11.6364 20" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M14 4L16 10L12.3636 20" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
