import { IconProps } from "../types";

/**
 * @component
 * @name Ship
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNiAyMEwzIDE1LjI4NTdMNCAxNS4xNDI5TDExLjE1MTUgMTQuMTIxMkMxMS43MTQzIDE0LjA0MDggMTIuMjg1NyAxNC4wNDA4IDEyLjg0ODUgMTQuMTIxMkwyMCAxNS4xNDI5TDIxIDE1LjI4NTdMMTggMjBNNCAxNS4xNDI5TDQuNzUgMTEuNTcxNE0yMCAxNS4xNDI5TDE5LjI1IDExLjU3MTRNMTkuMjUgMTEuNTcxNEwxOC44MzM3IDkuNTg4OTdDMTguNjM5MiA4LjY2MzAxIDE3LjgyMjUgOCAxNi44NzY0IDhINy4xMjM2MkM2LjE3NzQ3IDggNS4zNjA3NyA4LjY2MzAxIDUuMTY2MzIgOS41ODg5N0w0Ljc1IDExLjU3MTRNMTkuMjUgMTEuNTcxNEwxNiAxMU00Ljc1IDExLjU3MTRMOCAxMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTQuNjM2MzUgMjEuMDAwMUw1Ljg2MzYzIDIwLjE4MkM2LjYwNjggMTkuNjg2NSA3LjU3NDk5IDE5LjY4NjUgOC4zMTgxNyAyMC4xODJDOS4wNjEzNSAyMC42Nzc0IDEwLjAyOTUgMjAuNjc3NCAxMC43NzI3IDIwLjE4MkMxMS41MTU5IDE5LjY4NjUgMTIuNDg0MSAxOS42ODY1IDEzLjIyNzMgMjAuMTgyQzEzLjk3MDQgMjAuNjc3NCAxNC45Mzg2IDIwLjY3NzQgMTUuNjgxOCAyMC4xODJDMTYuNDI1IDE5LjY4NjUgMTcuMzkzMiAxOS42ODY1IDE4LjEzNjQgMjAuMTgyTDE5LjM2MzYgMjEuMDAwMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEyIDE1TDEyIDE5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTIgMkwxMiA0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOSA4TDkgNUM5IDQuNDQ3NzIgOS40NDc3MiA0IDEwIDRMMTQgNEMxNC41NTIzIDQgMTUgNC40NDc3MiAxNSA1TDE1IDgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/ship - Icon documentation
 */
export function Ship({
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
      <path d="M6 20L3 15.2857L4 15.1429L11.1515 14.1212C11.7143 14.0408 12.2857 14.0408 12.8485 14.1212L20 15.1429L21 15.2857L18 20M4 15.1429L4.75 11.5714M20 15.1429L19.25 11.5714M19.25 11.5714L18.8337 9.58897C18.6392 8.66301 17.8225 8 16.8764 8H7.12362C6.17747 8 5.36077 8.66301 5.16632 9.58897L4.75 11.5714M19.25 11.5714L16 11M4.75 11.5714L8 11" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M4.63635 21.0001L5.86363 20.182C6.6068 19.6865 7.57499 19.6865 8.31817 20.182C9.06135 20.6774 10.0295 20.6774 10.7727 20.182C11.5159 19.6865 12.4841 19.6865 13.2273 20.182C13.9704 20.6774 14.9386 20.6774 15.6818 20.182C16.425 19.6865 17.3932 19.6865 18.1364 20.182L19.3636 21.0001" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M12 15L12 19" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M12 2L12 4" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M9 8L9 5C9 4.44772 9.44772 4 10 4L14 4C14.5523 4 15 4.44772 15 5L15 8" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
