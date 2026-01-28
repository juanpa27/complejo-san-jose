import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main";
}

export function Container({ children, className = "", as: Component = "div" }: ContainerProps) {
  return <Component className={`container-custom ${className}`}>{children}</Component>;
}
