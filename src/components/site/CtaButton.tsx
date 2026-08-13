import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "onDark" | "ghostOnDark";

const base =
  "inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-200 min-h-11";

const variants: Record<Variant, string> = {
  solid: "bg-navy text-navy-foreground hover:bg-ink",
  outline: "border border-navy/25 text-foreground hover:border-navy hover:bg-navy hover:text-navy-foreground",
  onDark: "bg-navy-foreground text-navy hover:bg-gold hover:text-navy",
  ghostOnDark:
    "border border-navy-foreground/30 text-navy-foreground hover:border-gold hover:text-gold",
};

export function CtaLink({
  to,
  children,
  variant = "solid",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link to={to as never} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}

export function ctaClasses(variant: Variant = "solid", className?: string) {
  return cn(base, variants[variant], className);
}