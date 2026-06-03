import { IconProps } from "../types";

/**
 * @component
 * @name FloppyDisk
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyA3LjhDMyA2LjExOTg0IDMgNS4yNzk3NiAzLjMyNjk4IDQuNjM4MDNDMy42MTQ2IDQuMDczNTQgNC4wNzM1NCAzLjYxNDYgNC42MzgwMyAzLjMyNjk4QzUuMjc5NzYgMyA2LjExOTg0IDMgNy44IDNIMTMuMDExOEMxMy43NDU1IDMgMTQuMTEyNCAzIDE0LjQ1NzcgMy4wODI4OUMxNC43NjM4IDMuMTU2MzggMTUuMDU2NCAzLjI3NzU5IDE1LjMyNDkgMy40NDIwOEMxNS42Mjc2IDMuNjI3NiAxNS44ODcgMy44ODcwMyAxNi40MDU5IDQuNDA1ODlMMTkuNTk0MSA3LjU5NDExQzIwLjExMyA4LjExMjk3IDIwLjM3MjQgOC4zNzI0IDIwLjU1NzkgOC42NzUxNUMyMC43MjI0IDguOTQzNTYgMjAuODQzNiA5LjIzNjIgMjAuOTE3MSA5LjU0MjNDMjEgOS44ODc1NyAyMSAxMC4yNTQ1IDIxIDEwLjk4ODJWMTYuMkMyMSAxNy44ODAyIDIxIDE4LjcyMDIgMjAuNjczIDE5LjM2MkMyMC4zODU0IDE5LjkyNjUgMTkuOTI2NSAyMC4zODU0IDE5LjM2MiAyMC42NzNDMTguNzIwMiAyMSAxNy44ODAyIDIxIDE2LjIgMjFINy44QzYuMTE5ODQgMjEgNS4yNzk3NiAyMSA0LjYzODAzIDIwLjY3M0M0LjA3MzU0IDIwLjM4NTQgMy42MTQ2IDE5LjkyNjUgMy4zMjY5OCAxOS4zNjJDMyAxOC43MjAyIDMgMTcuODgwMiAzIDE2LjJWNy44WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik03IDIxVjE1QzcgMTMuODk1NCA3Ljg5NTQzIDEzIDkgMTNIMTVDMTYuMTA0NiAxMyAxNyAxMy44OTU0IDE3IDE1VjIxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTEgMTdMMTMgMTciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik03IDNWNUM3IDYuMTA0NTcgNy44OTU0MyA3IDkgN0gxMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/floppy-disk - Icon documentation
 */
export function FloppyDisk({
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
      <path d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H13.0118C13.7455 3 14.1124 3 14.4577 3.08289C14.7638 3.15638 15.0564 3.27759 15.3249 3.44208C15.6276 3.6276 15.887 3.88703 16.4059 4.40589L19.5941 7.59411C20.113 8.11297 20.3724 8.3724 20.5579 8.67515C20.7224 8.94356 20.8436 9.2362 20.9171 9.5423C21 9.88757 21 10.2545 21 10.9882V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z" strokeWidth={strokeWidth} stroke={color}/><path d="M7 21V15C7 13.8954 7.89543 13 9 13H15C16.1046 13 17 13.8954 17 15V21" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M11 17L13 17" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M7 3V5C7 6.10457 7.89543 7 9 7H13" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
