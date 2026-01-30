import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { generateSEOMetadata, generateLocalBusinessSchema } from "@/lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = generateSEOMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = generateLocalBusinessSchema();

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="manifest" href="/images/site.webmanifest" />

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className={`${poppins.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
