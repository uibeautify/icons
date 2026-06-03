import { IconProps } from "../types";

/**
 * @component
 * @name Crown
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMyA2LjExMzQyQzMgNS42ODIgMy41MDk3MyA1LjQ1MzA5IDMuODMyMTggNS43Mzk3Mkw3LjE2NzgyIDguNzA0NzNDNy4zNTcyNiA4Ljg3MzEyIDcuNjQyNzQgOC44NzMxMiA3LjgzMjE4IDguNzA0NzNMMTEuNjY3OCA1LjI5NTI3QzExLjg1NzMgNS4xMjY4OCAxMi4xNDI3IDUuMTI2ODggMTIuMzMyMiA1LjI5NTI3TDE2LjE2NzggOC43MDQ3M0MxNi4zNTczIDguODczMTIgMTYuNjQyNyA4Ljg3MzEyIDE2LjgzMjIgOC43MDQ3M0wyMC4xNjc4IDUuNzM5NzJDMjAuNDkwMyA1LjQ1MzA5IDIxIDUuNjgyIDIxIDYuMTEzNDJWMTZDMjEgMTcuMTA0NiAyMC4xMDQ2IDE4IDE5IDE4SDVDMy44OTU0MyAxOCAzIDE3LjEwNDYgMyAxNlY2LjExMzQyWiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0zIDE0SDIxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/crown - Icon documentation
 */
export function Crown({
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
      <path d="M3 6.11342C3 5.682 3.50973 5.45309 3.83218 5.73972L7.16782 8.70473C7.35726 8.87312 7.64274 8.87312 7.83218 8.70473L11.6678 5.29527C11.8573 5.12688 12.1427 5.12688 12.3322 5.29527L16.1678 8.70473C16.3573 8.87312 16.6427 8.87312 16.8322 8.70473L20.1678 5.73972C20.4903 5.45309 21 5.682 21 6.11342V16C21 17.1046 20.1046 18 19 18H5C3.89543 18 3 17.1046 3 16V6.11342Z" strokeWidth={strokeWidth} stroke={color}/><path d="M3 14H21" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
