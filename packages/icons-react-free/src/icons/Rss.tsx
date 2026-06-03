import { IconProps } from "../types";

/**
 * @component
 * @name Rss
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNiAxOUM2IDE5LjU1MjMgNS41NTIyOCAyMCA1IDIwQzQuNDQ3NzIgMjAgNCAxOS41NTIzIDQgMTlDNCAxOC40NDc3IDQuNDQ3NzIgMTggNSAxOEM1LjU1MjI4IDE4IDYgMTguNDQ3NyA2IDE5WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik00IDEzLjA4M0M0LjMyNTIxIDEzLjAyODQgNC42NTkyOSAxMyA1IDEzQzguMzEzNzEgMTMgMTEgMTUuNjg2MyAxMSAxOUMxMSAxOS4zNDA3IDEwLjk3MTYgMTkuNjc0OCAxMC45MTcgMjAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik00IDguMDQ0ODRDNC4zMjkzNiA4LjAxNTE2IDQuNjYyOTEgOCA1IDhDMTEuMDc1MSA4IDE2IDEyLjkyNDkgMTYgMTlDMTYgMTkuMzM3MSAxNS45ODQ4IDE5LjY3MDYgMTUuOTU1MiAyMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTQgMy4wMzA3NEM0LjMzMDcyIDMuMDEwMzUgNC42NjQxNSAzIDUgM0MxMy44MzY2IDMgMjEgMTAuMTYzNCAyMSAxOUMyMSAxOS4zMzU5IDIwLjk4OTcgMTkuNjY5MyAyMC45NjkzIDIwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/rss - Icon documentation
 */
export function Rss({
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
      <path d="M6 19C6 19.5523 5.55228 20 5 20C4.44772 20 4 19.5523 4 19C4 18.4477 4.44772 18 5 18C5.55228 18 6 18.4477 6 19Z" strokeWidth={strokeWidth} stroke={color}/><path d="M4 13.083C4.32521 13.0284 4.65929 13 5 13C8.31371 13 11 15.6863 11 19C11 19.3407 10.9716 19.6748 10.917 20" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M4 8.04484C4.32936 8.01516 4.66291 8 5 8C11.0751 8 16 12.9249 16 19C16 19.3371 15.9848 19.6706 15.9552 20" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M4 3.03074C4.33072 3.01035 4.66415 3 5 3C13.8366 3 21 10.1634 21 19C21 19.3359 20.9897 19.6693 20.9693 20" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
