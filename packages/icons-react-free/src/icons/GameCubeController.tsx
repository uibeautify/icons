import { IconProps } from "../types";

/**
 * @component
 * @name GameCubeController
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMjEuOTM0NCAxNi44NDE5TDIxLjIwNjkgMTAuNjMxOEMyMC45NjI2IDguNTQ1ODIgMTkuNDQ0OCA2LjgwMjc3IDE3LjM3NTggNi40NDE4QzEzLjUwNjcgNS43NjY3NiAxMC40NDA0IDUuNzczNjQgNi42MjM5OCA2LjQ0MDkxQzQuNTU1MDIgNi44MDI2NSAzLjAzNzQyIDguNTQ1OTUgMi43OTMwNCAxMC42MzJMMi4wNjU1OCAxNi44NDE5QzEuNzUzMTUgMTkuNTA4OCA1LjExMTAzIDIwLjkzNzkgNi44MTYzNyAxOC44NjM4QzguMDA4OTMgMTcuNDEzMyA5Ljc4ODE0IDE2LjU3MjggMTEuNjY1OSAxNi41NzI4SDEyLjMzNDFDMTQuMjExOSAxNi41NzI4IDE1Ljk5MTEgMTcuNDEzMyAxNy4xODM2IDE4Ljg2MzhDMTguODg5IDIwLjkzNzkgMjIuMjQ2OCAxOS41MDg4IDIxLjkzNDQgMTYuODQxOVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMiAzTDEyIDUuNzQxMzYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xOCAxMkgxOC4wMDAxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTQgMTJIMTQuMDAwMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE2IDEwSDE2LjAwMDEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNiAxNEgxNi4wMDAxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNiAxMkgxMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTggMTBMOCAxNCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/game-cube-controller - Icon documentation
 */
export function GameCubeController({
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
      <path d="M21.9344 16.8419L21.2069 10.6318C20.9626 8.54582 19.4448 6.80277 17.3758 6.4418C13.5067 5.76676 10.4404 5.77364 6.62398 6.44091C4.55502 6.80265 3.03742 8.54595 2.79304 10.632L2.06558 16.8419C1.75315 19.5088 5.11103 20.9379 6.81637 18.8638C8.00893 17.4133 9.78814 16.5728 11.6659 16.5728H12.3341C14.2119 16.5728 15.9911 17.4133 17.1836 18.8638C18.889 20.9379 22.2468 19.5088 21.9344 16.8419Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M12 3L12 5.74136" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M18 12H18.0001" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M14 12H14.0001" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M16 10H16.0001" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M16 14H16.0001" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M6 12H10" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M8 10L8 14" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
