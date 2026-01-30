"use client";

import { useEffect, useState } from "react";
import { Home, Grid3x3, Clock, MapPin } from "lucide-react";

const navItems = [
  { href: "#inicio", label: "Inicio", icon: Home },
  { href: "#servicios", label: "Servicios", icon: Grid3x3 },
  { href: "#horarios", label: "Horarios", icon: Clock },
  { href: "#ubicacion", label: "Ubicación", icon: MapPin },
];

export function MobileNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar después de pasar el hero (cuando servicios está visible)
      const serviciosElement = document.getElementById("servicios");
      if (serviciosElement) {
        const rect = serviciosElement.getBoundingClientRect();
        // Aparece cuando servicios está a punto de entrar en viewport
        setIsVisible(rect.top < window.innerHeight);
      }

      // Detectar sección activa
      const sections = navItems.map((item) => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="bg-gray-900/95 backdrop-blur-lg border-t border-white/10 shadow-2xl">
        <div className="flex justify-around items-center px-2 py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.substring(1);
            return (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 min-w-0 flex-1 ${
                  isActive ? "text-cyan-400 bg-cyan-900/30" : "text-gray-300 active:bg-white/10"
                }`}
                aria-label={`Navegar a ${item.label}`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "scale-110" : ""}`} />
                <span className="text-[10px] font-medium truncate w-full text-center">
                  {item.label}
                </span>
              </button>
            );
          })}

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/595987157138?text=Hola,%20quiero%20hacer%20una%20reserva"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg bg-green-600 text-white active:bg-green-700 transition-all duration-200 min-w-0 flex-1"
            aria-label="Contactar por WhatsApp"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="text-[10px] font-medium">Chat</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
