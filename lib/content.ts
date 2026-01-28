import siteData from "@/content/site.json";
import type { SiteConfig } from "@/types/content";

/**
 * Obtiene la configuración del sitio desde el JSON
 * En el futuro, esto puede ser reemplazado por una llamada a Supabase
 */
export function getSiteConfig(): SiteConfig {
  return siteData as SiteConfig;
}

/**
 * Obtiene un servicio específico por slug
 */
export function getServiceBySlug(slug: string) {
  const config = getSiteConfig();
  return config.services.find((service) => service.slug === slug);
}

/**
 * Obtiene servicios destacados
 */
export function getFeaturedServices() {
  const config = getSiteConfig();
  return config.services.filter((service) => service.featured);
}

/**
 * Genera el enlace de WhatsApp con mensaje personalizado
 */
export function getWhatsAppLink(message?: string): string {
  const config = getSiteConfig();
  const defaultMessage = `Hola ${config.site.name}, quiero hacer una consulta`;
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${config.site.whatsapp}?text=${encodedMessage}`;
}

/**
 * Obtiene FAQs por categoría
 */
export function getFAQsByCategory(category?: string) {
  const config = getSiteConfig();
  if (!category) return config.faq;
  return config.faq.filter((faq) => faq.category === category);
}
