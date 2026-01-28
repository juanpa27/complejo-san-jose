import type { Metadata } from "next";
import { getSiteConfig } from "@/lib/content";

/**
 * Genera metadata SEO para páginas
 */
export function generateSEOMetadata(overrides?: Partial<Metadata>): Metadata {
  const config = getSiteConfig();
  const { seo, site } = config;

  const metadata: Metadata = {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: site.name }],
    creator: site.name,
    publisher: site.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "es_PY",
      url: "/",
      title: seo.title,
      description: seo.description,
      siteName: site.name,
      images: [
        {
          url: seo.ogImage,
          width: 1200,
          height: 630,
          alt: `${site.name} - ${site.city}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage],
    },
    ...overrides,
  };

  return metadata;
}

/**
 * Genera el JSON-LD schema para LocalBusiness
 */
export function generateLocalBusinessSchema() {
  const config = getSiteConfig();
  const { site, hours } = config;

  return {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: site.name,
    description: config.seo.description,
    image: config.seo.ogImage,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressCountry: "PY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-25.5",
      longitude: "-56.0",
    },
    url: "/",
    openingHours: [hours.weekdays, hours.weekend],
    priceRange: "$$",
    sameAs: Object.values(site.social).filter(Boolean),
  };
}
