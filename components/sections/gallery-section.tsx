import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryImages } from "@/data/site-content";

export function GallerySection() {
  return (
    <section className="section-spacing">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Gallery"
          title="A closer look at texture, drape, and luxury finish."
          description="A curated visual library of premium textiles across abaya, nida, silk, chiffon, and more."
          align="center"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <Reveal key={image} delay={index * 0.05}>
              <div className="group overflow-hidden rounded-[1.75rem]">
                <Image
                  src={image}
                  alt={`Premium textile gallery sample ${index + 1}`}
                  width={640}
                  height={760}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
