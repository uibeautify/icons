import { IconProps } from "../types";

/**
 * @component
 * @name Star
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTUuMDcxNSA4LjQyNDQzTDEyLjQwNzggNC4wNjU1NkMxMi4yMjE0IDMuNzYwNjQgMTEuNzc4NiAzLjc2MDY0IDExLjU5MjIgNC4wNjU1Nkw4LjkyODQ4IDguNDI0NDNDOC44NTU5MiA4LjU0MzE3IDguNzM1MjIgOC42MjQzOCA4LjU5NzkgOC42NDY4NUwzLjM3MjggOS41MDE4NkMyLjk4NjYgOS41NjUwNiAyLjgzNTkzIDEwLjA0MDMgMy4xMTUxOCAxMC4zMTQ1TDcuMDQzMTggMTQuMTcxQzcuMTU0NzcgMTQuMjgwNiA3LjIwNTY5IDE0LjQzNzggNy4xNzk1MiAxNC41OTJMNi4zMjI2MiAxOS42Mzk5QzYuMjU2MTIgMjAuMDMxNiA2LjY2OTA0IDIwLjMyODcgNy4wMTkzNiAyMC4xNDExTDExLjc3NDQgMTcuNTk0NkMxMS45MTUzIDE3LjUxOTEgMTIuMDg0NyAxNy41MTkxIDEyLjIyNTYgMTcuNTk0NkwxNi45ODA2IDIwLjE0MTFDMTcuMzMxIDIwLjMyODcgMTcuNzQzOSAyMC4wMzE3IDE3LjY3NzQgMTkuNjM5OUwxNi44MjA1IDE0LjU5MkMxNi43OTQzIDE0LjQzNzggMTYuODQ1MiAxNC4yODA2IDE2Ljk1NjggMTQuMTcxTDIwLjg4NDggMTAuMzE0NUMyMS4xNjQxIDEwLjA0MDMgMjEuMDEzNCA5LjU2NTA2IDIwLjYyNzIgOS41MDE4NkwxNS40MDIxIDguNjQ2ODVDMTUuMjY0OCA4LjYyNDM4IDE1LjE0NDEgOC41NDMxNyAxNS4wNzE1IDguNDI0NDNaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/star - Icon documentation
 */
export function Star({
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
      <path d="M15.0715 8.42443L12.4078 4.06556C12.2214 3.76064 11.7786 3.76064 11.5922 4.06556L8.92848 8.42443C8.85592 8.54317 8.73522 8.62438 8.5979 8.64685L3.3728 9.50186C2.9866 9.56506 2.83593 10.0403 3.11518 10.3145L7.04318 14.171C7.15477 14.2806 7.20569 14.4378 7.17952 14.592L6.32262 19.6399C6.25612 20.0316 6.66904 20.3287 7.01936 20.1411L11.7744 17.5946C11.9153 17.5191 12.0847 17.5191 12.2256 17.5946L16.9806 20.1411C17.331 20.3287 17.7439 20.0317 17.6774 19.6399L16.8205 14.592C16.7943 14.4378 16.8452 14.2806 16.9568 14.171L20.8848 10.3145C21.1641 10.0403 21.0134 9.56506 20.6272 9.50186L15.4021 8.64685C15.2648 8.62438 15.1441 8.54317 15.0715 8.42443Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
