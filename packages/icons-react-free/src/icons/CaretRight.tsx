import { IconProps } from "../types";

/**
 * @component
 * @name CaretRight
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTQuODY4NiAxMC44Njg2TDEyLjczMTQgOC43MzEzN0wxMi43MzE0IDguNzMxMzdDMTEuODc0NiA3Ljg3NDYyIDExLjQ0NjIgNy40NDYyNCAxMS4wNzg1IDcuNDE3M0MxMC43NTkzIDcuMzkyMTggMTAuNDQ3NSA3LjUyMTM2IDEwLjIzOTYgNy43NjQ3N0MxMCA4LjA0NTI5IDEwIDguNjUxMTEgMTAgOS44NjI3NFYxNC4xMzczQzEwIDE1LjM0ODkgMTAgMTUuOTU0NyAxMC4yMzk2IDE2LjIzNTJDMTAuNDQ3NSAxNi40Nzg2IDEwLjc1OTMgMTYuNjA3OCAxMS4wNzg1IDE2LjU4MjdDMTEuNDQ2MiAxNi41NTM4IDExLjg3NDYgMTYuMTI1NCAxMi43MzE0IDE1LjI2ODZMMTQuODY4NiAxMy4xMzE0QzE1LjI2NDYgMTIuNzM1NCAxNS40NjI3IDEyLjUzNzMgMTUuNTM2OCAxMi4zMDlDMTUuNjAyMSAxMi4xMDgyIDE1LjYwMjEgMTEuODkxOCAxNS41MzY4IDExLjY5MUMxNS40NjI3IDExLjQ2MjcgMTUuMjY0NiAxMS4yNjQ2IDE0Ljg2ODYgMTAuODY4NloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/caret-right - Icon documentation
 */
export function CaretRight({
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
      <path d="M14.8686 10.8686L12.7314 8.73137L12.7314 8.73137C11.8746 7.87462 11.4462 7.44624 11.0785 7.4173C10.7593 7.39218 10.4475 7.52136 10.2396 7.76477C10 8.04529 10 8.65111 10 9.86274V14.1373C10 15.3489 10 15.9547 10.2396 16.2352C10.4475 16.4786 10.7593 16.6078 11.0785 16.5827C11.4462 16.5538 11.8746 16.1254 12.7314 15.2686L14.8686 13.1314C15.2646 12.7354 15.4627 12.5373 15.5368 12.309C15.6021 12.1082 15.6021 11.8918 15.5368 11.691C15.4627 11.4627 15.2646 11.2646 14.8686 10.8686Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
