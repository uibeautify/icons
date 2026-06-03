import { IconProps } from "../types";

/**
 * @component
 * @name GraduationCap
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTkgOC44MzI3MUwyMiA3LjVMMTIgM0wyIDcuNUw1IDguODMyNzFMMTIgMTJMMTkgOC44MzI3MVpNNSA4LjgzMjcxVjE2LjQzNTFDNSAxNy4zOTA5IDUuNDUxMzMgMTguMzAxMSA2LjI0ODM1IDE4LjgyODdDMTAuNTk4NSAyMS43MDg1IDEzLjQ3NzMgMjEuNzM4OCAxNy43Nzk4IDE4LjgyOTJDMTguNTYxIDE4LjMwMDkgMTkgMTcuNDAwOSAxOSAxNi40NTc4VjguODMyNzEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMjIgNy41TDIyIDEzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/graduation-cap - Icon documentation
 */
export function GraduationCap({
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
      <path d="M19 8.83271L22 7.5L12 3L2 7.5L5 8.83271L12 12L19 8.83271ZM5 8.83271V16.4351C5 17.3909 5.45133 18.3011 6.24835 18.8287C10.5985 21.7085 13.4773 21.7388 17.7798 18.8292C18.561 18.3009 19 17.4009 19 16.4578V8.83271" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M22 7.5L22 13" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
