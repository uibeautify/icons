import { IconProps } from "../types";

/**
 * @component
 * @name Shuffle
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyAxN0g2LjMwMTQzQzcuMzU1MjIgMTcgOC4zMzE3NCAxNi40NDcxIDguODczOTEgMTUuNTQzNUwxMy4xMjYxIDguNDU2NTFDMTMuNjY4MyA3LjU1MjkgMTQuNjQ0OCA3IDE1LjY5ODYgN0gyMU0xOSA5LjVMMjEgN0wxOSA0LjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0zIDdINi4zMDE0M0M3LjM1NTIyIDcgOC4zMzE3NCA3LjU1MjkgOC44NzM5MSA4LjQ1NjUxTDkuMTc2OCA4Ljk2MTM0TTIxIDE3SDE1LjY5ODZDMTQuNjQ0OCAxNyAxMy42NjgzIDE2LjQ0NzEgMTMuMTI2MSAxNS41NDM1TDEzIDE1LjMzMzNNMTkgMTQuNUwyMSAxN0wxOSAxOS41IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/shuffle - Icon documentation
 */
export function Shuffle({
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
      <path d="M3 17H6.30143C7.35522 17 8.33174 16.4471 8.87391 15.5435L13.1261 8.45651C13.6683 7.5529 14.6448 7 15.6986 7H21M19 9.5L21 7L19 4.5" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M3 7H6.30143C7.35522 7 8.33174 7.5529 8.87391 8.45651L9.1768 8.96134M21 17H15.6986C14.6448 17 13.6683 16.4471 13.1261 15.5435L13 15.3333M19 14.5L21 17L19 19.5" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
