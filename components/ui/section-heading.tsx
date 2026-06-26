interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light"
}: SectionHeadingProps) {
  const titleClass = theme === "dark" ? "text-white" : "text-brand-navy";
  const descriptionClass = theme === "dark" ? "text-slate-300" : "text-slate-600";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-brand-gold">
        {eyebrow}
      </p>
      <h2 className={`font-display text-4xl leading-tight sm:text-5xl ${titleClass}`}>
        {title}
      </h2>
      <p className={`mt-5 text-lg leading-8 ${descriptionClass}`}>{description}</p>
    </div>
  );
}
