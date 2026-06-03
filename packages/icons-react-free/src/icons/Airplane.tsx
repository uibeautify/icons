import { IconProps } from "../types";

/**
 * @component
 * @name Airplane
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNi4xMzYgMTguMTc0MUwyMC42Mjk1IDcuMDc3NTRDMjEuMTgxMyA2LjY1NTA4IDIwLjk5ODcgNS43ODE4NSAyMC4zMjM5IDUuNjE1NzhMMTguMDMxMiA1LjA1MTU2QzE2LjEzNzcgNC41ODU1NyAxNC4xNDIyIDUuMjEzMDYgMTIuODU2MiA2LjY3ODkyTDEwLjc2MyA5LjA2NDcxTDYuOTc1MyA4LjE2OTg3TDYuOTc1MjkgOC4xNjk4N0M2LjM0NzEzIDguMDIxNDcgNi4wMzMwNCA3Ljk0NzI2IDUuNzI4NjIgNy45Njg4N0M1LjQ1OTE3IDcuOTg4IDUuMTk2MzkgOC4wNjE1MSA0Ljk1NjEzIDguMTg0OTZDNC42ODQ2OCA4LjMyNDQ1IDQuNDU0NjkgOC41NTA4NSAzLjk5NDcgOS4wMDM2NUwzLjQ5MiA5LjQ5ODVMOC4zMzkzMyAxMi41MzVMNi4xMzYgMTQuNzAzOUg0LjI5OTE2QzMuNjQwMSAxNC43MDM5IDMuMzEwNTcgMTQuNzAzOSAzLjE2ODQ3IDE0LjgzMDJDMy4wNDUzNSAxNC45Mzk3IDIuOTg0MDcgMTUuMTAyOCAzLjAwNDYzIDE1LjI2NjNDMy4wMjgzNyAxNS40NTQ5IDMuMjc2MzYgMTUuNjcxOSAzLjc3MjM1IDE2LjEwNTlMNi4xMzYgMTguMTc0MVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNS4wNjAyIDE1LjE5OTZMMTQuNjM1MSAxOC4zNzMyTDEzLjM2MDEgMTkuMTY2NkwxMi4yNjYxIDE3LjQ2NDkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/airplane - Icon documentation
 */
export function Airplane({
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
      <path d="M6.136 18.1741L20.6295 7.07754C21.1813 6.65508 20.9987 5.78185 20.3239 5.61578L18.0312 5.05156C16.1377 4.58557 14.1422 5.21306 12.8562 6.67892L10.763 9.06471L6.9753 8.16987L6.97529 8.16987C6.34713 8.02147 6.03304 7.94726 5.72862 7.96887C5.45917 7.988 5.19639 8.06151 4.95613 8.18496C4.68468 8.32445 4.45469 8.55085 3.9947 9.00365L3.492 9.4985L8.33933 12.535L6.136 14.7039H4.29916C3.6401 14.7039 3.31057 14.7039 3.16847 14.8302C3.04535 14.9397 2.98407 15.1028 3.00463 15.2663C3.02837 15.4549 3.27636 15.6719 3.77235 16.1059L6.136 18.1741Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M15.0602 15.1996L14.6351 18.3732L13.3601 19.1666L12.2661 17.4649" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
