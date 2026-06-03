import { IconProps } from "../types";

/**
 * @component
 * @name Status
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTIgM1Y2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTIgMThWMjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik01LjYzNjA1IDUuNjM1OTlMNy43NTczNyA3Ljc1NzMxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTYuMjQyNiAxNi4yNDI3TDE4LjM2MzkgMTguMzY0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTguMzY0IDUuNjM1OTlMMTYuMjQyNiA3Ljc1NzMxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNy43NTczOSAxNi4yNDI3TDUuNjM2MDYgMTguMzY0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMjEgMTJMMTggMTIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik02IDEyTDMgMTIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/status - Icon documentation
 */
export function Status({
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
      <path d="M12 3V6" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 18V21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M5.63605 5.63599L7.75737 7.75731" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M16.2426 16.2427L18.3639 18.364" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M18.364 5.63599L16.2426 7.75731" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M7.75739 16.2427L5.63606 18.364" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M21 12L18 12" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M6 12L3 12" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
