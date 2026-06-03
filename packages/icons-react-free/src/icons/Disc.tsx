import { IconProps } from "../types";

/**
 * @component
 * @name Disc
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMjEgMTJDMjEgMTYuOTcwNiAxNi45NzA2IDIxIDEyIDIxQzcuMDI5NDQgMjEgMyAxNi45NzA2IDMgMTJDMyA3LjAyOTQ0IDcuMDI5NDQgMyAxMiAzQzE2Ljk3MDYgMyAyMSA3LjAyOTQ0IDIxIDEyWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNC43IDEyQzE0LjcgMTMuNDkxMiAxMy40OTEyIDE0LjcgMTIgMTQuN0MxMC41MDg4IDE0LjcgOS4zIDEzLjQ5MTIgOS4zIDEyQzkuMyAxMC41MDg4IDEwLjUwODggOS4yOTk5OSAxMiA5LjI5OTk5QzEzLjQ5MTIgOS4yOTk5OSAxNC43IDEwLjUwODggMTQuNyAxMloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTMuOCA1Ljk2MDg4QzE1LjgzMiA2LjU2NTYzIDE3LjQzNDQgOC4xNjc5OCAxOC4wMzkxIDEwLjJNMTAuMiAxOC4wMzkxQzguMTY4IDE3LjQzNDMgNi41NjU2NCAxNS44MzIgNS45NjA4OSAxMy44IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/disc - Icon documentation
 */
export function Disc({
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
      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" strokeWidth={strokeWidth} stroke={color}/><path d="M14.7 12C14.7 13.4912 13.4912 14.7 12 14.7C10.5088 14.7 9.3 13.4912 9.3 12C9.3 10.5088 10.5088 9.29999 12 9.29999C13.4912 9.29999 14.7 10.5088 14.7 12Z" strokeWidth={strokeWidth} stroke={color}/><path d="M13.8 5.96088C15.832 6.56563 17.4344 8.16798 18.0391 10.2M10.2 18.0391C8.168 17.4343 6.56564 15.832 5.96089 13.8" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
