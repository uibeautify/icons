import { IconProps } from "../types";

/**
 * @component
 * @name Zap
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTAuNTYgMy45MkMxMC45OTg3IDMuMzM1MTIgMTEuMjE4IDMuMDQyNjggMTEuNDExNSAzLjAwNzg5QzExLjU3ODkgMi45Nzc3OSAxMS43NTAyIDMuMDM0ODcgMTEuODY2IDMuMTU5MzlDMTIgMy4zMDMzNSAxMiAzLjY2ODkgMTIgNC40VjkuMkMxMiA5LjQ4MDAzIDEyIDkuNjIwMDQgMTIuMDU0NSA5LjcyN0MxMi4xMDI0IDkuODIxMDggMTIuMTc4OSA5Ljg5NzU3IDEyLjI3MyA5Ljk0NTVDMTIuMzggMTAgMTIuNTIgMTAgMTIuOCAxMEgxOS40QzE5LjkxNSAxMCAyMC4xNzI1IDEwIDIwLjMwODIgMTAuMTA2M0MyMC40MjY0IDEwLjE5ODggMjAuNDk2OCAxMC4zMzk2IDIwLjQ5OTkgMTAuNDg5NkMyMC41MDM1IDEwLjY2MiAyMC4zNDkgMTAuODY4IDIwLjA0IDExLjI4TDEzLjQ0IDIwLjA4QzEzLjAwMTMgMjAuNjY0OSAxMi43ODIgMjAuOTU3MyAxMi41ODg1IDIwLjk5MjFDMTIuNDIxMSAyMS4wMjIyIDEyLjI0OTggMjAuOTY1MSAxMi4xMzQgMjAuODQwNkMxMiAyMC42OTY2IDEyIDIwLjMzMTEgMTIgMTkuNlYxNC44QzEyIDE0LjUyIDEyIDE0LjM4IDExLjk0NTUgMTQuMjczQzExLjg5NzYgMTQuMTc4OSAxMS44MjExIDE0LjEwMjQgMTEuNzI3IDE0LjA1NDVDMTEuNjIgMTQgMTEuNDggMTQgMTEuMiAxNEg0LjZDNC4wODUwMyAxNCAzLjgyNzU0IDE0IDMuNjkxNzUgMTMuODkzN0MzLjU3MzU4IDEzLjgwMTIgMy41MDMyMyAxMy42NjA0IDMuNTAwMTEgMTMuNTEwNEMzLjQ5NjUyIDEzLjMzOCAzLjY1MTAyIDEzLjEzMiAzLjk2IDEyLjcyTDEwLjU2IDMuOTJaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/zap - Icon documentation
 */
export function Zap({
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
      <path d="M10.56 3.92C10.9987 3.33512 11.218 3.04268 11.4115 3.00789C11.5789 2.97779 11.7502 3.03487 11.866 3.15939C12 3.30335 12 3.6689 12 4.4V9.2C12 9.48003 12 9.62004 12.0545 9.727C12.1024 9.82108 12.1789 9.89757 12.273 9.9455C12.38 10 12.52 10 12.8 10H19.4C19.915 10 20.1725 10 20.3082 10.1063C20.4264 10.1988 20.4968 10.3396 20.4999 10.4896C20.5035 10.662 20.349 10.868 20.04 11.28L13.44 20.08C13.0013 20.6649 12.782 20.9573 12.5885 20.9921C12.4211 21.0222 12.2498 20.9651 12.134 20.8406C12 20.6966 12 20.3311 12 19.6V14.8C12 14.52 12 14.38 11.9455 14.273C11.8976 14.1789 11.8211 14.1024 11.727 14.0545C11.62 14 11.48 14 11.2 14H4.6C4.08503 14 3.82754 14 3.69175 13.8937C3.57358 13.8012 3.50323 13.6604 3.50011 13.5104C3.49652 13.338 3.65102 13.132 3.96 12.72L10.56 3.92Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
