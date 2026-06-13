import { Logo } from "./ui/Logo";
import { nav } from "@/lib/content";

const social = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Pinterest", href: "https://pinterest.com" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-ivory-deep/70">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          <div className="max-w-sm">
            <Logo className="text-2xl" />
            <p className="mt-3 text-xs uppercase tracking-widest text-champagne-dark">
              Imported Fashion
            </p>
            <p className="mt-5 text-sm leading-relaxed text-ink-muted">
              Premium international garment sourcing and wholesale distribution
              for retailers, boutiques, and fashion businesses worldwide.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs uppercase tracking-widest text-ink-muted">
              Explore
            </h2>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="focus-ring rounded text-sm text-ink-soft transition-colors duration-300 hover:text-champagne-dark"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs uppercase tracking-widest text-ink-muted">
              Get in touch
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:wholesale@l-tag.com"
                  className="focus-ring rounded text-ink-soft transition-colors duration-300 hover:text-champagne-dark"
                >
                  wholesale@l-tag.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919061040777"
                  className="focus-ring rounded text-ink-soft transition-colors duration-300 hover:text-champagne-dark"
                >
                  +91 90610 40777
                </a>
              </li>
            </ul>

            <h2 className="mt-8 text-xs uppercase tracking-widest text-ink-muted">
              Follow
            </h2>
            <ul className="mt-4 flex gap-5 text-sm">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring rounded text-ink-soft transition-colors duration-300 hover:text-champagne-dark"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-8 text-xs text-ink-muted sm:flex-row sm:items-center">
          <p>© {year} L-TAG. All rights reserved.</p>
          <p className="tracking-wide">Imported Fashion</p>
        </div>
      </div>
    </footer>
  );
}
