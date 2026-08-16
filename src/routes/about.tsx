import { createFileRoute } from "@tanstack/react-router";
import { CtaLink } from "@/components/site/CtaButton";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import portraitAsset from "@/assets/wafiq-portrait.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Wafiq Holdings" },
      {
        name: "description",
        content:
          "Wafiq Holdings is a privately held company focused on building, acquiring, and investing in businesses with a long-term ownership mindset.",
      },
      { property: "og:title", content: "About Wafiq Holdings" },
      {
        property: "og:description",
        content:
          "A privately held company focused on long-term ownership, disciplined capital allocation, and continuous improvement.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const sections = [
  {
    title: "Who We Are",
    body: [
      "Wafiq Holdings is a privately held company focused on building, acquiring, and investing in businesses.",
      "We are structured as a holding company so that each business we build or acquire can be operated with independence, supported by a common approach to capital and long-term planning.",
    ],
  },
  {
    title: "What We Believe",
    body: [
      "We believe great businesses create lasting value when they are operated with discipline, patience, and a long-term perspective.",
      "Ownership brings responsibility. Capital should be allocated thoughtfully, with a clear understanding of both risk and opportunity.",
    ],
  },
  {
    title: "How We Operate",
    body: [
      "Our approach is centered on long-term ownership, disciplined capital allocation, and continuous improvement.",
      "We favour fundamentals over trends, measured decisions over speed, and durable operating improvements over short-term results.",
    ],
  },
  {
    title: "Where We Are Going",
    body: [
      "We aim to build a diversified group of businesses that can create lasting value for customers, employees, partners, and owners.",
      "As the group develops, details of the businesses and investments within it will be published here.",
    ],
  },
];

function AboutPage() {
  return (
    <>
      <Section className="pb-10">
        <div className="grid items-start gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="max-w-3xl">
          <p className="eyebrow">About</p>
          <h1 className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            About Wafiq Holdings
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Wafiq Holdings is a privately held company focused on building, acquiring, and
            investing in businesses. Our approach is centered on long-term ownership,
            disciplined capital allocation, and continuous improvement.
          </p>
          </div>
          <figure className="order-first lg:order-none lg:justify-self-end">
            <img
              src={portraitAsset.url}
              alt="Wafiq, founder of Wafiq Holdings"
              loading="lazy"
              className="aspect-[4/5] w-full max-w-xs rounded-sm object-cover shadow-sm"
            />
            <figcaption className="mt-3 text-xs tracking-wide text-muted-foreground">
              Wafiq
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="border-t border-border">
          {sections.map((section, i) => (
            <Reveal
              key={section.title}
              delay={i * 60}
              className="grid gap-6 border-b border-border py-12 md:grid-cols-[minmax(0,1fr)_2fr] md:gap-16"
            >
              <h2 className="text-2xl sm:text-3xl">{section.title}</h2>
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                {section.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <SectionHeading
            tone="dark"
            eyebrow="Build. Acquire. Invest. Grow."
            title="Discuss an opportunity with us."
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