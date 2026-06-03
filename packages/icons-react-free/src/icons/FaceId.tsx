import { IconProps } from "../types";

/**
 * @component
 * @name FaceId
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTYuNSAzSDE4QzE5LjY1NjkgMyAyMSA0LjM0MzE1IDIxIDZWNy41IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNy41IDNINkM0LjM0MzE1IDMgMyA0LjM0MzE1IDMgNlY3LjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0zIDE2LjVWMThDMyAxOS42NTY5IDQuMzQzMTUgMjEgNiAyMUg3LjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNi41IDIxSDE4QzE5LjY1NjkgMjEgMjEgMTkuNjU2OSAyMSAxOFYxNi41IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOCA4VjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNiA4VjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMiA4VjExLjVDMTIgMTIuMDUyMyAxMS41NTIzIDEyLjUgMTEgMTIuNUgxMC41IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOCAxNkMxMC40Njg3IDE3LjMxOTggMTMuNTc0NCAxNy4zNDY4IDE2IDE2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/face-id - Icon documentation
 */
export function FaceId({
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
      <path d="M16.5 3H18C19.6569 3 21 4.34315 21 6V7.5" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M7.5 3H6C4.34315 3 3 4.34315 3 6V7.5" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 16.5V18C3 19.6569 4.34315 21 6 21H7.5" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M16.5 21H18C19.6569 21 21 19.6569 21 18V16.5" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M8 8V9" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M16 8V9" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 8V11.5C12 12.0523 11.5523 12.5 11 12.5H10.5" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M8 16C10.4687 17.3198 13.5744 17.3468 16 16" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
