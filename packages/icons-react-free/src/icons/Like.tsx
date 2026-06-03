import { IconProps } from "../types";

/**
 * @component
 * @name Like
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTguMTIxNCA5LjVIMTUuOTIzNEMxNC45ODM5IDkuNSAxNC4zMjYyIDguNTcxNzUgMTQuNjM3NyA3LjY4NTQyTDE0Ljc2MDYgNy4zMzU3MkMxNS40MTkxIDUuNDYxNzMgMTQuMjg4MyAzLjQzNDE5IDEyLjM0NzkgMy4wMDk2OUMxMi4xNDc5IDIuOTY1OTYgMTEuOTQ2MSAzLjA3NTEyIDExLjg3MzMgMy4yNjYzOEw5Ljk5MDUyIDguMjExNjJDOS42OTUxOSA4Ljk4NzMzIDguOTUxNDMgOS41IDguMTIxNCA5LjVIN1YxNy4zMTNDNyAxOC42NzkxIDcuOTIwOSAxOS44ODM5IDkuMjU0NTYgMjAuMTc5OEMxMi4yMjI2IDIwLjgzODMgMTQuNTM0MSAyMS4wNjQ4IDE3LjUxMDYgMjEuMDAwNUMxOC45NTM3IDIwLjk2OTMgMjAuMTI5IDE5Ljg1NTcgMjAuMzA5MiAxOC40MjM2TDIxLjAxODggMTIuNzg0OEMyMS4yMzgyIDExLjA0MTEgMTkuODc4OSA5LjUgMTguMTIxNCA5LjVaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMyIgeT0iOCIgd2lkdGg9IjQiIGhlaWdodD0iMTMiIHJ4PSIxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/like - Icon documentation
 */
export function Like({
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
      <path d="M18.1214 9.5H15.9234C14.9839 9.5 14.3262 8.57175 14.6377 7.68542L14.7606 7.33572C15.4191 5.46173 14.2883 3.43419 12.3479 3.00969C12.1479 2.96596 11.9461 3.07512 11.8733 3.26638L9.99052 8.21162C9.69519 8.98733 8.95143 9.5 8.1214 9.5H7V17.313C7 18.6791 7.9209 19.8839 9.25456 20.1798C12.2226 20.8383 14.5341 21.0648 17.5106 21.0005C18.9537 20.9693 20.129 19.8557 20.3092 18.4236L21.0188 12.7848C21.2382 11.0411 19.8789 9.5 18.1214 9.5Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><rect x="3" y="8" width="4" height="13" rx="1" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
