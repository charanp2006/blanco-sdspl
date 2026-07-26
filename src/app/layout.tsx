import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "@/styles/globals.css";
import { MotionConfig } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { BackToTopButton } from "@/components/layout/BackToTopButton";
import { ToastProvider } from "@/components/ui/Toast";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, localBusinessSchema } from "@/lib/structuredData";
import { brand } from "@/constants/brand";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.contact.website),
  title: {
    default: "Blanco Steel Detailing Services Pvt. Ltd.",
    template: "%s | Blanco Steel Detailing Services",
  },
  description:
    "AISC-compliant structural steel detailing built on Tekla Structures. Trusted by USA construction and fabrication clients for accurate, on-time deliverables.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} ${plexMono.variable}`}>
      <body>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <MotionConfig reducedMotion="user">
          <ToastProvider>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
            >
              Skip to content
            </a>
            <ScrollProgressBar />
            <Header />
            <main id="main-content">{children}</main>
            <Footer />
            <BackToTopButton />
          </ToastProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
