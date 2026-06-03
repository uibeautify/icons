import { IconProps } from "../types";

/**
 * @component
 * @name TagPlus
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTYuMjczMyA4TDEyLjg3MjkgNC41OTk2NkMxMi4xNzYyIDMuOTAyOTEgMTEuODI3OCAzLjU1NDUzIDExLjQxNDkgMy4zNDA2OUMxMS4wNDk0IDMuMTUxNDUgMTAuNjQ5IDMuMDM5NDEgMTAuMjM4NCAzLjAxMTU1QzkuNzc0NDMgMi45ODAwNyA5LjI5NTg1IDMuMDk3MDkgOC4zMzg3IDMuMzMxMTRMNy4xNjMxMiAzLjYxODU5QzYuMTM0NjYgMy44NzAwNyA1LjYyMDQzIDMuOTk1ODEgNS4yMDI1NSA0LjI2MTk5QzQuODMyOTUgNC40OTc0MSA0LjUxOTQyIDQuODEwOTUgNC4yODM5OSA1LjE4MDU0QzQuMDE3ODEgNS41OTg0MyAzLjg5MjA3IDYuMTEyNjYgMy42NDA1OSA3LjE0MTExTDMuMzUzMTQgOC4zMTY2OUMzLjExOTA5IDkuMjczODUgMy4wMDIwNyA5Ljc1MjQzIDMuMDMzNTUgMTAuMjE2NEMzLjA2MTQxIDEwLjYyNyAzLjE3MzQ1IDExLjAyNzQgMy4zNjI2OSAxMS4zOTI5QzMuNTc2NTMgMTEuODA1OCAzLjkyNDkxIDEyLjE1NDIgNC42MjE2NiAxMi44NTA5TDExLjg3NjEgMjAuMTA1NEMxMy4wMzg5IDIxLjI2ODEgMTQuOTI0MSAyMS4yNjgxIDE2LjA4NjkgMjAuMTA1NCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEwLjE2MTMgOS4wNTMyMkMxMC4xNjEzIDkuNjA1NTEgOS43MTM2MiAxMC4wNTMyIDkuMTYxMzMgMTAuMDUzMkM4LjYwOTA1IDEwLjA1MzIgOC4xNjEzMyA5LjYwNTUxIDguMTYxMzMgOS4wNTMyMkM4LjE2MTMzIDguNTAwOTQgOC42MDkwNSA4LjA1MzIyIDkuMTYxMzMgOC4wNTMyMkM5LjcxMzYyIDguMDUzMjIgMTAuMTYxMyA4LjUwMDk0IDEwLjE2MTMgOS4wNTMyMloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMjEgMTRIMTVNMTggMTFMMTggMTciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/tag-plus - Icon documentation
 */
export function TagPlus({
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
      <path d="M16.2733 8L12.8729 4.59966C12.1762 3.90291 11.8278 3.55453 11.4149 3.34069C11.0494 3.15145 10.649 3.03941 10.2384 3.01155C9.77443 2.98007 9.29585 3.09709 8.3387 3.33114L7.16312 3.61859C6.13466 3.87007 5.62043 3.99581 5.20255 4.26199C4.83295 4.49741 4.51942 4.81095 4.28399 5.18054C4.01781 5.59843 3.89207 6.11266 3.64059 7.14111L3.35314 8.31669C3.11909 9.27385 3.00207 9.75243 3.03355 10.2164C3.06141 10.627 3.17345 11.0274 3.36269 11.3929C3.57653 11.8058 3.92491 12.1542 4.62166 12.8509L11.8761 20.1054C13.0389 21.2681 14.9241 21.2681 16.0869 20.1054" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M10.1613 9.05322C10.1613 9.60551 9.71362 10.0532 9.16133 10.0532C8.60905 10.0532 8.16133 9.60551 8.16133 9.05322C8.16133 8.50094 8.60905 8.05322 9.16133 8.05322C9.71362 8.05322 10.1613 8.50094 10.1613 9.05322Z" strokeWidth={strokeWidth} stroke={color}/><path d="M21 14H15M18 11L18 17" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
