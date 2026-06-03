import { IconProps } from "../types";

/**
 * @component
 * @name FlaskRound
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTIgMjFDMTUuODY2IDIxIDE5IDE4LjAzMDkgMTkgMTQuMzY4NEMxOSAxMS4zNjQzIDE2Ljg5MTUgOC44MjY3MiAxNCA4LjAxMTQ2VjZIMTQuNUMxNS4zMjg0IDYgMTYgNS4zMjg0MyAxNiA0LjVDMTYgMy42NzE1NyAxNS4zMjg0IDMgMTQuNSAzSDkuNUM4LjY3MTU3IDMgOCAzLjY3MTU3IDggNC41QzggNS4zMjg0MyA4LjY3MTU3IDYgOS41IDZIMTBWOC4wMTE0NkM3LjEwODUxIDguODI2NzIgNSAxMS4zNjQzIDUgMTQuMzY4NEM1IDE4LjAzMDkgOC4xMzQwMSAyMSAxMiAyMVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik01IDEzSDE5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/flask-round - Icon documentation
 */
export function FlaskRound({
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
      <path d="M12 21C15.866 21 19 18.0309 19 14.3684C19 11.3643 16.8915 8.82672 14 8.01146V6H14.5C15.3284 6 16 5.32843 16 4.5C16 3.67157 15.3284 3 14.5 3H9.5C8.67157 3 8 3.67157 8 4.5C8 5.32843 8.67157 6 9.5 6H10V8.01146C7.10851 8.82672 5 11.3643 5 14.3684C5 18.0309 8.13401 21 12 21Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M5 13H19" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
