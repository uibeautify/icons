import { IconProps } from "../types";

/**
 * @component
 * @name Basketball
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMyAxMkwyMSAxMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMiAzTDEyIDIxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTggMTIuMDAwMUM4IDE0LjQxNTQgNy4wNDg1NSAxNi42MDg1IDUuNSAxOC4yMjUxQzMuOTUxNDUgMTYuNjA4NSAzIDE0LjQxNTQgMyAxMi4wMDAxQzMgOS41ODQ3OCAzLjk1MTQ1IDcuMzkxNjggNS41IDUuNzc1MTVDNy4wNDg1NSA3LjM5MTY4IDggOS41ODQ3OCA4IDEyLjAwMDFaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMjEgMTIuMDAwMUMyMSAxNC40MTU0IDIwLjA0ODUgMTYuNjA4NSAxOC41IDE4LjIyNTFDMTYuOTUxNSAxNi42MDg1IDE2IDE0LjQxNTQgMTYgMTIuMDAwMUMxNiA5LjU4NDc4IDE2Ljk1MTUgNy4zOTE2OCAxOC41IDUuNzc1MTVDMjAuMDQ4NSA3LjM5MTY4IDIxIDkuNTg0NzggMjEgMTIuMDAwMVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/basketball - Icon documentation
 */
export function Basketball({
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
      <circle cx="12" cy="12" r="9" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M3 12L21 12" strokeWidth={strokeWidth} stroke={color}/><path d="M12 3L12 21" strokeWidth={strokeWidth} stroke={color}/><path d="M8 12.0001C8 14.4154 7.04855 16.6085 5.5 18.2251C3.95145 16.6085 3 14.4154 3 12.0001C3 9.58478 3.95145 7.39168 5.5 5.77515C7.04855 7.39168 8 9.58478 8 12.0001Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M21 12.0001C21 14.4154 20.0485 16.6085 18.5 18.2251C16.9515 16.6085 16 14.4154 16 12.0001C16 9.58478 16.9515 7.39168 18.5 5.77515C20.0485 7.39168 21 9.58478 21 12.0001Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
