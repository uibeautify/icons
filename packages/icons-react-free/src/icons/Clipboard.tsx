import { IconProps } from "../types";

/**
 * @component
 * @name Clipboard
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNOSA1SDguMkM3LjA3OTg5IDUgNi41MTk4NCA1IDYuMDkyMDIgNS4yMTc5OUM1LjcxNTY5IDUuNDA5NzMgNS40MDk3MyA1LjcxNTY5IDUuMjE3OTkgNi4wOTIwMkM1IDYuNTE5ODQgNSA3LjA3OTg5IDUgOC4yVjE2LjJDNSAxNy44ODAyIDUgMTguNzIwMiA1LjMyNjk4IDE5LjM2MkM1LjYxNDYgMTkuOTI2NSA2LjA3MzU0IDIwLjM4NTQgNi42MzgwMyAyMC42NzNDNy4yNzk3NiAyMSA4LjExOTg0IDIxIDkuOCAyMUgxNC4yQzE1Ljg4MDIgMjEgMTYuNzIwMiAyMSAxNy4zNjIgMjAuNjczQzE3LjkyNjUgMjAuMzg1NCAxOC4zODU0IDE5LjkyNjUgMTguNjczIDE5LjM2MkMxOSAxOC43MjAyIDE5IDE3Ljg4MDIgMTkgMTYuMlY4LjJDMTkgNy4wNzk4OSAxOSA2LjUxOTg0IDE4Ljc4MiA2LjA5MjAyQzE4LjU5MDMgNS43MTU2OSAxOC4yODQzIDUuNDA5NzMgMTcuOTA4IDUuMjE3OTlDMTcuNDgwMiA1IDE2LjkyMDEgNSAxNS44IDVIMTUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjkiIHk9IjMiIHdpZHRoPSI2IiBoZWlnaHQ9IjQiIHJ4PSIxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/clipboard - Icon documentation
 */
export function Clipboard({
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
      <path d="M9 5H8.2C7.07989 5 6.51984 5 6.09202 5.21799C5.71569 5.40973 5.40973 5.71569 5.21799 6.09202C5 6.51984 5 7.07989 5 8.2V16.2C5 17.8802 5 18.7202 5.32698 19.362C5.6146 19.9265 6.07354 20.3854 6.63803 20.673C7.27976 21 8.11984 21 9.8 21H14.2C15.8802 21 16.7202 21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V8.2C19 7.07989 19 6.51984 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.4802 5 16.9201 5 15.8 5H15" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><rect x="9" y="3" width="6" height="4" rx="1" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
