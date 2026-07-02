import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
