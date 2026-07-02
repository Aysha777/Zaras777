import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { categories } from "@/data/site-content";

export function CategoriesSection() {
  return (
    <section className="section-spacing bg-brand-soft">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Categories"
          title="Fabric stories shaped around the actual print and drape."
          description="A quick look at the fabric styles and print moods shown in the collection."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => (
            <Reveal key={category.slug} delay={index * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-luxury">
                <div className="overflow-hidden">
                  <Image
                    src={category.image}
                    alt={`${category.name} premium textile`}
                    width={640}
                    height={420}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-3xl text-brand-navy">{category.name}</h3>
                  <p className="mt-3 flex-1 leading-7 text-slate-600">{category.description}</p>
                  <Link
                    href="/categories"
                    className="mt-6 inline-flex text-sm font-semibold text-brand-gold"
                  >
                    View category overview
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
