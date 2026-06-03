import { IconProps } from "../types";

/**
 * @component
 * @name QuoteBlock
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTcgM0wyMSAzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTcgOUwyMSA5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMyAxNUwyMSAxNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTMgMjFMMjEgMjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik01LjY2NjY3IDdINC41VjRMMy4wMzUxOSA2LjkyOTY1QzMuMDEyMDUgNi45NzU5MyAzIDcuMDI2OTcgMyA3LjA3ODcyVjguNjY2NzdDMyA4Ljg1MDg3IDMuMTQ5MjQgOS4wMDAxMSAzLjMzMzM0IDkuMDAwMTFMNS42NjY2NyA5LjAwMDA4QzUuODUwNzYgOS4wMDAwOCA2IDguODUwODQgNiA4LjY2Njc1VjcuMzMzMzNDNiA3LjE0OTI0IDUuODUwNzYgNyA1LjY2NjY3IDdaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTIuNjY2NyA3SDExLjVWNEwxMC4wMzUyIDYuOTI5NjVDMTAuMDEyIDYuOTc1OTMgMTAgNy4wMjY5NyAxMCA3LjA3ODcyVjguNjY2NzdDMTAgOC44NTA4NyAxMC4xNDkyIDkuMDAwMTEgMTAuMzMzMyA5LjAwMDExTDEyLjY2NjcgOS4wMDAwOEMxMi44NTA4IDkuMDAwMDggMTMgOC44NTA4NCAxMyA4LjY2Njc1VjcuMzMzMzNDMTMgNy4xNDkyNCAxMi44NTA4IDcgMTIuNjY2NyA3WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/quote-block - Icon documentation
 */
export function QuoteBlock({
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
      <path d="M17 3L21 3" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M17 9L21 9" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 15L21 15" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 21L21 21" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M5.66667 7H4.5V4L3.03519 6.92965C3.01205 6.97593 3 7.02697 3 7.07872V8.66677C3 8.85087 3.14924 9.00011 3.33334 9.00011L5.66667 9.00008C5.85076 9.00008 6 8.85084 6 8.66675V7.33333C6 7.14924 5.85076 7 5.66667 7Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M12.6667 7H11.5V4L10.0352 6.92965C10.012 6.97593 10 7.02697 10 7.07872V8.66677C10 8.85087 10.1492 9.00011 10.3333 9.00011L12.6667 9.00008C12.8508 9.00008 13 8.85084 13 8.66675V7.33333C13 7.14924 12.8508 7 12.6667 7Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
