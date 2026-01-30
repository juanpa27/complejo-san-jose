"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react";
import { getContent } from "@/lib/content";

const quickLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#horarios", label: "Horarios" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  const content = getContent();
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Water wave at top */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="fill-gray-50"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-14 h-14">
                <Image
                  src="/images/logo.webp"
                  alt={content.site.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">{content.site.name.split(" ")[1]}</h3>
                <p className="text-xs uppercase tracking-widest text-cyan-400">
                  Complejo Deportivo
                </p>
              </div>
            </Link>
            <p className="text-gray-400 mb-6">{content.content.hero.tagline}</p>
            {/* Social links */}
            <div className="flex gap-3">
              {content.site.social.facebook && (
                <a
                  href={content.site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {content.site.social.instagram && (
                <a
                  href={content.site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-lg flex items-center justify-center transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Servicios</h4>
            <ul className="space-y-3">
              {content.services.map((service) => (
                <li key={service.slug}>
                  <span className="text-gray-400">{service.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">{content.site.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">{content.site.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>{content.hours.weekdays}</p>
                  <p>{content.hours.weekend}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; 2026 {content.site.name}. Todos los derechos reservados.
            </p>
            <a
              href={`https://wa.me/${content.site.whatsapp}?text=Hola,%20quiero%20hacer%20una%20reserva`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-6 py-3 rounded-full transition-all hover:scale-105 shadow-lg shadow-green-500/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Reservar Ahora
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
