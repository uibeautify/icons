import { IconProps } from "../types";

/**
 * @component
 * @name Map
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTUuMDM1NSA2Ljk3NjM1QzE1LjAxNCA2Ljk5MDY3IDE0Ljk4NiA2Ljk5MDY3IDE0Ljk2NDUgNi45NzYzNUw5IDNMNC40MjQ5NiA2LjA1MDAzQzMuOTAzOTggNi4zOTczNSAzLjY0MzQ5IDYuNTcxMDEgMy40NTQ5MSA2LjgwMDQ1QzMuMjg3OTYgNy4wMDM1NyAzLjE2MjcgNy4yMzc2MiAzLjA4NjMgNy40ODkyQzMgNy43NzMzNyAzIDguMDg2NDUgMyA4LjcxMjU5VjE4LjAxMDRDMyAxOC45ODE1IDMgMTkuNDY3MSAzLjIwMjQ5IDE5LjczNDhDMy4zNzg4OSAxOS45NjggMy42NDg1MiAyMC4xMTIzIDMuOTQwNCAyMC4xMjk3QzQuMjc1NDQgMjAuMTQ5NyA0LjY3OTQ2IDE5Ljg4MDQgNS40ODc1MiAxOS4zNDE3TDkgMTdNOSAzVjE3TTE1LjAzNTUgNi45NzYzNUwxOC41MTI1IDQuNjU4MzVDMTkuMzIwNSA0LjExOTY0IDE5LjcyNDYgMy44NTAyOSAyMC4wNTk2IDMuODcwMjlDMjAuMzUxNSAzLjg4NzcyIDIwLjYyMTEgNC4wMzIwMiAyMC43OTc1IDQuMjY1MjFDMjEgNC41MzI4OCAyMSA1LjAxODQ2IDIxIDUuOTg5NjNWMTUuMjg3NEMyMSAxNS45MTM2IDIxIDE2LjIyNjYgMjAuOTEzNyAxNi41MTA4QzIwLjgzNzMgMTYuNzYyNCAyMC43MTIgMTYuOTk2NCAyMC41NDUxIDE3LjE5OTZDMjAuMzU2NSAxNy40MjkgMjAuMDk2IDE3LjYwMjcgMTkuNTc1IDE3Ljk1TDE1IDIxTDkgMTdNMTUgMjFMMTUuMDM1NSA2Ljk3NjM1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/map - Icon documentation
 */
export function Map({
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
      <path d="M15.0355 6.97635C15.014 6.99067 14.986 6.99067 14.9645 6.97635L9 3L4.42496 6.05003C3.90398 6.39735 3.64349 6.57101 3.45491 6.80045C3.28796 7.00357 3.1627 7.23762 3.0863 7.4892C3 7.77337 3 8.08645 3 8.71259V18.0104C3 18.9815 3 19.4671 3.20249 19.7348C3.37889 19.968 3.64852 20.1123 3.9404 20.1297C4.27544 20.1497 4.67946 19.8804 5.48752 19.3417L9 17M9 3V17M15.0355 6.97635L18.5125 4.65835C19.3205 4.11964 19.7246 3.85029 20.0596 3.87029C20.3515 3.88772 20.6211 4.03202 20.7975 4.26521C21 4.53288 21 5.01846 21 5.98963V15.2874C21 15.9136 21 16.2266 20.9137 16.5108C20.8373 16.7624 20.712 16.9964 20.5451 17.1996C20.3565 17.429 20.096 17.6027 19.575 17.95L15 21L9 17M15 21L15.0355 6.97635" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
