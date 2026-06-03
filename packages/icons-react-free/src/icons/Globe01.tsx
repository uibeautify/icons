import { IconProps } from "../types";

/**
 * @component
 * @name Globe01
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxMS45OTk4IiBjeT0iMTIuMDAwOCIgcj0iOSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1IDExLjk5OTggMTIuMDAwOCkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik04LjYzMzUzIDQuMjA1NjFDOS4wNDQyNiAzLjI2NzQ4IDEwLjE5MDggMi45NjAyIDExLjAxNTcgMy41NjcxQzEzLjI2NTQgNS4yMjIyNiAxNS4wNjc4IDcuODAzNzMgMTUuOTExOCAxMC45NTM1QzE2Ljc1NTggMTQuMTAzMyAxNi40ODU1IDE3LjI0MDEgMTUuMzY0OSAxOS43OTgzQzE0Ljk1MzkgMjAuNzM2NCAxMy44MDczIDIxLjA0MzYgMTIuOTgyNSAyMC40MzY1QzEwLjczMzUgMTguNzgxIDguOTMyMDUgMTYuMTk5MiA4LjA4ODIgMTMuMDQ5OUM3LjI0NDM5IDkuOTAwNDcgNy41MTM1MiA2Ljc2Mzc4IDguNjMzNTMgNC4yMDU2MVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0zLjI5NjgyIDE0LjI5NDNMMjAuNjgzNSA5LjYzNTU1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/globe-01 - Icon documentation
 */
export function Globe01({
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
      <circle cx="11.9998" cy="12.0008" r="9" transform="rotate(-15 11.9998 12.0008)" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" stroke={color}/><path d="M8.63353 4.20561C9.04426 3.26748 10.1908 2.9602 11.0157 3.5671C13.2654 5.22226 15.0678 7.80373 15.9118 10.9535C16.7558 14.1033 16.4855 17.2401 15.3649 19.7983C14.9539 20.7364 13.8073 21.0436 12.9825 20.4365C10.7335 18.781 8.93205 16.1992 8.0882 13.0499C7.24439 9.90047 7.51352 6.76378 8.63353 4.20561Z" strokeWidth={strokeWidth} strokeLinejoin="round" strokeLinecap="round" stroke={color}/><path d="M3.29682 14.2943L20.6835 9.63555" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
