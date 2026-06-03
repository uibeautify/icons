import { IconProps } from "../types";

/**
 * @component
 * @name Edit
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTIgM0g3LjhDNi4xMTk4NCAzIDUuMjc5NzYgMyA0LjYzODAzIDMuMzI2OThDNC4wNzM1NCAzLjYxNDYgMy42MTQ2IDQuMDczNTQgMy4zMjY5OCA0LjYzODAzQzMgNS4yNzk3NiAzIDYuMTE5ODQgMyA3LjhWMTYuMkMzIDE3Ljg4MDIgMyAxOC43MjAyIDMuMzI2OTggMTkuMzYyQzMuNjE0NiAxOS45MjY1IDQuMDczNTQgMjAuMzg1NCA0LjYzODAzIDIwLjY3M0M1LjI3OTc2IDIxIDYuMTE5ODQgMjEgNy44IDIxSDE2LjJDMTcuODgwMiAyMSAxOC43MjAyIDIxIDE5LjM2MiAyMC42NzNDMTkuOTI2NSAyMC4zODU0IDIwLjM4NTQgMTkuOTI2NSAyMC42NzMgMTkuMzYyQzIxIDE4LjcyMDIgMjEgMTcuODgwMiAyMSAxNi4yVjEyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMjAuOTM4IDQuMDc0MTdMMTkuODY5NSAzLjAwNTY5QzE5LjQ3OSAyLjYxNTE3IDE4Ljg0NTggMi42MTUxNyAxOC40NTUzIDMuMDA1NjlMMTAuNjIxNCAxMC44Mzk2QzEwLjEwNjIgMTEuMzU0OCA5Ljc0MTU4IDEyLjAwMDggOS41NjY3MiAxMi43MDhMOC45OTk5OSAxNS4wMDAxTDExLjI4MjUgMTQuMzg3M0MxMS45NiAxNC4yMDU0IDEyLjU3NzggMTMuODQ4NiAxMy4wNzM4IDEzLjM1MjVMMjAuOTM4IDUuNDg4MzhDMjEuMzI4NSA1LjA5Nzg2IDIxLjMyODUgNC40NjQ3IDIwLjkzOCA0LjA3NDE3WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/edit - Icon documentation
 */
export function Edit({
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
      <path d="M12 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V12" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M20.938 4.07417L19.8695 3.00569C19.479 2.61517 18.8458 2.61517 18.4553 3.00569L10.6214 10.8396C10.1062 11.3548 9.74158 12.0008 9.56672 12.708L8.99999 15.0001L11.2825 14.3873C11.96 14.2054 12.5778 13.8486 13.0738 13.3525L20.938 5.48838C21.3285 5.09786 21.3285 4.4647 20.938 4.07417Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
