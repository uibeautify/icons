import { IconProps } from "../types";

/**
 * @component
 * @name BellOff
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNi4zMTcwMiA2LjMxOTRDNi4wOTIxNCA2Ljg0NDYzIDUuOTY5NjcgNy40MTA0IDUuOTY5NjcgOEM1Ljk2OTY3IDkuNjIzOTMgNS45ODU1MSAxMS4yMzc0IDUuODA4OTkgMTIuODU0OUM1LjY5MTg3IDEzLjkyODIgMy45Njk2NyAxNC43NTYzIDMuOTY5NjcgMTUuODMzM0MzLjk2OTY3IDE2LjQ3NzcgNC42NDEyNSAxNyA1LjQ2OTY3IDE3SDE3TTguNzQzMjQgMy43ODM3QzkuNjc0OTIgMy4yODc1NyAxMC43ODIgMyAxMS45Njk3IDNDMTUuMjgzNCAzIDE3Ljk2OTcgNS4yMzg1OCAxNy45Njk3IDhDMTcuOTY5NyA5LjYyMzkzIDE3Ljk1MzggMTEuMjM3NCAxOC4xMzA0IDEyLjg1NDlDMTguMjE1NiAxMy42MzYzIDE5LjE1MTggMTQuMjg3OCAxOS42NTQ2IDE1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTAgMjFIMTQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0zIDNMMjAgMjAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/bell-off - Icon documentation
 */
export function BellOff({
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
      <path d="M6.31702 6.3194C6.09214 6.84463 5.96967 7.4104 5.96967 8C5.96967 9.62393 5.98551 11.2374 5.80899 12.8549C5.69187 13.9282 3.96967 14.7563 3.96967 15.8333C3.96967 16.4777 4.64125 17 5.46967 17H17M8.74324 3.7837C9.67492 3.28757 10.782 3 11.9697 3C15.2834 3 17.9697 5.23858 17.9697 8C17.9697 9.62393 17.9538 11.2374 18.1304 12.8549C18.2156 13.6363 19.1518 14.2878 19.6546 15" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M10 21H14" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 3L20 20" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
