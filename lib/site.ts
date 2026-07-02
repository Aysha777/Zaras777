import type { Metadata } from "next";

export const siteConfig = {
  name: "ZARAS Premium Textiles",
  shortName: "ZARAS",
  description:
    "Premium textile supplier in Abu Dhabi offering luxury abaya fabrics, nida, chiffon, cotton, linen, silk, crepe, and jersey for wholesale and retail clients.",
  url: "https://www.zaraspremiumtextiles.com",
  ogImage: "/images/og-cover.svg",
  locale: "en_AE",
  phone: "+971 054 402 7883",
  phoneHref: "+971544027883",
  email: "sales@zaraspremiumtextiles.com",
  address: "Shop No: 231, Second Floor,Mushrif Mall, Abu Dhabi, United Arab Emirates",
  whatsapp: "971544027883"
};

export function createMetadata(
  title: string,
  description: string,
  pathname = ""
): Metadata {
  const fullTitle = `${title} | ${siteConfig.shortName}`;
  const url = `${siteConfig.url}${pathname}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: pathname || "/"
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.ogImage]
    }
  };
}
