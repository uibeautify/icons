import { IconProps } from "../types";

/**
 * @component
 * @name Rocket02
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNOC42MTM3MSAxOC4xMjc0QzcuODMyNjYgMTguOTA4NSA1LjA3ODE3IDE4LjgzNDUgNS4wNzgxNyAxOC44MzQ1QzUuMDc4MTcgMTguODM0NSA1LjAwNDIzIDE2LjA4IDUuNzg1MjggMTUuMjk5QzYuNTY2MzMgMTQuNTE3OSA3LjgzMjY2IDE0LjUxNzkgOC42MTM3MSAxNS4yOTlDOS4zOTQ3NiAxNi4wOCA5LjM5NDc2IDE3LjM0NjQgOC42MTM3MSAxOC4xMjc0WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik05LjE2MzYyIDcuMDczNDVDNi40OTIyNyA2LjQzMjczIDMuOTEyNzIgNy41NzYxMSAyLjk1Njg2IDguMjI3ODlMNS43ODUyOSAxMS4wNTYzTDguMTczNzEgMTEuMzIxN0M5LjMzNTgzIDExLjQ1MDggMTAuMzc1NiAxMS45NzQxIDExLjE1NzEgMTIuNzU1Nk01Ljc4NTI5IDExLjA1NjNMOC45MDU1IDcuMzY4NzlDOC45OTAxNSA3LjI2ODc1IDkuMDc2MjEgNy4xNzAzIDkuMTYzNjIgNy4wNzM0NU0xNi44MTg1IDE0LjQ4MDZDMTcuNDQyNiAxNy41MDI4IDE2LjMyMjcgMjAuMDU2NyAxNS42ODQ4IDIwLjk1NThMMTIuODU2NCAxOC4xMjc0TDEyLjU5MSAxNS43MzlDMTIuNDYxOCAxNC41NzY4IDExLjkzODYgMTMuNTM3MSAxMS4xNTcxIDEyLjc1NTZNMTIuODU2NCAxOC4xMjc0TDE2LjY5MDMgMTQuNjAwMUMxNi43MzM0IDE0LjU2MDUgMTYuNzc2MSAxNC41MjA3IDE2LjgxODUgMTQuNDgwNk05LjE2MzYyIDcuMDczNDVDMTIuMDQzOSAzLjg4MjE3IDE2LjQwMDMgMi40MzEyOSAyMC42MzQ1IDMuMjc4MTRDMjEuMjg4IDcuNDE2NiAxOS44NTcxIDExLjYwNjkgMTYuODE4NSAxNC40ODA2TTExLjE1NzEgMTIuNzU1NkwxNC4yNzA2IDkuNjQyMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/rocket-02 - Icon documentation
 */
export function Rocket02({
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
      <path d="M8.61371 18.1274C7.83266 18.9085 5.07817 18.8345 5.07817 18.8345C5.07817 18.8345 5.00423 16.08 5.78528 15.299C6.56633 14.5179 7.83266 14.5179 8.61371 15.299C9.39476 16.08 9.39476 17.3464 8.61371 18.1274Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M9.16362 7.07345C6.49227 6.43273 3.91272 7.57611 2.95686 8.22789L5.78529 11.0563L8.17371 11.3217C9.33583 11.4508 10.3756 11.9741 11.1571 12.7556M5.78529 11.0563L8.9055 7.36879C8.99015 7.26875 9.07621 7.1703 9.16362 7.07345M16.8185 14.4806C17.4426 17.5028 16.3227 20.0567 15.6848 20.9558L12.8564 18.1274L12.591 15.739C12.4618 14.5768 11.9386 13.5371 11.1571 12.7556M12.8564 18.1274L16.6903 14.6001C16.7334 14.5605 16.7761 14.5207 16.8185 14.4806M9.16362 7.07345C12.0439 3.88217 16.4003 2.43129 20.6345 3.27814C21.288 7.4166 19.8571 11.6069 16.8185 14.4806M11.1571 12.7556L14.2706 9.6421" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
