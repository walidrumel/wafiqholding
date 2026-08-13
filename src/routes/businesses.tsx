import { createFileRoute } from "@tanstack/react-router";
import { BusinessCard } from "@/components/site/BusinessCard";
import { CtaLink } from "@/components/site/CtaButton";
import { EmptyState } from "@/components/site/EmptyState";
import { Section, SectionHeading } from "@/components/site/Section";
import { getBusinesses } from "@/data/content";

export const Route = createFileRoute("/businesses")({
  head: () => ({
    meta: [
      { title: "Businesses | Wafiq Holdings" },
      {
        name: "description",
        content:
          "Wafiq Holdings is developing a portfolio of businesses across selected industries, built for long-term ownership.",
      },
      { property: "og:title", content: "Businesses | Wafiq Holdings" },
      {
        property: "og:description",
        content:
          "Building a diversified group of businesses across carefully selected industries.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/businesses" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/businesses" }],
  }),
  component: BusinessesPage,
});

function BusinessesPage() {
  const businesses = getBusinesses().filter((b) => b.publishStatus === "published");

  return (
    <>
      <Section className="pb-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Our Businesses</p>
          <h1 className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Building a diversified group of businesses for the long term.
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Our goal is to build and own businesses across carefully selected industries,
            creating a diversified platform capable of compounding value over many years.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        {businesses.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {businesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
        ) : (
          <EmptyState
            eyebrow="Portfolio"
            title="Our portfolio is being built."
            description="Wafiq Holdings is developing a portfolio of businesses across selected industries. As businesses become part of the group, they will appear here."
            action={<CtaLink to="/contact">Contact Us</CtaLink>}
          />
        )}
      </Section>

      <Section tone="muted" className="pt-0">
        <SectionHeading
          eyebrow="Acquisitions"
          title="Businesses we look for."
          lead="We are interested in businesses with strong fundamentals, durable demand, and the potential for long-term improvement under patient ownership."
        />
      </Section>
    </>
  );
}