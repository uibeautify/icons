import { IconProps } from "../types";

/**
 * @component
 * @name FlipHorizontal
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTIgM0wxMiA0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTIgOFYxMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEyIDE0VjE2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTIgMjBWMjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNy4xMzE0IDEwLjg2ODZMMTguMjY4NiA5LjczMTM3QzE5LjEyNTQgOC44NzQ2MiAxOS41NTM4IDguNDQ2MjQgMTkuOTIxNSA4LjQxNzNDMjAuMjQwNyA4LjM5MjE4IDIwLjU1MjUgOC41MjEzNiAyMC43NjA0IDguNzY0NzdDMjEgOS4wNDUyOSAyMSA5LjY1MTExIDIxIDEwLjg2MjdWMTMuMTM3M0MyMSAxNC4zNDg5IDIxIDE0Ljk1NDcgMjAuNzYwNCAxNS4yMzUyQzIwLjU1MjUgMTUuNDc4NiAyMC4yNDA3IDE1LjYwNzggMTkuOTIxNSAxNS41ODI3QzE5LjU1MzggMTUuNTUzOCAxOS4xMjU0IDE1LjEyNTQgMTguMjY4NiAxNC4yNjg2TDE3LjEzMTQgMTMuMTMxNEMxNi43MzU0IDEyLjczNTQgMTYuNTM3MyAxMi41MzczIDE2LjQ2MzIgMTIuMzA5QzE2LjM5NzkgMTIuMTA4MiAxNi4zOTc5IDExLjg5MTggMTYuNDYzMiAxMS42OTFDMTYuNTM3MyAxMS40NjI3IDE2LjczNTQgMTEuMjY0NiAxNy4xMzE0IDEwLjg2ODZaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNi44Njg2MyAxMC44Njg2TDUuNzMxMzcgOS43MzEzN0M0Ljg3NDYyIDguODc0NjIgNC40NDYyNCA4LjQ0NjI0IDQuMDc4NDYgOC40MTczQzMuNzU5MzQgOC4zOTIxOCAzLjQ0NzQ5IDguNTIxMzYgMy4yMzk1OSA4Ljc2NDc3QzMgOS4wNDUyOSAzIDkuNjUxMTEgMyAxMC44NjI3VjEzLjEzNzNDMyAxNC4zNDg5IDMgMTQuOTU0NyAzLjIzOTU5IDE1LjIzNTJDMy40NDc0OSAxNS40Nzg2IDMuNzU5MzQgMTUuNjA3OCA0LjA3ODQ2IDE1LjU4MjdDNC40NDYyNCAxNS41NTM4IDQuODc0NjIgMTUuMTI1NCA1LjczMTM3IDE0LjI2ODZMNi44Njg2MyAxMy4xMzE0QzcuMjY0NjUgMTIuNzM1NCA3LjQ2MjY1IDEyLjUzNzMgNy41MzY4NCAxMi4zMDlDNy42MDIxIDEyLjEwODIgNy42MDIxIDExLjg5MTggNy41MzY4NCAxMS42OTFDNy40NjI2NSAxMS40NjI3IDcuMjY0NjUgMTEuMjY0NiA2Ljg2ODYzIDEwLjg2ODZaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/flip-horizontal - Icon documentation
 */
export function FlipHorizontal({
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
      <path d="M12 3L12 4" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 8V10" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 14V16" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M12 20V21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M17.1314 10.8686L18.2686 9.73137C19.1254 8.87462 19.5538 8.44624 19.9215 8.4173C20.2407 8.39218 20.5525 8.52136 20.7604 8.76477C21 9.04529 21 9.65111 21 10.8627V13.1373C21 14.3489 21 14.9547 20.7604 15.2352C20.5525 15.4786 20.2407 15.6078 19.9215 15.5827C19.5538 15.5538 19.1254 15.1254 18.2686 14.2686L17.1314 13.1314C16.7354 12.7354 16.5373 12.5373 16.4632 12.309C16.3979 12.1082 16.3979 11.8918 16.4632 11.691C16.5373 11.4627 16.7354 11.2646 17.1314 10.8686Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M6.86863 10.8686L5.73137 9.73137C4.87462 8.87462 4.44624 8.44624 4.07846 8.4173C3.75934 8.39218 3.44749 8.52136 3.23959 8.76477C3 9.04529 3 9.65111 3 10.8627V13.1373C3 14.3489 3 14.9547 3.23959 15.2352C3.44749 15.4786 3.75934 15.6078 4.07846 15.5827C4.44624 15.5538 4.87462 15.1254 5.73137 14.2686L6.86863 13.1314C7.26465 12.7354 7.46265 12.5373 7.53684 12.309C7.6021 12.1082 7.6021 11.8918 7.53684 11.691C7.46265 11.4627 7.26465 11.2646 6.86863 10.8686Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
