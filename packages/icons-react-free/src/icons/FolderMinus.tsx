import { IconProps } from "../types";

/**
 * @component
 * @name FolderMinus
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMjEgMTVWMTIuOEMyMSAxMS4xMTk4IDIxIDEwLjI3OTggMjAuNjczIDkuNjM4MDNDMjAuMzg1NCA5LjA3MzU0IDE5LjkyNjUgOC42MTQ2IDE5LjM2MiA4LjMyNjk4QzE4LjcyMDIgOCAxNy44ODAyIDggMTYuMiA4SDNWMTUuMkMzIDE2Ljg4MDIgMyAxNy43MjAyIDMuMzI2OTggMTguMzYyQzMuNjE0NiAxOC45MjY1IDQuMDczNTQgMTkuMzg1NCA0LjYzODAzIDE5LjY3M0M1LjI3OTc2IDIwIDYuMTE5ODQgMjAgNy44IDIwSDEwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMyA1LjZDMyA1LjAzOTk1IDMgNC43NTk5MiAzLjEwODk5IDQuNTQ2MDFDMy4yMDQ4NyA0LjM1Nzg1IDMuMzU3ODUgNC4yMDQ4NyAzLjU0NjAxIDQuMTA4OTlDMy43NTk5MiA0IDQuMDM5OTUgNCA0LjYgNEg5LjAyMjI5QzkuNzQwMjEgNCAxMC4wOTkyIDQgMTAuNDE2MSA0LjEwOTMxQzEwLjY5NjMgNC4yMDU5NyAxMC45NTE2IDQuMzYzNzMgMTEuMTYzNCA0LjU3MTE2QzExLjQwMjkgNC44MDU3MyAxMS41NjM0IDUuMTI2NzkgMTEuODg0NSA1Ljc2ODkyTDEzIDhINC42QzQuMDM5OTUgOCAzLjc1OTkyIDggMy41NDYwMSA3Ljg5MTAxQzMuMzU3ODUgNy43OTUxMyAzLjIwNDg3IDcuNjQyMTUgMy4xMDg5OSA3LjQ1Mzk5QzMgNy4yNDAwOCAzIDYuOTYwMDUgMyA2LjRWNS42WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNSAyMEgyMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/folder-minus - Icon documentation
 */
export function FolderMinus({
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
      <path d="M21 15V12.8C21 11.1198 21 10.2798 20.673 9.63803C20.3854 9.07354 19.9265 8.6146 19.362 8.32698C18.7202 8 17.8802 8 16.2 8H3V15.2C3 16.8802 3 17.7202 3.32698 18.362C3.6146 18.9265 4.07354 19.3854 4.63803 19.673C5.27976 20 6.11984 20 7.8 20H10" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 5.6C3 5.03995 3 4.75992 3.10899 4.54601C3.20487 4.35785 3.35785 4.20487 3.54601 4.10899C3.75992 4 4.03995 4 4.6 4H9.02229C9.74021 4 10.0992 4 10.4161 4.10931C10.6963 4.20597 10.9516 4.36373 11.1634 4.57116C11.4029 4.80573 11.5634 5.12679 11.8845 5.76892L13 8H4.6C4.03995 8 3.75992 8 3.54601 7.89101C3.35785 7.79513 3.20487 7.64215 3.10899 7.45399C3 7.24008 3 6.96005 3 6.4V5.6Z" strokeWidth={strokeWidth} stroke={color}/><path d="M15 20H21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
