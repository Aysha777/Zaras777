"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navLinks } from "@/data/site-content";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="gold-ring rounded-2xl bg-white p-2 shadow-sm">
            <Image
              src="/icons/logo-image.png"
              alt="ZARAS Premium Textiles logo"
              width={36}
              height={36}
              className="h-9 w-9"
            />
          </div>
          <div>
            <p className="font-display text-2xl text-brand-navy">ZARAS</p>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Textiles
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition hover:text-brand-gold",
                pathname === link.href ? "text-brand-gold" : "text-slate-700"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-700"
          >
            <Phone className="h-4 w-4 text-brand-gold" />
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-brand-navy px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Request Quote
          </Link>
        </div>

        <button
          type="button"
          className="rounded-full border border-slate-200 p-3 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-shell flex flex-col gap-2 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-medium",
                  pathname === link.href
                    ? "bg-brand-navy text-white"
                    : "text-slate-700 hover:bg-brand-soft"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
