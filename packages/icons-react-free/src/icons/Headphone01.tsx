import { IconProps } from "../types";

/**
 * @component
 * @name Headphone01
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cmVjdCB4PSIxNyIgeT0iMTAiIHdpZHRoPSI0IiBoZWlnaHQ9IjUiIHJ4PSIyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMyIgeT0iMTAiIHdpZHRoPSI0IiBoZWlnaHQ9IjUiIHJ4PSIyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE3IDEyVjhDMTcgNS4yMzg1OCAxNC43NjE0IDMgMTIgM0M5LjIzODU4IDMgNyA1LjIzODU4IDcgOFYxNkM3IDE4Ljc2MTQgOS4yMzg1OCAyMSAxMiAyMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/headphone-01 - Icon documentation
 */
export function Headphone01({
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
      <rect x="17" y="10" width="4" height="5" rx="2" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><rect x="3" y="10" width="4" height="5" rx="2" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M17 12V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V16C7 18.7614 9.23858 21 12 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
