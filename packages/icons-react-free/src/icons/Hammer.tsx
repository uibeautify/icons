import { IconProps } from "../types";

/**
 * @component
 * @name Hammer
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTkuMzkyOSA5LjI1NjM1TDIxIDEwLjg2MzVMMTcuNzg1NyAxNC4wNzc4TDE2LjE3ODYgMTIuNDcwNkwxNi44MjE0IDExLjgyNzhMMTUuMjE0MyAxMC4yMjA2TDE0LjU3MTQgMTAuODYzNUwxMiA4LjI5MjA2QzExLjMwNyA1LjMwMzIgNi41MzU3MSA0LjExMzQ5IDYuNTM1NzEgNC4xMTM0OUMxMC4xMTMyIDIuNjM5OTMgMTQuNDI1MyA0LjI4ODgxIDE1LjIxNDMgNS4wNzc3N0wxNy43ODU3IDcuNjQ5MThMMTcuMTQyOCA4LjI5MjA1TDE4Ljc1IDkuODk5MjFMMTkuMzkyOSA5LjI1NjM1WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEyLjMyMTQgOC42MTM1NkwxNC41NzE0IDEwLjg2MzZMNi4zODE4MSAxOS42NDQ5QzUuOTk1ODIgMjAuMDU4OCA1LjM0MzU3IDIwLjA3MDIgNC45NDMzOSAxOS42N0wzLjIxOTQ0IDE3Ljk0NkMyLjgwOTU0IDE3LjUzNjIgMi44MzI5MyAxNi44NjQ3IDMuMjcwMzUgMTYuNDg0M0wxMi4zMjE0IDguNjEzNTZaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/hammer - Icon documentation
 */
export function Hammer({
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
      <path d="M19.3929 9.25635L21 10.8635L17.7857 14.0778L16.1786 12.4706L16.8214 11.8278L15.2143 10.2206L14.5714 10.8635L12 8.29206C11.307 5.3032 6.53571 4.11349 6.53571 4.11349C10.1132 2.63993 14.4253 4.28881 15.2143 5.07777L17.7857 7.64918L17.1428 8.29205L18.75 9.89921L19.3929 9.25635Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M12.3214 8.61356L14.5714 10.8636L6.38181 19.6449C5.99582 20.0588 5.34357 20.0702 4.94339 19.67L3.21944 17.946C2.80954 17.5362 2.83293 16.8647 3.27035 16.4843L12.3214 8.61356Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
