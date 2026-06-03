import { IconProps } from "../types";

/**
 * @component
 * @name Shield
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjgxNTkgOC4yMDE1M0MyMC44ODM4IDcuNzc4MTkgMjAuOTE3OCA3LjU2NjUxIDIwLjg3MTUgNy4zNzI2NEMyMC44MzEgNy4yMDMyMyAyMC43NDQyIDcuMDQzMDEgMjAuNjI0MyA2LjkxNjY2QzIwLjQ4NzEgNi43NzIwNSAyMC4yODggNi42ODM1NSAxOS44ODk3IDYuNTA2NTRMMTIuNjQ5OCAzLjI4ODgxQzEyLjQxMDUgMy4xODI0NiAxMi4yOTA5IDMuMTI5MjggMTIuMTY2NSAzLjEwODI4QzEyLjA1NjMgMy4wODk2NiAxMS45NDM3IDMuMDg5NjYgMTEuODMzNSAzLjEwODI4QzExLjcwOTEgMy4xMjkyOCAxMS41ODk1IDMuMTgyNDYgMTEuMzUwMiAzLjI4ODgxTDQuMTEwMjggNi41MDY1NEMzLjcxMjAyIDYuNjgzNTUgMy41MTI4OSA2Ljc3MjA1IDMuMzc1NyA2LjkxNjY2QzMuMjU1ODMgNy4wNDMwMSAzLjE2ODk4IDcuMjAzMjMgMy4xMjg1MyA3LjM3MjY0QzMuMDgyMjMgNy41NjY1MSAzLjExNjE5IDcuNzc4MTkgMy4xODQxMSA4LjIwMTUzQzQuMTA5MDIgMTMuOTY2MiA1LjMxODc4IDE2Ljk4NjEgMTEuMjA4OSAyMC41MzZDMTEuNDg1OSAyMC43MDMgMTEuNjI0NCAyMC43ODY1IDExLjc4NDcgMjAuODIxOEMxMS45MjA0IDIwLjg1MTcgMTIuMDc5NiAyMC44NTE3IDEyLjIxNTMgMjAuODIxOEMxMi4zNzU2IDIwLjc4NjUgMTIuNTE0MSAyMC43MDMgMTIuNzkxMSAyMC41MzZDMTguNjgxMiAxNi45ODYxIDE5Ljg5MSAxMy45NjYyIDIwLjgxNTkgOC4yMDE1M1oiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/shield - Icon documentation
 */
export function Shield({
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
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8159 8.20153C20.8838 7.77819 20.9178 7.56651 20.8715 7.37264C20.831 7.20323 20.7442 7.04301 20.6243 6.91666C20.4871 6.77205 20.288 6.68355 19.8897 6.50654L12.6498 3.28881C12.4105 3.18246 12.2909 3.12928 12.1665 3.10828C12.0563 3.08966 11.9437 3.08966 11.8335 3.10828C11.7091 3.12928 11.5895 3.18246 11.3502 3.28881L4.11028 6.50654C3.71202 6.68355 3.51289 6.77205 3.3757 6.91666C3.25583 7.04301 3.16898 7.20323 3.12853 7.37264C3.08223 7.56651 3.11619 7.77819 3.18411 8.20153C4.10902 13.9662 5.31878 16.9861 11.2089 20.536C11.4859 20.703 11.6244 20.7865 11.7847 20.8218C11.9204 20.8517 12.0796 20.8517 12.2153 20.8218C12.3756 20.7865 12.5141 20.703 12.7911 20.536C18.6812 16.9861 19.891 13.9662 20.8159 8.20153Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
