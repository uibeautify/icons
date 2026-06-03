import { IconProps } from "../types";

/**
 * @component
 * @name Router
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyAxN0MzIDE2LjA3IDMgMTUuNjA1IDMuMTAyMjIgMTUuMjIzNUMzLjM3OTYyIDE0LjE4ODMgNC4xODgyNyAxMy4zNzk2IDUuMjIzNTQgMTMuMTAyMkM1LjYwNTA0IDEzIDYuMDcwMDMgMTMgNyAxM0gxN0MxNy45MyAxMyAxOC4zOTUgMTMgMTguNzc2NSAxMy4xMDIyQzE5LjgxMTcgMTMuMzc5NiAyMC42MjA0IDE0LjE4ODMgMjAuODk3OCAxNS4yMjM1QzIxIDE1LjYwNSAyMSAxNi4wNyAyMSAxN0MyMSAxNy45MyAyMSAxOC4zOTUgMjAuODk3OCAxOC43NzY1QzIwLjYyMDQgMTkuODExNyAxOS44MTE3IDIwLjYyMDQgMTguNzc2NSAyMC44OTc4QzE4LjM5NSAyMSAxNy45MyAyMSAxNyAyMUg3QzYuMDcwMDMgMjEgNS42MDUwNCAyMSA1LjIyMzU0IDIwLjg5NzhDNC4xODgyNyAyMC42MjA0IDMuMzc5NjIgMTkuODExNyAzLjEwMjIyIDE4Ljc3NjVDMyAxOC4zOTUgMyAxNy45MyAzIDE3WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNiAxN0gxNi4wMDAxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTYgMTNMMTYgMTEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik03IDE3SDEwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTIgNEMxMy4yNTk5IDMuMzUwOCAxNC42MDQyIDMgMTYgM0MxNy4zOTU4IDMgMTguNzQwMSAzLjM1MDggMjAgNCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE0IDcuNTUyOThDMTQuNjUxOSA3LjE4ODkxIDE1LjMxOTggNyAxNiA3QzE2LjY4MDIgNyAxNy4zNDgxIDcuMTg4OTEgMTggNy41NTI5OCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/router - Icon documentation
 */
export function Router({
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
      <path d="M3 17C3 16.07 3 15.605 3.10222 15.2235C3.37962 14.1883 4.18827 13.3796 5.22354 13.1022C5.60504 13 6.07003 13 7 13H17C17.93 13 18.395 13 18.7765 13.1022C19.8117 13.3796 20.6204 14.1883 20.8978 15.2235C21 15.605 21 16.07 21 17C21 17.93 21 18.395 20.8978 18.7765C20.6204 19.8117 19.8117 20.6204 18.7765 20.8978C18.395 21 17.93 21 17 21H7C6.07003 21 5.60504 21 5.22354 20.8978C4.18827 20.6204 3.37962 19.8117 3.10222 18.7765C3 18.395 3 17.93 3 17Z" strokeWidth={strokeWidth} stroke={color}/><path d="M16 17H16.0001" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M16 13L16 11" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M7 17H10" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 4C13.2599 3.3508 14.6042 3 16 3C17.3958 3 18.7401 3.3508 20 4" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M14 7.55298C14.6519 7.18891 15.3198 7 16 7C16.6802 7 17.3481 7.18891 18 7.55298" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
