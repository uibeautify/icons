import { IconProps } from "../types";

/**
 * @component
 * @name AtSign
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTUuODExNCA4LjRDMTUuODExNCA5LjU5NDE0IDE1Ljc3MiAxMS41IDE1Ljc3MiAxMi45QzE1Ljc3MiAxNC4xNDE3IDE1Ljc5IDE2Ljc0MDkgMTcuOTkxNCAxNi45NDY2QzIyLjA3OTkgMTYuOTQ2NiAyMS4wMzc4IDkuMDY0NjggMjAuMzYxIDcuMDUzMzdDMTkuODQ0NSA1LjUxODYyIDE4LjYyODggNC4zMTQzMSAxNy4wNzk0IDMuODAyNzNDMTMuODM3OSAyLjczMjQyIDEwLjMzMzQgMi43MzI0MiA3LjA5MTk2IDMuODAyNzNDNS41NDI2IDQuMzE0MzEgNC4zMjY4MiA1LjUxODYyIDMuODEwMzcgNy4wNTMzN0MyLjcyOTg4IDEwLjI2NDMgMi43Mjk4OCAxMy43MzU3IDMuODEwMzcgMTYuOTQ2NkM0LjMyNjgyIDE4LjQ4MTQgNS41NDI2IDE5LjY4NTcgNy4wOTE5NiAyMC4xOTczQzkuNTg5MTggMjEuMDIxOCAxMi4yNDI1IDIxLjIxMTEgMTQuODExNCAyMC43NjUyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cGF0aCBkPSJNMTUuNTg0MyAxMEMxNC44ODE3IDguODA0NCAxMy41NjgzIDggMTIuMDY0IDhDOS44MTk1MiA4IDggOS43OTA4NiA4IDEyQzggMTQuMjA5MSA5LjgxOTUyIDE2IDEyLjA2NCAxNkMxMy41NjgzIDE2IDE0Ljg4MTcgMTUuMTk1NiAxNS41ODQzIDE0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/at-sign - Icon documentation
 */
export function AtSign({
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
      <path d="M15.8114 8.4C15.8114 9.59414 15.772 11.5 15.772 12.9C15.772 14.1417 15.79 16.7409 17.9914 16.9466C22.0799 16.9466 21.0378 9.06468 20.361 7.05337C19.8445 5.51862 18.6288 4.31431 17.0794 3.80273C13.8379 2.73242 10.3334 2.73242 7.09196 3.80273C5.5426 4.31431 4.32682 5.51862 3.81037 7.05337C2.72988 10.2643 2.72988 13.7357 3.81037 16.9466C4.32682 18.4814 5.5426 19.6857 7.09196 20.1973C9.58918 21.0218 12.2425 21.2111 14.8114 20.7652" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M15.5843 10C14.8817 8.8044 13.5683 8 12.064 8C9.81952 8 8 9.79086 8 12C8 14.2091 9.81952 16 12.064 16C13.5683 16 14.8817 15.1956 15.5843 14" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
