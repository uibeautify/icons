import { IconProps } from "../types";

/**
 * @component
 * @name Users01
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48Y2lyY2xlIGN4PSI2LjkxNTQzIiBjeT0iOS44MTc3NSIgcj0iMi44MTc3NSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik02LjkxNTQ0IDE5Ljc3NjRDMS40NTk3MyAxOS43NzY0IC0wLjA0NDM5MDkgMTUuOTI4IDUuNDAwNjMgMTUuNjAyQzUuNTk4ODEgMTUuNTkwMSA1Ljc5ODY1IDE1LjU4MDYgNiAxNS41NzM0IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48Y2lyY2xlIGN4PSIxNi4wMjc0IiBjeT0iNy42NjYzOCIgcj0iMy4zNzk1MiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9ImN1cnJlbnRDb2xvciIvPjxwYXRoIGQ9Ik0xNy44MDc5IDE0LjY0MTFDMTcuMTk4NSAxNC42MDQ3IDE2LjU3NjUgMTQuNTg1OCAxNS45NDQ0IDE0LjU4NThDMTUuMzEyNCAxNC41ODU4IDE0LjY5MDMgMTQuNjA0NyAxNC4wODEgMTQuNjQxMUM3LjM4MjcyIDE1LjA0MjIgOS4yMzMwMyAxOS43NzYzIDE1Ljk0NDQgMTkuNzc2M0MyMi42NTU4IDE5Ljc3NjMgMjQuNTA2MSAxNS4wNDIyIDE3LjgwNzkgMTQuNjQxMVoiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/users-01 - Icon documentation
 */
export function Users01({
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
      <circle cx="6.91543" cy="9.81775" r="2.81775" strokeWidth={strokeWidth} stroke={color}/><path d="M6.91544 19.7764C1.45973 19.7764 -0.0443909 15.928 5.40063 15.602C5.59881 15.5901 5.79865 15.5806 6 15.5734" strokeWidth={strokeWidth} strokeLinecap="round" stroke={color}/><circle cx="16.0274" cy="7.66638" r="3.37952" strokeWidth={strokeWidth} stroke={color}/><path d="M17.8079 14.6411C17.1985 14.6047 16.5765 14.5858 15.9444 14.5858C15.3124 14.5858 14.6903 14.6047 14.081 14.6411C7.38272 15.0422 9.23303 19.7763 15.9444 19.7763C22.6558 19.7763 24.5061 15.0422 17.8079 14.6411Z" strokeWidth={strokeWidth} stroke={color}/>
    </svg>
  );
}
