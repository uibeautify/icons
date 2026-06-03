import { IconProps } from "../types";

/**
 * @component
 * @name Vimeo
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTguMzcxNiA0QzE1LjAyNzkgNCAxMy40NDQ4IDguMjUyMDcgMTMuNDQ0OCA4LjI1MjA3TDEzLjcwMzYgOC42MjEzNUMxNC4wMDA1IDguNDQ2NjMgMTQuMzU1NyA4LjI1MjA3IDE0Ljc2NjYgOC4yNTIwN0MxNS4yMTMxIDguMjUyMDcgMTUuNTgzNiA4LjU3NjUzIDE1LjU4MzYgOS40MzIzOEMxNS41ODM2IDEwLjg0OTcgMTMuOTM3IDE0LjMzMzEgMTIuNDU3OSAxNC4zMzMxQzExLjgwMDkgMTQuMzMzMSAxMS41MDY2IDEzLjI4NTIgMTEuMDgwNCAxMS4zOTEyQzEwLjkzNTcgMTAuODM3MiAxMC42ODIgOS40MTczMyAxMC4zMTQyIDcuMTM2NjVDOS45NzE3MiA1LjAyMzEgOS43MjgxMSA0LjE3NzE3IDguNTE1MzkgNC4xNzcxN0M1LjczMjMgNC4xNzcxNyAzIDcuOTkwMDUgMyA3Ljk5MDA1TDMuMzk1NzQgOC44MDEwOEMzLjY5MjYzIDguNjI2MzYgNC4wNDUyOSA4LjQyOTI0IDQuNTYyNzcgOC40MjkyNEM1LjU0OTY4IDguNDI5MjQgNS42NDg2NCA5LjUwNzIgNi4yMTQ0MiAxMS41MDM0QzYuNzI0MzEgMTMuMzM1IDcuMjI2NjEgMTUuMTM0MiA3Ljc0NDIxIDE2Ljk5ODJDOC4yNjQzIDE4Ljg2MjIgOS4zMzIzNyAyMCAxMC42NDY1IDIwQzEyLjYxNzggMjAgMTQuNTE1NSAxOC4zNTU2IDE3LjA5MzEgMTUuMDc0M0MxOC4yOTMgMTMuNTYyMSAxOS41NTY1IDExLjUzMSAyMC4yMTg2IDEwLjEwMTFDMjAuODg4MyA4LjY1ODgxIDIxIDcuNDMxMTEgMjEgNi44NjcxNkMyMSA1LjIzMDI2IDIwLjM0MjkgNCAxOC4zNzE2IDRaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/vimeo - Icon documentation
 */
export function Vimeo({
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
      <path d="M18.3716 4C15.0279 4 13.4448 8.25207 13.4448 8.25207L13.7036 8.62135C14.0005 8.44663 14.3557 8.25207 14.7666 8.25207C15.2131 8.25207 15.5836 8.57653 15.5836 9.43238C15.5836 10.8497 13.937 14.3331 12.4579 14.3331C11.8009 14.3331 11.5066 13.2852 11.0804 11.3912C10.9357 10.8372 10.682 9.41733 10.3142 7.13665C9.97172 5.0231 9.72811 4.17717 8.51539 4.17717C5.7323 4.17717 3 7.99005 3 7.99005L3.39574 8.80108C3.69263 8.62636 4.04529 8.42924 4.56277 8.42924C5.54968 8.42924 5.64864 9.5072 6.21442 11.5034C6.72431 13.335 7.22661 15.1342 7.74421 16.9982C8.2643 18.8622 9.33237 20 10.6465 20C12.6178 20 14.5155 18.3556 17.0931 15.0743C18.293 13.5621 19.5565 11.531 20.2186 10.1011C20.8883 8.65881 21 7.43111 21 6.86716C21 5.23026 20.3429 4 18.3716 4Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
