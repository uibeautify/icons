import { IconProps } from "../types";

/**
 * @component
 * @name Android
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTkgMTBINUM1IDYuMTM0MDEgOC4xMzQwMSAzIDEyIDNDMTUuODY2IDMgMTkgNi4xMzQwMSAxOSAxMFoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTYuNSA0TDE3LjI1IDMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik03LjUgNEw2Ljc1IDMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik05LjAwMDEgN0g5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTUuMDAwMSA3SDE1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNiAxNEgxOFYxNy44QzE4IDE4LjkyMDEgMTggMTkuNDgwMiAxNy43ODIgMTkuOTA4QzE3LjU5MDMgMjAuMjg0MyAxNy4yODQzIDIwLjU5MDMgMTYuOTA4IDIwLjc4MkMxNi40ODAyIDIxIDE1LjkyMDEgMjEgMTQuOCAyMUg5LjJDOC4wNzk4OSAyMSA3LjUxOTg0IDIxIDcuMDkyMDIgMjAuNzgyQzYuNzE1NjkgMjAuNTkwMyA2LjQwOTczIDIwLjI4NDMgNi4yMTc5OSAxOS45MDhDNiAxOS40ODAyIDYgMTguOTIwMSA2IDE3LjhWMTRaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTIgMTYuNUMyIDE1LjExOTMgMy4xMTkyOSAxNCA0LjUgMTRINlYxN0M2IDE4LjEwNDYgNS4xMDQ1NyAxOSA0IDE5QzIuODk1NDMgMTkgMiAxOC4xMDQ2IDIgMTdWMTYuNVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTggMTRIMTkuNUMyMC44ODA3IDE0IDIyIDE1LjExOTMgMjIgMTYuNVYxN0MyMiAxOC4xMDQ2IDIxLjEwNDYgMTkgMjAgMTlDMTguODk1NCAxOSAxOCAxOC4xMDQ2IDE4IDE3VjE0WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/android - Icon documentation
 */
export function Android({
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
      <path d="M19 10H5C5 6.13401 8.13401 3 12 3C15.866 3 19 6.13401 19 10Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M16.5 4L17.25 3" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M7.5 4L6.75 3" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M9.0001 7H9" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M15.0001 7H15" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M6 14H18V17.8C18 18.9201 18 19.4802 17.782 19.908C17.5903 20.2843 17.2843 20.5903 16.908 20.782C16.4802 21 15.9201 21 14.8 21H9.2C8.07989 21 7.51984 21 7.09202 20.782C6.71569 20.5903 6.40973 20.2843 6.21799 19.908C6 19.4802 6 18.9201 6 17.8V14Z" strokeWidth={strokeWidth} stroke={color}/><path d="M2 16.5C2 15.1193 3.11929 14 4.5 14H6V17C6 18.1046 5.10457 19 4 19C2.89543 19 2 18.1046 2 17V16.5Z" strokeWidth={strokeWidth} stroke={color}/><path d="M18 14H19.5C20.8807 14 22 15.1193 22 16.5V17C22 18.1046 21.1046 19 20 19C18.8954 19 18 18.1046 18 17V14Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
