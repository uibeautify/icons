import { IconProps } from "../types";

/**
 * @component
 * @name SkipForward
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTIuMzY4NiAxMC44Njg2TDkuNzMxMzcgOC4yMzEzN0w5LjczMTM3IDguMjMxMzdDOC44NzQ2MiA3LjM3NDYyIDguNDQ2MjQgNi45NDYyNCA4LjA3ODQ2IDYuOTE3M0M3Ljc1OTM0IDYuODkyMTggNy40NDc0OSA3LjAyMTM2IDcuMjM5NTkgNy4yNjQ3N0M3IDcuNTQ1MjkgNyA4LjE1MTExIDcgOS4zNjI3NEw3IDE0LjYzNzNDNyAxNS44NDg5IDcgMTYuNDU0NyA3LjIzOTU5IDE2LjczNTJDNy40NDc0OCAxNi45Nzg2IDcuNzU5MzQgMTcuMTA3OCA4LjA3ODQ2IDE3LjA4MjdDOC40NDYyNCAxNy4wNTM4IDguODc0NjIgMTYuNjI1NCA5LjczMTM3IDE1Ljc2ODZMMTIuMzY4NiAxMy4xMzE0QzEyLjc2NDYgMTIuNzM1NCAxMi45NjI3IDEyLjUzNzMgMTMuMDM2OCAxMi4zMDlDMTMuMTAyMSAxMi4xMDgyIDEzLjEwMjEgMTEuODkxOCAxMy4wMzY4IDExLjY5MUMxMi45NjI3IDExLjQ2MjcgMTIuNzY0NiAxMS4yNjQ2IDEyLjM2ODYgMTAuODY4NloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNyA3TDE3IDE3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/skip-forward - Icon documentation
 */
export function SkipForward({
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
      <path d="M12.3686 10.8686L9.73137 8.23137L9.73137 8.23137C8.87462 7.37462 8.44624 6.94624 8.07846 6.9173C7.75934 6.89218 7.44749 7.02136 7.23959 7.26477C7 7.54529 7 8.15111 7 9.36274L7 14.6373C7 15.8489 7 16.4547 7.23959 16.7352C7.44748 16.9786 7.75934 17.1078 8.07846 17.0827C8.44624 17.0538 8.87462 16.6254 9.73137 15.7686L12.3686 13.1314C12.7646 12.7354 12.9627 12.5373 13.0368 12.309C13.1021 12.1082 13.1021 11.8918 13.0368 11.691C12.9627 11.4627 12.7646 11.2646 12.3686 10.8686Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M17 7L17 17" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
