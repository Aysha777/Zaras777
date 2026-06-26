"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/data/site-content";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="section-spacing">
      <div className="container-shell">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers for buyers, designers, and manufacturers."
          description="A few common questions about premium fabric sourcing, wholesale supply, and product suitability."
          align="center"
        />
        <div className="mx-auto mt-14 max-w-4xl space-y-4">
          {faqs.map((item, index) => {
            const isOpen = active === index;

            return (
              <article key={item.question} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() => setActive(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-2xl text-brand-navy">{item.question}</span>
                  <ChevronDown
                    className={cn("h-5 w-5 shrink-0 transition", isOpen && "rotate-180")}
                  />
                </button>
                {isOpen ? <p className="mt-4 leading-7 text-slate-600">{item.answer}</p> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
