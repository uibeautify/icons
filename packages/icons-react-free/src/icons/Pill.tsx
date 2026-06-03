import { IconProps } from "../types";

/**
 * @component
 * @name Pill
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cmVjdCB4PSIxNC4wMDE1IiB5PSIwLjA5ODk5OSIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE5LjY2MTEiIHJ4PSI3IiB0cmFuc2Zvcm09InJvdGF0ZSg0NSAxNC4wMDE1IDAuMDk4OTk5KSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNy44MjkgMTEuMTcyMkMxOC4yMTg3IDEwLjM1NjQgMTguMjE4NyA5LjQwMDkzIDE3LjgyOSA4LjU4NTE0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNy4wNTAyNSA3LjA1MDIzTDE2Ljk0OTcgMTYuOTQ5NyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/pill - Icon documentation
 */
export function Pill({
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
      <rect x="14.0015" y="0.098999" width="14" height="19.6611" rx="7" transform="rotate(45 14.0015 0.098999)" strokeWidth={strokeWidth} stroke={color}/><path d="M17.829 11.1722C18.2187 10.3564 18.2187 9.40093 17.829 8.58514" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M7.05025 7.05023L16.9497 16.9497" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
