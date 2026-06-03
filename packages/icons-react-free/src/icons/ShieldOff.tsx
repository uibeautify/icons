import { IconProps } from "../types";

/**
 * @component
 * @name ShieldOff
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTcuMTc3NSAxNy4xNTY0QzE2LjEwNCAxOC4zMDExIDE0LjY5MSAxOS4zOTEgMTIuNzkxMSAyMC41MzYxQzEyLjUxNDEgMjAuNzAzIDEyLjM3NTYgMjAuNzg2NSAxMi4yMTUzIDIwLjgyMThDMTIuMDc5NiAyMC44NTE3IDExLjkyMDQgMjAuODUxNyAxMS43ODQ3IDIwLjgyMThDMTEuNjI0NCAyMC43ODY1IDExLjQ4NTkgMjAuNzAzIDExLjIwODkgMjAuNTM2MUM1LjMxODc4IDE2Ljk4NjIgNC4xMDkwMiAxMy45NjYyIDMuMTg0MTEgOC4yMDE1N0MzLjExNjE5IDcuNzc4MjMgMy4wODIyMyA3LjU2NjU2IDMuMTI4NTIgNy4zNzI2OEMzLjE2ODk4IDcuMjAzMjcgMy4yNTU4MyA3LjA0MzA2IDMuMzc1NyA2LjkxNjdDMy41MTI4OSA2Ljc3MjA5IDMuNzEyMDIgNi42ODM1OSA0LjExMDI3IDYuNTA2NTlMNS43OTU3NyA1Ljc1NzQ4TTkuMjAxNzUgNC4yNDM3MUwxMS4zNTAyIDMuMjg4ODVDMTEuNTg5NSAzLjE4MjUgMTEuNzA5MSAzLjEyOTMyIDExLjgzMzUgMy4xMDgzMkMxMS45NDM3IDMuMDg5NzEgMTIuMDU2MyAzLjA4OTcxIDEyLjE2NjUgMy4xMDgzMkMxMi4yOTA5IDMuMTI5MzIgMTIuNDEwNSAzLjE4MjUgMTIuNjQ5OCAzLjI4ODg1TDE5Ljg4OTcgNi41MDY1OUMyMC4yODggNi42ODM1OSAyMC40ODcxIDYuNzcyMDkgMjAuNjI0MyA2LjkxNjdDMjAuNzQ0MiA3LjA0MzA2IDIwLjgzMSA3LjIwMzI3IDIwLjg3MTUgNy4zNzI2OEMyMC45MTc4IDcuNTY2NTYgMjAuODgzOCA3Ljc3ODIzIDIwLjgxNTkgOC4yMDE1N0MyMC40MjggMTAuNjE5MyAxOS45ODk5IDEyLjU1NDMgMTkuMTc3NSAxNC4yNDgxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMyAzTDIxIDIxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/shield-off - Icon documentation
 */
export function ShieldOff({
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
      <path d="M17.1775 17.1564C16.104 18.3011 14.691 19.391 12.7911 20.5361C12.5141 20.703 12.3756 20.7865 12.2153 20.8218C12.0796 20.8517 11.9204 20.8517 11.7847 20.8218C11.6244 20.7865 11.4859 20.703 11.2089 20.5361C5.31878 16.9862 4.10902 13.9662 3.18411 8.20157C3.11619 7.77823 3.08223 7.56656 3.12852 7.37268C3.16898 7.20327 3.25583 7.04306 3.3757 6.9167C3.51289 6.77209 3.71202 6.68359 4.11027 6.50659L5.79577 5.75748M9.20175 4.24371L11.3502 3.28885C11.5895 3.1825 11.7091 3.12932 11.8335 3.10832C11.9437 3.08971 12.0563 3.08971 12.1665 3.10832C12.2909 3.12932 12.4105 3.1825 12.6498 3.28885L19.8897 6.50659C20.288 6.68359 20.4871 6.77209 20.6243 6.9167C20.7442 7.04306 20.831 7.20327 20.8715 7.37268C20.9178 7.56656 20.8838 7.77823 20.8159 8.20157C20.428 10.6193 19.9899 12.5543 19.1775 14.2481" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M3 3L21 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
