import { IconProps } from "../types";

/**
 * @component
 * @name FingerPrint
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTkuNjU0OSAxNy45NjU4QzE3LjM3NDMgMTguNjk1NiAxMi43NTYxIDE4LjYxMTEgMTIuMTg1MyAxMi42MDQ0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTYuMDI3OCAyMUMxMy45MzUzIDIwLjY5NzcgOS45OTQzMiAxOC45NDIzIDkuMzY2NTYgMTMuNzQ1OUM4Ljc3MzY3IDguNjU0MDMgMTQuNDc2NiA3Ljc5OTA0IDE1LjIyMzQgMTIuNTc4NkMxNS44NzA2IDE2LjcyMDcgMjEuMzYxNCAxNS43MzU5IDIxLjA5MTYgMTEuODk2MUMyMC43MzgyIDYuODY1MDEgMTcuMDQzIDMuMDM1MDYgMTIuMjY1IDMuMDAwMTlDNy40ODcwNiAyLjk2NTMxIDEuMjQzMzIgNy44NTI1MSAzLjQ2MTUyIDE2LjYzMjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik05LjEyMjU4IDIwLjYzMDNDNy4xMTIzMiAxOC45MjA0IDQuODU1MjQgMTMuNDUxNCA3LjIyNzg2IDkuMTQ2NDZDOS45MDY5NiA0LjI4NTQ0IDE3LjU3OTUgNS40OTU2NyAxOC4wODc4IDEyLjE1MDMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/finger-print - Icon documentation
 */
export function FingerPrint({
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
      <path d="M19.6549 17.9658C17.3743 18.6956 12.7561 18.6111 12.1853 12.6044" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M16.0278 21C13.9353 20.6977 9.99432 18.9423 9.36656 13.7459C8.77367 8.65403 14.4766 7.79904 15.2234 12.5786C15.8706 16.7207 21.3614 15.7359 21.0916 11.8961C20.7382 6.86501 17.043 3.03506 12.265 3.00019C7.48706 2.96531 1.24332 7.85251 3.46152 16.6329" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M9.12258 20.6303C7.11232 18.9204 4.85524 13.4514 7.22786 9.14646C9.90696 4.28544 17.5795 5.49567 18.0878 12.1503" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
