import { IconProps } from "../types";

/**
 * @component
 * @name Briefcase
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTggN0g2QzQuMzQzMTUgNyAzIDguMzQzMTUgMyAxMFYxNEMzLjU1MjI4IDE0IDQgMTQuNDQ3NyA0IDE1VjE4QzQgMTkuNjU2OSA1LjM0MzE1IDIxIDcgMjFIMTdDMTguNjU2OSAyMSAyMCAxOS42NTY5IDIwIDE4VjE1QzIwIDE0LjQ0NzcgMjAuNDQ3NyAxNCAyMSAxNFYxMEMyMSA4LjM0MzE1IDE5LjY1NjkgNyAxOCA3WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTkgMTRMMyAxNCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTIxIDE0TDE1IDE0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTYgN1Y1QzE2IDMuODk1NDMgMTUuMTA0NiAzIDE0IDNIMTBDOC44OTU0MyAzIDggMy44OTU0MyA4IDVWNyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iOSIgeT0iMTIiIHdpZHRoPSI2IiBoZWlnaHQ9IjQiIHJ4PSIxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/briefcase - Icon documentation
 */
export function Briefcase({
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
      <path d="M18 7H6C4.34315 7 3 8.34315 3 10V14C3.55228 14 4 14.4477 4 15V18C4 19.6569 5.34315 21 7 21H17C18.6569 21 20 19.6569 20 18V15C20 14.4477 20.4477 14 21 14V10C21 8.34315 19.6569 7 18 7Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M9 14L3 14" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M21 14L15 14" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M16 7V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V7" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><rect x="9" y="12" width="6" height="4" rx="1" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
