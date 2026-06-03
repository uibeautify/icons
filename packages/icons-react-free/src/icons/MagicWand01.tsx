import { IconProps } from "../types";

/**
 * @component
 * @name MagicWand01
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMi45Nzc5MiAyMC45NzY2TDE0Ljk5ODcgOC45NTU4MSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE5LjI0MTMgNC43NDI2NEwxNy44MjcxIDYuMTU2ODVNMjAuOTk4NyA4Ljk4NTI4TDE4Ljk5ODcgOC45ODUyOE0xOS4yNDEzIDEzLjIyNzlMMTcuODI3MSAxMS44MTM3TTEwLjc1NiA0Ljc0MjY0TDEyLjE3MDMgNi4xNTY4NU0xNC45OTg3IDIuOTg1MjhMMTQuOTk4NyA0Ljk4NTI4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/magic-wand-01 - Icon documentation
 */
export function MagicWand01({
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
      <path d="M2.97792 20.9766L14.9987 8.95581" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M19.2413 4.74264L17.8271 6.15685M20.9987 8.98528L18.9987 8.98528M19.2413 13.2279L17.8271 11.8137M10.756 4.74264L12.1703 6.15685M14.9987 2.98528L14.9987 4.98528" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
