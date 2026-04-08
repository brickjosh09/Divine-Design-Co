import { socialLinks, businessInfo } from "@/config/social";

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Photographer", "ProfessionalService"],
        "@id": `${businessInfo.siteUrl}/#business`,
        name: businessInfo.legalName,
        alternateName: businessInfo.name,
        description: businessInfo.description,
        url: businessInfo.siteUrl,
        email: businessInfo.email,
        image: `${businessInfo.siteUrl}/images/hero.jpg`,
        logo: `${businessInfo.siteUrl}/images/hero.jpg`,
        address: {
          "@type": "PostalAddress",
          addressLocality: businessInfo.location.city,
          addressRegion: businessInfo.location.state,
          addressCountry: businessInfo.location.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 30.4113,
          longitude: -88.8278,
        },
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 30.4113,
            longitude: -88.8278,
          },
          geoRadius: "80000",
        },
        priceRange: "$200 - $3,000",
        sameAs: [
          socialLinks.instagram.url,
          socialLinks.tiktok.url,
          socialLinks.facebook.url,
          socialLinks.google.url,
          socialLinks.pixieset.url,
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Photography Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Wedding Photography",
                description: "Elegant, emotion-filled wedding photography on the MS Gulf Coast",
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                price: "1800",
                priceCurrency: "USD",
                minPrice: "1800",
                maxPrice: "3000",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Content Creation",
                description: "Real-time wedding content creation for social media",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Portrait & Branding Photography",
                description: "Professional portrait and branding photography sessions",
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                price: "200",
                priceCurrency: "USD",
                minPrice: "200",
                maxPrice: "300",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Boat Sessions",
                description: "Unique wooden boat photography sessions on the bayou in Ocean Springs, MS",
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                price: "225",
                priceCurrency: "USD",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${businessInfo.siteUrl}/#website`,
        url: businessInfo.siteUrl,
        name: businessInfo.name,
        description: businessInfo.description,
        publisher: { "@id": `${businessInfo.siteUrl}/#business` },
      },
      {
        "@type": "Person",
        "@id": `${businessInfo.siteUrl}/#founder`,
        name: businessInfo.founder,
        jobTitle: "Photographer & Content Creator",
        worksFor: { "@id": `${businessInfo.siteUrl}/#business` },
        sameAs: [socialLinks.instagram.url, socialLinks.tiktok.url],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
