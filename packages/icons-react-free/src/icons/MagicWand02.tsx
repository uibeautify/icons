import { IconProps } from "../types";

/**
 * @component
 * @name MagicWand02
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTAuMzM1IDEwLjc3NzlMMy4yNjM5NiAxNy44NDlDMi44NzM0MyAxOC4yMzk1IDIuODczNDMgMTguODcyNiAzLjI2Mzk2IDE5LjI2MzJMNC42NzgxNyAyMC42Nzc0QzUuMDY4NjkgMjEuMDY3OSA1LjcwMTg2IDIxLjA2NzkgNi4wOTIzOCAyMC42Nzc0TDEzLjE2MzUgMTMuNjA2M00xMC4zMzUgMTAuNzc3OUwxMi40NTYzIDguNjU2NTdDMTIuODQ2OSA4LjI2NjA1IDEzLjQ4IDguMjY2MDUgMTMuODcwNiA4LjY1NjU3TDE1LjI4NDggMTAuMDcwOEMxNS42NzUzIDEwLjQ2MTMgMTUuNjc1MyAxMS4wOTQ1IDE1LjI4NDggMTEuNDg1TDEzLjE2MzUgMTMuNjA2M00xMC4zMzUgMTAuNzc3OUwxMy4xNjM1IDEzLjYwNjMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xOC45NzcyIDQuOTY0MTFMMTcuNDg0NiA2LjQ1Njc4TTIxLjQ1MDQgMTAuOTM0OEwxOS4zMzk0IDEwLjkzNDhNMTguOTc3MiAxNi45MDU1TDE3LjQ4NDYgMTUuNDEyOE03LjAzNTgzIDQuOTY0MTFMOC41Mjg1MSA2LjQ1Njc4TTEzLjAwNjUgMi40OTA5NkwxMy4wMDY1IDQuNjAxOTIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/magic-wand-02 - Icon documentation
 */
export function MagicWand02({
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
      <path d="M10.335 10.7779L3.26396 17.849C2.87343 18.2395 2.87343 18.8726 3.26396 19.2632L4.67817 20.6774C5.06869 21.0679 5.70186 21.0679 6.09238 20.6774L13.1635 13.6063M10.335 10.7779L12.4563 8.65657C12.8469 8.26605 13.48 8.26605 13.8706 8.65657L15.2848 10.0708C15.6753 10.4613 15.6753 11.0945 15.2848 11.485L13.1635 13.6063M10.335 10.7779L13.1635 13.6063" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M18.9772 4.96411L17.4846 6.45678M21.4504 10.9348L19.3394 10.9348M18.9772 16.9055L17.4846 15.4128M7.03583 4.96411L8.52851 6.45678M13.0065 2.49096L13.0065 4.60192" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
