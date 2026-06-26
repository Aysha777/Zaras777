import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import type { ReactNode } from "react";

import "@/styles/globals.css";

import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
import { Navbar } from "@/components/layout/navbar";
import { ScrollToTopButton } from "@/components/layout/scroll-to-top";
import { JsonLd } from "@/components/seo/json-ld";
import { createMetadata, siteConfig } from "@/lib/site";
import { organizationSchema } from "@/lib/structured-data";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = createMetadata("Premium Textile Supplier in Abu Dhabi", siteConfig.description);

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        <JsonLd data={organizationSchema()} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
