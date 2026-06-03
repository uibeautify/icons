import { IconProps } from "../types";

/**
 * @component
 * @name Facebook
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTIuOTI5NiA5LjQyNUMxMi45Mjk2IDguNzgxMjUgMTMuNTI1NSA4LjU1IDE0LjE5MjcgOC41NUMxNC44NTk5IDguNTUgMTUuNTcyNSA4Ljc1IDE1LjU3MjUgOC43NUwxNiA2LjNDMTYgNi4zIDE1LjA5MzEgNiAxMi45Mjk2IDZDMTEuNjAxNiA2IDEwLjgzMDggNi40ODc1IDEwLjI2NzIgNy4yMDYyNUM5LjczNjAzIDcuODg3NSA5LjcxNjYgOC45ODEyNSA5LjcxNjYgOS42ODc1VjExLjI5MzhIOFYxMy42ODc1SDkuNzE2NlYyMkgxMi45Mjk2VjEzLjY4NzVIMTUuNDc1M0wxNS42NjMyIDExLjI5MzhIMTIuOTI5NlY5LjQyNVoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/facebook - Icon documentation
 */
export function Facebook({
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
      <path d="M12.9296 9.425C12.9296 8.78125 13.5255 8.55 14.1927 8.55C14.8599 8.55 15.5725 8.75 15.5725 8.75L16 6.3C16 6.3 15.0931 6 12.9296 6C11.6016 6 10.8308 6.4875 10.2672 7.20625C9.73603 7.8875 9.7166 8.98125 9.7166 9.6875V11.2938H8V13.6875H9.7166V22H12.9296V13.6875H15.4753L15.6632 11.2938H12.9296V9.425Z" fill={color}/><circle cx="12" cy="12" r="10" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
