"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, site, whatsappLink } from "@/const/contact";
import { useCart } from "./CartProvider";

function CartButton() {
  const { count, openCart } = useCart();
  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={`Open cart, ${count} items`}
      className="relative grid h-10 w-10 place-items-center rounded-full border border-brand/20 text-brand transition hover:bg-brand hover:text-white"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <circle cx="9" cy="20" r="1.4" />
        <circle cx="18" cy="20" r="1.4" />
        <path d="M2.5 3h2l2.2 11.2a1.5 1.5 0 0 0 1.5 1.2h8.4a1.5 1.5 0 0 0 1.5-1.2L21 7H6" />
      </svg>
      {count > 0 && (
        <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-gold px-1 text-[11px] font-bold text-brand-dark shadow">
          {count}
        </span>
      )}
    </button>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 glass">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/#top" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-brand text-lg shadow-lg shadow-brand/30 ring-1 ring-gold/40">
            👑
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold text-brand">
              {site.name}
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              {site.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-ink/80 transition hover:bg-brand hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-brand/30 px-4 py-2 text-sm font-semibold text-brand transition hover:bg-brand-soft"
          >
            WhatsApp
          </a>
          <CartButton />
          <Link
            href="/products"
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-dark"
          >
            Shop Now
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <CartButton />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-brand/20 text-xl text-brand"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/60 glass md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-2.5 text-sm font-semibold text-ink/80 transition hover:bg-brand-soft"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-2 flex gap-2">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-full border border-brand/30 px-4 py-2 text-center text-sm font-semibold text-brand"
              >
                WhatsApp
              </a>
              <Link
                href="/products"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-brand px-4 py-2 text-center text-sm font-semibold text-white"
              >
                Shop Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
