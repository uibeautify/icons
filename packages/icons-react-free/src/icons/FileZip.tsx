import { IconProps } from "../types";

/**
 * @component
 * @name FileZip
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTMgMjBIMTQuMkMxNS44ODAyIDIwIDE2LjcyMDIgMjAgMTcuMzYyIDE5LjY3M0MxNy45MjY1IDE5LjM4NTQgMTguMzg1NCAxOC45MjY1IDE4LjY3MyAxOC4zNjJDMTkgMTcuNzIwMiAxOSAxNi44ODAyIDE5IDE1LjJWOC41NjEyNUMxOSA4LjM1MzIzIDE5IDguMjQ5MjIgMTguOTc5NiA4LjE0OTc0QzE4Ljk2MTUgOC4wNjE0OCAxOC45MzE1IDcuOTc2MDcgMTguODkwNSA3Ljg5NTgzQzE4Ljg0NDMgNy44MDUzOSAxOC43NzkzIDcuNzI0MTcgMTguNjQ5NCA3LjU2MTc0TDE1LjQ4MDQgMy42MDA0OUMxNS4zMDQgMy4zNzk5NyAxNS4yMTU4IDMuMjY5NzEgMTUuMTA2MyAzLjE5MDM1QzE1LjAwOTMgMy4xMjAwNCAxNC45MDA1IDMuMDY3NzMgMTQuNzg1IDMuMDM1OTFDMTQuNjU0NiAzIDE0LjUxMzQgMyAxNC4yMzEgM0g5LjhDOC4xMTk4NCAzIDcuMjc5NzYgMyA2LjYzODAzIDMuMzI2OThDNi4wNzM1NCAzLjYxNDYgNS42MTQ2IDQuMDczNTQgNS4zMjY5OCA0LjYzODAzQzUgNS4yNzk3NiA1IDYuMTE5ODQgNSA3LjhMNSAxNkM1IDE2LjkzIDUgMTcuMzk1IDUuMTAyMjIgMTcuNzc2NUM1LjM3OTYyIDE4LjgxMTcgNi4xODgyNyAxOS42MjA0IDcuMjIzNTQgMTkuODk3OEM3LjYwNTA0IDIwIDguMDcwMDMgMjAgOSAyMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEwIDhMOSA4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTAgMTJMOSAxMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEzIDEwTDEyIDEwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTMgNkwxMiA2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTMgMTdMMTMgMjBDMTMgMjAuNTUyMyAxMi41NTIzIDIxIDEyIDIxSDEwQzkuNDQ3NzIgMjEgOSAyMC41NTIzIDkgMjBMOSAxN0M5IDE2LjQ0NzcgOS40NDc3MiAxNiAxMCAxNkgxMkMxMi41NTIzIDE2IDEzIDE2LjQ0NzcgMTMgMTdaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/file-zip - Icon documentation
 */
export function FileZip({
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
      <path d="M13 20H14.2C15.8802 20 16.7202 20 17.362 19.673C17.9265 19.3854 18.3854 18.9265 18.673 18.362C19 17.7202 19 16.8802 19 15.2V8.56125C19 8.35323 19 8.24922 18.9796 8.14974C18.9615 8.06148 18.9315 7.97607 18.8905 7.89583C18.8443 7.80539 18.7793 7.72417 18.6494 7.56174L15.4804 3.60049C15.304 3.37997 15.2158 3.26971 15.1063 3.19035C15.0093 3.12004 14.9005 3.06773 14.785 3.03591C14.6546 3 14.5134 3 14.231 3H9.8C8.11984 3 7.27976 3 6.63803 3.32698C6.07354 3.6146 5.6146 4.07354 5.32698 4.63803C5 5.27976 5 6.11984 5 7.8L5 16C5 16.93 5 17.395 5.10222 17.7765C5.37962 18.8117 6.18827 19.6204 7.22354 19.8978C7.60504 20 8.07003 20 9 20" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M10 8L9 8" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M10 12L9 12" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M13 10L12 10" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M13 6L12 6" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M13 17L13 20C13 20.5523 12.5523 21 12 21H10C9.44772 21 9 20.5523 9 20L9 17C9 16.4477 9.44772 16 10 16H12C12.5523 16 13 16.4477 13 17Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
