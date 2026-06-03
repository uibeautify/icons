import { IconProps } from "../types";

/**
 * @component
 * @name Bicycle
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNOC45NjQ1NiAxN0M4Ljk4NzkxIDE2LjgzNjcgOSAxNi42Njk4IDkgMTYuNUM5IDE0LjkwMzggNy45MzE0MiAxMy41NTcxIDYuNDcwNTggMTMuMTM2M0M2LjE2MjM5IDEzLjA0NzYgNS44MzY3NSAxMyA1LjUgMTNDMy41NjcgMTMgMiAxNC41NjcgMiAxNi41QzIgMTguNDMzIDMuNTY3IDIwIDUuNSAyMEM3LjI2MzI0IDIwIDguNzIxOTQgMTguNjk2MSA4Ljk2NDU2IDE3Wk02LjQ3MDU4IDEzLjEzNjNMOC41IDEwTTguNSAxMEw1LjUgNE04LjUgMTBIMTUuOTg4TTUuNSA0SDdNNS41IDRINE0xOCA2SDE1TDE1Ljk4OCAxME04Ljk2NDU2IDE3SDExTDE1Ljk4OCAxME0xNi44MzMyIDEzLjQyMTZDMTUuNzQxMyAxNC4wMTQxIDE1IDE1LjE3MDUgMTUgMTYuNUMxNSAxOC40MzMgMTYuNTY3IDIwIDE4LjUgMjBDMjAuNDMzIDIwIDIyIDE4LjQzMyAyMiAxNi41QzIyIDE0LjU2NyAyMC40MzMgMTMgMTguNSAxM0MxNy44OTY1IDEzIDE3LjMyODggMTMuMTUyNyAxNi44MzMyIDEzLjQyMTZaTTE2LjgzMzIgMTMuNDIxNkwxNS45ODggMTAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/bicycle - Icon documentation
 */
export function Bicycle({
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
      <path d="M8.96456 17C8.98791 16.8367 9 16.6698 9 16.5C9 14.9038 7.93142 13.5571 6.47058 13.1363C6.16239 13.0476 5.83675 13 5.5 13C3.567 13 2 14.567 2 16.5C2 18.433 3.567 20 5.5 20C7.26324 20 8.72194 18.6961 8.96456 17ZM6.47058 13.1363L8.5 10M8.5 10L5.5 4M8.5 10H15.988M5.5 4H7M5.5 4H4M18 6H15L15.988 10M8.96456 17H11L15.988 10M16.8332 13.4216C15.7413 14.0141 15 15.1705 15 16.5C15 18.433 16.567 20 18.5 20C20.433 20 22 18.433 22 16.5C22 14.567 20.433 13 18.5 13C17.8965 13 17.3288 13.1527 16.8332 13.4216ZM16.8332 13.4216L15.988 10" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
