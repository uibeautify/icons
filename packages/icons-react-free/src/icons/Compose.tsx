import { IconProps } from "../types";

/**
 * @component
 * @name Compose
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTUuMDA1NiA2LjEzNjQ3TDE3LjgzNDEgOC45NjQ5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTkuOTU1NCA1LjQyOTQzTDE4LjU0MTIgNC4wMTUyMUMxOC4xNTA3IDMuNjI0NjkgMTcuNTE3NSAzLjYyNDY5IDE3LjEyNyA0LjAxNTIxTDYuMzU3OTcgMTQuNzg0MkM1Ljk5ODE0IDE1LjE0NCA1LjcxMDI3IDE1LjU2OTIgNS41MDk4MSAxNi4wMzdMMy42OTE5NCAyMC4yNzg3TDcuOTMzNjQgMTguNDYwOEM4LjQwMTM4IDE4LjI2MDMgOC44MjY1NiAxNy45NzI1IDkuMTg2MzkgMTcuNjEyNkwxOS45NTU0IDYuODQzNjRDMjAuMzQ1OSA2LjQ1MzEyIDIwLjM0NTkgNS44MTk5NSAxOS45NTU0IDUuNDI5NDNaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/compose - Icon documentation
 */
export function Compose({
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
      <path d="M15.0056 6.13647L17.8341 8.9649" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M19.9554 5.42943L18.5412 4.01521C18.1507 3.62469 17.5175 3.62469 17.127 4.01521L6.35797 14.7842C5.99814 15.144 5.71027 15.5692 5.50981 16.037L3.69194 20.2787L7.93364 18.4608C8.40138 18.2603 8.82656 17.9725 9.18639 17.6126L19.9554 6.84364C20.3459 6.45312 20.3459 5.81995 19.9554 5.42943Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
