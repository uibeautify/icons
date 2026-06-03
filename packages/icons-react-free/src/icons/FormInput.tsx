import { IconProps } from "../types";

/**
 * @component
 * @name FormInput
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTcgM0gxNi44NTQxQzE1LjcxNzggMyAxNC42NzkgMy42NDIwMSAxNC4xNzA4IDQuNjU4MzZMMTQgNSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTE3IDIxSDE2Ljg1NDFDMTUuNzE3OCAyMSAxNC42NzkgMjAuMzU4IDE0LjE3MDggMTkuMzQxNkwxNCAxOSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTExIDNIMTEuMTQ1OUMxMi4yODIyIDMgMTMuMzIxIDMuNjQyMDEgMTMuODI5MiA0LjY1ODM2TDE0IDUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMSAyMUgxMS4xNDU5QzEyLjI4MjIgMjEgMTMuMzIxIDIwLjM1OCAxMy44MjkyIDE5LjM0MTZMMTQgMTkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNCA1TDE0IDE5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTcuNSAxN0gxNy44QzE4LjkyMDEgMTcgMTkuNDgwMiAxNyAxOS45MDggMTYuNzgyQzIwLjI4NDMgMTYuNTkwMyAyMC41OTAzIDE2LjI4NDMgMjAuNzgyIDE1LjkwOEMyMSAxNS40ODAyIDIxIDE0LjkyMDEgMjEgMTMuOFYxMC4yQzIxIDkuMDc5ODkgMjEgOC41MTk4NCAyMC43ODIgOC4wOTIwMkMyMC41OTAzIDcuNzE1NjkgMjAuMjg0MyA3LjQwOTczIDE5LjkwOCA3LjIxNzk5QzE5LjQ4MDIgNyAxOC45MjAxIDcgMTcuOCA3SDE3LjVNMTQgMTdINi4yQzUuMDc5ODkgMTcgNC41MTk4NCAxNyA0LjA5MjAyIDE2Ljc4MkMzLjcxNTY5IDE2LjU5MDMgMy40MDk3MyAxNi4yODQzIDMuMjE3OTkgMTUuOTA4QzMgMTUuNDgwMiAzIDE0LjkyMDEgMyAxMy44VjEwLjJDMyA5LjA3OTg5IDMgOC41MTk4NCAzLjIxNzk5IDguMDkyMDJDMy40MDk3MyA3LjcxNTY5IDMuNzE1NjkgNy40MDk3MyA0LjA5MjAyIDcuMjE3OTlDNC41MTk4NCA3IDUuMDc5ODkgNyA2LjIgN0gxNCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/form-input - Icon documentation
 */
export function FormInput({
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
      <path d="M17 3H16.8541C15.7178 3 14.679 3.64201 14.1708 4.65836L14 5" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M17 21H16.8541C15.7178 21 14.679 20.358 14.1708 19.3416L14 19" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M11 3H11.1459C12.2822 3 13.321 3.64201 13.8292 4.65836L14 5" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M11 21H11.1459C12.2822 21 13.321 20.358 13.8292 19.3416L14 19" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M14 5L14 19" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M17.5 17H17.8C18.9201 17 19.4802 17 19.908 16.782C20.2843 16.5903 20.5903 16.2843 20.782 15.908C21 15.4802 21 14.9201 21 13.8V10.2C21 9.07989 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H17.5M14 17H6.2C5.07989 17 4.51984 17 4.09202 16.782C3.71569 16.5903 3.40973 16.2843 3.21799 15.908C3 15.4802 3 14.9201 3 13.8V10.2C3 9.07989 3 8.51984 3.21799 8.09202C3.40973 7.71569 3.71569 7.40973 4.09202 7.21799C4.51984 7 5.07989 7 6.2 7H14" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
