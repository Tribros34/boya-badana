import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { FloatingButtons } from "@/components/FloatingButtons";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: "İstanbul Boya Badana | 1 Günde Temiz ve Garantili Boyacı Hizmeti",
    template: "%s",
  },
  description:
    "İstanbul'da eşyalı ve boş evler için temiz, planlı ve şeffaf fiyatlı boya badana hizmeti. Ücretsiz keşif, WhatsApp'tan hızlı teklif ve 1 günde teslim imkanı.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--color-canvas)] font-sans text-[var(--color-text)]">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-20 px-4 py-6 pb-28 sm:px-6 md:pb-10 lg:px-8">
            {children}
          </main>
          <Footer />
          <MobileStickyCTA />
          <FloatingButtons />
        </div>
      </body>
    </html>
  );
}
