import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ContactCta } from "@/components/sections/contact-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { products } from "@/data/site-content";
import { createMetadata, siteConfig } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata(
  "Premium Fabric Products",
  "Browse printed abaya fabrics, printed nida, chiffon, cotton, silk, and more from ZARAS Premium Textiles in Abu Dhabi.",
  "/products"
);

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Products", url: `${siteConfig.url}/products` }
        ])}
      />
      <PageHero
        eyebrow="Products"
        title="Printed textile selections crafted for boutiques, designers, and wholesale buyers."
        description="Discover statement fabric designs inspired by the kind of blue-and-ivory printed textiles you sell."
      />
      <section className="section-spacing">
        <div className="container-shell grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <article key={product.slug} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
              <Image
                src={product.image}
                alt={product.name}
                width={640}
                height={520}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-brand-gold">{product.category}</p>
                <h2 className="mt-3 font-display text-3xl text-brand-navy">{product.name}</h2>
                <p className="mt-3 leading-7 text-slate-600">{product.shortDescription}</p>
                <Link
                  href={`/products/${product.slug}`}
                  className="mt-6 inline-flex rounded-full bg-brand-navy px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <ContactCta />
    </>
  );
}
