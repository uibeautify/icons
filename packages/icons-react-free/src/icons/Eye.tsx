import { IconProps } from "../types";

/**
 * @component
 * @name Eye
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyAxMi45MTdDNC42NDM1MiA5LjM2MDg3IDguMDU2MzYgNi45MTY5OSAxMi4wMDAxIDYuOTE2OTlDMTUuOTQzNyA2LjkxNjk5IDE5LjM1NjQgOS4zNjA3NiAyMSAxMi45MTY3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTQgMTVDMTQgMTYuMTA0NiAxMy4xMDQ2IDE3IDEyIDE3QzEwLjg5NTQgMTcgMTAgMTYuMTA0NiAxMCAxNUMxMCAxMy44OTU0IDEwLjg5NTQgMTMgMTIgMTNDMTMuMTA0NiAxMyAxNCAxMy44OTU0IDE0IDE1WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/eye - Icon documentation
 */
export function Eye({
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
      <path d="M3 12.917C4.64352 9.36087 8.05636 6.91699 12.0001 6.91699C15.9437 6.91699 19.3564 9.36076 21 12.9167" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
