import { IconProps } from "../types";

/**
 * @component
 * @name GitPullRequestDraft
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNSA3TDUgMTciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjMiIHk9IjE3IiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiByeD0iMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZT0iY3VycmVudENvbG9yIi8+PHJlY3QgeD0iMyIgeT0iMyIgd2lkdGg9IjQiIGhlaWdodD0iNCIgcng9IjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxyZWN0IHg9IjE3IiB5PSIxNyIgd2lkdGg9IjQiIGhlaWdodD0iNCIgcng9IjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xOS4xNDQ0IDRIMTguODQ1Nk0xOS41IDRDMTkuNSA0LjI3NjE0IDE5LjI3NjEgNC41IDE5IDQuNUMxOC43MjM5IDQuNSAxOC41IDQuMjc2MTQgMTguNSA0QzE4LjUgMy43MjM4NiAxOC43MjM5IDMuNSAxOSAzLjVDMTkuMjc2MSAzLjUgMTkuNSAzLjcyMzg2IDE5LjUgNFoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xOS4xNDQ0IDExSDE4Ljg0NTZNMTkuNSAxMUMxOS41IDExLjI3NjEgMTkuMjc2MSAxMS41IDE5IDExLjVDMTguNzIzOSAxMS41IDE4LjUgMTEuMjc2MSAxOC41IDExQzE4LjUgMTAuNzIzOSAxOC43MjM5IDEwLjUgMTkgMTAuNUMxOS4yNzYxIDEwLjUgMTkuNSAxMC43MjM5IDE5LjUgMTFaIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/git-pull-request-draft - Icon documentation
 */
export function GitPullRequestDraft({
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
      <path d="M5 7L5 17" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><rect x="3" y="17" width="4" height="4" rx="2" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><rect x="3" y="3" width="4" height="4" rx="2" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><rect x="17" y="17" width="4" height="4" rx="2" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/><path d="M19.1444 4H18.8456M19.5 4C19.5 4.27614 19.2761 4.5 19 4.5C18.7239 4.5 18.5 4.27614 18.5 4C18.5 3.72386 18.7239 3.5 19 3.5C19.2761 3.5 19.5 3.72386 19.5 4Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><path d="M19.1444 11H18.8456M19.5 11C19.5 11.2761 19.2761 11.5 19 11.5C18.7239 11.5 18.5 11.2761 18.5 11C18.5 10.7239 18.7239 10.5 19 10.5C19.2761 10.5 19.5 10.7239 19.5 11Z" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/>
    </svg>
  );
}
