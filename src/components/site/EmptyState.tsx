import type { ReactNode } from "react";

/** Intentional, professional placeholder used until real records exist. */
export function EmptyState({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="border border-border bg-card px-6 py-16 text-center sm:px-14 sm:py-20">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h3 className="mx-auto mt-4 max-w-xl text-2xl leading-tight sm:text-3xl">{title}</h3>
      <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        {description}
      </p>
      {action ? <div className="mt-8 flex justify-center">{action}</div> : null}
    </div>
  );
}