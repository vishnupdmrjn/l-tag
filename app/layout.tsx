import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = "https://ltagclothing.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LTAG — Imported Fashion. Wholesale Excellence.",
    template: "%s · LTAG",
  },
  description:
    "LTAG is a wholesale garment importer based in Manjeri, Malappuram, Kerala. Visit our showroom to experience premium imported apparel in person before placing your wholesale order — sourcing and distribution for retailers, boutiques, and fashion businesses.",
  keywords: [
    "garment wholesale",
    "wholesale clothing Kerala",
    "garment importer Malappuram",
    "fashion import India",
    "apparel sourcing",
    "B2B fashion distribution",
    "wholesale showroom Manjeri",
    "imported apparel wholesale",
    "LTAG",
  ],
  authors: [{ name: "LTAG" }],
  creator: "LTAG",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "LTAG",
    title: "LTAG — Imported Fashion. Wholesale Excellence.",
    description:
      "Wholesale garment importer in Manjeri, Malappuram, Kerala. Visit our showroom to experience premium imported apparel before placing your wholesale order.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LTAG — Imported Fashion. Wholesale Excellence.",
    description:
      "Wholesale garment importer in Manjeri, Malappuram, Kerala. Visit our showroom to experience premium imported apparel before placing your wholesale order.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LTAG",
    url: siteUrl,
    logo: `${siteUrl}/logo/ltag-logo.svg`,
    image: `${siteUrl}/opengraph-image`,
    description:
      "Wholesale garment importer based in Manjeri, Malappuram, Kerala. A showroom for wholesale buyers to experience premium imported apparel before placing an order.",
    slogan: "Imported Fashion",
    telephone: "+91-90610-40777",
    address: {
      "@type": "PostalAddress",
      streetAddress: "LTAG Showroom, Manjeri",
      addressLocality: "Malappuram",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    sameAs: ["https://instagram.com/ltag.clothing"],
    areaServed: "IN",
    knowsAbout: [
      "Garment import",
      "Apparel wholesale",
      "Fashion sourcing",
      "Wholesale distribution",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-ivory"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
