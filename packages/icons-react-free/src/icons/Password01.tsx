import { IconProps } from "../types";

/**
 * @component
 * @name Password01
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNy4xNDQ0MiAyMC41SDYuODQ1NjVNNy41IDIwLjVDNy41IDIwLjc3NjEgNy4yNzYxNCAyMSA3IDIxQzYuNzIzODYgMjEgNi41IDIwLjc3NjEgNi41IDIwLjVDNi41IDIwLjIyMzkgNi43MjM4NiAyMCA3IDIwQzcuMjc2MTQgMjAgNy41IDIwLjIyMzkgNy41IDIwLjVaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTIuMTQ0NCAyMC41SDExLjg0NTZNMTIuNSAyMC41QzEyLjUgMjAuNzc2MSAxMi4yNzYxIDIxIDEyIDIxQzExLjcyMzkgMjEgMTEuNSAyMC43NzYxIDExLjUgMjAuNUMxMS41IDIwLjIyMzkgMTEuNzIzOSAyMCAxMiAyMEMxMi4yNzYxIDIwIDEyLjUgMjAuMjIzOSAxMi41IDIwLjVaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTcuMTQ0NCAyMC41SDE2Ljg0NTZNMTcuNSAyMC41QzE3LjUgMjAuNzc2MSAxNy4yNzYxIDIxIDE3IDIxQzE2LjcyMzkgMjEgMTYuNSAyMC43NzYxIDE2LjUgMjAuNUMxNi41IDIwLjIyMzkgMTYuNzIzOSAyMCAxNyAyMEMxNy4yNzYxIDIwIDE3LjUgMjAuMjIzOSAxNy41IDIwLjVaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTYuOCA5SDcuMkM2LjA3OTkgOSA1LjUxOTg0IDkgNS4wOTIwMiA5LjIxNzk5QzQuNzE1NjkgOS40MDk3MyA0LjQwOTczIDkuNzE1NjkgNC4yMTc5OSAxMC4wOTJDNCAxMC41MTk4IDQgMTEuMDc5OSA0IDEyLjJWMTIuOEM0IDEzLjkyMDEgNCAxNC40ODAyIDQuMjE3OTkgMTQuOTA4QzQuNDA5NzMgMTUuMjg0MyA0LjcxNTY5IDE1LjU5MDMgNS4wOTIwMiAxNS43ODJDNS41MTk4NCAxNiA2LjA3OTkgMTYgNy4yIDE2SDE2LjhDMTcuOTIwMSAxNiAxOC40ODAyIDE2IDE4LjkwOCAxNS43ODJDMTkuMjg0MyAxNS41OTAzIDE5LjU5MDMgMTUuMjg0MyAxOS43ODIgMTQuOTA4QzIwIDE0LjQ4MDIgMjAgMTMuOTIwMSAyMCAxMi44VjEyLjJDMjAgMTEuMDc5OSAyMCAxMC41MTk4IDE5Ljc4MiAxMC4wOTJDMTkuNTkwMyA5LjcxNTY5IDE5LjI4NDMgOS40MDk3MyAxOC45MDggOS4yMTc5OUMxOC40ODAyIDkgMTcuOTIwMSA5IDE2LjggOVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNSA5VjZDMTUgNC4zNDMxNSAxMy42NTY5IDMgMTIgM0MxMC4zNDMxIDMgOSA0LjM0MzE1IDkgNlY5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/password-01 - Icon documentation
 */
export function Password01({
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
      <path d="M7.14442 20.5H6.84565M7.5 20.5C7.5 20.7761 7.27614 21 7 21C6.72386 21 6.5 20.7761 6.5 20.5C6.5 20.2239 6.72386 20 7 20C7.27614 20 7.5 20.2239 7.5 20.5Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12.1444 20.5H11.8456M12.5 20.5C12.5 20.7761 12.2761 21 12 21C11.7239 21 11.5 20.7761 11.5 20.5C11.5 20.2239 11.7239 20 12 20C12.2761 20 12.5 20.2239 12.5 20.5Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M17.1444 20.5H16.8456M17.5 20.5C17.5 20.7761 17.2761 21 17 21C16.7239 21 16.5 20.7761 16.5 20.5C16.5 20.2239 16.7239 20 17 20C17.2761 20 17.5 20.2239 17.5 20.5Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M16.8 9H7.2C6.0799 9 5.51984 9 5.09202 9.21799C4.71569 9.40973 4.40973 9.71569 4.21799 10.092C4 10.5198 4 11.0799 4 12.2V12.8C4 13.9201 4 14.4802 4.21799 14.908C4.40973 15.2843 4.71569 15.5903 5.09202 15.782C5.51984 16 6.0799 16 7.2 16H16.8C17.9201 16 18.4802 16 18.908 15.782C19.2843 15.5903 19.5903 15.2843 19.782 14.908C20 14.4802 20 13.9201 20 12.8V12.2C20 11.0799 20 10.5198 19.782 10.092C19.5903 9.71569 19.2843 9.40973 18.908 9.21799C18.4802 9 17.9201 9 16.8 9Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M15 9V6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6V9" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
