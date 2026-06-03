import { IconProps } from "../types";

/**
 * @component
 * @name Snowflake01
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTEuOTk4OSA2VjE4TTExLjk5ODkgNkw4Ljk5ODkzIDNNMTEuOTk4OSA2TDE0Ljk5ODkgM00xMS45OTg5IDE4TDguOTk4OTMgMjFNMTEuOTk4OSAxOEwxNC45OTg5IDIxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTcuMTk1MSA4Ljk5OTk5TDYuODAyNzcgMTVNMTcuMTk1MSA4Ljk5OTk5TDE4LjI5MzIgNC45MDE5Mk0xNy4xOTUxIDguOTk5OTlMMjEuMjkzMiAxMC4wOTgxTTYuODAyNzcgMTVMMi43MDQ2OSAxMy45MDE5TTYuODAyNzcgMTVMNS43MDQ2OSAxOS4wOTgxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTcuMTk1MSAxNUw2LjgwMjc5IDguOTk5OTlNMTcuMTk1MSAxNUwyMS4yOTMyIDEzLjkwMTlNMTcuMTk1MSAxNUwxOC4yOTMyIDE5LjA5ODFNNi44MDI3OSA4Ljk5OTk5TDUuNzA0NzEgNC45MDE5MU02LjgwMjc5IDguOTk5OTlMMi43MDQ3MSAxMC4wOTgxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/snowflake-01 - Icon documentation
 */
export function Snowflake01({
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
      <path d="M11.9989 6V18M11.9989 6L8.99893 3M11.9989 6L14.9989 3M11.9989 18L8.99893 21M11.9989 18L14.9989 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M17.1951 8.99999L6.80277 15M17.1951 8.99999L18.2932 4.90192M17.1951 8.99999L21.2932 10.0981M6.80277 15L2.70469 13.9019M6.80277 15L5.70469 19.0981" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M17.1951 15L6.80279 8.99999M17.1951 15L21.2932 13.9019M17.1951 15L18.2932 19.0981M6.80279 8.99999L5.70471 4.90191M6.80279 8.99999L2.70471 10.0981" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
