import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khuvo - Smart Cleaning & Maintenance Services for Modern India",
  description: "Elite Solar Panel Cleaning, Water Tank Cleaning, and Doorstep Vehicle Wash services in Kanpur, Lucknow, and Unnao. Eco-safe, tech-enabled, and premium maintenance packages.",
  keywords: [
    "solar panel cleaning near me",
    "water tank cleaning",
    "doorstep car wash",
    "bike wash service",
    "solar maintenance India",
    "Khuvo cleaning",
    "Kanpur cleaning startup",
    "Lucknow solar cleaning",
    "Unnao home cleaning services"
  ],
  authors: [{ name: "Khuvo Tech Team" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://khuvo.in",
    title: "Khuvo | Smart Cleaning Services for Modern India",
    description: "Premium Solar, Tank, and Doorstep Vehicle cleaning services with real-time digital reports and expert care.",
    siteName: "Khuvo",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1220",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Khuvo",
    "alternateName": "Khuvo Cleaning & Maintenance",
    "description": "Tech-enabled, premium solar panel cleaning, water tank sanitization, and doorstep foam washing services in India.",
    "url": "https://khuvo.in",
    "logo": "https://khuvo.in/logo.png",
    "telephone": "+919999999999",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kanpur",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.4499",
      "longitude": "80.3319"
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Kanpur"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Lucknow"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Unnao"
      }
    ],
    "sameAs": [
      "https://facebook.com/khuvo.in",
      "https://instagram.com/khuvo.in",
      "https://linkedin.com/company/khuvo"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="antialiased bg-khuvo-navy text-white min-h-screen selection:bg-khuvo-cyan selection:text-khuvo-navy">
        {children}
      </body>
    </html>
  );
}
