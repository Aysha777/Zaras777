import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { ContactCta } from "@/components/sections/contact-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { products } from "@/data/site-content";
import { createMetadata, siteConfig } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return createMetadata("Product Not Found", "Requested product could not be found.", "/products");
  }

  return createMetadata(
    product.name,
    product.shortDescription,
    `/products/${product.slug}`
  );
}

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Products", url: `${siteConfig.url}/products` },
          { name: product.name, url: `${siteConfig.url}/products/${product.slug}` }
        ])}
      />
      <PageHero
        eyebrow={product.category}
        title={product.name}
        description={product.description}
      />
      <section className="section-spacing">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-luxury">
            <Image
              src={product.image}
              alt={product.name}
              width={900}
              height={900}
              className="rounded-[1.5rem] object-cover"
            />
          </div>
          <div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="font-display text-4xl text-brand-navy">Product overview</h2>
              <p className="mt-5 leading-8 text-slate-600">{product.description}</p>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200 bg-brand-soft p-8">
                <h3 className="font-display text-3xl text-brand-navy">Features</h3>
                <ul className="mt-5 space-y-3 text-slate-600">
                  {product.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-brand-soft p-8">
                <h3 className="font-display text-3xl text-brand-navy">Applications</h3>
                <ul className="mt-5 space-y-3 text-slate-600">
                  {product.applications.map((application) => (
                    <li key={application}>• {application}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactCta />
    </>
  );
}
