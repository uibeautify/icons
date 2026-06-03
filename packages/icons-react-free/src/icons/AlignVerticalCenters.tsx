import { IconProps } from "../types";

/**
 * @component
 * @name AlignVerticalCenters
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyAxMkw2IDEyTTIxIDEyTDE4IDEyTTEwIDEyTDE0IDEyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSI2IiB5PSIyMCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjQiIHJ4PSIxIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgNiAyMCkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIxNCIgeT0iMTYiIHdpZHRoPSI4IiBoZWlnaHQ9IjQiIHJ4PSIxIiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgMTQgMTYpIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/align-vertical-centers - Icon documentation
 */
export function AlignVerticalCenters({
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
      <path d="M3 12L6 12M21 12L18 12M10 12L14 12" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><rect x="6" y="20" width="16" height="4" rx="1" transform="rotate(-90 6 20)" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><rect x="14" y="16" width="8" height="4" rx="1" transform="rotate(-90 14 16)" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
