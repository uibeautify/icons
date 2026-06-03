import { IconProps } from "../types";

/**
 * @component
 * @name Apps
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cmVjdCB4PSIzIiB5PSIzIiB3aWR0aD0iNyIgaGVpZ2h0PSI3IiByeD0iMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjMiIHk9IjE0IiB3aWR0aD0iNyIgaGVpZ2h0PSI3IiByeD0iMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjE0IiB5PSIxNCIgd2lkdGg9IjciIGhlaWdodD0iNyIgcng9IjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIxMy4xNzE5IiB5PSI2LjUiIHdpZHRoPSI2LjEyMDg5IiBoZWlnaHQ9IjYuMTIwODkiIHJ4PSIyIiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUgMTMuMTcxOSA2LjUpIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/apps - Icon documentation
 */
export function Apps({
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
      <rect x="3" y="3" width="7" height="7" rx="2" strokeWidth={strokeWidth} stroke={color}/><rect x="3" y="14" width="7" height="7" rx="2" strokeWidth={strokeWidth} stroke={color}/><rect x="14" y="14" width="7" height="7" rx="2" strokeWidth={strokeWidth} stroke={color}/><rect x="13.1719" y="6.5" width="6.12089" height="6.12089" rx="2" transform="rotate(-45 13.1719 6.5)" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
