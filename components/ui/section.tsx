import React from "react";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: "white" | "gray" | "sky";
}

export function Section({
  id,
  children,
  className = "",
  background = "white",
}: SectionProps) {
  const bgStyles = {
    white: "bg-white",
    gray: "bg-gray-light",
    sky: "bg-sky-light/20",
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgStyles[background]} ${className}`}>
      {children}
    </section>
  );
}
