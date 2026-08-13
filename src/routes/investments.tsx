import { createFileRoute } from "@tanstack/react-router";
import { CtaLink } from "@/components/site/CtaButton";
import { EmptyState } from "@/components/site/EmptyState";
import { InvestmentCard } from "@/components/site/InvestmentCard";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { getInvestments } from "@/data/content";

export const Route = createFileRoute("/investments")({
  head: () => ({
    meta: [
      { title: "Investments | Wafiq Holdings" },
      {
        name: "description",
        content:
          "Thoughtful capital allocation: how Wafiq Holdings approaches investing across businesses, markets, and real assets.",
      },
      { property: "og:title", content: "Investments | Wafiq Holdings" },
      {
        property: "og:description",
        content:
          "Capital allocated with patience, discipline, and a clear understanding of risk and opportunity.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/investments" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/investments" }],
  }),
  component: InvestmentsPage,
});

const areas = [
  {
    title: "Private Businesses",
    description:
      "Ownership positions in operating businesses where we can contribute over the long term.",
  },
  {
    title: "Public Markets",
    description:
      "Positions in listed businesses evaluated on fundamentals rather than short-term movements.",
  },
  {
    title: "Real Estate",
    description: "Property and real assets considered for their durability and long horizons.",
  },
  {
    title: "Selected Opportunities",
    description:
      "Other opportunities where we believe attractive long-term value can be created.",
  },
];

function InvestmentsPage() {
  const investments = getInvestments().filter((i) => i.publishStatus === "published");

  return (
    <>
      <Section className="pb-10">
        <div className="max-w-3xl">
          <p className="eyebrow">Investments</p>
          <h1 className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Long-term capital allocation.
          </h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              We believe capital should be allocated with patience, discipline, and a clear
              understanding of risk and opportunity.
            </p>
            <p>
              Wafiq Holdings may invest across public markets, private businesses, real
              estate, and other opportunities where we believe attractive long-term value
              can be created.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <ul className="grid gap-px border border-border bg-border sm:grid-cols-2">
          {areas.map((area, i) => (
            <Reveal as="li" key={area.title} delay={i * 60} className="bg-card p-8">
              <h2 className="text-xl">{area.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {area.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="muted" className="pt-0">
        {investments.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {investments.map((investment) => (
              <InvestmentCard key={investment.id} investment={investment} />
            ))}
          </div>
        ) : (
          <EmptyState
            eyebrow="Portfolio"
            title="Investment activity will be published here."
            description="We do not publish speculative or illustrative holdings. As investments are made and become appropriate to disclose, they will be listed on this page."
            action={<CtaLink to="/contact">Contact Us</CtaLink>}
          />
        )}
        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
          The information on this page is provided for general information only. It is not
          investment advice and is not an offer to buy or sell any security or interest.
        </p>
      </Section>

      <Section tone="dark">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <SectionHeading
            tone="dark"
            eyebrow="Build. Acquire. Invest. Grow."
            title="Have an opportunity to share?"
            className="max-w-xl"
          />
          <CtaLink to="/contact" variant="onDark">
            Contact Us
          </CtaLink>
        </div>
      </Section>
    </>
  );
}