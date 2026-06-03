import { IconProps } from "../types";

/**
 * @component
 * @name BookmarkCheckmark
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNSA3LjhDNSA2LjExOTg0IDUgNS4yNzk3NiA1LjMyNjk4IDQuNjM4MDNDNS42MTQ2IDQuMDczNTQgNi4wNzM1NCAzLjYxNDYgNi42MzgwMyAzLjMyNjk4QzcuMjc5NzYgMyA4LjExOTg0IDMgOS44IDNIMTQuMkMxNS44ODAyIDMgMTYuNzIwMiAzIDE3LjM2MiAzLjMyNjk4QzE3LjkyNjUgMy42MTQ2IDE4LjM4NTQgNC4wNzM1NCAxOC42NzMgNC42MzgwM0MxOSA1LjI3OTc2IDE5IDYuMTE5ODQgMTkgNy44VjE4LjkwMjhDMTkgMTkuODU0OCAxOSAyMC4zMzA4IDE4LjgwMSAyMC41OTdDMTguNjI3NiAyMC44MjkxIDE4LjM2MiAyMC45NzQ1IDE4LjA3MzEgMjAuOTk1N0MxNy43NDE2IDIxLjAyIDE3LjM0MDUgMjAuNzYzNiAxNi41Mzg0IDIwLjI1MUwxMi44NjE2IDE3LjkwMTJDMTIuNTQ5NCAxNy43MDE3IDEyLjM5MzQgMTcuNjAxOSAxMi4yMjU1IDE3LjU2MzFDMTIuMDc3MSAxNy41Mjg3IDExLjkyMjkgMTcuNTI4NyAxMS43NzQ1IDE3LjU2MzFDMTEuNjA2NiAxNy42MDE5IDExLjQ1MDYgMTcuNzAxNyAxMS4xMzg0IDE3LjkwMTJMNy40NjE2MiAyMC4yNTFDNi42NTk0OSAyMC43NjM2IDYuMjU4NDIgMjEuMDIgNS45MjY5IDIwLjk5NTdDNS42Mzc5OCAyMC45NzQ1IDUuMzcyNDQgMjAuODI5MSA1LjE5OSAyMC41OTdDNSAyMC4zMzA4IDUgMTkuODU0OCA1IDE4LjkwMjhWNy44WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik05IDEwTDExIDEyTDE1IDgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/bookmark-checkmark - Icon documentation
 */
export function BookmarkCheckmark({
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
      <path d="M5 7.8C5 6.11984 5 5.27976 5.32698 4.63803C5.6146 4.07354 6.07354 3.6146 6.63803 3.32698C7.27976 3 8.11984 3 9.8 3H14.2C15.8802 3 16.7202 3 17.362 3.32698C17.9265 3.6146 18.3854 4.07354 18.673 4.63803C19 5.27976 19 6.11984 19 7.8V18.9028C19 19.8548 19 20.3308 18.801 20.597C18.6276 20.8291 18.362 20.9745 18.0731 20.9957C17.7416 21.02 17.3405 20.7636 16.5384 20.251L12.8616 17.9012C12.5494 17.7017 12.3934 17.6019 12.2255 17.5631C12.0771 17.5287 11.9229 17.5287 11.7745 17.5631C11.6066 17.6019 11.4506 17.7017 11.1384 17.9012L7.46162 20.251C6.65949 20.7636 6.25842 21.02 5.9269 20.9957C5.63798 20.9745 5.37244 20.8291 5.199 20.597C5 20.3308 5 19.8548 5 18.9028V7.8Z" strokeWidth={strokeWidth} stroke={color}/><path d="M9 10L11 12L15 8" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
