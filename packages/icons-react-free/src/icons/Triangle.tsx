import { IconProps } from "../types";

/**
 * @component
 * @name Triangle
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTAuNzA5NCA0LjY4MjAzQzExLjE3MzMgMy44MTI3NiAxMS40MDUzIDMuMzc4MTIgMTEuNzEyNyAzLjIzNzYzQzExLjk4MDQgMy4xMTUyNyAxMi4yODg0IDMuMTE3MDYgMTIuNTU0NiAzLjI0MjUyQzEyLjg2MDMgMy4zODY1NyAxMy4wODczIDMuODIzODcgMTMuNTQxMSA0LjY5ODQ3TDIwLjc4NzQgMTguNjYzMUMyMS4xODggMTkuNDM1MiAyMS4zODgzIDE5LjgyMTIgMjEuMzQ1MiAyMC4xMzU4QzIxLjMwNzYgMjAuNDEwMyAyMS4xNTc3IDIwLjY1NyAyMC45MzEzIDIwLjgxNjlDMjAuNjcyIDIxIDIwLjIzNyAyMSAxOS4zNjcyIDIxSDQuNjY3NkMzLjc4Nzc2IDIxIDMuMzQ3ODUgMjEgMy4wODc1OCAyMC44MTQ5QzIuODYwNDMgMjAuNjUzMyAyLjcxMTA0IDIwLjQwNDIgMi42NzU0NCAyMC4xMjc3QzIuNjM0NjUgMTkuODEwOSAyLjg0MTc5IDE5LjQyMjggMy4yNTYwNiAxOC42NDY2TDEwLjcwOTQgNC42ODIwM1oiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/triangle - Icon documentation
 */
export function Triangle({
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
      <path d="M10.7094 4.68203C11.1733 3.81276 11.4053 3.37812 11.7127 3.23763C11.9804 3.11527 12.2884 3.11706 12.5546 3.24252C12.8603 3.38657 13.0873 3.82387 13.5411 4.69847L20.7874 18.6631C21.188 19.4352 21.3883 19.8212 21.3452 20.1358C21.3076 20.4103 21.1577 20.657 20.9313 20.8169C20.672 21 20.237 21 19.3672 21H4.6676C3.78776 21 3.34785 21 3.08758 20.8149C2.86043 20.6533 2.71104 20.4042 2.67544 20.1277C2.63465 19.8109 2.84179 19.4228 3.25606 18.6466L10.7094 4.68203Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
