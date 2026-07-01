import Link from "next/link";
import { navLinks, site, whatsappLink } from "@/const/contact";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-white/60 bg-brand-dark text-white/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-lg ring-1 ring-gold/40">
              👑
            </span>
            <span className="text-lg font-bold text-white">
              {site.name}
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Premium wedding safa, talwar rental and royal accessories — styled
            for grand celebrations.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-gold-soft">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-white/70 transition hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.28em] text-gold-soft">
            Contact
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>Mobile: {site.phoneDisplay}</li>
            <li>Email: {site.email}</li>
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-white transition hover:bg-whatsapp-dark"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/50">
        © {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
