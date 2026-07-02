import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section className="section-spacing">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/images/image_eb3fa4ef (1).png"
              alt="Premium textile showroom with curated luxury fabric rolls"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-center scale-[1.06]"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="About us"
            title="Curated textile sourcing shaped by Gulf fashion standards."
            description="ZARAS Premium Textiles was built to serve buyers who need elevated fabrics, steady supply, and thoughtful service. From abaya fabrics and nida to chiffon, silk, crepe, jersey, linen, and cotton, we bring together premium quality and reliable delivery."
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="font-display text-2xl text-brand-navy">Mission</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Supply fabrics that help clients create garments with elegance, confidence, and consistency.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="font-display text-2xl text-brand-navy">Vision</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Become the region’s trusted premium textile partner for design-led and large-scale buyers alike.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="font-display text-2xl text-brand-navy">Experience</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Over fifteen years of sourcing expertise across luxury modestwear, retail, and manufacturing.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
