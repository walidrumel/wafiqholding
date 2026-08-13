import { createFileRoute } from "@tanstack/react-router";
import { CtaLink } from "@/components/site/CtaButton";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { principles } from "@/data/principles";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Our Vision | Wafiq Holdings" },
      {
        name: "description",
        content:
          "Wafiq Holdings is built to compound value for decades through ownership, disciplined capital allocation, and patience.",
      },
      { property: "og:title", content: "Our Vision | Wafiq Holdings" },
      {
        property: "og:description",
        content:
          "Build a company that compounds value for decades — the long-term vision of Wafiq Holdings.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/vision" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/vision" }],
  }),
  component: VisionPage,
});

function VisionPage() {
  return (
    <>
      <Section tone="dark" className="pt-24">
        <div className="max-w-4xl">
          <p className="eyebrow text-gold">Our Vision</p>
          <h1 className="mt-6 text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Build a company that compounds value for decades.
          </h1>
          <div className="mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-navy-foreground/70 sm:text-lg">
            <p>
              Wafiq Holdings is being built with a long-term mindset. Our ambition is to
              create a diversified holding company by building, acquiring, and investing
              in exceptional businesses.
            </p>
            <p>
              We believe meaningful value is created through ownership, disciplined
              capital allocation, continuous learning, and patience.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="How We Think" title="Principles that guide every decision." />
        <ul className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, i) => (
            <Reveal as="li" key={principle.title} delay={i * 60} className="bg-card p-8">
              <p className="font-display text-2xl text-gold">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-xl">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="muted">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <SectionHeading
            eyebrow="Build. Acquire. Invest. Grow."
            title="Long-term partners are always welcome."
            className="max-w-xl"
          />
          <CtaLink to="/contact">Contact Us</CtaLink>
        </div>
      </Section>
    </>
  );
}