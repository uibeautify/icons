import { IconProps } from "../types";

/**
 * @component
 * @name DragHandle02
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNOSA0QzkgNC41NTIyOCA4LjU1MjI4IDUgOCA1QzcuNDQ3NzIgNSA3IDQuNTUyMjggNyA0QzcgMy40NDc3MiA3LjQ0NzcyIDMgOCAzQzguNTUyMjggMyA5IDMuNDQ3NzIgOSA0WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNyA0QzE3IDQuNTUyMjggMTYuNTUyMyA1IDE2IDVDMTUuNDQ3NyA1IDE1IDQuNTUyMjggMTUgNEMxNSAzLjQ0NzcyIDE1LjQ0NzcgMyAxNiAzQzE2LjU1MjMgMyAxNyAzLjQ0NzcyIDE3IDRaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTkgMTJDOSAxMi41NTIzIDguNTUyMjggMTMgOCAxM0M3LjQ0NzcyIDEzIDcgMTIuNTUyMyA3IDEyQzcgMTEuNDQ3NyA3LjQ0NzcyIDExIDggMTFDOC41NTIyOCAxMSA5IDExLjQ0NzcgOSAxMloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTcgMTJDMTcgMTIuNTUyMyAxNi41NTIzIDEzIDE2IDEzQzE1LjQ0NzcgMTMgMTUgMTIuNTUyMyAxNSAxMkMxNSAxMS40NDc3IDE1LjQ0NzcgMTEgMTYgMTFDMTYuNTUyMyAxMSAxNyAxMS40NDc3IDE3IDEyWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik05IDIwQzkgMjAuNTUyMyA4LjU1MjI4IDIxIDggMjFDNy40NDc3MiAyMSA3IDIwLjU1MjMgNyAyMEM3IDE5LjQ0NzcgNy40NDc3MiAxOSA4IDE5QzguNTUyMjggMTkgOSAxOS40NDc3IDkgMjBaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE3IDIwQzE3IDIwLjU1MjMgMTYuNTUyMyAyMSAxNiAyMUMxNS40NDc3IDIxIDE1IDIwLjU1MjMgMTUgMjBDMTUgMTkuNDQ3NyAxNS40NDc3IDE5IDE2IDE5QzE2LjU1MjMgMTkgMTcgMTkuNDQ3NyAxNyAyMFoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/drag-handle-02 - Icon documentation
 */
export function DragHandle02({
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
      <path d="M9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4Z" strokeWidth={strokeWidth} stroke={color}/><path d="M17 4C17 4.55228 16.5523 5 16 5C15.4477 5 15 4.55228 15 4C15 3.44772 15.4477 3 16 3C16.5523 3 17 3.44772 17 4Z" strokeWidth={strokeWidth} stroke={color}/><path d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z" strokeWidth={strokeWidth} stroke={color}/><path d="M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z" strokeWidth={strokeWidth} stroke={color}/><path d="M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20Z" strokeWidth={strokeWidth} stroke={color}/><path d="M17 20C17 20.5523 16.5523 21 16 21C15.4477 21 15 20.5523 15 20C15 19.4477 15.4477 19 16 19C16.5523 19 17 19.4477 17 20Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
