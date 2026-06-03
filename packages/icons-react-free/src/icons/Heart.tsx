import { IconProps } from "../types";

/**
 * @component
 * @name Heart
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTIgMjBDOC45MjQ5OCAxOC4yMTQgNi41ODkyOCAxNi42MDkgNC43OTYyMiAxNC42NDk5Qy0wLjE1ODI2OCA5LjIzNjYzIDYuMDg5NzEgMS45MDQ0IDEyIDYuMzkyMTRDMTcuOTEwMyAxLjkwNDQgMjQuMTU4MyA5LjIzNjYzIDE5LjIwMzggMTQuNjQ5OUMxNy40MTA3IDE2LjYwOSAxNS4wNzUgMTguMjE0IDEyIDIwWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/heart - Icon documentation
 */
export function Heart({
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
      <path d="M12 20C8.92498 18.214 6.58928 16.609 4.79622 14.6499C-0.158268 9.23663 6.08971 1.9044 12 6.39214C17.9103 1.9044 24.1583 9.23663 19.2038 14.6499C17.4107 16.609 15.075 18.214 12 20Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
