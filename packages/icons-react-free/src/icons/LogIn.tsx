import { IconProps } from "../types";

/**
 * @component
 * @name LogIn
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNOSA2QzkgNC4zNDMxNSAxMC4zNDMxIDMgMTIgM0gxOEMxOS42NTY5IDMgMjEgNC4zNDMxNSAyMSA2VjE4QzIxIDE5LjY1NjkgMTkuNjU2OSAyMSAxOCAyMUgxMkMxMC4zNDMxIDIxIDkgMTkuNjU2OSA5IDE4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMyAxMkwxNiAxMk0xMyA5TDE2IDEyTDEzIDE1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/log-in - Icon documentation
 */
export function LogIn({
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
      <path d="M9 6C9 4.34315 10.3431 3 12 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H12C10.3431 21 9 19.6569 9 18" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 12L16 12M13 9L16 12L13 15" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
