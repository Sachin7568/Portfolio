import { type ReactNode } from "react";

interface Tilt3DProps {
  children: ReactNode;
  className?: string;
  [key: string]: unknown;
}

export function Tilt3D({ children, className = "" }: Tilt3DProps) {
  return <div className={className}>{children}</div>;
}
