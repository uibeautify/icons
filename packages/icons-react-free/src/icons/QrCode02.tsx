import { IconProps } from "../types";

/**
 * @component
 * @name QrCode02
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cmVjdCB4PSIyIiB5PSIyIiB3aWR0aD0iOCIgaGVpZ2h0PSI4IiByeD0iMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMiIgeT0iMTQiIHdpZHRoPSI4IiBoZWlnaHQ9IjgiIHJ4PSIyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSIxNCIgeT0iMiIgd2lkdGg9IjgiIGhlaWdodD0iOCIgcng9IjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xOC4wMDAxIDE4SDE4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48cmVjdCB4PSI1IiB5PSIxNyIgd2lkdGg9IjIiIGhlaWdodD0iMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iNSIgeT0iNSIgd2lkdGg9IjIiIGhlaWdodD0iMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMTciIHk9IjUiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNC4zNzExIDE0LjQ4MDVIMTQuNjAxNk0xNCAxNEgxNVYxNUgxNFYxNFoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNC4zNzExIDIxLjQ4MDVIMTQuNjAxNk0xNCAyMUgxNVYyMkgxNFYyMVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0yMS4zNzExIDE0LjQ4MDVIMjEuNjAxNk0yMSAxNEgyMlYxNUgyMVYxNFoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0yMS4zNzExIDIxLjQ4MDVIMjEuNjAxNk0yMSAyMUgyMlYyMkgyMVYyMVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjwvc3ZnPg==)
 * @see https://icons.uibeautify.com/icons/qr-code-02 - Icon documentation
 */
export function QrCode02({
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
      <rect x="2" y="2" width="8" height="8" rx="2" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><rect x="2" y="14" width="8" height="8" rx="2" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><rect x="14" y="2" width="8" height="8" rx="2" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M18.0001 18H18" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><rect x="5" y="17" width="2" height="2" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><rect x="5" y="5" width="2" height="2" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><rect x="17" y="5" width="2" height="2" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M14.3711 14.4805H14.6016M14 14H15V15H14V14Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M14.3711 21.4805H14.6016M14 21H15V22H14V21Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M21.3711 14.4805H21.6016M21 14H22V15H21V14Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M21.3711 21.4805H21.6016M21 21H22V22H21V21Z" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
