import { IconProps } from "../types";

/**
 * @component
 * @name Dislike
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNS44Nzg1NiAxNC41MTFIOC4wNzY2M0M5LjAxNjEgMTQuNTExIDkuNjczOCAxNS40MzkyIDkuMzYyMzQgMTYuMzI1Nkw5LjIzOTQ1IDE2LjY3NTNDOC41ODA5MSAxOC41NDkzIDkuNzExNyAyMC41NzY4IDExLjY1MjEgMjEuMDAxM0MxMS44NTIxIDIxLjA0NSAxMi4wNTM5IDIwLjkzNTkgMTIuMTI2NyAyMC43NDQ2TDE0LjAwOTUgMTUuNzk5NEMxNC4zMDQ4IDE1LjAyMzcgMTUuMDQ4NiAxNC41MTEgMTUuODc4NiAxNC41MTFIMTdWNi42OTc5OUMxNyA1LjMzMTg5IDE2LjA3OTEgNC4xMjcxMSAxNC43NDU0IDMuODMxMkMxMS43Nzc0IDMuMTcyNjYgOS40NjU5IDIuOTQ2MTYgNi40ODk0MSAzLjAxMDQ3QzUuMDQ2MzUgMy4wNDE2NSAzLjg3MDk5IDQuMTU1MjYgMy42OTA3OCA1LjU4NzM2TDIuOTgxMjIgMTEuMjI2MkMyLjc2MTgxIDEyLjk2OTkgNC4xMjExMSAxNC41MTEgNS44Nzg1NiAxNC41MTFaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMjEiIHk9IjE2LjAxMSIgd2lkdGg9IjQiIGhlaWdodD0iMTMiIHJ4PSIxIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMjEgMTYuMDExKSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/dislike - Icon documentation
 */
export function Dislike({
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
      <path d="M5.87856 14.511H8.07663C9.0161 14.511 9.6738 15.4392 9.36234 16.3256L9.23945 16.6753C8.58091 18.5493 9.7117 20.5768 11.6521 21.0013C11.8521 21.045 12.0539 20.9359 12.1267 20.7446L14.0095 15.7994C14.3048 15.0237 15.0486 14.511 15.8786 14.511H17V6.69799C17 5.33189 16.0791 4.12711 14.7454 3.8312C11.7774 3.17266 9.4659 2.94616 6.48941 3.01047C5.04635 3.04165 3.87099 4.15526 3.69078 5.58736L2.98122 11.2262C2.76181 12.9699 4.12111 14.511 5.87856 14.511Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><rect x="21" y="16.011" width="4" height="13" rx="1" transform="rotate(180 21 16.011)" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
