import { IconProps } from "../types";

/**
 * @component
 * @name PenTool
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNC45MTk2NiA5LjE5NTNMMTIgM0wxOS4wODAzIDkuMTk1M0MxOS42NDQ5IDkuNjg5MzEgMTkuODg1NiAxMC40NTc3IDE5LjcwMzYgMTEuMTg1NUwxOCAxOEg2TDQuMjk2MzggMTEuMTg1NUM0LjExNDQzIDEwLjQ1NzcgNC4zNTUwNyA5LjY4OTMxIDQuOTE5NjYgOS4xOTUzWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iNCIgeT0iMTgiIHdpZHRoPSIxNiIgaGVpZ2h0PSIzIiByeD0iMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEyIDhDMTAuODk1NCA4IDEwIDguODk1NDMgMTAgMTBDMTAgMTEuMTA0NiAxMC44OTU0IDEyIDEyIDEyQzEzLjEwNDYgMTIgMTQgMTEuMTA0NiAxNCAxMEMxNCA4Ljg5NTQzIDEzLjEwNDYgOCAxMiA4Wk0xMiA4VjMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/pen-tool - Icon documentation
 */
export function PenTool({
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
      <path d="M4.91966 9.1953L12 3L19.0803 9.1953C19.6449 9.68931 19.8856 10.4577 19.7036 11.1855L18 18H6L4.29638 11.1855C4.11443 10.4577 4.35507 9.68931 4.91966 9.1953Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><rect x="4" y="18" width="16" height="3" rx="1" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8ZM12 8V3" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
