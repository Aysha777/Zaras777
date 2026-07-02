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
    name: "Midnight Floral Abaya Fabric",
    slug: "abaya-fabric",
    description: "Flowing abaya fabric with bold ivory florals on a deep midnight base.",
    image: "/images/categorysections/image.png"
  },
  {
    name: "Rose Contrast Printed Nida",
    slug: "nida-fabric",
    description: "Soft printed nida with high-contrast floral bouquets for modern modestwear.",
    image: "/images/categorysections/image copy.png"
  },
  {
    name: "Sky Mist Dotted Chiffon",
    slug: "chiffon",
    description: "Light chiffon-style fabric with a watercolor blue wash and delicate dotted accents.",
    image: "/images/categorysections/image copy 2.png"
  },
  {
    name: "Regal Garden Printed Cotton",
    slug: "cotton",
    description: "Breathable cotton print with rich floral placement and everyday structure.",
    image: "/images/categorysections/image copy 3.png"
  },
  {
    name: "Noir Bloom Linen Blend",
    slug: "linen",
    description: "Textured linen-blend look with scattered cream florals on a dark ground.",
    image: "/images/categorysections/image copy 4.png"
  },
  {
    name: "Blush Meadow Printed Silk",
    slug: "silk",
    description: "Silk-inspired floral print with a soft blush palette and fluid luxury feel.",
    image: "/images/categorysections/image copy 5.png"
  }
];

export const products: Product[] = [
  {
    name: "Cobalt Arabesque Nida",
    slug: "royal-blue-arabesque-nida",
    category: "Printed Nida Fabric",
    shortDescription: "Ivory nida with sweeping cobalt arabesque artwork and fluid drape for standout abaya collections.",
    description:
      "Cobalt Arabesque Nida pairs a creamy ivory base with oversized cobalt motifs that read bold, clean, and distinctly modern. It is ideal for abayas, coordinated modestwear sets, and statement silhouettes that need movement without losing structure.",
    image: "/images/image.png",
    features: ["Soft nida hand feel", "Graphic arabesque print", "Fluid fall", "Strong boutique presence"],
    applications: ["Printed abayas", "Matching sets", "Designer modestwear", "Capsule drops"]
  },
  {
    name: "Rose Garden Shimmer Silk",
    slug: "cobalt-vine-satin-silk",
    category: "Printed Silk",
    shortDescription: "Lustrous floral silk with a soft shimmer stripe and romantic bouquet print in pastel rose tones.",
    description:
      "Rose Garden Shimmer Silk brings together delicate florals, a luminous ground, and subtle vertical shimmer detailing. It suits labels building elevated scarves, occasion layers, feminine kaftans, and dressier boutique edits.",
    image: "/images/image copy.png",
    features: ["Silk-like sheen", "Subtle shimmer stripe", "Soft floral repeat", "Elegant drape"],
    applications: ["Scarves", "Kaftans", "Occasion overlays", "Luxury dresses"]
  },
  {
    name: "Aqua Meadow Chiffon",
    slug: "ivory-azure-printed-chiffon",
    category: "Printed Chiffon",
    shortDescription: "Airy chiffon-style floral print with lively aqua and marigold color stories for expressive layering.",
    description:
      "Aqua Meadow Chiffon features watercolor florals over bright seasonal grounds, finished with a light shimmer stripe effect that catches movement beautifully. It is suited to scarves, sleeves, overlays, and occasion-led layering pieces.",
    image: "/images/image copy 2.png",
    features: ["Featherlight handle", "Painterly floral print", "Soft transparency", "Colorful movement"],
    applications: ["Layered abayas", "Scarves", "Sleeves", "Occasion accents"]
  },
  {
    name: "Pastel Petal Satin Blend",
    slug: "indigo-bloom-printed-cotton",
    category: "Printed Cotton",
    shortDescription: "Soft pastel floral fabric with a smooth finish for boutique dresses, scarves, and coordinated edits.",
    description:
      "Pastel Petal Satin Blend offers a dreamy watercolor floral story across multiple soft colorways. The finish reads smoother and dressier than an everyday basic, making it a strong option for feminine boutique collections and flowing coordinated looks.",
    image: "/images/image copy 3.png",
    features: ["Smooth face", "Pastel watercolor print", "Soft multi-tone palette", "Boutique-ready finish"],
    applications: ["Scarves", "Day dresses", "Co-ord sets", "Soft occasionwear"]
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
  "/images/categorysections/image.png",
  "/images/categorysections/image copy.png",
  "/images/categorysections/image copy 2.png",
  "/images/categorysections/image copy 3.png",
  "/images/categorysections/image copy 4.png",
  "/images/categorysections/image copy 5.png"
];
