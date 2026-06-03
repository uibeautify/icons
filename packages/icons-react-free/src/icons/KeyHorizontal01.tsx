import { IconProps } from "../types";

/**
 * @component
 * @name KeyHorizontal01
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNOCA3QzUuMjM4NTggNyAzIDkuMjM4NTggMyAxMkMzIDE0Ljc2MTQgNS4yMzg1OCAxNyA4IDE3QzEwLjA1MDMgMTcgMTEuODEyNCAxNS43NjU5IDEyLjU4NCAxNEwxMyAxNEwxNC41IDE1TDE2IDE0TDE3LjUgMTVMMjEgMTJMMTkgMTBMMTIuNTg0IDEwQzExLjgxMjQgOC4yMzQxIDEwLjA1MDMgNyA4IDdaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOCAxMkw4IDExLjk5OTkiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/key-horizontal-01 - Icon documentation
 */
export function KeyHorizontal01({
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
      <path d="M8 7C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17C10.0503 17 11.8124 15.7659 12.584 14L13 14L14.5 15L16 14L17.5 15L21 12L19 10L12.584 10C11.8124 8.2341 10.0503 7 8 7Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M8 12L8 11.9999" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
