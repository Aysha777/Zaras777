"use client";

import { useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { products } from "@/data/site-content";

export function FeaturedProducts() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeProduct = products[activeIndex];

  const selectProduct = (index: number) => {
    setActiveIndex(index);
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  };

  const showPrevious = () => {
    selectProduct((activeIndex - 1 + products.length) % products.length);
  };

  const showNext = () => {
    selectProduct((activeIndex + 1) % products.length);
  };

  return (
    <section className="section-spacing overflow-hidden bg-[linear-gradient(180deg,#fff7ef_0%,#fffdf9_48%,#f6f1ea_100%)]">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Featured products"
          title="Printed fabrics you can explore like a collection board."
          description="Browse the standout prints, switch between moods, and highlight the pieces that best fit abaya, scarf, boutique, and occasionwear lines."
        />

        <div className="mt-14 grid gap-6 lg:gap-8 xl:grid-cols-[1.1fr_0.9fr] xl:items-stretch">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-[2rem] border border-brand-gold/20 bg-slate-950 text-white shadow-luxury">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.26),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_34%)]" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid gap-6 p-5 sm:gap-8 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center xl:min-h-[38rem]"
                >
                  <div className="relative overflow-hidden rounded-[1.75rem] bg-white/10">
                    <Image
                      src={activeProduct.image}
                      alt={activeProduct.name}
                      width={900}
                      height={1100}
                      className="h-72 w-full object-cover sm:h-[28rem] lg:h-[34rem]"
                      priority={activeIndex === 0}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-gold">
                        {activeProduct.category}
                      </p>
                    </div>
                  </div>

                  <div className="relative flex h-full flex-col">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70 sm:text-xs sm:tracking-[0.28em]">
                        Selected Design
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={showPrevious}
                          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white hover:text-slate-950"
                          aria-label="Show previous product"
                        >
                          <ArrowLeft className="h-4 w-4" />
                        </button>
                        <button
                          type="button"
                          onClick={showNext}
                          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-brand-gold text-slate-950 transition hover:brightness-110"
                          aria-label="Show next product"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    <h3 className="mt-6 font-display text-3xl leading-tight sm:text-5xl">
                      {activeProduct.name}
                    </h3>
                    <p className="mt-5 max-w-xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
                      {activeProduct.shortDescription}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {activeProduct.features.slice(0, 4).map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm text-white/88"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      {activeProduct.applications.slice(0, 2).map((application) => (
                        <div
                          key={application}
                          className="rounded-[1.25rem] border border-white/10 bg-white/8 p-4"
                        >
                          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
                            Ideal for
                          </p>
                          <p className="mt-2 text-base text-white/88">{application}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-col gap-4 pt-8 sm:flex-row">
                      <Link
                        href={`/products/${activeProduct.slug}`}
                        className="inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:translate-y-[-2px] hover:brightness-110"
                      >
                        View Product Details
                      </Link>
                      <Link
                        href="/products"
                        className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950"
                      >
                        Browse All Designs
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full">
              <div className="flex items-stretch snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:grid xl:h-full xl:grid-rows-4 xl:overflow-hidden xl:pb-0">
                {products.map((product, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <motion.button
                      key={product.slug}
                      ref={(node) => {
                        cardRefs.current[index] = node;
                      }}
                      type="button"
                      onClick={() => selectProduct(index)}
                      whileHover={{ y: -4 }}
                      className={`flex min-h-[18rem] w-[85vw] max-w-sm snap-center rounded-[1.75rem] border text-left transition sm:min-h-[20rem] sm:min-w-[18rem] sm:w-auto xl:h-full xl:min-h-0 xl:min-w-0 xl:max-w-none ${
                        isActive
                          ? "border-brand-gold bg-white shadow-luxury"
                          : "border-slate-200 bg-white/80 shadow-sm hover:border-brand-gold/50"
                      }`}
                      aria-pressed={isActive}
                    >
                      <div className="grid h-full w-full gap-4 p-4 sm:grid-cols-[7rem_1fr] xl:grid-cols-[5.5rem_1fr]">
                        <div className="overflow-hidden rounded-[1.25rem]">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={320}
                            height={360}
                            className="h-36 w-full object-cover sm:h-full"
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-gold">
                            {product.category}
                          </p>
                          <h3 className="mt-3 font-display text-xl leading-tight text-brand-navy sm:text-2xl xl:text-xl">
                            {product.name}
                          </h3>
                          <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 xl:text-[0.92rem] xl:leading-5">
                            {product.shortDescription}
                          </p>
                          <div className="mt-4 flex items-center justify-between">
                            <span className="text-sm font-semibold text-brand-navy xl:text-[0.92rem]">
                              {product.applications[0]}
                            </span>
                            <span
                              className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${
                                isActive
                                  ? "bg-brand-gold text-slate-950"
                                  : "bg-brand-soft text-brand-navy"
                              }`}
                            >
                              <ArrowRight className="h-4 w-4" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
