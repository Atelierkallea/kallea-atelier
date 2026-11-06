import { site } from "@/content/site";
import { serviceCategories } from "@/content/services";

/**
 * Fiche « institut de beauté » lisible par Google (données structurées schema.org).
 * Aucune adresse précise : seule la commune est indiquée.
 */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: site.name,
    description: site.description,
    url: site.url,
    image: `${site.url}/opengraph-image.jpg`,
    logo: `${site.url}/icon.png`,
    telephone: "+33783408719",
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      postalCode: site.postalCode,
      addressCountry: "FR",
    },
    areaServed: { "@type": "City", name: site.city },
    sameAs: [site.contact.instagramUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Prestations",
      itemListElement: serviceCategories.map((category) => ({
        "@type": "OfferCatalog",
        name: category.title,
        itemListElement: category.services.map((service) => ({
          "@type": "Offer",
          price: service.price,
          priceCurrency: "EUR",
          itemOffered: { "@type": "Service", name: service.name, description: service.description },
        })),
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      // Contenu généré par le site lui-même (pas de saisie extérieure)
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
