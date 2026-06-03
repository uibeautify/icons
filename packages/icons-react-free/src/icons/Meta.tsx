import { IconProps } from "../types";

/**
 * @component
 * @name Meta
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTYuOTE2NCA2LjAwNzA2QzIyLjQyNjMgNi4wMDcwNiAyMy44MDM4IDE5IDE5LjMyNyAxOUMxNS41MzkgMTkgMTIuNTY3MiA2LjAwNzEgNy4yNzQwMyA2LjAwNzA2QzIuNDUyODMgNi4wMDcwMyAtMC4zMDE4ODQgMTkgNC41MTkyNiAxOUMxMC4wMjkxIDE5IDExLjc1MDkgNS42NDk0MSAxNi45MTY0IDYuMDA3MDZaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/meta - Icon documentation
 */
export function Meta({
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
      <path d="M16.9164 6.00706C22.4263 6.00706 23.8038 19 19.327 19C15.539 19 12.5672 6.0071 7.27403 6.00706C2.45283 6.00703 -0.301884 19 4.51926 19C10.0291 19 11.7509 5.64941 16.9164 6.00706Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
