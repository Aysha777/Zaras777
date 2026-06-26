import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { products } from "@/data/site-content";

export function FeaturedProducts() {
  return (
    <section className="section-spacing">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Featured products"
          title="Printed fabric designs that reflect what you actually sell."
          description="A curated range of statement printed textiles for abayas, scarves, kaftans, boutique retail, and designer collections."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-luxury">
                <div className="overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={640}
                    height={520}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-gold">
                    {product.category}
                  </p>
                  <h3 className="mt-3 font-display text-3xl text-brand-navy">{product.name}</h3>
                  <p className="mt-3 flex-1 leading-7 text-slate-600">
                    {product.shortDescription}
                  </p>
                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-6 inline-flex rounded-full border border-brand-navy px-5 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-navy hover:text-white"
                  >
                    View Details
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
