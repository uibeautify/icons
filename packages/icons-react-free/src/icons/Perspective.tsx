import { IconProps } from "../types";

/**
 * @component
 * @name Perspective
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNOSAzLjk5OTkyTDUuNTM1MjkgMy4wMzc1QzQuMjYwOSAyLjY4MzUgMyAzLjY0MTg5IDMgNC45NjQ1NEwzIDExLjk5OTlNOSAzLjk5OTkyTDkgMjBNOSAyMEwxNSAxOC4zMzMzTDE5LjUzNTMgMTcuMDczNUMyMC40MDA5IDE2LjgzMzEgMjEgMTYuMDQ0OSAyMSAxNS4xNDY1VjExLjk5OTlMMjEgOC44NTM0MkMyMSA3Ljk1NTAxIDIwLjQwMDkgNy4xNjY4NCAxOS41MzUzIDYuOTI2MzlMMTUgNS42NjY1OEw5IDMuOTk5OTJNOSAyMEw1LjUzNTI5IDIwLjk2MjRDNC4yNjA5IDIxLjMxNjQgMyAyMC4zNTggMyAxOS4wMzU0VjExLjk5OTlNMTUgMTguMzMzM0wxNSA1LjY2NjU4TTIxIDExLjk5OTlIMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/perspective - Icon documentation
 */
export function Perspective({
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
      <path d="M9 3.99992L5.53529 3.0375C4.2609 2.6835 3 3.64189 3 4.96454L3 11.9999M9 3.99992L9 20M9 20L15 18.3333L19.5353 17.0735C20.4009 16.8331 21 16.0449 21 15.1465V11.9999L21 8.85342C21 7.95501 20.4009 7.16684 19.5353 6.92639L15 5.66658L9 3.99992M9 20L5.53529 20.9624C4.2609 21.3164 3 20.358 3 19.0354V11.9999M15 18.3333L15 5.66658M21 11.9999H3" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
