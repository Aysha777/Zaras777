import Link from "next/link";

import { Breadcrumbs } from "@/components/seo/breadcrumbs";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-brand-soft py-24">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="container-shell relative">
        <Breadcrumbs />
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-brand-gold">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight text-brand-navy sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Speak with our team
          </Link>
        </div>
      </div>
    </section>
  );
}
