import { IconProps } from "../types";

/**
 * @component
 * @name CurrencyEuro
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTggMy45MzU1MkMxNi43OTUgMy4zMzY3MSAxNS40MzY4IDMgMTQgM0M5LjAyOTQ0IDMgNSA3LjAyOTQ0IDUgMTJDNSAxNi45NzA2IDkuMDI5NDQgMjEgMTQgMjFDMTUuNDM2OCAyMSAxNi43OTUgMjAuNjYzMyAxOCAyMC4wNjQ1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMyAxMEgxMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTMgMTRIMTIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/currency-euro - Icon documentation
 */
export function CurrencyEuro({
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
      <path d="M18 3.93552C16.795 3.33671 15.4368 3 14 3C9.02944 3 5 7.02944 5 12C5 16.9706 9.02944 21 14 21C15.4368 21 16.795 20.6633 18 20.0645" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 10H12" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M3 14H12" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
