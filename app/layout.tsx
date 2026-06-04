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

const siteUrl = "https://l-tag.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "L-TAG — Imported Fashion. Wholesale Excellence.",
    template: "%s · L-TAG",
  },
  description:
    "Premium apparel sourcing and wholesale distribution for retailers, boutiques, and fashion businesses worldwide. L-TAG is your trusted international garment import partner.",
  keywords: [
    "garment wholesale",
    "fashion import",
    "apparel sourcing",
    "wholesale clothing",
    "B2B fashion distribution",
    "retail-ready collections",
    "L-TAG",
  ],
  authors: [{ name: "L-TAG" }],
  creator: "L-TAG",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "L-TAG",
    title: "L-TAG — Imported Fashion. Wholesale Excellence.",
    description:
      "Premium apparel sourcing and wholesale distribution for retailers, boutiques, and fashion businesses worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "L-TAG — Imported Fashion. Wholesale Excellence.",
    description:
      "Premium apparel sourcing and wholesale distribution for retailers, boutiques, and fashion businesses worldwide.",
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
    name: "L-TAG",
    url: siteUrl,
    description:
      "Premium international garment sourcing and wholesale distribution for retailers, boutiques, and fashion businesses worldwide.",
    slogan: "Imported Fashion. Wholesale Excellence.",
    areaServed: "Worldwide",
    knowsAbout: [
      "Garment import",
      "Apparel wholesale",
      "Fashion sourcing",
      "Retail distribution",
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
