import { IconProps } from "../types";

/**
 * @component
 * @name BinocularSingle
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTMuNjE2OCAzLjQzOTY5QzEzLjk5NTkgMi45OTc0MSAxNC42NzEzIDIuOTcxNDcgMTUuMDgzMiAzLjM4MzM3TDIwLjYyNzEgOC45MjcyNkMyMS4wMzkgOS4zMzkxNiAyMS4wMTMgMTAuMDE0NSAyMC41NzA3IDEwLjM5MzZMMTcuMTQ0IDEzLjMzMDhDMTYuNzQ3MyAxMy42NzA5IDE2LjE1NTYgMTMuNjQ4MiAxNS43ODYxIDEzLjI3ODdMMTAuNzMxNyA4LjIyNDMzQzEwLjM2MjMgNy44NTQ4NCAxMC4zMzk1IDcuMjYzMTcgMTAuNjc5NiA2Ljg2NjQzTDEzLjYxNjggMy40Mzk2OVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTAuMDc4NiA5LjA5MDY1QzEwLjQ1OTQgOC42NTEyIDExLjEzMzUgOC42MjgxNiAxMS41NDM1IDkuMDQwNTdMMTQuOTY0IDEyLjQ4MTVDMTUuMzcyNCAxMi44OTIzIDE1LjM0NzQgMTMuNTYzMSAxNC45MDk2IDEzLjk0MjNMMTEuMTM0MSAxNy4yMTNDMTAuNzM3NiAxNy41NTY1IDEwLjE0MzEgMTcuNTM1MiA5Ljc3MjIzIDE3LjE2NDNMNi44NDYyNSAxNC4yMzgzQzYuNDc1MjcgMTMuODY3NCA2LjQ1NDA2IDEzLjI3MjggNi43OTc2NyAxMi44NzYzTDEwLjA3ODYgOS4wOTA2NVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNNi44OTQ5NSAxNC4yODdMOS43MjMzOCAxNy4xMTU1TDUuNDc2NzMgMjAuNzU1NUM1LjA3OTk5IDIxLjA5NTUgNC40ODgzMiAyMS4wNzI4IDQuMTE4ODMgMjAuNzAzM0wzLjMwNzExIDE5Ljg5MTZDMi45Mzc2MiAxOS41MjIxIDIuOTE0OSAxOC45MzA0IDMuMjU0OTYgMTguNTMzN0w2Ljg5NDk1IDE0LjI4N1oiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/binocular-single - Icon documentation
 */
export function BinocularSingle({
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
      <path d="M13.6168 3.43969C13.9959 2.99741 14.6713 2.97147 15.0832 3.38337L20.6271 8.92726C21.039 9.33916 21.013 10.0145 20.5707 10.3936L17.144 13.3308C16.7473 13.6709 16.1556 13.6482 15.7861 13.2787L10.7317 8.22433C10.3623 7.85484 10.3395 7.26317 10.6796 6.86643L13.6168 3.43969Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M10.0786 9.09065C10.4594 8.6512 11.1335 8.62816 11.5435 9.04057L14.964 12.4815C15.3724 12.8923 15.3474 13.5631 14.9096 13.9423L11.1341 17.213C10.7376 17.5565 10.1431 17.5352 9.77223 17.1643L6.84625 14.2383C6.47527 13.8674 6.45406 13.2728 6.79767 12.8763L10.0786 9.09065Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M6.89495 14.287L9.72338 17.1155L5.47673 20.7555C5.07999 21.0955 4.48832 21.0728 4.11883 20.7033L3.30711 19.8916C2.93762 19.5221 2.9149 18.9304 3.25496 18.5337L6.89495 14.287Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
