import { IconProps } from "../types";

/**
 * @component
 * @name VolumeUp
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMjAuMjIxMSA2QzIxLjM0NjIgNy43MjU1NiAyMiA5Ljc4NjQyIDIyIDEyQzIyIDE0LjIxMzYgMjEuMzQ2MiAxNi4yNzQ0IDIwLjIyMTEgMTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNyAxNS42MDc1QzE3LjYzNDggMTQuNTU0IDE4IDEzLjMxOTYgMTggMTEuOTk5OUMxOCAxMC42ODAzIDE3LjYzNDggOS40NDU4OCAxNyA4LjM5MjMzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTMgNS42OTUyN1YxOC4zMDQ3QzEzIDE5LjE5MjUgMTMgMTkuNjM2NCAxMi44MTMzIDE5Ljg5NzNDMTIuNjUwMyAyMC4xMjUxIDEyLjM5OTQgMjAuMjc0MSAxMi4xMjE0IDIwLjMwODFDMTEuODAyOSAyMC4zNDcgMTEuNDEzMiAyMC4xMzQ1IDEwLjYzMzggMTkuNzA5NEw0LjYzMzY5IDE2LjQzNjZMNC42MzM2NyAxNi40MzY1QzQuMTAyMTcgMTYuMTQ2NiAzLjgzNjQxIDE2LjAwMTcgMy42MDk3NCAxNS44MzI4QzIuNzU0ODcgMTUuMTk1NiAyLjE4OTcxIDE0LjI0MzYgMi4wMzk3NiAxMy4xODgxQzIgMTIuOTA4MiAyIDEyLjYwNTQgMiAxMkMyIDExLjM5NDYgMiAxMS4wOTE4IDIuMDM5NzYgMTAuODEyQzIuMTg5NzEgOS43NTYzOCAyLjc1NDg3IDguODA0MzUgMy42MDk3NCA4LjE2NzI1QzMuODM2NDEgNy45OTgzMiA0LjEwMjE3IDcuODUzMzYgNC42MzM2OSA3LjU2MzQ0TDEwLjYzMzggNC4yOTA2M0MxMS40MTMyIDMuODY1NTMgMTEuODAyOSAzLjY1Mjk4IDEyLjEyMTQgMy42OTE5NEMxMi4zOTk0IDMuNzI1OTMgMTIuNjUwMyAzLjg3NDkyIDEyLjgxMzMgNC4xMDI2NkMxMyA0LjM2MzY0IDEzIDQuODA3NTIgMTMgNS42OTUyN1oiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/volume-up - Icon documentation
 */
export function VolumeUp({
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
      <path d="M20.2211 6C21.3462 7.72556 22 9.78642 22 12C22 14.2136 21.3462 16.2744 20.2211 18" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M17 15.6075C17.6348 14.554 18 13.3196 18 11.9999C18 10.6803 17.6348 9.44588 17 8.39233" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M13 5.69527V18.3047C13 19.1925 13 19.6364 12.8133 19.8973C12.6503 20.1251 12.3994 20.2741 12.1214 20.3081C11.8029 20.347 11.4132 20.1345 10.6338 19.7094L4.63369 16.4366L4.63367 16.4365C4.10217 16.1466 3.83641 16.0017 3.60974 15.8328C2.75487 15.1956 2.18971 14.2436 2.03976 13.1881C2 12.9082 2 12.6054 2 12C2 11.3946 2 11.0918 2.03976 10.812C2.18971 9.75638 2.75487 8.80435 3.60974 8.16725C3.83641 7.99832 4.10217 7.85336 4.63369 7.56344L10.6338 4.29063C11.4132 3.86553 11.8029 3.65298 12.1214 3.69194C12.3994 3.72593 12.6503 3.87492 12.8133 4.10266C13 4.36364 13 4.80752 13 5.69527Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
