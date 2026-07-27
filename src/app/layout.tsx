import type { Metadata } from "next";
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
import { fontVariables } from "@/lib/fonts";

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
    <html lang="en" className={fontVariables}>
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
