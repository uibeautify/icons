import { IconProps } from "../types";

/**
 * @component
 * @name Invoice
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNCA3LjhDNCA2LjExOTg0IDQgNS4yNzk3NiA0LjMyNjk4IDQuNjM4MDNDNC42MTQ2IDQuMDczNTQgNS4wNzM1NCAzLjYxNDYgNS42MzgwMyAzLjMyNjk4QzYuMjc5NzYgMyA3LjExOTg0IDMgOC44IDNIMTEuNzkyM0MxMi42MDQzIDMgMTMuMDEwMyAzIDEzLjM4NzUgMy4wOTk3OUMxMy43MjE4IDMuMTg4MjIgMTQuMDM4MiAzLjMzMzc2IDE0LjMyMjggMy41Mjk5N0MxNC42NDQxIDMuNzUxNCAxNC45MDgzIDQuMDU5NjcgMTUuNDM2NyA0LjY3NjJMMTguODQ0NCA4LjY1MTg0QzE5LjI3MjIgOS4xNTA5IDE5LjQ4NjEgOS40MDA0MyAxOS42Mzg0IDkuNjgxOTRDMTkuNzczNiA5LjkzMTY0IDE5Ljg3MjYgMTAuMTk5MyAxOS45MzI1IDEwLjQ3NjhDMjAgMTAuNzg5NyAyMCAxMS4xMTgzIDIwIDExLjc3NTZWMjFMMTggMTlMMTYgMjFMMTQgMTlMMTIgMjFMMTAgMTlMOCAyMUw2IDE5TDQgMjFWNy44WiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNCA0VjlDMTQgOS41NTIyOCAxNC40NDc3IDEwIDE1IDEwSDE5IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNOCAxMUwxMSAxMSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHBhdGggZD0iTTggMTVMMTUgMTUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik04IDdMOSA3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/invoice - Icon documentation
 */
export function Invoice({
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
      <path d="M4 7.8C4 6.11984 4 5.27976 4.32698 4.63803C4.6146 4.07354 5.07354 3.6146 5.63803 3.32698C6.27976 3 7.11984 3 8.8 3H11.7923C12.6043 3 13.0103 3 13.3875 3.09979C13.7218 3.18822 14.0382 3.33376 14.3228 3.52997C14.6441 3.7514 14.9083 4.05967 15.4367 4.6762L18.8444 8.65184C19.2722 9.1509 19.4861 9.40043 19.6384 9.68194C19.7736 9.93164 19.8726 10.1993 19.9325 10.4768C20 10.7897 20 11.1183 20 11.7756V21L18 19L16 21L14 19L12 21L10 19L8 21L6 19L4 21V7.8Z" strokeWidth={strokeWidth} strokeLinejoin="round" stroke={color}/><path d="M14 4V9C14 9.55228 14.4477 10 15 10H19" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M8 11L11 11" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M8 15L15 15" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M8 7L9 7" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
