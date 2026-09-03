import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileContactBar from "@/components/MobileContactBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://prestigeplumbingheating.co.uk"
  ),
  title: "Prestige Plumbing Heating Ltd | Plumber in Penicuik & Edinburgh",
  description:
    "Local plumbing, heating, repair and bathroom services across Penicuik, Edinburgh and surrounding areas. Call or WhatsApp Prestige Plumbing Heating Ltd.",
  openGraph: {
    title: "Prestige Plumbing Heating Ltd | Plumber in Penicuik & Edinburgh",
    description:
      "Local plumbing, heating, repair and bathroom services across Penicuik, Edinburgh and surrounding areas. Call or WhatsApp Prestige Plumbing Heating Ltd.",
    type: "website",
    locale: "en_GB",
    siteName: site.name,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: site.name,
  slogan: site.tagline,
  telephone: "+447761845314",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Penicuik",
    addressRegion: "Midlothian",
    addressCountry: "GB",
  },
  areaServed: [
    { "@type": "City", name: "Penicuik" },
    { "@type": "City", name: "Edinburgh" },
    { "@type": "Place", name: "Midlothian" },
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://prestigeplumbingheating.co.uk",
  sameAs: [
    site.socials.instagram,
    site.socials.facebook,
    site.socials.yell,
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="flex min-h-screen flex-col bg-paper text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileContactBar />
      </body>
    </html>
  );
}
