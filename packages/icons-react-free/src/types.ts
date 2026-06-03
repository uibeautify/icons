import type { SVGProps } from "react";

export type IconStyle = "outline";

export type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  secondaryColor?: string;
  secondaryOpacity?: number;
  strokeWidth?: number;
  variant?: IconStyle;
};
