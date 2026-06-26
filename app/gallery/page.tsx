import type { Metadata } from "next";

import { ContactCta } from "@/components/sections/contact-cta";
import { GallerySection } from "@/components/sections/gallery-section";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { createMetadata, siteConfig } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata(
  "Textile Gallery",
  "View a curated textile gallery featuring premium abaya fabric, nida, silk, chiffon, and luxury finishes.",
  "/gallery"
);

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Gallery", url: `${siteConfig.url}/gallery` }
        ])}
      />
      <PageHero
        eyebrow="Gallery"
        title="Luxury textile visuals that highlight texture and drape."
        description="A responsive gallery showcasing the atmosphere and detail of our premium fabric collection."
      />
      <GallerySection />
      <ContactCta />
    </>
  );
}
