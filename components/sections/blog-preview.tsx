import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogPosts } from "@/data/site-content";

export function BlogPreview() {
  return (
    <section className="section-spacing bg-brand-soft">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Journal"
          title="Insights for fabric buyers and fashion-led brands."
          description="Short reads on sourcing strategy, textile trends, and selecting premium materials."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.06}>
              <article className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm uppercase tracking-[0.25em] text-brand-gold">{post.category}</p>
                <h3 className="mt-4 font-display text-3xl text-brand-navy">{post.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{post.excerpt}</p>
                <p className="mt-5 text-sm text-slate-500">{post.date} • {post.readTime}</p>
                <Link href="/blog" className="mt-6 inline-flex text-sm font-semibold text-brand-gold">
                  Read articles
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
