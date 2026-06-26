"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="container-shell relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-gold">
            Abu Dhabi, UAE
          </p>
          <h1 className="mt-6 font-display text-5xl leading-tight text-brand-navy sm:text-6xl lg:text-7xl">
            Premium Textile Supplier in Abu Dhabi
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Luxury abaya fabrics, premium nida, chiffon, cotton, linen, silk,
            crepe, and jersey for wholesale buyers, designers, garment
            manufacturers, boutiques, and discerning retail customers.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-2px] hover:brightness-110"
            >
              Explore Collection
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-brand-gold/30 bg-white px-6 py-3 text-sm font-semibold text-brand-navy transition hover:border-brand-gold hover:text-brand-gold"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -left-6 top-8 hidden h-24 w-24 rounded-full border border-brand-gold/30 bg-brand-gold/10 lg:block" />
          <div className="absolute -right-6 bottom-10 hidden h-32 w-32 rounded-full bg-brand-navy/10 lg:block" />
          <div className="gold-ring relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-luxury">
            <Image
              src="/images/hero-luxury-textile.svg"
              alt="Luxury premium textile display in Abu Dhabi showroom"
              width={760}
              height={900}
              className="h-full w-full rounded-[1.5rem] object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
