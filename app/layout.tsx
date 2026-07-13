import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans, Fredoka } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { siteConfig } from "@/menu/siteConfig";
import WhatsAppButton from "@/components/WhatsAppButton";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "700", "800"],
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const tag = Fredoka({
  subsets: ["latin"],
  variable: "--font-tag",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.url),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: siteConfig.seo.url,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630 }],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    servesCuisine: ["Pizza", "Fast Food", "Pakistani", "Fried Chicken"],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    telephone: siteConfig.phone,
    url: siteConfig.seo.url,
    image: siteConfig.seo.ogImage,
    priceRange: "Rs. 350 - Rs. 4400",
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  };

  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${tag.variable}`}>
      <body className="font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionConfig reducedMotion="user">
          {children}
          <WhatsAppButton floating />
        </MotionConfig>
      </body>
    </html>
  );
}
