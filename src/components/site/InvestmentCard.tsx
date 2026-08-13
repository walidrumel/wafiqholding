import type { Investment } from "@/data/types";

const categoryLabels: Record<Investment["category"], string> = {
  "public-markets": "Public Markets",
  "private-business": "Private Business",
  "real-estate": "Real Estate",
  other: "Other",
};

/** Card used once real investments are published. Currently unused by design. */
export function InvestmentCard({ investment }: { investment: Investment }) {
  return (
    <article className="flex h-full flex-col border border-border bg-card p-7 transition-colors hover:border-gold/60">
      <p className="eyebrow">{categoryLabels[investment.category]}</p>
      <h3 className="mt-3 text-2xl">{investment.name}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {investment.description}
      </p>
      <p className="mt-6 border-t border-border pt-5 text-sm capitalize text-muted-foreground">
        {investment.status}
        {investment.investmentDate ? ` · ${investment.investmentDate}` : ""}
      </p>
    </article>
  );
}