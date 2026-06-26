import { siteConfig } from "@/lib/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icons/logo-mark.svg`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "sales",
        areaServed: "AE",
        availableLanguage: ["English", "Arabic"]
      }
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mussafah Industrial Area",
      addressLocality: "Abu Dhabi",
      addressCountry: "AE"
    },
    sameAs: [
      "https://www.instagram.com/",
      "https://www.linkedin.com/",
      "https://www.facebook.com/"
    ]
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}
