import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { site } from "@/data/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Wafiq Holdings" },
      {
        name: "description",
        content: "The terms that govern use of the Wafiq Holdings website.",
      },
      { property: "og:title", content: "Terms of Use | Wafiq Holdings" },
      {
        property: "og:description",
        content: "The terms that govern use of the Wafiq Holdings website.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Section>
      <div className="max-w-3xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 text-4xl leading-[1.05] sm:text-5xl">Terms of Use</h1>
        <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            These terms govern your use of this website. A complete set of terms will be
            published as the company's operations expand.
          </p>
          <h2 className="pt-4 text-2xl text-foreground">Informational purposes</h2>
          <p>
            Content on this website is provided for general information about {site.name}{" "}
            and does not constitute investment, financial, legal, or tax advice, nor an
            offer to buy or sell any security or interest.
          </p>
          <h2 className="pt-4 text-2xl text-foreground">Intellectual property</h2>
          <p>
            The content and design of this website are the property of {site.name} unless
            stated otherwise.
          </p>
          <h2 className="pt-4 text-2xl text-foreground">Changes</h2>
          <p>These terms may be updated from time to time without prior notice.</p>
        </div>
      </div>
    </Section>
  );
}