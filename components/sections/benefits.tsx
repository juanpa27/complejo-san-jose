"use client";

import { useEffect, useRef } from "react";
import { Building2, Car, Users, Shield, MapPin } from "lucide-react";
import { getContent } from "@/lib/content";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Configuración UI: iconos para cada beneficio
const benefitsIcons = [Building2, Car, Users, Shield, MapPin];

export function Benefits() {
  const content = getContent();
  const { benefits: benefitsContent } = content.content;
  const benefits = content.benefits;
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate items
      itemsRef.current.forEach((item, index) => {
        gsap.fromTo(
          item,
          { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="beneficios" ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-50 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-cyan-100 rounded-full text-cyan-700 text-sm font-medium mb-4">
            {benefitsContent.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
            {benefitsContent.title}{" "}
            <span className="text-cyan-600">{benefitsContent.titleHighlight}</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            {benefitsContent.subtitle}
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefitsIcons[index];
            return (
              <div
                key={index}
                ref={(el) => {
                  if (el) itemsRef.current[index] = el;
                }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 w-14 h-14 rounded-xl animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {benefit.split(":")[0]}
                  </h3>
                  <p className="text-gray-600">{benefit.split(":")[1] || benefit}</p>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-bl-[4rem] rounded-tr-2xl" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
