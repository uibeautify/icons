import { IconProps } from "../types";

/**
 * @component
 * @name VolumeX
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTQgNS41ODg4NlYxOC40MTExQzE0IDE5LjI2ODQgMTQgMTkuNjk3IDEzLjgxOTUgMTkuOTU1MUMxMy42NjE4IDIwLjE4MDUgMTMuNDE4MyAyMC4zMzEgMTMuMTQ2MiAyMC4zNzEyQzEyLjgzNDUgMjAuNDE3MyAxMi40NTEyIDIwLjIyNTYgMTEuNjg0NSAxOS44NDIyTDExLjY4NDUgMTkuODQyMkw0LjY4MzI4IDE2LjM0MTZDNC4yMjc0IDE2LjExMzcgMy45OTk0NSAxNS45OTk3IDMuODAxNzIgMTUuODY5N0MyLjgxNjE1IDE1LjIyMTMgMi4xNjcwMyAxNC4xNzEgMi4wMjc5MSAxMi45OTk2QzIgMTIuNzY0NSAyIDEyLjUwOTcgMiAxMkMyIDExLjQ5MDMgMiAxMS4yMzU1IDIuMDI3OTEgMTEuMDAwNEMyLjE2NzAzIDkuODI4OTcgMi44MTYxNSA4Ljc3ODY3IDMuODAxNzIgOC4xMzAzNUMzLjk5OTQ1IDguMDAwMjcgNC4yMjczOSA3Ljg4NjMgNC42ODMyNyA3LjY1ODM2TDQuNjgzMjggNy42NTgzNkwxMS42ODQ1IDQuMTU3NzdDMTIuNDUxMiAzLjc3NDQxIDEyLjgzNDUgMy41ODI3MyAxMy4xNDYyIDMuNjI4NzdDMTMuNDE4MyAzLjY2ODk4IDEzLjY2MTggMy44MTk0OSAxMy44MTk1IDQuMDQ0ODlDMTQgNC4zMDMwMyAxNCA0LjczMTY0IDE0IDUuNTg4ODZaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTIyIDEwTDE4IDE0TTE4IDEwTDIyIDE0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/volume-x - Icon documentation
 */
export function VolumeX({
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
      <path d="M14 5.58886V18.4111C14 19.2684 14 19.697 13.8195 19.9551C13.6618 20.1805 13.4183 20.331 13.1462 20.3712C12.8345 20.4173 12.4512 20.2256 11.6845 19.8422L11.6845 19.8422L4.68328 16.3416C4.2274 16.1137 3.99945 15.9997 3.80172 15.8697C2.81615 15.2213 2.16703 14.171 2.02791 12.9996C2 12.7645 2 12.5097 2 12C2 11.4903 2 11.2355 2.02791 11.0004C2.16703 9.82897 2.81615 8.77867 3.80172 8.13035C3.99945 8.00027 4.22739 7.8863 4.68327 7.65836L4.68328 7.65836L11.6845 4.15777C12.4512 3.77441 12.8345 3.58273 13.1462 3.62877C13.4183 3.66898 13.6618 3.81949 13.8195 4.04489C14 4.30303 14 4.73164 14 5.58886Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M22 10L18 14M18 10L22 14" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
