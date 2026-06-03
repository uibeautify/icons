import { IconProps } from "../types";

/**
 * @component
 * @name Microphone
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cmVjdCB4PSI4IiB5PSIzIiB3aWR0aD0iOCIgaGVpZ2h0PSIxMCIgcng9IjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNCAxMEM0IDExLjg2MTIgNCAxMi43OTE4IDQuMjQ0NyAxMy41NDVDNC43MzkyOSAxNS4wNjcyIDUuOTMyNzMgMTYuMjYwNyA3LjQ1NDk2IDE2Ljc1NTJDOC4yMDgxIDE2Ljk5OTkgOS4xMzg3MSAxNi45OTk5IDEwLjk5OTkgMTYuOTk5OUgxMy4wMDAxQzE0Ljg2MTMgMTYuOTk5OSAxNS43OTE5IDE2Ljk5OTkgMTYuNTQ1IDE2Ljc1NTJDMTguMDY3MyAxNi4yNjA3IDE5LjI2MDcgMTUuMDY3MiAxOS43NTUzIDEzLjU0NUMyMCAxMi43OTE4IDIwIDExLjg2MTIgMjAgMTAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMiAxN0wxMiAyMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTggMjFIMTYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/microphone - Icon documentation
 */
export function Microphone({
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
      <rect x="8" y="3" width="8" height="10" rx="2" strokeWidth={strokeWidth} stroke={color}/><path d="M4 10C4 11.8612 4 12.7918 4.2447 13.545C4.73929 15.0672 5.93273 16.2607 7.45496 16.7552C8.2081 16.9999 9.13871 16.9999 10.9999 16.9999H13.0001C14.8613 16.9999 15.7919 16.9999 16.545 16.7552C18.0673 16.2607 19.2607 15.0672 19.7553 13.545C20 12.7918 20 11.8612 20 10" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 17L12 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M8 21H16" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
