"use client";

import { useEffect, useRef } from "react";
import { Sparkles, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function PromoBanner() {
  const bannerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".promo-content",
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".promo-content",
            start: "top 85%",
          },
        }
      );
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={bannerRef} className="relative py-16 overflow-hidden">
      {/* Background with gradient - reduced animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 opacity-95" />

      {/* Subtle animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />

      {/* Animated background pattern - less intense */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-40">
          {/* Reduced sparkle effects */}
          <div className="absolute top-4 left-[10%] w-1.5 h-1.5 bg-white rounded-full animate-float" />
          <div className="absolute top-8 right-[30%] w-1 h-1 bg-white rounded-full animate-float animation-delay-300" />
          <div className="absolute bottom-6 left-[20%] w-1.5 h-1.5 bg-white rounded-full animate-float animation-delay-500" />
          <div className="absolute bottom-4 right-[15%] w-1 h-1 bg-white rounded-full animate-float animation-delay-400" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="promo-content max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Precios Entrada Piscina
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-balance drop-shadow-lg">
            ¡Disfrutá del Verano!
          </h2>

          {/* Price Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-3xl mx-auto">
            {/* Entre Semana */}
            <div className="bg-white/95 backdrop-blur rounded-2xl p-6 shadow-xl">
              <div className="inline-block bg-yellow-400 text-yellow-900 font-bold text-sm px-4 py-1 rounded-full mb-4">
                Entre semana
              </div>
              <div className="space-y-3">
                <div className="border-b border-gray-200 pb-3">
                  <p className="text-gray-700 font-medium mb-1">Niños (4 a 12 años)</p>
                  <p className="text-3xl font-extrabold text-blue-600">25.000 Gs</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium mb-1">Adultos</p>
                  <p className="text-3xl font-extrabold text-blue-600">50.000 Gs</p>
                </div>
              </div>
            </div>

            {/* Fin de Semana */}
            <div className="bg-white/95 backdrop-blur rounded-2xl p-6 shadow-xl">
              <div className="inline-block bg-blue-500 text-white font-bold text-sm px-4 py-1 rounded-full mb-4">
                Fin de semana
              </div>
              <div className="space-y-3">
                <div className="border-b border-gray-200 pb-3">
                  <p className="text-gray-700 font-medium mb-1">Niños (4 a 12 años)</p>
                  <p className="text-3xl font-extrabold text-blue-600">30.000 Gs</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium mb-1">Adultos</p>
                  <p className="text-3xl font-extrabold text-blue-600">60.000 Gs</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <a
                href="https://wa.me/595987157138?text=Hola,%20quiero%20consultar%20sobre%20la%20entrada%20a%20la%20piscina"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Reservar Ahora
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Contact info */}
          <p className="text-lg text-white font-medium mb-2">Más info: (0987) 157 138</p>
          <p className="text-sm text-white/80">¡Te esperamos en Complejo San José!</p>
        </div>
      </div>
    </section>
  );
}
