import { IconProps } from "../types";

/**
 * @component
 * @name FormToggleOn
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cmVjdCB4PSIzIiB5PSI2IiB3aWR0aD0iMTgiIGhlaWdodD0iMTIiIHJ4PSI2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE3LjUgMTJDMTcuNSAxMy4zODA3IDE2LjM4MDcgMTQuNSAxNSAxNC41QzEzLjYxOTMgMTQuNSAxMi41IDEzLjM4MDcgMTIuNSAxMkMxMi41IDEwLjYxOTMgMTMuNjE5MyA5LjUgMTUgOS41QzE2LjM4MDcgOS41IDE3LjUgMTAuNjE5MyAxNy41IDEyWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/form-toggle-on - Icon documentation
 */
export function FormToggleOn({
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
      <rect x="3" y="6" width="18" height="12" rx="6" strokeWidth={strokeWidth} stroke={color}/><path d="M17.5 12C17.5 13.3807 16.3807 14.5 15 14.5C13.6193 14.5 12.5 13.3807 12.5 12C12.5 10.6193 13.6193 9.5 15 9.5C16.3807 9.5 17.5 10.6193 17.5 12Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
