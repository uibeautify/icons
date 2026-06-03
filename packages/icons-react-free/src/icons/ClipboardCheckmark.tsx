import { IconProps } from "../types";

/**
 * @component
 * @name ClipboardCheckmark
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNOSA1SDguMkM3LjA3OTg5IDUgNi41MTk4NCA1IDYuMDkyMDIgNS4yMTc5OUM1LjcxNTY5IDUuNDA5NzMgNS40MDk3MyA1LjcxNTY5IDUuMjE3OTkgNi4wOTIwMkM1IDYuNTE5ODQgNSA3LjA3OTg5IDUgOC4yVjE2LjJDNSAxNy44ODAyIDUgMTguNzIwMiA1LjMyNjk4IDE5LjM2MkM1LjYxNDYgMTkuOTI2NSA2LjA3MzU0IDIwLjM4NTQgNi42MzgwMyAyMC42NzNDNy4yNzk3NiAyMSA4LjExOTg0IDIxIDkuOCAyMUgxMU0xNSA1SDE1LjhDMTYuOTIwMSA1IDE3LjQ4MDIgNSAxNy45MDggNS4yMTc5OUMxOC4yODQzIDUuNDA5NzMgMTguNTkwMyA1LjcxNTY5IDE4Ljc4MiA2LjA5MjAyQzE5IDYuNTE5ODQgMTkgNy4wNzk4OSAxOSA4LjJWMTMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNSAxOUwxNyAyMUwyMSAxNyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iOSIgeT0iMyIgd2lkdGg9IjYiIGhlaWdodD0iNCIgcng9IjEiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/clipboard-checkmark - Icon documentation
 */
export function ClipboardCheckmark({
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
      <path d="M9 5H8.2C7.07989 5 6.51984 5 6.09202 5.21799C5.71569 5.40973 5.40973 5.71569 5.21799 6.09202C5 6.51984 5 7.07989 5 8.2V16.2C5 17.8802 5 18.7202 5.32698 19.362C5.6146 19.9265 6.07354 20.3854 6.63803 20.673C7.27976 21 8.11984 21 9.8 21H11M15 5H15.8C16.9201 5 17.4802 5 17.908 5.21799C18.2843 5.40973 18.5903 5.71569 18.782 6.09202C19 6.51984 19 7.07989 19 8.2V13" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M15 19L17 21L21 17" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><rect x="9" y="3" width="6" height="4" rx="1" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
