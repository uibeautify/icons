import { IconProps } from "../types";

/**
 * @component
 * @name Quote
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNOSAxMkg3VjVMMy4xMzE3NiAxMS43Njk0QzMuMDQ1NDIgMTEuOTIwNSAzIDEyLjA5MTUgMyAxMi4yNjU2VjE4QzMgMTguNTUyMyAzLjQ0NzcyIDE5IDQgMTlIOUM5LjU1MjI4IDE5IDEwIDE4LjU1MjMgMTAgMThWMTNDMTAgMTIuNDQ3NyA5LjU1MjI4IDEyIDkgMTJaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMjAgMTJIMThWNUwxNC4xMzE4IDExLjc2OTRDMTQuMDQ1NCAxMS45MjA1IDE0IDEyLjA5MTUgMTQgMTIuMjY1NlYxOEMxNCAxOC41NTIzIDE0LjQ0NzcgMTkgMTUgMTlIMjBDMjAuNTUyMyAxOSAyMSAxOC41NTIzIDIxIDE4VjEzQzIxIDEyLjQ0NzcgMjAuNTUyMyAxMiAyMCAxMloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/quote - Icon documentation
 */
export function Quote({
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
      <path d="M9 12H7V5L3.13176 11.7694C3.04542 11.9205 3 12.0915 3 12.2656V18C3 18.5523 3.44772 19 4 19H9C9.55228 19 10 18.5523 10 18V13C10 12.4477 9.55228 12 9 12Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M20 12H18V5L14.1318 11.7694C14.0454 11.9205 14 12.0915 14 12.2656V18C14 18.5523 14.4477 19 15 19H20C20.5523 19 21 18.5523 21 18V13C21 12.4477 20.5523 12 20 12Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
