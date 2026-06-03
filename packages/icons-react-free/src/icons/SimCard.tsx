import { IconProps } from "../types";

/**
 * @component
 * @name SimCard
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNi41OTQxMSA0LjQwNTg5QzcuMTEyOTcgMy44ODcwMyA3LjM3MjQgMy42Mjc2IDcuNjc1MTUgMy40NDIwOEM3Ljk0MzU2IDMuMjc3NTkgOC4yMzYyIDMuMTU2MzggOC41NDIzIDMuMDgyODlDOC44ODc1NyAzIDkuMjU0NDUgMyA5Ljk4ODIzIDNIMTUuMkMxNi44ODAyIDMgMTcuNzIwMiAzIDE4LjM2MiAzLjMyNjk4QzE4LjkyNjUgMy42MTQ2IDE5LjM4NTQgNC4wNzM1NCAxOS42NzMgNC42MzgwM0MyMCA1LjI3OTc2IDIwIDYuMTE5ODQgMjAgNy44VjE2LjJDMjAgMTcuODgwMiAyMCAxOC43MjAyIDE5LjY3MyAxOS4zNjJDMTkuMzg1NCAxOS45MjY1IDE4LjkyNjUgMjAuMzg1NCAxOC4zNjIgMjAuNjczQzE3LjcyMDIgMjEgMTYuODgwMiAyMSAxNS4yIDIxSDguOEM3LjExOTg0IDIxIDYuMjc5NzYgMjEgNS42MzgwMyAyMC42NzNDNS4wNzM1NCAyMC4zODU0IDQuNjE0NiAxOS45MjY1IDQuMzI2OTggMTkuMzYyQzQgMTguNzIwMiA0IDE3Ljg4MDIgNCAxNi4yVjguOTg4MjJDNCA4LjI1NDQ1IDQgNy44ODc1NyA0LjA4Mjg5IDcuNTQyM0M0LjE1NjM4IDcuMjM2MiA0LjI3NzU5IDYuOTQzNTYgNC40NDIwOCA2LjY3NTE1QzQuNjI3NiA2LjM3MjQgNC44ODcwMyA2LjExMjk3IDUuNDA1ODkgNS41OTQxMUw2LjU5NDExIDQuNDA1ODlaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEyIDEzTDE2IDEzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTIgMTdWOSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iOCIgeT0iOSIgd2lkdGg9IjgiIGhlaWdodD0iOCIgcng9IjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/sim-card - Icon documentation
 */
export function SimCard({
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
      <path d="M6.59411 4.40589C7.11297 3.88703 7.3724 3.6276 7.67515 3.44208C7.94356 3.27759 8.2362 3.15638 8.5423 3.08289C8.88757 3 9.25445 3 9.98823 3H15.2C16.8802 3 17.7202 3 18.362 3.32698C18.9265 3.6146 19.3854 4.07354 19.673 4.63803C20 5.27976 20 6.11984 20 7.8V16.2C20 17.8802 20 18.7202 19.673 19.362C19.3854 19.9265 18.9265 20.3854 18.362 20.673C17.7202 21 16.8802 21 15.2 21H8.8C7.11984 21 6.27976 21 5.63803 20.673C5.07354 20.3854 4.6146 19.9265 4.32698 19.362C4 18.7202 4 17.8802 4 16.2V8.98822C4 8.25445 4 7.88757 4.08289 7.5423C4.15638 7.2362 4.27759 6.94356 4.44208 6.67515C4.6276 6.3724 4.88703 6.11297 5.40589 5.59411L6.59411 4.40589Z" strokeWidth={strokeWidth} stroke={color}/><path d="M12 13L16 13" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 17V9" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><rect x="8" y="9" width="8" height="8" rx="1" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
