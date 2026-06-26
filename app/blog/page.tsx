import type { Metadata } from "next";

import { ContactCta } from "@/components/sections/contact-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/ui/page-hero";
import { blogPosts } from "@/data/site-content";
import { createMetadata, siteConfig } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = createMetadata(
  "Textile Blog",
  "Read sourcing insights, fabric trends, and buying guidance from ZARAS Premium Textiles.",
  "/blog"
);

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Blog", url: `${siteConfig.url}/blog` }
        ])}
      />
      <PageHero
        eyebrow="Blog"
        title="Useful reads for premium textile buyers and fashion businesses."
        description="Explore articles covering wholesale buying, textile trends, and fabric selection strategy."
      />
      <section className="section-spacing">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm uppercase tracking-[0.28em] text-brand-gold">{post.category}</p>
              <h2 className="mt-4 font-display text-3xl text-brand-navy">{post.title}</h2>
              <p className="mt-4 leading-7 text-slate-600">{post.excerpt}</p>
              <p className="mt-5 text-sm text-slate-500">{post.date} • {post.readTime}</p>
            </article>
          ))}
        </div>
      </section>
      <ContactCta />
    </>
  );
}
