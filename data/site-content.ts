import type {
  BlogPost,
  Category,
  FaqItem,
  NavLink,
  Product,
  Statistic,
  Testimonial
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Categories", href: "/categories" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" }
];

export const categories: Category[] = [
  {
    name: "Printed Abaya Fabric",
    slug: "abaya-fabric",
    description: "Statement printed abaya fabrics with fluid drape, rich coverage, and fashion-forward surface design.",
    image: "/images/category-abaya-fabric.svg"
  },
  {
    name: "Printed Nida Fabric",
    slug: "nida-fabric",
    description: "Soft premium nida with bold print development for modern abayas, sets, and boutique modestwear.",
    image: "/images/category-nida-fabric.svg"
  },
  {
    name: "Printed Chiffon",
    slug: "chiffon",
    description: "Airy printed chiffon for scarves, layering, sleeves, and expressive designer collections.",
    image: "/images/category-chiffon.svg"
  },
  {
    name: "Printed Cotton",
    slug: "cotton",
    description: "Breathable printed cottons suited to fashion retail, coordinated sets, and ready-to-wear programs.",
    image: "/images/category-cotton.svg"
  },
  {
    name: "Printed Linen Blend",
    slug: "linen",
    description: "Textured linen blends carrying premium print stories with natural airflow and modern structure.",
    image: "/images/category-linen.svg"
  },
  {
    name: "Printed Silk",
    slug: "silk",
    description: "Lustrous silk bases developed for signature prints, couture pieces, and elevated statement garments.",
    image: "/images/category-silk.svg"
  }
];

export const products: Product[] = [
  {
    name: "Royal Blue Arabesque Nida",
    slug: "royal-blue-arabesque-nida",
    category: "Printed Nida Fabric",
    shortDescription: "Soft ivory nida carrying bold royal-blue arabesque print for statement abayas and coordinated sets.",
    description:
      "Royal Blue Arabesque Nida reflects the kind of printed product shown in your reference image: an ivory base with a strong blue ornamental motif and graceful drape. It is designed for premium abayas, flowing co-ord sets, and boutiques that want a distinctive visual identity on soft modestwear fabric.",
    image: "/images/image.png",
    features: ["Soft nida hand feel", "Bold ornamental print", "Elegant drape", "Ideal for premium abayas"],
    applications: ["Printed abayas", "Co-ord sets", "Boutique modestwear", "Designer capsules"]
  },
  {
    name: "Cobalt Vine Satin Silk",
    slug: "cobalt-vine-satin-silk",
    category: "Printed Silk",
    shortDescription: "Smooth satin silk with rich cobalt print for luxury kaftans, scarves, and statement dresses.",
    description:
      "Cobalt Vine Satin Silk combines a luminous satin surface with a bold large-scale print story. It is suitable for labels that need luxury impact in scarf lines, occasionwear, kaftans, and flowing dresses with standout movement.",
    image: "/images/image copy.png",
    features: ["Satin sheen", "Large-scale print impact", "Fluid movement", "Luxury finish"],
    applications: ["Kaftans", "Scarves", "Eventwear", "Statement dresses"]
  },
  {
    name: "Ivory Azure Printed Chiffon",
    slug: "ivory-azure-printed-chiffon",
    category: "Printed Chiffon",
    shortDescription: "Lightweight chiffon with airy blue print made for overlays, scarves, and occasion styling.",
    description:
      "Ivory Azure Printed Chiffon is created for customers looking for soft movement with a decorative print story. Its sheer, light structure makes it ideal for layering, premium scarves, sleeves, and occasionwear accents.",
    image: "/images/image copy 2.png",
    features: ["Featherlight feel", "Decorative print surface", "Graceful layering", "Soft transparency"],
    applications: ["Printed scarves", "Sleeves and overlays", "Layered abayas", "Occasionwear"]
  },
  {
    name: "Indigo Bloom Printed Cotton",
    slug: "indigo-bloom-printed-cotton",
    category: "Printed Cotton",
    shortDescription: "Breathable printed cotton with clean structure for fashion retail, tunics, and dailywear.",
    description:
      "Indigo Bloom Printed Cotton is a dependable everyday premium fabric with standout print appeal. It works well for brands that want breathable comfort while offering eye-catching tunics, dresses, and coordinated retail pieces.",
    image: "/images/image copy 3.png",
    features: ["Breathable comfort", "Clear print definition", "Easy to tailor", "Retail-friendly quality"],
    applications: ["Tunics", "Ready-to-wear sets", "Casual dresses", "Boutique retail"]
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Amal Rahman",
    company: "Rahman Couture Studio",
    quote:
      "ZARAS consistently delivers premium nida and abaya fabrics with quality our clients can feel immediately."
  },
  {
    name: "Yousef Al Mansoori",
    company: "Gulf Apparel Manufacturing",
    quote:
      "Their wholesale support is efficient, transparent, and reliable, especially for larger seasonal production runs."
  },
  {
    name: "Sara Ibrahim",
    company: "The Linen Boutique",
    quote:
      "The texture selection, color consistency, and service level make them one of our most trusted textile partners."
  }
];

