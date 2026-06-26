"use client";

import { ArrowUp } from "lucide-react";

import { useScrollTop } from "@/hooks/use-scroll-top";

export function ScrollToTopButton() {
  const visible = useScrollTop();

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-white shadow-xl transition hover:brightness-110"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
