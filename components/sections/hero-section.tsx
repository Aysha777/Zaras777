"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/image%20copy%204.png"
          alt="Premium textile hero background"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-slate-950/45" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/55 to-slate-950/20" />
      <div className="absolute inset-0 bg-hero-glow opacity-60" />
      <div className="container-shell relative flex min-h-[calc(100vh-5rem)] items-center py-16">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-gold">
            Boutique Textile Excellence
          </p>
          <h1 className="mt-6 font-display text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
            Elegance Woven Into Every Thread
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100/90">
            Luxury abaya fabrics, premium nida, chiffon, cotton, linen, silk,
            crepe, and jersey for wholesale buyers, designers, garment
            manufacturers, boutiques, and discerning retail customers.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition hover:translate-y-[-2px] hover:brightness-110"
            >
              Shop Collection
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-brand-gold hover:text-brand-gold"
            >
              Explore Catalog
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
