import type { Metadata } from "next";

import { ContactCta } from "@/components/sections/contact-cta";
import { FaqSection } from "@/components/sections/faq-section";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { createMetadata, siteConfig } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata(
  "Frequently Asked Questions",
  "Find answers to common questions about wholesale textile supply, premium fabrics, and sourcing from ZARAS Premium Textiles.",
  "/faq"
);

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "FAQ", url: `${siteConfig.url}/faq` }
        ])}
      />
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions about premium textile sourcing."
        description="Helpful answers around product categories, sample requests, wholesale supply, and international support."
      />
      <FaqSection />
      <ContactCta />
    </>
  );
}
