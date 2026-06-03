import { IconProps } from "../types";

/**
 * @component
 * @name Bulb
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTIgM0M4LjEzNDAxIDMgNSA2LjEzNDAxIDUgMTBDNSAxMi43OTI0IDYuNjM1MDUgMTQuODc2NSA5IDE2SDE1QzE3LjM2NDkgMTQuODc2NSAxOSAxMi43OTI0IDE5IDEwQzE5IDYuMTM0MDEgMTUuODY2IDMgMTIgM1oiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTIgMTZWMTFNMTIgMTFMMTQgOU0xMiAxMUwxMCA5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOSAxNkw5IDIwQzkgMjAuNTUyMyA5LjQ0NzcyIDIxIDEwIDIxTDE0IDIxQzE0LjU1MjMgMjEgMTUgMjAuNTUyMyAxNSAyMEwxNSAxNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/bulb - Icon documentation
 */
export function Bulb({
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
      <path d="M12 3C8.13401 3 5 6.13401 5 10C5 12.7924 6.63505 14.8765 9 16H15C17.3649 14.8765 19 12.7924 19 10C19 6.13401 15.866 3 12 3Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M12 16V11M12 11L14 9M12 11L10 9" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M9 16L9 20C9 20.5523 9.44772 21 10 21L14 21C14.5523 21 15 20.5523 15 20L15 16" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
