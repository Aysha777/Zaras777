import { Quote } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/data/site-content";

export function TestimonialsSection() {
  return (
    <section className="section-spacing bg-brand-soft">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by buyers who expect quality and consistency."
          description="Our clients rely on ZARAS for premium textile selection, responsive service, and dependable supply."
          align="center"
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08}>
              <article className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm">
                <Quote className="h-10 w-10 text-brand-gold" />
                <p className="mt-6 text-lg leading-8 text-slate-600">“{testimonial.quote}”</p>
                <div className="mt-8">
                  <p className="font-display text-2xl text-brand-navy">{testimonial.name}</p>
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                    {testimonial.company}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
