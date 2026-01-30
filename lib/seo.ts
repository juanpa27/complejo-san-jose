import type { Metadata } from "next";
import { getSiteConfig } from "@/lib/content";

/**
 * Genera metadata SEO para páginas
 */
export function generateSEOMetadata(overrides?: Partial<Metadata>): Metadata {
  const config = getSiteConfig();
  const { seo, site } = config;
  const baseUrl =
    process.env.NEXT_PUBLIC_PRODUCTION_URL || process.env.NEXT_PUBLIC_SITE_URL || site.url;

  const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: site.name }],
    creator: site.name,
    publisher: site.name,
    alternates: {
      canonical: "/",
    },
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
      url: baseUrl,
      title: seo.title,
      description: seo.description,
      siteName: site.name,
      images: [
        {
          url: `${baseUrl}${seo.ogImage}`,
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
      images: [`${baseUrl}${seo.ogImage}`],
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
  const baseUrl =
    process.env.NEXT_PUBLIC_PRODUCTION_URL || process.env.NEXT_PUBLIC_SITE_URL || site.url;

  return {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "@id": `${baseUrl}#organization`,
    name: site.name,
    description: config.seo.description,
    image: `${baseUrl}${config.seo.ogImage}`,
    url: baseUrl,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressCountry: "PY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: site.mapsUrl,
    openingHours: [hours.weekdays, hours.weekend],
    priceRange: "$$",
    sameAs: Object.values(site.social).filter(Boolean),
  };
}
