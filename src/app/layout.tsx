import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://divinedesignco.com";

export const metadata: Metadata = {
  title: {
    default: "Divine Design Co | MS Gulf Coast Wedding Photographer & Content Creator",
    template: "%s | Divine Design Co",
  },
  description:
    "Guided by God's divine love, Divine Design Co captures timeless wedding photography and real-time content on the MS Gulf Coast. Book Bailee for weddings, portraits, branding, and boat sessions in Ocean Springs, MS.",
  keywords: [
    "MS Gulf Coast wedding photographer",
    "Ocean Springs photographer",
    "Mississippi wedding photography",
    "wedding content creator",
    "Gulf Coast content creator",
    "branding photographer Mississippi",
    "engagement photographer",
    "boat session photography",
    "Ocean Springs MS photographer",
    "Biloxi wedding photographer",
    "Divine Design Company",
    "Bailee photographer",
  ],
  authors: [{ name: "Bailee", url: siteUrl }],
  creator: "Divine Design Co",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Divine Design Co",
    title: "Divine Design Co | MS Gulf Coast Wedding Photographer & Content Creator",
    description: "Capturing moments that reflect purpose, beauty, and the story He has written for you.",
    images: [{ url: `${siteUrl}/images/hero.jpg`, width: 1500, height: 1000, alt: "Divine Design Co" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divine Design Co | MS Gulf Coast Wedding Photographer",
    description: "Timeless wedding photography and real-time content creation on the MS Gulf Coast.",
    images: [`${siteUrl}/images/hero.jpg`],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
