// Tipos para el contenido del sitio
export interface SiteConfig {
  site: SiteInfo;
  hours: Hours;
  benefits: string[];
  services: Service[];
  promos: Promo[];
  faq: FAQ[];
  seo: SEOMetadata;
}

export interface SiteInfo {
  name: string;
  city: string;
  phone: string;
  whatsapp: string;
  mapsUrl: string;
  mapsEmbedUrl: string;
  address: string;
  social: {
    facebook?: string;
    instagram?: string;
  };
}

export interface Hours {
  weekdays: string;
  weekend: string;
  special?: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  bullets: string[];
  priceText: string;
  ctaMessage: string;
  gallery: string[];
  featured?: boolean;
}

export interface Promo {
  id: string;
  title: string;
  description: string;
  discount?: string;
  validUntil?: string;
  terms?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
}
