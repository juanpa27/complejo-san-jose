// Tipos para el contenido del sitio
export interface SiteConfig {
  site: SiteInfo;
  hours: Hours;
  benefits: string[];
  services: Service[];
  promos: Promo[];
  faq: FAQ[];
  seo: SEOMetadata;
  content: ContentSections;
}

export interface SiteInfo {
  name: string;
  url: string;
  city: string;
  phone: string;
  whatsapp: string;
  email: string;
  mapsUrl: string;
  mapsEmbedUrl: string;
  address: string;
  geo: {
    latitude: string;
    longitude: string;
  };
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
  ctaMobile: string;
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

export interface ContentSections {
  hero: HeroContent;
  services: ServicesContent;
  benefits: BenefitsContent;
  hours: HoursContent;
  location: LocationContent;
  faq: FAQContent;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  location: string;
  tagline: string;
  features: string[];
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface ServicesContent {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
}

export interface BenefitsContent {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
}

export interface HoursContent {
  badge: string;
  title: string;
  subtitle: string;
}

export interface LocationContent {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  cta: string;
}

export interface FAQContent {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
}
