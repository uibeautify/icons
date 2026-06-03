import { IconProps } from "../types";

/**
 * @component
 * @name CurrencySterlingPound
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTYgMy44MDI2OUMxNS4xMTc1IDMuMjkyMTggMTQuMDkyOSAzIDEzIDNDMTAuMTc5MiAzIDcuODEyOTkgNC45NDY2MSA3LjE3MTUxIDcuNTY5NzhDNi45NDQxMiA4LjQ5OTY1IDcuMTM5NzQgOS40NjU4MSA3LjQxNDgxIDEwLjM4MjdMOC40NTI1OCAxMy44NDE5QzkuMzI4NiAxNi43NjIgNy44MzA1NyAxOS44Njc4IDUgMjFIMTciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik02IDEzTDE0IDEzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/currency-sterling-pound - Icon documentation
 */
export function CurrencySterlingPound({
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
      <path d="M16 3.80269C15.1175 3.29218 14.0929 3 13 3C10.1792 3 7.81299 4.94661 7.17151 7.56978C6.94412 8.49965 7.13974 9.46581 7.41481 10.3827L8.45258 13.8419C9.3286 16.762 7.83057 19.8678 5 21H17" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M6 13L14 13" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
