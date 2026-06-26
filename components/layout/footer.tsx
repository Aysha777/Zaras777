import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { categories, navLinks } from "@/data/site-content";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-200">
      <div className="container-shell grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl text-white">ZARAS</p>
          <p className="mt-4 max-w-sm leading-7 text-slate-300">
            Premium textile sourcing in Abu Dhabi for wholesale buyers, fashion
            designers, garment manufacturers, and boutique retailers.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3">
            {navLinks.slice(0, 6).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Categories
          </h3>
          <ul className="mt-5 space-y-3">
            {categories.map((category) => (
              <li key={category.slug}>{category.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 text-brand-gold" />
              <span>{siteConfig.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 text-brand-gold" />
              <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 text-brand-gold" />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
          </ul>
          <div className="mt-6 flex gap-4">
            <a href="https://instagram.com" aria-label="Instagram" className="rounded-full border border-white/20 p-2 hover:bg-white/10">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className="rounded-full border border-white/20 p-2 hover:bg-white/10">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="rounded-full border border-white/20 p-2 hover:bg-white/10">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-3 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ZARAS Premium Textiles. All rights reserved.</p>
          <p>Abu Dhabi, United Arab Emirates</p>
        </div>
      </div>
    </footer>
  );
}
