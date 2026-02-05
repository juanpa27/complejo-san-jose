"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronRight, ChevronDown, Camera } from "lucide-react";
import {
  GiTennisRacket,
  GiTennisBall,
  GiSwimfins,
  GiWaterDrop,
  GiSoccerBall,
  GiVolleyballBall,
  GiFishingHook,
  GiFishingNet,
  GiSteak,
  GiBarbecue,
  GiWoodCabin,
  GiCampfire,
} from "react-icons/gi";
import { IconType } from "react-icons";
import { Button } from "@/components/ui/button";
import { ImageGalleryModal } from "@/components/ui/image-gallery-modal";
import { getContent } from "@/lib/content";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Configuración UI: iconos y gradientes (no editable por contenido)
type ServiceUIConfig = {
  iconLeft: IconType;
  iconRight: IconType;
  gradient: string;
};

const servicesUIConfig: Record<string, ServiceUIConfig> = {
  padel: {
    iconLeft: GiTennisRacket,
    iconRight: GiTennisBall,
    gradient: "from-cyan-500 to-blue-600",
  },
  piscina: {
    iconLeft: GiSwimfins,
    iconRight: GiWaterDrop,
    gradient: "from-sky-400 to-cyan-500",
  },
  futbol: {
    iconLeft: GiSoccerBall,
    iconRight: GiVolleyballBall,
    gradient: "from-green-500 to-emerald-600",
  },
  pesca: {
    iconLeft: GiFishingHook,
    iconRight: GiFishingNet,
    gradient: "from-teal-500 to-cyan-600",
  },
  quinchos: {
    iconLeft: GiBarbecue,
    iconRight: GiSteak,
    gradient: "from-orange-500 to-amber-500",
  },
  bungalows: {
    iconLeft: GiWoodCabin,
    iconRight: GiCampfire,
    gradient: "from-amber-600 to-orange-600",
  },
};

export function Services() {
  const content = getContent();
  const { services: servicesContent } = content.content;
  const services = content.services;
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [galleryState, setGalleryState] = useState<{
    isOpen: boolean;
    images: string[];
    serviceTitle: string;
  }>({
    isOpen: false,
    images: [],
    serviceTitle: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo(
        ".services-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".services-title",
            start: "top 80%",
          },
        }
      );

      // Animate cards with stagger
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="relative py-24 bg-linear-to-b from-cyan-600 to-cyan-700 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="services-title text-center mb-16">
          <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-white text-sm font-medium mb-4">
            {servicesContent.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            {servicesContent.title}{" "}
            <span className="text-yellow-300">{servicesContent.titleHighlight}</span>
          </h2>
          <p className="text-lg text-cyan-100 max-w-2xl mx-auto text-pretty">
            {servicesContent.subtitle}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const uiConfig = servicesUIConfig[service.slug] || servicesUIConfig.piscina; // Fallback
            const [isExpanded, setIsExpanded] = useState(false);

            return (
              <div
                key={service.slug}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                  service.featured
                    ? "ring-2 ring-yellow-400 ring-offset-2 ring-offset-cyan-600"
                    : ""
                }`}
              >
                {/* Badge "Más elegido" */}
                {service.featured && (
                  <div className="absolute top-3 left-3 z-30 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Más elegido
                  </div>
                )}

                {/* Header con imagen real */}
                <button
                  onClick={() => {
                    const validGallery = service.gallery.filter((img) => img && img.trim() !== "");
                    if (validGallery.length > 0) {
                      setGalleryState({
                        isOpen: true,
                        images: validGallery,
                        serviceTitle: service.title,
                      });
                    }
                  }}
                  className="relative w-full aspect-[16/10] overflow-hidden cursor-pointer"
                  aria-label={`Ver fotos de ${service.title}`}
                >
                  <Image
                    src={service.cardImage}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 360px"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {/* Overlay "Ver fotos" discreto */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent pt-12 pb-3 px-4 opacity-90 md:opacity-0 md:group-hover:opacity-90 transition-opacity duration-300">
                    <div className="flex items-center justify-center gap-2 text-white text-sm font-medium">
                      <Camera className="w-4 h-4" />
                      <span>Ver fotos</span>
                    </div>
                  </div>
                </button>

                {/* Card content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4">{service.description}</p>

                  {/* Bullets - 2 en mobile, expandible, 3 en desktop */}
                  <ul className="space-y-2 mb-4">
                    {service.bullets
                      .slice(0, isExpanded ? service.bullets.length : 2)
                      .map((bullet, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <ChevronRight className="w-4 h-4 text-cyan-500 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    {/* Desktop: mostrar todos */}
                    {service.bullets.slice(2, 3).map((bullet, i) => (
                      <li
                        key={i + 2}
                        className="hidden md:flex items-center gap-2 text-sm text-gray-700"
                      >
                        <ChevronRight className="w-4 h-4 text-cyan-500 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Botón "Ver más" solo en mobile */}
                  {service.bullets.length > 2 && !isExpanded && (
                    <button
                      onClick={() => setIsExpanded(true)}
                      className="md:hidden text-sm text-cyan-600 font-medium flex items-center gap-1 mb-4 hover:text-cyan-700"
                      aria-label={`Ver más detalles de ${service.title}`}
                    >
                      Ver más <ChevronDown className="w-4 h-4" />
                    </button>
                  )}

                  {/* Price - mejor jerarquía */}
                  <div className="mb-4">
                    {service.priceText.includes("Desde") ? (
                      <div>
                        <span className="text-sm text-gray-600 font-medium">Desde </span>
                        <span className="text-2xl font-bold text-cyan-600">
                          {service.priceText.replace("Desde ", "")}
                        </span>
                      </div>
                    ) : (
                      <div className="text-xl font-bold text-cyan-600">{service.priceText}</div>
                    )}
                  </div>

                  {/* CTA Button con texto diferente en mobile */}
                  <Button
                    asChild
                    className={`w-full rounded-full bg-linear-to-r ${uiConfig.gradient} hover:opacity-90 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <a
                      href={`https://wa.me/${content.site.whatsapp}?text=${encodeURIComponent(service.ctaMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      {/* Texto variable en mobile, fijo en desktop */}
                      <span className="md:hidden">{service.ctaMobile}</span>
                      <span className="hidden md:inline">Consultar</span>
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal de galería */}
      <ImageGalleryModal
        images={galleryState.images}
        isOpen={galleryState.isOpen}
        onClose={() => setGalleryState({ ...galleryState, isOpen: false })}
        serviceTitle={galleryState.serviceTitle}
      />
    </section>
  );
}
