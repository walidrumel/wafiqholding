import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CtaLink } from "@/components/site/CtaButton";
import { Container } from "@/components/site/Section";
import { futureNav, mainNav, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [...mainNav, ...futureNav.filter((l) => l.enabled)];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/90 backdrop-blur"
          : "border-transparent bg-background",
      )}
    >
      <Container className="flex h-18 items-center justify-between gap-6 py-4">
        <Link
          to="/"
          className="font-display text-lg tracking-tight text-foreground sm:text-xl"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CtaLink to="/contact" variant="solid" className="px-5 py-2.5">
            Contact Us
          </CtaLink>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-foreground lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <Container className="py-4">
            <nav className="flex flex-col" aria-label="Mobile">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-4 text-base text-muted-foreground data-[status=active]:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <CtaLink to="/contact" variant="solid" className="mt-6 w-full">
              Contact Us
            </CtaLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}