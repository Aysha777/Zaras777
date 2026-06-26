import type { Metadata } from "next";

import { CategoriesSection } from "@/components/sections/categories-section";
import { ContactCta } from "@/components/sections/contact-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { createMetadata, siteConfig } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata(
  "Fabric Categories",
  "Explore premium abaya fabric, nida, chiffon, cotton, linen, and silk categories from ZARAS Premium Textiles.",
  "/categories"
);

export default function CategoriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Categories", url: `${siteConfig.url}/categories` }
        ])}
      />
      <PageHero
        eyebrow="Categories"
        title="Fabric categories selected for luxury, comfort, and performance."
        description="Browse our most sought-after textile categories, with extended sourcing support for crepe and jersey alongside our core premium range."
      />
      <CategoriesSection />
      <ContactCta />
    </>
  );
}
