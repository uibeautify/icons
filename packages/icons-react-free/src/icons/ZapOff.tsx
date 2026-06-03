import { IconProps } from "../types";

/**
 * @component
 * @name ZapOff
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNi44NTUzOCA4Ljg1OTVMMy45NiAxMi43MkMzLjY1MTAyIDEzLjEzMiAzLjQ5NjUyIDEzLjMzOCAzLjUwMDExIDEzLjUxMDRDMy41MDMyMyAxMy42NjA0IDMuNTczNTggMTMuODAxMiAzLjY5MTc1IDEzLjg5MzdDMy44Mjc1NCAxNCA0LjA4NTAzIDE0IDQuNiAxNEgxMS4yQzExLjQ4IDE0IDExLjYyIDE0IDExLjcyNyAxNC4wNTQ1QzExLjgyMTEgMTQuMTAyNCAxMS44OTc2IDE0LjE3ODkgMTEuOTQ1NSAxNC4yNzNDMTIgMTQuMzggMTIgMTQuNTIgMTIgMTQuOFYxOS42QzEyIDIwLjMzMTEgMTIgMjAuNjk2NiAxMi4xMzQgMjAuODQwNkMxMi4yNDk4IDIwLjk2NTEgMTIuNDIxMSAyMS4wMjIyIDEyLjU4ODUgMjAuOTkyMUMxMi43ODIgMjAuOTU3MyAxMy4wMDEzIDIwLjY2NDkgMTMuNDQgMjAuMDhMMTUuMzc1IDE3LjVNOC45NzY2MSA2LjAzMTE5TDEwLjU2IDMuOTJDMTAuOTk4NyAzLjMzNTEyIDExLjIxOCAzLjA0MjY4IDExLjQxMTUgMy4wMDc4OUMxMS41Nzg5IDIuOTc3NzkgMTEuNzUwMiAzLjAzNDg3IDExLjg2NiAzLjE1OTM5QzEyIDMuMzAzMzUgMTIgMy42Njg5IDEyIDQuNFY5LjJDMTIgOS40ODAwMyAxMiA5LjYyMDA0IDEyLjA1NDUgOS43MjdDMTIuMTAyNCA5LjgyMTA4IDEyLjE3ODkgOS44OTc1NyAxMi4yNzMgOS45NDU1QzEyLjM4IDEwIDEyLjUyIDEwIDEyLjggMTBIMTkuNEMxOS45MTUgMTAgMjAuMTcyNSAxMCAyMC4zMDgyIDEwLjEwNjNDMjAuNDI2NCAxMC4xOTg4IDIwLjQ5NjggMTAuMzM5NiAyMC40OTk5IDEwLjQ4OTZDMjAuNTAzNSAxMC42NjIgMjAuMzQ5IDEwLjg2OCAyMC4wNCAxMS4yOEwxOCAxNEwxNy41NTkzIDE0LjU4NzUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0zIDVMMTkgMjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/zap-off - Icon documentation
 */
export function ZapOff({
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
      <path d="M6.85538 8.8595L3.96 12.72C3.65102 13.132 3.49652 13.338 3.50011 13.5104C3.50323 13.6604 3.57358 13.8012 3.69175 13.8937C3.82754 14 4.08503 14 4.6 14H11.2C11.48 14 11.62 14 11.727 14.0545C11.8211 14.1024 11.8976 14.1789 11.9455 14.273C12 14.38 12 14.52 12 14.8V19.6C12 20.3311 12 20.6966 12.134 20.8406C12.2498 20.9651 12.4211 21.0222 12.5885 20.9921C12.782 20.9573 13.0013 20.6649 13.44 20.08L15.375 17.5M8.97661 6.03119L10.56 3.92C10.9987 3.33512 11.218 3.04268 11.4115 3.00789C11.5789 2.97779 11.7502 3.03487 11.866 3.15939C12 3.30335 12 3.6689 12 4.4V9.2C12 9.48003 12 9.62004 12.0545 9.727C12.1024 9.82108 12.1789 9.89757 12.273 9.9455C12.38 10 12.52 10 12.8 10H19.4C19.915 10 20.1725 10 20.3082 10.1063C20.4264 10.1988 20.4968 10.3396 20.4999 10.4896C20.5035 10.662 20.349 10.868 20.04 11.28L18 14L17.5593 14.5875" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M3 5L19 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
