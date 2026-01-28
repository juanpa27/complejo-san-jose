import { getSiteConfig, getWhatsAppLink } from "@/lib/content";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function Home() {
  const config = getSiteConfig();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Section id="hero" background="sky" className="pt-8">
        <Container>
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-ink mb-4">
              {config.site.name}
            </h1>
            <p className="text-xl md:text-2xl text-ink/80 mb-2">{config.site.city}, Paraguay</p>
            <p className="text-lg md:text-xl text-ink/70 max-w-2xl mb-8">
              Pádel Indoor • Piscina • Fútbol • Vóley • Pesque y Pague • Quinchos
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.open(getWhatsAppLink(), "_blank")}
              >
                📱 Reservar por WhatsApp
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.open(config.site.mapsUrl, "_blank")}>
                📍 Cómo Llegar
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section id="servicios" background="white">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-ink mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.services.map((service) => (
              <div
                key={service.slug}
                className="bg-white border-2 border-gray rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-ink mb-3">{service.title}</h3>
                <p className="text-ink/70 mb-4">{service.description}</p>
                <p className="text-primary font-semibold mb-4">{service.priceText}</p>
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                  onClick={() => window.open(getWhatsAppLink(service.ctaMessage), "_blank")}
                >
                  Consultar
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section id="contacto" background="gray">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-ink mb-6">¿Listo para visitarnos?</h2>
            <p className="text-xl text-ink/70 mb-8">
              📞 {config.site.phone} | 📍 {config.site.city}
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open(getWhatsAppLink(), "_blank")}
            >
              Contactar por WhatsApp
            </Button>
          </div>
        </Container>
      </Section>

      {/* Footer */}
      <footer className="bg-ink text-white py-8">
        <Container>
          <div className="text-center">
            <p className="text-lg font-semibold mb-2">{config.site.name}</p>
            <p className="text-white/70 mb-4">{config.hours.weekdays}</p>
            <p className="text-white/70">{config.hours.weekend}</p>
            <p className="text-white/50 text-sm mt-6">
              © {new Date().getFullYear()} {config.site.name}. Todos los derechos reservados.
            </p>
          </div>
        </Container>
      </footer>
    </main>
  );
}
