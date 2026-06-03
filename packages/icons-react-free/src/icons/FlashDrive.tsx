import { IconProps } from "../types";

/**
 * @component
 * @name FlashDrive
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNSA3LjY1MTE2QzUgNy4yOTE1NCA1LjI5MTU0IDcgNS42NTExNiA3SDE4LjM0ODhDMTguNzA4NSA3IDE5IDcuMjkxNTQgMTkgNy42NTExNlYxNEMxOSAxNy44NjYgMTUuODY2IDIxIDEyIDIxQzguMTM0MDEgMjEgNSAxNy44NjYgNSAxNFY3LjY1MTE2WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNSAzSDlDOC40NDc3MiAzIDggMy40NDc3MiA4IDRWN0gxNkwxNiA0QzE2IDMuNDQ3NzIgMTUuNTUyMyAzIDE1IDNaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PC9zdmc+)
 * @see https://icons.uibeautify.com/icons/flash-drive - Icon documentation
 */
export function FlashDrive({
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
      <path d="M5 7.65116C5 7.29154 5.29154 7 5.65116 7H18.3488C18.7085 7 19 7.29154 19 7.65116V14C19 17.866 15.866 21 12 21C8.13401 21 5 17.866 5 14V7.65116Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M15 3H9C8.44772 3 8 3.44772 8 4V7H16L16 4C16 3.44772 15.5523 3 15 3Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
