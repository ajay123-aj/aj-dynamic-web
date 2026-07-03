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
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[1.5rem] border border-white/60 bg-white/45 px-4 py-2.5 shadow-[0_16px_50px_rgba(var(--brand-rgb),0.12)] backdrop-blur-2xl backdrop-saturate-150 sm:px-5 sm:py-3">
        <Link href="/#top" className="group flex items-center gap-3">
          <span className="animate-logo-in inline-flex shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt={site.name}
              className="h-11 w-11 rounded-full object-cover shadow-lg shadow-brand/25 ring-1 ring-white/40 transition duration-300 group-hover:scale-110 group-hover:-rotate-6"
            />
          </span>
          <span className="leading-tight">
            <span className="animate-brand-in block text-base font-bold text-brand sm:text-lg">
              {site.name}
            </span>
            <span className="animate-brand-in-delayed hidden text-[11px] font-semibold uppercase tracking-[0.28em] text-gold sm:block">
              {site.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/50 bg-white/40 p-1 backdrop-blur md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-sm font-semibold text-ink/75 transition hover:bg-brand hover:text-white"
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
            className="rounded-full border border-brand/25 bg-white/40 px-4 py-2 text-sm font-semibold text-brand backdrop-blur transition hover:bg-brand-soft"
          >
            WhatsApp
          </a>
          <CartButton />
          <Link
            href="/products"
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:-translate-y-0.5 hover:bg-brand-dark"
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
            className="grid h-10 w-10 place-items-center rounded-full border border-brand/20 bg-white/40 text-xl text-brand backdrop-blur"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-[1.5rem] border border-white/60 bg-white/55 shadow-[0_16px_50px_rgba(var(--brand-rgb),0.12)] backdrop-blur-2xl backdrop-saturate-150 md:hidden">
          <nav className="flex flex-col gap-1 p-3">
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
