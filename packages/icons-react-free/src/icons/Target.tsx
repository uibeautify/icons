import { IconProps } from "../types";

/**
 * @component
 * @name Target
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjExLjk5OTkiIHI9IjEiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDEyIDExLjk5OTkpIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE3LjgyODQgNi4xNzE1N0wxNy4zMDQ1IDMuNTUyMTVDMTcuMjI2MiAzLjE2MDU2IDE2Ljc0MzEgMy4wMTQyOCAxNi40NjA3IDMuMjk2NjZMMTQuNDgyMSA1LjI3NTI1QzE0LjM2MzkgNS4zOTM0NiAxNC4zMTI2IDUuNTYyOTMgMTQuMzQ1NCA1LjcyNjg2TDE1IDlMMTguMjczMSA5LjY1NDYzQzE4LjQzNzEgOS42ODc0MSAxOC42MDY1IDkuNjM2MSAxOC43MjQ3IDkuNTE3ODlMMjAuNzAzMyA3LjUzOTNDMjAuOTg1NyA3LjI1NjkyIDIwLjgzOTQgNi43NzM3OCAyMC40NDc4IDYuNjk1NDZMMTcuODI4NCA2LjE3MTU3WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE1IDlMMTIgMTIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMC41IDMuMTI0NTFDNi4yNDM0MyAzLjgzODYzIDMgNy41NDA1OCAzIDEyLjAwMDFDMyAxNi45NzA2IDcuMDI5NDQgMjEuMDAwMSAxMiAyMS4wMDAxQzE2LjQ1OTUgMjEuMDAwMSAyMC4xNjE1IDE3Ljc1NjYgMjAuODc1NiAxMy41IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTAuNSA3LjIyOUM4LjQ3MTQ1IDcuODY2MTQgNyA5Ljc2MTI4IDcgMTIuMDAwMUM3IDE0Ljc2MTUgOS4yMzg1OCAxNy4wMDAxIDEyIDE3LjAwMDFDMTQuMjM4OSAxNy4wMDAxIDE2LjEzNCAxNS41Mjg2IDE2Ljc3MTEgMTMuNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/target - Icon documentation
 */
export function Target({
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
      <circle cx="12" cy="11.9999" r="1" transform="rotate(45 12 11.9999)" strokeWidth={strokeWidth} stroke={color}/><path d="M17.8284 6.17157L17.3045 3.55215C17.2262 3.16056 16.7431 3.01428 16.4607 3.29666L14.4821 5.27525C14.3639 5.39346 14.3126 5.56293 14.3454 5.72686L15 9L18.2731 9.65463C18.4371 9.68741 18.6065 9.6361 18.7247 9.51789L20.7033 7.5393C20.9857 7.25692 20.8394 6.77378 20.4478 6.69546L17.8284 6.17157Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M15 9L12 12" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M10.5 3.12451C6.24343 3.83863 3 7.54058 3 12.0001C3 16.9706 7.02944 21.0001 12 21.0001C16.4595 21.0001 20.1615 17.7566 20.8756 13.5" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M10.5 7.229C8.47145 7.86614 7 9.76128 7 12.0001C7 14.7615 9.23858 17.0001 12 17.0001C14.2389 17.0001 16.134 15.5286 16.7711 13.5" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
