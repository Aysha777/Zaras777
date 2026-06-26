import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-spacing">
      <div className="container-shell text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-gold">
          404
        </p>
        <h1 className="mt-4 font-display text-5xl text-brand-navy sm:text-6xl">
          The page you’re looking for could not be found.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Return to the ZARAS homepage to continue exploring premium textile collections.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
