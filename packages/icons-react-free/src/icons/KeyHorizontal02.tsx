import { IconProps } from "../types";

/**
 * @component
 * @name KeyHorizontal02
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyA5TDMgMTVDMyAxNi42NTY5IDQuMzQzMTUgMTggNiAxOEw4IDE4QzkuNjU2ODUgMTggMTEgMTYuNjU2OSAxMSAxNUwxMSAxNEwxNSAxNEwxNSAxNkMxNSAxNi41NTIzIDE1LjQ0NzcgMTcgMTYgMTdMMTggMTdDMTguNTUyMyAxNyAxOSAxNi41NTIzIDE5IDE2TDE5IDE0TDIxIDE0TDIxIDEyQzIxIDEwLjg5NTQgMjAuMTA0NiAxMCAxOSAxMEwxMSAxMEwxMSA5QzExIDcuMzQzMTUgOS42NTY4NSA2IDggNkw2IDZDNC4zNDMxNSA2IDMgNy4zNDMxNSAzIDlaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNyAxNEw3IDEwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/key-horizontal-02 - Icon documentation
 */
export function KeyHorizontal02({
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
      <path d="M3 9L3 15C3 16.6569 4.34315 18 6 18L8 18C9.65685 18 11 16.6569 11 15L11 14L15 14L15 16C15 16.5523 15.4477 17 16 17L18 17C18.5523 17 19 16.5523 19 16L19 14L21 14L21 12C21 10.8954 20.1046 10 19 10L11 10L11 9C11 7.34315 9.65685 6 8 6L6 6C4.34315 6 3 7.34315 3 9Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M7 14L7 10" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
