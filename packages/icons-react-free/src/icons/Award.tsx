import { IconProps } from "../types";

/**
 * @component
 * @name Award
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNy41NTc0NiAxMy42MzUxQzguNzM2NDIgMTQuNjkwMyAxMC4yOTMzIDE1LjMzMTkgMTIgMTUuMzMxOUMxMy43MDY3IDE1LjMzMTkgMTUuMjYzNiAxNC42OTAzIDE2LjQ0MjUgMTMuNjM1MUMxNy44MDU4IDEyLjQxNDkgMTguNjYzOCAxMC42NDE3IDE4LjY2MzggOC42NjgxMUMxOC42NjM4IDQuOTg3NzkgMTUuNjgwMyAyLjAwNDMgMTIgMi4wMDQzQzguMzE5NjggMi4wMDQzIDUuMzM2MiA0Ljk4Nzc5IDUuMzM2MiA4LjY2ODExQzUuMzM2MiAxMC42NDE3IDYuMTk0MTYgMTIuNDE0OSA3LjU1NzQ2IDEzLjYzNTFaTTE2LjQ0MjUgMTMuNjM1MVYyMS45OTU3TDEyIDE5Ljc3NDRMNy41NTc0NiAyMS45OTU3TDcuNTU3NDYgMTMuNjM1MSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xMS4yOTMgNy44Nzk0M0wxMiA2LjQ0Njg0TDEyLjcwNyA3Ljg3OTQzTTEyIDYuNDQ2ODRWMTAuMTY3M00xMy4xNDQgOS4yOTM0M0wxNC4yMjEzIDguMTQzNzRMMTIuNzA3IDcuODc5NDNNMTIuNzA3IDcuODc5NDNMMTAuNjI3MiAxMC44ODk0TTE0LjIyMTMgOC4xNDM3NEwxMC44NTYgOS4yOTM0M00xMiAxMC4xNjczTDEzLjM3MjggMTAuODg5NEwxMy4xNDQgOS4yOTM0M00xMy4xNDQgOS4yOTM0M0w5Ljc3ODczIDguMTQzNzRNMTMuMzcyOCAxMC44ODk0TDExLjI5MyA3Ljg3OTQzTTEwLjg1NiA5LjI5MzQzTDEwLjYyNzIgMTAuODg5NEwxMiAxMC4xNjczTTExLjI5MyA3Ljg3OTQzTDkuNzc4NzMgOC4xNDM3NEwxMC44NTYgOS4yOTM0MyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/award - Icon documentation
 */
export function Award({
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
      <path d="M7.55746 13.6351C8.73642 14.6903 10.2933 15.3319 12 15.3319C13.7067 15.3319 15.2636 14.6903 16.4425 13.6351C17.8058 12.4149 18.6638 10.6417 18.6638 8.66811C18.6638 4.98779 15.6803 2.0043 12 2.0043C8.31968 2.0043 5.3362 4.98779 5.3362 8.66811C5.3362 10.6417 6.19416 12.4149 7.55746 13.6351ZM16.4425 13.6351V21.9957L12 19.7744L7.55746 21.9957L7.55746 13.6351" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M11.293 7.87943L12 6.44684L12.707 7.87943M12 6.44684V10.1673M13.144 9.29343L14.2213 8.14374L12.707 7.87943M12.707 7.87943L10.6272 10.8894M14.2213 8.14374L10.856 9.29343M12 10.1673L13.3728 10.8894L13.144 9.29343M13.144 9.29343L9.77873 8.14374M13.3728 10.8894L11.293 7.87943M10.856 9.29343L10.6272 10.8894L12 10.1673M11.293 7.87943L9.77873 8.14374L10.856 9.29343" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
