import { IconProps } from "../types";

/**
 * @component
 * @name Pencil
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTUuNTQyMSA0LjMwMzJDMTYuNzEzNyAzLjEzMTYzIDE4LjYxMzIgMy4xMzE2MyAxOS43ODQ4IDQuMzAzMjFDMjAuOTU2NCA1LjQ3NDc4IDIwLjk1NjQgNy4zNzQyNyAxOS43ODQ4IDguNTQ1ODVMMTIuMDUgMTYuMjgwNkMxMC42MjM5IDE3LjcwNjggOC45MDUxOCAxOC44MDY0IDcuMDEyNjMgMTkuNTAzN0w0LjU1MjI0IDIwLjQxMDJDNC4wMDcxMiAyMC42MTEgMy40NzcwMSAyMC4wODA5IDMuNjc3ODQgMTkuNTM1OEw0LjU4NDMgMTcuMDc1NEM1LjI4MTU2IDE1LjE4MjggNi4zODEyMyAxMy40NjQxIDcuODA3NDEgMTIuMDM3OUwxNS41NDIxIDQuMzAzMloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTQuMTI4IDUuNzE3MjlMMTguMzcwNiA5Ljk1OTkzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/pencil - Icon documentation
 */
export function Pencil({
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
      <path d="M15.5421 4.3032C16.7137 3.13163 18.6132 3.13163 19.7848 4.30321C20.9564 5.47478 20.9564 7.37427 19.7848 8.54585L12.05 16.2806C10.6239 17.7068 8.90518 18.8064 7.01263 19.5037L4.55224 20.4102C4.00712 20.611 3.47701 20.0809 3.67784 19.5358L4.5843 17.0754C5.28156 15.1828 6.38123 13.4641 7.80741 12.0379L15.5421 4.3032Z" strokeWidth={strokeWidth} stroke={color}/><path d="M14.128 5.71729L18.3706 9.95993" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