export const statistics: Statistic[] = [
  { label: "Happy Clients", value: 500, suffix: "+" },
  { label: "Products", value: 1000, suffix: "+" },
  { label: "Countries Served", value: 20, suffix: "+" },
  { label: "Years Experience", value: 15, suffix: "+" }
];

export const faqs: FaqItem[] = [
  {
    question: "Do you supply fabrics in wholesale quantities?",
    answer:
      "Yes. We support wholesalers, fashion labels, garment manufacturers, and boutique buyers with scalable fabric supply across core and custom order volumes."
  },
  {
    question: "Which fabrics are best for premium abayas?",
    answer:
      "Our nida and selected abaya fabrics are the most popular for premium abayas because they combine elegant drape, opacity, comfort, and a refined finish."
  },
  {
    question: "Can I request fabric samples before placing a large order?",
    answer:
      "Absolutely. Sample requests help buyers assess drape, touch, finish, and color suitability before confirming production or retail orders."
  },
  {
    question: "Do you offer export support outside the UAE?",
    answer:
      "Yes. We serve regional and international buyers and can coordinate documentation and shipping support for export orders."
  },
  {
    question: "Are your fabrics suitable for designers and small boutiques?",
    answer:
      "Yes. We work with both large-scale manufacturers and smaller boutiques or designer studios that need premium, dependable fabric sourcing."
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: "choosing-premium-nida-for-abaya-collections",
    title: "Choosing Premium Nida for Modern Abaya Collections",
    excerpt:
      "A practical guide to evaluating drape, opacity, softness, and wearability when sourcing premium nida.",
    date: "2026-04-10",
    category: "Sourcing",
    readTime: "4 min read"
  },
  {
    slug: "textile-trends-shaping-boutique-fashion",
    title: "Textile Trends Shaping Boutique Fashion in the Gulf",
    excerpt:
      "From breathable luxury blends to elevated texture stories, here is what buyers are prioritizing this season.",
    date: "2026-03-21",
    category: "Trends",
    readTime: "5 min read"
  },
  {
    slug: "wholesale-fabric-buying-checklist",
    title: "A Wholesale Fabric Buying Checklist for Growing Brands",
    excerpt:
      "Key questions every apparel label should ask before committing to a wholesale textile partner.",
    date: "2026-02-15",
    category: "Wholesale",
    readTime: "6 min read"
  }
];

export const galleryImages = [
  "/images/gallery-textile-1.svg",
  "/images/gallery-textile-2.svg",
  "/images/gallery-textile-3.svg",
  "/images/gallery-textile-4.svg",
  "/images/gallery-textile-5.svg",
  "/images/gallery-textile-6.svg"
];
