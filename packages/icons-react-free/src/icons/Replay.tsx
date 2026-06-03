import { IconProps } from "../types";

/**
 * @component
 * @name Replay
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTAuNSAxNC4zMzU1VjkuNjY0NUMxMC41IDguOTkzNjkgMTEuMjc1OSA4LjYyMDc2IDExLjc5OTggOS4wMzk4MUwxNC43MTkxIDExLjM3NTNDMTUuMTE5NSAxMS42OTU2IDE1LjExOTUgMTIuMzA0NCAxNC43MTkxIDEyLjYyNDdMMTEuNzk5OCAxNC45NjAyQzExLjI3NTkgMTUuMzc5MiAxMC41IDE1LjAwNjMgMTAuNSAxNC4zMzU1WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0zLjYzNzQ5IDguNTMxMjlDNC4xNTg4IDcuMjg0MjcgNC45NTI3MSA2LjE3OTU3IDUuOTQ0NzMgNS4yOTE2OEM3LjUzNyAzLjg2NjU2IDkuNjM5NjcgMyAxMS45NDQ3IDNDMTYuOTE1MyAzIDIwLjk0NDcgNy4wMjk0NCAyMC45NDQ3IDEyQzIwLjk0NDcgMTYuOTcwNiAxNi45MTUzIDIxIDExLjk0NDcgMjFDNy4zMTMyMSAyMSAzLjQ5ODggMTcuNTAxNSAyLjk5OTk5IDEzLjAwM00zLjIzNDA2IDYuMTAyNzVMMy42Mzc0OSA4LjUzMTI5TDYuMDg5NzIgNy45Nzk2NiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/replay - Icon documentation
 */
export function Replay({
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
      <path d="M10.5 14.3355V9.6645C10.5 8.99369 11.2759 8.62076 11.7998 9.03981L14.7191 11.3753C15.1195 11.6956 15.1195 12.3044 14.7191 12.6247L11.7998 14.9602C11.2759 15.3792 10.5 15.0063 10.5 14.3355Z" strokeWidth={strokeWidth} stroke={color}/><path d="M3.63749 8.53129C4.1588 7.28427 4.95271 6.17957 5.94473 5.29168C7.537 3.86656 9.63967 3 11.9447 3C16.9153 3 20.9447 7.02944 20.9447 12C20.9447 16.9706 16.9153 21 11.9447 21C7.31321 21 3.4988 17.5015 2.99999 13.003M3.23406 6.10275L3.63749 8.53129L6.08972 7.97966" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
