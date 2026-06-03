import { IconProps } from "../types";

/**
 * @component
 * @name ErrorTriangle
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTAuNTY4OSA0Ljg2MjE2QzExLjAyOTUgMy45NDA5NSAxMS4yNTk4IDMuNDgwMzUgMTEuNTcxNSAzLjMzMjU0QzExLjg0MjcgMy4yMDM5MSAxMi4xNTczIDMuMjAzOTEgMTIuNDI4NSAzLjMzMjU0QzEyLjc0MDIgMy40ODAzNSAxMi45NzA1IDMuOTQwOTUgMTMuNDMxMSA0Ljg2MjE3TDIwLjM0MjIgMTguNjg0NUMyMC43MjU2IDE5LjQ1MTIgMjAuOTE3MyAxOS44MzQ1IDIwLjg3MTIgMjAuMTQ2MkMyMC44MzEgMjAuNDE4MyAyMC42ODA1IDIwLjY2MTggMjAuNDU1MSAyMC44MTk1QzIwLjE5NyAyMSAxOS43Njg0IDIxIDE4LjkxMTEgMjFMNS4wODg4NiAyMUM0LjIzMTY0IDIxIDMuODAzMDMgMjEgMy41NDQ4OSAyMC44MTk1QzMuMzE5NDkgMjAuNjYxOCAzLjE2ODk4IDIwLjQxODMgMy4xMjg3NyAyMC4xNDYyQzMuMDgyNzMgMTkuODM0NSAzLjI3NDQxIDE5LjQ1MTIgMy42NTc3NyAxOC42ODQ1TDEwLjU2ODkgNC44NjIxNloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTIgMTNMMTIgMTAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMiAxN0gxMi4wMDAxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/error-triangle - Icon documentation
 */
export function ErrorTriangle({
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
      <path d="M10.5689 4.86216C11.0295 3.94095 11.2598 3.48035 11.5715 3.33254C11.8427 3.20391 12.1573 3.20391 12.4285 3.33254C12.7402 3.48035 12.9705 3.94095 13.4311 4.86217L20.3422 18.6845C20.7256 19.4512 20.9173 19.8345 20.8712 20.1462C20.831 20.4183 20.6805 20.6618 20.4551 20.8195C20.197 21 19.7684 21 18.9111 21L5.08886 21C4.23164 21 3.80303 21 3.54489 20.8195C3.31949 20.6618 3.16898 20.4183 3.12877 20.1462C3.08273 19.8345 3.27441 19.4512 3.65777 18.6845L10.5689 4.86216Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M12 13L12 10" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 17H12.0001" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
