import type { Business } from "@/data/types";

/** Card used once real businesses are published. Currently unused by design. */
export function BusinessCard({ business }: { business: Business }) {
  return (
    <article className="group flex h-full flex-col border border-border bg-card transition-colors hover:border-gold/60">
      {business.image ? (
        <img
          src={business.image}
          alt={`${business.name} — ${business.industry}`}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover"
        />
      ) : null}
      <div className="flex flex-1 flex-col p-7">
        <p className="eyebrow">{business.industry}</p>
        <h3 className="mt-3 text-2xl">{business.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {business.description}
        </p>
        <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5 text-sm">
          <div>
            <dt className="eyebrow">Status</dt>
            <dd className="mt-1 capitalize">{business.status}</dd>
          </div>
          {business.ownershipPercentage !== undefined ? (
            <div>
              <dt className="eyebrow">Ownership</dt>
              <dd className="mt-1">{business.ownershipPercentage}%</dd>
            </div>
          ) : null}
        </dl>
      </div>
    </article>
  );
}