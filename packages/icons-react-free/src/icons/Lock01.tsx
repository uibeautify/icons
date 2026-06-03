import { IconProps } from "../types";

/**
 * @component
 * @name Lock01
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTYuMiA4Ljk5NTEySDcuOEM2LjExOTg0IDguOTk1MTIgNS4yNzk3NiA4Ljk5NTEyIDQuNjM4MDMgOS4zMjIxQzQuMDczNTQgOS42MDk3MiAzLjYxNDYgMTAuMDY4NyAzLjMyNjk4IDEwLjYzMzFDMyAxMS4yNzQ5IDMgMTIuMTE1IDMgMTMuNzk1MVYxNi4xOTUxQzMgMTcuODc1MyAzIDE4LjcxNTQgMy4zMjY5OCAxOS4zNTcxQzMuNjE0NiAxOS45MjE2IDQuMDczNTQgMjAuMzgwNSA0LjYzODAzIDIwLjY2ODFDNS4yNzk3NiAyMC45OTUxIDYuMTE5ODQgMjAuOTk1MSA3LjggMjAuOTk1MUgxNi4yQzE3Ljg4MDIgMjAuOTk1MSAxOC43MjAyIDIwLjk5NTEgMTkuMzYyIDIwLjY2ODFDMTkuOTI2NSAyMC4zODA1IDIwLjM4NTQgMTkuOTIxNiAyMC42NzMgMTkuMzU3MUMyMSAxOC43MTU0IDIxIDE3Ljg3NTMgMjEgMTYuMTk1MVYxMy43OTUxQzIxIDEyLjExNSAyMSAxMS4yNzQ5IDIwLjY3MyAxMC42MzMxQzIwLjM4NTQgMTAuMDY4NyAxOS45MjY1IDkuNjA5NzIgMTkuMzYyIDkuMzIyMUMxOC43MjAyIDguOTk1MTIgMTcuODgwMiA4Ljk5NTEyIDE2LjIgOC45OTUxMloiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNyA4Ljk5NTEyVjcuOTk1MTJDMTcgNS4yMzM2OSAxNC43NjE0IDIuOTk1MTIgMTIgMi45OTUxMkM5LjIzODU4IDIuOTk1MTIgNyA1LjIzMzY5IDcgNy45OTUxMlY4Ljk5NTEyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTIgMTMuOTk1MUwxMiAxNS45OTUxIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/lock-01 - Icon documentation
 */
export function Lock01({
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
      <path d="M16.2 8.99512H7.8C6.11984 8.99512 5.27976 8.99512 4.63803 9.3221C4.07354 9.60972 3.6146 10.0687 3.32698 10.6331C3 11.2749 3 12.115 3 13.7951V16.1951C3 17.8753 3 18.7154 3.32698 19.3571C3.6146 19.9216 4.07354 20.3805 4.63803 20.6681C5.27976 20.9951 6.11984 20.9951 7.8 20.9951H16.2C17.8802 20.9951 18.7202 20.9951 19.362 20.6681C19.9265 20.3805 20.3854 19.9216 20.673 19.3571C21 18.7154 21 17.8753 21 16.1951V13.7951C21 12.115 21 11.2749 20.673 10.6331C20.3854 10.0687 19.9265 9.60972 19.362 9.3221C18.7202 8.99512 17.8802 8.99512 16.2 8.99512Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M17 8.99512V7.99512C17 5.23369 14.7614 2.99512 12 2.99512C9.23858 2.99512 7 5.23369 7 7.99512V8.99512" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M12 13.9951L12 15.9951" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
