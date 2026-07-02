import {
  BadgeCheck,
  CircleDollarSign,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck
} from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const features = [
  { title: "Premium Quality", icon: Sparkles, text: "Luxury-grade fabrics selected for finish, drape, and consistency." },
  { title: "Wholesale Supply", icon: PackageCheck, text: "Reliable quantities for buyers, manufacturers, and resellers." },
  { title: "Competitive Pricing", icon: CircleDollarSign, text: "Strong value across premium fabric categories and order sizes." },
  { title: "Fast Delivery", icon: Truck, text: "Efficient fulfillment from Abu Dhabi to regional and global clients." },
  { title: "Customer Satisfaction", icon: BadgeCheck, text: "Responsive support from inquiry through order completion." },
  { title: "Trusted Textile Partner", icon: ShieldCheck, text: "A sourcing relationship built on transparency and dependability." }
];

export function WhyChooseUs() {
  return (
    <section className="section-spacing bg-brand-navy text-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Why choose us"
          title="A premium sourcing experience designed for serious buyers."
          description="We blend luxury fabric curation with responsive service and dependable supply operations."
          theme="dark"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.06}>
              <article className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-7">
                <feature.icon className="h-10 w-10 text-brand-gold" />
                <h3 className="mt-6 font-display text-2xl sm:text-3xl">{feature.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-slate-300">{feature.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
