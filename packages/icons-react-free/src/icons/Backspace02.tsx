import { IconProps } from "../types";

/**
 * @component
 * @name Backspace02
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNi42MDI2NSA2LjI1NjI5QzcuMTY1NzkgNS40Njc5IDguMDc1IDUgOS4wNDM4NSA1SDE4QzE5LjY1NjkgNSAyMSA2LjM0MzE1IDIxIDhWMTZDMjEgMTcuNjU2OSAxOS42NTY5IDE5IDE4IDE5SDkuMDQzODVDOC4wNzUgMTkgNy4xNjU3OSAxOC41MzIxIDYuNjAyNjUgMTcuNzQzN0wzLjMzMDM0IDEzLjE2MjVDMi44MzM2MyAxMi40NjcxIDIuODMzNjMgMTEuNTMyOSAzLjMzMDM0IDEwLjgzNzVMNi42MDI2NSA2LjI1NjI5WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/backspace-02 - Icon documentation
 */
export function Backspace02({
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
      <path d="M6.60265 6.25629C7.16579 5.4679 8.075 5 9.04385 5H18C19.6569 5 21 6.34315 21 8V16C21 17.6569 19.6569 19 18 19H9.04385C8.075 19 7.16579 18.5321 6.60265 17.7437L3.33034 13.1625C2.83363 12.4671 2.83363 11.5329 3.33034 10.8375L6.60265 6.25629Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
