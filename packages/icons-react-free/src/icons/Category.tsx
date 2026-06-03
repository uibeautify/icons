import { IconProps } from "../types";

/**
 * @component
 * @name Category
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMy4yNDI5OCAxNS40NDg1QzIuOTg2NTIgMTMuNTY3OCAyLjg1ODI5IDEyLjYyNzUgMy4xNDY4NCAxMS44OTc0QzMuNDAwMTYgMTEuMjU2NCAzLjg2NjQ3IDEwLjcyMjIgNC40NjczNiAxMC4zODQ1QzUuMTUxNzkgMTAgNi4xMDA4NSAxMCA3Ljk5ODk3IDEwSDE2LjAwMUMxNy44OTkyIDEwIDE4Ljg0ODIgMTAgMTkuNTMyNiAxMC4zODQ1QzIwLjEzMzUgMTAuNzIyMiAyMC41OTk4IDExLjI1NjQgMjAuODUzMiAxMS44OTc0QzIxLjE0MTcgMTIuNjI3NSAyMS4wMTM1IDEzLjU2NzggMjAuNzU3IDE1LjQ0ODVMMjAuNTY2MSAxNi44NDg1QzIwLjM2NTUgMTguMzE5OCAyMC4yNjUyIDE5LjA1NTQgMTkuOTEzMyAxOS42MDkxQzE5LjYwMzMgMjAuMDk3IDE5LjE1ODggMjAuNDg0OSAxOC42MzM1IDIwLjcyNjJDMTguMDM3NCAyMSAxNy4yOTUgMjEgMTUuODEwMSAyMUg4LjE4OTg4QzYuNzA1MDUgMjEgNS45NjI2NCAyMSA1LjM2NjQ4IDIwLjcyNjJDNC44NDExNiAyMC40ODQ5IDQuMzk2NzQgMjAuMDk3IDQuMDg2NjkgMTkuNjA5MUMzLjczNDgyIDE5LjA1NTQgMy42MzQ1MSAxOC4zMTk4IDMuNDMzODkgMTYuODQ4NUwzLjI0Mjk4IDE1LjQ0ODVaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTYuMDAwMDEgNi41SDE4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOSAzTDE1IDMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/category - Icon documentation
 */
export function Category({
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
      <path d="M3.24298 15.4485C2.98652 13.5678 2.85829 12.6275 3.14684 11.8974C3.40016 11.2564 3.86647 10.7222 4.46736 10.3845C5.15179 10 6.10085 10 7.99897 10H16.001C17.8992 10 18.8482 10 19.5326 10.3845C20.1335 10.7222 20.5998 11.2564 20.8532 11.8974C21.1417 12.6275 21.0135 13.5678 20.757 15.4485L20.5661 16.8485C20.3655 18.3198 20.2652 19.0554 19.9133 19.6091C19.6033 20.097 19.1588 20.4849 18.6335 20.7262C18.0374 21 17.295 21 15.8101 21H8.18988C6.70505 21 5.96264 21 5.36648 20.7262C4.84116 20.4849 4.39674 20.097 4.08669 19.6091C3.73482 19.0554 3.63451 18.3198 3.43389 16.8485L3.24298 15.4485Z" strokeWidth={strokeWidth} stroke={color}/><path d="M6.00001 6.5H18" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M9 3L15 3" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
