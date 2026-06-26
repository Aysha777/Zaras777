import { AboutSection } from "@/components/sections/about-section";
import { BlogPreview } from "@/components/sections/blog-preview";
import { CategoriesSection } from "@/components/sections/categories-section";
import { ContactCta } from "@/components/sections/contact-cta";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { StatisticsSection } from "@/components/sections/statistics-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CategoriesSection />
      <FeaturedProducts />
      <WhyChooseUs />
      <StatisticsSection />
      <TestimonialsSection />
      <GallerySection />
      <BlogPreview />
      <ContactCta />
      <NewsletterSection />
    </>
  );
}
