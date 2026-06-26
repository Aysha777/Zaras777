import type { Metadata } from "next";

import { AboutSection } from "@/components/sections/about-section";
import { ContactCta } from "@/components/sections/contact-cta";
import { StatisticsSection } from "@/components/sections/statistics-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { createMetadata, siteConfig } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata(
  "About ZARAS Premium Textiles",
  "Learn about ZARAS Premium Textiles, our mission, vision, and experience serving premium fabric buyers in Abu Dhabi and beyond.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "About", url: `${siteConfig.url}/about` }
        ])}
      />
      <PageHero
        eyebrow="About"
        title="A premium textile company built around elegance, service, and trust."
        description="We support textile buyers with curated fabric selection, professional sourcing guidance, and dependable supply from Abu Dhabi."
      />
      <AboutSection />
      <StatisticsSection />
      <WhyChooseUs />
      <ContactCta />
    </>
  );
}
