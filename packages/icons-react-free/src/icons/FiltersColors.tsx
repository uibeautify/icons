import { IconProps } from "../types";

/**
 * @component
 * @name FiltersColors
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjQyMTggMTMuNjEwOUMxMy42NjU5IDE0LjIyNjUgMTMuOCAxNC44OTc2IDEzLjggMTUuNkMxMy44IDE3LjE5OTMgMTMuMTA0NyAxOC42MzYyIDEyIDE5LjYyNUMxMi45NTU0IDIwLjQ4MDEgMTQuMjE3IDIxIDE1LjYgMjFDMTguNTgyMyAyMSAyMSAxOC41ODI0IDIxIDE1LjZDMjEgMTMuMTA5OCAxOS4zMTQ0IDExLjAxMzIgMTcuMDIxOCAxMC4zODkyQzE2LjQwMDcgMTEuOTU1OSAxNS4wNjc3IDEzLjE2MjggMTMuNDIxOCAxMy42MTA5WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik02Ljk3ODE2IDEwLjM4OTFDNy41OTkyNiAxMS45NTU5IDguOTMyMzEgMTMuMTYyOCAxMC41NzgyIDEzLjYxMDlDMTEuMDMxMiAxMy43MzQyIDExLjUwNzkgMTMuOCAxMiAxMy44QzEyLjQ5MjEgMTMuOCAxMi45Njg4IDEzLjczNDIgMTMuNDIxOCAxMy42MTA5QzE1LjA2NzcgMTMuMTYyOCAxNi40MDA3IDExLjk1NTkgMTcuMDIxOCAxMC4zODkxQzE3LjI2NTkgOS43NzM1NyAxNy40IDkuMTAyNDUgMTcuNCA4LjRDMTcuNCA1LjQxNzY2IDE0Ljk4MjMgMyAxMiAzQzkuMDE3NjYgMyA2LjYgNS40MTc2NiA2LjYgOC40QzYuNiA5LjEwMjQ1IDYuNzM0MTIgOS43NzM1NyA2Ljk3ODE2IDEwLjM4OTFaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC41NzgyIDEzLjYxMDlDOC45MzIzMiAxMy4xNjI4IDcuNTk5MjYgMTEuOTU1OSA2Ljk3ODE2IDEwLjM4OTJDNC42ODU2NCAxMS4wMTMyIDMgMTMuMTA5OCAzIDE1LjZDMyAxOC41ODI0IDUuNDE3NjYgMjEgOC40IDIxQzkuNzgzMDQgMjEgMTEuMDQ0NiAyMC40ODAxIDEyIDE5LjYyNUMxMy4xMDQ4IDE4LjYzNjIgMTMuOCAxNy4xOTkzIDEzLjggMTUuNkMxMy44IDE0Ljg5NzYgMTMuNjY1OSAxNC4yMjY0IDEzLjQyMTggMTMuNjEwOUMxMi45Njg4IDEzLjczNDIgMTIuNDkyMSAxMy44IDEyIDEzLjhDMTEuNTA3OSAxMy44IDExLjAzMTIgMTMuNzM0MiAxMC41NzgyIDEzLjYxMDlaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/filters-colors - Icon documentation
 */
export function FiltersColors({
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4218 13.6109C13.6659 14.2265 13.8 14.8976 13.8 15.6C13.8 17.1993 13.1047 18.6362 12 19.625C12.9554 20.4801 14.217 21 15.6 21C18.5823 21 21 18.5824 21 15.6C21 13.1098 19.3144 11.0132 17.0218 10.3892C16.4007 11.9559 15.0677 13.1628 13.4218 13.6109Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M6.97816 10.3891C7.59926 11.9559 8.93231 13.1628 10.5782 13.6109C11.0312 13.7342 11.5079 13.8 12 13.8C12.4921 13.8 12.9688 13.7342 13.4218 13.6109C15.0677 13.1628 16.4007 11.9559 17.0218 10.3891C17.2659 9.77357 17.4 9.10245 17.4 8.4C17.4 5.41766 14.9823 3 12 3C9.01766 3 6.6 5.41766 6.6 8.4C6.6 9.10245 6.73412 9.77357 6.97816 10.3891Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5782 13.6109C8.93232 13.1628 7.59926 11.9559 6.97816 10.3892C4.68564 11.0132 3 13.1098 3 15.6C3 18.5824 5.41766 21 8.4 21C9.78304 21 11.0446 20.4801 12 19.625C13.1048 18.6362 13.8 17.1993 13.8 15.6C13.8 14.8976 13.6659 14.2264 13.4218 13.6109C12.9688 13.7342 12.4921 13.8 12 13.8C11.5079 13.8 11.0312 13.7342 10.5782 13.6109Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
