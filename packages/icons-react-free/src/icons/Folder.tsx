import { IconProps } from "../types";

/**
 * @component
 * @name Folder
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyA4SDE2LjJDMTcuODgwMiA4IDE4LjcyMDIgOCAxOS4zNjIgOC4zMjY5OEMxOS45MjY1IDguNjE0NiAyMC4zODU0IDkuMDczNTQgMjAuNjczIDkuNjM4MDNDMjEgMTAuMjc5OCAyMSAxMS4xMTk4IDIxIDEyLjhWMTUuMkMyMSAxNi44ODAyIDIxIDE3LjcyMDIgMjAuNjczIDE4LjM2MkMyMC4zODU0IDE4LjkyNjUgMTkuOTI2NSAxOS4zODU0IDE5LjM2MiAxOS42NzNDMTguNzIwMiAyMCAxNy44ODAyIDIwIDE2LjIgMjBINy44QzYuMTE5ODQgMjAgNS4yNzk3NiAyMCA0LjYzODAzIDE5LjY3M0M0LjA3MzU0IDE5LjM4NTQgMy42MTQ2IDE4LjkyNjUgMy4zMjY5OCAxOC4zNjJDMyAxNy43MjAyIDMgMTYuODgwMiAzIDE1LjJWOFoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMyA1LjZDMyA1LjAzOTk1IDMgNC43NTk5MiAzLjEwODk5IDQuNTQ2MDFDMy4yMDQ4NyA0LjM1Nzg1IDMuMzU3ODUgNC4yMDQ4NyAzLjU0NjAxIDQuMTA4OTlDMy43NTk5MiA0IDQuMDM5OTUgNCA0LjYgNEg5LjAyMjI5QzkuNzQwMjEgNCAxMC4wOTkyIDQgMTAuNDE2MSA0LjEwOTMxQzEwLjY5NjMgNC4yMDU5NyAxMC45NTE2IDQuMzYzNzMgMTEuMTYzNCA0LjU3MTE2QzExLjQwMjkgNC44MDU3MyAxMS41NjM0IDUuMTI2NzkgMTEuODg0NSA1Ljc2ODkyTDEzIDhINC42QzQuMDM5OTUgOCAzLjc1OTkyIDggMy41NDYwMSA3Ljg5MTAxQzMuMzU3ODUgNy43OTUxMyAzLjIwNDg3IDcuNjQyMTUgMy4xMDg5OSA3LjQ1Mzk5QzMgNy4yNDAwOCAzIDYuOTYwMDUgMyA2LjRWNS42WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/folder - Icon documentation
 */
export function Folder({
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
      <path d="M3 8H16.2C17.8802 8 18.7202 8 19.362 8.32698C19.9265 8.6146 20.3854 9.07354 20.673 9.63803C21 10.2798 21 11.1198 21 12.8V15.2C21 16.8802 21 17.7202 20.673 18.362C20.3854 18.9265 19.9265 19.3854 19.362 19.673C18.7202 20 17.8802 20 16.2 20H7.8C6.11984 20 5.27976 20 4.63803 19.673C4.07354 19.3854 3.6146 18.9265 3.32698 18.362C3 17.7202 3 16.8802 3 15.2V8Z" strokeWidth={strokeWidth} stroke={color}/><path d="M3 5.6C3 5.03995 3 4.75992 3.10899 4.54601C3.20487 4.35785 3.35785 4.20487 3.54601 4.10899C3.75992 4 4.03995 4 4.6 4H9.02229C9.74021 4 10.0992 4 10.4161 4.10931C10.6963 4.20597 10.9516 4.36373 11.1634 4.57116C11.4029 4.80573 11.5634 5.12679 11.8845 5.76892L13 8H4.6C4.03995 8 3.75992 8 3.54601 7.89101C3.35785 7.79513 3.20487 7.64215 3.10899 7.45399C3 7.24008 3 6.96005 3 6.4V5.6Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
