import { IconProps } from "../types";

/**
 * @component
 * @name KeyVertical02
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTUgM0w5IDNDNy4zNDMxNSAzIDYgNC4zNDMxNSA2IDZWOEM2IDkuNjU2ODUgNy4zNDMxNSAxMSA5IDExSDEwTDEwIDE1SDhDNy40NDc3MSAxNSA3IDE1LjQ0NzcgNyAxNkw3IDE4QzcgMTguNTUyMyA3LjQ0NzcxIDE5IDggMTlIMTBWMjFIMTJDMTMuMTA0NiAyMSAxNCAyMC4xMDQ2IDE0IDE5TDE0IDExSDE1QzE2LjY1NjkgMTEgMTggOS42NTY4NSAxOCA4VjZDMTggNC4zNDMxNSAxNi42NTY5IDMgMTUgM1oiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMCA3SDE0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/key-vertical-02 - Icon documentation
 */
export function KeyVertical02({
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
      <path d="M15 3L9 3C7.34315 3 6 4.34315 6 6V8C6 9.65685 7.34315 11 9 11H10L10 15H8C7.44771 15 7 15.4477 7 16L7 18C7 18.5523 7.44771 19 8 19H10V21H12C13.1046 21 14 20.1046 14 19L14 11H15C16.6569 11 18 9.65685 18 8V6C18 4.34315 16.6569 3 15 3Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M10 7H14" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
