import Link from "next/link";

export function ContactCta() {
  return (
    <section className="section-spacing">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[2rem] bg-brand-navy px-8 py-12 text-white shadow-luxury sm:px-12 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-gold">
              Ready to source
            </p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">
              Let’s build your next premium textile order with confidence.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Connect with our Abu Dhabi team for wholesale inquiries, sample requests, and tailored sourcing support.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy transition hover:brightness-110"
            >
              Start an Inquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
