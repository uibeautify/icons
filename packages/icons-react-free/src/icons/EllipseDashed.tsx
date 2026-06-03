import { IconProps } from "../types";

/**
 * @component
 * @name EllipseDashed
 * @description UI Beautify SVG icon component. Renders a customizable SVG icon.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj48cGF0aCBkPSJNNC44NDk5MiA2LjUyMzE4QzUuMTkzMDQgNi4wNzU2IDUuNzIyNjYgNS40Nzg4NSA2LjUyODI3IDQuODUyMjhNMy4wODIwNSAxMC44MjcyQzIuOTQ3NzggMTEuNjcwMSAzLjAxNDkyIDEyLjU1NzggMy4wODIwNSAxMy4xNzY5TTQuODY0ODQgMTcuNDczNUM1LjM3OTUzIDE4LjE0NDggNi4wODA3MSAxOC44MzExIDYuNTIwODEgMTkuMTM2OU0xMC44MjQ5IDIwLjkyNzJDMTEuNjIzIDIxLjA2MTQgMTIuODkxMSAyMC45NzE5IDEzLjE3NDYgMjAuOTI3Mk0xNy40NzUyIDE5LjEzNTJDMTguMDU2OSAxOC43MTggMTguNzI2NiAxOC4wNDQ0IDE5LjEzOTkgMTcuNDcwNE0yMC45MTk2IDEwLjgyMjZDMjEuMDMzOSAxMS42Nzg5IDIxLjAxNTcgMTIuNjA4MSAyMC45MTk2IDEzLjE3ODlNMTkuMTM5OSA2LjUzMDkyQzE4Ljc3MiA2LjAzNDI0IDE4LjAxNDggNS4yNjI1MSAxNy40ODQ1IDQuODU0MDNNMTAuODI1NyAzLjA3Njc1QzExLjc4MzYgMi45NDcwMyAxMi4zMzIzIDIuOTc2OTcgMTMuMTgwNSAzLjA3Njc2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=)
 * @see https://icons.uibeautify.com/icons/ellipse-dashed - Icon documentation
 */
export function EllipseDashed({
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
      <path d="M4.84992 6.52318C5.19304 6.0756 5.72266 5.47885 6.52827 4.85228M3.08205 10.8272C2.94778 11.6701 3.01492 12.5578 3.08205 13.1769M4.86484 17.4735C5.37953 18.1448 6.08071 18.8311 6.52081 19.1369M10.8249 20.9272C11.623 21.0614 12.8911 20.9719 13.1746 20.9272M17.4752 19.1352C18.0569 18.718 18.7266 18.0444 19.1399 17.4704M20.9196 10.8226C21.0339 11.6789 21.0157 12.6081 20.9196 13.1789M19.1399 6.53092C18.772 6.03424 18.0148 5.26251 17.4845 4.85403M10.8257 3.07675C11.7836 2.94703 12.3323 2.97697 13.1805 3.07676" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" stroke={color}/>
    </svg>
  );
}
