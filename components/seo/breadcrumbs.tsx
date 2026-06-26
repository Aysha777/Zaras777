"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const segmentNames: Record<string, string> = {
  about: "About",
  products: "Products",
  categories: "Categories",
  gallery: "Gallery",
  blog: "Blog",
  contact: "Contact",
  faq: "FAQ"
};

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const items = segments.map((segment, index) => ({
    href: `/${segments.slice(0, index + 1).join("/")}`,
    label: segmentNames[segment] ?? segment.replace(/-/g, " ")
  }));

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
        <li>
          <Link href="/" className="hover:text-brand-gold">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.href} className="flex items-center gap-2">
            <span>/</span>
            <Link href={item.href} className="capitalize hover:text-brand-gold">
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
