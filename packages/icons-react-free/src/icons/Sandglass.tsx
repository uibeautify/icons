import { IconProps } from "../types";

/**
 * @component
 * @name Sandglass
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTUuNjM5MSAzSDguMzYwOTJDNy4xMjUwNCAzIDYuMTg0OTYgNC4xMDk3MyA2LjM4ODEzIDUuMzI4OEw2Ljg1NzU1IDguMTQ1MzNDNi45NDg0NCA4LjY5MDYyIDcuMjYwOTcgOS4xNzM5OCA3LjcyMDk0IDkuNDgwNjNMOS41NTQ3IDEwLjcwMzFDOS44MzI5IDEwLjg4ODYgMTAgMTEuMjAwOCAxMCAxMS41MzUyVjEyLjQ2NDhDMTAgMTIuNzk5MiA5LjgzMjkgMTMuMTExNCA5LjU1NDcgMTMuMjk2OUw3LjcyMDk0IDE0LjUxOTRDNy4yNjA5NyAxNC44MjYgNi45NDg0NCAxNS4zMDk0IDYuODU3NTUgMTUuODU0N0w2LjM4ODEzIDE4LjY3MTJDNi4xODQ5NiAxOS44OTAzIDcuMTI1MDQgMjEgOC4zNjA5MiAyMUgxNS42MzkxQzE2Ljg3NSAyMSAxNy44MTUgMTkuODkwMyAxNy42MTE5IDE4LjY3MTJMMTcuMTQyNCAxNS44NTQ3QzE3LjA1MTYgMTUuMzA5NCAxNi43MzkgMTQuODI2IDE2LjI3OTEgMTQuNTE5NEwxNC40NDUzIDEzLjI5NjlDMTQuMTY3MSAxMy4xMTE0IDE0IDEyLjc5OTIgMTQgMTIuNDY0OFYxMS41MzUyQzE0IDExLjIwMDggMTQuMTY3MSAxMC44ODg2IDE0LjQ0NTMgMTAuNzAzMUwxNi4yNzkxIDkuNDgwNjNDMTYuNzM5IDkuMTczOTggMTcuMDUxNiA4LjY5MDYyIDE3LjE0MjQgOC4xNDUzM0wxNy42MTE5IDUuMzI4OEMxNy44MTUgNC4xMDk3MyAxNi44NzUgMyAxNS42MzkxIDNaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTEgMTdIMTMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/sandglass - Icon documentation
 */
export function Sandglass({
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
      <path d="M15.6391 3H8.36092C7.12504 3 6.18496 4.10973 6.38813 5.3288L6.85755 8.14533C6.94844 8.69062 7.26097 9.17398 7.72094 9.48063L9.5547 10.7031C9.8329 10.8886 10 11.2008 10 11.5352V12.4648C10 12.7992 9.8329 13.1114 9.5547 13.2969L7.72094 14.5194C7.26097 14.826 6.94844 15.3094 6.85755 15.8547L6.38813 18.6712C6.18496 19.8903 7.12504 21 8.36092 21H15.6391C16.875 21 17.815 19.8903 17.6119 18.6712L17.1424 15.8547C17.0516 15.3094 16.739 14.826 16.2791 14.5194L14.4453 13.2969C14.1671 13.1114 14 12.7992 14 12.4648V11.5352C14 11.2008 14.1671 10.8886 14.4453 10.7031L16.2791 9.48063C16.739 9.17398 17.0516 8.69062 17.1424 8.14533L17.6119 5.3288C17.815 4.10973 16.875 3 15.6391 3Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M11 17H13" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
