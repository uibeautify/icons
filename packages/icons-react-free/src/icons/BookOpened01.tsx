import { IconProps } from "../types";

/**
 * @component
 * @name BookOpened01
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTIgNUwxMy4zODc3IDQuMDc0ODhDMTMuOTg3IDMuNjc1MzUgMTQuMjg2NiAzLjQ3NTU5IDE0LjYxMDggMy4zMzQwOEMxNC44OTg1IDMuMjA4NDcgMTUuMjAwMSAzLjExNzE3IDE1LjUwOTIgMy4wNjIwN0MxNS44NTc0IDMgMTYuMjE3NSAzIDE2LjkzNzggM0gyMVYxOUgxNi40NTMzQzE1LjkxMzEgMTkgMTUuNjQzIDE5IDE1LjM4MTkgMTkuMDQ2NkMxNS4xNSAxOS4wODc5IDE0LjkyMzkgMTkuMTU2MyAxNC43MDgxIDE5LjI1MDZDMTQuNDY1IDE5LjM1NjcgMTQuMjQwMiAxOS41MDY1IDEzLjc5MDggMTkuODA2MkwxMiAyMUwxMC4yMDkyIDE5LjgwNjJDOS43NTk3NyAxOS41MDY1IDkuNTM1MDQgMTkuMzU2NyA5LjI5MTkxIDE5LjI1MDZDOS4wNzYxIDE5LjE1NjMgOC44NDk5NSAxOS4wODc5IDguNjE4MTQgMTkuMDQ2NkM4LjM1Njk2IDE5IDguMDg2ODcgMTkgNy41NDY2OCAxOUgzVjNINy4wNjIyNEM3Ljc4MjQ5IDMgOC4xNDI2MiAzIDguNDkwODUgMy4wNjIwN0M4Ljc5OTk0IDMuMTE3MTcgOS4xMDE0NyAzLjIwODQ3IDkuMzg5MjEgMy4zMzQwOEM5LjcxMzM5IDMuNDc1NTkgMTAuMDEzIDMuNjc1MzUgMTAuNjEyMyA0LjA3NDg4TDEyIDVaTTEyIDIxVjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/book-opened-01 - Icon documentation
 */
export function BookOpened01({
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
      <path d="M12 5L13.3877 4.07488C13.987 3.67535 14.2866 3.47559 14.6108 3.33408C14.8985 3.20847 15.2001 3.11717 15.5092 3.06207C15.8574 3 16.2175 3 16.9378 3H21V19H16.4533C15.9131 19 15.643 19 15.3819 19.0466C15.15 19.0879 14.9239 19.1563 14.7081 19.2506C14.465 19.3567 14.2402 19.5065 13.7908 19.8062L12 21L10.2092 19.8062C9.75977 19.5065 9.53504 19.3567 9.29191 19.2506C9.0761 19.1563 8.84995 19.0879 8.61814 19.0466C8.35696 19 8.08687 19 7.54668 19H3V3H7.06224C7.78249 3 8.14262 3 8.49085 3.06207C8.79994 3.11717 9.10147 3.20847 9.38921 3.33408C9.71339 3.47559 10.013 3.67535 10.6123 4.07488L12 5ZM12 21V5" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
