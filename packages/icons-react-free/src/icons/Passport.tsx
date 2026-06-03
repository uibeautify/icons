import { IconProps } from "../types";

/**
 * @component
 * @name Passport
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTUgNS45OTk5OVY0LjAwMzlDMTUgMy4zMTkxNiAxNC4zMjczIDIuODM2OTcgMTMuNjc4OSAzLjA1Njg3TDUgNS45OTk5OVYxOEM1IDE5LjY1NjggNi4zNDMxNSAyMSA4IDIxSDE2QzE3LjY1NjkgMjEgMTkgMTkuNjU2OCAxOSAxOFY4Ljk5OTk5QzE5IDcuMzQzMTMgMTcuNjU2OSA1Ljk5OTk5IDE2IDUuOTk5OTlIMTVaTTUgNS45OTk5OUgxNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMCAxN0wxNCAxNyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/passport - Icon documentation
 */
export function Passport({
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
      <path d="M15 5.99999V4.0039C15 3.31916 14.3273 2.83697 13.6789 3.05687L5 5.99999V18C5 19.6568 6.34315 21 8 21H16C17.6569 21 19 19.6568 19 18V8.99999C19 7.34313 17.6569 5.99999 16 5.99999H15ZM5 5.99999H15" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><circle cx="12" cy="12" r="2" strokeWidth={strokeWidth} stroke={color}/><path d="M10 17L14 17" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
