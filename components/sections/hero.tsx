"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getContent } from "@/lib/content";
import gsap from "gsap";

export function Hero() {
  const content = getContent();
  const { hero } = content.content;
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const wave1Ref = useRef<HTMLDivElement>(null);
  const wave2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Logo animation
      tl.fromTo(
        logoRef.current,
        { scale: 0, opacity: 0, rotation: -180 },
        { scale: 1, opacity: 1, rotation: 0, duration: 1 },
        0
      )
        .fromTo(
          titleRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.3"
        )
        .fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          "-=0.2"
        );

      // Parallax effect on waves
      gsap.to(wave1Ref.current, {
        x: "-10%",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(wave2Ref.current, {
        x: "10%",
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToServices = () => {
    document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-400 to-cyan-500" />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-24 md:py-32 lg:py-40">
        {/* Logo */}
        <div ref={logoRef} className="mb-10">
          <div className="relative w-44 h-44 lg:w-48 lg:h-48 mx-auto">
            <div className="absolute inset-0 bg-white rounded-full shadow-2xl shadow-cyan-500/30" />
            <Image
              src="/images/logo.webp"
              alt={`${content.site.name} - Logo`}
              fill
              className="object-contain p-2"
              priority
            />
          </div>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 drop-shadow-lg"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          <span className="block">{content.site.name.split(" ")[0]}</span>
          <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-orange-500 bg-clip-text text-transparent">
            {hero.title}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-2 font-medium drop-shadow"
        >
          {hero.subtitle}
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 drop-shadow-lg">
          {hero.location}
        </p>

        {/* Functional tagline */}
        <p className="text-lg md:text-xl text-white/95 mb-12 font-medium drop-shadow">
          {hero.tagline}
        </p>

        {/* Features badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {hero.features.map((feature) => (
            <span
              key={feature}
              className="glass px-4 py-2 rounded-full text-white text-sm font-medium shadow-lg transition-all duration-300 hover:scale-110 hover:!bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 cursor-pointer"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-bold text-lg px-8 py-6 shadow-xl shadow-orange-500/40 hover:shadow-orange-500/60 transition-all duration-300 hover:scale-105 rounded-full"
          >
            <a
              href={`https://wa.me/${content.site.whatsapp}?text=Hola,%20quiero%20hacer%20una%20reserva`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {hero.ctaPrimary}
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToServices}
            className="glass text-white border-white/30 hover:bg-white/20 hover:text-white font-semibold text-xl px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 bg-transparent cursor-pointer"
          >
            {hero.ctaSecondary}
          </Button>
        </div>
      </div>

      {/* Water waves at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 overflow-hidden">
        {/* Wave 1 */}
        <div ref={wave1Ref} className="absolute bottom-0 left-0 w-[200%] h-32 animate-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="rgba(14, 165, 233, 0.5)"
            />
          </svg>
        </div>

        {/* Wave 2 */}
        <div ref={wave2Ref} className="absolute bottom-0 left-0 w-[200%] h-28 animate-wave-reverse">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              fill="rgba(6, 182, 212, 0.7)"
            />
          </svg>
        </div>

        {/* Wave 3 - Front */}
        <div className="absolute bottom-0 left-0 w-full h-24">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              fill="#0891b2"
            />
          </svg>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white animate-bounce cursor-pointer"
        aria-label="Scroll down"
      >
        <div className="flex flex-col items-center gap-2">
          <Waves className="w-6 h-6" />
          <ChevronDown className="w-8 h-8" />
        </div>
      </button>
    </section>
  );
}
