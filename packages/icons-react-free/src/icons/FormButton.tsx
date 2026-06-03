import { IconProps } from "../types";

/**
 * @component
 * @name FormButton
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNi41IDEzLjk5MTJDNS42MzQ3NiAxMy45NzA3IDUuMDg3NyAxMy45MDIxIDQuNjM4MDMgMTMuNjczQzQuMDczNTQgMTMuMzg1NCAzLjYxNDYgMTIuOTI2NSAzLjMyNjk4IDEyLjM2MkMzIDExLjcyMDIgMyAxMC44ODAyIDMgOS4yVjcuOEMzIDYuMTE5ODQgMyA1LjI3OTc2IDMuMzI2OTggNC42MzgwM0MzLjYxNDYgNC4wNzM1NCA0LjA3MzU0IDMuNjE0NiA0LjYzODAzIDMuMzI2OThDNS4yNzk3NiAzIDYuMTE5ODQgMyA3LjggM0gxNi4yQzE3Ljg4MDIgMyAxOC43MjAyIDMgMTkuMzYyIDMuMzI2OThDMTkuOTI2NSAzLjYxNDYgMjAuMzg1NCA0LjA3MzU0IDIwLjY3MyA0LjYzODAzQzIxIDUuMjc5NzYgMjEgNi4xMTk4NCAyMSA3LjhWOS4yQzIxIDkuNzAyODUgMjEgMTAuMTMwNCAyMC45OTEyIDEwLjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMC4zMDM4IDguNDc3NTRMMjEgMTUuMDAzOEwxNC44MDM4IDE2LjI3MThMMTAuNjA3NyAyMS4wMDM4TDEwLjMwMzggOC40Nzc1NFoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/form-button - Icon documentation
 */
export function FormButton({
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
      <path d="M6.5 13.9912C5.63476 13.9707 5.0877 13.9021 4.63803 13.673C4.07354 13.3854 3.6146 12.9265 3.32698 12.362C3 11.7202 3 10.8802 3 9.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V9.2C21 9.70285 21 10.1304 20.9912 10.5" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M10.3038 8.47754L21 15.0038L14.8038 16.2718L10.6077 21.0038L10.3038 8.47754Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
