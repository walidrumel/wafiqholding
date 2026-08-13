import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { site } from "@/data/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Wafiq Holdings" },
      {
        name: "description",
        content:
          "How Wafiq Holdings handles information submitted through wafiqholdings.com.",
      },
      { property: "og:title", content: "Privacy Policy | Wafiq Holdings" },
      {
        property: "og:description",
        content: "How Wafiq Holdings handles information submitted through this website.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Section>
      <div className="max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 text-4xl leading-[1.05] sm:text-5xl">Privacy Policy</h1>
        <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            This policy explains how {site.name} handles information submitted through
            this website. A complete policy will be published as the company's operations
            expand.
          </p>
          <h2 className="pt-4 text-2xl text-foreground">Information we collect</h2>
          <p>
            We collect only the information you choose to send us through the contact
            form, such as your name, email address, company, phone number, and message.
          </p>
          <h2 className="pt-4 text-2xl text-foreground">How information is used</h2>
          <p>
            Information you submit is used solely to respond to your enquiry. We do not
            sell information to third parties.
          </p>
          <h2 className="pt-4 text-2xl text-foreground">Contact</h2>
          <p>
            Questions about this policy can be sent through our contact page.
          </p>
        </div>
      </div>
    </Section>
  );
}