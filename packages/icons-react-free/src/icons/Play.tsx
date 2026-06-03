import { IconProps } from "../types";

/**
 * @component
 * @name Play
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTYuNDM4MyAxMC43NTA2TDEwLjU5OTUgNi4wNzk2MUM5Ljc2NzM0IDUuNDEzODcgOS4zNTEyNSA1LjA4MSA5LjAwMTA4IDUuMDgwNjNDOC42OTY1NCA1LjA4MDMgOC40MDg0NSA1LjIxODc2IDguMjE4NDYgNS40NTY3N0M4IDUuNzMwNDUgOCA2LjI2MzMgOCA3LjMyOVYxNi42NzFDOCAxNy43MzY3IDggMTguMjY5NiA4LjIxODQ2IDE4LjU0MzJDOC40MDg0NSAxOC43ODEyIDguNjk2NTQgMTguOTE5NyA5LjAwMTA4IDE4LjkxOTRDOS4zNTEyNSAxOC45MTkgOS43NjczNCAxOC41ODYxIDEwLjU5OTUgMTcuOTIwNEwxMC41OTk1IDE3LjkyMDRMMTYuNDM4MyAxMy4yNDk0QzE2Ljk3MjEgMTIuODIyMyAxNy4yMzkgMTIuNjA4OCAxNy4zMzU3IDEyLjM1MDhDMTcuNDIwNCAxMi4xMjQ2IDE3LjQyMDQgMTEuODc1NCAxNy4zMzU3IDExLjY0OTJDMTcuMjM5IDExLjM5MTIgMTYuOTcyMSAxMS4xNzc3IDE2LjQzODMgMTAuNzUwNloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/play - Icon documentation
 */
export function Play({
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
      <path d="M16.4383 10.7506L10.5995 6.07961C9.76734 5.41387 9.35125 5.081 9.00108 5.08063C8.69654 5.0803 8.40845 5.21876 8.21846 5.45677C8 5.73045 8 6.2633 8 7.329V16.671C8 17.7367 8 18.2696 8.21846 18.5432C8.40845 18.7812 8.69654 18.9197 9.00108 18.9194C9.35125 18.919 9.76734 18.5861 10.5995 17.9204L10.5995 17.9204L16.4383 13.2494C16.9721 12.8223 17.239 12.6088 17.3357 12.3508C17.4204 12.1246 17.4204 11.8754 17.3357 11.6492C17.239 11.3912 16.9721 11.1777 16.4383 10.7506Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
