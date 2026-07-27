import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InnerPageHero } from "@/components/sections/InnerPageHero";
import { brand } from "@/constants/brand";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Blanco Steel Detailing Services collects, uses, and protects your information.",
  path: "/privacy-policy",
});

// 🔶 Placeholder — replace with counsel-reviewed privacy policy text before launch.
export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <InnerPageHero
        title="Privacy Policy"
        description="This page outlines how we handle information submitted through this website."
      />
      <section className="section-spacing">
        <div className="container-page max-w-3xl space-y-6 text-neutral-600">
          <p>
            {brand.name} ("Blanco", "we", "us") respects your privacy. This placeholder policy covers
            information submitted through our contact, quote request, job application, and newsletter forms.
          </p>
          <h2 className="text-h4 text-charcoal">Information We Collect</h2>
          <p>
            Name, email, company, phone number, project details, and resume/CV files submitted voluntarily
            through this site's forms.
          </p>
          <h2 className="text-h4 text-charcoal">How We Use It</h2>
          <p>
            To respond to quote requests and inquiries, evaluate job applications, and — where you've opted
            in — send occasional newsletter updates.
          </p>
          <h2 className="text-h4 text-charcoal">Contact</h2>
          <p>
            Questions about this policy can be sent to{" "}
            <a href={`mailto:${brand.contact.emails.admin}`} className="text-brand underline">
              {brand.contact.emails.admin}
            </a>
            .
          </p>
          <p className="text-sm text-neutral-400">
            🔶 This is placeholder text — replace with a counsel-reviewed privacy policy before launch.
          </p>
        </div>
      </section>
    </>
  );
}
