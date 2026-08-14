import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-architecture.jpg";
import growthImage from "@/assets/longterm-growth.jpg";
import { CtaLink } from "@/components/site/CtaButton";
import { Reveal } from "@/components/site/Reveal";
import { Container, Section, SectionHeading } from "@/components/site/Section";
import { pillars, principles } from "@/data/principles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wafiq Holdings | Building Businesses. Investing for the Long Term." },
      {
        name: "description",
        content:
          "Wafiq Holdings is a privately held company focused on building, acquiring, and investing in businesses for long-term value creation.",
      },
      {
        property: "og:title",
        content: "Wafiq Holdings | Building Businesses. Investing for the Long Term.",
      },
      {
        property: "og:description",
        content:
          "A long-term holding company focused on building, acquiring, and investing in businesses with durable potential.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy text-navy-foreground">
        <img
          src={heroImage}
          alt="Abstract view of a modern high-rise facade at dusk"
          width={1920}
          height={1280}
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
        <Container className="flex min-h-[85vh] flex-col justify-center py-28 sm:py-36">
          <div className="max-w-3xl animate-fade-up">
            <p className="eyebrow text-gold">Build. Acquire. Invest. Grow.</p>
            <h1 className="mt-6 text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Building Businesses. Investing for the Long Term.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
              Wafiq Holdings is a long-term holding company focused on building,
              acquiring, and investing in businesses with durable potential.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <CtaLink to="/about" variant="onDark">
                Explore Wafiq Holdings
              </CtaLink>
              <CtaLink to="/contact" variant="ghostOnDark">
                Contact Us
              </CtaLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Long-Term Approach */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Our Approach"
              title="A Long-Term Approach to Business Ownership"
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Wafiq Holdings is built around a simple idea: great businesses can create
                lasting value when they are operated with discipline, patience, and a
                long-term perspective.
              </p>
              <p>
                We focus on building businesses, identifying opportunities, allocating
                capital thoughtfully, and creating value over time.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={growthImage}
              alt="Stacked stone forms rising in steps, representing compounding long-term growth"
              width={1200}
              height={1408}
              loading="lazy"
              className="aspect-4/5 w-full object-cover"
            />
          </Reveal>
        </div>
      </Section>

      {/* What We Do */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="What We Do"
          title="Four disciplines, one long-term objective."
        />
        <ul className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal as="li" key={pillar.title} delay={i * 70} className="bg-card p-8">
              <p className="font-display text-2xl text-gold">{pillar.number}</p>
              <h3 className="mt-4 text-xl">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Our Businesses */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Our Businesses"
              title="Building a diversified group of businesses for the long term."
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base leading-relaxed text-muted-foreground">
              Our goal is to build and own businesses across carefully selected
              industries, creating a diversified platform capable of compounding value
              over many years.
            </p>
            <div className="mt-8">
              <CtaLink to="/businesses" variant="outline">
                Learn More
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Investments */}
      <Section tone="dark">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Investments"
              title="Thoughtful Capital Allocation"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-5 text-base leading-relaxed text-navy-foreground/70">
              <p>
                We believe capital should be allocated with patience, discipline, and a
                clear understanding of risk and opportunity.
              </p>
              <p>
                Wafiq Holdings may invest across public markets, private businesses, real
                estate, and other opportunities where we believe attractive long-term
                value can be created.
              </p>
            </div>
            <div className="mt-8">
              <CtaLink to="/investments" variant="ghostOnDark">
                Our Investment Approach
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Vision */}
      <Section>
        <Reveal className="max-w-4xl">
          <p className="eyebrow">Our Vision</p>
          <h2 className="mt-6 text-3xl leading-[1.08] sm:text-5xl">
            Build a company that compounds value for decades.
          </h2>
          <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground">
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
          <div className="mt-10">
            <CtaLink to="/vision" variant="outline">
              Read Our Vision
            </CtaLink>
          </div>
        </Reveal>
      </Section>

      {/* How We Think */}
      <Section tone="muted">
        <SectionHeading eyebrow="How We Think" title="Long-Term Principles" />
        <dl className="mt-14 border-t border-border">
          {principles.map((principle, i) => (
            <Reveal
              key={principle.title}
              delay={i * 50}
              className="grid gap-3 border-b border-border py-8 md:grid-cols-[minmax(0,1fr)_2fr] md:gap-12"
            >
              <dt className="font-display text-xl sm:text-2xl">{principle.title}</dt>
              <dd className="text-base leading-relaxed text-muted-foreground">
                {principle.description}
              </dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      {/* Contact CTA */}
      <Section tone="dark">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <SectionHeading
            tone="dark"
            eyebrow="Let's Connect"
            title="Business opportunities, partnerships, and acquisitions."
            className="max-w-2xl"
          />
          <CtaLink to="/contact" variant="onDark">
            Contact Us
          </CtaLink>
        </div>
      </Section>
    </>
  );
}
