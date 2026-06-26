import type { Metadata } from "next";

import { ContactSection } from "@/components/sections/contact-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { createMetadata, siteConfig } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata(
  "Contact ZARAS Premium Textiles",
  "Contact our Abu Dhabi textile team for wholesale fabric inquiries, sample requests, and premium sourcing support.",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Contact", url: `${siteConfig.url}/contact` }
        ])}
      />
      <PageHero
        eyebrow="Contact"
        title="Connect with our Abu Dhabi textile team."
        description="We’re here to support fabric sourcing inquiries from wholesale buyers, designers, manufacturers, and retail clients."
      />
      <ContactSection />
      <NewsletterSection />
    </>
  );
}
