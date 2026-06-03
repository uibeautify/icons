import { IconProps } from "../types";

/**
 * @component
 * @name ShoppingBasket
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNiAxMEgzTDUuMzk3MSAxOC43ODk0QzUuNzUzMDYgMjAuMDk0NSA2LjkzODUzIDIxIDguMjkxMzkgMjFIMTUuNzA4NkMxNy4wNjE1IDIxIDE4LjI0NjkgMjAuMDk0NSAxOC42MDI5IDE4Ljc4OTRMMjEgMTBIMThNNiAxMEgxOE02IDEwTDcuMzc4MzMgNS4xNzU4NEM3Ljc0NjMgMy44ODc5MyA4LjkyMzQ2IDMgMTAuMjYyOSAzSDEySDEzLjczNzFDMTUuMDc2NSAzIDE2LjI1MzcgMy44ODc5MyAxNi42MjE3IDUuMTc1ODRMMTggMTAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMSA0SDEzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTMgMTVDMTMgMTUuNTUyMyAxMi41NTIzIDE2IDEyIDE2QzExLjQ0NzcgMTYgMTEgMTUuNTUyMyAxMSAxNUMxMSAxNC40NDc3IDExLjQ0NzcgMTQgMTIgMTRDMTIuNTUyMyAxNCAxMyAxNC40NDc3IDEzIDE1WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/shopping-basket - Icon documentation
 */
export function ShoppingBasket({
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
      <path d="M6 10H3L5.3971 18.7894C5.75306 20.0945 6.93853 21 8.29139 21H15.7086C17.0615 21 18.2469 20.0945 18.6029 18.7894L21 10H18M6 10H18M6 10L7.37833 5.17584C7.7463 3.88793 8.92346 3 10.2629 3H12H13.7371C15.0765 3 16.2537 3.88793 16.6217 5.17584L18 10" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M11 4H13" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M13 15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15C11 14.4477 11.4477 14 12 14C12.5523 14 13 14.4477 13 15Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
