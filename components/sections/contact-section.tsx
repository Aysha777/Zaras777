import { Mail, MapPin, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";

export function ContactSection() {
  return (
    <section className="section-spacing">
      <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-brand-navy p-8 text-white shadow-luxury">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-gold">
            Contact details
          </p>
          <h2 className="mt-4 font-display text-4xl">Speak with our textile specialists.</h2>
          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 text-brand-gold" />
              <span>{siteConfig.address}</span>
            </div>
            <div className="flex gap-4">
              <Phone className="h-5 w-5 text-brand-gold" />
              <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
            </div>
            <div className="flex gap-4">
              <Mail className="h-5 w-5 text-brand-gold" />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>
          </div>
          <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-brand-gold">Map</p>
            <div className="relative mt-4 h-64 overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-900/40">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(184,134,11,0.25),transparent_25%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_45%),linear-gradient(0deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:auto,auto,32px_32px,32px_32px]" />
              <div className="absolute left-[52%] top-[45%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <div className="h-5 w-5 rounded-full bg-brand-gold ring-8 ring-brand-gold/20" />
                <div className="mt-4 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy">
                  Mushrif Mall, Abu Dhabi
                </div>
              </div>
            </div>
          </div>
        </div>

        <form className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-gold">
            Send an inquiry
          </p>
          <h2 className="mt-4 font-display text-4xl text-brand-navy">
            Tell us about your sourcing needs.
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-700">
              Name
              <input className="mt-2 h-12 w-full rounded-2xl border border-slate-200 px-4 outline-none focus:border-brand-gold" type="text" />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Company
              <input className="mt-2 h-12 w-full rounded-2xl border border-slate-200 px-4 outline-none focus:border-brand-gold" type="text" />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Email
              <input className="mt-2 h-12 w-full rounded-2xl border border-slate-200 px-4 outline-none focus:border-brand-gold" type="email" />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Phone
              <input className="mt-2 h-12 w-full rounded-2xl border border-slate-200 px-4 outline-none focus:border-brand-gold" type="tel" />
            </label>
            <label className="text-sm font-medium text-slate-700 sm:col-span-2">
              Fabric Interest
              <input className="mt-2 h-12 w-full rounded-2xl border border-slate-200 px-4 outline-none focus:border-brand-gold" type="text" />
            </label>
            <label className="text-sm font-medium text-slate-700 sm:col-span-2">
              Message
              <textarea className="mt-2 min-h-40 w-full rounded-[1.5rem] border border-slate-200 px-4 py-3 outline-none focus:border-brand-gold" />
            </label>
          </div>
          <button
            type="submit"
            className="mt-8 rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
