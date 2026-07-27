import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerPageHero } from "@/components/sections/InnerPageHero";
import { brand } from "@/constants/brand";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Blanco Steel Detailing Services collects, uses, and protects your information.",
  path: "/privacy-policy",
});

const sections = [
  {
    title: "Introduction",
    content: `Blanco Steel Detailing Services Pvt Ltd ("Blanco," "we," "us," or "our") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or interact with us.

If you have any questions or concerns about this policy, or our practices with regards to your personal information, please contact us at hr@blanco-sdspl.com.`,
  },
  {
    title: "Information We Collect",
    content: `We collect personal information that you voluntarily provide to us when you contact us through our website, apply for a job opening, or otherwise engage with us.

The personal information we collect may include:
• Full name
• Email address
• Phone number
• Resume and professional background information
• Any other information you choose to provide

We do not collect sensitive personal information (such as financial data, government identification numbers, or health information) through this website.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use the personal information we collect for the following purposes:

• To respond to your inquiries and communicate with you
• To process and evaluate job applications
• To contact you regarding career opportunities at Blanco
• To improve our website and user experience
• To comply with legal obligations

We do not sell, rent, or share your personal information with third parties for their marketing purposes.`,
  },
  {
    title: "Information Retention",
    content: `We retain personal information for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.

For job applicants, we may retain your information for a period of up to 12 months after our last interaction with you, in case a suitable opportunity arises. After this period, your information will be securely deleted unless you request otherwise.`,
  },
  {
    title: "Information Security",
    content: `We implement appropriate technical and organizational security measures designed to protect the personal information we process. However, despite our safeguards, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.

We encourage you to not send us sensitive information through unsecured channels.`,
  },
  {
    title: "Your Privacy Rights",
    content: `Depending on your location, you may have certain rights regarding your personal information, including:

• The right to access personal information we hold about you
• The right to correct inaccurate or incomplete information
• The right to request deletion of your personal information
• The right to withdraw consent at any time

To exercise any of these rights, please contact us at hr@blanco-sdspl.com. We will respond to your request within 30 days.`,
  },
  {
    title: "Cookies & Tracking",
    content: `Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences.

We do not use cookies for advertising or cross-site tracking purposes. Any analytics data collected is used solely to improve the website experience.`,
  },
  {
    title: "Third-Party Links",
    content: `Our website may contain links to third-party websites, including LinkedIn and other professional platforms. We are not responsible for the privacy practices of these third parties. We encourage you to read the privacy policy of any third-party site you visit.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. The updated version will be indicated by an updated date at the top of this page. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.`,
  },
  {
    title: "Contact Us",
    content: `If you have questions or comments about this Privacy Policy, please contact us at:

Blanco Steel Detailing Services Pvt Ltd
#3051, 1st, 2nd, & 3rd Floor, SPYR Arcade,
Ring Road Near Mahamane Circle, Dattagalli
3rd Stage, Mysore, Karnataka, India – 570033
Email: hr@blanco-sdspl.com
Phone: +91 821 295 7958`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <InnerPageHero
        title="Privacy Policy"
        description="This page outlines how we handle information submitted through this website."
      />
      <section className="section-spacing">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-12">
            {sections.map((section, i) => (
              <RevealOnScroll key={i}>
                <h2 className="mb-4 border-b border-neutral-200 pb-3 text-h5 font-bold text-charcoal">
                  {section.title}
                </h2>
                <div className="whitespace-pre-line font-outfit text-[15px] leading-[1.85] text-neutral-600">
                  {section.content}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
