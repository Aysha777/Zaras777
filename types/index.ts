export interface NavLink {
  label: string;
  href: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface Product {
  name: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  applications: string[];
}

export interface Testimonial {
  name: string;
  company: string;
  quote: string;
}

export interface Statistic {
  label: string;
  value: number;
  suffix?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}
