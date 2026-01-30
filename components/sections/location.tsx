"use client";

import { useEffect, useRef } from "react";
import { MapPin, Phone, Navigation, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getContent } from "@/lib/content";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Location() {
  const content = getContent();
  const { location: locationContent } = content.content;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".location-content",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".location-content",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".location-map",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".location-map",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="ubicacion" ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="location-content">
            <span className="inline-block px-4 py-1 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-4">
              {locationContent.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
              {locationContent.title}{" "}
              <span className="text-green-600">{locationContent.titleHighlight}</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-pretty">{locationContent.subtitle}</p>

            {/* Contact info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/30">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Dirección</h3>
                  <p className="text-gray-600">{content.site.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Teléfono</h3>
                  <p className="text-gray-600">{content.site.phone}</p>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold shadow-lg shadow-cyan-500/30"
              >
                <a
                  href={content.site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Navigation className="w-5 h-5" />
                  {locationContent.cta}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-cyan-300 text-cyan-700 hover:bg-cyan-50 bg-transparent"
              >
                <a
                  href={`https://wa.me/${content.site.whatsapp}?text=Hola,%20necesito%20indicaciones%20para%20llegar`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Pedir Indicaciones
                </a>
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="location-map relative">
            <div
              className="relative rounded-2xl shadow-2xl"
              style={{ clipPath: "inset(0 round 1rem)" }}
            >
              {/* Map iframe */}
              <div className="aspect-[4/3] bg-gray-100">
                <iframe
                  src={content.site.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Ubicación de ${content.site.name}`}
                />
              </div>

              {/* Glass overlay card */}
              <div className="absolute bottom-4 left-4 right-4 glass-dark p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{content.site.name}</h4>
                    <p className="text-sm text-cyan-100">{content.site.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
