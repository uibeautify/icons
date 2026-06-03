import { IconProps } from "../types";

/**
 * @component
 * @name KeyHole
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cmVjdCB4PSI1IiB5PSIzIiB3aWR0aD0iMTQiIGhlaWdodD0iMTgiIHJ4PSI3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEyIDdDMTAuMzQzMSA3IDkgOC4zNDMxNSA5IDEwQzkgMTEuMTEwNCA5LjYwMzMgMTIuMDc5OSAxMC41IDEyLjU5ODdMOS41IDE2SDE0LjVMMTMuNSAxMi41OTg3QzE0LjM5NjcgMTIuMDc5OSAxNSAxMS4xMTA0IDE1IDEwQzE1IDguMzQzMTUgMTMuNjU2OSA3IDEyIDdaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/key-hole - Icon documentation
 */
export function KeyHole({
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
      <rect x="5" y="3" width="14" height="18" rx="7" strokeWidth={strokeWidth} stroke={color}/><path d="M12 7C10.3431 7 9 8.34315 9 10C9 11.1104 9.6033 12.0799 10.5 12.5987L9.5 16H14.5L13.5 12.5987C14.3967 12.0799 15 11.1104 15 10C15 8.34315 13.6569 7 12 7Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
