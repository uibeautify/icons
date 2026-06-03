import { IconProps } from "../types";

/**
 * @component
 * @name Rhombus
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cmVjdCB4PSIxMiIgeT0iMS43NzMyNSIgd2lkdGg9IjE0LjQ2MjgiIGhlaWdodD0iMTQuNDYyOCIgcng9IjMiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDEyIDEuNzczMjUpIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/rhombus - Icon documentation
 */
export function Rhombus({
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
      <rect x="12" y="1.77325" width="14.4628" height="14.4628" rx="3" transform="rotate(45 12 1.77325)" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
