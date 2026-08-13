import { Link } from "@tanstack/react-router";
import { Container } from "@/components/site/Section";
import { futureNav, mainNav, site } from "@/data/site";

export function Footer() {
  const links = [...mainNav, ...futureNav.filter((l) => l.enabled)];

  return (
    <footer className="bg-navy text-navy-foreground">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div className="max-w-sm">
            <p className="font-display text-xl">{site.name}</p>
            <p className="mt-4 text-sm leading-relaxed text-navy-foreground/65">
              Building businesses. Investing for the long term.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="eyebrow text-gold">Navigation</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    activeOptions={{ exact: link.to === "/" }}
                    className="text-navy-foreground/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-navy-foreground/15 pt-8 text-xs text-navy-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="transition-colors hover:text-gold">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-gold">
              Terms of Use
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}