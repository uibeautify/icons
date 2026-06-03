import { IconProps } from "../types";

/**
 * @component
 * @name Confetti
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNy41MjQyNSA3Ljk5ODQ3QzcuNTc5NDUgOS4zMzAwNyA4Ljc2OTQ0IDExLjQxNyAxMC42ODAyIDEzLjMyNzhDMTIuNTkxIDE1LjIzODYgMTQuNjc3OSAxNi40Mjg1IDE2LjAwOTUgMTYuNDgzOEMxNi40NDY5IDE2LjUwMTkgMTYuODAyOCAxNi4zOTc2IDE3LjA0NDIgMTYuMTU2MkMxOC4wMjA1IDE1LjE3OTkgMTYuNzU0MiAxMi4zMzA2IDE0LjIxNTggOS43OTIyNEMxMS42Nzc0IDcuMjUzODMgOC44MjgxMSA1Ljk4NzUgNy44NTE4IDYuOTYzODFDNy42MTA0MSA3LjIwNTIgNy41MDYxMSA3LjU2MTA5IDcuNTI0MjUgNy45OTg0N1pNMTYuMDA5NSAxNi40ODM4TDYuMDQzNDEgMjAuODU2OEM1LjIxNTE0IDIxLjIyMDIgNC4yNDg3NCAyMS4wMzg0IDMuNjA5MTYgMjAuMzk4OEMyLjk2OTU4IDE5Ljc1OTMgMi43ODc3OCAxOC43OTI5IDMuMTUxMjEgMTcuOTY0Nkw3LjUyNDI1IDcuOTk4NDciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTkuMTgwNyAxMC40NDA4QzIwLjAzMiAxMC4xOTQ0IDIxLjIzOTcgMTAuMzE0NCAyMi4zNzc4IDEwLjc1MDciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMy4zNzUzIDQuNTU5NDVDMTMuODczNSAzLjgyNjU1IDE0LjEzNCAyLjY0MTE4IDE0LjA3MjIgMS40MjM4OSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE2LjY0NTQgNy4wMjQyOUMxNy40MDQ2IDUuMTczOCAyMC40NzAzIDQuODU2NyAyMS4xNTA4IDIuNjYzOTciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik04LjI0NDIxIDIuNDQxODdMOC42ODEyNCAzLjM0MTMyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMjAuOTQ0NSAxNS43NjMxTDIxLjkxMTUgMTYuMDE3OSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTEwLjAwMTkgMTkuMTIyNkM5LjA4MTg1IDE4LjU4MDEgOC4wOTE2OSAxNy44MTAyIDcuMTQ0NzggMTYuODYzM0M2LjE5ODcgMTUuOTE3MiA1LjQyOTMzIDE0LjkyNzkgNC44ODY5MSAxNC4wMDg2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/confetti - Icon documentation
 */
export function Confetti({
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
      <path d="M7.52425 7.99847C7.57945 9.33007 8.76944 11.417 10.6802 13.3278C12.591 15.2386 14.6779 16.4285 16.0095 16.4838C16.4469 16.5019 16.8028 16.3976 17.0442 16.1562C18.0205 15.1799 16.7542 12.3306 14.2158 9.79224C11.6774 7.25383 8.82811 5.9875 7.8518 6.96381C7.61041 7.2052 7.50611 7.56109 7.52425 7.99847ZM16.0095 16.4838L6.04341 20.8568C5.21514 21.2202 4.24874 21.0384 3.60916 20.3988C2.96958 19.7593 2.78778 18.7929 3.15121 17.9646L7.52425 7.99847" strokeWidth={strokeWidth} stroke={color}/><path d="M19.1807 10.4408C20.032 10.1944 21.2397 10.3144 22.3778 10.7507" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M13.3753 4.55945C13.8735 3.82655 14.134 2.64118 14.0722 1.42389" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M16.6454 7.02429C17.4046 5.1738 20.4703 4.8567 21.1508 2.66397" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M8.24421 2.44187L8.68124 3.34132" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M20.9445 15.7631L21.9115 16.0179" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M10.0019 19.1226C9.08185 18.5801 8.09169 17.8102 7.14478 16.8633C6.1987 15.9172 5.42933 14.9279 4.88691 14.0086" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
