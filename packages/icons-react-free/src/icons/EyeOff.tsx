import { IconProps } from "../types";

/**
 * @component
 * @name EyeOff
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyA3Ljk5OTk5QzMuNTkxMTkgOS4yNzkxNiA0LjQxMTMxIDEwLjQxNDQgNS40MDI3MyAxMS4zNDM4TTEyLjAwMDEgMTRWMThNMTIuMDAwMSAxNEM5LjQ3NDk1IDE0IDcuMTY3NDcgMTIuOTk4MSA1LjQwMjczIDExLjM0MzhNMTIuMDAwMSAxNEMxNC40ODg1IDE0IDE2Ljc2NTYgMTMuMDI3IDE4LjUyMDIgMTEuNDE1NE0yMSA4LjAwMDIzQzIwLjM5MzUgOS4zMTIzNiAxOS41NDYyIDEwLjQ3MzEgMTguNTIwMiAxMS40MTU0TTUuNDAyNzMgMTEuMzQzOEwzIDE0Ljk5MjZNMTguNTIwMiAxMS40MTU0TDIxIDE0Ljk5MjYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/eye-off - Icon documentation
 */
export function EyeOff({
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
      <path d="M3 7.99999C3.59119 9.27916 4.41131 10.4144 5.40273 11.3438M12.0001 14V18M12.0001 14C9.47495 14 7.16747 12.9981 5.40273 11.3438M12.0001 14C14.4885 14 16.7656 13.027 18.5202 11.4154M21 8.00023C20.3935 9.31236 19.5462 10.4731 18.5202 11.4154M5.40273 11.3438L3 14.9926M18.5202 11.4154L21 14.9926" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
