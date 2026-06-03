import { IconProps } from "../types";

/**
 * @component
 * @name Blank
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cmVjdCB4PSI3IiB5PSI4IiB3aWR0aD0iMTAiIGhlaWdodD0iOCIgcng9IjMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTYuNSAzSDE4QzE5LjY1NjkgMyAyMSA0LjM0MzE1IDIxIDZWNy41IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNy41IDNINkM0LjM0MzE1IDMgMyA0LjM0MzE1IDMgNlY3LjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0zIDE2LjVWMThDMyAxOS42NTY5IDQuMzQzMTUgMjEgNiAyMUg3LjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNi41IDIxSDE4QzE5LjY1NjkgMjEgMjEgMTkuNjU2OSAyMSAxOFYxNi41IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/blank - Icon documentation
 */
export function Blank({
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
      <rect x="7" y="8" width="10" height="8" rx="3" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M16.5 3H18C19.6569 3 21 4.34315 21 6V7.5" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M7.5 3H6C4.34315 3 3 4.34315 3 6V7.5" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 16.5V18C3 19.6569 4.34315 21 6 21H7.5" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M16.5 21H18C19.6569 21 21 19.6569 21 18V16.5" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
