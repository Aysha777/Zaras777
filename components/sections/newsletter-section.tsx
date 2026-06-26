export function NewsletterSection() {
  return (
    <section className="section-spacing bg-brand-soft">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-gold">
            Newsletter
          </p>
          <h2 className="mt-4 font-display text-4xl text-brand-navy sm:text-5xl">
            Receive insights on luxury fabrics and sourcing trends.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Join our mailing list for textile updates, collection highlights, and wholesale sourcing advice.
          </p>
          <form className="mt-8 flex flex-col gap-4 sm:flex-row">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email address"
              className="h-14 flex-1 rounded-full border border-slate-200 px-5 outline-none transition focus:border-brand-gold"
            />
            <button
              type="submit"
              className="h-14 rounded-full bg-brand-navy px-6 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
